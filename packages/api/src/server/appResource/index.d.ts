import InputStream from '../../builtins/InputStream';
import Node from '../../builtins/Node';

declare namespace appResource {
  /**
   * Get the content of a resource as a string
   * @param key The name of the resource
   */
  function getContent(key: string): string;

  /**
   * Get the content of a resource as a JCR-node
   * @param key The name of the resource
   */
  function getNode(key: string): Node;

  /**
   * Get the content of a resource as a InputStream
   * @param key The name of the resource
   */
  function getNode(key: string): InputStream;
}

export default appResource;
