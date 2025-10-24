/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { NodeIterator } from "../../types/javax/jcr/NodeIterator";
import type { Filter } from "../../types/senselogic/sitevision/api/base/Filter";
import type { String } from "../../types/java/lang/String";
import type { Node } from "../../types/javax/jcr/Node";

import type { List } from "../../types/java/util/List";
import type { FilterSplit } from "../../types/senselogic/sitevision/api/base/FilterSplit";

/**
 * Node iterator utility interface.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getNodeIteratorUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 */
export interface NodeIteratorUtil {
  /**
   * Gets a filtered NodeIterator.
   *
   *  <p>
   *     This NodeIterator decorates a NodeIterator with a Filter, i.e. it will only return nodes that matches given filter.
   *  </p>
   *
   *  <p>
   *     This <strong>server-side Javascript example</strong> demonstrates how to create a node iterator that is very similar to the
   *     {@link #getMenuItems(Node) MenuItems} iterator but this node iterator is not respecting the "visibleInMenus" property.
   *  </p>
   *  <pre><code>    const nodeFilterUtil = require('NodeFilterUtil');
   *     const nodeIteratorUtil = require('NodeIteratorUtil');
   *     const startNode = ...
   *
   *     const filter = nodeFilterUtil.getAnyOfPrimaryNodeTypesFilter([
   *        'sv:page', 'sv:structurePage', 'sv:article', 'sv:link', 'sv:structureLink', 'sv:collaborationGroupPage'
   *     ]);
   *     const nodes = nodeIteratorUtil.getFilteredNodeIterator(startNode.getNodes(), filter);
   *
   *     while (nodes.hasNext()) {
   *        let node = nodes.nextNode();
   *        ...
   *     }</code></pre>
   * @param aNodeIterator a NodeIterator, must not be null
   * @param aFilter a Node Filter, must not be null
   * @return a filtered NodeIterator
   * @throws NullPointerException if aNodeIterator or aFilter is null
   * @see NodeFilterUtil
   * @since Sitevision 8.1
   */
  getFilteredNodeIterator(
    aNodeIterator: NodeIterator,
    aFilter: Filter
  ): NodeIterator;

  /**
   * Gets a node iterator via a node identifier.
   *
   *  <p>
   *     The purpose of this method is twofold:
   *  </p>
   *  <ul>
   *     <li>
   *        <em>Convenience.</em> This method combines {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getNodeByIdentifier(String)}
   *        and {@link Node#getNodes()}, i.e. a shortcut to get an iterator without having to actually lookup/resolve the parent node.
   *     </li>
   *     <li>
   *        <em>Permission workaround.</em> This method does <em>not</em> do any permission checks on the resolved parent Node, i.e.
   *        a shortcut to get an iterator of children where you (potentially) have permission from a parent where you don't.
   *     </li>
   *  </ul>
   * @param aIdentifier a node identifier
   * @return a <code>NodeIterator</code> for the sub nodes of the Node resolved via <code>aIdentifier</code>, or <code>null</code> if indeterminable
   * @since Sitevision 4.0.2
   */
  getNodeIteratorByIdentifier(aIdentifier: String | string): NodeIterator;

  /**
   * Gets an iterator for default menu items (i.e. non-hidden pages, link pages etc. where current user has read permission)
   * @param aParent the base node for the iterator
   * @return a <code>NodeIterator</code> for the sub nodes of <code>aParent</code>, or <code>null</code> if indeterminable&#xA; (i.e. <code>aParent</code> is not a <code>Node</code> in the page tree)
   */
  getMenuItems(aParent: Node): NodeIterator;

  /**
   * Gets an iterator for default menu items via a node identifier.
   *
   *  <p>
   *     The purpose of this method is twofold:
   *  </p>
   *  <ul>
   *     <li>
   *        <em>Convenience.</em> This method combines {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getNodeByIdentifier(String)}
   *        and {@link #getMenuItems(Node)}, i.e. a shortcut to get a menu iterator without having to actually lookup/resolve the parent node.
   *     </li>
   *     <li>
   *        <em>Permission workaround.</em> This method does <em>not</em> do any permission checks on the resolved parent Node, i.e.
   *        a shortcut to get an iterator of children where you (potentially) have permission from a parent where you don't.
   *     </li>
   *  </ul>
   * @param aIdentifier a node identifier
   * @return a <code>NodeIterator</code> for the sub nodes of the Node resolved via <code>aIdentifier</code>, or <code>null</code> if indeterminable
   * @since Sitevision 4.0.2
   * @see #getMenuItems(Node)
   */
  getMenuItemsByIdentifier(aIdentifier: String | string): NodeIterator;

  /**
   * Gets an iterator for default menu items (i.e. getMenuItems(Node)), including folders
   * @see #getMenuItems(Node)
   * @param aParent the base node for the iterator
   * @return a <code>NodeIterator</code> for the sub nodes of <code>aParent</code>, or <code>null</code> if indeterminable&#xA; (i.e. <code>aParent</code> is not a <code>Node</code> in the page tree)
   */
  getMenuItemsIncludingFolders(aParent: Node): NodeIterator;

  /**
   * Gets an iterator for default menu items (including folders) via a node identifier.
   *
   *  <p>
   *     The purpose of this method is twofold:
   *  </p>
   *  <ul>
   *     <li>
   *        <em>Convenience.</em> This method combines {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getNodeByIdentifier(String)} and
   *        {@link #getMenuItemsIncludingFolders(Node)}, i.e. a shortcut to get a menu iterator without having to actually
   *        lookup/resolve the parent node.
   *     </li>
   *     <li>
   *        <em>Permission workaround.</em> This method does <em>not</em> do any permission checks on the resolved parent Node, i.e.
   *        a shortcut to get an iterator of children where you (potentially) have permission from a parent where you don't.
   *     </li>
   *  </ul>
   * @param aIdentifier a node identifier
   * @return a <code>NodeIterator</code> for the sub nodes of the Node resolved via <code>aIdentifier</code>, or <code>null</code> if indeterminable
   * @since Sitevision 4.0.2
   * @see #getMenuItemsIncludingFolders(Node)
   */
  getMenuItemsIncludingFoldersByIdentifier(
    aIdentifier: String | string
  ): NodeIterator;

  /**
   * Gets the first node from a node iterator that matches a specified filter.
   *
   *  <p>
   *     <em>Tip!</em> Use {@link senselogic.sitevision.api.node.NodeFilterUtil} to get
   *     an appropriate node filter.
   *  </p>
   * @param aNodeIterator a node iterator
   * @param aFilter a node filter
   * @return first node that matches <code>aFilter</code>, or <code>null</code>.&#xA; If <code>aFilter</code> is <code>null</code>, the filter will be ignored (all nodes will be accepted).&#xA; If <code>aNodeIterator</code> is <code>null</code>, <code>null</code> will be returned.
   * @since Sitevision 3.6.2
   */
  findFirst(aNodeIterator: NodeIterator, aFilter: Filter): Node;

  /**
   * Gets a max-sized node list from a node iterator that matches a specified filter.
   *
   *  <p>
   *     <em>Tip!</em> Use {@link senselogic.sitevision.api.node.NodeFilterUtil} to get
   *     an appropriate node filter. If the list of nodes should be sorted by a specific property value,
   *     you would typically use {@link senselogic.sitevision.api.node.NodeComparatorUtil}
   *     to get an appropriate <code>Comparator</code>.
   *  </p>
   * @param aNodeIterator a node iterator
   * @param aFilter a node filter
   * @param aLimit max number of nodes to include in the result
   * @return a list of nodes that matches <code>aFilter</code>, never <code>null</code>.&#xA; The list will contain at most aLimit nodes.&#xA; If aNodeIterator is null, an empty list will be returned.&#xA; If aFilter is null, the filter will be ignored (all nodes will be accepted).&#xA; If aLimit is negative or zero, an empty list will be returned.
   * @since Sitevision 3.6.2
   */
  findNodes(aNodeIterator: NodeIterator, aFilter: Filter, aLimit: number): List;

  /**
   * Gets a max-sized node list from a node iterator that matches a specified filter, skipping a specified number of matching nodes.
   *
   *  <p>
   *     Executing <code>findMoreNodes(nodeIterator, filter, 0, 10)</code> is conceptually equivalent
   *     to executing <code>findNodes(nodeIterator, filter, 10)</code>.
   *  </p>
   *
   *  <p>
   *     <em>Tip!</em> Use {@link senselogic.sitevision.api.node.NodeFilterUtil} to get an appropriate node filter.
   *  </p>
   * @param aNodeIterator a node iterator
   * @param aFilter a node filter
   * @param aSkip number of matching nodes to skip
   * @param aLimit max number of nodes to include in the result
   * @return a list of nodes that matches aFilter, never null.&#xA; The list will contain at most aLimit number of nodes and aSkip number of nodes will be ignored.&#xA; If aNodeIterator is null, an empty list will be returned.&#xA; If aFilter is null, the filter will be ignored (all nodes will be accepted).&#xA; If aSkip is negative or zero, no nodes will be skipped.&#xA; If aLimit is negative or zero, an empty list will be returned.
   * @since Sitevision 2025.01.1
   */
  findMoreNodes(
    aNodeIterator: NodeIterator,
    aFilter: Filter,
    aSkip: number,
    aLimit: number
  ): List;

  /**
   * Gets a list of all nodes from a node iterator that matches a specified filter.
   *
   *  <p>
   *     Executing <code>findAll(nodeIterator, null)</code> is conceptually equivalent
   *     to executing <code>toList(nodeIterator)</code>.
   *  </p>
   *
   *  <p>
   *     <em>Tip!</em> Use {@link senselogic.sitevision.api.node.NodeFilterUtil} to get
   *     an appropriate node filter. If the list of nodes should be sorted by a specific property value,
   *     you would typically use {@link senselogic.sitevision.api.node.NodeComparatorUtil}
   *     to get an appropriate <code>Comparator</code>.
   *  </p>
   * @param aNodeIterator a node iterator
   * @param aFilter a node filter
   * @return a list of nodes that matches <code>aFilter</code>, never <code>null</code>.&#xA; If <code>aFilter</code> is <code>null</code>, the filter will be ignored (all nodes will be accepted).&#xA; If <code>aNodeIterator</code> is <code>null</code>, an empty list will be returned.
   * @since Sitevision 3.6.2
   */
  findAll(aNodeIterator: NodeIterator, aFilter: Filter): List;

  /**
   * Gets a list of all nodes of a node iterator.
   *
   *  <p>
   *     <strong>Note!</strong> This is a convenience method to use <strong>only when you must</strong> get nodes as a list!
   *     The only apparent reason is when you need need to <em>sort</em> the nodes! If you don't, you should use
   *     the <code>NodeIterator</code> instead and do your processing for each node.
   *  </p>
   *  <p>
   *     <strong>Sorting tip!</strong> When the list of nodes should be sorted by a specific <em>property value</em>,
   *     you would typically use {@link senselogic.sitevision.api.node.NodeComparatorUtil}to get an appropriate
   *     <code>Comparator</code>. The list can then be sorted by <code>Collections.sort(List, Comparator)</code>.
   *     When using Velocity, you must use the non-static class {@link senselogic.sitevision.api.script.factory.CollectionsInstance}.
   *  </p>
   * @param aNodeIterator a node iterator
   * @return a list of all nodes provided by <code>aNodeIterator</code>, never <code>null</code>.
   * @since Sitevision 3.6.2
   */
  toList(aNodeIterator: NodeIterator): List;

  /**
   * Gets the filtering result of a split operation for a node iterator with a node filter as divider.
   *
   *  <p>
   *     This method would typically be used instead of {@link #findAll(javax.jcr.NodeIterator, senselogic.sitevision.api.base.Filter)}
   *     when you are also interested in the nodes that does NOT match the filter.
   *  </p>
   *  <p>
   *     <em>Note!</em> If <code>aFilter</code> is <code>null</code>, no nodes will match (all nodes
   *     gathered via <code>aNodeIterator</code> will be <em>rejected</em> in the resulting filter split).
   *  </p>
   * @param aNodeIterator a node iterator
   * @param aFilter a node filter
   * @return the filtering result
   * @since Sitevision 3.6.3
   * @see senselogic.sitevision.api.node.NodeFilterUtil#split(java.util.Collection, senselogic.sitevision.api.base.Filter)
   */
  split(aNodeIterator: NodeIterator, aFilter: Filter): FilterSplit;
}

declare namespace NodeIteratorUtil {}

declare var nodeIteratorUtil: NodeIteratorUtil;

export default nodeIteratorUtil;
