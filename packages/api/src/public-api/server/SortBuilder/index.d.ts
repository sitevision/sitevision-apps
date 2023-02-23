import type { SearchSortField } from "../../types/senselogic/sitevision/api/search/SearchSortField";
import type { Sort } from "../../types/senselogic/sitevision/api/search/searcher/component/Sort";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * <p>
 *     Builder for creating a {@link senselogic.sitevision.api.search.searcher.component.Sort} component with specific behaviour.
 *  </p>
 *
 *  <p>
 *     SortBuilder has one <strong>mandatory attribute</strong>:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>sort fields</em> - The sort field(s) that should be used to sort a search result. Must be non-null.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     Using the SortBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *     would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the SortBuilder</li>
 *    <li>Create a SearchSortField</li>
 *    <li>Add the SearchSortField to the SortBuilder</li>
 *    <li>Possibly create another SearchSortField and add it to the SortBuilder</li>
 *    <li>Do build</li>
 *  </ol>
 *  <p>
 *     When you have built a <code>Sort</code> instance, you can re-use the SortBuilder to build more instances. Typically like:
 *  </p>
 *  <ol>
 *    <li>Clear the sort fields</li>
 *    <li>Create a SearchSortField and add it to the SortBuilder</li>
 *    <li>Possibly create another SearchSortField and add it to the SortBuilder</li>
 *    <li>Do build</li>
 *  </ol>
 *
 *  <p>
 *     <strong>Example of how this strategy could be implemented in sever-side Javascript:</strong>
 *  </p>
 *  <pre><code>   <em>// Get the factory and the builder</em>
 *    var searchFactory = require('SearchFactory'),
 *        sortBuilder = searchFactory.getSortBuilder(),
 *        searchSortField,
 *        updatedDescSort,
 *        nameAscSort;
 *
 *    <em>// Create a Sort</em>
 *    searchSortField = searchFactory.getSearchSortField('lastpublished', false);
 *    updatedDescSort = sortBuilder.addSortField(searchSortField).build();
 *
 *    <em>// Re-use the builder to create another Sort</em>
 *    searchSortField = searchFactory.getSearchSortField('name.sortable', true);
 *    nameAscSort = sortBuilder.clearSortFields().addSortField(searchSortField).build();
 *  </code></pre>
 *
 *  <p>
 *     <strong>Example of how this strategy could be implemented in Velocity:</strong>
 *  </p>
 *  <pre><code>   <em>## Get the factory and the builder</em>
 *    #set ($searchFactory = $sitevisionUtils.searchFactory)
 *    #set ($sortBuilder = $searchFactory.sortBuilder)
 *
 *    <em>## Create a Sort</em>
 *    #set ($searchSortField = $searchFactory.getSearchSortField('lastpublished', false))
 *    #set ($updatedDescSort = $sortBuilder.addSortField($searchSortField).build())
 *
 *    <em>## Re-use the builder to create another Sort</em>
 *    #set ($searchSortField = $searchFactory.getSearchSortField('name.sortable', true))
 *    #set ($nameAscSort = $sortBuilder.clearSortFields().addSortField($searchSortField).build())
 *  </code></pre>
 *
 *  <p>
 *     <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *     more information about Builders and how to work with them!
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.search.SearchFactory#getSortBuilder()}.
 *     See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface SortBuilder extends Builder {
  /**
   * Adds a sort field.
   * @param aSearchSortField a sort field, a <code>null</code> value is ignored
   * @return this builder
   */
  addSortField(aSearchSortField: SearchSortField): SortBuilder;

  /**
   * Removes all previously added sort fields.
   * @return this builder
   */
  clearSortFields(): SortBuilder;

  /**
   * Creates a Sort component instance using currently specified state/behaviour.
   * @return a Sort component
   * @throws IllegalStateException if no sort fields are added
   */
  build(): Sort;
}

declare namespace SortBuilder {}

declare var sortBuilder: SortBuilder;

export default sortBuilder;
