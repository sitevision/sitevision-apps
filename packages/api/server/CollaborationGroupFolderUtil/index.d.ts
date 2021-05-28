interface CollaborationGroupFolderUtil {
  containsCollaborationGroup(
    aCollaborationGroupFolder: Node,
    aGroupName: string
  ): boolean;

  getDefaultCollaborationGroupFolder(): Node;
}

export default CollaborationGroupFolderUtil;
