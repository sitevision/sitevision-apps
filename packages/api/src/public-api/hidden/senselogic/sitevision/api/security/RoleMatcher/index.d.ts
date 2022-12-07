import Node from "../../../../../javax/jcr/Node";

/**
 * Role matcher representation that can be matched on a node to check "is user in role".
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link RoleMatcherBuilder#build()}.
 *    See {@link RoleMatcherBuilder} for how to obtain an instance of the <code>RoleMatcherBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 6.1
 */
interface RoleMatcher {
  /**
   * Checks if matcher user is in all matcher roles on a given Node.
   * @param aNode the node, typically a sv:page
   * @return true if matcher "user is in role" for all of the matcher roles on aNode, false otherwise
   */
  matchesAll(aNode: Node): boolean;

  /**
   * Checks if matcher user is in any matcher role on a given Node.
   * @param aNode the node, typically a sv:page
   * @return true if matcher "user is in role" for any of the matcher roles on aNode, false otherwise
   */
  matchesAny(aNode: Node): boolean;
}

export default RoleMatcher;
