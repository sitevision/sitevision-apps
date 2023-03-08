import type { TemporalField } from "../TemporalField";

import type { ValueRange } from "../ValueRange";

import type { TemporalQuery } from "../TemporalQuery";

/**
 * Framework-level interface defining read-only access to a temporal object,
 *  such as a date, time, offset or some combination of these.
 *  <p>
 *  This is the base interface type for date, time and offset objects.
 *  It is implemented by those classes that can provide information
 *  as {@linkplain TemporalField fields} or {@linkplain TemporalQuery queries}.
 *  <p>
 *  Most date and time information can be represented as a number.
 *  These are modeled using {@code TemporalField} with the number held using
 *  a {@code long} to handle large values. Year, month and day-of-month are
 *  simple examples of fields, but they also include instant and offsets.
 *  See {@link ChronoField} for the standard set of fields.
 *  <p>
 *  Two pieces of date/time information cannot be represented by numbers,
 *  the {@linkplain java.time.chrono.Chronology chronology} and the
 *  {@linkplain java.time.ZoneId time-zone}.
 *  These can be accessed via {@linkplain #query(TemporalQuery) queries} using
 *  the static methods defined on {@link TemporalQuery}.
 *  <p>
 *  A sub-interface, {@link Temporal}, extends this definition to one that also
 *  supports adjustment and manipulation on more complete temporal objects.
 *  <p>
 *  This interface is a framework-level interface that should not be widely
 *  used in application code. Instead, applications should create and pass
 *  around instances of concrete types, such as {@code LocalDate}.
 *  There are many reasons for this, part of which is that implementations
 *  of this interface may be in calendar systems other than ISO.
 *  See {@link java.time.chrono.ChronoLocalDate} for a fuller discussion of the issues.
 * @implSpec This interface places no restrictions on the mutability of implementations,&#xA; however immutability is strongly recommended.
 * @since 1.8
 */
export type TemporalAccessor = {
  /**
   * Checks if the specified field is supported.
   *  <p>
   *  This checks if the date-time can be queried for the specified field.
   *  If false, then calling the {@link #range(TemporalField) range} and {@link #get(TemporalField) get}
   *  methods will throw an exception.
   * @implSpec Implementations must check and handle all fields defined in {@link ChronoField}.&#xA; If the field is supported, then true must be returned, otherwise false must be returned.&#xA; <p>&#xA; If the field is not a {@code ChronoField}, then the result of this method&#xA; is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}&#xA; passing {@code this} as the argument.&#xA; <p>&#xA; Implementations must ensure that no observable state is altered when this&#xA; read-only method is invoked.
   * @param field the field to check, null returns false
   * @return true if this date-time can be queried for the field, false if not
   */
  isSupported(field: TemporalField): boolean;

  /**
   * Gets the range of valid values for the specified field.
   *  <p>
   *  All fields can be expressed as a {@code long} integer.
   *  This method returns an object that describes the valid range for that value.
   *  The value of this temporal object is used to enhance the accuracy of the returned range.
   *  If the date-time cannot return the range, because the field is unsupported or for
   *  some other reason, an exception will be thrown.
   *  <p>
   *  Note that the result only describes the minimum and maximum valid values
   *  and it is important not to read too much into them. For example, there
   *  could be values within the range that are invalid for the field.
   * @implSpec Implementations must check and handle all fields defined in {@link ChronoField}.&#xA; If the field is supported, then the range of the field must be returned.&#xA; If unsupported, then an {@code UnsupportedTemporalTypeException} must be thrown.&#xA; <p>&#xA; If the field is not a {@code ChronoField}, then the result of this method&#xA; is obtained by invoking {@code TemporalField.rangeRefinedBy(TemporalAccessorl)}&#xA; passing {@code this} as the argument.&#xA; <p>&#xA; Implementations must ensure that no observable state is altered when this&#xA; read-only method is invoked.&#xA; <p>&#xA; The default implementation must behave equivalent to this code:&#xA; <pre>&#xA; if (field instanceof ChronoField) {&#xA; if (isSupported(field)) {&#xA; return field.range();&#xA; }&#xA; throw new UnsupportedTemporalTypeException("Unsupported field: " + field);&#xA; }&#xA; return field.rangeRefinedBy(this);&#xA; </pre>
   * @param field the field to query the range for, not null
   * @return the range of valid values for the field, not null
   * @throws DateTimeException if the range for the field cannot be obtained
   * @throws UnsupportedTemporalTypeException if the field is not supported
   */
  range(field: TemporalField): ValueRange;

  /**
   * Gets the value of the specified field as an {@code int}.
   *  <p>
   *  This queries the date-time for the value of the specified field.
   *  The returned value will always be within the valid range of values for the field.
   *  If the date-time cannot return the value, because the field is unsupported or for
   *  some other reason, an exception will be thrown.
   * @implSpec Implementations must check and handle all fields defined in {@link ChronoField}.&#xA; If the field is supported and has an {@code int} range, then the value of&#xA; the field must be returned.&#xA; If unsupported, then an {@code UnsupportedTemporalTypeException} must be thrown.&#xA; <p>&#xA; If the field is not a {@code ChronoField}, then the result of this method&#xA; is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}&#xA; passing {@code this} as the argument.&#xA; <p>&#xA; Implementations must ensure that no observable state is altered when this&#xA; read-only method is invoked.&#xA; <p>&#xA; The default implementation must behave equivalent to this code:&#xA; <pre>&#xA; if (range(field).isIntValue()) {&#xA; return range(field).checkValidIntValue(getLong(field), field);&#xA; }&#xA; throw new UnsupportedTemporalTypeException("Invalid field " + field + " + for get() method, use getLong() instead");&#xA; </pre>
   * @param field the field to get, not null
   * @return the value for the field, within the valid range of values
   * @throws DateTimeException if a value for the field cannot be obtained or&#xA; the value is outside the range of valid values for the field
   * @throws UnsupportedTemporalTypeException if the field is not supported or&#xA; the range of values exceeds an {@code int}
   * @throws ArithmeticException if numeric overflow occurs
   */
  get(field: TemporalField): number;

  /**
   * Gets the value of the specified field as a {@code long}.
   *  <p>
   *  This queries the date-time for the value of the specified field.
   *  The returned value may be outside the valid range of values for the field.
   *  If the date-time cannot return the value, because the field is unsupported or for
   *  some other reason, an exception will be thrown.
   * @implSpec Implementations must check and handle all fields defined in {@link ChronoField}.&#xA; If the field is supported, then the value of the field must be returned.&#xA; If unsupported, then an {@code UnsupportedTemporalTypeException} must be thrown.&#xA; <p>&#xA; If the field is not a {@code ChronoField}, then the result of this method&#xA; is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}&#xA; passing {@code this} as the argument.&#xA; <p>&#xA; Implementations must ensure that no observable state is altered when this&#xA; read-only method is invoked.
   * @param field the field to get, not null
   * @return the value for the field
   * @throws DateTimeException if a value for the field cannot be obtained
   * @throws UnsupportedTemporalTypeException if the field is not supported
   * @throws ArithmeticException if numeric overflow occurs
   */
  getLong(field: TemporalField): number;

  /**
   * Queries this date-time.
   *  <p>
   *  This queries this date-time using the specified query strategy object.
   *  <p>
   *  Queries are a key tool for extracting information from date-times.
   *  They exists to externalize the process of querying, permitting different
   *  approaches, as per the strategy design pattern.
   *  Examples might be a query that checks if the date is the day before February 29th
   *  in a leap year, or calculates the number of days to your next birthday.
   *  <p>
   *  The most common query implementations are method references, such as
   *  {@code LocalDate::from} and {@code ZoneId::from}.
   *  Additional implementations are provided as static methods on {@link TemporalQuery}.
   * @implSpec The default implementation must behave equivalent to this code:&#xA; <pre>&#xA; if (query == TemporalQueries.zoneId() ||&#xA; query == TemporalQueries.chronology() || query == TemporalQueries.precision()) {&#xA; return null;&#xA; }&#xA; return query.queryFrom(this);&#xA; </pre>&#xA; Future versions are permitted to add further queries to the if statement.&#xA; <p>&#xA; All classes implementing this interface and overriding this method must call&#xA; {@code TemporalAccessor.super.query(query)}. JDK classes may avoid calling&#xA; super if they provide behavior equivalent to the default behaviour, however&#xA; non-JDK classes may not utilize this optimization and must call {@code super}.&#xA; <p>&#xA; If the implementation can supply a value for one of the queries listed in the&#xA; if statement of the default implementation, then it must do so.&#xA; For example, an application-defined {@code HourMin} class storing the hour&#xA; and minute must override this method as follows:&#xA; <pre>&#xA; if (query == TemporalQueries.precision()) {&#xA; return MINUTES;&#xA; }&#xA; return TemporalAccessor.super.query(query);&#xA; </pre>&#xA; <p>&#xA; Implementations must ensure that no observable state is altered when this&#xA; read-only method is invoked.
   * @param <R> the type of the result
   * @param query the query to invoke, not null
   * @return the query result, null may be returned (defined by the query)
   * @throws DateTimeException if unable to query
   * @throws ArithmeticException if numeric overflow occurs
   */
  query(query: TemporalQuery): unknown;
};
