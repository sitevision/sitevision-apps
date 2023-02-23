/**
 * A month-of-year, such as 'July'.
 *  <p>
 *  {@code Month} is an enum representing the 12 months of the year -
 *  January, February, March, April, May, June, July, August, September, October,
 *  November and December.
 *  <p>
 *  In addition to the textual enum name, each month-of-year has an {@code int} value.
 *  The {@code int} value follows normal usage and the ISO-8601 standard,
 *  from 1 (January) to 12 (December). It is recommended that applications use the enum
 *  rather than the {@code int} value to ensure code clarity.
 *  <p>
 *  <b>Do not use {@code ordinal()} to obtain the numeric representation of {@code Month}.
 *  Use {@code getValue()} instead.</b>
 *  <p>
 *  This enum represents a common concept that is found in many calendar systems.
 *  As such, this enum may be used by any calendar system that has the month-of-year
 *  concept defined exactly equivalent to the ISO-8601 calendar system.
 * @implSpec This is an immutable and thread-safe enum.
 * @since 1.8
 */
export type Month = {
  JANUARY: "JANUARY";
  FEBRUARY: "FEBRUARY";
  MARCH: "MARCH";
  APRIL: "APRIL";
  MAY: "MAY";
  JUNE: "JUNE";
  JULY: "JULY";
  AUGUST: "AUGUST";
  SEPTEMBER: "SEPTEMBER";
  OCTOBER: "OCTOBER";
  NOVEMBER: "NOVEMBER";
  DECEMBER: "DECEMBER";
};
