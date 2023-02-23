import type { RepositoryException } from "../RepositoryException";

/**
 * Exception thrown when no <code>Item</code> exists at the specified path or
 *  when the specified path implies intermediary <code>Node</code>s that do not
 *  exist.
  
    */
export type PathNotFoundException = RepositoryException & {};
