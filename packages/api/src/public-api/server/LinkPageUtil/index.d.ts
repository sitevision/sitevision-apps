import type { Node } from "../../types/javax/jcr/Node";

import type { LinkTarget } from "../../types/senselogic/sitevision/api/webresource/LinkTarget";

import type { LinkPageUtilConstants } from "../../types/senselogic/sitevision/api/render/velocity/VelocityAccess.LinkPageUtilConstants";

/**
 * Link page utility interface that handles nodes in the page tree with primary node type <code>sv:link</code>.
 *
 * <p>
 *    <em>Note!</em> This interface is used to <em>create</em> and <em>update</em> link pages. You would typically use
 *    {@link senselogic.sitevision.api.webresource.structure.StructureUtil} to <em>move</em> a link page
 *    and {@link senselogic.sitevision.api.webresource.structure.TrashcanUtil} to <em>delete</em> a link page.
 * </p>
 *
 * <p>
 *    <strong>Important note!</strong> Methods in this interface operates in the
 *    {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}.
 *    Hence, if you create a link page, updates the name of a link page or such, the page must be published
 *    (see {@link senselogic.sitevision.api.versioning.PublishingUtil}) to have any effect in the
 *    {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link WebResourceFactory#getLinkPageUtil()}.
 *    See {@link WebResourceFactory} for how to obtain an instance of the <code>WebResourceFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.2
 * @see senselogic.sitevision.api.webresource.builder.LinkTargetBuilder
 */
export interface LinkPageUtil extends LinkPageUtilConstants {
  /**
 * Name of the property specifying if a link page is visible in menus. It corresponds to the sv:link property <code>visibleInMenus</code>.
 * <p>
 *    The property value must be of type <code>Boolean</code>.
 * </p>
  
    */
  PROPERTY_VISIBLE_IN_MENUS: "visibleInMenus";

  /**
 * Name of the property specifying the creation date of a link page. It corresponds to the sv:link property <code>creationDate</code>.
 * <p>
 *    The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss,
 *    where HH:mm:ss is optional (defaults to 00:00:00).
 * </p>
  
    */
  PROPERTY_CREATION_DATE: "creationDate";

  /**
 * Name of the property specifying the creator of a link page. It corresponds to the sv:link property <code>createdBy</code>.
 * <p>
 *    The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.
 * </p>
  
    */
  PROPERTY_CREATED_BY: "createdBy";

  /**
 * Name of the property specifying the last modified date of a link page. It corresponds to the sv:link property <code>lastModifiedDate</code>.
 * <p>
 *    The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss,
 *    where HH:mm:ss is optional (defaults to 00:00:00).
 * </p>
  
    */
  PROPERTY_LAST_MODIFIED_DATE: "lastModifiedDate";

  /**
 * Name of the property specifying the last modifier of a link page. It corresponds to the sv:link property <code>lastModifiedBy</code>.
 * <p>
 *    The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.
 * </p>
  
    */
  PROPERTY_LAST_MODIFIED_BY: "lastModifiedBy";

  /**
 * Name of the property specifying the last published date of a link page. It corresponds to the sv:link property <code>lastPublishDate</code>.
 * <p>
 *    The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss,
 *    where HH:mm:ss is optional (defaults to 00:00:00).
 * </p>
  
    */
  PROPERTY_LAST_PUBLISH_DATE: "lastPublishDate";

  /**
 * Name of the property specifying the last publisher of a link page. It corresponds to the sv:link property <code>lastPublishedBy</code>.
 * <p>
 *    The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.
 * </p>
  
    */
  PROPERTY_LAST_PUBLISHED_BY: "lastPublishedBy";

  /**
 * Name of the property specifying the published date of a link page. It corresponds to the sv:link property <code>publishDate</code>.
 * <p>
 *    The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss,
 *    where HH:mm:ss is optional (defaults to 00:00:00).
 * </p>
  
    */
  PROPERTY_PUBLISH_DATE: "publishDate";

  /**
 * Name of the property specifying the publisher of a link page. It corresponds to the sv:link property <code>publishedBy</code>.
 * <p>
 *    The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.
 * </p>
  
    */
  PROPERTY_PUBLISHED_BY: "publishedBy";

  /**
   * <p>
   *    Creates a link page as sub node of a specified parent.
   * </p>
   * <p>
   *    The parent may be:
   * </p>
   * <ul>
   *    <li>{@code sv:article}</li>
   *    <li>{@code sv:collaborationGroupPage}</li>
   *    <li>{@code sv:folder}</li>
   *    <li>{@code sv:page}</li>
   *    <li>{@code sv:sitePage}</li>
   * </ul>
   * <p>
   *    If other parent is specified a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    Any non-whitespace name can be given a link page, it should however not contain the character '/'.
   * </p>
   *
   * <p>
   *    If no parent, no name or no link target is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to create links and to do write operations on the parent node or
   *    a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   *
   * <p>
   *    Note that a new link page inherits metadata and permissions from its parent.
   * </p>
   * @param aParent the parent node of the link page. May not be <code>null</code>
   * @param aName the name of the link page. May not be <code>null</code> or whitespace only
   * @param aLinkTarget the target of the link page. May not be <code>null</code>
   * @return a sv:link node corresponding to the newly created link page
   * @throws ConstraintViolationException if an invalid parent is specified or if the current user&#xA; is not authorized to create a link page
   * @throws RepositoryException if something else goes wrong
   */
  createLinkPage(aParent: Node, aName: string, aLinkTarget: LinkTarget): Node;

  /**
   * <p>
   *    Creates a link page with properties as sub node of a specified parent.
   * </p>
   * <p>
   *    The parent may be:
   * </p>
   * <ul>
   *    <li>{@code sv:article}</li>
   *    <li>{@code sv:collaborationGroupPage}</li>
   *    <li>{@code sv:folder}</li>
   *    <li>{@code sv:page}</li>
   *    <li>{@code sv:sitePage}</li>
   * </ul>
   * <p>
   *    If other parent is specified a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    Any non-whitespace name can be given a link page, it should however not contain the character '/'.
   * </p>
   *
   * <p>
   *    If no parent, no name or no link target is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to create links and to do write operations on the parent node or
   *    a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   *
   * <p>
   *    It is possible to provide these properties for the link page:
   * </p>
   * <ul>
   *    <li>{@link #PROPERTY_VISIBLE_IN_MENUS}</li>
   *    <li>{@link #PROPERTY_CREATION_DATE}</li>
   *    <li>{@link #PROPERTY_CREATED_BY}</li>
   *    <li>{@link #PROPERTY_LAST_MODIFIED_DATE}</li>
   *    <li>{@link #PROPERTY_LAST_MODIFIED_BY}</li>
   *    <li>{@link #PROPERTY_LAST_PUBLISH_DATE}</li>
   *    <li>{@link #PROPERTY_LAST_PUBLISHED_BY}</li>
   *    <li>{@link #PROPERTY_PUBLISH_DATE}</li>
   *    <li>{@link #PROPERTY_PUBLISHED_BY}</li>
   * </ul>
   * <p>
   *    If an invalid value is provided for a property, an <code>IllegalArgumentException</code> is thrown
   * </p>
   *
   * <p>
   *    Default values:
   * </p>
   * <ul>
   *    <li>{@link #PROPERTY_VISIBLE_IN_MENUS} - true</li>
   *    <li>{@link #PROPERTY_CREATION_DATE} - current time stamp</li>
   *    <li>{@link #PROPERTY_CREATED_BY} - current user</li>
   *    <li>{@link #PROPERTY_LAST_MODIFIED_DATE} - current time stamp</li>
   *    <li>{@link #PROPERTY_LAST_MODIFIED_BY} - current user</li>
   *    <li>{@link #PROPERTY_LAST_PUBLISH_DATE} - null (will not have a value)</li>
   *    <li>{@link #PROPERTY_LAST_PUBLISHED_BY} - null (will not have a value)</li>
   *    <li>{@link #PROPERTY_PUBLISH_DATE} - null (will not have a value)</li>
   *    <li>{@link #PROPERTY_PUBLISHED_BY} - null (will not have a value)</li>
   * </ul>
   *
   * <p>
   *    Note that a new link page inherits metadata and permissions from its parent.
   * </p>
   * @param aParent the parent node of the link page. May not be <code>null</code>
   * @param aName the name of the link page. May not be <code>null</code> or whitespace only
   * @param aLinkTarget the target of the link page. May not be <code>null</code>
   * @param aProperties the link page properties. May be <code>null</code> or empty
   * @return a sv:link node corresponding to the newly created link page
   * @throws ConstraintViolationException if an invalid parent is specified or if the current user&#xA; is not authorized to create the link page
   * @throws RepositoryException if something else goes wrong
   */
  createLinkPage(
    aParent: Node,
    aName: string,
    aLinkTarget: LinkTarget,
    aProperties: unknown
  ): Node;

  /**
   * <p>
   *    Updates the name of a link page.
   * </p>
   *
   * <p>
   *    Any non-whitespace name can be given a link page, it should however not contain the character '/'.
   * </p>
   *
   * <p>
   *    If no link page or no name is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to do write operations on the link page or
   *    a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aLinkPage the link page. May not be <code>null</code>
   * @param aName the name of the link page. May not be <code>null</code> or whitespace only
   * @throws ConstraintViolationException if an invalid link page is specified or if the current user&#xA; is not authorized to update the link page
   * @throws RepositoryException if something else goes wrong
   */
  renameLinkPage(aLinkPage: Node, aName: string): void;

  /**
   * <p>
   *    Updates the target of a link page.
   * </p>
   *
   * <p>
   *    If no link page or no link target is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to do write operations on the link page or
   *    a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aLinkPage the link page. May not be <code>null</code>
   * @param aLinkTarget the target of the link page. May not be <code>null</code>
   * @throws ConstraintViolationException if an invalid link page is specified or if the current user&#xA; is not authorized to update the link page
   * @throws RepositoryException if something else goes wrong
   */
  updateLinkPageTarget(aLinkPage: Node, aLinkTarget: LinkTarget): void;

  /**
   * <p>
   *    Updates the properties of a link page.
   * </p>
   *
   * <p>
   *    If no link page is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to do write operations on the link page or
   *    a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   *
   * <p>
   *    Properties:
   * </p>
   * <ul>
   *    <li>{@link #PROPERTY_VISIBLE_IN_MENUS}</li>
   *    <li>{@link #PROPERTY_CREATION_DATE}</li>
   *    <li>{@link #PROPERTY_CREATED_BY}</li>
   *    <li>{@link #PROPERTY_LAST_MODIFIED_DATE}</li>
   *    <li>{@link #PROPERTY_LAST_MODIFIED_BY}</li>
   *    <li>{@link #PROPERTY_LAST_PUBLISH_DATE}</li>
   *    <li>{@link #PROPERTY_LAST_PUBLISHED_BY}</li>
   *    <li>{@link #PROPERTY_PUBLISH_DATE}</li>
   *    <li>{@link #PROPERTY_PUBLISHED_BY}</li>
   * </ul>
   * <p>
   *    If an invalid value is provided for a property, an <code>IllegalArgumentException</code> is thrown
   * </p>
   *
   * <p>
   *    Default values:
   * </p>
   * <ul>
   *    <li>{@link #PROPERTY_VISIBLE_IN_MENUS} - true</li>
   *    <li>{@link #PROPERTY_CREATION_DATE} - current time stamp</li>
   *    <li>{@link #PROPERTY_CREATED_BY} - current user</li>
   *    <li>{@link #PROPERTY_LAST_MODIFIED_DATE} - current time stamp</li>
   *    <li>{@link #PROPERTY_LAST_MODIFIED_BY} - current user</li>
   *    <li>{@link #PROPERTY_LAST_PUBLISH_DATE} - null (will not have a value)</li>
   *    <li>{@link #PROPERTY_LAST_PUBLISHED_BY} - null (will not have a value)</li>
   *    <li>{@link #PROPERTY_PUBLISH_DATE} - null (will not have a value)</li>
   *    <li>{@link #PROPERTY_PUBLISHED_BY} - null (will not have a value)</li>
   * </ul>
   * @param aLinkPage the link page. May not be <code>null</code>
   * @param aProperties the link page properties. Should not be <code>null</code> or empty
   * @throws ConstraintViolationException if an invalid link page is specified or if the current user&#xA; is not authorized to update the link page
   * @throws RepositoryException if something else goes wrong
   */
  updateLinkPage(aLinkPage: Node, aProperties: unknown): void;
}

declare namespace LinkPageUtil {}

declare var linkPageUtil: LinkPageUtil;

export default linkPageUtil;
