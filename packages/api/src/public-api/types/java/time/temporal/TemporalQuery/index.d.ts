import type { TemporalAccessor } from "../TemporalAccessor";

/**
 * Strategy for querying a temporal object.
 *  <p>
 *  Queries are a key tool for extracting information from temporal objects.
 *  They exist to externalize the process of querying, permitting different
 *  approaches, as per the strategy design pattern.
 *  Examples might be a query that checks if the date is the day before February 29th
 *  in a leap year, or calculates the number of days to your next birthday.
 *  <p>
 *  The {@link TemporalField} interface provides another mechanism for querying
 *  temporal objects. That interface is limited to returning a {@code long}.
 *  By contrast, queries can return any type.
 *  <p>
 *  There are two equivalent ways of using a {@code TemporalQuery}.
 *  The first is to invoke the method on this interface directly.
 *  The second is to use {@link TemporalAccessor#query(TemporalQuery)}:
 *  <pre>
 *    // these two lines are equivalent, but the second approach is recommended
 *    temporal = thisQuery.queryFrom(temporal);
 *    temporal = temporal.query(thisQuery);
 *  </pre>
 *  It is recommended to use the second approach, {@code query(TemporalQuery)},
 *  as it is a lot clearer to read in code.
 *  <p>
 *  The most common implementations are method references, such as
 *  {@code LocalDate::from} and {@code ZoneId::from}.
 *  Additional common queries are provided as static methods in {@link TemporalQueries}.
 * @implSpec This interface places no restrictions on the mutability of implementations,&#xA; however immutability is strongly recommended.
 * @param <R> the type returned from the query
 * @since 1.8
 */
export type TemporalQuery = {
  /**
   * Queries the specified temporal object.
   *  <p>
   *  This queries the specified temporal object to return an object using the logic
   *  encapsulated in the implementing class.
   *  Examples might be a query that checks if the date is the day before February 29th
   *  in a leap year, or calculates the number of days to your next birthday.
   *  <p>
   *  There are two equivalent ways of using this method.
   *  The first is to invoke this method directly.
   *  The second is to use {@link TemporalAccessor#query(TemporalQuery)}:
   *  <pre>
   *    // these two lines are equivalent, but the second approach is recommended
   *    temporal = thisQuery.queryFrom(temporal);
   *    temporal = temporal.query(thisQuery);
   *  </pre>
   *  It is recommended to use the second approach, {@code query(TemporalQuery)},
   *  as it is a lot clearer to read in code.
   * @implSpec The implementation must take the input object and query it.&#xA; The implementation defines the logic of the query and is responsible for&#xA; documenting that logic.&#xA; It may use any method on {@code TemporalAccessor} to determine the result.&#xA; The input object must not be altered.&#xA; <p>&#xA; The input temporal object may be in a calendar system other than ISO.&#xA; Implementations may choose to document compatibility with other calendar systems,&#xA; or reject non-ISO temporal objects by {@link TemporalQueries#chronology() querying the chronology}.&#xA; <p>&#xA; This method may be called from multiple threads in parallel.&#xA; It must be thread-safe when invoked.
   * @param temporal the temporal object to query, not null
   * @return the queried value, may return null to indicate not found
   * @throws DateTimeException if unable to query
   * @throws ArithmeticException if numeric overflow occurs
   */
  queryFrom(temporal: TemporalAccessor): unknown;
};
