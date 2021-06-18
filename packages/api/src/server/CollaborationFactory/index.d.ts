import { ICollaborationGroupFolderUtil } from '../CollaborationGroupFolderUtil';
import { ICollaborationGroupTemplateUtil } from '../CollaborationGroupTemplateUtil';
import { ICollaborationGroupUtil } from '../CollaborationGroupUtil';
import { ICollaborationGroupWrapper } from '../CollaborationGroupWrapper';

export function getCollaborationGroupFolderUtil(): ICollaborationGroupFolderUtil;
export function getCollaborationGroupTemplateUtil(): ICollaborationGroupTemplateUtil;
export function getCollaborationGroupUtil(): ICollaborationGroupUtil;
export function getCollaborationGroupWrapper(
  aCollaborationGroup: Node
): ICollaborationGroupWrapper;

declare namespace collaborationFactory {
  export {
    getCollaborationGroupFolderUtil,
    getCollaborationGroupTemplateUtil,
    getCollaborationGroupUtil,
    getCollaborationGroupWrapper,
  };
}

export default collaborationFactory;
