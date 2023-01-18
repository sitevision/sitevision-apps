import type Hold from "../Hold";

import type RetentionPolicy from "../RetentionPolicy";

/**
 * The <code>RetentionManager</code> object is accessed via {@link
 * javax.jcr.Session#getRetentionManager()}.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
type RetentionManager = {
  /**
   * Returns all hold objects that have been added through this API to the
   * existing node at <code>absPath</code>. If no hold has been set before,
   * this method returns an empty array.
   * @param absPath an absolute path.
   * @return All hold objects that have been added to the existing node at <code>absPath</code> through this API or an empty array if no hold has been set.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists or the session does not have sufficent access to retrieve the node.
   * @throws AccessDeniedException if the current session does not have sufficient access to retrieve the holds.
   * @throws RepositoryException if another error occurs.
   */
  getHolds(absPath: string): Hold;

  /**
   * Places a hold on the existing node at <code>absPath</code>. If
   * <code>isDeep</code> is <code>true</code>) the hold applies to this node
   * and its subgraph. The hold does not take effect until a <code>save</code>
   * is performed. A node may have more than one hold.
   * <p>
   * The format and interpretation of the <code>name</code> are not specified.
   * They are application-dependent.
   * <p>
   * A <code>VersionException</code> will be thrown either immediately, on
   * dispatch or on persists, if the node at <code>absPath</code> is read-only
   * due to a checked-in node. Implementations may differ on when this
   * validation is performed.
   * <p>
   * A <code>LockException</code> will be thrown either immediately, on
   * dispatch or on persists, if a lock prevents the operation.
   * Implementations may differ on when this validation is performed.
   * @param absPath an absolute path.
   * @param name an application-dependent string.
   * @param isDeep a boolean indicating if the hold applies to the subgraph.
   * @return The <code>Hold</code> applied.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists or the session does not have sufficient access to retrieve the node.
   * @throws AccessDeniedException if the current session does not have sufficient access to perform the operation.
   * @throws LockException if a lock applies at the node at <code>absPath</code> and this implementation performs this validation immediately.
   * @throws VersionException if the node at <code>absPath</code> is read-only due to a checked-in node. and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  addHold(absPath: string, name: string, isDeep: boolean): Hold;

  /**
   * Removes the specified <code>hold</code> from the node at
   * <code>absPath</code>. The removal does not take effect until a
   * <code>save</code> is performed.
   * <p>
   * A <code>VersionException</code> will be thrown either immediately, on
   * dispatch or on persists, if the node at <code>absPath</code> is read-only
   * due to a checked-in node. Implementations may differ on when this
   * validation is performed.
   * <p>
   * A <code>LockException</code> will be thrown either immediately, on
   * dispatch or on persists, if a lock prevents the operation.
   * Implementations may differ on when this validation is performed.
   * @param absPath an absolute path.
   * @param hold the hold to be removed.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists or the session does not have sufficient access to retrieve the node.
   * @throws AccessDeniedException if the current session does not have sufficient access to perform the operation.
   * @throws LockException if a lock applies at the node at <code>absPath</code> and this implementation performs this validation immediately.
   * @throws VersionException if the node at <code>absPath</code> is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  removeHold(absPath: string, hold: Hold): void;

  /**
   * Returns the retention policy that has been set using {@link
   * #setRetentionPolicy} on the node at <code>absPath</code> or
   * <code>null</code> if no policy has been set.
   * @param absPath an absolute path to an existing node.
   * @return The retention policy that applies to the existing node at <code>absPath</code> or <code>null</code> if no policy applies.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists or the session does not have sufficent access to retrieve the node.
   * @throws AccessDeniedException if the current session does not have sufficient access to retrieve the policy.
   * @throws RepositoryException if another error occurs.
   */
  getRetentionPolicy(absPath: string): RetentionPolicy;

  /**
   * Sets the retention policy of the node at <code>absPath</code> to that
   * defined in the specified policy node. Interpretation and enforcement of
   * this policy is an implementation issue. In any case the policy does does
   * not take effect until a <code>save</code> is performed.
   * <p>
   * A <code>VersionException</code> will be thrown either immediately, on
   * dispatch or on persists, if the node at <code>absPath</code> is read-only
   * due to a checked-in node. Implementations may differ on when this
   * validation is performed.
   * <p>
   * A <code>LockException</code> will be thrown either immediately, on
   * dispatch or on persists, if a lock prevents the operation.
   * Implementations may differ on when this validation is performed.
   * @param absPath an absolute path to an existing node.
   * @param retentionPolicy a retention policy.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists or the session does not have sufficient access to retrieve the node.
   * @throws AccessDeniedException if the current session does not have sufficient access to perform the operation.
   * @throws LockException if a lock applies at the node at <code>absPath</code> and this implementation performs this validation immediately.
   * @throws VersionException if the node at <code>absPath</code> is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setRetentionPolicy(absPath: string, retentionPolicy: RetentionPolicy): void;

  /**
   * Causes the current retention policy on the node at <code>absPath</code>
   * to no longer apply. The removal does not take effect until a
   * <code>save</code> is performed.
   * <p>
   * A <code>VersionException</code> will be thrown either immediately, on
   * dispatch or on persists, if the node at <code>absPath</code> is read-only
   * due to a checked-in node. Implementations may differ on when this
   * validation is performed.
   * <p>
   * A <code>LockException</code> will be thrown either immediately, on
   * dispatch or on persists, if a lock prevents the operation.
   * Implementations may differ on when this validation is performed.
   * @param absPath an absolute path to an existing node.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists or the session does not have sufficient access to retrieve the node.
   * @throws AccessDeniedException if the current session does not have sufficient access to perform the operation.
   * @throws LockException if a lock applies at the node at <code>absPath</code> and this implementation performs this validation immediately.
   * @throws VersionException if the node at <code>absPath</code> is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  removeRetentionPolicy(absPath: string): void;
};

export = RetentionManager;
