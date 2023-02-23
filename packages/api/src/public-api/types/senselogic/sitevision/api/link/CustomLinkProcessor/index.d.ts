import type { String } from "../../../../../java/lang/String";
import type { Locale } from "../../../../../java/util/Locale";
import type { CustomLinkRenderData } from "../CustomLinkRenderData";
import type { Filter } from "../../base/Filter";

/**
 * Custom link processor interface that enables custom validation and data attributes rendering for specific link URLs.
 * @author Magnus Lövgren
 * @since Sitevision 4.0.4
 */
export type CustomLinkProcessor = Filter & {
  /**
   * Validates a link URL accepted by this link processor.
   *
   *  <p>
   *     Note! This method will only be called if {@link senselogic.sitevision.api.base.Filter#accept(Object)}
   *     returns <code>true</code> for <code>aLinkURL</code>.
   *  </p>
   * @param aLinkURL the link URL to validate
   * @param aLocale the Locale to use for potential validation error message
   * @return a localized validation error message, or <code>null</code> if validation passes
   */
  validate(aLinkURL: String | string, aLocale: Locale): string;

  /**
   * Gets custom render data for a link URL accepted by this link processor.
   *
   *  <p>
   *     Note! This method will only be called if {@link senselogic.sitevision.api.base.Filter#accept(Object)}
   *     returns <code>true</code> for <code>aLinkURL</code>.
   *  </p>
   * @param aLinkURL the link URL that should be rendered
   * @return custom render data, or <code>null</code> if no custom render data is to be used
   */
  getRenderData(aLinkURL: String | string): CustomLinkRenderData;
};
