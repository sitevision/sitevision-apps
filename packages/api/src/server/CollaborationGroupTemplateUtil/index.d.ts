import List from '../../builtins/List';
import Node from '../../builtins/Node';

/**
* Gets the first found collaboration group template that matches a given name.
* @returns {Node} a collaboration group template, or null if indeterminable (e.g. no accessible collaboration group template named aCollaborationGroupTemplateName could be found) 
* @param {string} aCollaborationGroupTemplateName - name of the template
*/
export function getCollaborationGroupTemplateByName(aCollaborationGroupTemplateName: string): Node;

/**
* Gets all collaboration group templates.
* @returns {List<Node>} all collaboration group templates, or empty list if there are no accessible collaboration group templates. 
*/
export function getCollaborationGroupTemplates(): List<Node>;

/**
* Gets the default collaboration group template.
* @returns {Node} the default collaboration group template, or null if indeterminable 
*/
export function getDefaultCollaborationGroupTemplate(): Node;

export interface ICollaborationGroupTemplateUtil {
  /**
  * Gets the first found collaboration group template that matches a given name.
  * @returns {Node} a collaboration group template, or null if indeterminable (e.g. no accessible collaboration group template named aCollaborationGroupTemplateName could be found) 
  * @param {string} aCollaborationGroupTemplateName - name of the template
  */
  getCollaborationGroupTemplateByName(aCollaborationGroupTemplateName: string): Node;

  /**
  * Gets all collaboration group templates.
  * @returns {List<Node>} all collaboration group templates, or empty list if there are no accessible collaboration group templates. 
  */
  getCollaborationGroupTemplates(): List<Node>;

  /**
  * Gets the default collaboration group template.
  * @returns {Node} the default collaboration group template, or null if indeterminable 
  */
  getCollaborationGroupTemplate(): Node;
}

declare namespace collaborationGroupTemplateUtil {
  export {
    getCollaborationGroupTemplateByName,
    getCollaborationGroupTemplates,
    getCollaborationGroupTemplate,
  };
}

export default collaborationGroupTemplateUtil;
