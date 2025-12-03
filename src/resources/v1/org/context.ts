// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Context extends APIResource {
  /**
   * View organization context
   *
   * @example
   * ```ts
   * const response = await client.v1.org.context.view({
   *   userIds: ['user_123', 'user_456'],
   * });
   * ```
   */
  view(body: ContextViewParams, options?: RequestOptions): APIPromise<ContextViewResponse> {
    return this._client.post('/api/v1/org/context/view', { body, ...options });
  }
}

export interface ContextViewResponse {
  contexts?: unknown;
}

export interface ContextViewParams {
  /**
   * @deprecated
   */
  userIds: Array<string>;
}

export declare namespace Context {
  export { type ContextViewResponse as ContextViewResponse, type ContextViewParams as ContextViewParams };
}
