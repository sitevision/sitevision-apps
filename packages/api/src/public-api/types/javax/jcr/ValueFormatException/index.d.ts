import type { RepositoryException } from "../RepositoryException";

/**
 * Exception thrown when an attempt is made to assign a value to a property that
 *  has an invalid format, given the type of the property. Also thrown if an
 *  attempt is made to read the value of a property using a type-specific read
 *  method of a type into which it is not convertible.
  
    */
export type ValueFormatException = RepositoryException & {};
