import type { Node } from "../../../../../javax/jcr/Node";

/**
 * Role assignment representation that can be applied on a node to update its roles setup.
 *
 * <p>
 *    A role assignment instance is a representation of a <em>sv:role</em> and a
 *    <em>principal (sv:user, sv:simpleUser, sv:userGroup or sv:virtualGroup)</em>
 *    that can be applied to various nodes using the {@link #apply(Node)} method.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link RoleAssignmentBuilder#build()}.
 *    See {@link RoleAssignmentBuilder} for how to obtain an instance of the <code>RoleAssignmentBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 5.1
 */
export type RoleAssignment = {
  /**
   * Applies this role assignment on a given node.
   * @param aNode the node of the role assignment operation, typically a sv:page
   * @throws ConstraintViolationException if current user doesn't have permission to do the role assignment on aNode
   * @throws RepositoryException if something else goes wrong (e.g. mutation might fail if no lock can be acquired for aNode)
   * @see #isApplicable(Node)
   */
  apply(aNode: Node): void;

  /**
   * Whether or not current user is allowed to {@link #apply(Node)} or {@link #revoke(Node)} this role assignment for a given node.
   *
   * <p>
   *    <em>Permission note!</em> Current user must have {@link PermissionUtil.Permission#MANAGE_RIGHTS} on aNode
   *    and current user must also have the role (that this role assignment contains) on aNode.
   * </p>
   * @param aNode the node of the role assignment operation, typically a sv:page
   * @return true if current user is allowed to apply/revoke this role assignment on aNode, false otherwise
   */
  isApplicable(aNode: Node): boolean;

  /**
   * Whether or not a given node already has this role assignment applied.
   *
   * <p>
   *    <em>Note! If this method returns true, there is no need to execute {@link #apply(Node)}.</em>
   * </p>
   * @param aNode the node of the role assignment operation, typically a sv:page
   * @return true if aNode already has this role assignment, false otherwise
   */
  isApplied(aNode: Node): boolean;

  /**
   * Revokes this role assignment on a given node.
   * @param aNode the node of the revoke operation, typically a sv:page
   * @throws ConstraintViolationException if current user doesn't have permission to revoke the role assignment on aNode
   * @throws RepositoryException if something else goes wrong (e.g. mutation might fail if no lock can be acquired for aNode)
   * @see #isApplicable(Node)
   * @since Sitevision 6.0.1
   */
  revoke(aNode: Node): void;
};
