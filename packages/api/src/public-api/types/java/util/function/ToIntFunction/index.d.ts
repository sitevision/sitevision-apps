/**
 * Represents a function that produces an int-valued result.  This is the
 *  {@code int}-producing primitive specialization for {@link Function}.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #applyAsInt(Object)}.
 * @param <T> the type of the input to the function
 * @see Function
 * @since 1.8
 */
export type ToIntFunction = {
  /**
   * Applies this function to the given argument.
   * @param value the function argument
   * @return the function result
   */
  applyAsInt(value: unknown): number;
};
