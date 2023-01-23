import type { Node } from '../../hidden/javax/jcr/Node';

interface AppResource {
  /**
   * Get the content of a resource as a string
   * @param key The name of the resource
   * @returns The content of the resource as a string
   */
  getContent(key: string): string;

  /**
   * Get the content of a resource as a JCR-node
   * @param key The name of the resource
   * @returns The content of the resource as a javax.jcr.Node
   */
  getNode(key: string): Node;

  /**
   * Get the content of a resource as a InputStream
   * @param key The name of the resource
   * @returns The content of the resource as a java.io.InputStream
   */
  getNode(key: string): unknown;
}

declare namespace AppResource {}

declare var appResource: AppResource;

export default appResource;
