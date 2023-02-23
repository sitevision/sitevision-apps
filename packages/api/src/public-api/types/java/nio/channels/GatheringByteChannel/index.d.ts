import type { WritableByteChannel } from "../WritableByteChannel";

/**
 * A channel that can write bytes from a sequence of buffers.
 *
 *  <p> A <i>gathering</i> write operation writes, in a single invocation, a
 *  sequence of bytes from one or more of a given sequence of buffers.
 *  Gathering writes are often useful when implementing network protocols or
 *  file formats that, for example, group data into segments consisting of one
 *  or more fixed-length headers followed by a variable-length body.  Similar
 *  <i>scattering</i> read operations are defined in the {@link
 *  ScatteringByteChannel} interface.  </p>
 * @author Mark Reinhold
 * @author JSR-51 Expert Group
 * @since 1.4
 */
export type GatheringByteChannel = WritableByteChannel & {
  /**
   * Writes a sequence of bytes to this channel from a subsequence of the
   *  given buffers.
   *
   *  <p> An attempt is made to write up to <i>r</i> bytes to this channel,
   *  where <i>r</i> is the total number of bytes remaining in the specified
   *  subsequence of the given buffer array, that is,
   *
   *  <blockquote><pre>
   *  srcs[offset].remaining()
   *      + srcs[offset+1].remaining()
   *      + ... + srcs[offset+length-1].remaining()</pre></blockquote>
   *
   *  at the moment that this method is invoked.
   *
   *  <p> Suppose that a byte sequence of length <i>n</i> is written, where
   *  <tt>0</tt>&nbsp;<tt>&lt;=</tt>&nbsp;<i>n</i>&nbsp;<tt>&lt;=</tt>&nbsp;<i>r</i>.
   *  Up to the first <tt>srcs[offset].remaining()</tt> bytes of this sequence
   *  are written from buffer <tt>srcs[offset]</tt>, up to the next
   *  <tt>srcs[offset+1].remaining()</tt> bytes are written from buffer
   *  <tt>srcs[offset+1]</tt>, and so forth, until the entire byte sequence is
   *  written.  As many bytes as possible are written from each buffer, hence
   *  the final position of each updated buffer, except the last updated
   *  buffer, is guaranteed to be equal to that buffer's limit.
   *
   *  <p> Unless otherwise specified, a write operation will return only after
   *  writing all of the <i>r</i> requested bytes.  Some types of channels,
   *  depending upon their state, may write only some of the bytes or possibly
   *  none at all.  A socket channel in non-blocking mode, for example, cannot
   *  write any more bytes than are free in the socket's output buffer.
   *
   *  <p> This method may be invoked at any time.  If another thread has
   *  already initiated a write operation upon this channel, however, then an
   *  invocation of this method will block until the first operation is
   *  complete. </p>
   * @param srcs&#xA; The buffers from which bytes are to be retrieved
   * @param offset&#xA; The offset within the buffer array of the first buffer from&#xA; which bytes are to be retrieved; must be non-negative and no&#xA; larger than <tt>srcs.length</tt>
   * @param length&#xA; The maximum number of buffers to be accessed; must be&#xA; non-negative and no larger than&#xA; <tt>srcs.length</tt>&nbsp;-&nbsp;<tt>offset</tt>
   * @return The number of bytes written, possibly zero
   * @throws IndexOutOfBoundsException&#xA; If the preconditions on the <tt>offset</tt> and <tt>length</tt>&#xA; parameters do not hold
   * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
   * @throws ClosedChannelException&#xA; If this channel is closed
   * @throws AsynchronousCloseException&#xA; If another thread closes this channel&#xA; while the write operation is in progress
   * @throws ClosedByInterruptException&#xA; If another thread interrupts the current thread&#xA; while the write operation is in progress, thereby&#xA; closing the channel and setting the current thread's&#xA; interrupt status
   * @throws IOException&#xA; If some other I/O error occurs
   */
  write(srcs: unknown[], offset: number, length: number): number;

  /**
   * Writes a sequence of bytes to this channel from the given buffers.
   *
   *  <p> An invocation of this method of the form <tt>c.write(srcs)</tt>
   *  behaves in exactly the same manner as the invocation
   *
   *  <blockquote><pre>
   *  c.write(srcs, 0, srcs.length);</pre></blockquote>
   * @param srcs&#xA; The buffers from which bytes are to be retrieved
   * @return The number of bytes written, possibly zero
   * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
   * @throws ClosedChannelException&#xA; If this channel is closed
   * @throws AsynchronousCloseException&#xA; If another thread closes this channel&#xA; while the write operation is in progress
   * @throws ClosedByInterruptException&#xA; If another thread interrupts the current thread&#xA; while the write operation is in progress, thereby&#xA; closing the channel and setting the current thread's&#xA; interrupt status
   * @throws IOException&#xA; If some other I/O error occurs
   */
  write(srcs: unknown[]): number;
};
