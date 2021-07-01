import Node from '../../builtins/Node';
import CollaborationGroupType from '../CollaborationGroupType';

/**
* Creates an open collaboration group.
* @returns {Node} The created collaboration group (sv:collaborationGroup) 
* @param {Node} aGroupTemplate - the collaboration group template (sv:collaborationGroupTemplate) to use when creating the collaboration group page of the collaboration group
* @param {Node} aGroupFolder - the collaboration group folder (sv:collaborationGroupFolder) where the collaboration group page of the collaboration group should reside
* @param {string} aGroupName - the name of the collaboration group
*/
export function createCollaborationGroup(aGroupTemplate: Node, aGroupFolder: Node, aGroupName: string): Node;

/**
* Creates a collaboration group.
* @returns {Node} The created collaboration group (sv:collaborationGroup) 
* @param {Node} aGroupTemplate - the collaboration group template (sv:collaborationGroupTemplate) to use when creating the collaboration group page of the collaboration group
* @param {Node} aGroupFolder - the collaboration group folder (sv:collaborationGroupFolder) where the collaboration group page of the collaboration group should reside
* @param {string} aGroupName - the name of the collaboration group
* @param {CollaborationGroupType} aGroupType - the group type, note that CollaborationGroupType.CLOSED needs additional permission
*/
export function createCollaborationGroup(aGroupTemplate: Node, aGroupFolder: Node, aGroupName: string, aGroupType: CollaborationGroupType): Node;

/**
* Removes a collaboration group.
* @returns {boolean} true if aCollaborationGroup was removed, i.e. collaboration group page was moved to trashcan, false otherwise. 
* @param {Node} aCollaborationGroup - a collaboration group to remove
*/
export function removeCollaborationGroup(aCollaborationGroup: Node): boolean;

export interface ICollaborationGroupUtil {
  /**
  * Creates an open collaboration group.
  * @returns {Node} The created collaboration group (sv:collaborationGroup) 
  * @param {Node} aGroupTemplate - the collaboration group template (sv:collaborationGroupTemplate) to use when creating the collaboration group page of the collaboration group
  * @param {Node} aGroupFolder - the collaboration group folder (sv:collaborationGroupFolder) where the collaboration group page of the collaboration group should reside
  * @param {string} aGroupName - the name of the collaboration group
  */
  createCollaborationGroup(aGroupTemplate: Node, aGroupFolder: Node, aGroupName: string): Node;

  /**
  * Creates a collaboration group.
  * @returns {Node} The created collaboration group (sv:collaborationGroup) 
  * @param {Node} aGroupTemplate - the collaboration group template (sv:collaborationGroupTemplate) to use when creating the collaboration group page of the collaboration group
  * @param {Node} aGroupFolder - the collaboration group folder (sv:collaborationGroupFolder) where the collaboration group page of the collaboration group should reside
  * @param {string} aGroupName - the name of the collaboration group
  * @param {CollaborationGroupType} aGroupType - the group type, note that CollaborationGroupType.CLOSED needs additional permission
  */
  createCollaborationGroup(aGroupTemplate: Node, aGroupFolder: Node, aGroupName: string, aGroupType: CollaborationGroupType): Node;

  /**
  * Removes a collaboration group.
  * @returns {boolean} true if aCollaborationGroup was removed, i.e. collaboration group page was moved to trashcan, false otherwise. 
  * @param {Node} aCollaborationGroup - a collaboration group to remove
  */
  removeCollaborationGroup(aCollaborationGroup: Node): boolean;
}

declare namespace collaborationGroupUtil {
  export {
    createCollaborationGroup,
    createCollaborationGroup,
    removeCollaborationGroup,
  };
}
export default collaborationGroupUtil;
