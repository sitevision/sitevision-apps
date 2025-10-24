/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

import type { List } from "../../List";

import type { TimeUnit } from "../TimeUnit";
import type { Callable } from "../Callable";
import type { Future } from "../Future";
import type { Runnable } from "../../../lang/Runnable";

import type { Collection } from "../../Collection";
import type { Executor } from "../Executor";

/**
 * An {@link Executor} that provides methods to manage termination and
 *  methods that can produce a {@link Future} for tracking progress of
 *  one or more asynchronous tasks.
 *
 *  <p>An {@code ExecutorService} can be shut down, which will cause
 *  it to reject new tasks.  Two different methods are provided for
 *  shutting down an {@code ExecutorService}. The {@link #shutdown}
 *  method will allow previously submitted tasks to execute before
 *  terminating, while the {@link #shutdownNow} method prevents waiting
 *  tasks from starting and attempts to stop currently executing tasks.
 *  Upon termination, an executor has no tasks actively executing, no
 *  tasks awaiting execution, and no new tasks can be submitted.  An
 *  unused {@code ExecutorService} should be shut down to allow
 *  reclamation of its resources.
 *
 *  <p>Method {@code submit} extends base method {@link
 *  Executor#execute(Runnable)} by creating and returning a {@link Future}
 *  that can be used to cancel execution and/or wait for completion.
 *  Methods {@code invokeAny} and {@code invokeAll} perform the most
 *  commonly useful forms of bulk execution, executing a collection of
 *  tasks and then waiting for at least one, or all, to
 *  complete. (Class {@link ExecutorCompletionService} can be used to
 *  write customized variants of these methods.)
 *
 *  <p>The {@link Executors} class provides factory methods for the
 *  executor services provided in this package.
 *
 *  <h3>Usage Examples</h3>
 *
 *  Here is a sketch of a network service in which threads in a thread
 *  pool service incoming requests. It uses the preconfigured {@link
 *  Executors#newFixedThreadPool} factory method:
 *
 *   <pre> {@code
 *  class NetworkService implements Runnable {
 *    private final ServerSocket serverSocket;
 *    private final ExecutorService pool;
 *
 *    public NetworkService(int port, int poolSize)
 *        throws IOException {
 *      serverSocket = new ServerSocket(port);
 *      pool = Executors.newFixedThreadPool(poolSize);
 *    }
 *
 *    public void run() { // run the service
 *      try {
 *        for (;;) {
 *          pool.execute(new Handler(serverSocket.accept()));
 *        }
 *      } catch (IOException ex) {
 *        pool.shutdown();
 *      }
 *    }
 *  }
 *
 *  class Handler implements Runnable {
 *    private final Socket socket;
 *    Handler(Socket socket) { this.socket = socket; }
 *    public void run() {
 *      // read and service request on socket
 *    }
 *  }}</pre>
 *
 *  The following method shuts down an {@code ExecutorService} in two phases,
 *  first by calling {@code shutdown} to reject incoming tasks, and then
 *  calling {@code shutdownNow}, if necessary, to cancel any lingering tasks:
 *
 *   <pre> {@code
 *  void shutdownAndAwaitTermination(ExecutorService pool) {
 *    pool.shutdown(); // Disable new tasks from being submitted
 *    try {
 *      // Wait a while for existing tasks to terminate
 *      if (!pool.awaitTermination(60, TimeUnit.SECONDS)) {
 *        pool.shutdownNow(); // Cancel currently executing tasks
 *        // Wait a while for tasks to respond to being cancelled
 *        if (!pool.awaitTermination(60, TimeUnit.SECONDS))
 *            System.err.println("Pool did not terminate");
 *      }
 *    } catch (InterruptedException ie) {
 *      // (Re-)Cancel if current thread also interrupted
 *      pool.shutdownNow();
 *      // Preserve interrupt status
 *      Thread.currentThread().interrupt();
 *    }
 *  }}</pre>
 *
 *  <p>Memory consistency effects: Actions in a thread prior to the
 *  submission of a {@code Runnable} or {@code Callable} task to an
 *  {@code ExecutorService}
 *  <a href="package-summary.html#MemoryVisibility"><i>happen-before</i></a>
 *  any actions taken by that task, which in turn <i>happen-before</i> the
 *  result is retrieved via {@code Future.get()}.
 * @since 1.5
 * @author Doug Lea
 */
export type ExecutorService = Executor & {
  /**
   * Initiates an orderly shutdown in which previously submitted
   *  tasks are executed, but no new tasks will be accepted.
   *  Invocation has no additional effect if already shut down.
   *
   *  <p>This method does not wait for previously submitted tasks to
   *  complete execution.  Use {@link #awaitTermination awaitTermination}
   *  to do that.
   * @throws SecurityException if a security manager exists and&#xA; shutting down this ExecutorService may manipulate&#xA; threads that the caller is not permitted to modify&#xA; because it does not hold {@link&#xA; java.lang.RuntimePermission}{@code ("modifyThread")},&#xA; or the security manager's {@code checkAccess} method&#xA; denies access.
   */
  shutdown(): void;

  /**
   * Attempts to stop all actively executing tasks, halts the
   *  processing of waiting tasks, and returns a list of the tasks
   *  that were awaiting execution.
   *
   *  <p>This method does not wait for actively executing tasks to
   *  terminate.  Use {@link #awaitTermination awaitTermination} to
   *  do that.
   *
   *  <p>There are no guarantees beyond best-effort attempts to stop
   *  processing actively executing tasks.  For example, typical
   *  implementations will cancel via {@link Thread#interrupt}, so any
   *  task that fails to respond to interrupts may never terminate.
   * @return list of tasks that never commenced execution
   * @throws SecurityException if a security manager exists and&#xA; shutting down this ExecutorService may manipulate&#xA; threads that the caller is not permitted to modify&#xA; because it does not hold {@link&#xA; java.lang.RuntimePermission}{@code ("modifyThread")},&#xA; or the security manager's {@code checkAccess} method&#xA; denies access.
   */
  shutdownNow(): List;

  /**
   * Returns {@code true} if this executor has been shut down.
   * @return {@code true} if this executor has been shut down
   */
  isShutdown(): boolean;

  /**
   * Returns {@code true} if all tasks have completed following shut down.
   *  Note that {@code isTerminated} is never {@code true} unless
   *  either {@code shutdown} or {@code shutdownNow} was called first.
   * @return {@code true} if all tasks have completed following shut down
   */
  isTerminated(): boolean;

  /**
   * Blocks until all tasks have completed execution after a shutdown
   *  request, or the timeout occurs, or the current thread is
   *  interrupted, whichever happens first.
   * @param timeout the maximum time to wait
   * @param unit the time unit of the timeout argument
   * @return {@code true} if this executor terminated and&#xA; {@code false} if the timeout elapsed before termination
   * @throws InterruptedException if interrupted while waiting
   */
  awaitTermination(timeout: number, unit: TimeUnit): boolean;

  /**
   * Submits a value-returning task for execution and returns a
   *  Future representing the pending results of the task. The
   *  Future's {@code get} method will return the task's result upon
   *  successful completion.
   *
   *  <p>
   *  If you would like to immediately block waiting
   *  for a task, you can use constructions of the form
   *  {@code result = exec.submit(aCallable).get();}
   *
   *  <p>Note: The {@link Executors} class includes a set of methods
   *  that can convert some other common closure-like objects,
   *  for example, {@link java.security.PrivilegedAction} to
   *  {@link Callable} form so they can be submitted.
   * @param task the task to submit
   * @param <T> the type of the task's result
   * @return a Future representing pending completion of the task
   * @throws RejectedExecutionException if the task cannot be&#xA; scheduled for execution
   * @throws NullPointerException if the task is null
   */
  submit(task: Callable): Future;

  /**
   * Submits a Runnable task for execution and returns a Future
   *  representing that task. The Future's {@code get} method will
   *  return the given result upon successful completion.
   * @param task the task to submit
   * @param result the result to return
   * @param <T> the type of the result
   * @return a Future representing pending completion of the task
   * @throws RejectedExecutionException if the task cannot be&#xA; scheduled for execution
   * @throws NullPointerException if the task is null
   */
  submit(task: Runnable, result: unknown): Future;

  /**
   * Submits a Runnable task for execution and returns a Future
   *  representing that task. The Future's {@code get} method will
   *  return {@code null} upon <em>successful</em> completion.
   * @param task the task to submit
   * @return a Future representing pending completion of the task
   * @throws RejectedExecutionException if the task cannot be&#xA; scheduled for execution
   * @throws NullPointerException if the task is null
   */
  submit(task: Runnable): Future;

  /**
   * Executes the given tasks, returning a list of Futures holding
   *  their status and results when all complete.
   *  {@link Future#isDone} is {@code true} for each
   *  element of the returned list.
   *  Note that a <em>completed</em> task could have
   *  terminated either normally or by throwing an exception.
   *  The results of this method are undefined if the given
   *  collection is modified while this operation is in progress.
   * @param tasks the collection of tasks
   * @param <T> the type of the values returned from the tasks
   * @return a list of Futures representing the tasks, in the same&#xA; sequential order as produced by the iterator for the&#xA; given task list, each of which has completed
   * @throws InterruptedException if interrupted while waiting, in&#xA; which case unfinished tasks are cancelled
   * @throws NullPointerException if tasks or any of its elements are {@code null}
   * @throws RejectedExecutionException if any task cannot be&#xA; scheduled for execution
   */
  invokeAll(tasks: Collection | unknown[]): List;

  /**
   * Executes the given tasks, returning a list of Futures holding
   *  their status and results
   *  when all complete or the timeout expires, whichever happens first.
   *  {@link Future#isDone} is {@code true} for each
   *  element of the returned list.
   *  Upon return, tasks that have not completed are cancelled.
   *  Note that a <em>completed</em> task could have
   *  terminated either normally or by throwing an exception.
   *  The results of this method are undefined if the given
   *  collection is modified while this operation is in progress.
   * @param tasks the collection of tasks
   * @param timeout the maximum time to wait
   * @param unit the time unit of the timeout argument
   * @param <T> the type of the values returned from the tasks
   * @return a list of Futures representing the tasks, in the same&#xA; sequential order as produced by the iterator for the&#xA; given task list. If the operation did not time out,&#xA; each task will have completed. If it did time out, some&#xA; of these tasks will not have completed.
   * @throws InterruptedException if interrupted while waiting, in&#xA; which case unfinished tasks are cancelled
   * @throws NullPointerException if tasks, any of its elements, or&#xA; unit are {@code null}
   * @throws RejectedExecutionException if any task cannot be scheduled&#xA; for execution
   */
  invokeAll(
    tasks: Collection | unknown[],
    timeout: number,
    unit: TimeUnit
  ): List;

  /**
   * Executes the given tasks, returning the result
   *  of one that has completed successfully (i.e., without throwing
   *  an exception), if any do. Upon normal or exceptional return,
   *  tasks that have not completed are cancelled.
   *  The results of this method are undefined if the given
   *  collection is modified while this operation is in progress.
   * @param tasks the collection of tasks
   * @param <T> the type of the values returned from the tasks
   * @return the result returned by one of the tasks
   * @throws InterruptedException if interrupted while waiting
   * @throws NullPointerException if tasks or any element task&#xA; subject to execution is {@code null}
   * @throws IllegalArgumentException if tasks is empty
   * @throws ExecutionException if no task successfully completes
   * @throws RejectedExecutionException if tasks cannot be scheduled&#xA; for execution
   */
  invokeAny(tasks: Collection | unknown[]): unknown;

  /**
   * Executes the given tasks, returning the result
   *  of one that has completed successfully (i.e., without throwing
   *  an exception), if any do before the given timeout elapses.
   *  Upon normal or exceptional return, tasks that have not
   *  completed are cancelled.
   *  The results of this method are undefined if the given
   *  collection is modified while this operation is in progress.
   * @param tasks the collection of tasks
   * @param timeout the maximum time to wait
   * @param unit the time unit of the timeout argument
   * @param <T> the type of the values returned from the tasks
   * @return the result returned by one of the tasks
   * @throws InterruptedException if interrupted while waiting
   * @throws NullPointerException if tasks, or unit, or any element&#xA; task subject to execution is {@code null}
   * @throws TimeoutException if the given timeout elapses before&#xA; any task successfully completes
   * @throws ExecutionException if no task successfully completes
   * @throws RejectedExecutionException if tasks cannot be scheduled&#xA; for execution
   */
  invokeAny(
    tasks: Collection | unknown[],
    timeout: number,
    unit: TimeUnit
  ): unknown;
};
