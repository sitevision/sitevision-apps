import aiAssistant from '.';
import type { Node } from '../../types/javax/jcr/Node';
import type { Message, StreamFinishResult, UsageInfo } from '../ai';

export type SemanticQueryOptions = {
  /**
   * The query, typically the user message to be used in a conversation
   */
  query: string;

  /**
   * Max number of chunks. Valid numbers are between 1 and 20 and the default is 5.
   */
  maxHits?: number;
};

export type AskAssistantOptions = {
  /**
   * The user message in the conversation
   */
  message: string;

  /**
   * The key that identifies the conversation for current user
   */
  conversationIdentifier: string;

  /**
   * The potential knowledge needed to answer the user question/message (optional).
   * A provided knowledge value will be included in the system message/prompt of this conversation. The value will replace potentially previous knowledge.
   *
   * Hints. This value is typically extracted via the querySemanticIndex method. And potential existing knowledge in the conversation can be retrieved via the getConversationKnowledge method.
   */
  knowledge?: string | string[];

  /**
   * Callback function that is triggered for each received token.
   * The function receives the token as a string.
   *
   * @param token The streamed token received from the AI model.
   */
  onChunk: (token: string) => void;

  /**
   * Callback function triggered when the streaming operation completes.
   *
   * @param result The final result of the stream operation.
   */
  onFinish: (result: StreamFinishResult) => void;
  /**
   * Maximum duration (in milliseconds) before timing out.
   * The default value and valid range are environment-dependent and can be
   * configured via a system property. If not explicitly set, the system
   * determines an appropriate timeout value.
   */
  timeout?: number;

  /**
   * The maximum number of tokens (words/word fragments) the model can generate.
   */
  maxTokens?: number;

  /**
   * Controls response randomness:
   * - Lower values (e.g., 0) make responses deterministic.
   * - Higher values (e.g., 1) increase variability.
   */
  temperature?: number;

  /**
   * Reduces repeated token usage in generated text.
   * Higher values promote more diverse output.
   */
  frequencyPenalty?: number;
};

export type AskLLMOptions = {
  /**
   * Messages that represent a conversation
   */
  messages: Message[];

  /**
   * The maximum amount of time, in milliseconds, that Sitevision will wait for a response before the connection times out.
   * Default 30000 (30s)
   */
  timeout?: number;

  /**
   * Specifies the maximum number of tokens (words or word fragments) that the model can generate in the response. This includes both the prompt and the completion.
   */
  maxTokens?: number;

  /**
   * Controls the randomness or creativity of the model's output. Lower values make the output more deterministic and focused, while higher values introduce more variability and creativity.
   */
  temperature?: number;

  /**
   * Penalizes the model for using the same tokens repeatedly. A higher value reduces the likelihood of repeating the same phrases, promoting more diverse language usage.
   */
  frequencyPenalty?: number;
};

export type KnowledgeEntry = {
  /**
   * The unique identifier for the source of the knowledge.
   */
  id: string;

  /**
   * The knowledge text, typically a string.
   */
  text: string;
};

export type LLMResponse = {
  text: string;

  error: string;

  finishReason: string;

  usage: UsageInfo;
};

/**
 * AI SDK for interacting with Large Language Models (LLMs).
 */
export interface AIAssistant {
  /**
   * Returns a new, unique conversationIdentifier string - the key needed to identify a conversation for current user.
   * @param aiAssistant The AI Assistant instance.
   * @returns A unique conversation identifier string.
   */
  createConversation(aiAssistant: Node): string;

  /**
   * Retrieves the memory (context) of a specific conversation. Will not include any system messages.
   *
   * @param aiAssistant The AI Assistant instance.
   * @param conversationIdentifier The unique identifier of the conversation.
   * @returns An array of messages representing the conversation memory.
   */
  getConversationMemory(
    aiAssistant: Node,
    conversationIdentifier: string
  ): Message[];

  /**
   * Retrieves the knowledge string used in the conversation.
   *
   * @param aiAssistant The AI Assistant instance.
   * @param conversationIdentifier The unique identifier of the conversation.
   * @returns A string representing the conversation knowledge.
   */
  getConversationKnowledge(
    aiAssistant: Node,
    conversationIdentifier: string
  ): string;

  /**
   * Queries a semantic index for knowledge entries based on the provided options.
   *
   * @param aiAssistant The AI Assistant instance.
   * @param options Options for the semantic query.
   * @returns An array of knowledge entries matching the query.
   */
  querySemanticIndex(
    aiAssistant: Node,
    options: SemanticQueryOptions
  ): KnowledgeEntry[];

  /**
   * Asks the AI Assistant a question and will receive a streamed response.
   *
   * @param aiAssistant The AI Assistant instance.
   * @param options Options for the assistant query.
   */
  askAssistant(aiAssistant: Node, options: AskAssistantOptions);

  /**
   * Method to generate text using the LLM of an AI Assistant configuration. Useful for non-interactive use cases such as summarization,
   * @param aiAssistant The AI Assistant instance.
   * @param options Options for the LLM query.
   */
  askLLM(aiAssistant: Node, options: AskLLMOptions): LLMResponse;
}

declare namespace AIAssistant {}

/**
 * The AI Assistant SDK instance.
 */
declare var aiAssistant: AIAssistant;

export default aiAssistant;
