import type { String } from "../../../../../../../java/lang/String";
import type { Node } from "../../../../../../../javax/jcr/Node";

import type { Principal } from "../../../../../../../java/security/Principal";
import type { Object } from "../../../../../../../java/lang/Object";

/**
 * <p>
 *     JAAS callback for mapping ids to JCR user nodes.
 *  </p>
 *
 *  <em>
 *     <strong>Important legacy note!</strong> As of Sitevision 3 this class has been moved
 *     (from package senselogic.sitevision.security.jaas.callback.api).
 *     Previously implemented custom JAAS filters/modules using this class must be re-compiled in order to run in Sitevision 3.
 *  </em>
 * @author Karl Eklöf
 */
export type NodePrincipalCallback = Object & {
  /**
   * Gets the username of the principal to be found.
   * @return a username
   */
  getId(): string;

  /**
   * Gets the node principal that corresponds to the given username.
   * @return the first user principal in the directory with the given username, or <code>null</code> if no such user is found.
   */
  getNodePrincipal(): Node;

  /**
   * Sets the node principal.
   * @param aPrincipal a node principal
   */
  setNodePrincipal(aPrincipal: Node): void;

  /**
   * Gets the principal that corresponds to the given username.
   * @return the first user principal in the directory with the given username, or <code>null</code> if no such user is found.
   */
  getPrincipal(): Principal;

  /**
   * Sets the principal.
   * @param aPrincipal the principal
   */
  setPrincipal(aPrincipal: Principal): void;

  /**
 * The key/property name to use (by login modules) to set the name property on the node principal.
  
    */
  NAME: string;

  /**
 * The key/property name to use (by login modules) to set the given name property on the node principal.
  
    */
  GIVENNAME: string;

  /**
 * The key/property name to use (by login modules) to set the surname property on the node principal.
  
    */
  SN: string;

  /**
 * The key/property name to use (by login modules) to set the mail property on the node principal.
  
    */
  MAIL: string;

  /**
 * The key/property name to use (by login modules) to set the (multivalued) groups property on the node principal.
  
    */
  GROUPS: string;

  /**
 * The key/property name to use (by login modules) to set the phone property on the node principal.
  
    */
  TELEPHONE_NUMBER: string;

  /**
 * The key/property name to use (by login modules) to set the personal number property on the node principal.
  
    */
  PERSONAL_NUMBER: string;

  /**
 * The key/property name to use (by login modules) to set the mobile phone property on the node principal.
  
    */
  MOBIL: string;

  /**
 * The key/property name to use (by login modules) to set the title property on the node principal.
  
    */
  TITLE: string;

  /**
 * The key/property name to use (by login modules) to set the description property on the node principal.
  
    */
  DESCRIPTION: string;
};
