/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.script.proxy.ExceptionSuppressingProxy}.
 *
 * <p>
 *    The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.script.proxy.ExceptionSuppressingProxy}
 *    constants in Velocity, e.g: <code>$exceptionSuppressingProxy.EXCEPTION_THROWN_STATUS</code>
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */
export type ExceptionSuppressingProxyConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.script.proxy.ExceptionSuppressingProxy#NO_OBJECT_PROXIED_STATUS}.
   * @return {@link senselogic.sitevision.api.script.proxy.ExceptionSuppressingProxy#NO_OBJECT_PROXIED_STATUS}
   */
  getNO_OBJECT_PROXIED_STATUS(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.script.proxy.ExceptionSuppressingProxy#NO_EXCEPTION_THROWN_STATUS}.
   * @return {@link senselogic.sitevision.api.script.proxy.ExceptionSuppressingProxy#NO_EXCEPTION_THROWN_STATUS}
   */
  getNO_EXCEPTION_THROWN_STATUS(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.script.proxy.ExceptionSuppressingProxy#EXCEPTION_THROWN_STATUS}.
   * @return {@link senselogic.sitevision.api.script.proxy.ExceptionSuppressingProxy#EXCEPTION_THROWN_STATUS}
   */
  getEXCEPTION_THROWN_STATUS(): number;
};
