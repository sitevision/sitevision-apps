import byte from '../../builtins/byte';

/**
* Decodes a base64 encoded string (using UTF-8 encoding).
* @returns {string} aBase64EncodedString base64 decoded. Returns null if aBase64EncodedString is null or can't be decoded. 
* @param {string} aBase64EncodedString - a base64 encoded String
*/
export function base64decode(aBase64EncodedString: string): string;

/**
* Decodes a base64 encoded string to a byte array (using UTF-8 encoding).
* @returns {byte[]} aBase64EncodedString base64 decoded as byte array, using UTF-8 encoding. Returns null if aBase64EncodedString is null or can't be decoded. 
* @param {string} aBase64EncodedString - a base64 encoded String
*/
export function base64decodeToBytes(aBase64EncodedString: string): byte[];

/**
* Encodes a string using base64 encoding (using UTF-8 encoding).
* @returns {string} aString base64 encoded. Returns null if aString is null 
* @param {string} aString - a String that should be base64 encoded
*/
export function base64encode(aString: string): string;

/**
* Encodes a byte array to a base64 encoded string (using UTF-8 encoding).
* @returns {string} aBytes as base64 encoded string, using UTF-8 encoding. Returns null if aBytes is null 
* @param {byte[]} aBytes - a byte array that should be base64 encoded as string
*/
export function base64encodeToString(aBytes: byte[]): string;

/**
* Converts line breaks to xhtml <br /> elements.
* @returns {string} aString the converted string 
* @param {string} aString - a String to convert
*/
export function br(aString: string): string;

/**
* Decodes a URL safe String into its original form using the default charset.
* @returns {string} a decoded String. Returns null if aURL is null or can't be decoded. 
* @param {string} aURL - URL safe String to convert to its original form
*/
export function decodeURL(aURL: string): string;

/**
* Encodes a String into its URL safe form using the default charset.
* @returns {string} an URL safe String. Returns null if aURL is null or can't be encoded. 
* @param {string} aURL - the string to convert to a URL safe form
*/
export function encodeURL(aURL: string): string;

/**
* Escapes/encodes an identifier.
* @returns {string} a non-null prefixed and escaped string identifier 
* @param {string} aPrefix - a prefix added to the result
* @param {string} anIdentifier - a string id
*/
export function escapeIdentifier(aPrefix: string, anIdentifier: string): string;

/**
* Escapes/encodes a jcr name (property name or node name) that might contain illegal characters.
* @returns {string} aJcrName escaped/encoded 
* @param {string} aJcrName - a name that should be escaped/encoded
*/
export function escapeJcrName(aJcrName: string): string;

/**
* Escapes/encodes the characters in a String using XML entities.
* @returns {string} aString escaped 
* @param {string} aString - a String that needs to be escaped
*/
export function escapeXML(aString: string): string;

/**
* Replaces characters to their base subtitute.
* @returns {string} the base substitute for aString 
* @param {string} aString - a String that should be base substituted
*/
export function getBaseSubstitute(aString: string): string;

/**
* Unescapes/decodes a string containing HTML 4 entities to a string containing the actual Unicode characters corresponding to the entities.
* @returns {string} aString unescaped 
* @param {string} aString - a String that contains escaped html 4 entities
*/
export function unEscapeHTML4(aString: string): string;

/**
* Unescapes/decodes an escaped/encoded identifier.
* @returns {string} an unescaped non-null identifier 
* @param {string} aPrefix - a prefix that will be removed from the result
* @param {string} anIdentifier - a string id
*/
export function unEscapeIdentifier(aPrefix: string, anIdentifier: string): string;

/**
* Unescapes/decodes a jcr name (property name or node name) that might be escape/encoded.
* @returns {string} aJcrName unescaped/decoded 
* @param {string} aJcrName - a name that might be escaped/encoded
*/
export function unEscapeJcrName(aJcrName: string): string;

/**
* Unescapes/decodes a string containing basic XML entities to a string containing the actual Unicode characters corresponding to the entities.
* @returns {string} aString unescaped 
* @param {string} aString - a String that contains escaped xml entities
*/
export function unEscapeXML(aString: string): string;

declare namespace endecUtil {
  export {
    base64decode,
    base64decodeToBytes,
    base64encode,
    base64encodeToString,
    br,
    decodeURL,
    encodeURL,
    escapeIdentifier,
    escapeJcrName,
    escapeXML,
    getBaseSubstitute,
    unEscapeHTML4,
    unEscapeIdentifier,
    unEscapeJcrName,
    unEscapeXML,
  };
}

export default endecUtil;
