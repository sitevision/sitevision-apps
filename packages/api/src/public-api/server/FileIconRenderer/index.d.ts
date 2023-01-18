/**
 * FileIconRenderer is a stateful utility interface that can be used to render valid xhtml img elements based on the file icons of the website.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getFileIconRenderer()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 *
 * <p>
 * FileIconRenderer is very suitable when rendering more than one file icon (for instance when rendering a search result where different icons should
 * be displayed for different types of hits) or if you don't want to bother about how to get file icons from the icon repository of the site.
 * </p>
 *
 * <p>
 *  FileIconRenderer has few attributes:
 * </p>
 * <ul>
 *    <li>
 *       <em>icon</em> - The file icon that should be rendered. Default is <code>null</code>. If you try to load a new file icon and it fails,
 *        the previously loaded icon will be cleared (i.e. the renderer will not contain any icon to render).
 *    </li>
 *    <li>
 *       <em>defaultIcon</em> - The fallback file icon that should be rendered if no icon is loaded. Default is <code>null</code>. If you try to
 *       load a new default file icon and it fails, the previously loaded default icon will be cleared (i.e. the renderer will not contain any
 *       default icon to render).
 *    </li>
 *    <li>
 *       <em>useSmallIcons</em> - Whether to use small icons or not <em>(i.e. true == use small icons, false == use large icons)</em>.
 *       Default is <code>true</code>.</li>
 *    <li>
 *       <em>useDescriptions</em> - Whether to render the file icon description or not (i.e. put text in alt attribute of the rendered img
 *       element or not). Default is <code>true</code>.
 *    </li>
 *    <li>
 *       <em>locale</em> - What locale to use when deciding which file icon description to use. Default is the locale of the currently executing
 *       portlet.
 *    </li>
 *    <li>
 *       <em>fontClass</em> - The CSS class to use when rendering (the class attribute of the img element). Default is <code>sv-noborder</code>
 *       (i.e. <code>border-style:none</code>).
 *    </li>
 * </ul>
 *
 * <p>
 * ----------------------------------------------------------------------------------------------------
 * </p>
 *
 * <p>
 *   Using the FileIconRenderer is pretty straightforward, if you remember that it is <strong>stateful</strong> and that previously loaded icons
 *   will be cleared whenever you try to load new ones.
 *   Conceptually you would typically use it like this:
 * </p>
 * <ol>
 *   <li>Get the FileIconRenderer</li>
 *   <li>Possibly init the renderer with rendering settings (locale, useSmallIcons, description)</li>
 *   <li>Possibly load the renderer with a default icon</li>
 *   <li>Load a file icon</li>
 *   <li>Do render</li>
 * </ol>
 * <p>
 * When you have rendered once, you can re-use the FileIconRenderer until you are done. Something like:
 * </p>
 * <ol>
 *   <li>Load a new icon.</li>
 *   <li>Do render.</li>
 * </ol>
 *
 * <p>
 * Loading of an icon can be done using:
 * </p>
 * <ul>
 *    <li>
 *       The file <em>extension</em>.
 *    </li>
 *    <li>
 *       The file <em>uri</em>.
 *    </li>
 *    <li>
 *       The file <em>content type</em>. Note! The term <em>content type</em> is also known as <em>mime type</em>, but since "content type" is
 *       the term typically used by web programmers it is used as terminology in this interface.
 *       <p>
 *          Some information about content type mappings:<br>
 *          A precise file extension (pdf, doc, png etc.) is always needed to extract a file icon from a web site. To enable file icon extraction
 *          via content types, a "content-type-to-extension" mapping will be used. Please be aware that not all content types will be mapped due to
 *          the sheer amount of existing types. Some content types can't be mapped since they doesn't have a single well-defined extension
 *          (a typical example is "application/octet-stream" that is used for a variety of file types, i.e. file extensions).
 *       </p>
 *    </li>
 * </ul>
 * <p>
 * Whenever you try to load the renderer with an icon, the (possibly) previously loaded icon will be cleared.
 * If loading fails, no result will be rendered by default (i.e. an empty string will be the output when calling the render method).
 * If a default icon has been loaded successfully, it will be the output if the renderer contains no icon.
 * <em>(Note that the result of every icon loading is cached for best performance, hence no need for you to do the same in your code.)</em>
 * </p>
 * <p>
 * Please note that all <code>load</code> methods return a boolean! To prevent the boolean to be part of the page output you might in
 * some cases need to do a workaround. <em>The set statement for <code>$ignore</code> in below example demonstrates a simple workaround.</em>
 * </p>
 *
 * <p>
 *    <strong>Example of how this strategy could be implemented in Velocity:</strong><br>
 *    (You want to do a simple listing of all nodes in a collection/iterator "$items" and use FileIconRenderer to render the file icons of all items
 *    that has a configured file icon
 * </p>
 * <pre><code>
 *   <em>## Get PropertyUtil to ease Node property fetching</em>
 *   #set ($propertyUtil = $sitevisionUtils.propertyUtil)
 *
 *   <em>## Get FileIconRenderer</em>
 *   #set ($iconRenderer = $sitevisionUtils.fileIconRenderer)
 *
 *   <em>## Iterate through items and render the names and file icons (if they exist)</em>
 *   &lt;ul style="list-style:none"&gt;
 *   #foreach ($item in $items)
 *      <em>## Try to load the renderer by the item's uri (e.g. "/aPath/aFile.pdf")</em>
 *      #if (!$iconRenderer.loadIconByURI(${propertyUtil.getString($item, 'URI')}))
 *         <em>## If loading failed, try to load the renderer by the item's content type instead (e.g. "application/pdf")</em>
 *         #set ($ignore = $iconRenderer.loadIconByContentType(${propertyUtil.getString($item, 'mimeType')}))
 *      #end
 *
 *      &lt;li&gt;
 *         <em>## Render the name of the node</em>
 *         $propertyUtil.getString($item, 'displayName', '')
 *         <em>## Render the file icon of the node (if no icon was loaded, an empty string will be rendered)</em>
 *         $iconRenderer.render()
 *      &lt;/li&gt;
 *   #end
 *   &lt;/ul&gt;
 * </code></pre>
 *
 * <div style="border:1px dotted gray; padding:10px">
 *    <strong>Tip!</strong> If you use Velocity and call a <code>load</code> method, you must suppress the boolean result so
 *    it doesn't get a part of the rendered output. The above example contains an assignment workaround to suppress the <code>load</code> result:<br>
 *    <pre><code>   #set ($ignore = $iconRenderer.loadIconByContentType(${propertyUtil.getString($item, 'mimeType')}))</code></pre>
 *    This type of workaround can also be achieved via the <code>swallow</code> method of {@link senselogic.sitevision.api.script.ScriptUtil} as:<br>
 *    <pre><code>   $scriptUtil.swallow($iconRenderer.loadIconByContentType(${propertyUtil.getString($item, 'mimeType')}))</code></pre>
 * </div>
 *
 * <p>
 *    Since FileIconRenderer is stateful and likely will be used in Velocity frequently, there are some "shortcuts" that might be useful.
 *    Due to the lack of proper boolean support in Velocity, the boolean attributes has corresponding force/clear methods to set the boolean
 *    to true/false. For example:
 * </p>
 * <ul>
 *   <li>Executing <code>forceUseSmallIcons()</code> results in an execution of <code>setUseSmallIcons(true)</code></li>
 *   <li>Executing <code>clearUseSmallIcons()</code> results in an execution of <code>setUseSmallIcons(false)</code></li>
 * </ul>
 * @author Magnus Lövgren
 * @since Sitevision 2.6.1_08
 */
export interface FileIconRenderer {
  /**
   * The locale to use when extracting the decription of file icons.
   * <p>Default is the locale of the currently executing portlet.</p>
   * <p>
   *    <strong>Note!</strong> Icons (icon and default icon) that has been loaded with a different locale will be removed whenever an invocation
   *    of this method changes the locale.
   * </p>
   * @param aLocale the locale to use when extracting the icon description
   */
  setLocale(aLocale: unknown): void;

  /**
   * Which type if file icons (small or large) that should be rendered.
   * <p>Default is <code>true</code>.</p>
   * <p>
   *    <strong>Note!</strong> Icons (icon and default icon) that has been loaded with a different useSmallIcons state will be removed whenever
   *    an invocation of this method changes the useSmallIcons state.
   * </p>
   * @param aUseSmallIcons whether or not to use small icons (<code>true</code> == "use small icons", <code>false</code> == "use large icons")
   */
  setUseSmallIcons(aUseSmallIcons: boolean): void;

  /**
   * Utility method for executing <code>setUseSmallIcons(false)</code>, i.e. "use large icons when rendering".
   * @see #setUseSmallIcons(boolean)
   */
  clearUseSmallIcons(): void;

  /**
   * Utility method for executing <code>setUseSmallIcons(true)</code>, i.e. "use small icons when rendering".
   * @see #setUseSmallIcons(boolean)
   */
  forceUseSmallIcons(): void;

  /**
   * If file icon descriptions should be used or not.
   * <p>Default is <code>true</code>.</p>
   * <p>Note that file icon descriptions may be locale-dependent, see {@link #setLocale(java.util.Locale)}.</p>
   * @param aUseDescription whether or not a file icon description should be used when rendering
   */
  setUseDescription(aUseDescription: boolean): void;

  /**
   * Utility method for executing <code>setUseDescription(false)</code>, i.e. "don't use description when rendering".
   * @see #setUseDescription(boolean)
   */
  clearUseDescription(): void;

  /**
   * Utility method for executing <code>setUseDescription(true)</code>, i.e. "use description when rendering".
   * @see #setUseDescription(boolean)
   */
  forceUseDescription(): void;

  /**
   * Uses a content type to load the fallback icon that should be used when rendering if no icon is loaded.
   * @param aContentType the content type (mime type) that decides what file icon to load
   * @return true if a default file icon was loaded, false if not
   */
  loadDefaultIconByContentType(aContentType: string): boolean;

  /**
   * Uses a URI to load the fallback icon that should be used when rendering if no icon is loaded.
   * <p>
   * This method tries to extract a file extension from the URI and use that extension to load the default file icon.
   * If the URI doesn't end with a file extension, default icon loading will fail.
   * </p>
   * @param aURI the uri that decides what file icon to load
   * @return <code>true</code> if a default file icon was loaded, <code>false</code> if not
   */
  loadDefaultIconByURI(aURI: string): boolean;

  /**
   * Uses a file extension to load the fallback icon that should be used when rendering if no icon is loaded.
   * @param aFileExtension the file extension that decides what file icon to load
   * @return <code>true</code> if a default file icon was loaded, <code>false</code> if not
   */
  loadDefaultIconByFileExtension(aFileExtension: string): boolean;

  /**
   * Whether or not a default icon is loaded.
   * @return <code>true</code> if a default icon is loaded, <code>false</code> if not.
   */
  isDefaultIconLoaded(): boolean;

  /**
 * Removes loaded default icon (does nothing if no default icon is loaded)
  
    */
  clearDefaultIcon(): void;

  /**
   * Uses a content type to load the icon that should be rendered.
   * @param aContentType the content type (mime type) that decides what file icon to load
   * @return <code>true</code> if a file icon was loaded, <code>false</code> if not
   */
  loadIconByContentType(aContentType: string): boolean;

  /**
   * Uses a URI to load the icon that should be rendered.
   * <p>
   * This method tries to extract a file extension from the URI and use that extension to load the icon.
   * If the URI doesn't end with a file extension, icon loading will fail.
   * </p>
   * @param aURI the URI that decides what file icon to load
   * @return <code>true</code> if a file icon was loaded, <code>false</code> if not
   */
  loadIconByURI(aURI: string): boolean;

  /**
   * Uses a URI to load the icon that should be rendered.
   * @param aFileExtension the file extension that decides what file icon to load
   * @return <code>true</code> if a file icon was loaded, <code>false</code> if not
   */
  loadIconByFileExtension(aFileExtension: string): boolean;

  /**
   * Whether or not an icon is loaded.
   * @return <code>true</code> if an icon is loaded, <code>false</code> if not.
   */
  isIconLoaded(): boolean;

  /**
 * Removes loaded icon (does nothing if no icon is loaded)
  
    */
  clearIcon(): void;

  /**
   * Sets the CSS class name(-s) to use when rendering.
   * @param aFontClass the CSS class name(-s) expression. An empty string is equivalent to <code>null</code> - no class attribute will be rendered
   * @since Sitevision 3.0
   */
  setFontClass(aFontClass: string): void;

  /**
   * Removes the CSS class name(-s).
   * No class attribute will be rendered until a fontClass is set again.
   * @since Sitevision 3.0
   */
  clearFontClass(): void;

  /**
   * Builds a html img element based on current state.
   * @return a html img element based on current state, or empty string if no icon and no default icon was loaded
   */
  render(): string;
}

declare namespace FileIconRenderer {}

declare var fileIconRenderer: FileIconRenderer;

export = fileIconRenderer;
