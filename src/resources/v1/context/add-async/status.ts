// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Status extends APIResource {
  /**
   * Returns the status and result of a context add job by job id.
   *
   * @example
   * ```ts
   * const status =
   *   await client.v1.context.addAsync.status.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<StatusRetrieveResponse> {
    return this._client.get(path`/api/v1/context/add-async/${id}/status`, options);
  }

  /**
   * Returns all jobs (active, waiting, delayed, failed, completed) belonging to the
   * authenticated user.
   *
   * @example
   * ```ts
   * const statuses =
   *   await client.v1.context.addAsync.status.list();
   * ```
   */
  list(
    query: StatusListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatusListResponse> {
    return this._client.get('/api/v1/context/add-async/status', { query, ...options });
  }
}

export interface StatusRetrieveResponse {
  jobId: string;

  status: string;

  success: boolean;

  attemptsMade?: number;

  failedReason?: string;

  finishedOn?: number;

  processedOn?: number;

  /**
   * Result of the job (if available)
   */
  result?: unknown;
}

export interface StatusListResponse {
  jobs: Array<StatusListResponse.Job>;

  success: boolean;
}

export namespace StatusListResponse {
  export interface Job {
    attemptsMade: number;

    data: unknown;

    jobId: string;

    status: string;

    failedReason?: string;

    finishedOn?: number;

    processedOn?: number;
  }
}

export interface StatusListParams {
  /**
   * Maximum number of jobs to return
   */
  limit?: string;

  /**
   * Number of jobs to skip before starting to collect the result set
   */
  offset?: string;

  /**
   * Type of jobs to list
   */
  type?: 'all' | 'active' | 'failed' | 'completed';
}

export declare namespace Status {
  export {
    type StatusRetrieveResponse as StatusRetrieveResponse,
    type StatusListResponse as StatusListResponse,
    type StatusListParams as StatusListParams,
  };
}
