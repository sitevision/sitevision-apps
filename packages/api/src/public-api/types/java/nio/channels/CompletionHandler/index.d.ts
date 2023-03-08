import type { Throwable } from "../../../lang/Throwable";

/**
 * A handler for consuming the result of an asynchronous I/O operation.
 *
 *  <p> The asynchronous channels defined in this package allow a completion
 *  handler to be specified to consume the result of an asynchronous operation.
 *  The {@link #completed completed} method is invoked when the I/O operation
 *  completes successfully. The {@link #failed failed} method is invoked if the
 *  I/O operations fails. The implementations of these methods should complete
 *  in a timely manner so as to avoid keeping the invoking thread from dispatching
 *  to other completion handlers.
 * @param <V> The result type of the I/O operation
 * @param <A> The type of the object attached to the I/O operation
 * @since 1.7
 */
export type CompletionHandler = {
  /**
   * Invoked when an operation has completed.
   * @param result&#xA; The result of the I/O operation.
   * @param attachment&#xA; The object attached to the I/O operation when it was initiated.
   */
  completed(result: unknown, attachment: unknown): void;

  /**
   * Invoked when an operation fails.
   * @param exc&#xA; The exception to indicate why the I/O operation failed
   * @param attachment&#xA; The object attached to the I/O operation when it was initiated.
   */
  failed(exc: Throwable, attachment: unknown): void;
};
