import type { String } from "../../lang/String";
import type { ZoneRules } from "../zone/ZoneRules";
import type { TemporalField } from "../temporal/TemporalField";

import type { ValueRange } from "../temporal/ValueRange";

import type { TemporalQuery } from "../temporal/TemporalQuery";

import type { Temporal } from "../temporal/Temporal";
import type { Object } from "../../lang/Object";
import type { ZoneId } from "../ZoneId";
import type { TemporalAccessor } from "../temporal/TemporalAccessor";
import type { TemporalAdjuster } from "../temporal/TemporalAdjuster";
import type { Comparable } from "../../lang/Comparable";
import type { Serializable } from "../../io/Serializable";

/**
 * A time-zone offset from Greenwich/UTC, such as {@code +02:00}.
 *  <p>
 *  A time-zone offset is the amount of time that a time-zone differs from Greenwich/UTC.
 *  This is usually a fixed number of hours and minutes.
 *  <p>
 *  Different parts of the world have different time-zone offsets.
 *  The rules for how offsets vary by place and time of year are captured in the
 *  {@link ZoneId} class.
 *  <p>
 *  For example, Paris is one hour ahead of Greenwich/UTC in winter and two hours
 *  ahead in summer. The {@code ZoneId} instance for Paris will reference two
 *  {@code ZoneOffset} instances - a {@code +01:00} instance for winter,
 *  and a {@code +02:00} instance for summer.
 *  <p>
 *  In 2008, time-zone offsets around the world extended from -12:00 to +14:00.
 *  To prevent any problems with that range being extended, yet still provide
 *  validation, the range of offsets is restricted to -18:00 to 18:00 inclusive.
 *  <p>
 *  This class is designed for use with the ISO calendar system.
 *  The fields of hours, minutes and seconds make assumptions that are valid for the
 *  standard ISO definitions of those fields. This class may be used with other
 *  calendar systems providing the definition of the time fields matches those
 *  of the ISO calendar system.
 *  <p>
 *  Instances of {@code ZoneOffset} must be compared using {@link #equals}.
 *  Implementations may choose to cache certain common offsets, however
 *  applications must not rely on such caching.
 *
 *  <p>
 *  This is a <a href="{@docRoot}/java/lang/doc-files/ValueBased.html">value-based</a>
 *  class; use of identity-sensitive operations (including reference equality
 *  ({@code ==}), identity hash code, or synchronization) on instances of
 *  {@code ZoneOffset} may have unpredictable results and should be avoided.
 *  The {@code equals} method should be used for comparisons.
 * @implSpec This class is immutable and thread-safe.
 * @since 1.8
 */
export type ZoneOffset = ZoneId &
  TemporalAccessor &
  TemporalAdjuster &
  Comparable &
  Serializable & {
    /**
     * Gets the total zone offset in seconds.
     *  <p>
     *  This is the primary way to access the offset amount.
     *  It returns the total of the hours, minutes and seconds fields as a
     *  single offset that can be added to a time.
     * @return the total zone offset amount in seconds
     */
    getTotalSeconds(): number;

    /**
     * Gets the normalized zone offset ID.
     *  <p>
     *  The ID is minor variation to the standard ISO-8601 formatted string
     *  for the offset. There are three formats:
     *  <ul>
     *  <li>{@code Z} - for UTC (ISO-8601)
     *  <li>{@code +hh:mm} or {@code -hh:mm} - if the seconds are zero (ISO-8601)
     *  <li>{@code +hh:mm:ss} or {@code -hh:mm:ss} - if the seconds are non-zero (not ISO-8601)
     *  </ul>
     * @return the zone offset ID, not null
     */
    getId(): string;

    /**
     * Gets the associated time-zone rules.
     *  <p>
     *  The rules will always return this offset when queried.
     *  The implementation class is immutable, thread-safe and serializable.
     * @return the rules, not null
     */
    getRules(): ZoneRules;

    /**
     * Checks if the specified field is supported.
     *  <p>
     *  This checks if this offset can be queried for the specified field.
     *  If false, then calling the {@link #range(TemporalField) range} and
     *  {@link #get(TemporalField) get} methods will throw an exception.
     *  <p>
     *  If the field is a {@link ChronoField} then the query is implemented here.
     *  The {@code OFFSET_SECONDS} field returns true.
     *  All other {@code ChronoField} instances will return false.
     *  <p>
     *  If the field is not a {@code ChronoField}, then the result of this method
     *  is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
     *  passing {@code this} as the argument.
     *  Whether the field is supported is determined by the field.
     * @param field the field to check, null returns false
     * @return true if the field is supported on this offset, false if not
     */
    isSupported(field: TemporalField): boolean;

    /**
     * Gets the range of valid values for the specified field.
     *  <p>
     *  The range object expresses the minimum and maximum valid values for a field.
     *  This offset is used to enhance the accuracy of the returned range.
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
     * Gets the value of the specified field from this offset as an {@code int}.
     *  <p>
     *  This queries this offset for the value of the specified field.
     *  The returned value will always be within the valid range of values for the field.
     *  If it is not possible to return the value, because the field is not supported
     *  or for some other reason, an exception is thrown.
     *  <p>
     *  If the field is a {@link ChronoField} then the query is implemented here.
     *  The {@code OFFSET_SECONDS} field returns the value of the offset.
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
     * Gets the value of the specified field from this offset as a {@code long}.
     *  <p>
     *  This queries this offset for the value of the specified field.
     *  If it is not possible to return the value, because the field is not supported
     *  or for some other reason, an exception is thrown.
     *  <p>
     *  If the field is a {@link ChronoField} then the query is implemented here.
     *  The {@code OFFSET_SECONDS} field returns the value of the offset.
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
     * Queries this offset using the specified query.
     *  <p>
     *  This queries this offset using the specified query strategy object.
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
     * Adjusts the specified temporal object to have the same offset as this object.
     *  <p>
     *  This returns a temporal object of the same observable type as the input
     *  with the offset changed to be the same as this.
     *  <p>
     *  The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
     *  passing {@link ChronoField#OFFSET_SECONDS} as the field.
     *  <p>
     *  In most cases, it is clearer to reverse the calling pattern by using
     *  {@link Temporal#with(TemporalAdjuster)}:
     *  <pre>
     *    // these two lines are equivalent, but the second approach is recommended
     *    temporal = thisOffset.adjustInto(temporal);
     *    temporal = temporal.with(thisOffset);
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
     * Compares this offset to another offset in descending order.
     *  <p>
     *  The offsets are compared in the order that they occur for the same time
     *  of day around the world. Thus, an offset of {@code +10:00} comes before an
     *  offset of {@code +09:00} and so on down to {@code -18:00}.
     *  <p>
     *  The comparison is "consistent with equals", as defined by {@link Comparable}.
     * @param other the other date to compare to, not null
     * @return the comparator value, negative if less, positive if greater
     * @throws NullPointerException if {@code other} is null
     */
    compareTo(other: ZoneOffset): number;

    /**
     * Checks if this offset is equal to another offset.
     *  <p>
     *  The comparison is based on the amount of the offset in seconds.
     *  This is equivalent to a comparison by ID.
     * @param obj the object to check, null returns false
     * @return true if this is equal to the other offset
     */
    equals(obj: unknown): boolean;

    /**
     * A hash code for this offset.
     * @return a suitable hash code
     */
    hashCode(): number;

    /**
     * Outputs this offset as a {@code String}, using the normalized ID.
     * @return a string representation of this offset, not null
     */
    toString(): string;

    /**
 * The time-zone offset for UTC, with an ID of 'Z'.
  
    */
    UTC: ZoneOffset;

    /**
 * Constant for the maximum supported offset.
  
    */
    MIN: ZoneOffset;

    /**
 * Constant for the maximum supported offset.
  
    */
    MAX: ZoneOffset;
  };
