import type { Filter } from "../../types/senselogic/sitevision/api/search/searcher/component/Filter";
import type { Highlight } from "../../types/senselogic/sitevision/api/search/searcher/component/Highlight";
import type { Node } from "../../types/javax/jcr/Node";
import type { Parser } from "../../types/senselogic/sitevision/api/search/searcher/component/Parser";
import type { Sort } from "../../types/senselogic/sitevision/api/search/searcher/component/Sort";
import type { SpellCheck } from "../../types/senselogic/sitevision/api/search/searcher/component/SpellCheck";
import type { Monitor } from "../../types/senselogic/sitevision/api/search/searcher/component/Monitor";
import type { Searcher } from "../../types/senselogic/sitevision/api/search/searcher/Searcher";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * <p>
 *    Builder for creating a {@link senselogic.sitevision.api.search.searcher.Searcher} with a specific setup of components.
 * </p>
 *
 * <p>
 *    The following components can be set. All components are optional.
 * </p>
 * <ul>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Parser}<em>
 *          - what parser should be used to handle the queries and what field/fields should be queried?
 *       </em>
 *       Default: a <em>default multi-field parser</em>.
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Filter}<em>
 *          - how should the result be limited?
 *       </em>
 *       Default: <code>null</code> (i.e. no filtering).
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.SpellCheck}<em>
 *          - should the search engine try to get suggestions (did you mean)?
 *       </em>
 *       Default: <code>null</code> (i.e. no suggestions).
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Highlight}<em>
 *          - which fields should be highlighted and how?
 *       </em>
 *       Default: <code>null</code> (i.e. no highlighting).
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Sort}<em>
 *          - how should the result be sorted?
 *       </em>
 *       Default: <code>null</code> (i.e. no sorting).
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Monitor}<em>
 *          - how should querying be monitored? (e.g. should search query logging mode be on or off?)
 *       </em>
 *       Default: <code>null</code> (i.e. no monitoring).
 *    </li>
 * </ul>
 * <p>
 *    What <em>index</em> to query can also be specified. Default is the <em>default node index</em>
 *    (i.e. the main index with pages/images/files etc.).
 * </p>
 *
 * <p>
 *    <strong>Example of how to use the SearchBuilder to create a Searcher in Velocity:</strong>
 * </p>
 * <pre><code>
 *   <em>## Get the search factory</em>
 *   #set ($searchFactory = $sitevisionUtils.searchFactory)
 *
 *   <em>## Create a Filter component</em>
 *   #set ($filterBuilder = $searchFactory.filterBuilder)
 *   #set ($filter = $filterBuilder.addFilterQuery('metadata.category:responsive').build())
 *
 *   <em>## Create a Highlight component</em>
 *   #set ($highlightBuilder = $searchFactory.highlightBuilder)
 *   #set ($highlight = $highlightBuilder.addHighlightedField('summary').build())
 *
 *   <em>## Create a Sort component</em>
 *   #set ($lastPublishedSort = $searchFactory.getSearchSortField('lastpublished', true))
 *   #set ($sortBuilder = $searchFactory.sortBuilder)
 *   #set ($sort = $sortBuilder.addSortField($lastPublishedSort).build())
 *
 *   <em>## Get the search builder</em>
 *   #set ($searcherBuilder = $searchFactory.searcherBuilder)
 *
 *   <em>## Set all components and create the Searcher</em>
 *   #set ($searcher = $searcherBuilder.setFilter($filter).setHighlight($highlight).setSort($sort).build())
 *
 *   <em>## Search and handle the result</em>
 *   #set ($searchResult = $searcher.search('example*', 10))
 *   <em>...</em>
 * </code></pre>
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getSearcherBuilder()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface SearcherBuilder extends Builder {
  /**
   * Sets the filter component.
   *
   * <p>
   *    A <code>Filter</code> instance is created via the {@link FilterBuilder#build()} method.
   * </p>
   * @param aFilter the filter component
   * @return this builder
   * @see FilterBuilder
   */
  setFilter(aFilter: Filter): SearcherBuilder;

  /**
   * Sets the highlight component.
   *
   * <p>
   *    A <code>Highlight</code> instance is created via the {@link HighlightBuilder#build()} method.
   * </p>
   * @param aHighlight the highlight component
   * @return this builder
   * @see HighlightBuilder
   */
  setHighlight(aHighlight: Highlight): SearcherBuilder;

  /**
   * Sets the index to search in.
   *
   * <p>
   *    <strong>Note!</strong> If no index is set, the <code>Searcher</code> that is constructed will use
   *    the <em>default node index</em> (i.e. the main index with pages/images/files etc.).
   * </p>
   *
   * <p>
   *    <strong>Tip!</strong> Use the {@link senselogic.sitevision.api.search.index.IndexUtil} utility to get an index.
   * </p>
   * @param anIndex the index
   * @return this builder
   * @throws IllegalArgumentException if <code>anIndex</code> isn't an index node (primary node type name should be <code>sv:nodeIndex</code> or <code>sv:applicationIndex</code>)
   */
  setIndex(anIndex: Node): SearcherBuilder;

  /**
   * Sets the parser component.
   *
   * <p>
   *    A <code>Parser</code> instance is created via the {@link ExtendedDismaxParserBuilder#build()} method
   *    or the {@link StandardParserBuilder#build()} method.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> If no Parser is set, the <code>Searcher</code> that is constructed will use a <em>default multi-field
   *    parser</em> (that can be constructed via {@link ExtendedDismaxParserBuilder}).
   * </p>
   * @param aParser the parser component
   * @return this builder
   * @see ExtendedDismaxParserBuilder
   * @see StandardParserBuilder
   */
  setParser(aParser: Parser): SearcherBuilder;

  /**
   * Sets the sort component.
   *
   * <p>
   *    A <code>Sort</code> instance is created via the {@link SortBuilder#build()} method.
   * </p>
   * @param aSort the sort component
   * @return this builder
   * @see SortBuilder
   */
  setSort(aSort: Sort): SearcherBuilder;

  /**
   * Sets the spell check (suggestions/did-you-mean) component.
   *
   * <p>
   *    A <code>SpellCheck</code> instance is created via the {@link SpellCheckBuilder#build()} method.
   * </p>
   * @param aSpellCheck the spell check component
   * @return this builder
   * @see SpellCheckBuilder
   */
  setSpellCheck(aSpellCheck: SpellCheck): SearcherBuilder;

  /**
   * Sets the monitor component.
   *
   * <p>
   *    A <code>Monitor</code> instance is created via the {@link MonitorBuilder#build()} method.
   * </p>
   * @param aMonitor the monitor component
   * @return this builder
   * @see MonitorBuilder
   * @since Sitevision 4.1
   */
  setMonitor(aMonitor: Monitor): SearcherBuilder;

  /**
   * Creates a Searcher instance using currently specified components.
   * @return a Searcher instance
   */
  build(): Searcher;
}

declare namespace SearcherBuilder {}

declare var searcherBuilder: SearcherBuilder;

export default searcherBuilder;
