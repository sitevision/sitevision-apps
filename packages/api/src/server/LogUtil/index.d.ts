import Throwable from '../../builtins/Throwable';

  /**
  * Logs a debug message to the Sitevision server log.
  * @returns {void} undefined 
* @param {string} aMessage - a message.
  */
export function debug(aMessage: string): void;
  
/**
* Logs a debug message to the Sitevision server log.
* @returns {void} undefined 
* @param {string} aMessage - a message.
* @param {Throwable} aThrowable - a throwable.
*/
export function debug(aMessage: string, aThrowable: Throwable): void;

/**
* Logs an error message to the Sitevision server log.
* @returns {void} undefined 
* @param {string} aMessage - a message.
*/
export function error(aMessage: string): void;

/**
* Logs an error message to the Sitevision server log.
* @returns {void} undefined 
* @param {string} aMessage - a message.
* @param {Throwable} aThrowable - a throwable.
*/
export function error(aMessage: string, aThrowable: Throwable): void;

/**
* Logs an info message to the Sitevision server log.
* @returns {void} undefined 
* @param {string} aMessage - a message.
*/
export function info(aMessage: string): void;

/**
* Logs an info message to the Sitevision server log.
* @returns {void} undefined 
* @param {string} aMessage - a message.
* @param {Throwable} aThrowable - a throwable.
*/
export function info(aMessage: string, aThrowable: Throwable): void;

/**
* Checks if debug logging is enabled.
* @returns {boolean} true if debug logging is enabled, false otherwise 
*/
export function isDebugEnabled(): boolean;

/**
* Checks if error logging is enabled.
* @returns {boolean} true if error logging is enabled, false otherwise 
*/
export function isErrorEnabled(): boolean;

/**
* Checks if info logging is enabled.
* @returns {boolean} true if info logging is enabled, false otherwise 
*/
export function isInfoEnabled(): boolean;

/**
* Checks if trace logging is enabled.
* @returns {boolean} true if trace logging is enabled, false otherwise 
*/
export function isTraceEnabled(): boolean;

/**
* Checks if warn logging is enabled.
* @returns {boolean} true if warn logging is enabled, false otherwise 
*/
export function isWarnEnabled(): boolean;

/**
* Logs a trace message to the Sitevision server log.
* @returns {void} undefined 
* @param {string} aMessage - a message.
*/
export function trace(aMessage: string): void;

/**
* Logs a trace message to the Sitevision server log.
* @returns {void} undefined 
* @param {string} aMessage - a message.
* @param {Throwable} aThrowable - a throwable.
*/
export function trace(aMessage: string, aThrowable: Throwable): void;

/**
* Logs a warn message to the Sitevision server log.
* @returns {void} undefined 
* @param {string} aMessage - a message.
*/
export function warn(aMessage: string): void;

/**
* Logs a warn message to the Sitevision server log.
* @returns {void} undefined 
* @param {string} aMessage - a message.
* @param {Throwable} aThrowable - a throwable.
*/
export function warn(aMessage: string, aThrowable: Throwable): void;

declare namespace logUtil {
  export {
    debug,
    debug,
    error,
    error,
    info,
    info,
    isDebugEnabled,
    isErrorEnabled,
    isInfoEnabled,
    isTraceEnabled,
    isWarnEnabled,
    trace,
    trace,
    warn,
    warn,
  };
}

export default logUtil;
