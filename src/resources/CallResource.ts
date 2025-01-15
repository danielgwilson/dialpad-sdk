import { Resource } from './Resource';

export class CallResource extends Resource {
  constructor(client: any) {
    super(client, ['call']);
  }

  public async initiateCall(phoneNumber: string, userId: number, data?: Record<string, unknown>) {
    const body = {
      phone_number: phoneNumber,
      user_id: userId,
      ...data,
    };
    return super.post([], body);
  }

  public async getInfo(callId: number) {
    return super.get([callId]);
  }
}
