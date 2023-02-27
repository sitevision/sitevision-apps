import type { TemporalField } from "../temporal/TemporalField";

import type { TemporalUnit } from "../temporal/TemporalUnit";
import type { ValueRange } from "../temporal/ValueRange";

import type { TemporalAdjuster } from "../temporal/TemporalAdjuster";
import type { TemporalAmount } from "../temporal/TemporalAmount";
import type { TemporalQuery } from "../temporal/TemporalQuery";

import type { Temporal } from "../temporal/Temporal";
import type { DateTimeFormatter } from "../format/DateTimeFormatter";
import type { String } from "../../lang/String";
import type { LocalDate } from "../LocalDate";
import type { LocalDateTime } from "../LocalDateTime";
import type { ZoneOffset } from "../ZoneOffset";
import type { OffsetTime } from "../OffsetTime";
import type { Object } from "../../lang/Object";
import type { Comparable } from "../../lang/Comparable";
import type { Serializable } from "../../io/Serializable";

/**
 * A time without a time-zone in the ISO-8601 calendar system,
 *  such as {@code 10:15:30}.
 *  <p>
 *  {@code LocalTime} is an immutable date-time object that represents a time,
 *  often viewed as hour-minute-second.
 *  Time is represented to nanosecond precision.
 *  For example, the value "13:45.30.123456789" can be stored in a {@code LocalTime}.
 *  <p>
 *  This class does not store or represent a date or time-zone.
 *  Instead, it is a description of the local time as seen on a wall clock.
 *  It cannot represent an instant on the time-line without additional information
 *  such as an offset or time-zone.
 *  <p>
 *  The ISO-8601 calendar system is the modern civil calendar system used today
 *  in most of the world. This API assumes that all calendar systems use the same
 *  representation, this class, for time-of-day.
 *
 *  <p>
 *  This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
 *  class; use of identity-sensitive operations (including reference equality
 *  ({@code ==}), identity hash code, or synchronization) on instances of
 *  {@code LocalTime} may have unpredictable results and should be avoided.
 *  The {@code equals} method should be used for comparisons.
 * @implSpec This class is immutable and thread-safe.
 * @since 1.8
 */
export type LocalTime = Object &
  Temporal &
  TemporalAdjuster &
  Comparable &
  Serializable & {
    /**
     * Checks if the specified field is supported.
     *  <p>
     *  This checks if this time can be queried for the specified field.
     *  If false, then calling the {@link #range(TemporalField) range},
     *  {@link #get(TemporalField) get} and {@link #with(TemporalField, long)}
     *  methods will throw an exception.
     *  <p>
     *  If the field is a {@link ChronoField} then the query is implemented here.
     *  The supported fields are:
     *  <ul>
     *  <li>{@code NANO_OF_SECOND}
     *  <li>{@code NANO_OF_DAY}
     *  <li>{@code MICRO_OF_SECOND}
     *  <li>{@code MICRO_OF_DAY}
     *  <li>{@code MILLI_OF_SECOND}
     *  <li>{@code MILLI_OF_DAY}
     *  <li>{@code SECOND_OF_MINUTE}
     *  <li>{@code SECOND_OF_DAY}
     *  <li>{@code MINUTE_OF_HOUR}
     *  <li>{@code MINUTE_OF_DAY}
     *  <li>{@code HOUR_OF_AMPM}
     *  <li>{@code CLOCK_HOUR_OF_AMPM}
     *  <li>{@code HOUR_OF_DAY}
     *  <li>{@code CLOCK_HOUR_OF_DAY}
     *  <li>{@code AMPM_OF_DAY}
     *  </ul>
     *  All other {@code ChronoField} instances will return false.
     *  <p>
     *  If the field is not a {@code ChronoField}, then the result of this method
     *  is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
     *  passing {@code this} as the argument.
     *  Whether the field is supported is determined by the field.
     * @param field the field to check, null returns false
     * @return true if the field is supported on this time, false if not
     */
    isSupported(field: TemporalField): boolean;

    /**
     * Checks if the specified unit is supported.
     *  <p>
     *  This checks if the specified unit can be added to, or subtracted from, this time.
     *  If false, then calling the {@link #plus(long, TemporalUnit)} and
     *  {@link #minus(long, TemporalUnit) minus} methods will throw an exception.
     *  <p>
     *  If the unit is a {@link ChronoUnit} then the query is implemented here.
     *  The supported units are:
     *  <ul>
     *  <li>{@code NANOS}
     *  <li>{@code MICROS}
     *  <li>{@code MILLIS}
     *  <li>{@code SECONDS}
     *  <li>{@code MINUTES}
     *  <li>{@code HOURS}
     *  <li>{@code HALF_DAYS}
     *  </ul>
     *  All other {@code ChronoUnit} instances will return false.
     *  <p>
     *  If the unit is not a {@code ChronoUnit}, then the result of this method
     *  is obtained by invoking {@code TemporalUnit.isSupportedBy(Temporal)}
     *  passing {@code this} as the argument.
     *  Whether the unit is supported is determined by the unit.
     * @param unit the unit to check, null returns false
     * @return true if the unit can be added/subtracted, false if not
     */
    isSupported(unit: TemporalUnit): boolean;

    /**
     * Gets the range of valid values for the specified field.
     *  <p>
     *  The range object expresses the minimum and maximum valid values for a field.
     *  This time is used to enhance the accuracy of the returned range.
     *  If it is not possible to return the range, because the field is not supported
     *  or for some other reason, an exception is thrown.
     *  <p>
     *  If the field is a {@link ChronoField} then the query is implemented here.
     *  The {@link #isSupported(TemporalField) supported fields} will return
     *  appropriate range instances.
     *  All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
     *  <p>
     *  If the field is not a {@code ChronoField}, then the result of this method
     *  is obtained by invoking {@code TemporalField.rangeRefinedBy(TemporalAccessor)}
     *  passing {@code this} as the argument.
     *  Whether the range can be obtained is determined by the field.
     * @param field the field to query the range for, not null
     * @return the range of valid values for the field, not null
     * @throws DateTimeException if the range for the field cannot be obtained
     * @throws UnsupportedTemporalTypeException if the field is not supported
     */
    range(field: TemporalField): ValueRange;

    /**
     * Gets the value of the specified field from this time as an {@code int}.
     *  <p>
     *  This queries this time for the value of the specified field.
     *  The returned value will always be within the valid range of values for the field.
     *  If it is not possible to return the value, because the field is not supported
     *  or for some other reason, an exception is thrown.
     *  <p>
     *  If the field is a {@link ChronoField} then the query is implemented here.
     *  The {@link #isSupported(TemporalField) supported fields} will return valid
     *  values based on this time, except {@code NANO_OF_DAY} and {@code MICRO_OF_DAY}
     *  which are too large to fit in an {@code int} and throw a {@code DateTimeException}.
     *  All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
     *  <p>
     *  If the field is not a {@code ChronoField}, then the result of this method
     *  is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
     *  passing {@code this} as the argument. Whether the value can be obtained,
     *  and what the value represents, is determined by the field.
     * @param field the field to get, not null
     * @return the value for the field
     * @throws DateTimeException if a value for the field cannot be obtained or&#xA; the value is outside the range of valid values for the field
     * @throws UnsupportedTemporalTypeException if the field is not supported or&#xA; the range of values exceeds an {@code int}
     * @throws ArithmeticException if numeric overflow occurs
     */
    get(field: TemporalField): number;

    /**
     * Gets the value of the specified field from this time as a {@code long}.
     *  <p>
     *  This queries this time for the value of the specified field.
     *  If it is not possible to return the value, because the field is not supported
     *  or for some other reason, an exception is thrown.
     *  <p>
     *  If the field is a {@link ChronoField} then the query is implemented here.
     *  The {@link #isSupported(TemporalField) supported fields} will return valid
     *  values based on this time.
     *  All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
     *  <p>
     *  If the field is not a {@code ChronoField}, then the result of this method
     *  is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
     *  passing {@code this} as the argument. Whether the value can be obtained,
     *  and what the value represents, is determined by the field.
     * @param field the field to get, not null
     * @return the value for the field
     * @throws DateTimeException if a value for the field cannot be obtained
     * @throws UnsupportedTemporalTypeException if the field is not supported
     * @throws ArithmeticException if numeric overflow occurs
     */
    getLong(field: TemporalField): number;

    /**
     * Gets the hour-of-day field.
     * @return the hour-of-day, from 0 to 23
     */
    getHour(): number;

    /**
     * Gets the minute-of-hour field.
     * @return the minute-of-hour, from 0 to 59
     */
    getMinute(): number;

    /**
     * Gets the second-of-minute field.
     * @return the second-of-minute, from 0 to 59
     */
    getSecond(): number;

    /**
     * Gets the nano-of-second field.
     * @return the nano-of-second, from 0 to 999,999,999
     */
    getNano(): number;

    /**
     * Returns an adjusted copy of this time.
     *  <p>
     *  This returns a {@code LocalTime}, based on this one, with the time adjusted.
     *  The adjustment takes place using the specified adjuster strategy object.
     *  Read the documentation of the adjuster to understand what adjustment will be made.
     *  <p>
     *  A simple adjuster might simply set the one of the fields, such as the hour field.
     *  A more complex adjuster might set the time to the last hour of the day.
     *  <p>
     *  The result of this method is obtained by invoking the
     *  {@link TemporalAdjuster#adjustInto(Temporal)} method on the
     *  specified adjuster passing {@code this} as the argument.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param adjuster the adjuster to use, not null
     * @return a {@code LocalTime} based on {@code this} with the adjustment made, not null
     * @throws DateTimeException if the adjustment cannot be made
     * @throws ArithmeticException if numeric overflow occurs
     */
    with(adjuster: TemporalAdjuster): LocalTime;

    /**
     * Returns a copy of this time with the specified field set to a new value.
     *  <p>
     *  This returns a {@code LocalTime}, based on this one, with the value
     *  for the specified field changed.
     *  This can be used to change any supported field, such as the hour, minute or second.
     *  If it is not possible to set the value, because the field is not supported or for
     *  some other reason, an exception is thrown.
     *  <p>
     *  If the field is a {@link ChronoField} then the adjustment is implemented here.
     *  The supported fields behave as follows:
     *  <ul>
     *  <li>{@code NANO_OF_SECOND} -
     *   Returns a {@code LocalTime} with the specified nano-of-second.
     *   The hour, minute and second will be unchanged.
     *  <li>{@code NANO_OF_DAY} -
     *   Returns a {@code LocalTime} with the specified nano-of-day.
     *   This completely replaces the time and is equivalent to {@link #ofNanoOfDay(long)}.
     *  <li>{@code MICRO_OF_SECOND} -
     *   Returns a {@code LocalTime} with the nano-of-second replaced by the specified
     *   micro-of-second multiplied by 1,000.
     *   The hour, minute and second will be unchanged.
     *  <li>{@code MICRO_OF_DAY} -
     *   Returns a {@code LocalTime} with the specified micro-of-day.
     *   This completely replaces the time and is equivalent to using {@link #ofNanoOfDay(long)}
     *   with the micro-of-day multiplied by 1,000.
     *  <li>{@code MILLI_OF_SECOND} -
     *   Returns a {@code LocalTime} with the nano-of-second replaced by the specified
     *   milli-of-second multiplied by 1,000,000.
     *   The hour, minute and second will be unchanged.
     *  <li>{@code MILLI_OF_DAY} -
     *   Returns a {@code LocalTime} with the specified milli-of-day.
     *   This completely replaces the time and is equivalent to using {@link #ofNanoOfDay(long)}
     *   with the milli-of-day multiplied by 1,000,000.
     *  <li>{@code SECOND_OF_MINUTE} -
     *   Returns a {@code LocalTime} with the specified second-of-minute.
     *   The hour, minute and nano-of-second will be unchanged.
     *  <li>{@code SECOND_OF_DAY} -
     *   Returns a {@code LocalTime} with the specified second-of-day.
     *   The nano-of-second will be unchanged.
     *  <li>{@code MINUTE_OF_HOUR} -
     *   Returns a {@code LocalTime} with the specified minute-of-hour.
     *   The hour, second-of-minute and nano-of-second will be unchanged.
     *  <li>{@code MINUTE_OF_DAY} -
     *   Returns a {@code LocalTime} with the specified minute-of-day.
     *   The second-of-minute and nano-of-second will be unchanged.
     *  <li>{@code HOUR_OF_AMPM} -
     *   Returns a {@code LocalTime} with the specified hour-of-am-pm.
     *   The AM/PM, minute-of-hour, second-of-minute and nano-of-second will be unchanged.
     *  <li>{@code CLOCK_HOUR_OF_AMPM} -
     *   Returns a {@code LocalTime} with the specified clock-hour-of-am-pm.
     *   The AM/PM, minute-of-hour, second-of-minute and nano-of-second will be unchanged.
     *  <li>{@code HOUR_OF_DAY} -
     *   Returns a {@code LocalTime} with the specified hour-of-day.
     *   The minute-of-hour, second-of-minute and nano-of-second will be unchanged.
     *  <li>{@code CLOCK_HOUR_OF_DAY} -
     *   Returns a {@code LocalTime} with the specified clock-hour-of-day.
     *   The minute-of-hour, second-of-minute and nano-of-second will be unchanged.
     *  <li>{@code AMPM_OF_DAY} -
     *   Returns a {@code LocalTime} with the specified AM/PM.
     *   The hour-of-am-pm, minute-of-hour, second-of-minute and nano-of-second will be unchanged.
     *  </ul>
     *  <p>
     *  In all cases, if the new value is outside the valid range of values for the field
     *  then a {@code DateTimeException} will be thrown.
     *  <p>
     *  All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
     *  <p>
     *  If the field is not a {@code ChronoField}, then the result of this method
     *  is obtained by invoking {@code TemporalField.adjustInto(Temporal, long)}
     *  passing {@code this} as the argument. In this case, the field determines
     *  whether and how to adjust the instant.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param field the field to set in the result, not null
     * @param newValue the new value of the field in the result
     * @return a {@code LocalTime} based on {@code this} with the specified field set, not null
     * @throws DateTimeException if the field cannot be set
     * @throws UnsupportedTemporalTypeException if the field is not supported
     * @throws ArithmeticException if numeric overflow occurs
     */
    with(field: TemporalField, newValue: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the hour-of-day altered.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param hour the hour-of-day to set in the result, from 0 to 23
     * @return a {@code LocalTime} based on this time with the requested hour, not null
     * @throws DateTimeException if the hour value is invalid
     */
    withHour(hour: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the minute-of-hour altered.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param minute the minute-of-hour to set in the result, from 0 to 59
     * @return a {@code LocalTime} based on this time with the requested minute, not null
     * @throws DateTimeException if the minute value is invalid
     */
    withMinute(minute: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the second-of-minute altered.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param second the second-of-minute to set in the result, from 0 to 59
     * @return a {@code LocalTime} based on this time with the requested second, not null
     * @throws DateTimeException if the second value is invalid
     */
    withSecond(second: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the nano-of-second altered.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param nanoOfSecond the nano-of-second to set in the result, from 0 to 999,999,999
     * @return a {@code LocalTime} based on this time with the requested nanosecond, not null
     * @throws DateTimeException if the nanos value is invalid
     */
    withNano(nanoOfSecond: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the time truncated.
     *  <p>
     *  Truncation returns a copy of the original time with fields
     *  smaller than the specified unit set to zero.
     *  For example, truncating with the {@link ChronoUnit#MINUTES minutes} unit
     *  will set the second-of-minute and nano-of-second field to zero.
     *  <p>
     *  The unit must have a {@linkplain TemporalUnit#getDuration() duration}
     *  that divides into the length of a standard day without remainder.
     *  This includes all supplied time units on {@link ChronoUnit} and
     *  {@link ChronoUnit#DAYS DAYS}. Other units throw an exception.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param unit the unit to truncate to, not null
     * @return a {@code LocalTime} based on this time with the time truncated, not null
     * @throws DateTimeException if unable to truncate
     * @throws UnsupportedTemporalTypeException if the unit is not supported
     */
    truncatedTo(unit: TemporalUnit): LocalTime;

    /**
     * Returns a copy of this time with the specified amount added.
     *  <p>
     *  This returns a {@code LocalTime}, based on this one, with the specified amount added.
     *  The amount is typically {@link Duration} but may be any other type implementing
     *  the {@link TemporalAmount} interface.
     *  <p>
     *  The calculation is delegated to the amount object by calling
     *  {@link TemporalAmount#addTo(Temporal)}. The amount implementation is free
     *  to implement the addition in any way it wishes, however it typically
     *  calls back to {@link #plus(long, TemporalUnit)}. Consult the documentation
     *  of the amount implementation to determine if it can be successfully added.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param amountToAdd the amount to add, not null
     * @return a {@code LocalTime} based on this time with the addition made, not null
     * @throws DateTimeException if the addition cannot be made
     * @throws ArithmeticException if numeric overflow occurs
     */
    plus(amountToAdd: TemporalAmount): LocalTime;

    /**
     * Returns a copy of this time with the specified amount added.
     *  <p>
     *  This returns a {@code LocalTime}, based on this one, with the amount
     *  in terms of the unit added. If it is not possible to add the amount, because the
     *  unit is not supported or for some other reason, an exception is thrown.
     *  <p>
     *  If the field is a {@link ChronoUnit} then the addition is implemented here.
     *  The supported fields behave as follows:
     *  <ul>
     *  <li>{@code NANOS} -
     *   Returns a {@code LocalTime} with the specified number of nanoseconds added.
     *   This is equivalent to {@link #plusNanos(long)}.
     *  <li>{@code MICROS} -
     *   Returns a {@code LocalTime} with the specified number of microseconds added.
     *   This is equivalent to {@link #plusNanos(long)} with the amount
     *   multiplied by 1,000.
     *  <li>{@code MILLIS} -
     *   Returns a {@code LocalTime} with the specified number of milliseconds added.
     *   This is equivalent to {@link #plusNanos(long)} with the amount
     *   multiplied by 1,000,000.
     *  <li>{@code SECONDS} -
     *   Returns a {@code LocalTime} with the specified number of seconds added.
     *   This is equivalent to {@link #plusSeconds(long)}.
     *  <li>{@code MINUTES} -
     *   Returns a {@code LocalTime} with the specified number of minutes added.
     *   This is equivalent to {@link #plusMinutes(long)}.
     *  <li>{@code HOURS} -
     *   Returns a {@code LocalTime} with the specified number of hours added.
     *   This is equivalent to {@link #plusHours(long)}.
     *  <li>{@code HALF_DAYS} -
     *   Returns a {@code LocalTime} with the specified number of half-days added.
     *   This is equivalent to {@link #plusHours(long)} with the amount
     *   multiplied by 12.
     *  </ul>
     *  <p>
     *  All other {@code ChronoUnit} instances will throw an {@code UnsupportedTemporalTypeException}.
     *  <p>
     *  If the field is not a {@code ChronoUnit}, then the result of this method
     *  is obtained by invoking {@code TemporalUnit.addTo(Temporal, long)}
     *  passing {@code this} as the argument. In this case, the unit determines
     *  whether and how to perform the addition.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param amountToAdd the amount of the unit to add to the result, may be negative
     * @param unit the unit of the amount to add, not null
     * @return a {@code LocalTime} based on this time with the specified amount added, not null
     * @throws DateTimeException if the addition cannot be made
     * @throws UnsupportedTemporalTypeException if the unit is not supported
     * @throws ArithmeticException if numeric overflow occurs
     */
    plus(amountToAdd: number, unit: TemporalUnit): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the specified number of hours added.
     *  <p>
     *  This adds the specified number of hours to this time, returning a new time.
     *  The calculation wraps around midnight.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param hoursToAdd the hours to add, may be negative
     * @return a {@code LocalTime} based on this time with the hours added, not null
     */
    plusHours(hoursToAdd: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the specified number of minutes added.
     *  <p>
     *  This adds the specified number of minutes to this time, returning a new time.
     *  The calculation wraps around midnight.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param minutesToAdd the minutes to add, may be negative
     * @return a {@code LocalTime} based on this time with the minutes added, not null
     */
    plusMinutes(minutesToAdd: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the specified number of seconds added.
     *  <p>
     *  This adds the specified number of seconds to this time, returning a new time.
     *  The calculation wraps around midnight.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param secondstoAdd the seconds to add, may be negative
     * @return a {@code LocalTime} based on this time with the seconds added, not null
     */
    plusSeconds(secondstoAdd: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the specified number of nanoseconds added.
     *  <p>
     *  This adds the specified number of nanoseconds to this time, returning a new time.
     *  The calculation wraps around midnight.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param nanosToAdd the nanos to add, may be negative
     * @return a {@code LocalTime} based on this time with the nanoseconds added, not null
     */
    plusNanos(nanosToAdd: number): LocalTime;

    /**
     * Returns a copy of this time with the specified amount subtracted.
     *  <p>
     *  This returns a {@code LocalTime}, based on this one, with the specified amount subtracted.
     *  The amount is typically {@link Duration} but may be any other type implementing
     *  the {@link TemporalAmount} interface.
     *  <p>
     *  The calculation is delegated to the amount object by calling
     *  {@link TemporalAmount#subtractFrom(Temporal)}. The amount implementation is free
     *  to implement the subtraction in any way it wishes, however it typically
     *  calls back to {@link #minus(long, TemporalUnit)}. Consult the documentation
     *  of the amount implementation to determine if it can be successfully subtracted.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param amountToSubtract the amount to subtract, not null
     * @return a {@code LocalTime} based on this time with the subtraction made, not null
     * @throws DateTimeException if the subtraction cannot be made
     * @throws ArithmeticException if numeric overflow occurs
     */
    minus(amountToSubtract: TemporalAmount): LocalTime;

    /**
     * Returns a copy of this time with the specified amount subtracted.
     *  <p>
     *  This returns a {@code LocalTime}, based on this one, with the amount
     *  in terms of the unit subtracted. If it is not possible to subtract the amount,
     *  because the unit is not supported or for some other reason, an exception is thrown.
     *  <p>
     *  This method is equivalent to {@link #plus(long, TemporalUnit)} with the amount negated.
     *  See that method for a full description of how addition, and thus subtraction, works.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param amountToSubtract the amount of the unit to subtract from the result, may be negative
     * @param unit the unit of the amount to subtract, not null
     * @return a {@code LocalTime} based on this time with the specified amount subtracted, not null
     * @throws DateTimeException if the subtraction cannot be made
     * @throws UnsupportedTemporalTypeException if the unit is not supported
     * @throws ArithmeticException if numeric overflow occurs
     */
    minus(amountToSubtract: number, unit: TemporalUnit): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the specified number of hours subtracted.
     *  <p>
     *  This subtracts the specified number of hours from this time, returning a new time.
     *  The calculation wraps around midnight.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param hoursToSubtract the hours to subtract, may be negative
     * @return a {@code LocalTime} based on this time with the hours subtracted, not null
     */
    minusHours(hoursToSubtract: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the specified number of minutes subtracted.
     *  <p>
     *  This subtracts the specified number of minutes from this time, returning a new time.
     *  The calculation wraps around midnight.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param minutesToSubtract the minutes to subtract, may be negative
     * @return a {@code LocalTime} based on this time with the minutes subtracted, not null
     */
    minusMinutes(minutesToSubtract: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the specified number of seconds subtracted.
     *  <p>
     *  This subtracts the specified number of seconds from this time, returning a new time.
     *  The calculation wraps around midnight.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param secondsToSubtract the seconds to subtract, may be negative
     * @return a {@code LocalTime} based on this time with the seconds subtracted, not null
     */
    minusSeconds(secondsToSubtract: number): LocalTime;

    /**
     * Returns a copy of this {@code LocalTime} with the specified number of nanoseconds subtracted.
     *  <p>
     *  This subtracts the specified number of nanoseconds from this time, returning a new time.
     *  The calculation wraps around midnight.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param nanosToSubtract the nanos to subtract, may be negative
     * @return a {@code LocalTime} based on this time with the nanoseconds subtracted, not null
     */
    minusNanos(nanosToSubtract: number): LocalTime;

    /**
     * Queries this time using the specified query.
     *  <p>
     *  This queries this time using the specified query strategy object.
     *  The {@code TemporalQuery} object defines the logic to be used to
     *  obtain the result. Read the documentation of the query to understand
     *  what the result of this method will be.
     *  <p>
     *  The result of this method is obtained by invoking the
     *  {@link TemporalQuery#queryFrom(TemporalAccessor)} method on the
     *  specified query passing {@code this} as the argument.
     * @param <R> the type of the result
     * @param query the query to invoke, not null
     * @return the query result, null may be returned (defined by the query)
     * @throws DateTimeException if unable to query (defined by the query)
     * @throws ArithmeticException if numeric overflow occurs (defined by the query)
     */
    query(query: TemporalQuery): unknown;

    /**
     * Adjusts the specified temporal object to have the same time as this object.
     *  <p>
     *  This returns a temporal object of the same observable type as the input
     *  with the time changed to be the same as this.
     *  <p>
     *  The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
     *  passing {@link ChronoField#NANO_OF_DAY} as the field.
     *  <p>
     *  In most cases, it is clearer to reverse the calling pattern by using
     *  {@link Temporal#with(TemporalAdjuster)}:
     *  <pre>
     *    // these two lines are equivalent, but the second approach is recommended
     *    temporal = thisLocalTime.adjustInto(temporal);
     *    temporal = temporal.with(thisLocalTime);
     *  </pre>
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param temporal the target object to be adjusted, not null
     * @return the adjusted object, not null
     * @throws DateTimeException if unable to make the adjustment
     * @throws ArithmeticException if numeric overflow occurs
     */
    adjustInto(temporal: Temporal): Temporal;

    /**
     * Calculates the amount of time until another time in terms of the specified unit.
     *  <p>
     *  This calculates the amount of time between two {@code LocalTime}
     *  objects in terms of a single {@code TemporalUnit}.
     *  The start and end points are {@code this} and the specified time.
     *  The result will be negative if the end is before the start.
     *  The {@code Temporal} passed to this method is converted to a
     *  {@code LocalTime} using {@link #from(TemporalAccessor)}.
     *  For example, the amount in hours between two times can be calculated
     *  using {@code startTime.until(endTime, HOURS)}.
     *  <p>
     *  The calculation returns a whole number, representing the number of
     *  complete units between the two times.
     *  For example, the amount in hours between 11:30 and 13:29 will only
     *  be one hour as it is one minute short of two hours.
     *  <p>
     *  There are two equivalent ways of using this method.
     *  The first is to invoke this method.
     *  The second is to use {@link TemporalUnit#between(Temporal, Temporal)}:
     *  <pre>
     *    // these two lines are equivalent
     *    amount = start.until(end, MINUTES);
     *    amount = MINUTES.between(start, end);
     *  </pre>
     *  The choice should be made based on which makes the code more readable.
     *  <p>
     *  The calculation is implemented in this method for {@link ChronoUnit}.
     *  The units {@code NANOS}, {@code MICROS}, {@code MILLIS}, {@code SECONDS},
     *  {@code MINUTES}, {@code HOURS} and {@code HALF_DAYS} are supported.
     *  Other {@code ChronoUnit} values will throw an exception.
     *  <p>
     *  If the unit is not a {@code ChronoUnit}, then the result of this method
     *  is obtained by invoking {@code TemporalUnit.between(Temporal, Temporal)}
     *  passing {@code this} as the first argument and the converted input temporal
     *  as the second argument.
     *  <p>
     *  This instance is immutable and unaffected by this method call.
     * @param endExclusive the end time, exclusive, which is converted to a {@code LocalTime}, not null
     * @param unit the unit to measure the amount in, not null
     * @return the amount of time between this time and the end time
     * @throws DateTimeException if the amount cannot be calculated, or the end&#xA; temporal cannot be converted to a {@code LocalTime}
     * @throws UnsupportedTemporalTypeException if the unit is not supported
     * @throws ArithmeticException if numeric overflow occurs
     */
    until(endExclusive: Temporal, unit: TemporalUnit): number;

    /**
     * Formats this time using the specified formatter.
     *  <p>
     *  This time will be passed to the formatter to produce a string.
     * @param formatter the formatter to use, not null
     * @return the formatted time string, not null
     * @throws DateTimeException if an error occurs during printing
     */
    format(formatter: DateTimeFormatter): string;

    /**
     * Combines this time with a date to create a {@code LocalDateTime}.
     *  <p>
     *  This returns a {@code LocalDateTime} formed from this time at the specified date.
     *  All possible combinations of date and time are valid.
     * @param date the date to combine with, not null
     * @return the local date-time formed from this time and the specified date, not null
     */
    atDate(date: LocalDate): LocalDateTime;

    /**
     * Combines this time with an offset to create an {@code OffsetTime}.
     *  <p>
     *  This returns an {@code OffsetTime} formed from this time at the specified offset.
     *  All possible combinations of time and offset are valid.
     * @param offset the offset to combine with, not null
     * @return the offset time formed from this time and the specified offset, not null
     */
    atOffset(offset: ZoneOffset): OffsetTime;

    /**
     * Extracts the time as seconds of day,
     *  from {@code 0} to {@code 24 * 60 * 60 - 1}.
     * @return the second-of-day equivalent to this time
     */
    toSecondOfDay(): number;

    /**
     * Extracts the time as nanos of day,
     *  from {@code 0} to {@code 24 * 60 * 60 * 1,000,000,000 - 1}.
     * @return the nano of day equivalent to this time
     */
    toNanoOfDay(): number;

    /**
     * Compares this time to another time.
     *  <p>
     *  The comparison is based on the time-line position of the local times within a day.
     *  It is "consistent with equals", as defined by {@link Comparable}.
     * @param other the other time to compare to, not null
     * @return the comparator value, negative if less, positive if greater
     * @throws NullPointerException if {@code other} is null
     */
    compareTo(other: LocalTime): number;

    /**
     * Checks if this time is after the specified time.
     *  <p>
     *  The comparison is based on the time-line position of the time within a day.
     * @param other the other time to compare to, not null
     * @return true if this is after the specified time
     * @throws NullPointerException if {@code other} is null
     */
    isAfter(other: LocalTime): boolean;

    /**
     * Checks if this time is before the specified time.
     *  <p>
     *  The comparison is based on the time-line position of the time within a day.
     * @param other the other time to compare to, not null
     * @return true if this point is before the specified time
     * @throws NullPointerException if {@code other} is null
     */
    isBefore(other: LocalTime): boolean;

    /**
     * Checks if this time is equal to another time.
     *  <p>
     *  The comparison is based on the time-line position of the time within a day.
     *  <p>
     *  Only objects of type {@code LocalTime} are compared, other types return false.
     *  To compare the date of two {@code TemporalAccessor} instances, use
     *  {@link ChronoField#NANO_OF_DAY} as a comparator.
     * @param obj the object to check, null returns false
     * @return true if this is equal to the other time
     */
    equals(obj: unknown): boolean;

    /**
     * A hash code for this time.
     * @return a suitable hash code
     */
    hashCode(): number;

    /**
     * Outputs this time as a {@code String}, such as {@code 10:15}.
     *  <p>
     *  The output will be one of the following ISO-8601 formats:
     *  <ul>
     *  <li>{@code HH:mm}</li>
     *  <li>{@code HH:mm:ss}</li>
     *  <li>{@code HH:mm:ss.SSS}</li>
     *  <li>{@code HH:mm:ss.SSSSSS}</li>
     *  <li>{@code HH:mm:ss.SSSSSSSSS}</li>
     *  </ul>
     *  The format used will be the shortest that outputs the full value of
     *  the time where the omitted parts are implied to be zero.
     * @return a string representation of this time, not null
     */
    toString(): string;

    /**
 * The minimum supported {@code LocalTime}, '00:00'.
 *  This is the time of midnight at the start of the day.
  
    */
    MIN: LocalTime;

    /**
 * The maximum supported {@code LocalTime}, '23:59:59.999999999'.
 *  This is the time just before midnight at the end of the day.
  
    */
    MAX: LocalTime;

    /**
 * The time of midnight at the start of the day, '00:00'.
  
    */
    MIDNIGHT: LocalTime;

    /**
 * The time of noon in the middle of the day, '12:00'.
  
    */
    NOON: LocalTime;
  };
