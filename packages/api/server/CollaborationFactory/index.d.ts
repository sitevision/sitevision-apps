import { ICollaborationGroupFolderUtil } from '../CollaborationGroupFolderUtil';
import { ICollaborationGroupTemplateUtil } from '../CollaborationGroupTemplateUtil';
import { ICollaborationGroupUtil } from '../CollaborationGroupUtil';
import { ICollaborationGroupWrapper } from '../CollaborationGroupWrapper';

declare namespace collaborationFactory {
  function getCollaborationGroupFolderUtil(): ICollaborationGroupFolderUtil;
  function getCollaborationGroupTemplateUtil(): ICollaborationGroupTemplateUtil;
  function getCollaborationGroupUtil(): ICollaborationGroupUtil;
  function getCollaborationGroupWrapper(
    aCollaborationGroup: Node
  ): ICollaborationGroupWrapper;
}

export default collaborationFactory;
