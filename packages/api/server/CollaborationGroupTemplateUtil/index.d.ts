import List from '../../builtins/List';
import Node from '../../builtins/Node';

interface CollaborationGroupTemplateUtil {
  getCollaborationGroupTemplateByName(
    aCollaborationGroupTemplateName: string
  ): Node;

  getCollaborationGroupTemplates(): List<Node>;
  getCollaborationGroupTemplate(): Node;
}

export default CollaborationGroupTemplateUtil;
