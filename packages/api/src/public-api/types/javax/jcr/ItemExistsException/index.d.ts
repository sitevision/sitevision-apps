import type { RepositoryException } from "../RepositoryException";

/**
 * An exception thrown when an attempt is made to place an item in a position
 *  where another item already exists.
  
    */
export type ItemExistsException = RepositoryException & {};
