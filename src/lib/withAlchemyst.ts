// src/lib/withAlchemyst.ts

import { AlchemystAI } from '../client';
import type { ContextAddParams, ContextSearchParams } from '../resources/v1/context';

/** Input type for the base text generation function **/
export type GenerateTextInput = {
  model: any;
  prompt: string;
};

/** Output type for text generation **/
export type GenerateTextOutput = {
  text: string;
};

/** Base text generation function signature **/
export type GenerateTextFn = (args: GenerateTextInput) => Promise<GenerateTextOutput>;

/** Options for Alchemyst configuration **/
export type WithAlchemystOptions = {
  /**
   * Alchemyst API key. If not provided, will use ALCHEMYST_AI_API_KEY environment variable.
   */
  apiKey?: string | null;

  /**
   * Scope of the context storage.
   * @default 'internal'
   */
  scope?: 'internal' | 'external';

  /**
   * Maximum similarity threshold for context retrieval.
   * @default 0.7
   */
  similarityThreshold?: number;

  /**
   * Minimum similarity threshold for context retrieval.
   * @default 0.5
   */
  minimumSimilarityThreshold?: number;

  /**
   * Type of context being stored.
   * @default 'conversation'
   */
  contextType?: 'resource' | 'conversation' | 'instruction';
};

/** Extended input that includes user and conversation context **/
export type WithMemoryInput = GenerateTextInput & {
  /**
   * Unique identifier for the user
   */
  userId: string;

  /**
   * Unique identifier for the conversation
   */
  conversationId: string;
};

/** Message format stored in memory **/
export type MemoryMessage = {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
};

/**
 * Wraps a text generation function with Alchemyst AI memory management.
 *
 * This function automatically:
 * - Retrieves relevant conversation history before generation
 * - Stores new user messages and assistant responses
 * - Maintains conversation context across sessions
 *
 * @param generateText - The base text generation function to wrap
 * @param options - Optional Alchemyst configuration options
 * @returns A new function that maintains conversation context using Alchemyst
 *
 * @example
 * ```typescript
 * import { withAlchemyst } from '@alchemystai/sdk';
 *
 * // Using environment variable ALCHEMYST_AI_API_KEY
 * const generateWithMemory = withAlchemyst(generateText);
 *
 * // Or with explicit configuration
 * const generateWithMemory = withAlchemyst(generateText, {
 *   apiKey: 'your_api_key',
 *   scope: 'internal',
 *   similarityThreshold: 0.8,
 * });
 *
 * // Use it
 * const result = await generateWithMemory({
 *   model: myModel,
 *   prompt: 'What did we discuss earlier?',
 *   userId: 'user_123',
 *   conversationId: 'conv_456',
 * });
 * ```
 */
export function withAlchemyst(generateText: GenerateTextFn, options?: WithAlchemystOptions) {
  // Create Alchemyst client (will use env var if apiKey not provided)
  const client = new AlchemystAI({
    apiKey: options?.apiKey,
  });

  const scope = options?.scope || 'internal';
  const similarityThreshold = options?.similarityThreshold ?? 0.7;
  const minimumSimilarityThreshold = options?.minimumSimilarityThreshold ?? 0.5;
  const contextType = options?.contextType || 'conversation';

  return async function generateTextWithMemory(args: WithMemoryInput): Promise<GenerateTextOutput> {
    const { model, prompt, userId, conversationId } = args;

    // Create a unique groupName for this conversation using hierarchical structure
    const groupName = ['conversations', userId, conversationId];

    try {
      // Retrieve conversation history from Alchemyst
      const searchParams: ContextSearchParams = {
        query: prompt,
        similarity_threshold: similarityThreshold,
        minimum_similarity_threshold: minimumSimilarityThreshold,
        scope,
        groupName,
      };

      const { contexts } = await client.v1.context.search(searchParams);

      // Build context from retrieved messages
      const context = contexts
        ?.map((ctx) => {
          try {
            const message = JSON.parse(ctx.content || '') as MemoryMessage;
            return `${message.role === 'user' ? 'User: ' : 'Assistant: '}${message.content}`;
          } catch {
            return ctx.content || '';
          }
        })
        .join('\n');

      // Generate prompt with context
      const fullPrompt = context ? `${context}\nUser: ${prompt}` : `User: ${prompt}`;

      // Generate response
      const result = await generateText({
        model,
        prompt: fullPrompt,
      });

      // Store the new messages in Alchemyst
      const timestamp = new Date().toISOString();

      const addParams: ContextAddParams = {
        context_type: contextType,
        scope,
        source: 'conversation',
        documents: [
          {
            content: JSON.stringify({
              role: 'user',
              content: prompt,
              timestamp,
            } as MemoryMessage),
          },
          {
            content: JSON.stringify({
              role: 'assistant',
              content: result.text,
              timestamp,
            } as MemoryMessage),
          },
        ],
        metadata: {
          groupName,
          fileName: `${conversationId}-${timestamp}`,
          fileType: 'application/json',
          lastModified: timestamp,
        },
      };

      await client.v1.context.add(addParams);

      return result;
    } catch (error) {
      console.error('Error in generateTextWithMemory:', error);
      throw error;
    }
  };
}

/**
 * Retrieves the conversation history for a specific user and conversation.
 *
 * @param userId - The user identifier
 * @param conversationId - The conversation identifier
 * @param options - Optional configuration (apiKey, scope)
 * @returns Array of conversation messages sorted by timestamp
 *
 * @example
 * ```typescript
 * import { getMemory } from '@alchemystai/sdk';
 *
 * // Using environment variable
 * const history = await getMemory('user_123', 'conv_456');
 *
 * // With explicit API key
 * const history = await getMemory('user_123', 'conv_456', {
 *   apiKey: 'your_api_key',
 * });
 * ```
 */
export async function getMemory(
  userId: string,
  conversationId: string,
  options?: { apiKey?: string | null; scope?: 'internal' | 'external' },
): Promise<MemoryMessage[]> {
  const client = new AlchemystAI({
    apiKey: options?.apiKey,
  });

  const scope = options?.scope || 'internal';

  try {
    const groupName = ['conversations', userId, conversationId];

    const searchParams: ContextSearchParams = {
      query: '', // Empty query to get all messages
      similarity_threshold: 1.0, // Maximum to get all
      minimum_similarity_threshold: 0.0, // Minimum to get all
      scope,
      groupName,
    };

    const { contexts } = await client.v1.context.search(searchParams);

    if (!contexts || contexts.length === 0) {
      return [];
    }

    // Parse and sort messages by timestamp
    const messages = contexts
      .map((ctx) => {
        try {
          return JSON.parse(ctx.content || '') as MemoryMessage;
        } catch {
          return null;
        }
      })
      .filter((msg): msg is MemoryMessage => msg !== null)
      .sort((a, b) => {
        if (!a.timestamp || !b.timestamp) return 0;
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      });

    return messages;
  } catch (error) {
    console.error('Error retrieving memory:', error);
    return [];
  }
}

/**
 * Clears conversation history for a specific user and conversation.
 *
 * @param userId - The user identifier
 * @param conversationId - The conversation identifier
 * @param options - Optional configuration (apiKey, organizationId)
 *
 * @example
 * ```typescript
 * import { clearMemory } from '@alchemystai/sdk';
 *
 * await clearMemory('user_123', 'conv_456', {
 *   organizationId: 'org_123',
 * });
 * ```
 */
export async function clearMemory(
  userId: string,
  conversationId: string,
  options?: { apiKey?: string | null; organizationId?: string },
): Promise<void> {
  const client = new AlchemystAI({
    apiKey: options?.apiKey,
  });

  try {
    const organizationId = options?.organizationId || 'default';

    await client.v1.context.delete({
      organization_id: organizationId,
      source: 'conversation',
      by_doc: true,
    });
  } catch (error) {
    console.error('Error clearing memory:', error);
    throw error;
  }
}
