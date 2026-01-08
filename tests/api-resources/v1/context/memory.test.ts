// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AlchemystAI from '@alchemystai/sdk';

const client = new AlchemystAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource memory', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v1.context.memory.update({
      contents: [{}, {}],
      memoryId: 'support-thread-TCK-1234',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.v1.context.memory.update({
      contents: [
        {
          id: 'msg-1',
          content: 'Customer asked about pricing for the Scale plan.',
          createdAt: '2025-01-10T12:34:56.000Z',
          metadata: { messageId: 'bar' },
          role: 'user',
        },
        {
          id: 'msg-2',
          content: 'Updated answer about the Scale plan pricing after discounts.',
          createdAt: '2025-01-10T12:36:00.000Z',
          metadata: { messageId: 'bar' },
          role: 'assistant',
        },
      ],
      memoryId: 'support-thread-TCK-1234',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.v1.context.memory.delete({
      memoryId: 'support-thread-TCK-1234',
      organization_id: 'org_01HXYZABC',
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
    const response = await client.v1.context.memory.delete({
      memoryId: 'support-thread-TCK-1234',
      organization_id: 'org_01HXYZABC',
      by_doc: true,
      by_id: false,
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.v1.context.memory.add({
      contents: [{ content: 'Customer asked about pricing for the Scale plan.' }],
      sessionId: 'support-thread-TCK-1234',
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
    const response = await client.v1.context.memory.add({
      contents: [
        {
          content: 'Customer asked about pricing for the Scale plan.',
          metadata: { messageId: 'messageId' },
        },
      ],
      sessionId: 'support-thread-TCK-1234',
      metadata: { groupName: ['string'] },
    });
  });
});
