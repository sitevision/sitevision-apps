import ExtendedDismaxParserBuilder from "../searcher/builder/ExtendedDismaxParserBuilder";
import FilterBuilder from "../searcher/builder/FilterBuilder";
import HighlightBuilder from "../searcher/builder/HighlightBuilder";
import IndexUtil from "../index/IndexUtil";
import IndexingUtil from "../index/IndexingUtil";
import SearcherBuilder from "../searcher/builder/SearcherBuilder";
import SortBuilder from "../searcher/builder/SortBuilder";

import SearchUtil from "../SearchUtil";
import SpellCheckBuilder from "../searcher/builder/SpellCheckBuilder";
import StandardParserBuilder from "../searcher/builder/StandardParserBuilder";
import QueryStringUtil from "../query/QueryStringUtil";
import MonitorBuilder from "../searcher/builder/MonitorBuilder";

/**
 * Factory for creating search-related instances.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getSearchFactory()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */

interface SearchFactory {
  /**
   * Gets a ExtendedDismaxParserBuilder instance.
   * @return a ExtendedDismaxParserBuilder instance
   */
  getExtendedDismaxParserBuilder(): ExtendedDismaxParserBuilder;

  /**
   * Gets a FilterBuilder instance.
   * @return a FilterBuilder instance
   */
  getFilterBuilder(): FilterBuilder;

  /**
   * Gets a HighlightBuilder instance.
   * @return a HighlightBuilder instance
   */
  getHighlightBuilder(): HighlightBuilder;

  /**
   * Gets an IndexUtil instance.
   * @return an IndexUtil instance
   */
  getIndexUtil(): IndexUtil;

  /**
   * Gets an IndexingUtil instance.
   * @return an IndexingUtil instance
   * @since Sitevision 3.6.4
   */
  getIndexingUtil(): IndexingUtil;

  /**
   * Gets a SearcherBuilder instance.
   * @return a SearcherBuilder instance
   */
  getSearcherBuilder(): SearcherBuilder;

  /**
   * Gets a SortBuilder instance.
   * @return a SortBuilder instance
   */
  getSortBuilder(): SortBuilder;

  /**
   * Convenience method to get a SearchSortField instance.
   * @param aField name of the sortable index field
   * @param aIsAscending the sort order (true == ascending, false == descending)
   * @return a SearchSortField instance
   * @throws IllegalArgumentException if aField is null or whitespace-only
   */
  getSearchSortField(
    aField: java.lang.String,
    aIsAscending: boolean
  ): SearchSortField;

  /**
   * Convenience method to get a SearchUtil instance.
   *
   * <em>A SearchUtil instance can also be retrieved via the {@link senselogic.sitevision.api.Utils#getSearchUtil()}</em>
   * @return a SearchUtil instance
   */
  getSearchUtil(): SearchUtil;

  /**
   * Gets a SpellCheckBuilder instance.
   * @return a SpellCheckBuilder instance
   */
  getSpellCheckBuilder(): SpellCheckBuilder;

  /**
   * Gets a StandardParserBuilder instance.
   * @return a StandardParserBuilder instance
   */
  getStandardParserBuilder(): StandardParserBuilder;

  /**
   * Gets a QueryStringUtil instance.
   * @return a QueryStringUtil instance
   */
  getQueryStringUtil(): QueryStringUtil;

  /**
   * Gets a MonitorBuilder instance.
   * @return a MonitorBuilder instance
   * @since Sitevision 4.1
   */
  getMonitorBuilder(): MonitorBuilder;
}
