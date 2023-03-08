import type { RepositoryException } from "../RepositoryException";

/**
 * Exception thrown by <code>{@link Repository#login(Credentials,
 *  String)}</code> when a specific workspace is not found.
  
    */
export type NoSuchWorkspaceException = RepositoryException & {};
