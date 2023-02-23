import type { RepositoryException } from "../../RepositoryException";

/**
 * Exception thrown when an attempt is made to register a node type that already
 *  exists, and <code>allowUpdate</code> has not been set to <code>true</code>.
 * @since JCR 2.0
 */
export type NodeTypeExistsException = RepositoryException & {};
