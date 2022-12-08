import type { Constraint } from "../Constraint";

/**
 * Tests whether the {@link #getSelectorName selector} node is reachable by
 * absolute path {@link #getPath path}.
 * <p>
 * A node-tuple satisfies the constraint only if:
 * <pre>  selectorNode.isSame(session.getNode(path))</pre>
 * would return true, where <code>selectorNode</code> is the node for the
 * specified selector.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type SameNode = {
  /**
   * Gets the name of the selector against which to apply this constraint.
   * @return the selector name; non-null
   */
  getSelectorName(): string;

  /**
   * Gets the absolute path.
   * @return the path; non-null
   */
  getPath(): string;
};
