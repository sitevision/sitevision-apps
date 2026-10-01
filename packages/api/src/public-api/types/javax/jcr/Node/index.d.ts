/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../../java/lang/String";

import type { Value } from "../Value";
import type { Property } from "../Property";

import type { InputStream } from "../../../java/io/InputStream";
import type { Binary } from "../Binary";

import type { BigDecimal } from "../../../java/math/BigDecimal";

import type { Calendar } from "../../../java/util/Calendar";
import type { NodeIterator } from "../NodeIterator";
import type { PropertyIterator } from "../PropertyIterator";
import type { Item } from "../Item";
import type { NodeType } from "../nodetype/NodeType";
import type { NodeDefinition } from "../nodetype/NodeDefinition";
import type { Version } from "../version/Version";
import type { VersionHistory } from "../version/VersionHistory";
import type { Lock } from "../lock/Lock";

/**
 * The <code>Node</code> interface represents a node in a workspace.
  
    */
export type Node = Item & {
  /**
   * Sets the single-value property of this node called <code>name</code> to
   *  the specified <code>value</code>.
   *  <p>
   *  If the property does not yet exist, it is created and its property type
   *  determined by the by the node type of this node. If, based on the
   *  <code>name</code> and <code>value</code> passed, there is more than one
   *  property definition that applies, the repository chooses one definition
   *  according to some implementation-specific criteria. Once a property with
   *  name <code>P</code> has been created, the behavior of a subsequent
   *  <code>setProperty(P,V)</code> may differ across implementations. Some
   *  repositories may allow <code>P</code> to be dynamically re-bound to a
   *  different property definition (based for example, on the new value being
   *  of a different type than the original value) while other repositories may
   *  not allow such dynamic re-binding.
   *  <p>
   *  If the property type of the supplied <code>Value</code> object is
   *  different from that required, then a best-effort conversion is
   *  attempted.
   *  <p>
   *  If the node type of this node does not indicate a specific property type,
   *  then the property type of the supplied <code>Value</code> object is used
   *  and if the property already exists it assumes both the new value and new
   *  property type.
   *  <p>
   *  Passing a <code>null</code> as the second parameter removes the property.
   *  It is equivalent to calling <code>remove</code> on the
   *  <code>Property</code> object itself.
   *  <p>
   *  This is a session-write method, meaning that changes made through this
   *  method are dispatched on {@link Session#save}.
   *  <p>
   *  A <code>ConstraintViolationException</code> will be thrown either
   *  immediately, on dispatch (save whether within or without transactions) or
   *  on persist (save without transactions, commit within a transaction), if
   *  the change would violate a node type or implementation-specific
   *  constraint. Implementations may differ on when this validation is
   *  performed.
   *  <p>
   *  A <code>VersionException</code> will be thrown either immediately, on
   *  dispatch (save whether within or without transactions) or on persist
   *  (save without transactions, commit within a transaction), if this node is
   *  read-only due to a checked-in node. Implementations may differ on when
   *  this validation is performed.
   *  <p>
   *  A <code>LockException</code> will be thrown either immediately, on
   *  dispatch (save whether within or without transactions) or on persist
   *  (save without transactions, commit within a transaction), if a lock
   *  prevents the setting of the property. Implementations may differ on when
   *  this validation is performed.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to be assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if the specified property is a&#xA; <code>DATE</code> but the <code>value</code> cannot be expressed in the&#xA; ISO 8601-based format defined in the JCR 2.0 specification and the&#xA; implementation does not support dates incompatible with that format or if&#xA; <code>value</code> cannot be converted to the type of the specified&#xA; property or if the property already exists and is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: String | string, value: Value): Property;

  /**
   * Sets the multi-value property of this node called <code>name</code> to
   *  the specified array of values.
   *  <p>
   *  If the property does not yet exist, it is created.
   *  <p>
   *  The behavior of this method is identical to that of {@link
   *  #setProperty(String name, Value value)} except that an array of
   *  <code>Value</code> objects is assigned instead of a single
   *  <code>Value</code>.
   *  <p>
   *  The property type of the property will be that specified by the node type
   *  of this node. If the property type of one or more of the supplied
   *  <code>Value</code> objects is different from that required, then a
   *  best-effort conversion is attempted, according to an
   *  implemention-dependent definition of "best effort". If the conversion
   *  fails, a <code>ValueFormatException</code> is thrown.
   *  <p>
   *  If the property is not multi-valued then a <code>ValueFormatException</code>
   *  is also thrown. If another error occurs, a <code>RepositoryException</code>
   *  is thrown.
   *  <p>
   *  If the node type of this node does not indicate a specific property type,
   *  then the property type of the supplied <code>Value</code> objects is used
   *  and if the property already exists it assumes both the new values and the
   *  new property type.
   *  <p>
   *  Passing a <code>null</code> as the second parameter removes the property.
   *  It is equivalent to calling <code>remove</code> on the
   *  <code>Property</code> object itself. Note that this is different from
   *  passing an array that contains <code>null</code> elements. In such a
   *  case, the array is compacted by removing the <code>null</code> values.
   *  The resulting set of values never contains a null. However, the set may
   *  be empty: <code>N.setProperty("P", new Value[]{null})</code> would set
   *  the property to the empty set of values.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name the name of the property to be set.
   * @param values an array of <code>Value</code> objects.
   * @return the updated <code>Property</code> object.
   * @throws ValueFormatException if <code>value</code> cannot be converted to&#xA; the type of the specified property or if the property already exists and&#xA; is not multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: String | string, values: Value[]): Property;

  /**
   * Sets the specified property to the specified array of values. Same as
   *  {@link #setProperty(String name, Value[] values)} except that the values
   *  are specified as <code>String</code> objects instead of
   *  <code>Value</code> objects.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name the name of the property to be set.
   * @param values an array of <code>Value</code> objects.
   * @return the updated <code>Property</code> object.
   * @throws ValueFormatException if a value cannot be converted to the type&#xA; of the specified property or if the property already exists and is not&#xA; multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: String | string, values: String[] | string[]): Property;

  /**
   * Sets the specified single-value property to the specified value. The
   *  behavior of this method is identical to that of {@link
   *  #setProperty(String name, Value value)} except that the value is
   *  specified as a <code>String</code>. and, if possible, the type assigned
   *  to the property is <code>STRING</code>, otherwise a best-effort
   *  conversion is attempted.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to&#xA; the type of the specified property or if the property already exists and&#xA; is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: String | string, value: String | string): Property;

  /**
   * Sets the specified single-value property to the specified value. If the
   *  property does not yet exist, it is created.
   *  <p>
   *  The behavior of this method is identical to that of {@link
   *  #setProperty(String name, String value)} except that the intended type of
   *  the property is explicitly specified by the <code>type</code> parameter.
   * @param name the name of the property to be set.
   * @param value a <code>String</code> object.
   * @param type the type of the property.
   * @return the <code>Property</code> object set, or <code>null</code> if&#xA; this method was used to remove a property (by setting its value&#xA; to <code>null</code>).
   * @throws ValueFormatException if <code>value</code> cannot be converted to&#xA; the specified type or if the property already exists and is&#xA; multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(
    name: String | string,
    value: String | string,
    type: number
  ): Property;

  /**
   * The behavior of this method is identical to that of {@link
   *  #setProperty(String name, Value value)} except that the value is
   *  specified as a {@link InputStream} and, if possible, the type assigned to
   *  the property is <code>BINARY</code>, otherwise a best-effort conversion
   *  is attempted.
   *  <p>
   *  The passed stream is closed before this method returns either normally or
   *  because of an exception.
   *  <p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to&#xA; the type of the specified property or if the property already exists and&#xA; is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link #setProperty(String, Binary)} should be&#xA; used instead.
   */
  setProperty(name: String | string, value: InputStream): Property;

  /**
   * The behavior of this method is identical to that of {@link
   *  #setProperty(String name, Value value)} except that the value is
   *  specified as a <code>boolean</code> and, if possible, the type assigned
   *  to the property is <code>BOOLEAN</code>, otherwise a best-effort
   *  conversion is attempted.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to&#xA; the type of the specified property or if the property already exists and&#xA; is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: String | string, value: boolean): Property;

  /**
   * The behavior of this method is identical to that of {@link
   *  #setProperty(String name, Value value)} except that the value is
   *  specified as a <code>double</code> and, if possible, the type assigned to
   *  the property is <code>DOUBLE</code>, otherwise a best-effort conversion
   *  is attempted.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to&#xA; the type of the specified property or if the property already exists and&#xA; is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: String | string, value: number): Property;

  /**
   * The behavior of this method is identical to that of {@link
   *  #setProperty(String name, Value value)} except that the value is
   *  specified as a {@link BigDecimal} and, if possible, the type assigned to
   *  the property is <code>DECIMAL</code>, otherwise a best-effort conversion
   *  is attempted.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to&#xA; the type of the specified property or if the property already exists and&#xA; is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  setProperty(name: String | string, value: BigDecimal): Property;

  /**
   * The behavior of this method is identical to that of {@link
   *  #setProperty(String name, Value value)} except that the value is
   *  specified as a <code>long</code> and, if possible, the type assigned to
   *  the property is <code>LONG</code>, otherwise a best-effort conversion is
   *  attempted.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if <code>value</code> cannot be converted to&#xA; the type of the specified property or if the property already exists and&#xA; is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: String | string, value: number): Property;

  /**
   * The behavior of this method is identical to that of {@link
   *  #setProperty(String name, Value value)} except that the value is
   *  specified as a {@link Calendar} and, if possible, the type assigned to
   *  the property is <code>DATE</code>, otherwise a best-effort conversion is
   *  attempted.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object
   * @throws ValueFormatException if the specified property is a&#xA; <code>DATE</code> but the <code>value</code> cannot be expressed in the&#xA; ISO 8601-based format defined in the JCR 2.0 specification (section&#xA; 3.6.4.3) and the implementation does not support dates incompatible with&#xA; that format or if <code>value</code> cannot be converted to the type of&#xA; the specified property or if the property already exists and is&#xA; multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: String | string, value: Calendar): Property;

  /**
   * The behavior of this method is identical to that of {@link
   *  #setProperty(String name, Value value)} except that the value is
   *  specified as a {@link Node} and, if possible, the type assigned to the
   *  property is <code>REFERENCE</code> or <code>WEAKREFERENCE</code>,
   *  otherwise a best-effort conversion is attempted.
   *  <p>
   *  The value to which the property is set is the identifier of the passed
   *  node.
   *  <p>
   *  If the named property does not yet exist and the repository cannot
   *  determine whether a <code>REFERENCE</code> or <code>WEAKREFERENCE</code>
   *  property is intended, then a <code>REFERENCE</code> property is created.
   *
   *  <p><strong>Sitevision note:</strong> Limited to nodes of primary {@link javax.jcr.nodetype.NodeType}
   *  <code>sv:simpleUser</code></p>
   * @param name The name of a property of this node
   * @param value The value to assigned
   * @return The updated <code>Property</code> object.
   * @throws ValueFormatException if this property is not of type&#xA; <code>REFERENCE</code> or <code>WEAKREFERENCE</code> or the specified&#xA; node is not referenceable or if the specified property already exists and&#xA; is multi-valued.
   * @throws VersionException if this node is read-only due to a checked-in&#xA; node and this implementation performs this validation immediately.
   * @throws LockException if a lock prevents the setting of the property and&#xA; this implementation performs this validation immediately.
   * @throws ConstraintViolationException if the change would violate a&#xA; node-type or other constraint and this implementation performs this&#xA; validation immediately.
   * @throws RepositoryException if another error occurs.
   */
  setProperty(name: String | string, value: Node): Property;

  /**
   * Returns the node at <code>relPath</code> relative to this node.
   *  <p>
   *  If <code>relPath</code> contains a path element that refers to a node
   *  with same-name sibling nodes without explicitly including an index using
   *  the array-style notation (<code>[x]</code>), then the index [1] is
   *  assumed (indexing of same name siblings begins at 1, not 0, in order to
   *  preserve compatibility with XPath).
   *  <p>
   *  Within the scope of a single <code>Session</code> object, if a
   *  <code>Node</code> object has been acquired, any subsequent call of
   *  <code>getNode</code> reacquiring the same node must return a
   *  <code>Node</code> object reflecting the same state as the earlier
   *  <code>Node</code> object. Whether this object is actually the same
   *  <code>Node</code> instance, or simply one wrapping the same state, is up
   *  to the implementation.
   * @param relPath The relative path of the node to retrieve.
   * @return The node at <code>relPath</code>.
   * @throws PathNotFoundException if no node exists at the specified path or&#xA; the current <code>Session</code> does not read access to the node at the&#xA; specified path.
   * @throws RepositoryException If another error occurs.
   */
  getNode(relPath: String | string): Node;

  /**
   * Returns all child nodes of this node accessible through the current
   *  <code>Session</code>. Does <i>not</i> include properties of this
   *  <code>Node</code>. The same reacquisition semantics apply as with {@link
   *  #getNode(String)}. If this node has no accessible child nodes, then an
   *  empty iterator is returned.
   *
   *  <p>
   *     <strong>Sitevision note:</strong> {@link senselogic.sitevision.api.node.NodeIteratorUtil} can help
   *     facilitate more targeted iteration over child nodes. Typically in combination with a node filter
   *     created via {@link senselogic.sitevision.api.node.NodeFilterUtil}.
   *  </p>
   * @return A <code>NodeIterator</code> over all child <code>Node</code>s of&#xA; this <code>Node</code>.
   * @throws RepositoryException if an error occurs.
   */
  getNodes(): NodeIterator;

  /**
   * Gets all child nodes of this node accessible through the current
   *  <code>Session</code> that match <code>namePattern</code>. The pattern may
   *  be a full name or a partial name with one or more wildcard characters
   *  ("<code>*</code>"), or a disjunction (using the "<code>|</code>"
   *  character to represent logical <code>OR</code>) of these. For example,
   *  <p>
   *  <code>N.getNodes("jcr:* | myapp:report | my doc")</code>
   *  <p>
   *  would return a <code>NodeIterator</code> holding all accessible child
   *  nodes of <code>N</code> that are either called '<code>myapp:report</code>',
   *  begin with the prefix '<code>jcr:</code>' or are called '<code>my
   *  doc</code>'.
   *  <p>
   *  The substrings within the pattern that are delimited by "<code>|</code>"
   *  characters and which may contain wildcard characters ("<code>*</code>")
   *  are called <i>globs</i>.
   *  <p>
   *  Note that leading and trailing whitespace around a glob is ignored, but
   *  whitespace within a disjunct forms part of the pattern to be matched.
   *  <p>
   *  The pattern is matched against the names (not the paths) of the immediate
   *  child nodes of this node.
   *  <p>
   *  If this node has no accessible matching child nodes, then an empty
   *  iterator is returned.
   *  <p>
   *  The same reacquisition semantics apply as with <code>{@link
   *  #getNode(String)}</code>.
   * @param namePattern a name pattern.
   * @return a <code>NodeIterator</code>.
   * @throws RepositoryException if an unexpected error occurs.
   */
  getNodes(namePattern: String | string): NodeIterator;

  /**
   * Returns the property at <code>relPath</code> relative to
   *  <code>this</code> node. The same reacquisition semantics apply as with
   *  <code>{@link #getNode(String)}</code>.
   *
   *  <p>
   *     <strong>Sitevision note:</strong> Use {@link senselogic.sitevision.api.property.PropertyUtil} or
   *     {@link senselogic.sitevision.api.property.Properties} instead when working with properties.
   *  </p>
   * @param relPath The relative path of the property to retrieve.
   * @return The property at <code>relPath</code>.
   * @throws PathNotFoundException if no property exists at the specified path&#xA; or if the current&#xA; <p>&#xA; <code>Session</code> does not have read access to the specified&#xA; property.
   * @throws RepositoryException If another error occurs.
   */
  getProperty(relPath: String | string): Property;

  /**
   * Returns all properties of this node accessible through the current
   *  <code>Session</code>. Does <i>not</i> include child <i>nodes</i> of this
   *  node. The same reacquisition semantics apply as with <code>{@link
   *  #getNode(String)}</code>. If this node has no accessible properties, then
   *  an empty iterator is returned.
   * @return A <code>PropertyIterator</code>.
   * @throws RepositoryException if an error occurs.
   */
  getProperties(): PropertyIterator;

  /**
   * Gets all properties of this node accessible through the current
   *  <code>Session</code> that match <code>namePattern</code>.
   *
   *  <p>The pattern may
   *  be a full name or a partial name with one or more wildcard characters
   *  ("<code>*</code>"), or a disjunction (using the "<code>|</code>"
   *  character to represent logical <code>OR</code>) of these. For example,
   *  </p><p>
   *    <code>N.getProperties("jcr:* | myapp:name | my doc")</code>
   *  </p><p>
   *  would return a <code>PropertyIterator</code> holding all accessible
   *  properties of <code>N</code> that are either called
   *  '<code>myapp:name</code>', begin with the prefix '<code>jcr:</code>' or
   *  are called '<code>my doc</code>'.
   *  </p><p>
   *  The substrings within the pattern that are delimited by "<code>|</code>"
   *  characters and which may contain wildcard characters ("<code>*</code>")
   *  are called <i>globs</i>.
   *  </p><p>
   *  Note that leading and trailing whitespace around a glob is ignored, but
   *  whitespace within a disjunct forms part of the pattern to be matched.
   *  </p><p>
   *  The pattern is matched against the names (not the paths) of the immediate
   *  child properties of this node.
   *  </p><p>
   *  If this node has no accessible matching properties, then an empty
   *  iterator is returned.
   *  </p><p>
   *  The same reacquisition semantics apply as with <code>{@link #getNode(String)}</code>.
   *  </p>
   *
   *  <p>
   *     <strong>Sitevision note:</strong> Use {@link senselogic.sitevision.api.property.PropertyUtil} or
   *     {@link senselogic.sitevision.api.property.Properties} instead when working with properties.
   *  </p>
   * @param namePattern a name pattern.
   * @return a <code>PropertyIterator</code>.
   * @throws RepositoryException if an unexpected error occurs.
   */
  getProperties(namePattern: String | string): PropertyIterator;

  /**
   * Returns the UUID of this node as recorded in this node's
   *  <code>jcr:uuid</code> property. This method only works on nodes of mixin
   *  node type <code>mix:referenceable</code>.
   *  <p>
   *  On nonreferenceable nodes, this method throws an <code>UnsupportedRepositoryOperationException</code>.
   *  To avoid throwing an exception to determine whether a node has a UUID, a
   *  call to {@link #isNodeType(String) isNodeType("mix:referenceable")} can
   *  be made.
   * @return the UUID of this node.
   * @throws UnsupportedRepositoryOperationException&#xA; if this node&#xA; nonreferenceable.
   * @throws RepositoryException if another error occurs.
   * @deprecated As of JCR 2.0, {@link #getIdentifier()} should be used&#xA; instead.
   */
  getUUID(): string;

  /**
   * Returns the identifier of this node. Applies to both referenceable and
   *  non-referenceable nodes.
   *  <p>
   *  A <code>RepositoryException</code> is thrown if an error occurs.
   * @return the identifier of this node.
   * @throws RepositoryException if an error occurs.
   * @since JCR 2.0
   */
  getIdentifier(): string;

  /**
   * Indicates whether a node exists at <code>relPath</code> Returns
   *  <code>true</code> if a node accessible through the current
   *  <code>Session</code> exists at <code>relPath</code> and
   *  <code>false</code> otherwise.
   * @param relPath The path of a (possible) node.
   * @return <code>true</code> if a node exists at <code>relPath</code>;&#xA; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  hasNode(relPath: String | string): boolean;

  /**
   * Indicates whether a property exists at <code>relPath</code> Returns
   *  <code>true</code> if a property accessible through the current
   *  <code>Session</code> exists at <code>relPath</code> and
   *  <code>false</code> otherwise.
   * @param relPath The path of a (possible) property.
   * @return <code>true</code> if a property exists at <code>relPath</code>;&#xA; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  hasProperty(relPath: String | string): boolean;

  /**
   * Indicates whether this node has child nodes. Returns <code>true</code> if
   *  this node has one or more child nodes accessible through the current
   *  <code>Session</code>; <code>false</code> otherwise.
   * @return <code>true</code> if this node has one or more child nodes;&#xA; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  hasNodes(): boolean;

  /**
   * Indicates whether this node has properties. Returns <code>true</code> if
   *  this node has one or more properties accessible through the current
   *  <code>Session</code>; <code>false</code> otherwise.
   * @return <code>true</code> if this node has one or more properties;&#xA; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  hasProperties(): boolean;

  /**
   * Returns the primary node type in effect for this node. Which
   *  <code>NodeType</code> is returned when this method is called on the root
   *  node of a workspace is up to the implementation.
   * @return a <code>NodeType</code> object.
   * @throws RepositoryException if an error occurs
   */
  getPrimaryNodeType(): NodeType;

  /**
   * Returns an array of <code>NodeType</code> objects representing the mixin
   *  node types in effect for this node. This includes only those mixin types
   *  explicitly assigned to this node. It does not include mixin types
   *  inherited through the addition of supertypes to the primary type
   *  hierarchy or through the addition of supertypes to the type hierarchy of
   *  any of the declared mixin types.
   * @return an array of <code>NodeType</code> objects.
   * @throws RepositoryException if an error occurs
   */
  getMixinNodeTypes(): NodeType;

  /**
   * Returns <code>true</code> if this node is of the specified primary node
   *  type or mixin type, or a subtype thereof. Returns <code>false</code>
   *  otherwise.
   *  <p>
   *  This method respects the effective node type of the node.
   * @param nodeTypeName the name of a node type.
   * @return <code>true</code> If this node is of the specified primary node&#xA; type or mixin type, or a subtype thereof. Returns&#xA; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  isNodeType(nodeTypeName: String | string): boolean;

  /**
   * A constant for the JCR name <code>jcr:content</code>. This is the name of
   *  a child node  declared in {@link NodeType#NT_FILE nt:file} and a property
   *  declared in {@link javax.jcr.nodetype.NodeType#NT_LINKED_FILE
   *  nt:linkedFile}.
   * @since JCR 2.0
   */
  JCR_CONTENT: string;

  /**
   * A constant for the node name <code>jcr:propertyDefinition</code> declared
   *  in {@link NodeType#NT_FILE nt:nodeType}.
   * @since JCR 2.0
   */
  JCR_PROPERTY_DEFINITION: string;

  /**
   * A constant for the node name <code>jcr:childNodeDefinition</code>
   *  declared in {@link NodeType#NT_FILE nt:nodeType}.
   * @since JCR 2.0
   */
  JCR_CHILD_NODE_DEFINITION: string;

  /**
   * A constant for the node name <code>jcr:rootVersion</code> declared in
   *  {@link NodeType#NT_VERSION_HISTORY nt:versionHistory}.
   * @since JCR 2.0
   */
  JCR_ROOT_VERSION: string;

  /**
   * A constant for the node name <code>jcr:versionLabels</code> declared in
   *  {@link NodeType#NT_VERSION_HISTORY nt:versionHistory}.
   * @since JCR 2.0
   */
  JCR_VERSION_LABELS: string;

  /**
   * A constant for the node name <code>jcr:frozenNode</code> declared in
   *  {@link NodeType#NT_VERSION nt:version}.
   * @since JCR 2.0
   */
  JCR_FROZEN_NODE: string;
};
