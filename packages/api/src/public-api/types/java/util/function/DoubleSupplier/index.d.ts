/**
 * Represents a supplier of {@code double}-valued results.  This is the
 *  {@code double}-producing primitive specialization of {@link Supplier}.
 *
 *  <p>There is no requirement that a distinct result be returned each
 *  time the supplier is invoked.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #getAsDouble()}.
 * @see Supplier
 * @since 1.8
 */
export type DoubleSupplier = {
  /**
   * Gets a result.
   * @return a result
   */
  getAsDouble(): number;
};
