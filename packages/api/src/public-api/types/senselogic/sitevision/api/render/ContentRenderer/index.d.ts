/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Node } from "../../../../../javax/jcr/Node";

import type { String } from "../../../../../java/lang/String";

/**
 * ContentRenderer is a stateful renderer of content on a specific page.
 *
 *  <p>
 *     This rendering utility is a page content-specific sibling to {@link OutputUtil#getNodeOutput(Node, Node, int)}
 *     but it has some nifty advantages:
 *  </p>
 *  <ul>
 *     <li>
 *        This renderer is more <em>efficient</em> than {@code OutputUtil} for subsequent rendering of page content.
 *     </li>
 *     <li>
 *        This renderer provides <em>convenience methods</em> for easy access of page content to render.
 *     </li>
 *     <li>
 *        This renderer can use request <em>parameters</em> when rendering page content (if created via the {@link ContentRendererBuilder}).
 *     </li>
 *  </ul>
 *
 *  <p>
 *     <strong>Note!</strong> This renderer has generic support for page content (i.e. modules, layouts etc.)
 *     but if you should render <em>Text modules</em> - you should use {@link TextModuleRenderer} instead!
 *     The TextModuleRenderer is much, much more efficient and provides more versatile behaviour when rendering text modules.
 *  </p>
 *
 *  <p>
 *    Using the ContentRenderer is pretty straightforward, if you remember that it is <strong>stateful</strong> and it adheres to an immutable page
 *    determined at creation time.<br>
 *    Conceptually you would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the ContentRenderer for a specific page and parameters via {@link ContentRendererBuilder}.</li>
 *    <li>Update the renderer with a content node on the page.</li>
 *    <li>Check if the renderer is loaded (i.e. could the update process resolve a valid/renderable content node).</li>
 *    <li>Do render</li>
 *  </ol>
 *  <p>
 *     When you have rendered once, you can re-use the ContentRenderer until you are done. Something like:
 *  </p>
 *  <ol>
 *    <li>Update the renderer with a another content node on the page.</li>
 *    <li>Check if the renderer is loaded (i.e. could the update process resolve a valid/renderable content node).</li>
 *    <li>Do render</li>
 *  </ol>
 *
 *  <p>
 *  <strong>Usage example:</strong>
 *  </p>
 *  <pre><code>    import rendererBuilderFactory from '@sitevision/api/server/RendererBuilderFactory';
 *     // Script module and legacy apps would typically use the require function:
 *     // const rendererBuilderFactory = require('RendererBuilderFactory');
 *
 *     const contentRendererBuilder = rendererBuilderFactory.getContentRendererBuilder();
 *
 *     // Example Use Case: render a search module on a given page using a specific request parameter used by the search module
 *     const page = ...
 *     const pageParams = { query:"*:*" };
 *     const searchModule = ...
 *
 *     // 1. Create renderer with page context
 *     const contentRenderer = contentRendererBuilder
 *                                .setPage(page)
 *                                .setParameters(pageParams)
 *                                .build();
 *
 *     // 2. Load the renderer with the page content part and render
 *     contentRenderer.update(searchModule);
 *     const output = contentRenderer.renderHtml();
 *  </code></pre>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link ContentRendererBuilder#build()} .
 *     See {@link ContentRendererBuilder} for how to obtain an instance of the <code>ContentRendererBuilder</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2026.01.1
 * @see ContentRendererBuilder
 */
export type ContentRenderer = {
  /**
   * Updates the state of this renderer using a content Node.
   *
   *  <p>
   *     <em>
   *        Note! If this state update fails (i.e. argument was null or not specifying a supported content part that exists on the page
   *        this renderer was created for) there will be nothing to render. The state can always be checked via the
   *        {@link #isLoaded()} method.
   *     </em>
   *  </p>
   *  <p>
   *     <em>Tip!</em> {@link senselogic.sitevision.api.node.NodeTreeUtil} provides convenient methods for finding content nodes on a page.
   *  </p>
   * @param aContentNode the content node, typically a sv:portlet, sv:layout or sv:referenceLayout
   */
  update(aContentNode: Node): void;

  /**
   * Updates the state of this renderer using the identifier of a content Node.
   *
   *  <p>
   *     The "identifier" is the JCR Node identifier (also the <code>jcr:uuid</code> property) of the content node.
   *  </p>
   *  <p>
   *     <em>
   *        Note! If this state update fails (i.e. argument was null or not specifying a supported content part that exists on the page
   *        this renderer was created for) there will be nothing to render. The state can always be checked via the
   *        {@link #isLoaded()} method.
   *     </em>
   *  </p>
   * @param aNodeIdentifier the node identifier that specifies the content node (typically a sv:portlet, sv:layout or sv:referenceLayout)
   */
  updateByIdentifier(aNodeIdentifier: String | string): void;

  /**
   * Updates the state of this renderer using the content identifier of a content Node.
   *
   *  <p>
   *     The "content identifier" is the <code>contentIdentifier</code> property for the sv:portlet on the context page.
   *  </p>
   *  <p>
   *     <em>
   *        Note! If this state update fails (i.e. argument was null or not specifying a supported content part that exists on the page
   *        this renderer was created for) there will be nothing to render. The state can always be checked via the
   *        {@link #isLoaded()} method.
   *     </em>
   *  </p>
   * @param aContentIdentifier the content identifier that specifies the content node (i.e. a sv:portlet)
   */
  updateByContentIdentifier(aContentIdentifier: String | string): void;

  /**
   * Whether this renderer has been updated with a renderable content Node.
   * @return true if this renderer has a valid content Node to render, false otherwise
   */
  isLoaded(): boolean;

  /**
   * Renders html for the loaded content node.
   *
   *  <p>
   *     <strong>Note!</strong> The returned value will always be empty string if the {@link #isLoaded()} state is <code>false</code>
   *     when invoking this render method <em>(i.e. you would typically always check the loaded state before calling this method).</em>
   *  </p>
   * @return the html of the loaded content node, or empty String if rendering fails or no content node is loaded
   */
  renderHtml(): string;

  /**
   * Renders markdown for the loaded content node.
   *
   *  <p>
   *     <strong>Note!</strong> The returned value will always be empty string if the {@link #isLoaded()} state is <code>false</code>
   *     when invoking this render method <em>(i.e. you would typically always check the loaded state before calling this method).</em>
   *  </p>
   * @return the markdown of the loaded content node, or empty String if rendering fails or no content node is loaded
   * @since Sitevision 2026.01.2
   */
  renderMarkdown(): string;
};
