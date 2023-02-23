import type { RoleAssignmentBuilder } from "../RoleAssignmentBuilder";
import type { RoleMatcherBuilder } from "../RoleMatcherBuilder";
import type { String } from "../../types/java/lang/String";
import type { Node } from "../../types/javax/jcr/Node";
import type Permission from "../PermissionUtil.Permission";

/**
 * Role utility interface.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getRoleUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 5.1
 * @see PermissionUtil
 */
export interface RoleUtil {
  /**
   * Creates a RoleAssignmentBuilder instance.
   * @return a RoleAssignmentBuilder
   */
  getRoleAssignmentBuilder(): RoleAssignmentBuilder;

  /**
   * Creates a RoleMatcherBuilder instance.
   * @return a RoleMatcherBuilder
   * @since Sitevision 6.1
   */
  getRoleMatcherBuilder(): RoleMatcherBuilder;

  /**
   * Gets a role by name.
   * @param aRoleName the name of the role
   * @return the role (sv:role) with name aRoleName, or null if no such role could be found
   */
  getRoleByName(aRoleName: String | string): Node;

  /**
   * Checks if a role contains a specific permission.
   * @param aRole the role (sv:role)
   * @param aPermission the permission
   * @return true if aRole is a sv:role and contains aPermission, false otherwise
   */
  containsPermission(aRole: Node, aPermission: Permission): boolean;
}

declare namespace RoleUtil {}

declare var roleUtil: RoleUtil;

export default roleUtil;
