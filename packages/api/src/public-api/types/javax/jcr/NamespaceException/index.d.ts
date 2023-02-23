import type { RepositoryException } from "../RepositoryException";

/**
 * Exception thrown by <code>{@link Session#setNamespacePrefix(String prefix,
 *  String uri)}</code> if the specified <code>uri</code> is not registered in
 *  the {@link NamespaceRegistry}.
  
    */
export type NamespaceException = RepositoryException & {};
