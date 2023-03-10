import type { String } from "../../lang/String";

import type { Object } from "../../lang/Object";
import type { Locale } from "../../util/Locale";
import type { CharSequence } from "../../lang/CharSequence";
import type { Writer } from "../Writer";

/**
 * Prints formatted representations of objects to a text-output stream.  This
 *  class implements all of the <tt>print</tt> methods found in {@link
 *  PrintStream}.  It does not contain methods for writing raw bytes, for which
 *  a program should use unencoded byte streams.
 *
 *  <p> Unlike the {@link PrintStream} class, if automatic flushing is enabled
 *  it will be done only when one of the <tt>println</tt>, <tt>printf</tt>, or
 *  <tt>format</tt> methods is invoked, rather than whenever a newline character
 *  happens to be output.  These methods use the platform's own notion of line
 *  separator rather than the newline character.
 *
 *  <p> Methods in this class never throw I/O exceptions, although some of its
 *  constructors may.  The client may inquire as to whether any errors have
 *  occurred by invoking {@link #checkError checkError()}.
 * @author Frank Yellin
 * @author Mark Reinhold
 * @since JDK1.1
 */
export type PrintWriter = Writer & {
  /**
   * Flushes the stream.
   * @see #checkError()
   */
  flush(): void;

  /**
   * Closes the stream and releases any system resources associated
   *  with it. Closing a previously closed stream has no effect.
   * @see #checkError()
   */
  close(): void;

  /**
   * Flushes the stream if it's not closed and checks its error state.
   * @return <code>true</code> if the print stream has encountered an error,&#xA; either on the underlying output stream or during a format&#xA; conversion.
   */
  checkError(): boolean;

  /**
 * Indicates that an error has occurred.
 * 
 *  <p> This method will cause subsequent invocations of {@link
 *  #checkError()} to return <tt>true</tt> until {@link
 *  #clearError()} is invoked.
  
    */
  setError(): void;

  /**
   * Clears the error state of this stream.
   *
   *  <p> This method will cause subsequent invocations of {@link
   *  #checkError()} to return <tt>false</tt> until another write
   *  operation fails and invokes {@link #setError()}.
   * @since 1.6
   */
  clearError(): void;

  /**
   * Writes a single character.
   * @param c int specifying a character to be written.
   */
  write(c: number): void;

  /**
   * Writes A Portion of an array of characters.
   * @param buf Array of characters
   * @param off Offset from which to start writing characters
   * @param len Number of characters to write
   */
  write(buf: string[], off: number, len: number): void;

  /**
   * Writes an array of characters.  This method cannot be inherited from the
   *  Writer class because it must suppress I/O exceptions.
   * @param buf Array of characters to be written
   */
  write(buf: string[]): void;

  /**
   * Writes a portion of a string.
   * @param s A String
   * @param off Offset from which to start writing characters
   * @param len Number of characters to write
   */
  write(s: String | string, off: number, len: number): void;

  /**
   * Writes a string.  This method cannot be inherited from the Writer class
   *  because it must suppress I/O exceptions.
   * @param s String to be written
   */
  write(s: String | string): void;

  /**
   * Prints a boolean value.  The string produced by <code>{@link
   *  java.lang.String#valueOf(boolean)}</code> is translated into bytes
   *  according to the platform's default character encoding, and these bytes
   *  are written in exactly the manner of the <code>{@link
   *  #write(int)}</code> method.
   * @param b The <code>boolean</code> to be printed
   */
  print(b: boolean): void;

  /**
   * Prints a character.  The character is translated into one or more bytes
   *  according to the platform's default character encoding, and these bytes
   *  are written in exactly the manner of the <code>{@link
   *  #write(int)}</code> method.
   * @param c The <code>char</code> to be printed
   */
  print(c: string): void;

  /**
   * Prints an integer.  The string produced by <code>{@link
   *  java.lang.String#valueOf(int)}</code> is translated into bytes according
   *  to the platform's default character encoding, and these bytes are
   *  written in exactly the manner of the <code>{@link #write(int)}</code>
   *  method.
   * @param i The <code>int</code> to be printed
   * @see java.lang.Integer#toString(int)
   */
  print(i: number): void;

  /**
   * Prints a long integer.  The string produced by <code>{@link
   *  java.lang.String#valueOf(long)}</code> is translated into bytes
   *  according to the platform's default character encoding, and these bytes
   *  are written in exactly the manner of the <code>{@link #write(int)}</code>
   *  method.
   * @param l The <code>long</code> to be printed
   * @see java.lang.Long#toString(long)
   */
  print(l: number): void;

  /**
   * Prints a floating-point number.  The string produced by <code>{@link
   *  java.lang.String#valueOf(float)}</code> is translated into bytes
   *  according to the platform's default character encoding, and these bytes
   *  are written in exactly the manner of the <code>{@link #write(int)}</code>
   *  method.
   * @param f The <code>float</code> to be printed
   * @see java.lang.Float#toString(float)
   */
  print(f: number): void;

  /**
   * Prints a double-precision floating-point number.  The string produced by
   *  <code>{@link java.lang.String#valueOf(double)}</code> is translated into
   *  bytes according to the platform's default character encoding, and these
   *  bytes are written in exactly the manner of the <code>{@link
   *  #write(int)}</code> method.
   * @param d The <code>double</code> to be printed
   * @see java.lang.Double#toString(double)
   */
  print(d: number): void;

  /**
   * Prints an array of characters.  The characters are converted into bytes
   *  according to the platform's default character encoding, and these bytes
   *  are written in exactly the manner of the <code>{@link #write(int)}</code>
   *  method.
   * @param s The array of chars to be printed
   * @throws NullPointerException If <code>s</code> is <code>null</code>
   */
  print(s: string[]): void;

  /**
   * Prints a string.  If the argument is <code>null</code> then the string
   *  <code>"null"</code> is printed.  Otherwise, the string's characters are
   *  converted into bytes according to the platform's default character
   *  encoding, and these bytes are written in exactly the manner of the
   *  <code>{@link #write(int)}</code> method.
   * @param s The <code>String</code> to be printed
   */
  print(s: String | string): void;

  /**
   * Prints an object.  The string produced by the <code>{@link
   *  java.lang.String#valueOf(Object)}</code> method is translated into bytes
   *  according to the platform's default character encoding, and these bytes
   *  are written in exactly the manner of the <code>{@link #write(int)}</code>
   *  method.
   * @param obj The <code>Object</code> to be printed
   * @see java.lang.Object#toString()
   */
  print(obj: unknown): void;

  /**
 * Terminates the current line by writing the line separator string.  The
 *  line separator string is defined by the system property
 *  <code>line.separator</code>, and is not necessarily a single newline
 *  character (<code>'\n'</code>).
  
    */
  println(): void;

  /**
   * Prints a boolean value and then terminates the line.  This method behaves
   *  as though it invokes <code>{@link #print(boolean)}</code> and then
   *  <code>{@link #println()}</code>.
   * @param x the <code>boolean</code> value to be printed
   */
  println(x: boolean): void;

  /**
   * Prints a character and then terminates the line.  This method behaves as
   *  though it invokes <code>{@link #print(char)}</code> and then <code>{@link
   *  #println()}</code>.
   * @param x the <code>char</code> value to be printed
   */
  println(x: string): void;

  /**
   * Prints an integer and then terminates the line.  This method behaves as
   *  though it invokes <code>{@link #print(int)}</code> and then <code>{@link
   *  #println()}</code>.
   * @param x the <code>int</code> value to be printed
   */
  println(x: number): void;

  /**
   * Prints a long integer and then terminates the line.  This method behaves
   *  as though it invokes <code>{@link #print(long)}</code> and then
   *  <code>{@link #println()}</code>.
   * @param x the <code>long</code> value to be printed
   */
  println(x: number): void;

  /**
   * Prints a floating-point number and then terminates the line.  This method
   *  behaves as though it invokes <code>{@link #print(float)}</code> and then
   *  <code>{@link #println()}</code>.
   * @param x the <code>float</code> value to be printed
   */
  println(x: number): void;

  /**
   * Prints a double-precision floating-point number and then terminates the
   *  line.  This method behaves as though it invokes <code>{@link
   *  #print(double)}</code> and then <code>{@link #println()}</code>.
   * @param x the <code>double</code> value to be printed
   */
  println(x: number): void;

  /**
   * Prints an array of characters and then terminates the line.  This method
   *  behaves as though it invokes <code>{@link #print(char[])}</code> and then
   *  <code>{@link #println()}</code>.
   * @param x the array of <code>char</code> values to be printed
   */
  println(x: string[]): void;

  /**
   * Prints a String and then terminates the line.  This method behaves as
   *  though it invokes <code>{@link #print(String)}</code> and then
   *  <code>{@link #println()}</code>.
   * @param x the <code>String</code> value to be printed
   */
  println(x: String | string): void;

  /**
   * Prints an Object and then terminates the line.  This method calls
   *  at first String.valueOf(x) to get the printed object's string value,
   *  then behaves as
   *  though it invokes <code>{@link #print(String)}</code> and then
   *  <code>{@link #println()}</code>.
   * @param x The <code>Object</code> to be printed.
   */
  println(x: unknown): void;

  /**
   * A convenience method to write a formatted string to this writer using
   *  the specified format string and arguments.  If automatic flushing is
   *  enabled, calls to this method will flush the output buffer.
   *
   *  <p> An invocation of this method of the form <tt>out.printf(format,
   *  args)</tt> behaves in exactly the same way as the invocation
   *
   *  <pre>
   *      out.format(format, args) </pre>
   * @param format&#xA; A format string as described in <a&#xA; href="../util/Formatter.html#syntax">Format string syntax</a>.
   * @param args&#xA; Arguments referenced by the format specifiers in the format&#xA; string. If there are more arguments than format specifiers, the&#xA; extra arguments are ignored. The number of arguments is&#xA; variable and may be zero. The maximum number of arguments is&#xA; limited by the maximum dimension of a Java array as defined by&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>.&#xA; The behaviour on a&#xA; <tt>null</tt> argument depends on the <a&#xA; href="../util/Formatter.html#syntax">conversion</a>.
   * @throws java.util.IllegalFormatException&#xA; If a format string contains an illegal syntax, a format&#xA; specifier that is incompatible with the given arguments,&#xA; insufficient arguments given the format string, or other&#xA; illegal conditions. For specification of all possible&#xA; formatting errors, see the <a&#xA; href="../util/Formatter.html#detail">Details</a> section of the&#xA; formatter class specification.
   * @throws NullPointerException&#xA; If the <tt>format</tt> is <tt>null</tt>
   * @return This writer
   * @since 1.5
   */
  printf(format: String | string, ...args: unknown[]): PrintWriter;

  /**
   * A convenience method to write a formatted string to this writer using
   *  the specified format string and arguments.  If automatic flushing is
   *  enabled, calls to this method will flush the output buffer.
   *
   *  <p> An invocation of this method of the form <tt>out.printf(l, format,
   *  args)</tt> behaves in exactly the same way as the invocation
   *
   *  <pre>
   *      out.format(l, format, args) </pre>
   * @param l&#xA; The {@linkplain java.util.Locale locale} to apply during&#xA; formatting. If <tt>l</tt> is <tt>null</tt> then no localization&#xA; is applied.
   * @param format&#xA; A format string as described in <a&#xA; href="../util/Formatter.html#syntax">Format string syntax</a>.
   * @param args&#xA; Arguments referenced by the format specifiers in the format&#xA; string. If there are more arguments than format specifiers, the&#xA; extra arguments are ignored. The number of arguments is&#xA; variable and may be zero. The maximum number of arguments is&#xA; limited by the maximum dimension of a Java array as defined by&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>.&#xA; The behaviour on a&#xA; <tt>null</tt> argument depends on the <a&#xA; href="../util/Formatter.html#syntax">conversion</a>.
   * @throws java.util.IllegalFormatException&#xA; If a format string contains an illegal syntax, a format&#xA; specifier that is incompatible with the given arguments,&#xA; insufficient arguments given the format string, or other&#xA; illegal conditions. For specification of all possible&#xA; formatting errors, see the <a&#xA; href="../util/Formatter.html#detail">Details</a> section of the&#xA; formatter class specification.
   * @throws NullPointerException&#xA; If the <tt>format</tt> is <tt>null</tt>
   * @return This writer
   * @since 1.5
   */
  printf(l: Locale, format: String | string, ...args: unknown[]): PrintWriter;

  /**
   * Writes a formatted string to this writer using the specified format
   *  string and arguments.  If automatic flushing is enabled, calls to this
   *  method will flush the output buffer.
   *
   *  <p> The locale always used is the one returned by {@link
   *  java.util.Locale#getDefault() Locale.getDefault()}, regardless of any
   *  previous invocations of other formatting methods on this object.
   * @param format&#xA; A format string as described in <a&#xA; href="../util/Formatter.html#syntax">Format string syntax</a>.
   * @param args&#xA; Arguments referenced by the format specifiers in the format&#xA; string. If there are more arguments than format specifiers, the&#xA; extra arguments are ignored. The number of arguments is&#xA; variable and may be zero. The maximum number of arguments is&#xA; limited by the maximum dimension of a Java array as defined by&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>.&#xA; The behaviour on a&#xA; <tt>null</tt> argument depends on the <a&#xA; href="../util/Formatter.html#syntax">conversion</a>.
   * @throws java.util.IllegalFormatException&#xA; If a format string contains an illegal syntax, a format&#xA; specifier that is incompatible with the given arguments,&#xA; insufficient arguments given the format string, or other&#xA; illegal conditions. For specification of all possible&#xA; formatting errors, see the <a&#xA; href="../util/Formatter.html#detail">Details</a> section of the&#xA; Formatter class specification.
   * @throws NullPointerException&#xA; If the <tt>format</tt> is <tt>null</tt>
   * @return This writer
   * @since 1.5
   */
  format(format: String | string, ...args: unknown[]): PrintWriter;

  /**
   * Writes a formatted string to this writer using the specified format
   *  string and arguments.  If automatic flushing is enabled, calls to this
   *  method will flush the output buffer.
   * @param l&#xA; The {@linkplain java.util.Locale locale} to apply during&#xA; formatting. If <tt>l</tt> is <tt>null</tt> then no localization&#xA; is applied.
   * @param format&#xA; A format string as described in <a&#xA; href="../util/Formatter.html#syntax">Format string syntax</a>.
   * @param args&#xA; Arguments referenced by the format specifiers in the format&#xA; string. If there are more arguments than format specifiers, the&#xA; extra arguments are ignored. The number of arguments is&#xA; variable and may be zero. The maximum number of arguments is&#xA; limited by the maximum dimension of a Java array as defined by&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>.&#xA; The behaviour on a&#xA; <tt>null</tt> argument depends on the <a&#xA; href="../util/Formatter.html#syntax">conversion</a>.
   * @throws java.util.IllegalFormatException&#xA; If a format string contains an illegal syntax, a format&#xA; specifier that is incompatible with the given arguments,&#xA; insufficient arguments given the format string, or other&#xA; illegal conditions. For specification of all possible&#xA; formatting errors, see the <a&#xA; href="../util/Formatter.html#detail">Details</a> section of the&#xA; formatter class specification.
   * @throws NullPointerException&#xA; If the <tt>format</tt> is <tt>null</tt>
   * @return This writer
   * @since 1.5
   */
  format(l: Locale, format: String | string, ...args: unknown[]): PrintWriter;

  /**
   * Appends the specified character sequence to this writer.
   *
   *  <p> An invocation of this method of the form <tt>out.append(csq)</tt>
   *  behaves in exactly the same way as the invocation
   *
   *  <pre>
   *      out.write(csq.toString()) </pre>
   *
   *  <p> Depending on the specification of <tt>toString</tt> for the
   *  character sequence <tt>csq</tt>, the entire sequence may not be
   *  appended. For instance, invoking the <tt>toString</tt> method of a
   *  character buffer will return a subsequence whose content depends upon
   *  the buffer's position and limit.
   * @param csq&#xA; The character sequence to append. If <tt>csq</tt> is&#xA; <tt>null</tt>, then the four characters <tt>"null"</tt> are&#xA; appended to this writer.
   * @return This writer
   * @since 1.5
   */
  append(csq: CharSequence): PrintWriter;

  /**
   * Appends a subsequence of the specified character sequence to this writer.
   *
   *  <p> An invocation of this method of the form <tt>out.append(csq, start,
   *  end)</tt> when <tt>csq</tt> is not <tt>null</tt>, behaves in
   *  exactly the same way as the invocation
   *
   *  <pre>
   *      out.write(csq.subSequence(start, end).toString()) </pre>
   * @param csq&#xA; The character sequence from which a subsequence will be&#xA; appended. If <tt>csq</tt> is <tt>null</tt>, then characters&#xA; will be appended as if <tt>csq</tt> contained the four&#xA; characters <tt>"null"</tt>.
   * @param start&#xA; The index of the first character in the subsequence
   * @param end&#xA; The index of the character following the last character in the&#xA; subsequence
   * @return This writer
   * @throws IndexOutOfBoundsException&#xA; If <tt>start</tt> or <tt>end</tt> are negative, <tt>start</tt>&#xA; is greater than <tt>end</tt>, or <tt>end</tt> is greater than&#xA; <tt>csq.length()</tt>
   * @since 1.5
   */
  append(csq: CharSequence, start: number, end: number): PrintWriter;

  /**
   * Appends the specified character to this writer.
   *
   *  <p> An invocation of this method of the form <tt>out.append(c)</tt>
   *  behaves in exactly the same way as the invocation
   *
   *  <pre>
   *      out.write(c) </pre>
   * @param c&#xA; The 16-bit character to append
   * @return This writer
   * @since 1.5
   */
  append(c: string): PrintWriter;
};
