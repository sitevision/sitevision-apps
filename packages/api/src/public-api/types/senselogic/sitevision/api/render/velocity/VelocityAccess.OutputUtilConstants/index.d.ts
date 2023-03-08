/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.render.OutputUtil}.
 *
 *  <p>
 *     The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.render.OutputUtil}
 *     constants in Velocity, e.g: <code>$outputUtil.CONTENT_TYPE_TEXT_HTML</code>
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */
export type OutputUtilConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.render.OutputUtil#CONTENT_TYPE_TEXT_PLAIN}.
   * @return {@link senselogic.sitevision.api.render.OutputUtil#CONTENT_TYPE_TEXT_PLAIN}
   */
  getCONTENT_TYPE_TEXT_PLAIN(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.render.OutputUtil#CONTENT_TYPE_TEXT_HTML}.
   * @return {@link senselogic.sitevision.api.render.OutputUtil#CONTENT_TYPE_TEXT_HTML}
   */
  getCONTENT_TYPE_TEXT_HTML(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.render.OutputUtil#CONTENT_TYPE_TEXT_XML}.
   * @return {@link senselogic.sitevision.api.render.OutputUtil#CONTENT_TYPE_TEXT_XML}
   */
  getCONTENT_TYPE_TEXT_XML(): number;
};
