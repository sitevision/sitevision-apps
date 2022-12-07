import Value from "../Value";
import Property from "../Property";

import Binary from "../Binary";

import NodeIterator from "../NodeIterator";
import PropertyIterator from "../PropertyIterator";
import Item from "../Item";
import NodeType from "../nodetype/NodeType";
import NodeDefinition from "../nodetype/NodeDefinition";
import Version from "../version/Version";
import VersionHistory from "../version/VersionHistory";
import Lock from "../lock/Lock";

/**
 * The <code>Node</code> interface represents a node in a workspace.A constant for the JCR name <code>jcr:content</code>. This is the name of
 * a child node  declared in {@link NodeType#NT_FILE nt:file} and a property
 * declared in {@link javax.jcr.nodetype.NodeType#NT_LINKED_FILE
 * nt:linkedFile}.A constant for the node name <code>jcr:propertyDefinition</code> declared
 * in {@link NodeType#NT_FILE nt:nodeType}.A constant for the node name <code>jcr:childNodeDefinition</code>
 * declared in {@link NodeType#NT_FILE nt:nodeType}.A constant for the node name <code>jcr:rootVersion</code> declared in
 * {@link NodeType#NT_VERSION_HISTORY nt:versionHistory}.A constant for the node name <code>jcr:versionLabels</code> declared in
 * {@link NodeType#NT_VERSION_HISTORY nt:versionHistory}.A constant for the node name <code>jcr:frozenNode</code> declared in
 * {@link NodeType#NT_VERSION nt:version}.
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 */
interface Node {
  /**
   * Creates a new node at <code>relPath</code>.
   * <p>
   * This is <i>session-write</i> method, meaning that the addition of the new
   * node is dispatch upon {@link Session#save}.
   * <p>
   * The <code>relPath</code> provided must not have an index on its final
   * element, otherwise a Repository
   * <p>
   * If ordering is supported by the node type of the parent node of the new
   * node then the new node is appended to the end of the child node list.
   * <p>
   * The new node's primary node type will be determined by the child node
   * definitions in the node types of its parent. This may occur either
   * immediately, on dispatch (save, whether within or without transactions)
   * or on persist (save without transactions, commit within a transaction),
   * depending on the implementation.
   * <p>
   * An <code>ItemExistsException</code> will be thrown either immediately, on
   * dispatch (save, whether within or without transactions) or on persist
   * (save without transactions, commit within a transaction), if an item at
   * the specified path already exists and same-name siblings are not allowed.
   * Implementations may differ on when this validation is performed.
   * <p>
   * A <code>PathNotFoundException</code> will be thrown either immediately,
   * on dispatch (save, whether within or without transactions) or on persist
   * (save without transactions, commit within a transaction), if the
   * specified path implies intermediary nodes that do not exist.
   * Implementations may differ on when this validation is performed.
   * <p>
   * A <code>ConstraintViolationException</code> will be thrown either
   * immediately, on dispatch (save, whether within or without transactions)
   * or on persist (save without transactions, commit within a transaction),
   * if adding the node would violate a node type or implementation-specific
   * constraint or if an attempt is made to add a node as the child of a
   * property. Implementations may differ on when this validation is
   * performed.
   * <p>
   * A <code>VersionException</code> will be thrown either immediately, on
   * dispatch (save, whether within or without transactions) or on persist
   * (save without transactions, commit within a transaction), if the node to
   * which the new child is being added is read-only due to a checked-in node.
   * Implementations may differ on when this validation is performed.
   * <p>
   * A <code>LockException</code> will be thrown either immediately, on
   * dispatch (save, whether within or without transactions) or on persist
   * (save without transactions, commit within a transaction), if a lock
   * prevents the addition of the node. Implementations may differ on when
   * this validation is performed.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param relPath The path of the new node to be created.
   * @return The node that was added.
   * @throws ItemExistsException if an item at the specified path already exists, same-name siblings are not allowed and this implementation performs this validation immediately.
   * @throws PathNotFoundException if the specified path implies intermediary <code>Node</code>s that do not exist or the last element of <code>relPath</code> has an index, and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if a node type or implementation-specific constraint is violated or if an attempt is made to add a node as the child of a property and this implementation performs this validation immediately.
   * @throws VersionException if the node to which the new child is being added is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the addition of the node and this implementation performs this validation immediately.
   * @throws RepositoryException If the last element of <code>relPath</code> has an index or if another error occurs.
   */
  addNode(relPath: string): Node;

  /**
   * Creates a new node at <code>relPath</code> of the specified node type.
   * The behavior of this method is identical to {@link #addNode(String
   * relPath)} except that the primary node type of the new node is explicitly
   * specified.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param relPath the path of the new node to be created.
   * @param primaryNodeTypeName The name of the primary node type of the new node.
   * @return the node that was added.
   * @throws ItemExistsException if an item at the specified path already exists, same-name siblings are not allowed and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws PathNotFoundException if the specified path implies intermediary <code>Node</code>s that do not exist or the last element of <code>relPath</code> has an index, and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws NoSuchNodeTypeException if the specified node type is not recognized and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws ConstraintViolationException if a node type or implementation-specific constraint is violated or if an attempt is made to add a node as the child of a property and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws VersionException if the node to which the new child is being added is read-only due to a checked-in node and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws LockException if a lock prevents the addition of the node and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws RepositoryException if the last element of <code>relPath</code> has an index or if another error occurs.
   */
  addNode(relPath: string, primaryNodeTypeName: string): Node;

  /**
   * If this node supports child node ordering, this method inserts the child
   * node at <code>srcChildRelPath</code> into the child node list at the
   * position immediately the child node at <code>destChildRelPath</code>.
   * <p>
   * To place the node <code>srcChildRelPath</code> at the end of the list, a
   * <code>destChildRelPath</code> of <code>null</code> is used.
   * <p>
   * Note that (apart from the case where <code>destChildRelPath</code> is
   * <code>null</code>) both of these arguments must be relative paths of
   * depth one, in other words they are the names of the child nodes, possibly
   * suffixed with an index.
   * <p>
   * If <code>srcChildRelPath</code> and <code>destChildRelPath</code> are the
   * same, then no change is made.
   * <p>
   * This is session-write method, meaning that a change made by this method
   * is dispatched on <code>save</code>
   * <p>
   * A <code>ConstraintViolationException</code> will be thrown either
   * immediately, on dispatch (save whether within or without transactions) or
   * on persist (save without transactions, commit within a transaction), if
   * this operation would violate a node type or implementation-specific
   * constraint. Implementations may differ on when this validation is
   * performed.
   * <p>
   * A <code>VersionException</code> will be thrown either immediately, on
   * dispatch (save whether within or without transactions) or on persist
   * (save without transactions, commit within a transaction), if this node is
   * read-only due to it or a node above it being checked-in Implementations
   * may differ on when this validation is performed.
   * <p>
   * A <code>LockException</code> will be thrown either immediately (by this
   * method), or on <code>save</code>, if a lock prevents the re-ordering.
   * Implementations may differ on when this validation is performed.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param srcChildRelPath the relative path to the child node (that is, name plus possible index) to be moved in the ordering
   * @param destChildRelPath the the relative path to the child node (that is, name plus possible index) before which the node <code>srcChildRelPath</code> will be placed.
   * @throws UnsupportedRepositoryOperationException if ordering is not supported on this node.
   * @throws ConstraintViolationException if an implementation-specific ordering restriction is violated and this implementation performs this validation immediately.
   * @throws ItemNotFoundException if either parameter is not the relative path of a child node of this node.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the re-ordering and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  orderBefore(srcChildRelPath: string, destChildRelPath: string): void;

  /**
   * Sets the single-value property of this node called <code>name</code> to
   * the specified <code>value</code>.
   * <p>
   * If the property does not yet exist, it is created and its property type
   * determined by the by the node type of this node. If, based on the
   * <code>name</code> and <code>value</code> passed, there is more than one
   * property definition that applies, the repository chooses one definition
   * according to some implementation-specific criteria. Once a property with
   * name <code>P</code> has been created, the behavior of a subsequent
   * <code>setProperty(P,V)</code> may differ across implementations. Some
   * repositories may allow <code>P</code> to be dynamically re-bound to a
   * different property definition (based for example, on the new value being
   * of a different type than the original value) while other repositories may
   * not allow such dynamic re-binding.
   * <p>
   * If the property type of the supplied <code>Value</code> object is
   * different from that required, then a best-effort conversion is
   * attempted.
   * <p>
   * If the node type of this node does not indicate a specific property type,
   * then the property type of the supplied <code>Value</code> object is used
   * and if the property already exists it assumes both the new value and new
   * property type.
   * <p>
   * Passing a <code>null</code> as the second parameter removes the property.
   * It is equivalent to calling <code>remove</code> on the
   * <code>Property</code> object itself.
   * <p>
   * This is a session-write method, meaning that changes made through this
   * method are dispatched on {@link Session#save}.
   * <p>
   * A <code>ConstraintViolationException</code> will be thrown either
   * immediately, on dispatch (save whether within or without transactions) or
   * on persist (save without transactions, commit within a transaction), if
   * the change would violate a node type or implementation-specific
   * constraint. Implementations may differ on when this validation is
   * performed.
   * <p>
   * A <code>VersionException</code> will be thrown either immediately, on
   * dispatch (save whether within or without transactions) or on persist
   * (save without transactions, commit within a transaction), if this node is
   * read-only due to a checked-in node. Implementations may differ on when
   * this validation is performed.
   * <p>
   * A <code>LockException</code> will be thrown either immediately, on
   * dispatch (save whether within or without transactions) or on persist
   * (save without transactions, commit within a transaction), if a lock
   * prevents the setting of the property. Implementations may differ on when
   * this validation is performed.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to be assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if the specified property is a <code>DATE</code> but the <code>value</code> cannot be expressed in the ISO 8601-based format defined in the JCR 2.0 specification and the implementation does not support dates incompatible with that format or if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, value: Value): Property;

  /**
   * Sets the single-value property of this node called <code>name</code> to
   * the specified <code>value</code> and the specified <code>type</code>.
   * <p>
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the intended property
   * type is explicitly specified.
   * <p>
   * If the property does not yet exist, it is created. If the property
   * already exists it assumes both the new value and the new property type.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name the name of the property to be set.
   * @param value a <code>Value</code> object.
   * @param type the type of the property.
   * @return the <code>Property</code> object set, or <code>null</code> if this method was used to remove a property (by setting its value to <code>null</code>).
   * @throws ValueFormatException if <code>value</code> cannot be converted to the specified type or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, value: Value, type: number): Property;

  /**
   * Sets the multi-value property of this node called <code>name</code> to
   * the specified array of values.
   * <p>
   * If the property does not yet exist, it is created.
   * <p>
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that an array of
   * <code>Value</code> objects is assigned instead of a single
   * <code>Value</code>.
   * <p>
   * The property type of the property will be that specified by the node type
   * of this node. If the property type of one or more of the supplied
   * <code>Value</code> objects is different from that required, then a
   * best-effort conversion is attempted, according to an
   * implemention-dependent definition of "best effort". If the conversion
   * fails, a <code>ValueFormatException</code> is thrown.
   * <p>
   * If the property is not multi-valued then a <code>ValueFormatException</code>
   * is also thrown. If another error occurs, a <code>RepositoryException</code>
   * is thrown.
   * <p>
   * If the node type of this node does not indicate a specific property type,
   * then the property type of the supplied <code>Value</code> objects is used
   * and if the property already exists it assumes both the new values and the
   * new property type.
   * <p>
   * Passing a <code>null</code> as the second parameter removes the property.
   * It is equivalent to calling <code>remove</code> on the
   * <code>Property</code> object itself. Note that this is different from
   * passing an array that contains <code>null</code> elements. In such a
   * case, the array is compacted by removing the <code>null</code> values.
   * The resulting set of values never contains a null. However, the set may
   * be empty: <code>N.setProperty("P", new Value[]{null})</code> would set
   * the property to the empty set of values.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name the name of the property to be set.
   * @param values an array of <code>Value</code> objects.
   * @return the updated <code>Property</code> object.
   * @throws ValueFormatException if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is not multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, values: Value): Property;

  /**
   * Sets the multi-value property of this node called <code>name</code> to
   * the specified array of values.
   * <p>
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value[] values)} except that the type of the
   * property is explicitly specified.
   * <p>
   * If the property does not yet exist, it is created. The type of the
   * property is determined by the <code>type</code> parameter specified.
   * <p>
   * If the property type of one or more of the supplied <code>Value</code>
   * objects is different from that specified, then a best-effort conversion
   * is attempted, according to an implemention-dependent definition of "best
   * effort". If the conversion fails, a <code>ValueFormatException</code> is
   * thrown.
   * <p>
   * If the property already exists it assumes both the new values and the new
   * property type.
   * </p>
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name the name of the property to be set.
   * @param values an array of <code>Value</code> objects.
   * @param type the type of the property.
   * @return the updated <code>Property</code> object.
   * @throws ValueFormatException if a value cannot be converted to the specified type or if the property already exists and is not multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, values: Value, type: number): Property;

  /**
   * Sets the specified property to the specified array of values. Same as
   * {@link #setProperty(String name, Value[] values)} except that the values
   * are specified as <code>String</code> objects instead of
   * <code>Value</code> objects.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name the name of the property to be set.
   * @param values an array of <code>Value</code> objects.
   * @return the updated <code>Property</code> object.
   * @throws ValueFormatException if a value cannot be converted to the type of the specified property or if the property already exists and is not multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, values: string): Property;

  /**
   * Sets the specified property to the specified array of values and to the
   * specified type. Same as {@link #setProperty(String name, Value[] values,
   * int type)} except that the values are specified as <code>String</code>
   * objects instead of <code>Value</code> objects.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name the name of the property to be set.
   * @param values an array of <code>Value</code> objects.
   * @param type the type of the property.
   * @return the updated <code>Property</code> object.
   * @throws ValueFormatException if a value cannot be converted to the specified type or if the property already exists and is not multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, values: string, type: number): Property;

  /**
   * Sets the specified single-value property to the specified value. The
   * behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the value is
   * specified as a <code>String</code>. and, if possible, the type assigned
   * to the property is <code>STRING</code>, otherwise a best-effort
   * conversion is attempted.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, value: string): Property;

  /**
   * Sets the specified single-value property to the specified value. If the
   * property does not yet exist, it is created.
   * <p>
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, String value)} except that the intended type of
   * the property is explicitly specified by the <code>type</code> parameter.
   * @param name the name of the property to be set.
   * @param value a <code>String</code> object.
   * @param type the type of the property.
   * @return the <code>Property</code> object set, or <code>null</code> if this method was used to remove a property (by setting its value to <code>null</code>).
   * @throws ValueFormatException if <code>value</code> cannot be converted to the specified type or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, value: string, type: number): Property;

  /**
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the value is
   * specified as a {@link InputStream} and, if possible, the type assigned to
   * the property is <code>BINARY</code>, otherwise a best-effort conversion
   * is attempted.
   * <p>
   * The passed stream is closed before this method returns either normally or
   * because of an exception.
   * <p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link #setProperty(String, Binary)} should be used instead.
   */
  setProperty(name: string, value: unknown): Property;

  /**
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the value is
   * specified as a {@link Binary} and, if possible, the type assigned to the
   * property is <code>BINARY</code>, otherwise a best-effort conversion is
   * attempted.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  setProperty(name: string, value: Binary): Property;

  /**
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the value is
   * specified as a <code>boolean</code> and, if possible, the type assigned
   * to the property is <code>BOOLEAN</code>, otherwise a best-effort
   * conversion is attempted.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, value: boolean): Property;

  /**
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the value is
   * specified as a <code>double</code> and, if possible, the type assigned to
   * the property is <code>DOUBLE</code>, otherwise a best-effort conversion
   * is attempted.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, value: number): Property;

  /**
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the value is
   * specified as a {@link BigDecimal} and, if possible, the type assigned to
   * the property is <code>DECIMAL</code>, otherwise a best-effort conversion
   * is attempted.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  setProperty(name: string, value: unknown): Property;

  /**
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the value is
   * specified as a <code>long</code> and, if possible, the type assigned to
   * the property is <code>LONG</code>, otherwise a best-effort conversion is
   * attempted.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, value: number): Property;

  /**
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the value is
   * specified as a {@link Calendar} and, if possible, the type assigned to
   * the property is <code>DATE</code>, otherwise a best-effort conversion is
   * attempted.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if the specified property is a <code>DATE</code> but the <code>value</code> cannot be expressed in the ISO 8601-based format defined in the JCR 2.0 specification (section 3.6.4.3) and the implementation does not support dates incompatible with that format or if <code>value</code> cannot be converted to the type of the specified property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, value: unknown): Property;

  /**
   * The behavior of this method is identical to that of {@link
   * #setProperty(String name, Value value)} except that the value is
   * specified as a {@link Node} and, if possible, the type assigned to the
   * property is <code>REFERENCE</code> or <code>WEAKREFERENCE</code>,
   * otherwise a best-effort conversion is attempted.
   * <p>
   * The value to which the property is set is the identifier of the passed
   * node.
   * <p>
   * If the named property does not yet exist and the repository cannot
   * determine whether a <code>REFERENCE</code> or <code>WEAKREFERENCE</code>
   * property is intended, then a <code>REFERENCE</code> property is created.
   *
   * <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   * <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object.
   * @throws ValueFormatException if this property is not of type <code>REFERENCE</code> or <code>WEAKREFERENCE</code> or the specified node is not referenceable or if the specified property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a node-type or other constraint and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: string, value: Node): Property;

  /**
   * Returns the node at <code>relPath</code> relative to this node.
   * <p>
   * If <code>relPath</code> contains a path element that refers to a node
   * with same-name sibling nodes without explicitly including an index using
   * the array-style notation (<code>[x]</code>), then the index [1] is
   * assumed (indexing of same name siblings begins at 1, not 0, in order to
   * preserve compatibility with XPath).
   * <p>
   * Within the scope of a single <code>Session</code> object, if a
   * <code>Node</code> object has been acquired, any subsequent call of
   * <code>getNode</code> reacquiring the same node must return a
   * <code>Node</code> object reflecting the same state as the earlier
   * <code>Node</code> object. Whether this object is actually the same
   * <code>Node</code> instance, or simply one wrapping the same state, is up
   * to the implementation.
   * @param relPath The relative path of the node to retrieve.
   * @return The node at <code>relPath</code>.
   * @throws PathNotFoundException if no node exists at the specified path or the current <code>Session</code> does not read access to the node at the specified path.
   * @throws RepositoryException If another error occurs.
   */
  getNode(relPath: string): Node;

  /**
   * Returns all child nodes of this node accessible through the current
   * <code>Session</code>. Does <i>not</i> include properties of this
   * <code>Node</code>. The same reacquisition semantics apply as with {@link
   * #getNode(String)}. If this node has no accessible child nodes, then an
   * empty iterator is returned.
   * @return A <code>NodeIterator</code> over all child <code>Node</code>s of this <code>Node</code>.
   * @throws RepositoryException if an error occurs.
   */
  getNodes(): NodeIterator;

  /**
   * Gets all child nodes of this node accessible through the current
   * <code>Session</code> that match <code>namePattern</code>. The pattern may
   * be a full name or a partial name with one or more wildcard characters
   * ("<code>*</code>"), or a disjunction (using the "<code>|</code>"
   * character to represent logical <code>OR</code>) of these. For example,
   * <p>
   * <code>N.getNodes("jcr:* | myapp:report | my doc")</code>
   * <p>
   * would return a <code>NodeIterator</code> holding all accessible child
   * nodes of <code>N</code> that are either called '<code>myapp:report</code>',
   * begin with the prefix '<code>jcr:</code>' or are called '<code>my
   * doc</code>'.
   * <p>
   * The substrings within the pattern that are delimited by "<code>|</code>"
   * characters and which may contain wildcard characters ("<code>*</code>")
   * are called <i>globs</i>.
   * <p>
   * Note that leading and trailing whitespace around a glob is ignored, but
   * whitespace within a disjunct forms part of the pattern to be matched.
   * <p>
   * The pattern is matched against the names (not the paths) of the immediate
   * child nodes of this node.
   * <p>
   * If this node has no accessible matching child nodes, then an empty
   * iterator is returned.
   * <p>
   * The same reacquisition semantics apply as with <code>{@link
   * #getNode(String)}</code>.
   * @param namePattern a name pattern.
   * @return a <code>NodeIterator</code>.
   * @throws RepositoryException if an unexpected error occurs.
   */
  getNodes(namePattern: string): NodeIterator;

  /**
   * Gets all child nodes of this node accessible through the current
   * <code>Session</code> that match one or more of the <code>nameGlob</code>
   * strings in the passed array.
   * <p>
   * A glob may be a full name or a partial name with one or more wildcard
   * characters ("<code>*</code>"). For example,
   * <p>
   * <code>N.getNodes(new String[] {"jcr:*", "myapp:report", "my
   * doc"})</code>
   * <p>
   * would return a <code>NodeIterator</code> holding all accessible child
   * nodes of <code>N</code> that are either called '<code>myapp:report</code>',
   * begin with the prefix '<code>jcr:</code>' or are called '<code>my
   * doc</code>'.
   * <p>
   * Note that unlike in the case of the {@link #getNodes(String)} leading and
   * trailing whitespace around a glob is <i>not</i> ignored.
   * <p>
   * The globs are matched against the names (not the paths) of the immediate
   * child nodes of this node.
   * <p>
   * If this node has no accessible matching child nodes, then an empty
   * iterator is returned.
   * <p>
   * The same reacquisition semantics apply as with <code>{@link
   * #getNode(String)}</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param nameGlobs an array of globbing strings.
   * @return a <code>NodeIterator</code>.
   * @throws RepositoryException if an unexpected error occurs.
   * @since JCR 2.0
   */
  getNodes(nameGlobs: string): NodeIterator;

  /**
   * Returns the property at <code>relPath</code> relative to
   * <code>this</code> node. The same reacquisition semantics apply as with
   * <code>{@link #getNode(String)}</code>.
   * @param relPath The relative path of the property to retrieve.
   * @return The property at <code>relPath</code>.
   * @throws PathNotFoundException if no property exists at the specified path or if the current <p> <code>Session</code> does not have read access to the specified property.
   * @throws RepositoryException If another error occurs.
   */
  getProperty(relPath: string): Property;

  /**
   * Returns all properties of this node accessible through the current
   * <code>Session</code>. Does <i>not</i> include child <i>nodes</i> of this
   * node. The same reacquisition semantics apply as with <code>{@link
   * #getNode(String)}</code>. If this node has no accessible properties, then
   * an empty iterator is returned.
   * @return A <code>PropertyIterator</code>.
   * @throws RepositoryException if an error occurs.
   */
  getProperties(): PropertyIterator;

  /**
   * Gets all properties of this node accessible through the current
   * <code>Session</code> that match <code>namePattern</code>.
   *
   * <p>The pattern may
   * be a full name or a partial name with one or more wildcard characters
   * ("<code>*</code>"), or a disjunction (using the "<code>|</code>"
   * character to represent logical <code>OR</code>) of these. For example,
   * </p><p>
   *   <code>N.getProperties("jcr:* | myapp:name | my doc")</code>
   * </p><p>
   * would return a <code>PropertyIterator</code> holding all accessible
   * properties of <code>N</code> that are either called
   * '<code>myapp:name</code>', begin with the prefix '<code>jcr:</code>' or
   * are called '<code>my doc</code>'.
   * </p><p>
   * The substrings within the pattern that are delimited by "<code>|</code>"
   * characters and which may contain wildcard characters ("<code>*</code>")
   * are called <i>globs</i>.
   * </p><p>
   * Note that leading and trailing whitespace around a glob is ignored, but
   * whitespace within a disjunct forms part of the pattern to be matched.
   * </p><p>
   * The pattern is matched against the names (not the paths) of the immediate
   * child properties of this node.
   * </p><p>
   * If this node has no accessible matching properties, then an empty
   * iterator is returned.
   * </p><p>
   * The same reacquisition semantics apply as with <code>{@link #getNode(String)}</code>.
   * </p>
   * @param namePattern a name pattern.
   * @return a <code>PropertyIterator</code>.
   * @throws RepositoryException if an unexpected error occurs.
   */
  getProperties(namePattern: string): PropertyIterator;

  /**
   * Gets all properties of this node accessible through the current
   * <code>Session</code> that match one or more of the <code>nameGlob</code>
   * strings in the passed array.
   * <p>
   * A glob may be a full name or a partial name with one or more wildcard
   * characters ("<code>*</code>"). For example,
   * <p>
   * <code>N.getProperties(new String[] {"jcr:*", "myapp:report", "my
   * doc"})</code>
   * <p>
   * would return a <code>PropertyIterator</code> holding all accessible
   * properties of <code>N</code> that are either called
   * '<code>myapp:report</code>', begin with the prefix '<code>jcr:</code>' or
   * are called '<code>my doc</code>'.
   * <p>
   * Note that unlike in the case of the {@link #getProperties(String)}
   * leading and trailing whitespace around a glob is <i>not</i> ignored.
   * <p>
   * The globs are matched against the names (not the paths) of the properties
   * of this node.
   * <p>
   * If this node has no accessible matching properties, then an empty
   * iterator is returned.
   * <p>
   * The same reacquisition semantics apply as with <code>{@link
   * #getProperty(String)}</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param nameGlobs an array of globbing strings.
   * @return a <code>PropertyIterator</code>.
   * @throws RepositoryException if an unexpected error occurs.
   * @since JCR 2.0
   */
  getProperties(nameGlobs: string): PropertyIterator;

  /**
   * Returns the primary child item of this node. The primary node type of
   * this node may specify one child item (child node or property) of this
   * node as the <i>primary child item</i>. This method returns that item.
   * <p>
   * In cases where the primary child item specifies the name of a set
   * same-name sibling child nodes, the node returned will be the one among
   * the same-name siblings with index [1].
   * <p>
   * The same reacquisition semantics apply as with <code>{@link
   * #getNode(String)}</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return the primary child item.
   * @throws ItemNotFoundException if this node does not have a primary child item, either because none is declared in the node type or because a declared primary item is not present on this node instance, or because none is accessible through the current <code>Session</code>.
   * @throws RepositoryException if another error occurs.
   */
  getPrimaryItem(): Item;

  /**
   * Returns the UUID of this node as recorded in this node's
   * <code>jcr:uuid</code> property. This method only works on nodes of mixin
   * node type <code>mix:referenceable</code>.
   * <p>
   * On nonreferenceable nodes, this method throws an <code>UnsupportedRepositoryOperationException</code>.
   * To avoid throwing an exception to determine whether a node has a UUID, a
   * call to {@link #isNodeType(String) isNodeType("mix:referenceable")} can
   * be made.
   * @return the UUID of this node.
   * @throws UnsupportedRepositoryOperationException if this node nonreferenceable.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link #getIdentifier()} should be used instead.
   */
  getUUID(): string;

  /**
   * Returns the identifier of this node. Applies to both referenceable and
   * non-referenceable nodes.
   * <p>
   * A <code>RepositoryException</code> is thrown if an error occurs.
   * @return the identifier of this node.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getIdentifier(): string;

  /**
   * This method returns the index of this node within the ordered set of its
   * same-name sibling nodes. This index is the one used to address same-name
   * siblings using the square-bracket notation, e.g.,
   * <code>/a[3]/b[4]</code>. Note that the index always starts at 1 (not 0),
   * for compatibility with XPath. As a result, for nodes that do not have
   * same-name-siblings, this method will always return 1.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return The index of this node within the ordered set of its same-name sibling nodes.
   * @throws RepositoryException if an error occurs.
   */
  getIndex(): number;

  /**
   * This method returns all <code>REFERENCE</code> properties that refer to
   * this node and that are accessible through the current
   * <code>Session</code>. Equivalent to <code>Node.getReferences(null)</code>.
   * <p>
   * If this node has no referring <code>REFERENCE</code> properties, an
   * empty iterator is returned. This includes the case where this node is not referenceable.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return A <code>PropertyIterator</code>.
   * @throws RepositoryException if an error occurs.
   * @see #getReferences(String)
   */
  getReferences(): PropertyIterator;

  /**
   * This method returns all <code>REFERENCE</code> properties that refer to
   * this node, have the specified <code>name</code> and that are accessible
   * through the current <code>Session</code>.
   * <p>
   * If the <code>name</code> parameter is <code>null</code> then all
   * referring <code>REFERENCES</code> are returned regardless of name.
   * <p>
   * Some implementations may only return properties that have been persisted.
   * Some may return both properties that have been persisted and those that
   * have been dispatched but not persisted (for example, those saved within a
   * transaction but not yet committed) while others implementations may
   * return these two categories of property as well as properties that are
   * still pending and not yet dispatched.
   * <p>
   * In implementations that support versioning, this method does not return
   * properties that are part of the frozen state of a version in version
   * storage.
   * <p>
   * If this node has no referring <code>REFERENCE</code> properties with the specified name, an
   * empty iterator is returned. This includes the case where this node is not referenceable.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name name of referring <code>REFERENCE</code> properties to be returned; if <code>null</code> then all referring <code>REFERENCE</code>s are returned.
   * @return A <code>PropertyIterator</code>.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getReferences(name: string): PropertyIterator;

  /**
   * This method returns all <code>WEAKREFERENCE</code> properties that refer
   * to this node and that are accessible through the current
   * <code>Session</code>. Equivalent to <code>Node.getWeakReferences(null)</code>.
   * <p>
   * If this node has no referring <code>WEAKREFERENCE</code> properties, an
   * empty iterator is returned. This includes the case where this node is not referenceable.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return A <code>PropertyIterator</code>.
   * @throws RepositoryException if an error occurs.
   * @see #getWeakReferences(String)
   * @since JCR 2.0
   */
  getWeakReferences(): PropertyIterator;

  /**
   * This method returns all <code>WEAKREFERENCE</code> properties that refer
   * to this node, have the specified <code>name</code> and that are
   * accessible through the current <code>Session</code>.
   * <p>
   * If the <code>name</code> parameter is <code>null</code> then all
   * referring <code>WEAKREFERENCE</code> are returned regardless of name.
   * <p>
   * Some implementations may only return properties that have been persisted.
   * Some may return both properties that have been persisted and those that
   * have been dispatched but not persisted (for example, those saved within a
   * transaction but not yet committed) while others implementations may
   * return these two categories of property as well as properties that are
   * still pending and not yet dispatched.
   * <p>
   * In implementations that support versioning, this method does not return
   * properties that are part of the frozen state of a version in version
   * storage.
   * <p>
   * If this node has no referring <code>WEAKREFERENCE</code> properties with the specified name, an
   * empty iterator is returned. This includes the case where this node is not referenceable.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param name name of referring <code>WEAKREFERENCE</code> properties to be returned; if <code>null</code> then all referring <code>WEAKREFERENCE</code>s are returned.
   * @return A <code>PropertyIterator</code>.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getWeakReferences(name: string): PropertyIterator;

  /**
   * Indicates whether a node exists at <code>relPath</code> Returns
   * <code>true</code> if a node accessible through the current
   * <code>Session</code> exists at <code>relPath</code> and
   * <code>false</code> otherwise.
   * @param relPath The path of a (possible) node.
   * @return <code>true</code> if a node exists at <code>relPath</code>; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  hasNode(relPath: string): boolean;

  /**
   * Indicates whether a property exists at <code>relPath</code> Returns
   * <code>true</code> if a property accessible through the current
   * <code>Session</code> exists at <code>relPath</code> and
   * <code>false</code> otherwise.
   * @param relPath The path of a (possible) property.
   * @return <code>true</code> if a property exists at <code>relPath</code>; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  hasProperty(relPath: string): boolean;

  /**
   * Indicates whether this node has child nodes. Returns <code>true</code> if
   * this node has one or more child nodes accessible through the current
   * <code>Session</code>; <code>false</code> otherwise.
   * @return <code>true</code> if this node has one or more child nodes; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  hasNodes(): boolean;

  /**
   * Indicates whether this node has properties. Returns <code>true</code> if
   * this node has one or more properties accessible through the current
   * <code>Session</code>; <code>false</code> otherwise.
   * @return <code>true</code> if this node has one or more properties; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  hasProperties(): boolean;

  /**
   * Returns the primary node type in effect for this node. Which
   * <code>NodeType</code> is returned when this method is called on the root
   * node of a workspace is up to the implementation.
   * @return a <code>NodeType</code> object.
   * @throws RepositoryException if an error occurs
   */
  getPrimaryNodeType(): NodeType;

  /**
   * Returns an array of <code>NodeType</code> objects representing the mixin
   * node types in effect for this node. This includes only those mixin types
   * explicitly assigned to this node. It does not include mixin types
   * inherited through the addition of supertypes to the primary type
   * hierarchy or through the addition of supertypes to the type hierarchy of
   * any of the declared mixin types.
   * @return an array of <code>NodeType</code> objects.
   * @throws RepositoryException if an error occurs
   */
  getMixinNodeTypes(): NodeType;

  /**
   * Returns <code>true</code> if this node is of the specified primary node
   * type or mixin type, or a subtype thereof. Returns <code>false</code>
   * otherwise.
   * <p>
   * This method respects the effective node type of the node.
   * @param nodeTypeName the name of a node type.
   * @return <code>true</code> If this node is of the specified primary node type or mixin type, or a subtype thereof. Returns <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  isNodeType(nodeTypeName: string): boolean;

  /**
   * Changes the primary node type of this node to <code>nodeTypeName</code>.
   * Also immediately changes this node's <code>jcr:primaryType</code>
   * property appropriately. Semantically, the new node type may take effect
   * immediately or on dispatch but <i>must</i> take effect on persist. The
   * behavior adopted must be the same as the behavior adopted for {@link
   * #addMixin} and the behavior that occurs when a node is first created.
   * <p>
   * If the presence of an existing property or child node would cause an
   * incompatibility with the new node type then a <code>ConstraintViolationException</code>
   * is thrown either immediately, on dispatch or on persist.
   * <p>
   * If the new node type would cause this node to be incompatible with the
   * node type of its parent then a <code>ConstraintViolationException</code>
   * is thrown either immediately, on dispatch or on persist.
   * <p>
   * A <code>ConstraintViolationException</code> is also thrown either
   * immediately, on dispatch or on persist if a conflict with an already
   * assigned mixin occurs.
   * <p>
   * A <code>ConstraintViolationException</code> may also be thrown either
   * immediately , on dispatch or on persist if the attempted change violates
   * implementation-specific node type transition rules. A repository that
   * disallows all primary node type changes would simple throw this exception
   * in all cases.
   * <p>
   * If the specified node type is not recognized a <code>NoSuchNodeTypeException</code>
   * is thrown either immediately, on dispatch or on persist.
   * <p>
   * A <code>VersionException</code> is thrown either immediately , on
   * dispatch or on persist if this node is read-only dues to a check-in.
   * <p>
   * A <code>LockException</code> is thrown either immediately, on dispatch or
   * on persist if a lock prevents the change of node type.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param nodeTypeName the name of the new node type.
   * @throws ConstraintViolationException if the specified primary node type creates a type conflict and this implementation performs this validation immediately.
   * @throws NoSuchNodeTypeException If the specified <code>nodeTypeName</code> is not recognized and this implementation performs this validation immediately.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the change of the primary node type and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  setPrimaryType(nodeTypeName: string): void;

  /**
   * Adds the mixin node type named <code>mixinName</code> to this node. If
   * this node is already of type <code>mixinName</code> (either due to a
   * previously added mixin or due to its primary type, through inheritance)
   * then this method has no effect. Otherwise <code>mixinName</code> is added
   * to this node's <code>jcr:mixinTypes</code> property.
   * <p>
   * Semantically, the new node type <i>may</i> take effect immediately, on
   * dispatch or on persist. The behavior adopted must be the same as the
   * behavior adopted for {@link #setPrimaryType} and the behavior that occurs
   * when a node is first created.
   * <p>
   * A <code>ConstraintViolationException</code> is thrown either immediately,
   * on dispatch or on persist, if a conflict with another assigned mixin or
   * the primary node type or for an implementation-specific reason.
   * Implementations may differ on when this validation is done.
   * <p>
   * In some implementations it may only be possible to add mixin types before
   * a a node is persisted <i>for the first time</i>. I such cases any later
   * calls to <code>addMixin</code> will throw a <code>ConstraintViolationException</code>
   * either immediately, on dispatch or on persist.
   * <p>
   * A <code>NoSuchNodeTypeException</code> is thrown either immediately, on
   * dispatch or on persist, if the specified <code>mixinName</code> is not
   * recognized. Implementations may differ on when this validation is done.
   * <p>
   * A <code>VersionException</code> is thrown either immediately, on dispatch
   * or on persist, if this node is read-only due to a checked-in node.
   * Implementations may differ on when this validation is done.
   * <p>
   * A <code>LockException</code> is thrown either immediately, on dispatch or
   * on persist, if a lock prevents the addition of the mixin. Implementations
   * may differ on when this validation is done.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param mixinName the name of the mixin node type to be added
   * @throws NoSuchNodeTypeException If the specified <code>mixinName</code> is not recognized and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the specified mixin node type creates a conflict and this implementation performs this validation immediately.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the addition of the mixin and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  addMixin(mixinName: string): void;

  /**
   * Removes the specified mixin node type from this node and removes
   * <code>mixinName</code> from this node's <code>jcr:mixinTypes</code>
   * property. Both the semantic change in effective node type and the
   * persistence of the change to the <code>jcr:mixinTypes</code> property
   * occur on persist.
   * <p>
   * If this node does not have the specified mixin, a
   * <code>NoSuchNodeTypeException</code> is thrown either immediately, on
   * dispatch or on persist. Implementations may differ on when this
   * validation is done.
   * <p>
   * A <code>ConstraintViolationException</code> will be thrown either
   * immediately, on dispatch or on persist, if the removal of a mixin is not
   * allowed. Implementations are free to enforce any policy with regard to
   * mixin removal and may differ on when this validation is done.
   * <p>
   * A <code>VersionException</code> is thrown either immediately, on dispatch
   * or on persist, if this node is read-only due to a checked-in node.
   * Implementations may differ on when this validation is done.
   * <p>
   * A <code>LockException</code> is thrown either immediately or on
   * <code>save</code> if a lock prevents the removal of the mixin.
   * Implementations may differ on when this validation is done.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param mixinName the name of the mixin node type to be removed.
   * @throws NoSuchNodeTypeException if the specified <code>mixinName</code> is not currently assigned to this node and this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the specified mixin node type is prevented from being removed and this implementation performs this validation immediately.
   * @throws VersionException if this node is read-only due to a checked-in node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the removal of the mixin and this implementation performs this validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  removeMixin(mixinName: string): void;

  /**
   * Returns <code>true</code> if calling {@link #addMixin} on this node
   * with the mixn node type <code>mixinName</code> will not fail. Returns
   * <code>false</code> otherwise.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param mixinName The name of the mixin to be tested.
   * @return <code>true</code> if addMixin will not fail when called on this node with the specified <code>mixinName</code>; <code>false</code> otherwise.
   * @throws NoSuchNodeTypeException if the specified mixin node type name is not recognized.
   * @throws RepositoryException if another error occurs.
   */
  canAddMixin(mixinName: string): boolean;

  /**
   * Returns the node definition that applies to this node. In some cases
   * there may appear to be more than one definition that could apply to this
   * node. However, it is assumed that upon creation of this node, a single
   * particular definition was used and it is <i>that</i> definition that this
   * method returns. How this governing definition is selected upon node
   * creation from among others which may have been applicable is an
   * implementation issue and is not covered by this specification. The
   * <code>NodeDefinition</code> returned when this method is called on the
   * root node of a workspace is also up to the implementation.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>NodeDefinition</code> object.
   * @throws RepositoryException if an error occurs.
   * @see NodeType#getChildNodeDefinitions
   */
  getDefinition(): NodeDefinition;

  /**
   * Creates a new version of this node and returns that {@link Version}
   * object. The new version becomes the <i>base version</i> of this node. The
   * name of the new version is implementaion determined.
   * <p>
   * This node becomes <i>checked-in</i> and its <code>jcr:checkedOut</code>
   * property is set to false to reflect this. On a successful check-in the
   * change to this property is made as a workspace-write, and therefore does
   * not require a <code>save</code>.
   * <p>
   * The part of the subgraph of this node that is affected by check-in
   * becomes read-only (see the specification for details).
   * <p>
   * If this node is already checked-in, this method has no effect but returns
   * the current base version of this node.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return the created version.
   * @throws VersionException if a child item of this node has an <code>OnParentVersion</code> status of <code>ABORT</code>. This includes the case (under full versioning) where an unresolved merge failure exists on this node, as indicated by the presence of a <code>jcr:mergeFailed</code> property. Under full versioning this exception is also thrown if the <code>jcr:predecessors</code> property of the node has no values.
   * @throws UnsupportedRepositoryOperationException if this node is not versionable.
   * @throws InvalidItemStateException if unsaved changes exist on this node.
   * @throws LockException If a lock prevents the operation.
   * @throws RepositoryException If another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#checkin} should be used instead.
   */
  checkin(): Version;

  /**
   * Sets this versionable node to checked-out status by setting its
   * <code>jcr:isCheckedOut</code> property to <code>true</code>. Under full
   * versioning it also sets the <code>jcr:predecessors</code> property to be
   * a reference to the current base version (the same value as held in
   * <code>jcr:baseVersion</code>). These changes are made by worksapce-write
   * and therefore do require a <code>save</code>.
   * <p>
   * The part of the subgraph of this node that is affected by the checked-out
   * status of this node becomes no longer read-only.
   * <p>
   * If this node is already checked-out, this method has no effect.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @throws UnsupportedRepositoryOperationException if this node is not versionable.
   * @throws LockException if a lock prevents the checkout.
   * @throws ActivityViolationException if the checkout conflicts with the activity present on the current session.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#checkout} should be used instead.
   */
  checkout(): void;

  /**
   * <i>Support for this method is only required under full versioning.</i>
   * <p>
   * Completes the merge process with respect to this node and the specified
   * <code>version</code>.
   * <p>
   * When the {@link #merge} method is called on a node, every versionable
   * node in that subgraph is compared with its corresponding node in the
   * indicated other workspace and a "merge test result" is determined
   * indicating one of the following: <ol> <li> This node will be updated to
   * the state of its correspondee (if the base version of the correspondee is
   * more recent in terms of version history). </li> <li> This node will be
   * left alone (if this node's base version is more recent in terms of
   * version history). </li> <li> This node will be marked as having failed
   * the merge test (if this node's base version is on a different branch of
   * the version history from the base version of its corresponding node in
   * the other workspace, thus preventing an automatic determination of which
   * is more recent). </li> </ol> (See {@link #merge} for more details)
   * <p>
   * In the last case the merging of the subgraph of the versionable node in
   * question must be done by the application (for example, by providing a
   * merge tool for the user).
   * <p>
   * Additionally, once the subgraphs of the nodes has been merged, their
   * version graph branches must also be merged. The JCR versioning system
   * provides for this by keeping a record, for each versionable node that
   * fails the merge test, of the base version of the corresponding node that
   * caused the merge failure. This record is kept in the
   * <code>jcr:mergeFailed</code> property of this node. After a
   * <code>merge</code>, this property will contain one or more (if multiple
   * merges have been performed) <code>REFERENCE</code>s that point to the
   * "failed versions".
   * <p>
   * To complete the merge process, the client calls <code>doneMerge(Version
   * v)</code> passing the version object referred to be the
   * <code>jcr:mergeFailed</code> property that the client wishes to connect
   * to <code>this</code> node in the version graph. This has the effect of
   * moving the reference to the indicated version from the
   * <code>jcr:mergeFailed</code> property of <code>this</code> node to the
   * <code>jcr:predecessors</code>.
   * <p>
   * If the client chooses not to connect this node to a particular version
   * referenced in the <code>jcr:mergeFailed</code> property, he calls {@link
   * #cancelMerge(Version version)}. This has the effect of removing the
   * reference to the specified <code>version</code> from
   * <code>jcr:mergeFailed</code> <i>without</i> adding it to
   * <code>jcr:predecessors</code>.
   * <p>
   * Once the last reference in <code>jcr:mergeFailed</code> has been either
   * moved to <code>jcr:predecessors</code> (with <code>doneMerge</code>) or
   * just removed from <code>jcr:mergeFailed</code> (with
   * <code>cancelMerge</code>) the <code>jcr:mergeFailed</code> property is
   * automatically removed, thus enabling <code>this</code> node to be
   * checked-in, creating a new version (note that before the
   * <code>jcr:mergeFailed</code> is removed, its <code>OnParentVersion</code>
   * setting of <code>ABORT</code> prevents checkin). This new version will
   * have a predecessor connection to each version for which
   * <code>doneMerge</code> was called, thus joining those branches of the
   * version graph.
   * <p>
   * If successful, these changes are persisted immediately, there is no need
   * to call <code>save</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param version a version referred to by this node's <code>jcr:mergeFailed</code> property.
   * @throws VersionException if the version specifed is not among those referenced in this node's <code>jcr:mergeFailed</code> or if this node is currently checked-in.
   * @throws InvalidItemStateException if there are unsaved changes pending on this node.
   * @throws UnsupportedRepositoryOperationException if this node is not versionable.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#doneMerge} should be used instead.
   */
  doneMerge(version: Version): void;

  /**
   * <i>Support for this method is only required under full versioning.</i>
   * <p>
   * Cancels the merge process with respect to this node and specified
   * <code>version</code>.
   * <p>
   * See {@link #doneMerge} for a full explanation. Also see {@link #merge}
   * for more details.
   * <p>
   * If successful, these changes are persisted immediately, there is no need
   * to call <code>save</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param version a version referred to by this node's <code>jcr:mergeFailed</code> property.
   * @throws VersionException if the version specified is not among those referenced in this node's <code>jcr:mergeFailed</code> or if this node is currently checked-in.
   * @throws InvalidItemStateException if there are unsaved changes pending on this node.
   * @throws UnsupportedRepositoryOperationException if this node is not versionable.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#cancelMerge} should be used instead.
   */
  cancelMerge(version: Version): void;

  /**
   * If this node does have a corresponding node in the workspace
   * <code>srcWorkspace</code>, then this replaces this node and its subgraph
   * with a clone of the corresponding node and its subgraph.
   * <p>
   * If this node does not have a corresponding node in the workspace
   * <code>srcWorkspace</code>, then the <code>update</code> method has no
   * effect.
   * <p>
   * If the <code>update</code> succeeds the changes made are persisted
   * immediately, there is no need to call <code>save</code>.
   * <p>
   * Note that <code>update</code> does not respect the checked-in status of
   * nodes. An <code>update</code> may change a node even if it is currently
   * checked-in (This fact is only relevant in an implementation that supports
   * versioning).
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param srcWorkspace the name of the source workspace.
   * @throws NoSuchWorkspaceException If <code>srcWorkspace</code> does not exist.
   * @throws InvalidItemStateException if this <code>Session</code> (not necessarily this <code>Node</code>) has pending unsaved changes.
   * @throws AccessDeniedException If the current session does not have sufficent access to perform the operation.
   * @throws LockException if a lock prevents the update.
   * @throws RepositoryException If another error occurs.
   */
  update(srcWorkspace: string): void;

  /**
   * <i>Support for this method is only required under full versioning.</i>
   * <p>
   * This method can be thought of as a version-sensitive update.
   * <p>
   * It recursively tests each versionable node in the subgraph of this node
   * against its corresponding node in <code>srcWorkspace</code> with respect
   * to the relation between their respective base versions and either updates
   * the node in question or not, depending on the outcome of the test.
   * <p>
   * A <code>MergeException</code> is thrown if <code>bestEffort</code> is
   * <code>false</code> and a versionable node is encountered whose
   * corresponding node's base version is on a divergent branch from this
   * node's base version.
   * <p>
   * If successful, the changes are persisted immediately, there is no need to
   * call <code>save</code>.
   * <p>
   * This method returns a <code>NodeIterator</code> over all versionable
   * nodes in the subgraph that received a merge result of <i>fail</i>. If
   * <code>bestEffort</code> is <code>false</code>, this iterator will be
   * empty (since if <code>merge</code> returns successfully, instead of
   * throwing an exception, it will be because no failures were encountered).
   * If <code>bestEffort</code> is <code>true</code>, this iterator will
   * contain all nodes that received a <i>fail</i> during the course of this
   * <code>merge</code> operation.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param srcWorkspace the name of the source workspace.
   * @param bestEffort a boolean
   * @return iterator over all nodes that received a merge result of "fail" in the course of this operation.
   * @throws MergeException if <code>bestEffort</code> is <code>false</code> and a failed merge result is encountered.
   * @throws InvalidItemStateException if this session (not necessarily this <code>node</code>) has pending unsaved changes.
   * @throws NoSuchWorkspaceException if the specified <code>srcWorkspace</code> does not exist.
   * @throws AccessDeniedException if the current session does not have sufficient rights to perform the operation.
   * @throws LockException if a lock prevents the merge.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#merge} should be used instead.
   */
  merge(srcWorkspace: string, bestEffort: boolean): NodeIterator;

  /**
   * Returns the absolute path of the node in the specified workspace that
   * corresponds to <code>this</code> node.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param workspaceName the name of the workspace.
   * @return the absolute path to the corresponding node.
   * @throws ItemNotFoundException if no corresponding node is found.
   * @throws NoSuchWorkspaceException if the workspace is unknown.
   * @throws AccessDeniedException if the current <code>session</code> has insufficent access capabilities to perform this operation.
   * @throws RepositoryException if another error occurs.
   */
  getCorrespondingNodePath(workspaceName: string): string;

  /**
   * Returns an iterator over all nodes that are in the shared set of this
   * node. If this node is not shared then the returned iterator contains only
   * this node.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>NodeIterator</code>.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getSharedSet(): NodeIterator;

  /**
   * Removes this node and every other node in the shared set of this node.
   * <p>
   * This removal must be done atomically, i.e., if one of the nodes cannot be
   * removed, the method throws the exception {@link Node#remove()} would have
   * thrown in that case, and none of the nodes are removed.
   * <p>
   * If this node is not shared this method removes only this node.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @throws VersionException if the parent node of this item is versionable and checked-in or is non-versionable but its nearest versionable ancestor is checked-in and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws LockException if a lock prevents the removal of this item and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws ConstraintViolationException if removing the specified item would violate a node type or implementation-specific constraint and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws RepositoryException if another error occurs.
   * @see #removeShare()
   * @see Item#remove()
   * @see javax.jcr.Session#removeItem(String)
   * @since JCR 2.0
   */
  removeSharedSet(): void;

  /**
   * Removes this node, but does not remove any other node in the shared set
   * of this node.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @throws VersionException if the parent node of this item is versionable and checked-in or is non-versionable but its nearest versionable ancestor is checked-in and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws LockException if a lock prevents the removal of this item and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws ConstraintViolationException if removing the specified item would violate a node type or implementation-specific constraint and this implementation performs this validation immediately instead of waiting until <code>save</code>.
   * @throws RepositoryException if if this node cannot be removed without removing another node in the shared set of this node or another error occurs.
   * @see #removeSharedSet()
   * @see Item#remove()
   * @see javax.jcr.Session#removeItem(String)
   * @since JCR 2.0
   */
  removeShare(): void;

  /**
   * Returns <code>false</code> if this node is currently in the checked-in state
   * (either due to its own status as a versionable node or due to the effect of
   * a versionable node being checked in above it). Otherwise this method returns
   * <code>true</code>. This includes the case where the repository does not
   * support versioning (and therefore all nodes are always "checked-out",
   * by default).
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a boolean
   * @throws RepositoryException if an error occurs.
   */
  isCheckedOut(): boolean;

  /**
   * Restores <code>this</code> node to the state defined by the version with
   * the specified <code>versionName</code>.
   * <p>
   * This method will work regardless of whether this node is checked-in or
   * not.
   * <p>
   * An identifier collision occurs when a node exists <i>outside the subgraph
   * rooted at this node</i> with the same identifier as a node that would be
   * introduced by the <code>restore</code> operation <i>into the subgraph at
   * this node</i>. The result in such a case is governed by the
   * <code>removeExisting</code> flag. If <code>removeExisting</code> is
   * <code>true</code>, then the incoming node takes precedence, and the
   * existing node (and its subgraph) is removed (if possible; otherwise a
   * <code>RepositoryException</code> is thrown). If <code>removeExisting</code>
   * is <code>false</code>, then a <code>ItemExistsException</code> is thrown
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
   * @param versionName a <code>Version</code> object
   * @param removeExisting a boolean flag that governs what happens in case of an identifier collision.
   * @throws UnsupportedRepositoryOperationException if this node is not versionable.
   * @throws VersionException if the specified <code>version</code> is not part of this node's version history or if an attempt is made to restore the root version (<code>jcr:rootVersion</code>).
   * @throws ItemExistsException if <code>removeExisting</code> is <code>false</code> and an identifier collision occurs.
   * @throws LockException if a lock prevents the restore.
   * @throws InvalidItemStateException if this <code>Session</code> (not necessarily this <code>Node</code>) has pending unsaved changes.
   * @throws RepositoryException If another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#restore} should be used instead.
   */
  restore(versionName: string, removeExisting: boolean): void;

  /**
   * Restores <code>this</code> node to the state defined by the specified
   * <code>version</code>.
   * <p>
   * If successful, the change is persisted immediately and there is no need
   * to call <code>save</code>.
   * <p>
   * This method will work regardless of whether this node is checked-in or
   * not.
   * <p>
   * An identifier collision occurs when a node exists <i>outside the subgraph
   * rooted at this node</i> with the same identifier as a node that would be
   * introduced by the <code>restore</code> operation <i>into the subgraph at
   * this node</i>. The result in such a case is governed by the
   * <code>removeExisting</code> flag. If <code>removeExisting</code> is
   * <code>true</code>, then the incoming node takes precedence, and the
   * existing node (and its subgraph) is removed (if possible; otherwise a
   * <code>RepositoryException</code> is thrown). If <code>removeExisting</code>
   * is <code>false</code>, then a <code>ItemExistsException</code> is thrown
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
   * @param version a <code>Version</code> object
   * @param removeExisting a boolean flag that governs what happens in case of an identifier collision.
   * @throws UnsupportedRepositoryOperationException if this node is not versionable.
   * @throws VersionException if the specified <code>version</code> is not part of this node's version history or if an attempt is made to restore the root version (<code>jcr:rootVersion</code>).
   * @throws ItemExistsException if <code>removeExisting</code> is <code>false</code> and an identifier collision occurs.
   * @throws InvalidItemStateException if this <code>Session</code> (not necessarily this <code>Node</code>) has pending unsaved changes.
   * @throws LockException if a lock prevents the restore.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#restore} should be used instead.
   */
  restore(version: Version, removeExisting: boolean): void;

  /**
   * Restores the specified version to <code>relPath</code>, relative to this
   * node.
   * <p>
   * If the <code>restore</code> succeeds, the changes made to this node are
   * persisted immediately, there is no need to call <code>save</code>.
   * <p>
   * A node need not exist at relPath, though the parent of
   * <code>relPath</code> must exist.
   * <p>
   * If a node <i>does</i> exist at relPath then it must correspond to the
   * version being restored (the version must be a version <i>of that
   * node</i>) and must not be a root version (<code>jcr:rootVersion</code>),
   * otherwise a <code>VersionException</code> is thrown.
   * <p>
   * If no node exists at <code>relPath</code> then a <code>VersionException</code>
   * is thrown if the parent node of <code>relPath</code> is read-only due to
   * a check-in. However, If there <i>is</i> a node at <code>relPath</code>
   * then the read-only status of that node itself and the read-only status of
   * its parent are irrelevant. The restore will work even if one or both are
   * read-only due to a checked-in node.
   * <p>
   * An identifier collision occurs when a node exists <i>outside the subgraph
   * rooted at <code>relPath</code></i> with the same identifier as a node
   * that would be introduced by the <code>restore</code> operation <i>into
   * the subgraph at <code>relPath</code></i> (Note that in cases where there
   * is no node at <code>relPath</code>, this amounts to saying that an
   * identifier collision occurs if there exists a node <i>anywhere</i> in
   * this workspace with the same identifier as a node that would be
   * introduced by the <code>restore</code>). The result in such a case is
   * governed by the <code>removeExisting</code> flag. If
   * <code>removeExisting</code> is <code>true</code>, then the incoming node
   * takes precedence, and the existing node (and its subgraph) is removed (if
   * possible; otherwise a <code>RepositoryException</code> is thrown). If
   * <code>removeExisting</code> is <code>false</code>, then a
   * <code>ItemExistsException</code> is thrown and no changes are made. Note
   * that this applies not only to cases where the restored node itself
   * conflicts with an existing node but also to cases where a conflict occurs
   * with any node that would be introduced into the workspace by the restore
   * operation. In particular, conflicts involving subnodes of the restored
   * node that have <code>OnParentVersion</code> settings of <code>COPY</code>
   * or <code>VERSION</code> are also governed by the <code>removeExisting</code>
   * flag.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param version a version object
   * @param relPath the path to which the version is to be restored
   * @param removeExisting governs what happens on identifier collision.
   * @throws PathNotFoundException if the parent of <code>relPath</code> does not exist.
   * @throws ItemExistsException if removeExisting is false and an identifier collision occurs
   * @throws ConstraintViolationException if the would-be parent of the location <code>relPath</code> is actually a property, or if a node type restriction would be violated
   * @throws VersionException if the parent node of <code>relPath</code> is read-only due to a checked-in node or if a node exists at relPath that is not the node corresponding to the specified <code>version</code> or if an attempt is made to restore the root version (<code>jcr:rootVersion</code>).
   * @throws UnsupportedRepositoryOperationException if versioning is not supported.
   * @throws LockException if a lock prevents the restore.
   * @throws InvalidItemStateException if this <code>Session</code> (not necessarily this <code>Node</code>) has pending unsaved changes.
   * @throws RepositoryException if another error occurs
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#restore} should be used instead.
   */
  restore(version: Version, relPath: string, removeExisting: boolean): void;

  /**
   * Restores the version of this node with the specified version label.
   * <p>
   * If successful, the change is persisted immediately and there is no need
   * to call <code>save</code>.
   * <p>
   * This method will work regardless of whether this node is checked-in or
   * not.
   * <p>
   * An identifier collision occurs when a node exists <i>outside the subgraph
   * rooted at this node</i> with the same identifier as a node that would be
   * introduced by the <code>restoreByLabel</code> operation <i>into the
   * subgraph at this node</i>. The result in such a case is governed by the
   * <code>removeExisting</code> flag. If <code>removeExisting</code> is
   * <code>true</code>, then the incoming node takes precedence, and the
   * existing node (and its subgraph) is removed (if possible; otherwise a
   * <code>RepositoryException</code> is thrown). If <code>removeExisting</code>
   * is <code>false</code>, then a <code>ItemExistsException</code> is thrown
   * and no changes are made. Note that this applies not only to cases where
   * the restored node itself conflicts with an existing node but also to
   * cases where a conflict occurs with any node that would be introduced into
   * the workspace by the restore operation. In particular, conflicts
   * involving subnodes of the restored node that have
   * <code>OnParentVersion</code> settings of <code>COPY</code> or
   * <code>VERSION</code> are also governed by the <code>removeExisting</code>
   * flag.
   * <p>
   * Note the special behavior in case of chained versions where a child node
   * of this node has an on <code>OnParentVersion</code>settings of
   * <code>VERSION</code> and is mix:versionable: If there is a version of the
   * child node with the specified label, then that version is restored;
   * otherwise the determination depends on the configuration of the workspace
   * and is defined by the implementation.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param versionLabel a String
   * @param removeExisting a boolean flag that governs what happens in case of an identifier collision.
   * @throws UnsupportedRepositoryOperationException if this node is not versionable.
   * @throws VersionException if the specified <code>versionLabel</code> does not exist in this node's version history.
   * @throws ItemExistsException if <code>removeExisting</code> is <code>false</code> and an identifier collision occurs.
   * @throws LockException if a lock prevents the restore.
   * @throws InvalidItemStateException if this <code>Session</code> (not necessarily this <code>Node</code>) has pending unsaved changes.
   * @throws RepositoryException If another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#restoreByLabel} should be used instead.
   */
  restoreByLabel(versionLabel: string, removeExisting: boolean): void;

  /**
   * Returns the <code>VersionHistory</code> object of this node. Under full
   * versioning this object provides access to the <code>nt:versionHistory</code>
   * node holding this node's versions.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>VersionHistory</code> object
   * @throws UnsupportedRepositoryOperationException if this node is not versionable.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#getVersionHistory} should be used instead.
   */
  getVersionHistory(): VersionHistory;

  /**
   * Returns the current base version of this versionable node.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>Version</code> object.
   * @throws UnsupportedRepositoryOperationException if this node is not versionable.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link javax.jcr.version.VersionManager#getBaseVersion} should be used instead.
   */
  getBaseVersion(): Version;

  /**
   * Places a lock on this node. If successful, this node is said to
   * <i>hold</i> the lock.
   * <p>
   * If <code>isDeep</code> is <code>true</code> then the lock applies to this
   * node and all its descendant nodes; if <code>false</code>, the lock
   * applies only to this, the holding node.
   * <p>
   * If <code>isSessionScoped</code> is <code>true</code> then this lock will
   * expire upon the expiration of the current session (either through an
   * automatic or explicit <code>Session.logout</code>); if
   * <code>false</code>, this lock does not expire until explicitly unlocked
   * or automatically unlocked due to a implementation-specific limitation,
   * such as a timeout.
   * <p>
   * Returns a <code>Lock</code> object reflecting the state of the new lock.
   * <p>
   * If the lock is open-scoped the returned lock will include a lock token.
   * <p>
   * The lock token is also automatically added to the set of lock tokens held
   * by the current <code>Session</code>.
   * <p>
   * If successful, then the property <code>jcr:lockOwner</code> is created
   * and set to the value of <code>Session.getUserID</code> for the current
   * session and the property <code>jcr:lockIsDeep</code> is set to the value
   * passed in as <code>isDeep</code>. These changes are persisted
   * automatically; there is no need to call <code>save</code>.
   * <p>
   * Note that it is possible to lock a node even if it is checked-in (the
   * lock-related properties will be changed despite the checked-in status).
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param isDeep if <code>true</code> this lock will apply to this node and all its descendants; if <code>false</code>, it applies only to this node.
   * @param isSessionScoped if <code>true</code>, this lock expires with the current session; if <code>false</code> it expires when explicitly or automatically unlocked for some other reason.
   * @return A <code>Lock</code> object containing a lock token.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support locking.
   * @throws LockException if this node is not <code>mix:lockable</code> or this node is already locked or <code>isDeep</code> is <code>true</code> and a descendant node of this node already holds a lock or if this node has not yet been persisted.
   * @throws AccessDeniedException if this session does not have sufficient access capabilities to lock this node.
   * @throws InvalidItemStateException if this node has pending unsaved changes.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link LockManager#lock(String, boolean, boolean, long, String)} should be used instead.
   */
  lock(isDeep: boolean, isSessionScoped: boolean): Lock;

  /**
   * Returns the <code>Lock</code> object that applies to this node. This may
   * be either a lock on this node itself or a deep lock on a node above this
   * node.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return The applicable <code>Lock</code> object.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support locking.
   * @throws LockException if no lock applies to this node.
   * @throws AccessDeniedException if the curent session does not have sufficent access to get the lock.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link LockManager#getLock(String)} should be used instead.
   */
  getLock(): Lock;

  /**
   * Removes the lock on this node. Also removes the properties
   * <code>jcr:lockOwner</code> and <code>jcr:lockIsDeep</code> from this
   * node. These changes are persisted automatically; there is no need to call
   * <code>save</code>. As well, the corresponding lock token is removed from
   * the set of lock tokens held by the current <code>Session</code>.
   * <p>
   * If this node does not currently hold a lock or holds a lock for which
   * this <code>Session</code> is not the owner, then a
   * <code>LockException</code> is thrown. Note however that the system may
   * give permission to a non-owning session to unlock a lock. Typically such
   * "lock-superuser" capability is intended to facilitate administrational
   * clean-up of orphaned open-scoped locks.
   * <p>
   * Note that it is possible to unlock a node even if it is checked-in (the
   * lock-related properties will be changed despite the checked-in status).
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @throws UnsupportedRepositoryOperationException if this implementation does not support locking.
   * @throws LockException if this node does not currently hold a lock or holds a lock for which this Session does not have the correct lock token
   * @throws AccessDeniedException if the current session does not have sufficent access to unlock this node.
   * @throws InvalidItemStateException if this node has pending unsaved changes.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link LockManager#unlock(String)} should be used instead.
   */
  unlock(): void;

  /**
   * Returns <code>true</code> if this node holds a lock; otherwise returns
   * <code>false</code>. To <i>hold</i> a lock means that this node has
   * actually had a lock placed on it specifically, as opposed to just having
   * a lock <i>apply</i> to it due to a deep lock held by a node above.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>boolean</code>.
   * @throws RepositoryException if an error occurs.
   * @deprecated As of JCR 2.0, {@link LockManager#holdsLock(String)} should be used instead.
   */
  holdsLock(): boolean;

  /**
   * Returns <code>true</code> if this node is locked either as a result of a
   * lock held by this node or by a deep lock on a node above this node;
   * otherwise returns <code>false</code>. This includes the case
   * where a repository does not support locking (in which case all
   * nodes are "unlocked" by default).
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>boolean</code>.
   * @throws RepositoryException if an error occurs.
   */
  isLocked(): boolean;

  /**
   * Causes the lifecycle state of this node to undergo the specified
   * <code>transition</code>.
   * <p>
   * This method may change the value of the <code>jcr:currentLifecycleState</code>
   * property, in most cases it is expected that the implementation will
   * change the value to that of the passed <code>transition</code> parameter,
   * though this is an implementation-specific issue. If the
   * <code>jcr:currentLifecycleState</code> property is changed the change is
   * persisted immediately, there is no need to call <code>save</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param transition a state transition
   * @throws UnsupportedRepositoryOperationException if this implementation does not support lifecycle actions or if this node does not have the <code>mix:lifecycle</code> mixin.
   * @throws InvalidLifecycleTransitionException if the lifecycle transition is not successful.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  followLifecycleTransition(transition: string): void;

  /**
   * Returns the list of valid state transitions for this node.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @return a <code>String</code> array.
   * @throws UnsupportedRepositoryOperationException if this implementation does not support lifecycle actions or if this node does not have the <code>mix:lifecycle</code> mixin.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  getAllowedLifecycleTransistions(): string;
}

export default Node;
