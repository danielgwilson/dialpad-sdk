import { Resource } from './Resource';

export class UserResource extends Resource {
  constructor(client: any) {
    super(client, ['users']);
  }

  public async list(limit = 25, params?: Record<string, any>) {
    return super.get([], { params: { limit, ...params } });
  }

  public async create(email: string, officeId: number, data?: Record<string, any>) {
    return super.post([], { email, office_id: officeId, ...data });
  }

  public async delete(userId: number) {
    return super.deleteReq([userId]);
  }

  public async get(pathSegments?: (string | number)[], config?: any) {
    if (typeof pathSegments?.[0] === 'number') {
      return super.get([pathSegments[0]], config);
    }
    return super.get(pathSegments, config);
  }

  public async update(userId: number, data: Record<string, any>) {
    return super.patch([userId], data);
  }

  public async toggleCallRecording(userId: number, data: Record<string, any>) {
    return super.patch([userId, 'activecall'], data);
  }

  public async assignNumber(userId: number, data: Record<string, any>) {
    return super.post([userId, 'assign_number'], data);
  }

  public async initiateCall(userId: number, phoneNumber: string, data?: Record<string, any>) {
    const body = { phone_number: phoneNumber, ...data };
    return super.post([userId, 'initiate_call'], body);
  }

  public async unassignNumber(userId: number, numberE164: string) {
    return super.post([userId, 'unassign_number'], { number: numberE164 });
  }

  public async getDeskphones(userId: number) {
    return super.get([userId, 'deskphones']);
  }

  public async createDeskphone(
    userId: number,
    macAddress: string,
    name: string,
    phoneType: string
  ) {
    return super.post([userId, 'deskphones'], {
      mac_address: macAddress,
      name,
      type: phoneType,
    });
  }

  public async deleteDeskphone(userId: number, deskphoneId: string | number) {
    return super.deleteReq([userId, 'deskphones', deskphoneId]);
  }

  public async getDeskphone(userId: number, deskphoneId: string | number) {
    return super.get([userId, 'deskphones', deskphoneId]);
  }

  public async updateDeskphone(
    userId: number,
    deskphoneId: string | number,
    data: Record<string, any>
  ) {
    return super.patch([userId, 'deskphones', deskphoneId], data);
  }

  public async getPersonas(userId: number) {
    return super.get([userId, 'personas']);
  }

  public async updatePersona(
    userId: number,
    personaId: string | number,
    data: Record<string, any>
  ) {
    return super.patch([userId, 'personas', personaId], data);
  }

  public async toggleDoNotDisturb(userId: number, doNotDisturb: boolean) {
    return super.patch([userId, 'togglednd'], { do_not_disturb: doNotDisturb });
  }
}
