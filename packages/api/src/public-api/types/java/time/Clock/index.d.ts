import type { ZoneId } from "../ZoneId";

import type { Instant } from "../Instant";
import type { Object } from "../../lang/Object";

/**
 * A clock providing access to the current instant, date and time using a time-zone.
 *  <p>
 *  Instances of this class are used to find the current instant, which can be
 *  interpreted using the stored time-zone to find the current date and time.
 *  As such, a clock can be used instead of {@link System#currentTimeMillis()}
 *  and {@link TimeZone#getDefault()}.
 *  <p>
 *  Use of a {@code Clock} is optional. All key date-time classes also have a
 *  {@code now()} factory method that uses the system clock in the default time zone.
 *  The primary purpose of this abstraction is to allow alternate clocks to be
 *  plugged in as and when required. Applications use an object to obtain the
 *  current time rather than a static method. This can simplify testing.
 *  <p>
 *  Best practice for applications is to pass a {@code Clock} into any method
 *  that requires the current instant. A dependency injection framework is one
 *  way to achieve this:
 *  <pre>
 *   public class MyBean {
 *     private Clock clock;  // dependency inject
 *     ...
 *     public void process(LocalDate eventDate) {
 *       if (eventDate.isBefore(LocalDate.now(clock)) {
 *         ...
 *       }
 *     }
 *   }
 *  </pre>
 *  This approach allows an alternate clock, such as {@link #fixed(Instant, ZoneId) fixed}
 *  or {@link #offset(Clock, Duration) offset} to be used during testing.
 *  <p>
 *  The {@code system} factory methods provide clocks based on the best available
 *  system clock This may use {@link System#currentTimeMillis()}, or a higher
 *  resolution clock if one is available.
 * @implSpec This abstract class must be implemented with care to ensure other classes operate correctly.&#xA; All implementations that can be instantiated must be final, immutable and thread-safe.&#xA; <p>&#xA; The principal methods are defined to allow the throwing of an exception.&#xA; In normal use, no exceptions will be thrown, however one possible implementation would be to&#xA; obtain the time from a central time server across the network. Obviously, in this case the&#xA; lookup could fail, and so the method is permitted to throw an exception.&#xA; <p>&#xA; The returned instants from {@code Clock} work on a time-scale that ignores leap seconds,&#xA; as described in {@link Instant}. If the implementation wraps a source that provides leap&#xA; second information, then a mechanism should be used to "smooth" the leap second.&#xA; The Java Time-Scale mandates the use of UTC-SLS, however clock implementations may choose&#xA; how accurate they are with the time-scale so long as they document how they work.&#xA; Implementations are therefore not required to actually perform the UTC-SLS slew or to&#xA; otherwise be aware of leap seconds.&#xA; <p>&#xA; Implementations should implement {@code Serializable} wherever possible and must&#xA; document whether or not they do support serialization.
 * @implNote The clock implementation provided here is based on {@link System#currentTimeMillis()}.&#xA; That method provides little to no guarantee about the accuracy of the clock.&#xA; Applications requiring a more accurate clock must implement this abstract class&#xA; themselves using a different external clock, such as an NTP server.
 * @since 1.8
 */
export type Clock = Object & {
  /**
   * Gets the time-zone being used to create dates and times.
   *  <p>
   *  A clock will typically obtain the current instant and then convert that
   *  to a date or time using a time-zone. This method returns the time-zone used.
   * @return the time-zone being used to interpret instants, not null
   */
  getZone(): ZoneId;

  /**
   * Returns a copy of this clock with a different time-zone.
   *  <p>
   *  A clock will typically obtain the current instant and then convert that
   *  to a date or time using a time-zone. This method returns a clock with
   *  similar properties but using a different time-zone.
   * @param zone the time-zone to change to, not null
   * @return a clock based on this clock with the specified time-zone, not null
   */
  withZone(zone: ZoneId): Clock;

  /**
   * Gets the current millisecond instant of the clock.
   *  <p>
   *  This returns the millisecond-based instant, measured from 1970-01-01T00:00Z (UTC).
   *  This is equivalent to the definition of {@link System#currentTimeMillis()}.
   *  <p>
   *  Most applications should avoid this method and use {@link Instant} to represent
   *  an instant on the time-line rather than a raw millisecond value.
   *  This method is provided to allow the use of the clock in high performance use cases
   *  where the creation of an object would be unacceptable.
   *  <p>
   *  The default implementation currently calls {@link #instant}.
   * @return the current millisecond instant from this clock, measured from&#xA; the Java epoch of 1970-01-01T00:00Z (UTC), not null
   * @throws DateTimeException if the instant cannot be obtained, not thrown by most implementations
   */
  millis(): number;

  /**
   * Gets the current instant of the clock.
   *  <p>
   *  This returns an instant representing the current instant as defined by the clock.
   * @return the current instant from this clock, not null
   * @throws DateTimeException if the instant cannot be obtained, not thrown by most implementations
   */
  instant(): Instant;

  /**
   * Checks if this clock is equal to another clock.
   *  <p>
   *  Clocks should override this method to compare equals based on
   *  their state and to meet the contract of {@link Object#equals}.
   *  If not overridden, the behavior is defined by {@link Object#equals}
   * @param obj the object to check, null returns false
   * @return true if this is equal to the other clock
   */
  equals(obj: unknown): boolean;

  /**
   * A hash code for this clock.
   *  <p>
   *  Clocks should override this method based on
   *  their state and to meet the contract of {@link Object#hashCode}.
   *  If not overridden, the behavior is defined by {@link Object#hashCode}
   * @return a suitable hash code
   */
  hashCode(): number;
};
