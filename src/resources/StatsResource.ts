import { Resource } from './Resource';

export class StatsResource extends Resource {
  constructor(client: any) {
    super(client, ['stats']);
  }

  /**
   * Initiate a stats export.
   */
  public async postExport(data: Record<string, any>) {
    return super.post([], data);
  }

  /**
   * Retrieve stats export results.
   */
  public async getExport(exportId: string | number) {
    return super.get([exportId]);
  }
}
