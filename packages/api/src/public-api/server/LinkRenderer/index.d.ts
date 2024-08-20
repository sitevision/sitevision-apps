import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";

/**
 * LinkRenderer is a stateful utility interface that can be used to build valid html text links that uses link icons according to the
 *  website settings.
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getLinkRenderer()}.
 *  See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 *
 *  <p>
 *  LinkRenderer is very suitable when rendering more than one link (for instance when rendering a menu) or if you don't want to bother whether or not
 *  the site prescribes your link(s) should use link icons or file icons.
 *  </p>
 *
 *  <p>
 *  LinkRenderer attributes comes in different flavors:
 *  </p>
 *  <ul>
 *  <li><strong>Mandatory</strong> (link data):
 *    <ul>
 *      <li style="margin-top:5px">
 *        <em>target</em> - The target of the link. Can be a <code>String</code> or a {@link #isRenderableTarget(javax.jcr.Node) renderable Node}.<br>
 *        Example: <code>&lt;a class="xyz" href="<strong>xyz</strong>" title="xyz"&gt;Linked text&lt;/a&gt;</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>fontClass</em> - The class name of the link.<br>
 *        Example: <code>&lt;a class="<strong>xyz</strong>" href="xyz" title="xyz"&gt;Linked text&lt;/a&gt;</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>text</em> - The text that should be linked.<br>
 *        Example: <code>&lt;a class="xyz" href="xyz" title="xyz"&gt;<strong>Linked text</strong>&lt;/a&gt;</code>
 *      </li>
 *    </ul>
 *  </li>
 *
 *  <li style="margin-top:10px"><strong>Optional</strong> (link data):
 *    <ul>
 *      <li style="margin-top:5px">
 *        <em>title</em> - The title of the link.<br>
 *        Example: <code>&lt;a class="xyz" href="xyz" title="<strong>xyz</strong>"&gt;Linked text&lt;/a&gt;</code><br>
 *        Default is <code>null</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>style</em> - The style of the link.<br>
 *        Example: <code>&lt;a class="xyz" href="xyz" title="xyz" style="<strong>xyz</strong>"&gt;Linked text&lt;/a&gt;</code><br>
 *        Default is <code>null</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>onclick</em> - The onclick and onkeypress of the link.<br>
 *        Example: <code>&lt;a class="xyz" href="xyz" title="xyz" onclick="<strong>xyz</strong>"
 *        onkeypress="<strong>xyz</strong>&gt;Linked text&lt;/a&gt;</code><br>
 *        Default is <code>null</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>id</em> - The id of the link.<br>
 *        Example: <code>&lt;a class="xyz" href="xyz" title="xyz" id="<strong>xyz</strong>"&gt;Linked text&lt;/a&gt;</code><br>
 *        Default is <code>null</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>targetParameters</em> - Additional target parameters for the target.<br>
 *        Example: <code>&lt;a class="xyz" href="xyz<strong>?a=b&amp;c=d</strong>" title="xyz"&gt;Linked text&lt;/a&gt;</code><br>
 *        Default is no target parameters.
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>rel</em> - The rel value of the link.<br>
 *        Example: <code>&lt;a class="xyz" href="xyz" title="xyz" rel="<strong>xyz</strong>"&gt;Linked text&lt;/a&gt;</code><br>
 *        Default is <code>null</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>accessKey</em> - The accesskey value of the link.<br>
 *        Example: <code>&lt;a class="xyz" href="xyz" title="xyz" accesskey="<strong>xyz</strong>"&gt;Linked text&lt;/a&gt;</code><br>
 *        Default is <code>null</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>openNewWindow</em> - Whether or not the link should be opened in a new window.<br>
 *        Default is <code>false</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>dataAttributes</em> - Additional HTML5 data-* attributes.<br>
 *        Default is no data attributes
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>ariaAttributes</em> - Additional HTML5 aria-* attributes.<br>
 *        Default is no aria attributes
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>download</em> - Whether or not to add the HTML5-specific <em>download</em> attribute
 *        (indication to the browser to download the link target instead of navigating to it).<br>
 *        Default is <code>false</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>lang</em> - Defines the language of the link element.<br>
 *        Example: <code>&lt;a class="xyz" href="xyz" title="xyz" lang="<strong>en</strong>"&gt;Linked text&lt;/a&gt;</code><br>
 *        Default is <code>null</code>
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>hreflang</em> - Hints at the language of the linked resource.<br>
 *         Example: <code>&lt;a class="xyz" href="xyz" title="xyz" hreflang="<strong>en</strong>"&gt;Linked text&lt;/a&gt;</code><br>
 *         Default is <code>null</code>
 *      </li>
 *    </ul>
 *  </li>
 *
 *  <li style="margin-top:10px"><strong>Additional</strong> (rendering helpers/settings):
 *    <ul>
 *      <li style="margin-top:5px">
 *        <em>useAutoTitle</em> - Whether or not the title automatically should get a calculated title value (if it is null).<br>
 *        Default is <code>false</code>.
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>useEncoding</em> - Whether or not all attributes should be encoded.<br>
 *        Default is <code>true</code>.
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>useParameterEncoding</em> - Whether or not <em>targetParameters</em> should be encoded.<br>
 *        Default is <code>true</code>.
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>useLinkDecorationSettings</em> - Whether or not to use the link type icons settings (i.e. "Show icon next to external links",
 *        "Show icon next to links that opens in a new window") of the current site.<br>
 *        Default is <code>true</code>.
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>useResourceDecorationSettings</em> - Whether or not to use the file resource setting (i.e. "Show icon next to known file types" and
 *        "Show file description and size next to known file types") of the current site.<br>
 *        Default is <code>true</code>.
 *      </li>
 *      <li style="margin-top:5px">
 *        <em>useCrossSiteTargetChecking</em> - Whether or not to check Node targets for cross-site URL's.<br>
 *        Default is <code>false</code>.
 *      </li>
 *    </ul>
 *  </li>
 *  </ul>
 *
 *  <p>
 *  ----------------------------------------------------------------------------------------------------
 *  </p>
 *
 *  <p>
 *    Using the LinkRenderer is pretty straightforward, if you remember that it is <strong>stateful</strong>.<br>
 *    Conceptually you would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the LinkRenderer</li>
 *    <li>Possibly init the renderer with additional settings (useEncoding, autoTitle etc.)</li>
 *    <li>Init the renderer with mandatory attributes (text, target and fontClass)</li>
 *    <li>Possibly init the renderer with recommended attributes (title) if you need it.</li>
 *    <li>Possibly init the renderer with optional attributes (style, rel etc.)</li>
 *    <li>Do render</li>
 *  </ol>
 *  <p>
 *  When you have rendered once, you can re-use the LinkRenderer until you are done. Something like:
 *  </p>
 *  <ol>
 *    <li>Update the LinkRenderer
 *      <ul>
 *        <li>Update mandatory attributes (text, target, fontClass) that needs to be updated.</li>
 *        <li>Possibly update optional attributes and clear the ones you don't need anymore.</li>
 *        <li>Possibly update the additional settings that needs to be updated.</li>
 *      </ul>
 *    </li>
 *    <li>Do render.</li>
 *  </ol>
 *
 *  <p>
 *     <strong>Example of how this strategy could be implemented in Velocity:</strong><br>
 *     (You want to do a simple menu, i.e. iterate the nodes in a collection/iterator "$pages", and use LinkRenderer to render links to them
 *     as a html list)
 *  </p>
 *  <pre><code>
 *    <em>## Get PropertyUtil to ease Node property fetching</em>
 *    #set ($propertyUtil = $sitevisionUtils.propertyUtil)
 *
 *    <em>## Use font class 'normal' for all links</em>
 *    #set ($font = 'normal')
 *
 *    <em>## Get LinkRenderer</em>
 *    #set ($linkRenderer = $sitevisionUtils.linkRenderer)
 *
 *    <em>## Iterate through pages and render links to them</em>
 *    &lt;ul style="list-style:none"&gt;
 *    #foreach ($page in $pages)
 *      <em>## Fetch the name of the node</em>
 *      #set ($pageName = $propertyUtil.getString($page, 'displayName', $page.toString()))
 *
 *      <em>## Update the renderer and render</em>
 *      $linkRenderer.update($page, $font, $pageName)
 *      &lt;li&gt;
 *        $linkRenderer.render()
 *      &lt;/li&gt;
 *    #end
 *    &lt;/ul&gt;
 *  </code></pre>
 *
 *  <p>
 *  ----------------------------------------------------------------------------------------------------
 *  </p>
 *
 *  <p>
 *  Since LinkRenderer is stateful and likely will be used in Velocity frequently, there are some "shortcuts" that might be useful:
 *  </p>
 *  <ul>
 *    <li style="margin-top:5px">
 *      A quick way to update the mandatory attributes is to use one of the <code>update(...)</code> methods.
 *      If you at the same time want to clear all optional attributes, use one of the <code>updateClean(...)</code> methods instead.
 *    </li>
 *    <li style="margin-top:5px">
 *      A smooth way to clear all optional attributes is to call the <code>clearAllOptional()</code> method
 *    </li>
 *    <li style="margin-top:5px">
 *      Due to the lack of proper boolean support in Velocity, all the boolean attributes has corresponding force/clear methods to set the boolean
 *      to true/false. For example: <br>
 *      &nbsp;&nbsp;&nbsp;Executing <code>forceOpenNewWindow()</code> results in an execution of <code>setOpenNewWindow(true)</code> <br>
 *      &nbsp;&nbsp;&nbsp;Executing <code>clearOpenNewWindow()</code> results in an execution of <code>setOpenNewWindow(false)</code>
 *    </li>
 *    <li style="margin-top:5px">
 *      Due to the lack of proper null support in Velocity, some attributes has clear methods to set the attribute to <code>null</code>.
 *      For example: <br>
 *      &nbsp;&nbsp;&nbsp;Executing <code>clearAccessKey()</code> results in an execution of <code>setAccessKey(null)</code>
 *    </li>
 *  </ul>
 *
 *  <p>
 *    <a name="threadnote"></a>
 *    <strong>Thread Note!</strong> The render method is <em>NOT</em> thread safe! If two threads simultaneously executes
 *    the render method on the <em>SAME</em> LinkRenderer instance, the rendered result is undeterminable. This is in almost
 *    all cases nothing you need to worry about, unless your portlet or servlet actually creates a separate <code>Thread</code>
 *    and starts it. If so - ensure all your created threads creates and uses their own LinkRenderer instance!
 *  </p>
 *
 *  <p>
 *   <strong>Note/Tip!</strong> This interface helps rendering textual links. If you want to render <em>image</em> links, you would typically
 *   use the {@link senselogic.sitevision.api.render.ImageLinkRenderer} instead.
 *  </p>
 * @author Magnus Lövgren
 */
export interface LinkRenderer {
  /**
   * Updates current state.
   * @param aTarget the target of the link (href attribute for the a element)
   * @param aFontClass the class name the link should use (class attribute for the a element)
   * @param aText the link text
   * @param aTitle the title of the link (title attribute for the a element)
   * @see #isValidTarget(javax.jcr.Node)
   */
  update(
    aTarget: Node,
    aFontClass: String | string,
    aText: String | string,
    aTitle: String | string
  ): void;

  /**
   * Updates current state and removes previous title.
   * @param aTarget the target of the link (href attribute for the a element)
   * @param aFontClass the class name the link should use (class attribute for the a element)
   * @param aText the link text
   * @see #isValidTarget(javax.jcr.Node)
   */
  update(
    aTarget: Node,
    aFontClass: String | string,
    aText: String | string
  ): void;

  /**
   * Updates current state and removes previous title.
   * @param aTarget the target of the link (href attribute for the a element)
   * @param aText the link text
   * @see #isValidTarget(javax.jcr.Node)
   */
  update(aTarget: Node, aText: String | string): void;

  /**
   * Updates current state and removes previous title and text.
   *
   *  <p>
   *     Note. If no text exists when rendering, the target Node will be used to determine an appropriate text
   *     (e.g. the display name if the node is a page).
   *  </p>
   * @param aTarget the target of the link (href attribute for the a element)
   * @see #isValidTarget(javax.jcr.Node)
   */
  update(aTarget: Node): void;

  /**
   * Updates current state and removes all optional attributes.
   * @param aTarget the target of the link (href attribute for the a element)
   * @param aFontClass the class name the link should use (class attribute for the a element)
   * @param aText the link text
   * @param aTitle the title of the link (title attribute for the a element)
   * @see #clearAllOptional()
   * @see #isValidTarget(javax.jcr.Node)
   */
  updateClean(
    aTarget: Node,
    aFontClass: String | string,
    aText: String | string,
    aTitle: String | string
  ): void;

  /**
   * Updates current state and removes all optional attributes and title.
   * @param aTarget the target of the link (href attribute for the a element)
   * @param aFontClass the class name the link should use (class attribute for the a element)
   * @param aText the link text
   * @see #clearAllOptional()
   * @see #isValidTarget(javax.jcr.Node)
   */
  updateClean(
    aTarget: Node,
    aFontClass: String | string,
    aText: String | string
  ): void;

  /**
   * Updates current state and removes all optional attributes and title.
   * @param aTarget the target of the link (href attribute for the a element)
   * @param aText the link text
   * @see #clearAllOptional()
   * @see #isValidTarget(javax.jcr.Node)
   */
  updateClean(aTarget: Node, aText: String | string): void;

  /**
   * Updates current state and removes all optional attributes, title and text.
   *
   *  <p>
   *     Note. If no text exists when rendering, the target Node will be used to determine an appropriate text
   *     (e.g. the display name if the node is a page).
   *  </p>
   * @param aTarget the target of the link (href attribute for the a element)
   * @see #clearAllOptional()
   * @see #isValidTarget(javax.jcr.Node)
   */
  updateClean(aTarget: Node): void;

  /**
   * Removes all optional settings.
   *  In other words - executing this method has the same effect as executing:
   *  <ul>
   *    <li><code>clearStyle()</code></li>
   *    <li><code>clearOnclick()</code></li>
   *    <li><code>clearId()</code></li>
   *    <li><code>clearTargetParameters()</code></li>
   *    <li><code>clearRel()</code></li>
   *    <li><code>clearAccessKey()</code></li>
   *    <li><code>clearOpenNewWindow()</code></li>
   *    <li><code>clearDataAttributes()</code></li>
   *    <li><code>clearAriaAttributes()</code></li>
   *    <li><code>clearUseDownload()</code></li>
   *    <li><code>clearLang()</code></li>
   *    <li><code>clearHrefLang()</code></li>
   *  </ul>
   * @see #clearStyle()
   * @see #clearOnclick()
   * @see #clearId()
   * @see #clearTargetParameters()
   * @see #clearRel()
   * @see #clearAccessKey()
   * @see #clearOpenNewWindow()
   * @see #clearDataAttributes()
   * @see #clearAriaAttributes()
   * @see #clearUseDownload()
   * @see #clearLang()
   * @see #clearHrefLang()
   */
  clearAllOptional(): void;

  /**
   * Builds a html link based on current state.
   *
   *  <p>
   *  <em>Note!</em> The render method is not thread safe, see <a href="#threadnote">thread note above</a>.
   *  </p>
   * @return a html link, ready to print out on a page
   */
  render(): string;

  /**
   * Sets what the link target is, i.e "what the link links to" (href attribute on the a element).
   *  The target attribute is mandatory when the result is rendered.
   * @param aTarget a Node identifying the target
   * @see #isValidTarget(javax.jcr.Node)
   */
  setTarget(aTarget: Node): void;

  /**
   * Sets what the link target is, i.e "what the link links to" (href attribute on the a element).
   *  The target attribute is mandatory when the result is rendered.
   * @param aTarget a String identifying the target (i.e "http://xyz.com", "?name=a&amp;value=b", "/images/a.gif", "#anchor")
   */
  setStringTarget(aTarget: String | string): void;

  /**
   * Checks if a Node is a renderable target or not (node type accepted).
   *
   *  <p>
   *     This method can be used to avoid updating this renderer with nodes that can't be rendered. Since nodes that aren't
   *     renderable will be ignored, updating the renderer with such nodes will result in rendering of previous target.
   *  </p>
   *
   *  <p>
   *     <code>LinkRenderer</code> will accept nodes with the following primary node type as targets
   *     (i.e. this method will return <code>true</code> for such nodes):
   *  </p>
   *  <ul>
   *     <li><code>sv:article</code></li>
   *     <li><code>sv:collaborationGroup</code></li>
   *     <li><code>sv:collaborationGroupPage</code></li>
   *     <li><code>sv:collaborationGroupTemplate</code></li>
   *     <li><code>sv:file</code></li>
   *     <li><code>sv:image</code></li>
   *     <li><code>sv:link</code> <em>(the actual target of the link must also be a valid target)</em></li>
   *     <li><code>sv:page</code></li>
   *     <li><code>sv:sitePage</code></li>
   *     <li><code>sv:structureLink</code> <em>(the actual target of the structure link must also be a valid target)</em></li>
   *     <li><code>sv:structurePage</code></li>
   *     <li><code>sv:systemUser</code> <em>(the system user must have a mail address)</em></li>
   *     <li><code>sv:template</code></li>
   *     <li><code>sv:user</code> <em>(the user must have a mail address)</em></li>
   *     <li><code>sv:userIdentity</code> <em>(the site must have a profile page, or backing user must have a mail address)</em></li>
   *  </ul>
   *
   *  <p>
   *  Always use this method if you are not sure all nodes you are rendering will be accepted as targets.
   *  </p>
   *
   *  <p>
   *  <strong>Example:</strong><br>
   *  Velocity code like this:
   *  </p>
   *  <pre><code>&lt;ul style="list-style:none"&gt;
   *  #foreach ($node in $myNodes)
   *     <em>## Update the renderer and render</em>
   *     $linkRenderer.update($node)
   *     &lt;li&gt;$linkRenderer.render()&lt;/li&gt;
   * #end
   * &lt;/ul&gt;</code></pre>
   *  could be replaced with Velocity code like this:<pre><code>&lt;ul style="list-style:none"&gt;
   *  #foreach ($node in $myNodes)
   *     <em>## Ensure node actually can be rendered</em>
   *     #if ($linkRenderer.isRenderableTarget($node))
   *        <em>## Update the renderer and render</em>
   *        $linkRenderer.update($node)
   *        &lt;li&gt;$linkRenderer.render()&lt;/li&gt;
   *     #end
   *  #end
   *  &lt;/ul&gt;</code></pre>
   *
   *  <p>
   *     <em>Performance note!</em> Calling this method prior to calling an <code>update</code> method (or the <code>setTarget</code> method)
   *     will not have any noticeable negative performance impact. The result of this method is internally cached and the <code>update</code>
   *     methods (and the <code>setTarget</code> method) will re-use that cached data.
   *  </p>
   * @param aNode the node to check
   * @return <code>true</code> if <code>aNode</code> is a target that can be rendered, <code>false</code> if not
   * @since Sitevision 3.0
   * @see #isValidTarget(javax.jcr.Node)
   */
  isRenderableTarget(aNode: Node): boolean;

  /**
   * Checks if a Node is a valid target or not (node type accepted and target is valid).
   *
   *  <p>
   *  This method is similar to the {@link senselogic.sitevision.api.render.LinkRenderer#isRenderableTarget(javax.jcr.Node)} method,
   *  but this method does more extensive checking to ensure rendered links will be ok. <em>Note! "External" link targets (e.g.
   *  a link to "www.whatever.com") of a sv:link Node will NOT be checked.</em>
   *  </p>
   *  <p>
   *  This method can be used to avoid updating this renderer with nodes that can't be rendered or nodes that have invalid targets.
   *  An invalid target is typically an existing link that has an empty or trashed target (i.e. target is in trashcan).
   *  </p>
   *
   *  <p>
   *  <strong>Example:</strong><br>
   *  Velocity code like this:
   *  </p>
   *  <pre><code>&lt;ul style="list-style:none"&gt;
   *  #foreach ($node in $myNodes)
   *     <em>## Update the renderer and render</em>
   *     $linkRenderer.update($node)
   *     &lt;li&gt;$linkRenderer.render()&lt;/li&gt;
   * #end
   * &lt;/ul&gt;</code></pre>
   *  could be replaced with Velocity code like this:<pre><code>&lt;ul style="list-style:none"&gt;
   *  #foreach ($node in $myNodes)
   *     <em>## Ensure node actually can be rendered</em>
   *     #if ($linkRenderer.isValidTarget($node))
   *        <em>## Update the renderer and render</em>
   *        $linkRenderer.update($node)
   *        &lt;li&gt;$linkRenderer.render()&lt;/li&gt;
   *     #end
   *  #end
   *  &lt;/ul&gt;</code></pre>
   *
   *  <p>
   *  <em>Performance note!</em> Avoid subsequent calls to this method for same <code>Node</code>. If performance is a top
   *  priority, consider using {@link senselogic.sitevision.api.render.LinkRenderer#isRenderableTarget(javax.jcr.Node)} instead.
   *  </p>
   * @param aNode the node to check
   * @return <code>true</code> if <code>aNode</code> is a target that can be rendered as a functional link, <code>false</code> if not
   * @since Sitevision 2.6.2
   * @see #isRenderableTarget(javax.jcr.Node)
   */
  isValidTarget(aNode: Node): boolean;

  /**
   * Sets the class name the link should use (class attribute on the a element).
   *  The fontClass attribute is mandatory when the result is rendered.
   * @param aFontClass the class name of the font to use
   */
  setFontClass(aFontClass: String | string): void;

  /**
   * Sets the class name the link should use (class attribute on an a element) based on a given font node.
   *
   *  <p>
   *     The actual font class is extracted from aFontNode and if aFontNode is <code>null</code> or not a valid font node the
   *     font class will not be set.
   *  </p>
   *  <p>
   *     When subsequently setting the font class, use the {@link #setFontClass(String)} method instead for best performance.
   *  </p>
   * @param aFontNode the font node that has a font class that can be extracted
   * @see #setFontClass(String)
   */
  setFont(aFontNode: Node): void;

  /**
   * Sets the text that the link should display, i.e. "the text the user clicks on".
   *  The text attribute is mandatory when the result is rendered.
   * @param aText a link text
   */
  setText(aText: String | string): void;

  /**
   * Sets the title the link should have (title attribute on the a element).
   *
   *  <p>
   *  If there are no title (i.e. it is <code>null</code>) when the result is rendered, it will get the same
   *  value as text attribute if autoTitle is activated, otherwise it will be empty. Default is <code>null</code>.
   *  </p>
   * @param aTitle a title describing the link
   */
  setTitle(aTitle: String | string): void;

  /**
   * Removes the title, i.e. executes <code>setTitle(null)</code>
   * @see #setTitle(String)
   */
  removeTitle(): void;

  /**
   * Sets the css style the link should have (style attribute on the a element).
   *  The style attribute is optional when the result is rendered. Default is <code>null</code>.
   * @param aStyle the style of the link
   */
  setStyle(aStyle: String | string): void;

  /**
   * Removes the style, i.e executes <code>setStyle(null)</code>
   * @see #setStyle(String)
   */
  clearStyle(): void;

  /**
   * Sets the lang attribute on the a element (defines the language of the element).
   * @param aLang a single language code
   * @since Sitevision 2022.10.1
   */
  setLang(aLang: String | string): void;

  /**
   * Removes the lang, i.e executes <code>setLang(null)</code>
   * @see #setLang(String)
   * @since Sitevision 2022.10.1
   */
  clearLang(): void;

  /**
   * Sets the hreflang attribute on the a element (hints at the language of the linked resource).
   * @param aHrefLang a single language code
   * @since Sitevision 2022.10.1
   */
  setHrefLang(aHrefLang: String | string): void;

  /**
   * Removes the hreflang, i.e executes <code>setHrefLang(null)</code>
   * @see #setHrefLang(String)
   * @since Sitevision 2022.10.1
   */
  clearHrefLang(): void;

  /**
   * Adds target parameters (key=value) to the link target (href attribute on the a element).
   *
   *  <p>
   *     Target parameters is optional when the result is rendered. Default is no target parameters.
   *  </p>
   *  <p>
   *     There can only be one target parameter per key (i.e. when a target parameter is added it will always replace the possibly existing
   *     target parameter that already use that key).
   *  </p>
   * @param key the key of the target parameter
   * @param value the value of the target parameter
   */
  addTargetParameter(key: String | string, value: String | string): void;

  /**
 * Removes all existing target parameters
  
    */
  clearTargetParameters(): void;

  /**
   * Should target parameters be URL encoded or not?
   *  Default is <code>true</code>.
   * @param performParameterEncoding whether parameters should be URL encoded or not.
   * @see senselogic.sitevision.api.text.EndecUtil#encodeURL(String)
   * @since Sitevision 3.0
   */
  setUseParameterEncoding(performParameterEncoding: boolean): void;

  /**
   * Utility method for executing <code>setUseParameterEncoding(true)</code>
   * @see #setUseParameterEncoding(boolean)
   * @since Sitevision 3.0
   */
  forceUseParameterEncoding(): void;

  /**
   * Utility method for executing <code>setUseParameterEncoding(false)</code>
   * @see #setUseParameterEncoding(boolean)
   * @since Sitevision 3.0
   */
  clearUseParameterEncoding(): void;

  /**
   * Adds a data-* attribute to the link element.
   *  Data attributes is optional when the result is rendered. Default is no data attributes.
   *  <p>
   *     There can only be one data attribute per name (i.e. when a data attribute is added it will always replace the possibly existing
   *     data attribute that already use that name).
   *  </p>
   *
   *  <p>
   *     Notes about names and values:
   *  </p>
   *  <ul>
   *     <li>
   *        A <strong>name</strong> that is <code>null</code>, <em>whitespace-only</em> or <em>prefix-only</em> will be completely ignored,
   *        i.e. no data attribute will be rendered.
   *     </li>
   *     <li>
   *        A <strong>name</strong> that isn't properly prefixed with <em>"data-"</em> will be prefixed when the data attribute is rendered.
   *     </li>
   *     <li>
   *        A <strong>value</strong> that is <code>null</code> or <em>whitespace-only</em> will be rendered as a data attribute without value.
   *     </li>
   *     <li>
   *        A <strong>value</strong> should not be escaped/encoded. The <em>useEncoding</em> attribute will determine what to do
   *        when the data attributes are rendered.
   *  </ul>
   * @param aName the name of the data attribute
   * @param aValue the value of the data attribute
   * @since Sitevision 3.0
   */
  addDataAttribute(aName: String | string, aValue: String | string): void;

  /**
   * Removes all existing data attributes.
   * @since Sitevision 3.0
   */
  clearDataAttributes(): void;

  /**
   * Adds an aria-* attribute to the link element.
   *  Aria attributes are optional when the result is rendered. Default is no aria attributes.
   *  <p>
   *     There can only be one aria attribute per name (i.e. when an aria attribute is added it will always replace the possibly existing
   *     aria attribute that already use that name).
   *  </p>
   *
   *  <p>
   *     Notes about names and values:
   *  </p>
   *  <ul>
   *     <li>
   *        A <strong>name</strong> that is <code>null</code>, <em>whitespace-only</em> or <em>prefix-only</em> will be completely ignored,
   *        i.e. no aria attribute will be rendered.
   *     </li>
   *     <li>
   *        A <strong>name</strong> that isn't properly prefixed with <em>"aria-"</em> will be prefixed when the aria attribute is rendered.
   *     </li>
   *     <li>
   *        A <strong>value</strong> that is <code>null</code> or <em>whitespace-only</em> will be rendered as an aria attribute without value.
   *     </li>
   *     <li>
   *        A <strong>value</strong> should not be escaped/encoded. The <em>useEncoding</em> attribute will determine what to do
   *        when the aria attributes are rendered.
   *     </li>
   *  </ul>
   * @param aName the name of the aria attribute
   * @param aValue the value of the aria attribute
   * @since Sitevision 2024.08.1
   */
  addAriaAttribute(aName: String | string, aValue: String | string): void;

  /**
   * Removes all existing aria attributes.
   * @since Sitevision 2024.08.1
   */
  clearAriaAttributes(): void;

  /**
   * Sets what access key the link should have (accesskey attribute on the a element)
   *  The accesskey attribute is optional when the result is rendered. Default is <code>null</code>.
   * @param anAccessKey the access key that should be used
   */
  setAccessKey(anAccessKey: String | string): void;

  /**
   * Removes the accesskey, i.e. executes <code>setAccessKey(null)</code>
   * @see #setAccessKey(String)
   */
  clearAccessKey(): void;

  /**
   * Sets the rel that should be used (rel attribute on the a element)
   *  The rel attribute is optional when the result is rendered. Default is <code>null</code>.
   * @param aRel the rel that should be used. Note! If "external" is used, the rendered link will be opened in a new window via JavaScript
   */
  setRel(aRel: String | string): void;

  /**
   * Removes the rel value, i.e executes <code>setRel(null)</code>
   * @see #setRel(String)
   */
  clearRel(): void;

  /**
   * Sets the onclick value (onclick attribute and onkeypress attribute on the a element), typically some kind of Javascript
   *  The onclick attribute is optional when the result is rendered. Default is <code>null</code>.
   *
   *  <p><em>Note!</em> The events (onclick, onkeypress) will be added with non-obtrusive javascript when render() is called.</p>
   * @param anOnclick the onClick value that should be used
   */
  setOnclick(anOnclick: String | string): void;

  /**
   * Removes the onclick value, i.e executes <code>setOnclick(null)</code>
   * @see #setOnclick(String)
   */
  clearOnclick(): void;

  /**
   * Sets the id value (id attribute on the a element), most likely only needed if some kind of javascript/ajax code needs to access the
   *  rendered link via its id.
   *
   *  <p>
   *     The id attribute is optional when the result is rendered. Default is <code>null</code>.
   *  </p>
   *  <p>
   *     This method does <em>not</em> perform any checks of the id. All values will be accepted.
   *     <em>(Note! A valid id should be unique - i.e. should not appear more than once in a html/xhtml document - and not all characters are allowed.
   *     See <a href="http://www.w3.org/TR/2006/REC-xml-20060816/#sec-attribute-types">W3C 3.3.1 Attribute types</a>.)</em>
   *  </p>
   * @param anId the id value that should be used
   * @since Sitevision 3.0
   */
  setId(anId: String | string): void;

  /**
   * Removes the id value, i.e executes <code>setId(null)</code>
   * @see #setId(String)
   * @since Sitevision 3.0
   */
  clearId(): void;

  /**
   * Use icons for "external", "new window" and "new window, external" according to Site's settings or not.
   *  Default is <code>true</code>.
   * @param useLinkDecorationSettings whether or not Site's settings for link type icons should be used
   */
  setUseLinkDecorationSettings(useLinkDecorationSettings: boolean): void;

  /**
   * Utility method for executing <code>setUseLinkDecorationSettings(true)</code>
   * @see #setUseLinkDecorationSettings(boolean)
   */
  forceUseLinkDecorationSettings(): void;

  /**
   * Utility method for executing <code>setUseLinkDecorationSettings(false)</code>
   * @see #setUseLinkDecorationSettings(boolean)
   */
  clearUseLinkDecorationSettings(): void;

  /**
   * Use icons/descriptions for known file types according to Site's settings or not.
   *  Default is <code>true</code>.
   * @param useResourceDecorationSettings whether or not Site's settings for icons/descriptions for known file types should be used
   */
  setUseResourceDecorationSettings(
    useResourceDecorationSettings: boolean
  ): void;

  /**
   * Utility method for executing <code>setUseResourceDecorationSettings(true)</code>
   * @see #setUseResourceDecorationSettings(boolean)
   */
  forceUseResourceDecorationSettings(): void;

  /**
   * Utility method for executing <code>setUseResourceDecorationSettings(false)</code>
   * @see #setUseResourceDecorationSettings(boolean)
   */
  clearUseResourceDecorationSettings(): void;

  /**
   * Should the link target be opened in a new window or not?
   *  Default is <code>false</code>.
   * @param openNewWindow whether or not the link target should be opened in a new window
   */
  setOpenNewWindow(openNewWindow: boolean): void;

  /**
   * Utility method for executing <code>setOpenNewWindow(true)</code>
   * @see #setOpenNewWindow(boolean)
   */
  forceOpenNewWindow(): void;

  /**
   * Utility method for executing <code>setOpenNewWindow(false)</code>
   * @see #setOpenNewWindow(boolean)
   */
  clearOpenNewWindow(): void;

  /**
   * Should the browser download the link target instead of navigating to it?
   *  Default is <code>false</code>.
   * @param useDownload whether a browser is suggested to download the link target directly
   * @since Sitevision 5.2
   */
  setUseDownload(useDownload: boolean): void;

  /**
   * Utility method for executing <code>setUseDownload(true)</code>
   * @see #setUseDownload(boolean)
   * @since Sitevision 5.2
   */
  forceUseDownload(): void;

  /**
   * Utility method for executing <code>setUseDownload(false)</code>
   * @see #setUseDownload(boolean)
   * @since Sitevision 5.2
   */
  clearUseDownload(): void;

  /**
   * Should text and attributes be properly encoded or not?
   *  Default is <code>true</code>.
   * @param performEncoding whether text should be encoded or not.
   */
  setUseEncoding(performEncoding: boolean): void;

  /**
   * Utility method for executing <code>setUseEncoding(true)</code>
   * @see #setUseEncoding(boolean)
   */
  forceUseEncoding(): void;

  /**
   * Utility method for executing <code>setUseEncoding(false)</code>
   * @see #setUseEncoding(boolean)
   */
  clearUseEncoding(): void;

  /**
   * Ensures title always will have a value. If non-existing, the title will be set to the title of the target target (or
   *  the same as the linked text if the target isn't a page or the title of the page is lacking)
   *  Default is <code>false</code>.
   * @param useAutoTitle whether or not the link always should get the title automatically if title is missing
   */
  setUseAutoTitle(useAutoTitle: boolean): void;

  /**
   * Utility method for executing <code>setUseAutoTitle(true)</code>
   * @see #setUseAutoTitle(boolean)
   */
  forceUseAutoTitle(): void;

  /**
   * Utility method for executing <code>setUseAutoTitle(false)</code>
   * @see #setUseAutoTitle(boolean)
   */
  clearUseAutoTitle(): void;

  /**
   * Should cross-site internal Node links be handled or not?
   *
   *  <p>
   *     Default is <code>false</code>.
   *  </p>
   *  <p>
   *     <em>Note! For best performance: enable only if your site actually contains internal links to
   *     pages on other sites (e.g. The System user creates an internal link and selects a page
   *     on another site in the target browse tree).</em>
   *  </p>
   * @param useCrossSiteTargetChecking whether or not to check for cross-site Node targets
   * @since Sitevision 3.0.2
   */
  setUseCrossSiteTargetChecking(useCrossSiteTargetChecking: boolean): void;

  /**
   * Utility method for executing <code>setUseCrossSiteTargetChecking(true)</code>
   * @see #setUseCrossSiteTargetChecking(boolean)
   * @since Sitevision 3.0.2
   */
  forceUseCrossSiteTargetChecking(): void;

  /**
   * Utility method for executing <code>seUseCrossSiteTargetChecking(false)</code>
   * @see #setUseCrossSiteTargetChecking(boolean)
   * @since Sitevision 3.0.2
   */
  clearUseCrossSiteTargetChecking(): void;
}

declare namespace LinkRenderer {}

declare var linkRenderer: LinkRenderer;

export default linkRenderer;
