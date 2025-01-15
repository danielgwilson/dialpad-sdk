import { Resource } from './Resource';

export class ContactResource extends Resource {
  constructor(client: any) {
    super(client, ['contacts']);
  }

  public async list(limit = 25, params?: Record<string, any>) {
    return super.get([], { params: { limit, ...params } });
  }

  public async create(data: Record<string, any>) {
    return super.post([], data);
  }

  public async delete(contactId: number) {
    return super.deleteReq([contactId]);
  }

  public async get(pathSegments?: (string | number)[], config?: any) {
    if (typeof pathSegments?.[0] === 'number') {
      return super.get([pathSegments[0]], config);
    }
    return super.get(pathSegments, config);
  }

  public async patch(pathSegments?: (string | number)[], data?: any) {
    if (typeof pathSegments?.[0] === 'number') {
      return super.patch([pathSegments[0]], data);
    }
    return super.patch(pathSegments, data);
  }
}
