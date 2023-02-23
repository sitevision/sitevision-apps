import type { String } from "../../../../java/lang/String";
import type { Privilege } from "../Privilege";

import type { AccessControlPolicy } from "../AccessControlPolicy";
import type { AccessControlPolicyIterator } from "../AccessControlPolicyIterator";

/**
 * The <code>AccessControlManager</code> object is accessed via {@link
 *  javax.jcr.Session#getAccessControlManager()}. It provides methods for: <ul>
 *  <li>Access control discovery</li> <li>Assigning access control policies</li>
 *  </ul>
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type AccessControlManager = {
  /**
   * Returns the privileges supported for absolute path <code>absPath</code>,
   *  which must be an existing node.
   *  <p>
   *  This method does not return the privileges held by the session. Instead,
   *  it returns the privileges that the repository supports.
   * @param absPath an absolute path.
   * @return an array of <code>Privilege</code>s.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists&#xA; or the session does not have sufficient access to retrieve a node at that&#xA; location.
   * @throws RepositoryException if another error occurs.
   */
  getSupportedPrivileges(absPath: String | string): Privilege;

  /**
   * Returns the privilege with the specified <code>privilegeName</code>.
   *  Since the privilege name is a JCR name, it may be passed in either
   *  qualified or expanded form (see specification for details on JCR names).
   * @param privilegeName the name of an existing privilege.
   * @return the <code>Privilege</code> with the specified&#xA; <code>privilegeName</code>.
   * @throws AccessControlException if no privilege with the specified name&#xA; exists.
   * @throws RepositoryException if another error occurs.
   */
  privilegeFromName(privilegeName: String | string): Privilege;

  /**
   * Returns whether the session has the specified privileges for absolute
   *  path <code>absPath</code>, which must be an existing node.
   *  <p>
   *  Testing an aggregate privilege is equivalent to testing each non
   *  aggregate privilege among the set returned by calling
   *  <code>Privilege.getAggregatePrivileges()</code> for that privilege.
   *  <p>
   *  The results reported by the this method reflect the net <i>effect</i> of
   *  the currently applied control mechanisms. It does not reflect unsaved
   *  access control policies or unsaved access control entries. Changes to
   *  access control status caused by these mechanisms only take effect on
   *  <code>Session.save()</code> and are only then reflected in the results of
   *  the privilege test methods.
   * @param absPath an absolute path.
   * @param privileges an array of <code>Privilege</code>s.
   * @return <code>true</code> if the session has the specified privileges;&#xA; <code>false</code> otherwise.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists&#xA; or the session does not have sufficent access to retrieve a node at that&#xA; location.
   * @throws RepositoryException if another error occurs.
   */
  hasPrivileges(absPath: String | string, privileges: Privilege[]): boolean;

  /**
   * Returns the privileges the session has for absolute path absPath, which
   *  must be an existing node.
   *  <p>
   *  The returned privileges are those for which {@link #hasPrivileges} would
   *  return <code>true</code>.
   *  <p>
   *  The results reported by the this method reflect the net <i>effect</i> of
   *  the currently applied control mechanisms. It does not reflect unsaved
   *  access control policies or unsaved access control entries. Changes to
   *  access control status caused by these mechanisms only take effect on
   *  <code>Session.save()</code> and are only then reflected in the results of
   *  the privilege test methods.
   * @param absPath an absolute path.
   * @return an array of <code>Privilege</code>s.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists&#xA; or the session does not have sufficient access to retrieve a node at that&#xA; location.
   * @throws RepositoryException if another error occurs.
   */
  getPrivileges(absPath: String | string): Privilege;

  /**
   * Returns the <code>AccessControlPolicy</code> objects that have been set
   *  to the node at <code>absPath</code> or an empty array if no policy has
   *  been set. This method reflects the binding state, including transient
   *  policy modifications.
   *  <p>
   *  Use {@link #getEffectivePolicies(String)} in order to determine the
   *  policy that effectively applies at <code>absPath</code>.
   * @param absPath an absolute path.
   * @return an array of <code>AccessControlPolicy</code> objects or an empty&#xA; array if no policy has been set.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists&#xA; or the session does not have sufficient access to retrieve a node at that&#xA; location.
   * @throws AccessDeniedException if the session lacks&#xA; <code>READ_ACCESS_CONTROL</code> privilege for the <code>absPath</code>&#xA; node.
   * @throws RepositoryException if another error occurs.
   */
  getPolicies(absPath: String | string): AccessControlPolicy;

  /**
   * Returns the <code>AccessControlPolicy</code> objects that currently are
   *  in effect at the node at <code>absPath</code>. This may be policies set
   *  through this API or some implementation specific (default) policies.
   * @param absPath an absolute path.
   * @return an array of <code>AccessControlPolicy</code> objects.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists&#xA; or the session does not have sufficient access to retrieve a node at that&#xA; location.
   * @throws AccessDeniedException if the session lacks&#xA; <code>READ_ACCESS_CONTROL</code> privilege for the <code>absPath</code>&#xA; node.
   * @throws RepositoryException if another error occurs.
   */
  getEffectivePolicies(absPath: String | string): AccessControlPolicy;

  /**
   * Returns the access control policies that are capable of being applied to
   *  the node at <code>absPath</code>.
   * @param absPath an absolute path.
   * @return an <code>AccessControlPolicyIterator</code> over the applicable&#xA; access control policies or an empty iterator if no policies are&#xA; applicable.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists&#xA; or the session does not have sufficient access to retrieve a node at that&#xA; location.
   * @throws AccessDeniedException if the session lacks&#xA; <code>READ_ACCESS_CONTROL</code> privilege for the <code>absPath</code>&#xA; node.
   * @throws RepositoryException if another error occurs.
   */
  getApplicablePolicies(absPath: String | string): AccessControlPolicyIterator;

  /**
   * Binds the <code>policy</code> to the node at <code>absPath</code>.
   *  <p>
   *  The behavior of the call <code>acm.setPolicy(absPath, policy)</code>
   *  differs depending on how the <code>policy</code> object was originally
   *  acquired.
   *  <p>
   *  If <code>policy</code> was acquired through {@link #getApplicablePolicies
   *  acm.getApplicablePolicies(absPath)} then that <code>policy</code> object
   *  is <i>added</i> to the node at <code>absPath</code>.
   *  <p>
   *  On the other hand, if <code>policy</code> was acquired through {@link
   *  #getPolicies acm.getPolicies(absPath)} then that <code>policy</code>
   *  object (usually after being altered) replaces its former version on the
   *  node at <code>absPath</code>.
   *  <p>
   *  This is session-write method and therefore the access control policy is
   *  only dispatched on <code>save</code> and will only take effect upon
   *  persist.
   *  <p>
   *  A <code>VersionException</code> will be thrown either immediately, on
   *  dispatch or on persists, if the node at <code>absPath</code> is read-only
   *  due to a checked-in node. Implementations may differ on when this
   *  validation is performed.
   *  <p>
   *  A <code>LockException</code> will be thrown either immediately, on
   *  dispatch or on persists, if a lock prevents the operation.
   *  Implementations may differ on when this validation is performed.
   * @param absPath an absolute path.
   * @param policy the <code>AccessControlPolicy</code> to be applied.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists&#xA; or the session does not have sufficient access to retrieve a node at that&#xA; location.
   * @throws AccessControlException if the policy is not applicable.
   * @throws AccessDeniedException if the session lacks&#xA; <code>MODIFY_ACCESS_CONTROL</code> privilege for the <code>absPath</code>&#xA; node.
   * @throws LockException if a lock applies at the node at&#xA; <code>absPath</code> and this implementation performs this validation&#xA; immediately.
   * @throws VersionException if the node at <code>absPath</code> is read-only&#xA; due to a checked-in node and this implementation performs this validation&#xA; immediately.
   * @throws RepositoryException if another error occurs.
   */
  setPolicy(absPath: String | string, policy: AccessControlPolicy): void;

  /**
   * Removes the specified <code>AccessControlPolicy</code> from the node at
   *  <code>absPath</code>.
   *  <p>
   *  An <code>AccessControlPolicy</code> can only be removed if it was bound
   *  to the specified node through this API before. The effect of the removal
   *  only takes place upon <code>Session.save()</code>. Note, that an
   *  implementation default or any other effective <code>AccessControlPolicy</code>
   *  that has not been applied to the node before may never be removed using
   *  this method.
   *  <p>
   *  A <code>PathNotFoundException</code> is thrown if no node at
   *  <code>absPath</code> exists or the session does not have privilege to
   *  retrieve the node.
   *  <p>
   *  An <code>AccessControlException</code> is thrown if the policy to remove
   *  does not exist at the node at <code>absPath</code>.
   *  <p>
   *  An <code>AccessDeniedException</code> is thrown if the session lacks
   *  <code>MODIFY_ACCESS_CONTROL</code> privilege for the <code>absPath</code>
   *  node.
   *  <p>
   *  An <code>LockException</code> is thrown either immediately, on dispatch
   *  or on persists, if the node at <code>absPath</code> is locked.
   *  Implementations may differ on when this validation is performed.
   *  <p>
   *  An <code>VersionException</code> is thrown either immediately, on
   *  dispatch or on persists, if the node at <code>absPath</code> is read-only
   *  due to a checked-in node.Implementations may differ on when this
   *  validation is performed.
   *  <p>
   *  A <code>RepositoryException</code> is thrown if another error occurs.
   * @param absPath an absolute path.
   * @param policy the policy to be removed.
   * @throws PathNotFoundException if no node at <code>absPath</code> exists&#xA; or the session does not have sufficient access to retrieve a node at that&#xA; location.
   * @throws AccessControlException if no policy exists.
   * @throws AccessDeniedException if the session lacks&#xA; <code>MODIFY_ACCESS_CONTROL</code> privilege for the <code>absPath</code>&#xA; node.
   * @throws LockException if a lock applies at the node at&#xA; <code>absPath</code> and this implementation performs this validation&#xA; immediately instead of waiting until <code>save</code>.
   * @throws VersionException if the node at <code>absPath</code> is&#xA; versionable and checked-in or is non-versionable but its nearest&#xA; versionable ancestor is checked-in and this implementation performs this&#xA; validation immediately instead of waiting until <code>save</code>.
   * @throws RepositoryException if another error occurs.
   */
  removePolicy(absPath: String | string, policy: AccessControlPolicy): void;
};
