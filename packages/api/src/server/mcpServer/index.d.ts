import type { JSONSchema, Message, ToolParametersSchema } from '../ai';

/**
 * A text content item returned from a tool.
 */
export interface MCPTextContent {
  type: 'text';
  text: string;
}

/**
 * Tool content that can be returned to the MCP client.
 */
export type MCPToolContent = MCPTextContent;

/**
 * The JSON schema used to define MCP tool input.
 */
export interface MCPToolInputSchema extends ToolParametersSchema {
  properties: Record<string, JSONSchema>;
}

/**
 * Definition of an MCP tool that can be registered by the app.
 */
export interface MCPToolRegistration {
  description: string;
  inputSchema: MCPToolInputSchema;
}

/**
 * Shared metadata for MCP resources.
 */
export interface MCPResourceRegistration {
  title: string;
  description: string;
  mimeType?: string;
}

/**
 * Definition of an MCP prompt argument.
 */
export interface MCPPromptArgument {
  name: string;
  description?: string;
  required?: boolean;
}

/**
 * Definition of an MCP prompt that can be registered by the app.
 */
export interface MCPPromptRegistration {
  title: string;
  description: string;
  arguments?: ReadonlyArray<MCPPromptArgument>;
}

/**
 * Result returned from an MCP tool invocation.
 */
export interface MCPToolResult {
  content: ReadonlyArray<MCPToolContent>;
  isError?: boolean;
}

/**
 * A content item returned from a resource handler.
 */
export interface MCPResourceContent {
  uri: string;
  mimeType?: string;
  text?: string;
}

/**
 * Result returned from a resource or resource template invocation.
 */
export interface MCPResourceResult {
  contents: ReadonlyArray<MCPResourceContent>;
}

/**
 * Handler invoked when an MCP tool is called.
 */
export type MCPToolHandler = (input: any) => MCPToolResult;

/**
 * Handler invoked when a fixed resource is requested.
 */
export type MCPResourceHandler = () => MCPResourceResult;

/**
 * Context passed to a resource template handler.
 */
export interface MCPResourceTemplateContext {
  uri: string;
  uriVariables: Record<string, string>;
}

/**
 * Handler invoked when a resource template is resolved.
 */
export type MCPResourceTemplateHandler = (
  context: MCPResourceTemplateContext
) => MCPResourceResult;

/**
 * Result returned from a prompt invocation.
 */
export interface MCPPromptResult {
  description?: string;
  messages: ReadonlyArray<Message>;
}

/**
 * Handler invoked when a prompt is requested.
 */
export type MCPPromptHandler = (arguments_: any) => MCPPromptResult;

/**
 * MCP server API exposed to app code.
 */
export interface MCPServer {
  /**
   * Registers a model-invokable tool with JSON Schema input.
   *
   * @param name Unique tool name.
   * @param definition Tool metadata and input schema.
   * @param handler Function invoked when the tool is called.
   */
  registerTool(
    name: string,
    definition: MCPToolRegistration,
    handler: MCPToolHandler
  ): void;

  /**
   * Registers a static URI-addressable resource.
   *
   * @param name Unique resource name.
   * @param uri Fixed resource URI.
   * @param definition Resource metadata.
   * @param handler Function invoked when the resource is requested.
   */
  registerResource(
    name: string,
    uri: string,
    definition: MCPResourceRegistration,
    handler: MCPResourceHandler
  ): void;

  /**
   * Registers a dynamic URI template resource.
   *
   * @param name Unique resource name.
   * @param uriTemplate URI template with variables.
   * @param definition Resource metadata.
   * @param handler Function invoked when the resource template is resolved.
   */
  registerResourceTemplate(
    name: string,
    uriTemplate: string,
    definition: MCPResourceRegistration,
    handler: MCPResourceTemplateHandler
  ): void;

  /**
   * Registers a user-triggered prompt template.
   *
   * @param name Unique prompt name.
   * @param definition Prompt metadata and optional arguments.
   * @param handler Function invoked when the prompt is requested.
   */
  registerPrompt(
    name: string,
    definition: MCPPromptRegistration,
    handler: MCPPromptHandler
  ): void;
}

declare namespace MCPServer {}

/**
 * The MCP server SDK instance.
 */
declare var mcpServer: MCPServer;

export default mcpServer;
