import Node from '../../builtins/Node';

export interface SimpleUserUtil {
  /**
   * Checks if current user is member of a virtual group with a specific id.
   * @param {string} aVirtualGroupId - id of a virtual group (sv:virtualGroup). Note! The id of a virtual group does not always match the name of the virtual group.
   * @returns {boolean} true if current user is member of the virtual group resolved via aVirtualGroupId,false otherwise 
   */
  isMemberOfVirtualGroup(aVirtualGroupId: string): boolean;

  /**
   * Checks if a simple user is member of a virtual group with a specific id.
   * @param {Node} aSimpleUser - a simple user node (sv:simpleUser)
   * @param {string} aVirtualGroupId - id of a virtual group (sv:virtualGroup). Note! The id of a virtual group does not always match the name of the virtual group.
   * @returns {boolean} true if aSimpleUser is member of the virtual group resolved via aVirtualGroupId,false otherwise 
   */
  isMemberOfVirtualGroup(aSimpleUser: Node, aVirtualGroupId: string): boolean;
}

/**
 * Checks if current user is member of a virtual group with a specific id.
 * @param {string} aVirtualGroupId - id of a virtual group (sv:virtualGroup). Note! The id of a virtual group does not always match the name of the virtual group.
 * @returns {boolean} true if current user is member of the virtual group resolved via aVirtualGroupId,false otherwise 
 */
export function isMemberOfVirtualGroup(aVirtualGroupId: string): boolean;

/**
 * Checks if a simple user is member of a virtual group with a specific id.
 * @param {Node} aSimpleUser - a simple user node (sv:simpleUser)
 * @param {string} aVirtualGroupId - id of a virtual group (sv:virtualGroup). Note! The id of a virtual group does not always match the name of the virtual group.
 * @returns {boolean} true if aSimpleUser is member of the virtual group resolved via aVirtualGroupId,false otherwise 
 */
export function isMemberOfVirtualGroup(aSimpleUser: Node, aVirtualGroupId: string): boolean;

declare namespace simpleUserUtil {
  export {
    isMemberOfVirtualGroup,
  };
}

export default simpleUserUtil;

