/**
 * Each repository has a single, persistent namespace registry represented by
 * the <code>NamespaceRegistry</code> object, accessed via {@link
 * Workspace#getNamespaceRegistry}. The namespace registry contains the default
 * prefixes of the registered namespaces. The namespace registry may contain
 * namespaces that are not used in repository content, and there may be
 * repository content with namespaces that are not included in the registry.
 * @see Workspace#getNamespaceRegistry
 */
export type NamespaceRegistry = {
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

  /**
 * A constant for the predefined namespace prefix "jcr".
  
    */
  PREFIX_JCR: string;

  /**
 * A constant for the predefined namespace prefix "nt".
  
    */
  PREFIX_NT: string;

  /**
 * A constant for the predefined namespace prefix "mix".
  
    */
  PREFIX_MIX: string;

  /**
 * A constant for the predefined namespace prefix "xml".
  
    */
  PREFIX_XML: string;

  /**
 * A constant for the predefined namespace prefix "" (the empty prefix).
  
    */
  PREFIX_EMPTY: string;

  /**
 * A constant for the predefined namespace mapped by default to the prefix
 * "jcr".
  
    */
  NAMESPACE_JCR: string;

  /**
 * A constant for the predefined namespace mapped by default to the prefix
 * "nt".
  
    */
  NAMESPACE_NT: string;

  /**
 * A constant for the predefined namespace mapped by default to the prefix
 * "mix".
  
    */
  NAMESPACE_MIX: string;

  /**
 * A constant for the predefined namespace mapped by default to the prefix
 * "xml".
  
    */
  NAMESPACE_XML: string;

  /**
 * A constant for the predefined namespace mapped by default to the prefix
 * "" (the empty prefix).
  
    */
  NAMESPACE_EMPTY: string;
};
