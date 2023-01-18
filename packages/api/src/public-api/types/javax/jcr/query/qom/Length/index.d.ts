import type PropertyValue from "../PropertyValue";
import type DynamicOperand from "../DynamicOperand";

/**
 * Evaluates to the length (or lengths, if multi-valued) of a property.
 * <p>
 * The length should be computed as though the <code>getLength</code> method (or
 * <code>getLengths</code>, if multi-valued) of <code>javax.jcr.Property</code>
 * were called.
 * <p>
 * If {@link #getPropertyValue propertyValue} evaluates to null, the
 * <code>Length</code> operand also evaluates to null.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
type Length = DynamicOperand & {
  /**
   * Gets the property value for which to compute the length.
   * @return the property value; non-null
   */
  getPropertyValue(): PropertyValue;
};

export = Length;
