import type { Node } from "../../types/javax/jcr/Node";
import type { CollaborationGroupWrapper } from "../../types/senselogic/sitevision/api/collaboration/CollaborationGroupWrapper";
import type { CollaborationGroupUtil } from "../CollaborationGroupUtil";
import type { CollaborationGroupFolderUtil } from "../CollaborationGroupFolderUtil";
import type { CollaborationGroupTemplateUtil } from "../CollaborationGroupTemplateUtil";

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
export interface CollaborationFactory {
  /**
   * Gets a collaboration group wrapper for a specified collaboration group.
   * @param aCollaborationGroup the collaboration group (or the collaboration group page)
   * @return a collaboration group wrapper for <code>aCollaborationGroup</code>, or <code>null</code> if <code>aCollaborationGroup</code> isn't a collaboration group or if current user doesn't have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on <code>aCollaborationGroup</code>.
   */
  getCollaborationGroupWrapper(
    aCollaborationGroup: Node
  ): CollaborationGroupWrapper;

  /**
   * Gets an instance of a collaboration group utility class
   * @return An instance of a collaboration group utility class
   * @since Sitevision 3.6.4
   */
  getCollaborationGroupUtil(): CollaborationGroupUtil;

  /**
   * Gets an instance of a collaboration group folder utility class
   * @return An instance of a collaboration group folder utility class
   * @since Sitevision 3.6.4
   */
  getCollaborationGroupFolderUtil(): CollaborationGroupFolderUtil;

  /**
   * Gets an instance of a collaboration group template utility class
   * @return An instance of a collaboration group template utility class
   * @since Sitevision 3.6.4
   */
  getCollaborationGroupTemplateUtil(): CollaborationGroupTemplateUtil;
}

declare namespace CollaborationFactory {}

declare var collaborationFactory: CollaborationFactory;

export default collaborationFactory;
