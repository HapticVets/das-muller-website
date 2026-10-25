import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
function load(file,imports={},globals={}) {
  const exports={};
  const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  vm.runInNewContext(code,{exports,require:n=>{if(n in imports)return imports[n];throw new Error(n);},console,Request,Response,URL,URLSearchParams,TextEncoder,AbortSignal,Date,...globals});return exports;
}
const env={NEXT_PUBLIC_SUPABASE_URL:'https://db.example',SUPABASE_SERVICE_ROLE_KEY:'server-secret',RESEND_API_KEY:'mail-secret',RESEND_FROM_EMAIL:'kennel@example.com'};
test('public availability excludes approved slots and never returns customer details',async()=>{
  const lib=load('src/lib/bookings.ts',{}, {process:{env},fetch:async()=>Response.json([{id:'open',starts_at:'2026-11-01T15:00:00Z',ends_at:'2026-11-01T16:00:00Z',booking_requests:[{status:'pending',details:{email:'private@example.com'}}]},{id:'taken',booking_requests:[{status:'approved'}]}])});
  const slots=await lib.availableSlots();assert.equal(slots.length,1);assert.equal(slots[0].id,'open');assert.ok(!JSON.stringify(slots).includes('private'));assert.deepEqual(Object.keys(slots[0]).sort(),['ends_at','id','starts_at']);
});
test('database conflicts give a useful message without leaking database errors',async()=>{
  let lib=load('src/lib/bookings.ts',{}, {process:{env},fetch:async()=>Response.json({code:'P0001',message:'That time is no longer available.'},{status:400})});
  await assert.rejects(lib.requestBooking('s','r',{}),/no longer available/);
  lib=load('src/lib/bookings.ts',{}, {process:{env},fetch:async()=>Response.json({message:'sensitive database details'},{status:500})});
  await assert.rejects(lib.availableSlots(),/temporarily unavailable/);
});
const schema=load('src/lib/trainingInquiry.ts');
const id='10000000-0000-4000-8000-000000000001';
const input={name:'Test',dogName:'Dog',service:'Private training',goals:'Private lesson',email:'test@example.com',phone:'123',preferredContact:'Email',turnstileToken:'verified',bookingSlot:id,submissionId:id};
test('appointment requests require email, private training, and valid identifiers',()=>{
  assert.equal(schema.parseTrainingInquiry(input).success,true);
  for(const override of [{email:''},{service:'Boarding only'},{submissionId:''},{bookingSlot:'bad'}]) assert.equal(schema.parseTrainingInquiry({...input,...override}).success,false);
});
test('saved booking succeeds even if its notification fails; stale slots do not succeed',async()=>{
  let saved=0;
  const harness=(conflict=false)=>load('src/app/api/training-inquiry/route.ts',{
    '@/lib/trainingInquiry':schema,
    '@/lib/bookings':{requestBooking:async()=>{if(conflict)throw new Error('Time no longer available');saved++;return{id};},sendBookingMail:async()=>{throw new Error('Mail down');}},
    resend:{Resend:class{emails={send:async()=>{throw new Error('Must not send duplicate inquiry');}};}},
  },{process:{env:{...env,TURNSTILE_SECRET_KEY:'secret'}},fetch:async()=>Response.json({success:true,action:'training_inquiry'})});
  const req=()=>new Request('https://example.com/api/training-inquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(input)});
  assert.equal((await harness().POST(req())).status,200);assert.equal(saved,1);
  assert.equal((await harness(true).POST(req())).status,409);
});
test('notification retry uses an idempotency key and an uncertain send stays leased',async()=>{
  let patched=false;let message;
  const lib=load('src/lib/bookings.ts',{}, {process:{env},fetch:async(url,options)=>{
    if(url.includes('booking_claim_mail'))return Response.json([{id,kind:'approved'}]);
    if(url.includes('booking_requests?'))return Response.json([{id,slot_id:id,details:{name:'Test',email:'test@example.com',dogName:'Dog'}}]);
    if(url.includes('booking_slots?'))return Response.json([{starts_at:'2026-11-02T15:00:00Z',ends_at:'2026-11-02T16:00:00Z'}]);
    if(url.includes('api.resend.com')){message=options;return Response.json({error:'down'},{status:503});}
    if(options.method==='PATCH')patched=true;
    return Response.json([{kind:'approved'}]);
  }});
  assert.equal(await lib.sendBookingMail(id),false);assert.equal(patched,false);assert.equal(message.headers['Idempotency-Key'],`booking-${id}`);assert.ok(JSON.parse(message.body).text.includes('confirmed'));
});
