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

export function addAdmin(aUserIdentity: Node): boolean;
export function addMember(aUserIdentity: Node): boolean;
export function getAdmins(): Set<Node>;
export function getCollaborationGroup(): Node;
export function getFollower(): Set<Node>;
export function getGroupDescription(): string;
export function getGroupState(): CollaborationGroupState;
export function getGroupType(): CollaborationGroupType;
export function getMembers(): Set<Node>;
export function getProfileImage(): Node;
export function getProfileImagesFolder(): Node;
export function isAdmin(aUserIdentity: Node): boolean;
export function isFollower(aUserIdentity: Node): boolean;
export function isMember(aUserIdentity: Node): boolean;
export function removeMember(aUserIdentity: Node): boolean;
export function renameGroup(aGroupName: string): boolean;
export function setGroupDescription(aGroupDescription: string): void;
export function setGroupState(
  aCollaborationGroupState: CollaborationGroupState
): void;
export function setGroupType(
  aCollaborationGroupType: CollaborationGroupType
): void;
export function setLocale(aLocale: Locale): void;
export function setProfileImage(aProfileImage: Node): void;

declare namespace collaborationGroupWrapper {
  export {
    addAdmin,
    addMember,
    getAdmins,
    getCollaborationGroup,
    getFollower,
    getGroupDescription,
    getGroupState,
    getGroupType,
    getMembers,
    getProfileImage,
    getProfileImagesFolder,
    isAdmin,
    isFollower,
    isMember,
    removeMember,
    renameGroup,
    setGroupDescription,
    setGroupState,
    setGroupType,
    setLocale,
    setProfileImage,
  };
}

export default collaborationGroupWrapper;
