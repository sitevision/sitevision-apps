import Node from '../../hidden/javax/jcr/Node';

/**
 * Get the content of a resource as a string
 * @param key The name of the resource
 * @returns The content of the resource as a string
 */
export function getContent(key: string): string;

/**
 * Get the content of a resource as a JCR-node
 * @param key The name of the resource
 * @returns The content of the resource as a javax.jcr.Node
 */
export function getNode(key: string): Node;

/**
 * Get the content of a resource as a InputStream
 * @param key The name of the resource
 * @returns The content of the resource as a java.io.InputStream
 */
export function getNode(key: string): unknown;

declare namespace appResource {
  export { getContent, getNode };
}

export default appResource;
