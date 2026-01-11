// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AlchemystAI from '@alchemystai/sdk';

const client = new AlchemystAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addAsync', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v1.context.addAsync.create({
      context_type: 'resource',
      documents: [{}],
      scope: 'internal',
      source: 'support-inbox',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v1.context.addAsync.create({
      context_type: 'resource',
      documents: [{ content: 'Customer asked about pricing for the Scale plan.' }],
      scope: 'internal',
      source: 'support-inbox',
      metadata: {
        fileName: 'support_thread_TCK-1234.txt',
        fileSize: 2048,
        fileType: 'text/plain',
        groupName: ['support', 'pricing'],
        lastModified: '2025-01-10T12:34:56.000Z',
      },
    });
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.v1.context.addAsync.cancel('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
