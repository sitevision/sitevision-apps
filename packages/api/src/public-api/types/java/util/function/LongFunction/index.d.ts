/**
 * Represents a function that accepts a long-valued argument and produces a
 *  result.  This is the {@code long}-consuming primitive specialization for
 *  {@link Function}.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #apply(long)}.
 * @param <R> the type of the result of the function
 * @see Function
 * @since 1.8
 */
export type LongFunction = {
  /**
   * Applies this function to the given argument.
   * @param value the function argument
   * @return the function result
   */
  apply(value: number): unknown;
};
