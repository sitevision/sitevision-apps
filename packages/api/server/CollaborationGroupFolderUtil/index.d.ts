import Node from '../../builtins/Node';

export interface ICollaborationGroupFolderUtil {
  containsCollaborationGroup(
    aCollaborationGroupFolder: Node,
    aGroupName: string
  ): boolean;
  getDefaultCollaborationGroupFolder(): Node;
}

declare namespace collaborationGroupFolderUtil {
  function containsCollaborationGroup(
    aCollaborationGroupFolder: Node,
    aGroupName: string
  ): boolean;
  function getDefaultCollaborationGroupFolder(): Node;
}

export default collaborationGroupFolderUtil;
