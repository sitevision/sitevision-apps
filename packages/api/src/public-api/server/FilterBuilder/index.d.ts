import type { Filter } from "../../types/senselogic/sitevision/api/search/searcher/component/Filter";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Adds a filter query.
 *
 * <p>
 *    <em>Solr note: this is the 'fq' param</em>
 * </p>
 *
 * <p>
 *    <strong>Query syntax note! </strong>Query strings should be expressed according to the <em>Solr query syntax</em>.
 *    The syntax is basically the <em>
 *    <a href="http://lucene.apache.org/core/4_10_3/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description">
 *    Lucene query syntax</a></em>
 *    with <em><a href="http://wiki.apache.org/solr/SolrQuerySyntax#Differences_From_Lucene_Query_Parser">some minor differences</a></em>.
 *    Also note that a general recommendation is to always use the <em>prefix operators</em> (<code>+</code>/<code>-</code>) instead of the
 *    <em>boolean keywords</em> (AND/OR/NOT) to avoid unexpected behaviour. For deeper understanding, see for example
 *    <a href="http://searchhub.org/2011/12/28/why-not-and-or-and-not/">Why Not AND, OR, And NOT?</a>.
 * </p>
 * @param aFilterQuery the filter query, a <code>null</code> or whitespace-only value will be ignored
 * @return this builder
 */
export function addFilterQuery(aFilterQuery: string): FilterBuilder;

/**
 * Removes all previously added filter queries.
 * @return this builder
 */
export function clearFilterQueries(): FilterBuilder;

/**
 * Creates a Filter component instance using currently specified state/behaviour.
 * @return a filter component
 * @throws IllegalStateException if no filter query exist
 */
export function build(): Filter;

/**
 * <p>
 *    Builder for creating a {@link senselogic.sitevision.api.search.searcher.component.Filter} component with specific behaviour.
 * </p>
 *
 * <p>
 *    FilterBuilder has one <strong>mandatory attribute</strong>:
 * </p>
 * <ul>
 *    <li>
 *       <em>filter query</em> - The query/queries. Must be non-null.
 *    </li>
 * </ul>
 *
 * <p>
 *    Using the FilterBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *    would typically use it like this:
 * </p>
 * <ol>
 *   <li>Get the FilterBuilder</li>
 *   <li>Add a filter query</li>
 *   <li>Possibly add another filter query</li>
 *   <li>...</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    When you have built a <code>Filter</code> instance, you can re-use the FilterBuilder to build more instances. Typically like:
 * </p>
 * <ol>
 *   <li>Clear the filter queries</li>
 *   <li>Add a filter query</li>
 *   <li>Possibly add another filter query</li>
 *   <li>...</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    <strong>Example of how this strategy could be implemented in Velocity:</strong>
 * </p>
 * <pre><code>
 *   <em>## Get the builder</em>
 *   #set ($searchFactory = $sitevisionUtils.searchFactory)
 *   #set ($filterBuilder = $searchFactory.FilterBuilder)
 *
 *   <em>## Create a Filter</em>
 *   #set ($nameMustStartWithAndersFilter = $filterBuilder.addFilterQuery('+name:Anders*').build())
 *
 *   <em>## Re-use the builder to create another Filter</em>
 *   #set ($nameMustContainMagnusFilter = $filterBuilder.clearFilterQueries().addFilterQuery('+name.analyzed:magnus*').build())
 * </code></pre>
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getFilterBuilder()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
declare namespace filterBuilder {
  export { addFilterQuery, clearFilterQueries, build };
}

export default filterBuilder;
