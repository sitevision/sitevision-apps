import Node from "../../hidden/javax/jcr/Node";

import LinkRenderer from "../LinkRenderer";

/**
 * Gets a text embedded in a html element with a class attribute.
 *
 * The html element used depends on the element type settings of the <code>aFontNode</code>. The html element in the returned result
 * will always be a paragraph (<code>&lt;p&gt;</code>) with no class attribute if <code>aFontNode</code> is <code>null</code>
 * or not of primary type <code>sv:font</code>.
 *
 * <p><strong>Some examples:</strong></p>
 * <p>
 * Method call: <code>getHtmlText("Hello world! one &lt; two", myFontNode)</code><br>
 * will return any of the following:
 * </p>
 * <ul>
 * <li><code>&lt;h1 class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/h1&gt;</code></li>
 * <li><code>&lt;h2 class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/h2&gt;</code></li>
 * <li><code>&lt;h3 class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/h3&gt;</code></li>
 * <li><code>&lt;h4 class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/h4&gt;</code></li>
 * <li><code>&lt;h5 class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/h5&gt;</code></li>
 * <li><code>&lt;h6 class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/h6&gt;</code></li>
 * <li><code>&lt;p class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/p&gt;</code></li>
 * <li><code>&lt;span class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/span&gt;</code></li>
 * <li><code>&lt;code class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/code&gt;</code></li>
 * <li><code>&lt;sub class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/sub&gt;</code></li>
 * <li><code>&lt;sup class="selectorTextOfMyFontNode"&gt;Hello world! one &lt; two&lt;/sup&gt;</code></li>
 * </ul>
 *
 * <p>
 * Method call: <code>getHtmlText("Hello world! one &lt; two", null)</code><br>
 * will return this:
 * </p>
 * <ul>
 * <li><code>&lt;p&gt;Hello world! one &lt; two&lt;/p&gt;</code></li>
 * </ul>
 * @param aText the text to be embedded in a html element
 * @param aFontNode a <code>Node</code> of primary type <code>sv:font</code> that determines the type of html element to use and the class attribute value of the element
 * @return <code>aText</code> embedded in a html element, or empty <code>String</code> if <code>aText</code> is <code>null</code>
 * @see #getEscapedHtmlText(String, javax.jcr.Node)
 * @since Sitevision 2.6.1_02
 */
export function getHtmlText(aText: string, aFontNode: Node): string;

/**
 * Gets a text embedded in a html element with a class attribute and a style attribute.
 *
 * The html element used depends on the element type settings of the <code>aFontNode</code>. The html element in the returned result
 * will always be a paragraph (<code>&lt;p&gt;</code>) with no class attribute if <code>aFontNode</code> is <code>null</code>
 * or not of primary type <code>sv:font</code>.
 *
 * <code>aStyle</code> will be ignored if it is <code>null</code>.
 *
 * <p><strong>Some examples:</strong></p>
 * <p>
 * Method call: <code>getHtmlText("Hello world! one &lt; two", myFontNode, "padding-left:0.7em")</code><br>
 * will return any of the following:
 * </p>
 * <ul>
 * <li><code>&lt;h1 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/h1&gt;</code></li>
 * <li><code>&lt;h2 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/h2&gt;</code></li>
 * <li><code>&lt;h3 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/h3&gt;</code></li>
 * <li><code>&lt;h4 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/h4&gt;</code></li>
 * <li><code>&lt;h5 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/h5&gt;</code></li>
 * <li><code>&lt;h6 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/h6&gt;</code></li>
 * <li><code>&lt;p class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/p&gt;</code></li>
 * <li><code>&lt;span class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/span&gt;</code></li>
 * <li><code>&lt;code class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/code&gt;</code></li>
 * <li><code>&lt;sub class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/sub&gt;</code></li>
 * <li><code>&lt;sup class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/sup&gt;</code></li>
 * </ul>
 *
 * <p>Method call: <code>getHtmlText("Hello world! one &lt; two", null, "padding-left:0.7em")</code><br>
 * will return this:
 * </p>
 * <ul>
 *    <li><code>&lt;p style="padding-left:0.7em"&gt;Hello world! one &lt; two&lt;/p&gt;</code></li>
 * </ul>
 *
 * <p>Method call: <code>getHtmlText("Hello world! one &lt; two", null, null)</code><br>
 * will return this:
 * </p>
 * <ul>
 *    <li><code>&lt;p&gt;Hello world! one &lt; two&lt;/p&gt;</code></li>
 * </ul>
 *
 * <p>Method call: <code>getHtmlText("Hello world! one &lt; two", myFontNode, null)</code><br>
 * will return the same result as if the {@link #getHtmlText(String, javax.jcr.Node) getHtmlText(String, Node)} method had been invoked.
 * </p>
 * @param aText the text to be embedded in a html element
 * @param aFontNode a <code>Node</code> of primary type <code>sv:font</code> that determines the type of html element to use and the class attribute value of the element
 * @param aStyle the style that should be inserted in the style attribute of the element
 * @return <code>aText</code> embedded in a html element, or empty <code>String</code> if <code>aText</code> is <code>null</code>
 * @see #getEscapedHtmlText(String, javax.jcr.Node, String)
 * @since Sitevision 2.6.1_02
 */
export function getHtmlText(
  aText: string,
  aFontNode: Node,
  aStyle: string
): string;

/**
 * Gets a text escaped and embedded in a html element with a class attribute.
 *
 * The html element used depends on the element type settings of the <code>aFontNode</code>. The html element in the returned result
 * will always be a paragraph (<code>&lt;p&gt;</code>) with no class attribute if <code>aFontNode</code> is <code>null</code>
 * or not of primary type <code>sv:font</code>.
 *
 * <p><strong>Some examples:</strong></p>
 * <p>
 * Method call: <code>getEscapedHtmlText("Hello world! one &lt; two", myFontNode)</code><br>
 * will return any of the following:
 * </p>
 * <ul>
 * <li><code>&lt;h1 class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/h1&gt;</code></li>
 * <li><code>&lt;h2 class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/h2&gt;</code></li>
 * <li><code>&lt;h3 class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/h3&gt;</code></li>
 * <li><code>&lt;h4 class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/h4&gt;</code></li>
 * <li><code>&lt;h5 class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/h5&gt;</code></li>
 * <li><code>&lt;h6 class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/h6&gt;</code></li>
 * <li><code>&lt;p class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/p&gt;</code></li>
 * <li><code>&lt;span class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/span&gt;</code></li>
 * <li><code>&lt;code class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/code&gt;</code></li>
 * <li><code>&lt;sub class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/sub&gt;</code></li>
 * <li><code>&lt;sup class="selectorTextOfMyFontNode"&gt;Hello world! one &amp;lt; two&lt;/sup&gt;</code></li>
 * </ul>
 *
 * <p>
 * Method call: <code>getEscapedHtmlText("Hello world! one &lt; two", null)</code><br>
 * will return this:
 * </p>
 * <ul>
 * <li><code>&lt;p&gt;Hello world! one &amp;lt; two&lt;/p&gt;</code></li>
 * </ul>
 * @param aPlainText the text to be escaped and embedded in a html element
 * @param aFontNode a <code>Node</code> of primary type <code>sv:font</code> that determines the type of html element to use and the class attribute value of the element
 * @return <code>aPlainText</code> escaped and embedded in a html element, or empty String if <code>aPlainText</code> is null
 * @see #getHtmlText(String, javax.jcr.Node)
 * @since Sitevision 2.6.1_02
 */
export function getEscapedHtmlText(aPlainText: string, aFontNode: Node): string;

/**
 * Gets a text escaped and embedded in a html element with a class attribute and a style attribute.
 *
 * The html element used depends on the element type settings of the <code>aFontNode</code>. The html element in the returned result
 * will always be a paragraph (<code>&lt;p&gt;</code>) with no class attribute if <code>aFontNode</code> is <code>null</code>
 * or not of primary type <code>sv:font</code>.
 *
 * <code>aStyle</code> will be ignored if it is <code>null</code>.
 *
 * <p><strong>Some examples:</strong></p>
 * <p>
 * Method call: <code>getEscapedHtmlText("Hello world! one &lt; two", myFontNode, "padding-left:0.7em")</code><br>
 * will return any of the following:
 * </p>
 * <ul>
 * <li><code>&lt;h1 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/h1&gt;</code></li>
 * <li><code>&lt;h2 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/h2&gt;</code></li>
 * <li><code>&lt;h3 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/h3&gt;</code></li>
 * <li><code>&lt;h4 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/h4&gt;</code></li>
 * <li><code>&lt;h5 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/h5&gt;</code></li>
 * <li><code>&lt;h6 class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/h6&gt;</code></li>
 * <li><code>&lt;p class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/p&gt;</code></li>
 * <li><code>&lt;span class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/span&gt;</code></li>
 * <li><code>&lt;code class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/code&gt;</code></li>
 * <li><code>&lt;sub class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/sub&gt;</code></li>
 * <li><code>&lt;sup class="selectorTextOfMyFontNode" style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/sup&gt;</code></li>
 * </ul>
 *
 * <p>Method call: <code>getEscapedHtmlText("Hello world! one &lt; two", null, "padding-left:0.7em")</code><br>
 * will return this:
 * </p>
 * <ul>
 *    <li><code>&lt;p style="padding-left:0.7em"&gt;Hello world! one &amp;lt; two&lt;/p&gt;</code></li>
 * </ul>
 *
 * <p>Method call: <code>getEscapedHtmlText("Hello world! one &lt; two", null, null)</code><br>
 * will return this:
 * </p>
 * <ul>
 *    <li><code>&lt;p&gt;Hello world! one &amp;lt; two&lt;/p&gt;</code></li>
 * </ul>
 *
 * <p>Method call: <code>getEscapedHtmlText("Hello world! one &lt; two", myFontNode, null)</code><br>
 * will return the same result as if the {@link #getEscapedHtmlText(String, javax.jcr.Node) getEscapedHtmlText(String, Node)}
 * method had been invoked.
 * </p>
 * @param aPlainText the text to be escaped and embedded in a html element
 * @param aFontNode a <code>Node</code> of primary type <code>sv:font</code> that determines the type of html element to use and the class attribute value of the element
 * @param aStyle the style that should be inserted in the style attribute of the element
 * @return <code>aPlainText</code> embedded in a html element, or empty <code>String</code> if <code>aPlainText</code> is <code>null</code>
 * @see #getHtmlText(String, javax.jcr.Node, String)
 * @since Sitevision 2.6.1_02
 */
export function getEscapedHtmlText(
  aPlainText: string,
  aFontNode: Node,
  aStyle: string
): string;

/**
 * Hyperlinks text and uses a specified css class for created anchors.
 *
 * <p>
 *    Inserts an hyperlink/anchor (<code>&lt;a href="..."&gt;...&lt;/a&gt;</code>) with a title and optional class and style where the text seems
 *    to indicate a hyperlink. Text blocks that starts with <em>http://</em>, <em>https://</em>, <em>www.</em> or contains an <em>@</em> will be
 *    considered for hyperlinking.
 * </p>
 * @param aText a text that might contain hyperlinkable parts
 * @param aClass the class of the hyperlinks (the <code>class</code> attribute of the <code>a</code> element). if <code>aClass</code> is <code>null</code> or empty, it will not be used in any hyperlinks.
 * @param aStyle the style of the hyperlinks (the <code>style</code> attribute of the <code>a</code> element) if <code>aStyle</code> is <code>null</code> or empty, it will not be used in any hyperlinks.
 * @return <code>aText</code> hyperlinked
 * @since Sitevision 2.6.1_06
 * @see OutputUtil#getHyperlinkedText(String)
 */
export function getHyperlinkedText(
  aText: string,
  aClass: string,
  aStyle: string
): string;

/**
 * Hyperlinks text.
 *
 * <p>
 * Inserts an hyperlink/anchor (<code>&lt;a href="..."&gt;...&lt;/a&gt;</code>) where the text seems to indicate a hyperlink.
 * Text blocks that starts with <em>http://</em>, <em>https://</em>, <em>www.</em> or contains an <em>@</em> will be considered for hyperlinking.
 * </p>
 * @param aText a text that might contain hyperlinkable parts
 * @return <code>aText</code> hyperlinked
 * @since Sitevision 3.1
 * @see OutputUtil#getHyperlinkedText(String, String, String)
 */
export function getHyperlinkedText(aText: string): string;

/**
 * Gets a simplistic plain text output from a text portlet.
 * Handles plain text, line breaks and dot lists.
 * @param aNode a text portlet node
 * @return the output from the text portlet as plain text, or an empty <code>String</code> if aNode is <code>null</code> or not a text portlet
 * @deprecated Use {@link #getNodeOutput(javax.jcr.Node, javax.jcr.Node, int)}
 * @see #getNodeOutput(Node,Node,int)
 */
export function getNodeAsText(aNode: Node): string;

/**
 * Gets the output as a specific content-type from a page node or a page content node.
 *
 * <p>
 *    <em>Tip! Consider using {@link TextModuleRenderer} instead if you want the output of a single Text module.</em>
 * </p>
 *
 * <p>
 *    <strong>Note! Due to security reasons (potential never-ending loops) it is prohibited to get the output of anything from
 *    the currently executing page (i.e. {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage()})!</strong>
 * </p>
 * @param aPageNode a page node (sv:page, sv:article, sv:sitePage) where current user has READ permission, must not be null or "current page".
 * @param aPagePartNode a page part node that exist as content on aPageNode (or null if you want the complete output from aPageNode).
 * @param aContentType a content-type marker, i.e. <a href="#CONTENT_TYPE_TEXT_PLAIN">CONTENT_TYPE_TEXT_PLAIN</a>, <a href="#CONTENT_TYPE_TEXT_HTML">CONTENT_TYPE_TEXT_HTML</a> or <a href="#CONTENT_TYPE_TEXT_XML">CONTENT_TYPE_TEXT_XML</a>.
 * @return the output result for specified aContentType. If aPageNode is null or "current page", an empty String is returned. If current user doesn't have READ permission on aPageNode, an empty String is returned. If aPagePartNode is null, the output result of aPageNode is returned. If aPagePartNode doesn't exist as content on aPageNode, an empty String is returned.
 * @since Sitevision 2.6
 */
export function getNodeOutput(
  aPageNode: Node,
  aPagePartNode: Node,
  aContentType: number
): string;

/**
 * Debug method that returns info about the properties of a node and all its sub nodes.
 *
 * <p>
 *    <em>
 *       <strong>Note!</strong> This method is intended for debugging purposes during development ONLY!
 *       Important: Only the types and properties that are officially specified on the
 *       <a href="http://help.sitevision.se/nodetypes">Sitevision developer web</a>
 *       can be relied upon and used in production. All other types and properties should
 *       be considered volatile. Output produced by this method is not indexed by the Sitevision indexer.
 *    </em>
 * </p>
 * @param aNode the start node from where all properties should be retrieved
 * @return the node as a {@code String} in HTML or an empty String if it does not contain any properties and sub nodes.
 * @throws IllegalArgumentException if the given node {@code aNode} is null.
 * @throws javax.jcr.RepositoryException if something else goes wrong.
 * @see #getNodeInfoAsHTML(javax.jcr.Node, int)
 * @since Sitevision 3.0
 */
export function getNodeInfoAsHTML(aNode: Node): string;

/**
 * Debug method that returns info about the properties of a node and all its sub nodes recursively until a given sub level
 * {@code aDepth} is reached.
 *
 * <p>
 *    <em>
 *       <strong>Note!</strong> This method is intended for debugging purposes during development ONLY!
 *       Important: Only the types and properties that are officially specified on the
 *       <a href="http://help.sitevision.se/nodetypes">Sitevision developer web</a>
 *       can be relied upon and used in production. All other types and properties should
 *       be considered volatile. Output produced by this method is not indexed by the Sitevision indexer.
 *    </em>
 * </p>
 * @param aNode the start node from where all properties should be retrieved
 * @param aDepth the number of sub levels from the start node to be retrieved
 * @return the node as a {@code String} in HTML or an empty String if it does not contain any properties and sub nodes.
 * @throws IllegalArgumentException if the given node {@code aNode} is null or the given depth {@code aDepth} is negative.
 * @throws RepositoryException if something else goes wrong.
 * @since Sitevision 3.0
 */
export function getNodeInfoAsHTML(aNode: Node, aDepth: number): string;

/**
 * Convenience method for rendering a linked web path to a specified node.
 *
 * <p>
 * --------------------------------------------------------- <br>
 * <strong>Example:</strong> You use Velocity and want to do a simple "path to this page" menu
 * with a pretty "double arrow" between the links<br>
 * ---------------------------------------------------------
 * </p>
 *
 * <p><strong>A) The explicit way:</strong></p>
 * <p>Use the <code>getWebPathNodes</code> method of {@link senselogic.sitevision.api.node.NodeTreeUtil} to get all nodes in the
 * path to the site page and render a link to each node using a {@link senselogic.sitevision.api.render.LinkRenderer}.
 * Current page can be found via a {@link senselogic.sitevision.api.context.PortletContextUtil} instance.</p><pre><code>
 *    <em>## Get all nodes from here to the site page</em>
 *    #set ($currentPage = $sitevisionUtils.portletContextUtil.currentPage)
 *    #set ($nodeTreeUtil = $sitevisionUtils.nodeTreeUtil)
 *    #set ($pathList = $nodeTreeUtil.getWebPathNodes($currentPage))
 *
 *    <em>## Iterate the nodes in the list with a LinkRenderer</em>
 *    #if (!$pathList.isEmpty())
 *       <em>## Set up the link renderer</em>
 *       #set ($linkRenderer = $sitevisionUtils.getLinkRenderer())
 *
 *       <em>## Render links to all nodes</em>
 *       &lt;p class="normal"&gt;
 *       #foreach ($node in $pathList)
 *          $linkRenderer.update($node)
 *          #if ($velocityCount &gt; 0)
 *             &amp;raquo;
 *          #end
 *          $linkRenderer.render()
 *       #end
 *       &lt;/p&gt;
 *    #end</code></pre>
 *
 * <p><strong>B) The convenient way:</strong></p>
 * <p>Use the <code>getWebPathNodes</code> method!</p><pre><code>
 *    <em>## Init</em>
 *    #set ($currentPage = $sitevisionUtils.portletContextUtil.currentPage)
 *    #set ($outputUtil = $sitevisionUtils.outputUtil)
 *    #set ($linkRenderer = $sitevisionUtils.getLinkRenderer())
 *
 *    <em>## Render</em>
 *    #set ($result = $outputUtil.renderWebPathNodes($currentPage, $linkRenderer, ' &amp;raquo; '))
 *    #if ($result != '')
 *       &lt;p class="normal"&gt;$result&lt;/p&gt;
 *    #end</code></pre>
 *
 * <p>
 *    <em>For a description of "web path", see {@link senselogic.sitevision.api.node.NodeTreeUtil#getWebPathNodes(javax.jcr.Node)}</em>
 * </p>
 * @param aDescendantNode the node the web path should be rendered for
 * @param aLinkRenderer the link renderer that determines how links are rendered
 * @param aSeparator the separator that should be put between the links. <em>Note! This is not encoded by this method.</em>
 * @return a linked web path, or empty string if aDescendantNode is <code>null</code>, <code>aLinkRenderer</code> is <code>null</code>, <code>aSeparator</code> is <code>null</code> or no web path could be created.
 * @see senselogic.sitevision.api.node.NodeTreeUtil#getWebPathNodes(javax.jcr.Node)
 * @since Sitevision 3.0.2
 */
export function renderWebPathNodes(
  aDescendantNode: Node,
  aLinkRenderer: LinkRenderer,
  aSeparator: string
): string;

/**
 * Output utility interface with methods that return complete content snippets.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getOutputUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>The "text/plain" content-type markerThe "text/html" content-type markerThe "text/xml" content-type marker
 * @author Magnus Lövgren
 */
declare namespace outputUtil {
  export {
    getHtmlText,
    getEscapedHtmlText,
    getHyperlinkedText,
    getNodeAsText,
    getNodeOutput,
    getNodeInfoAsHTML,
    renderWebPathNodes,
  };
}

export default outputUtil;
