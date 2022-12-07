import Node from "../../hidden/javax/jcr/Node";

/**
 * Gets the alias name for a given Node.
 * @param aNode a Node that is the target of an alias, typically a sv:page, sv:article or sv:file
 * @return the first found alias name for aNode, or null if aNode is null or no matching alias could be found
 */
export function getAliasName(aNode: Node): string;

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
declare namespace aliasUtil {
  export { getAliasName };
}

export default aliasUtil;
