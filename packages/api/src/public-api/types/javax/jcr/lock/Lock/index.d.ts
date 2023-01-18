import type Node from "../../Node";

/**
 * Represents a lock placed on an item.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
type Lock = {
  /**
   * Returns the value of the <code>jcr:lockOwner</code> property. This is
   * either the client supplied owner information (see {@link
   * LockManager#lock(String, boolean, boolean, long, String)}), an
   * implementation-dependent string identifying the user who either created
   * the lock or who is bound to the session holding the lock, or
   * <code>null</code> if none of these are available. The lock owner's
   * identity is only provided for informational purposes. It does not govern
   * who can perform an unlock or make changes to the locked nodes; that
   * depends entirely upon who the token holder is.
   * @return a user ID.
   */
  getLockOwner(): string;

  /**
   * Returns <code>true</code> if this is a deep lock; <code>false</code>
   * otherwise.
   * @return a boolean
   */
  isDeep(): boolean;

  /**
   * Returns the lock holding node. Note that <code>N.getLock().getNode()</code>
   * (where <code>N</code> is a locked node) will only return <code>N</code>
   * if <code>N</code> is the lock holder. If <code>N</code> is in the
   * subgraph of the lock holder, <code>H</code>, then this call will return
   * <code>H</code>.
   * @return an <code>Node</code>.
   */
  getNode(): Node;

  /**
   * May return the lock token for this lock. If this lock is open-scoped and
   * the current session either holds the lock token for this lock, or the
   * repository chooses to expose the lock token to the current session, then
   * this method will return that lock token. Otherwise this method will
   * return <code>null</code>.
   * @return a <code>String</code>.
   */
  getLockToken(): string;

  /**
   * Returns the number of seconds remaining until this locks times out. If
   * the lock has already timed out, a negative value is returned. If the
   * number of seconds remaining is infinite or unknown,
   * <code>Long.MAX_VALUE</code> is returned.
   * @return the number of seconds remaining until this lock times out.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getSecondsRemaining(): number;

  /**
   * Returns true if this <code>Lock</code> object represents a lock that is
   * currently in effect. If this lock has been unlocked either explicitly or
   * due to an implementation-specific limitation (like a timeout) then it
   * returns <code>false</code>. Note that this method is intended for those
   * cases where one is holding a <code>Lock</code> Java object and wants to
   * find out whether the lock (the JCR-level entity that is attached to the
   * lockable node) that this object originally represented still exists. For
   * example, a timeout or explicit <code>unlock</code> will remove a lock
   * from a node but the <code>Lock</code> Java object corresponding to that
   * lock may still exist, and in that case its <code>isLive</code> method
   * will return <code>false</code>.
   * @return a <code>boolean</code>.
   * @throws RepositoryException if an error occurs.
   */
  isLive(): boolean;

  /**
   * Returns <code>true</code> if this is a session-scoped lock and the scope
   * is bound to the current session. Returns <code>false</code> otherwise.
   * @return a <code>boolean</code>.
   */
  isSessionScoped(): boolean;

  /**
   * Returns <code>true</code> if the current session is the owner of this
   * lock, either because it is session-scoped and bound to this session or
   * open-scoped and this session currently holds the token for this lock.
   * Returns <code>false</code> otherwise.
   * @return a <code>boolean</code>.
   * @since JCR 2.0
   */
  isLockOwningSession(): boolean;

  /**
   * If this lock's time-to-live is governed by a timer, this method resets
   * that timer so that the lock does not timeout and expire. If this lock's
   * time-to-live is not governed by a timer, then this method has no effect.
   * @throws LockException if this <code>Session</code> does not hold the correct lock token for this lock.
   * @throws RepositoryException if another error occurs.
   */
  refresh(): void;
};

export = Lock;
