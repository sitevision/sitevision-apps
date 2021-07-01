import Node from '../../builtins/Node';


/**
* Gets the addon repository for the site of current node.
* @returns {Node} the addon repository, or null if indeterminable. 
*/
export function getAddonRepository(): Node;

/**
* Gets the alias repository (sv:aliasRepository) for the site of current node.
* @returns {Node} the alias repository, or null if indeterminable. 
*/
export function getAliasRepository(): Node;

/**
* Gets the color repository for the site of current node.
* @returns {Node} the color repository for the site of current node, or null if indeterminable 
*/
export function getColorRepository(): Node;

/**
* Gets the decoration repository for the site of current node.
* @returns {Node} the decoration repository for the site of current node, or null if indeterminable 
*/
export function getDecorationRepository(): Node;

/**
* Gets the default image repository for the site of current node.
* @returns {Node} the default image repository for the site of current node, or null if indeterminable 
*/
export function getDefaultImageRepository(): Node;

/**
* Gets the LDAP directories repository for the site of current node
* @returns {Node} the LDAP directories repository, or null if indeterminable 
*/
export function getDirectoryRepository(): Node;

/**
* Gets the external topic integration repository (sv:externalTopicIntegrationRepository) for the site of current node.
* @returns {Node} the external topic integration repository, or null if indeterminable. 
*/
export function getExternalTopicIntegrationRepository(): Node;

/**
* Gets the file repository for the site of current node.
* @returns {Node} the global file repository for the site of current node, or null if indeterminable 
*/
export function getFileRepository(): Node;

/**
* Gets the font repository for the site of current node.
* @returns {Node} the font repository for the site of current node, or null if indeterminable 
*/
export function getFontRepository(): Node;

/**
* Gets the icon repository for the site of current node.
* @returns {Node} the icon repository for the site of current node, or null if indeterminable 
*/
export function getIconRepository(): Node;

/**
* Gets the image repository for the site of current node.
* @returns {Node} the global image repository for the site of current node, or null if indeterminable 
*/
export function getImageRepository(): Node;

/**
* Gets the index repository for the site of current node.
* @returns {Node} the index repository for the site of current node, or null if indeterminable 
*/
export function getIndexRepository(): Node;

/**
* Gets the list style repository for the site of current node.
* @returns {Node} the list style repository for the site of current node, or null if indeterminable 
*/
export function getListStyleRepository(): Node;

/**
* Gets the local file repository for current page node.
* @returns {Node} the local file repository for current node, or null if indeterminable 
*/
export function getLocalFileRepository(): Node;

/**
* Gets the local file repository for a specified page node.
* @returns {Node} the local file repository for aNode, or null if indeterminable 
* @param {Node} aNode - a node that has a local file repository (typically a sv:page or sv:article)
*/
export function getLocalFileRepository(aNode: Node): Node;

/**
* Gets the local image repository for current page node.
* @returns {Node} the local image repository for current node, or null if indeterminable 
*/
export function getLocalImageRepository(): Node;

/**
* Gets the local image repository for a specified page node.
* @returns {Node} the local image repository for aNode, or null if indeterminable 
* @param {Node} aNode - a node that has a local image repository (typically a sv:page or sv:article)
*/
export function getLocalImageRepository(aNode: Node): Node;

/**
* Gets the metadata definition template repository (sv:metadataDefinitionTemplateRepository) for the site of current node.
* @returns {Node} the metadata definition template repository, or null if indeterminable. 
*/
export function getMetadataDefinitionTemplateRepository(): Node;

/**
* Gets the module element draft repository for the site of current node.
* @returns {Node} the module element draft repository, or null if indeterminable. 
*/
export function getModuleElementDraftRepository(): Node;

/**
* Gets the module element file repository for current module element node.
* @returns {Node} the module element file repository for current module element, or null if indeterminable. 
*/
export function getModuleElementFileRepository(): Node;

/**
* Gets the module element file repository for a specified module element node.
* @returns {Node} the module element file repository for aNode, or null if indeterminable. 
* @param {Node} aNode - a node that has a module element file repository (typically a sv:moduleElementDraft or sv:moduleElement)
*/
export function getModuleElementFileRepository(aNode: Node): Node;

/**
* Gets the module element image repository for current module element node.
* @returns {Node} the module element image repository for current module element, or null if indeterminable. 
*/
export function getModuleElementImageRepository(): Node;

/**
* Gets the module element image repository for a specified module element node.
* @returns {Node} the module element image repository for aNode, or null if indeterminable. 
* @param {Node} aNode - a node that has a module element image repository (typically a sv:moduleElementDraft or sv:moduleElement)
*/
export function getModuleElementImageRepository(aNode: Node): Node;

/**
* Gets the module element repository for the site of current node.
* @returns {Node} the module element repository, or null if indeterminable. 
*/
export function getModuleElementRepository(): Node;

/**
* Gets the named reference repository for the site of current node.
* @returns {Node} the named reference repository, or null if indeterminable. 
*/
export function getNamedReferenceRepository(): Node;

/**
* Gets a Node given its identifier.
* @returns {Node} the corresponding Node or null 
* @param {string} anIdentifier - a Node identifier
*/
export function getNodeByIdentifier(anIdentifier: string): Node;

/**
* Gets a Node given its absolute path.
* @returns {Node} the corresponding Node or null 
* @param {string} anAbsolutePath - an absolute path
*/
export function getNodeByPath(anAbsolutePath: string): Node;

/**
* Gets a Node given its URL
* @returns {Node} the corresponding Node or null 
* @param {string} anUrl - an url pointing to the resource (e.g. page, portlet, file, image)
*/
export function getNodeByUrl(anUrl: string): Node;

/**
* Deprecated. 
This is a legacy method for really old Velocity templates that uses internal Sitevision objects.
 
* @returns {string} a potential JCR Node identifier, or null if aInternalObject is null.The identifier for the sv:sitePage Node is returned if aInternalObject corresponds to the "site".Note that there are no guarantee that returned value actually is a valid JCR Node identifier 
* @param {Object} aInternalObject - a internal Sitevision object
*/
export function getNodeId(aInternalObject: Object): string;

/**
* Gets the OAuth2 configuration repository (sv:oAuth2ConfigurationRepository) for the site of current node.
* @returns {Node} the OAuth2 configuration repository, or null if indeterminable. 
*/
export function getOAuth2ConfigurationRepository(): Node;

/**
* Gets the page comment repository for current page node.
* @returns {Node} the page comment repository for current page node, or null if indeterminable 
*/
export function getPageCommentRepository(): Node;

/**
* Gets the page comment repository for a specified page node.
* @returns {Node} the page comment repository for aNode, or null if indeterminable 
* @param {Node} aNode - a node that has a page comment repository (typically a sv:page or sv:article)
*/
export function getPageCommentRepository(aNode: Node): Node;

/**
* Gets the personal file repository for a specified node.
* @returns {Node} the personal file repository for aNode, or null if indeterminable. 
* @param {Node} aNode - a node that has a personal file repository (typically a sv:collaborationGroup or sv:userIdentity)
*/
export function getPersonalFileRepository(aNode: Node): Node;

/**
* Gets the personal image repository for a specified node.
* @returns {Node} the personal image repository for aNode, or null if indeterminable. 
* @param {Node} aNode - a node that has a personal image repository (typically a sv:collaborationGroup or sv:userIdentity)
*/
export function getPersonalImageRepository(aNode: Node): Node;

/**
* Gets the principal repository (sv:principalRepository) for the site of current node.
* @returns {Node} the principal repository, or null if indeterminable. 
*/
export function getPrincipalRepository(): Node;

/**
* Gets the responsive breakpoint repository (sv:responsiveBreakpointRepository) for the site of current node.
* @returns {Node} the responsive breakpoint repository, or null if indeterminable. 
*/
export function getResponsiveBreakpointRepository(): Node;

/**
* Gets the role repository (sv:roleRepository) for the site of current node.
* @returns {Node} the role repository, or null if indeterminable. 
*/
export function getRoleRepository(): Node;

/**
* Gets the RSS feed repository for the site of current node.
* @returns {Node} the RSS feed repository for the site of current node, or null if indeterminable 
*/
export function getRssFeedRepository(): Node;

/**
* Gets current site (i.e. the site node of the page for the currently executing portlet).
* @returns {Node} current site Node, or null if indeterminable(e.g. current portlet and/or current page is not bound to any site) 
*/
export function getSite(): Node;

/**
* Gets current site page (i.e. the site's start page node of the page for the currently executing portlet).
* @returns {Node} current site page Node, or null if indeterminable(e.g. current portlet and/or current page is not bound to any site) 
*/
export function getSitePage(): Node;

/**
* Gets the tag group repository (sv:tagGroupRepository) for the site of current node.
* @returns {Node} the tag group repository, or null if indeterminable. 
*/
export function getTagGroupRepository(): Node;

/**
* Gets the template repository for the site of current node.
* @returns {Node} the template repository for the site of current node, or null if indeterminable 
*/
export function getTemplateRepository(): Node;

/**
* Gets the topic repository (sv:topicRepository) for the site of current node.
* @returns {Node} the topic repository, or null if indeterminable. 
*/
export function getTopicRepository(): Node;

/**
* Gets the trashcan (sv:trashcan) for the site of current node.
* @returns {Node} the trashcan, or null if indeterminable. 
*/
export function getTrashcan(): Node;

/**
* Gets the virtual group repository (sv:virtualGroupRepository) for the site of current node.
* @returns {Node} the virtual group repository, or null if indeterminable. 
*/
export function getVirtualGroupRepository(): Node;

declare namespace resourceLocatorUtil {
  export {
    getAddonRepository,
    getAliasRepository,
    getColorRepository,
    getDecorationRepository,
    getDefaultImageRepository,
    getDirectoryRepository,
    getExternalTopicIntegrationRepository,
    getFileRepository,
    getFontRepository,
    getIconRepository,
    getImageRepository,
    getIndexRepository,
    getListStyleRepository,
    getLocalFileRepository,
    getLocalFileRepository,
    getLocalImageRepository,
    getLocalImageRepository,
    getMetadataDefinitionTemplateRepository,
    getModuleElementDraftRepository,
    getModuleElementFileRepository,
    getModuleElementFileRepository,
    getModuleElementImageRepository,
    getModuleElementImageRepository,
    getModuleElementRepository,
    getNamedReferenceRepository,
    getNodeByIdentifier,
    getNodeByPath,
    getNodeByUrl,
    getOAuth2ConfigurationRepository,
    getPageCommentRepository,
    getPageCommentRepository,
    getPersonalFileRepository,
    getPersonalImageRepository,
    getPrincipalRepository,
    getResponsiveBreakpointRepository,
    getRoleRepository,
    getRssFeedRepository,
    getSite,
    getSitePage,
    getTagGroupRepository,
    getTemplateRepository,
    getTopicRepository,
    getTrashcan,
    getVirtualGroupRepository,
  };
}

export default resourceLocatorUtil;
