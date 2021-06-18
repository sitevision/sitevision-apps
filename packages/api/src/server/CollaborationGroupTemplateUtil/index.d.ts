import List from '../../builtins/List';
import Node from '../../builtins/Node';

export interface ICollaborationGroupTemplateUtil {
  getCollaborationGroupTemplateByName(
    aCollaborationGroupTemplateName: string
  ): Node;

  getCollaborationGroupTemplates(): List<Node>;
  getCollaborationGroupTemplate(): Node;
}

export function getCollaborationGroupTemplateByName(
  aCollaborationGroupTemplateName: string
): Node;

export function getCollaborationGroupTemplates(): List<Node>;
export function getCollaborationGroupTemplate(): Node;

declare namespace collaborationGroupTemplateUtil {
  export {
    getCollaborationGroupTemplateByName,
    getCollaborationGroupTemplates,
    getCollaborationGroupTemplate,
  };
}

export default collaborationGroupTemplateUtil;
