import DynamicOperand from "../DynamicOperand";

/**
 * Evaluates to a <code>NAME</code> value equal to the local (unprefixed) name
 * of a node.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
interface NodeLocalName {
  /**
   * Gets the name of the selector against which to evaluate this operand.
   * @return the selector name; non-null
   */
  getSelectorName(): string;
}

export default NodeLocalName;
