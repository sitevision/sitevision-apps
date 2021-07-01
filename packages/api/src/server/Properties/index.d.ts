import List from '../../builtins/List';

/**
* Gets named properties from a given Node-resolvable object.
* @returns {object} the properties as a native Javascript object 
* @param {any} aJcrNodeResolvable - something that can be resolved as a Node. Typically a Node, a Node identifier or a relative URL of a Node (the URI property)
* @param {...string} aPropertyNames - the names of the properties of interest
*/
export function get(
  aJcrNodeResolvable: any,
  ...aPropertyNames: string[]
): object;

/**
* Gets escaped named properties from a given Node-resolvable object.
* @returns {object} the escaped properties as a native Javascript object 
* @param {any} aJcrNodeResolvable - something that can be resolved as a Node. Typically a Node, a Node identifier or a relative URL of a Node (the URI property)
* @param {...string} aPropertyNames - the names of the properties of interest
*/
export function getEscaped(
  aJcrNodeResolvable: any,
  ...aPropertyNames: string[]
): object;

/**
* Processes an iterable object and returns an array of named properties for each Node-resolvable object that is iterated.
* @returns {object[]} a native Javascript array with properties 
* @param {any} aIterable - something that can be resolved as a Node or something that can be iterated and contains objects that can be resolved as a Node. Typically an array, NodeIterator, SearchResult, Collection or FilterSplit (the accepted nodes will be processed)
* @param {...string} aPropertyNames - the names of the properties of interest
*/
export function getArray(
  aJcrNodeResolvable: any[],
  ...aPropertyNames: string[]
): object[];

 /**
* Processes an iterable object and returns an array of escaped named properties for each Node-resolvable object that is iterated.
* @returns {object[]} a native Javascript array with escaped properties 
* @param {any[]} aIterable - something that can be resolved as a Node or something that can be iterated and contains objects that can be resolved as a Node. Typically an array, NodeIterator, SearchResult, Collection or FilterSplit (the accepted nodes will be processed)
* @param {...string} aPropertyNames - the names of the properties of interest
*/
export function getArrayEscaped(
  aJcrNodeResolvable: any[],
  ...aPropertyNames: string[]
): object[];

declare namespace properties {
  export { get, getEscaped, getArray, getArrayEscaped };
}

export default properties;
