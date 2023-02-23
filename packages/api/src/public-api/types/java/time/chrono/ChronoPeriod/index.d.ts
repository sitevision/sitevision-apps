import type { ChronoLocalDate } from "../ChronoLocalDate";
import type { TemporalUnit } from "../../temporal/TemporalUnit";

import type { List } from "../../../util/List";
import type { Chronology } from "../Chronology";

import type { TemporalAmount } from "../../temporal/TemporalAmount";

import type { Temporal } from "../../temporal/Temporal";
import type { Object } from "../../../lang/Object";
import type { String } from "../../../lang/String";

/**
 * A date-based amount of time, such as '3 years, 4 months and 5 days' in an
 *  arbitrary chronology, intended for advanced globalization use cases.
 *  <p>
 *  This interface models a date-based amount of time in a calendar system.
 *  While most calendar systems use years, months and days, some do not.
 *  Therefore, this interface operates solely in terms of a set of supported
 *  units that are defined by the {@code Chronology}.
 *  The set of supported units is fixed for a given chronology.
 *  The amount of a supported unit may be set to zero.
 *  <p>
 *  The period is modeled as a directed amount of time, meaning that individual
 *  parts of the period may be negative.
 * @implSpec This interface must be implemented with care to ensure other classes operate correctly.&#xA; All implementations that can be instantiated must be final, immutable and thread-safe.&#xA; Subclasses should be Serializable wherever possible.
 * @since 1.8
 */
export type ChronoPeriod = TemporalAmount & {
  /**
   * Obtains a {@code ChronoPeriod} consisting of amount of time between two dates.
   *  <p>
   *  The start date is included, but the end date is not.
   *  The period is calculated using {@link ChronoLocalDate#until(ChronoLocalDate)}.
   *  As such, the calculation is chronology specific.
   *  <p>
   *  The chronology of the first date is used.
   *  The chronology of the second date is ignored, with the date being converted
   *  to the target chronology system before the calculation starts.
   *  <p>
   *  The result of this method can be a negative period if the end is before the start.
   *  In most cases, the positive/negative sign will be the same in each of the supported fields.
   * @param startDateInclusive the start date, inclusive, specifying the chronology of the calculation, not null
   * @param endDateExclusive the end date, exclusive, in any chronology, not null
   * @return the period between this date and the end date, not null
   * @see ChronoLocalDate#until(ChronoLocalDate)
   */
  between(
    startDateInclusive: ChronoLocalDate,
    endDateExclusive: ChronoLocalDate
  ): ChronoPeriod;

  /**
   * Gets the value of the requested unit.
   *  <p>
   *  The supported units are chronology specific.
   *  They will typically be {@link ChronoUnit#YEARS YEARS},
   *  {@link ChronoUnit#MONTHS MONTHS} and {@link ChronoUnit#DAYS DAYS}.
   *  Requesting an unsupported unit will throw an exception.
   * @param unit the {@code TemporalUnit} for which to return the value
   * @return the long value of the unit
   * @throws DateTimeException if the unit is not supported
   * @throws UnsupportedTemporalTypeException if the unit is not supported
   */
  get(unit: TemporalUnit): number;

  /**
   * Gets the set of units supported by this period.
   *  <p>
   *  The supported units are chronology specific.
   *  They will typically be {@link ChronoUnit#YEARS YEARS},
   *  {@link ChronoUnit#MONTHS MONTHS} and {@link ChronoUnit#DAYS DAYS}.
   *  They are returned in order from largest to smallest.
   *  <p>
   *  This set can be used in conjunction with {@link #get(TemporalUnit)}
   *  to access the entire state of the period.
   * @return a list containing the supported units, not null
   */
  getUnits(): List;

  /**
   * Gets the chronology that defines the meaning of the supported units.
   *  <p>
   *  The period is defined by the chronology.
   *  It controls the supported units and restricts addition/subtraction
   *  to {@code ChronoLocalDate} instances of the same chronology.
   * @return the chronology defining the period, not null
   */
  getChronology(): Chronology;

  /**
   * Checks if all the supported units of this period are zero.
   * @return true if this period is zero-length
   */
  isZero(): boolean;

  /**
   * Checks if any of the supported units of this period are negative.
   * @return true if any unit of this period is negative
   */
  isNegative(): boolean;

  /**
   * Returns a copy of this period with the specified period added.
   *  <p>
   *  If the specified amount is a {@code ChronoPeriod} then it must have
   *  the same chronology as this period. Implementations may choose to
   *  accept or reject other {@code TemporalAmount} implementations.
   *  <p>
   *  This instance is immutable and unaffected by this method call.
   * @param amountToAdd the period to add, not null
   * @return a {@code ChronoPeriod} based on this period with the requested period added, not null
   * @throws ArithmeticException if numeric overflow occurs
   */
  plus(amountToAdd: TemporalAmount): ChronoPeriod;

  /**
   * Returns a copy of this period with the specified period subtracted.
   *  <p>
   *  If the specified amount is a {@code ChronoPeriod} then it must have
   *  the same chronology as this period. Implementations may choose to
   *  accept or reject other {@code TemporalAmount} implementations.
   *  <p>
   *  This instance is immutable and unaffected by this method call.
   * @param amountToSubtract the period to subtract, not null
   * @return a {@code ChronoPeriod} based on this period with the requested period subtracted, not null
   * @throws ArithmeticException if numeric overflow occurs
   */
  minus(amountToSubtract: TemporalAmount): ChronoPeriod;

  /**
   * Returns a new instance with each amount in this period in this period
   *  multiplied by the specified scalar.
   *  <p>
   *  This returns a period with each supported unit individually multiplied.
   *  For example, a period of "2 years, -3 months and 4 days" multiplied by
   *  3 will return "6 years, -9 months and 12 days".
   *  No normalization is performed.
   * @param scalar the scalar to multiply by, not null
   * @return a {@code ChronoPeriod} based on this period with the amounts multiplied&#xA; by the scalar, not null
   * @throws ArithmeticException if numeric overflow occurs
   */
  multipliedBy(scalar: number): ChronoPeriod;

  /**
   * Returns a new instance with each amount in this period negated.
   *  <p>
   *  This returns a period with each supported unit individually negated.
   *  For example, a period of "2 years, -3 months and 4 days" will be
   *  negated to "-2 years, 3 months and -4 days".
   *  No normalization is performed.
   * @return a {@code ChronoPeriod} based on this period with the amounts negated, not null
   * @throws ArithmeticException if numeric overflow occurs, which only happens if&#xA; one of the units has the value {@code Long.MIN_VALUE}
   */
  negated(): ChronoPeriod;

  /**
   * Returns a copy of this period with the amounts of each unit normalized.
   *  <p>
   *  The process of normalization is specific to each calendar system.
   *  For example, in the ISO calendar system, the years and months are
   *  normalized but the days are not, such that "15 months" would be
   *  normalized to "1 year and 3 months".
   *  <p>
   *  This instance is immutable and unaffected by this method call.
   * @return a {@code ChronoPeriod} based on this period with the amounts of each&#xA; unit normalized, not null
   * @throws ArithmeticException if numeric overflow occurs
   */
  normalized(): ChronoPeriod;

  /**
   * Adds this period to the specified temporal object.
   *  <p>
   *  This returns a temporal object of the same observable type as the input
   *  with this period added.
   *  <p>
   *  In most cases, it is clearer to reverse the calling pattern by using
   *  {@link Temporal#plus(TemporalAmount)}.
   *  <pre>
   *    // these two lines are equivalent, but the second approach is recommended
   *    dateTime = thisPeriod.addTo(dateTime);
   *    dateTime = dateTime.plus(thisPeriod);
   *  </pre>
   *  <p>
   *  The specified temporal must have the same chronology as this period.
   *  This returns a temporal with the non-zero supported units added.
   *  <p>
   *  This instance is immutable and unaffected by this method call.
   * @param temporal the temporal object to adjust, not null
   * @return an object of the same type with the adjustment made, not null
   * @throws DateTimeException if unable to add
   * @throws ArithmeticException if numeric overflow occurs
   */
  addTo(temporal: Temporal): Temporal;

  /**
   * Subtracts this period from the specified temporal object.
   *  <p>
   *  This returns a temporal object of the same observable type as the input
   *  with this period subtracted.
   *  <p>
   *  In most cases, it is clearer to reverse the calling pattern by using
   *  {@link Temporal#minus(TemporalAmount)}.
   *  <pre>
   *    // these two lines are equivalent, but the second approach is recommended
   *    dateTime = thisPeriod.subtractFrom(dateTime);
   *    dateTime = dateTime.minus(thisPeriod);
   *  </pre>
   *  <p>
   *  The specified temporal must have the same chronology as this period.
   *  This returns a temporal with the non-zero supported units subtracted.
   *  <p>
   *  This instance is immutable and unaffected by this method call.
   * @param temporal the temporal object to adjust, not null
   * @return an object of the same type with the adjustment made, not null
   * @throws DateTimeException if unable to subtract
   * @throws ArithmeticException if numeric overflow occurs
   */
  subtractFrom(temporal: Temporal): Temporal;

  /**
   * Checks if this period is equal to another period, including the chronology.
   *  <p>
   *  Compares this period with another ensuring that the type, each amount and
   *  the chronology are the same.
   *  Note that this means that a period of "15 Months" is not equal to a period
   *  of "1 Year and 3 Months".
   * @param obj the object to check, null returns false
   * @return true if this is equal to the other period
   */
  equals(obj: unknown): boolean;

  /**
   * A hash code for this period.
   * @return a suitable hash code
   */
  hashCode(): number;

  /**
   * Outputs this period as a {@code String}.
   *  <p>
   *  The output will include the period amounts and chronology.
   * @return a string representation of this period, not null
   */
  toString(): string;
};
