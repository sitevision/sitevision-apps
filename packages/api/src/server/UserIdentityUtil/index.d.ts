import Node from '../../builtins/Node';

export interface UserIdentityUtil {
  /**
   * Creates the corresponding sv:userIdentity Node for a specified sv:user Node.
   * @param {Node} aUserNode - a user node that presumably do not have a corresponding user identity
   * @returns {Node} the existing or created sv:userIdentity Node for aUserNode, or nullif aUserNode is null or isn't allowed to have user identity for current site (e.g. user is anonymized). 
   */
  getOrCreateUserIdentity(aUserNode: Node): Node;

  /**
   * Gets the corresponding sv:userIdentity Node for a specified sv:user Node.
   * @param {Node} aUserNode - a user node
   * @returns {Node} the corresponding sv:userIdentity Node for aUserNode, or nullif aUserNode is null or has no corresponding user identity for current site (e.g. user is anonymized). 
   */
  getUserIdentity(aUserNode: Node): Node;
}

/**
 * Creates the corresponding sv:userIdentity Node for a specified sv:user Node.
 * @param {Node} aUserNode - a user node that presumably do not have a corresponding user identity
 * @returns {Node} the existing or created sv:userIdentity Node for aUserNode, or nullif aUserNode is null or isn't allowed to have user identity for current site (e.g. user is anonymized). 
 */
export function getOrCreateUserIdentity(aUserNode: Node): Node;

/**
 * Gets the corresponding sv:userIdentity Node for a specified sv:user Node.
 * @param {Node} aUserNode - a user node
 * @returns {Node} the corresponding sv:userIdentity Node for aUserNode, or nullif aUserNode is null or has no corresponding user identity for current site (e.g. user is anonymized). 
 */
export function getUserIdentity(aUserNode: Node): Node;

declare namespace userIdentityUtil {
  export {
    getOrCreateUserIdentity,
    userDataUtil,
  };
}

export default userIdentityUtil;
