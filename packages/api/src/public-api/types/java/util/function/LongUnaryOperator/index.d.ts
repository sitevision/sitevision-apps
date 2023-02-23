/**
 * Represents an operation on a single {@code long}-valued operand that produces
 *  a {@code long}-valued result.  This is the primitive type specialization of
 *  {@link UnaryOperator} for {@code long}.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #applyAsLong(long)}.
 * @see UnaryOperator
 * @since 1.8
 */
export type LongUnaryOperator = {
  /**
   * Applies this operator to the given operand.
   * @param operand the operand
   * @return the operator result
   */
  applyAsLong(operand: number): number;

  /**
   * Returns a composed operator that first applies the {@code before}
   *  operator to its input, and then applies this operator to the result.
   *  If evaluation of either operator throws an exception, it is relayed to
   *  the caller of the composed operator.
   * @param before the operator to apply before this operator is applied
   * @return a composed operator that first applies the {@code before}&#xA; operator and then applies this operator
   * @throws NullPointerException if before is null
   * @see #andThen(LongUnaryOperator)
   */
  compose(before: LongUnaryOperator): LongUnaryOperator;

  /**
   * Returns a composed operator that first applies this operator to
   *  its input, and then applies the {@code after} operator to the result.
   *  If evaluation of either operator throws an exception, it is relayed to
   *  the caller of the composed operator.
   * @param after the operator to apply after this operator is applied
   * @return a composed operator that first applies this operator and then&#xA; applies the {@code after} operator
   * @throws NullPointerException if after is null
   * @see #compose(LongUnaryOperator)
   */
  andThen(after: LongUnaryOperator): LongUnaryOperator;

  /**
   * Returns a unary operator that always returns its input argument.
   * @return a unary operator that always returns its input argument
   */
  identity(): LongUnaryOperator;
};
