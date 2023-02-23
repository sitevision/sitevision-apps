import type { String } from "../../../../../java/lang/String";

import type { Object } from "../../../../../java/lang/Object";

/**
 * <p>
 *     <code>SearchSortField</code> describes in what way a search result will be ordered.
 *  </p>
 *
 *  <p>
 *     <em>Note!</em> Only <em>single-valued</em> fields can be used for sorting (i.e. you typically can not sort on an analyzed field).
 *  </p>
 *
 *  <p>
 *     An instance of this class can be obtained via {@link senselogic.sitevision.api.search.SearchFactory#getSearchSortField(String, boolean)}.
 *     See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 *  </p>
 *
 *  <p>
 *     <em>Example of how to get SearchSortField instances in sever-side Javascript:</em>
 *  </p>
 *  <pre><code>   <em>// Get SearchFactory to create instances</em>
 *    var searchFactory = require('SearchFactory'),
 *        lastPubDesc = searchFactory.getSearchSortField('lastpublished', false),
 *        nameAsc = searchFactory.getSearchSortField('name.sortable', true),
 *        ...</code></pre>
 *  <p>
 *     <em>Example of how to get SearchSortField instances in Velocity:</em>
 *  </p>
 *  <pre><code>   <em>## Get the factory and the builder</em>
 *    #set ($searchFactory = $sitevisionUtils.searchFactory)
 *    #set ($lastPubDesc = $searchFactory.getSearchSortField('lastpublished', false))
 *    #set ($nameAsc = $searchFactory.getSearchSortField('name.sortable', true))
 *    ...</code></pre>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1
 * @see senselogic.sitevision.api.search.searcher.builder.SortBuilder
 */
export type SearchSortField = Object & {
  /**
   * Name of the index field.
   * @return the index field name
   */
  getField(): string;

  /**
   * Whether sort order is ascending or not.
   * @return true if the sort order is ascending, false otherwise
   * @since Sitevision 5.0.1
   */
  isAscending(): boolean;

  /**
   * Whether sort order is descending or not.
   * @return true if the sort order is descending, false otherwise
   */
  isDescending(): boolean;
};
