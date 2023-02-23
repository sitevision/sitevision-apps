import type { String } from "../../../../../java/lang/String";
import type { DynamicOperand } from "../DynamicOperand";

/**
 * Evaluates to a <code>NAME</code> value equal to the namespace-qualified name
 *  of a node.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type NodeName = DynamicOperand & {
  /**
   * Gets the name of the selector against which to evaluate this operand.
   * @return the selector name; non-null
   */
  getSelectorName(): string;
};
