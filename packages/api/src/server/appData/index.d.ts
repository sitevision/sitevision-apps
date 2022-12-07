import Node from '../../hidden/javax/jcr/Node';

export function get(key: string): unknown;
export function getNode(key: string): Node;
export function getArray(key: string): Node[];

declare namespace appData {
  export { get, getNode, getArray };
}

export default appData;
