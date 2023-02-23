/**
 * Represents a supplier of {@code long}-valued results.  This is the
 *  {@code long}-producing primitive specialization of {@link Supplier}.
 *
 *  <p>There is no requirement that a distinct result be returned each
 *  time the supplier is invoked.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #getAsLong()}.
 * @see Supplier
 * @since 1.8
 */
export type LongSupplier = {
  /**
   * Gets a result.
   * @return a result
   */
  getAsLong(): number;
};
