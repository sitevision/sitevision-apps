import type { OutputStream } from "../OutputStream";

/**
 * This class is the superclass of all classes that filter output
 *  streams. These streams sit on top of an already existing output
 *  stream (the <i>underlying</i> output stream) which it uses as its
 *  basic sink of data, but possibly transforming the data along the
 *  way or providing additional functionality.
 *  <p>
 *  The class <code>FilterOutputStream</code> itself simply overrides
 *  all methods of <code>OutputStream</code> with versions that pass
 *  all requests to the underlying output stream. Subclasses of
 *  <code>FilterOutputStream</code> may further override some of these
 *  methods as well as provide additional methods and fields.
 * @author Jonathan Payne
 * @since JDK1.0
 */
export type FilterOutputStream = OutputStream & {
  /**
   * Writes the specified <code>byte</code> to this output stream.
   *  <p>
   *  The <code>write</code> method of <code>FilterOutputStream</code>
   *  calls the <code>write</code> method of its underlying output stream,
   *  that is, it performs <tt>out.write(b)</tt>.
   *  <p>
   *  Implements the abstract <tt>write</tt> method of <tt>OutputStream</tt>.
   * @param b the <code>byte</code>.
   * @throws IOException if an I/O error occurs.
   */
  write(b: number): void;

  /**
   * Writes <code>b.length</code> bytes to this output stream.
   *  <p>
   *  The <code>write</code> method of <code>FilterOutputStream</code>
   *  calls its <code>write</code> method of three arguments with the
   *  arguments <code>b</code>, <code>0</code>, and
   *  <code>b.length</code>.
   *  <p>
   *  Note that this method does not call the one-argument
   *  <code>write</code> method of its underlying stream with the single
   *  argument <code>b</code>.
   * @param b the data to be written.
   * @throws IOException if an I/O error occurs.
   * @see java.io.FilterOutputStream#write(byte[], int, int)
   */
  write(b: unknown[]): void;

  /**
   * Writes <code>len</code> bytes from the specified
   *  <code>byte</code> array starting at offset <code>off</code> to
   *  this output stream.
   *  <p>
   *  The <code>write</code> method of <code>FilterOutputStream</code>
   *  calls the <code>write</code> method of one argument on each
   *  <code>byte</code> to output.
   *  <p>
   *  Note that this method does not call the <code>write</code> method
   *  of its underlying input stream with the same arguments. Subclasses
   *  of <code>FilterOutputStream</code> should provide a more efficient
   *  implementation of this method.
   * @param b the data.
   * @param off the start offset in the data.
   * @param len the number of bytes to write.
   * @throws IOException if an I/O error occurs.
   * @see java.io.FilterOutputStream#write(int)
   */
  write(b: unknown[], off: number, len: number): void;

  /**
   * Flushes this output stream and forces any buffered output bytes
   *  to be written out to the stream.
   *  <p>
   *  The <code>flush</code> method of <code>FilterOutputStream</code>
   *  calls the <code>flush</code> method of its underlying output stream.
   * @throws IOException if an I/O error occurs.
   * @see java.io.FilterOutputStream#out
   */
  flush(): void;

  /**
   * Closes this output stream and releases any system resources
   *  associated with the stream.
   *  <p>
   *  The <code>close</code> method of <code>FilterOutputStream</code>
   *  calls its <code>flush</code> method, and then calls the
   *  <code>close</code> method of its underlying output stream.
   * @throws IOException if an I/O error occurs.
   * @see java.io.FilterOutputStream#flush()
   * @see java.io.FilterOutputStream#out
   */
  close(): void;
};
