import Value from "../../../Value";
import StaticOperand from "../StaticOperand";

/**
 * Evaluates to a literal value.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
interface Literal {
  /**
   * Gets the value of the literal.
   * @return the value of the literal.
   */
  getLiteralValue(): Value;
}

export default Literal;
