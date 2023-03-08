import type { Node } from "../../types/javax/jcr/Node";
import type { RoleAssignment } from "../../types/senselogic/sitevision/api/security/RoleAssignment";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builder of RoleAssignment instances.
 *
 *  <p>
 *     <em>Tip!</em> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *     more information about Builders and how to work with them!
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link RoleUtil#getRoleAssignmentBuilder()}.
 *     See {@link RoleUtil} for how to obtain an instance of the <code>RoleUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 5.1
 * @see RoleAssignment
 */
export interface RoleAssignmentBuilder extends Builder {
  /**
   * Sets the principal (sv:user, sv:simpleUser, sv:userGroup or sv:virtualGroup).
   * @param aPrincipal the principal
   * @return this builder
   */
  setPrincipal(aPrincipal: Node): RoleAssignmentBuilder;

  /**
   * Sets the role (sv:role).
   * @param aRole the role
   * @return this builder
   */
  setRole(aRole: Node): RoleAssignmentBuilder;

  /**
   * Clears the state of this builder.
   *
   *  <p>
   *     Sets the <em>principal</em> and the <em>role</em> to null.
   *  </p>
   * @return this builder
   */
  clear(): RoleAssignmentBuilder;

  /**
   * Creates a read-only RoleAssignment instance using current state of this builder.
   * @return a RoleAssignment instance
   * @throws IllegalStateException if role and/or principal is not properly set
   */
  build(): RoleAssignment;
}

declare namespace RoleAssignmentBuilder {}

declare var roleAssignmentBuilder: RoleAssignmentBuilder;

export default roleAssignmentBuilder;
