import type { Object } from "../../lang/Object";
import type { Readable } from "../../lang/Readable";
import type { Closeable } from "../Closeable";

/**
 * Abstract class for reading character streams.  The only methods that a
 *  subclass must implement are read(char[], int, int) and close().  Most
 *  subclasses, however, will override some of the methods defined here in order
 *  to provide higher efficiency, additional functionality, or both.
 * @see BufferedReader
 * @see LineNumberReader
 * @see CharArrayReader
 * @see InputStreamReader
 * @see FileReader
 * @see FilterReader
 * @see PushbackReader
 * @see PipedReader
 * @see StringReader
 * @see Writer
 * @author Mark Reinhold
 * @since JDK1.1
 */
export type Reader = Object &
  Readable &
  Closeable & {
    /**
     * Attempts to read characters into the specified character buffer.
     *  The buffer is used as a repository of characters as-is: the only
     *  changes made are the results of a put operation. No flipping or
     *  rewinding of the buffer is performed.
     * @param target the buffer to read characters into
     * @return The number of characters added to the buffer, or&#xA; -1 if this source of characters is at its end
     * @throws IOException if an I/O error occurs
     * @throws NullPointerException if target is null
     * @throws java.nio.ReadOnlyBufferException if target is a read only buffer
     * @since 1.5
     */
    read(target: unknown): number;

    /**
     * Reads a single character.  This method will block until a character is
     *  available, an I/O error occurs, or the end of the stream is reached.
     *
     *  <p> Subclasses that intend to support efficient single-character input
     *  should override this method.
     * @return The character read, as an integer in the range 0 to 65535&#xA; (<tt>0x00-0xffff</tt>), or -1 if the end of the stream has&#xA; been reached
     * @throws IOException If an I/O error occurs
     */
    read(): number;

    /**
     * Reads characters into an array.  This method will block until some input
     *  is available, an I/O error occurs, or the end of the stream is reached.
     * @param cbuf Destination buffer
     * @return The number of characters read, or -1&#xA; if the end of the stream&#xA; has been reached
     * @throws IOException If an I/O error occurs
     */
    read(cbuf: string[]): number;

    /**
     * Reads characters into a portion of an array.  This method will block
     *  until some input is available, an I/O error occurs, or the end of the
     *  stream is reached.
     * @param cbuf Destination buffer
     * @param off Offset at which to start storing characters
     * @param len Maximum number of characters to read
     * @return The number of characters read, or -1 if the end of the&#xA; stream has been reached
     * @throws IOException If an I/O error occurs
     */
    read(cbuf: string[], off: number, len: number): number;

    /**
     * Skips characters.  This method will block until some characters are
     *  available, an I/O error occurs, or the end of the stream is reached.
     * @param n The number of characters to skip
     * @return The number of characters actually skipped
     * @throws IllegalArgumentException If <code>n</code> is negative.
     * @throws IOException If an I/O error occurs
     */
    skip(n: number): number;

    /**
     * Tells whether this stream is ready to be read.
     * @return True if the next read() is guaranteed not to block for input,&#xA; false otherwise. Note that returning false does not guarantee that the&#xA; next read will block.
     * @throws IOException If an I/O error occurs
     */
    ready(): boolean;

    /**
     * Tells whether this stream supports the mark() operation. The default
     *  implementation always returns false. Subclasses should override this
     *  method.
     * @return true if and only if this stream supports the mark operation.
     */
    markSupported(): boolean;

    /**
     * Marks the present position in the stream.  Subsequent calls to reset()
     *  will attempt to reposition the stream to this point.  Not all
     *  character-input streams support the mark() operation.
     * @param readAheadLimit Limit on the number of characters that may be&#xA; read while still preserving the mark. After&#xA; reading this many characters, attempting to&#xA; reset the stream may fail.
     * @throws IOException If the stream does not support mark(),&#xA; or if some other I/O error occurs
     */
    mark(readAheadLimit: number): void;

    /**
     * Resets the stream.  If the stream has been marked, then attempt to
     *  reposition it at the mark.  If the stream has not been marked, then
     *  attempt to reset it in some way appropriate to the particular stream,
     *  for example by repositioning it to its starting point.  Not all
     *  character-input streams support the reset() operation, and some support
     *  reset() without supporting mark().
     * @throws IOException If the stream has not been marked,&#xA; or if the mark has been invalidated,&#xA; or if the stream does not support reset(),&#xA; or if some other I/O error occurs
     */
    reset(): void;

    /**
     * Closes the stream and releases any system resources associated with
     *  it.  Once the stream has been closed, further read(), ready(),
     *  mark(), reset(), or skip() invocations will throw an IOException.
     *  Closing a previously closed stream has no effect.
     * @throws IOException If an I/O error occurs
     */
    close(): void;
  };
