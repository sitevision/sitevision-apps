/**
 * Logout current user based on a HttpServletRequest.
 * @param aServletRequest the current servlet request
 * @param invalidateHttpSession whether or not the session should be invalidated. This is normally not the case
 */
export function logout(
  aServletRequest: unknown,
  invalidateHttpSession: boolean
): void;

/**
 * Logout current user based on a PortletRequest.
 * @param aPortletRequest the current portlet request
 * @param invalidateHttpSession whether or not the session should be invalidated. This is normally not the case
 */
export function logout(
  aPortletRequest: unknown,
  invalidateHttpSession: boolean
): void;

/**
 * Authenticates a user based on a shared state map.
 * @param aServletRequest the current servlet request
 * @param sharedState a map containing "javax.security.auth.login.name" and "javax.security.auth.login.password"
 * @throws LoginException if login fails
 * @since Sitevision 2.6.2_06
 */
export function login(aServletRequest: unknown, sharedState: unknown): void;

/**
 * Authenticates a user based on username and password.
 * @param aServletRequest the current servlet request
 * @param name a username
 * @param password a password
 * @throws LoginException if login fails
 * @since Sitevision 2.6.2_06
 */
export function login(
  aServletRequest: unknown,
  name: string,
  password: string
): void;

/**
 * Re-authenticates a user based on a Subject already in the session.
 * @param aServletRequest the current servlet request
 * @throws LoginException if login fails
 * @since Sitevision 2.6.2_06
 */
export function reLogin(aServletRequest: unknown): void;

/**
 * Authenticates a user based on a shared state map.
 * @param aPortletRequest the current portlet request
 * @param sharedState a map containing "javax.security.auth.login.name" and "javax.security.auth.login.password"
 * @throws LoginException if login fails
 * @since Sitevision 2.6.2_06
 */
export function login(aPortletRequest: unknown, sharedState: unknown): void;

/**
 * Authenticates a user based on username and password.
 * @param aPortletRequest the current portlet request
 * @param name a username
 * @param password a password
 * @throws LoginException if login fails
 * @since Sitevision 2.6.2_06
 */
export function login(
  aPortletRequest: unknown,
  name: string,
  password: string
): void;

/**
 * Re-authenticates a user based on a Subject already in the session.
 * @param aPortletRequest the current portlet request
 * @throws LoginException if login fails
 * @since Sitevision 2.6.2_06
 */
export function reLogin(aPortletRequest: unknown): void;

/**
 * <p>
 *    Authentication utility interface.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getAuthenticationUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1_03, Sitevision 2.7_01
 */
declare namespace authenticationUtil {
  export { logout, login, reLogin };
}

export default authenticationUtil;
