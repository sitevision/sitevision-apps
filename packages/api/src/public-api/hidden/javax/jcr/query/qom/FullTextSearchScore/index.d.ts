import DynamicOperand from "../DynamicOperand";

/**
 * Evaluates to a <code>DOUBLE</code> value equal to the full-text search score
 * of a node.
 * <p>
 * Full-text search score ranks a selector's nodes by their relevance to the
 * <code>fullTextSearchExpression</code> specified in a {@link FullTextSearch}.
 * The values to which <code>FullTextSearchScore</code> evaluates and the
 * interpretation of those values are implementation specific.
 * <code>FullTextSearchScore</code> may evaluate to a constant value in a
 * repository that does not support full-text search scoring or has no full-text
 * indexed properties.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
interface FullTextSearchScore {
  /**
   * Gets the name of the selector against which to evaluate this operand.
   * @return the selector name; non-null
   */
  getSelectorName(): string;
}

export default FullTextSearchScore;
