import type { Principal } from "../../../../java/security/Principal";
import type { Privilege } from "../Privilege";

/**
 * An <code>AccessControlEntry</code> represents the association of one or more
 *  <code>Privilege</code> objects with a specific <code>Principal</code>.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type AccessControlEntry = {
  /**
   * Returns the principal associated with this access control entry.
   * @return a <code>Principal</code>.
   */
  getPrincipal(): Principal;

  /**
   * Returns the privileges associated with this access control entry.
   * @return an array of <code>Privilege</code>s.
   */
  getPrivileges(): Privilege;
};
