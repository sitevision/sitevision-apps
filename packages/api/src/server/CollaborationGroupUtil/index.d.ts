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

export function createCollaborationGroup(
  aGroupTemplate: Node,
  aGroupFolder: Node,
  aGroupName: string
): Node;

export function createCollaborationGroup(
  aGroupTemplate: Node,
  aGroupFolder: Node,
  aGroupName: string,
  aGroupType: CollaborationGroupType
): Node;

export function removeCollaborationGroup(aCollaborationGroup: Node): boolean;

declare namespace collaborationGroupUtil {
  export {
    createCollaborationGroup,
    createCollaborationGroup,
    removeCollaborationGroup,
  };
}
export default collaborationGroupUtil;
