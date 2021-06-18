import InputStream from '../../builtins/InputStream';
import Node from '../../builtins/Node';

/**
 * Get the content of a resource as a string
 * @param key The name of the resource
 */
export function getContent(key: string): string;

/**
 * Get the content of a resource as a JCR-node
 * @param key The name of the resource
 */
export function getNode(key: string): Node;

/**
 * Get the content of a resource as a InputStream
 * @param key The name of the resource
 */
export function getNode(key: string): InputStream;

declare namespace appResource {
  export { getContent, getNode };
}

export default appResource;
