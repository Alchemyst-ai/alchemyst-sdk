// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MemoryAPI from './memory';
import {
  Memory,
  MemoryAddParams,
  MemoryAddResponse,
  MemoryDeleteParams,
  MemoryUpdateParams,
  MemoryUpdateResponse,
} from './memory';
import * as TracesAPI from './traces';
import { TraceDeleteResponse, TraceListParams, TraceListResponse, Traces } from './traces';
import * as ViewAPI from './view';
import { View, ViewDocsParams, ViewDocsResponse, ViewRetrieveParams, ViewRetrieveResponse } from './view';
import * as AddAsyncAPI from './add-async/add-async';
import {
  AddAsync,
  AddAsyncCancelResponse,
  AddAsyncCreateParams,
  AddAsyncCreateResponse,
} from './add-async/add-async';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Context extends APIResource {
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
  view: ViewAPI.View = new ViewAPI.View(this._client);
  memory: MemoryAPI.Memory = new MemoryAPI.Memory(this._client);
  addAsync: AddAsyncAPI.AddAsync = new AddAsyncAPI.AddAsync(this._client);

  /**
   * This endpoint deletes context data based on the provided parameters. It returns
   * a success or error response depending on the result from the context processor.
   *
   * @example
   * ```ts
   * const context = await client.v1.context.delete({
   *   organization_id: 'org_01HXYZABC',
   *   source: 'support-inbox',
   *   by_doc: true,
   * });
   * ```
   */
  delete(body: ContextDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/api/v1/context/delete', { body, ...options });
  }

  /**
   * This endpoint accepts context data and sends it to a context processor for
   * further handling. It returns a success or error response depending on the result
   * from the context processor.
   *
   * @example
   * ```ts
   * const response = await client.v1.context.add({
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
  add(body: ContextAddParams, options?: RequestOptions): APIPromise<ContextAddResponse> {
    return this._client.post('/api/v1/context/add', { body, ...options });
  }

  /**
   * This endpoint sends a search request to the context processor to retrieve
   * relevant context data based on the provided query.
   *
   * @example
   * ```ts
   * const response = await client.v1.context.search({
   *   minimum_similarity_threshold: 0.5,
   *   query:
   *     'What did the customer ask about pricing for the Scale plan?',
   *   similarity_threshold: 0.8,
   *   scope: 'internal',
   * });
   * ```
   */
  search(params: ContextSearchParams, options?: RequestOptions): APIPromise<ContextSearchResponse> {
    const { metadata, mode, ...body } = params;
    return this._client.post('/api/v1/context/search', { query: { metadata, mode }, body, ...options });
  }
}

export type ContextDeleteResponse = unknown;

export interface ContextAddResponse {
  context_id: string;

  success: boolean;

  processed_documents?: number;
}

export interface ContextSearchResponse {
  contexts?: Array<ContextSearchResponse.Context>;
}

export namespace ContextSearchResponse {
  export interface Context {
    content?: string;

    createdAt?: string;

    /**
     * Only included when query parameter metadata=true
     */
    metadata?: unknown;

    score?: number;

    updatedAt?: string;
  }
}

export interface ContextDeleteParams {
  /**
   * Organization ID
   */
  organization_id: string;

  /**
   * Source identifier for the context
   */
  source: string;

  /**
   * Flag to delete by document
   */
  by_doc?: boolean | null;

  /**
   * Flag to delete by ID
   */
  by_id?: boolean | null;

  /**
   * @deprecated Optional user ID
   */
  user_id?: string | null;
}

export interface ContextAddParams {
  /**
   * Type of context being added
   */
  context_type: 'resource' | 'conversation' | 'instruction';

  /**
   * Array of documents with content and additional metadata
   */
  documents: Array<ContextAddParams.Document>;

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
  metadata?: ContextAddParams.Metadata;
}

export namespace ContextAddParams {
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

export interface ContextSearchParams {
  /**
   * Body param: Minimum similarity threshold
   */
  minimum_similarity_threshold: number;

  /**
   * Body param: The search query used to search for context data
   */
  query: string;

  /**
   * Body param: Maximum similarity threshold (must be >=
   * minimum_similarity_threshold)
   */
  similarity_threshold: number;

  /**
   * Query param: Controls whether metadata is included in the response:
   *
   * - metadata=true → metadata will be included in each context item in the
   *   response.
   * - metadata=false (or omitted) → metadata will be excluded from the response for
   *   better performance.
   */
  metadata?: 'true' | 'false';

  /**
   * Query param: Controls the search mode:
   *
   * - mode=fast → prioritizes speed over completeness.
   * - mode=standard → performs a comprehensive search (default if omitted).
   */
  mode?: 'fast' | 'standard';

  /**
   * Body param: Additional metadata for the search
   */
  body_metadata?: unknown;

  /**
   * Body param: Search scope
   */
  scope?: 'internal' | 'external';

  /**
   * @deprecated Body param: The ID of the user making the request
   */
  user_id?: string;

  /**
   * Body param:Group name(s) for hierarchical scoping
   */
  groupName?: string | string[];
}

Context.Traces = Traces;
Context.View = View;
Context.Memory = Memory;
Context.AddAsync = AddAsync;

export declare namespace Context {
  export {
    type ContextDeleteResponse as ContextDeleteResponse,
    type ContextAddResponse as ContextAddResponse,
    type ContextSearchResponse as ContextSearchResponse,
    type ContextDeleteParams as ContextDeleteParams,
    type ContextAddParams as ContextAddParams,
    type ContextSearchParams as ContextSearchParams,
  };

  export {
    Traces as Traces,
    type TraceListResponse as TraceListResponse,
    type TraceDeleteResponse as TraceDeleteResponse,
    type TraceListParams as TraceListParams,
  };

  export {
    View as View,
    type ViewRetrieveResponse as ViewRetrieveResponse,
    type ViewDocsResponse as ViewDocsResponse,
    type ViewRetrieveParams as ViewRetrieveParams,
    type ViewDocsParams as ViewDocsParams,
  };

  export {
    Memory as Memory,
    type MemoryUpdateResponse as MemoryUpdateResponse,
    type MemoryAddResponse as MemoryAddResponse,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryDeleteParams as MemoryDeleteParams,
    type MemoryAddParams as MemoryAddParams,
  };

  export {
    AddAsync as AddAsync,
    type AddAsyncCreateResponse as AddAsyncCreateResponse,
    type AddAsyncCancelResponse as AddAsyncCancelResponse,
    type AddAsyncCreateParams as AddAsyncCreateParams,
  };
}
