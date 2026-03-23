/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

/**
 * Render context determines which page to use as context when rendering page content.
 *
 *  <p>
 *     Using proper rendering context is important to get the expected output when rendering page content dynamically. This
 *     applies to all functions that use {@link ContentRenderer} or {@link TextModuleRenderer} to render output.
 *  </p>
 *  <p>
 *     Page content modules that in any way are contextual <em>(e.g. "prints name of current page")</em> will produce unexpected output
 *     if the rendering context is not properly specified.
 *  </p>
 *  <ul>
 *     <li>
 *        Use {@link RendererContext#ORIGIN_PAGE} when you want the content to be rendered as it would be
 *        on the page where the content part actually resides.
 *     </li>
 *     <li>
 *        Use {@link RendererContext#CURRENT_PAGE} when you want the content to be rendered as it would be
 *        if the content part resided on the page that is currently rendering.
 *     </li>
 *  </ul>
 * @author Magnus Lövgren
 * @since Sitevision 2026.03.1
 */
declare enum RendererContext {
  ORIGIN_PAGE,
  CURRENT_PAGE,
}

export default RendererContext;
