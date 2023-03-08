import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";
import type { Object } from "../../types/java/lang/Object";

/**
 * Utility interface for locating resources.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getResourceLocatorUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 */
export interface ResourceLocatorUtil {
  /**
   * Gets current site (i.e. the site node of the page for the currently executing portlet).
   *
   *  <p>
   *     <strong>Note!</strong> If you are interested in the actual <em>start page</em>, you should use the {@link #getSitePage()} method.
   *  </p>
   * @return current site <code>Node</code>, or <code>null</code> if indeterminable&#xA; (e.g. current portlet and/or current page is not bound to any site)
   * @see #getSitePage()
   */
  getSite(): Node;

  /**
   * Gets current site page (i.e. the site's start page node of the page for the currently executing portlet).
   *
   *  <p>
   *     <strong>Note!</strong> If you are interested in the actual <em>site</em>, you should use the {@link #getSite()} method.
   *  </p>
   * @return current site page <code>Node</code>, or <code>null</code> if indeterminable&#xA; (e.g. current portlet and/or current page is not bound to any site)
   * @see #getSite()
   */
  getSitePage(): Node;

  /**
   * Gets the color repository for the site of current node.
   * @return the color repository for the site of current node, or <code>null</code> if indeterminable
   */
  getColorRepository(): Node;

  /**
   * Gets the font repository for the site of current node.
   * @return the font repository for the site of current node, or <code>null</code> if indeterminable
   */
  getFontRepository(): Node;

  /**
   * Gets the decoration repository for the site of current node.
   * @return the decoration repository for the site of current node, or <code>null</code> if indeterminable
   */
  getDecorationRepository(): Node;

  /**
   * Gets the file repository for the site of current node.
   * @return the global file repository for the site of current node, or <code>null</code> if indeterminable
   */
  getFileRepository(): Node;

  /**
   * Gets the local file repository for current page node.
   *
   *  <p>
   *     <em>
   *        This is a convenience for {@link #getLocalFileRepository(Node)} that uses
   *        {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage()} to get current page node.
   *     </em>
   *  </p>
   * @return the local file repository for current node, or <code>null</code> if indeterminable
   */
  getLocalFileRepository(): Node;

  /**
   * Gets the local file repository for a specified page node.
   * @param aNode a node that has a local file repository (typically a sv:page or sv:article)
   * @return the local file repository for <code>aNode</code>, or <code>null</code> if indeterminable
   * @since Sitevision 3.6.4
   */
  getLocalFileRepository(aNode: Node): Node;

  /**
   * Gets the image repository for the site of current node.
   * @return the global image repository for the site of current node, or <code>null</code> if indeterminable
   */
  getImageRepository(): Node;

  /**
   * Gets the local image repository for current page node.
   *
   *  <p>
   *     <em>
   *        This is a convenience for {@link #getLocalImageRepository(Node)} that uses
   *        {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage()} to get current page node.
   *     </em>
   *  </p>
   * @return the local image repository for current node, or <code>null</code> if indeterminable
   */
  getLocalImageRepository(): Node;

  /**
   * Gets the local image repository for a specified page node.
   * @param aNode a node that has a local image repository (typically a sv:page or sv:article)
   * @return the local image repository for <code>aNode</code>, or <code>null</code> if indeterminable
   * @since Sitevision 3.6.4
   */
  getLocalImageRepository(aNode: Node): Node;

  /**
   * Gets the page comment repository for current page node.
   *
   *  <p>
   *     <em>
   *        This is a convenience for {@link #getPageCommentRepository(Node)} that uses
   *        {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage()} to get current page node.
   *     </em>
   *  </p>
   * @return the page comment repository for current page node, or <code>null</code> if indeterminable
   * @since Sitevision 3.6.4
   */
  getPageCommentRepository(): Node;

  /**
   * Gets the page comment repository for a specified page node.
   * @param aNode a node that has a page comment repository (typically a sv:page or sv:article)
   * @return the page comment repository for <code>aNode</code>, or <code>null</code> if indeterminable
   * @since Sitevision 3.6.4
   */
  getPageCommentRepository(aNode: Node): Node;

  /**
   * Gets the personal file repository for a specified node.
   *
   *  <p>
   *     A <em>personal file repository</em> contains files that belongs to a <code>sv:collaborationGroup</code> (i.e. "group files")
   *     or a <code>sv:userIdentity</code> (e.g. files attached when posting timeline entries).
   *  </p>
   *  <p>
   *     <em>Convenience note!</em> This method will extract and use the corresponding <code>sv:collaborationGroup</code> if
   *     the <em>aNode</em> argument is a <code>sv:collaborationGroupPage</code>. It will also try to extract and use the
   *     corresponding <code>sv:userIdentity</code> if the <em>aNode</em> argument is a <code>sv:user</code>.
   *  </p>
   * @param aNode a node that has a personal file repository (typically a sv:collaborationGroup or sv:userIdentity)
   * @return the personal file repository for <code>aNode</code>, or <code>null</code> if indeterminable.
   * @since Sitevision 3.6.4
   */
  getPersonalFileRepository(aNode: Node): Node;

  /**
   * Gets the personal image repository for a specified node.
   *
   *  <p>
   *     A <em>personal image repository</em> contains images that belongs to a <code>sv:collaborationGroup</code>
   *     or a <code>sv:userIdentity</code> (e.g. profile image).
   *  </p>
   *  <p>
   *     <em>Convenience note!</em> This method will extract and use the corresponding <code>sv:collaborationGroup</code> if
   *     the <em>aNode</em> argument is a <code>sv:collaborationGroupPage</code>. It will also try to extract and use the
   *     corresponding <code>sv:userIdentity</code> if the <em>aNode</em> argument is a <code>sv:user</code>.
   *  </p>
   * @param aNode a node that has a personal image repository (typically a sv:collaborationGroup or sv:userIdentity)
   * @return the personal image repository for <code>aNode</code>, or <code>null</code> if indeterminable.
   * @since Sitevision 3.6.4
   */
  getPersonalImageRepository(aNode: Node): Node;

  /**
   * Gets the icon repository for the site of current node.
   *
   *  <p>
   *     The icon repository contains all site-specific file icon nodes.
   *  </p>
   * @return the icon repository for the site of current node, or <code>null</code> if indeterminable
   */
  getIconRepository(): Node;

  /**
   * Gets the index repository for the site of current node.
   *
   *  <p>
   *     <em>Tip!</em> The {@link senselogic.sitevision.api.search.index.IndexUtil} utility can be used for easy index lookup.
   *  </p>
   * @return the index repository for the site of current node, or <code>null</code> if indeterminable
   * @since Sitevision 3.6
   */
  getIndexRepository(): Node;

  /**
   * Gets the default image repository for the site of current node.
   *
   *  <p>
   *     The default image repository contains system/server-specific images/icons.
   *  </p>
   * @return the default image repository for the site of current node, or <code>null</code> if indeterminable
   */
  getDefaultImageRepository(): Node;

  /**
   * Gets the LDAP directories repository for the site of current node
   * @return the LDAP directories repository, or <code>null</code> if indeterminable
   */
  getDirectoryRepository(): Node;

  /**
   * Gets a <code>Node</code> given its identifier.
   *
   *  <p>
   *     <em>
   *        Note! This is mere a convenience alias for {@link javax.jcr.Session#getNodeByIdentifier(String)} but
   *        unlike the original, this method returns null instead of throwing an exception if given identifier
   *        can't be matched to an existing node.
   *     </em>
   *  </p>
   * @param anIdentifier a Node identifier
   * @return the corresponding <code>Node</code> or <code>null</code>
   * @since Sitevision 3.6.5
   */
  getNodeByIdentifier(anIdentifier: String | string): Node;

  /**
   * Gets a <code>Node</code> given its absolute path.
   *
   *  <p>
   *     <em>
   *        Note! This is mere a convenience alias for {@link javax.jcr.Session#getNode(String)} but
   *        unlike the original, this method returns null instead of throwing an exception if given
   *        absolute path can't be matched to an existing node.
   *     </em>
   *  </p>
   * @param anAbsolutePath an absolute path
   * @return the corresponding <code>Node</code> or <code>null</code>
   * @since Sitevision 3.6.5
   */
  getNodeByPath(anAbsolutePath: String | string): Node;

  /**
   * Gets a <code>Node</code> given its URL
   * @param anUrl an url pointing to the resource (e.g. page, portlet, file, image)
   * @return the corresponding <code>Node</code> or <code>null</code>
   * @since Sitevision 2.6.1
   */
  getNodeByUrl(anUrl: String | string): Node;

  /**
   * <p>
   *     Resolves a potential JCR Node identifier for an internal Sitevision object.
   *  </p>
   *
   *  <p>
   *     <em>
   *        This is a deprecated legacy method for conversions between internal Sitevision objects and API objects (javax.jcr.Node).
   *        This behaviour is typically only applicable in really old Velocity templates that was released prior to the API
   *        (i.e. templates released before 2008).
   *        This method is <strong>not</strong> intended for {@link javax.jcr.Node javax.jcr.Node} objects!
   *        To get the "id" of a <code>javax.jcr.Node</code> - use the {@link Node#getIdentifier()} method.
   *     </em>
   *  </p>
   * @param aInternalObject a internal Sitevision object
   * @return a potential JCR Node identifier, or null if aInternalObject is null.&#xA; The identifier for the sv:sitePage Node is returned if aInternalObject corresponds to the "site".&#xA; Note that there are no guarantee that returned value actually is a valid JCR Node identifier
   * @since Sitevision 2.6.1_01
   * @deprecated This is a legacy method for really old Velocity templates that uses internal Sitevision objects.
   */
  getNodeId(aInternalObject: unknown): string;

  /**
   * Gets the template repository for the site of current node.
   * @return the template repository for the site of current node, or <code>null</code> if indeterminable
   * @since Sitevision 2.6.2
   */
  getTemplateRepository(): Node;

  /**
   * Gets the RSS feed repository for the site of current node.
   * @return the RSS feed repository for the site of current node, or <code>null</code> if indeterminable
   * @since Sitevision 3.6.2
   */
  getRssFeedRepository(): Node;

  /**
   * Gets the list style repository for the site of current node.
   * @return the list style repository for the site of current node, or <code>null</code> if indeterminable
   * @since Sitevision 3.6.4
   */
  getListStyleRepository(): Node;

  /**
   * Gets the module element draft repository for the site of current node.
   * @return the module element draft repository, or <code>null</code> if indeterminable.
   * @since Sitevision 4.2
   */
  getModuleElementDraftRepository(): Node;

  /**
   * Gets the module element repository for the site of current node.
   * @return the module element repository, or <code>null</code> if indeterminable.
   * @since Sitevision 4.2
   */
  getModuleElementRepository(): Node;

  /**
   * Gets the module element file repository for current module element node.
   *
   *  <p>
   *     <em>
   *        This is a convenience for {@link #getModuleElementFileRepository(Node)} that uses
   *        {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentModuleElement()} to get current module element node.
   *     </em>
   *  </p>
   * @return the module element file repository for current module element, or <code>null</code> if indeterminable.
   * @since Sitevision 4.2
   */
  getModuleElementFileRepository(): Node;

  /**
   * Gets the module element file repository for a specified module element node.
   * @param aNode a node that has a module element file repository (typically a sv:moduleElementDraft or sv:moduleElement)
   * @return the module element file repository for <code>aNode</code>, or <code>null</code> if indeterminable.
   * @since Sitevision 4.2
   */
  getModuleElementFileRepository(aNode: Node): Node;

  /**
   * Gets the module element image repository for current module element node.
   *
   *  <p>
   *     <em>
   *        This is a convenience for {@link #getModuleElementImageRepository(Node)} that uses
   *        {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentModuleElement()} to get current module element node.
   *     </em>
   *  </p>
   * @return the module element image repository for current module element, or <code>null</code> if indeterminable.
   * @since Sitevision 4.2
   */
  getModuleElementImageRepository(): Node;

  /**
   * Gets the module element image repository for a specified module element node.
   * @param aNode a node that has a module element image repository (typically a sv:moduleElementDraft or sv:moduleElement)
   * @return the module element image repository for <code>aNode</code>, or <code>null</code> if indeterminable.
   * @since Sitevision 4.2
   */
  getModuleElementImageRepository(aNode: Node): Node;

  /**
   * Gets the addon repository for the site of current node.
   * @return the addon repository, or <code>null</code> if indeterminable.
   * @since Sitevision 4.2
   */
  getAddonRepository(): Node;

  /**
   * Gets the named reference repository for the site of current node.
   * @return the named reference repository, or <code>null</code> if indeterminable.
   * @since Sitevision 4.2.2
   */
  getNamedReferenceRepository(): Node;

  /**
   * Gets the role repository (sv:roleRepository) for the site of current node.
   * @return the role repository, or null if indeterminable.
   * @since Sitevision 5
   * @see senselogic.sitevision.api.security.RoleUtil
   */
  getRoleRepository(): Node;

  /**
   * Gets the virtual group repository (sv:virtualGroupRepository) for the site of current node.
   * @return the virtual group repository, or null if indeterminable.
   * @since Sitevision 5
   */
  getVirtualGroupRepository(): Node;

  /**
   * Gets the tag group repository (sv:tagGroupRepository) for the site of current node.
   * @return the tag group repository, or null if indeterminable.
   * @since Sitevision 5
   */
  getTagGroupRepository(): Node;

  /**
   * Gets the responsive breakpoint repository (sv:responsiveBreakpointRepository) for the site of current node.
   * @return the responsive breakpoint repository, or null if indeterminable.
   * @since Sitevision 6.2
   */
  getResponsiveBreakpointRepository(): Node;

  /**
   * Gets the topic repository (sv:topicRepository) for the site of current node.
   * @return the topic repository, or null if indeterminable.
   * @since Sitevision 7
   */
  getTopicRepository(): Node;

  /**
   * Gets the external topic integration repository (sv:externalTopicIntegrationRepository) for the site of current node.
   * @return the external topic integration repository, or null if indeterminable.
   * @since Sitevision 7
   */
  getExternalTopicIntegrationRepository(): Node;

  /**
   * Gets the OAuth2 configuration repository (sv:oAuth2ConfigurationRepository) for the site of current node.
   * @return the OAuth2 configuration repository, or null if indeterminable.
   * @since Sitevision 7
   */
  getOAuth2ConfigurationRepository(): Node;

  /**
   * Gets the metadata definition template repository (sv:metadataDefinitionTemplateRepository) for the site of current node.
   * @return the metadata definition template repository, or null if indeterminable.
   * @since Sitevision 8.1
   */
  getMetadataDefinitionTemplateRepository(): Node;

  /**
   * Gets the trashcan (sv:trashcan) for the site of current node.
   * @return the trashcan, or null if indeterminable.
   * @see senselogic.sitevision.api.webresource.structure.TrashcanUtil
   * @since Sitevision 8.1
   */
  getTrashcan(): Node;

  /**
   * Gets the principal repository (sv:principalRepository) for the site of current node.
   * @return the principal repository, or null if indeterminable.
   * @since Sitevision 8.2
   */
  getPrincipalRepository(): Node;

  /**
   * Gets the alias repository (sv:aliasRepository) for the site of current node.
   * @return the alias repository, or null if indeterminable.
   * @since Sitevision 8.2
   */
  getAliasRepository(): Node;

  /**
   * Gets the site cookie repository (sv:siteCookieRepository) for the site of current node.
   * @return the site cookie repository, or null if indeterminable.
   * @since Sitevision 9.1
   * @see senselogic.sitevision.api.cookie.SiteCookieUtil
   */
  getSiteCookieRepository(): Node;
}

declare namespace ResourceLocatorUtil {}

declare var resourceLocatorUtil: ResourceLocatorUtil;

export default resourceLocatorUtil;
