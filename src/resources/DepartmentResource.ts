import { Resource } from './Resource';

export class DepartmentResource extends Resource {
  constructor(client: any) {
    super(client, ['departments']);
  }

  public async get(pathSegments?: (string | number)[], config?: any) {
    if (typeof pathSegments?.[0] === 'number') {
      return super.get([pathSegments[0]], config);
    }
    return super.get(pathSegments, config);
  }

  public async getOperators(departmentId: number) {
    return super.get([departmentId, 'operators']);
  }

  public async addOperator(departmentId: number, operatorId: number, operatorType: string) {
    return super.post([departmentId, 'operators'], {
      operator_id: operatorId,
      operator_type: operatorType,
    });
  }

  public async removeOperator(departmentId: number, operatorId: number) {
    return super.deleteReq([departmentId, 'operators', operatorId]);
  }
}
