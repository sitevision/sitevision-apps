/**
 * Represents a function that accepts an int-valued argument and produces a
 *  double-valued result.  This is the {@code int}-to-{@code double} primitive
 *  specialization for {@link Function}.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #applyAsDouble(int)}.
 * @see Function
 * @since 1.8
 */
export type IntToDoubleFunction = {
  /**
   * Applies this function to the given argument.
   * @param value the function argument
   * @return the function result
   */
  applyAsDouble(value: number): number;
};
