import Set from '../../builtins/Set';

export interface UserIdentityWrapper {
  /**
   * Adds a contact for the wrapped user identity.
   * @param {Node} aUserIdentity - the user identity (or user) that should be added as contact for the wrapped user identity
   * @returns {boolean} true if aUserIdentity was added as contact for the wrapped user identity, false otherwise 
   */
  addContact(aUserIdentity: Node): boolean;

  /**
   * The wrapped user identity follows/eavesdrops a collaboration group.
   * @param {Node} aCollaborationGroup - the collaboration group (or collaboration group page) to follow
   * @returns {boolean} true if the follow operation succeeded, false otherwise 
   */
  followGroup(aCollaborationGroup: Node): boolean;

  /**
   * Gets the collaboration groups of the wrapped user identity.
   * @returns {Set<Node>} the accessible collaboration groups of the wrapped user identity. Never null. 
   */
  getCollaborationGroups(): Set<Node>;

  /**
   * Gets the contacts of the wrapped user identity.
   * @returns {Set<Node>} the contacts of the wrapped user identity. Never null. 
   */
  getContacts(): Set<Node>;

  /**
   * Gets the collaboration groups the wrapped user identity follows/eavesdrops.
   * @returns {Set<Node>} the accessible collaboration groups the wrapped user identity follows. Never null. 
   */
  getFollowedGroups(): Set<Node>;

  /**
   * Gets the profile image of the wrapped user identity.
   * @returns {Node} the profile image or null 
   */
  getProfileImage(): Node;

  /**
   * Gets the profile images folder of the wrapped user identity.
   * @returns {Node} the profile images folder or null 
   */
  getProfileImagesFolder(): Node;

  /**
   * Gets the wrapped user identity.
   * @returns {Node} the wrapped user identity 
   */
  getUserIdentity(): Node;

  /**
   * Checks if wrapped user identity is admin of a collaboration group.
   * @param {Node} aCollaborationGroup - the collaboration group (or collaboration group page) to check
   * @returns {boolean} true if the wrapped user identity is admin of aCollaborationGroup, false otherwise 
   */
  isAdminOf(aCollaborationGroup: Node): boolean;

  /**
   * Checks if the wrapped user identity is contact with a specified user identity.
   * @param {Node} aUserIdentity - the user identity to check
   * @returns {boolean} true if aUserIdentity is a contact of the wrapped user identity, false otherwise 
   */
  isContact(aUserIdentity: Node): boolean;

  /**
   * Checks if the wrapped user identity is disabled or not.
   * @returns {boolean} true if the wrapped user identity is disabled, false if not 
   */
  isDisabled(): boolean;

  /**
   * Checks if wrapped user identity is following/eavesdropping a collaboration group.
   * @param {Node} aCollaborationGroup - the collaboration group (or collaboration group page) to check
   * @returns {boolean} true if the wrapped user identity is following aCollaborationGroup, false otherwise 
   */
  isFollowing(aCollaborationGroup: Node): boolean;

  /**
   * Checks if wrapped user identity is member of a collaboration group.
   * @param {Node} aCollaborationGroup - the collaboration group (or collaboration group page) to check
   * @returns {boolean} true if the wrapped user identity is member of aCollaborationGroup, false otherwise 
   */
  isMemberOf(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity joins a collaboration group.
   * @param {Node} aCollaborationGroup - the collaboration group (or collaboration group page) to join
   * @returns {boolean} true if the join operation succeeded, false otherwise 
   */
  joinGroup(aCollaborationGroup: Node): boolean;

  /**
   * The wrapped user identity leaves a collaboration group.
   * @param {Node} aCollaborationGroup - the collaboration group (or collaboration group page) to leave
   * @returns {boolean} true if the leave operation succeeded, false otherwise 
   */
  leaveGroup(aCollaborationGroup: Node): boolean;

  /**
   * Removes a contact of the wrapped user identity.
   * @param {Node} aUserIdentity - the user identity (or user) that should be added as contact for the wrapped user identity
   * @returns {boolean} true if aUserIdentity was added as contact for the wrapped user identity, false otherwise 
   */
  removeContact(aUserIdentity: Node): boolean;

  /**
   * Sets the availability of the wrapped user identity.
   * @param {boolean} aDisabled - true if the wrapped user identity should be disabled, false otherwise
   * @returns {boolean} true if the set operation succeeded, false otherwise 
   */
  setDisabled(aDisabled: boolean): boolean;

  /**
   * Sets the visibility of the wrapped user identity in search results.
   * @param {boolean} aHidden - true if the wrapped user identity should be hidden, false otherwise
   * @returns {boolean} true if the set operation succeeded, false otherwise 
   */
  setHidden(aHidden: boolean): boolean;

  /**
   * Sets the profile image of the wrapped user identity.
   * @param {Node} aProfileImage - the profile image
   * @returns {boolean} true if the set operation succeeded, false otherwise 
   */
  setProfileImage(aProfileImage: Node): boolean;

  /**
   * The wrapped user identity stops following/eavesdropping a collaboration group.
   * @param {Node} aCollaborationGroup - the collaboration group (or collaboration group page) to stop following
   * @returns {boolean} true if the unfollow operation succeeded, false otherwise 
   */
  unfollowGroup(aCollaborationGroup: Node): boolean;
}


