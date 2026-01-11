// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatusAPI from './status';
import { Status, StatusListParams, StatusListResponse, StatusRetrieveResponse } from './status';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class AddAsync extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);

  /**
   * This endpoint accepts context data and queues it for asynchronous processing by
   * the context processor. It returns a success or error response depending on the
   * queuing result.
   *
   * @example
   * ```ts
   * const addAsync = await client.v1.context.addAsync.create({
   *   context_type: 'resource',
   *   documents: [
   *     {
   *       content:
   *         'Customer asked about pricing for the Scale plan.',
   *       containerTag: 'support-emails',
   *       ticketId: 'TCK-1234',
   *     },
   *   ],
   *   scope: 'internal',
   *   source: 'support-inbox',
   *   metadata: {
   *     fileName: 'support_thread_TCK-1234.txt',
   *     fileType: 'text/plain',
   *     groupName: ['support', 'pricing'],
   *     lastModified: '2025-01-10T12:34:56.000Z',
   *     fileSize: 2048,
   *   },
   * });
   * ```
   */
  create(body: AddAsyncCreateParams, options?: RequestOptions): APIPromise<AddAsyncCreateResponse> {
    return this._client.post('/api/v1/context/add-async', { body, ...options });
  }

  /**
   * Attempts to cancel a context add job by job id.
   *
   * - If the job is already completed or failed, returns 404.
   * - If the job is currently running ("active"), returns 409 and cannot be
   *   cancelled.
   * - Only jobs in "waiting" or "delayed" state can be cancelled.
   *
   * @example
   * ```ts
   * const response = await client.v1.context.addAsync.cancel(
   *   'id',
   * );
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<AddAsyncCancelResponse> {
    return this._client.delete(path`/api/v1/context/add-async/${id}/cancel`, options);
  }
}

export interface AddAsyncCreateResponse {
  jobId: string;

  queued: boolean;
}

export interface AddAsyncCancelResponse {
  jobId: string;

  message: string;

  status: string;

  success: boolean;
}

export interface AddAsyncCreateParams {
  /**
   * Type of context being added
   */
  context_type: 'resource' | 'conversation' | 'instruction';

  /**
   * Array of documents with content and additional metadata
   */
  documents: Array<AddAsyncCreateParams.Document>;

  /**
   * Scope of the context
   */
  scope: 'internal' | 'external';

  /**
   * The source of the context data
   */
  source: string;

  /**
   * Additional metadata for the context
   */
  metadata?: AddAsyncCreateParams.Metadata;
}

export namespace AddAsyncCreateParams {
  export interface Document {
    /**
     * The content of the document
     */
    content?: string;

    [k: string]: string | undefined;
  }

  /**
   * Additional metadata for the context
   */
  export interface Metadata {
    /**
     * Name of the file
     */
    fileName?: string;

    /**
     * Size of the file in bytes
     */
    fileSize?: number;

    /**
     * Type/MIME of the file
     */
    fileType?: string;

    /**
     * Array of Group Name to which the file belongs to
     */
    groupName?: Array<string>;

    /**
     * Last modified timestamp
     */
    lastModified?: string;
  }
}

AddAsync.Status = Status;

export declare namespace AddAsync {
  export {
    type AddAsyncCreateResponse as AddAsyncCreateResponse,
    type AddAsyncCancelResponse as AddAsyncCancelResponse,
    type AddAsyncCreateParams as AddAsyncCreateParams,
  };

  export {
    Status as Status,
    type StatusRetrieveResponse as StatusRetrieveResponse,
    type StatusListResponse as StatusListResponse,
    type StatusListParams as StatusListParams,
  };
}
