import Node from '../../builtins/Node';

declare namespace appData {
  function get(key: string): any;
  function getNode(key: string): Node;
  function getArray(key: string): Node[];
}

export default appData;
