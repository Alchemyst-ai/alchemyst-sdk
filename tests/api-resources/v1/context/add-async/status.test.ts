// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AlchemystAI from '@alchemystai/sdk';

const client = new AlchemystAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource status', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.v1.context.addAsync.status.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v1.context.addAsync.status.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.context.addAsync.status.list(
        {
          limit: 'limit',
          offset: 'offset',
          type: 'all',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AlchemystAI.NotFoundError);
  });
});
