import Node from '../../builtins/Node';

/**
* Deletes a node from the site trashcan.
* @param {Node} aNode - the node that should be removed from the site trashcan. This node must be located in the site trashcan. May not be null.
*/
export function deleteNodeFromTrashcan(aNode: Node): void;

/**
* Checks if a node is in the site trashcan. If no node is specified a NullPointerException is thrown.
* @returns {boolean} true if the Node is in site trashcan, false otherwise 
* @param {Node} aNode - the node to be checked if it is located in the site trashcan. May not be null
*/
export function isInTrashcan(aNode: Node): boolean;

/**
* Puts a node in the site trashcan.
* @param {Node} aNode - the node that will be moved to the site trashcan. May not be null
*/
export function moveNodeToTrashcan(aNode: Node): void;

/**
* Restores a node from the site trashcan.
* @param {Node} aNode - the node that should be restored. This node must be located in the site trashcan. May not be null
*/
export function restoreNode(aNode: Node): void;

declare namespace trashcanUtil {
  export {
    deleteNodeFromTrashcan,
    isInTrashcan,
    moveNodeToTrashcan,
    restoreNode,
  }
};

export default trashcanUtil;
