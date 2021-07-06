import Locale from '../../builtins/Locale';
import Node from '../../builtins/Node';
import CollaborationGroupState from '../CollaborationGroupState';
import CollaborationGroupType from '../CollaborationGroupType';

export interface ICollaborationGroupWrapper {
  /**
  * Adds a user identity as admin of the wrapped collaboration group.
  * @returns {boolean} true if aUserIdentity was added as admin of the wrapped group, false otherwise.false is always returned if aUserIdentity is null or already is admin of thewrapped collaboration group. 
  * @param {Node} aUserIdentity - a user identity (or user)
  */
  addAdmin(aUserIdentity: Node): boolean;
  /**
  * Adds a user identity as member of the wrapped collaboration group.
  * @returns {boolean} true if aUserIdentity was added as member of the wrapped group, false otherwise.false is always returned if aUserIdentity is null or already are a member (or admin) of thewrapped collaboration group. 
  * @param {Node} aUserIdentity - a user identity (or user)
  */
  addMember(aUserIdentity: Node): boolean;
  /**
  * Gets the admins of the wrapped collaboration group.
  * @returns {Set<Node>} the admins of the wrapped collaboration group. Never null. 
  */
  getAdmins(): Set<Node>;
  /**
  * Gets the wrapped collaboration group.
  * @returns {Node} the wrapped collaboration group 
  */
  getCollaborationGroup(): Node;
  /**
  * Gets the followers/eavesdroppers of the wrapped collaboration group.
  * @returns {Set<Node>} the followers of the wrapped collaboration group. Never null. 
  */
  getFollower(): Set<Node>;

  /**
  * Gets the group description of the wrapped collaboration group.
  * @returns {string} the collaboration group description 
  */
  getGroupDescription(): string;
  /**
  * Gets the collaboration group state of the wrapped collaboration group.
  * @returns {CollaborationGroupState} the collaboration group state 
  */
  getGroupState(): CollaborationGroupState;

  /**
  * Gets the collaboration group type of the wrapped collaboration group.
  * @returns {CollaborationGroupType} the collaboration group type 
  */
  getGroupType(): CollaborationGroupType;

  /**
  * Gets the members of the wrapped collaboration group.
  * @returns {Set<Node>} the members of the wrapped collaboration group. Never null. 
  */
  getMembers(): Set<Node>;

  /**
  * Gets the profile image of the wrapped collaboration group.
  * @returns {Node} the profile image or null 
  */
  getProfileImage(): Node;

  /**
  * Gets the profile images folder of the wrapped collaboration group.
  * @returns {Node} the profile images folder or null 
  */
  getProfileImagesFolder(): Node;

  /**
  * Checks if a user identity is admin of the wrapped collaboration group.
  * @returns {boolean} true if aUserIdentity is admin of the wrapped group, false otherwise 
  * @param {Node} aUserIdentity - a user identity (or user)
  */
  isAdmin(aUserIdentity: Node): boolean;

  /**
  * Checks if a user identity is a follower/eavesdropper of the wrapped collaboration group.
  * @returns {boolean} true if aUserIdentity is a follower of the wrapped group, false otherwise 
  * @param {Node} aUserIdentity - a user identity (or user)
  */
  isFollower(aUserIdentity: Node): boolean;

  /**
  * Checks if a user identity is member of the wrapped collaboration group.
  * @returns {boolean} true if aUserIdentity is member of the wrapped group, false otherwise 
  * @param {Node} aUserIdentity - a user identity (or user)
  */
  isMember(aUserIdentity: Node): boolean;

  /**
  * Removes a member from the wrapped collaboration group.
  * @returns {boolean} true if aUserIdentity was removed as member from the wrapped group, false otherwise.false is always returned if aUserIdentity is null or not a member (or admin)or last admin of the wrapped collaboration group. 
  * @param {Node} aUserIdentity - a user identity (or user)
  */
  removeMember(aUserIdentity: Node): boolean;

  /**
  * Alters the name of the wrapped collaboration group.
  * @returns {boolean} true if group could be renamed to aGroupName, false otherwise. 
  * @param {string} aGroupName - the new group name
  */
  renameGroup(aGroupName: string): boolean;

  /**
  * Sets the group description of the wrapped collaboration group.
  * @param {string} aGroupDescription - the collaboration group description
  */
  setGroupDescription(aGroupDescription: string): void;

  /**
  * Changes the collaboration group state of the wrapped collaboration group.
  * @param {CollaborationGroupState} aCollaborationGroupState - the collaboration group state
  */
  setGroupState(aCollaborationGroupState: CollaborationGroupState): void;

  /**
  * Changes the collaboration group type of the wrapped collaboration group.
  * @param {CollaborationGroupType} aCollaborationGroupType - the collaboration group type
  */
  setGroupType(aCollaborationGroupType: CollaborationGroupType): void;

  /**
  * Alters the render Locale used by the wrapped collaboration group.
  * @returns {boolean} true if the set operation succeeded, false otherwise 
  * @param {Locale} aLocale - the Locale, must be a supported/available Locale (as of LocaleUtil.getAvailableLocales())
  */
  setLocale(aLocale: Locale): void;

  /**
  * Sets the profile image of the wrapped collaboration group.
  * @returns {boolean} true if the set operation succeeded, false otherwise 
  * @param {Node} aProfileImage - the profile image
  */
  setProfileImage(aProfileImage: Node): void;
}
