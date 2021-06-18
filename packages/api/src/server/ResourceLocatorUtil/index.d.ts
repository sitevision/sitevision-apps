import Node from '../../builtins/Node';

export function getAddonRepository(): Node;
export function getAliasRepository(): Node;
export function getColorRepository(): Node;
export function getDecorationRepository(): Node;
export function getDefaultImageRepository(): Node;
export function getDirectoryRepository(): Node;
export function getExternalTopicRepository(): Node;
export function getFileRepository(): Node;
export function getFontRepository(): Node;
export function getIconRepository(): Node;
export function getImageRepository(): Node;
export function getIndexRepository(): Node;
export function getListStyleRepository(): Node;
export function getLocalFileRepository(): Node;
export function getLocalFileRepository(aNode: Node): Node;
export function getLocalImageRepository(): Node;
export function getLocalImageRepository(aNode: Node): Node;
export function getMetadataDefinitionTemplateRepository(): Node;
export function getModuleElementDraftRepository(): Node;
export function getModuleElementFileRepository(): Node;
export function getModuleElementFileRepository(aNode: Node): Node;
export function getModuleElementImageRepository(): Node;
export function getModuleElementImageRepository(aNode: Node): Node;
export function getModuleElementRepository(): Node;
export function getNamedReferenceRepository(): Node;
export function getNodeByIdentifier(anIdentifier: string): Node;
export function getNodeByPath(anAbsolutePath: string): Node;
export function getNodeByUrl(aUrl: string): Node;
export function getOAuth2ConfigurationRepository(): Node;
export function getPageCommentRepository(): Node;
export function getPageCommentRepository(aNode: Node): Node;
export function getPersonalFileRepository(aNode: Node): Node;
export function getPersonalImageRepository(aNode: Node): Node;
export function getPrincipalRepository(): Node;
export function getResponsiveBreakpointRepository(): Node;
export function getRoleRepository(): Node;
export function getRssFeedRepository(): Node;
export function getSite(): Node;
export function getSitePage(): Node;
export function getTagGroupRepository(): Node;
export function getTemplateRepository(): Node;
export function getTopicRepository(): Node;
export function getTrashcan(): Node;
export function getVirtualGroupRepository(): Node;

declare namespace resourceLocatorUtil {
  export {
    getAddonRepository,
    getAliasRepository,
    getColorRepository,
    getDecorationRepository,
    getDefaultImageRepository,
    getDirectoryRepository,
    getExternalTopicRepository,
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
