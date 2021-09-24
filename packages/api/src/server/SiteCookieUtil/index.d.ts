import Node from '../../builtins/Node';
import List from '../../builtins/List';

/**
 * Necessary Site cookies (sv:siteCookie) of current site.
 *
 * @return {List<Node>} the necessary site cookies of current site, or empty list if current site has no site cookies
 */
export function getNecessarySiteCookies(): List<Node>;

/**
 * Gets the necessary site cookies category title.
 *
 * @return {string} necessary site cookies category title
 */
export function getNecessarySiteCookiesTitle(): string;

/**
 * Gets the necessary site cookies category description.
 *
 * @return {string} necessary site cookies category description
 */
export function getNecessarySiteCookiesDescription(): string;

/**
 * Analytics Site cookies (sv:siteCookie) of current site.
 *
 * @return {List<Node>} the analytics site cookies of current site, or empty list if current site has no site cookies
 */
export function getAnalyticsSiteCookies(): List<Node>;

/**
 * Gets the analytics site cookies category title.
 *
 * @return {string} analytics site cookies category title
 */
export function getAnalyticsSiteCookiesTitle(): string;

/**
 * Gets the analytics site cookies category description.
 *
 * @return {string} analytics site cookies category description
 */
export function getAnalyticsSiteCookiesDescription(): string;

/**
 * Marketing Site cookies (sv:siteCookie) of current site.
 *
 * @return {List<Node>} the marketing site cookies of current site, or empty list if current site has no site cookies
 */
export function getMarketingSiteCookies(): List<Node>;

/**
 * Gets the marketing site cookies category title.
 *
 * @return {string} marketing site cookies category title
 */
export function getMarketingSiteCookiesTitle(): string;

/**
 * Gets the marketing site cookies category description.
 *
 * @return {string} marketing site cookies category description
 */
export function getMarketingSiteCookiesDescription(): string;

/**
 * Custom Site cookies (sv:siteCookie) of current site.
 *
 * @return {List<Node>} the custom site cookies of current site, or empty list if current site has no site cookies
 */
export function getCustomSiteCookies(): List<Node>;

/**
 * Gets the custom site cookies category title.
 *
 * @return {string} custom site cookies category title
 */
export function getCustomSiteCookiesTitle(): string;

/**
 * Gets the custom site cookies category description.
 *
 * @return {string} custom site cookies category description
 */
export function getCustomSiteCookiesDescription(): string;

/**
 * Convenience method that resolves a sv:siteCookie Node from a given cookie identifier.
 *
 * @param {string} aCookieIdentifier the site cookie identifier
 * @return {Node} the sv:siteCookie Node with the "cookieIdentifier" property that matches aCookieIdentifier. Returns null if
 * aCookieIdentifier is null, blank or indeterminable
 */
export function resolveSiteCookieByIdentifier(aCookieIdentifier: string): Node;

/**
 * Checks whether or not current user explicitly has accepted a specific site cookie.
 *
 * @param {Node} aSiteCookie the sv:siteCookie
 * @return {boolean} true if current user has accepted aSiteCookie, false otherwise
 */
export function checkUserConsent(aSiteCookie: Node);

/**
 * Whether or not current user has explicitly accepted/rejected all "user selectable" site cookies.
 *
 * @return {boolean} true if there are site cookies that current user hasn't yet accepted/rejected, false otherwise
 * @see #hasUserConsentCookie()
 */
export function hasPendingUserConsents(): boolean;

/**
 * Whether or not current user has a consent cookie.
 *
 * @return {boolean} true if current user has a consent cookie set, false otherwise
 * @see #hasPendingUserConsents()
 */
export function hasUserConsentCookie(): boolean;

/**
 * The name of the cookie that contains data about site cookie consents.
 *
 * @return {string} the name of the cookie that contains data about site cookie consents
 */
export function getUserConsentCookieName(): string;

/**
 * Generates a consent string that can be saved as cookie value for the cookie named {@link #getUserConsentCookieName()}.
 *
 * <p>
 *    <em>Note!</em> All "user selectable" sv:siteCookie Nodes that are <em>not</em> present in <code>aAllowCookieIdList</code>
 *    will be treated as rejected.
 * </p>
 *
 * @param {List<Node>} aAllowCookieIdList the list of sv:siteCookie accepted by current user
 * @return {string} a string that represents the accept/reject status for current sv:siteCookie's
 * @throws IllegalArgumentException if aAllowCookieIdList is null or contains other than sv:siteCookie Nodes
 */
export function createUserConsentCookieValue(
  aAllowCookieIdList: List<Node>
): string;

/**
 * Gets all sv:siteCookie nodes that current user has accepted.
 *
 * @return {List<Node>} the list of sv:siteCookie Nodes current user has accepted. Returns empty list if site has no site cookies or if current user hasn't
 * accepted any sv:siteCookie
 */
export function getUserConsents(): List<Node>;

declare namespace siteCookieUtil {
  export {
    getNecessarySiteCookies,
    getNecessarySiteCookiesTitle,
    getNecessarySiteCookiesDescription,
    getAnalyticsSiteCookies,
    getAnalyticsSiteCookiesTitle,
    getAnalyticsSiteCookiesDescription,
    getMarketingSiteCookies,
    getMarketingSiteCookiesTitle,
    getMarketingSiteCookiesDescription,
    getCustomSiteCookies,
    getCustomSiteCookiesTitle,
    getCustomSiteCookiesDescription,
    resolveSiteCookieByIdentifier,
    checkUserConsent,
    hasPendingUserConsents,
    hasUserConsentCookie,
    getUserConsentCookieName,
    createUserConsentCookieValue,
    getUserConsents,
  };
}
