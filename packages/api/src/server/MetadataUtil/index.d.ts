import Property from '../../builtins/Property';
import List from '../../builtins/List';
import LinkValueBuilder from '../LinkValueBuilder';
import RelatedValueBuilder from '../RelatedValueBuilder';

/**
* Returns a Node for a link metadata on a specified Node.
* @returns {Node} a temporary Node representing the link metadata value, or null if no link could be found. 
* @param {Node} aNode - the Node that contains the link metadata value. May not be null
* @param {string} aPropertyName - the name of the link metadata property that should be queried. May not be null
*/
export function getLinkMetadataPropertyValue(aNode: Node, aPropertyName: string): Node;

/**
* Returns a link value builder that can be used to build LinkValue instances.
* @returns {LinkValueBuilder} a link value builder. 
*/
export function getLinkValueBuilder(): LinkValueBuilder;

/**
* Returns a List containing all related metadata values for a specified Node.
* @returns {List} a List containing all related metadata values, or an empty List if no could be found. 
* @param {Node} aNode - the Node that contains the metadata value. May not be null
* @param {string} aPropertyName - the name of the metadata property that should be queried. May not be null
*/
export function getRelatedMetadataPropertyValues(aNode: Node, aPropertyName: string): List<any>;

/**
* Returns a related value builder that can be used to build RelatedValue instances.
* @returns {RelatedValueBuilder} a related value builder. 
*/
export function getRelatedValueBuilder(): RelatedValueBuilder;

/**
* Returns a boolean indicating that the metadata value on the Node is inherited from a parent node.
* @returns {boolean} a boolean indicating the inheritance 
* @param {Node} aNode - the Node that contains the metadata value. May not be null
* @param {Property} aProperty - the metadata Property that should be queried. May not be null
*/
export function isMetadataValueInherited(aNode: Node, aProperty: Property): boolean;

/**
* Returns a boolean indicating that the metadata value in a specified version on the Node is inherited from a parent node.
* @returns {boolean} a boolean indicating the inheritance 
* @param {Node} aNode - the Node that contains the metadata value. May not be null
* @param {Property} aProperty - the metadata Property that should be queried. May not be null
* @param {number} aVersion - VersionUtil.OFFLINE_VERSION or VersionUtil.ONLINE_VERSION
*/
export function isMetadataValueInherited(aNode: Node, aProperty: Property, aVersion: number): boolean;

/**
* Returns a boolean indicating that the metadata value on the Node is inherited from a parent node.
* @returns {boolean} a boolean indicating the inheritance 
* @param {Node} aNode - the Node that contains the metadata value. May not be null
* @param {string} aPropertyName - the name of the metadata property that should be queried. May not be null
*/
export function isMetadataValueInherited(aNode: Node, aPropertyName: string): boolean;

/**
* Returns a boolean indicating that the metadata value in a specified version on the Node is inherited from a parent node.
* @returns {boolean} a boolean indicating the inheritance 
* @param {Node} aNode - the Node that contains the metadata value. May not be null
* @param {string} aPropertyName - the name of the metadata property that should be queried. May not be null
* @param {number} aVersion - VersionUtil.OFFLINE_VERSION or VersionUtil.ONLINE_VERSION
*/
export function isMetadataValueInherited(aNode: Node, aPropertyName: string, aVersion: number): boolean;

/**
* Removes a metadata Property value on a Node.
* @param {Node} aNode - the Node where the metadata value should be removed. May not be null
* @param {Property} aProperty - the Property that should be removed. May not be null
*/
export function removeMetadataPropertyValue(aNode: Node, aProperty: Property): void;

/**
* Removes a metadata Property value on a Node.
* @param {Node} aNode - the Node where the metadata value should be removed. May not be null
* @param {string} aPropertyName - the name of the metadata property that should be removed. May not be null
*/
export function removeMetadataPropertyValue(aNode: Node, aPropertyName: string): void;

/**
* Set a new value to a metadata Property on a Node.
* @param {Node} aNode - the Node where the metadata value should be altered. May not be null
* @param {Property} aProperty - the Property that should be altered. May not be null
* @param {any} aValue - the new value. May not be null
*/
export function setMetadataPropertyValue(aNode: Node, aProperty: Property, aValue: any): void;

/**
* Set a new value to a metadata Property on a Node.
* @param {Node} aNode - the Node where the metadata value should be altered. May not be null
* @param {string} aPropertyName - the name of the metadata property that should be altered. May not be null
* @param {any} aValue - the new value. May not be null
*/
export function setMetadataPropertyValue(aNode: Node, aPropertyName: string, aValue: any): void;

declare namespace metadataUtil {
  export {
    getLinkMetadataPropertyValue,
    getLinkValueBuilder,
    getRelatedMetadataPropertyValues,
    getRelatedValueBuilder,
    isMetadataValueInherited,
    removeMetadataPropertyValue,
    setMetadataPropertyValue,
  }
}

export default metadataUtil;
