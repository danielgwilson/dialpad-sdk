import { Resource } from './Resource';

export class CallCenterResource extends Resource {
  constructor(client: any) {
    super(client, ['callcenters']);
  }

  public async getCallCenter(callCenterId: number) {
    return super.get([callCenterId]);
  }

  public async getOperators(callCenterId: number) {
    return super.get([callCenterId, 'operators']);
  }

  public async addOperator(callCenterId: number, userId: number, skillLevel = 100) {
    const data = { user_id: userId, skill_level: skillLevel };
    return super.post([callCenterId, 'operators'], data);
  }

  public async removeOperator(callCenterId: number, userId: number) {
    return super.deleteReq([callCenterId, 'operators'], { user_id: userId });
  }
}
