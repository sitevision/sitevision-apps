/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Node } from "../../types/javax/jcr/Node";

import type { PortletUtilConstants } from "../../types/senselogic/sitevision/api/render/velocity/VelocityAccess.PortletUtilConstants";

/**
 * <p>Portlet utility interface.</p>
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getPortletUtil()}.
 *  See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6_06
 */
export interface PortletUtil extends PortletUtilConstants {
  /**
 * The personal portlet preferences type.
  
    */
  PORTLET_PREFERENCES_TYPE_USER: 11;

  /**
   * <p>Extracts the user specific <code>PortletPreferences</code> for the specified portlet.
   *  This method is a complement to the accessor provided by <code>PortletRequest.getPreferences</code>
   *  which returns the <code>PortletPreferences</code> for the current user.</p>
   *
   *  <p>Note that this method only returns the portlet preferences that are stored. Any
   *  local modifications that has not yet been stored will be ignored.</p>
   * @param portlet The <code>Node</code> corresponding to a portlet
   * @param user The <code>Node</code> corresponding to a user
   * @param portletPreferencesType The preferences type <em>(for now, only {@link #PORTLET_PREFERENCES_TYPE_USER} is allowed)</em>
   * @return <code>PortletPreferences</code> that is effective for the provided user for&#xA; the specified portlet
   */
  getPortletPreferences(
    portlet: Node,
    user: Node,
    portletPreferencesType: number
  ): unknown;
}

declare namespace PortletUtil {}

declare var portletUtil: PortletUtil;

export default portletUtil;
