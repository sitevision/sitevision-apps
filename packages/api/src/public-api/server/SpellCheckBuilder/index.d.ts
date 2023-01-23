import type { SpellCheck } from "../../types/senselogic/sitevision/api/search/searcher/component/SpellCheck";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * <p>
 *    Builder for creating a {@link senselogic.sitevision.api.search.searcher.component.SpellCheck} component.
 * </p>
 *
 * <p>
 *    SpellCheckBuilder has one <em>optional</em> attribute:
 * </p>
 * <ul>
 *    <li>
 *       <em>custom spellcheck query</em> - A custom expression/query to use when extracting "did you mean" suggestions.
 *    </li>
 * </ul>
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getSpellCheckBuilder()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface SpellCheckBuilder extends Builder {
  /**
   * Sets a custom query/expression spellchecker should use when the extracting result.
   *
   * <p>
   *    The <em>display query</em> is used by {@link senselogic.sitevision.api.search.searcher.Searcher} as default spellcheck query
   *    (i.e. if no custom value is set via this method).
   * </p>
   *
   * <p>
   *    <em>Solr note: this is the 'spellcheck.q' param</em>
   * </p>
   * @param aCustomSpellCheckQuery the custom query/expression <em>(Note that a <code>null</code> or whitespace-only value will be ignored by {@link senselogic.sitevision.api.search.searcher.Searcher}).</em>
   * @return this builder
   * @since Sitevision 4.0
   */
  setCustomSpellCheckQuery(aCustomSpellCheckQuery: string): SpellCheckBuilder;

  /**
   * Creates a SpellCheck component instance.
   * @return a SpellCheck component.
   */
  build(): SpellCheck;
}

declare namespace SpellCheckBuilder {}

declare var spellCheckBuilder: SpellCheckBuilder;

export default spellCheckBuilder;
