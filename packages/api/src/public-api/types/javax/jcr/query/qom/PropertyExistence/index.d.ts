import type { Constraint } from "../Constraint";

/**
 * Tests the existence of a property.
 * <p>
 * A node-tuple satisfies the constraint if the selector node has a property
 * named {@link #getPropertyName property}.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type PropertyExistence = Constraint & {
  /**
   * Gets the name of the selector against which to apply this constraint.
   * @return the selector name; non-null
   */
  getSelectorName(): string;

  /**
   * Gets the name of the property.
   * @return the property name; non-null
   */
  getPropertyName(): string;
};
