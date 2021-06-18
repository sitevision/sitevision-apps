import Throwable from '../../builtins/Throwable';

export function debug(aMessage: string): void;
export function debug(aMessage: string, aThrowable: Throwable): void;
export function error(aMessage: string): void;
export function error(aMessage: string, aThrowable: Throwable): void;
export function info(aMessage: string): void;
export function info(aMessage: string, aThrowable: Throwable): void;
export function isDebugEnabled(): boolean;
export function isErrorEnabled(): boolean;
export function isInfoEnabled(): boolean;
export function isTraceEnabled(): boolean;
export function isWarnEnabled(): boolean;
export function trace(aMessage: string): void;
export function trace(aMessage: string, aThrowable: Throwable): void;
export function warn(aMessage: string): void;
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
