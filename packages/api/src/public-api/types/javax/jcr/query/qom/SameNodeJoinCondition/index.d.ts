import type { JoinCondition } from "../JoinCondition";

/**
 * Tests whether two nodes are "the same" according to the <code>isSame</code>
 * method of <code>javax.jcr.Item</code>.
 * <p>
 * Tests whether the {@link #getSelector1Name selector1} node is the same as a node identified by
 * relative path from the {@link #getSelector2Name selector2} node.
 * A node-tuple satisfies the constraint only if:
 * <pre>  selector1Node.isSame(selector2Node.getNode(selector2Path))</pre>
 * would return true, where <code>selector1Node</code> is the node for {@link
 * #getSelector1Name selector1} and <code>selector2Node</code> is the node for
 * {@link #getSelector2Name selector2}.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type SameNodeJoinCondition = {
  /**
   * Gets the name of the first selector.
   * @return the selector name; non-null
   */
  getSelector1Name(): string;

  /**
   * Gets the name of the second selector.
   * @return the selector name; non-null
   */
  getSelector2Name(): string;

  /**
   * Gets the path relative to the second selector.
   * @return the relative path, or null for none
   */
  getSelector2Path(): string;
};
