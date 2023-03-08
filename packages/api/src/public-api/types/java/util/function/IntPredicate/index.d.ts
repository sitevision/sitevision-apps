/**
 * Represents a predicate (boolean-valued function) of one {@code int}-valued
 *  argument. This is the {@code int}-consuming primitive type specialization of
 *  {@link Predicate}.
 *
 *  <p>This is a <a href="package-summary.html">functional interface</a>
 *  whose functional method is {@link #test(int)}.
 * @see Predicate
 * @since 1.8
 */
export type IntPredicate = {
  /**
   * Evaluates this predicate on the given argument.
   * @param value the input argument
   * @return {@code true} if the input argument matches the predicate,&#xA; otherwise {@code false}
   */
  test(value: number): boolean;

  /**
   * Returns a composed predicate that represents a short-circuiting logical
   *  AND of this predicate and another.  When evaluating the composed
   *  predicate, if this predicate is {@code false}, then the {@code other}
   *  predicate is not evaluated.
   *
   *  <p>Any exceptions thrown during evaluation of either predicate are relayed
   *  to the caller; if evaluation of this predicate throws an exception, the
   *  {@code other} predicate will not be evaluated.
   * @param other a predicate that will be logically-ANDed with this&#xA; predicate
   * @return a composed predicate that represents the short-circuiting logical&#xA; AND of this predicate and the {@code other} predicate
   * @throws NullPointerException if other is null
   */
  and(other: IntPredicate): IntPredicate;

  /**
   * Returns a predicate that represents the logical negation of this
   *  predicate.
   * @return a predicate that represents the logical negation of this&#xA; predicate
   */
  negate(): IntPredicate;

  /**
   * Returns a composed predicate that represents a short-circuiting logical
   *  OR of this predicate and another.  When evaluating the composed
   *  predicate, if this predicate is {@code true}, then the {@code other}
   *  predicate is not evaluated.
   *
   *  <p>Any exceptions thrown during evaluation of either predicate are relayed
   *  to the caller; if evaluation of this predicate throws an exception, the
   *  {@code other} predicate will not be evaluated.
   * @param other a predicate that will be logically-ORed with this&#xA; predicate
   * @return a composed predicate that represents the short-circuiting logical&#xA; OR of this predicate and the {@code other} predicate
   * @throws NullPointerException if other is null
   */
  or(other: IntPredicate): IntPredicate;
};
