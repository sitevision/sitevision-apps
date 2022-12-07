import Repository from "../../hidden/javax/jcr/Repository";

import Workspace from "../../hidden/javax/jcr/Workspace";
import Node from "../../hidden/javax/jcr/Node";
import Credentials from "../../hidden/javax/jcr/Credentials";
import Item from "../../hidden/javax/jcr/Item";
import Property from "../../hidden/javax/jcr/Property";

import ValueFactory from "../../hidden/javax/jcr/ValueFactory";

import AccessControlManager from "../../hidden/javax/jcr/security/AccessControlManager";
import RetentionManager from "../../hidden/javax/jcr/retention/RetentionManager";

/**
 * Returns the <code>Repository</code> object through which this session was
 * acquired.
 * @return a <code>{@link Repository}</code> object.
 */
export function getRepository(): Repository;

/**
 * Gets the user ID associated with this <code>Session</code>. How the user
 * ID is set is up to the implementation, it may be a string passed in as
 * part of the credentials or it may be a string acquired in some other way.
 * This method is free to return an "anonymous user ID" or
 * <code>null</code>.
 * @return the user ID associated with this <code>Session</code>.
 */
export function getUserID(): string;

/**
 * Returns the names of the attributes set in this session as a result of
 * the <code>Credentials</code> that were used to acquire it. Not all
 * <code>Credentials</code> implementations will contain attributes (though,
 * for example, <code>SimpleCredentials</code> does allow for them). This
 * method returns an empty array if the <code>Credentials</code> instance
 * did not provide attributes.
 * @return A string array containing the names of all attributes passed in the credentials used to acquire this session.
 */
export function getAttributeNames(): string;

/**
 * Returns the value of the named attribute as an <code>Object</code>, or
 * <code>null</code> if no attribute of the given name exists. See {@link
 * Session#getAttributeNames}.
 * @param name the name of an attribute passed in the credentials used to acquire this session.
 * @return the value of the attribute or <code>null</code> if no attribute of the given name exists.
 */
export function getAttribute(name: string): unknown;

/**
 * Returns the <code>Workspace</code> attached to this
 * <code>Session</code>.
 * @return a <code>{@link Workspace}</code> object.
 */
export function getWorkspace(): Workspace;

/**
 * Returns the root node of the workspace, "/". This node is the main access
 * point to the content of the workspace.
 * @return The root node of the workspace: a <code>{@link Node}</code> object.
 * @throws RepositoryException if an error occurs.
 */
export function getRootNode(): Node;

/**
 * Returns a new session in accordance with the specified (new) Credentials.
 * Allows the current user to "impersonate" another using incomplete or
 * relaxed credentials requirements (perhaps including a user name but no
 * password, for example), assuming that this <code>Session</code> gives
 * them that permission.
 * <p>
 * The new <code>Session</code> is tied to a new <code>Workspace</code>
 * instance. In other words, <code>Workspace</code> instances are not
 * re-used. However, the <code>Workspace</code> instance returned represents
 * the same actual persistent workspace entity in the repository as is
 * represented by the <code>Workspace</code> object tied to this
 * <code>Session</code>.
 * @param credentials A <code>Credentials</code> object
 * @return a <code>Session</code> object
 * @throws LoginException if the current session does not have sufficient access to perform the operation.
 * @throws RepositoryException if another error occurs.
 */
export function impersonate(credentials: Credentials): Session;

/**
 * Returns the node specified by the given UUID. Only applies to nodes that
 * expose a UUID, in other words, those of mixin node type
 * <code>mix:referenceable</code>
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param uuid A universally unique identifier.
 * @return A <code>Node</code>.
 * @throws ItemNotFoundException if the specified UUID is not found.
 * @throws RepositoryException if another error occurs.
 * @deprecated As of JCR 2.0, {@link #getNodeByIdentifier(String)} should be used instead.
 */
export function getNodeByUUID(uuid: string): Node;

/**
 * Returns the node specified by the given identifier. Applies to both
 * referenceable and non-referenceable nodes.
 * @param id An identifier.
 * @return A <code>Node</code>.
 * @throws ItemNotFoundException if no node with the specified identifier exists or if this <code>Session</code> does not have read access to the node with the specified identifier.
 * @throws RepositoryException if another error occurs.
 * @since JCR 2.0
 */
export function getNodeByIdentifier(id: string): Node;

/**
 * Returns the node at the specified absolute path in the workspace. If no
 * such node exists, then it returns the property at the specified path.
 * <p>
 * This method should only be used if the application does not know whether
 * the item at the indicated path is property or node. In cases where the
 * application has this information, either {@link #getNode} or {@link
 * #getProperty} should be used, as appropriate. In many repository
 * implementations the node and property-specific methods are likely to be
 * more efficient than <code>getItem</code>.
 * @param absPath An absolute path.
 * @return the specified <code>Item</code>.
 * @throws PathNotFoundException if no accessible item is found at the specified path.
 * @throws RepositoryException if another error occurs.
 */
export function getItem(absPath: string): Item;

/**
 * Returns the node at the specified absolute path in the workspace.
 * @param absPath An absolute path.
 * @return the specified <code>Node</code>.
 * @throws PathNotFoundException If no accessible node is found at the specifed path.
 * @throws RepositoryException If another error occurs.
 * @since JCR 2.0
 */
export function getNode(absPath: string): Node;

/**
 * Returns the property at the specified absolute path in the workspace.
 * @param absPath An absolute path.
 * @return the specified <code>Property</code>.
 * @throws PathNotFoundException If no accessible property is found at the specified path.
 * @throws RepositoryException if another error occurs.
 * @since JCR 2.0
 */
export function getProperty(absPath: string): Property;

/**
 * Returns <code>true</code> if an item exists at <code>absPath</code> and
 * this <code>Session</code> has read access to it; otherwise returns
 * <code>false</code>.
 * @param absPath An absolute path.
 * @return a <code>boolean</code>
 * @throws RepositoryException if <code>absPath</code> is not a well-formed absolute path.
 */
export function itemExists(absPath: string): boolean;

/**
 * Returns <code>true</code> if a node exists at <code>absPath</code> and
 * this <code>Session</code> has read access to it; otherwise returns
 * <code>false</code>.
 * @param absPath An absolute path.
 * @return a <code>boolean</code>
 * @throws RepositoryException if <code>absPath</code> is not a well-formed absolute path.
 * @since JCR 2.0
 */
export function nodeExists(absPath: string): boolean;

/**
 * Returns <code>true</code> if a property exists at <code>absPath</code>
 * and this <code>Session</code> has read access to it; otherwise returns
 * <code>false</code>.
 * @param absPath An absolute path.
 * @return a <code>boolean</code>
 * @throws RepositoryException if <code>absPath</code> is not a well-formed absolute path.
 * @since JCR 2.0
 */
export function propertyExists(absPath: string): boolean;

/**
 * Moves the node at <code>srcAbsPath</code> (and its entire subgraph) to
 * the new location at <code>destAbsPath</code>.
 * <p>
 * This is a session-write method and therefor requires a <code>save</code>
 * to dispatch the change.
 * <p>
 * The identifiers of referenceable nodes <i>must not</i> be changed by a
 * <code>move</code>. The identifiers of non-referenceable nodes <i>may</i>
 * change.
 * <p>
 * A <code>ConstraintViolationException</code> is thrown either immediately,
 * on dispatch or on persist, if performing this operation would violate a
 * node type or implementation-specific constraint. Implementations may
 * differ on when this validation is performed.
 * <p>
 * As well, a <code>ConstraintViolationException</code> will be thrown on
 * persist if an attempt is made to separately <code>save</code> either the
 * source or destination node.
 * <p>
 * Note that this behavior differs from that of {@link Workspace#move},
 * which is a workspace-write method and therefore immediately dispatches
 * changes.
 * <p>
 * The <code>destAbsPath</code> provided must not have an index on its final
 * element. If ordering is supported by the node type of the parent node of
 * the new location, then the newly moved node is appended to the end of the
 * child node list.
 * <p>
 * This method cannot be used to move an individual property by itself. It
 * moves an entire node and its subgraph.
 * <p>
 * If no node exists at <code>srcAbsPath</code> or no node exists one level
 * above <code>destAbsPath</code> (in other words, there is no node that
 * will serve as the parent of the moved item) then a
 * <code>PathNotFoundException</code> is thrown either immediately, on
 * dispatch or on persist. Implementations may differ on when this
 * validation is performed.
 * <p>
 * An <code>ItemExistsException</code> is thrown either immediately, on
 * dispatch or on persist, if a node already exists at
 * <code>destAbsPath</code> and same-name siblings are not allowed.
 * Implementations may differ on when this validation is performed.
 * <p>
 * Note that if a property already exists at <code>destAbsPath</code>, the
 * operation succeeds, since a node may have a child node and property with
 * the same name.
 * <p>
 * A <code>VersionException</code> is thrown either immediately, on dispatch
 * or on persist, if the parent node of <code>destAbsPath</code> or the
 * parent node of <code>srcAbsPath</code> is read-only due to a checked-in node.
 * Implementations may differ on when this validation is performed.
 * <p>
 * A <code>LockException</code> is thrown either immediately, on dispatch or
 * on persist, if a lock prevents the <code>move</code>. Implementations may
 * differ on when this validation is performed.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param srcAbsPath the root of the subgraph to be moved.
 * @param destAbsPath the location to which the subgraph is to be moved.
 * @throws ItemExistsException if a node already exists at <code>destAbsPath</code> and same-name siblings are not allowed.
 * @throws PathNotFoundException if either <code>srcAbsPath</code> or <code>destAbsPath</code> cannot be found and this implementation performs this validation immediately.
 * @throws VersionException if the parent node of <code>destAbsPath</code> or the parent node of <code>srcAbsPath</code> is versionable and checked-in, or or is non-versionable and its nearest versionable ancestor is checked-in and this implementation performs this validation immediately.
 * @throws ConstraintViolationException if a node-type or other constraint violation is detected immediately and this implementation performs this validation immediately.
 * @throws LockException if the move operation would violate a lock and this implementation performs this validation immediately.
 * @throws RepositoryException if the last element of <code>destAbsPath</code> has an index or if another error occurs.
 */
export function move(srcAbsPath: string, destAbsPath: string): void;

/**
 * Removes the specified item and its subgraph.
 * <p>
 * This is a session-write method and therefore requires a <code>save</code>
 * in order to dispatch the change.
 * <p>
 * If a node with same-name siblings is removed, this decrements by one the
 * indices of all the siblings with indices greater than that of the removed
 * node. In other words, a removal compacts the array of same-name siblings
 * and causes the minimal re-numbering required to maintain the original
 * order but leave no gaps in the numbering.
 * <p>
 * A <code>ReferentialIntegrityException</code> will be thrown on dispatch
 * if the specified item or an item in its subgraph is currently the target
 * of a <code>REFERENCE</code> property located in this workspace but
 * outside the specified item's subgraph and the current
 * <code>Session</code> has read access to that <code>REFERENCE</code>
 * property.
 * <p>
 * A <code>ConstraintViolationException</code> will be thrown either
 * immediately, on dispatch or on persist, if removing the specified item
 * would violate a node type or implementation-specific constraint.
 * Implementations may differ on when this validation is performed.
 * <p>
 * A <code>VersionException</code> will be thrown either immediately, on
 * dispatch or on persist, if the parent node of the specified item is
 * read-only due to a checked-in node. Implementations may differ on when
 * this validation is performed.
 * <p>
 * A <code>LockException</code> will be thrown either immediately, on
 * dispatch or on persist, if a lock prevents the removal of the specified
 * item. Implementations may differ on when this validation is performed.
 * <p>
 * A <code>PathNotFoundException</code> will be thrown either immediately,
 * on dispatch or on persist, if no accessible item is found at at
 * <code>absPath</code>.
 * <p>
 * A <code>AccessDeniedException</code> will be thrown either immediately,
 * on dispatch or on persist, if the specified item or an item in its
 * subgraph is currently the target of a <code>REFERENCE</code> property
 * located in this workspace but outside the specified item's subgraph and
 * the current <code>Session</code> <i>does not</i> have read access to that
 * <code>REFERENCE</code> property.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param absPath the absolute path of the item to be removed.
 * @throws VersionException if the parent node of the item at absPath is read-only due to a checked-in node and this implementation performs this validation immediately.
 * @throws LockException if a lock prevents the removal of the specified item and this implementation performs this validation immediately.
 * @throws ConstraintViolationException if removing the specified item would violate a node type or implementation-specific constraint and this implementation performs this validation immediately.
 * @throws PathNotFoundException if no accessible item is found at <code>absPath</code> and this implementation performs this validation immediately.
 * @throws AccessDeniedException if the specified item or an item in its subgraph is currently the target of a <code>REFERENCE</code> property located in this workspace but outside the specified item's subgraph and the current <code>Session</code> <i>does not</i> have read access to that <code>REFERENCE</code> property and this implementation performs this validation immediately.
 * @throws RepositoryException if another error occurs.
 * @see Item#remove()
 * @since JCR 2.0
 */
export function removeItem(absPath: string): void;

/**
 * Validates all pending changes currently recorded in this
 * <code>Session</code>. If validation of <i>all</i> pending changes
 * succeeds, then this change information is cleared from the
 * <code>Session</code>.
 * <p>
 * If the <code>save</code> occurs outside a transaction, the changes are
 * <i>dispatched</i> and <i>persisted</i>. Upon being persisted the changes
 * become potentially visible to other <code>Sessions</code> bound to the
 * same persitent workspace.
 * <p>
 * If the <code>save</code> occurs within a transaction, the changes are
 * <i>dispatched</i> but are not <i>persisted</i> until the transaction is
 * committed.
 * <p>
 * If validation fails, then no pending changes are dispatched and they
 * remain recorded on the <code>Session</code>. There is no best-effort or
 * partial <code>save</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @throws AccessDeniedException if any of the changes to be persisted would violate the access privileges of the this <code>Session</code>. Also thrown if any of the changes to be persisted would cause the removal of a node that is currently referenced by a <code>REFERENCE</code> property that this Session <i>does not</i> have read access to.
 * @throws ItemExistsException if any of the changes to be persisted would be prevented by the presence of an already existing item in the workspace.
 * @throws ConstraintViolationException if any of the changes to be persisted would violate a node type or restriction. Additionally, a repository may use this exception to enforce implementation- or configuration-dependent restrictions.
 * @throws InvalidItemStateException if any of the changes to be persisted conflicts with a change already persisted through another session and the implementation is such that this conflict can only be detected at <code>save</code>-time and therefore was not detected earlier, at change-time.
 * @throws ReferentialIntegrityException if any of the changes to be persisted would cause the removal of a node that is currently referenced by a <code>REFERENCE</code> property that this <code>Session</code> has read access to.
 * @throws VersionException if the <code>save</code> would make a result in a change to persistent storage that would violate the read-only status of a checked-in node.
 * @throws LockException if the <code>save</code> would result in a change to persistent storage that would violate a lock.
 * @throws NoSuchNodeTypeException if the <code>save</code> would result in the addition of a node with an unrecognized node type.
 * @throws RepositoryException if another error occurs.
 */
export function save(): void;

/**
 * If <code>keepChanges</code> is <code>false</code>, this method discards
 * all pending changes currently recorded in this <code>Session</code> and
 * returns all items to reflect the current saved state. Outside a
 * transaction this state is simply the current state of persistent storage.
 * Within a transaction, this state will reflect persistent storage as
 * modified by changes that have been saved but not yet committed.
 * <p>
 * If <code>keepChanges</code> is true then pending change are not discarded
 * but items that do not have changes pending have their state refreshed to
 * reflect the current saved state, thus revealing changes made by other
 * sessions.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param keepChanges a boolean
 * @throws RepositoryException if an error occurs.
 */
export function refresh(keepChanges: boolean): void;

/**
 * Returns <code>true</code> if this session holds pending (that is,
 * unsaved) changes; otherwise returns <code>false</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @return a boolean
 * @throws RepositoryException if an error occurs
 */
export function hasPendingChanges(): boolean;

/**
 * This method returns a <code>ValueFactory</code> that is used to create
 * <code>Value</code> objects for use when setting repository properties.
 * @since Sitevision 3.0
 * @return a <code>ValueFactory</code>
 * @throws UnsupportedRepositoryOperationException if writing to the repository is not supported.
 * @throws RepositoryException if another error occurs.
 */
export function getValueFactory(): ValueFactory;

/**
 * Returns <code>true</code> if this <code>Session</code> has permission to
 * perform the specified actions at the specified <code>absPath</code> and
 * <code>false</code> otherwise.
 * <p>
 * The <code>actions</code> parameter is a comma separated list of action
 * strings. The following action strings are defined: <ul> <li> {@link
 * #ACTION_ADD_NODE add_node}: If <code>hasPermission(path,
 * "add_node")</code> returns <code>true</code>, then this
 * <code>Session</code> has permission to add a node at <code>path</code>.
 * </li> <li> {@link #ACTION_SET_PROPERTY set_property}: If
 * <code>hasPermission(path, "set_property")</code> returns
 * <code>true</code>, then this <code>Session</code> has permission to set
 * (add or change) a property at <code>path</code>. </li> <li> {@link
 * #ACTION_REMOVE remove}: If <code>hasPermission(path,
 * "remove")</code> returns <code>true</code>, then this
 * <code>Session</code> has permission to remove an item at
 * <code>path</code>. </li> <li> {@link #ACTION_READ read}: If
 * <code>hasPermission(path, "read")</code> returns <code>true</code>, then
 * this <code>Session</code> has permission to retrieve (and read the value
 * of, in the case of a property) an item at <code>path</code>. </li> </ul>
 * When more than one action is specified in the <code>actions</code>
 * parameter, this method will only return <code>true</code> if this
 * <code>Session</code> has permission to perform <i>all</i> of the listed
 * actions at the specified path.
 * <p>
 * The information returned through this method will only reflect the access
 * control status (both JCR defined and implementation-specific) and not
 * other restrictions that may exist, such as node type constraints. For
 * example, even though <code>hasPermission</code> may indicate that a
 * particular <code>Session</code> may add a property at
 * <code>/A/B/C</code>, the node type of the node at <code>/A/B</code> may
 * prevent the addition of a property called <code>C</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param absPath an absolute path.
 * @param actions a comma separated list of action strings.
 * @return <code>true</code> if this <code>Session</code> has permission to perform the specified actions at the specified <code>absPath</code>.
 * @throws RepositoryException if an error occurs.
 * @since JCR 2.0
 */
export function hasPermission(absPath: string, actions: string): boolean;

/**
 * Determines whether this <code>Session</code> has permission to perform
 * the specified actions at the specified <code>absPath</code>. This method
 * quietly returns if the access request is permitted, or throws a suitable
 * <code>java.security.AccessControlException</code> otherwise.
 * <p>
 * The <code>actions</code> parameter is a comma separated list of action
 * strings. The following action strings are defined: <ul> <li> {@link
 * #ACTION_ADD_NODE add_node}: If <code>checkPermission(path,
 * "add_node")</code> returns quietly, then this <code>Session</code> has
 * permission to add a node at <code>path</code>, otherwise permission is
 * denied. </li> <li> {@link #ACTION_SET_PROPERTY set_property}:
 * If <code>checkPermission(path, "set_property")</code> returns quietly,
 * then this <code>Session</code> has permission to set (add or change) a
 * property at <code>path</code>, otherwise permission is denied. </li> <li>
 * {@link #ACTION_REMOVE remove}: If <code>checkPermission(path,
 * "remove")</code> returns quietly, then this <code>Session</code> has
 * permission to remove an item at <code>path</code>, otherwise permission
 * is denied. </li> <li> {@link #ACTION_READ read}: If
 * <code>checkPermission(path, "read")</code> returns quietly, then this
 * <code>Session</code> has permission to retrieve (and read the value of,
 * in the case of a property) an item at <code>path</code>, otherwise
 * permission is denied. </li> </ul> When more than one action is specified
 * in the <code>actions</code> parameter, this method will only return
 * quietly if this <code>Session</code> has permission to perform <i>all</i>
 * of the listed actions at the specified path.
 * <p>
 * The information returned through this method will only reflect access
 * control status (both JCR defined and implementation-specific) and not
 * other restrictions that may exist, such as node type constraints. For
 * example, even though <code>checkPermission</code> may indicate that a
 * particular <code>Session</code> may add a property at
 * <code>/A/B/C</code>, the node type of the node at <code>/A/B</code> may
 * prevent the addition of a property called <code>C</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param absPath an absolute path.
 * @param actions a comma separated list of action strings.
 * @throws java.security.AccessControlException If permission is denied.
 * @throws RepositoryException if another error occurs.
 */
export function checkPermission(absPath: string, actions: string): void;

/**
 * Checks whether an operation can be performed given as much context as can
 * be determined by the repository, including: <ul> <li> Permissions granted
 * to the current user, including access control privileges. </li> <li>
 * Current state of the target object (reflecting locks, checkin/checkout
 * status, retention and hold status etc.). </li> <li> Repository
 * capabilities. </li> <li> Node type-enforced restrictions. </li> <li>
 * Repository configuration-specific restrictions. </li> </ul> The
 * implementation of this method is best effort: returning
 * <code>false</code> guarantees that the operation cannot be performed, but
 * returning <code>true</code> does not guarantee the opposite. The
 * repository implementation should use this to give priority to performance
 * over completeness. An exception should be thrown only for important
 * failures such as loss of connectivity to the back-end.
 * <p>
 * The implementation of this method is best effort: returning false
 * guarantees that the operation cannot be performed, but returning true
 * does not guarantee the opposite.
 * <p>
 * The <code>methodName</code> parameter identifies the method in question
 * by its name as defined in the Javadoc.
 * <p>
 * The <code>target</code> parameter identifies the object on which the
 * specified method is called.
 * <p>
 * The <code>arguments</code> parameter contains an array of type
 * <code>Object</code> object consisting of the arguments to be passed
 * to the method in question. In cases where a parameter is a Java
 * primitive type it must be converted to its corresponding Java object form.
 * <p>
 * For example, given a <code>Session</code> <code>S</code> and
 * <code>Node</code> <code>N</code> then
 * <p>
 * <code>boolean b = S.hasCapability("addNode", N, new Object[]{"foo"});</code>
 * <p>
 * will result in <code>b == false</code> if a child node called <code>foo</code> cannot be added to
 * the node <code>N</code> within the session <code>S</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param methodName the nakme of the method.
 * @param target the target object of the operation.
 * @param arguments the arguments of the operation.
 * @return <code>false</code> if the operation cannot be performed, <code>true</code> if the operation can be performed or if the repository cannot determine whether the operation can be performed.
 * @throws RepositoryException if an error occurs
 * @since JCR 2.0
 */
export function hasCapability(
  methodName: string,
  target: unknown,
  arguments: unknown
): boolean;

/**
 * Returns an <code>org.xml.sax.ContentHandler</code> which is used to push
 * SAX events to the repository. If the incoming XML (in the form of SAX
 * events) does not appear to be a JCR <i>system view</i> XML document then
 * it is interpreted as a JCR <i>document view</i> XML document.
 * <p>
 * The incoming XML is deserialized into a subgraph of items immediately
 * below the node at <code>parentAbsPath</code>.
 * <p>
 * This method simply returns the <code>ContentHandler</code> without
 * altering the state of the session; the actual deserialization to the
 * session transient space is done through the methods of the
 * <code>ContentHandler</code>. Invalid XML data will cause the
 * <code>ContentHandler</code> to throw a <code>SAXException</code>.
 * <p>
 * As SAX events are fed into the <code>ContentHandler</code>, the tree of
 * new items is built in the transient storage of the session. In order to
 * dispatch the new content, <code>save</code> must be called. See {@link
 * Workspace#getImportContentHandler} for a workspace-write version of this
 * method.
 * <p>
 * The flag <code>uuidBehavior</code> governs how the identifiers of
 * incoming nodes are handled: <ul> <li> {@link ImportUUIDBehavior#IMPORT_UUID_CREATE_NEW}:
 * Incoming identifiers nodes are added in the same way that new node is
 * added with <code>Node.addNode</code>. That is, they are either assigned
 * newly created identifiers upon addition or upon <code>save</code>
 * (depending on the implementation). In either case, identifier collisions
 * will not occur. </li> <li> {@link ImportUUIDBehavior#IMPORT_UUID_COLLISION_REMOVE_EXISTING}:
 * If an incoming node has the same identifier as a node already existing in
 * the workspace then the already existing node (and its subgraph) is
 * removed from wherever it may be in the workspace before the incoming node
 * is added. Note that this can result in nodes "disappearing" from
 * locations in the workspace that are remote from the location to which the
 * incoming subgraph is being written. Both the removal and the new addition
 * will be persisted on <code>save</code>. </li> <li> {@link
 * ImportUUIDBehavior#IMPORT_UUID_COLLISION_REPLACE_EXISTING}: If an
 * incoming node has the same identifier as a node already existing in the
 * workspace, then the already-existing node is replaced by the incoming
 * node in the same position as the existing node. Note that this may result
 * in the incoming subgraph being disaggregated and "spread around" to
 * different locations in the workspace. In the most extreme case this
 * behavior may result in no node at all being added as child of
 * <code>parentAbsPath</code>. This will occur if the topmost element of the
 * incoming XML has the same identifier as an existing node elsewhere in the
 * workspace. The change will be persisted on <code>save</code>. </li> <li>
 * {@link ImportUUIDBehavior#IMPORT_UUID_COLLISION_THROW}: If an incoming
 * node has the same identifier as a node already existing in the workspace
 * then a <code>SAXException</code> is thrown by the
 * <code>ContentHandler</code> during deserialization. </li> </ul> Unlike
 * <code>Workspace.getImportContentHandler</code>, this method does not
 * necessarily enforce all node type constraints during deserialization.
 * Those that would be immediately enforced in a session-write method
 * (<code>Node.addNode</code>, <code>Node.setProperty</code> etc.) of this
 * implementation cause the returned <code>ContentHandler</code> to throw an
 * immediate <code>SAXException</code> during deserialization. All other
 * constraints are checked on save, just as they are in normal write
 * operations. However, which node type constraints are enforced depends
 * upon whether node type information in the imported data is respected, and
 * this is an implementation-specific issue.
 * <p>
 * A <code>SAXException</code> will also be thrown by the returned
 * <code>ContentHandler</code> during deserialization if
 * <code>uuidBehavior</code> is set to <code>IMPORT_UUID_COLLISION_REMOVE_EXISTING</code>
 * and an incoming node has the same identifier as the node at
 * <code>parentAbsPath</code> or one of its ancestors.
 * <p>
 * A <code>PathNotFoundException</code> is thrown either immediately, on
 * dispatch or on persist, if no node exists at <code>parentAbsPath</code>.
 * Implementations may differ on when this validation is performed
 * <p>
 * A <code>ConstraintViolationException</code> is thrown either immediately,
 * on dispatch or on persist, if the new subgraph cannot be added to the
 * node at <code>parentAbsPath</code> due to node-type or other
 * implementation-specific constraints, and this can be determined before
 * the first SAX event is sent. Implementations may differ on when this
 * validation is performed.
 * <p>
 * A <code>VersionException</code> is thrown either immediately, on dispatch
 * or on persist, if the node at <code>parentAbsPath</code> is read-only due
 * to a check-in. Implementations may differ on when this validation is
 * performed.
 * <p>
 * A <code>LockException</code> is thrown either immediately, on dispatch or
 * on persist, if a lock prevents the addition of the subgraph.
 * Implementations may differ on when this validation is performed.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param parentAbsPath the absolute path of a node under which (as child) the imported subgraph will be built.
 * @param uuidBehavior a four-value flag that governs how incoming identifiers are handled.
 * @return an org.xml.sax.ContentHandler whose methods may be called to feed SAX events into the deserializer.
 * @throws PathNotFoundException if no node exists at <code>parentAbsPath</code> and this implementation performs this validation immediately.
 * @throws ConstraintViolationException if the new subgraph cannot be added to the node at <code>parentAbsPath</code> due to node-type or other implementation-specific constraints, and this implementation performs this validation immediately.
 * @throws VersionException if the node at <code>parentAbsPath</code> is read-only due to a checked-in node and this implementation performs this validation immediately.
 * @throws LockException if a lock prevents the addition of the subgraph and this implementation performs this validation immediately.
 * @throws RepositoryException if another error occurs.
 */
export function getImportContentHandler(
  parentAbsPath: string,
  uuidBehavior: number
): unknown;

/**
 * Deserializes an XML document and adds the resulting item subgraph as a
 * child of the node at <code>parentAbsPath</code>.
 * <p>
 * If the incoming XML stream does not appear to be a JCR <i>system view</i>
 * XML document then it is interpreted as a <i>document view</i> XML
 * document.
 * <p>
 * The passed <code>InputStream</code> is closed before this method returns
 * either normally or because of an exception.
 * <p>
 * The tree of new items is built in the transient storage of the
 * <code>Session</code>. In order to persist the new content,
 * <code>save</code> must be called. The advantage of this
 * through-the-session method is that (depending on what constraint checks
 * the implementation leaves until <code>save</code>) structures that
 * violate node type constraints can be imported, fixed and then saved. The
 * disadvantage is that a large import will result in a large cache of
 * pending nodes in the session. See {@link Workspace#importXML} for a
 * version of this method that does not go through the
 * <code>Session</code>.
 * <p>
 * The flag <code>uuidBehavior</code> governs how the identifiers of
 * incoming nodes are handled. There are four options: <ul> <li> {@link
 * ImportUUIDBehavior#IMPORT_UUID_CREATE_NEW}: Incoming nodes are added in
 * the same way that new node is added with <code>Node.addNode</code>. That
 * is, they are either assigned newly created identifiers upon addition or
 * upon <code>save</code> (depending on the implementation, see <i>4.9.1.1
 * When Identifiers are Assigned</i> in the specification). In either case,
 * identifier collisions will not occur. </li> <li> {@link
 * ImportUUIDBehavior#IMPORT_UUID_COLLISION_REMOVE_EXISTING}: If an incoming
 * node has the same identifier as a node already existing in the workspace
 * then the already existing node (and its subgraph) is removed from
 * wherever it may be in the workspace before the incoming node is added.
 * Note that this can result in nodes "disappearing" from locations in the
 * workspace that are remote from the location to which the incoming
 * subgraph is being written. Both the removal and the new addition will be
 * dispatched on <code>save</code>. </li> <li> {@link
 * ImportUUIDBehavior#IMPORT_UUID_COLLISION_REPLACE_EXISTING}: If an
 * incoming node has the same identifier as a node already existing in the
 * workspace, then the already-existing node is replaced by the incoming
 * node in the same position as the existing node. Note that this may result
 * in the incoming subgraph being disaggregated and "spread around" to
 * different locations in the workspace. In the most extreme case this
 * behavior may result in no node at all being added as child of
 * <code>parentAbsPath</code>. This will occur if the topmost element of the
 * incoming XML has the same identifier as an existing node elsewhere in the
 * workspace. The change will be dispatched on <code>save</code>. </li> <li>
 * {@link ImportUUIDBehavior#IMPORT_UUID_COLLISION_THROW}: If an incoming
 * node has the same identifier as a node already existing in the workspace
 * then an <code>ItemExistsException</code> is thrown. </li> </ul> Unlike
 * {@link Workspace#importXML}, this method does not necessarily enforce all
 * node type constraints during deserialization. Those that would be
 * immediately enforced in a normal write method (<code>Node.addNode</code>,
 * <code>Node.setProperty</code> etc.) of this implementation cause an
 * immediate <code>ConstraintViolationException</code> during
 * deserialization. All other constraints are checked on <code>save</code>,
 * just as they are in normal write operations. However, which node type
 * constraints are enforced depends upon whether node type information in
 * the imported data is respected, and this is an implementation-specific
 * issue.
 * <p>
 * A <code>ConstraintViolationException</code> will also be thrown
 * immediately if <code>uuidBehavior</code> is set to
 * <code>IMPORT_UUID_COLLISION_REMOVE_EXISTING</code> and an incoming node
 * has the same identifier as the node at <code>parentAbsPath</code> or one
 * of its ancestors.
 * <p>
 * A <code>PathNotFoundException</code> is thrown either immediately, on
 * dispatch or on persist, if no node exists at <code>parentAbsPath</code>.
 * Implementations may differ on when this validation is performed
 * <p>
 * A <code>ConstraintViolationException</code> is thrown either immediately,
 * on dispatch or on persist, if the new subgraph cannot be added to the
 * node at <code>parentAbsPath</code> due to node-type or other
 * implementation-specific constraints. Implementations may differ on when
 * this validation is performed.
 * <p>
 * A <code>VersionException</code> is thrown either immediately, on dispatch
 * or on persist, if the node at <code>parentAbsPath</code> is read-only due
 * to a check-in. Implementations may differ on when this validation is
 * performed.
 * <p>
 * A <code>LockException</code> is thrown either immediately, on dispatch or
 * on persist, if a lock prevents the addition of the subgraph.
 * Implementations may differ on when this validation is performed.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param parentAbsPath the absolute path of the node below which the deserialized subgraph is added.
 * @param in The <code>Inputstream</code> from which the XML to be deserialized is read.
 * @param uuidBehavior a four-value flag that governs how incoming identifiers are handled.
 * @throws java.io.IOException if an error during an I/O operation occurs.
 * @throws PathNotFoundException if no node exists at <code>parentAbsPath</code> and this implementation performs this validation immediately.
 * @throws ItemExistsException if deserialization would overwrite an existing item and this implementation performs this validation immediately.
 * @throws ConstraintViolationException if a node type or other implementation-specific constraint is violated that would be checked on a session-write method or if <code>uuidBehavior</code> is set to <code>IMPORT_UUID_COLLISION_REMOVE_EXISTING</code> and an incoming node has the same UUID as the node at <code>parentAbsPath</code> or one of its ancestors.
 * @throws VersionException if the node at <code>parentAbsPath</code> is read-only due to a checked-in node and this implementation performs this validation immediately.
 * @throws InvalidSerializedDataException if incoming stream is not a valid XML document.
 * @throws LockException if a lock prevents the addition of the subgraph and this implementation performs this validation immediately.
 * @throws RepositoryException if another error occurs.
 */
export function importXML(
  parentAbsPath: string,
  _in: unknown,
  uuidBehavior: number
): void;

/**
 * Serializes the node (and if <code>noRecurse</code> is <code>false</code>,
 * the whole subgraph) at <code>absPath</code> into a series of SAX events
 * by calling the methods of the supplied <code>org.xml.sax.ContentHandler</code>.
 * The resulting XML is in the system view form. Note that
 * <code>absPath</code> must be the path of a node, not a property.
 * <p>
 * If <code>skipBinary</code> is true then any properties of
 * <code>PropertyType.BINARY</code> will be serialized as if they are empty.
 * That is, the existence of the property will be serialized, but its
 * content will not appear in the serialized output (the
 * <code>&lt;sv:value&gt;</code> element will have no content). Note that in
 * the case of multi-value <code>BINARY</code> properties, the number of
 * values in the property will be reflected in the serialized output, though
 * they will all be empty. If <code>skipBinary</code> is false then the
 * actual value(s) of each <code>BINARY</code> property is recorded using
 * Base64 encoding.
 * <p>
 * If <code>noRecurse</code> is true then only the node at
 * <code>absPath</code> and its properties, but not its child nodes, are
 * serialized. If <code>noRecurse</code> is <code>false</code> then the
 * entire subgraph rooted at <code>absPath</code> is serialized.
 * <p>
 * If the user lacks read access to some subsection of the specified tree,
 * that section simply does not get serialized, since, from the user's point
 * of view, it is not there.
 * <p>
 * The serialized output will reflect the state of the current workspace as
 * modified by the state of this <code>Session</code>. This means that
 * pending changes (regardless of whether they are valid according to node
 * type constraints) and all namespace mappings in the namespace registry,
 * as modified by the current session-mappings, are reflected in the
 * output.
 * <p>
 * The output XML will be encoded in UTF-8.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param absPath The path of the root of the subgraph to be serialized. This must be the path to a node, not a property
 * @param contentHandler The <code>org.xml.sax.ContentHandler</code> to which the SAX events representing the XML serialization of the subgraph will be output.
 * @param skipBinary A <code>boolean</code> governing whether binary properties are to be serialized.
 * @param noRecurse A <code>boolean</code> governing whether the subgraph at absPath is to be recursed.
 * @throws PathNotFoundException if no node exists at <code>absPath</code>.
 * @throws org.xml.sax.SAXException if an error occurs while feeding events to the <code>org.xml.sax.ContentHandler</code>.
 * @throws RepositoryException if another error occurs.
 */
export function exportSystemView(
  absPath: string,
  contentHandler: unknown,
  skipBinary: boolean,
  noRecurse: boolean
): void;

/**
 * Serializes the node (and if <code>noRecurse</code> is <code>false</code>,
 * the whole subgraph) at <code>absPath</code> as an XML stream and outputs
 * it to the supplied <code>OutputStream</code>. The resulting XML is in the
 * system view form. Note that <code>absPath</code> must be the path of a
 * node, not a property.
 * <p>
 * If <code>skipBinary</code> is true then any properties of
 * <code>PropertyType.BINARY</code> will be serialized as if they are empty.
 * That is, the existence of the property will be serialized, but its
 * content will not appear in the serialized output (the
 * <code>&lt;sv:value&gt;</code> element will have no content). Note that in
 * the case of multi-value <code>BINARY</code> properties, the number of
 * values in the property will be reflected in the serialized output, though
 * they will all be empty. If <code>skipBinary</code> is false then the
 * actual value(s) of each <code>BINARY</code> property is recorded using
 * Base64 encoding.
 * <p>
 * If <code>noRecurse</code> is true then only the node at
 * <code>absPath</code> and its properties, but not its child nodes, are
 * serialized. If <code>noRecurse</code> is <code>false</code> then the
 * entire subgraph rooted at <code>absPath</code> is serialized.
 * <p>
 * If the user lacks read access to some subsection of the specified tree,
 * that section simply does not get serialized, since, from the user's point
 * of view, it is not there.
 * <p>
 * The serialized output will reflect the state of the current workspace as
 * modified by the state of this <code>Session</code>. This means that
 * pending changes (regardless of whether they are valid according to node
 * type constraints) and all namespace mappings in the namespace registry,
 * as modified by the current session-mappings, are reflected in the
 * output.
 * <p>
 * The output XML will be encoded in UTF-8.
 * <p>
 * It is the responsibility of the caller to close the passed
 * <code>OutputStream</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param absPath The path of the root of the subgraph to be serialized. This must be the path to a node, not a property
 * @param out The <code>OutputStream</code> to which the XML serialization of the subgraph will be output.
 * @param skipBinary A <code>boolean</code> governing whether binary properties are to be serialized.
 * @param noRecurse A <code>boolean</code> governing whether the subgraph at absPath is to be recursed.
 * @throws PathNotFoundException if no node exists at <code>absPath</code>.
 * @throws IOException if an error during an I/O operation occurs.
 * @throws RepositoryException if another error occurs.
 */
export function exportSystemView(
  absPath: string,
  out: unknown,
  skipBinary: boolean,
  noRecurse: boolean
): void;

/**
 * Serializes the node (and if <code>noRecurse</code> is <code>false</code>,
 * the whole subgraph) at <code>absPath</code> into a series of SAX events
 * by calling the methods of the supplied <code>org.xml.sax.ContentHandler</code>.
 * The resulting XML is in the document view form. Note that
 * <code>absPath</code> must be the path of a node, not a property.
 * <p>
 * If <code>skipBinary</code> is true then any properties of
 * <code>PropertyType.BINARY</code> will be serialized as if they are empty.
 * That is, the existence of the property will be serialized, but its
 * content will not appear in the serialized output (the value of the
 * attribute will be empty). If <code>skipBinary</code> is false then the
 * actual value(s) of each <code>BINARY</code> property is recorded using
 * Base64 encoding.
 * <p>
 * If <code>noRecurse</code> is true then only the node at
 * <code>absPath</code> and its properties, but not its child nodes, are
 * serialized. If <code>noRecurse</code> is <code>false</code> then the
 * entire subgraph rooted at <code>absPath</code> is serialized.
 * <p>
 * If the user lacks read access to some subsection of the specified tree,
 * that section simply does not get serialized, since, from the user's point
 * of view, it is not there.
 * <p>
 * The serialized output will reflect the state of the current workspace as
 * modified by the state of this <code>Session</code>. This means that
 * pending changes (regardless of whether they are valid according to node
 * type constraints) and all namespace mappings in the namespace registry,
 * as modified by the current session-mappings, are reflected in the
 * output.
 * <p>
 * The output XML will be encoded in UTF-8.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param absPath The path of the root of the subgraph to be serialized. This must be the path to a node, not a property
 * @param contentHandler The <code>org.xml.sax.ContentHandler</code> to which the SAX events representing the XML serialization of the subgraph will be output.
 * @param skipBinary A <code>boolean</code> governing whether binary properties are to be serialized.
 * @param noRecurse A <code>boolean</code> governing whether the subgraph at absPath is to be recursed.
 * @throws PathNotFoundException if no node exists at <code>absPath</code>.
 * @throws org.xml.sax.SAXException if an error occurs while feeding events to the <code>org.xml.sax.ContentHandler</code>.
 * @throws RepositoryException if another error occurs.
 */
export function exportDocumentView(
  absPath: string,
  contentHandler: unknown,
  skipBinary: boolean,
  noRecurse: boolean
): void;

/**
 * Serializes the node (and if <code>noRecurse</code> is <code>false</code>,
 * the whole subgraph) at <code>absPath</code> as an XML stream and outputs
 * it to the supplied <code>OutputStream</code>. The resulting XML is in the
 * document view form. Note that <code>absPath</code> must be the path of a
 * node, not a property.
 * <p>
 * If <code>skipBinary</code> is true then any properties of
 * <code>PropertyType.BINARY</code> will be serialized as if they are empty.
 * That is, the existence of the property will be serialized, but its
 * content will not appear in the serialized output (the value of the
 * attribute will be empty). If <code>skipBinary</code> is false then the
 * actual value(s) of each <code>BINARY</code> property is recorded using
 * Base64 encoding.
 * <p>
 * If <code>noRecurse</code> is true then only the node at
 * <code>absPath</code> and its properties, but not its child nodes, are
 * serialized. If <code>noRecurse</code> is <code>false</code> then the
 * entire subgraph rooted at <code>absPath</code> is serialized.
 * <p>
 * If the user lacks read access to some subsection of the specified tree,
 * that section simply does not get serialized, since, from the user's point
 * of view, it is not there.
 * <p>
 * The serialized output will reflect the state of the current workspace as
 * modified by the state of this <code>Session</code>. This means that
 * pending changes (regardless of whether they are valid according to node
 * type constraints) and all namespace mappings in the namespace registry,
 * as modified by the current session-mappings, are reflected in the
 * output.
 * <p>
 * The output XML will be encoded in UTF-8.
 * <p>
 * It is the responsibility of the caller to close the passed
 * <code>OutputStream</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param absPath The path of the root of the subgraph to be serialized. This must be the path to a node, not a property
 * @param out The <code>OutputStream</code> to which the XML serialization of the subgraph will be output.
 * @param skipBinary A <code>boolean</code> governing whether binary properties are to be serialized.
 * @param noRecurse A <code>boolean</code> governing whether the subgraph at absPath is to be recursed.
 * @throws PathNotFoundException if no node exists at <code>absPath</code>.
 * @throws IOException if an error during an I/O operation occurs.
 * @throws RepositoryException if another error occurs.
 */
export function exportDocumentView(
  absPath: string,
  out: unknown,
  skipBinary: boolean,
  noRecurse: boolean
): void;

/**
 * Within the scope of this <code>Session</code>, this method maps
 * <code>uri</code> to <code>prefix</code>. The remapping only affects
 * operations done through this <code>Session</code>. To clear all
 * remappings, the client must acquire a new <code>Session</code>.
 * <p>
 * All local mappings already present in the <code>Session</code> that
 * include either the specified <code>prefix</code> or the specified
 * <code>uri</code> are removed and the new mapping is added.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param prefix a string
 * @param uri a string
 * @throws NamespaceException if an attempt is made to map a namespace URI to a prefix beginning with the characters "<code>xml</code>" (in any combination of case) or if an attempt is made to map either the empty prefix or the empty namespace (i.e., if either <code>prefix</code> or <code>uri</code> are the empty string).
 * @throws RepositoryException if another error occurs.
 */
export function setNamespacePrefix(prefix: string, uri: string): void;

/**
 * Returns all prefixes currently mapped to URIs in this
 * <code>Session</code>.
 * @return a string array
 * @throws RepositoryException if an error occurs
 */
export function getNamespacePrefixes(): string;

/**
 * Returns the URI to which the given <code>prefix</code> is mapped as
 * currently set in this <code>Session</code>.
 * @param prefix a string
 * @return a string
 * @throws NamespaceException if the specified <code>prefix</code> is unknown.
 * @throws RepositoryException if another error occurs
 */
export function getNamespaceURI(prefix: string): string;

/**
 * Returns the prefix to which the given <code>uri</code> is mapped as
 * currently set in this <code>Session</code>.
 * @param uri a string
 * @return a string
 * @throws NamespaceException if the specified <code>uri</code> is unknown.
 * @throws RepositoryException if another error occurs
 */
export function getNamespacePrefix(uri: string): string;

/**
 * Releases all resources associated with this <code>Session</code>. This
 * method should be called when a <code>Session</code> is no longer needed.
  
    */
export function logout(): void;

/**
 * Returns <code>true</code> if this <code>Session</code> object is usable
 * by the client. Otherwise, returns <code>false</code>. A usable
 * <code>Session</code> is one that is neither logged-out, timed-out nor in
 * any other way disconnected from the repository.
 * @return <code>true</code> if this <code>Session</code> is usable, <code>false</code> otherwise.
 */
export function isLive(): boolean;

/**
 * Adds the specified lock token to this <code>Session</code>. Holding a
 * lock token makes this <code>Session</code> the owner of the lock
 * specified by that particular lock token.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param lt a lock token (a string).
 * @deprecated As of JCR 2.0, {@link LockManager#addLockToken(String)} should be used instead.
 */
export function addLockToken(lt: string): void;

/**
 * Returns an array containing all lock tokens currently held by this
 * <code>Session</code>. Note that any such tokens will represent
 * open-scoped locks, since session-scoped locks do not have tokens.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @return an array of lock tokens (strings)
 * @deprecated As of JCR 2.0, {@link LockManager#getLockTokens()} should be used instead.
 */
export function getLockTokens(): string;

/**
 * Removes the specified lock token from this <code>Session</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @param lt a lock token (a string)
 * @deprecated As of JCR 2.0, {@link LockManager#removeLockToken(String)} should be used instead.
 */
export function removeLockToken(lt: string): void;

/**
 * Returns the access control manager for this <code>Session</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @return the access control manager for this <code>Session</code>
 * @throws UnsupportedRepositoryOperationException if access control is not supported.
 * @throws RepositoryException if another error occurs.
 * @since JCR 2.0
 */
export function getAccessControlManager(): AccessControlManager;

/**
 * Returns the retention and hold manager for this <code>Session</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @return the retention manager for this <code>Session</code>.
 * @throws UnsupportedRepositoryOperationException if retention and hold are not supported.
 * @throws RepositoryException if another error occurs.
 * @since JCR 2.0
 */
export function getRetentionManager(): RetentionManager;

/**
 * The <code>Session</code> object provides read and (in level 2) write access
 * to the content of a particular workspace in the repository.
 * <p>
 * The <code>Session</code> object is returned by {@link
 * Repository#login(Credentials, String) Repository.login()}. It encapsulates
 * both the authorization settings of a particular user (as specified by the
 * passed <code>Credentials</code>) and a binding to the workspace specified by
 * the <code>workspaceName</code> passed on <code>login</code>.
 * <p>
 * Each <code>Session</code> object is associated one-to-one with a
 * <code>Workspace</code> object. The <code>Workspace</code> object represents a
 * "view" of an actual repository workspace entity as seen through the
 * authorization settings of its associated <code>Session</code>.
 *
 * <h3>Session instance retrieval in Sitevision</h3>
 * <p>
 *    An instance of this interface can be obtained via the request attribute "<code>sitevision.jcr.session</code>".
 *    Below is an example of how to get hold of a <code>Session</code> instance from your custom JSR 286 portlet:
 * </p>
 * <pre><code>
 *    Session jcrSession = (Session) aPortletRequest.getAttribute("sitevision.jcr.session");
 * </code></pre>
 * <p>
 *    This interface is annotated with {@link senselogic.sitevision.api.base.Requireable} so in server-side JavaScript you would typically obtain an instance of this interface via the <code>require</code> function:
 * </p>
 * <pre><code>
 *    var session = require('Session');
 * </code></pre>
 * <p>
 *    In JCR capable portlets that are bundled with Sitevision and exposes a "Custom template", you typically have a <code>Session</code> instance
 *    available as "<code>$jcrSession</code>" on the VelocityContext:
 * </p>
 * <pre><code>
 *    $jcrSession
 * </code></pre>
 * <p>
 *    <em>If $jcrSession is not available on the VelocityContext, use the portlet request (if available) to retrieve it. :</em>
 * </p>
 * <pre><em><code>
 *    #set ($jcrSession = $request.getAttribute('sitevision.jcr.session'))
 * </code></em></pre>A constant representing the <code>read</code> action string, used to
 * determine if this <code>Session</code> has permission to retrieve an item
 * (and read the value, in the case of a property).A constant representing the <code>add_node</code> action string, used to
 * determine if this <code>Session</code> has permission to add a new node.A constant representing the <code>set_property</code> action string, used
 * to determine if this <code>Session</code> has permission to set (add or
 * modify) a property.A constant representing the <code>remove</code> action string, used to
 * determine if this <code>Session</code> has permission to remove an item.
 * @see #hasPermission(String, String)
 * @see #checkPermission(String, String)
 * @since JCR 2.0
 * @see #hasPermission(String, String)
 * @see #checkPermission(String, String)
 * @since JCR 2.0
 * @see #hasPermission(String, String)
 * @see #checkPermission(String, String)
 * @since JCR 2.0
 * @see #hasPermission(String, String)
 * @see #checkPermission(String, String)
 * @since JCR 2.0
 */
declare namespace session {
  export {
    getRepository,
    getUserID,
    getAttributeNames,
    getAttribute,
    getWorkspace,
    getRootNode,
    impersonate,
    getNodeByUUID,
    getNodeByIdentifier,
    getItem,
    getNode,
    getProperty,
    itemExists,
    nodeExists,
    propertyExists,
    move,
    removeItem,
    save,
    refresh,
    hasPendingChanges,
    getValueFactory,
    hasPermission,
    checkPermission,
    hasCapability,
    getImportContentHandler,
    importXML,
    exportSystemView,
    exportDocumentView,
    setNamespacePrefix,
    getNamespacePrefixes,
    getNamespaceURI,
    getNamespacePrefix,
    logout,
    isLive,
    addLockToken,
    getLockTokens,
    removeLockToken,
    getAccessControlManager,
    getRetentionManager,
  };
}

export default session;
