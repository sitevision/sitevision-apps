import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";
import type { Map } from "../../types/java/util/Map";

import type { PageUtilConstants } from "../../types/senselogic/sitevision/api/render/velocity/VelocityAccess.PageUtilConstants";

/**
 * Page utility interface that handles nodes with primary node type <code>sv:page</code>.
 *
 *  <p>
 *     <em>Note!</em> This interface is used to <em>create</em> and <em>update</em> pages. You would typically use
 *     {@link senselogic.sitevision.api.webresource.structure.StructureUtil} to <em>move</em> a page
 *     and {@link senselogic.sitevision.api.webresource.structure.TrashcanUtil} to <em>delete</em> a page.
 *     {@link senselogic.sitevision.api.webresource.webcontent.WebContentUtil} can be used to update the <em>content</em>
 *     of a page.
 *  </p>
 *
 *  <p>
 *     <strong>Important note!</strong> Methods in this interface operates in the
 *     {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}.
 *     Hence, if you create a page, updates the name of a page or such, the page must be published
 *     (see {@link senselogic.sitevision.api.versioning.PublishingUtil}) to have any effect in the
 *     {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getPageUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.2
 */
export interface PageUtil extends PageUtilConstants {
  /**
 * Name of the property specifying if a page is visible in menus. It corresponds to the sv:page property <code>visibleInMenus</code>.
 *  <p>The property value must be of type <code>Boolean</code>.</p>
  
    */
  PROPERTY_VISIBLE_IN_MENUS: "visibleInMenus";

  /**
 * Name of the property specifying the title of a page. It corresponds to the sv:page property <code>title</code>.
 *  <p>The property value must be of type <code>String</code>.</p>
  
    */
  PROPERTY_TITLE: "title";

  /**
 * Name of the property specifying the short id for a page. It corresponds to the sv:page property <code>shortId</code>.
 *  <p>The property value must be of type <code>String</code>.</p>
  
    */
  PROPERTY_SHORTID: "shortId";

  /**
 * Name of the property specifying locale used by the page. It corresponds to the sv:page property <code>locale</code>.
 *  <p>
 *     The property value must be of type <code>Locale</code> or a <code>String</code> that can be resolved to a non-null Locale
 *     via {@link senselogic.sitevision.api.i18n.LocaleUtil#getLocaleByString(String)}.
 *  </p>
  
    */
  PROPERTY_LOCALE: "locale";

  /**
 * Name of the property specifying if the page is indexable. It corresponds to the sv:page property <code>robotsIndex</code>.
 *  <p>The property value must be of type <code>Boolean</code>.</p>
  
    */
  PROPERTY_ROBOTS_INDEX: "robotsIndex";

  /**
 * Name of the property specifying the creation date of the page. It corresponds to the sv:page property <code>creationDate</code>.
 *  <p>The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss where
 *  HH:mm:ss is optional (defaults to 00:00:00).</p>
  
    */
  PROPERTY_CREATION_DATE: "creationDate";

  /**
 * Name of the property specifying the creator of the page. It corresponds to the sv:page property <code>createdBy</code>.
 *  <p>The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.</p>
  
    */
  PROPERTY_CREATED_BY: "createdBy";

  /**
 * Name of the property specifying the last modified date of the page. It corresponds to the sv:page property <code>lastModifiedDate</code>.
 *  <p>The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss where
 *  HH:mm:ss is optional (defaults to 00:00:00).</p>
  
    */
  PROPERTY_LAST_MODIFIED_DATE: "lastModifiedDate";

  /**
 * Name of the property specifying the last modifier of the page. It corresponds to the sv:page property <code>lastModifiedBy</code>.
 *  <p>The property value must be of type {@link javax.jcr.Node} of type sv:user or sv:systemUser.</p>
  
    */
  PROPERTY_LAST_MODIFIED_BY: "lastModifiedBy";

  /**
   * Name of the property specifying the last published date of a page. It corresponds to the sv:page property <code>lastPublishDate</code>.
   *  <p>The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss, where
   *  HH:mm:ss is optional (defaults to 00:00:00).</p>
   * @since Sitevision 3.5.3
   */
  PROPERTY_LAST_PUBLISH_DATE: "lastPublishDate";

  /**
   * Name of the property specifying the last publisher of a page. It corresponds to the sv:page property <code>lastPublishedBy</code>.
   *  <p>The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.</p>
   * @since Sitevision 3.5.3
   */
  PROPERTY_LAST_PUBLISHED_BY: "lastPublishedBy";

  /**
   * Name of the property specifying the published date of a page. It corresponds to the sv:page property <code>publishDate</code>.
   *  <p>The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss, where
   *  HH:mm:ss is optional (defaults to 00:00:00).</p>
   * @since Sitevision 3.5.3
   */
  PROPERTY_PUBLISH_DATE: "publishDate";

  /**
   * Name of the property specifying the publisher of a page. It corresponds to the sv:page property <code>publishedBy</code>.
   *  <p>The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.</p>
   * @since Sitevision 3.5.3
   */
  PROPERTY_PUBLISHED_BY: "publishedBy";

  /**
   * <p>
   *     Creates a page as sub node to the specified parent.
   *  </p>
   *  <p>
   *     The parent may be either a {@code sv:sitePage}, {@code sv:page}, {@code sv:folder}, {@code sv:article} or a
   *     {@code sv:collaborationGroupPage}.
   *     If other parent is specified a <code>ConstraintViolationException</code> is thrown.
   *  </p>
   *
   *  <p>Any name can be given a page, it should however not contain the character '/'.</p>
   *
   *  <p>If no parent, no template or no name is specified a <code>NullPointerException</code> is thrown.</p>
   *
   *  <p>The current user must be authorized to create pages, layouts and to do write operations on the parent node or
   *  a <code>ConstraintViolationException</code> will be thrown.</p>
   *
   *  <p>Note that a new page inherits metadata and permissions from its parent.</p>
   *
   *  <p>Use {@link senselogic.sitevision.api.webresource.webcontent.WebContentUtil#updateContent(javax.jcr.Node, java.util.Map)}
   *  to add content to the new page.</p>
   * @param aParent the parent node of the page. May not be <code>null</code>
   * @param aTemplate the template used for the page. May not be <code>null</code>
   * @param aName the name of the sv:page. May not be <code>null</code>
   * @return a sv:page node corresponding to the newly created page. Will never return <code>null</code>
   * @throws ConstraintViolationException if an invalid parent is specified or if the current user&#xA; is not authorized to create a page
   * @throws RepositoryException if something else goes wrong
   * @see #createPage(javax.jcr.Node, javax.jcr.Node, String, java.util.Map, java.util.Map)
   */
  createPage(aParent: Node, aTemplate: Node, aName: String | string): Node;

  /**
   * <p>
   *     Creates a page with properties and web content.
   *  </p>
   *  <p>
   *     The parent may be either a {@code sv:sitePage}, {@code sv:page}, {@code sv:folder}, {@code sv:article}
   *     or a {@code sv:collaborationGroupPage}.
   *     If other parent is specified a <code>ConstraintViolationException</code> is thrown.
   *     It is possible to provide the web content for the page as well as page properties.
   *  </p>
   *  <p>Properties:</p>
   *  <ul>
   *     <li>{@link #PROPERTY_VISIBLE_IN_MENUS}</li>
   *     <li>{@link #PROPERTY_TITLE}</li>
   *     <li>
   *        {@link #PROPERTY_SHORTID} - If the short id is already used by an other Sitevision node an <code>IllegalArgumentException</code> is thrown
   *     </li>
   *     <li>{@link #PROPERTY_LOCALE}</li>
   *     <li>{@link #PROPERTY_ROBOTS_INDEX}</li>
   *     <li>{@link #PROPERTY_CREATION_DATE}</li>
   *     <li>{@link #PROPERTY_CREATED_BY}</li>
   *     <li>{@link #PROPERTY_LAST_MODIFIED_DATE}</li>
   *     <li>{@link #PROPERTY_LAST_MODIFIED_BY}</li>
   *     <li>{@link #PROPERTY_LAST_PUBLISH_DATE}</li>
   *     <li>{@link #PROPERTY_LAST_PUBLISHED_BY}</li>
   *     <li>{@link #PROPERTY_PUBLISH_DATE}</li>
   *     <li>{@link #PROPERTY_PUBLISHED_BY}</li>
   *  </ul>
   *  <p>If an invalid value is provided for a property, an <code>IllegalArgumentException</code> is thrown</p>
   *
   *  <p>Default values:</p>
   *  <ul>
   *     <li>{@link #PROPERTY_VISIBLE_IN_MENUS} - true</li>
   *     <li>{@link #PROPERTY_TITLE} - ""</li>
   *     <li>{@link #PROPERTY_SHORTID} - "" (a short id will be generated by Sitevision)</li>
   *     <li>{@link #PROPERTY_LOCALE} - parent locale</li>
   *     <li>{@link #PROPERTY_ROBOTS_INDEX} - true</li>
   *     <li>{@link #PROPERTY_CREATION_DATE} - current time stamp</li>
   *     <li>{@link #PROPERTY_CREATED_BY} - current user</li>
   *     <li>{@link #PROPERTY_LAST_MODIFIED_DATE} - current time stamp</li>
   *     <li>{@link #PROPERTY_LAST_MODIFIED_BY} - current user</li>
   *     <li>{@link #PROPERTY_LAST_PUBLISH_DATE} - null (will not have a value)</li>
   *     <li>{@link #PROPERTY_LAST_PUBLISHED_BY} - null (will not have a value)</li>
   *     <li>{@link #PROPERTY_PUBLISH_DATE} - null (will not have a value)</li>
   *     <li>{@link #PROPERTY_PUBLISHED_BY} - null (will not have a value)</li>
   *  </ul>
   *
   *  <p>The page content is specified using the
   *  content map containing keys corresponding to layout names (e.g. "mittenspalt") on the page and values containing the
   *  HTML used to generate a portlet structure in the layout. The provided content is converted to
   *  Sitevision text, table and image modules. It is also possible to specify that a horizontal or a vertical
   *  layout should be created. For more information about the HTML to portlet mapping can be found in the
   *  {@link senselogic.sitevision.api.webresource.webcontent.WebContentUtil} javadoc.
   *
   *  <p>Any name can be given a page, it should however not contain the character '/'.</p>
   *
   *  <p>If no parent, no template or no name is specified a <code>NullPointerException</code> is thrown.</p>
   *
   *  <p>The current user must be authorized to create pages, layouts and to do write operations on the parent node or
   *  a <code>ConstraintViolationException</code> will be thrown.</p>
   *
   *  <p>Note that a new page inherits metadata and permissions from its parent.</p>
   * @param aParent the parent node of the page. May not be <code>null</code>
   * @param aTemplate the sv:template node to be used for the page. May not be <code>null</code>
   * @param aName the name of the sv:page. May not be <code>null</code>
   * @param properties the page properties. May be <code>null</code>
   * @param content a map containing the HTML content. The keys must correspond to layout names on the node. May be <code>null</code>
   * @return a sv:page node corresponding to the newly created page. Will never return <code>null</code>
   * @throws ConstraintViolationException if an invalid parent is specified or if the current user&#xA; is not authorized to create the page
   * @throws RepositoryException if something else goes wrong
   * @see #createPage(javax.jcr.Node, javax.jcr.Node, String)
   */
  createPage(
    aParent: Node,
    aTemplate: Node,
    aName: String | string,
    properties: Map | {},
    content: Map | {}
  ): Node;

  /**
   * <p>Updates the properties of a page. If no page is specified a <code>NullPointerException</code>
   *  is thrown. If the node is not a sv:page an <code>IllegalArgumentException</code> is thrown.</p>
   *
   *  <p>Properties:</p>
   *  <ul>
   *     <li>{@link #PROPERTY_VISIBLE_IN_MENUS}</li>
   *     <li>{@link #PROPERTY_TITLE}</li>
   *     <li>
   *        {@link #PROPERTY_SHORTID} - If the short id is already used by an other Sitevision node an <code>IllegalArgumentException</code> is thrown
   *     </li>
   *     <li>{@link #PROPERTY_LOCALE}</li>
   *     <li>{@link #PROPERTY_ROBOTS_INDEX}</li>
   *     <li>{@link #PROPERTY_CREATION_DATE}</li>
   *     <li>{@link #PROPERTY_CREATED_BY}</li>
   *     <li>{@link #PROPERTY_LAST_MODIFIED_DATE}</li>
   *     <li>{@link #PROPERTY_LAST_MODIFIED_BY}</li>
   *     <li>{@link #PROPERTY_LAST_PUBLISH_DATE}</li>
   *     <li>{@link #PROPERTY_LAST_PUBLISHED_BY}</li>
   *     <li>{@link #PROPERTY_PUBLISH_DATE}</li>
   *     <li>{@link #PROPERTY_PUBLISHED_BY}</li>
   *  </ul>
   *  <p>If an invalid value is provided for a property, an <code>IllegalArgumentException</code> is thrown.</p>
   *
   *  <p>The current user must be authorized to do write operations on the page or
   *  a <code>ConstraintViolationException</code> will be thrown.</p>
   *
   *  <p>If no properties map is specified a <code>NullPointerException</code> is thrown.</p>
   * @param aPage the sv:page that will be altered. May not be <code>null</code>
   * @param properties the page properties. May not be <code>null</code>
   * @throws ConstraintViolationException if the current user is not authorized to alter the page
   * @throws RepositoryException if something else goes wrong
   */
  updatePage(aPage: Node, properties: Map | {}): void;

  /**
   * <p>Alters the name of a page. If no page is specified a <code>NullPointerException</code>
   *  is thrown. If the node is not a sv:page an <code>IllegalArgumentException</code> is thrown.</p>
   *
   *  <p>Any name can be given a page, it should however not contain the character '/'. If <code>null</code> is
   *  provided a <code>NullPointerException</code> is thrown.</p>
   *
   *  <p>The current user must be authorized to do write operations on the page or
   *  a <code>ConstraintViolationException</code> will be thrown.</p>
   * @param aPage the page that should be renamed. May not be <code>null</code>
   * @param aName the new name of the page. May not be <code>null</code>
   * @throws ConstraintViolationException if the current user is not authorized to alter the name of the&#xA; page
   * @throws RepositoryException if something else goes wrong
   */
  renamePage(aPage: Node, aName: String | string): void;
}

declare namespace PageUtil {}

declare var pageUtil: PageUtil;

export default pageUtil;
