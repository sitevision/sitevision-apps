import type { Object } from "../../lang/Object";

import type { String } from "../../lang/String";

import type { Instant } from "../../time/Instant";
import type { Serializable } from "../../io/Serializable";
import type { Cloneable } from "../../lang/Cloneable";
import type { Comparable } from "../../lang/Comparable";

/**
 * The class <code>Date</code> represents a specific instant
 *  in time, with millisecond precision.
 *  <p>
 *  Prior to JDK&nbsp;1.1, the class <code>Date</code> had two additional
 *  functions.  It allowed the interpretation of dates as year, month, day, hour,
 *  minute, and second values.  It also allowed the formatting and parsing
 *  of date strings.  Unfortunately, the API for these functions was not
 *  amenable to internationalization.  As of JDK&nbsp;1.1, the
 *  <code>Calendar</code> class should be used to convert between dates and time
 *  fields and the <code>DateFormat</code> class should be used to format and
 *  parse date strings.
 *  The corresponding methods in <code>Date</code> are deprecated.
 *  <p>
 *  Although the <code>Date</code> class is intended to reflect
 *  coordinated universal time (UTC), it may not do so exactly,
 *  depending on the host environment of the Java Virtual Machine.
 *  Nearly all modern operating systems assume that 1&nbsp;day&nbsp;=
 *  24&nbsp;&times;&nbsp;60&nbsp;&times;&nbsp;60&nbsp;= 86400 seconds
 *  in all cases. In UTC, however, about once every year or two there
 *  is an extra second, called a "leap second." The leap
 *  second is always added as the last second of the day, and always
 *  on December 31 or June 30. For example, the last minute of the
 *  year 1995 was 61 seconds long, thanks to an added leap second.
 *  Most computer clocks are not accurate enough to be able to reflect
 *  the leap-second distinction.
 *  <p>
 *  Some computer standards are defined in terms of Greenwich mean
 *  time (GMT), which is equivalent to universal time (UT).  GMT is
 *  the "civil" name for the standard; UT is the
 *  "scientific" name for the same standard. The
 *  distinction between UTC and UT is that UTC is based on an atomic
 *  clock and UT is based on astronomical observations, which for all
 *  practical purposes is an invisibly fine hair to split. Because the
 *  earth's rotation is not uniform (it slows down and speeds up
 *  in complicated ways), UT does not always flow uniformly. Leap
 *  seconds are introduced as needed into UTC so as to keep UTC within
 *  0.9 seconds of UT1, which is a version of UT with certain
 *  corrections applied. There are other time and date systems as
 *  well; for example, the time scale used by the satellite-based
 *  global positioning system (GPS) is synchronized to UTC but is
 *  <i>not</i> adjusted for leap seconds. An interesting source of
 *  further information is the U.S. Naval Observatory, particularly
 *  the Directorate of Time at:
 *  <blockquote><pre>
 *      <a href=http://tycho.usno.navy.mil>http://tycho.usno.navy.mil</a>
 *  </pre></blockquote>
 *  <p>
 *  and their definitions of "Systems of Time" at:
 *  <blockquote><pre>
 *      <a href=http://tycho.usno.navy.mil/systime.html>http://tycho.usno.navy.mil/systime.html</a>
 *  </pre></blockquote>
 *  <p>
 *  In all methods of class <code>Date</code> that accept or return
 *  year, month, date, hours, minutes, and seconds values, the
 *  following representations are used:
 *  <ul>
 *  <li>A year <i>y</i> is represented by the integer
 *      <i>y</i>&nbsp;<code>-&nbsp;1900</code>.
 *  <li>A month is represented by an integer from 0 to 11; 0 is January,
 *      1 is February, and so forth; thus 11 is December.
 *  <li>A date (day of month) is represented by an integer from 1 to 31
 *      in the usual manner.
 *  <li>An hour is represented by an integer from 0 to 23. Thus, the hour
 *      from midnight to 1 a.m. is hour 0, and the hour from noon to 1
 *      p.m. is hour 12.
 *  <li>A minute is represented by an integer from 0 to 59 in the usual manner.
 *  <li>A second is represented by an integer from 0 to 61; the values 60 and
 *      61 occur only for leap seconds and even then only in Java
 *      implementations that actually track leap seconds correctly. Because
 *      of the manner in which leap seconds are currently introduced, it is
 *      extremely unlikely that two leap seconds will occur in the same
 *      minute, but this specification follows the date and time conventions
 *      for ISO C.
 *  </ul>
 *  <p>
 *  In all cases, arguments given to methods for these purposes need
 *  not fall within the indicated ranges; for example, a date may be
 *  specified as January 32 and is interpreted as meaning February 1.
 * @author James Gosling
 * @author Arthur van Hoff
 * @author Alan Liu
 * @see java.text.DateFormat
 * @see java.util.Calendar
 * @see java.util.TimeZone
 * @since JDK1.0
 */
export type Date = Object &
  Serializable &
  Cloneable &
  Comparable & {
    /**
 * Return a copy of this object.
  
    */
    clone(): unknown;

    /**
     * Determines the date and time based on the arguments. The
     *  arguments are interpreted as a year, month, day of the month,
     *  hour of the day, minute within the hour, and second within the
     *  minute, exactly as for the <tt>Date</tt> constructor with six
     *  arguments, except that the arguments are interpreted relative
     *  to UTC rather than to the local time zone. The time indicated is
     *  returned represented as the distance, measured in milliseconds,
     *  of that time from the epoch (00:00:00 GMT on January 1, 1970).
     * @param year the year minus 1900.
     * @param month the month between 0-11.
     * @param date the day of the month between 1-31.
     * @param hrs the hours between 0-23.
     * @param min the minutes between 0-59.
     * @param sec the seconds between 0-59.
     * @return the number of milliseconds since January 1, 1970, 00:00:00 GMT for&#xA; the date and time specified by the arguments.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.set(year + 1900, month, date,&#xA; hrs, min, sec)</code> or <code>GregorianCalendar(year + 1900,&#xA; month, date, hrs, min, sec)</code>, using a UTC&#xA; <code>TimeZone</code>, followed by <code>Calendar.getTime().getTime()</code>.
     */
    UTC(
      year: number,
      month: number,
      date: number,
      hrs: number,
      min: number,
      sec: number
    ): number;

    /**
     * Attempts to interpret the string <tt>s</tt> as a representation
     *  of a date and time. If the attempt is successful, the time
     *  indicated is returned represented as the distance, measured in
     *  milliseconds, of that time from the epoch (00:00:00 GMT on
     *  January 1, 1970). If the attempt fails, an
     *  <tt>IllegalArgumentException</tt> is thrown.
     *  <p>
     *  It accepts many syntaxes; in particular, it recognizes the IETF
     *  standard date syntax: "Sat, 12 Aug 1995 13:30:00 GMT". It also
     *  understands the continental U.S. time-zone abbreviations, but for
     *  general use, a time-zone offset should be used: "Sat, 12 Aug 1995
     *  13:30:00 GMT+0430" (4 hours, 30 minutes west of the Greenwich
     *  meridian). If no time zone is specified, the local time zone is
     *  assumed. GMT and UTC are considered equivalent.
     *  <p>
     *  The string <tt>s</tt> is processed from left to right, looking for
     *  data of interest. Any material in <tt>s</tt> that is within the
     *  ASCII parenthesis characters <tt>(</tt> and <tt>)</tt> is ignored.
     *  Parentheses may be nested. Otherwise, the only characters permitted
     *  within <tt>s</tt> are these ASCII characters:
     *  <blockquote><pre>
     *  abcdefghijklmnopqrstuvwxyz
     *  ABCDEFGHIJKLMNOPQRSTUVWXYZ
     *  0123456789,+-:/</pre></blockquote>
     *  and whitespace characters.<p>
     *  A consecutive sequence of decimal digits is treated as a decimal
     *  number:<ul>
     *  <li>If a number is preceded by <tt>+</tt> or <tt>-</tt> and a year
     *      has already been recognized, then the number is a time-zone
     *      offset. If the number is less than 24, it is an offset measured
     *      in hours. Otherwise, it is regarded as an offset in minutes,
     *      expressed in 24-hour time format without punctuation. A
     *      preceding <tt>-</tt> means a westward offset. Time zone offsets
     *      are always relative to UTC (Greenwich). Thus, for example,
     *      <tt>-5</tt> occurring in the string would mean "five hours west
     *      of Greenwich" and <tt>+0430</tt> would mean "four hours and
     *      thirty minutes east of Greenwich." It is permitted for the
     *      string to specify <tt>GMT</tt>, <tt>UT</tt>, or <tt>UTC</tt>
     *      redundantly-for example, <tt>GMT-5</tt> or <tt>utc+0430</tt>.
     *  <li>The number is regarded as a year number if one of the
     *      following conditions is true:
     *  <ul>
     *      <li>The number is equal to or greater than 70 and followed by a
     *          space, comma, slash, or end of string
     *      <li>The number is less than 70, and both a month and a day of
     *          the month have already been recognized</li>
     *  </ul>
     *      If the recognized year number is less than 100, it is
     *      interpreted as an abbreviated year relative to a century of
     *      which dates are within 80 years before and 19 years after
     *      the time when the Date class is initialized.
     *      After adjusting the year number, 1900 is subtracted from
     *      it. For example, if the current year is 1999 then years in
     *      the range 19 to 99 are assumed to mean 1919 to 1999, while
     *      years from 0 to 18 are assumed to mean 2000 to 2018.  Note
     *      that this is slightly different from the interpretation of
     *      years less than 100 that is used in {@link java.text.SimpleDateFormat}.
     *  <li>If the number is followed by a colon, it is regarded as an hour,
     *      unless an hour has already been recognized, in which case it is
     *      regarded as a minute.
     *  <li>If the number is followed by a slash, it is regarded as a month
     *      (it is decreased by 1 to produce a number in the range <tt>0</tt>
     *      to <tt>11</tt>), unless a month has already been recognized, in
     *      which case it is regarded as a day of the month.
     *  <li>If the number is followed by whitespace, a comma, a hyphen, or
     *      end of string, then if an hour has been recognized but not a
     *      minute, it is regarded as a minute; otherwise, if a minute has
     *      been recognized but not a second, it is regarded as a second;
     *      otherwise, it is regarded as a day of the month. </ul><p>
     *  A consecutive sequence of letters is regarded as a word and treated
     *  as follows:<ul>
     *  <li>A word that matches <tt>AM</tt>, ignoring case, is ignored (but
     *      the parse fails if an hour has not been recognized or is less
     *      than <tt>1</tt> or greater than <tt>12</tt>).
     *  <li>A word that matches <tt>PM</tt>, ignoring case, adds <tt>12</tt>
     *      to the hour (but the parse fails if an hour has not been
     *      recognized or is less than <tt>1</tt> or greater than <tt>12</tt>).
     *  <li>Any word that matches any prefix of <tt>SUNDAY, MONDAY, TUESDAY,
     *      WEDNESDAY, THURSDAY, FRIDAY</tt>, or <tt>SATURDAY</tt>, ignoring
     *      case, is ignored. For example, <tt>sat, Friday, TUE</tt>, and
     *      <tt>Thurs</tt> are ignored.
     *  <li>Otherwise, any word that matches any prefix of <tt>JANUARY,
     *      FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER,
     *      OCTOBER, NOVEMBER</tt>, or <tt>DECEMBER</tt>, ignoring case, and
     *      considering them in the order given here, is recognized as
     *      specifying a month and is converted to a number (<tt>0</tt> to
     *      <tt>11</tt>). For example, <tt>aug, Sept, april</tt>, and
     *      <tt>NOV</tt> are recognized as months. So is <tt>Ma</tt>, which
     *      is recognized as <tt>MARCH</tt>, not <tt>MAY</tt>.
     *  <li>Any word that matches <tt>GMT, UT</tt>, or <tt>UTC</tt>, ignoring
     *      case, is treated as referring to UTC.
     *  <li>Any word that matches <tt>EST, CST, MST</tt>, or <tt>PST</tt>,
     *      ignoring case, is recognized as referring to the time zone in
     *      North America that is five, six, seven, or eight hours west of
     *      Greenwich, respectively. Any word that matches <tt>EDT, CDT,
     *      MDT</tt>, or <tt>PDT</tt>, ignoring case, is recognized as
     *      referring to the same time zone, respectively, during daylight
     *      saving time.</ul><p>
     *  Once the entire string s has been scanned, it is converted to a time
     *  result in one of two ways. If a time zone or time-zone offset has been
     *  recognized, then the year, month, day of month, hour, minute, and
     *  second are interpreted in UTC and then the time-zone offset is
     *  applied. Otherwise, the year, month, day of month, hour, minute, and
     *  second are interpreted in the local time zone.
     * @param s a string to be parsed as a date.
     * @return the number of milliseconds since January 1, 1970, 00:00:00 GMT&#xA; represented by the string argument.
     * @see java.text.DateFormat
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>DateFormat.parse(String s)</code>.
     */
    parse(s: String | string): number;

    /**
     * Returns a value that is the result of subtracting 1900 from the
     *  year that contains or begins with the instant in time represented
     *  by this <code>Date</code> object, as interpreted in the local
     *  time zone.
     * @return the year represented by this date, minus 1900.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.get(Calendar.YEAR) - 1900</code>.
     */
    getYear(): number;

    /**
     * Sets the year of this <tt>Date</tt> object to be the specified
     *  value plus 1900. This <code>Date</code> object is modified so
     *  that it represents a point in time within the specified year,
     *  with the month, date, hour, minute, and second the same as
     *  before, as interpreted in the local time zone. (Of course, if
     *  the date was February 29, for example, and the year is set to a
     *  non-leap year, then the new date will be treated as if it were
     *  on March 1.)
     * @param year the year value.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.set(Calendar.YEAR, year + 1900)</code>.
     */
    setYear(year: number): void;

    /**
     * Returns a number representing the month that contains or begins
     *  with the instant in time represented by this <tt>Date</tt> object.
     *  The value returned is between <code>0</code> and <code>11</code>,
     *  with the value <code>0</code> representing January.
     * @return the month represented by this date.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.get(Calendar.MONTH)</code>.
     */
    getMonth(): number;

    /**
     * Sets the month of this date to the specified value. This
     *  <tt>Date</tt> object is modified so that it represents a point
     *  in time within the specified month, with the year, date, hour,
     *  minute, and second the same as before, as interpreted in the
     *  local time zone. If the date was October 31, for example, and
     *  the month is set to June, then the new date will be treated as
     *  if it were on July 1, because June has only 30 days.
     * @param month the month value between 0-11.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.set(Calendar.MONTH, int month)</code>.
     */
    setMonth(month: number): void;

    /**
     * Returns the day of the month represented by this <tt>Date</tt> object.
     *  The value returned is between <code>1</code> and <code>31</code>
     *  representing the day of the month that contains or begins with the
     *  instant in time represented by this <tt>Date</tt> object, as
     *  interpreted in the local time zone.
     * @return the day of the month represented by this date.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.get(Calendar.DAY_OF_MONTH)</code>.
     * @deprecated
     */
    getDate(): number;

    /**
     * Sets the day of the month of this <tt>Date</tt> object to the
     *  specified value. This <tt>Date</tt> object is modified so that
     *  it represents a point in time within the specified day of the
     *  month, with the year, month, hour, minute, and second the same
     *  as before, as interpreted in the local time zone. If the date
     *  was April 30, for example, and the date is set to 31, then it
     *  will be treated as if it were on May 1, because April has only
     *  30 days.
     * @param date the day of the month value between 1-31.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.set(Calendar.DAY_OF_MONTH, int date)</code>.
     */
    setDate(date: number): void;

    /**
     * Returns the day of the week represented by this date. The
     *  returned value (<tt>0</tt> = Sunday, <tt>1</tt> = Monday,
     *  <tt>2</tt> = Tuesday, <tt>3</tt> = Wednesday, <tt>4</tt> =
     *  Thursday, <tt>5</tt> = Friday, <tt>6</tt> = Saturday)
     *  represents the day of the week that contains or begins with
     *  the instant in time represented by this <tt>Date</tt> object,
     *  as interpreted in the local time zone.
     * @return the day of the week represented by this date.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.get(Calendar.DAY_OF_WEEK)</code>.
     */
    getDay(): number;

    /**
     * Returns the hour represented by this <tt>Date</tt> object. The
     *  returned value is a number (<tt>0</tt> through <tt>23</tt>)
     *  representing the hour within the day that contains or begins
     *  with the instant in time represented by this <tt>Date</tt>
     *  object, as interpreted in the local time zone.
     * @return the hour represented by this date.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.get(Calendar.HOUR_OF_DAY)</code>.
     */
    getHours(): number;

    /**
     * Sets the hour of this <tt>Date</tt> object to the specified value.
     *  This <tt>Date</tt> object is modified so that it represents a point
     *  in time within the specified hour of the day, with the year, month,
     *  date, minute, and second the same as before, as interpreted in the
     *  local time zone.
     * @param hours the hour value.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.set(Calendar.HOUR_OF_DAY, int hours)</code>.
     */
    setHours(hours: number): void;

    /**
     * Returns the number of minutes past the hour represented by this date,
     *  as interpreted in the local time zone.
     *  The value returned is between <code>0</code> and <code>59</code>.
     * @return the number of minutes past the hour represented by this date.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.get(Calendar.MINUTE)</code>.
     */
    getMinutes(): number;

    /**
     * Sets the minutes of this <tt>Date</tt> object to the specified value.
     *  This <tt>Date</tt> object is modified so that it represents a point
     *  in time within the specified minute of the hour, with the year, month,
     *  date, hour, and second the same as before, as interpreted in the
     *  local time zone.
     * @param minutes the value of the minutes.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.set(Calendar.MINUTE, int minutes)</code>.
     */
    setMinutes(minutes: number): void;

    /**
     * Returns the number of seconds past the minute represented by this date.
     *  The value returned is between <code>0</code> and <code>61</code>. The
     *  values <code>60</code> and <code>61</code> can only occur on those
     *  Java Virtual Machines that take leap seconds into account.
     * @return the number of seconds past the minute represented by this date.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.get(Calendar.SECOND)</code>.
     */
    getSeconds(): number;

    /**
     * Sets the seconds of this <tt>Date</tt> to the specified value.
     *  This <tt>Date</tt> object is modified so that it represents a
     *  point in time within the specified second of the minute, with
     *  the year, month, date, hour, and minute the same as before, as
     *  interpreted in the local time zone.
     * @param seconds the seconds value.
     * @see java.util.Calendar
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>Calendar.set(Calendar.SECOND, int seconds)</code>.
     */
    setSeconds(seconds: number): void;

    /**
     * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT
     *  represented by this <tt>Date</tt> object.
     * @return the number of milliseconds since January 1, 1970, 00:00:00 GMT&#xA; represented by this date.
     */
    getTime(): number;

    /**
     * Sets this <code>Date</code> object to represent a point in time that is
     *  <code>time</code> milliseconds after January 1, 1970 00:00:00 GMT.
     * @param time the number of milliseconds.
     */
    setTime(time: number): void;

    /**
     * Tests if this date is before the specified date.
     * @param when a date.
     * @return <code>true</code> if and only if the instant of time&#xA; represented by this <tt>Date</tt> object is strictly&#xA; earlier than the instant represented by <tt>when</tt>;&#xA; <code>false</code> otherwise.
     * @throws NullPointerException if <code>when</code> is null.
     */
    before(when: Date): boolean;

    /**
     * Tests if this date is after the specified date.
     * @param when a date.
     * @return <code>true</code> if and only if the instant represented&#xA; by this <tt>Date</tt> object is strictly later than the&#xA; instant represented by <tt>when</tt>;&#xA; <code>false</code> otherwise.
     * @throws NullPointerException if <code>when</code> is null.
     */
    after(when: Date): boolean;

    /**
     * Compares two dates for equality.
     *  The result is <code>true</code> if and only if the argument is
     *  not <code>null</code> and is a <code>Date</code> object that
     *  represents the same point in time, to the millisecond, as this object.
     *  <p>
     *  Thus, two <code>Date</code> objects are equal if and only if the
     *  <code>getTime</code> method returns the same <code>long</code>
     *  value for both.
     * @param obj the object to compare with.
     * @return <code>true</code> if the objects are the same;&#xA; <code>false</code> otherwise.
     * @see java.util.Date#getTime()
     */
    equals(obj: unknown): boolean;

    /**
     * Compares two Dates for ordering.
     * @param anotherDate the <code>Date</code> to be compared.
     * @return the value <code>0</code> if the argument Date is equal to&#xA; this Date; a value less than <code>0</code> if this Date&#xA; is before the Date argument; and a value greater than&#xA; <code>0</code> if this Date is after the Date argument.
     * @since 1.2
     * @throws NullPointerException if <code>anotherDate</code> is null.
     */
    compareTo(anotherDate: Date): number;

    /**
     * Returns a hash code value for this object. The result is the
     *  exclusive OR of the two halves of the primitive <tt>long</tt>
     *  value returned by the {@link Date#getTime}
     *  method. That is, the hash code is the value of the expression:
     *  <blockquote><pre>{@code
     *  (int)(this.getTime()^(this.getTime() >>> 32))
     *  }</pre></blockquote>
     * @return a hash code value for this object.
     */
    hashCode(): number;

    /**
     * Converts this <code>Date</code> object to a <code>String</code>
     *  of the form:
     *  <blockquote><pre>
     *  dow mon dd hh:mm:ss zzz yyyy</pre></blockquote>
     *  where:<ul>
     *  <li><tt>dow</tt> is the day of the week (<tt>Sun, Mon, Tue, Wed,
     *      Thu, Fri, Sat</tt>).
     *  <li><tt>mon</tt> is the month (<tt>Jan, Feb, Mar, Apr, May, Jun,
     *      Jul, Aug, Sep, Oct, Nov, Dec</tt>).
     *  <li><tt>dd</tt> is the day of the month (<tt>01</tt> through
     *      <tt>31</tt>), as two decimal digits.
     *  <li><tt>hh</tt> is the hour of the day (<tt>00</tt> through
     *      <tt>23</tt>), as two decimal digits.
     *  <li><tt>mm</tt> is the minute within the hour (<tt>00</tt> through
     *      <tt>59</tt>), as two decimal digits.
     *  <li><tt>ss</tt> is the second within the minute (<tt>00</tt> through
     *      <tt>61</tt>, as two decimal digits.
     *  <li><tt>zzz</tt> is the time zone (and may reflect daylight saving
     *      time). Standard time zone abbreviations include those
     *      recognized by the method <tt>parse</tt>. If time zone
     *      information is not available, then <tt>zzz</tt> is empty -
     *      that is, it consists of no characters at all.
     *  <li><tt>yyyy</tt> is the year, as four decimal digits.
     *  </ul>
     * @return a string representation of this date.
     * @see java.util.Date#toLocaleString()
     * @see java.util.Date#toGMTString()
     */
    toString(): string;

    /**
     * Creates a string representation of this <tt>Date</tt> object in an
     *  implementation-dependent form. The intent is that the form should
     *  be familiar to the user of the Java application, wherever it may
     *  happen to be running. The intent is comparable to that of the
     *  "<code>%c</code>" format supported by the <code>strftime()</code>
     *  function of ISO&nbsp;C.
     * @return a string representation of this date, using the locale&#xA; conventions.
     * @see java.text.DateFormat
     * @see java.util.Date#toString()
     * @see java.util.Date#toGMTString()
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>DateFormat.format(Date date)</code>.
     */
    toLocaleString(): string;

    /**
     * Creates a string representation of this <tt>Date</tt> object of
     *  the form:
     *  <blockquote><pre>
     *  d mon yyyy hh:mm:ss GMT</pre></blockquote>
     *  where:<ul>
     *  <li><i>d</i> is the day of the month (<tt>1</tt> through <tt>31</tt>),
     *      as one or two decimal digits.
     *  <li><i>mon</i> is the month (<tt>Jan, Feb, Mar, Apr, May, Jun, Jul,
     *      Aug, Sep, Oct, Nov, Dec</tt>).
     *  <li><i>yyyy</i> is the year, as four decimal digits.
     *  <li><i>hh</i> is the hour of the day (<tt>00</tt> through <tt>23</tt>),
     *      as two decimal digits.
     *  <li><i>mm</i> is the minute within the hour (<tt>00</tt> through
     *      <tt>59</tt>), as two decimal digits.
     *  <li><i>ss</i> is the second within the minute (<tt>00</tt> through
     *      <tt>61</tt>), as two decimal digits.
     *  <li><i>GMT</i> is exactly the ASCII letters "<tt>GMT</tt>" to indicate
     *      Greenwich Mean Time.
     *  </ul><p>
     *  The result does not depend on the local time zone.
     * @return a string representation of this date, using the Internet GMT&#xA; conventions.
     * @see java.text.DateFormat
     * @see java.util.Date#toString()
     * @see java.util.Date#toLocaleString()
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>DateFormat.format(Date date)</code>, using a&#xA; GMT <code>TimeZone</code>.
     */
    toGMTString(): string;

    /**
     * Returns the offset, measured in minutes, for the local time zone
     *  relative to UTC that is appropriate for the time represented by
     *  this <code>Date</code> object.
     *  <p>
     *  For example, in Massachusetts, five time zones west of Greenwich:
     *  <blockquote><pre>
     *  new Date(96, 1, 14).getTimezoneOffset() returns 300</pre></blockquote>
     *  because on February 14, 1996, standard time (Eastern Standard Time)
     *  is in use, which is offset five hours from UTC; but:
     *  <blockquote><pre>
     *  new Date(96, 5, 1).getTimezoneOffset() returns 240</pre></blockquote>
     *  because on June 1, 1996, daylight saving time (Eastern Daylight Time)
     *  is in use, which is offset only four hours from UTC.<p>
     *  This method produces the same result as if it computed:
     *  <blockquote><pre>
     *  (this.getTime() - UTC(this.getYear(),
     *                        this.getMonth(),
     *                        this.getDate(),
     *                        this.getHours(),
     *                        this.getMinutes(),
     *                        this.getSeconds())) / (60 * 1000)
     *  </pre></blockquote>
     * @return the time-zone offset, in minutes, for the current time zone.
     * @see java.util.Calendar#ZONE_OFFSET
     * @see java.util.Calendar#DST_OFFSET
     * @see java.util.TimeZone#getDefault
     * @deprecated As of JDK version 1.1,&#xA; replaced by <code>-(Calendar.get(Calendar.ZONE_OFFSET) +&#xA; Calendar.get(Calendar.DST_OFFSET)) / (60 * 1000)</code>.
     */
    getTimezoneOffset(): number;

    /**
     * Obtains an instance of {@code Date} from an {@code Instant} object.
     *  <p>
     *  {@code Instant} uses a precision of nanoseconds, whereas {@code Date}
     *  uses a precision of milliseconds.  The conversion will trancate any
     *  excess precision information as though the amount in nanoseconds was
     *  subject to integer division by one million.
     *  <p>
     *  {@code Instant} can store points on the time-line further in the future
     *  and further in the past than {@code Date}. In this scenario, this method
     *  will throw an exception.
     * @param instant the instant to convert
     * @return a {@code Date} representing the same point on the time-line as&#xA; the provided instant
     * @throws NullPointerException if {@code instant} is null.
     * @throws IllegalArgumentException if the instant is too large to&#xA; represent as a {@code Date}
     * @since 1.8
     */
    from(instant: Instant): Date;

    /**
     * Converts this {@code Date} object to an {@code Instant}.
     *  <p>
     *  The conversion creates an {@code Instant} that represents the same
     *  point on the time-line as this {@code Date}.
     * @return an instant representing the same point on the time-line as&#xA; this {@code Date} object
     * @since 1.8
     */
    toInstant(): Instant;
  };
