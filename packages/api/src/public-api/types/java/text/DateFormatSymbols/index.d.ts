import type { Locale } from "../../util/Locale";
import type { String } from "../../lang/String";

import type { Object } from "../../lang/Object";

import type { Serializable } from "../../io/Serializable";
import type { Cloneable } from "../../lang/Cloneable";

/**
 * <code>DateFormatSymbols</code> is a public class for encapsulating
 *  localizable date-time formatting data, such as the names of the
 *  months, the names of the days of the week, and the time zone data.
 *  <code>SimpleDateFormat</code> uses
 *  <code>DateFormatSymbols</code> to encapsulate this information.
 *
 *  <p>
 *  Typically you shouldn't use <code>DateFormatSymbols</code> directly.
 *  Rather, you are encouraged to create a date-time formatter with the
 *  <code>DateFormat</code> class's factory methods: <code>getTimeInstance</code>,
 *  <code>getDateInstance</code>, or <code>getDateTimeInstance</code>.
 *  These methods automatically create a <code>DateFormatSymbols</code> for
 *  the formatter so that you don't have to. After the
 *  formatter is created, you may modify its format pattern using the
 *  <code>setPattern</code> method. For more information about
 *  creating formatters using <code>DateFormat</code>'s factory methods,
 *  see {@link DateFormat}.
 *
 *  <p>
 *  If you decide to create a date-time formatter with a specific
 *  format pattern for a specific locale, you can do so with:
 *  <blockquote>
 *  <pre>
 *  new SimpleDateFormat(aPattern, DateFormatSymbols.getInstance(aLocale)).
 *  </pre>
 *  </blockquote>
 *
 *  <p>
 *  <code>DateFormatSymbols</code> objects are cloneable. When you obtain
 *  a <code>DateFormatSymbols</code> object, feel free to modify the
 *  date-time formatting data. For instance, you can replace the localized
 *  date-time format pattern characters with the ones that you feel easy
 *  to remember. Or you can change the representative cities
 *  to your favorite ones.
 *
 *  <p>
 *  New <code>DateFormatSymbols</code> subclasses may be added to support
 *  <code>SimpleDateFormat</code> for date-time formatting for additional locales.
 * @see DateFormat
 * @see SimpleDateFormat
 * @see java.util.SimpleTimeZone
 * @author Chen-Lieh Huang
 */
export type DateFormatSymbols = Object &
  Serializable &
  Cloneable & {
    /**
     * Returns an array of all locales for which the
     *  <code>getInstance</code> methods of this class can return
     *  localized instances.
     *  The returned array represents the union of locales supported by the
     *  Java runtime and by installed
     *  {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
     *  implementations.  It must contain at least a <code>Locale</code>
     *  instance equal to {@link java.util.Locale#US Locale.US}.
     * @return An array of locales for which localized&#xA; <code>DateFormatSymbols</code> instances are available.
     * @since 1.6
     */
    getAvailableLocales(): Locale;

    /**
     * Gets the <code>DateFormatSymbols</code> instance for the default
     *  locale.  This method provides access to <code>DateFormatSymbols</code>
     *  instances for locales supported by the Java runtime itself as well
     *  as for those supported by installed
     *  {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
     *  implementations.
     *  <p>This is equivalent to calling {@link #getInstance(Locale)
     *      getInstance(Locale.getDefault(Locale.Category.FORMAT))}.
     * @see java.util.Locale#getDefault(java.util.Locale.Category)
     * @see java.util.Locale.Category#FORMAT
     * @return a <code>DateFormatSymbols</code> instance.
     * @since 1.6
     */
    getInstance(): DateFormatSymbols;

    /**
     * Gets the <code>DateFormatSymbols</code> instance for the specified
     *  locale.  This method provides access to <code>DateFormatSymbols</code>
     *  instances for locales supported by the Java runtime itself as well
     *  as for those supported by installed
     *  {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
     *  implementations.
     * @param locale the given locale.
     * @return a <code>DateFormatSymbols</code> instance.
     * @throws NullPointerException if <code>locale</code> is null
     * @since 1.6
     */
    getInstance(locale: Locale): DateFormatSymbols;

    /**
     * Gets era strings. For example: "AD" and "BC".
     * @return the era strings.
     */
    getEras(): string;

    /**
     * Sets era strings. For example: "AD" and "BC".
     * @param newEras the new era strings.
     */
    setEras(newEras: String | string[]): void;

    /**
     * Gets month strings. For example: "January", "February", etc.
     *
     *  <p>If the language requires different forms for formatting and
     *  stand-alone usages, this method returns month names in the
     *  formatting form. For example, the preferred month name for
     *  January in the Czech language is <em>ledna</em> in the
     *  formatting form, while it is <em>leden</em> in the stand-alone
     *  form. This method returns {@code "ledna"} in this case. Refer
     *  to the <a href="http://unicode.org/reports/tr35/#Calendar_Elements">
     *  Calendar Elements in the Unicode Locale Data Markup Language
     *  (LDML) specification</a> for more details.
     * @return the month strings.
     */
    getMonths(): string;

    /**
     * Sets month strings. For example: "January", "February", etc.
     * @param newMonths the new month strings.
     */
    setMonths(newMonths: String | string[]): void;

    /**
     * Gets short month strings. For example: "Jan", "Feb", etc.
     *
     *  <p>If the language requires different forms for formatting and
     *  stand-alone usages, This method returns short month names in
     *  the formatting form. For example, the preferred abbreviation
     *  for January in the Catalan language is <em>de gen.</em> in the
     *  formatting form, while it is <em>gen.</em> in the stand-alone
     *  form. This method returns {@code "de gen."} in this case. Refer
     *  to the <a href="http://unicode.org/reports/tr35/#Calendar_Elements">
     *  Calendar Elements in the Unicode Locale Data Markup Language
     *  (LDML) specification</a> for more details.
     * @return the short month strings.
     */
    getShortMonths(): string;

    /**
     * Sets short month strings. For example: "Jan", "Feb", etc.
     * @param newShortMonths the new short month strings.
     */
    setShortMonths(newShortMonths: String | string[]): void;

    /**
     * Gets weekday strings. For example: "Sunday", "Monday", etc.
     * @return the weekday strings. Use <code>Calendar.SUNDAY</code>,&#xA; <code>Calendar.MONDAY</code>, etc. to index the result array.
     */
    getWeekdays(): string;

    /**
     * Sets weekday strings. For example: "Sunday", "Monday", etc.
     * @param newWeekdays the new weekday strings. The array should&#xA; be indexed by <code>Calendar.SUNDAY</code>,&#xA; <code>Calendar.MONDAY</code>, etc.
     */
    setWeekdays(newWeekdays: String | string[]): void;

    /**
     * Gets short weekday strings. For example: "Sun", "Mon", etc.
     * @return the short weekday strings. Use <code>Calendar.SUNDAY</code>,&#xA; <code>Calendar.MONDAY</code>, etc. to index the result array.
     */
    getShortWeekdays(): string;

    /**
     * Sets short weekday strings. For example: "Sun", "Mon", etc.
     * @param newShortWeekdays the new short weekday strings. The array should&#xA; be indexed by <code>Calendar.SUNDAY</code>,&#xA; <code>Calendar.MONDAY</code>, etc.
     */
    setShortWeekdays(newShortWeekdays: String | string[]): void;

    /**
     * Gets ampm strings. For example: "AM" and "PM".
     * @return the ampm strings.
     */
    getAmPmStrings(): string;

    /**
     * Sets ampm strings. For example: "AM" and "PM".
     * @param newAmpms the new ampm strings.
     */
    setAmPmStrings(newAmpms: String | string[]): void;

    /**
     * Gets time zone strings.  Use of this method is discouraged; use
     *  {@link java.util.TimeZone#getDisplayName() TimeZone.getDisplayName()}
     *  instead.
     *  <p>
     *  The value returned is a
     *  two-dimensional array of strings of size <em>n</em> by <em>m</em>,
     *  where <em>m</em> is at least 5.  Each of the <em>n</em> rows is an
     *  entry containing the localized names for a single <code>TimeZone</code>.
     *  Each such row contains (with <code>i</code> ranging from
     *  0..<em>n</em>-1):
     *  <ul>
     *  <li><code>zoneStrings[i][0]</code> - time zone ID</li>
     *  <li><code>zoneStrings[i][1]</code> - long name of zone in standard
     *  time</li>
     *  <li><code>zoneStrings[i][2]</code> - short name of zone in
     *  standard time</li>
     *  <li><code>zoneStrings[i][3]</code> - long name of zone in daylight
     *  saving time</li>
     *  <li><code>zoneStrings[i][4]</code> - short name of zone in daylight
     *  saving time</li>
     *  </ul>
     *  The zone ID is <em>not</em> localized; it's one of the valid IDs of
     *  the {@link java.util.TimeZone TimeZone} class that are not
     *  <a href="../util/TimeZone.html#CustomID">custom IDs</a>.
     *  All other entries are localized names.  If a zone does not implement
     *  daylight saving time, the daylight saving time names should not be used.
     *  <p>
     *  If {@link #setZoneStrings(String[][]) setZoneStrings} has been called
     *  on this <code>DateFormatSymbols</code> instance, then the strings
     *  provided by that call are returned. Otherwise, the returned array
     *  contains names provided by the Java runtime and by installed
     *  {@link java.util.spi.TimeZoneNameProvider TimeZoneNameProvider}
     *  implementations.
     * @return the time zone strings.
     * @see #setZoneStrings(String[][])
     */
    getZoneStrings(): string;

    /**
     * Sets time zone strings.  The argument must be a
     *  two-dimensional array of strings of size <em>n</em> by <em>m</em>,
     *  where <em>m</em> is at least 5.  Each of the <em>n</em> rows is an
     *  entry containing the localized names for a single <code>TimeZone</code>.
     *  Each such row contains (with <code>i</code> ranging from
     *  0..<em>n</em>-1):
     *  <ul>
     *  <li><code>zoneStrings[i][0]</code> - time zone ID</li>
     *  <li><code>zoneStrings[i][1]</code> - long name of zone in standard
     *  time</li>
     *  <li><code>zoneStrings[i][2]</code> - short name of zone in
     *  standard time</li>
     *  <li><code>zoneStrings[i][3]</code> - long name of zone in daylight
     *  saving time</li>
     *  <li><code>zoneStrings[i][4]</code> - short name of zone in daylight
     *  saving time</li>
     *  </ul>
     *  The zone ID is <em>not</em> localized; it's one of the valid IDs of
     *  the {@link java.util.TimeZone TimeZone} class that are not
     *  <a href="../util/TimeZone.html#CustomID">custom IDs</a>.
     *  All other entries are localized names.
     * @param newZoneStrings the new time zone strings.
     * @throws IllegalArgumentException if the length of any row in&#xA; <code>newZoneStrings</code> is less than 5
     * @throws NullPointerException if <code>newZoneStrings</code> is null
     * @see #getZoneStrings()
     */
    setZoneStrings(newZoneStrings: String | string[][]): void;

    /**
     * Gets localized date-time pattern characters. For example: 'u', 't', etc.
     * @return the localized date-time pattern characters.
     */
    getLocalPatternChars(): string;

    /**
     * Sets localized date-time pattern characters. For example: 'u', 't', etc.
     * @param newLocalPatternChars the new localized date-time&#xA; pattern characters.
     */
    setLocalPatternChars(newLocalPatternChars: String | string): void;

    /**
 * Overrides Cloneable
  
    */
    clone(): unknown;

    /**
 * Override hashCode.
 *  Generates a hash code for the DateFormatSymbols object.
  
    */
    hashCode(): number;

    /**
 * Override equals
  
    */
    equals(obj: unknown): boolean;
  };
