import type { DynamicOperand } from "../DynamicOperand";

/**
 * Evaluates to the value (or values, if multi-valued) of a property.
 * <p>
 * If, for a node-tuple, the {@link #getSelectorName selector} node does not
 * have a property named {@link #getPropertyName property}, the operand
 * evaluates to null.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type PropertyValue = DynamicOperand & {
  /**
   * Gets the name of the selector against which to evaluate this operand.
   * @return the selector name; non-null
   */
  getSelectorName(): string;

  /**
   * Gets the name of the property.
   * @return the property name; non-null
   */
  getPropertyName(): string;
};
