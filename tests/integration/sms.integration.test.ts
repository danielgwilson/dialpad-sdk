import { beforeAll, describe, it } from 'vitest';
import { DialpadClient } from '../../src/DialpadClient';

let client: DialpadClient;

describe('SMS', () => {
  beforeAll(() => {
    if (!process.env.DIALPAD_API_KEY) {
      throw new Error('DIALPAD_API_KEY is not set');
    }

    client = new DialpadClient(process.env.DIALPAD_API_KEY, {
      environment: 'live',
      companyId: '12345',
    });
  });

  it('should send a simple SMS', async () => {
    const smsResult = await client.sms.sendSms({
      userId: 4743708624257024, // daniel@legion.health
      toNumbers: ['+18135280235'],
      text: 'Test message from Dialpad SDK',
    });
    console.log('SMS result:', smsResult);
  });
});
