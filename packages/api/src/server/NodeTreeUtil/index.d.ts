import Node from '../../builtins/Node';
import List from '../../builtins/List';

/**
* Find a portlet with a specific name on a page node.
* @returns {Node} the first occurrence of a portlet with name aPortletName, or null if no such portlet can be foundor if aPageNode is not a page node 
* @param {Node} aPageNode - the page node that has content (e.g. portlets and layouts)
* @param {string} aPortletName - the name of the portlet that should be found
*/
export function findPortletByName(aPageNode: Node, aPortletName: string): Node;

/**
* Find all portlets with a specific name on a page node.
* @returns {List<Node>} all occurrences of portlets with name aPortletName.If no such portlets can be found or if aPageNode is not a page node, an empty List is returned 
* @param {Node} aPageNode - the page node that has content (e.g. portlets and layouts)
* @param {string} aPortletName - the name of the portlet that should be found
*/
export function findPortletsByName(aPageNode: Node, aPortletName: string): List<Node>;

/**
* Find all portlets with a specific name on a page node and applies a node filter to the result.
* @returns {List<Node>} all occurrences of portlets with name aPortletName that also applies to the aNodeFilter filter.If no such portlets can be found or if aPageNode is not a page node, an empty List is returned 
* @param {Node} aPageNode - the page node that has content (e.g. portlets and layouts)
* @param {string} aPortletName - the name of the portlet that should be found
* @param {function} aNodeFilter - a node filter to refine the result of all portlets with specified name
*/
export function findPortletsByName(aPageNode: Node, aPortletName: string, aNodeFilter: (aPageNode: Node) => boolean): List<Node>;

/**
* Find all portlets of a specific type on a page node.
* @returns {List<Node>} all occurrences of portlets of type aPortletType.If no such portlets can be found or if aPageNode is not a page node, an empty List is returned 
* @param {Node} aPageNode - the page node that has content (e.g. portlets and layouts)
* @param {string} aPortletType - the type of portlet that should be found
*/
export function findPortletsByType(aPageNode: Node, aPortletType: string): List<Node>;

/**
* Find all portlets with a specific type on a page node and applies a node filter to the result.
* @returns {List<Node>} all occurrences of portlets of type aPortletType that also applies to the aNodeFilter filter.If no such portlets can be found or if aPageNode is not a page node, an empty List is returned 
* @param {Node} aPageNode - the page node that has content (e.g. portlets and layouts)
* @param {string} aPortletType - the type of portlet that should be found
* @param {function} aNodeFilter - a node filter to refine the result of all portlets of specified type
*/
export function findPortletsByType(aPageNode: Node, aPortletType: string, aaNodeFilter: (aPageNode: Node) => boolean): List<Node>;

/**
* Gets a node relative to another node.
* @returns {Node} the node at aRelPath, or null if no such node could be retrieved 
* @param {Node} aNode - the node
* @param {string} aRelPath - the relative path (of aNode) to the node to retrieve
*/
export function getNode(aNode: Node, aRelPath: string): Node;

/**
* Gets the parent of a node.
* @returns {Node} the parent node of aNode, or null if no parent could be retrieved 
* @param {Node} aNode - the node
*/
export function getParent(aNode: Node): Node;

/**
* Returns a top-down list of all web nodes from the site page down to a specified page tree node.
* @returns {List<Node>} a top-down list of the web nodes that are in the tree path from the site page node downto aDescendantNode(the site page node and the descendant node are both included in the list).An empty list will be returned if aDescendantNode is null or not a descendant of the site page. 
* @param {Node} aDescendantNode - a page tree node that is a descendant/child of the site page
*/
export function getWebPathNodes(aDescendantNode: Node): List<Node>;

/**
* Check if a given page tree node is a descendant of another page tree node.
* @returns {boolean} true if aDescendantNode is a descendant of aParentNode, false otherwise 
* @param {Node} aDescendantNode - the presumed descendant page tree Node (e.g. "child node")
* @param {Node} aParentNode - the presumed parent page tree Node of the descendant
*/
export function isDescendantOf(aDescendantNode: Node, aParentNode: Node): boolean;

declare namespace nodeTreeUtil {
  export {
    findPortletByName,
    findPortletsByName,  
    findPortletsByType,    
    getNode,
    getParent,
    getWebPathNodes,
    isDescendantOf,
  }
}

export default nodeTreeUtil;
