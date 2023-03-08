import type { String } from "../../../../java/lang/String";
import type { RepositoryException } from "../../RepositoryException";

/**
 * Exception thrown by when a lock-related error occurs.
  
    */
export type LockException = RepositoryException & {
  /**
   * Returns the absolute path of the node that caused the error or
   *  <code>null</code> if the implementation chooses not to, or cannot, return
   *  a path.
   * @return path of the node that caused the error
   */
  getFailureNodePath(): string;
};
