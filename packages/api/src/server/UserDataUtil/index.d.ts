import Serializable from "../../builtins/Serializable";

export interface UserDataUtil {
  /**
   * The read-only keys.
   * @returns {Set<string>} a set of keys that are read-only 
   */
  getReadOnlyKeys(): Set<string>;

  /**
   * Gets user data for current user.
   * @param {string} aUserDataKey - the data key
   * @returns {Serializable} the value for aUserDataKey (typically a String), or null 
   */
  getUserData(aUserDataKey: string): Serializable;

  /**
   * Gets user data for a user.
   * @param {Node} aUserNode - the user node (typically a sv:user or sv:simpleUser)
   * @param {string} aUserDataKey - the data key
   * @returns {Serializable} the value for aUserDataKey (typically a String), or null 
   */
  getUserData(aUserNode: Node, aUserDataKey: string): Serializable;

  /**
   * Removes user data.
   * @param {string} aUserDataKey - the data key
   */
  removeUserData(aUserDataKey: string): void;

  /**
   * Removes user data for a user.
   * @param {Node} aUserNode - the user node (typically a sv:user or sv:simpleUser)
   * @param {string} aUserDataKey - the data key
   */
  removeUserData(aUserNode: Node, aUserDataKey: string): void;

  /**
   * Sets user data for current user.
   * @param {string} aUserDataKey - the data key
   * @param {Serializable} aSerializableValue - the data value (typically a String)
   */
  setUserData(aUserDataKey: string, aSerializableValue: Serializable): void;

  /**
   * Sets user data for a user.
   * @param {Node} aUserNode - the user node (typically a sv:user or sv:simpleUser)
   * @param {string} aUserDataKey - the data key
   * @param {Serializable} aSerializableValue - the data value (typically a String)
   */
  setUserData(aUserNode: Node, aUserDataKey: string, aSerializableValue: Serializable): void;
}

/**
 * The read-only keys.
 * @returns {Set<string>} a set of keys that are read-only 
 */
export function getReadOnlyKeys(): Set<string>;

/**
 * Gets user data for current user.
 * @param {string} aUserDataKey - the data key
 * @returns {Serializable} the value for aUserDataKey (typically a String), or null 
 */
export function getUserData(aUserDataKey: string): Serializable;

/**
 * Gets user data for a user.
 * @param {Node} aUserNode - the user node (typically a sv:user or sv:simpleUser)
 * @param {string} aUserDataKey - the data key
 * @returns {Serializable} the value for aUserDataKey (typically a String), or null 
 */
export function getUserData(aUserNode: Node, aUserDataKey: string): Serializable;

/**
 * Removes user data.
 * @param {string} aUserDataKey - the data key
 */
export function removeUserData(aUserDataKey: string): void;

/**
 * Removes user data for a user.
 * @param {Node} aUserNode - the user node (typically a sv:user or sv:simpleUser)
 * @param {string} aUserDataKey - the data key
 */
export function removeUserData(aUserNode: Node, aUserDataKey: string): void;

/**
 * Sets user data for current user.
 * @param {string} aUserDataKey - the data key
 * @param {Serializable} aSerializableValue - the data value (typically a String)
 */
export function setUserData(aUserDataKey: string, aSerializableValue: Serializable): void;

/**
 * Sets user data for a user.
 * @param {Node} aUserNode - the user node (typically a sv:user or sv:simpleUser)
 * @param {string} aUserDataKey - the data key
 * @param {Serializable} aSerializableValue - the data value (typically a String)
 */
export function setUserData(aUserNode: Node, aUserDataKey: string, aSerializableValue: Serializable): void;

declare namespace userDataUtil {
  export {
    getReadOnlyKeys,
    getUserData,
    removeUserData,
    setUserData,
  };
}

export default userDataUtil;
