import type { String } from "../String";

import type { Object } from "../Object";

import type { Number } from "../Number";
import type { Comparable } from "../Comparable";
import type { Class } from "../Class";

/**
 * The {@code Long} class wraps a value of the primitive type {@code
 *  long} in an object. An object of type {@code Long} contains a
 *  single field whose type is {@code long}.
 *
 *  <p> In addition, this class provides several methods for converting
 *  a {@code long} to a {@code String} and a {@code String} to a {@code
 *  long}, as well as other constants and methods useful when dealing
 *  with a {@code long}.
 *
 *  <p>Implementation note: The implementations of the "bit twiddling"
 *  methods (such as {@link #highestOneBit(long) highestOneBit} and
 *  {@link #numberOfTrailingZeros(long) numberOfTrailingZeros}) are
 *  based on material from Henry S. Warren, Jr.'s <i>Hacker's
 *  Delight</i>, (Addison Wesley, 2002).
 * @author Lee Boynton
 * @author Arthur van Hoff
 * @author Josh Bloch
 * @author Joseph D. Darcy
 * @since JDK1.0
 */
export type Long = Number &
  Comparable & {
    /**
     * Returns a string representation of the first argument in the
     *  radix specified by the second argument.
     *
     *  <p>If the radix is smaller than {@code Character.MIN_RADIX}
     *  or larger than {@code Character.MAX_RADIX}, then the radix
     *  {@code 10} is used instead.
     *
     *  <p>If the first argument is negative, the first element of the
     *  result is the ASCII minus sign {@code '-'}
     *  ({@code '\u002d'}). If the first argument is not
     *  negative, no sign character appears in the result.
     *
     *  <p>The remaining characters of the result represent the magnitude
     *  of the first argument. If the magnitude is zero, it is
     *  represented by a single zero character {@code '0'}
     *  ({@code '\u0030'}); otherwise, the first character of
     *  the representation of the magnitude will not be the zero
     *  character.  The following ASCII characters are used as digits:
     *
     *  <blockquote>
     *    {@code 0123456789abcdefghijklmnopqrstuvwxyz}
     *  </blockquote>
     *
     *  These are {@code '\u0030'} through
     *  {@code '\u0039'} and {@code '\u0061'} through
     *  {@code '\u007a'}. If {@code radix} is
     *  <var>N</var>, then the first <var>N</var> of these characters
     *  are used as radix-<var>N</var> digits in the order shown. Thus,
     *  the digits for hexadecimal (radix 16) are
     *  {@code 0123456789abcdef}. If uppercase letters are
     *  desired, the {@link java.lang.String#toUpperCase()} method may
     *  be called on the result:
     *
     *  <blockquote>
     *   {@code Long.toString(n, 16).toUpperCase()}
     *  </blockquote>
     * @param i a {@code long} to be converted to a string.
     * @param radix the radix to use in the string representation.
     * @return a string representation of the argument in the specified radix.
     * @see java.lang.Character#MAX_RADIX
     * @see java.lang.Character#MIN_RADIX
     */
    toString(i: number, radix: number): string;

    /**
     * Returns a string representation of the first argument as an
     *  unsigned integer value in the radix specified by the second
     *  argument.
     *
     *  <p>If the radix is smaller than {@code Character.MIN_RADIX}
     *  or larger than {@code Character.MAX_RADIX}, then the radix
     *  {@code 10} is used instead.
     *
     *  <p>Note that since the first argument is treated as an unsigned
     *  value, no leading sign character is printed.
     *
     *  <p>If the magnitude is zero, it is represented by a single zero
     *  character {@code '0'} ({@code '\u0030'}); otherwise,
     *  the first character of the representation of the magnitude will
     *  not be the zero character.
     *
     *  <p>The behavior of radixes and the characters used as digits
     *  are the same as {@link #toString(long, int) toString}.
     * @param i an integer to be converted to an unsigned string.
     * @param radix the radix to use in the string representation.
     * @return an unsigned string representation of the argument in the specified radix.
     * @see #toString(long, int)
     * @since 1.8
     */
    toUnsignedString(i: number, radix: number): string;

    /**
     * Returns a string representation of the {@code long}
     *  argument as an unsigned integer in base&nbsp;16.
     *
     *  <p>The unsigned {@code long} value is the argument plus
     *  2<sup>64</sup> if the argument is negative; otherwise, it is
     *  equal to the argument.  This value is converted to a string of
     *  ASCII digits in hexadecimal (base&nbsp;16) with no extra
     *  leading {@code 0}s.
     *
     *  <p>The value of the argument can be recovered from the returned
     *  string {@code s} by calling {@link
     *  Long#parseUnsignedLong(String, int) Long.parseUnsignedLong(s,
     *  16)}.
     *
     *  <p>If the unsigned magnitude is zero, it is represented by a
     *  single zero character {@code '0'} ({@code '\u0030'});
     *  otherwise, the first character of the representation of the
     *  unsigned magnitude will not be the zero character. The
     *  following characters are used as hexadecimal digits:
     *
     *  <blockquote>
     *   {@code 0123456789abcdef}
     *  </blockquote>
     *
     *  These are the characters {@code '\u0030'} through
     *  {@code '\u0039'} and  {@code '\u0061'} through
     *  {@code '\u0066'}.  If uppercase letters are desired,
     *  the {@link java.lang.String#toUpperCase()} method may be called
     *  on the result:
     *
     *  <blockquote>
     *   {@code Long.toHexString(n).toUpperCase()}
     *  </blockquote>
     * @param i a {@code long} to be converted to a string.
     * @return the string representation of the unsigned {@code long}&#xA; value represented by the argument in hexadecimal&#xA; (base&nbsp;16).
     * @see #parseUnsignedLong(String, int)
     * @see #toUnsignedString(long, int)
     * @since JDK 1.0.2
     */
    toHexString(i: number): string;

    /**
     * Returns a string representation of the {@code long}
     *  argument as an unsigned integer in base&nbsp;8.
     *
     *  <p>The unsigned {@code long} value is the argument plus
     *  2<sup>64</sup> if the argument is negative; otherwise, it is
     *  equal to the argument.  This value is converted to a string of
     *  ASCII digits in octal (base&nbsp;8) with no extra leading
     *  {@code 0}s.
     *
     *  <p>The value of the argument can be recovered from the returned
     *  string {@code s} by calling {@link
     *  Long#parseUnsignedLong(String, int) Long.parseUnsignedLong(s,
     *  8)}.
     *
     *  <p>If the unsigned magnitude is zero, it is represented by a
     *  single zero character {@code '0'} ({@code '\u0030'});
     *  otherwise, the first character of the representation of the
     *  unsigned magnitude will not be the zero character. The
     *  following characters are used as octal digits:
     *
     *  <blockquote>
     *   {@code 01234567}
     *  </blockquote>
     *
     *  These are the characters {@code '\u0030'} through
     *  {@code '\u0037'}.
     * @param i a {@code long} to be converted to a string.
     * @return the string representation of the unsigned {@code long}&#xA; value represented by the argument in octal (base&nbsp;8).
     * @see #parseUnsignedLong(String, int)
     * @see #toUnsignedString(long, int)
     * @since JDK 1.0.2
     */
    toOctalString(i: number): string;

    /**
     * Returns a string representation of the {@code long}
     *  argument as an unsigned integer in base&nbsp;2.
     *
     *  <p>The unsigned {@code long} value is the argument plus
     *  2<sup>64</sup> if the argument is negative; otherwise, it is
     *  equal to the argument.  This value is converted to a string of
     *  ASCII digits in binary (base&nbsp;2) with no extra leading
     *  {@code 0}s.
     *
     *  <p>The value of the argument can be recovered from the returned
     *  string {@code s} by calling {@link
     *  Long#parseUnsignedLong(String, int) Long.parseUnsignedLong(s,
     *  2)}.
     *
     *  <p>If the unsigned magnitude is zero, it is represented by a
     *  single zero character {@code '0'} ({@code '\u0030'});
     *  otherwise, the first character of the representation of the
     *  unsigned magnitude will not be the zero character. The
     *  characters {@code '0'} ({@code '\u0030'}) and {@code
     *  '1'} ({@code '\u0031'}) are used as binary digits.
     * @param i a {@code long} to be converted to a string.
     * @return the string representation of the unsigned {@code long}&#xA; value represented by the argument in binary (base&nbsp;2).
     * @see #parseUnsignedLong(String, int)
     * @see #toUnsignedString(long, int)
     * @since JDK 1.0.2
     */
    toBinaryString(i: number): string;

    /**
     * Returns a {@code String} object representing the specified
     *  {@code long}.  The argument is converted to signed decimal
     *  representation and returned as a string, exactly as if the
     *  argument and the radix 10 were given as arguments to the {@link
     *  #toString(long, int)} method.
     * @param i a {@code long} to be converted.
     * @return a string representation of the argument in base&nbsp;10.
     */
    toString(i: number): string;

    /**
     * Returns a string representation of the argument as an unsigned
     *  decimal value.
     *
     *  The argument is converted to unsigned decimal representation
     *  and returned as a string exactly as if the argument and radix
     *  10 were given as arguments to the {@link #toUnsignedString(long,
     *  int)} method.
     * @param i an integer to be converted to an unsigned string.
     * @return an unsigned string representation of the argument.
     * @see #toUnsignedString(long, int)
     * @since 1.8
     */
    toUnsignedString(i: number): string;

    /**
     * Parses the string argument as a signed {@code long} in the
     *  radix specified by the second argument. The characters in the
     *  string must all be digits of the specified radix (as determined
     *  by whether {@link java.lang.Character#digit(char, int)} returns
     *  a nonnegative value), except that the first character may be an
     *  ASCII minus sign {@code '-'} ({@code '\u002D'}) to
     *  indicate a negative value or an ASCII plus sign {@code '+'}
     *  ({@code '\u002B'}) to indicate a positive value. The
     *  resulting {@code long} value is returned.
     *
     *  <p>Note that neither the character {@code L}
     *  ({@code '\u004C'}) nor {@code l}
     *  ({@code '\u006C'}) is permitted to appear at the end
     *  of the string as a type indicator, as would be permitted in
     *  Java programming language source code - except that either
     *  {@code L} or {@code l} may appear as a digit for a
     *  radix greater than or equal to 22.
     *
     *  <p>An exception of type {@code NumberFormatException} is
     *  thrown if any of the following situations occurs:
     *  <ul>
     *
     *  <li>The first argument is {@code null} or is a string of
     *  length zero.
     *
     *  <li>The {@code radix} is either smaller than {@link
     *  java.lang.Character#MIN_RADIX} or larger than {@link
     *  java.lang.Character#MAX_RADIX}.
     *
     *  <li>Any character of the string is not a digit of the specified
     *  radix, except that the first character may be a minus sign
     *  {@code '-'} ({@code '\u002d'}) or plus sign {@code
     *  '+'} ({@code '\u002B'}) provided that the string is
     *  longer than length 1.
     *
     *  <li>The value represented by the string is not a value of type
     *       {@code long}.
     *  </ul>
     *
     *  <p>Examples:
     *  <blockquote><pre>
     *  parseLong("0", 10) returns 0L
     *  parseLong("473", 10) returns 473L
     *  parseLong("+42", 10) returns 42L
     *  parseLong("-0", 10) returns 0L
     *  parseLong("-FF", 16) returns -255L
     *  parseLong("1100110", 2) returns 102L
     *  parseLong("99", 8) throws a NumberFormatException
     *  parseLong("Hazelnut", 10) throws a NumberFormatException
     *  parseLong("Hazelnut", 36) returns 1356099454469L
     *  </pre></blockquote>
     * @param s the {@code String} containing the&#xA; {@code long} representation to be parsed.
     * @param radix the radix to be used while parsing {@code s}.
     * @return the {@code long} represented by the string argument in&#xA; the specified radix.
     * @throws NumberFormatException if the string does not contain a&#xA; parsable {@code long}.
     */
    parseLong(s: String | string, radix: number): number;

    /**
     * Parses the string argument as a signed decimal {@code long}.
     *  The characters in the string must all be decimal digits, except
     *  that the first character may be an ASCII minus sign {@code '-'}
     *  ({@code \u002D'}) to indicate a negative value or an
     *  ASCII plus sign {@code '+'} ({@code '\u002B'}) to
     *  indicate a positive value. The resulting {@code long} value is
     *  returned, exactly as if the argument and the radix {@code 10}
     *  were given as arguments to the {@link
     *  #parseLong(java.lang.String, int)} method.
     *
     *  <p>Note that neither the character {@code L}
     *  ({@code '\u004C'}) nor {@code l}
     *  ({@code '\u006C'}) is permitted to appear at the end
     *  of the string as a type indicator, as would be permitted in
     *  Java programming language source code.
     * @param s a {@code String} containing the {@code long}&#xA; representation to be parsed
     * @return the {@code long} represented by the argument in&#xA; decimal.
     * @throws NumberFormatException if the string does not contain a&#xA; parsable {@code long}.
     */
    parseLong(s: String | string): number;

    /**
     * Parses the string argument as an unsigned {@code long} in the
     *  radix specified by the second argument.  An unsigned integer
     *  maps the values usually associated with negative numbers to
     *  positive numbers larger than {@code MAX_VALUE}.
     *
     *  The characters in the string must all be digits of the
     *  specified radix (as determined by whether {@link
     *  java.lang.Character#digit(char, int)} returns a nonnegative
     *  value), except that the first character may be an ASCII plus
     *  sign {@code '+'} ({@code '\u002B'}). The resulting
     *  integer value is returned.
     *
     *  <p>An exception of type {@code NumberFormatException} is
     *  thrown if any of the following situations occurs:
     *  <ul>
     *  <li>The first argument is {@code null} or is a string of
     *  length zero.
     *
     *  <li>The radix is either smaller than
     *  {@link java.lang.Character#MIN_RADIX} or
     *  larger than {@link java.lang.Character#MAX_RADIX}.
     *
     *  <li>Any character of the string is not a digit of the specified
     *  radix, except that the first character may be a plus sign
     *  {@code '+'} ({@code '\u002B'}) provided that the
     *  string is longer than length 1.
     *
     *  <li>The value represented by the string is larger than the
     *  largest unsigned {@code long}, 2<sup>64</sup>-1.
     *
     *  </ul>
     * @param s the {@code String} containing the unsigned integer&#xA; representation to be parsed
     * @param radix the radix to be used while parsing {@code s}.
     * @return the unsigned {@code long} represented by the string&#xA; argument in the specified radix.
     * @throws NumberFormatException if the {@code String}&#xA; does not contain a parsable {@code long}.
     * @since 1.8
     */
    parseUnsignedLong(s: String | string, radix: number): number;

    /**
     * Parses the string argument as an unsigned decimal {@code long}. The
     *  characters in the string must all be decimal digits, except
     *  that the first character may be an an ASCII plus sign {@code
     *  '+'} ({@code '\u002B'}). The resulting integer value
     *  is returned, exactly as if the argument and the radix 10 were
     *  given as arguments to the {@link
     *  #parseUnsignedLong(java.lang.String, int)} method.
     * @param s a {@code String} containing the unsigned {@code long}&#xA; representation to be parsed
     * @return the unsigned {@code long} value represented by the decimal string argument
     * @throws NumberFormatException if the string does not contain a&#xA; parsable unsigned integer.
     * @since 1.8
     */
    parseUnsignedLong(s: String | string): number;

    /**
     * Returns a {@code Long} object holding the value
     *  extracted from the specified {@code String} when parsed
     *  with the radix given by the second argument.  The first
     *  argument is interpreted as representing a signed
     *  {@code long} in the radix specified by the second
     *  argument, exactly as if the arguments were given to the {@link
     *  #parseLong(java.lang.String, int)} method. The result is a
     *  {@code Long} object that represents the {@code long}
     *  value specified by the string.
     *
     *  <p>In other words, this method returns a {@code Long} object equal
     *  to the value of:
     *
     *  <blockquote>
     *   {@code new Long(Long.parseLong(s, radix))}
     *  </blockquote>
     * @param s the string to be parsed
     * @param radix the radix to be used in interpreting {@code s}
     * @return a {@code Long} object holding the value&#xA; represented by the string argument in the specified&#xA; radix.
     * @throws NumberFormatException If the {@code String} does not&#xA; contain a parsable {@code long}.
     */
    valueOf(s: String | string, radix: number): number;

    /**
     * Returns a {@code Long} object holding the value
     *  of the specified {@code String}. The argument is
     *  interpreted as representing a signed decimal {@code long},
     *  exactly as if the argument were given to the {@link
     *  #parseLong(java.lang.String)} method. The result is a
     *  {@code Long} object that represents the integer value
     *  specified by the string.
     *
     *  <p>In other words, this method returns a {@code Long} object
     *  equal to the value of:
     *
     *  <blockquote>
     *   {@code new Long(Long.parseLong(s))}
     *  </blockquote>
     * @param s the string to be parsed.
     * @return a {@code Long} object holding the value&#xA; represented by the string argument.
     * @throws NumberFormatException If the string cannot be parsed&#xA; as a {@code long}.
     */
    valueOf(s: String | string): number;

    /**
     * Returns a {@code Long} instance representing the specified
     *  {@code long} value.
     *  If a new {@code Long} instance is not required, this method
     *  should generally be used in preference to the constructor
     *  {@link #Long(long)}, as this method is likely to yield
     *  significantly better space and time performance by caching
     *  frequently requested values.
     *
     *  Note that unlike the {@linkplain Integer#valueOf(int)
     *  corresponding method} in the {@code Integer} class, this method
     *  is <em>not</em> required to cache values within a particular
     *  range.
     * @param l a long value.
     * @return a {@code Long} instance representing {@code l}.
     * @since 1.5
     */
    valueOf(l: number): number;

    /**
     * Decodes a {@code String} into a {@code Long}.
     *  Accepts decimal, hexadecimal, and octal numbers given by the
     *  following grammar:
     *
     *  <blockquote>
     *  <dl>
     *  <dt><i>DecodableString:</i>
     *  <dd><i>Sign<sub>opt</sub> DecimalNumeral</i>
     *  <dd><i>Sign<sub>opt</sub></i> {@code 0x} <i>HexDigits</i>
     *  <dd><i>Sign<sub>opt</sub></i> {@code 0X} <i>HexDigits</i>
     *  <dd><i>Sign<sub>opt</sub></i> {@code #} <i>HexDigits</i>
     *  <dd><i>Sign<sub>opt</sub></i> {@code 0} <i>OctalDigits</i>
     *
     *  <dt><i>Sign:</i>
     *  <dd>{@code -}
     *  <dd>{@code +}
     *  </dl>
     *  </blockquote>
     *
     *  <i>DecimalNumeral</i>, <i>HexDigits</i>, and <i>OctalDigits</i>
     *  are as defined in section 3.10.1 of
     *  <cite>The Java&trade; Language Specification</cite>,
     *  except that underscores are not accepted between digits.
     *
     *  <p>The sequence of characters following an optional
     *  sign and/or radix specifier ("{@code 0x}", "{@code 0X}",
     *  "{@code #}", or leading zero) is parsed as by the {@code
     *  Long.parseLong} method with the indicated radix (10, 16, or 8).
     *  This sequence of characters must represent a positive value or
     *  a {@link NumberFormatException} will be thrown.  The result is
     *  negated if first character of the specified {@code String} is
     *  the minus sign.  No whitespace characters are permitted in the
     *  {@code String}.
     * @param nm the {@code String} to decode.
     * @return a {@code Long} object holding the {@code long}&#xA; value represented by {@code nm}
     * @throws NumberFormatException if the {@code String} does not&#xA; contain a parsable {@code long}.
     * @see java.lang.Long#parseLong(String, int)
     * @since 1.2
     */
    decode(nm: String | string): number;

    /**
     * Returns the value of this {@code Long} as a {@code byte} after
     *  a narrowing primitive conversion.
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    byteValue(): unknown;

    /**
     * Returns the value of this {@code Long} as a {@code short} after
     *  a narrowing primitive conversion.
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    shortValue(): number;

    /**
     * Returns the value of this {@code Long} as an {@code int} after
     *  a narrowing primitive conversion.
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    intValue(): number;

    /**
 * Returns the value of this {@code Long} as a
 *  {@code long} value.
  
    */
    longValue(): number;

    /**
     * Returns the value of this {@code Long} as a {@code float} after
     *  a widening primitive conversion.
     * @jls 5.1.2 Widening Primitive Conversions
     */
    floatValue(): number;

    /**
     * Returns the value of this {@code Long} as a {@code double}
     *  after a widening primitive conversion.
     * @jls 5.1.2 Widening Primitive Conversions
     */
    doubleValue(): number;

    /**
     * Returns a {@code String} object representing this
     *  {@code Long}'s value.  The value is converted to signed
     *  decimal representation and returned as a string, exactly as if
     *  the {@code long} value were given as an argument to the
     *  {@link java.lang.Long#toString(long)} method.
     * @return a string representation of the value of this object in&#xA; base&nbsp;10.
     */
    toString(): string;

    /**
     * Returns a hash code for this {@code Long}. The result is
     *  the exclusive OR of the two halves of the primitive
     *  {@code long} value held by this {@code Long}
     *  object. That is, the hashcode is the value of the expression:
     *
     *  <blockquote>
     *   {@code (int)(this.longValue()^(this.longValue()>>>32))}
     *  </blockquote>
     * @return a hash code value for this object.
     */
    hashCode(): number;

    /**
     * Returns a hash code for a {@code long} value; compatible with
     *  {@code Long.hashCode()}.
     * @param value the value to hash
     * @return a hash code value for a {@code long} value.
     * @since 1.8
     */
    hashCode(value: number): number;

    /**
     * Compares this object to the specified object.  The result is
     *  {@code true} if and only if the argument is not
     *  {@code null} and is a {@code Long} object that
     *  contains the same {@code long} value as this object.
     * @param obj the object to compare with.
     * @return {@code true} if the objects are the same;&#xA; {@code false} otherwise.
     */
    equals(obj: unknown): boolean;

    /**
     * Determines the {@code long} value of the system property
     *  with the specified name.
     *
     *  <p>The first argument is treated as the name of a system
     *  property.  System properties are accessible through the {@link
     *  java.lang.System#getProperty(java.lang.String)} method. The
     *  string value of this property is then interpreted as a {@code
     *  long} value using the grammar supported by {@link Long#decode decode}
     *  and a {@code Long} object representing this value is returned.
     *
     *  <p>If there is no property with the specified name, if the
     *  specified name is empty or {@code null}, or if the property
     *  does not have the correct numeric format, then {@code null} is
     *  returned.
     *
     *  <p>In other words, this method returns a {@code Long} object
     *  equal to the value of:
     *
     *  <blockquote>
     *   {@code getLong(nm, null)}
     *  </blockquote>
     * @param nm property name.
     * @return the {@code Long} value of the property.
     * @throws SecurityException for the same reasons as&#xA; {@link System#getProperty(String) System.getProperty}
     * @see java.lang.System#getProperty(java.lang.String)
     * @see java.lang.System#getProperty(java.lang.String, java.lang.String)
     */
    getLong(nm: String | string): number;

    /**
     * Determines the {@code long} value of the system property
     *  with the specified name.
     *
     *  <p>The first argument is treated as the name of a system
     *  property.  System properties are accessible through the {@link
     *  java.lang.System#getProperty(java.lang.String)} method. The
     *  string value of this property is then interpreted as a {@code
     *  long} value using the grammar supported by {@link Long#decode decode}
     *  and a {@code Long} object representing this value is returned.
     *
     *  <p>The second argument is the default value. A {@code Long} object
     *  that represents the value of the second argument is returned if there
     *  is no property of the specified name, if the property does not have
     *  the correct numeric format, or if the specified name is empty or null.
     *
     *  <p>In other words, this method returns a {@code Long} object equal
     *  to the value of:
     *
     *  <blockquote>
     *   {@code getLong(nm, new Long(val))}
     *  </blockquote>
     *
     *  but in practice it may be implemented in a manner such as:
     *
     *  <blockquote><pre>
     *  Long result = getLong(nm, null);
     *  return (result == null) ? new Long(val) : result;
     *  </pre></blockquote>
     *
     *  to avoid the unnecessary allocation of a {@code Long} object when
     *  the default value is not needed.
     * @param nm property name.
     * @param val default value.
     * @return the {@code Long} value of the property.
     * @throws SecurityException for the same reasons as&#xA; {@link System#getProperty(String) System.getProperty}
     * @see java.lang.System#getProperty(java.lang.String)
     * @see java.lang.System#getProperty(java.lang.String, java.lang.String)
     */
    getLong(nm: String | string, val: number): number;

    /**
     * Returns the {@code long} value of the system property with
     *  the specified name.  The first argument is treated as the name
     *  of a system property.  System properties are accessible through
     *  the {@link java.lang.System#getProperty(java.lang.String)}
     *  method. The string value of this property is then interpreted
     *  as a {@code long} value, as per the
     *  {@link Long#decode decode} method, and a {@code Long} object
     *  representing this value is returned; in summary:
     *
     *  <ul>
     *  <li>If the property value begins with the two ASCII characters
     *  {@code 0x} or the ASCII character {@code #}, not followed by
     *  a minus sign, then the rest of it is parsed as a hexadecimal integer
     *  exactly as for the method {@link #valueOf(java.lang.String, int)}
     *  with radix 16.
     *  <li>If the property value begins with the ASCII character
     *  {@code 0} followed by another character, it is parsed as
     *  an octal integer exactly as by the method {@link
     *  #valueOf(java.lang.String, int)} with radix 8.
     *  <li>Otherwise the property value is parsed as a decimal
     *  integer exactly as by the method
     *  {@link #valueOf(java.lang.String, int)} with radix 10.
     *  </ul>
     *
     *  <p>Note that, in every case, neither {@code L}
     *  ({@code '\u004C'}) nor {@code l}
     *  ({@code '\u006C'}) is permitted to appear at the end
     *  of the property value as a type indicator, as would be
     *  permitted in Java programming language source code.
     *
     *  <p>The second argument is the default value. The default value is
     *  returned if there is no property of the specified name, if the
     *  property does not have the correct numeric format, or if the
     *  specified name is empty or {@code null}.
     * @param nm property name.
     * @param val default value.
     * @return the {@code Long} value of the property.
     * @throws SecurityException for the same reasons as&#xA; {@link System#getProperty(String) System.getProperty}
     * @see System#getProperty(java.lang.String)
     * @see System#getProperty(java.lang.String, java.lang.String)
     */
    getLong(nm: String | string, val: Long | number): number;

    /**
     * Compares two {@code Long} objects numerically.
     * @param anotherLong the {@code Long} to be compared.
     * @return the value {@code 0} if this {@code Long} is&#xA; equal to the argument {@code Long}; a value less than&#xA; {@code 0} if this {@code Long} is numerically less&#xA; than the argument {@code Long}; and a value greater&#xA; than {@code 0} if this {@code Long} is numerically&#xA; greater than the argument {@code Long} (signed&#xA; comparison).
     * @since 1.2
     */
    compareTo(anotherLong: Long | number): number;

    /**
     * Compares two {@code long} values numerically.
     *  The value returned is identical to what would be returned by:
     *  <pre>
     *     Long.valueOf(x).compareTo(Long.valueOf(y))
     *  </pre>
     * @param x the first {@code long} to compare
     * @param y the second {@code long} to compare
     * @return the value {@code 0} if {@code x == y};&#xA; a value less than {@code 0} if {@code x < y}; and&#xA; a value greater than {@code 0} if {@code x > y}
     * @since 1.7
     */
    compare(x: number, y: number): number;

    /**
     * Compares two {@code long} values numerically treating the values
     *  as unsigned.
     * @param x the first {@code long} to compare
     * @param y the second {@code long} to compare
     * @return the value {@code 0} if {@code x == y}; a value less&#xA; than {@code 0} if {@code x < y} as unsigned values; and&#xA; a value greater than {@code 0} if {@code x > y} as&#xA; unsigned values
     * @since 1.8
     */
    compareUnsigned(x: number, y: number): number;

    /**
     * Returns the unsigned quotient of dividing the first argument by
     *  the second where each argument and the result is interpreted as
     *  an unsigned value.
     *
     *  <p>Note that in two's complement arithmetic, the three other
     *  basic arithmetic operations of add, subtract, and multiply are
     *  bit-wise identical if the two operands are regarded as both
     *  being signed or both being unsigned.  Therefore separate {@code
     *  addUnsigned}, etc. methods are not provided.
     * @param dividend the value to be divided
     * @param divisor the value doing the dividing
     * @return the unsigned quotient of the first argument divided by&#xA; the second argument
     * @see #remainderUnsigned
     * @since 1.8
     */
    divideUnsigned(dividend: number, divisor: number): number;

    /**
     * Returns the unsigned remainder from dividing the first argument
     *  by the second where each argument and the result is interpreted
     *  as an unsigned value.
     * @param dividend the value to be divided
     * @param divisor the value doing the dividing
     * @return the unsigned remainder of the first argument divided by&#xA; the second argument
     * @see #divideUnsigned
     * @since 1.8
     */
    remainderUnsigned(dividend: number, divisor: number): number;

    /**
     * Returns a {@code long} value with at most a single one-bit, in the
     *  position of the highest-order ("leftmost") one-bit in the specified
     *  {@code long} value.  Returns zero if the specified value has no
     *  one-bits in its two's complement binary representation, that is, if it
     *  is equal to zero.
     * @param i the value whose highest one bit is to be computed
     * @return a {@code long} value with a single one-bit, in the position&#xA; of the highest-order one-bit in the specified value, or zero if&#xA; the specified value is itself equal to zero.
     * @since 1.5
     */
    highestOneBit(i: number): number;

    /**
     * Returns a {@code long} value with at most a single one-bit, in the
     *  position of the lowest-order ("rightmost") one-bit in the specified
     *  {@code long} value.  Returns zero if the specified value has no
     *  one-bits in its two's complement binary representation, that is, if it
     *  is equal to zero.
     * @param i the value whose lowest one bit is to be computed
     * @return a {@code long} value with a single one-bit, in the position&#xA; of the lowest-order one-bit in the specified value, or zero if&#xA; the specified value is itself equal to zero.
     * @since 1.5
     */
    lowestOneBit(i: number): number;

    /**
     * Returns the number of zero bits preceding the highest-order
     *  ("leftmost") one-bit in the two's complement binary representation
     *  of the specified {@code long} value.  Returns 64 if the
     *  specified value has no one-bits in its two's complement representation,
     *  in other words if it is equal to zero.
     *
     *  <p>Note that this method is closely related to the logarithm base 2.
     *  For all positive {@code long} values x:
     *  <ul>
     *  <li>floor(log<sub>2</sub>(x)) = {@code 63 - numberOfLeadingZeros(x)}
     *  <li>ceil(log<sub>2</sub>(x)) = {@code 64 - numberOfLeadingZeros(x - 1)}
     *  </ul>
     * @param i the value whose number of leading zeros is to be computed
     * @return the number of zero bits preceding the highest-order&#xA; ("leftmost") one-bit in the two's complement binary representation&#xA; of the specified {@code long} value, or 64 if the value&#xA; is equal to zero.
     * @since 1.5
     */
    numberOfLeadingZeros(i: number): number;

    /**
     * Returns the number of zero bits following the lowest-order ("rightmost")
     *  one-bit in the two's complement binary representation of the specified
     *  {@code long} value.  Returns 64 if the specified value has no
     *  one-bits in its two's complement representation, in other words if it is
     *  equal to zero.
     * @param i the value whose number of trailing zeros is to be computed
     * @return the number of zero bits following the lowest-order ("rightmost")&#xA; one-bit in the two's complement binary representation of the&#xA; specified {@code long} value, or 64 if the value is equal&#xA; to zero.
     * @since 1.5
     */
    numberOfTrailingZeros(i: number): number;

    /**
     * Returns the number of one-bits in the two's complement binary
     *  representation of the specified {@code long} value.  This function is
     *  sometimes referred to as the <i>population count</i>.
     * @param i the value whose bits are to be counted
     * @return the number of one-bits in the two's complement binary&#xA; representation of the specified {@code long} value.
     * @since 1.5
     */
    bitCount(i: number): number;

    /**
     * Returns the value obtained by rotating the two's complement binary
     *  representation of the specified {@code long} value left by the
     *  specified number of bits.  (Bits shifted out of the left hand, or
     *  high-order, side reenter on the right, or low-order.)
     *
     *  <p>Note that left rotation with a negative distance is equivalent to
     *  right rotation: {@code rotateLeft(val, -distance) == rotateRight(val,
     *  distance)}.  Note also that rotation by any multiple of 64 is a
     *  no-op, so all but the last six bits of the rotation distance can be
     *  ignored, even if the distance is negative: {@code rotateLeft(val,
     *  distance) == rotateLeft(val, distance & 0x3F)}.
     * @param i the value whose bits are to be rotated left
     * @param distance the number of bit positions to rotate left
     * @return the value obtained by rotating the two's complement binary&#xA; representation of the specified {@code long} value left by the&#xA; specified number of bits.
     * @since 1.5
     */
    rotateLeft(i: number, distance: number): number;

    /**
     * Returns the value obtained by rotating the two's complement binary
     *  representation of the specified {@code long} value right by the
     *  specified number of bits.  (Bits shifted out of the right hand, or
     *  low-order, side reenter on the left, or high-order.)
     *
     *  <p>Note that right rotation with a negative distance is equivalent to
     *  left rotation: {@code rotateRight(val, -distance) == rotateLeft(val,
     *  distance)}.  Note also that rotation by any multiple of 64 is a
     *  no-op, so all but the last six bits of the rotation distance can be
     *  ignored, even if the distance is negative: {@code rotateRight(val,
     *  distance) == rotateRight(val, distance & 0x3F)}.
     * @param i the value whose bits are to be rotated right
     * @param distance the number of bit positions to rotate right
     * @return the value obtained by rotating the two's complement binary&#xA; representation of the specified {@code long} value right by the&#xA; specified number of bits.
     * @since 1.5
     */
    rotateRight(i: number, distance: number): number;

    /**
     * Returns the value obtained by reversing the order of the bits in the
     *  two's complement binary representation of the specified {@code long}
     *  value.
     * @param i the value to be reversed
     * @return the value obtained by reversing order of the bits in the&#xA; specified {@code long} value.
     * @since 1.5
     */
    reverse(i: number): number;

    /**
     * Returns the signum function of the specified {@code long} value.  (The
     *  return value is -1 if the specified value is negative; 0 if the
     *  specified value is zero; and 1 if the specified value is positive.)
     * @param i the value whose signum is to be computed
     * @return the signum function of the specified {@code long} value.
     * @since 1.5
     */
    signum(i: number): number;

    /**
     * Returns the value obtained by reversing the order of the bytes in the
     *  two's complement representation of the specified {@code long} value.
     * @param i the value whose bytes are to be reversed
     * @return the value obtained by reversing the bytes in the specified&#xA; {@code long} value.
     * @since 1.5
     */
    reverseBytes(i: number): number;

    /**
     * Adds two {@code long} values together as per the + operator.
     * @param a the first operand
     * @param b the second operand
     * @return the sum of {@code a} and {@code b}
     * @see java.util.function.BinaryOperator
     * @since 1.8
     */
    sum(a: number, b: number): number;

    /**
     * Returns the greater of two {@code long} values
     *  as if by calling {@link Math#max(long, long) Math.max}.
     * @param a the first operand
     * @param b the second operand
     * @return the greater of {@code a} and {@code b}
     * @see java.util.function.BinaryOperator
     * @since 1.8
     */
    max(a: number, b: number): number;

    /**
     * Returns the smaller of two {@code long} values
     *  as if by calling {@link Math#min(long, long) Math.min}.
     * @param a the first operand
     * @param b the second operand
     * @return the smaller of {@code a} and {@code b}
     * @see java.util.function.BinaryOperator
     * @since 1.8
     */
    min(a: number, b: number): number;

    /**
 * A constant holding the minimum value a {@code long} can
 *  have, -2<sup>63</sup>.
  
    */
    MIN_VALUE: number;

    /**
 * A constant holding the maximum value a {@code long} can
 *  have, 2<sup>63</sup>-1.
  
    */
    MAX_VALUE: number;

    /**
     * The {@code Class} instance representing the primitive type
     *  {@code long}.
     * @since JDK1.1
     */
    TYPE: Class;

    /**
     * The number of bits used to represent a {@code long} value in two's
     *  complement binary form.
     * @since 1.5
     */
    SIZE: number;

    /**
     * The number of bytes used to represent a {@code long} value in two's
     *  complement binary form.
     * @since 1.8
     */
    BYTES: number;
  };
