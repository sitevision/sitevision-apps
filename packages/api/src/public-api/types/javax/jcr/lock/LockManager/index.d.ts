/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../../../java/lang/String";

import type { Lock } from "../Lock";

/**
 * This interface encapsulates methods for the management of locks.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
export type LockManager = {
  /**
   * Adds the specified lock token to the current <code>Session</code>.
   *  Holding a lock token makes the current <code>Session</code> the owner of
   *  the lock specified by that particular lock token.
   * @param lockToken a lock token (a string).
   * @throws LockException if the specified lock token is already held by&#xA; another <code>Session</code> and the implementation does not support&#xA; simultaneous ownership of open-scoped locks.
   * @throws RepositoryException if another error occurs.
   */
  addLockToken(lockToken: String | string): void;

  /**
   * Returns the <code>Lock</code> object that applies to the node at the
   *  specified <code>absPath</code>. This may be either a lock on that node
   *  itself or a deep lock on a node above that node.
   *  <p>
   * @param absPath absolute path of node for which to obtain the lock
   * @return The applicable <code>Lock</code> object.
   * @throws LockException if no lock applies to this node.
   * @throws AccessDeniedException if the current session does not have&#xA; sufficent access to get the lock.
   * @throws PathNotFoundException if no node is found at&#xA; <code>absPath</code>
   * @throws RepositoryException if another error occurs.
   */
  getLock(absPath: String | string): Lock;

  /**
   * Returns an array containing all lock tokens currently held by the current
   *  <code>Session</code>. Note that any such tokens will represent
   *  open-scoped locks, since session-scoped locks do not have tokens.
   * @return an array of lock tokens (strings)
   * @throws RepositoryException if an error occurs.
   */
  getLockTokens(): string;

  /**
   * Returns <code>true</code> if the node at <code>absPath</code> holds a
   *  lock; otherwise returns <code>false</code>. To <i>hold</i> a lock means
   *  that this node has actually had a lock placed on it specifically, as
   *  opposed to just having a lock <i>apply</i> to it due to a deep lock held
   *  by a node above.
   * @param absPath absolute path of node
   * @return a <code>boolean</code>.
   * @throws PathNotFoundException if no node is found at&#xA; <code>absPath</code>
   * @throws RepositoryException if an error occurs.
   */
  holdsLock(absPath: String | string): boolean;

  /**
   * <p> Places a lock on the node at <code>absPath</code>. If successful,
   *  the node is said to <i>hold</i> the lock.  <p> If <code>isDeep</code> is
   *  <code>true</code> then the lock applies to the specified node and all its
   *  descendant nodes; if <code>false</code>, the lock applies only to the
   *  specified node. On a successful lock, the <code>jcr:lockIsDeep</code>
   *  property of the locked node is set to this value.  <p> If
   *  <code>isSessionScoped</code> is <code>true</code> then this lock will
   *  expire upon the expiration of the current session (either through an
   *  automatic or explicit <code>Session.logout</code>); if false, this lock
   *  does not expire until it is explicitly unlocked, it times out, or it is
   *  automatically unlocked due to a implementation-specific limitation. <p>
   *  The timeout parameter specifies the number of seconds until the lock
   *  times out (if it is not refreshed with <code>Lock.refresh</code> in the
   *  meantime). An implementation may use this information as a hint or ignore
   *  it altogether. Clients can discover the actual timeout by inspecting the
   *  returned <code>Lock</code> object.  <p> The <code>ownerInfo</code>
   *  parameter can be used to pass a string holding owner information relevant
   *  to the client. An implementation may either use or ignore this parameter.
   *  If it uses the parameter it must set the <code>jcr:lockOwner</code>
   *  property of the locked node to this value and return this value on
   *  <code>Lock.getLockOwner</code>. If it ignores this parameter the
   *  <code>jcr:lockOwner</code> property (and the value returned by
   *  <code>Lock.getLockOwner</code>) is set to either the value returned by
   *  <code>Session.getUserID</code> of the owning session or an
   *  implementation-specific string identifying the owner.  <p> The method
   *  returns a <code>Lock</code> object representing the new lock. If the lock
   *  is open-scoped the returned lock will include a lock token. The lock
   *  token is also automatically added to the set of lock tokens held by the
   *  current session.  <p> The addition or change of the properties
   *  <code>jcr:lockIsDeep</code> and <code>jcr:lockOwner</code> are persisted
   *  immediately; there is no need to call <code>save</code>.  <p> It is
   *  possible to lock a node even if it is checked-in.
   * @param absPath absolute path of node to be locked
   * @param isDeep if <code>true</code> this lock will apply to this node and&#xA; all its descendants; if <code>false</code>, it applies only to this&#xA; node.
   * @param isSessionScoped if <code>true</code>, this lock expires with the&#xA; current session; if <code>false</code> it expires when explicitly or&#xA; automatically unlocked for some other reason.
   * @param timeoutHint desired lock timeout in seconds (servers are free to&#xA; ignore this value); specify {@link Long#MAX_VALUE} for no timeout.
   * @param ownerInfo a string containing owner information supplied by the&#xA; client; servers are free to ignore this value.
   * @return A <code>Lock</code> object containing a lock token.
   * @throws LockException if this node is not <code>mix:lockable</code> or&#xA; this node is already locked or <code>isDeep</code> is <code>true</code>&#xA; and a descendant node of this node already holds a lock.
   * @throws AccessDeniedException if this session does not have sufficent&#xA; access to lock this node.
   * @throws InvalidItemStateException if this node has pending unsaved&#xA; changes.
   * @throws PathNotFoundException if no node is found at&#xA; <code>absPath</code>
   * @throws RepositoryException if another error occurs.
   */
  lock(
    absPath: String | string,
    isDeep: boolean,
    isSessionScoped: boolean,
    timeoutHint: number,
    ownerInfo: String | string
  ): Lock;

  /**
   * Returns <code>true</code> if the node at <code>absPath</code> is locked
   *  either as a result of a lock held by that node or by a deep lock on a
   *  node above that node; otherwise returns <code>false</code>.
   * @param absPath absolute path of node
   * @return a <code>boolean</code>.
   * @throws PathNotFoundException if no node is found at&#xA; <code>absPath</code>
   * @throws RepositoryException if an error occurs.
   */
  isLocked(absPath: String | string): boolean;

  /**
   * Removes the specified lock token from this <code>Session</code>.
   * @param lockToken a lock token (a string)
   * @throws LockException if the current <code>Session</code> does not hold&#xA; the specified lock token.
   * @throws RepositoryException if another error occurs.
   */
  removeLockToken(lockToken: String | string): void;

  /**
   * Removes the lock on the node at <code>absPath</code>. Also removes the
   *  properties <code>jcr:lockOwner</code> and <code>jcr:lockIsDeep</code>
   *  from that node. As well, the corresponding lock token is removed from the
   *  set of lock tokens held by the current <code>Session</code>.
   *  <p>
   *  If the node does not currently hold a lock or holds a lock for which this
   *  <code>Session</code> is not the owner and is not a "lock-superuser", then
   *  a <code>LockException</code> is thrown. Note that the system may give
   *  permission to a non-owning session to unlock a lock. Typically, such
   *  "lock-superuser" capability is intended to facilitate administrational
   *  clean-up of orphaned open-scoped locks.
   *  <p>
   *  Note that it is possible to unlock a node even if it is checked-in (the
   *  lock-related properties will be changed despite the checked-in status).
   *  <p>
   *  If the current session does not have sufficient privileges to remove the
   *  lock, an <code>AccessDeniedException</code> is thrown.
   * @param absPath absolute path of node to be unlocked
   * @throws LockException if this node does not currently hold a lock or&#xA; holds a lock for which this Session does not have the correct lock&#xA; token.
   * @throws AccessDeniedException if the current session does not have&#xA; permission to unlock this node.
   * @throws InvalidItemStateException if this node has pending unsaved&#xA; changes.
   * @throws PathNotFoundException if no node is found at&#xA; <code>absPath</code>
   * @throws RepositoryException if another error occurs.
   */
  unlock(absPath: String | string): void;
};
