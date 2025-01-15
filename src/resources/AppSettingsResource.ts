/**
 * @file AppSettingsResource.ts
 *
 * Provides an interface for the Dialpad "App Settings" resource.
 */
import { z } from 'zod';
import { Resource } from './Resource';

/**
 * Zod schema for `get` arguments
 */
const GetAppSettingsArgsSchema = z.object({
  target_id: z.number().optional(),
  target_type: z.string().optional(),
});
type GetAppSettingsArgs = z.infer<typeof GetAppSettingsArgsSchema>;

/**
 * @class AppSettingsResource
 * @extends Resource
 * @description Provides typed methods for retrieving application settings via the Dialpad API.
 */
export class AppSettingsResource extends Resource {
  constructor(client: any) {
    super(client, ['app', 'settings']);
  }

  /**
   * Retrieves the app settings of the associated OAuth app or the specified target.
   *
   * @param options - Optional target parameters
   * @returns The app settings object from Dialpad
   */
  public async getSettings(options: GetAppSettingsArgs = {}): Promise<any> {
    // Zod validation
    const params = GetAppSettingsArgsSchema.parse(options);
    // We pass these as query params to GET
    return super.get([], { params });
  }
}
