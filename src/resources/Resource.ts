/**
 * @file Resource.ts
 *
 * Base resource class that all resource classes extend.
 * Encapsulates repeated logic (like request path building).
 */

import type { DialpadClient } from '../DialpadClient';
import { AxiosRequestConfig } from 'axios';

/**
 * @class Resource
 * @description Abstract base class for resource classes.
 */
export abstract class Resource {
  protected client: DialpadClient;
  protected resourcePath: string[];

  constructor(client: DialpadClient, resourcePath: string[]) {
    this.client = client;
    this.resourcePath = resourcePath;
  }

  /**
   * Helper to build a slash-joined path from the resource path plus additional segments.
   */
  protected buildPath(...segments: (string | number)[]): string {
    return [...this.resourcePath, ...segments].join('/');
  }

  /**
   * Performs an HTTP GET request.
   */
  protected async get<T = any>(
    pathSegments: (string | number)[] = [],
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    const url = this.buildPath(...pathSegments);
    const resp = await this.client.http.get<T>(url, config);
    return resp.data;
  }

  /**
   * Performs an HTTP POST request.
   */
  protected async post<T = any, B = any>(
    pathSegments: (string | number)[] = [],
    body?: B,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    const url = this.buildPath(...pathSegments);
    const resp = await this.client.http.post<T>(url, body, config);
    return resp.data;
  }

  /**
   * Performs an HTTP PATCH request.
   */
  protected async patch<T = any, B = any>(
    pathSegments: (string | number)[] = [],
    body?: B,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    const url = this.buildPath(...pathSegments);
    const resp = await this.client.http.patch<T>(url, body, config);
    return resp.data;
  }

  /**
   * Performs an HTTP PUT request.
   */
  protected async put<T = any, B = any>(
    pathSegments: (string | number)[] = [],
    body?: B,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    const url = this.buildPath(...pathSegments);
    const resp = await this.client.http.put<T>(url, body, config);
    return resp.data;
  }

  /**
   * Performs an HTTP DELETE request.
   */
  protected async deleteReq<T = any, B = any>(
    pathSegments: (string | number)[] = [],
    body?: B,
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    const url = this.buildPath(...pathSegments);
    // We pass `data` in config per axios nuance with DELETE
    const mergedConfig: AxiosRequestConfig = {
      ...config,
      data: body,
    };
    const resp = await this.client.http.delete<T>(url, mergedConfig);
    return resp.data;
  }
}
