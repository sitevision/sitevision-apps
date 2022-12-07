import Constraint from "../Constraint";

/**
 * Tests whether the {@link #getSelectorName selector} node is a descendant of a
 * node reachable by absolute path {@link #getAncestorPath path}.
 * <p>
 * A node-tuple satisfies the constraint only if:
 * </p>
 * <pre>  selectorNode.getAncestor(n).isSame(session.getNode(path)) &amp;&amp;
 *     selectorNode.getDepth() &gt; n</pre>
 * <p>
 * would return true for some non-negative integer <code>n</code>, where {@link
 * #getSelectorName selectorNode} is the node for the specified selector.
 * </p>
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
interface DescendantNode {
  /**
   * Gets the name of the selector against which to apply this constraint.
   * @return the selector name; non-null
   */
  getSelectorName(): string;

  /**
   * Gets the absolute path.
   * @return the path; non-null
   */
  getAncestorPath(): string;
}

export default DescendantNode;
