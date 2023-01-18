import type Value from "../Value";

import type Binary from "../Binary";

import type Node from "../Node";
import type PropertyDefinition from "../nodetype/PropertyDefinition";

import type Item from "../Item";

/**
 * A <code>Property</code> object represents the smallest granularity of content
 * storage. It has a single parent node and no children. A property consists of
 * a name and a value, or in the case of multi-value properties, a set of values
 * all of the same type. See <code>{@link Value}</code>.
  
    */
type Property = Item & {
  /**
   * Returns the value of this  property as a <code>Value</code> object.
   * <p>
   * The object returned is a copy of the stored value and is immutable.
   * @return the <code>Value</code>.
   * @throws ValueFormatException if the property is multi-valued.
   * @throws RepositoryException if another error occurs.
   */
  getValue(): Value;

  /**
   * Returns an array of all the values of this property. Used to access
   * multi-value properties. The array returned is a copy of the stored
   * values, so changes to it are not reflected in internal storage.
   * @return a <code>Value</code> array.
   * @throws ValueFormatException if the property is single-valued.
   * @throws RepositoryException if another error occurs.
   */
  getValues(): Value;

  /**
   * Returns a <code>String</code> representation of the value of this
   * property. A shortcut for <code>Property.getValue().getString()</code>.
   * @return A string representation of the value of this property.
   * @throws ValueFormatException if conversion to a <code>String</code> is not possible or if the property is multi-valued.
   * @throws RepositoryException if another error occurs.
   * @see Value
   */
  getString(): string;

  /**
   * Returns a <code>long</code> representation of the value of this property.
   * A shortcut for <code>Property.getValue().getLong()</code>.
   * @return A <code>long</code> representation of the value of this property.
   * @throws ValueFormatException if conversion to a <code>long</code> is not possible or if the property is multi-valued.
   * @throws RepositoryException if another error occurs.
   * @see Value
   */
  getLong(): number;

  /**
   * Returns a <code>double</code> representation of the value of this
   * property. A shortcut for <code>Property.getValue().getDouble()</code>.
   * @return A <code>double</code> representation of the value of this property.
   * @throws ValueFormatException if conversion to a <code>double</code> is not possible or if the property is multi-valued.
   * @throws RepositoryException if another error occurs.
   * @see Value
   */
  getDouble(): number;

  /**
   * Returns a <code>BigDecimal</code> representation of the value of this
   * property. A shortcut for <code>Property.getValue().getDecimal()</code>.
   * @return A <code>BigDecimal</code> representation of the value of this property.
   * @throws ValueFormatException if conversion to a <code>BigDecimal</code> is not possible or if the property is multi-valued.
   * @throws RepositoryException if another error occurs
   * @see Value
   * @since JCR 2.0
   */
  getDecimal(): unknown;

  /**
   * Returns a <code>Calendar</code> representation of the value of this
   * property. A shortcut for <code>Property.getValue().getDate()</code>.
   * @return A <code>Calendar</code> representation of the value of this property.
   * @throws ValueFormatException if conversion to a string is not possible or if the property is multi-valued.
   * @throws RepositoryException if another error occurs.
   * @see Value
   */
  getDate(): unknown;

  /**
   * Returns a <code>boolean</code> representation of the value of this
   * property. A shortcut for <code>Property.getValue().getBoolean()</code>.
   * @return A <code>boolean</code> representation of the value of this property.
   * @throws ValueFormatException if conversion to a <code>boolean</code> is not possible or if the property is multi-valued.
   * @throws RepositoryException if another error occurs.
   * @see Value
   */
  getBoolean(): boolean;

  /**
   * If this property is of type <code>REFERENCE</code>,
   * <code>WEAKREFERENCE</code> or <code>PATH</code> (or convertible to one of
   * these types) this method returns the <code>Node</code> to which this
   * property refers.
   * <p>
   * If this property is of type <code>PATH</code> and it contains a relative
   * path, it is interpreted relative to the parent node of this property. For
   * example "<code>.</code>" refers to the parent node itself,
   * "<code>..</code>" to the parent of the parent node and "<code>foo</code>"
   * to a sibling node of this property.
   * @return the referenced Node
   * @throws ValueFormatException if this property cannot be converted to a referring type (<code>REFERENCE</code>, <code>WEAKREFERENCE</code> or <code>PATH</code>), if the property is multi-valued or if this property is a referring type but is currently part of the frozen state of a version in version storage.
   * @throws ItemNotFoundException If this property is of type <code>PATH</code> or <code>WEAKREFERENCE</code> and no target node accessible by the current <code>Session</code> exists in this workspace. Note that this applies even if the property is a <code>PATHS</code> and a <i>property</i> exists at the specified location. To dereference to a target property (as opposed to a target node), the method <code>Property.getProperty</code> is used.
   * @throws RepositoryException if another error occurs.
   */
  getNode(): Node;

  /**
   * If this property is of type <code>PATH</code> (or convertible to this
   * type) this method returns the <code>Property</code> to which <i>this</i>
   * property refers.
   * <p>
   * If this property contains a relative path, it is interpreted relative to
   * the parent node of this property. Therefore, when resolving such a
   * relative path, the segment "<code>.</code>" refers to
   * the parent node itself, "<code>..</code>" to the parent of the parent
   * node and "<code>foo</code>" to a sibling property of this property or
   * this property itself.
   * <p>
   * For example, if this property is located at
   * <code>/a/b/c</code> and it has a value of "<code>../d</code>" then this
   * method will return the property at <code>/a/d</code> if such exists.
   * <p>
   * If this property is multi-valued, this method throws a
   * <code>ValueFormatException</code>.
   * <p>
   * If this property cannot be converted to a <code>PATH</code> then a
   * <code>ValueFormatException</code> is thrown.
   * <p>
   * If this property is currently part of the frozen state of a version in
   * version storage, this method will throw a <code>ValueFormatException</code>.
   * @return the referenced property
   * @throws ValueFormatException if this property cannot be converted to a <code>PATH</code>, if the property is multi-valued or if this property is a referring type but is currently part of the frozen state of a version in version storage.
   * @throws ItemNotFoundException If no property accessible by the current <code>Session</code> exists in this workspace at the specified path. Note that this applies even if a <i>node</i> exists at the specified location. To dereference to a target node, the method <code>Property.getNode</code> is used.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  getProperty(): Property;

  /**
   * Returns the property definition that applies to this property. In some
   * cases there may appear to be more than one definition that could apply to
   * this node. However, it is assumed that upon creation or change of this
   * property, a single particular definition is chosen by the implementation.
   * It is <i>that</i> definition that this method returns. How this governing
   * definition is selected upon property creation or change from among others
   * which may have been applicable is an implementation issue and is not
   * covered by this specification.
   * @return a <code>PropertyDefinition</code> object.
   * @throws RepositoryException if an error occurs.
   * @see javax.jcr.nodetype.NodeType#getPropertyDefinitions
   */
  getDefinition(): PropertyDefinition;

  /**
   * Returns the type of this <code>Property</code>. One of: <ul>
   * <li><code>PropertyType.STRING</code></li> <li><code>PropertyType.BINARY</code></li>
   * <li><code>PropertyType.DATE</code></li> <li><code>PropertyType.DOUBLE</code></li>
   * <li><code>PropertyType.LONG</code></li> <li><code>PropertyType.BOOLEAN</code></li>
   * <li><code>PropertyType.NAME</code></li> <li><code>PropertyType.PATH</code></li>
   * <li><code>PropertyType.REFERENCE</code></li> <li><code>PropertyType.WEAKREFERENCE</code></li>
   * <li><code>PropertyType.URI</code></li> </ul> The type returned is that
   * which was set at property creation. Note that for some property
   * <code>p</code>, the type returned by <code>p.getType()</code> will differ
   * from the type returned by <code>p.getDefinition.getRequiredType()</code>
   * only in the case where the latter returns <code>UNDEFINED</code>. The
   * type of a property instance is never <code>UNDEFINED</code> (it must
   * always have some actual type).
   * @return an int
   * @throws RepositoryException if an error occurs
   */
  getType(): number;

  /**
   * Returns <code>true</code> if this property is multi-valued and
   * <code>false</code> if this property is single-valued.
   * @return <code>true</code> if this property is multi-valued; <code>false</code> otherwise.
   * @throws RepositoryException if an error occurs.
   */
  isMultiple(): boolean;

  /**
   * A constant for the property name <code>jcr:primaryType</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_BASE
   * nt:base}.
   * @since JCR 2.0
   */
  JCR_PRIMARY_TYPE: string;

  /**
   * A constant for the property name <code>jcr:mixinTypes</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_BASE
   * nt:base}.
   * @since JCR 2.0
   */
  JCR_MIXIN_TYPES: string;

  /**
   * A constant for the property name <code>jcr:content</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_LINKED_FILE
   * nt:linkedFile}. Note, <code>jcr:content</code> is also the name of a
   * child node declared in {@link javax.jcr.nodetype.NodeType#NT_FILE
   * nt:file}.
   * @since JCR 2.0
   */
  JCR_CONTENT: string;

  /**
   * A constant for the property name <code>jcr:data</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_RESOURCE
   * nt:resource}.
   * @since JCR 2.0
   */
  JCR_DATA: string;

  /**
   * A constant for the property name <code>jcr:protocol</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_ADDRESS
   * nt:address}.
   * @since JCR 2.0
   */
  JCR_PROTOCOL: string;

  /**
   * A constant for the property name <code>jcr:host</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_ADDRESS
   * nt:address}.
   * @since JCR 2.0
   */
  JCR_HOST: string;

  /**
   * A constant for the property name <code>jcr:port</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_ADDRESS
   * nt:address}.
   * @since JCR 2.0
   */
  JCR_PORT: string;

  /**
   * A constant for the property name <code>jcr:repository</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_ADDRESS
   * nt:address}.
   * @since JCR 2.0
   */
  JCR_REPOSITORY: string;

  /**
   * A constant for the property name <code>jcr:workspace</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_ADDRESS
   * nt:address}.
   * @since JCR 2.0
   */
  JCR_WORKSPACE: string;

  /**
   * A constant for the property name <code>jcr:path</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_ADDRESS
   * nt:address}.
   * @since JCR 2.0
   */
  JCR_PATH: string;

  /**
   * A constant for the property name <code>jcr:id</code> (in expanded form),
   * declared in node type {@link javax.jcr.nodetype.NodeType#NT_ADDRESS
   * nt:address}.
   * @since JCR 2.0
   */
  JCR_ID: string;

  /**
   * A constant for the property name <code>jcr:uuid</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_REFERENCEABLE
   * mix:referenceable}.
   * @since JCR 2.0
   */
  JCR_UUID: string;

  /**
   * A constant for the property name <code>jcr:title</code> (in expanded
   * form), declared in node types {@link javax.jcr.nodetype.NodeType#MIX_TITLE
   * mix:title} and {@link javax.jcr.nodetype.NodeType#NT_ACTIVITY
   * nt:activity}.
   * @since JCR 2.0
   */
  JCR_TITLE: string;

  /**
   * A constant for the property name <code>jcr:description</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_TITLE
   * mix:title}.
   * @since JCR 2.0
   */
  JCR_DESCRIPTION: string;

  /**
   * A constant for the property name <code>jcr:created</code> (in expanded
   * form), declared in node types {@link javax.jcr.nodetype.NodeType#MIX_CREATED
   * mix:created} and {@link javax.jcr.nodetype.NodeType#NT_VERSION
   * nt:version}.
   * @since JCR 2.0
   */
  JCR_CREATED: string;

  /**
   * A constant for the property name <code>jcr:createdBy</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_CREATED
   * mix:created}.
   * @since JCR 2.0
   */
  JCR_CREATED_BY: string;

  /**
   * A constant for the property name <code>jcr:lastModified</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_LAST_MODIFIED
   * mix:lastModified}.
   * @since JCR 2.0
   */
  JCR_LAST_MODIFIED: string;

  /**
   * A constant for the property name <code>jcr:lastModifiedBy</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_LAST_MODIFIED
   * mix:lastModified}.
   * @since JCR 2.0
   */
  JCR_LAST_MODIFIED_BY: string;

  /**
   * A constant for the property name <code>jcr:language</code> (in expanded
   * form), declared in node types {@link javax.jcr.nodetype.NodeType#MIX_LANGUAGE
   * mix:language} and {@link javax.jcr.nodetype.NodeType#NT_QUERY nt:query}.
   * @since JCR 2.0
   */
  JCR_LANGUAGE: string;

  /**
   * A constant for the property name <code>jcr:mimeType</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_MIMETYPE
   * mix:mimeType}.
   * @since JCR 2.0
   */
  JCR_MIMETYPE: string;

  /**
   * A constant for the property name <code>jcr:encoding</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_MIMETYPE
   * mix:mimeType}.
   * @since JCR 2.0
   */
  JCR_ENCODING: string;

  /**
   * A constant for the property name <code>jcr:nodeTypeName</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_NODE_TYPE
   * nt:nodeType}.
   * @since JCR 2.0
   */
  JCR_NODE_TYPE_NAME: string;

  /**
   * A constant for the property name <code>jcr:supertypes</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_NODE_TYPE
   * nt:nodeType}.
   * @since JCR 2.0
   */
  JCR_SUPERTYPES: string;

  /**
   * A constant for the property name <code>jcr:isAbstract</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_NODE_TYPE
   * nt:nodeType}.
   * @since JCR 2.0
   */
  JCR_IS_ABSTRACT: string;

  /**
   * A constant for the property name <code>jcr:isMixin</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_NODE_TYPE
   * nt:nodeType}.
   * @since JCR 2.0
   */
  JCR_IS_MIXIN: string;

  /**
   * A constant for the property name <code>jcr:hasOrderableChildNodes</code>
   * (in expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_NODE_TYPE
   * nt:nodeType}.
   * @since JCR 2.0
   */
  JCR_HAS_ORDERABLE_CHILD_NODES: string;

  /**
   * A constant for the property name <code>jcr:primaryItemName</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_NODE_TYPE
   * nt:nodeType}.
   * @since JCR 2.0
   */
  JCR_PRIMARY_ITEM_NAME: string;

  /**
   * A constant for the property name <code>jcr:name</code> (in expanded
   * form), declared in node types {@link javax.jcr.nodetype.NodeType#NT_PROPERTY_DEFINITION
   * nt:propertyDefinition} and {@link javax.jcr.nodetype.NodeType#NT_CHILD_NODE_DEFINITION
   * nt:childNodeDefinition}.
   * @since JCR 2.0
   */
  JCR_NAME: string;

  /**
   * A constant for the property name <code>jcr:autoCreated</code> (in
   * expanded form), declared in node types {@link javax.jcr.nodetype.NodeType#NT_PROPERTY_DEFINITION
   * nt:propertyDefinition} and {@link javax.jcr.nodetype.NodeType#NT_CHILD_NODE_DEFINITION
   * nt:childNodeDefinition}.
   * @since JCR 2.0
   */
  JCR_AUTOCREATED: string;

  /**
   * A constant for the property name <code>jcr:mandatory</code> (in expanded
   * form), declared in node types {@link javax.jcr.nodetype.NodeType#NT_PROPERTY_DEFINITION
   * nt:propertyDefinition} and {@link javax.jcr.nodetype.NodeType#NT_CHILD_NODE_DEFINITION
   * nt:childNodeDefinition}.
   * @since JCR 2.0
   */
  JCR_MANDATORY: string;

  /**
   * A constant for the property name <code>jcr:protected</code> (in expanded
   * form), declared in node types {@link javax.jcr.nodetype.NodeType#NT_PROPERTY_DEFINITION
   * nt:propertyDefinition} and {@link javax.jcr.nodetype.NodeType#NT_CHILD_NODE_DEFINITION
   * nt:childNodeDefinition}.
   * @since JCR 2.0
   */
  JCR_PROTECTED: string;

  /**
   * A constant for the property name <code>jcr:onParentVersion</code> (in
   * expanded form), declared in node types {@link javax.jcr.nodetype.NodeType#NT_PROPERTY_DEFINITION
   * nt:propertyDefinition} and {@link javax.jcr.nodetype.NodeType#NT_CHILD_NODE_DEFINITION
   * nt:childNodeDefinition}.
   * @since JCR 2.0
   */
  JCR_ON_PARENT_VERSION: string;

  /**
   * A constant for the property name <code>jcr:requiredType</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_PROPERTY_DEFINITION
   * nt:propertyDefinition}.
   * @since JCR 2.0
   */
  JCR_REQUIRED_TYPE: string;

  /**
   * A constant for the property name <code>jcr:valueConstraints</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_PROPERTY_DEFINITION
   * nt:propertyDefinition}.
   * @since JCR 2.0
   */
  JCR_VALUE_CONSTRAINTS: string;

  /**
   * A constant for the property name <code>jcr:defaultValues</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_PROPERTY_DEFINITION
   * nt:propertyDefinition}.
   * @since JCR 2.0
   */
  JCR_DEFAULT_VALUES: string;

  /**
   * A constant for the property name <code>jcr:multiple</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_PROPERTY_DEFINITION
   * nt:propertyDefinition}.
   * @since JCR 2.0
   */
  JCR_MULTIPLE: string;

  /**
   * A constant for the property name <code>jcr:requiredPrimaryTypes</code>
   * (in expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_CHILD_NODE_DEFINITION
   * nt:childNodeDefinition}.
   * @since JCR 2.0
   */
  JCR_REQUIRED_PRIMARY_TYPES: string;

  /**
   * A constant for the property name <code>jcr:defaultPrimaryType</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_CHILD_NODE_DEFINITION
   * nt:childNodeDefinition}.
   * @since JCR 2.0
   */
  JCR_DEFAULT_PRIMARY_TYPE: string;

  /**
   * A constant for the property name <code>jcr:sameNameSiblings</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_CHILD_NODE_DEFINITION
   * nt:childNodeDefinition}.
   * @since JCR 2.0
   */
  JCR_SAME_NAME_SIBLINGS: string;

  /**
   * A constant for the property name <code>jcr:lockOwner</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_LOCKABLE
   * mix:lockable}.
   * @since JCR 2.0
   */
  JCR_LOCK_OWNER: string;

  /**
   * A constant for the property name <code>jcr:lockIsDeep</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_LOCKABLE
   * mix:lockable}.
   * @since JCR 2.0
   */
  JCR_LOCK_IS_DEEP: string;

  /**
   * A constant for the property name <code>jcr:lifecyclePolicy</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_LIFECYCLE
   * mix:lifecycle}.
   * @since JCR 2.0
   */
  JCR_LIFECYCLE_POLICY: string;

  /**
   * A constant for the property name <code>jcr:currentLifecycleState</code>
   * (in expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_LIFECYCLE
   * mix:lifecycle}.
   * @since JCR 2.0
   */
  JCR_CURRENT_LIFECYCLE_STATE: string;

  /**
   * A constant for the property name <code>jcr:isCheckedOut</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_SIMPLE_VERSIONABLE
   * mix:simpleVersionable}.
   * @since JCR 2.0
   */
  JCR_IS_CHECKED_OUT: string;

  /**
   * A constant for the property name <code>jcr:frozenPrimaryType</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_FROZEN_NODE
   * nt:frozenNode}.
   * @since JCR 2.0
   */
  JCR_FROZEN_PRIMARY_TYPE: string;

  /**
   * A constant for the property name <code>jcr:frozenMixinTypes</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_FROZEN_NODE
   * nt:frozenNode}.
   * @since JCR 2.0
   */
  JCR_FROZEN_MIXIN_TYPES: string;

  /**
   * A constant for the property name <code>jcr:frozenUuid</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_FROZEN_NODE
   * nt:frozenNode}.
   * @since JCR 2.0
   */
  JCR_FROZEN_UUID: string;

  /**
   * A constant for the property name <code>jcr:versionHistory</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_VERSIONABLE
   * mix:versionable}.
   * @since JCR 2.0
   */
  JCR_VERSION_HISTORY: string;

  /**
   * A constant for the property name <code>jcr:baseVersion</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_VERSIONABLE
   * mix:versionable}.
   * @since JCR 2.0
   */
  JCR_BASE_VERSION: string;

  /**
   * A constant for the property name <code>jcr:predecessors</code> (in
   * expanded form), declared in node types {@link javax.jcr.nodetype.NodeType#MIX_VERSIONABLE
   * mix:versionable} and {@link javax.jcr.nodetype.NodeType#NT_VERSION
   * nt:version}.
   * @since JCR 2.0
   */
  JCR_PREDECESSORS: string;

  /**
   * A constant for the property name <code>jcr:mergeFailed</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_VERSIONABLE
   * mix:versionable}.
   * @since JCR 2.0
   */
  JCR_MERGE_FAILED: string;

  /**
   * A constant for the property name <code>jcr:activity</code> (in expanded
   * form), declared in node types {@link javax.jcr.nodetype.NodeType#MIX_VERSIONABLE
   * mix:versionable} and {@link javax.jcr.nodetype.NodeType#NT_VERSION
   * nt:version}.
   * @since JCR 2.0
   */
  JCR_ACTIVITY: string;

  /**
   * A constant for the property name <code>jcr:configuration</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#MIX_VERSIONABLE
   * mix:versionable}.
   * @since JCR 2.0
   */
  JCR_CONFIGURATION: string;

  /**
   * A constant for the property name <code>jcr:versionableUuid</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_VERSION
   * nt:version}.
   * @since JCR 2.0
   */
  JCR_VERSIONABLE_UUID: string;

  /**
   * A constant for the property name <code>jcr:copiedFrom</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_VERSION
   * nt:version}.
   * @since JCR 2.0
   */
  JCR_COPIED_FROM: string;

  /**
   * A constant for the property name <code>jcr:successors</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_VERSION
   * nt:versione}.
   * @since JCR 2.0
   */
  JCR_SUCCESSORS: string;

  /**
   * A constant for the property name <code>jcr:childVersionHistory</code> (in
   * expanded form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_VERSIONED_CHILD
   * nt:versionedChild}.
   * @since JCR 2.0
   */
  JCR_CHILD_VERSION_HISTORY: string;

  /**
   * A constant for the property name <code>jcr:root</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_CONFIGURATION
   * nt:configuration}.
   * @since JCR 2.0
   */
  JCR_ROOT: string;

  /**
   * A constant for the property name <code>jcr:statement</code> (in expanded
   * form), declared in node type {@link javax.jcr.nodetype.NodeType#NT_QUERY
   * nt:query}.
   * @since JCR 2.0
   */
  JCR_STATEMENT: string;
};

export = Property;
