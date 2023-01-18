/**
 * <code>Hold</code> represents a hold that can be applied to an existing node
 * in order to prevent the node from being modified or removed. The format and
 * interpretation of the name are not specified. They are
 * application-dependent.
 * <p>
 * If {@link #isDeep()} is <code>true</code>, the hold applies to the node and
 * its entire subgraph. Otherwise the hold applies to the node and its
 * properties only.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @see RetentionManager#getHolds(String)
 * @see RetentionManager#addHold(String, String, boolean)
 * @see RetentionManager#removeHold(String, Hold)
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
type Hold = {
  /**
   * Returns <code>true</code> if this <code>Hold</code> is deep.
   * @return <code>true</code> if this <code>Hold</code> is deep.
   * @throws RepositoryException if an error occurs.
   */
  isDeep(): boolean;

  /**
   * Returns the name of this <code>Hold</code>. A JCR name.
   * @return the name of this <code>Hold</code>. A JCR name.
   * @throws RepositoryException if an error occurs.
   */
  getName(): string;
};

export = Hold;
