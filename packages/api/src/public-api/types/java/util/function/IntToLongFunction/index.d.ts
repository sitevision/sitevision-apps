/**
 * Represents a function that accepts an int-valued argument and produces a
 *  long-valued result.  This is the {@code int}-to-{@code long} primitive
 *  specialization for {@link Function}.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #applyAsLong(int)}.
 * @see Function
 * @since 1.8
 */
export type IntToLongFunction = {
  /**
   * Applies this function to the given argument.
   * @param value the function argument
   * @return the function result
   */
  applyAsLong(value: number): number;
};
