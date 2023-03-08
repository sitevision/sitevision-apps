import type { Object } from "../../../../../../../java/lang/Object";

/**
 * <p>
 *     Password credential. These are created by JAAS LoginModule implementations and placed in the Subject.
 *  </p>
 *
 *  <em>
 *     <strong>Important legacy note!</strong> As of Sitevision 3 this class has been moved
 *     (from package senselogic.sitevision.security.jaas.credential.api).
 *     Previously implemented custom JAAS filters/modules using this class must be re-compiled in order to run in Sitevision 3.
 *  </em>
 * @author Rickard Öberg
 */
export type PasswordCredential = Object & {
  /**
   * Gets the password.
   * @return the password
   */
  getPassword(): string;

  /**
   * Indicates whether some other object is "equal to" this credential.
   * @param obj the reference object with which to compare.
   * @return <code>true</code> if this object is the same as the obj argument, <code>false</code> otherwise.
   */
  equals(obj: unknown): boolean;

  /**
   * Gets the hash code for this credential.
   * @return the hash code for this credential. Always 0.
   */
  hashCode(): number;
};
