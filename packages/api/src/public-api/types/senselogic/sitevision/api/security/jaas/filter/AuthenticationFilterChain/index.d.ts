import type { Map } from "../../../../../../../java/util/Map";

/**
 * <p>
 *     Interface for request filter chains that want to handle web interactions in order to get login data.
 *  </p>
 *
 *  <em>
 *     <strong>Important legacy note!</strong> As of Sitevision 3 this interface has been moved
 *     (from package senselogic.sitevision.security.jaas.filter.api).
 *     Previously implemented custom JAAS filters/modules using this interface must be re-compiled in order to run in Sitevision 3.
 *  </em>
 * @author Rickard Öberg
 */
export type AuthenticationFilterChain = {
  /**
   * A filter chain that can be used to populate the shared state and/or options for a JAAS login module.
   * @param aRequest the request
   * @param aResponse the response
   * @param aSharedState a shared state map
   * @param aChain a filter chain
   * @throws IOException if an I/O problem occurred
   * @throws ServletException if the web container
   * @throws LoginException if login attempt failed
   */
  doFilter(
    aRequest: unknown,
    aResponse: unknown,
    aSharedState: Map | {},
    aChain: AuthenticationFilterChain
  ): void;
};
