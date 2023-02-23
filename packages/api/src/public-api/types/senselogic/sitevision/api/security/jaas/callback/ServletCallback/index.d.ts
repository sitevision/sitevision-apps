import type { Object } from "../../../../../../../java/lang/Object";

/**
 * <p>
 *     JAAS callback for accessing request and response.
 *  </p>
 *
 *  <em>
 *     <strong>Important legacy note!</strong> As of Sitevision 3 this class has been moved
 *     (from package senselogic.sitevision.security.jaas.callback.api).
 *     Previously implemented custom JAAS filters/modules using this class must be re-compiled in order to run in Sitevision 3.
 *  </em>
 * @author Rickard Öberg
 */
export type ServletCallback = Object & {
  /**
   * Gets the request of this callback.
   * @return the request of this callback
   */
  getRequest(): unknown;

  /**
   * Sets the request of this callback.
   * @param aRequest the request
   */
  setRequest(aRequest: unknown): void;

  /**
   * Gets the response of this callback.
   * @return the response of this callback
   */
  getResponse(): unknown;

  /**
   * Sets the response of this callback.
   * @param aResponse the response
   */
  setResponse(aResponse: unknown): void;
};
