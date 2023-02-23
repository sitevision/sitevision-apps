import type { TimeZone } from "../TimeZone";
import type { Locale } from "../Locale";

import type { Date } from "../Date";

import type { String } from "../../lang/String";
import type { Map } from "../Map";
import type { Set } from "../Set";
import type { Object } from "../../lang/Object";
import type { Instant } from "../../time/Instant";
import type { Serializable } from "../../io/Serializable";
import type { Cloneable } from "../../lang/Cloneable";
import type { Comparable } from "../../lang/Comparable";

/**
 * The <code>Calendar</code> class is an abstract class that provides methods
 *  for converting between a specific instant in time and a set of {@link
 *  #fields calendar fields} such as <code>YEAR</code>, <code>MONTH</code>,
 *  <code>DAY_OF_MONTH</code>, <code>HOUR</code>, and so on, and for
 *  manipulating the calendar fields, such as getting the date of the next
 *  week. An instant in time can be represented by a millisecond value that is
 *  an offset from the <a name="Epoch"><em>Epoch</em></a>, January 1, 1970
 *  00:00:00.000 GMT (Gregorian).
 *
 *  <p>The class also provides additional fields and methods for
 *  implementing a concrete calendar system outside the package. Those
 *  fields and methods are defined as <code>protected</code>.
 *
 *  <p>
 *  Like other locale-sensitive classes, <code>Calendar</code> provides a
 *  class method, <code>getInstance</code>, for getting a generally useful
 *  object of this type. <code>Calendar</code>'s <code>getInstance</code> method
 *  returns a <code>Calendar</code> object whose
 *  calendar fields have been initialized with the current date and time:
 *  <blockquote>
 *  <pre>
 *      Calendar rightNow = Calendar.getInstance();
 *  </pre>
 *  </blockquote>
 *
 *  <p>A <code>Calendar</code> object can produce all the calendar field values
 *  needed to implement the date-time formatting for a particular language and
 *  calendar style (for example, Japanese-Gregorian, Japanese-Traditional).
 *  <code>Calendar</code> defines the range of values returned by
 *  certain calendar fields, as well as their meaning.  For example,
 *  the first month of the calendar system has value <code>MONTH ==
 *  JANUARY</code> for all calendars.  Other values are defined by the
 *  concrete subclass, such as <code>ERA</code>.  See individual field
 *  documentation and subclass documentation for details.
 *
 *  <h3>Getting and Setting Calendar Field Values</h3>
 *
 *  <p>The calendar field values can be set by calling the <code>set</code>
 *  methods. Any field values set in a <code>Calendar</code> will not be
 *  interpreted until it needs to calculate its time value (milliseconds from
 *  the Epoch) or values of the calendar fields. Calling the
 *  <code>get</code>, <code>getTimeInMillis</code>, <code>getTime</code>,
 *  <code>add</code> and <code>roll</code> involves such calculation.
 *
 *  <h4>Leniency</h4>
 *
 *  <p><code>Calendar</code> has two modes for interpreting the calendar
 *  fields, <em>lenient</em> and <em>non-lenient</em>.  When a
 *  <code>Calendar</code> is in lenient mode, it accepts a wider range of
 *  calendar field values than it produces.  When a <code>Calendar</code>
 *  recomputes calendar field values for return by <code>get()</code>, all of
 *  the calendar fields are normalized. For example, a lenient
 *  <code>GregorianCalendar</code> interprets <code>MONTH == JANUARY</code>,
 *  <code>DAY_OF_MONTH == 32</code> as February 1.
 *
 *  <p>When a <code>Calendar</code> is in non-lenient mode, it throws an
 *  exception if there is any inconsistency in its calendar fields. For
 *  example, a <code>GregorianCalendar</code> always produces
 *  <code>DAY_OF_MONTH</code> values between 1 and the length of the month. A
 *  non-lenient <code>GregorianCalendar</code> throws an exception upon
 *  calculating its time or calendar field values if any out-of-range field
 *  value has been set.
 *
 *  <h4><a name="first_week">First Week</a></h4>
 *
 *  <code>Calendar</code> defines a locale-specific seven day week using two
 *  parameters: the first day of the week and the minimal days in first week
 *  (from 1 to 7).  These numbers are taken from the locale resource data when a
 *  <code>Calendar</code> is constructed.  They may also be specified explicitly
 *  through the methods for setting their values.
 *
 *  <p>When setting or getting the <code>WEEK_OF_MONTH</code> or
 *  <code>WEEK_OF_YEAR</code> fields, <code>Calendar</code> must determine the
 *  first week of the month or year as a reference point.  The first week of a
 *  month or year is defined as the earliest seven day period beginning on
 *  <code>getFirstDayOfWeek()</code> and containing at least
 *  <code>getMinimalDaysInFirstWeek()</code> days of that month or year.  Weeks
 *  numbered ..., -1, 0 precede the first week; weeks numbered 2, 3,... follow
 *  it.  Note that the normalized numbering returned by <code>get()</code> may be
 *  different.  For example, a specific <code>Calendar</code> subclass may
 *  designate the week before week 1 of a year as week <code><i>n</i></code> of
 *  the previous year.
 *
 *  <h4>Calendar Fields Resolution</h4>
 *
 *  When computing a date and time from the calendar fields, there
 *  may be insufficient information for the computation (such as only
 *  year and month with no day of month), or there may be inconsistent
 *  information (such as Tuesday, July 15, 1996 (Gregorian) -- July 15,
 *  1996 is actually a Monday). <code>Calendar</code> will resolve
 *  calendar field values to determine the date and time in the
 *  following way.
 *
 *  <p><a name="resolution">If there is any conflict in calendar field values,
 *  <code>Calendar</code> gives priorities to calendar fields that have been set
 *  more recently.</a> The following are the default combinations of the
 *  calendar fields. The most recent combination, as determined by the
 *  most recently set single field, will be used.
 *
 *  <p><a name="date_resolution">For the date fields</a>:
 *  <blockquote>
 *  <pre>
 *  YEAR + MONTH + DAY_OF_MONTH
 *  YEAR + MONTH + WEEK_OF_MONTH + DAY_OF_WEEK
 *  YEAR + MONTH + DAY_OF_WEEK_IN_MONTH + DAY_OF_WEEK
 *  YEAR + DAY_OF_YEAR
 *  YEAR + DAY_OF_WEEK + WEEK_OF_YEAR
 *  </pre></blockquote>
 *
 *  <a name="time_resolution">For the time of day fields</a>:
 *  <blockquote>
 *  <pre>
 *  HOUR_OF_DAY
 *  AM_PM + HOUR
 *  </pre></blockquote>
 *
 *  <p>If there are any calendar fields whose values haven't been set in the selected
 *  field combination, <code>Calendar</code> uses their default values. The default
 *  value of each field may vary by concrete calendar systems. For example, in
 *  <code>GregorianCalendar</code>, the default of a field is the same as that
 *  of the start of the Epoch: i.e., <code>YEAR = 1970</code>, <code>MONTH =
 *  JANUARY</code>, <code>DAY_OF_MONTH = 1</code>, etc.
 *
 *  <p>
 *  <strong>Note:</strong> There are certain possible ambiguities in
 *  interpretation of certain singular times, which are resolved in the
 *  following ways:
 *  <ol>
 *      <li> 23:59 is the last minute of the day and 00:00 is the first
 *           minute of the next day. Thus, 23:59 on Dec 31, 1999 &lt; 00:00 on
 *           Jan 1, 2000 &lt; 00:01 on Jan 1, 2000.
 *
 *      <li> Although historically not precise, midnight also belongs to "am",
 *           and noon belongs to "pm", so on the same day,
 *           12:00 am (midnight) &lt; 12:01 am, and 12:00 pm (noon) &lt; 12:01 pm
 *  </ol>
 *
 *  <p>
 *  The date or time format strings are not part of the definition of a
 *  calendar, as those must be modifiable or overridable by the user at
 *  runtime. Use {@link DateFormat}
 *  to format dates.
 *
 *  <h4>Field Manipulation</h4>
 *
 *  The calendar fields can be changed using three methods:
 *  <code>set()</code>, <code>add()</code>, and <code>roll()</code>.
 *
 *  <p><strong><code>set(f, value)</code></strong> changes calendar field
 *  <code>f</code> to <code>value</code>.  In addition, it sets an
 *  internal member variable to indicate that calendar field <code>f</code> has
 *  been changed. Although calendar field <code>f</code> is changed immediately,
 *  the calendar's time value in milliseconds is not recomputed until the next call to
 *  <code>get()</code>, <code>getTime()</code>, <code>getTimeInMillis()</code>,
 *  <code>add()</code>, or <code>roll()</code> is made. Thus, multiple calls to
 *  <code>set()</code> do not trigger multiple, unnecessary
 *  computations. As a result of changing a calendar field using
 *  <code>set()</code>, other calendar fields may also change, depending on the
 *  calendar field, the calendar field value, and the calendar system. In addition,
 *  <code>get(f)</code> will not necessarily return <code>value</code> set by
 *  the call to the <code>set</code> method
 *  after the calendar fields have been recomputed. The specifics are determined by
 *  the concrete calendar class.</p>
 *
 *  <p><em>Example</em>: Consider a <code>GregorianCalendar</code>
 *  originally set to August 31, 1999. Calling <code>set(Calendar.MONTH,
 *  Calendar.SEPTEMBER)</code> sets the date to September 31,
 *  1999. This is a temporary internal representation that resolves to
 *  October 1, 1999 if <code>getTime()</code>is then called. However, a
 *  call to <code>set(Calendar.DAY_OF_MONTH, 30)</code> before the call to
 *  <code>getTime()</code> sets the date to September 30, 1999, since
 *  no recomputation occurs after <code>set()</code> itself.</p>
 *
 *  <p><strong><code>add(f, delta)</code></strong> adds <code>delta</code>
 *  to field <code>f</code>.  This is equivalent to calling <code>set(f,
 *  get(f) + delta)</code> with two adjustments:</p>
 *
 *  <blockquote>
 *    <p><strong>Add rule 1</strong>. The value of field <code>f</code>
 *    after the call minus the value of field <code>f</code> before the
 *    call is <code>delta</code>, modulo any overflow that has occurred in
 *    field <code>f</code>. Overflow occurs when a field value exceeds its
 *    range and, as a result, the next larger field is incremented or
 *    decremented and the field value is adjusted back into its range.</p>
 *
 *    <p><strong>Add rule 2</strong>. If a smaller field is expected to be
 *    invariant, but it is impossible for it to be equal to its
 *    prior value because of changes in its minimum or maximum after field
 *    <code>f</code> is changed or other constraints, such as time zone
 *    offset changes, then its value is adjusted to be as close
 *    as possible to its expected value. A smaller field represents a
 *    smaller unit of time. <code>HOUR</code> is a smaller field than
 *    <code>DAY_OF_MONTH</code>. No adjustment is made to smaller fields
 *    that are not expected to be invariant. The calendar system
 *    determines what fields are expected to be invariant.</p>
 *  </blockquote>
 *
 *  <p>In addition, unlike <code>set()</code>, <code>add()</code> forces
 *  an immediate recomputation of the calendar's milliseconds and all
 *  fields.</p>
 *
 *  <p><em>Example</em>: Consider a <code>GregorianCalendar</code>
 *  originally set to August 31, 1999. Calling <code>add(Calendar.MONTH,
 *  13)</code> sets the calendar to September 30, 2000. <strong>Add rule
 *  1</strong> sets the <code>MONTH</code> field to September, since
 *  adding 13 months to August gives September of the next year. Since
 *  <code>DAY_OF_MONTH</code> cannot be 31 in September in a
 *  <code>GregorianCalendar</code>, <strong>add rule 2</strong> sets the
 *  <code>DAY_OF_MONTH</code> to 30, the closest possible value. Although
 *  it is a smaller field, <code>DAY_OF_WEEK</code> is not adjusted by
 *  rule 2, since it is expected to change when the month changes in a
 *  <code>GregorianCalendar</code>.</p>
 *
 *  <p><strong><code>roll(f, delta)</code></strong> adds
 *  <code>delta</code> to field <code>f</code> without changing larger
 *  fields. This is equivalent to calling <code>add(f, delta)</code> with
 *  the following adjustment:</p>
 *
 *  <blockquote>
 *    <p><strong>Roll rule</strong>. Larger fields are unchanged after the
 *    call. A larger field represents a larger unit of
 *    time. <code>DAY_OF_MONTH</code> is a larger field than
 *    <code>HOUR</code>.</p>
 *  </blockquote>
 *
 *  <p><em>Example</em>: See {@link java.util.GregorianCalendar#roll(int, int)}.
 *
 *  <p><strong>Usage model</strong>. To motivate the behavior of
 *  <code>add()</code> and <code>roll()</code>, consider a user interface
 *  component with increment and decrement buttons for the month, day, and
 *  year, and an underlying <code>GregorianCalendar</code>. If the
 *  interface reads January 31, 1999 and the user presses the month
 *  increment button, what should it read? If the underlying
 *  implementation uses <code>set()</code>, it might read March 3, 1999. A
 *  better result would be February 28, 1999. Furthermore, if the user
 *  presses the month increment button again, it should read March 31,
 *  1999, not March 28, 1999. By saving the original date and using either
 *  <code>add()</code> or <code>roll()</code>, depending on whether larger
 *  fields should be affected, the user interface can behave as most users
 *  will intuitively expect.</p>
 * @see java.lang.System#currentTimeMillis()
 * @see Date
 * @see GregorianCalendar
 * @see TimeZone
 * @see java.text.DateFormat
 * @author Mark Davis, David Goldsmith, Chen-Lieh Huang, Alan Liu
 * @since JDK1.1
 */
export type Calendar = Object &
  Serializable &
  Cloneable &
  Comparable & {
    /**
     * Gets a calendar using the default time zone and locale. The
     *  <code>Calendar</code> returned is based on the current time
     *  in the default time zone with the default
     *  {@link Locale.Category#FORMAT FORMAT} locale.
     * @return a Calendar.
     */
    getInstance(): Calendar;

    /**
     * Gets a calendar using the specified time zone and default locale.
     *  The <code>Calendar</code> returned is based on the current time
     *  in the given time zone with the default
     *  {@link Locale.Category#FORMAT FORMAT} locale.
     * @param zone the time zone to use
     * @return a Calendar.
     */
    getInstance(zone: TimeZone): Calendar;

    /**
     * Gets a calendar using the default time zone and specified locale.
     *  The <code>Calendar</code> returned is based on the current time
     *  in the default time zone with the given locale.
     * @param aLocale the locale for the week data
     * @return a Calendar.
     */
    getInstance(aLocale: Locale): Calendar;

    /**
     * Gets a calendar with the specified time zone and locale.
     *  The <code>Calendar</code> returned is based on the current time
     *  in the given time zone with the given locale.
     * @param zone the time zone to use
     * @param aLocale the locale for the week data
     * @return a Calendar.
     */
    getInstance(zone: TimeZone, aLocale: Locale): Calendar;

    /**
     * Returns an array of all locales for which the <code>getInstance</code>
     *  methods of this class can return localized instances.
     *  The array returned must contain at least a <code>Locale</code>
     *  instance equal to {@link java.util.Locale#US Locale.US}.
     * @return An array of locales for which localized&#xA; <code>Calendar</code> instances are available.
     */
    getAvailableLocales(): Locale;

    /**
     * Converts the current calendar field values in {@link #fields fields[]}
     *  to the millisecond time value
     *  {@link #time}.
     * @see #complete()
     * @see #computeFields()
     */
    computeTime(): void;

    /**
     * Converts the current millisecond time value {@link #time}
     *  to calendar field values in {@link #fields fields[]}.
     *  This allows you to sync up the calendar field values with
     *  a new time that is set for the calendar.  The time is <em>not</em>
     *  recomputed first; to recompute the time, then the fields, call the
     *  {@link #complete()} method.
     * @see #computeTime()
     */
    computeFields(): void;

    /**
     * Returns a <code>Date</code> object representing this
     *  <code>Calendar</code>'s time value (millisecond offset from the <a
     *  href="#Epoch">Epoch</a>").
     * @return a <code>Date</code> representing the time value.
     * @see #setTime(Date)
     * @see #getTimeInMillis()
     */
    getTime(): Date;

    /**
     * Sets this Calendar's time with the given <code>Date</code>.
     *  <p>
     *  Note: Calling <code>setTime()</code> with
     *  <code>Date(Long.MAX_VALUE)</code> or <code>Date(Long.MIN_VALUE)</code>
     *  may yield incorrect field values from <code>get()</code>.
     * @param date the given Date.
     * @see #getTime()
     * @see #setTimeInMillis(long)
     */
    setTime(date: Date): void;

    /**
     * Returns this Calendar's time value in milliseconds.
     * @return the current time as UTC milliseconds from the epoch.
     * @see #getTime()
     * @see #setTimeInMillis(long)
     */
    getTimeInMillis(): number;

    /**
     * Sets this Calendar's current time from the given long value.
     * @param millis the new time in UTC milliseconds from the epoch.
     * @see #setTime(Date)
     * @see #getTimeInMillis()
     */
    setTimeInMillis(millis: number): void;

    /**
     * Returns the value of the given calendar field. In lenient mode,
     *  all calendar fields are normalized. In non-lenient mode, all
     *  calendar fields are validated and this method throws an
     *  exception if any calendar fields have out-of-range values. The
     *  normalization and validation are handled by the
     *  {@link #complete()} method, which process is calendar
     *  system dependent.
     * @param field the given calendar field.
     * @return the value for the given calendar field.
     * @throws ArrayIndexOutOfBoundsException if the specified field is out of range&#xA; (<code>field &lt; 0 || field &gt;= FIELD_COUNT</code>).
     * @see #set(int,int)
     * @see #complete()
     */
    get(field: number): number;

    /**
     * Returns the value of the given calendar field. This method does
     *  not involve normalization or validation of the field value.
     * @param field the given calendar field.
     * @return the value for the given calendar field.
     * @see #get(int)
     */
    internalGet(field: number): number;

    /**
     * Sets the given calendar field to the given value. The value is not
     *  interpreted by this method regardless of the leniency mode.
     * @param field the given calendar field.
     * @param value the value to be set for the given calendar field.
     * @throws ArrayIndexOutOfBoundsException if the specified field is out of range&#xA; (<code>field &lt; 0 || field &gt;= FIELD_COUNT</code>).&#xA; in non-lenient mode.
     * @see #set(int,int,int)
     * @see #set(int,int,int,int,int)
     * @see #set(int,int,int,int,int,int)
     * @see #get(int)
     */
    set(field: number, value: number): void;

    /**
     * Sets the values for the calendar fields <code>YEAR</code>,
     *  <code>MONTH</code>, and <code>DAY_OF_MONTH</code>.
     *  Previous values of other calendar fields are retained.  If this is not desired,
     *  call {@link #clear()} first.
     * @param year the value used to set the <code>YEAR</code> calendar field.
     * @param month the value used to set the <code>MONTH</code> calendar field.&#xA; Month value is 0-based. e.g., 0 for January.
     * @param date the value used to set the <code>DAY_OF_MONTH</code> calendar field.
     * @see #set(int,int)
     * @see #set(int,int,int,int,int)
     * @see #set(int,int,int,int,int,int)
     */
    set(year: number, month: number, date: number): void;

    /**
     * Sets the values for the calendar fields <code>YEAR</code>,
     *  <code>MONTH</code>, <code>DAY_OF_MONTH</code>,
     *  <code>HOUR_OF_DAY</code>, and <code>MINUTE</code>.
     *  Previous values of other fields are retained.  If this is not desired,
     *  call {@link #clear()} first.
     * @param year the value used to set the <code>YEAR</code> calendar field.
     * @param month the value used to set the <code>MONTH</code> calendar field.&#xA; Month value is 0-based. e.g., 0 for January.
     * @param date the value used to set the <code>DAY_OF_MONTH</code> calendar field.
     * @param hourOfDay the value used to set the <code>HOUR_OF_DAY</code> calendar field.
     * @param minute the value used to set the <code>MINUTE</code> calendar field.
     * @see #set(int,int)
     * @see #set(int,int,int)
     * @see #set(int,int,int,int,int,int)
     */
    set(
      year: number,
      month: number,
      date: number,
      hourOfDay: number,
      minute: number
    ): void;

    /**
     * Sets the values for the fields <code>YEAR</code>, <code>MONTH</code>,
     *  <code>DAY_OF_MONTH</code>, <code>HOUR_OF_DAY</code>, <code>MINUTE</code>, and
     *  <code>SECOND</code>.
     *  Previous values of other fields are retained.  If this is not desired,
     *  call {@link #clear()} first.
     * @param year the value used to set the <code>YEAR</code> calendar field.
     * @param month the value used to set the <code>MONTH</code> calendar field.&#xA; Month value is 0-based. e.g., 0 for January.
     * @param date the value used to set the <code>DAY_OF_MONTH</code> calendar field.
     * @param hourOfDay the value used to set the <code>HOUR_OF_DAY</code> calendar field.
     * @param minute the value used to set the <code>MINUTE</code> calendar field.
     * @param second the value used to set the <code>SECOND</code> calendar field.
     * @see #set(int,int)
     * @see #set(int,int,int)
     * @see #set(int,int,int,int,int)
     */
    set(
      year: number,
      month: number,
      date: number,
      hourOfDay: number,
      minute: number,
      second: number
    ): void;

    /**
     * Sets all the calendar field values and the time value
     *  (millisecond offset from the <a href="#Epoch">Epoch</a>) of
     *  this <code>Calendar</code> undefined. This means that {@link
     *  #isSet(int) isSet()} will return <code>false</code> for all the
     *  calendar fields, and the date and time calculations will treat
     *  the fields as if they had never been set. A
     *  <code>Calendar</code> implementation class may use its specific
     *  default field values for date/time calculations. For example,
     *  <code>GregorianCalendar</code> uses 1970 if the
     *  <code>YEAR</code> field value is undefined.
     * @see #clear(int)
     */
    clear(): void;

    /**
     * Sets the given calendar field value and the time value
     *  (millisecond offset from the <a href="#Epoch">Epoch</a>) of
     *  this <code>Calendar</code> undefined. This means that {@link
     *  #isSet(int) isSet(field)} will return <code>false</code>, and
     *  the date and time calculations will treat the field as if it
     *  had never been set. A <code>Calendar</code> implementation
     *  class may use the field's specific default value for date and
     *  time calculations.
     *
     *  <p>The {@link #HOUR_OF_DAY}, {@link #HOUR} and {@link #AM_PM}
     *  fields are handled independently and the <a
     *  href="#time_resolution">the resolution rule for the time of
     *  day</a> is applied. Clearing one of the fields doesn't reset
     *  the hour of day value of this <code>Calendar</code>. Use {@link
     *  #set(int,int) set(Calendar.HOUR_OF_DAY, 0)} to reset the hour
     *  value.
     * @param field the calendar field to be cleared.
     * @see #clear()
     */
    clear(field: number): void;

    /**
     * Determines if the given calendar field has a value set,
     *  including cases that the value has been set by internal fields
     *  calculations triggered by a <code>get</code> method call.
     * @param field the calendar field to test
     * @return <code>true</code> if the given calendar field has a value set;&#xA; <code>false</code> otherwise.
     */
    isSet(field: number): boolean;

    /**
     * Returns the string representation of the calendar
     *  <code>field</code> value in the given <code>style</code> and
     *  <code>locale</code>.  If no string representation is
     *  applicable, <code>null</code> is returned. This method calls
     *  {@link Calendar#get(int) get(field)} to get the calendar
     *  <code>field</code> value if the string representation is
     *  applicable to the given calendar <code>field</code>.
     *
     *  <p>For example, if this <code>Calendar</code> is a
     *  <code>GregorianCalendar</code> and its date is 2005-01-01, then
     *  the string representation of the {@link #MONTH} field would be
     *  "January" in the long style in an English locale or "Jan" in
     *  the short style. However, no string representation would be
     *  available for the {@link #DAY_OF_MONTH} field, and this method
     *  would return <code>null</code>.
     *
     *  <p>The default implementation supports the calendar fields for
     *  which a {@link DateFormatSymbols} has names in the given
     *  <code>locale</code>.
     * @param field&#xA; the calendar field for which the string representation&#xA; is returned
     * @param style&#xA; the style applied to the string representation; one of {@link&#xA; #SHORT_FORMAT} ({@link #SHORT}), {@link #SHORT_STANDALONE},&#xA; {@link #LONG_FORMAT} ({@link #LONG}), {@link #LONG_STANDALONE},&#xA; {@link #NARROW_FORMAT}, or {@link #NARROW_STANDALONE}.
     * @param locale&#xA; the locale for the string representation&#xA; (any calendar types specified by {@code locale} are ignored)
     * @return the string representation of the given&#xA; {@code field} in the given {@code style}, or&#xA; {@code null} if no string representation is&#xA; applicable.
     * @throws IllegalArgumentException&#xA; if {@code field} or {@code style} is invalid,&#xA; or if this {@code Calendar} is non-lenient and any&#xA; of the calendar fields have invalid values
     * @throws NullPointerException&#xA; if {@code locale} is null
     * @since 1.6
     */
    getDisplayName(field: number, style: number, locale: Locale): string;

    /**
     * Returns a {@code Map} containing all names of the calendar
     *  {@code field} in the given {@code style} and
     *  {@code locale} and their corresponding field values. For
     *  example, if this {@code Calendar} is a {@link
     *  GregorianCalendar}, the returned map would contain "Jan" to
     *  {@link #JANUARY}, "Feb" to {@link #FEBRUARY}, and so on, in the
     *  {@linkplain #SHORT short} style in an English locale.
     *
     *  <p>Narrow names may not be unique due to use of single characters,
     *  such as "S" for Sunday and Saturday. In that case narrow names are not
     *  included in the returned {@code Map}.
     *
     *  <p>The values of other calendar fields may be taken into
     *  account to determine a set of display names. For example, if
     *  this {@code Calendar} is a lunisolar calendar system and
     *  the year value given by the {@link #YEAR} field has a leap
     *  month, this method would return month names containing the leap
     *  month name, and month names are mapped to their values specific
     *  for the year.
     *
     *  <p>The default implementation supports display names contained in
     *  a {@link DateFormatSymbols}. For example, if {@code field}
     *  is {@link #MONTH} and {@code style} is {@link
     *  #ALL_STYLES}, this method returns a {@code Map} containing
     *  all strings returned by {@link DateFormatSymbols#getShortMonths()}
     *  and {@link DateFormatSymbols#getMonths()}.
     * @param field&#xA; the calendar field for which the display names are returned
     * @param style&#xA; the style applied to the string representation; one of {@link&#xA; #SHORT_FORMAT} ({@link #SHORT}), {@link #SHORT_STANDALONE},&#xA; {@link #LONG_FORMAT} ({@link #LONG}), {@link #LONG_STANDALONE},&#xA; {@link #NARROW_FORMAT}, or {@link #NARROW_STANDALONE}
     * @param locale&#xA; the locale for the display names
     * @return a {@code Map} containing all display names in&#xA; {@code style} and {@code locale} and their&#xA; field values, or {@code null} if no display names&#xA; are defined for {@code field}
     * @throws IllegalArgumentException&#xA; if {@code field} or {@code style} is invalid,&#xA; or if this {@code Calendar} is non-lenient and any&#xA; of the calendar fields have invalid values
     * @throws NullPointerException&#xA; if {@code locale} is null
     * @since 1.6
     */
    getDisplayNames(field: number, style: number, locale: Locale): Map;

    /**
 * Fills in any unset fields in the calendar fields. First, the {@link
 *  #computeTime()} method is called if the time value (millisecond offset
 *  from the <a href="#Epoch">Epoch</a>) has not been calculated from
 *  calendar field values. Then, the {@link #computeFields()} method is
 *  called to calculate all calendar field values.
  
    */
    complete(): void;

    /**
     * Returns an unmodifiable {@code Set} containing all calendar types
     *  supported by {@code Calendar} in the runtime environment. The available
     *  calendar types can be used for the <a
     *  href="Locale.html#def_locale_extension">Unicode locale extensions</a>.
     *  The {@code Set} returned contains at least {@code "gregory"}. The
     *  calendar types don't include aliases, such as {@code "gregorian"} for
     *  {@code "gregory"}.
     * @return an unmodifiable {@code Set} containing all available calendar types
     * @since 1.8
     * @see #getCalendarType()
     * @see Calendar.Builder#setCalendarType(String)
     * @see Locale#getUnicodeLocaleType(String)
     */
    getAvailableCalendarTypes(): Set;

    /**
     * Returns the calendar type of this {@code Calendar}. Calendar types are
     *  defined by the <em>Unicode Locale Data Markup Language (LDML)</em>
     *  specification.
     *
     *  <p>The default implementation of this method returns the class name of
     *  this {@code Calendar} instance. Any subclasses that implement
     *  LDML-defined calendar systems should override this method to return
     *  appropriate calendar types.
     * @return the LDML-defined calendar type or the class name of this&#xA; {@code Calendar} instance
     * @since 1.8
     * @see <a href="Locale.html#def_extensions">Locale extensions</a>
     * @see Locale.Builder#setLocale(Locale)
     * @see Locale.Builder#setUnicodeLocaleKeyword(String, String)
     */
    getCalendarType(): string;

    /**
     * Compares this <code>Calendar</code> to the specified
     *  <code>Object</code>.  The result is <code>true</code> if and only if
     *  the argument is a <code>Calendar</code> object of the same calendar
     *  system that represents the same time value (millisecond offset from the
     *  <a href="#Epoch">Epoch</a>) under the same
     *  <code>Calendar</code> parameters as this object.
     *
     *  <p>The <code>Calendar</code> parameters are the values represented
     *  by the <code>isLenient</code>, <code>getFirstDayOfWeek</code>,
     *  <code>getMinimalDaysInFirstWeek</code> and <code>getTimeZone</code>
     *  methods. If there is any difference in those parameters
     *  between the two <code>Calendar</code>s, this method returns
     *  <code>false</code>.
     *
     *  <p>Use the {@link #compareTo(Calendar) compareTo} method to
     *  compare only the time values.
     * @param obj the object to compare with.
     * @return <code>true</code> if this object is equal to <code>obj</code>;&#xA; <code>false</code> otherwise.
     */
    equals(obj: unknown): boolean;

    /**
     * Returns a hash code for this calendar.
     * @return a hash code value for this object.
     * @since 1.2
     */
    hashCode(): number;

    /**
     * Returns whether this <code>Calendar</code> represents a time
     *  before the time represented by the specified
     *  <code>Object</code>. This method is equivalent to:
     *  <pre>{@code
     *          compareTo(when) < 0
     *  }</pre>
     *  if and only if <code>when</code> is a <code>Calendar</code>
     *  instance. Otherwise, the method returns <code>false</code>.
     * @param when the <code>Object</code> to be compared
     * @return <code>true</code> if the time of this&#xA; <code>Calendar</code> is before the time represented by&#xA; <code>when</code>; <code>false</code> otherwise.
     * @see #compareTo(Calendar)
     */
    before(when: unknown): boolean;

    /**
     * Returns whether this <code>Calendar</code> represents a time
     *  after the time represented by the specified
     *  <code>Object</code>. This method is equivalent to:
     *  <pre>{@code
     *          compareTo(when) > 0
     *  }</pre>
     *  if and only if <code>when</code> is a <code>Calendar</code>
     *  instance. Otherwise, the method returns <code>false</code>.
     * @param when the <code>Object</code> to be compared
     * @return <code>true</code> if the time of this <code>Calendar</code> is&#xA; after the time represented by <code>when</code>; <code>false</code>&#xA; otherwise.
     * @see #compareTo(Calendar)
     */
    after(when: unknown): boolean;

    /**
     * Compares the time values (millisecond offsets from the <a
     *  href="#Epoch">Epoch</a>) represented by two
     *  <code>Calendar</code> objects.
     * @param anotherCalendar the <code>Calendar</code> to be compared.
     * @return the value <code>0</code> if the time represented by the argument&#xA; is equal to the time represented by this <code>Calendar</code>; a value&#xA; less than <code>0</code> if the time of this <code>Calendar</code> is&#xA; before the time represented by the argument; and a value greater than&#xA; <code>0</code> if the time of this <code>Calendar</code> is after the&#xA; time represented by the argument.
     * @throws NullPointerException if the specified <code>Calendar</code> is&#xA; <code>null</code>.
     * @throws IllegalArgumentException if the time value of the&#xA; specified <code>Calendar</code> object can't be obtained due to&#xA; any invalid calendar values.
     * @since 1.5
     */
    compareTo(anotherCalendar: Calendar): number;

    /**
     * Adds or subtracts the specified amount of time to the given calendar field,
     *  based on the calendar's rules. For example, to subtract 5 days from
     *  the current time of the calendar, you can achieve it by calling:
     *  <p><code>add(Calendar.DAY_OF_MONTH, -5)</code>.
     * @param field the calendar field.
     * @param amount the amount of date or time to be added to the field.
     * @see #roll(int,int)
     * @see #set(int,int)
     */
    add(field: number, amount: number): void;

    /**
     * Adds or subtracts (up/down) a single unit of time on the given time
     *  field without changing larger fields. For example, to roll the current
     *  date up by one day, you can achieve it by calling:
     *  <p>roll(Calendar.DATE, true).
     *  When rolling on the year or Calendar.YEAR field, it will roll the year
     *  value in the range between 1 and the value returned by calling
     *  <code>getMaximum(Calendar.YEAR)</code>.
     *  When rolling on the month or Calendar.MONTH field, other fields like
     *  date might conflict and, need to be changed. For instance,
     *  rolling the month on the date 01/31/96 will result in 02/29/96.
     *  When rolling on the hour-in-day or Calendar.HOUR_OF_DAY field, it will
     *  roll the hour value in the range between 0 and 23, which is zero-based.
     * @param field the time field.
     * @param up indicates if the value of the specified time field is to be&#xA; rolled up or rolled down. Use true if rolling up, false otherwise.
     * @see Calendar#add(int,int)
     * @see Calendar#set(int,int)
     */
    roll(field: number, up: boolean): void;

    /**
     * Adds the specified (signed) amount to the specified calendar field
     *  without changing larger fields.  A negative amount means to roll
     *  down.
     *
     *  <p>NOTE:  This default implementation on <code>Calendar</code> just repeatedly calls the
     *  version of {@link #roll(int,boolean) roll()} that rolls by one unit.  This may not
     *  always do the right thing.  For example, if the <code>DAY_OF_MONTH</code> field is 31,
     *  rolling through February will leave it set to 28.  The <code>GregorianCalendar</code>
     *  version of this function takes care of this problem.  Other subclasses
     *  should also provide overrides of this function that do the right thing.
     * @param field the calendar field.
     * @param amount the signed amount to add to the calendar <code>field</code>.
     * @since 1.2
     * @see #roll(int,boolean)
     * @see #add(int,int)
     * @see #set(int,int)
     */
    roll(field: number, amount: number): void;

    /**
     * Sets the time zone with the given time zone value.
     * @param value the given time zone.
     */
    setTimeZone(value: TimeZone): void;

    /**
     * Gets the time zone.
     * @return the time zone object associated with this calendar.
     */
    getTimeZone(): TimeZone;

    /**
     * Specifies whether or not date/time interpretation is to be lenient.  With
     *  lenient interpretation, a date such as "February 942, 1996" will be
     *  treated as being equivalent to the 941st day after February 1, 1996.
     *  With strict (non-lenient) interpretation, such dates will cause an exception to be
     *  thrown. The default is lenient.
     * @param lenient <code>true</code> if the lenient mode is to be turned&#xA; on; <code>false</code> if it is to be turned off.
     * @see #isLenient()
     * @see java.text.DateFormat#setLenient
     */
    setLenient(lenient: boolean): void;

    /**
     * Tells whether date/time interpretation is to be lenient.
     * @return <code>true</code> if the interpretation mode of this calendar is lenient;&#xA; <code>false</code> otherwise.
     * @see #setLenient(boolean)
     */
    isLenient(): boolean;

    /**
     * Sets what the first day of the week is; e.g., <code>SUNDAY</code> in the U.S.,
     *  <code>MONDAY</code> in France.
     * @param value the given first day of the week.
     * @see #getFirstDayOfWeek()
     * @see #getMinimalDaysInFirstWeek()
     */
    setFirstDayOfWeek(value: number): void;

    /**
     * Gets what the first day of the week is; e.g., <code>SUNDAY</code> in the U.S.,
     *  <code>MONDAY</code> in France.
     * @return the first day of the week.
     * @see #setFirstDayOfWeek(int)
     * @see #getMinimalDaysInFirstWeek()
     */
    getFirstDayOfWeek(): number;

    /**
     * Sets what the minimal days required in the first week of the year are;
     *  For example, if the first week is defined as one that contains the first
     *  day of the first month of a year, call this method with value 1. If it
     *  must be a full week, use value 7.
     * @param value the given minimal days required in the first week&#xA; of the year.
     * @see #getMinimalDaysInFirstWeek()
     */
    setMinimalDaysInFirstWeek(value: number): void;

    /**
     * Gets what the minimal days required in the first week of the year are;
     *  e.g., if the first week is defined as one that contains the first day
     *  of the first month of a year, this method returns 1. If
     *  the minimal days required must be a full week, this method
     *  returns 7.
     * @return the minimal days required in the first week of the year.
     * @see #setMinimalDaysInFirstWeek(int)
     */
    getMinimalDaysInFirstWeek(): number;

    /**
     * Returns whether this {@code Calendar} supports week dates.
     *
     *  <p>The default implementation of this method returns {@code false}.
     * @return {@code true} if this {@code Calendar} supports week dates;&#xA; {@code false} otherwise.
     * @see #getWeekYear()
     * @see #setWeekDate(int,int,int)
     * @see #getWeeksInWeekYear()
     * @since 1.7
     */
    isWeekDateSupported(): boolean;

    /**
     * Returns the week year represented by this {@code Calendar}. The
     *  week year is in sync with the week cycle. The {@linkplain
     *  #getFirstDayOfWeek() first day of the first week} is the first
     *  day of the week year.
     *
     *  <p>The default implementation of this method throws an
     *  {@link UnsupportedOperationException}.
     * @return the week year of this {@code Calendar}
     * @throws UnsupportedOperationException&#xA; if any week year numbering isn't supported&#xA; in this {@code Calendar}.
     * @see #isWeekDateSupported()
     * @see #getFirstDayOfWeek()
     * @see #getMinimalDaysInFirstWeek()
     * @since 1.7
     */
    getWeekYear(): number;

    /**
     * Sets the date of this {@code Calendar} with the the given date
     *  specifiers - week year, week of year, and day of week.
     *
     *  <p>Unlike the {@code set} method, all of the calendar fields
     *  and {@code time} values are calculated upon return.
     *
     *  <p>If {@code weekOfYear} is out of the valid week-of-year range
     *  in {@code weekYear}, the {@code weekYear} and {@code
     *  weekOfYear} values are adjusted in lenient mode, or an {@code
     *  IllegalArgumentException} is thrown in non-lenient mode.
     *
     *  <p>The default implementation of this method throws an
     *  {@code UnsupportedOperationException}.
     * @param weekYear the week year
     * @param weekOfYear the week number based on {@code weekYear}
     * @param dayOfWeek the day of week value: one of the constants&#xA; for the {@link #DAY_OF_WEEK} field: {@link&#xA; #SUNDAY}, ..., {@link #SATURDAY}.
     * @throws IllegalArgumentException&#xA; if any of the given date specifiers is invalid&#xA; or any of the calendar fields are inconsistent&#xA; with the given date specifiers in non-lenient mode
     * @throws UnsupportedOperationException&#xA; if any week year numbering isn't supported in this&#xA; {@code Calendar}.
     * @see #isWeekDateSupported()
     * @see #getFirstDayOfWeek()
     * @see #getMinimalDaysInFirstWeek()
     * @since 1.7
     */
    setWeekDate(weekYear: number, weekOfYear: number, dayOfWeek: number): void;

    /**
     * Returns the number of weeks in the week year represented by this
     *  {@code Calendar}.
     *
     *  <p>The default implementation of this method throws an
     *  {@code UnsupportedOperationException}.
     * @return the number of weeks in the week year.
     * @throws UnsupportedOperationException&#xA; if any week year numbering isn't supported in this&#xA; {@code Calendar}.
     * @see #WEEK_OF_YEAR
     * @see #isWeekDateSupported()
     * @see #getWeekYear()
     * @see #getActualMaximum(int)
     * @since 1.7
     */
    getWeeksInWeekYear(): number;

    /**
     * Returns the minimum value for the given calendar field of this
     *  <code>Calendar</code> instance. The minimum value is defined as
     *  the smallest value returned by the {@link #get(int) get} method
     *  for any possible time value.  The minimum value depends on
     *  calendar system specific parameters of the instance.
     * @param field the calendar field.
     * @return the minimum value for the given calendar field.
     * @see #getMaximum(int)
     * @see #getGreatestMinimum(int)
     * @see #getLeastMaximum(int)
     * @see #getActualMinimum(int)
     * @see #getActualMaximum(int)
     */
    getMinimum(field: number): number;

    /**
     * Returns the maximum value for the given calendar field of this
     *  <code>Calendar</code> instance. The maximum value is defined as
     *  the largest value returned by the {@link #get(int) get} method
     *  for any possible time value. The maximum value depends on
     *  calendar system specific parameters of the instance.
     * @param field the calendar field.
     * @return the maximum value for the given calendar field.
     * @see #getMinimum(int)
     * @see #getGreatestMinimum(int)
     * @see #getLeastMaximum(int)
     * @see #getActualMinimum(int)
     * @see #getActualMaximum(int)
     */
    getMaximum(field: number): number;

    /**
     * Returns the highest minimum value for the given calendar field
     *  of this <code>Calendar</code> instance. The highest minimum
     *  value is defined as the largest value returned by {@link
     *  #getActualMinimum(int)} for any possible time value. The
     *  greatest minimum value depends on calendar system specific
     *  parameters of the instance.
     * @param field the calendar field.
     * @return the highest minimum value for the given calendar field.
     * @see #getMinimum(int)
     * @see #getMaximum(int)
     * @see #getLeastMaximum(int)
     * @see #getActualMinimum(int)
     * @see #getActualMaximum(int)
     */
    getGreatestMinimum(field: number): number;

    /**
     * Returns the lowest maximum value for the given calendar field
     *  of this <code>Calendar</code> instance. The lowest maximum
     *  value is defined as the smallest value returned by {@link
     *  #getActualMaximum(int)} for any possible time value. The least
     *  maximum value depends on calendar system specific parameters of
     *  the instance. For example, a <code>Calendar</code> for the
     *  Gregorian calendar system returns 28 for the
     *  <code>DAY_OF_MONTH</code> field, because the 28th is the last
     *  day of the shortest month of this calendar, February in a
     *  common year.
     * @param field the calendar field.
     * @return the lowest maximum value for the given calendar field.
     * @see #getMinimum(int)
     * @see #getMaximum(int)
     * @see #getGreatestMinimum(int)
     * @see #getActualMinimum(int)
     * @see #getActualMaximum(int)
     */
    getLeastMaximum(field: number): number;

    /**
     * Returns the minimum value that the specified calendar field
     *  could have, given the time value of this <code>Calendar</code>.
     *
     *  <p>The default implementation of this method uses an iterative
     *  algorithm to determine the actual minimum value for the
     *  calendar field. Subclasses should, if possible, override this
     *  with a more efficient implementation - in many cases, they can
     *  simply return <code>getMinimum()</code>.
     * @param field the calendar field
     * @return the minimum of the given calendar field for the time&#xA; value of this <code>Calendar</code>
     * @see #getMinimum(int)
     * @see #getMaximum(int)
     * @see #getGreatestMinimum(int)
     * @see #getLeastMaximum(int)
     * @see #getActualMaximum(int)
     * @since 1.2
     */
    getActualMinimum(field: number): number;

    /**
     * Returns the maximum value that the specified calendar field
     *  could have, given the time value of this
     *  <code>Calendar</code>. For example, the actual maximum value of
     *  the <code>MONTH</code> field is 12 in some years, and 13 in
     *  other years in the Hebrew calendar system.
     *
     *  <p>The default implementation of this method uses an iterative
     *  algorithm to determine the actual maximum value for the
     *  calendar field. Subclasses should, if possible, override this
     *  with a more efficient implementation.
     * @param field the calendar field
     * @return the maximum of the given calendar field for the time&#xA; value of this <code>Calendar</code>
     * @see #getMinimum(int)
     * @see #getMaximum(int)
     * @see #getGreatestMinimum(int)
     * @see #getLeastMaximum(int)
     * @see #getActualMinimum(int)
     * @since 1.2
     */
    getActualMaximum(field: number): number;

    /**
     * Creates and returns a copy of this object.
     * @return a copy of this object.
     */
    clone(): unknown;

    /**
     * Return a string representation of this calendar. This method
     *  is intended to be used only for debugging purposes, and the
     *  format of the returned string may vary between implementations.
     *  The returned string may be empty but may not be <code>null</code>.
     * @return a string representation of this calendar.
     */
    toString(): string;

    /**
     * Converts this object to an {@link Instant}.
     *  <p>
     *  The conversion creates an {@code Instant} that represents the
     *  same point on the time-line as this {@code Calendar}.
     * @return the instant representing the same point on the time-line
     * @since 1.8
     */
    toInstant(): Instant;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the
     *  era, e.g., AD or BC in the Julian calendar. This is a calendar-specific
     *  value; see subclass documentation.
     * @see GregorianCalendar#AD
     * @see GregorianCalendar#BC
     */
    ERA: number;

    /**
 * Field number for <code>get</code> and <code>set</code> indicating the
 *  year. This is a calendar-specific value; see subclass documentation.
  
    */
    YEAR: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the
     *  month. This is a calendar-specific value. The first month of
     *  the year in the Gregorian and Julian calendars is
     *  <code>JANUARY</code> which is 0; the last depends on the number
     *  of months in a year.
     * @see #JANUARY
     * @see #FEBRUARY
     * @see #MARCH
     * @see #APRIL
     * @see #MAY
     * @see #JUNE
     * @see #JULY
     * @see #AUGUST
     * @see #SEPTEMBER
     * @see #OCTOBER
     * @see #NOVEMBER
     * @see #DECEMBER
     * @see #UNDECIMBER
     */
    MONTH: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the
     *  week number within the current year.  The first week of the year, as
     *  defined by <code>getFirstDayOfWeek()</code> and
     *  <code>getMinimalDaysInFirstWeek()</code>, has value 1.  Subclasses define
     *  the value of <code>WEEK_OF_YEAR</code> for days before the first week of
     *  the year.
     * @see #getFirstDayOfWeek
     * @see #getMinimalDaysInFirstWeek
     */
    WEEK_OF_YEAR: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the
     *  week number within the current month.  The first week of the month, as
     *  defined by <code>getFirstDayOfWeek()</code> and
     *  <code>getMinimalDaysInFirstWeek()</code>, has value 1.  Subclasses define
     *  the value of <code>WEEK_OF_MONTH</code> for days before the first week of
     *  the month.
     * @see #getFirstDayOfWeek
     * @see #getMinimalDaysInFirstWeek
     */
    WEEK_OF_MONTH: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the
     *  day of the month. This is a synonym for <code>DAY_OF_MONTH</code>.
     *  The first day of the month has value 1.
     * @see #DAY_OF_MONTH
     */
    DATE: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the
     *  day of the month. This is a synonym for <code>DATE</code>.
     *  The first day of the month has value 1.
     * @see #DATE
     */
    DAY_OF_MONTH: number;

    /**
 * Field number for <code>get</code> and <code>set</code> indicating the day
 *  number within the current year.  The first day of the year has value 1.
  
    */
    DAY_OF_YEAR: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the day
     *  of the week.  This field takes values <code>SUNDAY</code>,
     *  <code>MONDAY</code>, <code>TUESDAY</code>, <code>WEDNESDAY</code>,
     *  <code>THURSDAY</code>, <code>FRIDAY</code>, and <code>SATURDAY</code>.
     * @see #SUNDAY
     * @see #MONDAY
     * @see #TUESDAY
     * @see #WEDNESDAY
     * @see #THURSDAY
     * @see #FRIDAY
     * @see #SATURDAY
     */
    DAY_OF_WEEK: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the
     *  ordinal number of the day of the week within the current month. Together
     *  with the <code>DAY_OF_WEEK</code> field, this uniquely specifies a day
     *  within a month.  Unlike <code>WEEK_OF_MONTH</code> and
     *  <code>WEEK_OF_YEAR</code>, this field's value does <em>not</em> depend on
     *  <code>getFirstDayOfWeek()</code> or
     *  <code>getMinimalDaysInFirstWeek()</code>.  <code>DAY_OF_MONTH 1</code>
     *  through <code>7</code> always correspond to <code>DAY_OF_WEEK_IN_MONTH
     *  1</code>; <code>8</code> through <code>14</code> correspond to
     *  <code>DAY_OF_WEEK_IN_MONTH 2</code>, and so on.
     *  <code>DAY_OF_WEEK_IN_MONTH 0</code> indicates the week before
     *  <code>DAY_OF_WEEK_IN_MONTH 1</code>.  Negative values count back from the
     *  end of the month, so the last Sunday of a month is specified as
     *  <code>DAY_OF_WEEK = SUNDAY, DAY_OF_WEEK_IN_MONTH = -1</code>.  Because
     *  negative values count backward they will usually be aligned differently
     *  within the month than positive values.  For example, if a month has 31
     *  days, <code>DAY_OF_WEEK_IN_MONTH -1</code> will overlap
     *  <code>DAY_OF_WEEK_IN_MONTH 5</code> and the end of <code>4</code>.
     * @see #DAY_OF_WEEK
     * @see #WEEK_OF_MONTH
     */
    DAY_OF_WEEK_IN_MONTH: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating
     *  whether the <code>HOUR</code> is before or after noon.
     *  E.g., at 10:04:15.250 PM the <code>AM_PM</code> is <code>PM</code>.
     * @see #AM
     * @see #PM
     * @see #HOUR
     */
    AM_PM: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the
     *  hour of the morning or afternoon. <code>HOUR</code> is used for the
     *  12-hour clock (0 - 11). Noon and midnight are represented by 0, not by 12.
     *  E.g., at 10:04:15.250 PM the <code>HOUR</code> is 10.
     * @see #AM_PM
     * @see #HOUR_OF_DAY
     */
    HOUR: number;

    /**
     * Field number for <code>get</code> and <code>set</code> indicating the
     *  hour of the day. <code>HOUR_OF_DAY</code> is used for the 24-hour clock.
     *  E.g., at 10:04:15.250 PM the <code>HOUR_OF_DAY</code> is 22.
     * @see #HOUR
     */
    HOUR_OF_DAY: number;

    /**
 * Field number for <code>get</code> and <code>set</code> indicating the
 *  minute within the hour.
 *  E.g., at 10:04:15.250 PM the <code>MINUTE</code> is 4.
  
    */
    MINUTE: number;

    /**
 * Field number for <code>get</code> and <code>set</code> indicating the
 *  second within the minute.
 *  E.g., at 10:04:15.250 PM the <code>SECOND</code> is 15.
  
    */
    SECOND: number;

    /**
 * Field number for <code>get</code> and <code>set</code> indicating the
 *  millisecond within the second.
 *  E.g., at 10:04:15.250 PM the <code>MILLISECOND</code> is 250.
  
    */
    MILLISECOND: number;

    /**
 * Field number for <code>get</code> and <code>set</code>
 *  indicating the raw offset from GMT in milliseconds.
 *  <p>
 *  This field reflects the correct GMT offset value of the time
 *  zone of this <code>Calendar</code> if the
 *  <code>TimeZone</code> implementation subclass supports
 *  historical GMT offset changes.
  
    */
    ZONE_OFFSET: number;

    /**
 * Field number for <code>get</code> and <code>set</code> indicating the
 *  daylight saving offset in milliseconds.
 *  <p>
 *  This field reflects the correct daylight saving offset value of
 *  the time zone of this <code>Calendar</code> if the
 *  <code>TimeZone</code> implementation subclass supports
 *  historical Daylight Saving Time schedule changes.
  
    */
    DST_OFFSET: number;

    /**
 * The number of distinct fields recognized by <code>get</code> and <code>set</code>.
 *  Field numbers range from <code>0..FIELD_COUNT-1</code>.
  
    */
    FIELD_COUNT: number;

    /**
 * Value of the {@link #DAY_OF_WEEK} field indicating
 *  Sunday.
  
    */
    SUNDAY: number;

    /**
 * Value of the {@link #DAY_OF_WEEK} field indicating
 *  Monday.
  
    */
    MONDAY: number;

    /**
 * Value of the {@link #DAY_OF_WEEK} field indicating
 *  Tuesday.
  
    */
    TUESDAY: number;

    /**
 * Value of the {@link #DAY_OF_WEEK} field indicating
 *  Wednesday.
  
    */
    WEDNESDAY: number;

    /**
 * Value of the {@link #DAY_OF_WEEK} field indicating
 *  Thursday.
  
    */
    THURSDAY: number;

    /**
 * Value of the {@link #DAY_OF_WEEK} field indicating
 *  Friday.
  
    */
    FRIDAY: number;

    /**
 * Value of the {@link #DAY_OF_WEEK} field indicating
 *  Saturday.
  
    */
    SATURDAY: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  first month of the year in the Gregorian and Julian calendars.
  
    */
    JANUARY: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  second month of the year in the Gregorian and Julian calendars.
  
    */
    FEBRUARY: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  third month of the year in the Gregorian and Julian calendars.
  
    */
    MARCH: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  fourth month of the year in the Gregorian and Julian calendars.
  
    */
    APRIL: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  fifth month of the year in the Gregorian and Julian calendars.
  
    */
    MAY: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  sixth month of the year in the Gregorian and Julian calendars.
  
    */
    JUNE: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  seventh month of the year in the Gregorian and Julian calendars.
  
    */
    JULY: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  eighth month of the year in the Gregorian and Julian calendars.
  
    */
    AUGUST: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  ninth month of the year in the Gregorian and Julian calendars.
  
    */
    SEPTEMBER: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  tenth month of the year in the Gregorian and Julian calendars.
  
    */
    OCTOBER: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  eleventh month of the year in the Gregorian and Julian calendars.
  
    */
    NOVEMBER: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  twelfth month of the year in the Gregorian and Julian calendars.
  
    */
    DECEMBER: number;

    /**
 * Value of the {@link #MONTH} field indicating the
 *  thirteenth month of the year. Although <code>GregorianCalendar</code>
 *  does not use this value, lunar calendars do.
  
    */
    UNDECIMBER: number;

    /**
 * Value of the {@link #AM_PM} field indicating the
 *  period of the day from midnight to just before noon.
  
    */
    AM: number;

    /**
 * Value of the {@link #AM_PM} field indicating the
 *  period of the day from noon to just before midnight.
  
    */
    PM: number;

    /**
     * A style specifier for {@link #getDisplayNames(int, int, Locale)
     *  getDisplayNames} indicating names in all styles, such as
     *  "January" and "Jan".
     * @see #SHORT_FORMAT
     * @see #LONG_FORMAT
     * @see #SHORT_STANDALONE
     * @see #LONG_STANDALONE
     * @see #SHORT
     * @see #LONG
     * @since 1.6
     */
    ALL_STYLES: number;

    /**
     * A style specifier for {@link #getDisplayName(int, int, Locale)
     *  getDisplayName} and {@link #getDisplayNames(int, int, Locale)
     *  getDisplayNames} equivalent to {@link #SHORT_FORMAT}.
     * @see #SHORT_STANDALONE
     * @see #LONG
     * @since 1.6
     */
    SHORT: number;

    /**
     * A style specifier for {@link #getDisplayName(int, int, Locale)
     *  getDisplayName} and {@link #getDisplayNames(int, int, Locale)
     *  getDisplayNames} equivalent to {@link #LONG_FORMAT}.
     * @see #LONG_STANDALONE
     * @see #SHORT
     * @since 1.6
     */
    LONG: number;

    /**
     * A style specifier for {@link #getDisplayName(int, int, Locale)
     *  getDisplayName} and {@link #getDisplayNames(int, int, Locale)
     *  getDisplayNames} indicating a narrow name used for format. Narrow names
     *  are typically single character strings, such as "M" for Monday.
     * @see #NARROW_STANDALONE
     * @see #SHORT_FORMAT
     * @see #LONG_FORMAT
     * @since 1.8
     */
    NARROW_FORMAT: number;

    /**
     * A style specifier for {@link #getDisplayName(int, int, Locale)
     *  getDisplayName} and {@link #getDisplayNames(int, int, Locale)
     *  getDisplayNames} indicating a narrow name independently. Narrow names
     *  are typically single character strings, such as "M" for Monday.
     * @see #NARROW_FORMAT
     * @see #SHORT_STANDALONE
     * @see #LONG_STANDALONE
     * @since 1.8
     */
    NARROW_STANDALONE: number;

    /**
     * A style specifier for {@link #getDisplayName(int, int, Locale)
     *  getDisplayName} and {@link #getDisplayNames(int, int, Locale)
     *  getDisplayNames} indicating a short name used for format.
     * @see #SHORT_STANDALONE
     * @see #LONG_FORMAT
     * @see #LONG_STANDALONE
     * @since 1.8
     */
    SHORT_FORMAT: number;

    /**
     * A style specifier for {@link #getDisplayName(int, int, Locale)
     *  getDisplayName} and {@link #getDisplayNames(int, int, Locale)
     *  getDisplayNames} indicating a long name used for format.
     * @see #LONG_STANDALONE
     * @see #SHORT_FORMAT
     * @see #SHORT_STANDALONE
     * @since 1.8
     */
    LONG_FORMAT: number;

    /**
     * A style specifier for {@link #getDisplayName(int, int, Locale)
     *  getDisplayName} and {@link #getDisplayNames(int, int, Locale)
     *  getDisplayNames} indicating a short name used independently,
     *  such as a month abbreviation as calendar headers.
     * @see #SHORT_FORMAT
     * @see #LONG_FORMAT
     * @see #LONG_STANDALONE
     * @since 1.8
     */
    SHORT_STANDALONE: number;

    /**
     * A style specifier for {@link #getDisplayName(int, int, Locale)
     *  getDisplayName} and {@link #getDisplayNames(int, int, Locale)
     *  getDisplayNames} indicating a long name used independently,
     *  such as a month name as calendar headers.
     * @see #LONG_FORMAT
     * @see #SHORT_FORMAT
     * @see #SHORT_STANDALONE
     * @since 1.8
     */
    LONG_STANDALONE: number;
  };
