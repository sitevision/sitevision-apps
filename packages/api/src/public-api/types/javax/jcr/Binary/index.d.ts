/**
 * A <code>Binary</code> object holds a JCR property value of type
 * <code>BINARY</code>. The <code>Binary</code> interface and the related
 * methods in {@link Property}, {@link Value} and {@link ValueFactory} replace
 * the deprecated {@link Value#getStream} and {@link Property#getStream}
 * methods.
 * @since JCR 2.0
 * @since Sitevision 3.5
 */
export type Binary = {
  /**
   * Returns an {@link InputStream} representation of this value. Each call to
   * <code>getStream()</code> returns a new stream. The API consumer is
   * responsible for calling <code>close()</code> on the returned stream.
   * <p>
   * If {@link #dispose()} has been called on this <code>Binary</code>
   * object, then this method will throw the runtime exception
   * {@link java.lang.IllegalStateException}.
   * @return A stream representation of this value.
   * @throws RepositoryException if an error occurs.
   */
  getStream(): unknown;

  /**
   * Reads successive bytes from the specified <code>position</code> in this
   * <code>Binary</code> into the passed byte array until either the byte
   * array is full or the end of the <code>Binary</code> is encountered.
   * <p>
   * If {@link #dispose()} has been called on this <code>Binary</code>
   * object, then this method will throw the runtime exception
   * {@link java.lang.IllegalStateException}.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param b the buffer into which the data is read.
   * @param position the position in this Binary from which to start reading bytes.
   * @return the number of bytes read into the buffer, or -1 if there is no more data because the end of the Binary has been reached.
   * @throws IOException if an I/O error occurs.
   * @throws NullPointerException if b is null.
   * @throws IllegalArgumentException if offset is negative.
   * @throws RepositoryException if another error occurs.
   */
  read(b: unknown, position: number): number;

  /**
   * Returns the size of this <code>Binary</code> value in bytes.
   * <p>
   * If {@link #dispose()} has been called on this <code>Binary</code>
   * object, then this method will throw the runtime exception
   * {@link java.lang.IllegalStateException}.
   * @return the size of this value in bytes.
   * @throws RepositoryException if an error occurs.
   */
  getSize(): number;

  /**
 * Releases all resources associated with this <code>Binary</code> object
 * and informs the repository that these resources may now be reclaimed.
 * An application should call this method when it is finished with the
 * <code>Binary</code> object.
  
    */
  dispose(): void;
};
