import type { RepositoryException } from "../RepositoryException";

/**
 * Exception thrown by the write methods of {@link Node} and {@link Property}
 *  and by {@link Session#save} and {@link Session#refresh} if an attempted
 *  change would conflict with a change to the persistent workspace made through
 *  another {@link Session}. Also thrown by methods of <code>Node</code> and
 *  <code>Property</code> if that object represents an item that has been removed
 *  from the workspace.
  
    */
export type InvalidItemStateException = RepositoryException & {};
