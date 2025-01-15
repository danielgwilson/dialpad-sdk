/**
 * @file BlockedNumberResource.ts
 */
import { Resource } from './Resource';

interface BlockNumbersPayload {
  numbers: string[];
}

export class BlockedNumberResource extends Resource {
  constructor(client: any) {
    super(client, ['blockednumbers']);
  }

  /**
   * List all numbers that have been flagged as "blocked" via the API.
   * @param limit
   * @param additionalParams
   */
  public async list(limit = 25, additionalParams: Record<string, unknown> = {}): Promise<any> {
    const params = { limit, ...additionalParams };
    return super.get([], { params });
  }

  /**
   * Blocks inbound calls from the specified numbers.
   */
  public async blockNumbers(numbers: string[]): Promise<any> {
    const payload: BlockNumbersPayload = { numbers };
    return super.post(['add'], payload);
  }

  /**
   * Unblocks inbound calls from the specified numbers.
   */
  public async unblockNumbers(numbers: string[]): Promise<any> {
    const payload: BlockNumbersPayload = { numbers };
    return super.post(['remove'], payload);
  }

  /**
   * Gets a number object, provided it has been blocked by the API.
   *
   * If not blocked, the server returns 404.
   */
  public async getNumber(numberE164: string): Promise<any> {
    return super.get([numberE164]);
  }
}
