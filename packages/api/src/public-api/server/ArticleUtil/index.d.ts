/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";
import type { Map } from "../../types/java/util/Map";

import type { ArticleUtilConstants } from "../../types/senselogic/sitevision/api/render/velocity/VelocityAccess.ArticleUtilConstants";

/**
 * Article utility interface that handles nodes with primary node type <code>sv:article</code>.
 *
 *  <p>
 *     <em>Note!</em> This interface is used to <em>create</em> and <em>update</em> articles. You would typically use
 *     {@link senselogic.sitevision.api.webresource.structure.StructureUtil} to <em>move</em> an article
 *     and {@link senselogic.sitevision.api.webresource.structure.TrashcanUtil} to <em>delete</em> an article.
 *     {@link senselogic.sitevision.api.webresource.webcontent.WebContentUtil} can be used to update the <em>content</em>
 *     of an article.
 *  </p>
 *
 *  <p>
 *     <strong>Important note!</strong> Methods in this interface operates in the
 *     {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}.
 *     Hence, if you create an article, updates the name of a article or such, the article must be published
 *     (see {@link senselogic.sitevision.api.versioning.PublishingUtil})
 *     to have any effect in the {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getArticleUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.2
 */
export interface ArticleUtil extends ArticleUtilConstants {
  /**
 * Name of the property specifying if an article is visible in menus. It corresponds to the sv:article property <code>visibleInMenus</code>.
 *  <p>The property value must be of type <code>Boolean</code>.</p>
  
    */
  PROPERTY_VISIBLE_IN_MENUS: "visibleInMenus";

  /**
 * Name of the property specifying the short id of an article. It corresponds to the sv:article property <code>shortId</code>.
 *  <p>The property value must be of type <code>String</code>.</p>
  
    */
  PROPERTY_SHORTID: "shortId";

  /**
 * Name of the property specifying the locale used by an article. It corresponds to the sv:article property <code>locale</code>.
 *  <p>
 *  The property value must be of type <code>Locale</code> or a <code>String</code> that can be resolved to a non-null Locale
 *  via {@link senselogic.sitevision.api.i18n.LocaleUtil#getLocaleByString(String)}.
 *  </p>
  
    */
  PROPERTY_LOCALE: "locale";

  /**
 * Name of the property specifying if an article is indexable. It corresponds to the sv:article property <code>robotsIndex</code>.
 *  <p>The property value must be of type <code>Boolean</code>.</p>
  
    */
  PROPERTY_ROBOTS_INDEX: "robotsIndex";

  /**
 * Name of the property specifying the creation date of an article. It corresponds to the sv:article property <code>creationDate</code>.
 *  <p>The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss where
 *  HH:mm:ss is optional (defaults to 00:00:00).</p>
  
    */
  PROPERTY_CREATION_DATE: "creationDate";

  /**
 * Name of the property specifying the creator of an article. It corresponds to the sv:article property <code>createdBy</code>.
 *  <p>The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.</p>
  
    */
  PROPERTY_CREATED_BY: "createdBy";

  /**
 * Name of the property specifying the last modified date of an article. It corresponds to the sv:article property <code>lastModifiedDate</code>.
 *  <p>The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss, where
 *  HH:mm:ss is optional (defaults to 00:00:00).</p>
  
    */
  PROPERTY_LAST_MODIFIED_DATE: "lastModifiedDate";

  /**
 * Name of the property specifying the last modifier of an article. It corresponds to the sv:article property <code>lastModifiedBy</code>.
 *  <p>The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.</p>
  
    */
  PROPERTY_LAST_MODIFIED_BY: "lastModifiedBy";

  /**
   * Name of the property specifying the last published date of an article. It corresponds to the sv:article property <code>lastPublishDate</code>.
   *  <p>The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss, where
   *  HH:mm:ss is optional (defaults to 00:00:00).</p>
   * @since Sitevision 3.5.3
   */
  PROPERTY_LAST_PUBLISH_DATE: "lastPublishDate";

  /**
   * Name of the property specifying the last publisher of an article. It corresponds to the sv:article property <code>lastPublishedBy</code>.
   *  <p>The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.</p>
   * @since Sitevision 3.5.3
   */
  PROPERTY_LAST_PUBLISHED_BY: "lastPublishedBy";

  /**
   * Name of the property specifying the published date of an article. It corresponds to the sv:article property <code>publishDate</code>.
   *  <p>The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss, where
   *  HH:mm:ss is optional (defaults to 00:00:00).</p>
   * @since Sitevision 3.5.3
   */
  PROPERTY_PUBLISH_DATE: "publishDate";

  /**
   * Name of the property specifying the publisher of an article. It corresponds to the sv:article property <code>publishedBy</code>.
   *  <p>The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.</p>
   * @since Sitevision 3.5.3
   */
  PROPERTY_PUBLISHED_BY: "publishedBy";

  /**
   * <p>
   *     Name of the property specifying the last user to unpublish an article.
   *     It corresponds to the sv:article property <code>lastUnpublishedBy</code>.
   *  </p>
   *
   *  <p>
   *     The property value must be a {@link javax.jcr.Node} with primary node type sv:user or sv:systemUser.
   *  </p>
   * @since Sitevision 2024.01.2
   */
  PROPERTY_LAST_UNPUBLISHED_BY: "lastUnpublishedBy";

  /**
   * <p>
   *     Name of the property specifying the last unpublished date of an article.
   *     It corresponds to the sv:article property <code>lastUnpublishDate</code>.
   *  </p>
   *
   *  <p>
   *     The property value must be of type <code>Date</code> or a <code>String</code> on format yyyy-MM-dd HH:mm:ss,
   *     where HH:mm:ss is optional (defaults to 00:00:00).
   *  </p>
   * @since Sitevision 2024.01.2
   */
  PROPERTY_LAST_UNPUBLISH_DATE: "lastUnpublishDate";

  /**
   * <p>Creates an article as sub node to a specified parent. The parent must be a node with primary
   *  node type sv:archive. If other parent is specified a <code>ConstraintViolationException</code> is thrown.</p>
   *
   *  <p>Any name can be given a article, it should however not contain the character '/'.</p>
   *
   *  <p>If no parent, no template or no name is specified a <code>NullPointerException</code> is thrown.</p>
   *
   *  <p>The current user must be authorized to create pages, layouts and to do write operations on the parent node. A
   *  <code>ConstraintViolationException</code> will be thrown if not.</p>
   *
   *  <p>Note that a new article inherits metadata and permissions from its parent.</p>
   *
   *  <p>Use {@link senselogic.sitevision.api.webresource.webcontent.WebContentUtil#updateContent(javax.jcr.Node, java.util.Map)}
   *  to add content to the new article.</p>
   * @param aParent the parent node of the article. May not be <code>null</code>
   * @param aTemplate the template used for the article. May not be <code>null</code>
   * @param aName the name of the sv:article. May not be <code>null</code>
   * @return a sv:article node corresponding to the newly created article. Will never return <code>null</code>
   * @throws javax.jcr.nodetype.ConstraintViolationException if an invalid parent is specified or if the current user&#xA; is not authorized to create the article
   * @throws RepositoryException if something else goes wrong
   * @see #createArticle(javax.jcr.Node, javax.jcr.Node, String, java.util.Map, java.util.Map)
   */
  createArticle(aParent: Node, aTemplate: Node, aName: String | string): Node;

  /**
   * <p>Creates an article with properties and web content. The parent must be a node with primary node type sv:archive.
   *  If other parent is specified a <code>ConstraintViolationException</code> is thrown. It is possible to provide the web content for the article
   *  as well as article properties.</p>
   *
   *  <p>Properties:</p>
   *  <ul>
   *  <li>
   *     {@link #PROPERTY_VISIBLE_IN_MENUS}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_SHORTID} - If the short id is already used by an other Sitevision node an <code>IllegalArgumentException</code> is thrown
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LOCALE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_ROBOTS_INDEX}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_CREATION_DATE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_CREATED_BY}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_MODIFIED_DATE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_MODIFIED_BY}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_PUBLISH_DATE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_PUBLISHED_BY}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_PUBLISH_DATE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_PUBLISHED_BY}
   *  </li>
   *  </ul>
   *  <p>
   *     If an invalid value is provided for a property, an <code>IllegalArgumentException</code> is thrown
   *  </p>
   *
   *  <p>
   *     Default values:
   *  </p>
   *  <ul>
   *  <li>{@link #PROPERTY_VISIBLE_IN_MENUS} - true</li>
   *  <li>{@link #PROPERTY_SHORTID} - "" (a short id will be generated by Sitevision)</li>
   *  <li>{@link #PROPERTY_LOCALE} - parent locale</li>
   *  <li>{@link #PROPERTY_ROBOTS_INDEX} - true</li>
   *  <li>{@link #PROPERTY_CREATION_DATE} - current time stamp</li>
   *  <li>{@link #PROPERTY_CREATED_BY} - current user</li>
   *  <li>{@link #PROPERTY_LAST_MODIFIED_DATE} - current time stamp</li>
   *  <li>{@link #PROPERTY_LAST_MODIFIED_BY} - current user</li>
   *  <li>{@link #PROPERTY_LAST_PUBLISH_DATE} - null (will not have a value)</li>
   *  <li>{@link #PROPERTY_LAST_PUBLISHED_BY} - null (will not have a value)</li>
   *  <li>{@link #PROPERTY_PUBLISH_DATE} - null (will not have a value)</li>
   *  <li>{@link #PROPERTY_PUBLISHED_BY} - null (will not have a value)</li>
   *  <li>{@link #PROPERTY_LAST_UNPUBLISHED_BY} - null (will not have a value)</li>
   *  <li>{@link #PROPERTY_LAST_UNPUBLISH_DATE} - null (will not have a value)</li>
   *  </ul>
   *
   *  <p>The article content is specified using the
   *  content map containing keys corresponding to layout names (e.g. "Huvudinnehåll") on the article and values containing the
   *  HTML used to generate a portlet structure in the layout. The provided content is converted to
   *  Sitevision text, table and image modules. It is also possible to specify that a horizontal or a vertical
   *  layout should be created. For more information about the HTML to portlet mapping can be found in the
   *  {@link senselogic.sitevision.api.webresource.webcontent.WebContentUtil} javadoc.
   *
   *  <p>If no parent, no template or no name is specified a <code>NullPointerException</code> is thrown.</p>
   *
   *  <p>The current user must be authorized to create pages, layouts and to do write operations on the parent node or
   *  a <code>ConstraintViolationException</code> will be thrown.</p>
   *
   *  <p>Note that a new page inherits metadata and permissions from its parent.</p>
   * @param aParent the parent node of the article. May not be <code>null</code>
   * @param aTemplate the sv:template node to be used for the article. May not be <code>null</code>
   * @param aName the name of the sv:article. May not be <code>null</code>
   * @param properties the article properties. May be <code>null</code>
   * @param content a map containing the HTML content. The keys must correspond to layout names on the node. May be <code>null</code>
   * @return a sv:article node corresponding to the newly created article. Will never return <code>null</code>
   * @throws javax.jcr.nodetype.ConstraintViolationException if an invalid parent is specified or if the current user&#xA; is not authorized to create the article
   * @throws RepositoryException if something else goes wrong
   * @see #createArticle(javax.jcr.Node, javax.jcr.Node, String)
   */
  createArticle(
    aParent: Node,
    aTemplate: Node,
    aName: String | string,
    properties: Map | {},
    content: Map | {}
  ): Node;

  /**
   * <p>Updates the properties of an article. If no article is specified a <code>NullPointerException</code>
   *  is thrown. If the node is not a sv:article an <code>IllegalArgumentException</code> is thrown.</p>
   *
   *  <p>
   *     Properties:
   *  </p>
   *  <ul>
   *  <li>
   *     {@link #PROPERTY_VISIBLE_IN_MENUS}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_SHORTID} - If the short id is already used by an other Sitevision node an <code>IllegalArgumentException</code> is thrown
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LOCALE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_ROBOTS_INDEX}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_CREATION_DATE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_CREATED_BY}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_MODIFIED_DATE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_MODIFIED_BY}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_PUBLISH_DATE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_PUBLISHED_BY}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_PUBLISH_DATE}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_PUBLISHED_BY}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_UNPUBLISHED_BY}
   *  </li>
   *  <li>
   *     {@link #PROPERTY_LAST_UNPUBLISH_DATE}
   *  </li>
   *  </ul>
   *  <p>
   *     If an invalid value is provided for a property, an <code>IllegalArgumentException</code> is thrown.
   *  </p>
   *
   *  <p>The current user must be authorized to do write operations on the article or
   *  a <code>ConstraintViolationException</code> will be thrown.</p>
   *
   *  <p>If no properties map is specified a <code>NullPointerException</code> is thrown.</p>
   * @param anArticle the sv:article that will be altered. May not be <code>null</code>
   * @param properties the article properties. May not be <code>null</code>
   * @throws javax.jcr.nodetype.ConstraintViolationException if the current user is not authorized to alter the article
   * @throws RepositoryException if something else goes wrong
   */
  updateArticle(anArticle: Node, properties: Map | {}): void;

  /**
   * <p>Alters the name of an article. If no article is specified a <code>NullPointerException</code>
   *  is thrown. If the node is not an sv:article an <code>IllegalArgumentException</code> is thrown.</p>
   *
   *  <p>Any name can be given an article, it should however not contain the character '/'. If null is
   *  provided a <code>NullPointerException</code> is thrown.</p>
   *
   *  <p>The current user must be authorized to do write operations on the article or
   *  a <code>ConstraintViolationException</code> will be thrown.</p>
   * @param anArticle the article that should be renamed. May not be <code>null</code>
   * @param aName the new name of the article. May not be <code>null</code>
   * @throws javax.jcr.nodetype.ConstraintViolationException if the current user is not authorized to alter the name of the&#xA; article
   * @throws RepositoryException if something else goes wrong
   */
  renameArticle(anArticle: Node, aName: String | string): void;
}

declare namespace ArticleUtil {}

declare var articleUtil: ArticleUtil;

export default articleUtil;
