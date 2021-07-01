import Binary from '../../builtins/Binary';
import Calendar from '../../builtins/Calendar';
import List from '../../builtins/List';
import Node from '../../builtins/Node';

/**
* Gets a Binary property from a Node.
* @returns {Binary} the value for aPropertyName as Binary. If no property exists, null is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getBinary(aNode: Node, aPropertyName: string): Binary;

/**
* Gets a Binary property from a node with a fallback value if the property doesn't exist.
* @returns {Binary} the value for aPropertyName as Binary. If no property exists, aDefaultValue is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {Binary} aDefaultValue - fallback value if no value exists
*/
export function getBinary(aNode: Node, aPropertyName: string, aDefaultValue: Binary): Binary;

/**
* Gets a boolean property from a Node.
* @returns {boolean} the value for aPropertyName as boolean. If no property exists or it isn't compatible with a boolean,false is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getBoolean(aNode: Node, aPropertyName: string): boolean;

/**
* Gets a boolean property from a Node with a fallback value if the property doesn't exist or is incompatible with the boolean type.
* @returns {boolean} the value for aPropertyName as boolean. If no property exists or it isn't compatible with a boolean,aDefaultValue is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {boolean} aDefaultValue - fallback value if no value exists
*/
export function getBoolean(aNode: Node, aPropertyName: string, aDefaultValue: boolean): boolean;

/**
* Gets a Calendar property from a Node.
* @returns {Calendar} the value for aPropertyName as Calendar. If no property exists or it isn't a Calendar,null is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getCalendar(aNode: Node, aPropertyName: string): Calendar;

/**
* Gets a Calendar property from a Node with a fallback value if the property doesn't exist or is incompatible with the Calendar type.
* @returns {Calendar} the value for aPropertyName as Calendar. If no property exists or it isn't compatible with a Calendar,aDefaultValue is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {Calendar} aDefaultValue - fallback value if no value exists
*/
export function getCalendar(aNode: Node, aPropertyName: string, aDefaultValue: Calendar): Calendar;

/**
* Gets a double property from a Node.
* @returns {number} the double value for aPropertyName. If no property exists or it isn't compatible with a double,0.0 is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getDouble(aNode: Node, aPropertyName: string): number;

/**
* Gets a double property from a node with a fallback value if the property doesn't exist or is incompatible with the double type.
* @returns {number} the double value for aPropertyName. If no property exists or it isn't compatible with a double,aDefaultValue is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {number} aDefaultValue - fallback value if no value exists
*/
export function getDouble(aNode: Node, aPropertyName: string, aDefaultValue: number): number;

/**
* Gets a Node property from a Node if an enabling property allows it.
* @returns {Node} the value for aNodePropertyName as Node. If no property exists or it isn't a Node,null is returned.A Node will never be returned if aEnablingPropertyName doesn't exist, isn't compatible with aboolean or isn't true.
* @param {Node} aNode - the Node that has the properties
* @param {string} aEnablingPropertyName - the name of the boolean property that enables the Node denoted by aPropertyName
* @param {string} aNodePropertyName - the name of the property
*/
export function getEnabledNode(aNode: Node, aEnablingPropertyName: string, aNodePropertyName: string): Node;

/**
* Gets a Node property from a Node if an enabling property allows it, with a fallback Node value.
* @returns {Node} the value for aNodePropertyName as Node. If no property exists or it isn't a Node,aDefaultValue is returned.If aEnablingPropertyName doesn't exist, isn't compatible with a boolean or isn't true,aDefaultValue is returned.
* @param {Node} aNode - the Node that has the properties
* @param {string} aEnablingPropertyName - the name of the boolean property that enables the Node denoted by aPropertyName
* @param {string} aNodePropertyName - the name of the property
* @param {Node} aDefaultValue - fallback value if no value exists
*/
export function getEnabledNode(aNode: Node, aEnablingPropertyName: string, aNodePropertyName: string, aDefaultValue: Node): Node;

/**
* Gets a String property from a Node if an enabling boolean property allows it.
* @returns {string} the value for aStringPropertyName as String. If no property exists, null is returned.Null will always be returned if aEnablingPropertyName doesn't exist, isn't compatible with a booleanor isn't true.
* @param {Node} aNode - the Node that has the properties
* @param {string} aEnablingPropertyName - the name of the boolean property that enables the String denoted by aStringPropertyName
* @param {string} aStringPropertyName - the name of the String property
*/
export function getEnabledString(aNode: Node, aEnablingPropertyName: string, aStringPropertyName: string): string;

/**
* Gets a String property from a Node if an enabling boolean property allows it, with a fallback value.
* @returns {string} the value for aStringPropertyName as String. If no property exists, aDefaultValue is returned. aDefaultValue will always be returned if aEnablingPropertyName doesn't exist, isn't compatible with a boolean or isn't true.
* @param {Node} aNode - the Node that has the properties
* @param {string} aEnablingPropertyName - the name of the boolean property that enables the String denoted by aStringPropertyName
* @param {string} aStringPropertyName - the name of the String property
* @param {string} aDefaultValue - fallback value to return if no value exist
*/
export function getEnabledString(aNode: Node, aEnablingPropertyName: string, aStringPropertyName: string, aDefaultValue: string): string;

/**
* Gets a String property from a Node if an enabling boolean property allows it, and returns it XML escaped.
* @returns {string} the value for aStringPropertyName as a XML escaped String. If no property exists, null is returned. Null will always be returned if aEnablingPropertyName doesn't exist, isn't compatible with a boolean or isn't true.
* @param {Node} aNode - the Node that has the properties
* @param {string} aEnablingPropertyName - the name of the boolean property that enables the String denoted by aStringPropertyName
* @param {string} aStringPropertyName - the name of the String property
*/
export function getEnabledStringEscaped(aNode: Node, aEnablingPropertyName: string, aStringPropertyName: string): string;

/**
* Gets a String property from a Node if an enabling boolean property allows it, and returns it XML escaped with a fallback value.
* @returns {string} the value for aStringPropertyName as a XML escaped String. If no property exists, aDefaultValue isXML escaped and returned.aDefaultValue will always be XML escaped and returned if aEnablingPropertyName doesn't exist,isn't compatible with a boolean or isn't true.
* @param {Node} aNode - the Node that has the properties
* @param {string} aEnablingPropertyName - the name of the boolean property that enables the String denoted by aStringPropertyName
* @param {string} aStringPropertyName - the name of the String property
* @param {string} aDefaultValue - the (non XML escaped) fallback value to return if no value exist
*/
export function getEnabledStringEscaped(aNode: Node, aEnablingPropertyName: string, aStringPropertyName: string, aDefaultValue: string): string;

/**
* Gets an int property from a Node.
* @returns {number} the int value for aPropertyName. If no property exists or it isn't compatible with an int, 0 is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getInt(aNode: Node, aPropertyName: string): number;

/**
* Gets an int property from a node with a fallback value if the property doesn't exist or is incompatible with the int type.
* @returns {number} the int value for aPropertyName. If no property exists or it isn't compatible with an int,aDefaultValue is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {number} aDefaultValue - fallback value if no value exists
*/
export function getInt(aNode: Node, aPropertyName: string, aDefaultValue: number): number;

/**
* Gets a Binary property from a "nested" Node's property.
* @returns {Binary} the value for aPropertyName as Binary. If no property exists or it isn't a Binary,null is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the Binary property for the "inner/nested" Node
*/
export function getNestedBinary(aNode: Node, aNodePropertyName: string, aPropertyName: string): Binary;

/**
* Gets a Binary property from a "nested" Node's property with a fallback value if the property doesn't exist.
* @returns {Binary} the value for aPropertyName as Binary. If no property exists or it isn't a Binary, aDefaultValue is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the Binary property for the "inner/nested" Node
* @param {Binary} aDefaultValue - fallback value if no value exists
*/
export function getNestedBinary(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: Binary): Binary;

/**
* Gets a boolean property from a "nested" Node's property.
* @returns {boolean} the value for aPropertyName as boolean. If no property exists or it isn't compatible with a boolean,false is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
*/
export function getNestedBoolean(aNode: Node, aNodePropertyName: string, aPropertyName: string): boolean;

/**
* Gets a boolean property from a "nested" Node's property with a fallback value if the property doesn't exist or is incompatible
 with the boolean type.
* @returns {boolean} the value for aPropertyName as boolean. If no property exists or it isn't compatible with a boolean, aDefaultValue is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
* @param {boolean} aDefaultValue - fallback value if no value exists
*/
export function getNestedBoolean(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: boolean): boolean;

/**
* Gets a Calendar property from a "nested" Node's property.
* @returns {Calendar} the value for aPropertyName as Calendar. If no property exists or it isn't a Calendar,null is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the Calendar property for the "inner/nested" Node
*/
export function getNestedCalendar(aNode: Node, aNodePropertyName: string, aPropertyName: string): Calendar;

/**
* Gets a Calendar property from a "nested" Node's property with a fallback value if the property doesn't exist.
* @returns {Calendar} the value for aPropertyName as Calendar. If no property exists or it isn't a Calendar,aDefaultValue is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the Calendar property for the "inner/nested" Node
* @param {Calendar} aDefaultValue - fallback value if no value exists
*/
export function getNestedCalendar(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: Calendar): Calendar;

/**
* Gets a double property from a "nested" Node's property.
* @returns {number} the value for aPropertyName as double. If no property exists or it isn't compatible with a double,0.0 is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
*/
export function getNestedDouble(aNode: Node, aNodePropertyName: string, aPropertyName: string): number;

/**
* Gets a double property from a "nested" Node's property with a fallback value if the property doesn't exist or is incompatible
 with the double type.
* @returns {number} the value for aPropertyName as double. If no property exists or it isn't compatible with a double, aDefaultValue is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
* @param {number} aDefaultValue - fallback value if no value exists
*/
export function getNestedDouble(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: number): number;

/**
* Gets an int property from a "nested" Node's property.
* @returns {number} the value for aPropertyName as int. If no property exists or it isn't compatible with an int, 0 is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
*/
export function getNestedInt(aNode: Node, aNodePropertyName: string, aPropertyName: string): number;

/**
* Gets an int property from a "nested" Node's property with a fallback value if the property doesn't exist or is incompatible with the int type.
* @returns {number} the value for aPropertyName as int. If no property exists or it isn't compatible with an int,aDefaultValue is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
* @param {number} aDefaultValue - fallback value if no value exists
*/
export function getNestedInt(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: number): number;

/**
* Gets a Node property from a "nested" Node's property.
* @returns {Node} the value for aPropertyName as Node. If no property exists or it isn't a Node, null is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
*/
export function getNestedNode(aNode: Node, aNodePropertyName: string, aPropertyName: string): Node;

/**
* Gets a Node property from a "nested" Node's property with a fallback value if the property doesn't exist.
* @returns {Node} the value for aPropertyName as Node. If no property exists or it isn't a Node, aDefaultValue is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
* @param {Node} aDefaultValue - fallback value if no value exists
*/
export function getNestedNode(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: Node): Node;

/**
* Gets a String property from a "nested" Node's property.
* @returns {string} the value for aPropertyName as String. If no property exists, null is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
*/
export function getNestedString(aNode: Node, aNodePropertyName: string, aPropertyName: string): string;

/**
* Gets a String property from a "nested" Node's property with a fallback value if the property doesn't exist.
* @returns {string} the value for aPropertyName as String. If no property exists, aDefaultValue is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
* @param {string} aDefaultValue - fallback value if no value exists
*/
export function getNestedString(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: string): string;

/**
* Gets a String property from a "nested" Node's property and returns it XML escaped.
* @returns {string} the value for aPropertyName as an XML escaped String. If no property exists, null is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
*/
export function getNestedStringEscaped(aNode: Node, aNodePropertyName: string, aPropertyName: string): string;

/**
* Gets a String property from a "nested" Node's property with a fallback value if the property doesn't exist, and returns it XML escaped.
* @returns {string} the value for aPropertyName as an XML escaped String. If no property exists, aDefaultValue is XML escaped and returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
* @param {string} aDefaultValue - a (non XML escaped) fallback value if no value exists
*/
export function getNestedStringEscaped(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: string): string;

/**
* Gets a List of property values from a "nested" Node's property.
* @returns {List<string>} the string value(s) for aPropertyName as a List. If no property exists, null is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
*/
export function getNestedStrings(aNode: Node, aNodePropertyName: string, aPropertyName: string): List<string>;

/**
* Gets a List of property values from a "nested" Node's property with a fallback value if the property doesn't exist.
* @returns {List<string>} the string value(s) for aPropertyName as a List. If no property exists, aDefaultValue is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
* @param {List<string>} aDefaultValue - fallback value if no value exists
*/
export function getNestedStrings(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: List<string>): List<string>;

/**
* Gets a List of XML escaped property values from a "nested" Node's property.
* @returns {List<string>} the string value(s) for aPropertyName as a List. If no property exists, null is returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
*/
export function getNestedStringsEscaped(aNode: Node, aNodePropertyName: string, aPropertyName: string): List<string>;

/**
* Gets a List of property values from a "nested" Node's property with a fallback value if the property doesn't exist,
 and returns it XML escaped.
* @returns {List<string>} the string value(s) for aPropertyName as a List. If no property exists, aDefaultValueis XML escaped and returned.
* @param {Node} aNode - the base Node that has a property that is a Node
* @param {string} aNodePropertyName - the name of the "inner/nested" Node that is a property on aNode
* @param {string} aPropertyName - the name of the property for the "inner/nested" Node
* @param {List<string>} aDefaultValue - fallback list if no value exists. Note! The actual fallback list is never returned,
* but it's values might be used. If the fallback list are about to be returned, a copy of it will be created and all values from the fallback list will
* be XML escaped and added to the new list before it is returned.
*/
export function getNestedStringsEscaped(aNode: Node, aNodePropertyName: string, aPropertyName: string, aDefaultValue: List<string>): List<string>;

/**
* Gets a Node property from a Node.
* @returns {Node} the value for aPropertyName as Node. If no property exists or it isn't a Node, null is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getNode(aNode: Node, aPropertyName: string): Node;

/**
* Gets a Node property from a Node with a fallback value if the property doesn't exist.
* @returns {Node} the value for aPropertyName as Node. If no property exists or it isn't a Node, aDefaultValue is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {Node} aDefaultValue - fallback value if no value exists
*/
export function getNode(aNode: Node, aPropertyName: string, aDefaultValue: Node): Node;

/**
* Gets a String property from a Node.
* @returns {string} the value for aPropertyName as String. If no property exists, null is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getString(aNode: Node, aPropertyName: string): string;

/**
* Gets a String property from a node with a fallback value if the property doesn't exist.
* @returns {string} the value for aPropertyName as String. If no property exists, aDefaultValue is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {string} aDefaultValue - fallback value if no value exists
*/
export function getString(aNode: Node, aPropertyName: string, aDefaultValue: string): string;

/**
* Gets a String property from a Node and returns it XML escaped.
* @returns {string} the value for aPropertyName as an XML escaped String. If no property exists, null is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getStringEscaped(aNode: Node, aPropertyName: string): string;

/**
* Gets a String property from a Node, with a fallback value, and returns it XML escaped.
* @returns {string} the value for aPropertyName as an XML escaped String. If no property exists, aDefaultValue is XML escaped and returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {string} aDefaultValue - a (non XML escaped) fallback value if no value exists
*/
export function getStringEscaped(aNode: Node, aPropertyName: string, aDefaultValue: string): string;

/**
* Gets a List of property values from a Node.
* @returns {List<string>} the string value(s) for aPropertyName as a List. If no property exists, null is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getStrings(aNode: Node, aPropertyName: string): List<string>;

/**
* Gets a List of property values from a Node with a fallback value if the property doesn't exist.
* @returns {List<string>} the string value(s) for aPropertyName as a List. If no property exists, aDefaultValue is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {List<string>} aDefaultValue - fallback value if no value exists
*/
export function getStrings(aNode: Node, aPropertyName: string, aDefaultValue: List<string>): List<string>;

/**
* Gets a List of XML escaped property values from a Node.
* @returns {List<string>} the string value(s) for aPropertyName, XML escaped and embedded in a List.If no property exists, null is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
*/
export function getStringsEscaped(aNode: Node, aPropertyName: string): List<string>;

/**
* Gets a List of XML escaped property values from a Node with a fallback value if the property doesn't exist.
* @returns {List<string>} the string value(s) for aPropertyName, XML escaped and embedded in a List.If no property exists, aDefaultValue is returned.
* @param {Node} aNode - the Node that has a property
* @param {string} aPropertyName - the name of the property
* @param {List<string>} aDefaultValue - fallback list if no value exists. Note! The actual fallback list is never returned
* but it's values might be used. If the fallback list are about to be returned, a copy of it will be created and
* all values from the fallback list will be XML escaped and added to the new list before it is returned.
*/
export function getStringsEscaped(aNode: Node, aPropertyName: string, aDefaultValue: List<string>): List<string>;

declare namespace propertyUtil {
  export {
    getBinary,
    getBoolean,
    getCalendar,
    getDouble,
    getEnabledNode,
    getEnabledString,
    getEnabledStringEscaped,
    getInt,
    getNestedBinary,
    getNestedBoolean,
    getNestedCalendar,
    getNestedDouble,
    getNestedInt,
    getNestedNode,
    getNestedString,
    getNestedStringEscaped,
    getNestedStrings,
    getNestedStringsEscaped,
    getNode,
    getString,
    getStringEscaped,
    getStrings,
    getStringsEscaped,
  };
}

export default propertyUtil;
