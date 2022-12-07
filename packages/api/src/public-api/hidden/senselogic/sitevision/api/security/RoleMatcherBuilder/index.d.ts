import Node from "../../../../../javax/jcr/Node";
import RoleMatcher from "../RoleMatcher";
import Builder from "../../base/Builder";

/**
 * Builder of RoleMatcher instances.
 *
 * <p>
 *    <em>Tip!</em> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link RoleUtil#getRoleMatcherBuilder()}.
 *    See {@link RoleUtil} for how to obtain an instance of the <code>RoleUtil</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 6.1
 */

interface RoleMatcherBuilder {
  /**
   * Sets the user (sv:user, sv:simpleUser).
   * @param aUser the user
   * @return this builder
   */
  setUser(aUser: Node): RoleMatcherBuilder;

  /**
   * Adds a role (sv:role).
   * @param aRole the role to add
   * @return this builder
   */
  addRole(aRole: Node): RoleMatcherBuilder;

  /**
   * Clears the state of this builder.
   *
   * <p>
   *    Sets the <em>user</em> and the <em>roles</em> to null.
   * </p>
   * @return this builder
   */
  clear(): RoleMatcherBuilder;

  /**
   * Creates a read-only RoleMatcher instance using current state of this builder.
   * @return a RoleMatcher instance
   * @throws IllegalStateException if user is not properly set or if no roles are added
   */
  build(): RoleMatcher;
}
