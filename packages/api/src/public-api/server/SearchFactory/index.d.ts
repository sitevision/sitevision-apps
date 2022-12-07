import ExtendedDismaxParserBuilder from "../ExtendedDismaxParserBuilder";
import FilterBuilder from "../FilterBuilder";
import HighlightBuilder from "../HighlightBuilder";
import IndexUtil from "../IndexUtil";
import IndexingUtil from "../IndexingUtil";
import SearcherBuilder from "../SearcherBuilder";
import SortBuilder from "../SortBuilder";

import SearchUtil from "../SearchUtil";
import SpellCheckBuilder from "../SpellCheckBuilder";
import StandardParserBuilder from "../StandardParserBuilder";
import QueryStringUtil from "../QueryStringUtil";
import MonitorBuilder from "../MonitorBuilder";

/**
 * Gets a ExtendedDismaxParserBuilder instance.
 * @return a ExtendedDismaxParserBuilder instance
 */
export function getExtendedDismaxParserBuilder(): ExtendedDismaxParserBuilder;

/**
 * Gets a FilterBuilder instance.
 * @return a FilterBuilder instance
 */
export function getFilterBuilder(): FilterBuilder;

/**
 * Gets a HighlightBuilder instance.
 * @return a HighlightBuilder instance
 */
export function getHighlightBuilder(): HighlightBuilder;

/**
 * Gets an IndexUtil instance.
 * @return an IndexUtil instance
 */
export function getIndexUtil(): IndexUtil;

/**
 * Gets an IndexingUtil instance.
 * @return an IndexingUtil instance
 * @since Sitevision 3.6.4
 */
export function getIndexingUtil(): IndexingUtil;

/**
 * Gets a SearcherBuilder instance.
 * @return a SearcherBuilder instance
 */
export function getSearcherBuilder(): SearcherBuilder;

/**
 * Gets a SortBuilder instance.
 * @return a SortBuilder instance
 */
export function getSortBuilder(): SortBuilder;

/**
 * Convenience method to get a SearchSortField instance.
 * @param aField name of the sortable index field
 * @param aIsAscending the sort order (true == ascending, false == descending)
 * @return a SearchSortField instance
 * @throws IllegalArgumentException if aField is null or whitespace-only
 */
export function getSearchSortField(
  aField: string,
  aIsAscending: boolean
): unknown;

/**
 * Convenience method to get a SearchUtil instance.
 *
 * <em>A SearchUtil instance can also be retrieved via the {@link senselogic.sitevision.api.Utils#getSearchUtil()}</em>
 * @return a SearchUtil instance
 */
export function getSearchUtil(): SearchUtil;

/**
 * Gets a SpellCheckBuilder instance.
 * @return a SpellCheckBuilder instance
 */
export function getSpellCheckBuilder(): SpellCheckBuilder;

/**
 * Gets a StandardParserBuilder instance.
 * @return a StandardParserBuilder instance
 */
export function getStandardParserBuilder(): StandardParserBuilder;

/**
 * Gets a QueryStringUtil instance.
 * @return a QueryStringUtil instance
 */
export function getQueryStringUtil(): QueryStringUtil;

/**
 * Gets a MonitorBuilder instance.
 * @return a MonitorBuilder instance
 * @since Sitevision 4.1
 */
export function getMonitorBuilder(): MonitorBuilder;

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
declare namespace searchFactory {
  export {
    getExtendedDismaxParserBuilder,
    getFilterBuilder,
    getHighlightBuilder,
    getIndexUtil,
    getIndexingUtil,
    getSearcherBuilder,
    getSortBuilder,
    getSearchSortField,
    getSearchUtil,
    getSpellCheckBuilder,
    getStandardParserBuilder,
    getQueryStringUtil,
    getMonitorBuilder,
  };
}

export default searchFactory;
