import type { Charset } from "../../nio/charset/Charset";
import type { Object } from "../Object";
import type { StringBuffer } from "../StringBuffer";
import type { CharSequence } from "../CharSequence";
import type { Locale } from "../../util/Locale";
import type { Serializable } from "../../io/Serializable";
import type { Comparable } from "../Comparable";
import type { Comparator } from "../../util/Comparator";

/**
 * The {@code String} class represents character strings. All
 *  string literals in Java programs, such as {@code "abc"}, are
 *  implemented as instances of this class.
 *  <p>
 *  Strings are constant; their values cannot be changed after they
 *  are created. String buffers support mutable strings.
 *  Because String objects are immutable they can be shared. For example:
 *  <blockquote><pre>
 *      String str = "abc";
 *  </pre></blockquote><p>
 *  is equivalent to:
 *  <blockquote><pre>
 *      char data[] = {'a', 'b', 'c'};
 *      String str = new String(data);
 *  </pre></blockquote><p>
 *  Here are some more examples of how strings can be used:
 *  <blockquote><pre>
 *      System.out.println("abc");
 *      String cde = "cde";
 *      System.out.println("abc" + cde);
 *      String c = "abc".substring(2,3);
 *      String d = cde.substring(1, 2);
 *  </pre></blockquote>
 *  <p>
 *  The class {@code String} includes methods for examining
 *  individual characters of the sequence, for comparing strings, for
 *  searching strings, for extracting substrings, and for creating a
 *  copy of a string with all characters translated to uppercase or to
 *  lowercase. Case mapping is based on the Unicode Standard version
 *  specified by the {@link java.lang.Character Character} class.
 *  <p>
 *  The Java language provides special support for the string
 *  concatenation operator (&nbsp;+&nbsp;), and for conversion of
 *  other objects to strings. String concatenation is implemented
 *  through the {@code StringBuilder}(or {@code StringBuffer})
 *  class and its {@code append} method.
 *  String conversions are implemented through the method
 *  {@code toString}, defined by {@code Object} and
 *  inherited by all classes in Java. For additional information on
 *  string concatenation and conversion, see Gosling, Joy, and Steele,
 *  <i>The Java Language Specification</i>.
 *
 *  <p> Unless otherwise noted, passing a <tt>null</tt> argument to a constructor
 *  or method in this class will cause a {@link NullPointerException} to be
 *  thrown.
 *
 *  <p>A {@code String} represents a string in the UTF-16 format
 *  in which <em>supplementary characters</em> are represented by <em>surrogate
 *  pairs</em> (see the section <a href="Character.html#unicode">Unicode
 *  Character Representations</a> in the {@code Character} class for
 *  more information).
 *  Index values refer to {@code char} code units, so a supplementary
 *  character uses two positions in a {@code String}.
 *  <p>The {@code String} class provides methods for dealing with
 *  Unicode code points (i.e., characters), in addition to those for
 *  dealing with Unicode code units (i.e., {@code char} values).
 * @author Lee Boynton
 * @author Arthur van Hoff
 * @author Martin Buchholz
 * @author Ulf Zibis
 * @see java.lang.Object#toString()
 * @see java.lang.StringBuffer
 * @see java.lang.StringBuilder
 * @see java.nio.charset.Charset
 * @since JDK1.0
 */
export type String = Object &
  Serializable &
  Comparable &
  CharSequence & {
    /**
     * Returns the length of this string.
     *  The length is equal to the number of <a href="Character.html#unicode">Unicode
     *  code units</a> in the string.
     * @return the length of the sequence of characters represented by this&#xA; object.
     */
    length(): number;

    /**
     * Returns {@code true} if, and only if, {@link #length()} is {@code 0}.
     * @return {@code true} if {@link #length()} is {@code 0}, otherwise&#xA; {@code false}
     * @since 1.6
     */
    isEmpty(): boolean;

    /**
     * Returns the {@code char} value at the
     *  specified index. An index ranges from {@code 0} to
     *  {@code length() - 1}. The first {@code char} value of the sequence
     *  is at index {@code 0}, the next at index {@code 1},
     *  and so on, as for array indexing.
     *
     *  <p>If the {@code char} value specified by the index is a
     *  <a href="Character.html#unicode">surrogate</a>, the surrogate
     *  value is returned.
     * @param index the index of the {@code char} value.
     * @return the {@code char} value at the specified index of this string.&#xA; The first {@code char} value is at index {@code 0}.
     * @throws IndexOutOfBoundsException if the {@code index}&#xA; argument is negative or not less than the length of this&#xA; string.
     */
    charAt(index: number): string;

    /**
     * Returns the character (Unicode code point) at the specified
     *  index. The index refers to {@code char} values
     *  (Unicode code units) and ranges from {@code 0} to
     *  {@link #length()}{@code  - 1}.
     *
     *  <p> If the {@code char} value specified at the given index
     *  is in the high-surrogate range, the following index is less
     *  than the length of this {@code String}, and the
     *  {@code char} value at the following index is in the
     *  low-surrogate range, then the supplementary code point
     *  corresponding to this surrogate pair is returned. Otherwise,
     *  the {@code char} value at the given index is returned.
     * @param index the index to the {@code char} values
     * @return the code point value of the character at the&#xA; {@code index}
     * @throws IndexOutOfBoundsException if the {@code index}&#xA; argument is negative or not less than the length of this&#xA; string.
     * @since 1.5
     */
    codePointAt(index: number): number;

    /**
     * Returns the character (Unicode code point) before the specified
     *  index. The index refers to {@code char} values
     *  (Unicode code units) and ranges from {@code 1} to {@link
     *  CharSequence#length() length}.
     *
     *  <p> If the {@code char} value at {@code (index - 1)}
     *  is in the low-surrogate range, {@code (index - 2)} is not
     *  negative, and the {@code char} value at {@code (index -
     *  2)} is in the high-surrogate range, then the
     *  supplementary code point value of the surrogate pair is
     *  returned. If the {@code char} value at {@code index -
     *  1} is an unpaired low-surrogate or a high-surrogate, the
     *  surrogate value is returned.
     * @param index the index following the code point that should be returned
     * @return the Unicode code point value before the given index.
     * @throws IndexOutOfBoundsException if the {@code index}&#xA; argument is less than 1 or greater than the length&#xA; of this string.
     * @since 1.5
     */
    codePointBefore(index: number): number;

    /**
     * Returns the number of Unicode code points in the specified text
     *  range of this {@code String}. The text range begins at the
     *  specified {@code beginIndex} and extends to the
     *  {@code char} at index {@code endIndex - 1}. Thus the
     *  length (in {@code char}s) of the text range is
     *  {@code endIndex-beginIndex}. Unpaired surrogates within
     *  the text range count as one code point each.
     * @param beginIndex the index to the first {@code char} of&#xA; the text range.
     * @param endIndex the index after the last {@code char} of&#xA; the text range.
     * @return the number of Unicode code points in the specified text&#xA; range
     * @throws IndexOutOfBoundsException if the&#xA; {@code beginIndex} is negative, or {@code endIndex}&#xA; is larger than the length of this {@code String}, or&#xA; {@code beginIndex} is larger than {@code endIndex}.
     * @since 1.5
     */
    codePointCount(beginIndex: number, endIndex: number): number;

    /**
     * Returns the index within this {@code String} that is
     *  offset from the given {@code index} by
     *  {@code codePointOffset} code points. Unpaired surrogates
     *  within the text range given by {@code index} and
     *  {@code codePointOffset} count as one code point each.
     * @param index the index to be offset
     * @param codePointOffset the offset in code points
     * @return the index within this {@code String}
     * @throws IndexOutOfBoundsException if {@code index}&#xA; is negative or larger then the length of this&#xA; {@code String}, or if {@code codePointOffset} is positive&#xA; and the substring starting with {@code index} has fewer&#xA; than {@code codePointOffset} code points,&#xA; or if {@code codePointOffset} is negative and the substring&#xA; before {@code index} has fewer than the absolute value&#xA; of {@code codePointOffset} code points.
     * @since 1.5
     */
    offsetByCodePoints(index: number, codePointOffset: number): number;

    /**
     * Copies characters from this string into the destination character
     *  array.
     *  <p>
     *  The first character to be copied is at index {@code srcBegin};
     *  the last character to be copied is at index {@code srcEnd-1}
     *  (thus the total number of characters to be copied is
     *  {@code srcEnd-srcBegin}). The characters are copied into the
     *  subarray of {@code dst} starting at index {@code dstBegin}
     *  and ending at index:
     *  <blockquote><pre>
     *      dstBegin + (srcEnd-srcBegin) - 1
     *  </pre></blockquote>
     * @param srcBegin index of the first character in the string&#xA; to copy.
     * @param srcEnd index after the last character in the string&#xA; to copy.
     * @param dst the destination array.
     * @param dstBegin the start offset in the destination array.
     * @throws IndexOutOfBoundsException If any of the following&#xA; is true:&#xA; <ul><li>{@code srcBegin} is negative.&#xA; <li>{@code srcBegin} is greater than {@code srcEnd}&#xA; <li>{@code srcEnd} is greater than the length of this&#xA; string&#xA; <li>{@code dstBegin} is negative&#xA; <li>{@code dstBegin+(srcEnd-srcBegin)} is larger than&#xA; {@code dst.length}</ul>
     */
    getChars(
      srcBegin: number,
      srcEnd: number,
      dst: string[],
      dstBegin: number
    ): void;

    /**
     * Copies characters from this string into the destination byte array. Each
     *  byte receives the 8 low-order bits of the corresponding character. The
     *  eight high-order bits of each character are not copied and do not
     *  participate in the transfer in any way.
     *
     *  <p> The first character to be copied is at index {@code srcBegin}; the
     *  last character to be copied is at index {@code srcEnd-1}.  The total
     *  number of characters to be copied is {@code srcEnd-srcBegin}. The
     *  characters, converted to bytes, are copied into the subarray of {@code
     *  dst} starting at index {@code dstBegin} and ending at index:
     *
     *  <blockquote><pre>
     *      dstBegin + (srcEnd-srcBegin) - 1
     *  </pre></blockquote>
     * @deprecated This method does not properly convert characters into&#xA; bytes. As of JDK&nbsp;1.1, the preferred way to do this is via the&#xA; {@link #getBytes()} method, which uses the platform's default charset.
     * @param srcBegin&#xA; Index of the first character in the string to copy
     * @param srcEnd&#xA; Index after the last character in the string to copy
     * @param dst&#xA; The destination array
     * @param dstBegin&#xA; The start offset in the destination array
     * @throws IndexOutOfBoundsException&#xA; If any of the following is true:&#xA; <ul>&#xA; <li> {@code srcBegin} is negative&#xA; <li> {@code srcBegin} is greater than {@code srcEnd}&#xA; <li> {@code srcEnd} is greater than the length of this String&#xA; <li> {@code dstBegin} is negative&#xA; <li> {@code dstBegin+(srcEnd-srcBegin)} is larger than {@code&#xA; dst.length}&#xA; </ul>
     */
    getBytes(
      srcBegin: number,
      srcEnd: number,
      dst: unknown[],
      dstBegin: number
    ): void;

    /**
     * Encodes this {@code String} into a sequence of bytes using the named
     *  charset, storing the result into a new byte array.
     *
     *  <p> The behavior of this method when this string cannot be encoded in
     *  the given charset is unspecified.  The {@link
     *  java.nio.charset.CharsetEncoder} class should be used when more control
     *  over the encoding process is required.
     * @param charsetName&#xA; The name of a supported {@linkplain java.nio.charset.Charset&#xA; charset}
     * @return The resultant byte array
     * @throws UnsupportedEncodingException&#xA; If the named charset is not supported
     * @since JDK1.1
     */
    getBytes(charsetName: String | string): unknown;

    /**
     * Encodes this {@code String} into a sequence of bytes using the given
     *  {@linkplain java.nio.charset.Charset charset}, storing the result into a
     *  new byte array.
     *
     *  <p> This method always replaces malformed-input and unmappable-character
     *  sequences with this charset's default replacement byte array.  The
     *  {@link java.nio.charset.CharsetEncoder} class should be used when more
     *  control over the encoding process is required.
     * @param charset&#xA; The {@linkplain java.nio.charset.Charset} to be used to encode&#xA; the {@code String}
     * @return The resultant byte array
     * @since 1.6
     */
    getBytes(charset: Charset): unknown;

    /**
     * Encodes this {@code String} into a sequence of bytes using the
     *  platform's default charset, storing the result into a new byte array.
     *
     *  <p> The behavior of this method when this string cannot be encoded in
     *  the default charset is unspecified.  The {@link
     *  java.nio.charset.CharsetEncoder} class should be used when more control
     *  over the encoding process is required.
     * @return The resultant byte array
     * @since JDK1.1
     */
    getBytes(): unknown;

    /**
     * Compares this string to the specified object.  The result is {@code
     *  true} if and only if the argument is not {@code null} and is a {@code
     *  String} object that represents the same sequence of characters as this
     *  object.
     * @param anObject&#xA; The object to compare this {@code String} against
     * @return {@code true} if the given object represents a {@code String}&#xA; equivalent to this string, {@code false} otherwise
     * @see #compareTo(String)
     * @see #equalsIgnoreCase(String)
     */
    equals(anObject: unknown): boolean;

    /**
     * Compares this string to the specified {@code StringBuffer}.  The result
     *  is {@code true} if and only if this {@code String} represents the same
     *  sequence of characters as the specified {@code StringBuffer}. This method
     *  synchronizes on the {@code StringBuffer}.
     * @param sb&#xA; The {@code StringBuffer} to compare this {@code String} against
     * @return {@code true} if this {@code String} represents the same&#xA; sequence of characters as the specified {@code StringBuffer},&#xA; {@code false} otherwise
     * @since 1.4
     */
    contentEquals(sb: StringBuffer): boolean;

    /**
     * Compares this string to the specified {@code CharSequence}.  The
     *  result is {@code true} if and only if this {@code String} represents the
     *  same sequence of char values as the specified sequence. Note that if the
     *  {@code CharSequence} is a {@code StringBuffer} then the method
     *  synchronizes on it.
     * @param cs&#xA; The sequence to compare this {@code String} against
     * @return {@code true} if this {@code String} represents the same&#xA; sequence of char values as the specified sequence, {@code&#xA; false} otherwise
     * @since 1.5
     */
    contentEquals(cs: CharSequence): boolean;

    /**
     * Compares this {@code String} to another {@code String}, ignoring case
     *  considerations.  Two strings are considered equal ignoring case if they
     *  are of the same length and corresponding characters in the two strings
     *  are equal ignoring case.
     *
     *  <p> Two characters {@code c1} and {@code c2} are considered the same
     *  ignoring case if at least one of the following is true:
     *  <ul>
     *    <li> The two characters are the same (as compared by the
     *         {@code ==} operator)
     *    <li> Applying the method {@link
     *         java.lang.Character#toUpperCase(char)} to each character
     *         produces the same result
     *    <li> Applying the method {@link
     *         java.lang.Character#toLowerCase(char)} to each character
     *         produces the same result
     *  </ul>
     * @param anotherString&#xA; The {@code String} to compare this {@code String} against
     * @return {@code true} if the argument is not {@code null} and it&#xA; represents an equivalent {@code String} ignoring case; {@code&#xA; false} otherwise
     * @see #equals(Object)
     */
    equalsIgnoreCase(anotherString: String | string): boolean;

    /**
     * Compares two strings lexicographically.
     *  The comparison is based on the Unicode value of each character in
     *  the strings. The character sequence represented by this
     *  {@code String} object is compared lexicographically to the
     *  character sequence represented by the argument string. The result is
     *  a negative integer if this {@code String} object
     *  lexicographically precedes the argument string. The result is a
     *  positive integer if this {@code String} object lexicographically
     *  follows the argument string. The result is zero if the strings
     *  are equal; {@code compareTo} returns {@code 0} exactly when
     *  the {@link #equals(Object)} method would return {@code true}.
     *  <p>
     *  This is the definition of lexicographic ordering. If two strings are
     *  different, then either they have different characters at some index
     *  that is a valid index for both strings, or their lengths are different,
     *  or both. If they have different characters at one or more index
     *  positions, let <i>k</i> be the smallest such index; then the string
     *  whose character at position <i>k</i> has the smaller value, as
     *  determined by using the &lt; operator, lexicographically precedes the
     *  other string. In this case, {@code compareTo} returns the
     *  difference of the two character values at position {@code k} in
     *  the two string -- that is, the value:
     *  <blockquote><pre>
     *  this.charAt(k)-anotherString.charAt(k)
     *  </pre></blockquote>
     *  If there is no index position at which they differ, then the shorter
     *  string lexicographically precedes the longer string. In this case,
     *  {@code compareTo} returns the difference of the lengths of the
     *  strings -- that is, the value:
     *  <blockquote><pre>
     *  this.length()-anotherString.length()
     *  </pre></blockquote>
     * @param anotherString the {@code String} to be compared.
     * @return the value {@code 0} if the argument string is equal to&#xA; this string; a value less than {@code 0} if this string&#xA; is lexicographically less than the string argument; and a&#xA; value greater than {@code 0} if this string is&#xA; lexicographically greater than the string argument.
     */
    compareTo(anotherString: String | string): number;

    /**
     * Compares two strings lexicographically, ignoring case
     *  differences. This method returns an integer whose sign is that of
     *  calling {@code compareTo} with normalized versions of the strings
     *  where case differences have been eliminated by calling
     *  {@code Character.toLowerCase(Character.toUpperCase(character))} on
     *  each character.
     *  <p>
     *  Note that this method does <em>not</em> take locale into account,
     *  and will result in an unsatisfactory ordering for certain locales.
     *  The java.text package provides <em>collators</em> to allow
     *  locale-sensitive ordering.
     * @param str the {@code String} to be compared.
     * @return a negative integer, zero, or a positive integer as the&#xA; specified String is greater than, equal to, or less&#xA; than this String, ignoring case considerations.
     * @see java.text.Collator#compare(String, String)
     * @since 1.2
     */
    compareToIgnoreCase(str: String | string): number;

    /**
     * Tests if two string regions are equal.
     *  <p>
     *  A substring of this {@code String} object is compared to a substring
     *  of the argument other. The result is true if these substrings
     *  represent identical character sequences. The substring of this
     *  {@code String} object to be compared begins at index {@code toffset}
     *  and has length {@code len}. The substring of other to be compared
     *  begins at index {@code ooffset} and has length {@code len}. The
     *  result is {@code false} if and only if at least one of the following
     *  is true:
     *  <ul><li>{@code toffset} is negative.
     *  <li>{@code ooffset} is negative.
     *  <li>{@code toffset+len} is greater than the length of this
     *  {@code String} object.
     *  <li>{@code ooffset+len} is greater than the length of the other
     *  argument.
     *  <li>There is some nonnegative integer <i>k</i> less than {@code len}
     *  such that:
     *  {@code this.charAt(toffset + }<i>k</i>{@code ) != other.charAt(ooffset + }
     *  <i>k</i>{@code )}
     *  </ul>
     * @param toffset the starting offset of the subregion in this string.
     * @param other the string argument.
     * @param ooffset the starting offset of the subregion in the string&#xA; argument.
     * @param len the number of characters to compare.
     * @return {@code true} if the specified subregion of this string&#xA; exactly matches the specified subregion of the string argument;&#xA; {@code false} otherwise.
     */
    regionMatches(
      toffset: number,
      other: String | string,
      ooffset: number,
      len: number
    ): boolean;

    /**
     * Tests if two string regions are equal.
     *  <p>
     *  A substring of this {@code String} object is compared to a substring
     *  of the argument {@code other}. The result is {@code true} if these
     *  substrings represent character sequences that are the same, ignoring
     *  case if and only if {@code ignoreCase} is true. The substring of
     *  this {@code String} object to be compared begins at index
     *  {@code toffset} and has length {@code len}. The substring of
     *  {@code other} to be compared begins at index {@code ooffset} and
     *  has length {@code len}. The result is {@code false} if and only if
     *  at least one of the following is true:
     *  <ul><li>{@code toffset} is negative.
     *  <li>{@code ooffset} is negative.
     *  <li>{@code toffset+len} is greater than the length of this
     *  {@code String} object.
     *  <li>{@code ooffset+len} is greater than the length of the other
     *  argument.
     *  <li>{@code ignoreCase} is {@code false} and there is some nonnegative
     *  integer <i>k</i> less than {@code len} such that:
     *  <blockquote><pre>
     *  this.charAt(toffset+k) != other.charAt(ooffset+k)
     *  </pre></blockquote>
     *  <li>{@code ignoreCase} is {@code true} and there is some nonnegative
     *  integer <i>k</i> less than {@code len} such that:
     *  <blockquote><pre>
     *  Character.toLowerCase(this.charAt(toffset+k)) !=
     *      Character.toLowerCase(other.charAt(ooffset+k))
     *  </pre></blockquote>
     *  and:
     *  <blockquote><pre>
     *  Character.toUpperCase(this.charAt(toffset+k)) !=
     *          Character.toUpperCase(other.charAt(ooffset+k))
     *  </pre></blockquote>
     *  </ul>
     * @param ignoreCase if {@code true}, ignore case when comparing&#xA; characters.
     * @param toffset the starting offset of the subregion in this&#xA; string.
     * @param other the string argument.
     * @param ooffset the starting offset of the subregion in the string&#xA; argument.
     * @param len the number of characters to compare.
     * @return {@code true} if the specified subregion of this string&#xA; matches the specified subregion of the string argument;&#xA; {@code false} otherwise. Whether the matching is exact&#xA; or case insensitive depends on the {@code ignoreCase}&#xA; argument.
     */
    regionMatches(
      ignoreCase: boolean,
      toffset: number,
      other: String | string,
      ooffset: number,
      len: number
    ): boolean;

    /**
     * Tests if the substring of this string beginning at the
     *  specified index starts with the specified prefix.
     * @param prefix the prefix.
     * @param toffset where to begin looking in this string.
     * @return {@code true} if the character sequence represented by the&#xA; argument is a prefix of the substring of this object starting&#xA; at index {@code toffset}; {@code false} otherwise.&#xA; The result is {@code false} if {@code toffset} is&#xA; negative or greater than the length of this&#xA; {@code String} object; otherwise the result is the same&#xA; as the result of the expression&#xA; <pre>&#xA; this.substring(toffset).startsWith(prefix)&#xA; </pre>
     */
    startsWith(prefix: String | string, toffset: number): boolean;

    /**
     * Tests if this string starts with the specified prefix.
     * @param prefix the prefix.
     * @return {@code true} if the character sequence represented by the&#xA; argument is a prefix of the character sequence represented by&#xA; this string; {@code false} otherwise.&#xA; Note also that {@code true} will be returned if the&#xA; argument is an empty string or is equal to this&#xA; {@code String} object as determined by the&#xA; {@link #equals(Object)} method.
     * @since 1. 0
     */
    startsWith(prefix: String | string): boolean;

    /**
     * Tests if this string ends with the specified suffix.
     * @param suffix the suffix.
     * @return {@code true} if the character sequence represented by the&#xA; argument is a suffix of the character sequence represented by&#xA; this object; {@code false} otherwise. Note that the&#xA; result will be {@code true} if the argument is the&#xA; empty string or is equal to this {@code String} object&#xA; as determined by the {@link #equals(Object)} method.
     */
    endsWith(suffix: String | string): boolean;

    /**
     * Returns a hash code for this string. The hash code for a
     *  {@code String} object is computed as
     *  <blockquote><pre>
     *  s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
     *  </pre></blockquote>
     *  using {@code int} arithmetic, where {@code s[i]} is the
     *  <i>i</i>th character of the string, {@code n} is the length of
     *  the string, and {@code ^} indicates exponentiation.
     *  (The hash value of the empty string is zero.)
     * @return a hash code value for this object.
     */
    hashCode(): number;

    /**
     * Returns the index within this string of the first occurrence of
     *  the specified character. If a character with value
     *  {@code ch} occurs in the character sequence represented by
     *  this {@code String} object, then the index (in Unicode
     *  code units) of the first such occurrence is returned. For
     *  values of {@code ch} in the range from 0 to 0xFFFF
     *  (inclusive), this is the smallest value <i>k</i> such that:
     *  <blockquote><pre>
     *  this.charAt(<i>k</i>) == ch
     *  </pre></blockquote>
     *  is true. For other values of {@code ch}, it is the
     *  smallest value <i>k</i> such that:
     *  <blockquote><pre>
     *  this.codePointAt(<i>k</i>) == ch
     *  </pre></blockquote>
     *  is true. In either case, if no such character occurs in this
     *  string, then {@code -1} is returned.
     * @param ch a character (Unicode code point).
     * @return the index of the first occurrence of the character in the&#xA; character sequence represented by this object, or&#xA; {@code -1} if the character does not occur.
     */
    indexOf(ch: number): number;

    /**
     * Returns the index within this string of the first occurrence of the
     *  specified character, starting the search at the specified index.
     *  <p>
     *  If a character with value {@code ch} occurs in the
     *  character sequence represented by this {@code String}
     *  object at an index no smaller than {@code fromIndex}, then
     *  the index of the first such occurrence is returned. For values
     *  of {@code ch} in the range from 0 to 0xFFFF (inclusive),
     *  this is the smallest value <i>k</i> such that:
     *  <blockquote><pre>
     *  (this.charAt(<i>k</i>) == ch) {@code &&} (<i>k</i> &gt;= fromIndex)
     *  </pre></blockquote>
     *  is true. For other values of {@code ch}, it is the
     *  smallest value <i>k</i> such that:
     *  <blockquote><pre>
     *  (this.codePointAt(<i>k</i>) == ch) {@code &&} (<i>k</i> &gt;= fromIndex)
     *  </pre></blockquote>
     *  is true. In either case, if no such character occurs in this
     *  string at or after position {@code fromIndex}, then
     *  {@code -1} is returned.
     *
     *  <p>
     *  There is no restriction on the value of {@code fromIndex}. If it
     *  is negative, it has the same effect as if it were zero: this entire
     *  string may be searched. If it is greater than the length of this
     *  string, it has the same effect as if it were equal to the length of
     *  this string: {@code -1} is returned.
     *
     *  <p>All indices are specified in {@code char} values
     *  (Unicode code units).
     * @param ch a character (Unicode code point).
     * @param fromIndex the index to start the search from.
     * @return the index of the first occurrence of the character in the&#xA; character sequence represented by this object that is greater&#xA; than or equal to {@code fromIndex}, or {@code -1}&#xA; if the character does not occur.
     */
    indexOf(ch: number, fromIndex: number): number;

    /**
     * Returns the index within this string of the last occurrence of
     *  the specified character. For values of {@code ch} in the
     *  range from 0 to 0xFFFF (inclusive), the index (in Unicode code
     *  units) returned is the largest value <i>k</i> such that:
     *  <blockquote><pre>
     *  this.charAt(<i>k</i>) == ch
     *  </pre></blockquote>
     *  is true. For other values of {@code ch}, it is the
     *  largest value <i>k</i> such that:
     *  <blockquote><pre>
     *  this.codePointAt(<i>k</i>) == ch
     *  </pre></blockquote>
     *  is true.  In either case, if no such character occurs in this
     *  string, then {@code -1} is returned.  The
     *  {@code String} is searched backwards starting at the last
     *  character.
     * @param ch a character (Unicode code point).
     * @return the index of the last occurrence of the character in the&#xA; character sequence represented by this object, or&#xA; {@code -1} if the character does not occur.
     */
    lastIndexOf(ch: number): number;

    /**
     * Returns the index within this string of the last occurrence of
     *  the specified character, searching backward starting at the
     *  specified index. For values of {@code ch} in the range
     *  from 0 to 0xFFFF (inclusive), the index returned is the largest
     *  value <i>k</i> such that:
     *  <blockquote><pre>
     *  (this.charAt(<i>k</i>) == ch) {@code &&} (<i>k</i> &lt;= fromIndex)
     *  </pre></blockquote>
     *  is true. For other values of {@code ch}, it is the
     *  largest value <i>k</i> such that:
     *  <blockquote><pre>
     *  (this.codePointAt(<i>k</i>) == ch) {@code &&} (<i>k</i> &lt;= fromIndex)
     *  </pre></blockquote>
     *  is true. In either case, if no such character occurs in this
     *  string at or before position {@code fromIndex}, then
     *  {@code -1} is returned.
     *
     *  <p>All indices are specified in {@code char} values
     *  (Unicode code units).
     * @param ch a character (Unicode code point).
     * @param fromIndex the index to start the search from. There is no&#xA; restriction on the value of {@code fromIndex}. If it is&#xA; greater than or equal to the length of this string, it has&#xA; the same effect as if it were equal to one less than the&#xA; length of this string: this entire string may be searched.&#xA; If it is negative, it has the same effect as if it were -1:&#xA; -1 is returned.
     * @return the index of the last occurrence of the character in the&#xA; character sequence represented by this object that is less&#xA; than or equal to {@code fromIndex}, or {@code -1}&#xA; if the character does not occur before that point.
     */
    lastIndexOf(ch: number, fromIndex: number): number;

    /**
     * Returns the index within this string of the first occurrence of the
     *  specified substring.
     *
     *  <p>The returned index is the smallest value <i>k</i> for which:
     *  <blockquote><pre>
     *  this.startsWith(str, <i>k</i>)
     *  </pre></blockquote>
     *  If no such value of <i>k</i> exists, then {@code -1} is returned.
     * @param str the substring to search for.
     * @return the index of the first occurrence of the specified substring,&#xA; or {@code -1} if there is no such occurrence.
     */
    indexOf(str: String | string): number;

    /**
     * Returns the index within this string of the first occurrence of the
     *  specified substring, starting at the specified index.
     *
     *  <p>The returned index is the smallest value <i>k</i> for which:
     *  <blockquote><pre>
     *  <i>k</i> &gt;= fromIndex {@code &&} this.startsWith(str, <i>k</i>)
     *  </pre></blockquote>
     *  If no such value of <i>k</i> exists, then {@code -1} is returned.
     * @param str the substring to search for.
     * @param fromIndex the index from which to start the search.
     * @return the index of the first occurrence of the specified substring,&#xA; starting at the specified index,&#xA; or {@code -1} if there is no such occurrence.
     */
    indexOf(str: String | string, fromIndex: number): number;

    /**
     * Returns the index within this string of the last occurrence of the
     *  specified substring.  The last occurrence of the empty string ""
     *  is considered to occur at the index value {@code this.length()}.
     *
     *  <p>The returned index is the largest value <i>k</i> for which:
     *  <blockquote><pre>
     *  this.startsWith(str, <i>k</i>)
     *  </pre></blockquote>
     *  If no such value of <i>k</i> exists, then {@code -1} is returned.
     * @param str the substring to search for.
     * @return the index of the last occurrence of the specified substring,&#xA; or {@code -1} if there is no such occurrence.
     */
    lastIndexOf(str: String | string): number;

    /**
     * Returns the index within this string of the last occurrence of the
     *  specified substring, searching backward starting at the specified index.
     *
     *  <p>The returned index is the largest value <i>k</i> for which:
     *  <blockquote><pre>
     *  <i>k</i> {@code <=} fromIndex {@code &&} this.startsWith(str, <i>k</i>)
     *  </pre></blockquote>
     *  If no such value of <i>k</i> exists, then {@code -1} is returned.
     * @param str the substring to search for.
     * @param fromIndex the index to start the search from.
     * @return the index of the last occurrence of the specified substring,&#xA; searching backward from the specified index,&#xA; or {@code -1} if there is no such occurrence.
     */
    lastIndexOf(str: String | string, fromIndex: number): number;

    /**
     * Returns a string that is a substring of this string. The
     *  substring begins with the character at the specified index and
     *  extends to the end of this string. <p>
     *  Examples:
     *  <blockquote><pre>
     *  "unhappy".substring(2) returns "happy"
     *  "Harbison".substring(3) returns "bison"
     *  "emptiness".substring(9) returns "" (an empty string)
     *  </pre></blockquote>
     * @param beginIndex the beginning index, inclusive.
     * @return the specified substring.
     * @throws IndexOutOfBoundsException if&#xA; {@code beginIndex} is negative or larger than the&#xA; length of this {@code String} object.
     */
    substring(beginIndex: number): string;

    /**
     * Returns a string that is a substring of this string. The
     *  substring begins at the specified {@code beginIndex} and
     *  extends to the character at index {@code endIndex - 1}.
     *  Thus the length of the substring is {@code endIndex-beginIndex}.
     *  <p>
     *  Examples:
     *  <blockquote><pre>
     *  "hamburger".substring(4, 8) returns "urge"
     *  "smiles".substring(1, 5) returns "mile"
     *  </pre></blockquote>
     * @param beginIndex the beginning index, inclusive.
     * @param endIndex the ending index, exclusive.
     * @return the specified substring.
     * @throws IndexOutOfBoundsException if the&#xA; {@code beginIndex} is negative, or&#xA; {@code endIndex} is larger than the length of&#xA; this {@code String} object, or&#xA; {@code beginIndex} is larger than&#xA; {@code endIndex}.
     */
    substring(beginIndex: number, endIndex: number): string;

    /**
     * Returns a character sequence that is a subsequence of this sequence.
     *
     *  <p> An invocation of this method of the form
     *
     *  <blockquote><pre>
     *  str.subSequence(begin,&nbsp;end)</pre></blockquote>
     *
     *  behaves in exactly the same way as the invocation
     *
     *  <blockquote><pre>
     *  str.substring(begin,&nbsp;end)</pre></blockquote>
     * @apiNote This method is defined so that the {@code String} class can implement&#xA; the {@link CharSequence} interface.
     * @param beginIndex the begin index, inclusive.
     * @param endIndex the end index, exclusive.
     * @return the specified subsequence.
     * @throws IndexOutOfBoundsException&#xA; if {@code beginIndex} or {@code endIndex} is negative,&#xA; if {@code endIndex} is greater than {@code length()},&#xA; or if {@code beginIndex} is greater than {@code endIndex}
     * @since 1.4
     * @spec JSR-51
     */
    subSequence(beginIndex: number, endIndex: number): CharSequence;

    /**
     * Concatenates the specified string to the end of this string.
     *  <p>
     *  If the length of the argument string is {@code 0}, then this
     *  {@code String} object is returned. Otherwise, a
     *  {@code String} object is returned that represents a character
     *  sequence that is the concatenation of the character sequence
     *  represented by this {@code String} object and the character
     *  sequence represented by the argument string.<p>
     *  Examples:
     *  <blockquote><pre>
     *  "cares".concat("s") returns "caress"
     *  "to".concat("get").concat("her") returns "together"
     *  </pre></blockquote>
     * @param str the {@code String} that is concatenated to the end&#xA; of this {@code String}.
     * @return a string that represents the concatenation of this object's&#xA; characters followed by the string argument's characters.
     */
    concat(str: String | string): string;

    /**
     * Returns a string resulting from replacing all occurrences of
     *  {@code oldChar} in this string with {@code newChar}.
     *  <p>
     *  If the character {@code oldChar} does not occur in the
     *  character sequence represented by this {@code String} object,
     *  then a reference to this {@code String} object is returned.
     *  Otherwise, a {@code String} object is returned that
     *  represents a character sequence identical to the character sequence
     *  represented by this {@code String} object, except that every
     *  occurrence of {@code oldChar} is replaced by an occurrence
     *  of {@code newChar}.
     *  <p>
     *  Examples:
     *  <blockquote><pre>
     *  "mesquite in your cellar".replace('e', 'o')
     *          returns "mosquito in your collar"
     *  "the war of baronets".replace('r', 'y')
     *          returns "the way of bayonets"
     *  "sparring with a purple porpoise".replace('p', 't')
     *          returns "starring with a turtle tortoise"
     *  "JonL".replace('q', 'x') returns "JonL" (no change)
     *  </pre></blockquote>
     * @param oldChar the old character.
     * @param newChar the new character.
     * @return a string derived from this string by replacing every&#xA; occurrence of {@code oldChar} with {@code newChar}.
     */
    replace(oldChar: string, newChar: string): string;

    /**
     * Tells whether or not this string matches the given <a
     *  href="../util/regex/Pattern.html#sum">regular expression</a>.
     *
     *  <p> An invocation of this method of the form
     *  <i>str</i>{@code .matches(}<i>regex</i>{@code )} yields exactly the
     *  same result as the expression
     *
     *  <blockquote>
     *  {@link java.util.regex.Pattern}.{@link java.util.regex.Pattern#matches(String,CharSequence)
     *  matches(<i>regex</i>, <i>str</i>)}
     *  </blockquote>
     * @param regex&#xA; the regular expression to which this string is to be matched
     * @return {@code true} if, and only if, this string matches the&#xA; given regular expression
     * @throws PatternSyntaxException&#xA; if the regular expression's syntax is invalid
     * @see java.util.regex.Pattern
     * @since 1.4
     * @spec JSR-51
     */
    matches(regex: String | string): boolean;

    /**
     * Returns true if and only if this string contains the specified
     *  sequence of char values.
     * @param s the sequence to search for
     * @return true if this string contains {@code s}, false otherwise
     * @since 1.5
     */
    contains(s: CharSequence): boolean;

    /**
     * Replaces the first substring of this string that matches the given <a
     *  href="../util/regex/Pattern.html#sum">regular expression</a> with the
     *  given replacement.
     *
     *  <p> An invocation of this method of the form
     *  <i>str</i>{@code .replaceFirst(}<i>regex</i>{@code ,} <i>repl</i>{@code )}
     *  yields exactly the same result as the expression
     *
     *  <blockquote>
     *  <code>
     *  {@link java.util.regex.Pattern}.{@link
     *  java.util.regex.Pattern#compile compile}(<i>regex</i>).{@link
     *  java.util.regex.Pattern#matcher(java.lang.CharSequence) matcher}(<i>str</i>).{@link
     *  java.util.regex.Matcher#replaceFirst replaceFirst}(<i>repl</i>)
     *  </code>
     *  </blockquote>
     *
     * <p>
     *  Note that backslashes ({@code \}) and dollar signs ({@code $}) in the
     *  replacement string may cause the results to be different than if it were
     *  being treated as a literal replacement string; see
     *  {@link java.util.regex.Matcher#replaceFirst}.
     *  Use {@link java.util.regex.Matcher#quoteReplacement} to suppress the special
     *  meaning of these characters, if desired.
     * @param regex&#xA; the regular expression to which this string is to be matched
     * @param replacement&#xA; the string to be substituted for the first match
     * @return The resulting {@code String}
     * @throws PatternSyntaxException&#xA; if the regular expression's syntax is invalid
     * @see java.util.regex.Pattern
     * @since 1.4
     * @spec JSR-51
     */
    replaceFirst(regex: String | string, replacement: String | string): string;

    /**
     * Replaces each substring of this string that matches the given <a
     *  href="../util/regex/Pattern.html#sum">regular expression</a> with the
     *  given replacement.
     *
     *  <p> An invocation of this method of the form
     *  <i>str</i>{@code .replaceAll(}<i>regex</i>{@code ,} <i>repl</i>{@code )}
     *  yields exactly the same result as the expression
     *
     *  <blockquote>
     *  <code>
     *  {@link java.util.regex.Pattern}.{@link
     *  java.util.regex.Pattern#compile compile}(<i>regex</i>).{@link
     *  java.util.regex.Pattern#matcher(java.lang.CharSequence) matcher}(<i>str</i>).{@link
     *  java.util.regex.Matcher#replaceAll replaceAll}(<i>repl</i>)
     *  </code>
     *  </blockquote>
     *
     * <p>
     *  Note that backslashes ({@code \}) and dollar signs ({@code $}) in the
     *  replacement string may cause the results to be different than if it were
     *  being treated as a literal replacement string; see
     *  {@link java.util.regex.Matcher#replaceAll Matcher.replaceAll}.
     *  Use {@link java.util.regex.Matcher#quoteReplacement} to suppress the special
     *  meaning of these characters, if desired.
     * @param regex&#xA; the regular expression to which this string is to be matched
     * @param replacement&#xA; the string to be substituted for each match
     * @return The resulting {@code String}
     * @throws PatternSyntaxException&#xA; if the regular expression's syntax is invalid
     * @see java.util.regex.Pattern
     * @since 1.4
     * @spec JSR-51
     */
    replaceAll(regex: String | string, replacement: String | string): string;

    /**
     * Replaces each substring of this string that matches the literal target
     *  sequence with the specified literal replacement sequence. The
     *  replacement proceeds from the beginning of the string to the end, for
     *  example, replacing "aa" with "b" in the string "aaa" will result in
     *  "ba" rather than "ab".
     * @param target The sequence of char values to be replaced
     * @param replacement The replacement sequence of char values
     * @return The resulting string
     * @since 1.5
     */
    replace(target: CharSequence, replacement: CharSequence): string;

    /**
     * Splits this string around matches of the given
     *  <a href="../util/regex/Pattern.html#sum">regular expression</a>.
     *
     *  <p> The array returned by this method contains each substring of this
     *  string that is terminated by another substring that matches the given
     *  expression or is terminated by the end of the string.  The substrings in
     *  the array are in the order in which they occur in this string.  If the
     *  expression does not match any part of the input then the resulting array
     *  has just one element, namely this string.
     *
     *  <p> When there is a positive-width match at the beginning of this
     *  string then an empty leading substring is included at the beginning
     *  of the resulting array. A zero-width match at the beginning however
     *  never produces such empty leading substring.
     *
     *  <p> The {@code limit} parameter controls the number of times the
     *  pattern is applied and therefore affects the length of the resulting
     *  array.  If the limit <i>n</i> is greater than zero then the pattern
     *  will be applied at most <i>n</i>&nbsp;-&nbsp;1 times, the array's
     *  length will be no greater than <i>n</i>, and the array's last entry
     *  will contain all input beyond the last matched delimiter.  If <i>n</i>
     *  is non-positive then the pattern will be applied as many times as
     *  possible and the array can have any length.  If <i>n</i> is zero then
     *  the pattern will be applied as many times as possible, the array can
     *  have any length, and trailing empty strings will be discarded.
     *
     *  <p> The string {@code "boo:and:foo"}, for example, yields the
     *  following results with these parameters:
     *
     *  <blockquote><table cellpadding=1 cellspacing=0 summary="Split example showing regex, limit, and result">
     *  <tr>
     *      <th>Regex</th>
     *      <th>Limit</th>
     *      <th>Result</th>
     *  </tr>
     *  <tr><td align=center>:</td>
     *      <td align=center>2</td>
     *      <td>{@code { "boo", "and:foo" }}</td></tr>
     *  <tr><td align=center>:</td>
     *      <td align=center>5</td>
     *      <td>{@code { "boo", "and", "foo" }}</td></tr>
     *  <tr><td align=center>:</td>
     *      <td align=center>-2</td>
     *      <td>{@code { "boo", "and", "foo" }}</td></tr>
     *  <tr><td align=center>o</td>
     *      <td align=center>5</td>
     *      <td>{@code { "b", "", ":and:f", "", "" }}</td></tr>
     *  <tr><td align=center>o</td>
     *      <td align=center>-2</td>
     *      <td>{@code { "b", "", ":and:f", "", "" }}</td></tr>
     *  <tr><td align=center>o</td>
     *      <td align=center>0</td>
     *      <td>{@code { "b", "", ":and:f" }}</td></tr>
     *  </table></blockquote>
     *
     *  <p> An invocation of this method of the form
     *  <i>str.</i>{@code split(}<i>regex</i>{@code ,}&nbsp;<i>n</i>{@code )}
     *  yields the same result as the expression
     *
     *  <blockquote>
     *  <code>
     *  {@link java.util.regex.Pattern}.{@link
     *  java.util.regex.Pattern#compile compile}(<i>regex</i>).{@link
     *  java.util.regex.Pattern#split(java.lang.CharSequence,int) split}(<i>str</i>,&nbsp;<i>n</i>)
     *  </code>
     *  </blockquote>
     * @param regex&#xA; the delimiting regular expression
     * @param limit&#xA; the result threshold, as described above
     * @return the array of strings computed by splitting this string&#xA; around matches of the given regular expression
     * @throws PatternSyntaxException&#xA; if the regular expression's syntax is invalid
     * @see java.util.regex.Pattern
     * @since 1.4
     * @spec JSR-51
     */
    split(regex: String | string, limit: number): string;

    /**
     * Splits this string around matches of the given <a
     *  href="../util/regex/Pattern.html#sum">regular expression</a>.
     *
     *  <p> This method works as if by invoking the two-argument {@link
     *  #split(String, int) split} method with the given expression and a limit
     *  argument of zero.  Trailing empty strings are therefore not included in
     *  the resulting array.
     *
     *  <p> The string {@code "boo:and:foo"}, for example, yields the following
     *  results with these expressions:
     *
     *  <blockquote><table cellpadding=1 cellspacing=0 summary="Split examples showing regex and result">
     *  <tr>
     *   <th>Regex</th>
     *   <th>Result</th>
     *  </tr>
     *  <tr><td align=center>:</td>
     *      <td>{@code { "boo", "and", "foo" }}</td></tr>
     *  <tr><td align=center>o</td>
     *      <td>{@code { "b", "", ":and:f" }}</td></tr>
     *  </table></blockquote>
     * @param regex&#xA; the delimiting regular expression
     * @return the array of strings computed by splitting this string&#xA; around matches of the given regular expression
     * @throws PatternSyntaxException&#xA; if the regular expression's syntax is invalid
     * @see java.util.regex.Pattern
     * @since 1.4
     * @spec JSR-51
     */
    split(regex: String | string): string;

    /**
     * Converts all of the characters in this {@code String} to lower
     *  case using the rules of the given {@code Locale}.  Case mapping is based
     *  on the Unicode Standard version specified by the {@link java.lang.Character Character}
     *  class. Since case mappings are not always 1:1 char mappings, the resulting
     *  {@code String} may be a different length than the original {@code String}.
     *  <p>
     *  Examples of lowercase  mappings are in the following table:
     *  <table border="1" summary="Lowercase mapping examples showing language code of locale, upper case, lower case, and description">
     *  <tr>
     *    <th>Language Code of Locale</th>
     *    <th>Upper Case</th>
     *    <th>Lower Case</th>
     *    <th>Description</th>
     *  </tr>
     *  <tr>
     *    <td>tr (Turkish)</td>
     *    <td>&#92;u0130</td>
     *    <td>&#92;u0069</td>
     *    <td>capital letter I with dot above -&gt; small letter i</td>
     *  </tr>
     *  <tr>
     *    <td>tr (Turkish)</td>
     *    <td>&#92;u0049</td>
     *    <td>&#92;u0131</td>
     *    <td>capital letter I -&gt; small letter dotless i </td>
     *  </tr>
     *  <tr>
     *    <td>(all)</td>
     *    <td>French Fries</td>
     *    <td>french fries</td>
     *    <td>lowercased all chars in String</td>
     *  </tr>
     *  <tr>
     *    <td>(all)</td>
     *    <td><img src="doc-files/capiota.gif" alt="capiota"><img src="doc-files/capchi.gif" alt="capchi">
     *        <img src="doc-files/captheta.gif" alt="captheta"><img src="doc-files/capupsil.gif" alt="capupsil">
     *        <img src="doc-files/capsigma.gif" alt="capsigma"></td>
     *    <td><img src="doc-files/iota.gif" alt="iota"><img src="doc-files/chi.gif" alt="chi">
     *        <img src="doc-files/theta.gif" alt="theta"><img src="doc-files/upsilon.gif" alt="upsilon">
     *        <img src="doc-files/sigma1.gif" alt="sigma"></td>
     *    <td>lowercased all chars in String</td>
     *  </tr>
     *  </table>
     * @param locale use the case transformation rules for this locale
     * @return the {@code String}, converted to lowercase.
     * @see java.lang.String#toLowerCase()
     * @see java.lang.String#toUpperCase()
     * @see java.lang.String#toUpperCase(Locale)
     * @since 1.1
     */
    toLowerCase(locale: Locale): string;

    /**
     * Converts all of the characters in this {@code String} to lower
     *  case using the rules of the default locale. This is equivalent to calling
     *  {@code toLowerCase(Locale.getDefault())}.
     *  <p>
     *  <b>Note:</b> This method is locale sensitive, and may produce unexpected
     *  results if used for strings that are intended to be interpreted locale
     *  independently.
     *  Examples are programming language identifiers, protocol keys, and HTML
     *  tags.
     *  For instance, {@code "TITLE".toLowerCase()} in a Turkish locale
     *  returns {@code "t\u0131tle"}, where '\u0131' is the
     *  LATIN SMALL LETTER DOTLESS I character.
     *  To obtain correct results for locale insensitive strings, use
     *  {@code toLowerCase(Locale.ROOT)}.
     *  <p>
     * @return the {@code String}, converted to lowercase.
     * @see java.lang.String#toLowerCase(Locale)
     */
    toLowerCase(): string;

    /**
     * Converts all of the characters in this {@code String} to upper
     *  case using the rules of the given {@code Locale}. Case mapping is based
     *  on the Unicode Standard version specified by the {@link java.lang.Character Character}
     *  class. Since case mappings are not always 1:1 char mappings, the resulting
     *  {@code String} may be a different length than the original {@code String}.
     *  <p>
     *  Examples of locale-sensitive and 1:M case mappings are in the following table.
     *
     *  <table border="1" summary="Examples of locale-sensitive and 1:M case mappings. Shows Language code of locale, lower case, upper case, and description.">
     *  <tr>
     *    <th>Language Code of Locale</th>
     *    <th>Lower Case</th>
     *    <th>Upper Case</th>
     *    <th>Description</th>
     *  </tr>
     *  <tr>
     *    <td>tr (Turkish)</td>
     *    <td>&#92;u0069</td>
     *    <td>&#92;u0130</td>
     *    <td>small letter i -&gt; capital letter I with dot above</td>
     *  </tr>
     *  <tr>
     *    <td>tr (Turkish)</td>
     *    <td>&#92;u0131</td>
     *    <td>&#92;u0049</td>
     *    <td>small letter dotless i -&gt; capital letter I</td>
     *  </tr>
     *  <tr>
     *    <td>(all)</td>
     *    <td>&#92;u00df</td>
     *    <td>&#92;u0053 &#92;u0053</td>
     *    <td>small letter sharp s -&gt; two letters: SS</td>
     *  </tr>
     *  <tr>
     *    <td>(all)</td>
     *    <td>Fahrvergn&uuml;gen</td>
     *    <td>FAHRVERGN&Uuml;GEN</td>
     *    <td></td>
     *  </tr>
     *  </table>
     * @param locale use the case transformation rules for this locale
     * @return the {@code String}, converted to uppercase.
     * @see java.lang.String#toUpperCase()
     * @see java.lang.String#toLowerCase()
     * @see java.lang.String#toLowerCase(Locale)
     * @since 1.1
     */
    toUpperCase(locale: Locale): string;

    /**
     * Converts all of the characters in this {@code String} to upper
     *  case using the rules of the default locale. This method is equivalent to
     *  {@code toUpperCase(Locale.getDefault())}.
     *  <p>
     *  <b>Note:</b> This method is locale sensitive, and may produce unexpected
     *  results if used for strings that are intended to be interpreted locale
     *  independently.
     *  Examples are programming language identifiers, protocol keys, and HTML
     *  tags.
     *  For instance, {@code "title".toUpperCase()} in a Turkish locale
     *  returns {@code "T\u0130TLE"}, where '\u0130' is the
     *  LATIN CAPITAL LETTER I WITH DOT ABOVE character.
     *  To obtain correct results for locale insensitive strings, use
     *  {@code toUpperCase(Locale.ROOT)}.
     *  <p>
     * @return the {@code String}, converted to uppercase.
     * @see java.lang.String#toUpperCase(Locale)
     */
    toUpperCase(): string;

    /**
     * Returns a string whose value is this string, with any leading and trailing
     *  whitespace removed.
     *  <p>
     *  If this {@code String} object represents an empty character
     *  sequence, or the first and last characters of character sequence
     *  represented by this {@code String} object both have codes
     *  greater than {@code '\u0020'} (the space character), then a
     *  reference to this {@code String} object is returned.
     *  <p>
     *  Otherwise, if there is no character with a code greater than
     *  {@code '\u0020'} in the string, then a
     *  {@code String} object representing an empty string is
     *  returned.
     *  <p>
     *  Otherwise, let <i>k</i> be the index of the first character in the
     *  string whose code is greater than {@code '\u0020'}, and let
     *  <i>m</i> be the index of the last character in the string whose code
     *  is greater than {@code '\u0020'}. A {@code String}
     *  object is returned, representing the substring of this string that
     *  begins with the character at index <i>k</i> and ends with the
     *  character at index <i>m</i>-that is, the result of
     *  {@code this.substring(k, m + 1)}.
     *  <p>
     *  This method may be used to trim whitespace (as defined above) from
     *  the beginning and end of a string.
     * @return A string whose value is this string, with any leading and trailing white&#xA; space removed, or this string if it has no leading or&#xA; trailing white space.
     */
    trim(): string;

    /**
     * This object (which is already a string!) is itself returned.
     * @return the string itself.
     */
    toString(): string;

    /**
     * Converts this string to a new character array.
     * @return a newly allocated character array whose length is the length&#xA; of this string and whose contents are initialized to contain&#xA; the character sequence represented by this string.
     */
    toCharArray(): string;

    /**
     * Returns a canonical representation for the string object.
     *  <p>
     *  A pool of strings, initially empty, is maintained privately by the
     *  class {@code String}.
     *  <p>
     *  When the intern method is invoked, if the pool already contains a
     *  string equal to this {@code String} object as determined by
     *  the {@link #equals(Object)} method, then the string from the pool is
     *  returned. Otherwise, this {@code String} object is added to the
     *  pool and a reference to this {@code String} object is returned.
     *  <p>
     *  It follows that for any two strings {@code s} and {@code t},
     *  {@code s.intern() == t.intern()} is {@code true}
     *  if and only if {@code s.equals(t)} is {@code true}.
     *  <p>
     *  All literal strings and string-valued constant expressions are
     *  interned. String literals are defined in section 3.10.5 of the
     *  <cite>The Java&trade; Language Specification</cite>.
     * @return a string that has the same contents as this string, but is&#xA; guaranteed to be from a pool of unique strings.
     */
    intern(): string;

    /**
     * A Comparator that orders {@code String} objects as by
     *  {@code compareToIgnoreCase}. This comparator is serializable.
     *  <p>
     *  Note that this Comparator does <em>not</em> take locale into account,
     *  and will result in an unsatisfactory ordering for certain locales.
     *  The java.text package provides <em>Collators</em> to allow
     *  locale-sensitive ordering.
     * @see java.text.Collator#compare(String, String)
     * @since 1.2
     */
    CASE_INSENSITIVE_ORDER: Comparator;
  };
