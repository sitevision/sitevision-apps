import mcp from '@sitevision/api/server/mcpServer';

mcp.registerTool(
  'example.echo',
  {
    description: 'Returns a simple tool response.',
    inputSchema: {
      type: 'object',
      additionalProperties: false,
      properties: {},
    },
  },
  () => {
    return {
      content: [
        {
          type: 'text',
          text: 'Hello from MCPServer',
        },
      ],
    };
  }
);
