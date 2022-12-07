import Node from "../Node";
import Session from "../../../../server/Session";

import ItemVisitor from "../ItemVisitor";

/**
 * The <code>Item</code> is the base interface of <code>{@link Node}</code> and
 * <code>{@link Property}</code>.
  
    */
interface Item {
  /**
   * Returns the normalized absolute path to this item.
   * @return the normalized absolute path of this <code>Item</code>.
   * @throws RepositoryException if an error occurs.
   */
  getPath(): string;

  /**
   * Returns the name of this <code>Item</code> in qualified form. If this
   * <code>Item</code> is the root node of the workspace, an empty string is
   * returned.
   * @return the name of this <code>Item</code> in qualified form or an empty string if this <code>Item</code> is the root node of a workspace.
   * @throws RepositoryException if an error occurs.
   */
  getName(): string;

  /**
   * Returns the ancestor of this <code>Item</code> at the specified depth. An
   * ancestor of depth <i>x</i> is the <code>Item</code> that is <i>x</i>
   * levels down along the path from the root node to <i>this</i>
   * <code>Item</code>. <ul> <li><i>depth</i> = 0 returns the root node of a
   * workspace. <li><i>depth</i> = 1 returns the child of the root node along
   * the path to <i>this</i> <code>Item</code>. <li><i>depth</i> = 2 returns
   * the grandchild of the root node along the path to <i>this</i>
   * <code>Item</code>. <li>And so on to <i>depth</i> = <i>n</i>, where
   * <i>n</i> is the depth of <i>this</i> <code>Item</code>, which returns
   * <i>this</i> <code>Item</code> itself. </ul>
   * <p>
   * If this node has more than one path (i.e., if it is a descendant of a
   * shared node) then the path used to define the ancestor is
   * implementaion-dependent.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param depth An integer, 0 &lt;= <i>depth</i> &lt;= <i>n</i> where <i>n</i> is the depth of <i>this</i> <code>Item</code>.
   * @return The ancestor of this <code>Item</code> at the specified <code>depth</code>.
   * @throws ItemNotFoundException if <i>depth</i> &lt; 0 or <i>depth</i> &gt; <i>n</i> where <i>n</i> is the is the depth of this item.
   * @throws AccessDeniedException if the current session does not have sufficent access to retrieve the specified node.
   * @throws RepositoryException if another error occurs.
   */
  getAncestor(depth: number): Item;

  /**
   * Returns the parent of this <code>Item</code>.
   * @return The parent of this <code>Item</code>.
   * @throws ItemNotFoundException if this <code>Item</code> is the root node of a workspace.
   * @throws AccessDeniedException if the current session does not have sufficent access to retrieve the parent of this item.
   * @throws RepositoryException if another error occurs.
   */
  getParent(): Node;

  /**
   * Returns the depth of this <code>Item</code> in the workspace item graph.
   * <ul> <li>The root node returns 0. <li>A property or child node of the
   * root node returns 1. <li>A property or child node of a child node of the
   * root returns 2. <li>And so on to <i>this</i> <code>Item</code>. </ul>
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return The depth of this <code>Item</code> in the workspace item graph.
   * @throws RepositoryException if an error occurs.
   */
  getDepth(): number;

  /**
   * Returns the <code>Session</code> through which this <code>Item</code> was
   * acquired.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return the <code>Session</code> through which this <code>Item</code> was acquired.
   * @throws RepositoryException if an error occurs.
   */
  getSession(): Session;

  /**
   * Indicates whether this <code>Item</code> is a <code>Node</code> or a
   * <code>Property</code>. Returns <code>true</code> if this
   * <code>Item</code> is a <code>Node</code>; Returns <code>false</code> if
   * this <code>Item</code> is a <code>Property</code>.
   * @return <code>true</code> if this <code>Item</code> is a <code>Node</code>, <code>false</code> if it is a <code>Property</code>.
   */
  isNode(): boolean;

  /**
   * Returns <code>true</code> if this is a new item, meaning that it exists
   * only in transient storage on the <code>Session</code> and has not yet
   * been saved. Within a transaction, <code>isNew</code> on an
   * <code>Item</code> may return <code>false</code> (because the item has
   * been saved) even if that <code>Item</code> is not in persistent storage
   * (because the transaction has not yet been committed).
   * <p>
   * Note that if an item returns <code>true</code> on <code>isNew</code>,
   * then by definition is parent will return <code>true</code> on
   * <code>isModified</code>.
   * <p>
   * Note that in read-only implementations, this method will always return
   * <code>false</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return <code>true</code> if this item is new; <code>false</code> otherwise.
   */
  isNew(): boolean;

  /**
   * Returns <code>true</code> if this <code>Item</code> has been saved but
   * has subsequently been modified through the current session and therefore
   * the state of this item as recorded in the session differs from the state
   * of this item as saved. Within a transaction, <code>isModified</code> on
   * an <code>Item</code> may return <code>false</code> (because the
   * <code>Item</code> has been saved since the modification) even if the
   * modification in question is not in persistent storage (because the
   * transaction has not yet been committed).
   * <p>
   * Note that in read-only implementations, this method will always return
   * <code>false</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return <code>true</code> if this item is modified; <code>false</code> otherwise.
   */
  isModified(): boolean;

  /**
   * Returns <code>true</code> if this <code>Item</code> object (the Java
   * object instance) represents the same actual workspace item as the object
   * <code>otherItem</code>.
   * <p>
   * Two <code>Item</code> objects represent the same workspace item if and
   * only if all the following are true: <ul> <li>Both objects were acquired
   * through <code>Session</code> objects that were created by the same
   * <code>Repository</code> object.</li> <li>Both objects were acquired
   * through <code>Session</code> objects bound to the same repository
   * workspace.</li> <li>The objects are either both <code>Node</code> objects
   * or both <code>Property</code> objects.</li> <li>If they are
   * <code>Node</code> objects, they have the same identifier.</li> <li>If
   * they are <code>Property</code> objects they have identical names and
   * <code>isSame</code> is true of their parent nodes.</li> </ul> This method
   * does not compare the <i>states</i> of the two items. For example, if two
   * <code>Item</code> objects representing the same actual workspace item
   * have been retrieved through two different sessions and one has been
   * modified, then this method will still return <code>true</code> when
   * comparing these two objects. Note that if two <code>Item</code> objects
   * representing the same workspace item are retrieved through the
   * <i>same</i> session they will always reflect the same state.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param otherItem the <code>Item</code> object to be tested for identity with this <code>Item</code>.
   * @return <code>true</code> if this <code>Item</code> object and <code>otherItem</code> represent the same actual repository item; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  isSame(otherItem: Item): boolean;

  /**
   * Accepts an <code>ItemVisitor</code>. Calls the appropriate
   * <code>ItemVisitor</code> <code>visit</code> method of the according to
   * whether <i>this</i> <code>Item</code> is a <code>Node</code> or a
   * <code>Property</code>.
   * @param visitor The ItemVisitor to be accepted.
   * @throws RepositoryException if an error occurs.
   */
  accept(visitor: ItemVisitor): void;

  /**
   * Validates all pending changes currently recorded in this
   * <code>Session</code> that apply to this <code>Item</code> or any of its
   * descendants (that is, the subgraph rooted at this Item). If validation of
   * <i>all</i> pending changes succeeds, then this change information is
   * cleared from the <code>Session</code>. If the <code>save</code> occurs
   * outside a transaction, the changes are persisted and thus made visible to
   * other <code>Sessions</code>. If the <code>save</code> occurs within a
   * transaction, the changes are not persisted until the transaction is
   * committed.
   * <p>
   * If validation fails, then no pending changes are saved and they remain
   * recorded on the <code>Session</code>. There is no best-effort or partial
   * save.
   * <p>
   * The item in persistent storage to which a transient item is saved is
   * @throws AccessDeniedException if any of the changes to be persisted would exceed the access capabilities of the the current session. Also thrown if any of the changes to be persisted would cause the removal of a node that is currently referenced by a <code>REFERENCE</code> property that the current session <i>does not</i> have read access to.
   * @throws ItemExistsException if any of the changes to be persisted would be prevented by the presence of an already existing item in the workspace.
   * @throws ConstraintViolationException if any of the changes to be persisted would violate a node type or restriction. Additionally, a repository may use this exception to enforce implementation- or configuration-dependent restrictions.
   * @throws InvalidItemStateException if any of the changes to be persisted conflicts with a change already persisted through another session and the implementation is such that this conflict can only be detected at <code>save</code>-time and therefore was not detected earlier, at change-time.
   * @throws ReferentialIntegrityException if any of the changes to be persisted would cause the removal of a node that is currently referenced by a <code>REFERENCE</code> property that this <code>Session</code> has read access to.
   * @throws VersionException if the <code>save</code> would make a result in a change to persistent storage that would violate the read-only status of a checked-in node.
   * @throws LockException if the <code>save</code> would result in a change to persistent storage that would violate a lock.
   * @throws NoSuchNodeTypeException if the <code>save</code> would result in the addition of a node with an unrecognized node type.
   * @throws RepositoryException if another error occurs. <p><strong>Partly supported in Sitevision but deprecated as of JCR 2.0 where {@link Session#save()} should be used instead.</strong></p>
   */
  save(): void;

  /**
   * If <code>keepChanges</code> is <code>false</code>, this method discards
   * all pending changes currently recorded in this <code>Session</code> that
   * apply to this Item or any of its descendants (that is, the subgraph
   * rooted at this Item)and returns all items to reflect the current saved
   * state. Outside a transaction this state is simple the current state of
   * persistent storage. Within a transaction, this state will reflect
   * persistent storage as modified by changes that have been saved but not
   * yet committed.
   * <p>
   * If <code>keepChanges</code> is true then pending change are not discarded
   * but items that do not have changes pending have their state refreshed to
   * reflect the current saved state, thus revealing changes made by other
   * sessions.
   * @param keepChanges a boolean
   * @throws InvalidItemStateException if this <code>Item</code> object represents a workspace item that has been removed (either by this session or another).
   * @throws RepositoryException if another error occurs.
   */
  refresh(keepChanges: boolean): void;

  /**
   * Removes <code>this</code> item (and its subgraph).
   * <p>
   * To persist a removal, a <code>save</code> must be performed that includes
   * the (former) parent of the removed item within its scope.
   * <p>
   * If a node with same-name siblings is removed, this decrements by one the
   * indices of all the siblings with indices greater than that of the removed
   * node. In other words, a removal compacts the array of same-name siblings
   * and causes the minimal re-numbering required to maintain the original
   * order but leave no gaps in the numbering.
   * @throws VersionException if the parent node of this item is versionable and checked-in or is non-versionable but its nearest versionable ancestor is checked-in and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws LockException if a lock prevents the removal of this item and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws ConstraintViolationException if removing the specified item would violate a node type or implementation-specific constraint and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws AccessDeniedException if this item or an item in its subgraph is currently the target of a <code>REFERENCE</code> property located in this workspace but outside this item's subgraph and the current <code>Session</code> <i>does not</i> have read access to that <code>REFERENCE</code> property or if the current <code>Session</code> does not have sufficent privileges to remove the item.
   * @throws RepositoryException if another error occurs.
   * @see javax.jcr.Session#removeItem(String)
   */
  remove(): void;
}

export default Item;
