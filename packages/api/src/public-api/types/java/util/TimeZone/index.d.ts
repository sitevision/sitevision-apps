import type { String } from "../../lang/String";
import type { Locale } from "../Locale";

import type { Date } from "../Date";
import type { ZoneId } from "../../time/ZoneId";
import type { Object } from "../../lang/Object";
import type { Serializable } from "../../io/Serializable";
import type { Cloneable } from "../../lang/Cloneable";

/**
 * <code>TimeZone</code> represents a time zone offset, and also figures out daylight
 *  savings.
 *
 *  <p>
 *  Typically, you get a <code>TimeZone</code> using <code>getDefault</code>
 *  which creates a <code>TimeZone</code> based on the time zone where the program
 *  is running. For example, for a program running in Japan, <code>getDefault</code>
 *  creates a <code>TimeZone</code> object based on Japanese Standard Time.
 *
 *  <p>
 *  You can also get a <code>TimeZone</code> using <code>getTimeZone</code>
 *  along with a time zone ID. For instance, the time zone ID for the
 *  U.S. Pacific Time zone is "America/Los_Angeles". So, you can get a
 *  U.S. Pacific Time <code>TimeZone</code> object with:
 *  <blockquote><pre>
 *  TimeZone tz = TimeZone.getTimeZone("America/Los_Angeles");
 *  </pre></blockquote>
 *  You can use the <code>getAvailableIDs</code> method to iterate through
 *  all the supported time zone IDs. You can then choose a
 *  supported ID to get a <code>TimeZone</code>.
 *  If the time zone you want is not represented by one of the
 *  supported IDs, then a custom time zone ID can be specified to
 *  produce a TimeZone. The syntax of a custom time zone ID is:
 *
 *  <blockquote><pre>
 *  <a name="CustomID"><i>CustomID:</i></a>
 *          <code>GMT</code> <i>Sign</i> <i>Hours</i> <code>:</code> <i>Minutes</i>
 *          <code>GMT</code> <i>Sign</i> <i>Hours</i> <i>Minutes</i>
 *          <code>GMT</code> <i>Sign</i> <i>Hours</i>
 *  <i>Sign:</i> one of
 *          <code>+ -</code>
 *  <i>Hours:</i>
 *          <i>Digit</i>
 *          <i>Digit</i> <i>Digit</i>
 *  <i>Minutes:</i>
 *          <i>Digit</i> <i>Digit</i>
 *  <i>Digit:</i> one of
 *          <code>0 1 2 3 4 5 6 7 8 9</code>
 *  </pre></blockquote>
 *
 *  <i>Hours</i> must be between 0 to 23 and <i>Minutes</i> must be
 *  between 00 to 59.  For example, "GMT+10" and "GMT+0010" mean ten
 *  hours and ten minutes ahead of GMT, respectively.
 *  <p>
 *  The format is locale independent and digits must be taken from the
 *  Basic Latin block of the Unicode standard. No daylight saving time
 *  transition schedule can be specified with a custom time zone ID. If
 *  the specified string doesn't match the syntax, <code>"GMT"</code>
 *  is used.
 *  <p>
 *  When creating a <code>TimeZone</code>, the specified custom time
 *  zone ID is normalized in the following syntax:
 *  <blockquote><pre>
 *  <a name="NormalizedCustomID"><i>NormalizedCustomID:</i></a>
 *          <code>GMT</code> <i>Sign</i> <i>TwoDigitHours</i> <code>:</code> <i>Minutes</i>
 *  <i>Sign:</i> one of
 *          <code>+ -</code>
 *  <i>TwoDigitHours:</i>
 *          <i>Digit</i> <i>Digit</i>
 *  <i>Minutes:</i>
 *          <i>Digit</i> <i>Digit</i>
 *  <i>Digit:</i> one of
 *          <code>0 1 2 3 4 5 6 7 8 9</code>
 *  </pre></blockquote>
 *  For example, TimeZone.getTimeZone("GMT-8").getID() returns "GMT-08:00".
 *
 *  <h3>Three-letter time zone IDs</h3>
 *
 *  For compatibility with JDK 1.1.x, some other three-letter time zone IDs
 *  (such as "PST", "CTT", "AST") are also supported. However, <strong>their
 *  use is deprecated</strong> because the same abbreviation is often used
 *  for multiple time zones (for example, "CST" could be U.S. "Central Standard
 *  Time" and "China Standard Time"), and the Java platform can then only
 *  recognize one of them.
 * @see Calendar
 * @see GregorianCalendar
 * @see SimpleTimeZone
 * @author Mark Davis, David Goldsmith, Chen-Lieh Huang, Alan Liu
 * @since JDK1.1
 */
export type TimeZone = Object &
  Serializable &
  Cloneable & {
    /**
     * Gets the time zone offset, for current date, modified in case of
     *  daylight savings. This is the offset to add to UTC to get local time.
     *  <p>
     *  This method returns a historically correct offset if an
     *  underlying <code>TimeZone</code> implementation subclass
     *  supports historical Daylight Saving Time schedule and GMT
     *  offset changes.
     * @param era the era of the given date.
     * @param year the year in the given date.
     * @param month the month in the given date.&#xA; Month is 0-based. e.g., 0 for January.
     * @param day the day-in-month of the given date.
     * @param dayOfWeek the day-of-week of the given date.
     * @param milliseconds the milliseconds in day in <em>standard</em>&#xA; local time.
     * @return the offset in milliseconds to add to GMT to get local time.
     * @see Calendar#ZONE_OFFSET
     * @see Calendar#DST_OFFSET
     */
    getOffset(
      era: number,
      year: number,
      month: number,
      day: number,
      dayOfWeek: number,
      milliseconds: number
    ): number;

    /**
     * Returns the offset of this time zone from UTC at the specified
     *  date. If Daylight Saving Time is in effect at the specified
     *  date, the offset value is adjusted with the amount of daylight
     *  saving.
     *  <p>
     *  This method returns a historically correct offset value if an
     *  underlying TimeZone implementation subclass supports historical
     *  Daylight Saving Time schedule and GMT offset changes.
     * @param date the date represented in milliseconds since January 1, 1970 00:00:00 GMT
     * @return the amount of time in milliseconds to add to UTC to get local time.
     * @see Calendar#ZONE_OFFSET
     * @see Calendar#DST_OFFSET
     * @since 1.4
     */
    getOffset(date: number): number;

    /**
     * Sets the base time zone offset to GMT.
     *  This is the offset to add to UTC to get local time.
     *  <p>
     *  If an underlying <code>TimeZone</code> implementation subclass
     *  supports historical GMT offset changes, the specified GMT
     *  offset is set as the latest GMT offset and the difference from
     *  the known latest GMT offset value is used to adjust all
     *  historical GMT offset values.
     * @param offsetMillis the given base time zone offset to GMT.
     */
    setRawOffset(offsetMillis: number): void;

    /**
     * Returns the amount of time in milliseconds to add to UTC to get
     *  standard time in this time zone. Because this value is not
     *  affected by daylight saving time, it is called <I>raw
     *  offset</I>.
     *  <p>
     *  If an underlying <code>TimeZone</code> implementation subclass
     *  supports historical GMT offset changes, the method returns the
     *  raw offset value of the current date. In Honolulu, for example,
     *  its raw offset changed from GMT-10:30 to GMT-10:00 in 1947, and
     *  this method always returns -36000000 milliseconds (i.e., -10
     *  hours).
     * @return the amount of raw offset time in milliseconds to add to UTC.
     * @see Calendar#ZONE_OFFSET
     */
    getRawOffset(): number;

    /**
     * Gets the ID of this time zone.
     * @return the ID of this time zone.
     */
    getID(): string;

    /**
     * Sets the time zone ID. This does not change any other data in
     *  the time zone object.
     * @param ID the new time zone ID.
     */
    setID(ID: String | string): void;

    /**
     * Returns a long standard time name of this {@code TimeZone} suitable for
     *  presentation to the user in the default locale.
     *
     *  <p>This method is equivalent to:
     *  <blockquote><pre>
     *  getDisplayName(false, {@link #LONG},
     *                 Locale.getDefault({@link Locale.Category#DISPLAY}))
     *  </pre></blockquote>
     * @return the human-readable name of this time zone in the default locale.
     * @since 1.2
     * @see #getDisplayName(boolean, int, Locale)
     * @see Locale#getDefault(Locale.Category)
     * @see Locale.Category
     */
    getDisplayName(): string;

    /**
     * Returns a long standard time name of this {@code TimeZone} suitable for
     *  presentation to the user in the specified {@code locale}.
     *
     *  <p>This method is equivalent to:
     *  <blockquote><pre>
     *  getDisplayName(false, {@link #LONG}, locale)
     *  </pre></blockquote>
     * @param locale the locale in which to supply the display name.
     * @return the human-readable name of this time zone in the given locale.
     * @throws NullPointerException if {@code locale} is {@code null}.
     * @since 1.2
     * @see #getDisplayName(boolean, int, Locale)
     */
    getDisplayName(locale: Locale): string;

    /**
     * Returns a name in the specified {@code style} of this {@code TimeZone}
     *  suitable for presentation to the user in the default locale. If the
     *  specified {@code daylight} is {@code true}, a Daylight Saving Time name
     *  is returned (even if this {@code TimeZone} doesn't observe Daylight Saving
     *  Time). Otherwise, a Standard Time name is returned.
     *
     *  <p>This method is equivalent to:
     *  <blockquote><pre>
     *  getDisplayName(daylight, style,
     *                 Locale.getDefault({@link Locale.Category#DISPLAY}))
     *  </pre></blockquote>
     * @param daylight {@code true} specifying a Daylight Saving Time name, or&#xA; {@code false} specifying a Standard Time name
     * @param style either {@link #LONG} or {@link #SHORT}
     * @return the human-readable name of this time zone in the default locale.
     * @throws IllegalArgumentException if {@code style} is invalid.
     * @since 1.2
     * @see #getDisplayName(boolean, int, Locale)
     * @see Locale#getDefault(Locale.Category)
     * @see Locale.Category
     * @see java.text.DateFormatSymbols#getZoneStrings()
     */
    getDisplayName(daylight: boolean, style: number): string;

    /**
     * Returns a name in the specified {@code style} of this {@code TimeZone}
     *  suitable for presentation to the user in the specified {@code
     *  locale}. If the specified {@code daylight} is {@code true}, a Daylight
     *  Saving Time name is returned (even if this {@code TimeZone} doesn't
     *  observe Daylight Saving Time). Otherwise, a Standard Time name is
     *  returned.
     *
     *  <p>When looking up a time zone name, the {@linkplain
     *  ResourceBundle.Control#getCandidateLocales(String,Locale) default
     *  <code>Locale</code> search path of <code>ResourceBundle</code>} derived
     *  from the specified {@code locale} is used. (No {@linkplain
     *  ResourceBundle.Control#getFallbackLocale(String,Locale) fallback
     *  <code>Locale</code>} search is performed.) If a time zone name in any
     *  {@code Locale} of the search path, including {@link Locale#ROOT}, is
     *  found, the name is returned. Otherwise, a string in the
     *  <a href="#NormalizedCustomID">normalized custom ID format</a> is returned.
     * @param daylight {@code true} specifying a Daylight Saving Time name, or&#xA; {@code false} specifying a Standard Time name
     * @param style either {@link #LONG} or {@link #SHORT}
     * @param locale the locale in which to supply the display name.
     * @return the human-readable name of this time zone in the given locale.
     * @throws IllegalArgumentException if {@code style} is invalid.
     * @throws NullPointerException if {@code locale} is {@code null}.
     * @since 1.2
     * @see java.text.DateFormatSymbols#getZoneStrings()
     */
    getDisplayName(daylight: boolean, style: number, locale: Locale): string;

    /**
     * Returns the amount of time to be added to local standard time
     *  to get local wall clock time.
     *
     *  <p>The default implementation returns 3600000 milliseconds
     *  (i.e., one hour) if a call to {@link #useDaylightTime()}
     *  returns {@code true}. Otherwise, 0 (zero) is returned.
     *
     *  <p>If an underlying {@code TimeZone} implementation subclass
     *  supports historical and future Daylight Saving Time schedule
     *  changes, this method returns the amount of saving time of the
     *  last known Daylight Saving Time rule that can be a future
     *  prediction.
     *
     *  <p>If the amount of saving time at any given time stamp is
     *  required, construct a {@link Calendar} with this {@code
     *  TimeZone} and the time stamp, and call {@link Calendar#get(int)
     *  Calendar.get}{@code (}{@link Calendar#DST_OFFSET}{@code )}.
     * @return the amount of saving time in milliseconds
     * @since 1.4
     * @see #inDaylightTime(Date)
     * @see #getOffset(long)
     * @see #getOffset(int,int,int,int,int,int)
     * @see Calendar#ZONE_OFFSET
     */
    getDSTSavings(): number;

    /**
     * Queries if this {@code TimeZone} uses Daylight Saving Time.
     *
     *  <p>If an underlying {@code TimeZone} implementation subclass
     *  supports historical and future Daylight Saving Time schedule
     *  changes, this method refers to the last known Daylight Saving Time
     *  rule that can be a future prediction and may not be the same as
     *  the current rule. Consider calling {@link #observesDaylightTime()}
     *  if the current rule should also be taken into account.
     * @return {@code true} if this {@code TimeZone} uses Daylight Saving Time,&#xA; {@code false}, otherwise.
     * @see #inDaylightTime(Date)
     * @see Calendar#DST_OFFSET
     */
    useDaylightTime(): boolean;

    /**
     * Returns {@code true} if this {@code TimeZone} is currently in
     *  Daylight Saving Time, or if a transition from Standard Time to
     *  Daylight Saving Time occurs at any future time.
     *
     *  <p>The default implementation returns {@code true} if
     *  {@code useDaylightTime()} or {@code inDaylightTime(new Date())}
     *  returns {@code true}.
     * @return {@code true} if this {@code TimeZone} is currently in&#xA; Daylight Saving Time, or if a transition from Standard Time to&#xA; Daylight Saving Time occurs at any future time; {@code false}&#xA; otherwise.
     * @since 1.7
     * @see #useDaylightTime()
     * @see #inDaylightTime(Date)
     * @see Calendar#DST_OFFSET
     */
    observesDaylightTime(): boolean;

    /**
     * Queries if the given {@code date} is in Daylight Saving Time in
     *  this time zone.
     * @param date the given Date.
     * @return {@code true} if the given date is in Daylight Saving Time,&#xA; {@code false}, otherwise.
     */
    inDaylightTime(date: Date): boolean;

    /**
     * Gets the <code>TimeZone</code> for the given ID.
     * @param ID the ID for a <code>TimeZone</code>, either an abbreviation&#xA; such as "PST", a full name such as "America/Los_Angeles", or a custom&#xA; ID such as "GMT-8:00". Note that the support of abbreviations is&#xA; for JDK 1.1.x compatibility only and full names should be used.
     * @return the specified <code>TimeZone</code>, or the GMT zone if the given ID&#xA; cannot be understood.
     */
    getTimeZone(ID: String | string): TimeZone;

    /**
     * Gets the {@code TimeZone} for the given {@code zoneId}.
     * @param zoneId a {@link ZoneId} from which the time zone ID is obtained
     * @return the specified {@code TimeZone}, or the GMT zone if the given ID&#xA; cannot be understood.
     * @throws NullPointerException if {@code zoneId} is {@code null}
     * @since 1.8
     */
    getTimeZone(zoneId: ZoneId): TimeZone;

    /**
     * Converts this {@code TimeZone} object to a {@code ZoneId}.
     * @return a {@code ZoneId} representing the same time zone as this&#xA; {@code TimeZone}
     * @since 1.8
     */
    toZoneId(): ZoneId;

    /**
     * Gets the available IDs according to the given time zone offset in milliseconds.
     * @param rawOffset the given time zone GMT offset in milliseconds.
     * @return an array of IDs, where the time zone for that ID has&#xA; the specified GMT offset. For example, "America/Phoenix" and "America/Denver"&#xA; both have GMT-07:00, but differ in daylight saving behavior.
     * @see #getRawOffset()
     */
    getAvailableIDs(rawOffset: number): string;

    /**
     * Gets all the available IDs supported.
     * @return an array of IDs.
     */
    getAvailableIDs(): string;

    /**
     * Gets the default {@code TimeZone} of the Java virtual machine. If the
     *  cached default {@code TimeZone} is available, its clone is returned.
     *  Otherwise, the method takes the following steps to determine the default
     *  time zone.
     *
     *  <ul>
     *  <li>Use the {@code user.timezone} property value as the default
     *  time zone ID if it's available.</li>
     *  <li>Detect the platform time zone ID. The source of the
     *  platform time zone and ID mapping may vary with implementation.</li>
     *  <li>Use {@code GMT} as the last resort if the given or detected
     *  time zone ID is unknown.</li>
     *  </ul>
     *
     *  <p>The default {@code TimeZone} created from the ID is cached,
     *  and its clone is returned. The {@code user.timezone} property
     *  value is set to the ID upon return.
     * @return the default {@code TimeZone}
     * @see #setDefault(TimeZone)
     */
    getDefault(): TimeZone;

    /**
     * Sets the {@code TimeZone} that is returned by the {@code getDefault}
     *  method. {@code zone} is cached. If {@code zone} is null, the cached
     *  default {@code TimeZone} is cleared. This method doesn't change the value
     *  of the {@code user.timezone} property.
     * @param zone the new default {@code TimeZone}, or null
     * @throws SecurityException if the security manager's {@code checkPermission}&#xA; denies {@code PropertyPermission("user.timezone",&#xA; "write")}
     * @see #getDefault
     * @see PropertyPermission
     */
    setDefault(zone: TimeZone): void;

    /**
     * Returns true if this zone has the same rule and offset as another zone.
     *  That is, if this zone differs only in ID, if at all.  Returns false
     *  if the other zone is null.
     * @param other the <code>TimeZone</code> object to be compared with
     * @return true if the other zone is not null and is the same as this one,&#xA; with the possible exception of the ID
     * @since 1.2
     */
    hasSameRules(other: TimeZone): boolean;

    /**
     * Creates a copy of this <code>TimeZone</code>.
     * @return a clone of this <code>TimeZone</code>
     */
    clone(): unknown;

    /**
     * A style specifier for <code>getDisplayName()</code> indicating
     *  a short name, such as "PST."
     * @see #LONG
     * @since 1.2
     */
    SHORT: number;

    /**
     * A style specifier for <code>getDisplayName()</code> indicating
     *  a long name, such as "Pacific Standard Time."
     * @see #SHORT
     * @since 1.2
     */
    LONG: number;
  };
