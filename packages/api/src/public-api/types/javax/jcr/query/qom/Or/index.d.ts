import type { Constraint } from "../Constraint";

/**
 * Performs a logical disjunction of two other constraints.
 * <p>
 * To satisfy the <code>Or</code> constraint, the node-tuple must either: <ul>
 * <li>satisfy {@link #getConstraint1 constraint1} but not {@link
 * #getConstraint2 constraint2}, or</li> <li>satisfy {@link #getConstraint2
 * constraint2} but not {@link #getConstraint1 constraint1}, or</li> <li>satisfy
 * both {@link #getConstraint1 constraint1} and {@link #getConstraint2
 * constraint2}.</li> </ul>
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type Or = {
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
