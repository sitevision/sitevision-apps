import Node from "../../hidden/javax/jcr/Node";
import RoleAssignment from "../../hidden/senselogic/sitevision/api/security/RoleAssignment";
import Builder from "../../hidden/senselogic/sitevision/api/base/Builder";

/**
 * Sets the principal (sv:user, sv:simpleUser, sv:userGroup or sv:virtualGroup).
 * @param aPrincipal the principal
 * @return this builder
 */
export function setPrincipal(aPrincipal: Node): RoleAssignmentBuilder;

/**
 * Sets the role (sv:role).
 * @param aRole the role
 * @return this builder
 */
export function setRole(aRole: Node): RoleAssignmentBuilder;

/**
 * Clears the state of this builder.
 *
 * <p>
 *    Sets the <em>principal</em> and the <em>role</em> to null.
 * </p>
 * @return this builder
 */
export function clear(): RoleAssignmentBuilder;

/**
 * Creates a read-only RoleAssignment instance using current state of this builder.
 * @return a RoleAssignment instance
 * @throws IllegalStateException if role and/or principal is not properly set
 */
export function build(): RoleAssignment;

/**
 * Builder of RoleAssignment instances.
 *
 * <p>
 *    <em>Tip!</em> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link RoleUtil#getRoleAssignmentBuilder()}.
 *    See {@link RoleUtil} for how to obtain an instance of the <code>RoleUtil</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 5.1
 * @see RoleAssignment
 */
declare namespace roleAssignmentBuilder {
  export { setPrincipal, setRole, clear, build };
}

export default roleAssignmentBuilder;
