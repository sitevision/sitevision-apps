import type { Constraint } from "../Constraint";

/**
 * Performs a logical conjunction of two other constraints.
 * <p>
 * To satisfy the <code>And</code> constraint, a node-tuple must satisfy both
 * {@link #getConstraint1 constraint1} and {@link #getConstraint2 constraint2}.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type And = {
  /**
   * Gets the first constraint.
   * @return the constraint; non-null
   */
  getConstraint1(): Constraint;

  /**
   * Gets the second constraint.
   * @return the constraint; non-null
   */
  getConstraint2(): Constraint;
};
