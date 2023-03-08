/**
 * A <tt>Flushable</tt> is a destination of data that can be flushed.  The
 *  flush method is invoked to write any buffered output to the underlying
 *  stream.
 * @since 1.5
 */
export type Flushable = {
  /**
   * Flushes this stream by writing any buffered output to the underlying
   *  stream.
   * @throws IOException If an I/O error occurs
   */
  flush(): void;
};
