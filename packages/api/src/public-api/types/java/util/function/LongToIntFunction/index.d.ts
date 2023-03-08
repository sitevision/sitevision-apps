/**
 * Represents a function that accepts a long-valued argument and produces an
 *  int-valued result.  This is the {@code long}-to-{@code int} primitive
 *  specialization for {@link Function}.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #applyAsInt(long)}.
 * @see Function
 * @since 1.8
 */
export type LongToIntFunction = {
  /**
   * Applies this function to the given argument.
   * @param value the function argument
   * @return the function result
   */
  applyAsInt(value: number): number;
};
