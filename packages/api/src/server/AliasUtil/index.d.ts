import Node from '../../builtins/Node';

/**
 * Gets the alias name for a given Node.
 *
 * @param aNode a Node that is the target of an alias, typically a sv:page, sv:article or sv:file
 * @return the first found alias name for aNode, or null if aNode is null or no matching alias could be found
 */
export function getAliasName(aNode: Node): string | null;

declare namespace aliasUtil {
  export { getAliasName };
}

export default aliasUtil;
