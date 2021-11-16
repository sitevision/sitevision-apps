import Node from '../../builtins/Node';

/**
 * Gets the color with a given name
 *
 * @param {string} aColorName the name of the font
 * @return {Node} the first color with name aColorName, or <code>null</code> if no color matches
 */
export function getColorByName(aColorName: string): Node;

/**
 * Gets the color with a given name with a fallback value if no color matches
 *
 * @param {string} aColorName the name of the font
 * @param {Node} aDefaultValue fallback value
 * @return {Node} the first color with name aColorName, or aDefaultValue if no color matches
 */
export function getColorByName(aColorName: string, aDefaultValue: Node): Node;

/**
 * Gets the color with a given html hex value (i.e. a '#' followed by 6 characters [0-9,a-f,A-F]).
 *
 * @param {string} aHexString the hex string value of the font (starts with a '#' and ends with 6 characters [0-9,a-f,A-F])
 * @return {Node} the first color with the corresponding hex string, or <code>null</code> if no color matches
 */
export function getColorByHtmlHexValue(aHexString: string): Node;

/**
 * Gets the color with a given html hex value (i.e. a '#' followed by 6 characters [0-9,a-f,A-F]) with a fallback value if no color matches.
 *
 * @param {string} aHexString the hex string value of the font (starts with a '#' and ends with 6 characters [0-9,a-f,A-F])
 * @param {Node} aDefaultValue fallback value
 * @return {Node} the first color with the corresponding hex string, or aDefaultValue if no color matches
 */
export function getColorByHtmlHexValue(
  aHexString: string,
  aDefaultValue: Node
): Node;

declare namespace colorUtil {
  export { getColorByName, getColorByHtmlHexValue };
}

export default colorUtil;
