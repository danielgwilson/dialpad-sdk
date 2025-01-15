/**
 * @file DialpadClient.ts
 *
 * Provides the main DialpadClient class, which centralizes
 * all resource endpoints (in a manner similar to the Python version).
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AppSettingsResource } from './resources/AppSettingsResource';
import { BlockedNumberResource } from './resources/BlockedNumberResource';
import { CallResource } from './resources/CallResource';
import { CallRouterResource } from './resources/CallRouterResource';
import { CallbackResource } from './resources/CallbackResource';
import { CallCenterResource } from './resources/CallCenterResource';
import { CompanyResource } from './resources/CompanyResource';
import { ContactResource } from './resources/ContactResource';
import { DepartmentResource } from './resources/DepartmentResource';
import { EventSubscriptionResource } from './resources/EventSubscriptionResource';
import { NumberResource } from './resources/NumberResource';
import { OfficeResource } from './resources/OfficeResource';
import { RoomResource } from './resources/RoomResource';
import { SMSResource } from './resources/SMSResource';
import { StatsResource } from './resources/StatsResource';
import { SubscriptionResource } from './resources/SubscriptionResource';
import { TranscriptResource } from './resources/TranscriptResource';
import { UserResource } from './resources/UserResource';
import { UserDeviceResource } from './resources/UserDeviceResource';
import { WebhookResource } from './resources/WebhookResource';

/**
 * Identifies the environment: 'live' or 'sandbox'.
 */
export type DialpadEnvironment = 'live' | 'sandbox';

interface DialpadClientOptions {
  /**
   * Use the Dialpad production environment or sandbox environment.
   * If you set `baseUrl`, that overrides the environment.
   */
  environment?: DialpadEnvironment;
  /**
   * You can override the base URL for the API (e.g., for mocking or a dev environment).
   */
  baseUrl?: string;
  /**
   * Optional company ID if your calls need to specify a specific company.
   */
  companyId?: string | number;
  /**
   * Any additional Axios config if needed.
   */
  axiosConfig?: AxiosRequestConfig;
}

/** Official known host endpoints. */
const HOSTS = {
  live: 'https://dialpad.com',
  sandbox: 'https://sandbox.dialpad.com',
};

/**
 * @class DialpadClient
 * @classdesc The main Dialpad API client that exposes resource-based methods.
 *
 * Usage:
 * ```ts
 * const client = new DialpadClient("YOUR_API_TOKEN", { environment: 'live' });
 * const company = await client.company.get();
 * console.log(company);
 * ```
 */
export class DialpadClient {
  private apiToken: string;
  private environment: DialpadEnvironment;
  private baseUrl: string;
  private companyId?: string | number;
  private axiosConfig?: AxiosRequestConfig;

  public readonly http: AxiosInstance;

  // Exposed resources
  public readonly appSettings: AppSettingsResource;
  public readonly blockedNumber: BlockedNumberResource;
  public readonly call: CallResource;
  public readonly callRouter: CallRouterResource;
  public readonly callback: CallbackResource;
  public readonly callcenter: CallCenterResource;
  public readonly company: CompanyResource;
  public readonly contact: ContactResource;
  public readonly department: DepartmentResource;
  public readonly eventSubscription: EventSubscriptionResource;
  public readonly number: NumberResource;
  public readonly office: OfficeResource;
  public readonly room: RoomResource;
  public readonly sms: SMSResource;
  public readonly stats: StatsResource;
  public readonly subscription: SubscriptionResource;
  public readonly transcript: TranscriptResource;
  public readonly user: UserResource;
  public readonly userdevice: UserDeviceResource;
  public readonly webhook: WebhookResource;

  constructor(apiToken: string, options: DialpadClientOptions = {}) {
    this.apiToken = apiToken;
    this.environment = options.environment ?? 'sandbox';
    this.baseUrl = options.baseUrl ?? HOSTS[this.environment];
    this.companyId = options.companyId;
    this.axiosConfig = options.axiosConfig;

    this.http = axios.create({
      baseURL: `${this.baseUrl}/api/v2`,
      ...this.axiosConfig,
    });

    // Add an interceptor for all requests to attach auth headers
    this.http.interceptors.request.use(config => {
      config.headers = config.headers ?? {};
      config.headers['Authorization'] = `Bearer ${this.apiToken}`;
      if (this.companyId) {
        config.headers['DP-Company-ID'] = String(this.companyId);
      }
      return config;
    });

    // instantiate resources
    this.appSettings = new AppSettingsResource(this);
    this.blockedNumber = new BlockedNumberResource(this);
    this.call = new CallResource(this);
    this.callRouter = new CallRouterResource(this);
    this.callback = new CallbackResource(this);
    this.callcenter = new CallCenterResource(this);
    this.company = new CompanyResource(this);
    this.contact = new ContactResource(this);
    this.department = new DepartmentResource(this);
    this.eventSubscription = new EventSubscriptionResource(this);
    this.number = new NumberResource(this);
    this.office = new OfficeResource(this);
    this.room = new RoomResource(this);
    this.sms = new SMSResource(this);
    this.stats = new StatsResource(this);
    this.subscription = new SubscriptionResource(this);
    this.transcript = new TranscriptResource(this);
    this.user = new UserResource(this);
    this.userdevice = new UserDeviceResource(this);
    this.webhook = new WebhookResource(this);
  }

  /**
   * @returns The current company ID set on the client, or undefined if none was set.
   */
  public getCompanyId(): string | number | undefined {
    return this.companyId;
  }

  /**
   * Sets the company ID for subsequent requests.
   * @param companyId
   */
  public setCompanyId(companyId: string | number) {
    this.companyId = companyId;
  }
}
