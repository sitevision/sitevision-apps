import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";

import type { List } from "../../types/java/util/List";
import type { Filter } from "../../types/senselogic/sitevision/api/base/Filter";

/**
 * Node tree utility interface.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getNodeTreeUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 */
export interface NodeTreeUtil {
  /**
   * Gets a node relative to another node.
   *
   *  <p>
   *     <em>
   *        Note! This is mere a convenience alias for {@link javax.jcr.Node#getNode(String)} but unlike the original,
   *        this method returns null instead of throwing an exception if no node could be retrieved at a specified path.
   *     </em>
   *  </p>
   * @param aNode the node
   * @param aRelPath the relative path (of <code>aNode</code>) to the node to retrieve
   * @return the node at <code>aRelPath</code>, or <code>null</code> if no such node could be retrieved
   * @since Sitevision 4.0
   */
  getNode(aNode: Node, aRelPath: String | string): Node;

  /**
   * Gets the parent of a node.
   *
   *  <p>
   *     <em>
   *        Note! This is mere a convenience alias for {@link javax.jcr.Item#getParent()} but unlike the original,
   *        this method returns null instead of throwing an exception if no parent node could be retrieved.
   *     </em>
   *  </p>
   * @param aNode the node
   * @return the parent node of <code>aNode</code>, or <code>null</code> if no parent could be retrieved
   * @since Sitevision 4.0
   */
  getParent(aNode: Node): Node;

  /**
   * Check if a given page tree node is a descendant of another page tree node.
   * @param aDescendantNode the presumed descendant page tree <code>Node</code> (e.g. "child node")
   * @param aParentNode the presumed parent page tree <code>Node</code> of the descendant
   * @return <code>true</code> if <code>aDescendantNode</code> is a descendant of <code>aParentNode</code>, <code>false</code> otherwise
   */
  isDescendantOf(aDescendantNode: Node, aParentNode: Node): boolean;

  /**
   * Find a portlet with a specific name on a page node.
   *
   *  <p>
   *     The <em>name</em> of the portlet is determined by the <em>displayName</em> property.
   *  </p>
   * @param aPageNode the page node that has content, typically a sv:page or sv:article
   * @param aPortletName the name of the sv:portlet that should be found
   * @return the first occurrence of a sv:portlet with name <code>aPortletName</code>, or <code>null</code> if no such portlet can be found&#xA; or if <code>aPageNode</code> is not a page node
   * @since Sitevision 2.6
   * @see #findPortletsByName(Node,String)
   */
  findPortletByName(aPageNode: Node, aPortletName: String | string): Node;

  /**
   * Find all portlets with a specific name on a page node.
   *
   *  <p>
   *     The <em>name</em> of the portlet is determined by the <em>displayName</em> property.
   *  </p>
   * @param aPageNode the page node that has content, typically a sv:page or sv:article
   * @param aPortletName the name of the sv:portlet that should be found
   * @return all occurrences of portlets with name <code>aPortletName</code>.&#xA; If no such portlets can be found or if <code>aPageNode</code> is not a page node, an empty <code>List</code> is returned
   * @since Sitevision 2.6
   * @see #findPortletByName(Node,String)
   */
  findPortletsByName(aPageNode: Node, aPortletName: String | string): List;

  /**
   * Find all portlets with a specific name on a page node and applies a node filter to the result.
   *
   *  <p>
   *     The <em>name</em> of the portlet is determined by the <em>displayName</em> property.
   *  </p>
   *
   *  <p>
   *     <em>Tip!</em> {@link senselogic.sitevision.api.node.NodeFilterUtil} can be used to create a node filter.
   *  </p>
   * @param aPageNode the page node that has content, typically a sv:page or sv:article
   * @param aPortletName the name of the sv:portlet that should be found
   * @param aNodeFilter a node filter to refine the result of all portlets with specified name
   * @return all occurrences of portlets with name <code>aPortletName</code> that also applies to the <code>aNodeFilter</code> filter.&#xA; If no such portlets can be found or if <code>aPageNode</code> is not a page node, an empty <code>List</code> is returned
   * @since Sitevision 3.6.2
   */
  findPortletsByName(
    aPageNode: Node,
    aPortletName: String | string,
    aNodeFilter: Filter
  ): List;

  /**
   * Find all portlets of a specific type on a page node.
   *
   *  <p>
   *     The <em>type</em> of the portlet is determined by the <em>portletName</em> property. This is typically
   *     the value that is specified in the &lt;portlet-name&gt; element of the portlet in <code>portlet.xml</code>.
   *  </p>
   *  <p>
   *     Types for some common portlets:
   *  </p>
   *  <ul>
   *     <li>
   *        The Sitevision <em>Text</em> portlet type: <code>text</code>
   *     </li>
   *     <li>
   *        The Sitevision <em>Image</em> portlet type: <code>image</code>
   *     </li>
   *  </ul>
   * @param aPageNode the page node that has content, typically a sv:page or sv:article
   * @param aPortletType the type of sv:portlet that should be found
   * @return all occurrences of portlets of type <code>aPortletType</code>.&#xA; If no such portlets can be found or if <code>aPageNode</code> is not a page node, an empty <code>List</code> is returned
   * @since Sitevision 3.6.2
   */
  findPortletsByType(aPageNode: Node, aPortletType: String | string): List;

  /**
   * Find all portlets with a specific type on a page node and applies a node filter to the result.
   *
   *  <p>
   *     The <em>type</em> of the portlet is determined by the <em>portletName</em> property. This is typically
   *     the value that is specified in the &lt;portlet-name&gt; element of the portlet in <code>portlet.xml</code>.
   *  </p>
   *
   *  <p>
   *     Types for some common portlets:
   *  </p>
   *  <ul>
   *     <li>
   *        The Sitevision <em>Text</em> portlet type: <code>text</code>
   *     </li>
   *     <li>
   *        The Sitevision <em>Image</em> portlet type: <code>image</code>
   *     </li>
   *  </ul>
   *
   *  <p>
   *     <Strong>Tip!</Strong> {@link senselogic.sitevision.api.node.NodeFilterUtil} can be used to create a node filter.
   *  </p>
   *  <p>
   *     Below is a <strong>Velocity example</strong> that demonstrates how to extract all Image portlets from the content of a
   *     specified page. A node filter is applied to only return the Image portlets that has a display name that contains the
   *     word <em>logo</em>.
   *  </p>
   *  <pre><code>    <em>## Create a filter that matches nodes that has a displayName that contains "logo"</em>
   *     #set ($nodeFilterUtil = $sitevisionUtils.NodeFilterUtil)
   *     #set ($containsLogoFilter = $nodeFilterUtil.getContainsStringPropertyFilter('displayName', 'logo'))
   *
   *     <em>## Extract all matching Image portlets from the page</em>
   *     #set ($logoImagePortlets = $nodeTreeUtil.findPortletsByType($thePage, 'image', $containsLogoFilter))
   *     #if (!$logoImagePortlets.isEmpty())
   *        <em>## Handle matching image portlets</em>
   *        ...
   *     #end</code></pre>
   *  <p>
   *     Below is another <strong>Velocity example</strong>. A node filter is applied to only return the Image portlets that uses
   *     images that has a width between 24px and 132px <em>(an Image portlet has a 'image' property that can be resolved as a sv:image
   *     Node and such node has a 'width' property)</em>.
   *  </p>
   *  <pre><code>    <em>## Create a filter that matches nodes that has a nested width between [24..132]</em>
   *     #set ($nodeFilterUtil = $sitevisionUtils.NodeFilterUtil)
   *     #set ($imageWidthFilter = $nodeFilterUtil.getRangeNestedIntPropertyFilter('image', 'width', 24, 132))
   *
   *     <em>## Extract all Image portlets that uses an "appropriate" image</em>
   *     #set ($foundImagePortlets = $nodeTreeUtil.findPortletsByType($thePage, 'image', $imageWidthFilter))
   *     #if (!$foundImagePortlets.isEmpty())
   *        <em>## Handle matching image portlets</em>
   *        ...
   *     #end
   *  </code></pre>
   * @param aPageNode the page node that has content, typically a sv:page or sv:article
   * @param aPortletType the type of sv:portlet that should be found
   * @param aNodeFilter a node filter to refine the result of all portlets of specified type
   * @return all occurrences of portlets of type <code>aPortletType</code> that also applies to the <code>aNodeFilter</code> filter.&#xA; If no such portlets can be found or if <code>aPageNode</code> is not a page node, an empty <code>List</code> is returned
   * @since Sitevision 3.6.2
   */
  findPortletsByType(
    aPageNode: Node,
    aPortletType: String | string,
    aNodeFilter: Filter
  ): List;

  /**
   * Returns a top-down list of all web nodes from the site page down to a specified page tree node.
   *
   *  <p>
   *  This method traverses the site page tree and returns a list of all web nodes, from the site page to a descendant.
   *  The tree traversal will use a maximum tree depth of 50. If the specified node is deeper down in the tree than that,
   *  an incomplete list will be returned (top nodes will be missing).
   *  </p>
   *
   *  <p>
   *  <em>Note!</em> Mentioned "web nodes" are by this method considered to be all child nodes of the site page node you
   *  can see in the Sitevision editor Navigator that are accessible from the location bar of a browser (e.g. pages and articles
   *  but not folders and archives). File and image nodes are also recognized as web nodes - even if they are in the "site global"
   *  archive (i.e. in the site tree, not actually in the site page tree).
   *
   *  In other words, though they are accessible from the location bar of a browser - a portlet node or layout node is <em>not</em>
   *  considered to be a web node by this method.
   *  </p>
   *
   *  <p>
   *     <em>Tip! If you should render a linked "path to this page", consider using the <code>renderWebPathNodes</code>
   *     utility of {@link senselogic.sitevision.api.render.OutputUtil}.</em>
   *  </p>
   * @param aDescendantNode a page tree node that is a descendant/child of the site page, typically a sv:page or sv:article
   * @return a top-down list of the web nodes that are in the tree path from the site page node downto <code>aDescendantNode</code>&#xA; (the site page node and the descendant node are both included in the list).&#xA; An empty list will be returned if <code>aDescendantNode</code> is <code>null</code> or not a descendant of the site page.
   * @since Sitevision 2.6.1_06
   * @see senselogic.sitevision.api.render.OutputUtil#renderWebPathNodes(javax.jcr.Node, senselogic.sitevision.api.render.LinkRenderer, String)
   */
  getWebPathNodes(aDescendantNode: Node): List;
}

declare namespace NodeTreeUtil {}

declare var nodeTreeUtil: NodeTreeUtil;

export default nodeTreeUtil;
