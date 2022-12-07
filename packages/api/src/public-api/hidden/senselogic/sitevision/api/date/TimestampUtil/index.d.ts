/**
 * Timestamp utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getTimestampUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Jimmy Roselin
 * @since Sitevision 4.5.4.1
 */

interface TimestampUtil {
  /**
   * Returns current timestamp.
   * @return a long representing the current time.
   */
  getTimestamp(): number;

  /**
   * Formats current timestamp.
   * @param aFormatPattern a date to string pattern according to SimpleDateFormat.
   * @return a formatted String representing current timestamp using Locale according to {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}. If aLocale can not be resolved Locale.ENGLISH is used. If aFormatPattern is not valid current timestamp is returned as String.
   */
  formatCurrent(aFormatPattern: java.lang.String): string;

  /**
   * Formats current timestamp using a specified Locale.
   * @param aFormatPattern a date to string pattern according to SimpleDateFormat.
   * @param aLocale a locale. If aLocale is null the current locale (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}) will be used. If aLocale can not be resolved Locale.ENGLISH will be used.
   * @return a formatted String representing current timestamp. If aFormatPattern is not valid current timestamp is returned as String.
   */
  formatCurrent(
    aFormatPattern: java.lang.String,
    aLocale: java.util.Locale
  ): string;

  /**
   * Formats a given timestamp.
   * @param aTimestamp a timestamp.
   * @param aFormatPattern a date to string pattern according to SimpleDateFormat.
   * @return a formatted String representing aTimestamp using Locale according to {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}. If aLocale can not be resolved Locale.ENGLISH is used. If aTimestamp is negative or aFormatPattern is not valid the given timestamp is returned as String.
   */
  format(aTimestamp: long, aFormatPattern: java.lang.String): string;

  /**
   * Formats a given timestamp using a specified Locale.
   * @param aTimestamp a timestamp.
   * @param aFormatPattern a date to string pattern according to SimpleDateFormat.
   * @param aLocale a locale. If aLocale is null the current locale (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}) will be used. If aLocale can not be resolved Locale.ENGLISH will be used.
   * @return a formatted String representing the aTimestamp. If aTimestamp is negative or aFormatPattern is not valid the given timestamp is returned as String.
   */
  format(
    aTimestamp: long,
    aFormatPattern: java.lang.String,
    aLocale: java.util.Locale
  ): string;

  /**
   * Converts a timestamp to a Date.
   * @param aTimestamp a timestamp.
   * @return the Date representing aTimestamp, or null if aTimestamp is negative.
   * @since Sitevision 4.5.5
   */
  toDate(aTimestamp: long): unknown;

  /**
   * Converts a Date to a timestamp.
   * @param aDate a Date.
   * @return the timestamp representing aDate, or -1 if aDate is null.
   * @since Sitevision 4.5.5
   */
  fromDate(aDate: java.util.Date): number;

  /**
   * Converts a timestamp to a Calendar.
   * @param aTimestamp a timestamp.
   * @return the Calendar representing aTimestamp, or null if aTimestamp is negative.
   * @since Sitevision 4.5.5
   */
  toCalendar(aTimestamp: long): unknown;

  /**
   * Converts a Calendar to a timestamp.
   * @param aCalendar a Calendar.
   * @return the timestamp representing aCalendar, or -1 if aCalendar is null.
   * @since Sitevision 4.5.5
   */
  fromCalendar(aCalendar: java.util.Calendar): number;

  /**
   * Converts a timestamp to a Instant.
   * @param aTimestamp a timestamp.
   * @return the Instant representing aTimestamp, or null if aTimestamp is negative.
   * @since Sitevision 4.5.5
   */
  toInstant(aTimestamp: long): unknown;

  /**
   * Converts a Instant to a timestamp.
   * @param aInstant a Instant.
   * @return aInstant timestamp representing aInstant, or -1 if aInstant is null.
   * @since Sitevision 4.5.5
   */
  fromInstant(aInstant: java.time.Instant): number;

  /**
   * Converts a timestamp to a LocalDateTime (using the system default ZoneId).
   * @param aTimestamp a timestamp.
   * @return the LocalDateTime representing aTimestamp, or null if aTimestamp is negative.
   * @since Sitevision 4.5.5
   */
  toLocalDateTime(aTimestamp: long): unknown;

  /**
   * Converts a LocalDateTime to a timestamp (using the system default ZoneId).
   * @param aLocalDateTime a Instant.
   * @return aInstant timestamp representing aLocalDateTime, or -1 if aLocalDateTime is null.
   * @since Sitevision 4.5.5
   */
  fromLocalDateTime(aLocalDateTime: java.time.LocalDateTime): number;
}
