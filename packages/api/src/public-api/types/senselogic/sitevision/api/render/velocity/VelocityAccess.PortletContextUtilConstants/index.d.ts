/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.context.PortletContextUtil}.
 *
 * <p>
 *    The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.context.PortletContextUtil}
 *    constants in Velocity, e.g: <code>$portletContextUtil.ONLINE_VERSION</code>
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */
export type PortletContextUtilConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.context.PortletContextUtil#ONLINE_VERSION}.
   * @return {@link senselogic.sitevision.api.context.PortletContextUtil#ONLINE_VERSION}
   * @deprecated
   */
  getONLINE_VERSION(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.context.PortletContextUtil#OFFLINE_VERSION}.
   * @return {@link senselogic.sitevision.api.context.PortletContextUtil#OFFLINE_VERSION}
   * @deprecated
   */
  getOFFLINE_VERSION(): number;
};
