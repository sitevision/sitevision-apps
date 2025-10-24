/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

/**
 * A task that returns a result and may throw an exception.
 *  Implementors define a single method with no arguments called
 *  {@code call}.
 *
 *  <p>The {@code Callable} interface is similar to {@link
 *  java.lang.Runnable}, in that both are designed for classes whose
 *  instances are potentially executed by another thread.  A
 *  {@code Runnable}, however, does not return a result and cannot
 *  throw a checked exception.
 *
 *  <p>The {@link Executors} class contains utility methods to
 *  convert from other common forms to {@code Callable} classes.
 * @see Executor
 * @since 1.5
 * @author Doug Lea
 * @param <V> the result type of method {@code call}
 */
export type Callable = {
  /**
   * Computes a result, or throws an exception if unable to do so.
   * @return computed result
   * @throws Exception if unable to compute a result
   */
  call(): unknown;
};
