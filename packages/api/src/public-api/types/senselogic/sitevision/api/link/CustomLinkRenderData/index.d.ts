import type { Map } from "../../../../../java/util/Map";

/**
 * Custom link data that enables custom data attributes when rendering for specific link URLs.
 * @author Magnus Lövgren
 * @since Sitevision 4.0.4
 * @see CustomLinkProcessor#getRenderData(String)
 */
export type CustomLinkRenderData = {
  /**
   * Returns the data attributes that should be used when rendering a link accepted by the {@link CustomLinkProcessor}.
   *
   *  <p>
   *     Notes about entry <em>keys</em>:
   *  </p>
   *  <ul>
   *     <li>
   *        A key that is <code>null</code> or <em>whitespace-only</em> will be completely ignored, i.e. no data attribute will be rendered.
   *     </li>
   *     <li>
   *        A key that isn't properly prefixed with <em>"data-"</em> will be prefixed when the data attribute is rendered.
   *     </li>
   *  </ul>
   *
   *  <p>
   *     Notes about entry <em>values</em>:
   *  </p>
   *  <ul>
   *     <li>
   *        A value that is <code>null</code> or <em>whitespace-only</em> will be rendered as a data attribute without value.
   *     </li>
   *     <li>
   *        A value should not be escaped, it will be escaped when it is rendered
   *        (typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeXML(String)}).
   *     </li>
   *  </ul>
   * @return the data attributes that should be used when rendering a link accepted by the {@link CustomLinkProcessor}
   */
  getDataAttributes(): Map;
};
