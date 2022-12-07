import Node from "../../hidden/javax/jcr/Node";
import Property from "../../hidden/javax/jcr/Property";

/**
 * Searches for objects in all LDAP directories that are accessible in current context (i.e. current page).
 * <p>
 * Some examples of <a href="http://www.ietf.org/rfc/rfc2254.txt">RFC 2254</a> valid values for <code>aSearchFilter</code>:
 * <ul>
 * <li><code>"magnus"</code> - find all <em>magnus</em>, using the search base specified by the directories (usually common name) </li>
 * <li><code>"(cn=magnus)"</code> - find all with common name (cn) <em>magnus</em></li>
 * <li><code>"(cn=magnus*)"</code> - find all that has a common name (cn) that starts with <em>magnus</em></li>
 * <li><code>"(&amp;(cn=magnus)(mail=*))"</code> - find all that has a mail address and <em>magnus</em> as common name (cn)</li>
 * <li><code>"(|(cn=magnus)((sn=L*)))"</code> - find all with common name (cn) <em>magnus</em> or a surname (sn) that starts with <em>L</em></li>
 * </ul>
 * @param aSearchFilter LDAP search filter (as specified by <a href="http://www.ietf.org/rfc/rfc2254.txt">RFC 2254</a>)
 * @return the search result as a <code>List</code>. If there are no hits, an empty <code>List</code> is returned.
 * @see #search(String,Node)
 */
export function search(aSearchFilter: string): unknown;

/**
 * Searches for objects in a specified LDAP directory.
 * <p>
 * <em>Tip!</em> The repository for all LDAP directory nodes can be located via the
 * {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getDirectoryRepository() getDirectoryRepository()}
 * method in {@link senselogic.sitevision.api.resource.ResourceLocatorUtil}
 * </p>
 * @param aSearchFilter LDAP search filter (as specified by <a href="http://www.ietf.org/rfc/rfc2254.txt">RFC 2254</a>)
 * @param aDirectoryNode a LDAP directory <code>Node</code>
 * @return the search result as a <code>List</code>. If there are no hits, an empty <code>List</code> is returned.
 * @see #search(String)
 */
export function search(aSearchFilter: string, aDirectoryNode: Node): unknown;

/**
 * Searches for objects in a specified search base in a specified LDAP directory.
 * @param aSearchFilter LDAP search filter (as specified by <a href="http://www.ietf.org/rfc/rfc2254.txt">RFC 2254</a>)
 * @param aDirectoryNode a LDAP directory <code>Node</code>
 * @param aSearchBase a search base that exist in <code>aDirectoryNode</code>
 * @return the search result as a <code>List</code>. If there are no hits, an empty <code>List</code> is returned.
 * @see #search(String,Node)
 */
export function search(
  aSearchFilter: string,
  aDirectoryNode: Node,
  aSearchBase: string
): unknown;

/**
 * Gets a directory node object with a specific distinguished name, dn.
 * @param aDirectoryObjectDN the directory dn for a directory object
 * @return the directory object <code>Node</code>, or null if indeterminate
 */
export function getNodeByDN(aDirectoryObjectDN: string): Node;

/**
 * Gets a directory attribute value for a directory node object as <code>Property</code>.
 * <p>
 * The default properties for a directory node object adheres/corresponds to the attributes defined in the directory scheme.
 * All attributes that are defined in the scheme are exposed as properties in the Sitevision JCR model. This method tries to
 * find the attribute via the Sitevision JCR model but if no property can be found it executes LDAP queries
 * to find the attribute. This makes it possible to find scheme-defined attributes, but also custom-defined ones.
 * </p>
 * @param aDirectoryObjectNode a directory object node that has an attribute
 * @param anAttributeName the attribute name
 * @return the attribute value as <code>Property</code>, or <code>null</code> if indeterminate (e.g. <code>aDirectoryObjectNode</code> is not a directory object node or <code>aDirectoryObjectNode</code> has no attribute named <code>anAttributeName</code>)
 */
export function getAttributeAsProperty(
  aDirectoryObjectNode: Node,
  anAttributeName: string
): Property;

/**
 * Searches for ids in a specified search base in all directories.
 * @param aSearchFilter LDAP search filter (as specified by <a href="http://www.ietf.org/rfc/rfc2254.txt">RFC 2254</a>)
 * @param searchBase search base for the search, if <code>null</code> all directories for current node will be searched
 * @param attributes a <code>List</code> of return attributes
 * @return the search result as a <code>Map</code>. If there are no hits, an empty <code>Map</code> is returned. The <code>Map</code> contains ids as keys and a <code>Map</code> as values containing the returned attributes.
 * @since Sitevision 2.6.1_02
 */
export function simpleSearch(
  aSearchFilter: string,
  searchBase: string,
  attributes: unknown
): unknown;

/**
 * LDAP directory utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getDirectoryUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.6
 */
declare namespace directoryUtil {
  export { search, getNodeByDN, getAttributeAsProperty, simpleSearch };
}

export default directoryUtil;
