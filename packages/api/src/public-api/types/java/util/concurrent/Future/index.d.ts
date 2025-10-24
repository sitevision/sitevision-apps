/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

import type { TimeUnit } from "../TimeUnit";

/**
 * A {@code Future} represents the result of an asynchronous
 *  computation.  Methods are provided to check if the computation is
 *  complete, to wait for its completion, and to retrieve the result of
 *  the computation.  The result can only be retrieved using method
 *  {@code get} when the computation has completed, blocking if
 *  necessary until it is ready.  Cancellation is performed by the
 *  {@code cancel} method.  Additional methods are provided to
 *  determine if the task completed normally or was cancelled. Once a
 *  computation has completed, the computation cannot be cancelled.
 *  If you would like to use a {@code Future} for the sake
 *  of cancellability but not provide a usable result, you can
 *  declare types of the form {@code Future<?>} and
 *  return {@code null} as a result of the underlying task.
 *
 *  <p>
 *  <b>Sample Usage</b> (Note that the following classes are all
 *  made-up.)
 *  <pre> {@code
 *  interface ArchiveSearcher { String search(String target); }
 *  class App {
 *    ExecutorService executor = ...
 *    ArchiveSearcher searcher = ...
 *    void showSearch(final String target)
 *        throws InterruptedException {
 *      Future<String> future
 *        = executor.submit(new Callable<String>() {
 *          public String call() {
 *              return searcher.search(target);
 *          }});
 *      displayOtherThings(); // do other things while searching
 *      try {
 *        displayText(future.get()); // use future
 *      } catch (ExecutionException ex) { cleanup(); return; }
 *    }
 *  }}</pre>
 *
 *  The {@link FutureTask} class is an implementation of {@code Future} that
 *  implements {@code Runnable}, and so may be executed by an {@code Executor}.
 *  For example, the above construction with {@code submit} could be replaced by:
 *   <pre> {@code
 *  FutureTask<String> future =
 *    new FutureTask<String>(new Callable<String>() {
 *      public String call() {
 *        return searcher.search(target);
 *    }});
 *  executor.execute(future);}</pre>
 *
 *  <p>Memory consistency effects: Actions taken by the asynchronous computation
 *  <a href="package-summary.html#MemoryVisibility"> <i>happen-before</i></a>
 *  actions following the corresponding {@code Future.get()} in another thread.
 * @see FutureTask
 * @see Executor
 * @since 1.5
 * @author Doug Lea
 * @param <V> The result type returned by this Future's {@code get} method
 */
export type Future = {
  /**
   * Attempts to cancel execution of this task.  This attempt will
   *  fail if the task has already completed, has already been cancelled,
   *  or could not be cancelled for some other reason. If successful,
   *  and this task has not started when {@code cancel} is called,
   *  this task should never run.  If the task has already started,
   *  then the {@code mayInterruptIfRunning} parameter determines
   *  whether the thread executing this task should be interrupted in
   *  an attempt to stop the task.
   *
   *  <p>After this method returns, subsequent calls to {@link #isDone} will
   *  always return {@code true}.  Subsequent calls to {@link #isCancelled}
   *  will always return {@code true} if this method returned {@code true}.
   * @param mayInterruptIfRunning {@code true} if the thread executing this&#xA; task should be interrupted; otherwise, in-progress tasks are allowed&#xA; to complete
   * @return {@code false} if the task could not be cancelled,&#xA; typically because it has already completed normally;&#xA; {@code true} otherwise
   */
  cancel(mayInterruptIfRunning: boolean): boolean;

  /**
   * Returns {@code true} if this task was cancelled before it completed
   *  normally.
   * @return {@code true} if this task was cancelled before it completed
   */
  isCancelled(): boolean;

  /**
   * Returns {@code true} if this task completed.
   *
   *  Completion may be due to normal termination, an exception, or
   *  cancellation -- in all of these cases, this method will return
   *  {@code true}.
   * @return {@code true} if this task completed
   */
  isDone(): boolean;

  /**
   * Waits if necessary for the computation to complete, and then
   *  retrieves its result.
   * @return the computed result
   * @throws CancellationException if the computation was cancelled
   * @throws ExecutionException if the computation threw an&#xA; exception
   * @throws InterruptedException if the current thread was interrupted&#xA; while waiting
   */
  get(): unknown;

  /**
   * Waits if necessary for at most the given time for the computation
   *  to complete, and then retrieves its result, if available.
   * @param timeout the maximum time to wait
   * @param unit the time unit of the timeout argument
   * @return the computed result
   * @throws CancellationException if the computation was cancelled
   * @throws ExecutionException if the computation threw an&#xA; exception
   * @throws InterruptedException if the current thread was interrupted&#xA; while waiting
   * @throws TimeoutException if the wait timed out
   */
  get(timeout: number, unit: TimeUnit): unknown;
};
