/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Node } from "../../types/javax/jcr/Node";
import type { PrivilegedExceptionAction } from "../../types/java/security/PrivilegedExceptionAction";

import type { String } from "../../types/java/lang/String";
import type { List } from "../../types/java/util/List";

/**
 * <p>Principal utility interface.</p>
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getPrincipalUtil()}.
 *  See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1_06
 */
export interface PrincipalUtil {
  /**
   * Perform work during the login phase as a specified user.
   *
   *  <p>
   *     <strong>Note!</strong> This method should <em>only</em> be used during the login phase (i.e. in a JAAS login module).
   *     Other usages will throw an <code>IllegalStateException</code>.
   *  </p>
   * @param aUser the user
   * @param aAction a runnable containing the operations that is to be performed
   * @throws IllegalStateException if this method is not called during the login phase
   */
  doAsDuringLogin(aUser: Node, aAction: PrivilegedExceptionAction): void;

  /**
   * Provides access to a virtual group wrapped as a JCR node given the group name.
   * @param aName the name of the virtual group, may not be null
   * @return the virtual group wrapped in a JCR node, or null if none exists
   * @since Sitevision 3.0
   */
  getVirtualGroupByName(aName: String | string): Node;

  /**
   * Provides access to virtual groups wrapped as a JCR node given the group name.
   * @param aNames a list of names, may not be null
   * @return a list of virtual groups wrapped in JCR nodes, or an empty list of none exists
   * @since Sitevision 3.0
   */
  getVirtualGroupsByName(aNames: List | unknown[]): List;
}

declare namespace PrincipalUtil {}

declare var principalUtil: PrincipalUtil;

export default principalUtil;
