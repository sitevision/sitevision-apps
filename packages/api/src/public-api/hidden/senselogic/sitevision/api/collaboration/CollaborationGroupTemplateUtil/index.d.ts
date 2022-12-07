import Node from "../../../../../javax/jcr/Node";

/**
 * Collaboration group template utility interface that handles nodes with primary node type <code>sv:collaborationGroupTemplate</code>.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link CollaborationFactory#getCollaborationGroupTemplateUtil()}.
 *    See {@link CollaborationFactory} for how to obtain an instance of the <code>CollaborationFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.4
 * @see senselogic.sitevision.api.resource.TemplateUtil
 */

interface CollaborationGroupTemplateUtil {
  /**
   * Gets the default collaboration group template.
   *
   * <p>
   *    The <em>default collaboration group template</em> is the template that are used by default to create new
   *    collaboration groups (i.e. collaboration group pages).
   * </p>
   * <p>
   *    <em>Permission note!</em> Current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on default collaboration group template.
   * </p>
   * @return the default collaboration group template, or <code>null</code> if indeterminable
   */
  getDefaultCollaborationGroupTemplate(): Node;

  /**
   * Gets the first found collaboration group template that matches a given name.
   *
   * <p>
   *    <em>Permission note!</em> Only collaboration group templates that current user has
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on will be considered.
   * </p>
   * @param aCollaborationGroupTemplateName name of the template
   * @return a collaboration group template, or <code>null</code> if indeterminable (e.g. no accessible collaboration group template named <code>aCollaborationGroupTemplateName</code> could be found)
   * @since Sitevision 4.1
   */
  getCollaborationGroupTemplateByName(
    aCollaborationGroupTemplateName: java.lang.String
  ): Node;

  /**
   * Gets all collaboration group templates.
   *
   * <p>
   *    <em>Permission note!</em> The list will only contain collaboration group templates that current user has
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on.
   * </p>
   * @return all collaboration group templates, or empty list if there are no accessible collaboration group templates.
   * @since Sitevision 4.1
   */
  getCollaborationGroupTemplates(): unknown[];
}
