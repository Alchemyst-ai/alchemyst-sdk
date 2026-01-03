// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class View extends APIResource {
  /**
   * Gets the context information for the authenticated user.
   *
   * @example
   * ```ts
   * const view = await client.v1.context.view.retrieve();
   * ```
   */
  retrieve(
    query: ViewRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ViewRetrieveResponse> {
    return this._client.get('/api/v1/context/view', { query, ...options });
  }

  /**
   * Fetches documents view for authenticated user with optional organization
   * context.
   *
   * @example
   * ```ts
   * const response = await client.v1.context.view.docs();
   * ```
   */
  docs(
    query: ViewDocsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ViewDocsResponse> {
    return this._client.get('/api/v1/context/view/docs', { query, ...options });
  }
}

export interface ViewRetrieveResponse {
  /**
   * List of context items
   */
  contexts: Array<ViewRetrieveResponse.Context>;

  success: boolean;
}

export namespace ViewRetrieveResponse {
  export interface Context {
    /**
     * The content of the context item
     */
    content?: string;

    /**
     * Additional metadata for the context
     */
    metadata?: Context.Metadata;
  }

  export namespace Context {
    /**
     * Additional metadata for the context
     */
    export interface Metadata {
      fileName?: string;

      fileSize?: number;

      fileType?: string;

      groupName?: Array<string>;

      lastModified?: string;
    }
  }
}

export interface ViewDocsResponse {
  documents: Array<ViewDocsResponse.Document>;
}

export namespace ViewDocsResponse {
  export interface Document {
    /**
     * Name of the file
     */
    fileName: string;

    /**
     * Size of the file in bytes
     */
    fileSize: number;

    /**
     * Type/MIME of the file
     */
    fileType: string;

    /**
     * Array of group names to which the file belongs
     */
    groupName: Array<string>;

    /**
     * Last modified timestamp (ISO format)
     */
    lastModified: string;
  }
}

export interface ViewRetrieveParams {
  /**
   * Name of the file to retrieve context for
   */
  file_name?: string;

  /**
   * Magic key for context retrieval
   */
  magic_key?: string;
}

export interface ViewDocsParams {
  /**
   * Optional magic key for special access or filtering
   */
  magic_key?: string;
}

export declare namespace View {
  export {
    type ViewRetrieveResponse as ViewRetrieveResponse,
    type ViewDocsResponse as ViewDocsResponse,
    type ViewRetrieveParams as ViewRetrieveParams,
    type ViewDocsParams as ViewDocsParams,
  };
}
