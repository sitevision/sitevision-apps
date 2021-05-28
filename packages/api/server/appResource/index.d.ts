interface appResource {
  /**
   * Get the content of a resource as a string
   * @param key The name of the resource
   */
  getContent(key: string): string;

  /**
   * Get the content of a resource as a JCR-node
   * @param key The name of the resource
   */
  getNode(key: string): Node;

  /**
   * Get the content of a resource as a InputStream
   * @param key The name of the resource
   */
  getNode(key: string): InputStream;
}

export default appResource;
