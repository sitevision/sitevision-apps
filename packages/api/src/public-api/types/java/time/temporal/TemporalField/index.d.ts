import type { Locale } from "../../../util/Locale";
import type { String } from "../../../lang/String";
import type { TemporalUnit } from "../TemporalUnit";
import type { ValueRange } from "../ValueRange";

import type { TemporalAccessor } from "../TemporalAccessor";

import type { Map } from "../../../util/Map";
import type { ResolverStyle } from "../../format/ResolverStyle";

/**
 * A field of date-time, such as month-of-year or hour-of-minute.
 *  <p>
 *  Date and time is expressed using fields which partition the time-line into something
 *  meaningful for humans. Implementations of this interface represent those fields.
 *  <p>
 *  The most commonly used units are defined in {@link ChronoField}.
 *  Further fields are supplied in {@link IsoFields}, {@link WeekFields} and {@link JulianFields}.
 *  Fields can also be written by application code by implementing this interface.
 *  <p>
 *  The field works using double dispatch. Client code calls methods on a date-time like
 *  {@code LocalDateTime} which check if the field is a {@code ChronoField}.
 *  If it is, then the date-time must handle it.
 *  Otherwise, the method call is re-dispatched to the matching method in this interface.
 * @implSpec This interface must be implemented with care to ensure other classes operate correctly.&#xA; All implementations that can be instantiated must be final, immutable and thread-safe.&#xA; Implementations should be {@code Serializable} where possible.&#xA; An enum is as effective implementation choice.
 * @since 1.8
 */
export type TemporalField = {
  /**
   * Gets the display name for the field in the requested locale.
   *  <p>
   *  If there is no display name for the locale then a suitable default must be returned.
   *  <p>
   *  The default implementation must check the locale is not null
   *  and return {@code toString()}.
   * @param locale the locale to use, not null
   * @return the display name for the locale or a suitable default, not null
   */
  getDisplayName(locale: Locale): string;

  /**
   * Gets the unit that the field is measured in.
   *  <p>
   *  The unit of the field is the period that varies within the range.
   *  For example, in the field 'MonthOfYear', the unit is 'Months'.
   *  See also {@link #getRangeUnit()}.
   * @return the unit defining the base unit of the field, not null
   */
  getBaseUnit(): TemporalUnit;

  /**
   * Gets the range that the field is bound by.
   *  <p>
   *  The range of the field is the period that the field varies within.
   *  For example, in the field 'MonthOfYear', the range is 'Years'.
   *  See also {@link #getBaseUnit()}.
   *  <p>
   *  The range is never null. For example, the 'Year' field is shorthand for
   *  'YearOfForever'. It therefore has a unit of 'Years' and a range of 'Forever'.
   * @return the unit defining the range of the field, not null
   */
  getRangeUnit(): TemporalUnit;

  /**
   * Gets the range of valid values for the field.
   *  <p>
   *  All fields can be expressed as a {@code long} integer.
   *  This method returns an object that describes the valid range for that value.
   *  This method is generally only applicable to the ISO-8601 calendar system.
   *  <p>
   *  Note that the result only describes the minimum and maximum valid values
   *  and it is important not to read too much into them. For example, there
   *  could be values within the range that are invalid for the field.
   * @return the range of valid values for the field, not null
   */
  range(): ValueRange;

  /**
   * Checks if this field represents a component of a date.
   *  <p>
   *  A field is date-based if it can be derived from
   *  {@link ChronoField#EPOCH_DAY EPOCH_DAY}.
   *  Note that it is valid for both {@code isDateBased()} and {@code isTimeBased()}
   *  to return false, such as when representing a field like minute-of-week.
   * @return true if this field is a component of a date
   */
  isDateBased(): boolean;

  /**
   * Checks if this field represents a component of a time.
   *  <p>
   *  A field is time-based if it can be derived from
   *  {@link ChronoField#NANO_OF_DAY NANO_OF_DAY}.
   *  Note that it is valid for both {@code isDateBased()} and {@code isTimeBased()}
   *  to return false, such as when representing a field like minute-of-week.
   * @return true if this field is a component of a time
   */
  isTimeBased(): boolean;

  /**
   * Checks if this field is supported by the temporal object.
   *  <p>
   *  This determines whether the temporal accessor supports this field.
   *  If this returns false, then the temporal cannot be queried for this field.
   *  <p>
   *  There are two equivalent ways of using this method.
   *  The first is to invoke this method directly.
   *  The second is to use {@link TemporalAccessor#isSupported(TemporalField)}:
   *  <pre>
   *    // these two lines are equivalent, but the second approach is recommended
   *    temporal = thisField.isSupportedBy(temporal);
   *    temporal = temporal.isSupported(thisField);
   *  </pre>
   *  It is recommended to use the second approach, {@code isSupported(TemporalField)},
   *  as it is a lot clearer to read in code.
   *  <p>
   *  Implementations should determine whether they are supported using the fields
   *  available in {@link ChronoField}.
   * @param temporal the temporal object to query, not null
   * @return true if the date-time can be queried for this field, false if not
   */
  isSupportedBy(temporal: TemporalAccessor): boolean;

  /**
   * Get the range of valid values for this field using the temporal object to
   *  refine the result.
   *  <p>
   *  This uses the temporal object to find the range of valid values for the field.
   *  This is similar to {@link #range()}, however this method refines the result
   *  using the temporal. For example, if the field is {@code DAY_OF_MONTH} the
   *  {@code range} method is not accurate as there are four possible month lengths,
   *  28, 29, 30 and 31 days. Using this method with a date allows the range to be
   *  accurate, returning just one of those four options.
   *  <p>
   *  There are two equivalent ways of using this method.
   *  The first is to invoke this method directly.
   *  The second is to use {@link TemporalAccessor#range(TemporalField)}:
   *  <pre>
   *    // these two lines are equivalent, but the second approach is recommended
   *    temporal = thisField.rangeRefinedBy(temporal);
   *    temporal = temporal.range(thisField);
   *  </pre>
   *  It is recommended to use the second approach, {@code range(TemporalField)},
   *  as it is a lot clearer to read in code.
   *  <p>
   *  Implementations should perform any queries or calculations using the fields
   *  available in {@link ChronoField}.
   *  If the field is not supported an {@code UnsupportedTemporalTypeException} must be thrown.
   * @param temporal the temporal object used to refine the result, not null
   * @return the range of valid values for this field, not null
   * @throws DateTimeException if the range for the field cannot be obtained
   * @throws UnsupportedTemporalTypeException if the field is not supported by the temporal
   */
  rangeRefinedBy(temporal: TemporalAccessor): ValueRange;

  /**
   * Gets the value of this field from the specified temporal object.
   *  <p>
   *  This queries the temporal object for the value of this field.
   *  <p>
   *  There are two equivalent ways of using this method.
   *  The first is to invoke this method directly.
   *  The second is to use {@link TemporalAccessor#getLong(TemporalField)}
   *  (or {@link TemporalAccessor#get(TemporalField)}):
   *  <pre>
   *    // these two lines are equivalent, but the second approach is recommended
   *    temporal = thisField.getFrom(temporal);
   *    temporal = temporal.getLong(thisField);
   *  </pre>
   *  It is recommended to use the second approach, {@code getLong(TemporalField)},
   *  as it is a lot clearer to read in code.
   *  <p>
   *  Implementations should perform any queries or calculations using the fields
   *  available in {@link ChronoField}.
   *  If the field is not supported an {@code UnsupportedTemporalTypeException} must be thrown.
   * @param temporal the temporal object to query, not null
   * @return the value of this field, not null
   * @throws DateTimeException if a value for the field cannot be obtained
   * @throws UnsupportedTemporalTypeException if the field is not supported by the temporal
   * @throws ArithmeticException if numeric overflow occurs
   */
  getFrom(temporal: TemporalAccessor): number;

  /**
   * Returns a copy of the specified temporal object with the value of this field set.
   *  <p>
   *  This returns a new temporal object based on the specified one with the value for
   *  this field changed. For example, on a {@code LocalDate}, this could be used to
   *  set the year, month or day-of-month.
   *  The returned object has the same observable type as the specified object.
   *  <p>
   *  In some cases, changing a field is not fully defined. For example, if the target object is
   *  a date representing the 31st January, then changing the month to February would be unclear.
   *  In cases like this, the implementation is responsible for resolving the result.
   *  Typically it will choose the previous valid date, which would be the last valid
   *  day of February in this example.
   *  <p>
   *  There are two equivalent ways of using this method.
   *  The first is to invoke this method directly.
   *  The second is to use {@link Temporal#with(TemporalField, long)}:
   *  <pre>
   *    // these two lines are equivalent, but the second approach is recommended
   *    temporal = thisField.adjustInto(temporal);
   *    temporal = temporal.with(thisField);
   *  </pre>
   *  It is recommended to use the second approach, {@code with(TemporalField)},
   *  as it is a lot clearer to read in code.
   *  <p>
   *  Implementations should perform any queries or calculations using the fields
   *  available in {@link ChronoField}.
   *  If the field is not supported an {@code UnsupportedTemporalTypeException} must be thrown.
   *  <p>
   *  Implementations must not alter the specified temporal object.
   *  Instead, an adjusted copy of the original must be returned.
   *  This provides equivalent, safe behavior for immutable and mutable implementations.
   * @param <R> the type of the Temporal object
   * @param temporal the temporal object to adjust, not null
   * @param newValue the new value of the field
   * @return the adjusted temporal object, not null
   * @throws DateTimeException if the field cannot be set
   * @throws UnsupportedTemporalTypeException if the field is not supported by the temporal
   * @throws ArithmeticException if numeric overflow occurs
   */
  adjustInto(temporal: unknown, newValue: number): unknown;

  /**
   * Resolves this field to provide a simpler alternative or a date.
   *  <p>
   *  This method is invoked during the resolve phase of parsing.
   *  It is designed to allow application defined fields to be simplified into
   *  more standard fields, such as those on {@code ChronoField}, or into a date.
   *  <p>
   *  Applications should not normally invoke this method directly.
   * @implSpec If an implementation represents a field that can be simplified, or&#xA; combined with others, then this method must be implemented.&#xA; <p>&#xA; The specified map contains the current state of the parse.&#xA; The map is mutable and must be mutated to resolve the field and&#xA; any related fields. This method will only be invoked during parsing&#xA; if the map contains this field, and implementations should therefore&#xA; assume this field is present.&#xA; <p>&#xA; Resolving a field will consist of looking at the value of this field,&#xA; and potentially other fields, and either updating the map with a&#xA; simpler value, such as a {@code ChronoField}, or returning a&#xA; complete {@code ChronoLocalDate}. If a resolve is successful,&#xA; the code must remove all the fields that were resolved from the map,&#xA; including this field.&#xA; <p>&#xA; For example, the {@code IsoFields} class contains the quarter-of-year&#xA; and day-of-quarter fields. The implementation of this method in that class&#xA; resolves the two fields plus the {@link ChronoField#YEAR YEAR} into a&#xA; complete {@code LocalDate}. The resolve method will remove all three&#xA; fields from the map before returning the {@code LocalDate}.&#xA; <p>&#xA; A partially complete temporal is used to allow the chronology and zone&#xA; to be queried. In general, only the chronology will be needed.&#xA; Querying items other than the zone or chronology is undefined and&#xA; must not be relied on.&#xA; The behavior of other methods such as {@code get}, {@code getLong},&#xA; {@code range} and {@code isSupported} is unpredictable and the results undefined.&#xA; <p>&#xA; If resolution should be possible, but the data is invalid, the resolver&#xA; style should be used to determine an appropriate level of leniency, which&#xA; may require throwing a {@code DateTimeException} or {@code ArithmeticException}.&#xA; If no resolution is possible, the resolve method must return null.&#xA; <p>&#xA; When resolving time fields, the map will be altered and null returned.&#xA; When resolving date fields, the date is normally returned from the method,&#xA; with the map altered to remove the resolved fields. However, it would also&#xA; be acceptable for the date fields to be resolved into other {@code ChronoField}&#xA; instances that can produce a date, such as {@code EPOCH_DAY}.&#xA; <p>&#xA; Not all {@code TemporalAccessor} implementations are accepted as return values.&#xA; Implementations that call this method must accept {@code ChronoLocalDate},&#xA; {@code ChronoLocalDateTime}, {@code ChronoZonedDateTime} and {@code LocalTime}.&#xA; <p>&#xA; The default implementation must return null.
   * @param fieldValues the map of fields to values, which can be updated, not null
   * @param partialTemporal the partially complete temporal to query for zone and&#xA; chronology; querying for other things is undefined and not recommended, not null
   * @param resolverStyle the requested type of resolve, not null
   * @return the resolved temporal object; null if resolving only&#xA; changed the map, or no resolve occurred
   * @throws ArithmeticException if numeric overflow occurs
   * @throws DateTimeException if resolving results in an error. This must not be thrown&#xA; by querying a field on the temporal without first checking if it is supported
   */
  resolve(
    fieldValues: Map | {},
    partialTemporal: TemporalAccessor,
    resolverStyle: ResolverStyle
  ): TemporalAccessor;

  /**
   * Gets a descriptive name for the field.
   *  <p>
   *  The should be of the format 'BaseOfRange', such as 'MonthOfYear',
   *  unless the field has a range of {@code FOREVER}, when only
   *  the base unit is mentioned, such as 'Year' or 'Era'.
   * @return the name of the field, not null
   */
  toString(): string;
};
