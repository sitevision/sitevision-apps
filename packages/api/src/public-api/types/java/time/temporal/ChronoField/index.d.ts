/**
 * A standard set of fields.
 *  <p>
 *  This set of fields provide field-based access to manipulate a date, time or date-time.
 *  The standard set of fields can be extended by implementing {@link TemporalField}.
 *  <p>
 *  These fields are intended to be applicable in multiple calendar systems.
 *  For example, most non-ISO calendar systems define dates as a year, month and day,
 *  just with slightly different rules.
 *  The documentation of each field explains how it operates.
 * @implSpec This is a final, immutable and thread-safe enum.
 * @since 1.8
 */
export type ChronoField = {
  NANO_OF_SECOND: "NANO_OF_SECOND";
  NANO_OF_DAY: "NANO_OF_DAY";
  MICRO_OF_SECOND: "MICRO_OF_SECOND";
  MICRO_OF_DAY: "MICRO_OF_DAY";
  MILLI_OF_SECOND: "MILLI_OF_SECOND";
  MILLI_OF_DAY: "MILLI_OF_DAY";
  SECOND_OF_MINUTE: "SECOND_OF_MINUTE";
  SECOND_OF_DAY: "SECOND_OF_DAY";
  MINUTE_OF_HOUR: "MINUTE_OF_HOUR";
  MINUTE_OF_DAY: "MINUTE_OF_DAY";
  HOUR_OF_AMPM: "HOUR_OF_AMPM";
  CLOCK_HOUR_OF_AMPM: "CLOCK_HOUR_OF_AMPM";
  HOUR_OF_DAY: "HOUR_OF_DAY";
  CLOCK_HOUR_OF_DAY: "CLOCK_HOUR_OF_DAY";
  AMPM_OF_DAY: "AMPM_OF_DAY";
  DAY_OF_WEEK: "DAY_OF_WEEK";
  ALIGNED_DAY_OF_WEEK_IN_MONTH: "ALIGNED_DAY_OF_WEEK_IN_MONTH";
  ALIGNED_DAY_OF_WEEK_IN_YEAR: "ALIGNED_DAY_OF_WEEK_IN_YEAR";
  DAY_OF_MONTH: "DAY_OF_MONTH";
  DAY_OF_YEAR: "DAY_OF_YEAR";
  EPOCH_DAY: "EPOCH_DAY";
  ALIGNED_WEEK_OF_MONTH: "ALIGNED_WEEK_OF_MONTH";
  ALIGNED_WEEK_OF_YEAR: "ALIGNED_WEEK_OF_YEAR";
  MONTH_OF_YEAR: "MONTH_OF_YEAR";
  PROLEPTIC_MONTH: "PROLEPTIC_MONTH";
  YEAR_OF_ERA: "YEAR_OF_ERA";
  YEAR: "YEAR";
  ERA: "ERA";
  INSTANT_SECONDS: "INSTANT_SECONDS";
  OFFSET_SECONDS: "OFFSET_SECONDS";
};
