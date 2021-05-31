import Node from '../../builtins/Node';

declare namespace globalAppData {
  function get(key: string): any;
  function getNode(key: string): Node;
  function getArray(key: string): any[];
}

export default globalAppData;
