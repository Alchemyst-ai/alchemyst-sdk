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

/** Options for configurations **/
export type WithAlchemystOptions = {
  // options here (future use)
};

/** Extended input that includes user and conversation context **/
export type WithMemoryInput = GenerateTextInput & {
  userId: string;
  conversationId: string;
};

/** Message format stored in memory **/
export type MemoryMessage = {
  role: 'user' | 'assistant';
  content: string;
};

/**
 * In-memory storage for conversation history
 * Key format: "userId::conversationId"
 */
const memoryStore = new Map<string, MemoryMessage[]>();

/**
 * Wraps a text generation function with automatic memory management.
 *
 * @param generateText - The base text generation function to wrap
 * @param _options - Configuration options (reserved for future use)
 * @returns A new function that maintains conversation context
 */
export function withAlchemyst(generateText: GenerateTextFn, _options?: WithAlchemystOptions) {
  return async function generateTextWithMemory(args: WithMemoryInput): Promise<GenerateTextOutput> {
    const { model, prompt, userId, conversationId } = args;

    const memoryKey = `${userId}::${conversationId}`;
    const history = memoryStore.get(memoryKey) || [];

    const context = history
      .map((m) => `${m.role === 'user' ? 'User: ' : 'Assistant: '}${m.content}`)
      .join('\n');

    const fullPrompt = context ? `${context}\nUser: ${prompt}` : `User: ${prompt}`;

    const result = await generateText({
      model,
      prompt: fullPrompt,
    });

    const updatedHistory: MemoryMessage[] = [
      ...history,
      { role: 'user', content: prompt },
      { role: 'assistant', content: result.text },
    ];

    memoryStore.set(memoryKey, updatedHistory);

    return result;
  };
}

/**
 * Retrieves the conversation history for a specific user and conversation.
 *
 * @param userId - The user identifier
 * @param conversationId - The conversation identifier
 * @returns Array of conversation messages
 */
export function getMemory(userId: string, conversationId: string): MemoryMessage[] {
  const memoryKey = `${userId}::${conversationId}`;
  return memoryStore.get(memoryKey) || [];
}
