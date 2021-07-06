import Node from '../../builtins/Node';

/**
* Creates an archive as sub node of the specified parent.
* @returns {Node} the newly created sv:archive node. 
* @param {Node} aParent - the parent node of the sv:archive. May not be null
* @param {string} aName - the name of the archive. May not be null
 */
export function createArchive(aParent: Node, aName: string): Node;

/**
* Alters the name of an archive.
* @param {Node} anArchive - the archive that should be renamed. May not be null
* @param {string} aName - the new name of the archive. May not be null
*/
export function renameArchive(anArchive: Node, aName: string): void;

declare namespace archiveUtil {
  export { createArchive, renameArchive };
}

export default archiveUtil;
