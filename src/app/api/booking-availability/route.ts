import { availableSlots } from '@/lib/bookings';
export const dynamic = 'force-dynamic';
export async function GET() {
  try { return Response.json({slots:await availableSlots()},{headers:{'Cache-Control':'no-store'}}); }
  catch { return Response.json({error:'Available times could not be loaded. You can still send an inquiry or call us.'},{status:503,headers:{'Cache-Control':'no-store'}}); }
}
