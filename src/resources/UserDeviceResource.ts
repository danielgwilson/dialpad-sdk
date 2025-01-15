import { Resource } from './Resource';

export class UserDeviceResource extends Resource {
  constructor(client: any) {
    super(client, ['userdevices']);
  }

  public async getDevice(deviceId: string) {
    return super.get([deviceId]);
  }

  public async list(userId: number, limit = 25, additionalParams?: Record<string, any>) {
    const params = { user_id: userId, limit, ...additionalParams };
    return super.get([], { params });
  }
}
