import { Resource } from './Resource';

export class NumberResource extends Resource {
  constructor(client: any) {
    super(client, ['numbers']);
  }

  public async list(limit = 25, params?: Record<string, any>) {
    return super.get([], { params: { limit, ...params } });
  }

  public async getNumber(numberE164: string) {
    return super.get([numberE164]);
  }

  public async unassign(numberE164: string, release = false) {
    return super.deleteReq([numberE164], { release });
  }

  public async assign(numberE164: string, targetId: number, targetType: string, primary = true) {
    const data = {
      number: numberE164,
      target_id: targetId,
      target_type: targetType,
      primary,
    };
    return super.post(['assign'], data);
  }

  public async format(number: string, countryCode?: string) {
    return super.post(['format'], { number, country_code: countryCode });
  }
}
