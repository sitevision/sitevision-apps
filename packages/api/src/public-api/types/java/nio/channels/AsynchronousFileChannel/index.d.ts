import type { CompletionHandler } from "../CompletionHandler";
import type { Future } from "../../../util/concurrent/Future";
import type { FileLock } from "../FileLock";

import type { Object } from "../../../lang/Object";
import type { AsynchronousChannel } from "../AsynchronousChannel";

/**
 * An asynchronous channel for reading, writing, and manipulating a file.
 *
 *  <p> An asynchronous file channel is created when a file is opened by invoking
 *  one of the {@link #open open} methods defined by this class. The file contains
 *  a variable-length sequence of bytes that can be read and written and whose
 *  current size can be {@link #size() queried}. The size of the file increases
 *  when bytes are written beyond its  current size; the size of the file decreases
 *  when it is {@link #truncate truncated}.
 *
 *  <p> An asynchronous file channel does not have a <i>current position</i>
 *  within the file. Instead, the file position is specified to each read and
 *  write method that initiates asynchronous operations. A {@link CompletionHandler}
 *  is specified as a parameter and is invoked to consume the result of the I/O
 *  operation. This class also defines read and write methods that initiate
 *  asynchronous operations, returning a {@link Future} to represent the pending
 *  result of the operation. The {@code Future} may be used to check if the
 *  operation has completed, wait for its completion, and retrieve the result.
 *
 *  <p> In addition to read and write operations, this class defines the
 *  following operations: </p>
 *
 *  <ul>
 *
 *    <li><p> Updates made to a file may be {@link #force <i>forced
 *    out</i>} to the underlying storage device, ensuring that data are not
 *    lost in the event of a system crash.  </p></li>
 *
 *    <li><p> A region of a file may be {@link #lock <i>locked</i>} against
 *    access by other programs.  </p></li>
 *
 *  </ul>
 *
 *  <p> An {@code AsynchronousFileChannel} is associated with a thread pool to
 *  which tasks are submitted to handle I/O events and dispatch to completion
 *  handlers that consume the results of I/O operations on the channel. The
 *  completion handler for an I/O operation initiated on a channel is guaranteed
 *  to be invoked by one of the threads in the thread pool (This ensures that the
 *  completion handler is run by a thread with the expected <em>identity</em>).
 *  Where an I/O operation completes immediately, and the initiating thread is
 *  itself a thread in the thread pool, then the completion handler may be invoked
 *  directly by the initiating thread. When an {@code AsynchronousFileChannel} is
 *  created without specifying a thread pool then the channel is associated with
 *  a system-dependent default thread pool that may be shared with other
 *  channels. The default thread pool is configured by the system properties
 *  defined by the {@link AsynchronousChannelGroup} class.
 *
 *  <p> Channels of this type are safe for use by multiple concurrent threads. The
 *  {@link Channel#close close} method may be invoked at any time, as specified
 *  by the {@link Channel} interface. This causes all outstanding asynchronous
 *  operations on the channel to complete with the exception {@link
 *  AsynchronousCloseException}. Multiple read and write operations may be
 *  outstanding at the same time. When multiple read and write operations are
 *  outstanding then the ordering of the I/O operations, and the order that the
 *  completion handlers are invoked, is not specified; they are not, in particular,
 *  guaranteed to execute in the order that the operations were initiated. The
 *  {@link java.nio.ByteBuffer ByteBuffers} used when reading or writing are not
 *  safe for use by multiple concurrent I/O operations. Furthermore, after an I/O
 *  operation is initiated then care should be taken to ensure that the buffer is
 *  not accessed until after the operation has completed.
 *
 *  <p> As with {@link FileChannel}, the view of a file provided by an instance of
 *  this class is guaranteed to be consistent with other views of the same file
 *  provided by other instances in the same program.  The view provided by an
 *  instance of this class may or may not, however, be consistent with the views
 *  seen by other concurrently-running programs due to caching performed by the
 *  underlying operating system and delays induced by network-filesystem protocols.
 *  This is true regardless of the language in which these other programs are
 *  written, and whether they are running on the same machine or on some other
 *  machine.  The exact nature of any such inconsistencies are system-dependent
 *  and are therefore unspecified.
 * @since 1.7
 */
export type AsynchronousFileChannel = Object &
  AsynchronousChannel & {
    /**
     * Returns the current size of this channel's file.
     * @return The current size of this channel's file, measured in bytes
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
     *  the file is not modified. </p>
     * @param size&#xA; The new size, a non-negative byte count
     * @return This file channel
     * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws IllegalArgumentException&#xA; If the new size is negative
     * @throws IOException&#xA; If some other I/O error occurs
     */
    truncate(size: number): AsynchronousFileChannel;

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
     *  <p> The {@code metaData} parameter can be used to limit the number of
     *  I/O operations that this method is required to perform.  Passing
     *  {@code false} for this parameter indicates that only updates to the
     *  file's content need be written to storage; passing {@code true}
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
     *  this channel's file via the methods defined in this class.
     * @param metaData&#xA; If {@code true} then this method is required to force changes&#xA; to both the file's content and metadata to be written to&#xA; storage; otherwise, it need only force content changes to be&#xA; written
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws IOException&#xA; If some other I/O error occurs
     */
    force(metaData: boolean): void;

    /**
     * Acquires a lock on the given region of this channel's file.
     *
     *  <p> This method initiates an operation to acquire a lock on the given
     *  region of this channel's file. The {@code handler} parameter is a
     *  completion handler that is invoked when the lock is acquired (or the
     *  operation fails). The result passed to the completion handler is the
     *  resulting {@code FileLock}.
     *
     *  <p> The region specified by the {@code position} and {@code size}
     *  parameters need not be contained within, or even overlap, the actual
     *  underlying file.  Lock regions are fixed in size; if a locked region
     *  initially contains the end of the file and the file grows beyond the
     *  region then the new portion of the file will not be covered by the lock.
     *  If a file is expected to grow in size and a lock on the entire file is
     *  required then a region starting at zero, and no smaller than the
     *  expected maximum size of the file, should be locked.  The two-argument
     *  {@link #lock(Object,CompletionHandler)} method simply locks a region
     *  of size {@link Long#MAX_VALUE}. If a lock that overlaps the requested
     *  region is already held by this Java virtual machine, or this method has
     *  been invoked to lock an overlapping region and that operation has not
     *  completed, then this method throws {@link OverlappingFileLockException}.
     *
     *  <p> Some operating systems do not support a mechanism to acquire a file
     *  lock in an asynchronous manner. Consequently an implementation may
     *  acquire the file lock in a background thread or from a task executed by
     *  a thread in the associated thread pool. If there are many lock operations
     *  outstanding then it may consume threads in the Java virtual machine for
     *  indefinite periods.
     *
     *  <p> Some operating systems do not support shared locks, in which case a
     *  request for a shared lock is automatically converted into a request for
     *  an exclusive lock.  Whether the newly-acquired lock is shared or
     *  exclusive may be tested by invoking the resulting lock object's {@link
     *  FileLock#isShared() isShared} method.
     *
     *  <p> File locks are held on behalf of the entire Java virtual machine.
     *  They are not suitable for controlling access to a file by multiple
     *  threads within the same virtual machine.
     * @param <A>&#xA; The type of the attachment
     * @param position&#xA; The position at which the locked region is to start; must be&#xA; non-negative
     * @param size&#xA; The size of the locked region; must be non-negative, and the sum&#xA; {@code position}&nbsp;+&nbsp;{@code size} must be non-negative
     * @param shared&#xA; {@code true} to request a shared lock, in which case this&#xA; channel must be open for reading (and possibly writing);&#xA; {@code false} to request an exclusive lock, in which case this&#xA; channel must be open for writing (and possibly reading)
     * @param attachment&#xA; The object to attach to the I/O operation; can be {@code null}
     * @param handler&#xA; The handler for consuming the result
     * @throws OverlappingFileLockException&#xA; If a lock that overlaps the requested region is already held by&#xA; this Java virtual machine, or there is already a pending attempt&#xA; to lock an overlapping region
     * @throws IllegalArgumentException&#xA; If the preconditions on the parameters do not hold
     * @throws NonReadableChannelException&#xA; If {@code shared} is true but this channel was not opened for reading
     * @throws NonWritableChannelException&#xA; If {@code shared} is false but this channel was not opened for writing
     */
    lock(
      position: number,
      size: number,
      shared: boolean,
      attachment: unknown,
      handler: CompletionHandler
    ): void;

    /**
     * Acquires an exclusive lock on this channel's file.
     *
     *  <p> This method initiates an operation to acquire a lock on the given
     *  region of this channel's file. The {@code handler} parameter is a
     *  completion handler that is invoked when the lock is acquired (or the
     *  operation fails). The result passed to the completion handler is the
     *  resulting {@code FileLock}.
     *
     *  <p> An invocation of this method of the form {@code ch.lock(att,handler)}
     *  behaves in exactly the same way as the invocation
     *  <pre>
     *      ch.{@link #lock(long,long,boolean,Object,CompletionHandler) lock}(0L, Long.MAX_VALUE, false, att, handler)
     *  </pre>
     * @param <A>&#xA; The type of the attachment
     * @param attachment&#xA; The object to attach to the I/O operation; can be {@code null}
     * @param handler&#xA; The handler for consuming the result
     * @throws OverlappingFileLockException&#xA; If a lock is already held by this Java virtual machine, or there&#xA; is already a pending attempt to lock a region
     * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
     */
    lock(attachment: unknown, handler: CompletionHandler): void;

    /**
     * Acquires a lock on the given region of this channel's file.
     *
     *  <p> This method initiates an operation to acquire a lock on the given
     *  region of this channel's file.  The method behaves in exactly the same
     *  manner as the {@link #lock(long, long, boolean, Object, CompletionHandler)}
     *  method except that instead of specifying a completion handler, this
     *  method returns a {@code Future} representing the pending result. The
     *  {@code Future}'s {@link Future#get() get} method returns the {@link
     *  FileLock} on successful completion.
     * @param position&#xA; The position at which the locked region is to start; must be&#xA; non-negative
     * @param size&#xA; The size of the locked region; must be non-negative, and the sum&#xA; {@code position}&nbsp;+&nbsp;{@code size} must be non-negative
     * @param shared&#xA; {@code true} to request a shared lock, in which case this&#xA; channel must be open for reading (and possibly writing);&#xA; {@code false} to request an exclusive lock, in which case this&#xA; channel must be open for writing (and possibly reading)
     * @return a {@code Future} object representing the pending result
     * @throws OverlappingFileLockException&#xA; If a lock is already held by this Java virtual machine, or there&#xA; is already a pending attempt to lock a region
     * @throws IllegalArgumentException&#xA; If the preconditions on the parameters do not hold
     * @throws NonReadableChannelException&#xA; If {@code shared} is true but this channel was not opened for reading
     * @throws NonWritableChannelException&#xA; If {@code shared} is false but this channel was not opened for writing
     */
    lock(position: number, size: number, shared: boolean): Future;

    /**
     * Acquires an exclusive lock on this channel's file.
     *
     *  <p> This method initiates an operation to acquire an exclusive lock on this
     *  channel's file. The method returns a {@code Future} representing the
     *  pending result of the operation. The {@code Future}'s {@link Future#get()
     *  get} method returns the {@link FileLock} on successful completion.
     *
     *  <p> An invocation of this method behaves in exactly the same way as the
     *  invocation
     *  <pre>
     *      ch.{@link #lock(long,long,boolean) lock}(0L, Long.MAX_VALUE, false)
     *  </pre>
     * @return a {@code Future} object representing the pending result
     * @throws OverlappingFileLockException&#xA; If a lock is already held by this Java virtual machine, or there&#xA; is already a pending attempt to lock a region
     * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
     */
    lock(): Future;

    /**
     * Attempts to acquire a lock on the given region of this channel's file.
     *
     *  <p> This method does not block. An invocation always returns immediately,
     *  either having acquired a lock on the requested region or having failed to
     *  do so.  If it fails to acquire a lock because an overlapping lock is held
     *  by another program then it returns {@code null}.  If it fails to acquire
     *  a lock for any other reason then an appropriate exception is thrown.
     * @param position&#xA; The position at which the locked region is to start; must be&#xA; non-negative
     * @param size&#xA; The size of the locked region; must be non-negative, and the sum&#xA; {@code position}&nbsp;+&nbsp;{@code size} must be non-negative
     * @param shared&#xA; {@code true} to request a shared lock,&#xA; {@code false} to request an exclusive lock
     * @return A lock object representing the newly-acquired lock,&#xA; or {@code null} if the lock could not be acquired&#xA; because another program holds an overlapping lock
     * @throws IllegalArgumentException&#xA; If the preconditions on the parameters do not hold
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws OverlappingFileLockException&#xA; If a lock that overlaps the requested region is already held by&#xA; this Java virtual machine, or if another thread is already&#xA; blocked in this method and is attempting to lock an overlapping&#xA; region of the same file
     * @throws NonReadableChannelException&#xA; If {@code shared} is true but this channel was not opened for reading
     * @throws NonWritableChannelException&#xA; If {@code shared} is false but this channel was not opened for writing
     * @throws IOException&#xA; If some other I/O error occurs
     * @see #lock(Object,CompletionHandler)
     * @see #lock(long,long,boolean,Object,CompletionHandler)
     * @see #tryLock()
     */
    tryLock(position: number, size: number, shared: boolean): FileLock;

    /**
     * Attempts to acquire an exclusive lock on this channel's file.
     *
     *  <p> An invocation of this method of the form {@code ch.tryLock()}
     *  behaves in exactly the same way as the invocation
     *
     *  <pre>
     *      ch.{@link #tryLock(long,long,boolean) tryLock}(0L, Long.MAX_VALUE, false) </pre>
     * @return A lock object representing the newly-acquired lock,&#xA; or {@code null} if the lock could not be acquired&#xA; because another program holds an overlapping lock
     * @throws ClosedChannelException&#xA; If this channel is closed
     * @throws OverlappingFileLockException&#xA; If a lock that overlaps the requested region is already held by&#xA; this Java virtual machine, or if another thread is already&#xA; blocked in this method and is attempting to lock an overlapping&#xA; region
     * @throws NonWritableChannelException&#xA; If {@code shared} is false but this channel was not opened for writing
     * @throws IOException&#xA; If some other I/O error occurs
     * @see #lock(Object,CompletionHandler)
     * @see #lock(long,long,boolean,Object,CompletionHandler)
     * @see #tryLock(long,long,boolean)
     */
    tryLock(): FileLock;

    /**
     * Reads a sequence of bytes from this channel into the given buffer,
     *  starting at the given file position.
     *
     *  <p> This method initiates the reading of a sequence of bytes from this
     *  channel into the given buffer, starting at the given file position. The
     *  result of the read is the number of bytes read or {@code -1} if the given
     *  position is greater than or equal to the file's size at the time that the
     *  read is attempted.
     *
     *  <p> This method works in the same manner as the {@link
     *  AsynchronousByteChannel#read(ByteBuffer,Object,CompletionHandler)}
     *  method, except that bytes are read starting at the given file position.
     *  If the given file position is greater than the file's size at the time
     *  that the read is attempted then no bytes are read.
     * @param <A>&#xA; The type of the attachment
     * @param dst&#xA; The buffer into which bytes are to be transferred
     * @param position&#xA; The file position at which the transfer is to begin;&#xA; must be non-negative
     * @param attachment&#xA; The object to attach to the I/O operation; can be {@code null}
     * @param handler&#xA; The handler for consuming the result
     * @throws IllegalArgumentException&#xA; If the position is negative or the buffer is read-only
     * @throws NonReadableChannelException&#xA; If this channel was not opened for reading
     */
    read(
      dst: unknown,
      position: number,
      attachment: unknown,
      handler: CompletionHandler
    ): void;

    /**
     * Reads a sequence of bytes from this channel into the given buffer,
     *  starting at the given file position.
     *
     *  <p> This method initiates the reading of a sequence of bytes from this
     *  channel into the given buffer, starting at the given file position. This
     *  method returns a {@code Future} representing the pending result of the
     *  operation. The {@code Future}'s {@link Future#get() get} method returns
     *  the number of bytes read or {@code -1} if the given position is greater
     *  than or equal to the file's size at the time that the read is attempted.
     *
     *  <p> This method works in the same manner as the {@link
     *  AsynchronousByteChannel#read(ByteBuffer)} method, except that bytes are
     *  read starting at the given file position. If the given file position is
     *  greater than the file's size at the time that the read is attempted then
     *  no bytes are read.
     * @param dst&#xA; The buffer into which bytes are to be transferred
     * @param position&#xA; The file position at which the transfer is to begin;&#xA; must be non-negative
     * @return A {@code Future} object representing the pending result
     * @throws IllegalArgumentException&#xA; If the position is negative or the buffer is read-only
     * @throws NonReadableChannelException&#xA; If this channel was not opened for reading
     */
    read(dst: unknown, position: number): Future;

    /**
     * Writes a sequence of bytes to this channel from the given buffer, starting
     *  at the given file position.
     *
     *  <p> This method works in the same manner as the {@link
     *  AsynchronousByteChannel#write(ByteBuffer,Object,CompletionHandler)}
     *  method, except that bytes are written starting at the given file position.
     *  If the given position is greater than the file's size, at the time that
     *  the write is attempted, then the file will be grown to accommodate the new
     *  bytes; the values of any bytes between the previous end-of-file and the
     *  newly-written bytes are unspecified.
     * @param <A>&#xA; The type of the attachment
     * @param src&#xA; The buffer from which bytes are to be transferred
     * @param position&#xA; The file position at which the transfer is to begin;&#xA; must be non-negative
     * @param attachment&#xA; The object to attach to the I/O operation; can be {@code null}
     * @param handler&#xA; The handler for consuming the result
     * @throws IllegalArgumentException&#xA; If the position is negative
     * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
     */
    write(
      src: unknown,
      position: number,
      attachment: unknown,
      handler: CompletionHandler
    ): void;

    /**
     * Writes a sequence of bytes to this channel from the given buffer, starting
     *  at the given file position.
     *
     *  <p> This method initiates the writing of a sequence of bytes to this
     *  channel from the given buffer, starting at the given file position. The
     *  method returns a {@code Future} representing the pending result of the
     *  write operation. The {@code Future}'s {@link Future#get() get} method
     *  returns the number of bytes written.
     *
     *  <p> This method works in the same manner as the {@link
     *  AsynchronousByteChannel#write(ByteBuffer)} method, except that bytes are
     *  written starting at the given file position. If the given position is
     *  greater than the file's size, at the time that the write is attempted,
     *  then the file will be grown to accommodate the new bytes; the values of
     *  any bytes between the previous end-of-file and the newly-written bytes
     *  are unspecified.
     * @param src&#xA; The buffer from which bytes are to be transferred
     * @param position&#xA; The file position at which the transfer is to begin;&#xA; must be non-negative
     * @return A {@code Future} object representing the pending result
     * @throws IllegalArgumentException&#xA; If the position is negative
     * @throws NonWritableChannelException&#xA; If this channel was not opened for writing
     */
    write(src: unknown, position: number): Future;
  };
