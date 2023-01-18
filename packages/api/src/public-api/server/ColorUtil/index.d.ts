import type Node from "../../types/javax/jcr/Node";

/**
 * Utility interface for Colors.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getColorUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 */
export interface ColorUtil {
  /**
   * Gets the color with a given name
   * @param aColorName the name of the font
   * @return the first color with name aColorName, or <code>null</code> if no color matches
   */
  getColorByName(aColorName: string): Node;

  /**
   * Gets the color with a given name with a fallback value if no color matches
   * @param aColorName the name of the font
   * @param aDefaultValue fallback value
   * @return the first color with name aColorName, or aDefaultValue if no color matches
   */
  getColorByName(aColorName: string, aDefaultValue: Node): Node;

  /**
   * Gets the color with a given html hex value (i.e. a '#' followed by 6 characters [0-9,a-f,A-F]).
   * @param aHexString the hex string value of the font (starts with a '#' and ends with 6 characters [0-9,a-f,A-F])
   * @return the first color with the corresponding hex string, or <code>null</code> if no color matches
   */
  getColorByHtmlHexValue(aHexString: string): Node;

  /**
   * Gets the color with a given html hex value (i.e. a '#' followed by 6 characters [0-9,a-f,A-F]) with a fallback value if no color matches.
   * @param aHexString the hex string value of the font (starts with a '#' and ends with 6 characters [0-9,a-f,A-F])
   * @param aDefaultValue fallback value
   * @return the first color with the corresponding hex string, or aDefaultValue if no color matches
   */
  getColorByHtmlHexValue(aHexString: string, aDefaultValue: Node): Node;
}

declare namespace ColorUtil {}

declare var colorUtil: ColorUtil;

export = colorUtil;
