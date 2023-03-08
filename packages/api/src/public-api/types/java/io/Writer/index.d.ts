import type { String } from "../../lang/String";
import type { CharSequence } from "../../lang/CharSequence";
import type { Object } from "../../lang/Object";
import type { Appendable } from "../../lang/Appendable";
import type { Closeable } from "../Closeable";
import type { Flushable } from "../Flushable";

/**
 * Abstract class for writing to character streams.  The only methods that a
 *  subclass must implement are write(char[], int, int), flush(), and close().
 *  Most subclasses, however, will override some of the methods defined here in
 *  order to provide higher efficiency, additional functionality, or both.
 * @see Writer
 * @see BufferedWriter
 * @see CharArrayWriter
 * @see FilterWriter
 * @see OutputStreamWriter
 * @see FileWriter
 * @see PipedWriter
 * @see PrintWriter
 * @see StringWriter
 * @see Reader
 * @author Mark Reinhold
 * @since JDK1.1
 */
export type Writer = Object &
  Appendable &
  Closeable &
  Flushable & {
    /**
     * Writes a single character.  The character to be written is contained in
     *  the 16 low-order bits of the given integer value; the 16 high-order bits
     *  are ignored.
     *
     *  <p> Subclasses that intend to support efficient single-character output
     *  should override this method.
     * @param c&#xA; int specifying a character to be written
     * @throws IOException&#xA; If an I/O error occurs
     */
    write(c: number): void;

    /**
     * Writes an array of characters.
     * @param cbuf&#xA; Array of characters to be written
     * @throws IOException&#xA; If an I/O error occurs
     */
    write(cbuf: string[]): void;

    /**
     * Writes a portion of an array of characters.
     * @param cbuf&#xA; Array of characters
     * @param off&#xA; Offset from which to start writing characters
     * @param len&#xA; Number of characters to write
     * @throws IOException&#xA; If an I/O error occurs
     */
    write(cbuf: string[], off: number, len: number): void;

    /**
     * Writes a string.
     * @param str&#xA; String to be written
     * @throws IOException&#xA; If an I/O error occurs
     */
    write(str: String | string): void;

    /**
     * Writes a portion of a string.
     * @param str&#xA; A String
     * @param off&#xA; Offset from which to start writing characters
     * @param len&#xA; Number of characters to write
     * @throws IndexOutOfBoundsException&#xA; If <tt>off</tt> is negative, or <tt>len</tt> is negative,&#xA; or <tt>off+len</tt> is negative or greater than the length&#xA; of the given string
     * @throws IOException&#xA; If an I/O error occurs
     */
    write(str: String | string, off: number, len: number): void;

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
     * @throws IOException&#xA; If an I/O error occurs
     * @since 1.5
     */
    append(csq: CharSequence): Writer;

    /**
     * Appends a subsequence of the specified character sequence to this writer.
     *  <tt>Appendable</tt>.
     *
     *  <p> An invocation of this method of the form <tt>out.append(csq, start,
     *  end)</tt> when <tt>csq</tt> is not <tt>null</tt> behaves in exactly the
     *  same way as the invocation
     *
     *  <pre>
     *      out.write(csq.subSequence(start, end).toString()) </pre>
     * @param csq&#xA; The character sequence from which a subsequence will be&#xA; appended. If <tt>csq</tt> is <tt>null</tt>, then characters&#xA; will be appended as if <tt>csq</tt> contained the four&#xA; characters <tt>"null"</tt>.
     * @param start&#xA; The index of the first character in the subsequence
     * @param end&#xA; The index of the character following the last character in the&#xA; subsequence
     * @return This writer
     * @throws IndexOutOfBoundsException&#xA; If <tt>start</tt> or <tt>end</tt> are negative, <tt>start</tt>&#xA; is greater than <tt>end</tt>, or <tt>end</tt> is greater than&#xA; <tt>csq.length()</tt>
     * @throws IOException&#xA; If an I/O error occurs
     * @since 1.5
     */
    append(csq: CharSequence, start: number, end: number): Writer;

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
     * @throws IOException&#xA; If an I/O error occurs
     * @since 1.5
     */
    append(c: string): Writer;

    /**
     * Flushes the stream.  If the stream has saved any characters from the
     *  various write() methods in a buffer, write them immediately to their
     *  intended destination.  Then, if that destination is another character or
     *  byte stream, flush it.  Thus one flush() invocation will flush all the
     *  buffers in a chain of Writers and OutputStreams.
     *
     *  <p> If the intended destination of this stream is an abstraction provided
     *  by the underlying operating system, for example a file, then flushing the
     *  stream guarantees only that bytes previously written to the stream are
     *  passed to the operating system for writing; it does not guarantee that
     *  they are actually written to a physical device such as a disk drive.
     * @throws IOException&#xA; If an I/O error occurs
     */
    flush(): void;

    /**
     * Closes the stream, flushing it first. Once the stream has been closed,
     *  further write() or flush() invocations will cause an IOException to be
     *  thrown. Closing a previously closed stream has no effect.
     * @throws IOException&#xA; If an I/O error occurs
     */
    close(): void;
  };
