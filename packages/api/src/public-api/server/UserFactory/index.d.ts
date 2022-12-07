import UserIdentityUtil from "../UserIdentityUtil";
import Node from "../../hidden/javax/jcr/Node";
import UserIdentityWrapper from "../../hidden/senselogic/sitevision/api/user/UserIdentityWrapper";
import SystemUserUtil from "../SystemUserUtil";
import UserUtil from "../UserUtil";
import SimpleUserUtil from "../SimpleUserUtil";
import UserDataUtil from "../UserDataUtil";

/**
 * Gets an instance of a user identity utility class.
 * @return an instance of a user identity utility class
 */
export function getUserIdentityUtil(): UserIdentityUtil;

/**
 * Gets an instance of a user identity wrapper.
 * @param aUserIdentity a user identity (or user)
 * @return an instance of a user identity wrapper, or <code>null</code> if indeterminable (e.g. <code>aUserIdentity</code> is <code>null</code>)
 */
export function getUserIdentityWrapper(
  aUserIdentity: Node
): UserIdentityWrapper;

/**
 * Gets an instance of a system user utility class.
 * @return an instance of a system user utility class
 */
export function getSystemUserUtil(): SystemUserUtil;

/**
 * Gets an instance of a user utility class.
 * @return an instance of a user utility class
 * @since Sitevision 4.0.1
 */
export function getUserUtil(): UserUtil;

/**
 * Gets an instance of a simple user utility class.
 * @return an instance of a simple user utility class
 * @since Sitevision 4.0.1
 */
export function getSimpleUserUtil(): SimpleUserUtil;

/**
 * Gets an instance of a user data utility class.
 * @return an instance of a user data utility class
 * @since Sitevision 4.1
 */
export function getUserDataUtil(): UserDataUtil;

/**
 * Factory for creating user-related instances.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getUserFactory()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
declare namespace userFactory {
  export {
    getUserIdentityUtil,
    getUserIdentityWrapper,
    getSystemUserUtil,
    getUserUtil,
    getSimpleUserUtil,
    getUserDataUtil,
  };
}

export default userFactory;
