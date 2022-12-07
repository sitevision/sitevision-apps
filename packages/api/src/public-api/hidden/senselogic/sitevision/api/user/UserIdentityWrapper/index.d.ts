import Node from "../../../../../javax/jcr/Node";

import Wrapper from "../../base/Wrapper";

/**
 * User identity wrapper interface.
 *
 * <p>
 *    This wrapper provides methods to check and update the social network (i.e. contacts and collaboration groups)
 *    of a (wrapped) user identity.
 * </p>
 *
 * <p>
 *    <em>Note that a disabled user identity is prohibited to execute some of the mutating/write operations.</em>
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link UserFactory#getUserIdentityWrapper(javax.jcr.Node)}.
 *    See {@link senselogic.sitevision.api.user.UserFactory} for how to obtain an instance of the <code>UserFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
interface UserIdentityWrapper {
  /**
   * Gets the contacts of the wrapped user identity.
   * @return the contacts of the wrapped user identity. Never null.
   */
  getContacts(): unknown;

  /**
   * Checks if the wrapped user identity is contact with a specified user identity.
   * @param aUserIdentity the user identity to check
   * @return <code>true</code> if <code>aUserIdentity</code> is a contact of the wrapped user identity, <code>false</code> otherwise
   */
  isContact(aUserIdentity: Node): boolean;

  /**
   * Adds a contact for the wrapped user identity.
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To be allowed to add a contact for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES}
   *    on current page.
   * </p>
   * @param aUserIdentity the user identity (or user) that should be added as contact for the wrapped user identity
   * @return <code>true</code> if <code>aUserIdentity</code> was added as contact for the wrapped user identity, <code>false</code> otherwise
   */
  addContact(aUserIdentity: Node): boolean;

  /**
   * Removes a contact of the wrapped user identity.
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To be allowed to remove a contact for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES}
   *    on current page.
   * </p>
   * @param aUserIdentity the user identity (or user) that should be added as contact for the wrapped user identity
   * @return <code>true</code> if <code>aUserIdentity</code> was added as contact for the wrapped user identity, <code>false</code> otherwise
   */
  removeContact(aUserIdentity: Node): boolean;

  /**
   * Gets the collaboration groups of the wrapped user identity.
   *
   * <p>
   *    <strong>Permission note!</strong> The returned set will only contain the collaboration groups that
   *    that current user is allowed to read (i.e. {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}).
   * </p>
   * @return the accessible collaboration groups of the wrapped user identity. Never null.
   */
  getCollaborationGroups(): unknown;

  /**
   * Checks if wrapped user identity is admin of a collaboration group.
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to check
   * @return <code>true</code> if the wrapped user identity is admin of <code>aCollaborationGroup</code>, <code>false</code> otherwise
   */
  isAdminOf(aCollaborationGroup: Node): boolean;

  /**
   * Checks if wrapped user identity is member of a collaboration group.
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to check
   * @return <code>true</code> if the wrapped user identity is member of <code>aCollaborationGroup</code>, <code>false</code> otherwise
   */
  isMemberOf(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity leaves a collaboration group.
   *
   * <p>
   *    <em>Only members can leave a collaboration group</em>, i.e. the leave attempt will be ignored if wrapped user
   *    identity isn't a member of specified collaboration group. Note that a group <em>admin</em>
   *    is also a group <em>member</em> so leaving a collaboration group might in fact also remove an <em>admin</em>,
   *    but <em>last admin</em> will never be removed. Collaboration groups that are <em>inactive</em> can not be leaved.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To remove group membership for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on the collaboration group.
   * </p>
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to leave
   * @return <code>true</code> if the leave operation succeeded, <code>false</code> otherwise
   */
  leaveGroup(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity joins a collaboration group.
   *
   * <p>
   *    <em>Only non-members can join a collaboration group</em>, i.e. the join attempt will be ignored if wrapped user
   *    identity already are a member of specified collaboration group. Collaboration groups that are <em>inactive</em> can not be joined.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To join a collaboration group for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on the collaboration group.
   * </p>
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to join
   * @return <code>true</code> if the join operation succeeded, <code>false</code> otherwise
   */
  joinGroup(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity follows/eavesdrops a collaboration group.
   *
   * <p>
   *    <em>Only non-members can follow a collaboration group</em>, i.e. the follow attempt will be ignored if wrapped user
   *    identity already are a member of specified collaboration group. Collaboration groups that are <em>inactive</em>
   *    or <em>closed</em> can not be followed.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To follow a collaboration group for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on the collaboration group.
   * </p>
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to follow
   * @return <code>true</code> if the follow operation succeeded, <code>false</code> otherwise
   * @since Sitevision 4.1
   */
  followGroup(aCollaborationGroup: Node): boolean;

  /**
   * Gets the collaboration groups the wrapped user identity follows/eavesdrops.
   *
   * <p>
   *    <strong>Permission note!</strong> The returned set will only contain active collaboration groups that
   *    that current user is allowed to read (i.e. {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}).
   * </p>
   * @return the accessible collaboration groups the wrapped user identity follows. Never null.
   * @since Sitevision 4.1
   */
  getFollowedGroups(): unknown;

  /**
   * Checks if wrapped user identity is following/eavesdropping a collaboration group.
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to check
   * @return <code>true</code> if the wrapped user identity is following <code>aCollaborationGroup</code>, <code>false</code> otherwise
   * @since Sitevision 4.1
   */
  isFollowing(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity stops following/eavesdropping a collaboration group.
   *
   * <p>
   *    <em>Only followers can stop following a collaboration group</em>, i.e. the unfollow attempt will be ignored if wrapped user
   *    identity isn't a follower of specified collaboration group. Collaboration groups that are <em>inactive</em> can not be unfollowed.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To unfollow a group for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on the collaboration group.
   * </p>
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to stop following
   * @return <code>true</code> if the unfollow operation succeeded, <code>false</code> otherwise
   * @since Sitevision 4.1
   */
  unfollowGroup(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity mutes a collaboration group (entries will not show up user's in compound timeline).
   *
   * <p>
   *    <em>Only members can mute a collaboration group</em>, i.e. the mute attempt will be ignored if wrapped user
   *    identity is not a member of the specified collaboration group.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To mute a collaboration group for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on the collaboration group.
   * </p>
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to mute
   * @return <code>true</code> if the mute operation succeeded, <code>false</code> otherwise
   * @see #muteNotifications(Node)
   * @since Sitevision 9.1
   */
  muteGroup(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity unmutes a collaboration group.
   *
   * <p>
   *    <em>Only members can unmute a collaboration group</em>, i.e. the unmute attempt will be ignored if wrapped user
   *     identity is not a member of the specified collaboration group.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To unmute a group for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on the collaboration group.
   * </p>
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to unmute
   * @return <code>true</code> if the unmute operation succeeded, <code>false</code> otherwise
   * @since Sitevision 9.1
   */
  unmuteGroup(aCollaborationGroup: Node): boolean;

  /**
   * Checks if wrapped user identity has muted the collaboration group.
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to check
   * @return <code>true</code> if the wrapped user identity has muted <code>aCollaborationGroup</code>, <code>false</code> otherwise
   * @since Sitevision 9.1
   */
  isGroupMuted(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity mutes notifications from a collaboration group (entries will show up but not notifications).
   *
   * <p>
   *    <em>Only members can mute notifications from a collaboration group</em>, i.e. the mute attempt will be ignored if wrapped user
   *    identity is not a member of the specified collaboration group.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To mute notifications from a collaboration group for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on the collaboration group.
   * </p>
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to mute notifications from
   * @return <code>true</code> if the mute notifications operation succeeded, <code>false</code> otherwise
   * @see #muteGroup(Node)
   * @since Sitevision 9.1
   */
  muteNotifications(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity unmutes notifications from a collaboration group.
   *
   * <p>
   *    <em>Only members can unmute notifications from a collaboration group</em>, i.e. the unmute attempt will be ignored if wrapped user
   *     identity is not a member of the specified collaboration group.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To unmute notifications from a group for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ}
   *    on the collaboration group.
   * </p>
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to unmute notifications from
   * @return <code>true</code> if the unmute notifications operation succeeded, <code>false</code> otherwise
   * @since Sitevision 9.1
   */
  unmuteNotifications(aCollaborationGroup: Node): boolean;

  /**
   * Checks if wrapped user identity mutes notifications from the collaboration group.
   * @param aCollaborationGroup the collaboration group (or collaboration group page) to check
   * @return <code>true</code> if the wrapped user identity mutes notifications from <code>aCollaborationGroup</code>, <code>false</code> otherwise
   * @since Sitevision 9.1
   */
  isNotificationsMuted(aCollaborationGroup: Node): boolean;

  /**
   * Gets the profile image of the wrapped user identity.
   *
   * <p>
   *    <em>Note!</em> This method returns the 'raw' profile image (i.e. a node of type <code>sv:image</code>)
   *    that the user has uploaded. For buddy icons, see {@link senselogic.sitevision.api.render.BuddyIconRenderer}.
   * </p>
   * @return the profile image or null
   * @since Sitevision 4.0
   */
  getProfileImage(): Node;

  /**
   * Gets the profile images folder of the wrapped user identity.
   * @return the profile images folder or null
   * @since Sitevision 4.2
   */
  getProfileImagesFolder(): Node;

  /**
   * Sets the profile image of the wrapped user identity.
   *
   * <p>
   *    This method <em>sets</em> the active profile image, i.e. determines which profile image that should be used.
   *    To <em>create a new</em> profile image (i.e. new binary data), you would typically use
   *    a method in {@link senselogic.sitevision.api.webresource.ImageUtil} first.
   * </p>
   *
   * <p>
   *    <strong>Model note!</strong> A profile image must be a node of type <code>sv:image</code>
   *    and a child of the <em>profile images folder</em> of the wrapped user identity.
   *    The profile images folder is available via {@link #getProfileImagesFolder()}.
   * </p>
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To set the profile image for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES}
   *    on current page.
   * </p>
   * @param aProfileImage the profile image
   * @return <code>true</code> if the set operation succeeded, <code>false</code> otherwise
   * @since Sitevision 4.2
   */
  setProfileImage(aProfileImage: Node): boolean;

  /**
   * Sets the visibility of the wrapped user identity in search results.
   *
   * <p>
   *    <strong>Permission note!</strong> This mutating operation is not allowed for a wrapped user identity that is {@link #isDisabled() disabled}.
   *    To update the hidden property for the wrapped user identity, current user must match the wrapped user identity
   *    (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES}
   *    on current page.
   * </p>
   * @param aHidden <code>true</code> if the wrapped user identity should be hidden, <code>false</code> otherwise
   * @return <code>true</code> if the set operation succeeded, <code>false</code> otherwise
   * @since Sitevision 4.2
   */
  setHidden(aHidden: boolean): boolean;

  /**
   * Sets the availability of the wrapped user identity.
   *
   * <p>
   *    <strong>Permission note!</strong> To update the disabled property for the wrapped user identity,
   *    current user must match the wrapped user identity (i.e. <em>"is yourself"</em>) - or have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_USER_IDENTITIES}
   *    on current page.
   * </p>
   * @param aDisabled <code>true</code> if the wrapped user identity should be disabled, <code>false</code> otherwise
   * @return <code>true</code> if the set operation succeeded, <code>false</code> otherwise
   * @since Sitevision 4.3
   */
  setDisabled(aDisabled: boolean): boolean;

  /**
   * Checks if the wrapped user identity is disabled or not.
   *
   * <p>
   *    This is a convenience method the check the boolean value of the <code>disabled</code> property of the wrapped user identity.
   *    <em>Note that a disabled user identity is not allowed to perform any mutating/write operations except {@link #setDisabled(boolean)}</em>.
   * </p>
   * @return true if the wrapped user identity is disabled, false if not
   * @since Sitevision 4.3
   */
  isDisabled(): boolean;

  /**
   * Gets the wrapped user identity.
   *
   * <p>
   *    <em>Note! This method is equivalent with {@link #unwrap()} if this wrapper is created with a <code>sv:userIdentity</code> node.</em>
   * </p>
   * @return the wrapped user identity
   * @since Sitevision 4.3
   */
  getUserIdentity(): Node;
}

export default UserIdentityWrapper;
