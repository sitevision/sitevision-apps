import type { WritableByteChannel } from "../WritableByteChannel";
import type { ReadableByteChannel } from "../ReadableByteChannel";
import type { MapMode } from "../FileChannel.MapMode";
import type { MappedByteBuffer } from "../../MappedByteBuffer";
import type { FileLock } from "../FileLock";
import type { AbstractInterruptibleChannel } from "../spi/AbstractInterruptibleChannel";
import type { SeekableByteChannel } from "../SeekableByteChannel";
import type { GatheringByteChannel } from "../GatheringByteChannel";
import type { ScatteringByteChannel } from "../ScatteringByteChannel";

/**
 * A channel for reading, writing, mapping, and manipulating a file.
 *
 *  <p> A file channel is a {@link SeekableByteChannel} that is connected to
 *  a file. It has a current <i>position</i> within its file which can
 *  be both {@link #position() <i>queried</i>} and {@link #position(long)
 *  <i>modified</i>}.  The file itself contains a variable-length sequence
 *  of bytes that can be read and written and whose current {@link #size
 *  <i>size</i>} can be queried.  The size of the file increases
 *  when bytes are written beyond its current size; the size of the file
 *  decreases when it is {@link #truncate <i>truncated</i>}.  The
 *  file may also have some associated <i>metadata</i> such as access
 *  permissions, content type, and last-modification time; this class does not
 *  define methods for metadata access.
 *
 *  <p> In addition to the familiar read, write, and close operations of byte
 *  channels, this class defines the following file-specific operations: </p>
 *
 *  <ul>
 *
 *    <li><p> Bytes may be {@link #read(ByteBuffer, long) read} or
 *    {@link #write(ByteBuffer, long) <i>written</i>} at an absolute
 *    position in a file in a way that does not affect the channel's current
 *    position.  </p></li>
 *
 *    <li><p> A region of a file may be {@link #map <i>mapped</i>}
 *    directly into memory; for large files this is often much more efficient
 *    than invoking the usual <tt>read</tt> or <tt>write</tt> methods.
 *    </p></li>
 *
 *    <li><p> Updates made to a file may be {@link #force <i>forced
 *    out</i>} to the underlying storage device, ensuring that data are not
 *    lost in the event of a system crash.  </p></li>
 *
 *    <li><p> Bytes can be transferred from a file {@link #transferTo <i>to
 *    some other channel</i>}, and {@link #transferFrom <i>vice
 *    versa</i>}, in a way that can be optimized by many operating systems
 *    into a very fast transfer directly to or from the filesystem cache.
 *    </p></li>
 *
 *    <li><p> A region of a file may be {@link FileLock <i>locked</i>}
 *    against access by other programs.  </p></li>
 *
 *  </ul>
 *
 *  <p> File channels are safe for use by multiple concurrent threads.  The
 *  {@link Channel#close close} method may be invoked at any time, as specified
 *  by the {@link Channel} interface.  Only one operation that involves the
 *  channel's position or can change its file's size may be in progress at any
 *  given time; attempts to initiate a second such operation while the first is
 *  still in progress will block until the first operation completes.  Other
 *  operations, in particular those that take an explicit position, may proceed
 *  concurrently; whether they in fact do so is dependent upon the underlying
 *  implementation and is therefore unspecified.
 *
 *  <p> The view of a file provided by an instance of this class is guaranteed
 *  to be consistent with other views of the same file provided by other
 *  instances in the same program.  The view provided by an instance of this
 *  class may or may not, however, be consistent with the views seen by other
 *  concurrently-running programs due to caching performed by the underlying
 *  operating system and delays induced by network-filesystem protocols.  This
 *  is true regardless of the language in which these other programs are
 *  written, and whether they are running on the same machine or on some other
 *  machine.  The exact nature of any such inconsistencies are system-dependent
 *  and are therefore unspecified.
 *
 *  <p> A file channel is created by invoking one of the {@link #open open}
 *  methods defined by this class. A file channel can also be obtained from an
 *  existing {@link java.io.FileInputStream#getChannel FileInputStream}, {@link
 *  java.io.FileOutputStream#getChannel FileOutputStream}, or {@link
 *  java.io.RandomAccessFile#getChannel RandomAccessFile} object by invoking
 *  that object's <tt>getChannel</tt> method, which returns a file channel that
 *  is connected to the same underlying file. Where the file channel is obtained
 *  from an existing stream or random access file then the state of the file
 *  channel is intimately connected to that of the object whose <tt>getChannel</tt>
 *  method returned the channel.  Changing the channel's position, whether
 *  explicitly or by reading or writing bytes, will change the file position of
 *  the originating object, and vice versa. Changing the file's length via the
 *  file channel will change the length seen via the originating object, and vice
 *  versa.  Changing the file's content by writing bytes will change the content
 *  seen by the originating object, and vice versa.
 *
 *  <a name="open-mode"></a> <p> At various points this class specifies that an
 *  instance that is "open for reading," "open for writing," or "open for
 *  reading and writing" is required.  A channel obtained via the {@link
 *  java.io.FileInputStream#getChannel getChannel} method of a {@link
 *  java.io.FileInputStream} instance will be open for reading.  A channel
 *  obtained via the {@link java.io.FileOutputStream#getChannel getChannel}
 *  method of a {@link java.io.FileOutputStream} instance will be open for
 *  writing.  Finally, a channel obtained via the {@link
 *  java.io.RandomAccessFile#getChannel getChannel} method of a {@link
 *  java.io.RandomAccessFile} instance will be open for reading if the instance
 *  was created with mode <tt>"r"</tt> and will be open for reading and writing
 *  if the instance was created with mode <tt>"rw"</tt>.
 *
 *  <a name="append-mode"></a><p> A file channel that is open for writing may be in
 *  <i>append mode</i>, for example if it was obtained from a file-output stream
 *  that was created by invoking the {@link
 *  java.io.FileOutputStream#FileOutputStream(java.io.File,boolean)
 *  FileOutputStream(File,boolean)} constructor and passing <tt>true</tt> for
 *  the second parameter.  In this mode each invocation of a relative write
 *  operation first advances the position to the end of the file and then writes
 *  the requested data.  Whether the advancement of the position and the writing
 *  of the data are done in a single atomic operation is system-dependent and
 *  therefore unspecified.
 * @see java.io.FileInputStream#getChannel()
 * @see java.io.FileOutputStream#getChannel()
 * @see java.io.RandomAccessFile#getChannel()
 * @author Mark Reinhold
 * @author Mike McCloskey
 * @author JSR-51 Expert Group
 * @since 1.4
 */
export type FileChannel = AbstractInterruptibleChannel &
  SeekableByteChannel &
  GatheringByteChannel &
  ScatteringByteChannel & {
    /**
 * Reads a sequence of bytes from this channel into the given buffer.
 * 
 *  <p> Bytes are read starting at this channel's current file position, and
 *  then the file position is updated with the number of bytes actually
 *  read.  Otherwise this method behaves exactly as specified in the {@link
 *  ReadableByteChannel} interface. </p>
  
    */
    read(dst: unknown): number;

    /**
 * Reads a sequence of bytes from this channel into a subsequence of the
 *  given buffers.
 * 
 *  <p> Bytes are read starting at this channel's current file position, and
 *  then the file position is updated with the number of bytes actually
 *  read.  Otherwise this method behaves exactly as specified in the {@link
 *  ScatteringByteChannel} interface.  </p>
  
    */
    read(dsts: unknown[], offset: number, length: number): number;

    /**
 * Reads a sequence of bytes from this channel into the given buffers.
 * 
 *  <p> Bytes are read starting at this channel's current file position, and
 *  then the file position is updated with the number of bytes actually
 *  read.  Otherwise this method behaves exactly as specified in the {@link
 *  ScatteringByteChannel} interface.  </p>
  
    */
    read(dsts: unknown[]): number;

    /**
 * Writes a sequence of bytes to this channel from the given buffer.
 * 
 *  <p> Bytes are written starting at this channel's current file position
 *  unless the channel is in append mode, in which case the position is
 *  first advanced to the end of the file.  The file is grown, if necessary,
 *  to accommodate the written bytes, and then the file position is updated
 *  with the number of bytes actually written.  Otherwise this method
 *  behaves exactly as specified by the {@link WritableByteChannel}
 *  interface. </p>
  
    */
    write(src: unknown): number;

    /**
 * Writes a sequence of bytes to this channel from a subsequence of the
 *  given buffers.
 * 
 *  <p> Bytes are written starting at this channel's current file position
 *  unless the channel is in append mode, in which case the position is
 *  first advanced to the end of the file.  The file is grown, if necessary,
 *  to accommodate the written bytes, and then the file position is updated
 *  with the number of bytes actually written.  Otherwise this method
 *  behaves exactly as specified in the {@link GatheringByteChannel}
 *  interface.  </p>
  
    */
    write(srcs: unknown[], offset: number, length: number): number;

    /**
 * Writes a sequence of bytes to this channel from the given buffers.
 * 
 *  <p> Bytes are written starting at this channel's current file position
 *  unless the channel is in append mode, in which case the position is
 *  first advanced to the end of the file.  The file is grown, if necessary,
 *  to accommodate the written bytes, and then the file position is updated
 *  with the number of bytes actually written.  Otherwise this method
 *  behaves exactly as specified in the {@link GatheringByteChannel}
 *  interface.  </p>
  
    */
    write(srcs: unknown[]): number;

    /**
     * Returns this channel's file position.
     * @return This channel's file position,&#xA; a non-negative integer counting the number of bytes&#xA; from the beginning of the file to the current position
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws IOException&#xA; If some other I/O error occurs
     */
    position(): number;

    /**
     * Sets this channel's file position.
     *
     *  <p> Setting the position to a value that is greater than the file's
     *  current size is legal but does not change the size of the file.  A later
     *  attempt to read bytes at such a position will immediately return an
     *  end-of-file indication.  A later attempt to write bytes at such a
     *  position will cause the file to be grown to accommodate the new bytes;
     *  the values of any bytes between the previous end-of-file and the
     *  newly-written bytes are unspecified.  </p>
     * @param newPosition&#xA; The new position, a non-negative integer counting&#xA; the number of bytes from the beginning of the file
     * @return This file channel
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws IllegalArgumentException&#xA; If the new position is negative
     * @throws IOException&#xA; If some other I/O error occurs
     */
    position(newPosition: number): FileChannel;

    /**
     * Returns the current size of this channel's file.
     * @return The current size of this channel's file,&#xA; measured in bytes
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws IOException&#xA; If some other I/O error occurs
     */
    size(): number;

    /**
     * Truncates this channel's file to the given size.
     *
     *  <p> If the given size is less than the file's current size then the file
     *  is truncated, discarding any bytes beyond the new end of the file.  If
     *  the given size is greater than or equal to the file's current size then
     *  the file is not modified.  In either case, if this channel's file
     *  position is greater than the given size then it is set to that size.
     *  </p>
     * @param size&#xA; The new size, a non-negative byte count
     * @return This file channel
     * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws IllegalArgumentException&#xA; If the new size is negative
     * @throws IOException&#xA; If some other I/O error occurs
     */
    truncate(size: number): FileChannel;

    /**
     * Forces any updates to this channel's file to be written to the storage
     *  device that contains it.
     *
     *  <p> If this channel's file resides on a local storage device then when
     *  this method returns it is guaranteed that all changes made to the file
     *  since this channel was created, or since this method was last invoked,
     *  will have been written to that device.  This is useful for ensuring that
     *  critical information is not lost in the event of a system crash.
     *
     *  <p> If the file does not reside on a local device then no such guarantee
     *  is made.
     *
     *  <p> The <tt>metaData</tt> parameter can be used to limit the number of
     *  I/O operations that this method is required to perform.  Passing
     *  <tt>false</tt> for this parameter indicates that only updates to the
     *  file's content need be written to storage; passing <tt>true</tt>
     *  indicates that updates to both the file's content and metadata must be
     *  written, which generally requires at least one more I/O operation.
     *  Whether this parameter actually has any effect is dependent upon the
     *  underlying operating system and is therefore unspecified.
     *
     *  <p> Invoking this method may cause an I/O operation to occur even if the
     *  channel was only opened for reading.  Some operating systems, for
     *  example, maintain a last-access time as part of a file's metadata, and
     *  this time is updated whenever the file is read.  Whether or not this is
     *  actually done is system-dependent and is therefore unspecified.
     *
     *  <p> This method is only guaranteed to force changes that were made to
     *  this channel's file via the methods defined in this class.  It may or
     *  may not force changes that were made by modifying the content of a
     *  {@link MappedByteBuffer <i>mapped byte buffer</i>} obtained by
     *  invoking the {@link #map map} method.  Invoking the {@link
     *  MappedByteBuffer#force force} method of the mapped byte buffer will
     *  force changes made to the buffer's content to be written.  </p>
     * @param metaData&#xA; If <tt>true</tt> then this method is required to force changes&#xA; to both the file's content and metadata to be written to&#xA; storage; otherwise, it need only force content changes to be&#xA; written
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws IOException&#xA; If some other I/O error occurs
     */
    force(metaData: boolean): void;

    /**
     * Transfers bytes from this channel's file to the given writable byte
     *  channel.
     *
     *  <p> An attempt is made to read up to <tt>count</tt> bytes starting at
     *  the given <tt>position</tt> in this channel's file and write them to the
     *  target channel.  An invocation of this method may or may not transfer
     *  all of the requested bytes; whether or not it does so depends upon the
     *  natures and states of the channels.  Fewer than the requested number of
     *  bytes are transferred if this channel's file contains fewer than
     *  <tt>count</tt> bytes starting at the given <tt>position</tt>, or if the
     *  target channel is non-blocking and it has fewer than <tt>count</tt>
     *  bytes free in its output buffer.
     *
     *  <p> This method does not modify this channel's position.  If the given
     *  position is greater than the file's current size then no bytes are
     *  transferred.  If the target channel has a position then bytes are
     *  written starting at that position and then the position is incremented
     *  by the number of bytes written.
     *
     *  <p> This method is potentially much more efficient than a simple loop
     *  that reads from this channel and writes to the target channel.  Many
     *  operating systems can transfer bytes directly from the filesystem cache
     *  to the target channel without actually copying them.  </p>
     * @param position&#xA; The position within the file at which the transfer is to begin;&#xA; must be non-negative
     * @param count&#xA; The maximum number of bytes to be transferred; must be&#xA; non-negative
     * @param target&#xA; The target channel
     * @return The number of bytes, possibly zero,&#xA; that were actually transferred
     * @throws IllegalArgumentException&#xA; If the preconditions on the parameters do not hold
     * @throws NonReadableChannelException&#xA; If this channel was not opened for reading
     * @throws NonWritableChannelException&#xA; If the target channel was not opened for writing
     * @throws ClosedChannelException&#xA; If either this channel or the target channel is closed
     * @throws AsynchronousCloseException&#xA; If another thread closes either channel&#xA; while the transfer is in progress
     * @throws ClosedByInterruptException&#xA; If another thread interrupts the current thread while the&#xA; transfer is in progress, thereby closing both channels and&#xA; setting the current thread's interrupt status
     * @throws IOException&#xA; If some other I/O error occurs
     */
    transferTo(
      position: number,
      count: number,
      target: WritableByteChannel
    ): number;

    /**
     * Transfers bytes into this channel's file from the given readable byte
     *  channel.
     *
     *  <p> An attempt is made to read up to <tt>count</tt> bytes from the
     *  source channel and write them to this channel's file starting at the
     *  given <tt>position</tt>.  An invocation of this method may or may not
     *  transfer all of the requested bytes; whether or not it does so depends
     *  upon the natures and states of the channels.  Fewer than the requested
     *  number of bytes will be transferred if the source channel has fewer than
     *  <tt>count</tt> bytes remaining, or if the source channel is non-blocking
     *  and has fewer than <tt>count</tt> bytes immediately available in its
     *  input buffer.
     *
     *  <p> This method does not modify this channel's position.  If the given
     *  position is greater than the file's current size then no bytes are
     *  transferred.  If the source channel has a position then bytes are read
     *  starting at that position and then the position is incremented by the
     *  number of bytes read.
     *
     *  <p> This method is potentially much more efficient than a simple loop
     *  that reads from the source channel and writes to this channel.  Many
     *  operating systems can transfer bytes directly from the source channel
     *  into the filesystem cache without actually copying them.  </p>
     * @param src&#xA; The source channel
     * @param position&#xA; The position within the file at which the transfer is to begin;&#xA; must be non-negative
     * @param count&#xA; The maximum number of bytes to be transferred; must be&#xA; non-negative
     * @return The number of bytes, possibly zero,&#xA; that were actually transferred
     * @throws IllegalArgumentException&#xA; If the preconditions on the parameters do not hold
     * @throws NonReadableChannelException&#xA; If the source channel was not opened for reading
     * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
     * @throws ClosedChannelException&#xA; If either this channel or the source channel is closed
     * @throws AsynchronousCloseException&#xA; If another thread closes either channel&#xA; while the transfer is in progress
     * @throws ClosedByInterruptException&#xA; If another thread interrupts the current thread while the&#xA; transfer is in progress, thereby closing both channels and&#xA; setting the current thread's interrupt status
     * @throws IOException&#xA; If some other I/O error occurs
     */
    transferFrom(
      src: ReadableByteChannel,
      position: number,
      count: number
    ): number;

    /**
     * Reads a sequence of bytes from this channel into the given buffer,
     *  starting at the given file position.
     *
     *  <p> This method works in the same manner as the {@link
     *  #read(ByteBuffer)} method, except that bytes are read starting at the
     *  given file position rather than at the channel's current position.  This
     *  method does not modify this channel's position.  If the given position
     *  is greater than the file's current size then no bytes are read.  </p>
     * @param dst&#xA; The buffer into which bytes are to be transferred
     * @param position&#xA; The file position at which the transfer is to begin;&#xA; must be non-negative
     * @return The number of bytes read, possibly zero, or <tt>-1</tt> if the&#xA; given position is greater than or equal to the file's current&#xA; size
     * @throws IllegalArgumentException&#xA; If the position is negative
     * @throws NonReadableChannelException&#xA; If this channel was not opened for reading
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws AsynchronousCloseException&#xA; If another thread closes this channel&#xA; while the read operation is in progress
     * @throws ClosedByInterruptException&#xA; If another thread interrupts the current thread&#xA; while the read operation is in progress, thereby&#xA; closing the channel and setting the current thread's&#xA; interrupt status
     * @throws IOException&#xA; If some other I/O error occurs
     */
    read(dst: unknown, position: number): number;

    /**
     * Writes a sequence of bytes to this channel from the given buffer,
     *  starting at the given file position.
     *
     *  <p> This method works in the same manner as the {@link
     *  #write(ByteBuffer)} method, except that bytes are written starting at
     *  the given file position rather than at the channel's current position.
     *  This method does not modify this channel's position.  If the given
     *  position is greater than the file's current size then the file will be
     *  grown to accommodate the new bytes; the values of any bytes between the
     *  previous end-of-file and the newly-written bytes are unspecified.  </p>
     * @param src&#xA; The buffer from which bytes are to be transferred
     * @param position&#xA; The file position at which the transfer is to begin;&#xA; must be non-negative
     * @return The number of bytes written, possibly zero
     * @throws IllegalArgumentException&#xA; If the position is negative
     * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws AsynchronousCloseException&#xA; If another thread closes this channel&#xA; while the write operation is in progress
     * @throws ClosedByInterruptException&#xA; If another thread interrupts the current thread&#xA; while the write operation is in progress, thereby&#xA; closing the channel and setting the current thread's&#xA; interrupt status
     * @throws IOException&#xA; If some other I/O error occurs
     */
    write(src: unknown, position: number): number;

    /**
     * Maps a region of this channel's file directly into memory.
     *
     *  <p> A region of a file may be mapped into memory in one of three modes:
     *  </p>
     *
     *  <ul>
     *
     *    <li><p> <i>Read-only:</i> Any attempt to modify the resulting buffer
     *    will cause a {@link java.nio.ReadOnlyBufferException} to be thrown.
     *    ({@link MapMode#READ_ONLY MapMode.READ_ONLY}) </p></li>
     *
     *    <li><p> <i>Read/write:</i> Changes made to the resulting buffer will
     *    eventually be propagated to the file; they may or may not be made
     *    visible to other programs that have mapped the same file.  ({@link
     *    MapMode#READ_WRITE MapMode.READ_WRITE}) </p></li>
     *
     *    <li><p> <i>Private:</i> Changes made to the resulting buffer will not
     *    be propagated to the file and will not be visible to other programs
     *    that have mapped the same file; instead, they will cause private
     *    copies of the modified portions of the buffer to be created.  ({@link
     *    MapMode#PRIVATE MapMode.PRIVATE}) </p></li>
     *
     *  </ul>
     *
     *  <p> For a read-only mapping, this channel must have been opened for
     *  reading; for a read/write or private mapping, this channel must have
     *  been opened for both reading and writing.
     *
     *  <p> The {@link MappedByteBuffer <i>mapped byte buffer</i>}
     *  returned by this method will have a position of zero and a limit and
     *  capacity of <tt>size</tt>; its mark will be undefined.  The buffer and
     *  the mapping that it represents will remain valid until the buffer itself
     *  is garbage-collected.
     *
     *  <p> A mapping, once established, is not dependent upon the file channel
     *  that was used to create it.  Closing the channel, in particular, has no
     *  effect upon the validity of the mapping.
     *
     *  <p> Many of the details of memory-mapped files are inherently dependent
     *  upon the underlying operating system and are therefore unspecified.  The
     *  behavior of this method when the requested region is not completely
     *  contained within this channel's file is unspecified.  Whether changes
     *  made to the content or size of the underlying file, by this program or
     *  another, are propagated to the buffer is unspecified.  The rate at which
     *  changes to the buffer are propagated to the file is unspecified.
     *
     *  <p> For most operating systems, mapping a file into memory is more
     *  expensive than reading or writing a few tens of kilobytes of data via
     *  the usual {@link #read read} and {@link #write write} methods.  From the
     *  standpoint of performance it is generally only worth mapping relatively
     *  large files into memory.  </p>
     * @param mode&#xA; One of the constants {@link MapMode#READ_ONLY READ_ONLY}, {@link&#xA; MapMode#READ_WRITE READ_WRITE}, or {@link MapMode#PRIVATE&#xA; PRIVATE} defined in the {@link MapMode} class, according to&#xA; whether the file is to be mapped read-only, read/write, or&#xA; privately (copy-on-write), respectively
     * @param position&#xA; The position within the file at which the mapped region&#xA; is to start; must be non-negative
     * @param size&#xA; The size of the region to be mapped; must be non-negative and&#xA; no greater than {@link java.lang.Integer#MAX_VALUE}
     * @return The mapped byte buffer
     * @throws NonReadableChannelException&#xA; If the <tt>mode</tt> is {@link MapMode#READ_ONLY READ_ONLY} but&#xA; this channel was not opened for reading
     * @throws NonWritableChannelException&#xA; If the <tt>mode</tt> is {@link MapMode#READ_WRITE READ_WRITE} or&#xA; {@link MapMode#PRIVATE PRIVATE} but this channel was not opened&#xA; for both reading and writing
     * @throws IllegalArgumentException&#xA; If the preconditions on the parameters do not hold
     * @throws IOException&#xA; If some other I/O error occurs
     * @see java.nio.channels.FileChannel.MapMode
     * @see java.nio.MappedByteBuffer
     */
    map(mode: MapMode, position: number, size: number): MappedByteBuffer;

    /**
     * Acquires a lock on the given region of this channel's file.
     *
     *  <p> An invocation of this method will block until the region can be
     *  locked, this channel is closed, or the invoking thread is interrupted,
     *  whichever comes first.
     *
     *  <p> If this channel is closed by another thread during an invocation of
     *  this method then an {@link AsynchronousCloseException} will be thrown.
     *
     *  <p> If the invoking thread is interrupted while waiting to acquire the
     *  lock then its interrupt status will be set and a {@link
     *  FileLockInterruptionException} will be thrown.  If the invoker's
     *  interrupt status is set when this method is invoked then that exception
     *  will be thrown immediately; the thread's interrupt status will not be
     *  changed.
     *
     *  <p> The region specified by the <tt>position</tt> and <tt>size</tt>
     *  parameters need not be contained within, or even overlap, the actual
     *  underlying file.  Lock regions are fixed in size; if a locked region
     *  initially contains the end of the file and the file grows beyond the
     *  region then the new portion of the file will not be covered by the lock.
     *  If a file is expected to grow in size and a lock on the entire file is
     *  required then a region starting at zero, and no smaller than the
     *  expected maximum size of the file, should be locked.  The zero-argument
     *  {@link #lock()} method simply locks a region of size {@link
     *  Long#MAX_VALUE}.
     *
     *  <p> Some operating systems do not support shared locks, in which case a
     *  request for a shared lock is automatically converted into a request for
     *  an exclusive lock.  Whether the newly-acquired lock is shared or
     *  exclusive may be tested by invoking the resulting lock object's {@link
     *  FileLock#isShared() isShared} method.
     *
     *  <p> File locks are held on behalf of the entire Java virtual machine.
     *  They are not suitable for controlling access to a file by multiple
     *  threads within the same virtual machine.  </p>
     * @param position&#xA; The position at which the locked region is to start; must be&#xA; non-negative
     * @param size&#xA; The size of the locked region; must be non-negative, and the sum&#xA; <tt>position</tt>&nbsp;+&nbsp;<tt>size</tt> must be non-negative
     * @param shared&#xA; <tt>true</tt> to request a shared lock, in which case this&#xA; channel must be open for reading (and possibly writing);&#xA; <tt>false</tt> to request an exclusive lock, in which case this&#xA; channel must be open for writing (and possibly reading)
     * @return A lock object representing the newly-acquired lock
     * @throws IllegalArgumentException&#xA; If the preconditions on the parameters do not hold
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws AsynchronousCloseException&#xA; If another thread closes this channel while the invoking&#xA; thread is blocked in this method
     * @throws FileLockInterruptionException&#xA; If the invoking thread is interrupted while blocked in this&#xA; method
     * @throws OverlappingFileLockException&#xA; If a lock that overlaps the requested region is already held by&#xA; this Java virtual machine, or if another thread is already&#xA; blocked in this method and is attempting to lock an overlapping&#xA; region
     * @throws NonReadableChannelException&#xA; If <tt>shared</tt> is <tt>true</tt> this channel was not&#xA; opened for reading
     * @throws NonWritableChannelException&#xA; If <tt>shared</tt> is <tt>false</tt> but this channel was not&#xA; opened for writing
     * @throws IOException&#xA; If some other I/O error occurs
     * @see #lock()
     * @see #tryLock()
     * @see #tryLock(long,long,boolean)
     */
    lock(position: number, size: number, shared: boolean): FileLock;

    /**
     * Acquires an exclusive lock on this channel's file.
     *
     *  <p> An invocation of this method of the form <tt>fc.lock()</tt> behaves
     *  in exactly the same way as the invocation
     *
     *  <pre>
     *      fc.{@link #lock(long,long,boolean) lock}(0L, Long.MAX_VALUE, false) </pre>
     * @return A lock object representing the newly-acquired lock
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws AsynchronousCloseException&#xA; If another thread closes this channel while the invoking&#xA; thread is blocked in this method
     * @throws FileLockInterruptionException&#xA; If the invoking thread is interrupted while blocked in this&#xA; method
     * @throws OverlappingFileLockException&#xA; If a lock that overlaps the requested region is already held by&#xA; this Java virtual machine, or if another thread is already&#xA; blocked in this method and is attempting to lock an overlapping&#xA; region of the same file
     * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
     * @throws IOException&#xA; If some other I/O error occurs
     * @see #lock(long,long,boolean)
     * @see #tryLock()
     * @see #tryLock(long,long,boolean)
     */
    lock(): FileLock;

    /**
     * Attempts to acquire a lock on the given region of this channel's file.
     *
     *  <p> This method does not block.  An invocation always returns
     *  immediately, either having acquired a lock on the requested region or
     *  having failed to do so.  If it fails to acquire a lock because an
     *  overlapping lock is held by another program then it returns
     *  <tt>null</tt>.  If it fails to acquire a lock for any other reason then
     *  an appropriate exception is thrown.
     *
     *  <p> The region specified by the <tt>position</tt> and <tt>size</tt>
     *  parameters need not be contained within, or even overlap, the actual
     *  underlying file.  Lock regions are fixed in size; if a locked region
     *  initially contains the end of the file and the file grows beyond the
     *  region then the new portion of the file will not be covered by the lock.
     *  If a file is expected to grow in size and a lock on the entire file is
     *  required then a region starting at zero, and no smaller than the
     *  expected maximum size of the file, should be locked.  The zero-argument
     *  {@link #tryLock()} method simply locks a region of size {@link
     *  Long#MAX_VALUE}.
     *
     *  <p> Some operating systems do not support shared locks, in which case a
     *  request for a shared lock is automatically converted into a request for
     *  an exclusive lock.  Whether the newly-acquired lock is shared or
     *  exclusive may be tested by invoking the resulting lock object's {@link
     *  FileLock#isShared() isShared} method.
     *
     *  <p> File locks are held on behalf of the entire Java virtual machine.
     *  They are not suitable for controlling access to a file by multiple
     *  threads within the same virtual machine.  </p>
     * @param position&#xA; The position at which the locked region is to start; must be&#xA; non-negative
     * @param size&#xA; The size of the locked region; must be non-negative, and the sum&#xA; <tt>position</tt>&nbsp;+&nbsp;<tt>size</tt> must be non-negative
     * @param shared&#xA; <tt>true</tt> to request a shared lock,&#xA; <tt>false</tt> to request an exclusive lock
     * @return A lock object representing the newly-acquired lock,&#xA; or <tt>null</tt> if the lock could not be acquired&#xA; because another program holds an overlapping lock
     * @throws IllegalArgumentException&#xA; If the preconditions on the parameters do not hold
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws OverlappingFileLockException&#xA; If a lock that overlaps the requested region is already held by&#xA; this Java virtual machine, or if another thread is already&#xA; blocked in this method and is attempting to lock an overlapping&#xA; region of the same file
     * @throws IOException&#xA; If some other I/O error occurs
     * @see #lock()
     * @see #lock(long,long,boolean)
     * @see #tryLock()
     */
    tryLock(position: number, size: number, shared: boolean): FileLock;

    /**
     * Attempts to acquire an exclusive lock on this channel's file.
     *
     *  <p> An invocation of this method of the form <tt>fc.tryLock()</tt>
     *  behaves in exactly the same way as the invocation
     *
     *  <pre>
     *      fc.{@link #tryLock(long,long,boolean) tryLock}(0L, Long.MAX_VALUE, false) </pre>
     * @return A lock object representing the newly-acquired lock,&#xA; or <tt>null</tt> if the lock could not be acquired&#xA; because another program holds an overlapping lock
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws OverlappingFileLockException&#xA; If a lock that overlaps the requested region is already held by&#xA; this Java virtual machine, or if another thread is already&#xA; blocked in this method and is attempting to lock an overlapping&#xA; region
     * @throws IOException&#xA; If some other I/O error occurs
     * @see #lock()
     * @see #lock(long,long,boolean)
     * @see #tryLock(long,long,boolean)
     */
    tryLock(): FileLock;
  };
