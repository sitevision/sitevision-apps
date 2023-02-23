import type { DynamicOperand } from "../DynamicOperand";

/**
 * Evaluates to the lower-case string value (or values, if multi-valued) of
 *  {@link #getOperand operand}.
 *  <p>
 *  If {@link #getOperand operand} does not evaluate to a string value, its value
 *  is first converted to a string.  The lower-case string value is computed as
 *  though the <code>toLowerCase()</code> method of <code>java.lang.String</code>
 *  were called.
 *  <p>
 *  If {@link #getOperand operand} evaluates to null, the <code>LowerCase</code>
 *  operand also evaluates to null.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type LowerCase = DynamicOperand & {
  /**
   * Gets the operand whose value is converted to a lower-case string.
   * @return the operand; non-null
   */
  getOperand(): DynamicOperand;
};
