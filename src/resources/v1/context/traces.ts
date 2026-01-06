// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Traces extends APIResource {
  /**
   * Returns paginated traces for the authenticated user within their organization.
   *
   * @example
   * ```ts
   * const traces = await client.v1.context.traces.list();
   * ```
   */
  list(
    query: TraceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TraceListResponse> {
    return this._client.get('/api/v1/context/traces', { query, ...options });
  }

  /**
   * Deletes a data trace for the authenticated user with the specified trace ID.
   *
   * @example
   * ```ts
   * const trace = await client.v1.context.traces.delete(
   *   'traceId',
   * );
   * ```
   */
  delete(traceID: string, options?: RequestOptions): APIPromise<TraceDeleteResponse> {
    return this._client.delete(path`/api/v1/context/traces/${traceID}/delete`, options);
  }
}

export interface TraceListResponse {
  pagination: TraceListResponse.Pagination;

  traces: Array<TraceListResponse.Trace>;
}

export namespace TraceListResponse {
  export interface Pagination {
    hasNextPage: boolean;

    hasPrevPage: boolean;

    limit: number;

    page: number;

    total: number;

    totalPages: number;
  }

  export interface Trace {
    _id: string;

    createdAt: string;

    data: unknown;

    organizationId: string;

    type: string;

    updatedAt: string;

    userId: string;
  }
}

export interface TraceDeleteResponse {
  /**
   * The deleted trace data
   */
  trace: TraceDeleteResponse.Trace;
}

export namespace TraceDeleteResponse {
  /**
   * The deleted trace data
   */
  export interface Trace {
    _id?: string;

    createdAt?: string;

    data?: Trace.Data;

    organizationId?: string;

    type?: string;

    updatedAt?: string;

    userId?: string;
  }

  export namespace Trace {
    export interface Data {
      fileName?: string;

      query?: string;

      source?: string;
    }
  }
}

export interface TraceListParams {
  /**
   * Number of traces per page
   */
  limit?: number;

  /**
   * Page number for pagination
   */
  page?: number;
}

export declare namespace Traces {
  export {
    type TraceListResponse as TraceListResponse,
    type TraceDeleteResponse as TraceDeleteResponse,
    type TraceListParams as TraceListParams,
  };
}
