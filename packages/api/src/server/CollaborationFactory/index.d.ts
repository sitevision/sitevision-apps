import { ICollaborationGroupFolderUtil } from '../CollaborationGroupFolderUtil';
import { ICollaborationGroupTemplateUtil } from '../CollaborationGroupTemplateUtil';
import { ICollaborationGroupUtil } from '../CollaborationGroupUtil';
import { ICollaborationGroupWrapper } from '../CollaborationGroupWrapper';

/**
* Gets an instance of a collaboration group folder utility class
* @returns {ICollaborationGroupFolderUtil} An instance of a collaboration group folder utility class 
*/
export function getCollaborationGroupFolderUtil(): ICollaborationGroupFolderUtil;

/**
* Gets an instance of a collaboration group template utility class
* @returns {ICollaborationGroupTemplateUtil} An instance of a collaboration group template utility class 
*/
export function getCollaborationGroupTemplateUtil(): ICollaborationGroupTemplateUtil;

/**
* Gets an instance of a collaboration group utility class
* @returns {ICollaborationGroupUtil} An instance of a collaboration group utility class 
*/
export function getCollaborationGroupUtil(): ICollaborationGroupUtil;

/**
* Gets a collaboration group wrapper for a specified collaboration group.
* @returns {ICollaborationGroupWrapper} a collaboration group wrapper for aCollaborationGroup, or null if aCollaborationGroupisn't a collaboration group or if current user doesn't have PermissionUtil.Permission.READon aCollaborationGroup. 
* @param {Node} aCollaborationGroup - the collaboration group (or the collaboration group page)
*/
export function getCollaborationGroupWrapper(aCollaborationGroup: Node): ICollaborationGroupWrapper;

declare namespace collaborationFactory {
  export {
    getCollaborationGroupFolderUtil,
    getCollaborationGroupTemplateUtil,
    getCollaborationGroupUtil,
    getCollaborationGroupWrapper,
  };
}

export default collaborationFactory;
