import Property from "../../builtins/Property";

/**
* Gets a directory attribute value for a directory node object as Property.
* @param {Node} aDirectoryObjectNode - a directory object node that has an attribute
* @param {string} anAttributeName - the attribute name
* @returns {Property} the attribute value as Property, or null if indeterminate(e.g. aDirectoryObjectNode is not a directory object nodeor aDirectoryObjectNode has no attribute named anAttributeName) 
*/
export function getAttributeAsProperty(aDirectoryObjectNode: Node, anAttributeName: string): Property;

/**
* Gets a directory node object with a specific distinguished name, dn.
* @param {string} aDirectoryObjectDN - the directory dn for a directory object
* @returns {Node} the directory object Node, or null if indeterminate 
*/
export function getNodeByDN(aDirectoryObjectDN: string): Node;

/**
* Searches for objects in all LDAP directories that are accessible in current context (i.e. current page).
* @param {string} aSearchFilter - LDAP search filter (as specified by RFC 2254)
* @returns {List<Node>} the search result as a List. If there are no hits, an empty List is returned. 
*/
export function search(aSearchFilter: string): List<Node>;

/**
* Searches for objects in a specified LDAP directory.
* @param {string} aSearchFilter - LDAP search filter (as specified by RFC 2254)
* @param {Node} aDirectoryNode - a LDAP directory Node
* @returns {List<Node>} the search result as a List. If there are no hits, an empty List is returned. 
*/
export function search(aSearchFilter: string, aDirectoryNode: Node): List<Node>;

/**
* Searches for objects in a specified search base in a specified LDAP directory.
* @param {string} aSearchFilter - LDAP search filter (as specified by RFC 2254)
* @param {Node} aDirectoryNode - a LDAP directory Node
* @param {string} aSearchBase - a search base that exist in aDirectoryNode
* @returns {List<Node>} the search result as a List. If there are no hits, an empty List is returned. 
*/
export function search(aSearchFilter: string, aDirectoryNode: Node, aSearchBase: string): List<Node>;

/**
* Searches for ids in a specified search base in all directories.
* @param {string} aSearchFilter - LDAP search filter (as specified by RFC 2254)
* @param {string} searchBase - search base for the search, if null all directories for current node will be searched
* @param {List<string>} attributes - a List of return attributes
* @returns {Map<string,Map<string,string>>} the search result as a Map. If there are no hits, an empty Map is returned.The Map contains ids as keys and a Map as values containing the returned attributes. 
*/
export function simpleSearch(aSearchFilter: string, searchBase: string, attributes: List<string>): Map<string, Map<string, string>>;

declare namespace directoryUtil {
  export {
    getAttributeAsProperty,
    getNodeByDN,
    search,
    simpleSearch,
  };
}

export default directoryUtil;

