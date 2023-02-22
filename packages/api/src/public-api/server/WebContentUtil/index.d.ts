import type { Node } from "../../types/javax/jcr/Node";

/**
 * Utility interface for content manipulation of a sv:page, sv:article or a sv:template.
 *
 * <p>
 *    The provided HTML content is converted to Sitevision text, table and image portlets. It is also possible to specify
 *    that a horizontal or a vertical layout should be created. Class and styles can be specified. A class must correspond
 *    to a Sitevision site font or exists in an external CSS to have any effect. It is possible to specify a name of the
 *    subsequent portlet by using a named anchor (<code>&lt;a name="the_name_of_the_portlet"&gt;&lt;/a&gt;</code>).
 *    The name of a layout can also be specified by adding a name attribute to the layout div, se examples below.
 * </p>
 *
 * <p>
 *    <strong>Note!</strong> Content is per default considered as "text". This means that all content will be put in a single
 *    text portlet until the html code indicates something else. An indication can be any of the following:
 * </p>
 * <ul>
 *    <li>a layout is specified (a layout will be created)</li>
 *    <li>a named anchor is specified (a new portlet with that name will be created)</li>
 *    <li>content of another type is encountered (i.e. html for an image or a table)</li>
 * </ul>
 *
 * <p>
 *    <em>Below are some detailed examples that should explain the format more precise:</em>
 * </p>
 * <hr>
 * <p>
 *    <strong>Image portlet:</strong> Image references are resolved against the images on local page repository and
 *    fall-backs to the image repository.
 * </p>
 *
 * <p>
 *    <em>Example 1: an image portlet with name "anImage" is created.</em>
 * </p>
 * <pre><code>
 *    &lt;a name="anImage" /&gt;&lt;img src="logo.jpg" /&gt;
 * </code></pre>
 *
 * <p>
 *    <em>Example 2: an image portlet is created with alt text and class. Sitevision will decide the name of the portlet.</em>
 * </p>
 * <pre><code>
 *    &lt;img alt="Sitevision AB logo" class="aClass" src="templates/sitevision_logo.png" /&gt;
 * </code></pre>
 *
 * <p>
 *    <strong>Table portlet:</strong> Table summary and table caption are optional. Table headings (th) will be recognized.
 * A style attribute containing the css property <em>text-align</em> (left, right or center)
 * and <em>background-color</em> will be recognized for table cells (td/th). Note that the background-color property value
 * must start with a hash and match a color that exists on the site (for example #FFFFFF).
 * </p>
 * <em>Example: a table portlet with two columns and one row is created.</em>
 * <pre><code>
 *      &lt;table summary="This is an example table"&gt;
 *      &lt;caption&gt;A caption&lt;/caption&gt;
 *         &lt;tr&gt;
 *            &lt;th&gt;A header&lt;/th&gt;
 *            &lt;th&gt;Another header&lt;/th&gt;
 *         &lt;/tr&gt;
 *         &lt;tr&gt;
 *            &lt;td&gt;A cell&lt;/td&gt;
 *            &lt;td style="text-align:right"&gt;Another cell&lt;/td&gt;
 *         &lt;/tr&gt;
 *      &lt;/table&gt;
 * </code></pre>
 *
 * <p>
 *    <strong>Text portlet:</strong> All subsequent text content (i.e. not images or tables) will be placed in a text portlet.
 *    It is possible to create links and to provide style and class information to text sections. Links will be resolved
 *    to real / internal Sitevision pages if possible. Links to files and images will be resolved from the local image / file
 *    repositories and fall-back to the site image / file repository.
 *    Text sections specified with <code>&lt;em&gt;</code> or <code>&lt;i&gt;</code> will be handled as emphasized and
 *    sections specified with <code>&lt;strong&gt;</code> or <code>&lt;b&gt;</code> will be handled as strong.
 * </p>
 * <p>
 *    <em>Example 1: a text portlet with name "aText" containing text and a link.</em>
 * </p>
 * <pre><code>
 *       &lt;div&gt;
 *          &lt;a name="aText" /&gt;
 *          &lt;p&gt;What a &lt;em&gt;nice&lt;/em&gt; content management and &lt;a href="/portal.html"&gt;portal&lt;/a&gt; solution I have
 *             built today.&lt;/p&gt;
 *       &lt;/div&gt;
 * </code></pre>
 *
 * <p>
 *    <em>Example 2: two text portlets, one header and one body like text.</em>
 * </p>
 * <pre><code>
 *       &lt;h2 title="aDecoration"&gt;Welcome&lt;/h2&gt;
 *       &lt;div&gt;
 *          &lt;a name="aText" /&gt;
 *          &lt;p&gt;Welcome to the Sitevision days!&lt;/p&gt;
 *       &lt;/div&gt;
 * </code></pre>
 *
 * <p>
 *    <strong>Layouts:</strong> by specifying a div with the attribute layout <code>horizontal</code> or <code>vertical</code> a
 *    layout can be created. It is also possible to specify name of the layout and a decoration. Note that the decoration must be
 *    a Sitevision site decoration. If both decoration and style is specified the style information will be ignored.
 * </p>
 * <ul>
 *    <li><code>horizontal</code> - Left-to-right layouting, i.e. a <em>Horizontal/Column</em> layout will be created</li>
 *    <li><code>vertical</code> - Top-to-bottom layouting, i.e. a <em>Vertical/Row</em> layout will be created</li>
 * </ul>
 *
 * <p>
 *    <em>Example 1: create a horizontal layout with decoration "aDecoration" and name "aName".</em>
 * </p>
 * <pre><code>
 *       &lt;div layout="horizontal" decoration="aDecoration" name="aName"&gt;
 *          &lt;!-- layout content --&gt;
 *          ...
 *       &lt;/div&gt;
 * </code></pre>
 *
 * <p>
 *    <em>Example 2: create vertical layout with style information and name "aName".</em>
 * </p>
 * <pre><code>
 *       &lt;div layout="vertical" style="margin: 10px; border: thin solid black" name="aName"&gt;
 *          &lt;!-- layout content --&gt;
 *          ...
 *       &lt;/div&gt;
 * </code></pre>
 *
 * <p>
 *    Here is a more <strong>extensive example</strong>
 * </p>
 * <pre><code>
 *       &lt;a name="aHeader" /&gt;
 *       &lt;h2 title="aH2SiteFont"&gt;Welcome to Sitevision&lt;/h2&gt;
 *       &lt;img name="anImage" alt="Sitevision AB logo" class="aClass" src="templates/sitevision_logo.png" /&gt;
 *       &lt;div layout="horizontal" decoration="aSiteDecoration" name="aHorizontalLayout"&gt;
 *          &lt;a name="aText" /&gt;
 *          &lt;p class="aTextSiteFont"&gt;
 *             &lt;strong&gt;Sitevision AB&lt;/strong&gt; is the company behind the CMS and portal system &lt;em&gt;Sitevision&lt;/em&gt;
 *          &lt;/p&gt;
 *          &lt;div layout="vertical" style="border: thin solid black" name="aVerticalLayout"&gt;
 *             &lt;a name="aText" /&gt;
 *             &lt;p&gt;The table displays the ...&lt;/p&gt;
 *             &lt;a name="aTable" /&gt;
 *             &lt;table summary="This is a data table"&gt;
 *             &lt;caption&gt;Table of data&lt;/caption&gt;
 *                &lt;tr&gt;
 *                   &lt;th&gt;Time&lt;/th&gt;
 *                   &lt;th&gt;Value&lt;/th&gt;
 *                &lt;/tr&gt;
 *                &lt;tr&gt;
 *                   &lt;td&gt;1.001&lt;/td&gt;
 *                   &lt;td&gt;Aaaabb+&lt;/td&gt;
 *                &lt;/tr&gt;
 *                &lt;tr&gt;
 *                   &lt;td&gt;2.22&lt;/td&gt;
 *                   &lt;td&gt;Addabb+++&lt;/td&gt;
 *                &lt;/tr&gt;
 *             &lt;/table&gt;
 *          &lt;/div&gt;
 *       &lt;/div&gt;
 * </code></pre>
 * <p>
 *    Which creates the following content structure:
 * </p>
 * <pre><code>
 *     |--aHeader (text portlet)
 *     |--anImage (image portlet)
 *     |--aText (text portlet)
 *     |--aHorizontalLayout (layout)
 *       |--aText (text portlet)
 *       |--aVerticalLayout (layout)
 *          |--aText (text portlet)
 *          |--aTable (table portlet)
 * </code></pre>
 *
 * <hr>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getWebContentUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.2
 */
export interface WebContentUtil {
  /**
   * <p>
   *    Alters the content of a sv:page, sv:article or a sv:template.
   * </p>
   *
   * <p>
   *    If an invalid node type is specified a <code>IllegalArgumentException</code> is thrown. The page content is specified as a
   *    HTML string used to generate a portlet structure in the <strong>first</strong> layout available. The provided
   *    content is converted to Sitevision text, table and image modules. It is also possible to specify that a horizontal
   *    or a vertical layout should be created.
   * </p>
   *
   * <p>
   *    <strong>Note that the content (i.e portlets and layouts) of the first layout will be replaced, not appended.</strong>
   * </p>
   *
   * <p>
   *    The current user must be authorized to alter the node or a  <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node or no content is specified a <code>NullPointerException</code> is thrown.
   * </p>
   * @param aNode aNode the node that will be altered, typically a node with primary node type <code>sv:page</code> or <code>sv:article</code>.&#xA; May not be <code>null</code> and may not be the site page.
   * @param aContent the HTML content. May not be <code>null</code>
   * @throws ConstraintViolationException if the current user is not allowed to alter the node
   * @throws RepositoryException if something else goes wrong
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectiveWritePermission(Node, Node)
   */
  updateContent(aNode: Node, aContent: string): void;

  /**
   * <p>
   *    Alters the content of a sv:page, sv:article or a sv:template.
   * </p>
   *
   * <p>
   *    If an invalid node type is specified a <code>IllegalArgumentException</code> is thrown. The page content is specified using the
   *    content map containing keys corresponding to layout names (e.g. "mittenspalt") on the page and values containing the
   *    HTML used to generate a portlet structure in the layout. The provided content is converted to
   *    Sitevision text, table and image modules. It is also possible to specify that a horizontal or a vertical
   *    layout should be created.
   * </p>
   *
   * <p>
   *    The names of the content map must correspond to layout names on the page.
   * </p>
   *
   * <p>
   *    <strong>Note that the content of the specified layouts (i.e portlets and layouts) will be replaced, not appended.</strong>
   * </p>
   *
   * <p>
   *    The current user must be authorized to alter the node or a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node or no content is specified a <code>NullPointerException</code> is thrown.
   * </p>
   * @param aNode the node that will be altered, typically a node with primary node type <code>sv:page</code> or <code>sv:article</code>.&#xA; May not be <code>null</code> and may not be the site page.
   * @param aContent a map containing the HTML content. The keys must correspond to layout names on the node. May not be <code>null</code>
   * @throws ConstraintViolationException if the current user is not allowed to alter the node
   * @throws RepositoryException if something else goes wrong
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectiveWritePermission(Node, Node)
   */
  updateContent(aNode: Node, aContent: unknown): void;

  /**
   * Alters the content of a sv:page, sv:article or a sv:template with raw HTML (a HTML portlet is created).
   *
   * <p>
   *    <strong>Note!</strong> This method creates a single HTML portlet that contains all supplied content. This method
   *    is intended to be used as a <em>temporary solution</em> when the proper {@link #updateContent(javax.jcr.Node, java.util.Map)}
   *    and {@link #updateContent(javax.jcr.Node, String)} methods for some reason can't be used. Typically when converting badly formatted
   *    legacy CMS data into Sitevision content. I.e. this method enables creation of content that later on ought to be manually converted
   *    to proper Sitevision portlets.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> Content is treated <em>as-is</em>, hence no internal links or references to local resources will be resolved
   *    as with the {@link #updateContent(javax.jcr.Node, java.util.Map)} and {@link #updateContent(javax.jcr.Node, String)} methods.
   *    The {@link #resolveToResourceURL(javax.jcr.Node, String)} can be used to manually try to resolve "old" resource url to a "new"
   *    Sitevision resource url.
   * </p>
   * @param aNode the node that will be altered, typically a node with primary node type <code>sv:page</code> or <code>sv:article</code>.&#xA; May not be <code>null</code> and may not be the site page
   * @param aContent the HTML content. May not be <code>null</code>
   * @throws NullPointerException if aNode is null or if aContent is null
   * @throws IllegalArgumentException if aNode is of invalid type
   * @throws ConstraintViolationException if current user is not allowed to alter aNode
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 3.6
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectiveWritePermission(Node, Node)
   */
  updateContentWithRawHtml(aNode: Node, aContent: string): void;

  /**
   * Alters the content of a sv:page, sv:article or a sv:template with raw HTML (a HTML portlet is created).
   *
   * <p>
   *    <strong>Note!</strong> This method creates a single HTML portlet for each supplied content entry. This method
   *    is intended to be used as a <em>temporary solution</em> when the proper {@link #updateContent(javax.jcr.Node, java.util.Map)}
   *    and {@link #updateContent(javax.jcr.Node, String)} methods for some reason can't be used. Typically when converting badly formatted
   *    legacy CMS data into Sitevision content. I.e. this method enables creation of content that later on ought to be manually converted
   *    to proper Sitevision portlets.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> Content is treated <em>as-is</em>, hence no internal links or references to local resources will be resolved
   *    as with the {@link #updateContent(javax.jcr.Node, java.util.Map)} and {@link #updateContent(javax.jcr.Node, String)} methods.
   *    The {@link #resolveToResourceURL(javax.jcr.Node, String)} can be used to manually try to resolve "old" resource url to a "new"
   *    Sitevision resource url.
   * </p>
   * @param aNode the node that will be altered, typically a node with primary node type <code>sv:page</code> or <code>sv:article</code>.&#xA; May not be <code>null</code> and may not be the site page
   * @param aContent a map containing the HTML content. The keys must correspond to layout names on the node. May not be <code>null</code>
   * @throws NullPointerException if aNode is null or if aContent is null
   * @throws IllegalArgumentException if aNode is of invalid type
   * @throws ConstraintViolationException if current user is not allowed to alter aNode
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 3.6
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectiveWritePermission(Node, Node)
   */
  updateContentWithRawHtml(aNode: Node, aContent: unknown): void;

  /**
   * Appends the content to the existing node.
   *
   * <p>
   *    If an invalid node type is specified a <code>IllegalArgumentException</code> is thrown. The page content is specified as a
   *    HTML string used to generate a portlet structure in the <strong>first</strong> layout available. The provided
   *    content is converted to Sitevision text, table and image modules. It is also possible to specify that a horizontal
   *    or a vertical layout should be created.
   * </p>
   *
   * <p>
   *    <strong>Note that the content (i.e portlets and layouts) of the first layout will be appended, not replaced.</strong>
   * </p>
   *
   * <p>
   *    The current user must be authorized to alter the node or a  <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node or no content is specified a <code>NullPointerException</code> is thrown.
   * </p>
   * @param aNode aNode the node that will be altered, typically a node with primary node type <code>sv:page</code> or <code>sv:article</code>.&#xA; May not be <code>null</code> and may not be the site page.
   * @param aContent the HTML content. May not be <code>null</code>
   * @throws NullPointerException if aNode is null or if aContent is null
   * @throws IllegalArgumentException if aNode is of invalid type
   * @throws ConstraintViolationException if the current user is not allowed to alter the node
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 2022.08.1
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectiveWritePermission(Node, Node)
   */
  appendContent(aNode: Node, aContent: string): void;

  /**
   * <p>
   *    Append the content to the existing node.
   * </p>
   *
   * <p>
   *    If an invalid node type is specified a <code>IllegalArgumentException</code> is thrown. The page content is specified using the
   *    content map containing keys corresponding to layout names (e.g. "mittenspalt") on the page and values containing the
   *    HTML used to generate a portlet structure in the layout. The provided content is converted to
   *    Sitevision text, table and image modules. It is also possible to specify that a horizontal or a vertical
   *    layout should be created.
   * </p>
   *
   * <p>
   *    The names of the content map must correspond to layout names on the page.
   * </p>
   *
   * <p>
   *    <strong>Note that the content of the specified layouts (i.e portlets and layouts) will be appended, not replaced.</strong>
   * </p>
   *
   * <p>
   *    The current user must be authorized to alter the node or a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node or no content is specified a <code>NullPointerException</code> is thrown.
   * </p>
   * @param aNode the node that will be altered, typically a node with primary node type <code>sv:page</code> or <code>sv:article</code>.&#xA; May not be <code>null</code> and may not be the site page.
   * @param aContent a map containing the HTML content. The keys must correspond to layout names on the node. May not be <code>null</code>
   * @throws NullPointerException if aNode is null or if aContent is null
   * @throws IllegalArgumentException if aNode is of invalid type
   * @throws ConstraintViolationException if the current user is not allowed to alter the node
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 2022.08.1
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectiveWritePermission(Node, Node)
   */
  appendContent(aNode: Node, aContent: unknown): void;

  /**
   * Appends raw HTML (a HTML portlet is created) to the existing content of a node.
   *
   * <p>
   *    <strong>Note!</strong> This method creates a single HTML portlet that contains all supplied content and appends it to the existing content.
   *    This method is intended to be used as a <em>temporary solution</em> when the proper {@link #updateContent(javax.jcr.Node, java.util.Map)}
   *    and {@link #updateContent(javax.jcr.Node, String)} methods for some reason can't be used. Typically when converting badly formatted legacy
   *    CMS data into Sitevision content. I.e. this method enables creation of content that later on ought to be manually converted to proper
   *    Sitevision portlets.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> Content is treated <em>as-is</em>, hence no internal links or references to local resources will be resolved
   *    as with the {@link #updateContent(javax.jcr.Node, java.util.Map)} and {@link #updateContent(javax.jcr.Node, String)} methods.
   *    The {@link #resolveToResourceURL(javax.jcr.Node, String)} can be used to manually try to resolve "old" resource url to a "new"
   *    Sitevision resource url.
   * </p>
   * @param aNode the node that will be altered, typically a node with primary node type <code>sv:page</code> or <code>sv:article</code>.&#xA; May not be <code>null</code> and may not be the site page
   * @param aContent the HTML content. May not be <code>null</code>
   * @throws NullPointerException if aNode is null or if aContent is null
   * @throws IllegalArgumentException if aNode is of invalid type
   * @throws ConstraintViolationException if current user is not allowed to alter aNode
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 3.6
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectiveWritePermission(Node, Node)
   */
  appendContentWithRawHtml(aNode: Node, aContent: string): void;

  /**
   * Appends raw HTML (a HTML portlet is created) to the existing content of a node.
   *
   * <p>
   *    <strong>Note!</strong> This method creates a single HTML portlet that contains all supplied content and appends it to the existing content.
   *    This method is intended to be used as a <em>temporary solution</em> when the proper {@link #updateContent(javax.jcr.Node, java.util.Map)}
   *    and {@link #updateContent(javax.jcr.Node, String)} methods for some reason can't be used. Typically when converting badly formatted legacy
   *    CMS data into Sitevision content. I.e. this method enables creation of content that later on ought to be manually converted to proper
   *    Sitevision portlets.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> Content is treated <em>as-is</em>, hence no internal links or references to local resources will be resolved
   *    as with the {@link #updateContent(javax.jcr.Node, java.util.Map)} and {@link #updateContent(javax.jcr.Node, String)} methods.
   *    The {@link #resolveToResourceURL(javax.jcr.Node, String)} can be used to manually try to resolve "old" resource url to a "new"
   *    Sitevision resource url.
   * </p>
   * @param aNode the node that will be altered, typically a node with primary node type <code>sv:page</code> or <code>sv:article</code>.&#xA; May not be <code>null</code> and may not be the site page
   * @param aContent a map containing the HTML content. The keys must correspond to layout names on the node. May not be <code>null</code>
   * @throws NullPointerException if aNode is null or if aContent is null
   * @throws IllegalArgumentException if aNode is of invalid type
   * @throws ConstraintViolationException if current user is not allowed to alter aNode
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 3.6
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectiveWritePermission(Node, Node)
   */
  appendContentWithRawHtml(aNode: Node, aContent: unknown): void;

  /**
   * Resolves an unresolved URL to a resource (potentially needed for all resource references in HTML content that later is
   * updated or appended as raw HTML).
   *
   * <p>
   *    <strong>Note!</strong> HTML content is treated <em>as-is</em> when using the
   *    {@link #appendContentWithRawHtml(javax.jcr.Node, java.util.Map)}, {@link #appendContentWithRawHtml(javax.jcr.Node, String)},
   *    {@link #updateContentWithRawHtml(javax.jcr.Node, java.util.Map)} or {@link #updateContentWithRawHtml(javax.jcr.Node, String)}.
   *    Hence no internal links or references to local resources will be resolved as with the {@link #updateContent(javax.jcr.Node, java.util.Map)}
   *    and {@link #updateContent(javax.jcr.Node, String)} methods.
   *    This method can be used to manually try to resolve "old" resource url to a "new" Sitevision resource url.
   * </p>
   * @param aNode the node that <code>aUnresolvedURL</code> should be resolved for, typically a node with primary node type <code>sv:page</code>&#xA; or <code>sv:article</code>. May not be <code>null</code> and may not be the site page
   * @param aUnresolvedURL an unresolved URL
   * @return the potentially resolved URL
   * @throws NullPointerException if aNode is null or if aUnresolvedURL is null
   * @throws IllegalArgumentException if aNode is of invalid type
   * @since Sitevision 3.6
   */
  resolveToResourceURL(aNode: Node, aUnresolvedURL: string): string;
}

declare namespace WebContentUtil {}

declare var webContentUtil: WebContentUtil;

export default webContentUtil;
