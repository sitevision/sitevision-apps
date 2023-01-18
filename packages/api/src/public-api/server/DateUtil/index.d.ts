/**
 * Date utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getDateUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Albin Öhrn
 * @since Sitevision 3.5
 */
export interface DateUtil {
  /**
   * Formats a date according to the ISO8601 specification.
   *
   * <p>
   *    <em>An example:</em> A date representing february 3, 2001 at 04:45 in an +1h UTC timezone offset would be
   *    ISO8601 formatted as <code>2001-02-03T04:05+01:00</code>.
   * </p>
   * @param aDate a <code>Date</code> that needs to be formatted
   * @return the date formatted as a ISO8601 string, or <code>null</code> if <code>aDate</code> is <code>null</code>
   */
  getDateAsISO8601String(aDate: unknown): string;

  /**
   * Formats a calendar according to the ISO8601 specification.
   *
   * <p>
   *    <em>An example:</em> A calendar representing february 3, 2001 at 04:45 in an +1h UTC timezone offset would be
   *    ISO8601 formatted as <code>2001-02-03T04:05+01:00</code>.
   * </p>
   * @param aCalendar a <code>Calendar</code> that needs to be formatted
   * @return aString the calendar date formatted as a ISO8601 string, or <code>null</code> if <code>aCalendar</code> is <code>null</code>
   */
  getCalendarAsISO8601String(aCalendar: unknown): string;

  /**
   * Gets the date format pattern used in the Sitevision editor for a specific Locale.
   * @param aLocale the <code>Locale</code> that specifies the date format pattern
   * @return the date format pattern used in the Sitevision editor that corresponds to <code>aLocale</code>. If <code>aLocale</code> is <code>null</code> then the current locale (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}) is used to locate the format pattern. If no pattern exist for <code>aLocale</code> then the pattern that corresponds to <code>Locale.ENGLISH</code> will be returned.
   */
  getEditorFormatPattern(aLocale: unknown): string;

  /**
   * Formats a Date according to a <code>SimpleDateFormat</code> pattern.
   *
   * <p>
   *    <em>Note!</em> The current locale as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()} will be used.
   *    If current locale is unavailable, <code>Locale.getDefault()</code> will be used.
   * </p>
   * @param aFormatPattern date to string pattern according to SimpleDateFormat. Default pattern will be used if aFormatPattern is null or blank
   * @param aDate the Date
   * @return returns a String representation of aDate according to aFormatPattern (and resolved Locale). Returns null if formatting fails or aDate is null
   * @see #getDateAsString(String, Date, Locale)
   */
  getDateAsString(aFormatPattern: string, aDate: unknown): string;

  /**
   * Formats a Date according to a <code>SimpleDateFormat</code> pattern using a given Locale.
   * @param aFormatPattern date to string pattern according to SimpleDateFormat. Default pattern will be used if aFormatPattern is null or blank
   * @param aDate the Date
   * @param aLocale the Locale
   * @return returns a String representation of aDate according to aFormatPattern (and resolved Locale). Returns null if formatting fails or aDate or aLocale is null
   * @since Sitevision 8.2
   */
  getDateAsString(
    aFormatPattern: string,
    aDate: unknown,
    aLocale: unknown
  ): string;

  /**
   * Formats the date of a Calendar according to a <code>SimpleDateFormat</code> pattern.
   *
   * <p>
   *    <em>Note!</em> The current locale as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()} will be used.
   *    If current locale is unavailable, <code>Locale.getDefault()</code> will be used.
   * </p>
   * @param aFormatPattern date to string pattern according to SimpleDateFormat. Default pattern will be used if aFormatPattern is null or blank
   * @param aCalendar the Calendar
   * @return returns a String representation of aCalendar according to aFormatPattern (and resolved Locale). Returns null if formatting fails or aCalendar is null
   * @see #getCalendarAsString(String, Calendar, Locale)
   */
  getCalendarAsString(aFormatPattern: string, aCalendar: unknown): string;

  /**
   * Formats the date of a Calendar according to a <code>SimpleDateFormat</code> pattern and a given Locale.
   * @param aFormatPattern date to string pattern according to SimpleDateFormat. Default pattern will be used if aFormatPattern is null or blank
   * @param aCalendar the Calendar
   * @param aLocale the Locale
   * @return returns a String representation of aCalendar according to aFormatPattern (and resolved Locale). Returns null if formatting fails or aCalendar or aLocale is null
   * @since Sitevision 8.2
   */
  getCalendarAsString(
    aFormatPattern: string,
    aCalendar: unknown,
    aLocale: unknown
  ): string;

  /**
   * Converts a Date to a Calendar.
   * @param aDate a Date
   * @return a Calendar representing aDate, or null if aDate is null
   * @since Sitevision 4.5.5
   */
  toCalendar(aDate: unknown): unknown;

  /**
   * Converts a Calendar to a Date.
   * @param aCalendar a Calendar
   * @return a Date representing aCalendar, or null if aCalendar is null
   * @since Sitevision 4.5.5
   */
  toDate(aCalendar: unknown): unknown;

  /**
   * Converts a date string to a Date using a <code>SimpleDateFormat</code> pattern.
   *
   * <p>
   *    <em>Note!</em> The current locale as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()} will be used.
   *    If current locale is unavailable, <code>Locale.getDefault()</code> will be used.
   * </p>
   * @param aDateStr the string representation of a Date
   * @param aFormatPattern string to date pattern according to SimpleDateFormat
   * @return a Date representation of aDateStr, or null if parsing fails or any method argument (aDateStr, aFormatPattern) is null or blank
   * @since Sitevision 5.1
   * @see #parseDate(String, String, Locale)
   */
  parseDate(aDateStr: string, aFormatPattern: string): unknown;

  /**
   * Converts a date string to a Date using a <code>SimpleDateFormat</code> pattern and a given Locale.
   * @param aDateStr the string representation of a Date
   * @param aFormatPattern string to date pattern according to SimpleDateFormat
   * @param aLocale the Locale
   * @return a Date representation of aDateStr, or null if parsing fails or any method argument (aDateStr, aFormatPattern, aLocale) is null or blank
   * @since Sitevision 8.2
   */
  parseDate(
    aDateStr: string,
    aFormatPattern: string,
    aLocale: unknown
  ): unknown;
}

declare namespace DateUtil {}

declare var dateUtil: DateUtil;

export = dateUtil;
