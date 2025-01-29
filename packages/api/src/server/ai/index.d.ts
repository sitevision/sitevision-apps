import type { Node } from '../../types/javax/jcr/Node';

/**
 * Represents a message in an AI conversation.
 */
export interface Message {
  /**
   * The role of the entity generating the message.
   * - `system`: Provides context or instructions.
   * - `user`: Represents the end user.
   * - `assistant`: Represents the AI model.
   */
  role: 'system' | 'user' | 'assistant';

  /**
   * The actual content of the message.
   */
  content: string;
}

/**
 * Options for generating text using an AI model.
 */
export interface GenerateTextOptions {
  /**
   * Messages that form the conversation context.
   */
  messages: Message[];

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
}

/**
 * Result object for text generation.
 */
export interface GenerateTextResult {
  /**
   * The generated text output from the AI model.
   */
  text: string;

  /**
   * Contains an error message if something went wrong, otherwise an empty string.
   */
  error: string;

  /**
   * The reason why the generation process stopped.
   * Possible values:
   * - `stop`: Completed successfully.
   * - `length`: Stopped due to reaching max tokens.
   * - `error`: Failed unexpectedly.
   * - `other`: Other reasons (model/system behavior).
   */
  finishReason: string;

  /**
   * (Optional) Token usage statistics for this request.
   */
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

/**
 * Options for streaming text from an AI model.
 */
export interface StreamTextOptions {
  /**
   * Messages that form the conversation context.
   */
  messages: Message[];

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
}

/**
 * Final result object for a streaming text operation.
 */
export interface StreamFinishResult {
  /**
   * Always an empty string (for structural consistency with `GenerateTextResult`).
   */
  text: string;

  /**
   * Contains an error message if something went wrong, otherwise an empty string.
   */
  error: string;

  /**
   * The reason why the streaming process stopped.
   * Possible values:
   * - `stop`: Completed successfully.
   * - `length`: Stopped due to reaching max tokens.
   * - `error`: Failed unexpectedly.
   * - `other`: Other reasons (model/system behavior).
   */
  finishReason: string;

  /**
   * (Optional) Token usage statistics for this request.
   */
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

/**
 * AI SDK for interacting with Large Language Models (LLMs).
 */
export interface AI {
  /**
   * Generates text based on provided messages.
   *
   * @param llmConfiguration The AI model configuration node.
   * @param options Options for text generation.
   * @returns The generated text result.
   */
  generateText(
    llmConfiguration: Node,
    options: GenerateTextOptions
  ): GenerateTextResult;

  /**
   * Streams generated text from an AI model.
   *
   * This function does not return a value. Instead, it processes streamed responses
   * using the provided `onChunk` and `onFinish` callback functions.
   *
   * @param llmConfiguration The AI model configuration node.
   * @param options Options for streaming text.
   */
  streamText(llmConfiguration: Node, options: StreamTextOptions): void;
}

declare namespace AI {}

/**
 * The AI SDK instance.
 */
declare var ai: AI;

export default ai;
