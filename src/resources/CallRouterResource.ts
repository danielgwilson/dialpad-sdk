import { Resource } from './Resource';

export class CallRouterResource extends Resource {
  constructor(client: any) {
    super(client, ['callrouters']);
  }

  public async list(officeId: number, additionalParams?: Record<string, any>) {
    const params = { office_id: officeId, ...additionalParams };
    return super.get([], { params });
  }

  public async create(data: Record<string, any>) {
    return super.post([], data);
  }

  public async delete(routerId: number | string) {
    return super.deleteReq([routerId]);
  }

  public async get(pathSegments?: (string | number)[], config?: any) {
    if (typeof pathSegments?.[0] === 'number' || typeof pathSegments?.[0] === 'string') {
      return super.get([pathSegments[0]], config);
    }
    return super.get(pathSegments, config);
  }

  public async patch(pathSegments?: (string | number)[], data?: any) {
    if (typeof pathSegments?.[0] === 'number' || typeof pathSegments?.[0] === 'string') {
      return super.patch([pathSegments[0]], data);
    }
    return super.patch(pathSegments, data);
  }

  public async assignNumber(routerId: number | string, data: Record<string, any>) {
    return super.post([routerId, 'assign_number'], data);
  }
}
