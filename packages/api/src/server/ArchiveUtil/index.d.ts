import Node from '../../builtins/Node';

export function createArchive(aParent: Node, aName: string): Node;
export function renameArchive(anArchive: Node, aName: string): void;

declare namespace archiveUtil {
  export { createArchive, renameArchive };
}

export default archiveUtil;
