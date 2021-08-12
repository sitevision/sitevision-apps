import Node from '../../builtins/Node';

import { SimpleUserUtil } from '../SimpleUserUtil';
import { SystemUserUtil } from '../SystemUserUtil';
import { UserDataUtil } from '../UserDataUtil';
import { UserIdentityUtil } from '../UserIdentityUtil';
import { UserIdentityWrapper } from '../UserIdentityWrapper';
import { UserUtil } from '../UserUtil';

/**
 * Gets an instance of a simple user utility class.
 * @returns {SimpleUserUtil} an instance of a simple user utility class 
 */
export function getSimpleUserUtil(): SimpleUserUtil;

/**
 * Gets an instance of a system user utility class.
 * @returns {SystemUserUtil} an instance of a system user utility class 
 */
export function getSystemUserUtil(): SystemUserUtil;

/**
 * Gets an instance of a user data utility class.
 * @returns {UserDataUtil} an instance of a user data utility class 
 */
export function getUserDataUtil(): UserDataUtil;

/**
 * Gets an instance of a user identity utility class.
 * @returns {UserIdentityUtil} an instance of a user identity utility class 
 */
export function getUserIdentityUtil(): UserIdentityUtil;

/**
 * Gets an instance of a user identity wrapper.
 * @param {Node} aUserIdentity - a user identity (or user)
 * @returns {UserIdentityWrapper} an instance of a user identity wrapper, or null if indeterminable (e.g. aUserIdentity is null) 
 */
export function getUserIdentityWrapper(aUserIdentity: Node): UserIdentityWrapper;

/**
 * Gets an instance of a user utility class.
 * @returns {UserUtil} an instance of a user utility class 
 */
export function getUserUtil(): UserUtil;

declare namespace userFactory {
  export {
    getSimpleUserUtil,
    getSystemUserUtil,
    getUserDataUtil,
    getUserIdentityUtil,
    getUserIdentityWrapper,
    getUserUtil,
  };
}

export default userFactory;
