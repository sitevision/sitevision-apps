import type { RepositoryException } from "../RepositoryException";

/**
 * Exception thrown by <code>{@link Repository#login(Credentials,
 *  String)}</code> and <code>{@link Session#impersonate(Credentials)}</code> if
 *  the specified credentials are invalid.
  
    */
export type LoginException = RepositoryException & {};
