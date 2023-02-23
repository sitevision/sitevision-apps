import type { String } from "../../../../../java/lang/String";
import type { JoinCondition } from "../JoinCondition";

/**
 * Tests whether the {@link #getDescendantSelectorName descendantSelector} node
 *  is a descendant of the {@link #getAncestorSelectorName ancestorSelector}
 *  node.  A node-tuple satisfies the constraint only if:
 *  <pre>  descendantSelectorNode.getAncestor(n).isSame(ancestorSelectorNode) &amp;&amp;
 *      descendantSelectorNode.getDepth() &gt; n</pre>
 *  would return true some some non-negative integer <code>n</code>, where
 *  <code>descendantSelectorNode</code> is the node for {@link
 *  #getDescendantSelectorName descendantSelector} and <code>ancestorSelectorNode</code>
 *  is the node for {@link #getAncestorSelectorName ancestorSelector}.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type DescendantNodeJoinCondition = JoinCondition & {
  /**
   * Gets the name of the descendant selector.
   * @return the selector name; non-null
   */
  getDescendantSelectorName(): string;

  /**
   * Gets the name of the ancestor selector.
   * @return the selector name; non-null
   */
  getAncestorSelectorName(): string;
};
