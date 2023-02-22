import type { Node } from "../../types/javax/jcr/Node";

/**
 * Collaboration group folder utility interface that handles nodes with primary node type <code>sv:collaborationGroupFolder</code>.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link CollaborationFactory#getCollaborationGroupFolderUtil()}.
 *    See {@link CollaborationFactory} for how to obtain an instance of the <code>CollaborationFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.4
 */
export interface CollaborationGroupFolderUtil {
  /**
   * Gets the default collaboration group folder.
   *
   * <p>
   *    The <em>default collaboration group folder</em> is the folder where new collaboration groups
   *    (i.e. collaboration group pages) are created by default.
   * </p>
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
    aGroupName: string
  ): boolean;
}

declare namespace CollaborationGroupFolderUtil {}

declare var collaborationGroupFolderUtil: CollaborationGroupFolderUtil;

export default collaborationGroupFolderUtil;
