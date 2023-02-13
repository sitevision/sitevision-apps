/**
 * An <code>RetentionPolicy</code> is an object with a name and an optional
 * description.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @see RetentionManager#getRetentionPolicy(String)
 * @see RetentionManager#setRetentionPolicy(String, RetentionPolicy)
 * @see RetentionManager#removeRetentionPolicy(String)
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
export type RetentionPolicy = {
  /**
   * Returns the name of the retention policy. A JCR name.
   * @return the name of the access control policy. A JCR name.
   * @throws RepositoryException if an error occurs.
   */
  getName(): string;
};
