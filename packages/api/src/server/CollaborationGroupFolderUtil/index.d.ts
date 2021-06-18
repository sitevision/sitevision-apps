import Node from '../../builtins/Node';

export interface ICollaborationGroupFolderUtil {
  containsCollaborationGroup(
    aCollaborationGroupFolder: Node,
    aGroupName: string
  ): boolean;
  getDefaultCollaborationGroupFolder(): Node;
}

export function containsCollaborationGroup(
  aCollaborationGroupFolder: Node,
  aGroupName: string
): boolean;
export function getDefaultCollaborationGroupFolder(): Node;

declare namespace collaborationGroupFolderUtil {
  export { containsCollaborationGroup, getDefaultCollaborationGroupFolder };
}

export default collaborationGroupFolderUtil;
