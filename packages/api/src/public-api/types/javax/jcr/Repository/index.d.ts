import type { String } from "../../../java/lang/String";

import type { Value } from "../Value";
import type { Credentials } from "../Credentials";
import type { Session } from "../../../../server/Session";

/**
 * The entry point into the content repository. The <code>Repository</code>
 *  object is usually acquired through the {@link RepositoryFactory}.
  
    */
export type Repository = {
  /**
   * Returns a string array holding all descriptor keys available for this
   *  implementation, both the standard descriptors defined by the string
   *  constants in this interface and any implementation-specific descriptors.
   *  Used in conjunction with {@link #getDescriptorValue(String key)} and
   *  {@link #getDescriptorValues(String key)} to query information about this
   *  repository implementation.
   * @return a string array holding all descriptor keys.
   */
  getDescriptorKeys(): string;

  /**
   * <p> A convenience method. The call  <p> <code>String s =
   *  repository.getDescriptor(key);</code>  <p> is equivalent to
   *  <p>
   *  <code>Value v = repository.getDescriptorValue(key);<br>String s = (v ==
   *  null) ? null : v.getString();</code>
   * @param key a descriptor key.
   * @return a descriptor value in string form.
   */
  getDescriptor(key: String | string): string;

  /**
   * Equivalent to <code>login(null, null)</code>.
   * @return a valid session for the user to access the repository.
   * @throws LoginException if authentication or authorization fails.
   * @throws RepositoryException if another error occurs.
   */
  login(): Session;

  /**
 * The descriptor key for the version of the specification that this
 *  repository implements. For JCR 2.0 the value of this descriptor is the
 *  <code>String</code> "2.0".
  
    */
  SPEC_VERSION_DESC: string;

  /**
 * The descriptor key for the name of the specification that this repository
 *  implements. For JCR 2.0 the value of this descriptor is the
 *  <code>String</code> "Content Repository for Java Technology API".
  
    */
  SPEC_NAME_DESC: string;

  /**
 * The descriptor key for the name of the repository vendor. The descriptor
 *  returned for this key is a <code>String</code>.
  
    */
  REP_VENDOR_DESC: string;

  /**
 * The descriptor key for the URL of the repository vendor. The descriptor
 *  returned for this key is a <code>String</code>.
  
    */
  REP_VENDOR_URL_DESC: string;

  /**
 * The descriptor key for the name of this repository implementation. The
 *  descriptor returned for this key is a <code>String</code>.
  
    */
  REP_NAME_DESC: string;

  /**
 * The descriptor key for the version of this repository implementation. The
 *  descriptor returned for this key is a <code>String</code>.
  
    */
  REP_VERSION_DESC: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if repository content can be updated through the JCR API (as
   *  opposed to having read-only access).
   * @since JCR 2.0
   */
  WRITE_SUPPORTED: string;

  /**
   * Key to a <code>String</code> descriptor. Returns one of the following
   *  <code>javax.jcr.Repository</code> constants indicating the stability of
   *  identifiers:
   *  <dl>
   *  <dt>IDENTIFIER_STABILITY_METHOD_DURATION</dt>
   *  <dd>Identifiers may change between method calls.</dd>
   *  <dt>IDENTIFIER_STABILITY_SAVE_DURATION</dt>
   *  <dd>Identifiers are guaranteed stable within a single save/refresh cycle.</dd>
   *  <dt>IDENTIFIER_STABILITY_SESSION_DURATION</dt>
   *  <dd>Identifiers are guaranteed stable within a single session.</dd>
   *  <dt>IDENTIFIER_STABILITY_INDEFINITE_DURATION</dt>
   *  <dd>Identifiers are guaranteed to be stable forever.</dd>
   *  </dl>
   * @since JCR 2.0
   */
  IDENTIFIER_STABILITY: string;

  /**
   * One of four possible values for the descriptor <code>IDENTIFIER_STABILITY</code>.
   *  Indicates that identifiers may change between method calls.
   * @since JCR 2.0
   */
  IDENTIFIER_STABILITY_METHOD_DURATION: string;

  /**
   * One of four possible values for the descriptor <code>IDENTIFIER_STABILITY</code>.
   *  Indicates that identifiers are guaranteed stable within a single
   *  save/refresh cycle.
   * @since JCR 2.0
   */
  IDENTIFIER_STABILITY_SAVE_DURATION: string;

  /**
   * One of four possible values for the descriptor <code>IDENTIFIER_STABILITY</code>.
   *  Indicates that identifiers are guaranteed stable within a single
   *  session.
   * @since JCR 2.0
   */
  IDENTIFIER_STABILITY_SESSION_DURATION: string;

  /**
   * One of four possible values for the descriptor <code>IDENTIFIER_STABILITY</code>.
   *  Indicates that identifiers are guaranteed to be stable forever.
   * @since JCR 2.0
   */
  IDENTIFIER_STABILITY_INDEFINITE_DURATION: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if XML export is supported.
   * @since JCR 2.0
   */
  OPTION_XML_EXPORT_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if XML import is supported.
   * @since JCR 2.0
   */
  OPTION_XML_IMPORT_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if unfiled content is supported.
   * @since JCR 2.0
   */
  OPTION_UNFILED_CONTENT_SUPPORTED: string;

  /**
 * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 *  and only if full versioning is supported.
  
    */
  OPTION_VERSIONING_SUPPORTED: string;

  OPTION_SIMPLE_VERSIONING_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if activities are supported.
   * @since JCR 2.0
   */
  OPTION_ACTIVITIES_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if configurations and baselines are supported.
   * @since JCR 2.0
   */
  OPTION_BASELINES_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if access control is supported.
   * @since JCR 2.0
   */
  OPTION_ACCESS_CONTROL_SUPPORTED: string;

  /**
 * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 *  and only if locking is supported.
  
    */
  OPTION_LOCKING_SUPPORTED: string;

  /**
 * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 *  and only if asynchronous observation is supported.
  
    */
  OPTION_OBSERVATION_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if journaled observation is supported.
   * @since JCR 2.0
   */
  OPTION_JOURNALED_OBSERVATION_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if retention and hold are supported.
   * @since JCR 2.0
   */
  OPTION_RETENTION_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if lifecycles are supported.
   * @since JCR 2.0
   */
  OPTION_LIFECYCLE_SUPPORTED: string;

  /**
 * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 *  and only if transactions are supported.
  
    */
  OPTION_TRANSACTIONS_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if workspace management is supported.
   * @since JCR 2.0
   */
  OPTION_WORKSPACE_MANAGEMENT_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if the primary node type of an existing node can be updated.
   * @since JCR 2.0
   */
  OPTION_UPDATE_PRIMARY_NODE_TYPE_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if the mixin node types of an existing node can be added and
   *  removed.
   * @since JCR 2.0
   */
  OPTION_UPDATE_MIXIN_NODE_TYPES_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if the creation of shareable nodes is supported.
   * @since JCR 2.0
   */
  OPTION_SHAREABLE_NODES_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if node type management is supported.
   * @since JCR 2.0
   */
  OPTION_NODE_TYPE_MANAGEMENT_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if node and property with same name is supported.
   * @since JCR 2.0
   */
  OPTION_NODE_AND_PROPERTY_WITH_SAME_NAME_SUPPORTED: string;

  /**
   * Key to <code>String</code> descriptor. Returns one of the following
   *  <code>javax.jcr.Repository</code> constants indicating the level of
   *  support for node type inheritance: <dl> <dt>NODE_TYPE_MANAGEMENT_INHERITANCE_MINIMAL</dt>
   *  <dd> Registration of primary node types is limited to those which have
   *  only nt:base as supertype. Registration of mixin node types is limited to
   *  those without any supertypes. </dd> <dt>NODE_TYPE_MANAGEMENT_INHERITANCE_SINGLE</dt>
   *  <dd> Registration of primary node types is limited to those with exactly
   *  one supertype. Registration of mixin node types is limited to those with
   *  at most one supertype. </dd> <dt>NODE_TYPE_MANAGEMENT_INHERITANCE_MULTIPLE</dt>
   *  <dd> Primary node types can be registered with one or more supertypes.
   *  Mixin node types can be registered with zero or more supertypes. </dd>
   *  </dl>
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_INHERITANCE: string;

  /**
   * One of three possible values for the descriptor <code>NODE_TYPE_MANAGEMENT_INHERITANCE</code>.
   *  Indicates that registration of primary node types is limited to those
   *  which have only nt:base as supertype. Registration of mixin node types is
   *  limited to those without any supertypes.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_INHERITANCE_MINIMAL: string;

  /**
   * One of three possible values for the descriptor <code>NODE_TYPE_MANAGEMENT_INHERITANCE</code>.
   *  Indicates that registration of primary node types is limited to those
   *  with exactly one supertype. Registration of mixin node types is limited
   *  to those with at most one supertype.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_INHERITANCE_SINGLE: string;

  /**
   * One of three possible values for the descriptor <code>NODE_TYPE_MANAGEMENT_INHERITANCE</code>.
   *  Indicates that primary node types can be registered with one or more
   *  supertypes. Mixin node types can be registered with zero or more
   *  supertypes.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_INHERITANCE_MULTIPLE: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if override of inherited property or child node definitions is
   *  supported.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_OVERRIDES_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if primary items are supported.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_PRIMARY_ITEM_NAME_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if preservation of child node ordering is supported.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_ORDERABLE_CHILD_NODES_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if residual property and child node definitions are supported.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_RESIDUAL_DEFINITIONS_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if autocreated properties and child nodes are supported.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_AUTOCREATED_DEFINITIONS_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if same-name sibling child nodes are supported.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_SAME_NAME_SIBLINGS_SUPPORTED: string;

  /**
   * Key to a <code>long[]</code> descriptor. Returns an array holding the
   *  <code>javax.jcr.PropertyType</code> constants for the property types
   *  (including <code>UNDEFINED</code>, if supported) that a registered node
   *  type can specify, or a zero-length array if registered node types cannot
   *  specify property definitions.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_PROPERTY_TYPES: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if multivalue properties are supported.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_MULTIVALUED_PROPERTIES_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if registration of a node types with more than one
   *  <code>BINARY</code> property is permitted.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_MULTIPLE_BINARY_PROPERTIES_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns true if and only
   *  value-constraints are supported.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_VALUE_CONSTRAINTS_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns true if and only the
   *  update of node types is supported for node types currently in use as the
   *  type of an existing node in the repository.
   * @since JCR 2.0
   */
  NODE_TYPE_MANAGEMENT_UPDATE_IN_USE_SUPORTED: string;

  /**
   * Key to a <code>String[]</code> descriptor. Returns an array holding the
   *  constants representing the supported query languages, or a zero-length if
   *  query is not supported.
   * @since JCR 2.0
   */
  QUERY_LANGUAGES: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if stored queries are supported.
   * @since JCR 2.0
   */
  QUERY_STORED_QUERIES_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if full-text search is supported.
   * @since JCR 2.0
   */
  QUERY_FULL_TEXT_SEARCH_SUPPORTED: string;

  /**
   * Key to <code>String</code> descriptor. Returns one of the following
   *  <code>javax.jcr.Repository</code> constants indicating the level of
   *  support for joins in queries: <dl> <dt>QUERY_JOINS_NONE</dt> <dd>Joins
   *  are not supported. Queries are limited to a single selector.</dd>
   *  <dt>QUERY_JOINS_INNER</dt> <dd> Inner joins are supported.</dd>
   *  <dt>QUERY_JOINS_INNER_OUTER</dt> <dd>Inner and outer joins are
   *  supported.</dd> </dl>
   * @since JCR 2.0
   */
  QUERY_JOINS: string;

  /**
   * One of three possible values for the descriptor <code>QUERY_JOINS
   *  </code>. Indicates that joins are not supported. Queries are limited to a
   *  single selector.
   * @since JCR 2.0
   */
  QUERY_JOINS_NONE: string;

  /**
   * One of three possible values for the descriptor <code>QUERY_JOINS
   *  </code>. Indicates that inner joins are supported.
   * @since JCR 2.0
   */
  QUERY_JOINS_INNER: string;

  /**
   * One of three possible values for the descriptor <code>QUERY_JOINS
   *  </code>. Indicates that inner and outer joins are supported.
   * @since JCR 2.0
   */
  QUERY_JOINS_INNER_OUTER: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if <ul> <li><code>OPTION_XML_EXPORT_SUPPORTED = true</code>
   *  and</li> <li><code>QUERY_LANGUAGES</code> is of non-zero length.</li>
   *  </ul> These semantics are identical to those in JCR 1.0. This constant is
   *  deprecated.
   * @deprecated As of JCR 2.0.
   */
  LEVEL_1_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if <ul> <li><code>LEVEL_1_SUPPORTED = true</code>,</li>
   *  <li><code>WRITE_SUPPORTED = true</code> and</li> <li><code>OPTION_XML_IMPORT_SUPPORTED
   *  = true</code>.</li> </ul> These semantics are identical to those in JCR
   *  1.0. This constant is deprecated.
   * @deprecated As of JCR 2.0.
   */
  LEVEL_2_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
   *  and only if the (deprecated) JCR 1.0 XPath query language is supported.
   *  This constant is deprecated.
   * @deprecated As of JCR 2.0.
   */
  OPTION_QUERY_SQL_SUPPORTED: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns false unless the
   *  (deprecated) JCR 1.0 XPath query language is supported. If JCR 1.0 XPath
   *  is supported then this descriptor has the same semantics as in JCR 1.0.
   *  This constant is deprecated.
   * @deprecated As of JCR 2.0.
   */
  QUERY_XPATH_POS_INDEX: string;

  /**
   * Key to a <code>boolean</code> descriptor. Returns false unless the
   *  (deprecated) JCR 1.0 XPath query language is supported. If JCR 1.0 XPath
   *  is supported then this descriptor has the same semantics as in JCR 1.0.
   *  This constant is deprecated.
   * @deprecated As of JCR 2.0.
   */
  QUERY_XPATH_DOC_ORDER: string;
};
