import type { Object } from "../Object";
import type { String } from "../String";
import type { CharSequence } from "../CharSequence";

import type { Serializable } from "../../io/Serializable";

/**
 * A thread-safe, mutable sequence of characters.
 *  A string buffer is like a {@link String}, but can be modified. At any
 *  point in time it contains some particular sequence of characters, but
 *  the length and content of the sequence can be changed through certain
 *  method calls.
 *  <p>
 *  String buffers are safe for use by multiple threads. The methods
 *  are synchronized where necessary so that all the operations on any
 *  particular instance behave as if they occur in some serial order
 *  that is consistent with the order of the method calls made by each of
 *  the individual threads involved.
 *  <p>
 *  The principal operations on a {@code StringBuffer} are the
 *  {@code append} and {@code insert} methods, which are
 *  overloaded so as to accept data of any type. Each effectively
 *  converts a given datum to a string and then appends or inserts the
 *  characters of that string to the string buffer. The
 *  {@code append} method always adds these characters at the end
 *  of the buffer; the {@code insert} method adds the characters at
 *  a specified point.
 *  <p>
 *  For example, if {@code z} refers to a string buffer object
 *  whose current contents are {@code "start"}, then
 *  the method call {@code z.append("le")} would cause the string
 *  buffer to contain {@code "startle"}, whereas
 *  {@code z.insert(4, "le")} would alter the string buffer to
 *  contain {@code "starlet"}.
 *  <p>
 *  In general, if sb refers to an instance of a {@code StringBuffer},
 *  then {@code sb.append(x)} has the same effect as
 *  {@code sb.insert(sb.length(), x)}.
 *  <p>
 *  Whenever an operation occurs involving a source sequence (such as
 *  appending or inserting from a source sequence), this class synchronizes
 *  only on the string buffer performing the operation, not on the source.
 *  Note that while {@code StringBuffer} is designed to be safe to use
 *  concurrently from multiple threads, if the constructor or the
 *  {@code append} or {@code insert} operation is passed a source sequence
 *  that is shared across threads, the calling code must ensure
 *  that the operation has a consistent and unchanging view of the source
 *  sequence for the duration of the operation.
 *  This could be satisfied by the caller holding a lock during the
 *  operation's call, by using an immutable source sequence, or by not
 *  sharing the source sequence across threads.
 *  <p>
 *  Every string buffer has a capacity. As long as the length of the
 *  character sequence contained in the string buffer does not exceed
 *  the capacity, it is not necessary to allocate a new internal
 *  buffer array. If the internal buffer overflows, it is
 *  automatically made larger.
 *  <p>
 *  Unless otherwise noted, passing a {@code null} argument to a constructor
 *  or method in this class will cause a {@link NullPointerException} to be
 *  thrown.
 *  <p>
 *  As of  release JDK 5, this class has been supplemented with an equivalent
 *  class designed for use by a single thread, {@link StringBuilder}.  The
 *  {@code StringBuilder} class should generally be used in preference to
 *  this one, as it supports all of the same operations but it is faster, as
 *  it performs no synchronization.
 * @author Arthur van Hoff
 * @see java.lang.StringBuilder
 * @see java.lang.String
 * @since JDK1.0
 */
export type StringBuffer = Serializable &
  CharSequence & {
    length(): number;

    capacity(): number;

    ensureCapacity(minimumCapacity: number): void;

    trimToSize(): void;

    setLength(newLength: number): void;

    charAt(index: number): string;

    codePointAt(index: number): number;

    codePointBefore(index: number): number;

    codePointCount(beginIndex: number, endIndex: number): number;

    offsetByCodePoints(index: number, codePointOffset: number): number;

    getChars(
      srcBegin: number,
      srcEnd: number,
      dst: string[],
      dstBegin: number
    ): void;

    setCharAt(index: number, ch: string): void;

    append(obj: unknown): StringBuffer;

    append(str: String | string): StringBuffer;

    /**
     * Appends the specified {@code StringBuffer} to this sequence.
     *  <p>
     *  The characters of the {@code StringBuffer} argument are appended,
     *  in order, to the contents of this {@code StringBuffer}, increasing the
     *  length of this {@code StringBuffer} by the length of the argument.
     *  If {@code sb} is {@code null}, then the four characters
     *  {@code "null"} are appended to this {@code StringBuffer}.
     *  <p>
     *  Let <i>n</i> be the length of the old character sequence, the one
     *  contained in the {@code StringBuffer} just prior to execution of the
     *  {@code append} method. Then the character at index <i>k</i> in
     *  the new character sequence is equal to the character at index <i>k</i>
     *  in the old character sequence, if <i>k</i> is less than <i>n</i>;
     *  otherwise, it is equal to the character at index <i>k-n</i> in the
     *  argument {@code sb}.
     *  <p>
     *  This method synchronizes on {@code this}, the destination
     *  object, but does not synchronize on the source ({@code sb}).
     * @param sb the {@code StringBuffer} to append.
     * @return a reference to this object.
     * @since 1.4
     */
    append(sb: StringBuffer): StringBuffer;

    /**
     * Appends the specified {@code CharSequence} to this
     *  sequence.
     *  <p>
     *  The characters of the {@code CharSequence} argument are appended,
     *  in order, increasing the length of this sequence by the length of the
     *  argument.
     *
     *  <p>The result of this method is exactly the same as if it were an
     *  invocation of this.append(s, 0, s.length());
     *
     *  <p>This method synchronizes on {@code this}, the destination
     *  object, but does not synchronize on the source ({@code s}).
     *
     *  <p>If {@code s} is {@code null}, then the four characters
     *  {@code "null"} are appended.
     * @param s the {@code CharSequence} to append.
     * @return a reference to this object.
     * @since 1.5
     */
    append(s: CharSequence): StringBuffer;

    append(s: CharSequence, start: number, end: number): StringBuffer;

    append(str: string[]): StringBuffer;

    append(str: string[], offset: number, len: number): StringBuffer;

    append(b: boolean): StringBuffer;

    append(c: string): StringBuffer;

    append(i: number): StringBuffer;

    appendCodePoint(codePoint: number): StringBuffer;

    append(lng: number): StringBuffer;

    append(f: number): StringBuffer;

    append(d: number): StringBuffer;

    delete(start: number, end: number): StringBuffer;

    deleteCharAt(index: number): StringBuffer;

    replace(start: number, end: number, str: String | string): StringBuffer;

    substring(start: number): string;

    subSequence(start: number, end: number): CharSequence;

    substring(start: number, end: number): string;

    insert(
      index: number,
      str: string[],
      offset: number,
      len: number
    ): StringBuffer;

    insert(offset: number, obj: unknown): StringBuffer;

    insert(offset: number, str: String | string): StringBuffer;

    insert(offset: number, str: string[]): StringBuffer;

    insert(dstOffset: number, s: CharSequence): StringBuffer;

    insert(
      dstOffset: number,
      s: CharSequence,
      start: number,
      end: number
    ): StringBuffer;

    insert(offset: number, b: boolean): StringBuffer;

    insert(offset: number, c: string): StringBuffer;

    insert(offset: number, i: number): StringBuffer;

    insert(offset: number, l: number): StringBuffer;

    insert(offset: number, f: number): StringBuffer;

    insert(offset: number, d: number): StringBuffer;

    indexOf(str: String | string): number;

    indexOf(str: String | string, fromIndex: number): number;

    lastIndexOf(str: String | string): number;

    lastIndexOf(str: String | string, fromIndex: number): number;

    reverse(): StringBuffer;

    toString(): string;
  };
