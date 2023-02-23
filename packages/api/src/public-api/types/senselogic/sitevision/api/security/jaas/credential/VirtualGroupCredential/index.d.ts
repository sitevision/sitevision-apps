import type { Set } from "../../../../../../../java/util/Set";
import type { Object } from "../../../../../../../java/lang/Object";

/**
 * <p>Credential for virtual groups.</p>
 *
 *  <em>
 *     <strong>Important legacy note!</strong> As of Sitevision 3 this class has been moved
 *     (from package senselogic.sitevision.security.jaas.credential.api).
 *     Previously implemented custom JAAS filters/modules using this class must be re-compiled in order to run in Sitevision 3.
 *  </em>
 * @author Karl Eklöf
 * @since Sitevision 2.6.2
 */
export type VirtualGroupCredential = Object & {
  /**
   * Gets the set of groups for this credential.
   * @return the set of groups for this credential
   */
  getGroups(): Set;

  /**
   * Indicates whether some other object is "equal to" this credential.
   * @param obj the reference object with which to compare.
   * @return <code>true</code> if this object is the same as the obj argument, <code>false</code> otherwise.
   */
  equals(obj: unknown): boolean;

  /**
   * Returns the hash code value for the object.
   * @return a hash code value for this object.
   */
  hashCode(): number;
};
