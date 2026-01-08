// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Memory extends APIResource {
  /**
   * This endpoint updates memory context data.
   *
   * @example
   * ```ts
   * const memory = await client.v1.context.memory.update({
   *   contents: [
   *     {
   *       content:
   *         'Customer asked about pricing for the Scale plan.',
   *       metadata: { messageId: 'msg-1' },
   *       role: 'user',
   *       id: 'msg-1',
   *       createdAt: '2025-01-10T12:34:56.000Z',
   *     },
   *     {
   *       content:
   *         'Updated answer about the Scale plan pricing after discounts.',
   *       metadata: { messageId: 'msg-2' },
   *       role: 'assistant',
   *       id: 'msg-2',
   *       createdAt: '2025-01-10T12:36:00.000Z',
   *     },
   *   ],
   *   memoryId: 'support-thread-TCK-1234',
   * });
   * ```
   */
  update(body: MemoryUpdateParams, options?: RequestOptions): APIPromise<MemoryUpdateResponse> {
    return this._client.post('/api/v1/context/memory/update', { body, ...options });
  }

  /**
   * Deletes memory context data based on provided parameters.
   *
   * @example
   * ```ts
   * await client.v1.context.memory.delete({
   *   memoryId: 'support-thread-TCK-1234',
   *   organization_id: 'org_01HXYZABC',
   *   by_doc: true,
   * });
   * ```
   */
  delete(body: MemoryDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/context/memory/delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MemoryUpdateResponse {
  memory_id: string;

  success: boolean;

  updated_entries: number;
}

export interface MemoryUpdateParams {
  /**
   * Array of updated content objects
   */
  contents: Array<MemoryUpdateParams.Content>;

  /**
   * The ID of the memory to update
   */
  memoryId: string;
}

export namespace MemoryUpdateParams {
  export interface Content {
    /**
     * Unique ID for the message
     */
    id?: string;

    /**
     * The content of the memory entry
     */
    content?: string;

    /**
     * Creation timestamp
     */
    createdAt?: string;

    /**
     * Additional metadata for the memory entry
     */
    metadata?: { [key: string]: unknown };

    /**
     * Role of the message (e.g., user, assistant)
     */
    role?: string;
  }
}

export interface MemoryDeleteParams {
  /**
   * The ID of the memory to delete
   */
  memoryId: string;

  /**
   * Organization ID
   */
  organization_id: string | null;

  /**
   * Delete by document flag
   */
  by_doc?: boolean | null;

  /**
   * Delete by ID flag
   */
  by_id?: boolean | null;

  /**
   * @deprecated Optional user ID
   */
  user_id?: string | null;
}

export declare namespace Memory {
  export {
    type MemoryUpdateResponse as MemoryUpdateResponse,
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryDeleteParams as MemoryDeleteParams,
  };
}
