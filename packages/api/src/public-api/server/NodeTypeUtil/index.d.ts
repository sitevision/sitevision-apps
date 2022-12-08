import type { Node } from "../../types/javax/jcr/Node";

/**
 * Checks if a node is a layout.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a layout or not.
 */
export function isLayout(aNode: Node): boolean;

/**
 * Checks if a node is a link.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a link or not.
 */
export function isLink(aNode: Node): boolean;

/**
 * Checks if a node is a page.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a page or not.
 */
export function isPage(aNode: Node): boolean;

/**
 * Checks if a node is a portlet.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a portlet or not.
 */
export function isPortlet(aNode: Node): boolean;

/**
 * Checks if a node is an archive.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is an archive or not.
 */
export function isArchive(aNode: Node): boolean;

/**
 * Checks if a node is an article.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is an article or not.
 */
export function isArticle(aNode: Node): boolean;

/**
 * Checks if a node is a folder.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a folder or not.
 */
export function isFolder(aNode: Node): boolean;

/**
 * Checks if a node is a file.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a file or not.
 */
export function isFile(aNode: Node): boolean;

/**
 * Checks if a node is an image.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is an image or not.
 */
export function isImage(aNode: Node): boolean;

/**
 * Checks if a node is a temporary file.
 * @param aNode the node to be checked
 * @return whether aNode is a temporary file or not.
 * @see #TEMPORARY_FILE_TYPE
 * @since Sitevision 4.5.5.2
 */
export function isTemporaryFile(aNode: Node): boolean;

/**
 * Checks if a node is a sv:user.
 * @param aNode the node to be checked
 * @return whether aNode is a {@link #USER_TYPE sv:user} or not.
 * @see #isAnyUserType(Node)
 */
export function isUser(aNode: Node): boolean;

/**
 * Checks if a node is a sv:simpleUser.
 * @param aNode the node to be checked
 * @return whether aNode is a {@link #SIMPLE_USER_TYPE sv:simpleUser} or not.
 * @see #isAnyUserType(Node)
 * @since Sitevision 10.2
 */
export function isSimpleUser(aNode: Node): boolean;

/**
 * Checks if a node is a sv:systemUser.
 *
 * <p>
 *    Note that there are several build-in "system users" in Sitevision:
 * </p>
 * <ul>
 *    <li>The <em>System</em> user</li>
 *    <li>The <em>Anonymous</em> user (i.e. non-authenticated user)</li>
 *    <li>The <em>Indexer</em> user (i.e. the user that index data in Sitevision)</li>
 *    <li>The <em>Validator</em> user (i.e. the user that validates page-nodes in Sitevision)</li>
 *    <li>The <em>Extractor</em> user (i.e. default "Web archive" user)</li>
 *    <li>The <em>Anonymized</em> user (i.e. an anonymized user)</li>
 * </ul>
 * @param aNode the node to be checked
 * @return whether aNode is a {@link #SYSTEM_USER_TYPE sv:systemUser} or not.
 * @see #isAnyUserType(Node)
 * @since Sitevision 10.2
 */
export function isSystemUser(aNode: Node): boolean;

/**
 * Checks if a node is a user identity.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a user identity or not.
 * @since Sitevision 3.5
 */
export function isUserIdentity(aNode: Node): boolean;

/**
 * Checks if a node is a site.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a site or not.
 */
export function isSite(aNode: Node): boolean;

/**
 * Checks if a node is a site page.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a site page or not.
 */
export function isSitePage(aNode: Node): boolean;

/**
 * Checks if a node is a template.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a template or not.
 */
export function isTemplate(aNode: Node): boolean;

/**
 * Checks if a node is a trashcan.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a trashcan or not.
 */
export function isTrashcan(aNode: Node): boolean;

/**
 * Checks if a node is a color.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a color or not.
 */
export function isColor(aNode: Node): boolean;

/**
 * Checks if a node is a decoration.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a decoration or not.
 */
export function isDecoration(aNode: Node): boolean;

/**
 * Checks if a node is a LDAP directory.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a LDAP directory or not.
 */
export function isDirectory(aNode: Node): boolean;

/**
 * Checks if a node is a font.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a font or not.
 */
export function isFont(aNode: Node): boolean;

/**
 * Checks if a node is a structure folder.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a structure folder or not.
 */
export function isStructureFolder(aNode: Node): boolean;

/**
 * Checks if a node is a structure link.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a structure link or not.
 */
export function isStructureLink(aNode: Node): boolean;

/**
 * Checks if a node is a structure page.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a structure page or not.
 */
export function isStructurePage(aNode: Node): boolean;

/**
 * Checks if a node is a collaboration group.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a collaboration group or not.
 * @since Sitevision 3.5
 */
export function isCollaborationGroup(aNode: Node): boolean;

/**
 * Checks if a node is a collaboration group folder.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a collaboration group folder or not.
 * @since Sitevision 3.5
 */
export function isCollaborationGroupFolder(aNode: Node): boolean;

/**
 * Checks if a node is a collaboration group page.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a collaboration group page or not.
 * @since Sitevision 3.5
 */
export function isCollaborationGroupPage(aNode: Node): boolean;

/**
 * Checks if a node is a collaboration group template.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a collaboration group template or not.
 * @since Sitevision 3.5
 */
export function isCollaborationGroupTemplate(aNode: Node): boolean;

/**
 * Checks if a node is an application index.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is an application index or not.
 * @since Sitevision 3.6
 */
export function isApplicationIndex(aNode: Node): boolean;

/**
 * Checks if a node is a node index.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a node index or not.
 * @since Sitevision 3.6
 */
export function isNodeIndex(aNode: Node): boolean;

/**
 * Checks if a node is a RSS feed.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a RSS feed or not.
 * @since Sitevision 3.6.2
 */
export function isRssFeed(aNode: Node): boolean;

/**
 * Checks if a node is a RSS feed item.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a RSS feed item or not.
 * @since Sitevision 3.6.2
 */
export function isRssFeedItem(aNode: Node): boolean;

/**
 * Checks if a node is a RSS feed repository.
 * @param aNode the node to be checked
 * @return whether <code>aNode</code> is a RSS feed repository or not.
 * @since Sitevision 3.6.2
 */
export function isRssFeedRepository(aNode: Node): boolean;

/**
 * Convenience method that checks if a node is of "Renderable node" type.
 *
 * <p>
 *    A <em>"Renderable node"</em> is a Node that can have a {@link #isAnyContentType(Node) "Content node"} as render part:
 * </p>
 * <ul>
 *    <li>{@link #PAGE_TYPE sv:page}</li>
 *    <li>{@link #ARTICLE_TYPE sv:article}</li>
 *    <li>{@link #SITE_PAGE_TYPE sv:sitePage}</li>
 *    <li>{@link #STRUCTURE_PAGE_TYPE sv:structurePage}</li>
 *    <li>{@link #COLLABORATION_GROUP_PAGE_TYPE sv:collaborationGroupPage}</li>
 *    <li>{@link #TEMPLATE_TYPE sv:template}</li>
 *    <li>{@link #COLLABORATION_GROUP_TEMPLATE_TYPE sv:collaborationGroupTemplate}</li>
 *    <li>{@link #DECORATION_TEMPLATE_TYPE sv:decorationTemplate}</li>
 *    <li>{@link #MODULE_ELEMENT_TYPE sv:moduleElement}</li>
 *    <li>{@link #MODULE_ELEMENT_DRAFT_TYPE sv:moduleElementDraft}</li>
 * </ul>
 * @param aNode the node to be checked
 * @return whether aNode is a "renderable node" or not.
 * @see senselogic.sitevision.api.node.ContentNodeUtil
 * @since Sitevision 10.2
 */
export function isAnyRenderableType(aNode: Node): boolean;

/**
 * Convenience method that checks if a node is of "Content node" type.
 *
 * <p>
 *    A <em>"Content node"</em> is a Node that can be rendered as content part of a {@link #isAnyRenderableType(Node) "Renderable node"}:
 * </p>
 * <ul>
 *    <li>{@link #PORTLET_TYPE sv:portlet}</li>
 *    <li>{@link #LAYOUT_TYPE sv:layout}</li>
 *    <li>{@link #LINKED_LAYOUT_TYPE sv:linkedLayout}</li>
 *    <li>{@link #REFERENCE_LAYOUT_TYPE sv:referenceLayout}</li>
 *    <li>{@link #VIEW_TYPE sv:view}</li>
 *    <li>{@link #PROFILE_VIEW_TYPE sv:profileView}</li>
 * </ul>
 * @param aNode the node to be checked
 * @return whether aNode is a "content node" or not.
 * @see senselogic.sitevision.api.node.ContentNodeUtil
 * @since Sitevision 10.2
 */
export function isAnyContentType(aNode: Node): boolean;

/**
 * Convenience method that checks if a node is of "User node" type.
 *
 * <p>
 *    "User" node types are:
 * </p>
 * <ul>
 *    <li>{@link #USER_TYPE sv:user}</li>
 *    <li>{@link #SIMPLE_USER_TYPE sv:simpleUser}</li>
 *    <li>{@link #SYSTEM_USER_TYPE sv:systemUser}</li>
 * </ul>
 * @param aNode the node to be checked
 * @return whether aNode is a "user node" or not.
 * @since Sitevision 10.2
 */
export function isAnyUserType(aNode: Node): boolean;

/**
 * Checks a node against a given node type name to see if they match.
 * @param aNode the node to be checked
 * @param aPrimaryNodeType the primary node type name <code>aNode</code> should be checked against
 * @return whether primary node type of <code>aNode</code> matches the <code>aPrimaryNodeType</code> type
 * @see #isTypeOf(javax.jcr.Node, String[])
 */
export function isType(aNode: Node, aPrimaryNodeType: string): boolean;

/**
 * Checks a node against multiple node type names to see if any of them match.
 * @param aNode the node to be checked
 * @param aPrimaryNodeTypes the primary node type names <code>aNode</code> should be checked against
 * @return whether primary node type of <code>aNode</code> matches any of the types in <code>aPrimaryNodeTypes</code>
 */
export function isTypeOf(aNode: Node, aPrimaryNodeTypes: string): boolean;

/**
 * Node type utility interface.
 *
 * <p>
 * This interface contains the primary node type names for Sitevision nodes and convenience methods for checking
 * if a node is of a specific type.
 * </p>
 *
 * <p>
 * <em>Tip! If you write your code in Velocity, you might want to ensure that the object actually are a <code>Node</code>
 * before you execute methods in this interface. Use {@link senselogic.sitevision.api.script.InstanceTypeUtil#isNode(Object)} to do that.</em>
 * </p>
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getNodeTypeUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>The primary node type name for an application index.The primary node type name for an archive.The primary node type name for an article.The primary node type name for a collaboration group.The primary node type name for a collaboration group folder.The primary node type name for a collaboration group page.The primary node type name for a collaboration group template.The primary node type name for a site color.The primary node type name for a decoration.The primary node type name for a LDAP directory.The primary node type name for a file.The primary node type name for a folder.The primary node type name for a site font.The primary node type name for an image.The primary node type name for a layout.The primary node type name for a linked layout.The primary node type name for a link.The primary node type name for a node index.The primary node type name for a page.The primary node type name for a portlet.The primary node type name for a RSS feed.The primary node type name for a RSS feed item.The primary node type name for a RSS feed repository.The primary node type name for the site.The primary node type name for the site page.The primary node type name for a structure folder.The primary node type name for a structure link.The primary node type name for a structure page.The primary node type name for a template.The primary node type name for the trashcan.The primary node type name for a user.The primary node type name for a user identity.The primary node type name for the admin principal repository.The primary node type name for the alias repository type.The primary node type name for the alias type.The primary node type name for the alternative type.The primary node type name for the break field type.The primary node type name for the captcha field type.The primary node type name for the color repository type.The primary node type name for the comment field type.The primary node type name for the date field type.The primary node type name for the decoration repository type.The primary node type name for the decoration template type.The primary node type name for the default image type.The primary node type name for the default image repository type.The primary node type name for the directory repository type.The primary node type name for the external principal repository type.The primary node type name for the file extension icon type.The primary node type name for the file field type.The primary node type name for the file repository type.The primary node type name for the filtered image type.The primary node type name for the font repository type.The primary node type name for the form type.The primary node type name for the grade field type.The primary node type name for the icon repository type.The primary node type name for the image filter type.The primary node type name for the image repository type.The primary node type name for the layout repository type.The primary node type name for the list style type.The primary node type name for the list style repository type.The primary node type name for the local color type.The primary node type name for the local file repository type.The primary node type name for the local image repository type.The primary node type name for the metadata alternative item type.The primary node type name for the metadata definition repository type.The primary node type name for the metadata definition template repository type.The primary node type name for the metadata directory definition type.The primary node type name for the metadata image portlet definition definition type.The primary node type name for the metadata integer definition definition type.The primary node type name for the metadata keyword type.The primary node type name for the metadata keyword definition type.The primary node type name for the metadata link definition type.The primary node type name for the metadata media portlet definition type.The primary node type name for the metadata multiple definition type.The primary node type name for the metadata related information definition type.The primary node type name for the metadata single definition type.The primary node type name for the metadata system definition type.The primary node type name for the metadata text definition type.The primary node type name for the metadata text portlet definition type.The primary node type name for the metadata user definition type.The primary node type name for the metadata single tag definition type.The primary node type name for the metadata multiple tag definition type.The primary node type name for the mobile app type.The primary node type name for the multiple selection field type.The primary node type name for the named reference type.The primary node type name for the named reference repository.The primary node type name for the order field type.The primary node type name for the order item type.The primary node type name for the page comment type.The primary node type name for the page sub comment type.The primary node type name for the page comment repository type.The primary node type name for the page component type.The primary node type name for the page content type.The primary node type name for the page repository type.The primary node type name for the participants field type.The primary node type name for the personal file repository type.The primary node type name for the personal image repository type.The primary node type name for the principal repository type.The primary node type name for the profile view type.The primary node type name for the rating type.The primary node type name for the rating repository type.The primary node type name for the rating type.The primary node type name for the recipients type.The primary node type name for the recipients field type.The primary node type name for the reference layout type.The primary node type name for the responsive breakpoint type.The primary node type name for the root type.The primary node type name for the script field type.The primary node type name for the simple user type.The primary node type name for the single selection field type.The primary node type name for the site cookie type.The primary node type name for the site cookie repository type.The primary node type name for the sub alternative field type.The primary node type name for the sub query type.The primary node type name for the sub script type.The primary node type name for the system user type.
 *
 * <p>
 *    Note that there are several sv:systemUser's in Sitevision:
 * </p>
 * <ul>
 *    <li>The <em>System</em> user</li>
 *    <li>The <em>Anonymous</em> user (i.e. a non-authenticated user)</li>
 *    <li>The <em>Anonymized</em> user (i.e. an anonymized user)</li>
 *    <li>The <em>Indexer</em> user (i.e. the user that indexes Sitevision data)</li>
 *    <li>The <em>Validator</em> user (i.e. the user that validates page-like nodes in Sitevision)</li>
 *    <li>The <em>Extractor</em> user (i.e. the default "Web archive" user)</li>
 * </ul>The primary node type name for the system group type.The primary node type name for the template repository type.The primary node type name for the temporary type.The primary node type name for the temporary file type.The primary node type name for the text field type.The primary node type name for the user attribute type.The primary node type name for the user attribute field type.The primary node type name for the user container type.The primary node type name for the user group type.The primary node type name for the vfs file type.The primary node type name for the vfs folder type.The primary node type name for the vfs mount type.The primary node type name for the view type.The primary node type name for the virtual group type.The primary node type name for the global virtual group type.The primary node type name for the index repository type.The primary node type name for the module element draft repository type.The primary node type name for the module element draft type.The primary node type name for the module element repository type.The primary node type name for the module element type.The primary node type name for the module element file repository type.The primary node type name for the module element image repository type.The primary node type name for the custom module type.The primary node type name for the addon repository type.The primary node type name for the tag type.The primary node type name for the tag repository type.The primary node type name for the tag group type.The primary node type name for the tag group repository type.The primary node type name for the headless custom module type.The primary node type name for the webapp type.The primary node type name for the webapp repository type.The primary node type name for the restapp type.The primary node type name for the restapp repository type.The primary node type name for the comment type.The primary node type name for the timeline entry repository type.The primary node type name for the timeline entry type.The primary node type name for the bookmarked timeline entry type.The primary node type name for the timeline file entry type.The primary node type name for the timeline file wall entry type.The primary node type name for the timeline share entry type.The primary node type name for the timeline share page entry type.The primary node type name for the timeline wall entry type.The primary node type name for the data store repository type.The primary node type name for the key/value data store type.The primary node type name for the collection data store type.The primary node type name for the role type.The primary node type name for the role repository type.The primary node type name for the virtual group repository type.The primary node type name for the user field type.The primary node type name for the user field repository type.The primary node type name for the Marketplace custom module type.The primary node type name for the Marketplace headless custom module type.The primary node type name for the responsive breakpoint repository type.The primary node type name for the topic repository type.The primary node type name for the topic type.The primary node type name for the topic timeline entry type.The primary node type name for the external topic integration repository type.The primary node type name for the external topic integration type.The primary node type name for the external topic type.The primary node type name for the external timeline entry repository type.The primary node type name for the external topic timeline entry type.The primary node type name for the external comment type.The primary node type name for the OAuth2 configuration repository type.The primary node type name for the OAuth2 configuration type.
 * @author Magnus Lövgren
 * @since Sitevision 2.6.2
 * @since Sitevision 3.6
 * @since Sitevision 3.5
 * @since Sitevision 3.5
 * @since Sitevision 3.5
 * @since Sitevision 3.5
 * @since Sitevision 10
 * @since Sitevision 3.6
 * @since Sitevision 3.6.2
 * @since Sitevision 3.6.2
 * @since Sitevision 3.6.2
 * @see #isUser(Node)
 * @see #isAnyUserType(Node)
 * @since Sitevision 3.5
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 8.2.1
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 6.2
 * @since Sitevision 6.2
 * @since Sitevision 3.6.3
 * @deprecated As of Sitevision 10 this type no longer exist
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 4.2.2
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 7
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @see #isSimpleUser(Node)
 * @see #isAnyUserType(Node)
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 9.1
 * @since Sitevision 9.1
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @see #isSystemUser(Node)
 * @see #isAnyUserType(Node)
 * @since Sitevision 3.6.3
 * @since Sitevision 4.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 4.5.4
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 3.6.3
 * @since Sitevision 4.2
 * @since Sitevision 3.6.4
 * @since Sitevision 4.2
 * @since Sitevision 4.2
 * @since Sitevision 4.2
 * @since Sitevision 4.2
 * @since Sitevision 4.2
 * @since Sitevision 4.2
 * @since Sitevision 4.2
 * @since Sitevision 4.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 5
 * @since Sitevision 5
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 4.5.2
 * @since Sitevision 5
 * @since Sitevision 5
 * @since Sitevision 5
 * @since Sitevision 5
 * @since Sitevision 5
 * @since Sitevision 5
 * @since Sitevision 5.1
 * @since Sitevision 5.1
 * @since Sitevision 6
 * @since Sitevision 6
 * @since Sitevision 6.2
 * @since Sitevision 7
 * @since Sitevision 7
 * @since Sitevision 7
 * @since Sitevision 7
 * @since Sitevision 7
 * @since Sitevision 7
 * @since Sitevision 7
 * @since Sitevision 7
 * @since Sitevision 7
 * @since Sitevision 7
 * @since Sitevision 7
 */
declare namespace nodeTypeUtil {
  export {
    isLayout,
    isLink,
    isPage,
    isPortlet,
    isArchive,
    isArticle,
    isFolder,
    isFile,
    isImage,
    isTemporaryFile,
    isUser,
    isSimpleUser,
    isSystemUser,
    isUserIdentity,
    isSite,
    isSitePage,
    isTemplate,
    isTrashcan,
    isColor,
    isDecoration,
    isDirectory,
    isFont,
    isStructureFolder,
    isStructureLink,
    isStructurePage,
    isCollaborationGroup,
    isCollaborationGroupFolder,
    isCollaborationGroupPage,
    isCollaborationGroupTemplate,
    isApplicationIndex,
    isNodeIndex,
    isRssFeed,
    isRssFeedItem,
    isRssFeedRepository,
    isAnyRenderableType,
    isAnyContentType,
    isAnyUserType,
    isType,
    isTypeOf,
  };
}

export default nodeTypeUtil;
