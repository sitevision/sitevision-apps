import Locale from '../../builtins/Locale';
import Node from '../../builtins/Node';
import CollaborationGroupState from '../CollaborationGroupState';
import CollaborationGroupType from '../CollaborationGroupType';

interface CollaborationGroupWrapper {
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

export default CollaborationGroupWrapper;
