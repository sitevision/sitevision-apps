import type { Node } from "../../types/javax/jcr/Node";

/**
 * User utility interface.
 *
 *  <p>
 *     This interface primarily handles nodes with primary node type <code>sv:user</code>, but some methods can also handle
 *     other user types (i.e. <code>sv:simpleUser</code> and/or <code>sv:systemUser</code>).
 *  </p>
 *
 *  <p>
 *     <em>Tip!</em> Some user-related functionality in other interfaces:
 *  </p>
 *  <ul>
 *     <li>
 *        Use {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()} if you should get current user.
 *     </li>
 *     <li>
 *        Use {@link senselogic.sitevision.api.user.UserIdentityUtil#getUserIdentity(javax.jcr.Node)} if you should get
 *        the <code>sv:userIdentity</code> of a user.
 *     </li>
 *     <li>
 *        Use {@link senselogic.sitevision.api.security.DirectoryUtil} if you should lookup/search directory-bound users.
 *     </li>
 *     <li>
 *        Use {@link senselogic.sitevision.api.security.PermissionUtil} if you should check permission(s) for a <code>sv:user</code>.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.user.UserFactory#getUserUtil()}.
 *     See {@link senselogic.sitevision.api.user.UserFactory} for how to obtain an instance of the <code>UserFactory</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.0.1
 * @see senselogic.sitevision.api.user.SystemUserUtil
 * @see senselogic.sitevision.api.user.SimpleUserUtil
 */
export interface UserUtil {
  /**
   * Checks if current user is member of a group.
   *
   *  <p>
   *     This is a convenience for {@link #isMemberOfGroup(javax.jcr.Node, javax.jcr.Node)} using current user
   *     (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}).
   *  </p>
   * @param aGroup a group node (sv:userGroup or sv:virtualGroup)
   * @return <code>true</code> if current user is member of <code>aGroup</code>, <code>false</code> otherwise
   */
  isMemberOfGroup(aGroup: Node): boolean;

  /**
   * Checks if a specific user is member of a group.
   *
   *  <p>
   *     <em>Tip!</em> To check if a <code>sv:userIdentity</code> is member of a <code>sv:collaborationGroup</code>,
   *     you would typically use {@link senselogic.sitevision.api.user.UserIdentityWrapper#isMemberOf(javax.jcr.Node)} or
   *     {@link senselogic.sitevision.api.collaboration.CollaborationGroupWrapper#isMember(javax.jcr.Node)}.
   *  </p>
   * @param aUser a user node (sv:user, sv:simpleUser or sv:systemUser)
   * @param aGroup a group node (sv:userGroup or sv:virtualGroup)
   * @return <code>true</code> if <code>aUser</code> is member of <code>aGroup</code>, <code>false</code> otherwise
   */
  isMemberOfGroup(aUser: Node, aGroup: Node): boolean;
}

declare namespace UserUtil {}

declare var userUtil: UserUtil;

export default userUtil;
