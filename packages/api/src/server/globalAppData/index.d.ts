import Node from '../../builtins/Node';

export function get(key: string): any;
export function getNode(key: string): Node;
export function getArray(key: string): Node[];

declare namespace globalAppData {
  export { get, getNode, getArray };
}

export default globalAppData;
