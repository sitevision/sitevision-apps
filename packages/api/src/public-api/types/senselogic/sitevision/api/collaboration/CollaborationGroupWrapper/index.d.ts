import type { Set } from "../../../../../java/util/Set";
import type { Node } from "../../../../../javax/jcr/Node";

import type { String } from "../../../../../java/lang/String";
import type CollaborationGroupType from "../../../../../../server/CollaborationGroupType";

import type CollaborationGroupState from "../../../../../../server/CollaborationGroupState";
import type { Locale } from "../../../../../java/util/Locale";
import type { Wrapper } from "../../base/Wrapper";

/**
 * Collaboration group administration interface.
 *
 *  <p>
 *     This wrapper provides methods to update an existing collaboration group. You would typically use
 *     {@link CollaborationGroupUtil} to <em>create</em> a new collaboration group.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link CollaborationFactory#getCollaborationGroupWrapper(javax.jcr.Node)}.
 *     See {@link CollaborationFactory} for how to obtain an instance of the <code>CollaborationFactory</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export type CollaborationGroupWrapper = Wrapper & {
  /**
   * Gets the admins of the wrapped collaboration group.
   * @return the admins of the wrapped collaboration group. Never null.
   */
  getAdmins(): Set;

  /**
   * Checks if a user identity is admin of the wrapped collaboration group.
   * @param aUserIdentity a user identity (or user)
   * @return <code>true</code> if <code>aUserIdentity</code> is admin of the wrapped group, <code>false</code> otherwise
   */
  isAdmin(aUserIdentity: Node): boolean;

  /**
   * Adds a user identity as admin of the wrapped collaboration group.
   *
   *  <p>
   *     <em>Only non-admins will be added</em>, i.e. a user identity that already is an admin will be ignored.
   *     Collaboration groups that are <em>inactive/unavailable</em> don't accept any new admins.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> To add an admin to the wrapped group, current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP} on the group.
   *  </p>
   * @param aUserIdentity a user identity (or user)
   * @return <code>true</code> if <code>aUserIdentity</code> was added as admin of the wrapped group, <code>false</code> otherwise.&#xA; <code>false</code> is always returned if <code>aUserIdentity</code> is <code>null</code> or already <em>is</em> admin of the&#xA; wrapped collaboration group.
   * @since Sitevision 4.5.4
   */
  addAdmin(aUserIdentity: Node): boolean;

  /**
   * Gets the members of the wrapped collaboration group.
   *
   *  <p>
   *     <em>Note!</em> Admins are also considered as members.
   *  </p>
   * @return the members of the wrapped collaboration group. Never null.
   */
  getMembers(): Set;

  /**
   * Checks if a user identity is member of the wrapped collaboration group.
   * @param aUserIdentity a user identity (or user)
   * @return <code>true</code> if <code>aUserIdentity</code> is member of the wrapped group, <code>false</code> otherwise
   */
  isMember(aUserIdentity: Node): boolean;

  /**
   * Adds a user identity as member of the wrapped collaboration group.
   *
   *  <p>
   *     <em>Only non-members will be added</em>, i.e. a user identity that already is a member will be ignored.
   *     Collaboration groups that are <em>inactive</em> doesn't accept any new members.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> To add a member to the wrapped group, current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP} on the group -
   *     or current user must match the given user identity (i.e. "is yourself") and have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on the wrapped group.
   *  </p>
   * @param aUserIdentity a user identity (or user)
   * @return <code>true</code> if <code>aUserIdentity</code> was added as member of the wrapped group, <code>false</code> otherwise.&#xA; <code>false</code> is always returned if <code>aUserIdentity</code> is <code>null</code> or already <em>are</em> a member (or admin) of the&#xA; wrapped collaboration group.
   */
  addMember(aUserIdentity: Node): boolean;

  /**
   * Removes a member from the wrapped collaboration group.
   *
   *  <p>
   *     <em>Only members can be removed</em>, i.e. a user identity that is a non-member will be ignored. Note that an <em>admin</em>
   *     is also a <em>member</em> so removing a member might in fact also remove an <em>admin</em>, but <em>last admin</em> will never be removed.
   *     Members can not be removed from collaboration groups that are <em>inactive</em>.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> To remove group membership for a user identity, current user
   *     must match the user identity (i.e. "is yourself") - or have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *     and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} on the wrapped group.
   *  </p>
   * @param aUserIdentity a user identity (or user)
   * @return <code>true</code> if <code>aUserIdentity</code> was removed as member from the wrapped group, <code>false</code> otherwise.&#xA; <code>false</code> is always returned if <code>aUserIdentity</code> is <code>null</code> or <em>not a member (or admin)</em>&#xA; or <em>last admin</em> of the wrapped collaboration group.
   */
  removeMember(aUserIdentity: Node): boolean;

  /**
   * Gets the followers/eavesdroppers of the wrapped collaboration group.
   * @return the followers of the wrapped collaboration group. Never null.
   * @since Sitevision 4.1
   */
  getFollowers(): Set;

  /**
   * Checks if a user identity is a follower/eavesdropper of the wrapped collaboration group.
   * @param aUserIdentity a user identity (or user)
   * @return <code>true</code> if <code>aUserIdentity</code> is a follower of the wrapped group, <code>false</code> otherwise
   * @since Sitevision 4.1
   */
  isFollower(aUserIdentity: Node): boolean;

  /**
   * Alters the name of the wrapped collaboration group.
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *     on the wrapped collaboration group.
   *  </p>
   *
   *  <p>
   *     <em>Name note!</em> Each group name must be (case-insensitively) unique in a given structure (i.e. collaboration group folder).
   *     This method will remove leading and trailing whitespace from <code>aGroupName</code> and use the remaining characters
   *     as new name. The wrapped group will <em>not</em> be renamed if <code>aGroupName</code> is <code>null</code>, whitespace only or if
   *     the remaining characters already exist as group name.
   *  </p>
   *
   *  <p>
   *     <em>Tip!</em> Use {@link CollaborationGroupFolderUtil#containsCollaborationGroup(javax.jcr.Node, String)}
   *     to check if a named collaboration group already exists in the collaboration group folder of the group.
   *  </p>
   * @param aGroupName the new group name
   * @return <code>true</code> if group could be renamed to <code>aGroupName</code>, <code>false</code> otherwise.
   * @since Sitevision 3.6.4
   */
  renameGroup(aGroupName: String | string): boolean;

  /**
   * Gets the collaboration group type of the wrapped collaboration group.
   * @return the collaboration group type
   * @since Sitevision 4.1
   */
  getGroupType(): CollaborationGroupType;

  /**
   * Changes the collaboration group type of the wrapped collaboration group.
   *
   *  <p>
   *     The group type can not be changed for collaboration groups that are <em>inactive</em>.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *     on the wrapped collaboration group in order to change group type. In order to change group type to
   *     {@link CollaborationGroupType#CLOSED},
   *     current user must also have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#CREATE_CLOSED_COLLABORATION_GROUP}
   *     on the wrapped collaboration group.
   *  </p>
   * @param aCollaborationGroupType the collaboration group type
   * @since Sitevision 4.1
   */
  setGroupType(aCollaborationGroupType: CollaborationGroupType): void;

  /**
   * Gets the collaboration group state of the wrapped collaboration group.
   * @return the collaboration group state
   * @since Sitevision 4.1
   */
  getGroupState(): CollaborationGroupState;

  /**
   * Changes the collaboration group state of the wrapped collaboration group.
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *     on the wrapped collaboration group in order to change group state.
   *  </p>
   * @param aCollaborationGroupState the collaboration group state
   * @since Sitevision 4.1
   */
  setGroupState(aCollaborationGroupState: CollaborationGroupState): void;

  /**
   * Gets the group description of the wrapped collaboration group.
   * @return the collaboration group description
   * @since Sitevision 4.5.3
   */
  getGroupDescription(): string;

  /**
   * Sets the group description of the wrapped collaboration group.
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *     on the wrapped collaboration group in order to change group description.
   *  </p>
   * @param aGroupDescription the collaboration group description
   * @since Sitevision 4.5.3
   */
  setGroupDescription(aGroupDescription: String | string): void;

  /**
   * Gets the profile images folder of the wrapped collaboration group.
   * @return the profile images folder or null
   * @since Sitevision 4.5.3
   */
  getProfileImagesFolder(): Node;

  /**
   * Gets the profile image of the wrapped collaboration group.
   *
   *  <p>
   *     <em>Note!</em> This method returns the 'raw' profile image (i.e. a Node of type <code>sv:image</code>)
   *     that the group has uploaded. For buddy icons, see {@link senselogic.sitevision.api.render.BuddyIconRenderer}.
   *  </p>
   * @return the profile image or null
   * @since Sitevision 4.5.3
   */
  getProfileImage(): Node;

  /**
   * Sets the profile image of the wrapped collaboration group.
   *
   *  <p>
   *     This method <em>sets</em> the active profile image, i.e. determines which profile image that should be used.
   *     To <em>create a new</em> profile image (i.e. new binary data), you would typically use
   *     a method in {@link senselogic.sitevision.api.webresource.ImageUtil} first.
   *  </p>
   *
   *  <p>
   *     <strong>Model note!</strong> A profile image must be a Node of type <code>sv:image</code>
   *     and a child of the <em>profile images folder</em> of the wrapped collaboration group.
   *     The profile images folder is available via {@link #getProfileImagesFolder()}.
   *  </p>
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *     on the wrapped collaboration group in order to set the profile image.
   *  </p>
   * @param aProfileImage the profile image
   * @return <code>true</code> if the set operation succeeded, <code>false</code> otherwise
   * @since Sitevision 4.5.3
   */
  setProfileImage(aProfileImage: Node): boolean;

  /**
   * Alters the render Locale used by the wrapped collaboration group.
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user must have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_COLLABORATION_GROUP}
   *     on the wrapped collaboration group.
   *  </p>
   *
   *  <p>
   *     <em>
   *        Note! This method sets the Locale on the <code>sv:collaborationGroupPage</code> where the wrapped collaboration group resides.
   *        Mutation of Locale will fail if the collaboration group page is locked.
   *     </em>
   *  </p>
   * @param aLocale the Locale, must be a supported/available Locale (as of {@link senselogic.sitevision.api.i18n.LocaleUtil#getAvailableLocales()})
   * @return true if the set operation succeeded, false otherwise
   * @since Sitevision 6.1
   */
  setLocale(aLocale: Locale): boolean;

  /**
   * Gets the wrapped collaboration group.
   *
   *  <p>
   *     <em>Note! This method is equivalent with {@link #unwrap()} if this wrapper is created with a <code>sv:collaborationGroup</code> Node.</em>
   *  </p>
   * @return the wrapped collaboration group
   * @since Sitevision 4.3
   */
  getCollaborationGroup(): Node;
};
