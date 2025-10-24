/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { TemporalUnit } from "../TemporalUnit";

import type { List } from "../../../util/List";
import type { Temporal } from "../Temporal";

/**
 * Framework-level interface defining an amount of time, such as
 *  "6 hours", "8 days" or "2 years and 3 months".
 *  <p>
 *  This is the base interface type for amounts of time.
 *  An amount is distinct from a date or time-of-day in that it is not tied
 *  to any specific point on the time-line.
 *  <p>
 *  The amount can be thought of as a {@code Map} of {@link TemporalUnit} to
 *  {@code long}, exposed via {@link #getUnits()} and {@link #get(TemporalUnit)}.
 *  A simple case might have a single unit-value pair, such as "6 hours".
 *  A more complex case may have multiple unit-value pairs, such as
 *  "7 years, 3 months and 5 days".
 *  <p>
 *  There are two common implementations.
 *  {@link Period} is a date-based implementation, storing years, months and days.
 *  {@link Duration} is a time-based implementation, storing seconds and nanoseconds,
 *  but providing some access using other duration based units such as minutes,
 *  hours and fixed 24-hour days.
 *  <p>
 *  This interface is a framework-level interface that should not be widely
 *  used in application code. Instead, applications should create and pass
 *  around instances of concrete types, such as {@code Period} and {@code Duration}.
 * @implSpec This interface places no restrictions on the mutability of implementations,&#xA; however immutability is strongly recommended.
 * @since 1.8
 */
export type TemporalAmount = {
  /**
   * Returns the value of the requested unit.
   *  The units returned from {@link #getUnits()} uniquely define the
   *  value of the {@code TemporalAmount}.  A value must be returned
   *  for each unit listed in {@code getUnits}.
   * @implSpec Implementations may declare support for units not listed by {@link #getUnits()}.&#xA; Typically, the implementation would define additional units&#xA; as conversions for the convenience of developers.
   * @param unit the {@code TemporalUnit} for which to return the value
   * @return the long value of the unit
   * @throws DateTimeException if a value for the unit cannot be obtained
   * @throws UnsupportedTemporalTypeException if the {@code unit} is not supported
   */
  get(unit: TemporalUnit): number;

  /**
   * Returns the list of units uniquely defining the value of this TemporalAmount.
   *  The list of {@code TemporalUnits} is defined by the implementation class.
   *  The list is a snapshot of the units at the time {@code getUnits}
   *  is called and is not mutable.
   *  The units are ordered from longest duration to the shortest duration
   *  of the unit.
   * @implSpec The list of units completely and uniquely represents the&#xA; state of the object without omissions, overlaps or duplication.&#xA; The units are in order from longest duration to shortest.
   * @return the List of {@code TemporalUnits}; not null
   */
  getUnits(): List;

  /**
   * Adds to the specified temporal object.
   *  <p>
   *  Adds the amount to the specified temporal object using the logic
   *  encapsulated in the implementing class.
   *  <p>
   *  There are two equivalent ways of using this method.
   *  The first is to invoke this method directly.
   *  The second is to use {@link Temporal#plus(TemporalAmount)}:
   *  <pre>
   *    // These two lines are equivalent, but the second approach is recommended
   *    dateTime = amount.addTo(dateTime);
   *    dateTime = dateTime.plus(adder);
   *  </pre>
   *  It is recommended to use the second approach, {@code plus(TemporalAmount)},
   *  as it is a lot clearer to read in code.
   * @implSpec The implementation must take the input object and add to it.&#xA; The implementation defines the logic of the addition and is responsible for&#xA; documenting that logic. It may use any method on {@code Temporal} to&#xA; query the temporal object and perform the addition.&#xA; The returned object must have the same observable type as the input object&#xA; <p>&#xA; The input object must not be altered.&#xA; Instead, an adjusted copy of the original must be returned.&#xA; This provides equivalent, safe behavior for immutable and mutable temporal objects.&#xA; <p>&#xA; The input temporal object may be in a calendar system other than ISO.&#xA; Implementations may choose to document compatibility with other calendar systems,&#xA; or reject non-ISO temporal objects by {@link TemporalQueries#chronology() querying the chronology}.&#xA; <p>&#xA; This method may be called from multiple threads in parallel.&#xA; It must be thread-safe when invoked.
   * @param temporal the temporal object to add the amount to, not null
   * @return an object of the same observable type with the addition made, not null
   * @throws DateTimeException if unable to add
   * @throws ArithmeticException if numeric overflow occurs
   */
  addTo(temporal: Temporal): Temporal;

  /**
   * Subtracts this object from the specified temporal object.
   *  <p>
   *  Subtracts the amount from the specified temporal object using the logic
   *  encapsulated in the implementing class.
   *  <p>
   *  There are two equivalent ways of using this method.
   *  The first is to invoke this method directly.
   *  The second is to use {@link Temporal#minus(TemporalAmount)}:
   *  <pre>
   *    // these two lines are equivalent, but the second approach is recommended
   *    dateTime = amount.subtractFrom(dateTime);
   *    dateTime = dateTime.minus(amount);
   *  </pre>
   *  It is recommended to use the second approach, {@code minus(TemporalAmount)},
   *  as it is a lot clearer to read in code.
   * @implSpec The implementation must take the input object and subtract from it.&#xA; The implementation defines the logic of the subtraction and is responsible for&#xA; documenting that logic. It may use any method on {@code Temporal} to&#xA; query the temporal object and perform the subtraction.&#xA; The returned object must have the same observable type as the input object&#xA; <p>&#xA; The input object must not be altered.&#xA; Instead, an adjusted copy of the original must be returned.&#xA; This provides equivalent, safe behavior for immutable and mutable temporal objects.&#xA; <p>&#xA; The input temporal object may be in a calendar system other than ISO.&#xA; Implementations may choose to document compatibility with other calendar systems,&#xA; or reject non-ISO temporal objects by {@link TemporalQueries#chronology() querying the chronology}.&#xA; <p>&#xA; This method may be called from multiple threads in parallel.&#xA; It must be thread-safe when invoked.
   * @param temporal the temporal object to subtract the amount from, not null
   * @return an object of the same observable type with the subtraction made, not null
   * @throws DateTimeException if unable to subtract
   * @throws ArithmeticException if numeric overflow occurs
   */
  subtractFrom(temporal: Temporal): Temporal;
};
