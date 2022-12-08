/**
 * Each repository has a single, persistent namespace registry represented by
 * the <code>NamespaceRegistry</code> object, accessed via {@link
 * Workspace#getNamespaceRegistry}. The namespace registry contains the default
 * prefixes of the registered namespaces. The namespace registry may contain
 * namespaces that are not used in repository content, and there may be
 * repository content with namespaces that are not included in the registry.A constant for the predefined namespace prefix "jcr".A constant for the predefined namespace prefix "nt".A constant for the predefined namespace prefix "mix".A constant for the predefined namespace prefix "xml".A constant for the predefined namespace prefix "" (the empty prefix).A constant for the predefined namespace mapped by default to the prefix
 * "jcr".A constant for the predefined namespace mapped by default to the prefix
 * "nt".A constant for the predefined namespace mapped by default to the prefix
 * "mix".A constant for the predefined namespace mapped by default to the prefix
 * "xml".A constant for the predefined namespace mapped by default to the prefix
 * "" (the empty prefix).
 * @see Workspace#getNamespaceRegistry
 */
export type NamespaceRegistry = {
  /**
   * Sets a one-to-one mapping between <code>prefix</code> and
   * <code>uri</code> in the global namespace registry of this repository.
   * <p>
   * Assigning a new prefix to a URI that already exists in the namespace
   * registry erases the old prefix. In general this can almost always be
   * done, though an implementation is free to prevent particular remappings
   * by throwing a <code>NamespaceException</code>.
   * <p>
   * On the other hand, taking a prefix that is already assigned to a URI and
   * re-assigning it to a new URI in effect unregisters that URI. Therefore,
   * the same restrictions apply to this operation as to
   * <code>NamespaceRegistry.unregisterNamespace</code>.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param prefix The prefix to be mapped.
   * @param uri The URI to be mapped.
   * @throws NamespaceException If an attempt is made to re-assign a built-in prefix to a new URI or, to register a namespace with a prefix that begins with the characters "<code>xml</code>" (in any combination of case) or, An attempt is made to perform a prefix re-assignment that is forbidden for implementation-specific reasons.
   * @throws UnsupportedRepositoryOperationException if this repository does not support namespace registry changes.
   * @throws AccessDeniedException if the current session does not have sufficent access to register the namespace.
   * @throws RepositoryException if another error occurs.
   */
  registerNamespace(prefix: string, uri: string): void;

  /**
   * Removes a namespace mapping from the registry.
   *
   * <p><strong>Sitevision note:</strong> Unsupported operation</p>
   * @param prefix The prefix of the mapping to be removed.
   * @throws NamespaceException if an attempt is made to unregister a built-in namespace or a namespace that is not currently registered or a namespace whose unregsitration is forbidden for implementation-specific reasons.
   * @throws UnsupportedRepositoryOperationException if this repository does not support namespace registry changes.
   * @throws AccessDeniedException if the current session does not have sufficent access to unregister the namespace.
   * @throws RepositoryException if another error occurs.
   */
  unregisterNamespace(prefix: string): void;

  /**
   * Returns an array holding all currently registered prefixes.
   * @return a string array.
   * @throws RepositoryException if an error occurs.
   */
  getPrefixes(): string;

  /**
   * Returns an array holding all currently registered URIs.
   * @return a string array.
   * @throws RepositoryException if an error occurs.
   */
  getURIs(): string;

  /**
   * Returns the URI to which the given <code>prefix</code> is mapped.
   * @param prefix a string.
   * @return a string.
   * @throws NamespaceException if a mapping with the specified <code>prefix</code> does not exist.
   * @throws RepositoryException if another error occurs.
   */
  getURI(prefix: string): string;

  /**
   * Returns the prefix which is mapped to the given <code>uri</code>.
   * @param uri a string.
   * @return a string.
   * @throws NamespaceException if a mapping with the specified <code>uri</code> does not exist.
   * @throws RepositoryException if another error occurs.
   */
  getPrefix(uri: string): string;
};
