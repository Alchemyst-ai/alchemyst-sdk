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
   * await client.v1.context.memory.update();
   * ```
   */
  update(body: MemoryUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/context/memory/update', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Deletes memory context data based on provided parameters
   *
   * @example
   * ```ts
   * await client.v1.context.memory.delete();
   * ```
   */
  delete(body: MemoryDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/context/memory/delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint adds memory context data, fetching chat history if needed.
   *
   * @example
   * ```ts
   * await client.v1.context.memory.add();
   * ```
   */
  add(body: MemoryAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/v1/context/memory/add', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MemoryUpdateParams {
  /**
   * Array of updated content objects
   */
  contents?: Array<MemoryUpdateParams.Content>;

  /**
   * The ID of the memory to update
   */
  memoryId?: string;
}

export namespace MemoryUpdateParams {
  export interface Content {
    content?: string;

    [k: string]: unknown;
  }
}

export interface MemoryDeleteParams {
  /**
   * The ID of the memory to delete
   */
  memoryId?: string;

  /**
   * Optional organization ID
   */
  organization_id?: string | null;

  /**
   * Optional user ID
   */
  user_id?: string | null;
}

export interface MemoryAddParams {
  /**
   * Array of content objects with additional properties allowed
   */
  contents?: Array<MemoryAddParams.Content>;

  /**
   * The ID of the memory
   */
  memoryId?: string;
}

export namespace MemoryAddParams {
  export interface Content {
    content?: string;

    [k: string]: unknown;
  }
}

export declare namespace Memory {
  export {
    type MemoryUpdateParams as MemoryUpdateParams,
    type MemoryDeleteParams as MemoryDeleteParams,
    type MemoryAddParams as MemoryAddParams,
  };
}
