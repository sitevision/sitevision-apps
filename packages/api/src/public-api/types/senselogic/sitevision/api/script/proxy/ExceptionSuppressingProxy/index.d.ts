/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

import type { Exception } from "../../../../../../java/lang/Exception";
import type { Object } from "../../../../../../java/lang/Object";
import type { ExceptionSuppressingProxyConstants } from "../../../render/velocity/VelocityAccess.ExceptionSuppressingProxyConstants";

/**
 * Deprecated interface that will be removed in a future version of Sitevision.
 * @author Magnus Lövgren
 * @since Sitevision 2.6.1_09
 * @deprecated this interface is deprecated and will be removed in a future version of Sitevision
 */
export type ExceptionSuppressingProxy = ExceptionSuppressingProxyConstants & {
  /**
   * Always returns {@link #NO_EXCEPTION_THROWN_STATUS}.
   * @return {@link #NO_EXCEPTION_THROWN_STATUS}
   */
  getCurrentStatus(): number;

  /**
   * Always returns null.
   * @return null
   */
  getCurrentException(): Exception;

  /**
   * Returns the object this ExceptionSuppressingProxy was created for.
   * @return the decorated object
   */
  getProxiedObject(): unknown;

  /**
 * The status indicating that this proxy has no object set, nothing to proxy.
  
    */
  NO_OBJECT_PROXIED_STATUS: number;

  /**
 * The status indicating that last method invocation did not throw an exception.
  
    */
  NO_EXCEPTION_THROWN_STATUS: number;

  /**
 * The status indicating that last method invocation did throw an exception
  
    */
  EXCEPTION_THROWN_STATUS: number;
};
