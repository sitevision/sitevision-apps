import List from "../../builtins/List";
/**
* Flattens a multi-lined string to a trimmed single-line string.
* @param {string} aString - the multi-lined string
* @returns {string} a single-line trimmed string with sequential whitespace removed, or null if aString is null. 
*/
export function flatten(aString: string): string;

/**
* Gets the boolean false primitive.
* @returns {boolean} false 
*/
export function getFalse(): boolean;

/**
* Methods that returns a human presentable size with an appropriate byte-suffix (bytes/kB/MB/GB/TB).
* @param {number} aSize - a size that should be presented for humans
* @returns {string} a human presentable byte-suffixed size with two significant digits. If aSize is less than 0 or larger than 1125899906842624 (1024 TB), an empty String will be returned. 
*/
export function getHumanPresentableSize(aSize: number): string;

/**
* Methods that wraps an array in a List.
* @param {any[]} anArray - an array that needs to be wrapped
* @returns {List} a list containing the array elements. If the array is null, null is returned 
*/
export function getList(anArray: any[]): List;

/**
* Gets an object that is ensured not to be null or a whitespace only string.
* @param {string} aString - the string that might be null or whitespace only
* @returns {(string|boolean)} aString if aString is non-null and not whitespace only, Boolean.FALSE otherwise 
*/
export function getNonBlank(aString: string): string | boolean;

/**
* Gets a default value if a string is null or whitespace only.
* @param {string} aString - the string that might be null or whitespace only
* @param {any} aDefaultValue - the default value to return if aString is null or whitespace only
* @returns {(string|any)} aString if aString is non-null and not whitespace only, aDefaultValue otherwise 
*/
export function getNonBlank(aString: string, aDefaultValue: any): string | any;

/**
* Gets an object that is ensured not to be null.
* @param {any} anObject - the object that might be null
* @returns {any} anObject if non-null, Boolean.FALSE otherwise 
*/
export function getNonNull(anObject: any): any | boolean;

/**
* Gets a default value if an object is null.
* @param {any} anObject - the object that might be null
* @param {any} aDefaultValue - the default value to return if anObject is null
* @returns {any} anObject if non-null, aDefaultValue otherwise 
*/
export function getNonNull(anObject: any, aDefaultValue: any): any;

/**
* Gets the null reference.
* @returns {null} null 
*/
export function getNull(): null;

/**
* Gets the boolean true primitive.
* @returns {boolean} true 
*/
export function getTrue(): boolean;

/**
* Checks if a string is null, empty or whitespace only.
* @param {string} aString - the string to check
* @returns {boolean} true if aString is null, empty or whitespace only - false otherwise 
*/
export function isBlank(aString: string): boolean;

/**
* Checks if a string is null or empty.
* @param {string} aString - the string to check
* @returns {boolean} true if aString is null or empty, false otherwise 
*/
export function isEmpty(aString: string): boolean;

/**
* Method that returns true for values that can be interpreted as the false value.
* @param {Object} anObject - an Object that might be interpreted as a false value
* @returns {boolean} returns true if anObject is a Boolean with a false valueor a String with a "false" value, false otherwise. 
*/
export function isFalse(anObject: Object): boolean;

/**
* Checks if a string is not null, not empty and not whitespace only.
* @param {string} aString - the string to check
* @returns {boolean} true if aString is not null, not empty and not whitespace only - false otherwise 
*/
export function isNotBlank(aString: string): boolean;

/**
* Checks if a string is not null and not empty.
* @param {string} aString - the string to check
* @returns {boolean} true if aString is not null and not empty, false otherwise 
*/
export function isNotEmpty(aString: string): boolean;

/**
* Method that returns true for values that can be interpreted as the true value.
* @param {Object} anObject - an Object that might be interpreted as a true value
* @returns {boolean} returns true if anObject is a Boolean with a true valueor a String with a "true" value, false otherwise. 
*/
export function isTrue(anObject: Object): boolean;

/**
* Joins the elements of an array to a single String.
* @param {Object[]} anArray - the array that should be joined to a single string. null elements will be treated as empty ("") and for non-String elements toString() will be invoked on the element to get a string representation.
* @param {string} aSeparator - the separator that should delimit the elements of anArray in the resulting joined string. null will be treated as empty ("")
* @returns {string} the joined String. If anArray is null, null will be returned 
*/
export function joinArray(anArray: Object[], aSeparator: string): string;

/**
* Joins the items of a Collection to a single String.
* @param {Collection} aCollection - the collection that should be joined to a single string. null items will be treated as empty ("") and for non-String items toString() will be invoked on the item to get a string representation.
* @param {string} aSeparator - the separator that should delimit the items of aCollection in the resulting joined string. null will be treated as empty ("")
* @returns {string} the joined String. If aCollection is null, null will be returned 
*/
export function joinCollection(aCollection: Collection, aSeparator: string): string;

/**
* A utility method to get a formatted string based on a pattern and some pattern arguments.
* @param {string} aMessageFormatPattern - a pattern accepted by the Java MessageFormat class
* @param {List} anArguments - arguments needed by the pattern
* @returns {string} the result of the pattern evaluation or null if evaluation fails. Returns null ifaMessageFormatPattern is null or if anArguments doesn't contain any arguments. 
*/
export function messageFormat(aMessageFormatPattern: string, anArguments: List): string;

/**
* Method that converts a string to a double.
* @param {string} aString - the string to be converted
* @returns {number} aString as double. If aString is null or can't be converted, -1.0 is returned 
*/
export function stringToDouble(aString: string): number;

/**
* Method that converts a string to a float.
* @param {string} aString - the string to be converted
* @returns {number} aString as float. If aString is null or can't be converted, -1.0 is returned 
*/
export function stringToFloat(aString: string): number;

/**
* Method that converts a string to an int.
* @param {string} aString - the string to be converted
* @returns {number} aString as int. If aString is null or can't be converted, -1 is returned 
*/
export function stringToInt(aString: string): number;

/**
* Method that converts a string to a long.
* @param {string} aString - the string to be converted
* @returns {number} aString as long. If aString is null or can't be converted, -1 is returned 
*/
export function stringToLong(aString: string): number;

/**
* A utility method that can be used to prevent method invocation return values to be added to the Velocity output.
* @param {any} anObject - the object that should be "swallowed"
*/
export function swallow(anObject: any): void;

/**
* Removes leading and ending control characters (char <= 32) from a String and returns the result (empty String ("") if the string is empty or null).
* @param {string} aString - the string that should be trimmed
* @returns {string} the trimmed String. Returns empty ("") if aString is null or the trimmed String is empty. 
*/
export function trimToEmpty(aString: string): string;

/**
* Removes leading and ending control characters (char <= 32) from a String and returns the result (null if the string is empty or null).
* @param {string} aString - the string that should be trimmed
* @returns {string} the trimmed String. Returns null if aString is null or the trimmed String is empty. 
*/
export function trimToNull(aString: string): string;

declare namespace scriptUtil {
  export {
    flatten,
    getFalse,
    getHumanPresentableSize,
    getList,  
    getNonBlank,  
    getNonNull,
    getNull,
    getTrue,
    isBlank,
    isEmpty,
    isFalse,
    isNotBlank,
    isNotEmpty,
    isTrue,
    joinArray,
    joinCollection,
    messageFormat,
    stringToDouble,
    stringToFloat,
    stringToInt,
    stringToLong,
    swallow,
    trimToEmpty,
    trimToNull,
  };
}

export default scriptUtil;
