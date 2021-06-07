import Throwable from '../../builtins/Throwable';

declare namespace logUtil {
  function debug(aMessage: string): void;
  function debug(aMessage: string, aThrowable: Throwable): void;

  function error(aMessage: string): void;
  function error(aMessage: string, aThrowable: Throwable): void;

  function info(aMessage: string): void;
  function info(aMessage: string, aThrowable: Throwable): void;

  function isDebugEnabled(): boolean;
  function isErrorEnabled(): boolean;
  function isInfoEnabled(): boolean;
  function isTraceEnabled(): boolean;
  function isWarnEnabled(): boolean;

  function trace(aMessage: string): void;
  function trace(aMessage: string, aThrowable: Throwable): void;

  function warn(aMessage: string): void;
  function warn(aMessage: string, aThrowable: Throwable): void;
}

export default logUtil;
