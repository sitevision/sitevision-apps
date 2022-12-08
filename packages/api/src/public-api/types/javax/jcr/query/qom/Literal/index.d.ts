import type { Value } from "../../../Value";
import type { StaticOperand } from "../StaticOperand";

/**
 * Evaluates to a literal value.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
export type Literal = {
  /**
   * Gets the value of the literal.
   * @return the value of the literal.
   */
  getLiteralValue(): Value;
};
