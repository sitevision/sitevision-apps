import type { Constraint } from "../Constraint";

/**
 * Performs a logical negation of another constraint.
 * <p>
 * To satisfy the <code>Not</code> constraint, the node-tuple must <i>not</i>
 * satisfy {@link #getConstraint constraint}.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type Not = Constraint & {
  /**
   * Gets the constraint negated by this <code>Not</code> constraint.
   * @return the constraint; non-null
   */
  getConstraint(): Constraint;
};
