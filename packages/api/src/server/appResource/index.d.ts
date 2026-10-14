import type { InputStream } from '../../types/java/io/InputStream';
import type { Node } from '../../types/javax/jcr/Node';

// The generated InputStream type predates Java 9's readAllBytes method.
type ResourceInputStream = InputStream & {
  readAllBytes(): unknown[];
};

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
   * Get the content of a resource as an InputStream
   * @param key The name of the resource
   * @returns A java.io.InputStream, or null if the resource does not exist
   */
  getInputStream(key: string): ResourceInputStream | null;
}

declare namespace AppResource {}

declare var appResource: AppResource;

export default appResource;
