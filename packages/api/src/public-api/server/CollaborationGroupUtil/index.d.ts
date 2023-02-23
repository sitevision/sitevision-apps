import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";
import type CollaborationGroupType from "../CollaborationGroupType";

/**
 * Collaboration group utility interface.
 *
 *  <p>
 *     <em>Note!</em> This interface is used to <em>create</em> collaboration groups. You would typically use
 *     {@link senselogic.sitevision.api.collaboration.CollaborationGroupWrapper} to <em>update</em> an existing
 *     collaboration group.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via {@link CollaborationFactory#getCollaborationGroupUtil()}.
 *     See {@link CollaborationFactory} for how to obtain an instance of the <code>CollaborationFactory</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.4
 */
export interface CollaborationGroupUtil {
  /**
   * Creates an open collaboration group.
   *
   *  <p>
   *     <em>
   *        This is a legacy convenience method that delegates to {@link #createCollaborationGroup(Node, Node, String, CollaborationGroupType)}
   *        using {@link CollaborationGroupType#OPEN} as group type.
   *     </em>
   *  </p>
   * @param aGroupTemplate the collaboration group template (sv:collaborationGroupTemplate) to use when creating the collaboration&#xA; group page of the collaboration group
   * @param aGroupFolder the collaboration group folder (sv:collaborationGroupFolder) where the collaboration group page of the&#xA; collaboration group should reside
   * @param aGroupName the name of the collaboration group
   * @return The created collaboration group (sv:collaborationGroup)
   * @throws java.lang.NullPointerException if <code>aGroupTemplate</code>, <code>aGroupFolder</code> or <code>aGroupName</code>&#xA; is <code>null</code>
   * @throws ConstraintViolationException if <code>aGroupTemplate</code> or <code>aGroupFolder</code> is of invalid type,&#xA; if <code>aGroupName</code> is whitespace only,&#xA; if <code>aGroupFolder</code> already contains a collaboration group named <code>aGroupName</code> (case ignored)&#xA; or if current user is not authorized to create the collaboration group
   * @throws RepositoryException if something else goes wrong
   * @see #createCollaborationGroup(Node, Node, String, CollaborationGroupType)
   */
  createCollaborationGroup(
    aGroupTemplate: Node,
    aGroupFolder: Node,
    aGroupName: String | string
  ): Node;

  /**
   * Creates a collaboration group.
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on <code>aGroupTemplate</code>
   *     and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#CREATE_COLLABORATION_GROUP} on <code>aGroupFolder</code>.
   *     In order to create a {@link CollaborationGroupType#CLOSED} collaboration group, current user must also have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#CREATE_CLOSED_COLLABORATION_GROUP} on <code>aGroupFolder</code>.
   *  </p>
   *  <p>
   *     <strong>User note!</strong> Current user must have a user identity as it will be the administrator of the created
   *     group. <em>Anonymous</em> users doesn't have a user identity, nor the <em>Indexer</em>, <em>Validator</em> or the <em>Extractor</em>.
   *     In other words: {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUserIdentity()} must be non-<code>null</code>.
   *  </p>
   *
   *  <p>
   *     <em>Tip!</em> Use {@link CollaborationGroupTemplateUtil} to get a group template,
   *     use {@link CollaborationGroupFolderUtil} to get the default group folder (and perhaps check if the collaboration folder already contains
   *     a collaboration group with specified name). Use {@link CollaborationGroupWrapper} to update the group that is created.
   *  </p>
   * @param aGroupTemplate the collaboration group template (sv:collaborationGroupTemplate) to use when creating the collaboration group page of&#xA; the collaboration group
   * @param aGroupFolder the collaboration group folder (sv:collaborationGroupFolder) where the collaboration group page of the collaboration&#xA; group should reside
   * @param aGroupName the name of the collaboration group
   * @param aGroupType the group type, note that {@link CollaborationGroupType#CLOSED} needs additional permission
   * @return The created collaboration group (sv:collaborationGroup)
   * @throws java.lang.NullPointerException if <code>aGroupTemplate</code>, <code>aGroupFolder</code>, <code>aGroupName</code>&#xA; or <code>aGroupType</code> is <code>null</code>
   * @throws ConstraintViolationException if <code>aGroupTemplate</code> or <code>aGroupFolder</code> is of invalid type,&#xA; if <code>aGroupName</code> is whitespace only,&#xA; if <code>aGroupFolder</code> already contains a collaboration group named <code>aGroupName</code> (case ignored)&#xA; or if current user is not authorized to create the collaboration group (see permission note above)
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 4.1
   */
  createCollaborationGroup(
    aGroupTemplate: Node,
    aGroupFolder: Node,
    aGroupName: String | string,
    aGroupType: CollaborationGroupType
  ): Node;

  /**
   * Removes a collaboration group.
   *
   *  <p>
   *     <em>Note!</em> When a collaboration group (<code>sv:collaborationGroup</code>) is removed,
   *     its collaboration group page (<code>sv:collaborationGroupPage</code>) is moved to the trashcan.
   *  </p>
   *  <p>
   *     <strong>Permission note!</strong> To remove a collaboration group current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP} on the collaboration group page.
   *  </p>
   * @param aCollaborationGroup a collaboration group to remove
   * @return <code>true</code> if <code>aCollaborationGroup</code> was removed, i.e. collaboration group page was moved to trashcan,&#xA; <code>false</code> otherwise.
   * @since Sitevision 4.5.3
   */
  removeCollaborationGroup(aCollaborationGroup: Node): boolean;
}

declare namespace CollaborationGroupUtil {}

declare var collaborationGroupUtil: CollaborationGroupUtil;

export default collaborationGroupUtil;
