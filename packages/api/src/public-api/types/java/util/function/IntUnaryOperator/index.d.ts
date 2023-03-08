/**
 * Represents an operation on a single {@code int}-valued operand that produces
 *  an {@code int}-valued result.  This is the primitive type specialization of
 *  {@link UnaryOperator} for {@code int}.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #applyAsInt(int)}.
 * @see UnaryOperator
 * @since 1.8
 */
export type IntUnaryOperator = {
  /**
   * Applies this operator to the given operand.
   * @param operand the operand
   * @return the operator result
   */
  applyAsInt(operand: number): number;

  /**
   * Returns a composed operator that first applies the {@code before}
   *  operator to its input, and then applies this operator to the result.
   *  If evaluation of either operator throws an exception, it is relayed to
   *  the caller of the composed operator.
   * @param before the operator to apply before this operator is applied
   * @return a composed operator that first applies the {@code before}&#xA; operator and then applies this operator
   * @throws NullPointerException if before is null
   * @see #andThen(IntUnaryOperator)
   */
  compose(before: IntUnaryOperator): IntUnaryOperator;

  /**
   * Returns a composed operator that first applies this operator to
   *  its input, and then applies the {@code after} operator to the result.
   *  If evaluation of either operator throws an exception, it is relayed to
   *  the caller of the composed operator.
   * @param after the operator to apply after this operator is applied
   * @return a composed operator that first applies this operator and then&#xA; applies the {@code after} operator
   * @throws NullPointerException if after is null
   * @see #compose(IntUnaryOperator)
   */
  andThen(after: IntUnaryOperator): IntUnaryOperator;

  /**
   * Returns a unary operator that always returns its input argument.
   * @return a unary operator that always returns its input argument
   */
  identity(): IntUnaryOperator;
};
