/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

/**
 * A direct byte buffer whose content is a memory-mapped region of a file.
 *
 *  <p> Mapped byte buffers are created via the {@link
 *  java.nio.channels.FileChannel#map FileChannel.map} method.  This class
 *  extends the {@link ByteBuffer} class with operations that are specific to
 *  memory-mapped file regions.
 *
 *  <p> A mapped byte buffer and the file mapping that it represents remain
 *  valid until the buffer itself is garbage-collected.
 *
 *  <p> The content of a mapped byte buffer can change at any time, for example
 *  if the content of the corresponding region of the mapped file is changed by
 *  this program or another.  Whether or not such changes occur, and when they
 *  occur, is operating-system dependent and therefore unspecified.
 *
 *  <a name="inaccess"></a><p> All or part of a mapped byte buffer may become
 *  inaccessible at any time, for example if the mapped file is truncated.  An
 *  attempt to access an inaccessible region of a mapped byte buffer will not
 *  change the buffer's content and will cause an unspecified exception to be
 *  thrown either at the time of the access or at some later time.  It is
 *  therefore strongly recommended that appropriate precautions be taken to
 *  avoid the manipulation of a mapped file by this program, or by a
 *  concurrently running program, except to read or write the file's content.
 *
 *  <p> Mapped byte buffers otherwise behave no differently than ordinary direct
 *  byte buffers. </p>
 * @author Mark Reinhold
 * @author JSR-51 Expert Group
 * @since 1.4
 */
export type MappedByteBuffer = {
  /**
   * Tells whether or not this buffer's content is resident in physical
   *  memory.
   *
   *  <p> A return value of <tt>true</tt> implies that it is highly likely
   *  that all of the data in this buffer is resident in physical memory and
   *  may therefore be accessed without incurring any virtual-memory page
   *  faults or I/O operations.  A return value of <tt>false</tt> does not
   *  necessarily imply that the buffer's content is not resident in physical
   *  memory.
   *
   *  <p> The returned value is a hint, rather than a guarantee, because the
   *  underlying operating system may have paged out some of the buffer's data
   *  by the time that an invocation of this method returns.  </p>
   * @return <tt>true</tt> if it is likely that this buffer's content&#xA; is resident in physical memory
   */
  isLoaded(): boolean;

  /**
   * Loads this buffer's content into physical memory.
   *
   *  <p> This method makes a best effort to ensure that, when it returns,
   *  this buffer's content is resident in physical memory.  Invoking this
   *  method may cause some number of page faults and I/O operations to
   *  occur. </p>
   * @return This buffer
   */
  load(): MappedByteBuffer;

  /**
   * Forces any changes made to this buffer's content to be written to the
   *  storage device containing the mapped file.
   *
   *  <p> If the file mapped into this buffer resides on a local storage
   *  device then when this method returns it is guaranteed that all changes
   *  made to the buffer since it was created, or since this method was last
   *  invoked, will have been written to that device.
   *
   *  <p> If the file does not reside on a local device then no such guarantee
   *  is made.
   *
   *  <p> If this buffer was not mapped in read/write mode ({@link
   *  java.nio.channels.FileChannel.MapMode#READ_WRITE}) then invoking this
   *  method has no effect. </p>
   * @return This buffer
   */
  force(): MappedByteBuffer;
};
