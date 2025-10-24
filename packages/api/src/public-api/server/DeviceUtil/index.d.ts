/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

import type { Node } from "../../types/javax/jcr/Node";

/**
 * Device utility interface.
 *
 *  <p>
 *  Contains methods for retrieving device-related information.
 *  </p>
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getDeviceUtil()}.
 *  See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 */
export interface DeviceUtil {
  /**
   * Checks if current execution/rendering is in a mobile view.
   * @return <code>true</code> if current execution is rendering in a mobile view, <code>false</code> if not
   * @deprecated As of Sitevision 10 this method always returns <code>false</code>
   */
  isRenderingMobileView(): boolean;

  /**
   * Checks if currently executing client is a mobile device.
   * @param aPageNode a page node, typically the currently executing page (see&#xA; {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage()}).&#xA; Null is allowed but device checking will be more extensive with a proper value since it will also match against&#xA; all configured devices for the site of the <code>aPageNode</code>.
   * @return <code>true</code> if currently executing client is a mobile device, <code>false</code> if not
   * @deprecated As of Sitevision 10 the parameter aPageNode is no longer used
   */
  isMobileDevice(aPageNode: Node): boolean;
}

declare namespace DeviceUtil {}

declare var deviceUtil: DeviceUtil;

export default deviceUtil;
