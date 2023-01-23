import type { UserIdentityUtil } from "../UserIdentityUtil";
import type { Node } from "../../types/javax/jcr/Node";
import type { UserIdentityWrapper } from "../../types/senselogic/sitevision/api/user/UserIdentityWrapper";
import type { SystemUserUtil } from "../SystemUserUtil";
import type { UserUtil } from "../UserUtil";
import type { SimpleUserUtil } from "../SimpleUserUtil";
import type { UserDataUtil } from "../UserDataUtil";

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
export interface UserFactory {
  /**
   * Gets an instance of a user identity utility class.
   * @return an instance of a user identity utility class
   */
  getUserIdentityUtil(): UserIdentityUtil;

  /**
   * Gets an instance of a user identity wrapper.
   * @param aUserIdentity a user identity (or user)
   * @return an instance of a user identity wrapper, or <code>null</code> if indeterminable (e.g. <code>aUserIdentity</code> is <code>null</code>)
   */
  getUserIdentityWrapper(aUserIdentity: Node): UserIdentityWrapper;

  /**
   * Gets an instance of a system user utility class.
   * @return an instance of a system user utility class
   */
  getSystemUserUtil(): SystemUserUtil;

  /**
   * Gets an instance of a user utility class.
   * @return an instance of a user utility class
   * @since Sitevision 4.0.1
   */
  getUserUtil(): UserUtil;

  /**
   * Gets an instance of a simple user utility class.
   * @return an instance of a simple user utility class
   * @since Sitevision 4.0.1
   */
  getSimpleUserUtil(): SimpleUserUtil;

  /**
   * Gets an instance of a user data utility class.
   * @return an instance of a user data utility class
   * @since Sitevision 4.1
   */
  getUserDataUtil(): UserDataUtil;
}

declare namespace UserFactory {}

declare var userFactory: UserFactory;

export default userFactory;
