import type { Node } from "../../types/javax/jcr/Node";

/**
 * Template utility interface that primarily handles nodes with primary node type <code>sv:template</code>.
 *
 * <p>
 *    Sitevision templates comes in different flavours:
 * </p>
 * <ul>
 *    <li>
 *       A <em>page template</em> is a <code>sv:template</code> that can be used to create a page/article.
 *    </li>
 *    <li>
 *       A <em>sub template</em> is a <code>sv:template</code> that can only be used to create other templates.
 *    </li>
 *    <li>
 *       A <em>collaboration group template</em> is a <code>sv:collaborationGroupTemplate</code> that can be used to create collaboration groups.
 *    </li>
 * </ul>
 * <p>
 *    <em>See method documentation to see what specific flavours each method supports.
 *    Also see {@link senselogic.sitevision.api.collaboration.CollaborationGroupTemplateUtil} when working with collaboration group templates.</em>
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getTemplateUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1_04
 * @see senselogic.sitevision.api.collaboration.CollaborationGroupTemplateUtil
 */
export interface TemplateUtil {
  /**
   * Gets first found template with a given name.
   *
   * <p>
   *    <strong>Note!</strong> This methods returns the first matching template - regardless of its <em>type/state</em>.
   *    It might be a <em>collaboration group template</em>, it might be a <em>page template</em> that can be used to create pages/articles of
   *    and it might be a template that is a <em>sub-template</em> (i.e. a template that only can be used by other templates).
   * </p>
   * <ul>
   *    <li>
   *       Use {@link #getPageTemplateByName(String)} to get first <em>page template</em>.
   *    </li>
   *    <li>
   *       Use {@link senselogic.sitevision.api.collaboration.CollaborationGroupTemplateUtil#getCollaborationGroupTemplateByName(String)}
   *       to get first <em>collaboration group template</em>.
   *    </li>
   * </ul>
   *
   * <p>
   *    <em>Permission note!</em> Only the templates that current user has {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on will be considered.
   * </p>
   * @param aTemplateName the name of the template
   * @return the template, or <code>null</code> if indeterminable (e.g. no accessible template named <code>aTemplateName</code> could be found)
   */
  getTemplateByName(aTemplateName: string): Node;

  /**
   * Gets all templates.
   *
   * <p>
   *    <strong>Note!</strong> This methods returns all templates - regardless of their <em>type/state</em>.
   *    The result might contain <em>collaboration group templates</em>, it might contain <em>page templates</em> that can be used
   *    to create pages/articles of and it might contain templates that are <em>sub-templates</em>
   *    (i.e. templates that only can be used by other templates).
   * </p>
   * <ul>
   *    <li>
   *       Use {@link #getPageTemplates()} to get all <em>page templates</em>.
   *    </li>
   *    <li>
   *       Use {@link senselogic.sitevision.api.collaboration.CollaborationGroupTemplateUtil#getCollaborationGroupTemplates()}
   *       to get all <em>collaboration group templates</em>.
   *    </li>
   * </ul>
   *
   * <p>
   *    <em>Permission note!</em> The list will only contain page templates that current user has
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on.
   * </p>
   * @return all accessible templates, or empty list if there are no accessible page templates.
   * @since Sitevision 4.1
   */
  getTemplates(): unknown;

  /**
   * Gets first found page template with a given name.
   *
   * <p>
   *    A <em>page template</em> is a <code>sv:template</code> that can be used to create pages/articles.
   *    It typically contains one or more content areas.
   * </p>
   * <p>
   *    <em>Permission note!</em> Only the page templates that current user has
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on will be considered.
   * </p>
   * @param aPageTemplateName the name of the page template
   * @return the page template, or <code>null</code> if indeterminable&#xA; (e.g. no accessible page template named <code>aPageTemplateName</code> could be found)
   * @since Sitevision 4.1
   */
  getPageTemplateByName(aPageTemplateName: string): Node;

  /**
   * Gets the page templates.
   *
   * <p>
   *    A <em>page template</em> is a <code>sv:template</code> that can be used to create pages/articles.
   *    It typically contains one or more content areas.
   * </p>
   * <p>
   *    <em>Permission note!</em> The list will only contain page templates that current user has
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on.
   * </p>
   * @return all accessible templates that can be used to create pages/articles, or empty list if there are no accessible page templates.
   * @since Sitevision 4.1
   */
  getPageTemplates(): unknown;

  /**
   * Whether or not a node is a page template.
   *
   * <p>
   *    A <em>page template</em> is a <code>sv:template</code> that can be used to create pages/articles.
   *    It typically contains one or more content areas.
   * </p>
   * @param aTemplate a template
   * @return true if aTemplate can be used to create pages/articles, false otherwise
   * @since Sitevision 4.1
   */
  isPageTemplate(aTemplate: Node): boolean;

  /**
   * Gets the names of the content areas in a template.
   * @param aTemplate a template (sv:template or sv:collaborationGroupTemplate)
   * @return the names of the content areas in aTemplate, or empty set
   * @since Sitevision 4.1
   */
  getContentAreaNames(aTemplate: Node): unknown;
}

declare namespace TemplateUtil {}

declare var templateUtil: TemplateUtil;

export default templateUtil;
