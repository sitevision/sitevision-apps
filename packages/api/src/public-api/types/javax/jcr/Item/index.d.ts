import type { String } from "../../../java/lang/String";

import type { Node } from "../Node";
import type { Session } from "../../../../server/Session";

import type { ItemVisitor } from "../ItemVisitor";

/**
 * The <code>Item</code> is the base interface of <code>{@link Node}</code> and
 *  <code>{@link Property}</code>.
  
    */
export type Item = {
  /**
   * Returns the normalized absolute path to this item.
   * @return the normalized absolute path of this <code>Item</code>.
   * @throws RepositoryException if an error occurs.
   */
  getPath(): string;

  /**
   * Returns the name of this <code>Item</code> in qualified form. If this
   *  <code>Item</code> is the root node of the workspace, an empty string is
   *  returned.
   * @return the name of this <code>Item</code> in qualified form or an empty&#xA; string if this <code>Item</code> is the root node of a&#xA; workspace.
   * @throws RepositoryException if an error occurs.
   */
  getName(): string;

  /**
   * Returns the parent of this <code>Item</code>.
   * @return The parent of this <code>Item</code>.
   * @throws ItemNotFoundException if this <code>Item</code> is the root node&#xA; of a workspace.
   * @throws AccessDeniedException if the current session does not have&#xA; sufficent access to retrieve the parent of this item.
   * @throws RepositoryException if another error occurs.
   */
  getParent(): Node;

  /**
   * Indicates whether this <code>Item</code> is a <code>Node</code> or a
   *  <code>Property</code>. Returns <code>true</code> if this
   *  <code>Item</code> is a <code>Node</code>; Returns <code>false</code> if
   *  this <code>Item</code> is a <code>Property</code>.
   * @return <code>true</code> if this <code>Item</code> is a&#xA; <code>Node</code>, <code>false</code> if it is a&#xA; <code>Property</code>.
   */
  isNode(): boolean;

  /**
   * Accepts an <code>ItemVisitor</code>. Calls the appropriate
   *  <code>ItemVisitor</code> <code>visit</code> method of the according to
   *  whether <i>this</i> <code>Item</code> is a <code>Node</code> or a
   *  <code>Property</code>.
   * @param visitor The ItemVisitor to be accepted.
   * @throws RepositoryException if an error occurs.
   */
  accept(visitor: ItemVisitor): void;

  /**
   * Validates all pending changes currently recorded in this
   *  <code>Session</code> that apply to this <code>Item</code> or any of its
   *  descendants (that is, the subgraph rooted at this Item). If validation of
   *  <i>all</i> pending changes succeeds, then this change information is
   *  cleared from the <code>Session</code>. If the <code>save</code> occurs
   *  outside a transaction, the changes are persisted and thus made visible to
   *  other <code>Sessions</code>. If the <code>save</code> occurs within a
   *  transaction, the changes are not persisted until the transaction is
   *  committed.
   *  <p>
   *  If validation fails, then no pending changes are saved and they remain
   *  recorded on the <code>Session</code>. There is no best-effort or partial
   *  save.
   *  <p>
   *  The item in persistent storage to which a transient item is saved is
   * @throws AccessDeniedException if any of the changes to be persisted would&#xA; exceed the access capabilities of the the current session. Also thrown if&#xA; any of the changes to be persisted would cause the removal of a node that&#xA; is currently referenced by a <code>REFERENCE</code> property that the&#xA; current session <i>does not</i> have read access to.
   * @throws ItemExistsException if any of the changes to be persisted would&#xA; be prevented by the presence of an already existing item in the&#xA; workspace.
   * @throws ConstraintViolationException if any of the changes to be&#xA; persisted would violate a node type or restriction. Additionally, a&#xA; repository may use this exception to enforce implementation- or&#xA; configuration-dependent restrictions.
   * @throws InvalidItemStateException if any of the changes to be persisted&#xA; conflicts with a change already persisted through another session and the&#xA; implementation is such that this conflict can only be detected at&#xA; <code>save</code>-time and therefore was not detected earlier, at&#xA; change-time.
   * @throws ReferentialIntegrityException if any of the changes to be&#xA; persisted would cause the removal of a node that is currently referenced&#xA; by a <code>REFERENCE</code> property that this <code>Session</code> has&#xA; read access to.
   * @throws VersionException if the <code>save</code> would make a result in&#xA; a change to persistent storage that would violate the read-only status of&#xA; a checked-in node.
   * @throws LockException if the <code>save</code> would result in a change&#xA; to persistent storage that would violate a lock.
   * @throws NoSuchNodeTypeException if the <code>save</code> would result in&#xA; the addition of a node with an unrecognized node type.
   * @throws RepositoryException if another error occurs.&#xA;&#xA; <p><strong>Partly supported in Sitevision but deprecated as of JCR 2.0 where {@link Session#save()} should be used instead.</strong></p>
   */
  save(): void;

  /**
   * If <code>keepChanges</code> is <code>false</code>, this method discards
   *  all pending changes currently recorded in this <code>Session</code> that
   *  apply to this Item or any of its descendants (that is, the subgraph
   *  rooted at this Item)and returns all items to reflect the current saved
   *  state. Outside a transaction this state is simple the current state of
   *  persistent storage. Within a transaction, this state will reflect
   *  persistent storage as modified by changes that have been saved but not
   *  yet committed.
   *  <p>
   *  If <code>keepChanges</code> is true then pending change are not discarded
   *  but items that do not have changes pending have their state refreshed to
   *  reflect the current saved state, thus revealing changes made by other
   *  sessions.
   * @param keepChanges a boolean
   * @throws InvalidItemStateException if this <code>Item</code> object&#xA; represents a workspace item that has been removed (either by this session&#xA; or another).
   * @throws RepositoryException if another error occurs.
   */
  refresh(keepChanges: boolean): void;

  /**
   * Removes <code>this</code> item (and its subgraph).
   *  <p>
   *  To persist a removal, a <code>save</code> must be performed that includes
   *  the (former) parent of the removed item within its scope.
   *  <p>
   *  If a node with same-name siblings is removed, this decrements by one the
   *  indices of all the siblings with indices greater than that of the removed
   *  node. In other words, a removal compacts the array of same-name siblings
   *  and causes the minimal re-numbering required to maintain the original
   *  order but leave no gaps in the numbering.
   * @throws VersionException if the parent node of this item is versionable&#xA; and checked-in or is non-versionable but its nearest versionable ancestor&#xA; is checked-in and this implementation performs this validation&#xA; immediately instead of waiting until <code>save</code>.
   * @throws LockException if a lock prevents the removal of this item and&#xA; this implementation performs this validation immediately instead of&#xA; waiting until <code>save</code>.
   * @throws ConstraintViolationException if removing the specified item would&#xA; violate a node type or implementation-specific constraint and this&#xA; implementation performs this validation immediately instead of waiting&#xA; until <code>save</code>.
   * @throws AccessDeniedException if this item or an item in its subgraph is&#xA; currently the target of a <code>REFERENCE</code> property located in this&#xA; workspace but outside this item's subgraph and the current&#xA; <code>Session</code> <i>does not</i> have read access to that&#xA; <code>REFERENCE</code> property or if the current <code>Session</code>&#xA; does not have sufficent privileges to remove the item.
   * @throws RepositoryException if another error occurs.
   * @see javax.jcr.Session#removeItem(String)
   */
  remove(): void;
};
