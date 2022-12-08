import Session from "../../../../server/Session";

import type { Version } from "../version/Version";
import type { LockManager } from "../lock/LockManager";
import type { QueryManager } from "../query/QueryManager";
import type { NamespaceRegistry } from "../NamespaceRegistry";
import type { NodeTypeManager } from "../nodetype/NodeTypeManager";
import type { ObservationManager } from "../observation/ObservationManager";
import type { VersionManager } from "../version/VersionManager";

/**
 * A <code>Workspace</code> object represents a view onto a persitent workspace
 * within a repository. This view is defined by the authorization settings of
 * the <code>Session</code> object associated with the <code>Workspace</code>
 * object. Each <code>Workspace</code> object is associated one-to-one with a
 * <code>Session</code> object. The <code>Workspace</code> object can be
 * acquired by calling <code>{@link Session#getWorkspace()}</code> on the
 * associated <code>Session</code> object.A constant for the name of the workspace root node.A constant for the absolute path of the workspace root node.A constant for the name of the system node.A constant for the absolute path of the system node.A constant for the name of the node type definition storage node.A constant for the absolute path of the node type definition storage
 * node.A constant for the name of the version storage node.A constant for the absolute path of the version storage node.A constant for the name of the activities node.A constant for the absolute path of the activities node.A constant for the name of the configurations node.A constant for the absolute path of the configurations node.A constant for the name of the unfiled storage node.A constant for the absolute path of the unfiled storage node.A constant for the name of the <code>jcr:xmltext</code> node produced on
 * {@link #importXML}.A constant for the name of the <code>jcr:xmlcharacters</code> property
 * produced on {@link #importXML}.A constant for the relative path from the node representing the imported
 * XML element of the <code>jcr:xmlcharacters</code> property produced on
 * {@link #importXML}.
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 */
export type Workspace = {
  /**
   * Returns the <code>Session</code> object through which this
   * <code>Workspace</code> object was acquired.
   * @return a <code>{@link Session}</code> object.
   */
  getSession(): Session;

  /**
   * Returns the name of the actual persistent workspace represented by this
   * <code>Workspace</code> object. This the name used in
   * <code>Repository.login</code>.
   * @return the name of this workspace.
   */
  getName(): string;

  /**
   * This method copies the subgraph rooted at, and including, the node at
   * <code>srcAbsPath</code> to the new location at <code>destAbsPath</code>.
   * <p>
   * This is a workspace-write operation and therefore dispatches changes
   * immediately and does not require a <code>save</code>.
   * <p>
   * When a node <code>N</code> is copied to a path location where no node
   * currently exists, a new node <code>N'</code> is created at that location.
   * The subgraph rooted at and including <code>N'</code> (call it <code>S'</code>)
   * is created and is identical to the subgraph rooted at and including <code>N</code>
   * (call it <code>S</code>) with the following exceptions:
   * <ul>
   * <li>Every node in <code>S'</code> is given a new and distinct identifier.</li>
   * <li>The repository <i>may</i> automatically drop any mixin node type <code>T</code>
   * present on any node <code>M</code> in <code>S</code>. Dropping a mixin node type
   * in this context means that while <code>M</code> remains unchanged, its copy
   * <code>M'</code> will lack the mixin <code>T</code> and any child nodes and properties
   * defined by <code>T</code> that are present on <code>M</code>. For example, a node
   * <code>M</code> that is <code>mix:versionable</code> may be copied such that the
   * resulting node <code>M'</code> will be a copy of <code>N</code> except that
   * <code>M'</code> will not be <code>mix:versionable</code> and will not have any of the
   * properties defined by <code>mix:versionable</code>. In order for a mixin node type to
   * be dropped it must be listed by name in the <code>jcr:mixinTypes</code> property of
   * <code>M</code>. The resulting <code>jcr:mixinTypes</code> property of <code>M'</code>
   * will reflect any change.</li>
   * <li>If a node <code>M</code> in <code>S</code> is referenceable and its
   * <code>mix:referenceable</code> mixin is not dropped on copy, then the resulting
   * <code>jcr:uuid</code> property of <code>M'</code> will reflect the new identifier
   * assigned to <code>M'</code>.</li>
   * <li>Each <code>REFERENCE</code> or <code>WEAKEREFERENCE</code> property <code>R</code>
   * in <code>S</code> is copied to its new location <code>R'</code> in <code>S'</code>.
   * If <code>R</code> references a node <code>M</code> within <code>S</code> then the value
   * of <code>R'</code> will be the identifier of <code>M'</code>, the new copy of
   * <code>M</code>, thus preserving the reference within the subgraph.</li>
   * </ul>
   * When a node <code>N</code> is copied to a location where a node <code>N'</code> already
   * exists, the repository may either immediately throw an <code>ItemExistsException</code>
   * or attempt to update the node <code>N'</code> by selectively replacing part of its subgraph
   * with a copy of the relevant part of the subgraph of <code>N</code>. If the node types of
   * <code>N</code> and <code>N'</code> are compatible, the implementation supports update-on-copy
   * for these node types and no other errors occur, then the copy will succeed. Otherwise an
   * <code>ItemExistsException</code> is thrown.
   * <p>
   * Which node types can be updated on copy and the details of any such updates are
   * implementation-dependent. For example, some implementations may support update-on-copy
   * for <code>mix:versionable</code> nodes. In such a case the versioning-related properties
   * of the target node would remain unchanged (<code>jcr:uuid</code>,
   * <code>jcr:versionHistory</code>, etc.) while the substantive content part of the subgraph
   * would be replaced with that of the source node.
   * <p>
   * The <code>destAbsPath</code> provided must not have an index on its final
   * element. If it does then a <code>RepositoryException</code> is thrown.
   * Strictly speaking, the <code>destAbsPath</code> parameter is actually an
   * <i>absolute path</i> to the parent node of the new location, appended
   * with the new <i>name</i> desired for the copied node. It does not specify
   * a position within the child node ordering. If ordering is supported by
   * the node type of the parent node of the new location, then the new copy
   * of the node is appended to the end of the child node list.
   * <p>
   * This method cannot be used to copy an individual property by itself. It
   * copies an entire node and its subgraph.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param srcAbsPath the path of the node to be copied.
   * @param destAbsPath the location to which the node at <code>srcAbsPath</code> is to be copied.
   * @throws ConstraintViolationException if the operation would violate a node-type or other implementation-specific constraint.
   * @throws VersionException if the parent node of <code>destAbsPath</code> is read-only due to a checked-in node.
   * @throws AccessDeniedException if the current session does not have sufficent access to complete the operation.
   * @throws PathNotFoundException if the node at <code>srcAbsPath</code> or the parent of <code>destAbsPath</code> does not exist.
   * @throws ItemExistsException if a node already exists at <code>destAbsPath</code> and either same-name siblings are not allowed or update on copy is not supported for the nodes involved.
   * @throws LockException if a lock prevents the copy.
   * @throws RepositoryException if the last element of <code>destAbsPath</code> has an index or if another error occurs.
   */
  copy(srcAbsPath: string, destAbsPath: string): void;

  /**
   * This method copies the subgraph at <code>srcAbsPath</code> in
   * <code>srcWorkspace</code> to <code>destAbsPath</code> in
   * <code>this</code> workspace.
   * <p>
   * When a node <code>N</code> is copied to a path location where no node
   * currently exists, a new node <code>N'</code> is created at that location.
   * The subgraph rooted at and including <code>N'</code> (call it <code>S'</code>)
   * is created and is identical to the subgraph rooted at and including <code>N</code>
   * (call it <code>S</code>) with the following exceptions:
   * <ul>
   * <li>Every referenceable node in <code>S'</code> is given a new and distinct identifier
   * while every non-referenceable node in <code>S'</code> <i>may</i> be given a new and
   * distinct identifier.</li>
   * <li>The repository <i>may</i> automatically drop any mixin node type <code>T</code>
   * present on any node <code>M</code> in <code>S</code>. Dropping a mixin node type
   * in this context means that while <code>M</code> remains unchanged, its copy
   * <code>M'</code> will lack the mixin <code>T</code> and any child nodes and properties
   * defined by <code>T</code> that are present on <code>M</code>. For example, a node
   * <code>M</code> that is <code>mix:versionable</code> may be copied such that the
   * resulting node <code>M'</code> will be a copy of <code>N</code> except that
   * <code>M'</code> will not be <code>mix:versionable</code> and will not have any of the
   * properties defined by <code>mix:versionable</code>. In order for a mixin node type to
   * be dropped it must be listed by name in the <code>jcr:mixinTypes</code> property of
   * <code>M</code>. The resulting <code>jcr:mixinTypes</code> property of <code>M'</code>
   * will reflect any change.</li>
   * <li>If a node <code>M</code> in <code>S</code> is referenceable and its
   * <code>mix:referenceable</code> mixin is not dropped on copy, then the resulting
   * <code>jcr:uuid</code> property of <code>M'</code> will reflect the new identifier
   * assigned to <code>M'</code>.</li>
   * <li>Each <code>REFERENCE</code> or <code>WEAKEREFERENCE</code> property <code>R</code>
   * in <code>S</code> is copied to its new location <code>R'</code> in <code>S'</code>.
   * If <code>R</code> references a node <code>M</code> within <code>S</code> then the value
   * of <code>R'</code> will be the identifier of <code>M'</code>, the new copy of
   * <code>M</code>, thus preserving the reference within the subgraph.</li>
   * </ul>
   * When a node <code>N</code> is copied to a location where a node <code>N'</code> already
   * exists, the repository may either immediately throw an <code>ItemExistsException</code>
   * or attempt to update the node <code>N'</code> by selectively replacing part of its subgraph
   * with a copy of the relevant part of the subgraph of <code>N</code>. If the node types of
   * <code>N</code> and <code>N'</code> are compatible, the implementation supports update-on-copy
   * for these node types and no other errors occur, then the copy will succeed. Otherwise an
   * <code>ItemExistsException</code> is thrown.
   * <p>
   * Which node types can be updated on copy and the details of any such updates are
   * implementation-dependent. For example, some implementations may support update-on-copy
   * for <code>mix:versionable</code> nodes. In such a case the versioning-related properties
   * of the target node would remain unchanged (<code>jcr:uuid</code>,
   * <code>jcr:versionHistory</code>, etc.) while the substantive content part of the subgraph
   * would be replaced with that of the source node.
   * <p>
   * The <code>destAbsPath</code> provided must not have an index on its final
   * element. If it does then a <code>RepositoryException</code> is thrown.
   * Strictly speaking, the <code>destAbsPath</code> parameter is actually an
   * <i>absolute path</i> to the parent node of the new location, appended
   * with the new <i>name</i> desired for the copied node. It does not specify
   * a position within the child node ordering. If ordering is supported by
   * the node type of the parent node of the new location, then the new copy
   * of the node is appended to the end of the child node list.
   * <p>
   * This method cannot be used to copy just an individual property by itself.
   * It copies an entire node and its subgraph (including, of course, any
   * properties contained therein).
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param srcWorkspace the name of the workspace from which the copy is to be made.
   * @param srcAbsPath the path of the node to be copied.
   * @param destAbsPath the location to which the node at <code>srcAbsPath</code> is to be copied in <code>this</code> workspace.
   * @throws NoSuchWorkspaceException if <code>srcWorkspace</code> does not exist or if the current <code>Session</code> does not have permission to access it.
   * @throws ConstraintViolationException if the operation would violate a node-type or other implementation-specific constraint
   * @throws VersionException if the parent node of <code>destAbsPath</code> is read-only due to a checked-in node.
   * @throws AccessDeniedException if the current session does have access to <code>srcWorkspace</code> but otherwise does not have sufficient access to complete the operation.
   * @throws PathNotFoundException if the node at <code>srcAbsPath</code> in <code>srcWorkspace</code> or the parent of <code>destAbsPath</code> in this workspace does not exist.
   * @throws ItemExistsException if a node already exists at <code>destAbsPath</code> and either same-name siblings are not allowed or update on copy is not supported for the nodes involved.
   * @throws LockException if a lock prevents the copy.
   * @throws RepositoryException if the last element of <code>destAbsPath</code> has an index or if another error occurs.
   */
  copy(srcWorkspace: string, srcAbsPath: string, destAbsPath: string): void;

  /**
   * Clones the subgraph at the node <code>srcAbsPath</code> in
   * <code>srcWorkspace</code> to the new location at <code>destAbsPath</code>
   * in <code>this</code> workspace.
   * <p>
   * Unlike the signature of <code>copy</code> that copies between workspaces,
   * this method <i>does not</i> assign new identifiers to the newly cloned
   * nodes but preserves the identifiers of their respective source nodes.
   * This applies to both referenceable and non-referenceable nodes.
   * <p>
   * In some implementations there may be cases where preservation of a
   * non-referenceable identifier is not possible, due to how
   * non-referenceable identifiers are constructed in that implementation. In
   * such a case this method will throw a <code>RepositoryException</code>.
   * <p>
   * If <code>removeExisting</code> is true and an existing node in this
   * workspace (the destination workspace) has the same identifier as a node
   * being cloned from <code>srcWorkspace</code>, then the incoming node takes
   * precedence, and the existing node (and its subgraph) is removed. If
   * <code>removeExisting</code> is false then an identifier collision causes
   * this method to throw a <code>ItemExistsException</code> and no changes
   * are made.
   * <p>
   * If successful, the change is persisted immediately, there is no need to
   * call <code>save</code>.
   * <p>
   * The <code>destAbsPath</code> provided must not have an index on its final
   * element. If it does then a <code>RepositoryException</code> is thrown. If
   * ordering is supported by the node type of the parent node of the new
   * location, then the new clone of the node is appended to the end of the
   * child node list.
   * <p>
   * This method cannot be used to clone just an individual property; it
   * clones an node and its subgraph.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param srcWorkspace The name of the workspace from which the node is to be copied.
   * @param srcAbsPath the path of the node to be copied in <code>srcWorkspace</code>.
   * @param destAbsPath the location to which the node at <code>srcAbsPath</code> is to be copied in <code>this</code> workspace.
   * @param removeExisting if <code>false</code> then this method throws an <code>ItemExistsException</code> on identifier conflict with an incoming node. If <code>true</code> then a identifier conflict is resolved by removing the existing node from its location in this workspace and cloning (copying in) the one from <code>srcWorkspace</code>.
   * @throws NoSuchWorkspaceException if <code>destWorkspace</code> does not exist.
   * @throws ConstraintViolationException if the operation would violate a node-type or other implementation-specific constraint.
   * @throws VersionException if the parent node of <code>destAbsPath</code> is read-only due to a checked-in node. This exception will also be thrown if <code>removeExisting</code> is <code>true</code>, and an identifier conflict occurs that would require the moving and/or altering of a node that is checked-in.
   * @throws AccessDeniedException if the current session does not have sufficient access to complete the operation.
   * @throws PathNotFoundException if the node at <code>srcAbsPath</code> in <code>srcWorkspace</code> or the parent of <code>destAbsPath</code> in this workspace does not exist.
   * @throws ItemExistsException if a node already exists at <code>destAbsPath</code> and same-name siblings are not allowed or if <code>removeExisting</code> is <code>false</code> and an identifier conflict occurs.
   * @throws LockException if a lock prevents the clone.
   * @throws RepositoryException if the last element of <code>destAbsPath</code> has an index or if another error occurs.
   */
  clone(
    srcWorkspace: string,
    srcAbsPath: string,
    destAbsPath: string,
    removeExisting: boolean
  ): void;

  /**
   * Moves the node at <code>srcAbsPath</code> (and its entire subgraph) to
   * the new location at <code>destAbsPath</code>.
   * <p>
   * If successful, the change is persisted immediately, there is no need to
   * call <code>save</code>. Note that this is in contrast to {@link
   * Session#move} which operates within the transient space and hence
   * requires a <code>save</code>.
   * <p>
   * The identifiers of referenceable nodes must not be changed by a
   * <code>move</code>. The identifiers of non-referenceable nodes <i>may</i>
   * change.
   * <p>
   * The <code>destAbsPath</code> provided must not have an index on its final
   * element. If it does then a <code>RepositoryException</code> is thrown.
   * Strictly speaking, the <code>destAbsPath</code> parameter is actually an
   * <i>absolute path</i> to the parent node of the new location, appended
   * with the new <i>name</i> desired for the moved node. It does not specify
   * a position within the child node ordering. If ordering is supported by
   * the node type of the parent node of the new location, then the newly
   * moved node is appended to the end of the child node list.
   * <p>
   * This method cannot be used to move just an individual property by itself.
   * It moves an entire node and its subgraph (including, of course, any
   * properties contained therein).
   * <p>
   * The identifiers of referenceable nodes must not be changed by a
   * <code>move</code>. The identifiers of non-referenceable nodes may
   * change.
   * <p>
   * A <code>ConstraintViolationException</code> is thrown if the operation
   * would violate a node-type or other implementation-specific constraint.
   * <p>
   * A <code>VersionException</code> is thrown if the parent node of
   * <code>destAbsPath</code> or the parent node of <code>srcAbsPath</code> is
   * versionable and checked-in, or is non-versionable but its nearest
   * versionable ancestor is checked-in.
   * <p>
   * An <code>AccessDeniedException</code> is thrown if the current session
   * (i.e. the session that was used to acquire this <code>Workspace</code>
   * object) does not have sufficient access rights to complete the
   * operation.
   * <p>
   * A <code>PathNotFoundException</code> is thrown if the node at
   * <code>srcAbsPath</code> or the parent of <code>destAbsPath</code> does
   * not exist.
   * <p>
   * An <code>ItemExistException</code> is thrown if a node already exists at
   * <code>destAbsPath</code> and same-name siblings are not allowed.
   * <p>
   * Note that if a property already exists at <code>destAbsPath</code>, the
   * operation succeeds, since a node may have a child node and property with
   * the same name
   * <p>
   * A <code>LockException</code> if a lock prevents the move.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param srcAbsPath the path of the node to be moved.
   * @param destAbsPath the location to which the node at <code>srcAbsPath</code> is to be moved.
   * @throws ConstraintViolationException if the operation would violate a node-type or other implementation-specific constraint
   * @throws VersionException if the parent node of <code>destAbsPath</code> is read-only due to a checked-in node.
   * @throws AccessDeniedException if the current session does not have sufficient access to complete the operation.
   * @throws PathNotFoundException if the node at <code>srcAbsPath</code> or the parent of <code>destAbsPath</code> does not exist.
   * @throws ItemExistsException if a node already exists at <code>destAbsPath</code> and same-name siblings are not allowed.
   * @throws LockException if a lock prevents the move.
   * @throws RepositoryException if the last element of <code>destAbsPath</code> has an index or if another error occurs.
   */
  move(srcAbsPath: string, destAbsPath: string): void;

  /**
   * Restores a set of versions at once. Used in cases where a "chicken and
   * egg" problem of mutually referring <code>REFERENCE</code> properties
   * would prevent the restore in any serial order.
   * <p>
   * If the restore succeeds the changes made to <code>this</code> node are
   * persisted immediately, there is no need to call <code>save</code>.
   * <p>
   * The following restrictions apply to the set of versions specified:
   * <p>
   * If <code>S</code> is the set of versions being restored simultaneously,
   * <ul> <li> For every version <code>V</code> in <code>S</code> that
   * corresponds to a <i>missing</i> node, there must also be a parent of V in
   * S. </li> <li> <code>S</code> must contain at least one version that
   * corresponds to an existing node in the workspace. </li> <li> No
   * <code>V</code> in <code>S</code> can be a root version
   * (<code>jcr:rootVersion</code>). </li> </ul> If any of these restrictions
   * does not hold, the restore will fail because the system will be unable to
   * determine the path locations to which one or more versions are to be
   * restored. In this case a <code>VersionException</code> is thrown.
   * <p>
   * The versionable nodes in this workspace that correspond to the versions
   * being restored define a set of (one or more) subgraphs. An identifier
   * collision occurs when this workspace contains a node <i>outside these
   * subgraphs</i> that has the same identifier as one of the nodes that would
   * be introduced by the <code>restore</code> operation <i>into one of these
   * subgraphs</i>. The result in such a case is governed by the
   * <code>removeExisting</code> flag. If <code>removeExisting</code> is
   * <code>true</code> then the incoming node takes precedence, and the
   * existing node (and its subgraph) is removed. If <code>removeExisting</code>
   * is <code>false</code> then a <code>ItemExistsException</code> is thrown
   * and no changes are made. Note that this applies not only to cases where
   * the restored node itself conflicts with an existing node but also to
   * cases where a conflict occurs with any node that would be introduced into
   * the workspace by the restore operation. In particular, conflicts
   * involving subnodes of the restored node that have
   * <code>OnParentVersion</code> settings of <code>COPY</code> or
   * <code>VERSION</code> are also governed by the <code>removeExisting</code>
   * flag.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param versions The set of versions to be restored
   * @param removeExisting governs what happens on identifier collision.
   * @throws ItemExistsException if <code>removeExisting</code> is <code>false</code> and an identifier collision occurs with a node being restored.
   * @throws UnsupportedRepositoryOperationException if one or more of the nodes to be restored is not versionable.
   * @throws VersionException if the set of versions to be restored is such that the original path location of one or more of the versions cannot be determined or if the <code>restore</code> would change the state of a existing versionable node that is currently checked-in or if a root version (<code>jcr:rootVersion</code>) is among those being restored.
   * @throws LockException if a lock prevents the restore.
   * @throws InvalidItemStateException if this <code>Session</code> has pending unsaved changes.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#restore} should be used instead.
   */
  restore(versions: Version, removeExisting: boolean): void;

  /**
   * Returns the <code>LockManager</code> object, through which locking
   * methods are accessed.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return the <code>LockManager</code> object.
   * @throws UnsupportedRepositoryOperationException if the implementation does not support locking.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getLockManager(): LockManager;

  /**
   * Returns the <code>QueryManager</code> object, through search methods are
   * accessed.
   * @return the <code>QueryManager</code> object.
   * @throws RepositoryException if an error occurs.
   */
  getQueryManager(): QueryManager;

  /**
   * Returns the <code>NamespaceRegistry</code> object, which is used to
   * access the mapping between prefixes and namespaces. In level 2
   * repositories the <code>NamespaceRegistry</code> can also be used to
   * change the namespace mappings.
   * @return the <code>NamespaceRegistry</code>.
   * @throws RepositoryException if an error occurs.
   */
  getNamespaceRegistry(): NamespaceRegistry;

  /**
   * Returns the <code>NodeTypeManager</code> through which node type
   * information can be queried. There is one node type registry per
   * repository, therefore the <code>NodeTypeManager</code> is not
   * workspace-specific; it provides introspection methods for the global,
   * repository-wide set of available node types. In repositories that support
   * it, the <code>NodeTypeManager</code> can also be used to register new
   * node types.
   * @return a <code>NodeTypeManager</code> object.
   * @throws RepositoryException if an error occurs.
   */
  getNodeTypeManager(): NodeTypeManager;

  /**
   * Returns the <code>ObservationManager</code> object.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return an <code>ObservationManager</code> object.
   * @throws UnsupportedRepositoryOperationException if the implementation does not support observation.
   * @throws RepositoryException if an error occurs.
   */
  getObservationManager(): ObservationManager;

  /**
   * Returns the <code>VersionManager</code> object.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return an <code>VersionManager</code> object.
   * @throws UnsupportedRepositoryOperationException if the implementation does not support versioning.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getVersionManager(): VersionManager;

  /**
   * Returns a string array containing the names of all workspaces in this
   * repository that are accessible to this user, given the
   * <code>Credentials</code> that were used to get the <code>Session</code>
   * to which this <code>Workspace</code> is tied.
   * <p>
   * In order to access one of the listed workspaces, the user performs
   * another {@link Repository#login}, specifying the name of the desired
   * workspace, and receives a new <code>Session</code> object.
   * @return string array of names of accessible workspaces.
   * @throws RepositoryException if an error occurs
   */
  getAccessibleWorkspaceNames(): string;

  /**
   * Returns an <code>org.xml.sax.ContentHandler</code> which can be used to
   * push SAX events into the repository. If the incoming XML stream (in the
   * form of SAX events) does not appear to be a JCR system view XML document
   * then it is interpreted as a document view XML document.
   * <p>
   * The incoming XML is deserialized into a subgraph of items immediately
   * below the node at <code>parentAbsPath</code>.
   * <p>
   * This method simply returns the <code>ContentHandler</code> without
   * altering the state of the repository; the actual deserialization is done
   * through the methods of the <code>ContentHandler</code>. Invalid XML data
   * will cause the <code>ContentHandler</code> to throw a
   * <code>SAXException</code>.
   * <p>
   * As SAX events are fed into the <code>ContentHandler</code>, changes are
   * made directly at the workspace level, without going through the
   * <code>Session</code>. As a result, there is not need to call
   * <code>save</code>. The advantage of this direct-to-workspace method is
   * that a large import will not result in a large cache of pending nodes in
   * the <code>Session</code>. The disadvantage is that structures that
   * violate node type constraints cannot be imported, fixed and then saved.
   * Instead, a constraint violation will cause the <code>ContentHandler</code>
   * to throw a <code>SAXException</code>. See <code>Session.getImportContentHandler</code>
   * for a version of this method that <i>does</i> go through the
   * <code>Session</code>.
   * <p>
   * The flag <code>uuidBehavior</code> governs how the identifiers of
   * incoming (deserialized) nodes are handled. There are four options: <ul>
   * <li>{@link ImportUUIDBehavior#IMPORT_UUID_CREATE_NEW}: Incoming nodes are
   * assigned newly created identifiers upon addition to the workspace. As a
   * result identifier collisions never occur. <li>{@link
   * ImportUUIDBehavior#IMPORT_UUID_COLLISION_REMOVE_EXISTING}: If an incoming
   * node has the same identifier as a node already existing in the workspace,
   * then the already existing node (and its subgraph) is removed from
   * wherever it may be in the workspace before the incoming node is added.
   * Note that this can result in nodes "disappearing" from locations in the
   * workspace that are remote from the location to which the incoming
   * subgraph is being written. <li>{@link ImportUUIDBehavior#IMPORT_UUID_COLLISION_REPLACE_EXISTING}:
   * If an incoming node has the same identifier as a node already existing in
   * the workspace then the already existing node is replaced by the incoming
   * node in the same position as the existing node. Note that this may result
   * in the incoming subgraph being disaggregated and "spread around" to
   * different locations in the workspace. In the most extreme case this
   * behavior may result in no node at all being added as child of
   * <code>parentAbsPath</code>. This will occur if the topmost element of the
   * incoming XML has the same identifier as an existing node elsewhere in the
   * workspace. <li>{@link ImportUUIDBehavior#IMPORT_UUID_COLLISION_THROW}: If
   * an incoming node has the same identifier as a node already existing in
   * the workspace then a <code>SAXException</code> is thrown by the returned
   * <code>ContentHandler</code> during deserialization. </ul> A
   * <code>SAXException</code> will be thrown by the returned
   * <code>ContentHandler</code> during deserialization if the top-most
   * element of the incoming XML would deserialize to a node with the same
   * name as an existing child of <code>parentAbsPath</code> and that child
   * does not allow same-name siblings.
   * <p>
   * A <code>SAXException</code> will also be thrown by the returned
   * <code>ContentHandler</code> during deserialization if
   * <code>uuidBehavior</code> is set to <code>IMPORT_UUID_COLLISION_REMOVE_EXISTING</code>
   * and an incoming node has the same identifier as the node at
   * <code>parentAbsPath</code> or one of its ancestors.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param parentAbsPath the absolute path of a node under which (as child) the imported subgraph will be built.
   * @param uuidBehavior a four-value flag that governs how incoming identifiers are handled.
   * @return an org.xml.sax.ContentHandler whose methods may be called to feed SAX events into the deserializer.
   * @throws PathNotFoundException if no node exists at <code>parentAbsPath</code>.
   * @throws ConstraintViolationException if the new subgraph cannot be added to the node at <code>parentAbsPath</code> due to node-type or other implementation-specific constraints, and this can be determined before the first SAX event is sent. Unlike {@link Session#getImportContentHandler}, this method also enforces node type constraints by throwing <code>SAXException</code>s during deserialization. However, which node type constraints are enforced depends upon whether node type information in the imported data is respected, and this is an implementation-specific issue.
   * @throws VersionException if the node at <code>parentAbsPath</code> is read-only due to a checked-in node.
   * @throws LockException if a lock prevents the addition of the subgraph.
   * @throws AccessDeniedException if the session associated with this <code>Workspace</code> object does not have sufficient access to perform the import.
   * @throws RepositoryException if another error occurs.
   */
  getImportContentHandler(parentAbsPath: string, uuidBehavior: number): unknown;

  /**
   * Deserializes an XML document and adds the resulting item subgraph as a
   * child of the node at <code>parentAbsPath</code>.
   * <p>
   * If the incoming XML stream does not appear to be a JCR system view XML
   * document then it is interpreted as a <b>document view</b> XML document.
   * <p>
   * The passed <code>InputStream</code> is closed before this method returns
   * either normally or because of an exception.
   * <p>
   * Changes are made directly at the workspace level, without going through
   * the <code>Session</code>. As a result, there is not need to call
   * <code>save</code>. The advantage of this direct-to-workspace method is
   * that a large import will not result in a large cache of pending nodes in
   * the <code>Session</code>. The disadvantage is that invalid data cannot be
   * imported, fixed and then saved. Instead, invalid data will cause this
   * method to throw an <code>InvalidSerializedDataException</code>. See
   * <code>Session.importXML</code> for a version of this method that
   * <i>does</i> go through the <code>Session</code>.
   * <p>
   * The flag <code>uuidBehavior</code> governs how the identifiers of
   * incoming (deserialized) nodes are handled. There are four options: <ul>
   * <li>{@link ImportUUIDBehavior#IMPORT_UUID_CREATE_NEW}: Incoming nodes are
   * assigned newly created identifiers upon addition to the workspace. As a
   * result identifier collisions never occur. <li>{@link
   * ImportUUIDBehavior#IMPORT_UUID_COLLISION_REMOVE_EXISTING}: If an incoming
   * node has the same identifier as a node already existing in the workspace
   * then the already existing node (and its subgraph) is removed from
   * wherever it may be in the workspace before the incoming node is added.
   * Note that this can result in nodes "disappearing" from locations in the
   * workspace that are remote from the location to which the incoming
   * subgraph is being written. If an incoming node has the same identifier as
   * the existing root node of this workspace then <li>{@link
   * ImportUUIDBehavior#IMPORT_UUID_COLLISION_REPLACE_EXISTING}: If an
   * incoming node has the same identifier as a node already existing in the
   * workspace then the already existing node is replaced by the incoming node
   * in the same position as the existing node. Note that this may result in
   * the incoming subgraph being disaggregated and "spread around" to
   * different locations in the workspace. In the most extreme edge case this
   * behavior may result in no node at all being added as child of
   * <code>parentAbsPath</code>. This will occur if the topmost element of the
   * incoming XML has the same identifier as an existing node elsewhere in the
   * workspace. <li>{@link ImportUUIDBehavior#IMPORT_UUID_COLLISION_THROW}: If
   * an incoming node has the same identifier as a node already existing in
   * the workspace then an <code>ItemExistsException</code> is thrown. </ul>
   * An <code>ItemExistsException</code> will be thrown if the top-most
   * element of the incoming XML would deserialize to a node with the same
   * name as an existing child of <code>parentAbsPath</code> and that child
   * does not allow same-name siblings.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param parentAbsPath the absolute path of the node below which the deserialized subgraph is added.
   * @param in The <code>Inputstream</code> from which the XML to be deserialized is read.
   * @param uuidBehavior a four-value flag that governs how incoming identifiers are handled.
   * @throws java.io.IOException if an error during an I/O operation occurs.
   * @throws PathNotFoundException if no node exists at <code>parentAbsPath</code>.
   * @throws ConstraintViolationException if node-type or other implementation-specific constraints prevent the addition of the subgraph or if <code>uuidBehavior</code> is set to <code>IMPORT_UUID_COLLISION_REMOVE_EXISTING</code> and an incoming node has the same identifier as the node at <code>parentAbsPath</code> or one of its ancestors.
   * @throws VersionException if the node at <code>parentAbsPath</code> is read-only due to a checked-in node..
   * @throws InvalidSerializedDataException if incoming stream is not a valid XML document.
   * @throws ItemExistsException if the top-most element of the incoming XML would deserialize to a node with the same name as an existing child of <code>parentAbsPath</code> and that child does not allow same-name siblings, or if a <code>uuidBehavior</code> is set to <code>IMPORT_UUID_COLLISION_THROW</code> and an identifier collision occurs.
   * @throws LockException if a lock prevents the addition of the subgraph.
   * @throws AccessDeniedException if the session associated with this <code>Workspace</code> object does not have sufficient access to perform the import.
   * @throws RepositoryException if another error occurs.
   */
  importXML(parentAbsPath: string, _in: unknown, uuidBehavior: number): void;

  /**
   * Creates a new <code>Workspace</code> with the specified
   * <code>name</code>. The new workspace is empty, meaning it contains only
   * root node.
   * <p>
   * The new workspace can be accessed through a <code>login</code> specifying
   * its name.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name A <code>String</code>, the name of the new workspace.
   * @throws AccessDeniedException if the session through which this <code>Workspace</code> object was acquired does not have permission to create the new workspace.
   * @throws UnsupportedRepositoryOperationException if the repository does not support the creation of workspaces.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  createWorkspace(name: string): void;

  /**
   * Creates a new <code>Workspace</code> with the specified <code>name</code>
   * initialized with a <code>clone</code> of the content of the workspace
   * <code>srcWorkspace</code>. Semantically, this method is equivalent to
   * creating a new workspace and manually cloning <code>srcWorkspace</code>
   * to it; however, this method may assist some implementations in optimizing
   * subsequent <code>Node.update</code> and <code>Node.merge</code> calls
   * between the new workspace and its source.
   * <p>
   * The new workspace can be accessed through a <code>login</code> specifying
   * its name.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name A <code>String</code>, the name of the new workspace.
   * @param srcWorkspace The name of the workspace from which the new workspace is to be cloned.
   * @throws AccessDeniedException if the session through which this <code>Workspace</code> object was acquired does not have sufficient access to create the new workspace.
   * @throws UnsupportedRepositoryOperationException if the repository does not support the creation of workspaces.
   * @throws NoSuchWorkspaceException is <code>srcWorkspace</code> does not exist.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  createWorkspace(name: string, srcWorkspace: string): void;

  /**
   * Deletes the workspace with the specified <code>name</code> from the
   * repository, deleting all content within it.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name A <code>String</code>, the name of the workspace to be deleted.
   * @throws AccessDeniedException if the session through which this <code>Workspace</code> object was acquired does not have sufficent access to remove the workspace.
   * @throws UnsupportedRepositoryOperationException if the repository does not support the removal of workspaces.
   * @throws NoSuchWorkspaceException is <code>srcWorkspace</code> does not exist.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  deleteWorkspace(name: string): void;
};
