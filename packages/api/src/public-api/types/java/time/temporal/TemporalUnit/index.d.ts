/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Duration } from "../../Duration";

import type { Temporal } from "../Temporal";

import type { String } from "../../../lang/String";

/**
 * A unit of date-time, such as Days or Hours.
 *  <p>
 *  Measurement of time is built on units, such as years, months, days, hours, minutes and seconds.
 *  Implementations of this interface represent those units.
 *  <p>
 *  An instance of this interface represents the unit itself, rather than an amount of the unit.
 *  See {@link Period} for a class that represents an amount in terms of the common units.
 *  <p>
 *  The most commonly used units are defined in {@link ChronoUnit}.
 *  Further units are supplied in {@link IsoFields}.
 *  Units can also be written by application code by implementing this interface.
 *  <p>
 *  The unit works using double dispatch. Client code calls methods on a date-time like
 *  {@code LocalDateTime} which check if the unit is a {@code ChronoUnit}.
 *  If it is, then the date-time must handle it.
 *  Otherwise, the method call is re-dispatched to the matching method in this interface.
 * @implSpec This interface must be implemented with care to ensure other classes operate correctly.&#xA; All implementations that can be instantiated must be final, immutable and thread-safe.&#xA; It is recommended to use an enum where possible.
 * @since 1.8
 */
export type TemporalUnit = {
  /**
   * Gets the duration of this unit, which may be an estimate.
   *  <p>
   *  All units return a duration measured in standard nanoseconds from this method.
   *  The duration will be positive and non-zero.
   *  For example, an hour has a duration of {@code 60 * 60 * 1,000,000,000ns}.
   *  <p>
   *  Some units may return an accurate duration while others return an estimate.
   *  For example, days have an estimated duration due to the possibility of
   *  daylight saving time changes.
   *  To determine if the duration is an estimate, use {@link #isDurationEstimated()}.
   * @return the duration of this unit, which may be an estimate, not null
   */
  getDuration(): Duration;

  /**
   * Checks if the duration of the unit is an estimate.
   *  <p>
   *  All units have a duration, however the duration is not always accurate.
   *  For example, days have an estimated duration due to the possibility of
   *  daylight saving time changes.
   *  This method returns true if the duration is an estimate and false if it is
   *  accurate. Note that accurate/estimated ignores leap seconds.
   * @return true if the duration is estimated, false if accurate
   */
  isDurationEstimated(): boolean;

  /**
   * Checks if this unit represents a component of a date.
   *  <p>
   *  A date is time-based if it can be used to imply meaning from a date.
   *  It must have a {@linkplain #getDuration() duration} that is an integral
   *  multiple of the length of a standard day.
   *  Note that it is valid for both {@code isDateBased()} and {@code isTimeBased()}
   *  to return false, such as when representing a unit like 36 hours.
   * @return true if this unit is a component of a date
   */
  isDateBased(): boolean;

  /**
   * Checks if this unit represents a component of a time.
   *  <p>
   *  A unit is time-based if it can be used to imply meaning from a time.
   *  It must have a {@linkplain #getDuration() duration} that divides into
   *  the length of a standard day without remainder.
   *  Note that it is valid for both {@code isDateBased()} and {@code isTimeBased()}
   *  to return false, such as when representing a unit like 36 hours.
   * @return true if this unit is a component of a time
   */
  isTimeBased(): boolean;

  /**
   * Checks if this unit is supported by the specified temporal object.
   *  <p>
   *  This checks that the implementing date-time can add/subtract this unit.
   *  This can be used to avoid throwing an exception.
   *  <p>
   *  This default implementation derives the value using
   *  {@link Temporal#plus(long, TemporalUnit)}.
   * @param temporal the temporal object to check, not null
   * @return true if the unit is supported
   */
  isSupportedBy(temporal: Temporal): boolean;

  /**
   * Returns a copy of the specified temporal object with the specified period added.
   *  <p>
   *  The period added is a multiple of this unit. For example, this method
   *  could be used to add "3 days" to a date by calling this method on the
   *  instance representing "days", passing the date and the period "3".
   *  The period to be added may be negative, which is equivalent to subtraction.
   *  <p>
   *  There are two equivalent ways of using this method.
   *  The first is to invoke this method directly.
   *  The second is to use {@link Temporal#plus(long, TemporalUnit)}:
   *  <pre>
   *    // these two lines are equivalent, but the second approach is recommended
   *    temporal = thisUnit.addTo(temporal);
   *    temporal = temporal.plus(thisUnit);
   *  </pre>
   *  It is recommended to use the second approach, {@code plus(TemporalUnit)},
   *  as it is a lot clearer to read in code.
   *  <p>
   *  Implementations should perform any queries or calculations using the units
   *  available in {@link ChronoUnit} or the fields available in {@link ChronoField}.
   *  If the unit is not supported an {@code UnsupportedTemporalTypeException} must be thrown.
   *  <p>
   *  Implementations must not alter the specified temporal object.
   *  Instead, an adjusted copy of the original must be returned.
   *  This provides equivalent, safe behavior for immutable and mutable implementations.
   * @param <R> the type of the Temporal object
   * @param temporal the temporal object to adjust, not null
   * @param amount the amount of this unit to add, positive or negative
   * @return the adjusted temporal object, not null
   * @throws DateTimeException if the amount cannot be added
   * @throws UnsupportedTemporalTypeException if the unit is not supported by the temporal
   */
  addTo(temporal: unknown, amount: number): unknown;

  /**
   * Calculates the amount of time between two temporal objects.
   *  <p>
   *  This calculates the amount in terms of this unit. The start and end
   *  points are supplied as temporal objects and must be of compatible types.
   *  The implementation will convert the second type to be an instance of the
   *  first type before the calculating the amount.
   *  The result will be negative if the end is before the start.
   *  For example, the amount in hours between two temporal objects can be
   *  calculated using {@code HOURS.between(startTime, endTime)}.
   *  <p>
   *  The calculation returns a whole number, representing the number of
   *  complete units between the two temporals.
   *  For example, the amount in hours between the times 11:30 and 13:29
   *  will only be one hour as it is one minute short of two hours.
   *  <p>
   *  There are two equivalent ways of using this method.
   *  The first is to invoke this method directly.
   *  The second is to use {@link Temporal#until(Temporal, TemporalUnit)}:
   *  <pre>
   *    // these two lines are equivalent
   *    between = thisUnit.between(start, end);
   *    between = start.until(end, thisUnit);
   *  </pre>
   *  The choice should be made based on which makes the code more readable.
   *  <p>
   *  For example, this method allows the number of days between two dates to
   *  be calculated:
   *  <pre>
   *   long daysBetween = DAYS.between(start, end);
   *   // or alternatively
   *   long daysBetween = start.until(end, DAYS);
   *  </pre>
   *  <p>
   *  Implementations should perform any queries or calculations using the units
   *  available in {@link ChronoUnit} or the fields available in {@link ChronoField}.
   *  If the unit is not supported an {@code UnsupportedTemporalTypeException} must be thrown.
   *  Implementations must not alter the specified temporal objects.
   * @implSpec Implementations must begin by checking to if the two temporals have the&#xA; same type using {@code getClass()}. If they do not, then the result must be&#xA; obtained by calling {@code temporal1Inclusive.until(temporal2Exclusive, this)}.
   * @param temporal1Inclusive the base temporal object, not null
   * @param temporal2Exclusive the other temporal object, exclusive, not null
   * @return the amount of time between temporal1Inclusive and temporal2Exclusive&#xA; in terms of this unit; positive if temporal2Exclusive is later than&#xA; temporal1Inclusive, negative if earlier
   * @throws DateTimeException if the amount cannot be calculated, or the end&#xA; temporal cannot be converted to the same type as the start temporal
   * @throws UnsupportedTemporalTypeException if the unit is not supported by the temporal
   * @throws ArithmeticException if numeric overflow occurs
   */
  between(temporal1Inclusive: Temporal, temporal2Exclusive: Temporal): number;

  /**
   * Gets a descriptive name for the unit.
   *  <p>
   *  This should be in the plural and upper-first camel case, such as 'Days' or 'Minutes'.
   * @return the name of this unit, not null
   */
  toString(): string;
};
