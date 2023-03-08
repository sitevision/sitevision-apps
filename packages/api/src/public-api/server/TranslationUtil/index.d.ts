import type { List } from "../../types/java/util/List";
import type { Node } from "../../types/javax/jcr/Node";

import type { Map } from "../../types/java/util/Map";

/**
 * Translation utility interface.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getTranslationUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.2.1
 */
export interface TranslationUtil {
  /**
   * Gets a list of all Locales that are set up for translations on the current site.
   *
   *  <p>
   *     <em>Note! The returned List is immutable/unmodifiable,
   *     i.e. you must create a copy if you want to modify it (e.g. sort).</em>
   *  </p>
   * @return a list of all Locales that are set up for translations on the current site
   */
  getSiteTranslationLocales(): List;

  /**
   * Gets the translation mappings for a given page node.
   *
   *  <p>
   *     Each entry in the returned map depicts a <em>"translation"</em>, i.e. a localized version of the given <code>aPageNode</code>.
   *  </p>
   *  <p>
   *     <strong>Important note! The returned map is never null, but entry <em>values</em> in the map might be!</strong>
   *  </p>
   *  <ul>
   *     <li>
   *        The entry <em>key</em> (i.e. the Locale) will never be null.
   *     </li>
   *     <li>
   *        The entry <em>value</em> (i.e. the Node) will be null if current user doesn't have
   *        {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} permissions on the node.
   *     </li>
   *  </ul>
   *
   *  <p>
   *     <em>Tip!</em> If you are only interested in non-null Nodes/values in the returned map, you can use
   *     {@link senselogic.sitevision.api.node.NodeFilterUtil} to filter them out!<br>
   *        Below is a conceptual example of how it could be done in server-side JavaScript (e.g. WebApp, RESTApp, Script module).
   *  </p><pre><code>    var thePotentiallyTranslatedPageNode = ...,
   *         translationUtil = require('TranslationUtil'),
   *         nodeFilterUtil = require('NodeFilterUtil'),
   *         translationMappings,
   *         skipNullValuesFilter,
   *         filteredTranslationMappings;
   *
   *     translationMappings = translationUtil.getTranslations(thePotentiallyTranslatedPageNode, false);
   *
   *     skipNullValuesFilter = nodeFilterUtil.getNonNullFilter();
   *     filteredTranslationMappings = nodeFilterUtil.getFilteredValueMap(translationMappings, skipNullValuesFilter);</code></pre>
   *
   *  <p>
   *     Please note that determining the "<em>is this page node translated at all?</em>" state from the returned result
   *     depends on the <code>aIncludePageNode</code> value:
   *  </p>
   *  <ul>
   *     <li>
   *        If it is <code>false</code>, an empty map will be returned.
   *     </li>
   *     <li>
   *        If it is <code>true</code>, a map with one entry <em>(i.e. the <code>aPageNode</code> itself)</em> will be returned.
   *     </li>
   *  </ul>
   * @param aPageNode a page node that can be translated
   * @param aIncludePageNode whether or not to include aPageNode in the result
   * @return a Map of translation mappings
   * @since Sitevision 4.3.1
   */
  getTranslations(aPageNode: Node, aIncludePageNode: boolean): Map;

  /**
   * Gets the page node a given node is potentially translated from (the translation source).
   * @param aPageNode the page node that is translated
   * @return the page node aPageNode was translated from, or null if the page node isn't translated from another page or if current user&#xA; doesn't have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#READ} permissions on the from node.
   * @since Sitevision 4.3.1
   */
  getTranslatedFrom(aPageNode: Node): Node;

  /**
   * Sets the translated from node to the page node provided as translation node.
   *
   *  <p>
   *     <strong>Permission note!</strong> Current user must match have
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_TRANSLATIONS} and
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}
   *     on @aTranslationPageNode.
   *  </p>
   * @param aOriginalPageNode the original page node to be configured as translated from on aTranslationPageNode. It will be configured as&#xA; original in aTranslationPageNode as well if aOriginalPageNode doesn't have any original configured.
   * @param aTranslationPageNode the translation page node to be configured as translation of aOriginalPageNode
   * @return true if aTranslationPageNode could be configured as translation of aOriginalPageNode,&#xA; false otherwise.
   * @since Sitevision 4.3.2
   */
  setTranslatedFrom(
    aOriginalPageNode: Node,
    aTranslationPageNode: Node
  ): boolean;
}

declare namespace TranslationUtil {}

declare var translationUtil: TranslationUtil;

export default translationUtil;
