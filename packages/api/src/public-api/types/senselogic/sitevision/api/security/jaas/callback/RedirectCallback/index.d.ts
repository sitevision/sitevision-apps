import type { String } from "../../../../../../../java/lang/String";
import type { Object } from "../../../../../../../java/lang/Object";

/**
 * <p>
 *     JAAS callback for requesting a redirect.
 *  </p>
 *
 *  <em>
 *     <strong>Important legacy note!</strong> As of Sitevision 3 this class has been moved
 *     (from package senselogic.sitevision.security.jaas.callback.api).
 *     Previously implemented custom JAAS filters/modules using this class must be re-compiled in order to run in Sitevision 3.
 *  </em>
 * @author Rickard Öberg
 */
export type RedirectCallback = Object & {
  /**
   * Gets the URL of this callback.
   * @return the URL of this callback
   */
  getUrl(): string;
};
