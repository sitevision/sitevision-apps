import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";

/**
 * Collaboration group folder utility interface that handles nodes with primary node type <code>sv:collaborationGroupFolder</code>.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link CollaborationFactory#getCollaborationGroupFolderUtil()}.
 *     See {@link CollaborationFactory} for how to obtain an instance of the <code>CollaborationFactory</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.4
 */
export interface CollaborationGroupFolderUtil {
  /**
   * Gets the default collaboration group folder.
   *
   *  <p>
   *     The <em>default collaboration group folder</em> is the folder where new collaboration groups
   *     (i.e. collaboration group pages) are created by default.
   *  </p>
   * @return the default collaboration group folder, or <code>null</code> if indeterminable
   */
  getDefaultCollaborationGroupFolder(): Node;

  /**
   * Whether or not a collaboration group folder already contains a named collaboration group.
   * @param aCollaborationGroupFolder the collaboration group folder
   * @param aGroupName the name of the collaboration group
   * @return <code>true</code> if <code>aCollaborationGroupFolder</code> contains (case ignored) a group named <code>aGroupName</code>,&#xA; <code>false</code> otherwise
   * @throws java.lang.NullPointerException if <code>aCollaborationGroupFolder</code> or <code>aGroupName</code> is <code>null</code>
   * @throws RepositoryException if <code>aCollaborationGroupFolder</code> is not a collaboration folder
   */
  containsCollaborationGroup(
    aCollaborationGroupFolder: Node,
    aGroupName: String | string
  ): boolean;

  /**
   * Creates a collaboration group folder.
   *
   *  <p>
   *     <em>Permission note!</em> Current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#CREATE_COLLABORATION_GROUP_FOLDER}
   *     on the parent where the collaboration group folder is created.
   *  </p>
   * @param aParent the parent node of the sv:collaborationGroupFolder. May not be null
   * @param aGroupFolderName the name of the collaboration group folder. May not be null or whitespace-only
   * @return The created collaboration group folder (sv:collaborationGroupFolder)
   * @throws java.lang.NullPointerException if aParent or aGroupFolderName is null
   * @throws java.lang.IllegalArgumentException if aGroupFolderName is whitespace only
   * @throws ConstraintViolationException if social collaboration is not enabled on the site of aParent,&#xA; if aParent is of invalid type, or if current user is not authorized to create the collaboration group folder
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 2025.04.1
   */
  createCollaborationGroupFolder(
    aParent: Node,
    aGroupFolderName: String | string
  ): Node;
}

declare namespace CollaborationGroupFolderUtil {}

declare var collaborationGroupFolderUtil: CollaborationGroupFolderUtil;

export default collaborationGroupFolderUtil;
