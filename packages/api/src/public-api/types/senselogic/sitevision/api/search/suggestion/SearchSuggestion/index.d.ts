import type { String } from "../../../../../../java/lang/String";

/**
 * A "Did you mean" suggestion for a search result.
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 * @see senselogic.sitevision.api.search.SearchResult#getSuggestions()
 */
export type SearchSuggestion = {
  /**
   * Number of expected hits for this suggestion
   * @return number of expected hits, or <code>-1</code> if unavailable
   */
  getCount(): number;

  /**
   * The name/expression of the suggestion
   * @return the suggestion name
   */
  getName(): string;
};
