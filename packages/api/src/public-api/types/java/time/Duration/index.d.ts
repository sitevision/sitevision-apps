import type { TemporalUnit } from "../temporal/TemporalUnit";

import type { List } from "../../util/List";

import type { Temporal } from "../temporal/Temporal";
import type { Object } from "../../lang/Object";
import type { String } from "../../lang/String";
import type { TemporalAmount } from "../temporal/TemporalAmount";
import type { Comparable } from "../../lang/Comparable";
import type { Serializable } from "../../io/Serializable";

/**
 * A time-based amount of time, such as '34.5 seconds'.
 *  <p>
 *  This class models a quantity or amount of time in terms of seconds and nanoseconds.
 *  It can be accessed using other duration-based units, such as minutes and hours.
 *  In addition, the {@link ChronoUnit#DAYS DAYS} unit can be used and is treated as
 *  exactly equal to 24 hours, thus ignoring daylight savings effects.
 *  See {@link Period} for the date-based equivalent to this class.
 *  <p>
 *  A physical duration could be of infinite length.
 *  For practicality, the duration is stored with constraints similar to {@link Instant}.
 *  The duration uses nanosecond resolution with a maximum value of the seconds that can
 *  be held in a {@code long}. This is greater than the current estimated age of the universe.
 *  <p>
 *  The range of a duration requires the storage of a number larger than a {@code long}.
 *  To achieve this, the class stores a {@code long} representing seconds and an {@code int}
 *  representing nanosecond-of-second, which will always be between 0 and 999,999,999.
 *  The model is of a directed duration, meaning that the duration may be negative.
 *  <p>
 *  The duration is measured in "seconds", but these are not necessarily identical to
 *  the scientific "SI second" definition based on atomic clocks.
 *  This difference only impacts durations measured near a leap-second and should not affect
 *  most applications.
 *  See {@link Instant} for a discussion as to the meaning of the second and time-scales.
 *
 *  <p>
 *  This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
 *  class; use of identity-sensitive operations (including reference equality
 *  ({@code ==}), identity hash code, or synchronization) on instances of
 *  {@code Duration} may have unpredictable results and should be avoided.
 *  The {@code equals} method should be used for comparisons.
 * @implSpec This class is immutable and thread-safe.
 * @since 1.8
 */
export type Duration = Object &
  TemporalAmount &
  Comparable &
  Serializable & {
    /**
     * Gets the value of the requested unit.
     *  <p>
     *  This returns a value for each of the two supported units,
     *  {@link ChronoUnit#SECONDS SECONDS} and {@link ChronoUnit#NANOS NANOS}.
     *  All other units throw an exception.
     * @param unit the {@code TemporalUnit} for which to return the value
     * @return the long value of the unit
     * @throws DateTimeException if the unit is not supported
     * @throws UnsupportedTemporalTypeException if the unit is not supported
     */
    get(unit: TemporalUnit): number;

    /**
     * Gets the set of units supported by this duration.
     *  <p>
     *  The supported units are {@link ChronoUnit#SECONDS SECONDS},
     *  and {@link ChronoUnit#NANOS NANOS}.
     *  They are returned in the order seconds, nanos.
     *  <p>
     *  This set can be used in conjunction with {@link #get(TemporalUnit)}
     *  to access the entire state of the duration.
     * @return a list containing the seconds and nanos units, not null
     */
    getUnits(): List;

    /**
     * Checks if this duration is zero length.
     *  <p>
     *  A {@code Duration} represents a directed distance between two points on
     *  the time-line and can therefore be positive, zero or negative.
     *  This method checks whether the length is zero.
     * @return true if this duration has a total length equal to zero
     */
    isZero(): boolean;

    /**
     * Checks if this duration is negative, excluding zero.
     *  <p>
     *  A {@code Duration} represents a directed distance between two points on
     *  the time-line and can therefore be positive, zero or negative.
     *  This method checks whether the length is less than zero.
     * @return true if this duration has a total length less than zero
     */
    isNegative(): boolean;

    /**
     * Gets the number of seconds in this duration.
     *  <p>
     *  The length of the duration is stored using two fields - seconds and nanoseconds.
     *  The nanoseconds part is a value from 0 to 999,999,999 that is an adjustment to
     *  the length in seconds.
     *  The total duration is defined by calling this method and {@link #getNano()}.
     *  <p>
     *  A {@code Duration} represents a directed distance between two points on the time-line.
     *  A negative duration is expressed by the negative sign of the seconds part.
     *  A duration of -1 nanosecond is stored as -1 seconds plus 999,999,999 nanoseconds.
     * @return the whole seconds part of the length of the duration, positive or negative
     */
    getSeconds(): number;

    /**
     * Gets the number of nanoseconds within the second in this duration.
     *  <p>
     *  The length of the duration is stored using two fields - seconds and nanoseconds.
     *  The nanoseconds part is a value from 0 to 999,999,999 that is an adjustment to
     *  the length in seconds.
     *  The total duration is defined by calling this method and {@link #getSeconds()}.
     *  <p>
     *  A {@code Duration} represents a directed distance between two points on the time-line.
     *  A negative duration is expressed by the negative sign of the seconds part.
     *  A duration of -1 nanosecond is stored as -1 seconds plus 999,999,999 nanoseconds.
     * @return the nanoseconds within the second part of the length of the duration, from 0 to 999,999,999
     */
    getNano(): number;

    /**
     * Returns a copy of this duration with the specified amount of seconds.
     *  <p>
     *  This returns a duration with the specified seconds, retaining the
     *  nano-of-second part of this duration.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param seconds the seconds to represent, may be negative
     * @return a {@code Duration} based on this period with the requested seconds, not null
     */
    withSeconds(seconds: number): Duration;

    /**
     * Returns a copy of this duration with the specified nano-of-second.
     *  <p>
     *  This returns a duration with the specified nano-of-second, retaining the
     *  seconds part of this duration.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param nanoOfSecond the nano-of-second to represent, from 0 to 999,999,999
     * @return a {@code Duration} based on this period with the requested nano-of-second, not null
     * @throws DateTimeException if the nano-of-second is invalid
     */
    withNanos(nanoOfSecond: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration added.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param duration the duration to add, positive or negative, not null
     * @return a {@code Duration} based on this duration with the specified duration added, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    plus(duration: Duration): Duration;

    /**
     * Returns a copy of this duration with the specified duration added.
     *  <p>
     *  The duration amount is measured in terms of the specified unit.
     *  Only a subset of units are accepted by this method.
     *  The unit must either have an {@linkplain TemporalUnit#isDurationEstimated() exact duration} or
     *  be {@link ChronoUnit#DAYS} which is treated as 24 hours. Other units throw an exception.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param amountToAdd the amount to add, measured in terms of the unit, positive or negative
     * @param unit the unit that the amount is measured in, must have an exact duration, not null
     * @return a {@code Duration} based on this duration with the specified duration added, not null
     * @throws UnsupportedTemporalTypeException if the unit is not supported
     * @throws ArithmeticException if numeric overflow occurs
     */
    plus(amountToAdd: number, unit: TemporalUnit): Duration;

    /**
     * Returns a copy of this duration with the specified duration in standard 24 hour days added.
     *  <p>
     *  The number of days is multiplied by 86400 to obtain the number of seconds to add.
     *  This is based on the standard definition of a day as 24 hours.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param daysToAdd the days to add, positive or negative
     * @return a {@code Duration} based on this duration with the specified days added, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    plusDays(daysToAdd: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in hours added.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param hoursToAdd the hours to add, positive or negative
     * @return a {@code Duration} based on this duration with the specified hours added, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    plusHours(hoursToAdd: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in minutes added.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param minutesToAdd the minutes to add, positive or negative
     * @return a {@code Duration} based on this duration with the specified minutes added, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    plusMinutes(minutesToAdd: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in seconds added.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param secondsToAdd the seconds to add, positive or negative
     * @return a {@code Duration} based on this duration with the specified seconds added, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    plusSeconds(secondsToAdd: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in milliseconds added.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param millisToAdd the milliseconds to add, positive or negative
     * @return a {@code Duration} based on this duration with the specified milliseconds added, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    plusMillis(millisToAdd: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in nanoseconds added.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param nanosToAdd the nanoseconds to add, positive or negative
     * @return a {@code Duration} based on this duration with the specified nanoseconds added, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    plusNanos(nanosToAdd: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration subtracted.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param duration the duration to subtract, positive or negative, not null
     * @return a {@code Duration} based on this duration with the specified duration subtracted, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    minus(duration: Duration): Duration;

    /**
     * Returns a copy of this duration with the specified duration subtracted.
     *  <p>
     *  The duration amount is measured in terms of the specified unit.
     *  Only a subset of units are accepted by this method.
     *  The unit must either have an {@linkplain TemporalUnit#isDurationEstimated() exact duration} or
     *  be {@link ChronoUnit#DAYS} which is treated as 24 hours. Other units throw an exception.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param amountToSubtract the amount to subtract, measured in terms of the unit, positive or negative
     * @param unit the unit that the amount is measured in, must have an exact duration, not null
     * @return a {@code Duration} based on this duration with the specified duration subtracted, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    minus(amountToSubtract: number, unit: TemporalUnit): Duration;

    /**
     * Returns a copy of this duration with the specified duration in standard 24 hour days subtracted.
     *  <p>
     *  The number of days is multiplied by 86400 to obtain the number of seconds to subtract.
     *  This is based on the standard definition of a day as 24 hours.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param daysToSubtract the days to subtract, positive or negative
     * @return a {@code Duration} based on this duration with the specified days subtracted, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    minusDays(daysToSubtract: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in hours subtracted.
     *  <p>
     *  The number of hours is multiplied by 3600 to obtain the number of seconds to subtract.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param hoursToSubtract the hours to subtract, positive or negative
     * @return a {@code Duration} based on this duration with the specified hours subtracted, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    minusHours(hoursToSubtract: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in minutes subtracted.
     *  <p>
     *  The number of hours is multiplied by 60 to obtain the number of seconds to subtract.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param minutesToSubtract the minutes to subtract, positive or negative
     * @return a {@code Duration} based on this duration with the specified minutes subtracted, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    minusMinutes(minutesToSubtract: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in seconds subtracted.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param secondsToSubtract the seconds to subtract, positive or negative
     * @return a {@code Duration} based on this duration with the specified seconds subtracted, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    minusSeconds(secondsToSubtract: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in milliseconds subtracted.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param millisToSubtract the milliseconds to subtract, positive or negative
     * @return a {@code Duration} based on this duration with the specified milliseconds subtracted, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    minusMillis(millisToSubtract: number): Duration;

    /**
     * Returns a copy of this duration with the specified duration in nanoseconds subtracted.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param nanosToSubtract the nanoseconds to subtract, positive or negative
     * @return a {@code Duration} based on this duration with the specified nanoseconds subtracted, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    minusNanos(nanosToSubtract: number): Duration;

    /**
     * Returns a copy of this duration multiplied by the scalar.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param multiplicand the value to multiply the duration by, positive or negative
     * @return a {@code Duration} based on this duration multiplied by the specified scalar, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    multipliedBy(multiplicand: number): Duration;

    /**
     * Returns a copy of this duration divided by the specified value.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param divisor the value to divide the duration by, positive or negative, not zero
     * @return a {@code Duration} based on this duration divided by the specified divisor, not null
     * @throws ArithmeticException if the divisor is zero or if numeric overflow occurs
     */
    dividedBy(divisor: number): Duration;

    /**
     * Returns a copy of this duration with the length negated.
     *  <p>
     *  This method swaps the sign of the total length of this duration.
     *  For example, {@code PT1.3S} will be returned as {@code PT-1.3S}.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @return a {@code Duration} based on this duration with the amount negated, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    negated(): Duration;

    /**
     * Returns a copy of this duration with a positive length.
     *  <p>
     *  This method returns a positive duration by effectively removing the sign from any negative total length.
     *  For example, {@code PT-1.3S} will be returned as {@code PT1.3S}.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @return a {@code Duration} based on this duration with an absolute length, not null
     * @throws ArithmeticException if numeric overflow occurs
     */
    abs(): Duration;

    /**
     * Adds this duration to the specified temporal object.
     *  <p>
     *  This returns a temporal object of the same observable type as the input
     *  with this duration added.
     *  <p>
     *  In most cases, it is clearer to reverse the calling pattern by using
     *  {@link Temporal#plus(TemporalAmount)}.
     *  <pre>
     *    // these two lines are equivalent, but the second approach is recommended
     *    dateTime = thisDuration.addTo(dateTime);
     *    dateTime = dateTime.plus(thisDuration);
     *  </pre>
     *  <p>
     *  The calculation will add the seconds, then nanos.
     *  Only non-zero amounts will be added.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param temporal the temporal object to adjust, not null
     * @return an object of the same type with the adjustment made, not null
     * @throws DateTimeException if unable to add
     * @throws ArithmeticException if numeric overflow occurs
     */
    addTo(temporal: Temporal): Temporal;

    /**
     * Subtracts this duration from the specified temporal object.
     *  <p>
     *  This returns a temporal object of the same observable type as the input
     *  with this duration subtracted.
     *  <p>
     *  In most cases, it is clearer to reverse the calling pattern by using
     *  {@link Temporal#minus(TemporalAmount)}.
     *  <pre>
     *    // these two lines are equivalent, but the second approach is recommended
     *    dateTime = thisDuration.subtractFrom(dateTime);
     *    dateTime = dateTime.minus(thisDuration);
     *  </pre>
     *  <p>
     *  The calculation will subtract the seconds, then nanos.
     *  Only non-zero amounts will be added.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param temporal the temporal object to adjust, not null
     * @return an object of the same type with the adjustment made, not null
     * @throws DateTimeException if unable to subtract
     * @throws ArithmeticException if numeric overflow occurs
     */
    subtractFrom(temporal: Temporal): Temporal;

    /**
     * Gets the number of days in this duration.
     *  <p>
     *  This returns the total number of days in the duration by dividing the
     *  number of seconds by 86400.
     *  This is based on the standard definition of a day as 24 hours.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @return the number of days in the duration, may be negative
     */
    toDays(): number;

    /**
     * Gets the number of hours in this duration.
     *  <p>
     *  This returns the total number of hours in the duration by dividing the
     *  number of seconds by 3600.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @return the number of hours in the duration, may be negative
     */
    toHours(): number;

    /**
     * Gets the number of minutes in this duration.
     *  <p>
     *  This returns the total number of minutes in the duration by dividing the
     *  number of seconds by 60.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @return the number of minutes in the duration, may be negative
     */
    toMinutes(): number;

    /**
     * Converts this duration to the total length in milliseconds.
     *  <p>
     *  If this duration is too large to fit in a {@code long} milliseconds, then an
     *  exception is thrown.
     *  <p>
     *  If this duration has greater than millisecond precision, then the conversion
     *  will drop any excess precision information as though the amount in nanoseconds
     *  was subject to integer division by one million.
     * @return the total length of the duration in milliseconds
     * @throws ArithmeticException if numeric overflow occurs
     */
    toMillis(): number;

    /**
     * Converts this duration to the total length in nanoseconds expressed as a {@code long}.
     *  <p>
     *  If this duration is too large to fit in a {@code long} nanoseconds, then an
     *  exception is thrown.
     * @return the total length of the duration in nanoseconds
     * @throws ArithmeticException if numeric overflow occurs
     */
    toNanos(): number;

    /**
     * Compares this duration to the specified {@code Duration}.
     *  <p>
     *  The comparison is based on the total length of the durations.
     *  It is "consistent with equals", as defined by {@link Comparable}.
     * @param otherDuration the other duration to compare to, not null
     * @return the comparator value, negative if less, positive if greater
     */
    compareTo(otherDuration: Duration): number;

    /**
     * Checks if this duration is equal to the specified {@code Duration}.
     *  <p>
     *  The comparison is based on the total length of the durations.
     * @param otherDuration the other duration, null returns false
     * @return true if the other duration is equal to this one
     */
    equals(otherDuration: unknown): boolean;

    /**
     * A hash code for this duration.
     * @return a suitable hash code
     */
    hashCode(): number;

    /**
     * A string representation of this duration using ISO-8601 seconds
     *  based representation, such as {@code PT8H6M12.345S}.
     *  <p>
     *  The format of the returned string will be {@code PTnHnMnS}, where n is
     *  the relevant hours, minutes or seconds part of the duration.
     *  Any fractional seconds are placed after a decimal point i the seconds section.
     *  If a section has a zero value, it is omitted.
     *  The hours, minutes and seconds will all have the same sign.
     *  <p>
     *  Examples:
     *  <pre>
     *     "20.345 seconds"                 -- "PT20.345S
     *     "15 minutes" (15 * 60 seconds)   -- "PT15M"
     *     "10 hours" (10 * 3600 seconds)   -- "PT10H"
     *     "2 days" (2 * 86400 seconds)     -- "PT48H"
     *  </pre>
     *  Note that multiples of 24 hours are not output as days to avoid confusion
     *  with {@code Period}.
     * @return an ISO-8601 representation of this duration, not null
     */
    toString(): string;

    /**
 * Constant for a duration of zero.
  
    */
    ZERO: Duration;
  };
