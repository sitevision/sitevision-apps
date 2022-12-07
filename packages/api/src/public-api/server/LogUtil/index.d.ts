/**
 * Checks if trace logging is enabled.
 *
 * <p>
 *    Appropriate to check first if you are about to do extensive/expensive trace logging.
 * </p>
 * @return <code>true</code> if trace logging is enabled, <code>false</code> otherwise
 * @since Sitevision 4.1
 */
export function isTraceEnabled(): boolean;

/**
 * Logs a trace message to the Sitevision server log.
 * @param aMessage a message.
 * @since Sitevision 4.1
 */
export function trace(aMessage: string): void;

/**
 * Logs a trace message to the Sitevision server log.
 * @param aMessage a message.
 * @param aThrowable a throwable.
 * @since Sitevision 4.1
 */
export function trace(aMessage: string, aThrowable: unknown): void;

/**
 * Checks if debug logging is enabled.
 *
 * <p>
 *    Appropriate to check first if you are about to do extensive/expensive debug logging.
 * </p>
 * @return <code>true</code> if debug logging is enabled, <code>false</code> otherwise
 * @since Sitevision 3.0
 */
export function isDebugEnabled(): boolean;

/**
 * Logs a debug message to the Sitevision server log.
 * @param aMessage a message.
 */
export function debug(aMessage: string): void;

/**
 * Logs a debug message to the Sitevision server log.
 * @param aMessage a message.
 * @param aThrowable a throwable.
 */
export function debug(aMessage: string, aThrowable: unknown): void;

/**
 * Checks if info logging is enabled.
 *
 * <p>
 *    Appropriate to check first if you are about to do extensive/expensive info logging.
 * </p>
 * @return <code>true</code> if info logging is enabled, <code>false</code> otherwise
 * @since Sitevision 4.1
 */
export function isInfoEnabled(): boolean;

/**
 * Logs an info message to the Sitevision server log.
 * @param aMessage a message.
 */
export function info(aMessage: string): void;

/**
 * Logs an info message to the Sitevision server log.
 * @param aMessage a message.
 * @param aThrowable a throwable.
 */
export function info(aMessage: string, aThrowable: unknown): void;

/**
 * Checks if warn logging is enabled.
 * @return <code>true</code> if warn logging is enabled, <code>false</code> otherwise
 * @since Sitevision 4.1
 */
export function isWarnEnabled(): boolean;

/**
 * Logs a warn message to the Sitevision server log.
 * @param aMessage a message.
 */
export function warn(aMessage: string): void;

/**
 * Logs a warn message to the Sitevision server log.
 * @param aMessage a message.
 * @param aThrowable a throwable.
 */
export function warn(aMessage: string, aThrowable: unknown): void;

/**
 * Checks if error logging is enabled.
 * @return <code>true</code> if error logging is enabled, <code>false</code> otherwise
 * @since Sitevision 4.1
 */
export function isErrorEnabled(): boolean;

/**
 * Logs an error message to the Sitevision server log.
 * @param aMessage a message.
 */
export function error(aMessage: string): void;

/**
 * Logs an error message to the Sitevision server log.
 * @param aMessage a message.
 * @param aThrowable a throwable.
 */
export function error(aMessage: string, aThrowable: unknown): void;

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
declare namespace logUtil {
  export {
    isTraceEnabled,
    trace,
    isDebugEnabled,
    debug,
    isInfoEnabled,
    info,
    isWarnEnabled,
    warn,
    isErrorEnabled,
    error,
  };
}

export default logUtil;
