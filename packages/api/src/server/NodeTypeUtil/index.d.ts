
/**
* Checks if a node is an application index.
* @returns {boolean} whether aNode is an application index or not. 
* @param {Node} aNode - the node to be checked
*/
export function isApplicationIndex(aNode: Node): boolean;

/**
* Checks if a node is an archive.
* @returns {boolean} whether aNode is an archive or not. 
* @param {Node} aNode - the node to be checked
*/
export function isArchive(aNode: Node): boolean;

/**
* Checks if a node is an article.
* @returns {boolean} whether aNode is an article or not. 
* @param {Node} aNode - the node to be checked
*/
export function isArticle(aNode: Node): boolean;

/**
* Checks if a node is a collaboration group.
* @returns {boolean} whether aNode is a collaboration group or not. 
* @param {Node} aNode - the node to be checked
*/
export function isCollaborationGroup(aNode: Node): boolean;

/**
* Checks if a node is a collaboration group folder.
* @returns {boolean} whether aNode is a collaboration group folder or not. 
* @param {Node} aNode - the node to be checked
*/
export function isCollaborationGroupFolder(aNode: Node): boolean;

/**
* Checks if a node is a collaboration group page.
* @returns {boolean} whether aNode is a collaboration group page or not. 
* @param {Node} aNode - the node to be checked
*/
export function isCollaborationGroupPage(aNode: Node): boolean;

/**
* Checks if a node is a collaboration group template.
* @returns {boolean} whether aNode is a collaboration group template or not. 
* @param {Node} aNode - the node to be checked
*/
export function isCollaborationGroupTemplate(aNode: Node): boolean;

/**
* Checks if a node is a color.
* @returns {boolean} whether aNode is a color or not. 
* @param {Node} aNode - the node to be checked
*/
export function isColor(aNode: Node): boolean;

/**
* Checks if a node is a decoration.
* @returns {boolean} whether aNode is a decoration or not. 
* @param {Node} aNode - the node to be checked
*/
export function isDecoration(aNode: Node): boolean;

/**
* Checks if a node is a LDAP directory.
* @returns {boolean} whether aNode is a LDAP directory or not. 
* @param {Node} aNode - the node to be checked
*/
export function isDirectory(aNode: Node): boolean;

/**
* Checks if a node is a file.
* @returns {boolean} whether aNode is a file or not. 
* @param {Node} aNode - the node to be checked
*/
export function isFile(aNode: Node): boolean;

/**
* Checks if a node is a folder.
* @returns {boolean} whether aNode is a folder or not. 
* @param {Node} aNode - the node to be checked
*/
export function isFolder(aNode: Node): boolean;

/**
* Checks if a node is a font.
* @returns {boolean} whether aNode is a font or not. 
* @param {Node} aNode - the node to be checked
*/
export function isFont(aNode: Node): boolean;

/**
* Checks if a node is an image.
* @returns {boolean} whether aNode is an image or not. 
* @param {Node} aNode - the node to be checked
*/
export function isImage(aNode: Node): boolean;

/**
* Checks if a node is a layout.
* @returns {boolean} whether aNode is a layout or not. 
* @param {Node} aNode - the node to be checked
*/
export function isLayout(aNode: Node): boolean;

/**
* Checks if a node is a link.
* @returns {boolean} whether aNode is a link or not. 
* @param {Node} aNode - the node to be checked
*/
export function isLink(aNode: Node): boolean;

/**
* Checks if a node is a node index.
* @returns {boolean} whether aNode is a node index or not. 
* @param {Node} aNode - the node to be checked
*/
export function isNodeIndex(aNode: Node): boolean;

/**
* Checks if a node is a page.
* @returns {boolean} whether aNode is a page or not. 
* @param {Node} aNode - the node to be checked
*/
export function isPage(aNode: Node): boolean;

/**
* Checks if a node is a portlet.
* @returns {boolean} whether aNode is a portlet or not. 
* @param {Node} aNode - the node to be checked
*/
export function isPortlet(aNode: Node): boolean;

/**
* Checks if a node is a RSS feed.
* @returns {boolean} whether aNode is a RSS feed or not. 
* @param {Node} aNode - the node to be checked
*/
export function isRssFeed(aNode: Node): boolean;

/**
* Checks if a node is a RSS feed item.
* @returns {boolean} whether aNode is a RSS feed item or not. 
* @param {Node} aNode - the node to be checked
*/
export function isRssFeedItem(aNode: Node): boolean;

/**
* Checks if a node is a RSS feed repository.
* @returns {boolean} whether aNode is a RSS feed repository or not. 
* @param {Node} aNode - the node to be checked
*/
export function isRssFeedRepository(aNode: Node): boolean;

/**
* Checks if a node is a site.
* @returns {boolean} whether aNode is a site or not. 
* @param {Node} aNode - the node to be checked
*/
export function isSite(aNode: Node): boolean;

/**
* Checks if a node is a site page.
* @returns {boolean} whether aNode is a site page or not. 
* @param {Node} aNode - the node to be checked
*/
export function isSitePage(aNode: Node): boolean;

/**
* Checks if a node is a structure folder.
* @returns {boolean} whether aNode is a structure folder or not. 
* @param {Node} aNode - the node to be checked
*/
export function isStructureFolder(aNode: Node): boolean;

/**
* Checks if a node is a structure link.
* @returns {boolean} whether aNode is a structure link or not. 
* @param {Node} aNode - the node to be checked
*/
export function isStructureLink(aNode: Node): boolean;

/**
* Checks if a node is a structure page.
* @returns {boolean} whether aNode is a structure page or not. 
* @param {Node} aNode - the node to be checked
*/
export function isStructurePage(aNode: Node): boolean;

/**
* Checks if a node is a template.
* @returns {boolean} whether aNode is a template or not. 
* @param {Node} aNode - the node to be checked
*/
export function isTemplate(aNode: Node): boolean;

/**
* Checks if a node is a temporary file.
* @returns {boolean} whether aNode is a temporary file or not. 
* @param {Node} aNode - the node to be checked
*/
export function isTemporaryFile(aNode: Node): boolean;

/**
* Checks if a node is a trashcan.
* @returns {boolean} whether aNode is a trashcan or not. 
* @param {Node} aNode - the node to be checked
*/
export function isTrashcan(aNode: Node): boolean;

/**
* Checks a node against a given node type name to see if they match.
* @returns {boolean} whether primary node type of aNode matches the aPrimaryNodeType type 
* @param {Node} aNode - the node to be checked
* @param {string} aPrimaryNodeType - the primary node type name aNode should be checked against
*/
export function isType(aNode: Node, aPrimaryNodeType: string): boolean;

/**
* Checks a node against multiple node type names to see if any of them match.
* @returns {boolean} whether primary node type of aNode matches any of the types in aPrimaryNodeTypes 
* @param {Node} aNode - the node to be checked
* @param {...string} aPrimaryNodeTypes - the primary node type names aNode should be checked against
*/
export function isTypeOf(aNode: Node, ...aPrimaryNodeTypes: string[]): boolean;

/**
* Checks if a node is a user.
* @returns {boolean} whether aNode is a user or not. 
* @param {Node} aNode - the node to be checked
*/
export function isUser(aNode: Node): boolean;

/**
* Checks if a node is a user identity.
* @returns {boolean} whether aNode is a user identity or not. 
* @param {Node} aNode - the node to be checked
*/
export function isUserIdentity(aNode: Node): boolean;

declare namespace nodeTypeUtil {
  export {
    isApplicationIndex,
    isArchive,
    isArticle,
    isCollaborationGroup,
    isCollaborationGroupFolder,
    isCollaborationGroupPage,
    isCollaborationGroupTemplate,
    isColor,
    isDecoration,
    isDirectory,
    isFile,
    isFolder,
    isFont,
    isImage,
    isLayout,
    isLink,
    isNodeIndex,
    isPage,
    isPortlet,
    isRssFeed,
    isRssFeedItem,
    isRssFeedRepository,
    isSite,
    isSitePage,
    isStructureFolder,
    isStructureLink,
    isStructurePage,
    isTemplate,
    isTemporaryFile,
    isTrashcan,
    isType,
    isTypeOf,
    isUser,
    isUserIdentity,
  };
}

export default nodeTypeUtil;
