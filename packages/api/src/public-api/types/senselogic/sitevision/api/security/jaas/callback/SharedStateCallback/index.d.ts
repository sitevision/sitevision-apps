import type { String } from "../../../../../../../java/lang/String";

import type { Object } from "../../../../../../../java/lang/Object";

/**
 * <p>
 *     JAAS callback for fetching request headers.
 *  </p>
 *
 *  <em>
 *     <strong>Important legacy note!</strong> As of Sitevision 3 this class has been moved
 *     (from package senselogic.sitevision.security.jaas.callback.api).
 *     Previously implemented custom JAAS filters/modules using this class must be re-compiled in order to run in Sitevision 3.
 *  </em>
 * @author Rickard Öberg
 */
export type SharedStateCallback = Object & {
  /**
   * Gets the value that is mapped to the name of this callback.
   * @return the value that is mapped to the name of this callback.
   */
  getValue(): string;

  /**
   * Sets the value for the name of this callback.
   * @param aValue the value to set
   */
  setValue(aValue: String | string): void;

  /**
   * Gets the name of this callback.
   * @return the the name of this callback
   */
  getName(): string;
};
