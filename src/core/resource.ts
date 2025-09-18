// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AlchemystAISDK } from '../client';

export abstract class APIResource {
  protected _client: AlchemystAISDK;

  constructor(client: AlchemystAISDK) {
    this._client = client;
  }
}
