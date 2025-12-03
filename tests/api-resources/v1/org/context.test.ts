// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AlchemystAI from '@alchemystai/sdk';

const client = new AlchemystAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource context', () => {
  // Prism tests are disabled
  test.skip('view: only required params', async () => {
    const responsePromise = client.v1.org.context.view({ userIds: ['user_123', 'user_456'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('view: required and optional params', async () => {
    const response = await client.v1.org.context.view({ userIds: ['user_123', 'user_456'] });
  });
});
