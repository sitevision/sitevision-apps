/**
 * Logging utility class for simple logging to the Sitevision server log.
 * <p>
 *    If you implement a custom portlet you would typically use a logging framework, not this class.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getLogUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 */

interface LogUtil {
  /**
   * Checks if trace logging is enabled.
   *
   * <p>
   *    Appropriate to check first if you are about to do extensive/expensive trace logging.
   * </p>
   * @return <code>true</code> if trace logging is enabled, <code>false</code> otherwise
   * @since Sitevision 4.1
   */
  isTraceEnabled(): boolean;

  /**
   * Logs a trace message to the Sitevision server log.
   * @param aMessage a message.
   * @since Sitevision 4.1
   */
  trace(aMessage: java.lang.String): void;

  /**
   * Logs a trace message to the Sitevision server log.
   * @param aMessage a message.
   * @param aThrowable a throwable.
   * @since Sitevision 4.1
   */
  trace(aMessage: java.lang.String, aThrowable: java.lang.Throwable): void;

  /**
   * Checks if debug logging is enabled.
   *
   * <p>
   *    Appropriate to check first if you are about to do extensive/expensive debug logging.
   * </p>
   * @return <code>true</code> if debug logging is enabled, <code>false</code> otherwise
   * @since Sitevision 3.0
   */
  isDebugEnabled(): boolean;

  /**
   * Logs a debug message to the Sitevision server log.
   * @param aMessage a message.
   */
  debug(aMessage: java.lang.String): void;

  /**
   * Logs a debug message to the Sitevision server log.
   * @param aMessage a message.
   * @param aThrowable a throwable.
   */
  debug(aMessage: java.lang.String, aThrowable: java.lang.Throwable): void;

  /**
   * Checks if info logging is enabled.
   *
   * <p>
   *    Appropriate to check first if you are about to do extensive/expensive info logging.
   * </p>
   * @return <code>true</code> if info logging is enabled, <code>false</code> otherwise
   * @since Sitevision 4.1
   */
  isInfoEnabled(): boolean;

  /**
   * Logs an info message to the Sitevision server log.
   * @param aMessage a message.
   */
  info(aMessage: java.lang.String): void;

  /**
   * Logs an info message to the Sitevision server log.
   * @param aMessage a message.
   * @param aThrowable a throwable.
   */
  info(aMessage: java.lang.String, aThrowable: java.lang.Throwable): void;

  /**
   * Checks if warn logging is enabled.
   * @return <code>true</code> if warn logging is enabled, <code>false</code> otherwise
   * @since Sitevision 4.1
   */
  isWarnEnabled(): boolean;

  /**
   * Logs a warn message to the Sitevision server log.
   * @param aMessage a message.
   */
  warn(aMessage: java.lang.String): void;

  /**
   * Logs a warn message to the Sitevision server log.
   * @param aMessage a message.
   * @param aThrowable a throwable.
   */
  warn(aMessage: java.lang.String, aThrowable: java.lang.Throwable): void;

  /**
   * Checks if error logging is enabled.
   * @return <code>true</code> if error logging is enabled, <code>false</code> otherwise
   * @since Sitevision 4.1
   */
  isErrorEnabled(): boolean;

  /**
   * Logs an error message to the Sitevision server log.
   * @param aMessage a message.
   */
  error(aMessage: java.lang.String): void;

  /**
   * Logs an error message to the Sitevision server log.
   * @param aMessage a message.
   * @param aThrowable a throwable.
   */
  error(aMessage: java.lang.String, aThrowable: java.lang.Throwable): void;
}
