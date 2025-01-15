import { Resource } from './Resource';

export class OfficeResource extends Resource {
  constructor(client: any) {
    super(client, ['offices']);
  }

  public async list(limit = 25, params?: Record<string, any>) {
    return super.get([], { params: { limit, ...params } });
  }

  public async getOffice(officeId: number) {
    return super.get([officeId]);
  }

  public async assignNumber(officeId: number, data: Record<string, any>) {
    return super.post([officeId, 'assign_number'], data);
  }

  public async getOperators(officeId: number) {
    return super.get([officeId, 'operators']);
  }

  public async unassignNumber(officeId: number, numberE164: string) {
    return super.post([officeId, 'unassign_number'], { number: numberE164 });
  }

  public async getCallCenters(officeId: number, limit = 25, params?: Record<string, any>) {
    return super.get([officeId, 'callcenters'], {
      params: { limit, ...params },
    });
  }

  public async getDepartments(officeId: number, limit = 25, params?: Record<string, any>) {
    return super.get([officeId, 'departments'], {
      params: { limit, ...params },
    });
  }

  public async getPlan(officeId: number) {
    return super.get([officeId, 'plan']);
  }
}
