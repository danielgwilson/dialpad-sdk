import { Resource } from './Resource';
import { z } from 'zod';

// Define types based on API documentation
interface SendSMSResponse {
  id: string;
  status: string;
  created_at: string;
}

// Internal Zod schema for API validation
const SendSMSSchema = z.object({
  text: z.string().nullable(),
  to_numbers: z.array(z.string()).nullable(),
  user_id: z.number().nullable(),
  from_number: z.string().nullable().optional(),
  channel_hashtag: z.string().nullable().optional(),
  infer_country_code: z.boolean().nullable().optional().default(false),
  media: z.string().nullable().optional(),
  sender_group_id: z.number().nullable().optional(),
  sender_group_type: z.string().nullable().optional(),
});

// Public interface using more ergonomic naming
interface SendSMSParams {
  text?: string | null;
  toNumbers?: string[] | null;
  userId?: number | null;
  fromNumber?: string | null;
  channelHashtag?: string | null;
  inferCountryCode?: boolean | null;
  media?: string | null;
  senderGroupId?: number | null;
  senderGroupType?: string | null;
}

export class SMSResource extends Resource {
  constructor(client: any) {
    super(client, ['sms']);
  }

  /**
   * Sends an SMS message to phone numbers or a Dialpad channel on behalf of a user.
   *
   * @param params - SMS parameters including recipient numbers, text, and sender details
   * @returns Promise<SendSMSResponse>
   */
  public async sendSms({
    text,
    toNumbers,
    userId,
    fromNumber,
    channelHashtag,
    inferCountryCode,
    media,
    senderGroupId,
    senderGroupType,
  }: SendSMSParams): Promise<SendSMSResponse> {
    // Transform to API format
    const body = {
      text,
      to_numbers: toNumbers,
      user_id: userId,
      from_number: fromNumber,
      channel_hashtag: channelHashtag,
      infer_country_code: inferCountryCode,
      media,
      sender_group_id: senderGroupId,
      sender_group_type: senderGroupType,
    };

    // Validate request body against schema
    SendSMSSchema.parse(body);

    return super.post<SendSMSResponse>([], body);
  }
}
