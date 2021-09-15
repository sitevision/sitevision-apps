import List from '../../builtins/List';
import Node from '../../builtins/Node';
import NodeIterator from '../../builtins/NodeIterator';

/**
* Gets a list of all nodes from a node iterator that matches a specified filter.
* @param {NodeIterator} aNodeIterator - a node iterator
* @param {function} aFilter - a node filter
* @returns {List<Node>} a list of nodes that matches aFilter, never null.If aFilter is null, the filter will be ignored (all nodes will be accepted).If aNodeIterator is null, an empty list will be returned. 
*/
export function findAll(aNodeIterator: NodeIterator, aFilter: (node: Node) => boolean): List<Node>;

/**
* Gets the first node from a node iterator that matches a specified filter.
* @param {NodeIterator} aNodeIterator - a node iterator
* @param {function} aFilter - a node filter
* @returns {Node} first node that matches aFilter, or null.If aFilter is null, the filter will be ignored (all nodes will be accepted).If aNodeIterator is null, null will be returned. 
*/
export function findFirst(aNodeIterator: NodeIterator, aFilter: (node: Node) => boolean): Node;

/**
* Gets a max-sized node list from a node iterator that matches a specified filter.
* @param {NodeIterator} aNodeIterator - a node iterator
* @param {function} aFilter - a node filter
* @param {number} aMaxNodesToFind - max number of nodes to include in the result
* @returns {List<Node>} a list of nodes that matches aFilter, never null.The list will contain at most aMaxNodesToFind nodes.If aFilter is null, the filter will be ignored (all nodes will be accepted).If aNodeIterator is null, an empty list will be returned.If aMaxNodesToFind is negative, an empty list will be returned. 
*/
export function findNodes(aNodeIterator: NodeIterator, aFilter: (node: Node) => boolean, aMaxNodesToFind: number): List<Node>;

/**
* Gets a filtered NodeIterator.
* @param {NodeIterator} aNodeIterator - a NodeIterator, must not be null
* @param {function} aNodeFilter - a Node Filter, must not be null
* @returns {NodeIterator} a filtered NodeIterator 
*/
export function getFilteredNodeIterator(aNodeIterator: NodeIterator, aNodeFilter: Filter): NodeIterator;

/**
* Gets an iterator for default menu items (i.e. non-hidden pages, link pages etc. where current user has read permission)
* @param {Node} aParent - the base node for the iterator
* @returns {NodeIterator} a NodeIterator for the sub nodes of aParent, or null if indeterminable(i.e. aParent is not a Node in the page tree) 
*/
export function getMenuItems(aParent: Node): NodeIterator;

/**
* Gets an iterator for default menu items via a node identifier.
* @param {string} aIdentifier - a node identifier
* @returns {NodeIterator} a NodeIterator for the sub nodes of the Node resolved via aIdentifier, or null if indeterminable 
*/
export function getMenuItemsByIdentifier(aIdentifier: string): NodeIterator;

/**
* Gets an iterator for default menu items (i.e. getMenuItems(Node)), including folders
* @param {Node} aParent - the base node for the iterator
* @returns {NodeIterator} a NodeIterator for the sub nodes of aParent, or null if indeterminable(i.e. aParent is not a Node in the page tree) 
*/
export function getMenuItemsIncludingFolders(aParent: Node): NodeIterator;

/**
* Gets an iterator for default menu items (including folders) via a node identifier.
* @param {string} aIdentifier - a node identifier
* @returns {NodeIterator} a NodeIterator for the sub nodes of the Node resolved via aIdentifier, or null if indeterminable 
*/
export function getMenuItemsIncludingFoldersByIdentifier(aIdentifier: string): NodeIterator;

/**
* Gets a node iterator via a node identifier.
* @param {string} aIdentifier - a node identifier
* @returns {NodeIterator} a NodeIterator for the sub nodes of the Node resolved via aIdentifier, or null if indeterminable 
*/
export function getNodeIteratorByIdentifier(aIdentifier: string): NodeIterator;

/**
* Gets the filtering result of a split operation for a node iterator with a node filter as divider.
* @param {NodeIterator} aNodeIterator - a node iterator
* @param {function} aFilter - a node filter
* @returns {FilterSplit<Node>} the filtering result 
*/
export function split(aNodeIterator: NodeIterator, callback: aFilter): FilterSplit<Node>;

/**
* Gets a list of all nodes of a node iterator.
* @param {NodeIterator} aNodeIterator - a node iterator
* @returns {List<Node>} a list of all nodes provided by aNodeIterator, never null. 
*/
export function toList(aNodeIterator: NodeIterator): List<Node>;

declare namespace nodeIteratorUtil {
  export {
    findAll,
    findFirst,
    findNodes,
    getFilteredNodeIterator,
    getMenuItems,
    getMenuItemsByIdentifier,
    getMenuItemsIncludingFolders,
    getMenuItemsIncludingFoldersByIdentifier,
    getNodeIteratorByIdentifier,
    split,
    toList,
  };
}

export default nodeIteratorUtil;

