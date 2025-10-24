/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

import type { Object } from "../../../../lang/Object";
import type { Channel } from "../../Channel";
import type { InterruptibleChannel } from "../../InterruptibleChannel";

/**
 * Base implementation class for interruptible channels.
 *
 *  <p> This class encapsulates the low-level machinery required to implement
 *  the asynchronous closing and interruption of channels.  A concrete channel
 *  class must invoke the {@link #begin begin} and {@link #end end} methods
 *  before and after, respectively, invoking an I/O operation that might block
 *  indefinitely.  In order to ensure that the {@link #end end} method is always
 *  invoked, these methods should be used within a
 *  <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block:
 *
 *  <blockquote><pre>
 *  boolean completed = false;
 *  try {
 *      begin();
 *      completed = ...;    // Perform blocking I/O operation
 *      return ...;         // Return result
 *  } finally {
 *      end(completed);
 *  }</pre></blockquote>
 *
 *  <p> The <tt>completed</tt> argument to the {@link #end end} method tells
 *  whether or not the I/O operation actually completed, that is, whether it had
 *  any effect that would be visible to the invoker.  In the case of an
 *  operation that reads bytes, for example, this argument should be
 *  <tt>true</tt> if, and only if, some bytes were actually transferred into the
 *  invoker's target buffer.
 *
 *  <p> A concrete channel class must also implement the {@link
 *  #implCloseChannel implCloseChannel} method in such a way that if it is
 *  invoked while another thread is blocked in a native I/O operation upon the
 *  channel then that operation will immediately return, either by throwing an
 *  exception or by returning normally.  If a thread is interrupted or the
 *  channel upon which it is blocked is asynchronously closed then the channel's
 *  {@link #end end} method will throw the appropriate exception.
 *
 *  <p> This class performs the synchronization required to implement the {@link
 *  java.nio.channels.Channel} specification.  Implementations of the {@link
 *  #implCloseChannel implCloseChannel} method need not synchronize against
 *  other threads that might be attempting to close the channel.  </p>
 * @author Mark Reinhold
 * @author JSR-51 Expert Group
 * @since 1.4
 */
export type AbstractInterruptibleChannel = Object &
  Channel &
  InterruptibleChannel & {
    /**
     * Closes this channel.
     *
     *  <p> If the channel has already been closed then this method returns
     *  immediately.  Otherwise it marks the channel as closed and then invokes
     *  the {@link #implCloseChannel implCloseChannel} method in order to
     *  complete the close operation.  </p>
     * @throws IOException&#xA; If an I/O error occurs
     */
    close(): void;

    /**
     * Closes this channel.
     *
     *  <p> This method is invoked by the {@link #close close} method in order
     *  to perform the actual work of closing the channel.  This method is only
     *  invoked if the channel has not yet been closed, and it is never invoked
     *  more than once.
     *
     *  <p> An implementation of this method must arrange for any other thread
     *  that is blocked in an I/O operation upon this channel to return
     *  immediately, either by throwing an exception or by returning normally.
     *  </p>
     * @throws IOException&#xA; If an I/O error occurs while closing the channel
     */
    implCloseChannel(): void;

    isOpen(): boolean;

    /**
 * Marks the beginning of an I/O operation that might block indefinitely.
 * 
 *  <p> This method should be invoked in tandem with the {@link #end end}
 *  method, using a <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block as
 *  shown <a href="#be">above</a>, in order to implement asynchronous
 *  closing and interruption for this channel.  </p>
  
    */
    begin(): void;

    /**
     * Marks the end of an I/O operation that might block indefinitely.
     *
     *  <p> This method should be invoked in tandem with the {@link #begin
     *  begin} method, using a <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block
     *  as shown <a href="#be">above</a>, in order to implement asynchronous
     *  closing and interruption for this channel.  </p>
     * @param completed&#xA; <tt>true</tt> if, and only if, the I/O operation completed&#xA; successfully, that is, had some effect that would be visible to&#xA; the operation's invoker
     * @throws AsynchronousCloseException&#xA; If the channel was asynchronously closed
     * @throws ClosedByInterruptException&#xA; If the thread blocked in the I/O operation was interrupted
     */
    end(completed: boolean): void;
  };
