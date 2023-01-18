/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.resource.PortletUtil}.
 *
 * <p>
 *    The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.resource.PortletUtil}
 *    constants in Velocity, e.g: <code>$portletUtil.PORTLET_PREFERENCES_TYPE_USER</code>
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */
type PortletUtilConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.resource.PortletUtil#PORTLET_PREFERENCES_TYPE_USER}.
   * @return {@link senselogic.sitevision.api.resource.PortletUtil#PORTLET_PREFERENCES_TYPE_USER}
   */
  getPORTLET_PREFERENCES_TYPE_USER(): number;
};

export = PortletUtilConstants;
