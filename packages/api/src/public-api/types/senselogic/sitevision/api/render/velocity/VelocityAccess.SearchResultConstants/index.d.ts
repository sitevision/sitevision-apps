/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.search.SearchResult}.
 *
 * <p>
 *    The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.search.SearchResult}
 *    constants in Velocity, e.g: <code>$searchResult.STATUS_OK</code>
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */
type SearchResultConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.search.SearchResult#STATUS_OK}.
   * @return {@link senselogic.sitevision.api.search.SearchResult#STATUS_OK}
   */
  getSTATUS_OK(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.search.SearchResult#STATUS_INDEX_NOT_AVAILABLE}.
   * @return {@link senselogic.sitevision.api.search.SearchResult#STATUS_INDEX_NOT_AVAILABLE}
   */
  getSTATUS_INDEX_NOT_AVAILABLE(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.search.SearchResult#STATUS_PARSE_ERROR}.
   * @return {@link senselogic.sitevision.api.search.SearchResult#STATUS_PARSE_ERROR}
   */
  getSTATUS_PARSE_ERROR(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.search.SearchResult#STATUS_UNEXPECTED_ERROR}.
   * @return {@link senselogic.sitevision.api.search.SearchResult#STATUS_UNEXPECTED_ERROR}
   */
  getSTATUS_UNEXPECTED_ERROR(): number;
};

export = SearchResultConstants;
