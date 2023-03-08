import type { String } from "../../../../../../../java/lang/String";
import type { Principal } from "../../../../../../../java/security/Principal";

import type { Object } from "../../../../../../../java/lang/Object";

/**
 * <p>
 *     JAAS callback for mapping usernames to Principals. The Principal will be a User object in the Sitevision model.
 *  </p>
 *
 *  <em>
 *     <strong>Important legacy note!</strong> As of Sitevision 3 this class has been moved
 *     (from package senselogic.sitevision.security.jaas.callback.api).
 *     Previously implemented custom JAAS filters/modules using this class must be re-compiled in order to run in Sitevision 3.
 *  </em>
 * @author Rickard Öberg
 */
export type UserPrincipalCallback = Object & {
  /**
   * Gets the username of the principal to be found.
   * @return username
   */
  getName(): string;

  /**
   * Get principal that corresponds to the given username.
   * @return the first user principal in the directory with the given name, and <code>null</code> if no such user is found.
   */
  getPrincipal(): Principal;

  /**
   * Sets the principal that corresponds to the given username.
   * @param aPrincipal a user principal
   */
  setPrincipal(aPrincipal: Principal): void;
};
