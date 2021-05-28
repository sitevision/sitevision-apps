declare namespace archiveUtil {
  function createArchive(aParent: Node, aName: string): Node;
  function renameArchive(anArchive: Node, aName: string): void;
}

export default archiveUtil;
