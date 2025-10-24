/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { CharSequence } from "../CharSequence";

/**
 * An object to which <tt>char</tt> sequences and values can be appended.  The
 *  <tt>Appendable</tt> interface must be implemented by any class whose
 *  instances are intended to receive formatted output from a {@link
 *  java.util.Formatter}.
 *
 *  <p> The characters to be appended should be valid Unicode characters as
 *  described in <a href="Character.html#unicode">Unicode Character
 *  Representation</a>.  Note that supplementary characters may be composed of
 *  multiple 16-bit <tt>char</tt> values.
 *
 *  <p> Appendables are not necessarily safe for multithreaded access.  Thread
 *  safety is the responsibility of classes that extend and implement this
 *  interface.
 *
 *  <p> Since this interface may be implemented by existing classes
 *  with different styles of error handling there is no guarantee that
 *  errors will be propagated to the invoker.
 * @since 1.5
 */
export type Appendable = {
  /**
   * Appends the specified character sequence to this <tt>Appendable</tt>.
   *
   *  <p> Depending on which class implements the character sequence
   *  <tt>csq</tt>, the entire sequence may not be appended.  For
   *  instance, if <tt>csq</tt> is a {@link java.nio.CharBuffer} then
   *  the subsequence to append is defined by the buffer's position and limit.
   * @param csq&#xA; The character sequence to append. If <tt>csq</tt> is&#xA; <tt>null</tt>, then the four characters <tt>"null"</tt> are&#xA; appended to this Appendable.
   * @return A reference to this <tt>Appendable</tt>
   * @throws IOException&#xA; If an I/O error occurs
   */
  append(csq: CharSequence): Appendable;

  /**
   * Appends a subsequence of the specified character sequence to this
   *  <tt>Appendable</tt>.
   *
   *  <p> An invocation of this method of the form <tt>out.append(csq, start,
   *  end)</tt> when <tt>csq</tt> is not <tt>null</tt>, behaves in
   *  exactly the same way as the invocation
   *
   *  <pre>
   *      out.append(csq.subSequence(start, end)) </pre>
   * @param csq&#xA; The character sequence from which a subsequence will be&#xA; appended. If <tt>csq</tt> is <tt>null</tt>, then characters&#xA; will be appended as if <tt>csq</tt> contained the four&#xA; characters <tt>"null"</tt>.
   * @param start&#xA; The index of the first character in the subsequence
   * @param end&#xA; The index of the character following the last character in the&#xA; subsequence
   * @return A reference to this <tt>Appendable</tt>
   * @throws IndexOutOfBoundsException&#xA; If <tt>start</tt> or <tt>end</tt> are negative, <tt>start</tt>&#xA; is greater than <tt>end</tt>, or <tt>end</tt> is greater than&#xA; <tt>csq.length()</tt>
   * @throws IOException&#xA; If an I/O error occurs
   */
  append(csq: CharSequence, start: number, end: number): Appendable;

  /**
   * Appends the specified character to this <tt>Appendable</tt>.
   * @param c&#xA; The character to append
   * @return A reference to this <tt>Appendable</tt>
   * @throws IOException&#xA; If an I/O error occurs
   */
  append(c: string): Appendable;
};
