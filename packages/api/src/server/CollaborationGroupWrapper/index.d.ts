import Locale from '../../builtins/Locale';
import Node from '../../builtins/Node';
import CollaborationGroupState from '../CollaborationGroupState';
import CollaborationGroupType from '../CollaborationGroupType';

export interface ICollaborationGroupWrapper {
  addAdmin(aUserIdentity: Node): boolean;
  addMember(aUserIdentity: Node): boolean;
  getAdmins(): Set<Node>;
  getCollaborationGroup(): Node;
  getFollower(): Set<Node>;
  getGroupDescription(): string;
  getGroupState(): CollaborationGroupState;
  getGroupType(): CollaborationGroupType;
  getMembers(): Set<Node>;
  getProfileImage(): Node;
  getProfileImagesFolder(): Node;
  isAdmin(aUserIdentity: Node): boolean;
  isFollower(aUserIdentity: Node): boolean;
  isMember(aUserIdentity: Node): boolean;
  removeMember(aUserIdentity: Node): boolean;
  renameGroup(aGroupName: string): boolean;
  setGroupDescription(aGroupDescription: string): void;
  setGroupState(aCollaborationGroupState: CollaborationGroupState): void;
  setGroupType(aCollaborationGroupType: CollaborationGroupType): void;
  setLocale(aLocale: Locale): void;
  setProfileImage(aProfileImage: Node): void;
}

declare namespace collaborationGroupWrapper {
  function addAdmin(aUserIdentity: Node): boolean;
  function addMember(aUserIdentity: Node): boolean;
  function getAdmins(): Set<Node>;
  function getCollaborationGroup(): Node;
  function getFollower(): Set<Node>;
  function getGroupDescription(): string;
  function getGroupState(): CollaborationGroupState;
  function getGroupType(): CollaborationGroupType;
  function getMembers(): Set<Node>;
  function getProfileImage(): Node;
  function getProfileImagesFolder(): Node;
  function isAdmin(aUserIdentity: Node): boolean;
  function isFollower(aUserIdentity: Node): boolean;
  function isMember(aUserIdentity: Node): boolean;
  function removeMember(aUserIdentity: Node): boolean;
  function renameGroup(aGroupName: string): boolean;
  function setGroupDescription(aGroupDescription: string): void;
  function setGroupState(
    aCollaborationGroupState: CollaborationGroupState
  ): void;
  function setGroupType(aCollaborationGroupType: CollaborationGroupType): void;
  function setLocale(aLocale: Locale): void;
  function setProfileImage(aProfileImage: Node): void;
}

export default collaborationGroupWrapper;
