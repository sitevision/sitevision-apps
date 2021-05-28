interface ArchiveUtil {
  createArchive(aParent: Node, aName: string): Node;
  renameArchive(anArchive: Node, aName: string): void;
}

export default ArchiveUtil;
