import type { RepositoryException } from "../../RepositoryException";

/**
 * Exception thrown when an action would violate a constraint on repository
 *  structure. For example, when an attempt is made to persistently add an item
 *  to a node that would violate that node's node type.
  
    */
export type ConstraintViolationException = RepositoryException & {};
