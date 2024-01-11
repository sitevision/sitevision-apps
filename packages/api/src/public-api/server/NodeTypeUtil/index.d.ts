import type { Node } from "../../types/javax/jcr/Node";

import type { String } from "../../types/java/lang/String";
import type { NodeTypeUtilConstants } from "../../types/senselogic/sitevision/api/render/velocity/VelocityAccess.NodeTypeUtilConstants";

/**
 * Node type utility interface.
 *
 *  <p>
 *  This interface contains the primary node type names for Sitevision nodes and convenience methods for checking
 *  if a node is of a specific type.
 *  </p>
 *
 *  <p>
 *  <em>Tip! If you write your code in Velocity, you might want to ensure that the object actually are a <code>Node</code>
 *  before you execute methods in this interface. Use {@link senselogic.sitevision.api.script.InstanceTypeUtil#isNode(Object)} to do that.</em>
 *  </p>
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getNodeTypeUtil()}.
 *  See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.6.2
 */
export interface NodeTypeUtil extends NodeTypeUtilConstants {
  /**
   * The primary node type name for an application index.
   * @since Sitevision 3.6
   */
  APPLICATION_INDEX_TYPE: "sv:applicationIndex";

  /**
 * The primary node type name for an archive.
  
    */
  ARCHIVE_TYPE: "sv:archive";

  /**
 * The primary node type name for an article.
  
    */
  ARTICLE_TYPE: "sv:article";

  /**
   * The primary node type name for a collaboration group.
   * @since Sitevision 3.5
   */
  COLLABORATION_GROUP_TYPE: "sv:collaborationGroup";

  /**
   * The primary node type name for a collaboration group folder.
   * @since Sitevision 3.5
   */
  COLLABORATION_GROUP_FOLDER_TYPE: "sv:collaborationGroupFolder";

  /**
   * The primary node type name for a collaboration group page.
   * @since Sitevision 3.5
   */
  COLLABORATION_GROUP_PAGE_TYPE: "sv:collaborationGroupPage";

  /**
   * The primary node type name for a collaboration group template.
   * @since Sitevision 3.5
   */
  COLLABORATION_GROUP_TEMPLATE_TYPE: "sv:collaborationGroupTemplate";

  /**
 * The primary node type name for a site color.
  
    */
  COLOR_TYPE: "sv:color";

  /**
 * The primary node type name for a decoration.
  
    */
  DECORATION_TYPE: "sv:decoration";

  /**
 * The primary node type name for a LDAP directory.
  
    */
  DIRECTORY_TYPE: "sv:directory";

  /**
 * The primary node type name for a file.
  
    */
  FILE_TYPE: "sv:file";

  /**
 * The primary node type name for a folder.
  
    */
  FOLDER_TYPE: "sv:folder";

  /**
 * The primary node type name for a site font.
  
    */
  FONT_TYPE: "sv:font";

  /**
 * The primary node type name for an image.
  
    */
  IMAGE_TYPE: "sv:image";

  /**
 * The primary node type name for a layout.
  
    */
  LAYOUT_TYPE: "sv:layout";

  /**
   * The primary node type name for a linked layout.
   * @since Sitevision 10
   */
  LINKED_LAYOUT_TYPE: "sv:linkedLayout";

  /**
 * The primary node type name for a link.
  
    */
  LINK_TYPE: "sv:link";

  /**
   * The primary node type name for a node index.
   * @since Sitevision 3.6
   */
  NODE_INDEX_TYPE: "sv:nodeIndex";

  /**
 * The primary node type name for a page.
  
    */
  PAGE_TYPE: "sv:page";

  /**
 * The primary node type name for a portlet.
  
    */
  PORTLET_TYPE: "sv:portlet";

  /**
   * The primary node type name for a RSS feed.
   * @since Sitevision 3.6.2
   */
  RSS_FEED_TYPE: "sv:rssFeed";

  /**
   * The primary node type name for a RSS feed item.
   * @since Sitevision 3.6.2
   */
  RSS_FEED_ITEM_TYPE: "sv:rssFeedItem";

  /**
   * The primary node type name for a RSS feed repository.
   * @since Sitevision 3.6.2
   */
  RSS_FEED_REPOSITORY_TYPE: "sv:rssFeedRepository";

  /**
 * The primary node type name for the site.
  
    */
  SITE_TYPE: "sv:site";

  /**
 * The primary node type name for the site page.
  
    */
  SITE_PAGE_TYPE: "sv:sitePage";

  /**
 * The primary node type name for a structure folder.
  
    */
  STRUCTURE_FOLDER_TYPE: "sv:structureFolder";

  /**
 * The primary node type name for a structure link.
  
    */
  STRUCTURE_LINK_TYPE: "sv:structureLink";

  /**
 * The primary node type name for a structure page.
  
    */
  STRUCTURE_PAGE_TYPE: "sv:structurePage";

  /**
 * The primary node type name for a template.
  
    */
  TEMPLATE_TYPE: "sv:template";

  /**
 * The primary node type name for the trashcan.
  
    */
  TRASHCAN_TYPE: "sv:trashcan";

  /**
   * The primary node type name for a user.
   * @see #isUser(Node)
   * @see #isAnyUserType(Node)
   */
  USER_TYPE: "sv:user";

  /**
   * The primary node type name for a user identity.
   * @since Sitevision 3.5
   */
  USER_IDENTITY_TYPE: "sv:userIdentity";

  /**
   * The primary node type name for the admin principal repository.
   * @since Sitevision 3.6.3
   */
  ADMIN_PRINCIPAL_REPOSITORY_TYPE: "sv:adminPrincipalRepository";

  /**
   * The primary node type name for the alias repository type.
   * @since Sitevision 3.6.3
   */
  ALIAS_REPOSITORY_TYPE: "sv:aliasRepository";

  /**
   * The primary node type name for the alias type.
   * @since Sitevision 8.2.1
   */
  ALIAS_TYPE: "sv:alias";

  /**
   * The primary node type name for the alternative type.
   * @since Sitevision 3.6.3
   */
  ALTERNATIVE_TYPE: "sv:alternative";

  /**
   * The primary node type name for the break field type.
   * @since Sitevision 3.6.3
   */
  BREAK_FIELD_TYPE: "sv:breakField";

  /**
   * The primary node type name for the captcha field type.
   * @since Sitevision 3.6.3
   */
  CAPTCHA_FIELD_TYPE: "sv:captchaField";

  /**
   * The primary node type name for the color repository type.
   * @since Sitevision 3.6.3
   */
  COLOR_REPOSITORY_TYPE: "sv:colorRepository";

  /**
   * The primary node type name for the comment field type.
   * @since Sitevision 3.6.3
   */
  COMMENT_FIELD_TYPE: "sv:commentField";

  /**
   * The primary node type name for the date field type.
   * @since Sitevision 3.6.3
   */
  DATE_FIELD_TYPE: "sv:dateField";

  /**
   * The primary node type name for the decoration repository type.
   * @since Sitevision 3.6.3
   */
  DECORATION_REPOSITORY_TYPE: "sv:decorationRepository";

  /**
   * The primary node type name for the decoration template type.
   * @since Sitevision 3.6.3
   */
  DECORATION_TEMPLATE_TYPE: "sv:decorationTemplate";

  /**
   * The primary node type name for the default image type.
   * @since Sitevision 3.6.3
   */
  DEFAULT_IMAGE_TYPE: "sv:defaultImage";

  /**
   * The primary node type name for the default image repository type.
   * @since Sitevision 3.6.3
   */
  DEFAULT_IMAGE_REPOSITORY_TYPE: "sv:defaultImageRepository";

  /**
   * The primary node type name for the directory repository type.
   * @since Sitevision 3.6.3
   */
  DIRECTORY_REPOSITORY_TYPE: "sv:directoryRepository";

  /**
   * The primary node type name for the external principal repository type.
   * @since Sitevision 3.6.3
   */
  EXTERNAL_PRINCIPAL_REPOSITORY_TYPE: "sv:externalPrincipalRepository";

  /**
   * The primary node type name for the file extension icon type.
   * @since Sitevision 3.6.3
   */
  FILE_EXTENSION_ICON_TYPE: "sv:fileExtensionIcon";

  /**
   * The primary node type name for the file field type.
   * @since Sitevision 3.6.3
   */
  FILE_FIELD_TYPE: "sv:fileField";

  /**
   * The primary node type name for the file repository type.
   * @since Sitevision 3.6.3
   */
  FILE_REPOSITORY_TYPE: "sv:fileRepository";

  /**
   * The primary node type name for the filtered image type.
   * @since Sitevision 3.6.3
   */
  FILTERED_IMAGE_TYPE: "sv:filteredImage";

  /**
   * The primary node type name for the font repository type.
   * @since Sitevision 3.6.3
   */
  FONT_REPOSITORY_TYPE: "sv:fontRepository";

  /**
   * The primary node type name for the form type.
   * @since Sitevision 3.6.3
   */
  FORM_TYPE: "sv:form";

  /**
   * The primary node type name for the grade field type.
   * @since Sitevision 3.6.3
   */
  GRADE_FIELD_TYPE: "sv:gradeField";

  /**
   * The primary node type name for the icon repository type.
   * @since Sitevision 3.6.3
   */
  ICON_REPOSITORY_TYPE: "sv:iconRepository";

  /**
   * The primary node type name for the image filter type.
   * @since Sitevision 3.6.3
   */
  IMAGE_FILTER_TYPE: "sv:imageFilter";

  /**
   * The primary node type name for the image filter repository type.
   * @since Sitevision 2023.09.1
   */
  IMAGE_FILTER_REPOSITORY_TYPE: "sv:imageFilterRepository";

  /**
   * The primary node type name for the image repository type.
   * @since Sitevision 3.6.3
   */
  IMAGE_REPOSITORY_TYPE: "sv:imageRepository";

  /**
   * The primary node type name for the layout repository type.
   * @since Sitevision 3.6.3
   */
  LAYOUT_REPOSITORY_TYPE: "sv:layoutRepository";

  /**
   * The primary node type name for the list style type.
   * @since Sitevision 3.6.3
   */
  LIST_STYLE_TYPE: "sv:listStyle";

  /**
   * The primary node type name for the list style repository type.
   * @since Sitevision 3.6.3
   */
  LIST_STYLE_REPOSITORY_TYPE: "sv:listStyleRepository";

  /**
   * The primary node type name for the local color type.
   * @since Sitevision 3.6.3
   */
  LOCAL_COLOR_TYPE: "sv:localColor";

  /**
   * The primary node type name for the local file repository type.
   * @since Sitevision 3.6.3
   */
  LOCAL_FILE_REPOSITORY_TYPE: "sv:localFileRepository";

  /**
   * The primary node type name for the local image repository type.
   * @since Sitevision 3.6.3
   */
  LOCAL_IMAGE_REPOSITORY_TYPE: "sv:localImageRepository";

  /**
   * The primary node type name for the metadata alternative item type.
   * @since Sitevision 3.6.3
   */
  METADATA_ALTERNATIVE_ITEM_TYPE: "sv:metadataAlternativeItem";

  /**
   * The primary node type name for the metadata definition repository type.
   * @since Sitevision 3.6.3
   */
  METADATA_DEFINITION_REPOSITORY_TYPE: "sv:metadataDefinitionRepository";

  /**
   * The primary node type name for the metadata definition template repository type.
   * @since Sitevision 3.6.3
   */
  METADATA_DEFINITION_TEMPLATE_REPOSITORY_TYPE: "sv:metadataDefinitionTemplateRepository";

  /**
   * The primary node type name for the metadata directory definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_DIRECTORY_DEFINITION_TYPE: "sv:metadataDirectoryDefinition";

  /**
   * The primary node type name for the metadata image portlet definition definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_IMAGE_PORTLET_DEFINITION_TYPE: "sv:metadataImagePortletDefinition";

  /**
   * The primary node type name for the metadata integer definition definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_INTEGER_DEFINITION_TYPE: "sv:metadataIntegerDefinition";

  /**
   * The primary node type name for the metadata keyword type.
   * @since Sitevision 3.6.3
   */
  METADATA_KEYWORD_TYPE: "sv:metadataKeyword";

  /**
   * The primary node type name for the metadata keyword definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_KEYWORD_DEFINITION_TYPE: "sv:metadataKeywordDefinition";

  /**
   * The primary node type name for the metadata link definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_LINK_DEFINITION_TYPE: "sv:metadataLinkDefinition";

  /**
   * The primary node type name for the metadata media portlet definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_MEDIA_PORTLET_DEFINITION_TYPE: "sv:metadataMediaPortletDefinition";

  /**
   * The primary node type name for the metadata multiple definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_MULTIPLE_DEFINITION_TYPE: "sv:metadataMultipleDefinition";

  /**
   * The primary node type name for the metadata related information definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_RELATED_INFORMATION_DEFINITION_TYPE: "sv:metadataRelatedInformationDefinition";

  /**
   * The primary node type name for the metadata single definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_SINGLE_DEFINITION_TYPE: "sv:metadataSingleDefinition";

  /**
   * The primary node type name for the metadata system definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_SYSTEM_DEFINITION_TYPE: "sv:metadataSystemDefinition";

  /**
   * The primary node type name for the metadata text definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_TEXT_DEFINITION_TYPE: "sv:metadataTextDefinition";

  /**
   * The primary node type name for the metadata text portlet definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_TEXT_PORTLET_DEFINITION_TYPE: "sv:metadataTextPortletDefinition";

  /**
   * The primary node type name for the metadata user definition type.
   * @since Sitevision 3.6.3
   */
  METADATA_USER_DEFINITION_TYPE: "sv:metadataUserDefinition";

  /**
   * The primary node type name for the metadata single tag definition type.
   * @since Sitevision 6.2
   */
  METADATA_SINGLE_TAG_DEFINITION_TYPE: "sv:metadataSingleTagDefinition";

  /**
   * The primary node type name for the metadata multiple tag definition type.
   * @since Sitevision 6.2
   */
  METADATA_MULTIPLE_TAG_DEFINITION_TYPE: "sv:metadataMultipleTagDefinition";

  /**
   * The primary node type name for the metadata date definition type.
   * @since Sitevision 2024.01.1
   */
  METADATA_DATE_DEFINITION_TYPE: "sv:metadataDateDefinition";

  /**
   * The primary node type name for the metadata system image definition type.
   * @since Sitevision 2024.01.1
   */
  METADATA_SYSTEM_IMAGE_DEFINITION_TYPE: "sv:metadataSystemImageDefinition";

  /**
   * The primary node type name for the metadata system integer definition type.
   * @since Sitevision 2024.01.1
   */
  METADATA_SYSTEM_INTEGER_DEFINITION_TYPE: "sv:metadataSystemIntegerDefinition";

  /**
   * The primary node type name for the metadata system link definition type.
   * @since Sitevision 2024.01.1
   */
  METADATA_SYSTEM_LINK_DEFINITION_TYPE: "sv:metadataSystemLinkDefinition";

  /**
   * The primary node type name for the metadata system text definition type.
   * @since Sitevision 2024.01.1
   */
  METADATA_SYSTEM_TEXT_DEFINITION_TYPE: "sv:metadataSystemTextDefinition";

  /**
   * The primary node type name for the mobile app type.
   * @since Sitevision 3.6.3
   * @deprecated As of Sitevision 10 this type no longer exist
   */
  MOBILE_APP_TYPE: "sv:mobileApp";

  /**
   * The primary node type name for the multiple selection field type.
   * @since Sitevision 3.6.3
   */
  MULTIPLE_SELECTION_FIELD_TYPE: "sv:multipleSelectionField";

  /**
   * The primary node type name for the named reference type.
   * @since Sitevision 3.6.3
   */
  NAMED_REFERENCE_TYPE: "sv:namedReference";

  /**
   * The primary node type name for the named reference repository.
   * @since Sitevision 4.2.2
   */
  NAMED_REFERENCE_REPOSITORY_TYPE: "sv:namedReferenceRepository";

  /**
   * The primary node type name for the order field type.
   * @since Sitevision 3.6.3
   */
  ORDER_FIELD_TYPE: "sv:orderField";

  /**
   * The primary node type name for the order item type.
   * @since Sitevision 3.6.3
   */
  ORDER_ITEM_TYPE: "sv:orderItem";

  /**
   * The primary node type name for the page comment type.
   * @since Sitevision 3.6.3
   */
  PAGE_COMMENT_TYPE: "sv:pageComment";

  /**
   * The primary node type name for the page sub comment type.
   * @since Sitevision 7
   */
  PAGE_SUB_COMMENT_TYPE: "sv:pageSubComment";

  /**
   * The primary node type name for the page comment repository type.
   * @since Sitevision 3.6.3
   */
  PAGE_COMMENT_REPOSITORY_TYPE: "sv:pageCommentRepository";

  /**
   * The primary node type name for the page component type.
   * @since Sitevision 3.6.3
   */
  PAGE_COMPONENT_TYPE: "sv:pageComponent";

  /**
   * The primary node type name for the page content type.
   * @since Sitevision 3.6.3
   */
  PAGE_CONTENT_TYPE: "sv:pageContent";

  /**
   * The primary node type name for the page repository type.
   * @since Sitevision 3.6.3
   */
  PAGE_REPOSITORY_TYPE: "sv:pageRepository";

  /**
   * The primary node type name for the participants field type.
   * @since Sitevision 3.6.3
   */
  PARTICIPANTS_FIELD_TYPE: "sv:participantsField";

  /**
   * The primary node type name for the personal file repository type.
   * @since Sitevision 3.6.3
   */
  PERSONAL_FILE_REPOSITORY_TYPE: "sv:personalFileRepository";

  /**
   * The primary node type name for the personal image repository type.
   * @since Sitevision 3.6.3
   */
  PERSONAL_IMAGE_REPOSITORY_TYPE: "sv:personalImageRepository";

  /**
   * The primary node type name for the principal repository type.
   * @since Sitevision 3.6.3
   */
  PRINCIPAL_REPOSITORY_TYPE: "sv:principalRepository";

  /**
   * The primary node type name for the profile view type.
   * @since Sitevision 3.6.3
   */
  PROFILE_VIEW_TYPE: "sv:profileView";

  /**
   * The primary node type name for the rating type.
   * @since Sitevision 3.6.3
   */
  RATING_TYPE: "sv:rating";

  /**
   * The primary node type name for the rating repository type.
   * @since Sitevision 3.6.3
   */
  RATING_REPOSITORY_TYPE: "sv:ratingRepository";

  /**
   * The primary node type name for the rating type.
   * @since Sitevision 3.6.3
   */
  RATING_TYPE_TYPE: "sv:ratingType";

  /**
   * The primary node type name for the recipients type.
   * @since Sitevision 3.6.3
   */
  RECIPIENT_TYPE: "sv:recipient";

  /**
   * The primary node type name for the recipients field type.
   * @since Sitevision 3.6.3
   */
  RECIPIENTS_FIELD_TYPE: "sv:recipientsField";

  /**
   * The primary node type name for the reference layout type.
   * @since Sitevision 3.6.3
   */
  REFERENCE_LAYOUT_TYPE: "sv:referenceLayout";

  /**
   * The primary node type name for the responsive breakpoint type.
   * @since Sitevision 3.6.3
   */
  RESPONSIVE_BREAKPOINT_TYPE: "sv:responsiveBreakpoint";

  /**
   * The primary node type name for the root type.
   * @since Sitevision 3.6.3
   */
  ROOT_TYPE: "sv:root";

  /**
   * The primary node type name for the script field type.
   * @since Sitevision 3.6.3
   */
  SCRIPT_FIELD_TYPE: "sv:scriptField";

  /**
   * The primary node type name for the simple user type.
   * @see #isSimpleUser(Node)
   * @see #isAnyUserType(Node)
   * @since Sitevision 3.6.3
   */
  SIMPLE_USER_TYPE: "sv:simpleUser";

  /**
   * The primary node type name for the single selection field type.
   * @since Sitevision 3.6.3
   */
  SINGLE_SELECTION_FIELD_TYPE: "sv:singleSelectionField";

  /**
   * The primary node type name for the site cookie type.
   * @since Sitevision 9.1
   */
  SITE_COOKIE_TYPE: "sv:siteCookie";

  /**
   * The primary node type name for the site cookie repository type.
   * @since Sitevision 9.1
   */
  SITE_COOKIE_REPOSITORY_TYPE: "sv:siteCookieRepository";

  /**
   * The primary node type name for the sub alternative field type.
   * @since Sitevision 3.6.3
   */
  SUB_ALTERNATIVE_FIELD_TYPE: "sv:subAlternativeField";

  /**
   * The primary node type name for the sub query type.
   * @since Sitevision 3.6.3
   */
  SUB_QUERY_TYPE: "sv:subQuery";

  /**
   * The primary node type name for the sub script type.
   * @since Sitevision 3.6.3
   */
  SUB_SCRIPT_TYPE: "sv:subScript";

  /**
   * The primary node type name for the system user type.
   *
   *  <p>
   *     Note that there are several sv:systemUser's in Sitevision:
   *  </p>
   *  <ul>
   *     <li>The <em>System</em> user</li>
   *     <li>The <em>Anonymous</em> user (i.e. a non-authenticated user)</li>
   *     <li>The <em>Anonymized</em> user (i.e. an anonymized user)</li>
   *     <li>The <em>Indexer</em> user (i.e. the user that indexes Sitevision data)</li>
   *     <li>The <em>Validator</em> user (i.e. the user that validates page-like nodes in Sitevision)</li>
   *     <li>The <em>Extractor</em> user (i.e. the default "Web archive" user)</li>
   *  </ul>
   * @see #isSystemUser(Node)
   * @see #isAnyUserType(Node)
   * @since Sitevision 3.6.3
   */
  SYSTEM_USER_TYPE: "sv:systemUser";

  /**
   * The primary node type name for the system group type.
   * @since Sitevision 4.3
   */
  SYSTEM_GROUP_TYPE: "sv:systemGroup";

  /**
   * The primary node type name for the template repository type.
   * @since Sitevision 3.6.3
   */
  TEMPLATE_REPOSITORY_TYPE: "sv:templateRepository";

  /**
   * The primary node type name for the temporary type.
   * @since Sitevision 3.6.3
   */
  TEMPORARY_TYPE: "sv:temporary";

  /**
   * The primary node type name for the temporary file type.
   * @since Sitevision 4.5.4
   */
  TEMPORARY_FILE_TYPE: "sv:temporaryFile";

  /**
   * The primary node type name for the text field type.
   * @since Sitevision 3.6.3
   */
  TEXT_FIELD_TYPE: "sv:textField";

  /**
   * The primary node type name for the user attribute type.
   * @since Sitevision 3.6.3
   */
  USER_ATTRIBUTE_TYPE: "sv:userAttribute";

  /**
   * The primary node type name for the user attribute field type.
   * @since Sitevision 3.6.3
   */
  USER_ATTRIBUTE_FIELD_TYPE: "sv:userAttributeField";

  /**
   * The primary node type name for the user container type.
   * @since Sitevision 3.6.3
   */
  USER_CONTAINER_TYPE: "sv:userContainer";

  /**
   * The primary node type name for the user group type.
   * @since Sitevision 3.6.3
   */
  USER_GROUP_TYPE: "sv:userGroup";

  /**
   * The primary node type name for the vfs file type.
   * @since Sitevision 3.6.3
   */
  VFS_FILE_TYPE: "sv:vfsFile";

  /**
   * The primary node type name for the vfs folder type.
   * @since Sitevision 3.6.3
   */
  VFS_FOLDER_TYPE: "sv:vfsFolder";

  /**
   * The primary node type name for the vfs mount type.
   * @since Sitevision 3.6.3
   */
  VFS_MOUNT_TYPE: "sv:vfsMount";

  /**
   * The primary node type name for the view type.
   * @since Sitevision 3.6.3
   */
  VIEW_TYPE: "sv:view";

  /**
   * The primary node type name for the virtual group type.
   * @since Sitevision 3.6.3
   */
  VIRTUAL_GROUP_TYPE: "sv:virtualGroup";

  /**
   * The primary node type name for the global virtual group type.
   * @since Sitevision 4.2
   */
  GLOBAL_VIRTUAL_GROUP_TYPE: "sv:globalVirtualGroup";

  /**
   * The primary node type name for the index repository type.
   * @since Sitevision 3.6.4
   */
  INDEX_REPOSITORY_TYPE: "sv:indexRepository";

  /**
   * The primary node type name for the module element draft repository type.
   * @since Sitevision 4.2
   */
  MODULE_ELEMENT_DRAFT_REPOSITORY_TYPE: "sv:moduleElementDraftRepository";

  /**
   * The primary node type name for the module element draft type.
   * @since Sitevision 4.2
   */
  MODULE_ELEMENT_DRAFT_TYPE: "sv:moduleElementDraft";

  /**
   * The primary node type name for the module element repository type.
   * @since Sitevision 4.2
   */
  MODULE_ELEMENT_REPOSITORY_TYPE: "sv:moduleElementRepository";

  /**
   * The primary node type name for the module element type.
   * @since Sitevision 4.2
   */
  MODULE_ELEMENT_TYPE: "sv:moduleElement";

  /**
   * The primary node type name for the module element file repository type.
   * @since Sitevision 4.2
   */
  MODULE_ELEMENT_FILE_REPOSITORY_TYPE: "sv:moduleElementFileRepository";

  /**
   * The primary node type name for the module element image repository type.
   * @since Sitevision 4.2
   */
  MODULE_ELEMENT_IMAGE_REPOSITORY_TYPE: "sv:moduleElementImageRepository";

  /**
   * The primary node type name for the custom module type.
   * @since Sitevision 4.2
   */
  CUSTOM_MODULE_TYPE: "sv:customModule";

  /**
   * The primary node type name for the addon repository type.
   * @since Sitevision 4.2
   */
  ADDON_REPOSITORY_TYPE: "sv:addonRepository";

  /**
   * The primary node type name for the tag type.
   * @since Sitevision 4.5.2
   */
  TAG_TYPE: "sv:tag";

  /**
   * The primary node type name for the tag repository type.
   * @since Sitevision 4.5.2
   */
  TAG_REPOSITORY_TYPE: "sv:tagRepository";

  /**
   * The primary node type name for the tag group type.
   * @since Sitevision 5
   */
  TAG_GROUP_TYPE: "sv:tagGroup";

  /**
   * The primary node type name for the tag group repository type.
   * @since Sitevision 5
   */
  TAG_GROUP_REPOSITORY_TYPE: "sv:tagGroupRepository";

  /**
   * The primary node type name for the headless custom module type.
   * @since Sitevision 4.5.2
   */
  HEADLESS_CUSTOM_MODULE_TYPE: "sv:headlessCustomModule";

  /**
   * The primary node type name for the webapp type.
   * @since Sitevision 4.5.2
   */
  WEB_APP_TYPE: "sv:webApp";

  /**
   * The primary node type name for the webapp repository type.
   * @since Sitevision 4.5.2
   */
  WEB_APP_REPOSITORY_TYPE: "sv:webAppRepository";

  /**
   * The primary node type name for the restapp type.
   * @since Sitevision 4.5.2
   */
  REST_APP_TYPE: "sv:restApp";

  /**
   * The primary node type name for the restapp repository type.
   * @since Sitevision 4.5.2
   */
  REST_APP_REPOSITORY_TYPE: "sv:restAppRepository";

  /**
   * The primary node type name for the comment type.
   * @since Sitevision 4.5.2
   */
  COMMENT_TYPE: "sv:comment";

  /**
   * The primary node type name for the timeline entry repository type.
   * @since Sitevision 4.5.2
   */
  TIMELINE_ENTRY_REPOSITORY_TYPE: "sv:timelineEntryRepository";

  /**
   * The primary node type name for the timeline entry type.
   * @since Sitevision 4.5.2
   */
  TIMELINE_ENTRY_TYPE: "sv:timelineEntry";

  /**
   * The primary node type name for the bookmarked timeline entry type.
   * @since Sitevision 4.5.2
   */
  BOOKMARKED_TIMELINE_ENTRY_TYPE: "sv:bookmarkedTimelineEntry";

  /**
   * The primary node type name for the timeline file entry type.
   * @since Sitevision 4.5.2
   */
  TIMELINE_FILE_ENTRY_TYPE: "sv:timelineFileEntry";

  /**
   * The primary node type name for the timeline file wall entry type.
   * @since Sitevision 4.5.2
   */
  TIMELINE_FILE_WALL_ENTRY_TYPE: "sv:timelineFileWallEntry";

  /**
   * The primary node type name for the timeline share entry type.
   * @since Sitevision 4.5.2
   */
  TIMELINE_SHARE_ENTRY_TYPE: "sv:timelineShareEntry";

  /**
   * The primary node type name for the timeline share page entry type.
   * @since Sitevision 4.5.2
   */
  TIMELINE_SHARE_PAGE_ENTRY_TYPE: "sv:timelineSharePageEntry";

  /**
   * The primary node type name for the timeline wall entry type.
   * @since Sitevision 4.5.2
   */
  TIMELINE_WALL_ENTRY_TYPE: "sv:timelineWallEntry";

  /**
   * The primary node type name for the data store repository type.
   * @since Sitevision 5
   */
  DATA_STORE_REPOSITORY_TYPE: "sv:dataStoreRepository";

  /**
   * The primary node type name for the key/value data store type.
   * @since Sitevision 5
   */
  KEY_VALUE_DATA_STORE_TYPE: "sv:keyValueDataStore";

  /**
   * The primary node type name for the collection data store type.
   * @since Sitevision 5
   */
  COLLECTION_DATA_STORE_TYPE: "sv:collectionDataStore";

  /**
   * The primary node type name for the role type.
   * @since Sitevision 5
   */
  ROLE_TYPE: "sv:role";

  /**
   * The primary node type name for the role repository type.
   * @since Sitevision 5
   */
  ROLE_REPOSITORY_TYPE: "sv:roleRepository";

  /**
   * The primary node type name for the virtual group repository type.
   * @since Sitevision 5
   */
  VIRTUAL_GROUP_REPOSITORY_TYPE: "sv:virtualGroupRepository";

  /**
   * The primary node type name for the user field type.
   * @since Sitevision 5.1
   */
  USER_FIELD_TYPE: "sv:userField";

  /**
   * The primary node type name for the user field repository type.
   * @since Sitevision 5.1
   */
  USER_FIELD_REPOSITORY_TYPE: "sv:userFieldRepository";

  /**
   * The primary node type name for the Marketplace custom module type.
   * @since Sitevision 6
   */
  MARKETPLACE_CUSTOM_MODULE_TYPE: "sv:marketplaceCustomModule";

  /**
   * The primary node type name for the Marketplace headless custom module type.
   * @since Sitevision 6
   */
  MARKETPLACE_HEADLESS_CUSTOM_MODULE_TYPE: "sv:marketplaceHeadlessCustomModule";

  /**
   * The primary node type name for the responsive breakpoint repository type.
   * @since Sitevision 6.2
   */
  RESPONSIVE_BREAKPOINT_REPOSITORY_TYPE: "sv:responsiveBreakpointRepository";

  /**
   * The primary node type name for the topic repository type.
   * @since Sitevision 7
   */
  TOPIC_REPOSITORY_TYPE: "sv:topicRepository";

  /**
   * The primary node type name for the topic type.
   * @since Sitevision 7
   */
  TOPIC_TYPE: "sv:topic";

  /**
   * The primary node type name for the topic timeline entry type.
   * @since Sitevision 7
   */
  TOPIC_TIMELINE_ENTRY_TYPE: "sv:topicTimelineEntry";

  /**
   * The primary node type name for the external topic integration repository type.
   * @since Sitevision 7
   */
  EXTERNAL_TOPIC_INTEGRATION_REPOSITORY_TYPE: "sv:externalTopicIntegrationRepository";

  /**
   * The primary node type name for the external topic integration type.
   * @since Sitevision 7
   */
  EXTERNAL_TOPIC_INTEGRATION_TYPE: "sv:externalTopicIntegration";

  /**
   * The primary node type name for the external topic type.
   * @since Sitevision 7
   */
  EXTERNAL_TOPIC_TYPE: "sv:externalTopic";

  /**
   * The primary node type name for the external timeline entry repository type.
   * @since Sitevision 7
   */
  EXTERNAL_TIMELINE_ENTRY_REPOSITORY_TYPE: "sv:externalTimelineEntryRepository";

  /**
   * The primary node type name for the external topic timeline entry type.
   * @since Sitevision 7
   */
  EXTERNAL_TOPIC_TIMELINE_ENTRY_TYPE: "sv:externalTopicTimelineEntry";

  /**
   * The primary node type name for the external comment type.
   * @since Sitevision 7
   */
  EXTERNAL_COMMENT_ENTRY_TYPE: "sv:externalComment";

  /**
   * The primary node type name for the OAuth2 configuration repository type.
   * @since Sitevision 7
   */
  OAUTH2_CONFIGURATION_REPOSITORY_TYPE: "sv:oAuth2ConfigurationRepository";

  /**
   * The primary node type name for the OAuth2 configuration type.
   * @since Sitevision 7
   */
  OAUTH2_CONFIGURATION_TYPE: "sv:oAuth2Configuration";

  /**
   * The primary node type name for the work status type.
   * @since Sitevision 2023.09.2
   */
  WORK_STATUS_TYPE: "sv:workStatus";

  /**
   * The primary node type name for the work status template type.
   * @since Sitevision 2023.09.2
   */
  WORK_STATUS_TEMPLATE_TYPE: "sv:workStatusTemplate";

  /**
   * The primary node type name for the work status template repository type.
   * @since Sitevision 2023.09.2
   */
  WORK_STATUS_TEMPLATE_REPOSITORY_TYPE: "sv:workStatusTemplateRepository";

  /**
   * Checks if a node is a layout.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a layout or not.
   */
  isLayout(aNode: Node): boolean;

  /**
   * Checks if a node is a link.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a link or not.
   */
  isLink(aNode: Node): boolean;

  /**
   * Checks if a node is a page.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a page or not.
   */
  isPage(aNode: Node): boolean;

  /**
   * Checks if a node is a portlet.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a portlet or not.
   */
  isPortlet(aNode: Node): boolean;

  /**
   * Checks if a node is an archive.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is an archive or not.
   */
  isArchive(aNode: Node): boolean;

  /**
   * Checks if a node is an article.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is an article or not.
   */
  isArticle(aNode: Node): boolean;

  /**
   * Checks if a node is a folder.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a folder or not.
   */
  isFolder(aNode: Node): boolean;

  /**
   * Checks if a node is a file.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a file or not.
   */
  isFile(aNode: Node): boolean;

  /**
   * Checks if a node is an image.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is an image or not.
   */
  isImage(aNode: Node): boolean;

  /**
   * Checks if a node is a temporary file.
   * @param aNode the node to be checked
   * @return whether aNode is a temporary file or not.
   * @see #TEMPORARY_FILE_TYPE
   * @since Sitevision 4.5.5.2
   */
  isTemporaryFile(aNode: Node): boolean;

  /**
   * Checks if a node is a sv:user.
   * @param aNode the node to be checked
   * @return whether aNode is a {@link #USER_TYPE sv:user} or not.
   * @see #isAnyUserType(Node)
   */
  isUser(aNode: Node): boolean;

  /**
   * Checks if a node is a sv:simpleUser.
   * @param aNode the node to be checked
   * @return whether aNode is a {@link #SIMPLE_USER_TYPE sv:simpleUser} or not.
   * @see #isAnyUserType(Node)
   * @since Sitevision 10.2
   */
  isSimpleUser(aNode: Node): boolean;

  /**
   * Checks if a node is a sv:systemUser.
   *
   *  <p>
   *     Note that there are several build-in "system users" in Sitevision:
   *  </p>
   *  <ul>
   *     <li>The <em>System</em> user</li>
   *     <li>The <em>Anonymous</em> user (i.e. non-authenticated user)</li>
   *     <li>The <em>Indexer</em> user (i.e. the user that index data in Sitevision)</li>
   *     <li>The <em>Validator</em> user (i.e. the user that validates page-nodes in Sitevision)</li>
   *     <li>The <em>Extractor</em> user (i.e. default "Web archive" user)</li>
   *     <li>The <em>Anonymized</em> user (i.e. an anonymized user)</li>
   *  </ul>
   * @param aNode the node to be checked
   * @return whether aNode is a {@link #SYSTEM_USER_TYPE sv:systemUser} or not.
   * @see #isAnyUserType(Node)
   * @since Sitevision 10.2
   */
  isSystemUser(aNode: Node): boolean;

  /**
   * Checks if a node is a user identity.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a user identity or not.
   * @since Sitevision 3.5
   */
  isUserIdentity(aNode: Node): boolean;

  /**
   * Checks if a node is a site.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a site or not.
   */
  isSite(aNode: Node): boolean;

  /**
   * Checks if a node is a site page.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a site page or not.
   */
  isSitePage(aNode: Node): boolean;

  /**
   * Checks if a node is a template.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a template or not.
   */
  isTemplate(aNode: Node): boolean;

  /**
   * Checks if a node is a trashcan.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a trashcan or not.
   */
  isTrashcan(aNode: Node): boolean;

  /**
   * Checks if a node is a color.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a color or not.
   */
  isColor(aNode: Node): boolean;

  /**
   * Checks if a node is a decoration.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a decoration or not.
   */
  isDecoration(aNode: Node): boolean;

  /**
   * Checks if a node is a LDAP directory.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a LDAP directory or not.
   */
  isDirectory(aNode: Node): boolean;

  /**
   * Checks if a node is a font.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a font or not.
   */
  isFont(aNode: Node): boolean;

  /**
   * Checks if a node is a structure folder.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a structure folder or not.
   */
  isStructureFolder(aNode: Node): boolean;

  /**
   * Checks if a node is a structure link.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a structure link or not.
   */
  isStructureLink(aNode: Node): boolean;

  /**
   * Checks if a node is a structure page.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a structure page or not.
   */
  isStructurePage(aNode: Node): boolean;

  /**
   * Checks if a node is a collaboration group.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a collaboration group or not.
   * @since Sitevision 3.5
   */
  isCollaborationGroup(aNode: Node): boolean;

  /**
   * Checks if a node is a collaboration group folder.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a collaboration group folder or not.
   * @since Sitevision 3.5
   */
  isCollaborationGroupFolder(aNode: Node): boolean;

  /**
   * Checks if a node is a collaboration group page.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a collaboration group page or not.
   * @since Sitevision 3.5
   */
  isCollaborationGroupPage(aNode: Node): boolean;

  /**
   * Checks if a node is a collaboration group template.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a collaboration group template or not.
   * @since Sitevision 3.5
   */
  isCollaborationGroupTemplate(aNode: Node): boolean;

  /**
   * Checks if a node is an application index.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is an application index or not.
   * @since Sitevision 3.6
   */
  isApplicationIndex(aNode: Node): boolean;

  /**
   * Checks if a node is a node index.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a node index or not.
   * @since Sitevision 3.6
   */
  isNodeIndex(aNode: Node): boolean;

  /**
   * Checks if a node is a RSS feed.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a RSS feed or not.
   * @since Sitevision 3.6.2
   */
  isRssFeed(aNode: Node): boolean;

  /**
   * Checks if a node is a RSS feed item.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a RSS feed item or not.
   * @since Sitevision 3.6.2
   */
  isRssFeedItem(aNode: Node): boolean;

  /**
   * Checks if a node is a RSS feed repository.
   * @param aNode the node to be checked
   * @return whether <code>aNode</code> is a RSS feed repository or not.
   * @since Sitevision 3.6.2
   */
  isRssFeedRepository(aNode: Node): boolean;

  /**
   * Convenience method that checks if a node is of "Renderable node" type.
   *
   *  <p>
   *     A <em>"Renderable node"</em> is a Node that can have a {@link #isAnyContentType(Node) "Content node"} as render part:
   *  </p>
   *  <ul>
   *     <li>{@link #PAGE_TYPE sv:page}</li>
   *     <li>{@link #ARTICLE_TYPE sv:article}</li>
   *     <li>{@link #SITE_PAGE_TYPE sv:sitePage}</li>
   *     <li>{@link #STRUCTURE_PAGE_TYPE sv:structurePage}</li>
   *     <li>{@link #COLLABORATION_GROUP_PAGE_TYPE sv:collaborationGroupPage}</li>
   *     <li>{@link #TEMPLATE_TYPE sv:template}</li>
   *     <li>{@link #COLLABORATION_GROUP_TEMPLATE_TYPE sv:collaborationGroupTemplate}</li>
   *     <li>{@link #DECORATION_TEMPLATE_TYPE sv:decorationTemplate}</li>
   *     <li>{@link #MODULE_ELEMENT_TYPE sv:moduleElement}</li>
   *     <li>{@link #MODULE_ELEMENT_DRAFT_TYPE sv:moduleElementDraft}</li>
   *  </ul>
   * @param aNode the node to be checked
   * @return whether aNode is a "renderable node" or not.
   * @see senselogic.sitevision.api.node.ContentNodeUtil
   * @since Sitevision 10.2
   */
  isAnyRenderableType(aNode: Node): boolean;

  /**
   * Convenience method that checks if a node is of "Content node" type.
   *
   *  <p>
   *     A <em>"Content node"</em> is a Node that can be rendered as content part of a {@link #isAnyRenderableType(Node) "Renderable node"}:
   *  </p>
   *  <ul>
   *     <li>{@link #PORTLET_TYPE sv:portlet}</li>
   *     <li>{@link #LAYOUT_TYPE sv:layout}</li>
   *     <li>{@link #LINKED_LAYOUT_TYPE sv:linkedLayout}</li>
   *     <li>{@link #REFERENCE_LAYOUT_TYPE sv:referenceLayout}</li>
   *     <li>{@link #VIEW_TYPE sv:view}</li>
   *     <li>{@link #PROFILE_VIEW_TYPE sv:profileView}</li>
   *  </ul>
   * @param aNode the node to be checked
   * @return whether aNode is a "content node" or not.
   * @see senselogic.sitevision.api.node.ContentNodeUtil
   * @since Sitevision 10.2
   */
  isAnyContentType(aNode: Node): boolean;

  /**
   * Convenience method that checks if a node is of "User node" type.
   *
   *  <p>
   *     "User" node types are:
   *  </p>
   *  <ul>
   *     <li>{@link #USER_TYPE sv:user}</li>
   *     <li>{@link #SIMPLE_USER_TYPE sv:simpleUser}</li>
   *     <li>{@link #SYSTEM_USER_TYPE sv:systemUser}</li>
   *  </ul>
   * @param aNode the node to be checked
   * @return whether aNode is a "user node" or not.
   * @since Sitevision 10.2
   */
  isAnyUserType(aNode: Node): boolean;

  /**
   * Convenience method that checks if a node is of "Metadata definition node" type.
   *
   *  <p>
   *     "Metadata definition node" types are:
   *  </p>
   *  <ul>
   *     <li>{@link #METADATA_TEXT_DEFINITION_TYPE sv:metadataTextDefinition}</li>
   *     <li>{@link #METADATA_SINGLE_DEFINITION_TYPE sv:metadataSingleDefinition}</li>
   *     <li>{@link #METADATA_MULTIPLE_DEFINITION_TYPE sv:metadataMultipleDefinition}</li>
   *     <li>{@link #METADATA_INTEGER_DEFINITION_TYPE sv:metadataIntegerDefinition}</li>
   *     <li>{@link #METADATA_DATE_DEFINITION_TYPE sv:metadataDateDefinition}</li>
   *     <li>{@link #METADATA_USER_DEFINITION_TYPE sv:metadataUserDefinition}</li>
   *     <li>{@link #METADATA_DIRECTORY_DEFINITION_TYPE sv:metadataDirectoryDefinition}</li>
   *     <li>{@link #METADATA_LINK_DEFINITION_TYPE sv:metadataLinkDefinition}</li>
   *     <li>{@link #METADATA_TEXT_PORTLET_DEFINITION_TYPE sv:metadataTextPortletDefinition}</li>
   *     <li>{@link #METADATA_IMAGE_PORTLET_DEFINITION_TYPE sv:metadataImagePortletDefinition}</li>
   *     <li>{@link #METADATA_MEDIA_PORTLET_DEFINITION_TYPE sv:metadataMediaPortletDefinition}</li>
   *     <li>{@link #METADATA_RELATED_INFORMATION_DEFINITION_TYPE sv:metadataRelatedInformationDefinition}</li>
   *     <li>{@link #METADATA_SINGLE_TAG_DEFINITION_TYPE sv:metadataSingleTagDefinition}</li>
   *     <li>{@link #METADATA_MULTIPLE_TAG_DEFINITION_TYPE sv:metadataMultipleTagDefinition}</li>
   *     <li>{@link #METADATA_KEYWORD_DEFINITION_TYPE sv:metadataKeywordDefinition}</li>
   *     <li>{@link #METADATA_SYSTEM_DEFINITION_TYPE sv:metadataSystemDefinition}</li>
   *     <li>{@link #METADATA_SYSTEM_IMAGE_DEFINITION_TYPE sv:metadataSystemImageDefinition}</li>
   *     <li>{@link #METADATA_SYSTEM_INTEGER_DEFINITION_TYPE sv:metadataSystemIntegerDefinition}</li>
   *     <li>{@link #METADATA_SYSTEM_LINK_DEFINITION_TYPE sv:metadataSystemLinkDefinition}</li>
   *     <li>{@link #METADATA_SYSTEM_TEXT_DEFINITION_TYPE sv:metadataSystemTextDefinition}</li>
   *  </ul>
   * @param aNode the node to be checked
   * @return whether aNode is a "metadata definition node" or not.
   * @since Sitevision 2024.01.1
   */
  isAnyMetadataDefinitionType(aNode: Node): boolean;

  /**
   * Checks a node against a given node type name to see if they match.
   * @param aNode the node to be checked
   * @param aPrimaryNodeType the primary node type name <code>aNode</code> should be checked against
   * @return whether primary node type of <code>aNode</code> matches the <code>aPrimaryNodeType</code> type
   * @see #isTypeOf(javax.jcr.Node, String[])
   */
  isType(aNode: Node, aPrimaryNodeType: String | string): boolean;

  /**
   * Checks a node against multiple node type names to see if any of them match.
   * @param aNode the node to be checked
   * @param aPrimaryNodeTypes the primary node type names <code>aNode</code> should be checked against
   * @return whether primary node type of <code>aNode</code> matches any of the types in <code>aPrimaryNodeTypes</code>
   */
  isTypeOf(aNode: Node, ...aPrimaryNodeTypes: String[] | string[]): boolean;
}

declare namespace NodeTypeUtil {}

declare var nodeTypeUtil: NodeTypeUtil;

export default nodeTypeUtil;
