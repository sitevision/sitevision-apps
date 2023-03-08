import type { InputStream } from "../../../java/io/InputStream";

/**
 * A <code>Binary</code> object holds a JCR property value of type
 *  <code>BINARY</code>. The <code>Binary</code> interface and the related
 *  methods in {@link Property}, {@link Value} and {@link ValueFactory} replace
 *  the deprecated {@link Value#getStream} and {@link Property#getStream}
 *  methods.
 * @since JCR 2.0
 * @since Sitevision 3.5
 */
export type Binary = {
  /**
   * Returns an {@link InputStream} representation of this value. Each call to
   *  <code>getStream()</code> returns a new stream. The API consumer is
   *  responsible for calling <code>close()</code> on the returned stream.
   *  <p>
   *  If {@link #dispose()} has been called on this <code>Binary</code>
   *  object, then this method will throw the runtime exception
   *  {@link java.lang.IllegalStateException}.
   * @return A stream representation of this value.
   * @throws RepositoryException if an error occurs.
   */
  getStream(): InputStream;

  /**
   * Returns the size of this <code>Binary</code> value in bytes.
   *  <p>
   *  If {@link #dispose()} has been called on this <code>Binary</code>
   *  object, then this method will throw the runtime exception
   *  {@link java.lang.IllegalStateException}.
   * @return the size of this value in bytes.
   * @throws RepositoryException if an error occurs.
   */
  getSize(): number;

  /**
 * Releases all resources associated with this <code>Binary</code> object
 *  and informs the repository that these resources may now be reclaimed.
 *  An application should call this method when it is finished with the
 *  <code>Binary</code> object.
  
    */
  dispose(): void;
};
