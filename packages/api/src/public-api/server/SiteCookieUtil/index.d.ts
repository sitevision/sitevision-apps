import type { List } from "../../types/java/util/List";
import type { String } from "../../types/java/lang/String";
import type { Node } from "../../types/javax/jcr/Node";

/**
 * Site cookie utility interface.
 *
 *  <p>
 *     Contains methods for retrieving sv:siteCookie Nodes of current site and current user's consent status of them.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getSiteCookieUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @see senselogic.sitevision.api.resource.ResourceLocatorUtil#getSiteCookieRepository()
 * @author Karl Eklöf
 * @since Sitevision 9.1
 */
export interface SiteCookieUtil {
  /**
   * Necessary Site cookies (sv:siteCookie) of current site.
   * @return the necessary site cookies of current site, or empty list if current site has no site cookies
   */
  getNecessarySiteCookies(): List;

  /**
   * Gets the necessary site cookies category title.
   * @return necessary site cookies category title
   */
  getNecessarySiteCookiesTitle(): string;

  /**
   * Gets the necessary site cookies category description.
   * @return necessary site cookies category description
   */
  getNecessarySiteCookiesDescription(): string;

  /**
   * Analytics Site cookies (sv:siteCookie) of current site.
   * @return the analytics site cookies of current site, or empty list if current site has no site cookies
   */
  getAnalyticsSiteCookies(): List;

  /**
   * Gets the analytics site cookies category title.
   * @return analytics site cookies category title
   */
  getAnalyticsSiteCookiesTitle(): string;

  /**
   * Gets the analytics site cookies category description.
   * @return analytics site cookies category description
   */
  getAnalyticsSiteCookiesDescription(): string;

  /**
   * Marketing Site cookies (sv:siteCookie) of current site.
   * @return the marketing site cookies of current site, or empty list if current site has no site cookies
   */
  getMarketingSiteCookies(): List;

  /**
   * Gets the marketing site cookies category title.
   * @return marketing site cookies category title
   */
  getMarketingSiteCookiesTitle(): string;

  /**
   * Gets the marketing site cookies category description.
   * @return marketing site cookies category description
   */
  getMarketingSiteCookiesDescription(): string;

  /**
   * Functional Site cookies (sv:siteCookie) of current site.
   * @return the functional site cookies of current site, or empty list if current site has no site cookies
   * @since Sitevision 9.1.1
   */
  getFunctionalSiteCookies(): List;

  /**
   * Gets the functional site cookies category title.
   * @return functional site cookies category title
   * @since Sitevision 9.1.1
   */
  getFunctionalSiteCookiesTitle(): string;

  /**
   * Gets the functional site cookies category description.
   * @return functional site cookies category description
   * @since Sitevision 9.1.1
   */
  getFunctionalSiteCookiesDescription(): string;

  /**
   * Custom Site cookies (sv:siteCookie) of current site.
   * @return the custom site cookies of current site, or empty list if current site has no site cookies
   */
  getCustomSiteCookies(): List;

  /**
   * Gets the custom site cookies category title.
   * @return custom site cookies category title
   */
  getCustomSiteCookiesTitle(): string;

  /**
   * Gets the custom site cookies category description.
   * @return custom site cookies category description
   */
  getCustomSiteCookiesDescription(): string;

  /**
   * Convenience method that resolves a sv:siteCookie Node from a given cookie identifier.
   * @param aCookieIdentifier the site cookie identifier
   * @return the sv:siteCookie Node with the "cookieIdentifier" property that matches aCookieIdentifier. Returns null if&#xA; aCookieIdentifier is null, blank or indeterminable
   */
  resolveSiteCookieByIdentifier(aCookieIdentifier: String | string): Node;

  /**
   * Checks whether or not current user explicitly has accepted a specific site cookie.
   * @param aSiteCookie the sv:siteCookie
   * @return true if current user has accepted aSiteCookie, false otherwise
   */
  checkUserConsent(aSiteCookie: Node): boolean;

  /**
   * Whether or not current user has explicitly accepted/rejected all "user selectable" site cookies.
   * @return true if there are site cookies that current user hasn't yet accepted/rejected, false otherwise
   * @see #hasUserConsentCookie()
   */
  hasPendingUserConsents(): boolean;

  /**
   * Whether or not current user has a consent cookie.
   * @return true if current user has a consent cookie set, false otherwise
   * @see #hasPendingUserConsents()
   */
  hasUserConsentCookie(): boolean;

  /**
   * The name of the cookie that contains data about site cookie consents.
   * @return the name of the cookie that contains data about site cookie consents
   */
  getUserConsentCookieName(): string;

  /**
   * Generates a consent string that can be saved as cookie value for the cookie named {@link #getUserConsentCookieName()}.
   *
   *  <p>
   *     <em>Note!</em> All "user selectable" sv:siteCookie Nodes that are <em>not</em> present in <code>aAllowCookieIdList</code>
   *     will be treated as rejected.
   *  </p>
   * @param aAllowCookieIdList the list of sv:siteCookie accepted by current user
   * @return a string that represents the accept/reject status for current sv:siteCookie's
   * @throws IllegalArgumentException if aAllowCookieIdList is null or contains other than sv:siteCookie Nodes
   */
  createUserConsentCookieValue(aAllowCookieIdList: List | unknown[]): string;

  /**
   * Gets all sv:siteCookie nodes that current user has accepted.
   * @return the list of sv:siteCookie Nodes current user has accepted. Returns empty list if site has no site cookies or if current user hasn't&#xA; accepted any sv:siteCookie
   */
  getUserConsents(): List;
}

declare namespace SiteCookieUtil {}

declare var siteCookieUtil: SiteCookieUtil;

export default siteCookieUtil;
