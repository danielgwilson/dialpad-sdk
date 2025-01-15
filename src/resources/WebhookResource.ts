import { Resource } from './Resource';

export class WebhookResource extends Resource {
  constructor(client: any) {
    super(client, ['webhooks']);
  }

  public async listWebhooks(limit = 25, params?: Record<string, any>) {
    return super.get([], { params: { limit, ...params } });
  }

  public async getWebhook(webhookId: string | number) {
    return super.get([webhookId]);
  }

  public async createWebhook(hookUrl: string, data?: Record<string, any>) {
    return super.post([], { hook_url: hookUrl, ...data });
  }

  public async updateWebhook(webhookId: string | number, data: Record<string, any>) {
    return super.patch([webhookId], data);
  }

  public async deleteWebhook(webhookId: string | number) {
    return super.deleteReq([webhookId]);
  }
}
