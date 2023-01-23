import type { Node } from "../../types/javax/jcr/Node";

/**
 * Utility interface for Decorations.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getDecorationUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 */
export interface DecorationUtil {
  /**
   * Gets the decoration with a given name
   * @param aDecorationName the name of the decoration
   * @return the first decoration with name aDecorationName, or <code>null</code> if no decoration matches
   */
  getDecorationByName(aDecorationName: string): Node;
}

declare namespace DecorationUtil {}

declare var decorationUtil: DecorationUtil;

export default decorationUtil;
