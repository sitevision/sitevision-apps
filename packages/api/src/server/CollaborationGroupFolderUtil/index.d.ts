import Node from '../../builtins/Node';

/**
* Whether or not a collaboration group folder already contains a named collaboration group.
* @returns {boolean} true if aCollaborationGroupFolder contains (case ignored) a group named aGroupName,false otherwise 
* @param {Node} aCollaborationGroupFolder - the collaboration group folder
* @param {string} aGroupName - the name of the collaboration group
*/
export function containsCollaborationGroup(aCollaborationGroupFolder: Node, aGroupName: string): boolean;

/**
* Gets the default collaboration group folder.
* @returns {Node} the default collaboration group folder, or null if indeterminable 
*/
export function getDefaultCollaborationGroupFolder(): Node;

export interface ICollaborationGroupFolderUtil {
  /**
  * Whether or not a collaboration group folder already contains a named collaboration group.
  * @returns {boolean} true if aCollaborationGroupFolder contains (case ignored) a group named aGroupName,false otherwise 
  * @param {Node} aCollaborationGroupFolder - the collaboration group folder
  * @param {string} aGroupName - the name of the collaboration group
  */
  containsCollaborationGroup(aCollaborationGroupFolder: Node, aGroupName: string): boolean;
  /**
  * Gets the default collaboration group folder.
  * @returns {Node} the default collaboration group folder, or null if indeterminable 
  */
  getDefaultCollaborationGroupFolder(): Node;
}

declare namespace collaborationGroupFolderUtil {
  export { containsCollaborationGroup, getDefaultCollaborationGroupFolder };
}

export default collaborationGroupFolderUtil;
