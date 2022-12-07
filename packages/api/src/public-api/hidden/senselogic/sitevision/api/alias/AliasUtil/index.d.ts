import Node from "../../../../../javax/jcr/Node";

/**
 * Alias utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getAliasUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 2022.10.2
 */

interface AliasUtil {
  /**
   * Gets the alias name for a given Node.
   * @param aNode a Node that is the target of an alias, typically a sv:page, sv:article or sv:file
   * @return the first found alias name for aNode, or null if aNode is null or no matching alias could be found
   */
  getAliasName(aNode: Node): string;
}
