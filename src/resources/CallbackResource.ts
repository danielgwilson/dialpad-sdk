import { Resource } from './Resource';

export class CallbackResource extends Resource {
  constructor(client: any) {
    super(client, ['callback']);
  }

  public async enqueueCallback(callCenterId: number, phoneNumber: string) {
    const body = { call_center_id: callCenterId, phone_number: phoneNumber };
    return super.post([], body);
  }

  public async validateCallback(callCenterId: number, phoneNumber: string) {
    const body = { call_center_id: callCenterId, phone_number: phoneNumber };
    return super.post(['validate'], body);
  }
}
