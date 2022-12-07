import RoleAssignmentBuilder from "../RoleAssignmentBuilder";
import RoleMatcherBuilder from "../RoleMatcherBuilder";

import Node from "../../hidden/javax/jcr/Node";

/**
 * Creates a RoleAssignmentBuilder instance.
 * @return a RoleAssignmentBuilder
 */
export function getRoleAssignmentBuilder(): RoleAssignmentBuilder;

/**
 * Creates a RoleMatcherBuilder instance.
 * @return a RoleMatcherBuilder
 * @since Sitevision 6.1
 */
export function getRoleMatcherBuilder(): RoleMatcherBuilder;

/**
 * Gets a role by name.
 * @param aRoleName the name of the role
 * @return the role (sv:role) with name aRoleName, or null if no such role could be found
 */
export function getRoleByName(aRoleName: string): Node;

/**
 * Checks if a role contains a specific permission.
 * @param aRole the role (sv:role)
 * @param aPermission the permission
 * @return true if aRole is a sv:role and contains aPermission, false otherwise
 */
export function containsPermission(aRole: Node, aPermission: unknown): boolean;

/**
 * Role utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getRoleUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 5.1
 * @see PermissionUtil
 */
declare namespace roleUtil {
  export {
    getRoleAssignmentBuilder,
    getRoleMatcherBuilder,
    getRoleByName,
    containsPermission,
  };
}

export default roleUtil;
