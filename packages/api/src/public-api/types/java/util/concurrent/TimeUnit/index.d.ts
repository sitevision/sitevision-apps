/**
 * A {@code TimeUnit} represents time durations at a given unit of
 *  granularity and provides utility methods to convert across units,
 *  and to perform timing and delay operations in these units.  A
 *  {@code TimeUnit} does not maintain time information, but only
 *  helps organize and use time representations that may be maintained
 *  separately across various contexts.  A nanosecond is defined as one
 *  thousandth of a microsecond, a microsecond as one thousandth of a
 *  millisecond, a millisecond as one thousandth of a second, a minute
 *  as sixty seconds, an hour as sixty minutes, and a day as twenty four
 *  hours.
 *
 *  <p>A {@code TimeUnit} is mainly used to inform time-based methods
 *  how a given timing parameter should be interpreted. For example,
 *  the following code will timeout in 50 milliseconds if the {@link
 *  java.util.concurrent.locks.Lock lock} is not available:
 *
 *   <pre> {@code
 *  Lock lock = ...;
 *  if (lock.tryLock(50L, TimeUnit.MILLISECONDS)) ...}</pre>
 *
 *  while this code will timeout in 50 seconds:
 *   <pre> {@code
 *  Lock lock = ...;
 *  if (lock.tryLock(50L, TimeUnit.SECONDS)) ...}</pre>
 *
 *  Note however, that there is no guarantee that a particular timeout
 *  implementation will be able to notice the passage of time at the
 *  same granularity as the given {@code TimeUnit}.
 * @since 1.5
 * @author Doug Lea
 */
export type TimeUnit = {
  NANOSECONDS: "NANOSECONDS";
  MICROSECONDS: "MICROSECONDS";
  MILLISECONDS: "MILLISECONDS";
  SECONDS: "SECONDS";
  MINUTES: "MINUTES";
  HOURS: "HOURS";
  DAYS: "DAYS";
};
