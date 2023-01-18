import type DynamicOperand from "../DynamicOperand";

/**
 * Determines the relative order of two node-tuples by evaluating {@link
 * #getOperand operand} for each.
 * <p>
 * For a first node-tuple, <code>nt1</code>, for which {@link #getOperand
 * operand} evaluates to <code>v1</code>, and a second node-tuple,
 * <code>nt2</code>, for which {@link #getOperand operand} evaluates to
 * <code>v2</code>: <ul> <li>If {@link #getOrder order} is
 * <code>Ascending</code>, then:<ul> <li>if either <code>v1</code> is null,
 * <code>v2</code> is null, or both <code>v1</code> and <code>v2</code> are
 * null, the relative order of <code>nt1</code> and <code>nt2</code> is
 * implementation determined, otherwise</li> <li>if <code>v1</code> is a
 * different property type than <code>v2</code>, the relative order of
 * <code>nt1</code> and <code>nt2</code> is implementation determined,
 * otherwise</li> <li>if <code>v1</code> is ordered before <code>v2</code>, then
 * <code>nt1</code> precedes <code>nt2</code>, otherwise</li> <li>if
 * <code>v1</code> is ordered after <code>v2</code>, then <code>nt2</code>
 * precedes <code>nt1</code>, otherwise</li> <li>the relative order of
 * <code>nt1</code> and <code>nt2</code> is implementation determined and may be
 * arbitrary.</li></ul></li> <li>Otherwise, if {@link #getOrder order} is
 * <code>Descending</code>, then:<ul> <li>if either <code>v1</code> is null,
 * <code>v2</code> is null, or both <code>v1</code> and <code>v2</code> are
 * null, the relative order of <code>nt1</code> and <code>nt2</code> is
 * implementation determined, otherwise</li> <li>if <code>v1</code> is a
 * different property type than <code>v2</code>, the relative order of
 * <code>nt1</code> and <code>nt2</code> is implementation determined,
 * otherwise</li> <li>if <code>v1</code> is ordered before <code>v2</code>, then
 * <code>nt2</code> precedes <code>nt1</code>, otherwise</li> <li>if
 * <code>v1</code> is ordered after <code>v2</code>, then <code>nt1</code>
 * precedes <code>nt2</code>, otherwise</li> <li>the relative order of
 * <code>nt1</code> and <code>nt2</code> is implementation determined and may be
 * arbitrary.</li></ul></li> </ul>
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
type Ordering = {
  /**
   * The operand by which to order.
   * @return the operand; non-null
   */
  getOperand(): DynamicOperand;

  /**
   * Gets the order.
   * @return either <ul> <li>{@link QueryObjectModelConstants#JCR_ORDER_ASCENDING} or</li> <li>{@link QueryObjectModelConstants#JCR_ORDER_DESCENDING}</li> </ul>
   */
  getOrder(): string;
};

export = Ordering;
