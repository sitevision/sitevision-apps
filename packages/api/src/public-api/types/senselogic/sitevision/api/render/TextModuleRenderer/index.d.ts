import type { Node } from "../../../../../javax/jcr/Node";

import type { String } from "../../../../../java/lang/String";

/**
 * TextModuleRenderer is a stateful renderer of Sitevision Text modules on a specific page.
 *
 *  <p>
 *     This rendering utility is a Text module-specific sibling to {@link OutputUtil#getNodeOutput(Node, Node, int)}
 *     but it has some nifty advantages:
 *  </p>
 *  <ul>
 *     <li>
 *        This renderer is more <em>efficient</em> than {@code OutputUtil} for subsequent Text module rendering.
 *     </li>
 *     <li>
 *        This renderer provides <em>convenience methods</em> for easy access of Text modules to render.
 *     </li>
 *     <li>
 *        This renderer provides the ability to render <em>"plain" HTML</em> output for a Text module
 *        <em>(typically what you want when the HTML of the Text module should be used outside of Sitevision, i.e. headless)</em>.
 *     </li>
 *  </ul>
 *
 *  <p>
 *    Using the TextModuleRenderer is pretty straightforward, if you remember that it is <strong>stateful</strong>.<br>
 *    Conceptually you would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the TextModuleRenderer for a specific page</li>
 *    <li>Update the renderer with a Text module on the page (using a Node, Name or Identifier).</li>
 *    <li>Check if the renderer is loaded (i.e. could the update process resolve a valid Text module?).</li>
 *    <li>Do render</li>
 *  </ol>
 *  <p>
 *     When you have rendered once, you can re-use the TextModuleRenderer until you are done. Something like:
 *  </p>
 *  <ol>
 *    <li>Update the renderer with a another Text module on the page (using a Node, Name or Identifier).</li>
 *    <li>Check if the renderer is loaded (i.e. could the update process resolve a valid Text module?).</li>
 *    <li>Do render</li>
 *  </ol>
 *
 *  <p>
 *     <strong>Example of how this renderer could be used:</strong><br>
 *     E.g. You want to get all output types (html, plain html, text) from two Text modules on a specific page.
 *  </p>
 *  <pre><code>   var textRendererBuilder = require('TextModuleRendererBuilder'),
 *        textRenderer,
 *        page,
 *        htmlData = { "type": "HTML" },
 *        plainHtmlData = { "type": "Plain HTML" },
 *        textData = { "type": "Text" };
 *
 *    <em>// Get the page where the Text modules are located...</em>
 *    page = ...
 *
 *    <em>// Create a TextModuleRenderer for given page</em>
 *    textRenderer = textRendererBuilder.setPage(page).build();
 *
 *    <em>// Update the TextModuleRenderer with a Text module and render (if possible)</em>
 *    textRenderer.updateByName('Rubrik');
 *    if (textRenderer.isLoaded()) {
 *       htmlData.heading = textRenderer.renderHtml();
 *       plainHtmlData.heading = textRenderer.renderPlainHtml();
 *       textData.heading = textRenderer.renderText();
 *    }
 *
 *    <em>// Update the TextModuleRenderer with another Text module and render (if possible)</em>
 *    textRenderer.updateByName('Text');
 *    if (textRenderer.isLoaded()) {
 *       htmlData.content = textRenderer.renderHtml();
 *       plainHtmlData.content = textRenderer.renderPlainHtml();
 *       textData.content = textRenderer.renderText();
 *    }</code></pre>
 *  <p>
 *     The JSON result of the Javascript objects in the example script above could be something like this:
 *  </p>
 *  <pre><code>   <strong>// htmlData</strong>
 *    {
 *       "type": "HTML",
 *       "heading": "&lt;div class=\"sv-text-portlet-content\"&gt;&lt;h1 class=\"heading\" id=\"h-Heading\"&gt;Heading&lt;/h1&gt;&lt;/div&gt;",
 *       "content": "&lt;div class=\"sv-text-portlet-content\"&gt;&lt;p class=\"normal\"&gt;Some content&lt;/p&gt;&lt;/div&gt;"
 *    }
 *
 *    <strong>// plainHtmlData</strong>
 *    {
 *       "type": "Plain HTML",
 *       "heading": "&lt;h1&gt;Heading&lt;/h1&gt;",
 *       "content": "&lt;p&gt;Some content&lt;/p&gt;"
 *    }
 *
 *    <strong>// textData</strong>
 *    {
 *       "type": "Text",
 *       "heading": "Heading",
 *       "content": "Some content"
 *    }</code></pre>
 *
 *  <p>
 *     <strong>HTML output</strong><br>
 *     Please note that the HTML of a Text module will differ in versions (i.e.
 *     {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION} and
 *     {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}).
 *     The OFFLINE_VERSION typically contains more elements and attributes.
 *  </p>
 *
 *  <p>
 *     <strong>Legacy Text modules</strong><br>
 *     This renderer does <em>NOT</em> support legacy Text modules that was created before Sitevision 3!
 *     Such Text modules must be <em>converted</em> before they can be used by this renderer
 *     <em>(to convert - open the page in the Sitevision editor, simply click on the legacy Text module and re-publish the page).</em>
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link TextModuleRendererBuilder#build()} .
 *     See {@link TextModuleRendererBuilder} for how to obtain an instance of the <code>TextModuleRendererBuilder</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 7
 */
export type TextModuleRenderer = {
  /**
   * Updates the state of this renderer (potentially "loads" a Text module for rendering) using a Text module Node.
   *
   *  <p>
   *     <em>
   *        Note! If this state update fails (i.e. argument was null or not specifying a supported Text module that exists on the page
   *        this renderer was created for) there will be nothing to render. The state can always be checked via the
   *        {@link #isLoaded()} method.
   *     </em>
   *  </p>
   * @param aTextModuleNode the Text module
   */
  update(aTextModuleNode: Node): void;

  /**
   * Updates the state of this renderer (potentially "loads" a Text module for rendering) using the name of a Text module Node.
   *
   *  <p>
   *     <em>
   *        Note! If this state update fails (i.e. argument was null or not specifying a supported Text module that exists on the page
   *        this renderer was created for) there will be nothing to render. The state can always be checked via the
   *        {@link #isLoaded()} method.
   *     </em>
   *  </p>
   * @param aTextModuleName the name of the Text module
   */
  updateByName(aTextModuleName: String | string): void;

  /**
   * Updates the state of this renderer (potentially "loads" a Text module for rendering) using the identifier of a Text module Node.
   *
   *  <p>
   *     <em>
   *        Note! If this state update fails (i.e. argument was null or not specifying a supported Text module that exists on the page
   *        this renderer was created for) there will be nothing to render. The state can always be checked via the
   *        {@link #isLoaded()} method.
   *     </em>
   *  </p>
   * @param aTextModuleIdentifier the identifier of the Text module
   */
  updateByIdentifier(aTextModuleIdentifier: String | string): void;

  /**
   * Whether or not this renderer has been updated with a renderable text module.
   * @return true if this renderer has a valid text module to render, false otherwise
   */
  isLoaded(): boolean;

  /**
   * Renders full HTML for the loaded Text module.
   *
   *  <p>
   *     <strong>Note!</strong> The returned value will always be empty string if the {@link #isLoaded()} state is <code>false</code>
   *     when invoking this render method <em>(i.e. you would typically always check the loaded state before calling this method).</em>
   *  </p>
   *
   *  <p>
   *     <em>
   *        This method is conceptually equivalent with
   *        {@link OutputUtil#getNodeOutput(Node, Node, int)
   *        OutputUtil.getNodeOutput(ThePageOfThisRenderer, TheLoadedTextModule, OutputUtil.CONTENT_TYPE_TEXT_HTML)}
   *     </em>
   *  </p>
   * @return the full HTML of the loaded Text module, or empty String if rendering fails or no Text module is loaded
   * @see #renderPlainHtml()
   */
  renderHtml(): string;

  /**
   * Renders the text for the loaded Text module.
   *
   *  <p>
   *     <strong>Note!</strong> The returned value will always be empty string if the {@link #isLoaded()} state is <code>false</code>
   *     when invoking this render method <em>(i.e. you would typically always check the loaded state before calling this method).</em>
   *  </p>
   *
   *  <p>
   *     <em>
   *        This method is conceptually equivalent with
   *        {@link OutputUtil#getNodeOutput(Node, Node, int)
   *        OutputUtil.getNodeOutput(ThePageOfThisRenderer, TheLoadedTextModule, OutputUtil.CONTENT_TYPE_TEXT_PLAIN)}
   *        but this method does not html encode/escape any chars, this method provides the "raw" text.
   *     </em>
   *  </p>
   *
   *  <p>
   *     <strong>Important security note!</strong><br>
   *     The result text of this method is <strong>not</strong> HTML encoded/escaped!
   *     Hence if you should output the text as part of a HTML page, you must escape/encode the text!
   *     Such escaping/encoding is provided by {@link senselogic.sitevision.api.text.EndecUtil#escapeXML(String)}.
   *  </p>
   * @return the text of the loaded Text module, or empty String if rendering fails or no Text module is loaded
   */
  renderText(): string;

  /**
   * Renders the plain HTML for the loaded Text module.
   *
   *  <p>
   *     <strong>Note!</strong> The returned value will always be empty string if the {@link #isLoaded()} state is <code>false</code>
   *     when invoking this render method <em>(i.e. you would typically always check the loaded state before calling this method).</em>
   *  </p>
   *
   *  <p>
   *     The <em>plain</em> HTML is a minimal and generic variant of the full Text module HTML (as of {@link #renderHtml()}).
   *  </p>
   * @return the plain HTML of the loaded Text module, or empty String if rendering fails or no Text module is loaded
   * @see #renderHtml()
   */
  renderPlainHtml(): string;
};
