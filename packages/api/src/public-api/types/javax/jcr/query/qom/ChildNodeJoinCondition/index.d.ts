import type { JoinCondition } from "../JoinCondition";

/**
 * Tests whether the {@link #getChildSelectorName childSelector} node is a child
 * of the {@link #getParentSelectorName parentSelector} node.  A node-tuple
 * satisfies the constraint only if:
 * <pre>  childSelectorNode.getParent().isSame(parentSelectorNode)</pre>
 * would return true, where <code>childSelectorNode</code> is the node for
 * {@link #getChildSelectorName childSelector} and <code>parentSelectorNode</code>
 * is the node for {@link #getParentSelectorName parentSelector}.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type ChildNodeJoinCondition = {
  /**
   * Gets the name of the child selector.
   * @return the selector name; non-null
   */
  getChildSelectorName(): string;

  /**
   * Gets the name of the parent selector.
   * @return the selector name; non-null
   */
  getParentSelectorName(): string;
};
