import type { Object } from "../../lang/Object";
import type { String } from "../../lang/String";
import type { StringBuffer } from "../../lang/StringBuffer";
import type { FieldPosition } from "../FieldPosition";
import type { AttributedCharacterIterator } from "../AttributedCharacterIterator";
import type { ParsePosition } from "../ParsePosition";
import type { Serializable } from "../../io/Serializable";
import type { Cloneable } from "../../lang/Cloneable";

/**
 * <code>Format</code> is an abstract base class for formatting locale-sensitive
 *  information such as dates, messages, and numbers.
 *
 *  <p>
 *  <code>Format</code> defines the programming interface for formatting
 *  locale-sensitive objects into <code>String</code>s (the
 *  <code>format</code> method) and for parsing <code>String</code>s back
 *  into objects (the <code>parseObject</code> method).
 *
 *  <p>
 *  Generally, a format's <code>parseObject</code> method must be able to parse
 *  any string formatted by its <code>format</code> method. However, there may
 *  be exceptional cases where this is not possible. For example, a
 *  <code>format</code> method might create two adjacent integer numbers with
 *  no separator in between, and in this case the <code>parseObject</code> could
 *  not tell which digits belong to which number.
 *
 *  <h3>Subclassing</h3>
 *
 *  <p>
 *  The Java Platform provides three specialized subclasses of <code>Format</code>--
 *  <code>DateFormat</code>, <code>MessageFormat</code>, and
 *  <code>NumberFormat</code>--for formatting dates, messages, and numbers,
 *  respectively.
 *  <p>
 *  Concrete subclasses must implement three methods:
 *  <ol>
 *  <li> <code>format(Object obj, StringBuffer toAppendTo, FieldPosition pos)</code>
 *  <li> <code>formatToCharacterIterator(Object obj)</code>
 *  <li> <code>parseObject(String source, ParsePosition pos)</code>
 *  </ol>
 *  These general methods allow polymorphic parsing and formatting of objects
 *  and are used, for example, by <code>MessageFormat</code>.
 *  Subclasses often also provide additional <code>format</code> methods for
 *  specific input types as well as <code>parse</code> methods for specific
 *  result types. Any <code>parse</code> method that does not take a
 *  <code>ParsePosition</code> argument should throw <code>ParseException</code>
 *  when no text in the required format is at the beginning of the input text.
 *
 *  <p>
 *  Most subclasses will also implement the following factory methods:
 *  <ol>
 *  <li>
 *  <code>getInstance</code> for getting a useful format object appropriate
 *  for the current locale
 *  <li>
 *  <code>getInstance(Locale)</code> for getting a useful format
 *  object appropriate for the specified locale
 *  </ol>
 *  In addition, some subclasses may also implement other
 *  <code>getXxxxInstance</code> methods for more specialized control. For
 *  example, the <code>NumberFormat</code> class provides
 *  <code>getPercentInstance</code> and <code>getCurrencyInstance</code>
 *  methods for getting specialized number formatters.
 *
 *  <p>
 *  Subclasses of <code>Format</code> that allow programmers to create objects
 *  for locales (with <code>getInstance(Locale)</code> for example)
 *  must also implement the following class method:
 *  <blockquote>
 *  <pre>
 *  public static Locale[] getAvailableLocales()
 *  </pre>
 *  </blockquote>
 *
 *  <p>
 *  And finally subclasses may define a set of constants to identify the various
 *  fields in the formatted output. These constants are used to create a FieldPosition
 *  object which identifies what information is contained in the field and its
 *  position in the formatted result. These constants should be named
 *  <code><em>item</em>_FIELD</code> where <code><em>item</em></code> identifies
 *  the field. For examples of these constants, see <code>ERA_FIELD</code> and its
 *  friends in {@link DateFormat}.
 *
 *  <h4><a name="synchronization">Synchronization</a></h4>
 *
 *  <p>
 *  Formats are generally not synchronized.
 *  It is recommended to create separate format instances for each thread.
 *  If multiple threads access a format concurrently, it must be synchronized
 *  externally.
 * @see java.text.ParsePosition
 * @see java.text.FieldPosition
 * @see java.text.NumberFormat
 * @see java.text.DateFormat
 * @see java.text.MessageFormat
 * @author Mark Davis
 */
export type Format = Object &
  Serializable &
  Cloneable & {
    /**
     * Formats an object to produce a string. This is equivalent to
     *  <blockquote>
     *  {@link #format(Object, StringBuffer, FieldPosition) format}<code>(obj,
     *          new StringBuffer(), new FieldPosition(0)).toString();</code>
     *  </blockquote>
     * @param obj The object to format
     * @return Formatted string.
     * @throws IllegalArgumentException if the Format cannot format the given&#xA; object
     */
    format(obj: unknown): string;

    /**
     * Formats an object and appends the resulting text to a given string
     *  buffer.
     *  If the <code>pos</code> argument identifies a field used by the format,
     *  then its indices are set to the beginning and end of the first such
     *  field encountered.
     * @param obj The object to format
     * @param toAppendTo where the text is to be appended
     * @param pos A <code>FieldPosition</code> identifying a field&#xA; in the formatted text
     * @return the string buffer passed in as <code>toAppendTo</code>,&#xA; with formatted text appended
     * @throws NullPointerException if <code>toAppendTo</code> or&#xA; <code>pos</code> is null
     * @throws IllegalArgumentException if the Format cannot format the given&#xA; object
     */
    format(
      obj: unknown,
      toAppendTo: StringBuffer,
      pos: FieldPosition
    ): StringBuffer;

    /**
     * Formats an Object producing an <code>AttributedCharacterIterator</code>.
     *  You can use the returned <code>AttributedCharacterIterator</code>
     *  to build the resulting String, as well as to determine information
     *  about the resulting String.
     *  <p>
     *  Each attribute key of the AttributedCharacterIterator will be of type
     *  <code>Field</code>. It is up to each <code>Format</code> implementation
     *  to define what the legal values are for each attribute in the
     *  <code>AttributedCharacterIterator</code>, but typically the attribute
     *  key is also used as the attribute value.
     *  <p>The default implementation creates an
     *  <code>AttributedCharacterIterator</code> with no attributes. Subclasses
     *  that support fields should override this and create an
     *  <code>AttributedCharacterIterator</code> with meaningful attributes.
     * @throws NullPointerException if obj is null.
     * @throws IllegalArgumentException when the Format cannot format the&#xA; given object.
     * @param obj The object to format
     * @return AttributedCharacterIterator describing the formatted value.
     * @since 1.4
     */
    formatToCharacterIterator(obj: unknown): AttributedCharacterIterator;

    /**
     * Parses text from a string to produce an object.
     *  <p>
     *  The method attempts to parse text starting at the index given by
     *  <code>pos</code>.
     *  If parsing succeeds, then the index of <code>pos</code> is updated
     *  to the index after the last character used (parsing does not necessarily
     *  use all characters up to the end of the string), and the parsed
     *  object is returned. The updated <code>pos</code> can be used to
     *  indicate the starting point for the next call to this method.
     *  If an error occurs, then the index of <code>pos</code> is not
     *  changed, the error index of <code>pos</code> is set to the index of
     *  the character where the error occurred, and null is returned.
     * @param source A <code>String</code>, part of which should be parsed.
     * @param pos A <code>ParsePosition</code> object with index and error&#xA; index information as described above.
     * @return An <code>Object</code> parsed from the string. In case of&#xA; error, returns null.
     * @throws NullPointerException if <code>pos</code> is null.
     */
    parseObject(source: String | string, pos: ParsePosition): unknown;

    /**
     * Parses text from the beginning of the given string to produce an object.
     *  The method may not use the entire text of the given string.
     * @param source A <code>String</code> whose beginning should be parsed.
     * @return An <code>Object</code> parsed from the string.
     * @throws ParseException if the beginning of the specified string&#xA; cannot be parsed.
     */
    parseObject(source: String | string): unknown;

    /**
     * Creates and returns a copy of this object.
     * @return a clone of this instance.
     */
    clone(): unknown;
  };
