/**
 * A day-of-week, such as 'Tuesday'.
 *  <p>
 *  {@code DayOfWeek} is an enum representing the 7 days of the week -
 *  Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.
 *  <p>
 *  In addition to the textual enum name, each day-of-week has an {@code int} value.
 *  The {@code int} value follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).
 *  It is recommended that applications use the enum rather than the {@code int} value
 *  to ensure code clarity.
 *  <p>
 *  This enum provides access to the localized textual form of the day-of-week.
 *  Some locales also assign different numeric values to the days, declaring
 *  Sunday to have the value 1, however this class provides no support for this.
 *  See {@link WeekFields} for localized week-numbering.
 *  <p>
 *  <b>Do not use {@code ordinal()} to obtain the numeric representation of {@code DayOfWeek}.
 *  Use {@code getValue()} instead.</b>
 *  <p>
 *  This enum represents a common concept that is found in many calendar systems.
 *  As such, this enum may be used by any calendar system that has the day-of-week
 *  concept defined exactly equivalent to the ISO calendar system.
 * @implSpec This is an immutable and thread-safe enum.
 * @since 1.8
 */
export type DayOfWeek = {
  MONDAY: "MONDAY";
  TUESDAY: "TUESDAY";
  WEDNESDAY: "WEDNESDAY";
  THURSDAY: "THURSDAY";
  FRIDAY: "FRIDAY";
  SATURDAY: "SATURDAY";
  SUNDAY: "SUNDAY";
};
