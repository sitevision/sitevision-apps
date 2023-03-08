/**
 * Represents a function that accepts a double-valued argument and produces an
 *  int-valued result.  This is the {@code double}-to-{@code int} primitive
 *  specialization for {@link Function}.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #applyAsInt(double)}.
 * @see Function
 * @since 1.8
 */
export type DoubleToIntFunction = {
  /**
   * Applies this function to the given argument.
   * @param value the function argument
   * @return the function result
   */
  applyAsInt(value: number): number;
};
