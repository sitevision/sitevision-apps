import Node from '../../builtins/Node';

interface globalAppData {
  get(key: string): any;
  getNode(key: string): Node;
  getArray(key: string): any[];
}

export default globalAppData;
