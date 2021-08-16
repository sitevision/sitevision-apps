import Node from '../../builtins/Node'

export interface UserUtil { 
  /**
   * Checks if current user is member of a group.
   * @param {Node} aGroup - a group node (sv:userGroup or sv:virtualGroup)
   * @returns {boolean} true if current user is member of aGroup, false otherwise 
   */
  isMemberOfGroup(aGroup: Node): boolean;

  /**
   * Checks if a specific user is member of a group.
   * @param {Node} aUser - a user node (sv:user, sv:simpleUser or sv:systemUser)
   * @param {Node} aGroup - a group node (sv:userGroup or sv:virtualGroup)
   * @returns {boolean} true if aUser is member of aGroup, false otherwise 
   */
  isMemberOfGroup(aUser: Node, aGroup: Node): boolean;
}

/**
 * Checks if current user is member of a group.
 * @param {Node} aGroup - a group node (sv:userGroup or sv:virtualGroup)
 * @returns {boolean} true if current user is member of aGroup, false otherwise 
 */
export function isMemberOfGroup(aGroup: Node): boolean;

/**
 * Checks if a specific user is member of a group.
 * @param {Node} aUser - a user node (sv:user, sv:simpleUser or sv:systemUser)
 * @param {Node} aGroup - a group node (sv:userGroup or sv:virtualGroup)
 * @returns {boolean} true if aUser is member of aGroup, false otherwise 
 */
export function isMemberOfGroup(aUser: Node, aGroup: Node): boolean;

declare namespace userUtil {
  export {
    isMemberOfGroup,
  };
}
export default userUtil;
