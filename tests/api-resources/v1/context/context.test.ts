// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AlchemystAI from '@alchemystai/sdk';

const client = new AlchemystAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource context', () => {
  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.v1.context.delete({
      organization_id: 'org_01HXYZABC',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.v1.context.delete({
      organization_id: 'org_01HXYZABC',
      source: 'support-inbox',
      by_doc: true,
      by_id: false,
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.v1.context.add({
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
  test.skip('add: required and optional params', async () => {
    const response = await client.v1.context.add({
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
});
