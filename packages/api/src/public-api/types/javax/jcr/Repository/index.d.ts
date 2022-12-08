import type { Value } from "../Value";
import type { Credentials } from "../Credentials";
import Session from "../../../../server/Session";

/**
 * The entry point into the content repository. The <code>Repository</code>
 * object is usually acquired through the {@link RepositoryFactory}.The descriptor key for the version of the specification that this
 * repository implements. For JCR 2.0 the value of this descriptor is the
 * <code>String</code> "2.0".The descriptor key for the name of the specification that this repository
 * implements. For JCR 2.0 the value of this descriptor is the
 * <code>String</code> "Content Repository for Java Technology API".The descriptor key for the name of the repository vendor. The descriptor
 * returned for this key is a <code>String</code>.The descriptor key for the URL of the repository vendor. The descriptor
 * returned for this key is a <code>String</code>.The descriptor key for the name of this repository implementation. The
 * descriptor returned for this key is a <code>String</code>.The descriptor key for the version of this repository implementation. The
 * descriptor returned for this key is a <code>String</code>.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if repository content can be updated through the JCR API (as
 * opposed to having read-only access).Key to a <code>String</code> descriptor. Returns one of the following
 * <code>javax.jcr.Repository</code> constants indicating the stability of
 * identifiers:
 * <dl>
 * <dt>IDENTIFIER_STABILITY_METHOD_DURATION</dt>
 * <dd>Identifiers may change between method calls.</dd>
 * <dt>IDENTIFIER_STABILITY_SAVE_DURATION</dt>
 * <dd>Identifiers are guaranteed stable within a single save/refresh cycle.</dd>
 * <dt>IDENTIFIER_STABILITY_SESSION_DURATION</dt>
 * <dd>Identifiers are guaranteed stable within a single session.</dd>
 * <dt>IDENTIFIER_STABILITY_INDEFINITE_DURATION</dt>
 * <dd>Identifiers are guaranteed to be stable forever.</dd>
 * </dl>One of four possible values for the descriptor <code>IDENTIFIER_STABILITY</code>.
 * Indicates that identifiers may change between method calls.One of four possible values for the descriptor <code>IDENTIFIER_STABILITY</code>.
 * Indicates that identifiers are guaranteed stable within a single
 * save/refresh cycle.One of four possible values for the descriptor <code>IDENTIFIER_STABILITY</code>.
 * Indicates that identifiers are guaranteed stable within a single
 * session.One of four possible values for the descriptor <code>IDENTIFIER_STABILITY</code>.
 * Indicates that identifiers are guaranteed to be stable forever.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if XML export is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if XML import is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if unfiled content is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if full versioning is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if activities are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if configurations and baselines are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if access control is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if locking is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if asynchronous observation is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if journaled observation is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if retention and hold are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if lifecycles are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if transactions are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if workspace management is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if the primary node type of an existing node can be updated.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if the mixin node types of an existing node can be added and
 * removed.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if the creation of shareable nodes is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if node type management is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if node and property with same name is supported.Key to <code>String</code> descriptor. Returns one of the following
 * <code>javax.jcr.Repository</code> constants indicating the level of
 * support for node type inheritance: <dl> <dt>NODE_TYPE_MANAGEMENT_INHERITANCE_MINIMAL</dt>
 * <dd> Registration of primary node types is limited to those which have
 * only nt:base as supertype. Registration of mixin node types is limited to
 * those without any supertypes. </dd> <dt>NODE_TYPE_MANAGEMENT_INHERITANCE_SINGLE</dt>
 * <dd> Registration of primary node types is limited to those with exactly
 * one supertype. Registration of mixin node types is limited to those with
 * at most one supertype. </dd> <dt>NODE_TYPE_MANAGEMENT_INHERITANCE_MULTIPLE</dt>
 * <dd> Primary node types can be registered with one or more supertypes.
 * Mixin node types can be registered with zero or more supertypes. </dd>
 * </dl>One of three possible values for the descriptor <code>NODE_TYPE_MANAGEMENT_INHERITANCE</code>.
 * Indicates that registration of primary node types is limited to those
 * which have only nt:base as supertype. Registration of mixin node types is
 * limited to those without any supertypes.One of three possible values for the descriptor <code>NODE_TYPE_MANAGEMENT_INHERITANCE</code>.
 * Indicates that registration of primary node types is limited to those
 * with exactly one supertype. Registration of mixin node types is limited
 * to those with at most one supertype.One of three possible values for the descriptor <code>NODE_TYPE_MANAGEMENT_INHERITANCE</code>.
 * Indicates that primary node types can be registered with one or more
 * supertypes. Mixin node types can be registered with zero or more
 * supertypes.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if override of inherited property or child node definitions is
 * supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if primary items are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if preservation of child node ordering is supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if residual property and child node definitions are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if autocreated properties and child nodes are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if same-name sibling child nodes are supported.Key to a <code>long[]</code> descriptor. Returns an array holding the
 * <code>javax.jcr.PropertyType</code> constants for the property types
 * (including <code>UNDEFINED</code>, if supported) that a registered node
 * type can specify, or a zero-length array if registered node types cannot
 * specify property definitions.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if multivalue properties are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if registration of a node types with more than one
 * <code>BINARY</code> property is permitted.Key to a <code>boolean</code> descriptor. Returns true if and only
 * value-constraints are supported.Key to a <code>boolean</code> descriptor. Returns true if and only the
 * update of node types is supported for node types currently in use as the
 * type of an existing node in the repository.Key to a <code>String[]</code> descriptor. Returns an array holding the
 * constants representing the supported query languages, or a zero-length if
 * query is not supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if stored queries are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if full-text search is supported.Key to <code>String</code> descriptor. Returns one of the following
 * <code>javax.jcr.Repository</code> constants indicating the level of
 * support for joins in queries: <dl> <dt>QUERY_JOINS_NONE</dt> <dd>Joins
 * are not supported. Queries are limited to a single selector.</dd>
 * <dt>QUERY_JOINS_INNER</dt> <dd> Inner joins are supported.</dd>
 * <dt>QUERY_JOINS_INNER_OUTER</dt> <dd>Inner and outer joins are
 * supported.</dd> </dl>One of three possible values for the descriptor <code>QUERY_JOINS
 * </code>. Indicates that joins are not supported. Queries are limited to a
 * single selector.One of three possible values for the descriptor <code>QUERY_JOINS
 * </code>. Indicates that inner joins are supported.One of three possible values for the descriptor <code>QUERY_JOINS
 * </code>. Indicates that inner and outer joins are supported.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if <ul> <li><code>OPTION_XML_EXPORT_SUPPORTED = true</code>
 * and</li> <li><code>QUERY_LANGUAGES</code> is of non-zero length.</li>
 * </ul> These semantics are identical to those in JCR 1.0. This constant is
 * deprecated.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if <ul> <li><code>LEVEL_1_SUPPORTED = true</code>,</li>
 * <li><code>WRITE_SUPPORTED = true</code> and</li> <li><code>OPTION_XML_IMPORT_SUPPORTED
 * = true</code>.</li> </ul> These semantics are identical to those in JCR
 * 1.0. This constant is deprecated.Key to a <code>boolean</code> descriptor. Returns <code>true</code> if
 * and only if the (deprecated) JCR 1.0 XPath query language is supported.
 * This constant is deprecated.Key to a <code>boolean</code> descriptor. Returns false unless the
 * (deprecated) JCR 1.0 XPath query language is supported. If JCR 1.0 XPath
 * is supported then this descriptor has the same semantics as in JCR 1.0.
 * This constant is deprecated.Key to a <code>boolean</code> descriptor. Returns false unless the
 * (deprecated) JCR 1.0 XPath query language is supported. If JCR 1.0 XPath
 * is supported then this descriptor has the same semantics as in JCR 1.0.
 * This constant is deprecated.
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
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @since JCR 2.0
 * @deprecated As of JCR 2.0.
 * @deprecated As of JCR 2.0.
 * @deprecated As of JCR 2.0.
 * @deprecated As of JCR 2.0.
 * @deprecated As of JCR 2.0.
 */
export type Repository = {
  /**
   * Returns a string array holding all descriptor keys available for this
   * implementation, both the standard descriptors defined by the string
   * constants in this interface and any implementation-specific descriptors.
   * Used in conjunction with {@link #getDescriptorValue(String key)} and
   * {@link #getDescriptorValues(String key)} to query information about this
   * repository implementation.
   * @return a string array holding all descriptor keys.
   */
  getDescriptorKeys(): string;

  /**
   * Returns <code>true</code> if <code>key</code> is a standard descriptor
   * defined by the string constants in this interface and <code>false</code>
   * if it is either a valid implementation-specific key or not a valid key.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param key a descriptor key.
   * @return whether <code>key</code> is a standard descriptor.
   * @since JCR 2.0
   */
  isStandardDescriptor(key: string): boolean;

  /**
   * Returns <code>true</code> if <code>key</code> is a valid single-value
   * descriptor; otherwise returns <code>false</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param key a descriptor key.
   * @return whether the specified desdfriptor is multi-valued.
   * @since JCR 2.0
   */
  isSingleValueDescriptor(key: string): boolean;

  /**
   * The value of a single-value descriptor is found by passing the key for
   * that descriptor to this method. If <code>key</code> is the key of a
   * multi-value descriptor or not a valid key this method returns
   * <code>null</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param key a descriptor key.
   * @return The value of the indicated descriptor
   * @since JCR 2.0
   */
  getDescriptorValue(key: string): Value;

  /**
   * The value array of a multi-value descriptor is found by passing the key
   * for that descriptor to this method. If <code>key</code> is the key of a
   * single-value descriptor then this method returns that value as an array
   * of size one. If <code>key</code> is not a valid key this method returns
   * <code>null</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param key a descriptor key.
   * @return the value array for the indicated descriptor
   * @since JCR 2.0
   */
  getDescriptorValues(key: string): Value;

  /**
   * <p> A convenience method. The call  <p> <code>String s =
   * repository.getDescriptor(key);</code>  <p> is equivalent to
   * <p>
   * <code>Value v = repository.getDescriptorValue(key);<br>String s = (v ==
   * null) ? null : v.getString();</code>
   * @param key a descriptor key.
   * @return a descriptor value in string form.
   */
  getDescriptor(key: string): string;

  /**
   * Authenticates the user using the supplied <code>credentials</code>. If
   * <code>workspaceName</code> is recognized as the name of an existing
   * workspace in the repository and authorization to access that workspace is
   * granted, then a new <code>Session</code> object is returned. The format
   * of the string <code>workspaceName</code> depends upon the
   * implementation.
   * <p>
   * If <code>credentials</code> is <code>null</code>, it is assumed that
   * authentication is handled by a mechanism external to the repository
   * itself (for example, through the JAAS framework) and that the repository
   * implementation exists within a context (for example, an application
   * server) that allows it to handle authorization of the request for access
   * to the specified workspace.
   * <p>
   * If <code>workspaceName</code> is <code>null</code>, a default workspace
   * is automatically selected by the repository implementation. This may, for
   * example, be the "home workspace" of the user whose credentials were
   * passed, though this is entirely up to the configuration and
   * implementation of the repository. Alternatively, it may be a "null
   * workspace" that serves only to provide the method {@link
   * Workspace#getAccessibleWorkspaceNames}, allowing the client to select
   * from among available "real" workspaces.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param credentials The credentials of the user
   * @param workspaceName the name of a workspace.
   * @return a valid session for the user to access the repository.
   * @throws LoginException if authentication or authorization for the specified workspace fails.
   * @throws NoSuchWorkspaceException if the specified <code>workspaceName</code> is not recognized.
   * @throws RepositoryException if another error occurs.
   */
  login(credentials: Credentials, workspaceName: string): Session;

  /**
   * Equivalent to <code>login(credentials, null)</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param credentials The credentials of the user
   * @return a valid session for the user to access the repository.
   * @throws LoginException if authentication or authorization fails.
   * @throws RepositoryException if another error occurs.
   */
  login(credentials: Credentials): Session;

  /**
   * Equivalent to <code>login(null, workspaceName)</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param workspaceName the name of a workspace.
   * @return a valid session for the user to access the repository.
   * @throws LoginException if authentication or authorization for the specified workspace fails.
   * @throws NoSuchWorkspaceException if the specified <code>workspaceName</code> is not recognized.
   * @throws RepositoryException if another error occurs.
   */
  login(workspaceName: string): Session;

  /**
   * Equivalent to <code>login(null, null)</code>.
   * @return a valid session for the user to access the repository.
   * @throws LoginException if authentication or authorization fails.
   * @throws RepositoryException if another error occurs.
   */
  login(): Session;
};
