import type { Object } from "../../lang/Object";

import type { String } from "../../lang/String";

/**
 * This interface represents the abstract notion of a principal, which
 *  can be used to represent any entity, such as an individual, a
 *  corporation, and a login id.
 * @see java.security.cert.X509Certificate
 * @author Li Gong
 */
export type Principal = {
  /**
   * Compares this principal to the specified object.  Returns true
   *  if the object passed in matches the principal represented by
   *  the implementation of this interface.
   * @param another principal to compare with.
   * @return true if the principal passed in is the same as that&#xA; encapsulated by this principal, and false otherwise.
   */
  equals(another: unknown): boolean;

  /**
   * Returns a string representation of this principal.
   * @return a string representation of this principal.
   */
  toString(): string;

  /**
   * Returns a hashcode for this principal.
   * @return a hashcode for this principal.
   */
  hashCode(): number;

  /**
   * Returns the name of this principal.
   * @return the name of this principal.
   */
  getName(): string;

  /**
   * Returns true if the specified subject is implied by this principal.
   *
   *  <p>The default implementation of this method returns true if
   *  {@code subject} is non-null and contains at least one principal that
   *  is equal to this principal.
   *
   *  <p>Subclasses may override this with a different implementation, if
   *  necessary.
   * @param subject the {@code Subject}
   * @return true if {@code subject} is non-null and is&#xA; implied by this principal, or false otherwise.
   * @since 1.8
   */
  implies(subject: unknown): boolean;
};
