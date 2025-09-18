// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AlchemystAI from 'alchemystai';

const client = new AlchemystAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource context', () => {
  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.v1.context.delete({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('add', async () => {
    const responsePromise = client.v1.context.add({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.v1.context.search({
      minimum_similarity_threshold: 0.5,
      query: 'search query for user preferences',
      similarity_threshold: 0.8,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.v1.context.search({
      minimum_similarity_threshold: 0.5,
      query: 'search query for user preferences',
      similarity_threshold: 0.8,
      metadata: {},
      scope: 'internal',
      user_id: 'user123',
    });
  });
});
