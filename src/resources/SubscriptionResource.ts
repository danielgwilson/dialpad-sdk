import { Resource } from './Resource';

export class SubscriptionResource extends Resource {
  constructor(client: any) {
    super(client, ['subscriptions']);
  }

  public async listAgentStatusEventSubscriptions(limit = 25, params?: Record<string, any>) {
    return super.get(['agent_status'], { params: { limit, ...params } });
  }

  public async getAgentStatusEventSubscription(subscriptionId: string) {
    return super.get(['agent_status', subscriptionId]);
  }

  public async createAgentStatusEventSubscription(
    webhookId: string,
    agentType: string,
    enabled = true,
    data?: Record<string, any>
  ) {
    return super.post(['agent_status'], {
      webhook_id: webhookId,
      agent_type: agentType,
      enabled,
      ...data,
    });
  }

  public async updateAgentStatusEventSubscription(
    subscriptionId: string,
    data?: Record<string, any>
  ) {
    return super.patch(['agent_status', subscriptionId], data);
  }

  public async deleteAgentStatusEventSubscription(subscriptionId: string) {
    return super.deleteReq(['agent_status', subscriptionId]);
  }

  // Similar approach for call event, contact event, sms event, etc.
}
