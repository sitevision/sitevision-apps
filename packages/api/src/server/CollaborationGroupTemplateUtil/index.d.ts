import List from '../../builtins/List';
import Node from '../../builtins/Node';

export interface ICollaborationGroupTemplateUtil {
  getCollaborationGroupTemplateByName(
    aCollaborationGroupTemplateName: string
  ): Node;

  getCollaborationGroupTemplates(): List<Node>;
  getCollaborationGroupTemplate(): Node;
}

declare namespace collaborationGroupTemplateUtil {
  function getCollaborationGroupTemplateByName(
    aCollaborationGroupTemplateName: string
  ): Node;

  function getCollaborationGroupTemplates(): List<Node>;
  function getCollaborationGroupTemplate(): Node;
}

export default collaborationGroupTemplateUtil;
