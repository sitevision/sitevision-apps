import AuthenticationFilterChain from "../AuthenticationFilterChain";

/**
 * <p>
 *    Interface for request filters that want to handle web interactions in order to get login data.
 * </p>
 *
 * <em>
 *    <strong>Important legacy note!</strong> As of Sitevision 3 this interface has been moved
 *    (from package senselogic.sitevision.security.jaas.filter.api).
 *    Previously implemented custom JAAS filters/modules using this interface must be re-compiled in order to run in Sitevision 3.
 * </em>The shared state username constant.The shared state password constant.The shared state auth type constant.The shared state client address constant.The shared state redirect constant.
 * @author Rickard Öberg
 */
interface AuthenticationFilter {
  /**
   * A filter that can be used to populate the shared state and/or options for a JAAS login module.
   * @param aRequest the request
   * @param aResponse the response
   * @param aSharedState a shared state map
   * @param anOptions an options map
   * @param aChain a filter chain
   * @throws IOException if an I/O problem occurred
   * @throws ServletException if the web container
   * @throws LoginException if login attempt failed
   */
  doFilter(
    aRequest: unknown,
    aResponse: unknown,
    aSharedState: unknown,
    anOptions: unknown,
    aChain: AuthenticationFilterChain
  ): void;
}

export default AuthenticationFilter;
