/**
 * Enumeration of the style of a localized date, time or date-time formatter.
 *  <p>
 *  These styles are used when obtaining a date-time style from configuration.
 *  See {@link DateTimeFormatter} and {@link DateTimeFormatterBuilder} for usage.
 * @implSpec This is an immutable and thread-safe enum.
 * @since 1.8
 */
export type FormatStyle = {
  FULL: "FULL";
  LONG: "LONG";
  MEDIUM: "MEDIUM";
  SHORT: "SHORT";
};
