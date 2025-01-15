import { Resource } from './Resource';

export class CompanyResource extends Resource {
  constructor(client: any) {
    super(client, ['company']);
  }

  public async get(pathSegments?: (string | number)[], config?: any) {
    return super.get(pathSegments, config);
  }
}
