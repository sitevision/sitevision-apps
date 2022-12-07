import Node from "../../hidden/javax/jcr/Node";
import CollaborationGroupWrapper from "../../hidden/senselogic/sitevision/api/collaboration/CollaborationGroupWrapper";
import CollaborationGroupUtil from "../CollaborationGroupUtil";
import CollaborationGroupFolderUtil from "../CollaborationGroupFolderUtil";
import CollaborationGroupTemplateUtil from "../CollaborationGroupTemplateUtil";

/**
 * Gets a collaboration group wrapper for a specified collaboration group.
 * @param aCollaborationGroup the collaboration group (or the collaboration group page)
 * @return a collaboration group wrapper for <code>aCollaborationGroup</code>, or <code>null</code> if <code>aCollaborationGroup</code> isn't a collaboration group or if current user doesn't have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on <code>aCollaborationGroup</code>.
 */
export function getCollaborationGroupWrapper(
  aCollaborationGroup: Node
): CollaborationGroupWrapper;

/**
 * Gets an instance of a collaboration group utility class
 * @return An instance of a collaboration group utility class
 * @since Sitevision 3.6.4
 */
export function getCollaborationGroupUtil(): CollaborationGroupUtil;

/**
 * Gets an instance of a collaboration group folder utility class
 * @return An instance of a collaboration group folder utility class
 * @since Sitevision 3.6.4
 */
export function getCollaborationGroupFolderUtil(): CollaborationGroupFolderUtil;

/**
 * Gets an instance of a collaboration group template utility class
 * @return An instance of a collaboration group template utility class
 * @since Sitevision 3.6.4
 */
export function getCollaborationGroupTemplateUtil(): CollaborationGroupTemplateUtil;

/**
 * Factory for creating collaboration-related instances.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getCollaborationFactory()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
declare namespace collaborationFactory {
  export {
    getCollaborationGroupWrapper,
    getCollaborationGroupUtil,
    getCollaborationGroupFolderUtil,
    getCollaborationGroupTemplateUtil,
  };
}

export default collaborationFactory;
