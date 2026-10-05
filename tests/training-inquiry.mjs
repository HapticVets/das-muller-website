import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import { fileURLToPath } from 'node:url';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
function loadTypeScript(file, imports = {}, globals = {}) {
  const source = ts.transpileModule(fs.readFileSync(path.join(testDirectory, '..', file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  vm.runInNewContext(source, { exports, require: (name) => {
    if (name in imports) return imports[name];
    throw new Error(`Unexpected dependency: ${name}`);
  }, console, Request, Response, URLSearchParams, TextEncoder, AbortSignal, ...globals });
  return exports;
}

const schema = loadTypeScript('src/lib/trainingInquiry.ts');
const complete = (overrides = {}) => ({
  name: 'Jane Owner', email: 'jane@example.com', phone: '330-555-0100', cityState: 'Boardman, OH',
  dogName: 'Rex', breed: 'German Shepherd', dogAge: '3 years', service: 'Boarding only',
  requestedDates: 'November 10–14', goals: 'Calm, safe overnight care.', preferredContact: 'Text',
  companyFax: '', turnstileToken: 'test-token', ...overrides,
});

test('training inquiry validation accepts supported services and rejects tampering', () => {
  assert.equal(schema.parseTrainingInquiry(complete()).success, true);
  for (const override of [{ email: 'bad' }, { email: '', phone: '' }, { email: '', preferredContact: 'Email' }, { phone: '', preferredContact: 'Text' }, { service: 'Unknown' }, { preferredContact: 'Carrier pigeon' }, { goals: '' }, { turnstileToken: '' }]) {
    assert.equal(schema.parseTrainingInquiry(complete(override)).success, false);
  }
  assert.equal(schema.parseTrainingInquiry(complete({ email: '', preferredContact: 'Text' })).success, true);
  assert.equal(schema.parseTrainingInquiry(complete({ phone: '', preferredContact: 'Email' })).success, true);
});

test('email rows contain service, dates, contact preference, and dog details', () => {
  const parsed = schema.parseTrainingInquiry(complete());
  assert.equal(parsed.success, true);
  const text = schema.inquiryEmailRows(parsed.data).flat().join('\n');
  for (const value of ['Boarding only', 'November 10–14', 'Text', 'Rex', 'German Shepherd']) assert.ok(text.includes(value));
});

function routeHarness({ captcha = true, emailFailure = false } = {}) {
  const sent = [];
  let verifications = 0;
  const route = loadTypeScript('src/app/api/training-inquiry/route.ts', {
    '@/lib/trainingInquiry': schema,
    resend: { Resend: class { emails = { send: async (message) => { sent.push(message); return { error: emailFailure ? { name: 'test-rejection' } : null }; } }; } },
  }, {
    process: { env: { TURNSTILE_SECRET_KEY: 'secret', TURNSTILE_EXPECTED_HOSTNAME: 'example.com', RESEND_FROM_EMAIL: 'kennel@example.com', TRAINING_INQUIRY_TO_EMAIL: 'owner@example.com' } },
    fetch: async () => { verifications++; return Response.json({ success: captcha, hostname: 'example.com', action: 'training_inquiry' }); },
  });
  return { ...route, sent, verificationCount: () => verifications };
}
const request = (data) => new Request('https://example.com/api/training-inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });

test('valid inquiry verifies captcha and sends an escaped email', async () => {
  const harness = routeHarness();
  const response = await harness.POST(request(complete({ goals: '<script>unsafe</script>' })));
  assert.equal(response.status, 200);
  assert.equal(harness.verificationCount(), 1);
  assert.equal(harness.sent.length, 1);
  assert.equal(harness.sent[0].replyTo, 'jane@example.com');
  assert.ok(harness.sent[0].html.includes('&lt;script&gt;unsafe&lt;/script&gt;'));
  assert.ok(!harness.sent[0].html.includes('<script>'));
});

test('invalid, spam, captcha-rejected, and provider-failed inquiries do not report success', async () => {
  const invalid = routeHarness();
  assert.equal((await invalid.POST(request(complete({ phone: '', email: '' })))).status, 400);
  assert.equal((await invalid.POST(request(complete({ companyFax: 'spam' })))).status, 400);
  assert.equal(invalid.verificationCount(), 0);
  assert.equal(invalid.sent.length, 0);
  assert.equal((await routeHarness({ captcha: false }).POST(request(complete()))).status, 403);
  assert.equal((await routeHarness({ emailFailure: true }).POST(request(complete()))).status, 502);
});
