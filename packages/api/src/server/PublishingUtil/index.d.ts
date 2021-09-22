import Node from '../../builtins/Node';
import Date from '../../builtins/Date';

/**
* Publishes a node.
* @param {Node} aNode - the node that should be published. May not be null 
*/
export function publishNode(aNode: Node): void;

/**
* Schedules a node publish job for execution at a specified date.
* @param {Node} aNode - the node that should be published
* @param {Date} aDate - the publish date 
*/
export function publishNode(aNode: Node, aDate: Date): void;

/**
* Schedules a node publish job for execution at a specified date and a node unpublish job for execution at another date.
* @param {Node} aNode - the node that should be published
* @param {Date} aPublishDate - the publish date
* @param {Date} anUnpublishDate - the unpublish date 
*/
export function publishNode(aNode: Node, aPublishDate: Date, anUnpublishDate: Date): void;

/**
* Publishes a node instantly with a best before notification date.
* @param {Node} aNode - the node that should be published. Valid nodes are sv:sitePage, sv:page, sv:article and sv:template.
* @param {Date} aNotificationDate - best-before notification date. 
*/
export function publishNodeWithNotification(aNode: Node, aNotificationDate: Date): void;

/**
* Schedules a node publish job for execution at a specified date with a best before notification date.
* @param {Node} aNode - the node that should be published. Valid nodes are sv:sitePage, sv:page, sv:article and sv:template.
* @param {Date} aPublishDate - the publish date for the node.
* @param {Date} aNotificationDate - best-before notification date. 
*/
export function publishNodeWithNotification(aNode: Node, aPublishDate: Date, aNotificationDate: Date): void;

/**
* Schedules a node publish job for execution at a specified date and a node unpublish job for execution at a later date and a best before notification date.
* @param {Node} aNode - the node that should be published. Valid nodes are sv:sitePage, sv:page, sv:article and sv:template.
* @param {Date} aPublishDate - the publish date for the node.
* @param {Date} anUnpublishDate - the unpublish date for the node.
* @param {Date} aNotificationDate - best-before notification date. 
*/
export function publishNodeWithNotification(aNode: Node, aPublishDate: Date, anUnpublishDate: Date, aNotificationDate: Date): void;

/**
* Unpublishes a node.
* @param {Node} aNode - the node that should be unpublished 
*/
export function unpublishNode(aNode: Node): void;

/**
* Schedules a node unpublish job for execution at a specified date.
* @param {Node} aNode - the node that should be unpublished
* @param {Date} aDate - the unpublish date 
*/
export function unpublishNode(aNode: Node, aDate: Date): void;

declare namespace publishingUtil {
  export {
    publishNode,    
    publishNodeWithNotification,
    unpublishNode,   
  };
}

export default publishingUtil;
