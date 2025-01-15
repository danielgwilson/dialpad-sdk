import { Resource } from './Resource';

export class EventSubscriptionResource extends Resource {
  constructor(client: any) {
    super(client, ['event-subscriptions']);
  }

  public async listCallEventSubscriptions(limit = 25, params?: Record<string, any>) {
    return super.get(['call'], { params: { limit, ...params } });
  }

  public async getCallEventSubscription(subscriptionId: string) {
    return super.get(['call', subscriptionId]);
  }

  public async putCallEventSubscription(subscriptionId: string, data: Record<string, any>) {
    return super.put(['call', subscriptionId], data);
  }

  public async deleteCallEventSubscription(subscriptionId: string) {
    return super.deleteReq(['call', subscriptionId]);
  }

  // Similarly for SMS subscriptions
  public async listSmsEventSubscriptions(limit = 25, params?: Record<string, any>) {
    return super.get(['sms'], { params: { limit, ...params } });
  }

  public async getSmsEventSubscription(subscriptionId: string) {
    return super.get(['sms', subscriptionId]);
  }

  public async putSmsEventSubscription(subscriptionId: string, data: Record<string, any>) {
    return super.put(['sms', subscriptionId], data);
  }

  public async deleteSmsEventSubscription(subscriptionId: string) {
    return super.deleteReq(['sms', subscriptionId]);
  }
}
