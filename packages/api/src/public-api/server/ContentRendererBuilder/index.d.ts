/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Node } from "../../types/javax/jcr/Node";
import type { Map } from "../../types/java/util/Map";
import type RendererContext from "../RendererContext";
import type { ContentRenderer } from "../../types/senselogic/sitevision/api/render/ContentRenderer";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * <p>
 *     Builder for creating a {@link ContentRenderer} instance.
 *  </p>
 *
 *  <p>
 *     ContentRendererBuilder has one <strong>mandatory attribute</strong> and two <em>optional</em> attributes:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>page</em> (mandatory) - The page (sv:page, sv:article, sv:sitePage) where the content nodes to render resides.
 *        Must not be null and must not be "current page".
 *     </li>
 *     <li>
 *        <em>parameters</em> (optional) - A key/value map of page parameters to use when rendering the content nodes. May be null or empty.
 *     </li>
 *     <li>
 *        <em>rendererContext</em> (optional) - Determines what context to use when content parts of the page are rendered.
 *        Default is {@link RendererContext#ORIGIN_PAGE}.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     Using the ContentRendererBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *     would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the ContentRendererBuilder</li>
 *    <li>Set the page</li>
 *    <li>Potentially set the page parameters</li>
 *    <li>Do build</li>
 *  </ol>
 *  <p>
 *     When you have built a <code>ContentRenderer</code> instance, you can re-use the ContentRendererBuilder to build more instances.
 *     Typically like:
 *  </p>
 *  <ol>
 *    <li>Set the page</li>
 *    <li>Potentially set the page parameters</li>
 *    <li>Do build</li>
 *  </ol>
 *
 *  <p>
 *     <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *     more information about Builders and how to work with them and {@link TextModuleRenderer} has a code example of how
 *     this builder and its result can be used.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link RendererBuilderFactory#getContentRendererBuilder()}.
 *     See {@link RendererBuilderFactory} for how to obtain an instance of the <code>RendererBuilderFactory</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2026.01.1
 */
export interface ContentRendererBuilder extends Builder {
  /**
   * Sets the page of this builder.
   *
   *  <p>
   *     <strong>Note! Due to security reasons (potential never-ending loops) it is prohibited to create a content renderer for
   *     the currently executing page (i.e. {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage()})!</strong>
   *  </p>
   * @param aPageNode a page node (sv:page, sv:article, sv:sitePage) where current user has READ permission, must not be null or "current page".
   * @return this builder
   */
  setPage(aPageNode: Node): ContentRendererBuilder;

  /**
   * Sets parameters for the page, to be used when rendering content.
   * @param aParameters a map of parameters
   * @return this builder
   */
  setParameters(aParameters: Map | {}): ContentRendererBuilder;

  /**
   * Sets the renderer context to use when rendering content.
   *
   *  <p>
   *     If not set or set to null, the default renderer context ({@link RendererContext#ORIGIN_PAGE}) will be used.
   *  </p>
   * @param aRendererContext the render context
   * @return this builder
   * @since Sitevision 2026.03.1
   */
  setRendererContext(aRendererContext: RendererContext): ContentRendererBuilder;

  /**
   * Creates a ContentRenderer instance for the page of this builder.
   * @return a content renderer instance
   * @throws IllegalStateException if no page is set or if page is invalid (e.g. "current page")
   */
  build(): ContentRenderer;
}

declare namespace ContentRendererBuilder {}

declare var contentRendererBuilder: ContentRendererBuilder;

export default contentRendererBuilder;
