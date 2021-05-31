import Node from '../../builtins/Node';
import CollaborationGroupType from '../CollaborationGroupType';

export interface ICollaborationGroupUtil {
  createCollaborationGroup(
    aGroupTemplate: Node,
    aGroupFolder: Node,
    aGroupName: string
  ): Node;

  createCollaborationGroup(
    aGroupTemplate: Node,
    aGroupFolder: Node,
    aGroupName: string,
    aGroupType: CollaborationGroupType
  ): Node;

  removeCollaborationGroup(aCollaborationGroup: Node): boolean;
}

declare namespace collaborationGroupUtil {
  function createCollaborationGroup(
    aGroupTemplate: Node,
    aGroupFolder: Node,
    aGroupName: string
  ): Node;

  function createCollaborationGroup(
    aGroupTemplate: Node,
    aGroupFolder: Node,
    aGroupName: string,
    aGroupType: CollaborationGroupType
  ): Node;

  function removeCollaborationGroup(aCollaborationGroup: Node): boolean;
}
export default collaborationGroupUtil;
