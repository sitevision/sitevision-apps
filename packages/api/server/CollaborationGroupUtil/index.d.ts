import Node from '../../builtins/Node';
import CollaborationGroupType from '../CollaborationGroupType';

interface CollaborationGroupUtil {
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

export default CollaborationGroupUtil;
