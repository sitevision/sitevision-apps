import CollaborationGroupFolderUtil from '../CollaborationGroupFolderUtil';
import CollaborationGroupTemplateUtil from '../CollaborationGroupTemplateUtil';
import CollaborationGroupUtil from '../CollaborationGroupUtil';
import CollaborationGroupWrapper from '../CollaborationGroupWrapper';

export function getCollaborationGroupFolderUtil(): CollaborationGroupFolderUtil;
export function getCollaborationGroupTemplateUtil(): CollaborationGroupTemplateUtil;
export function getCollaborationGroupUtil(): CollaborationGroupUtil;
export function getCollaborationGroupWrapper(
  aCollaborationGroup: Node
): CollaborationGroupWrapper;
