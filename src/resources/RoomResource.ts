import { Resource } from './Resource';

export class RoomResource extends Resource {
  constructor(client: any) {
    super(client, ['rooms']);
  }

  public async list(limit = 25, params?: Record<string, any>) {
    return super.get([], { params: { limit, ...params } });
  }

  public async create(data: Record<string, any>) {
    return super.post([], data);
  }

  public async generateInternationalPin(customerRef: string) {
    return super.post(['international_pin'], { customer_ref: customerRef });
  }

  public async delete(roomId: string | number) {
    return super.deleteReq([roomId]);
  }

  public async get(pathSegments?: (string | number)[], config?: any) {
    if (typeof pathSegments?.[0] === 'number') {
      return super.get([pathSegments[0]], config);
    }
    return super.get(pathSegments, config);
  }

  public async update(roomId: number, data: Record<string, any>) {
    return super.patch([roomId], data);
  }

  public async assignNumber(roomId: string | number, data: Record<string, any>) {
    return super.post([roomId, 'assign_number'], data);
  }

  public async unassignNumber(roomId: string | number, numberE164: string) {
    return super.post([roomId, 'unassign_number'], { number: numberE164 });
  }

  public async getDeskphones(roomId: string | number) {
    return super.get([roomId, 'deskphones']);
  }

  public async createDeskphone(
    roomId: string | number,
    macAddress: string,
    name: string,
    phoneType: string
  ) {
    return super.post([roomId, 'deskphones'], {
      mac_address: macAddress,
      name,
      type: phoneType,
    });
  }

  public async deleteDeskphone(roomId: string | number, deskphoneId: string | number) {
    return super.deleteReq([roomId, 'deskphones', deskphoneId]);
  }

  public async getDeskphone(roomId: string | number, deskphoneId: string | number) {
    return super.get([roomId, 'deskphones', deskphoneId]);
  }
}
