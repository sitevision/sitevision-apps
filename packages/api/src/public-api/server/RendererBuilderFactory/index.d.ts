/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { TextModuleRendererBuilder } from "../TextModuleRendererBuilder";
import type { ContentRendererBuilder } from "../ContentRendererBuilder";

/**
 * Factory for creating various builders for rendering page content.
 *
 *  <p>
 *     Currently, the factory can create builders for rendering of <strong>content nodes on a given page</strong>:
 *  </p>
 *  <ul>
 *     <li>Use {@link #getTextModuleRendererBuilder()} to create a renderer for Text modules.</li>
 *     <li>Use {@link #getContentRendererBuilder()} to create a renderer for other type of content nodes (i.e. layouts, modules etc).</li>
 *  </ul>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getRendererBuilderFactory()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2026.01.1
 */
export interface RendererBuilderFactory {
  /**
   * Gets a TextModuleRendererBuilder instance.
   * @return a TextModuleRendererBuilder instance
   */
  getTextModuleRendererBuilder(): TextModuleRendererBuilder;

  /**
   * Gets a ContentRendererBuilder instance.
   * @return a ContentRendererBuilder instance
   */
  getContentRendererBuilder(): ContentRendererBuilder;
}

declare namespace RendererBuilderFactory {}

declare var rendererBuilderFactory: RendererBuilderFactory;

export default rendererBuilderFactory;
