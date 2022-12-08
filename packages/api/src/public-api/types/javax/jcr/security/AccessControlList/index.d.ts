import type { AccessControlEntry } from "../AccessControlEntry";

import type { Privilege } from "../Privilege";

import type { AccessControlPolicy } from "../AccessControlPolicy";

/**
 * The <code>AccessControlList</code> is an <code>AccessControlPolicy</code>
 * representing a list of {@link AccessControlEntry access control entries}. It
 * is mutable before being {@link AccessControlManager#setPolicy(String,
 * AccessControlPolicy) set} to the AccessControlManager and consequently
 * defines methods to read and mutate the list i.e. to get, add or remove
 * individual entries.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
export type AccessControlList = {
  /**
   * Returns all access control entries present with this policy.
   * <p>
   * This method is only guaranteed to return an <code>AccessControlEntry</code>
   * if that <code>AccessControlEntry</code> has been assigned <i>through this
   * API</i>.
   * @return all access control entries present with this policy.
   * @throws RepositoryException if an error occurs.
   */
  getAccessControlEntries(): AccessControlEntry;

  /**
   * Adds an access control entry to this policy consisting of the specified
   * <code>principal</code> and the specified <code>privileges</code>.
   * <p>
   * This method returns <code>true</code> if this policy was modified,
   * <code>false</code> otherwise.
   * <p>
   * How the entries are grouped within the list is an implementation detail.
   * An implementation may e.g. combine the specified privileges with those
   * added by a previous call to <code>addAccessControlEntry</code> for the
   * same <code>Principal</code>. However, a call to <code>addAccessControlEntry</code>
   * for a given <code>Principal</code> can never remove a
   * <code>Privilege</code> added by a previous call.
   * <p>
   * The modification does not take effect until this policy has been set to a
   * node by calling {@link AccessControlManager#setPolicy(String,
   * AccessControlPolicy)} and <code>save</code> is performed.
   * @param principal a <code>Principal</code>.
   * @param privileges an array of <code>Privilege</code>s.
   * @return <code>true</code> if this policy was modify; <code>false</code> otherwise.
   * @throws AccessControlException if the specified principal or any of the privileges does not exist or if some other access control related exception occurs.
   * @throws RepositoryException if another error occurs.
   */
  addAccessControlEntry(principal: unknown, privileges: Privilege): boolean;

  /**
   * Removes the specified <code>AccessControlEntry</code> from this policy.
   * <p>
   * Only exactly those entries obtained through <code>getAccessControlEntries</code>
   * can be removed. This method does not take effect until this policy has
   * been re-set to a node by calling {@link AccessControlManager#setPolicy(String,
   * AccessControlPolicy)} and <code>save</code> is performed.
   * @param ace the access control entry to be removed.
   * @throws AccessControlException if the specified entry is not present on the specified node.
   * @throws RepositoryException if another error occurs.
   */
  removeAccessControlEntry(ace: AccessControlEntry): void;
};
