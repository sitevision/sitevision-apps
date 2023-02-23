import type { CodeSource } from "../CodeSource";
import type { ClassLoader } from "../../lang/ClassLoader";
import type { Principal } from "../Principal";
import type { PermissionCollection } from "../PermissionCollection";
import type { Permission } from "../Permission";

import type { String } from "../../lang/String";
import type { Object } from "../../lang/Object";

/**
 * The ProtectionDomain class encapsulates the characteristics of a domain,
 *  which encloses a set of classes whose instances are granted a set
 *  of permissions when being executed on behalf of a given set of Principals.
 *  <p>
 *  A static set of permissions can be bound to a ProtectionDomain when it is
 *  constructed; such permissions are granted to the domain regardless of the
 *  Policy in force. However, to support dynamic security policies, a
 *  ProtectionDomain can also be constructed such that it is dynamically
 *  mapped to a set of permissions by the current Policy whenever a permission
 *  is checked.
 *  <p>
 * @author Li Gong
 * @author Roland Schemers
 * @author Gary Ellison
 */
export type ProtectionDomain = Object & {
  /**
   * Returns the CodeSource of this domain.
   * @return the CodeSource of this domain which may be null.
   * @since 1.2
   */
  getCodeSource(): CodeSource;

  /**
   * Returns the ClassLoader of this domain.
   * @return the ClassLoader of this domain which may be null.
   * @since 1.4
   */
  getClassLoader(): ClassLoader;

  /**
   * Returns an array of principals for this domain.
   * @return a non-null array of principals for this domain.&#xA; Returns a new array each time this method is called.
   * @since 1.4
   */
  getPrincipals(): Principal;

  /**
   * Returns the static permissions granted to this domain.
   * @return the static set of permissions for this domain which may be null.
   * @see Policy#refresh
   * @see Policy#getPermissions(ProtectionDomain)
   */
  getPermissions(): PermissionCollection;

  /**
   * Check and see if this ProtectionDomain implies the permissions
   *  expressed in the Permission object.
   *  <p>
   *  The set of permissions evaluated is a function of whether the
   *  ProtectionDomain was constructed with a static set of permissions
   *  or it was bound to a dynamically mapped set of permissions.
   *  <p>
   *  If the ProtectionDomain was constructed to a
   *  {@link #ProtectionDomain(CodeSource, PermissionCollection)
   *  statically bound} PermissionCollection then the permission will
   *  only be checked against the PermissionCollection supplied at
   *  construction.
   *  <p>
   *  However, if the ProtectionDomain was constructed with
   *  the constructor variant which supports
   *  {@link #ProtectionDomain(CodeSource, PermissionCollection,
   *  ClassLoader, java.security.Principal[]) dynamically binding}
   *  permissions, then the permission will be checked against the
   *  combination of the PermissionCollection supplied at construction and
   *  the current Policy binding.
   *  <p>
   * @param permission the Permission object to check.
   * @return true if "permission" is implicit to this ProtectionDomain.
   */
  implies(permission: Permission): boolean;

  /**
 * Convert a ProtectionDomain to a String.
  
    */
  toString(): string;
};
