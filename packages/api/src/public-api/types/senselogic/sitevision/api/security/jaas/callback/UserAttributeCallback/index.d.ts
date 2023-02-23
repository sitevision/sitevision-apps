import type { String } from "../../../../../../../java/lang/String";
import type { List } from "../../../../../../../java/util/List";

import type { Object } from "../../../../../../../java/lang/Object";

/**
 * <p>
 *     JAAS callback for fetching user attributes from the directory.
 *  </p>
 *
 *  <em>
 *     <strong>Important legacy note!</strong> As of Sitevision 3 this class has been moved
 *     (from package senselogic.sitevision.security.jaas.callback.api).
 *     Previously implemented custom JAAS filters/modules using this class must be re-compiled in order to run in Sitevision 3.
 *  </em>
 * @author Rickard Öberg
 */
export type UserAttributeCallback = Object & {
  /**
   * Gets the DN.
   * @return the DN
   */
  getDn(): string;

  /**
   * Gets the attribute name.
   * @return the attribute name
   */
  getName(): string;

  /**
   * Sets a list of user attribute values.
   * @param aValue a list of user attribute values.
   */
  setValue(aValue: List | unknown[]): void;

  /**
   * First value of requested attribute as a String.
   * @return attribute as String or <code>null</code> if none was found
   */
  getString(): string;

  /**
   * Gets the the user attribute values list.
   * @return list of values.
   */
  getValues(): List;
};
