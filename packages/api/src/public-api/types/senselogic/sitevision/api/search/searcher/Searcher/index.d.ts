import type SearchResult from "../../SearchResult";

/**
 * <p>
 *    A searcher with highly configurable behaviour.
 * </p>
 *
 * <p>
 *    The <code>Searcher</code> is the mother of all querying and the powerful big brother of <code>SearchUtil</code>.
 *    When the basic convenience methods in {@link senselogic.sitevision.api.search.SearchUtil} doesn't fit your needs,
 *    you can always use the <code>Searcher</code> instead!
 * </p>
 *
 * <p>
 *    The behaviour of a <code>Searcher</code> is stipulated via it's assembly of <em>components</em>. The following components are available:
 * </p>
 * <ul>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Parser}<em>
 *          - what parser should be used to handle the queries and what field/fields should be queried?
 *       </em>
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Filter}<em>
 *          - how should the result be limited?
 *       </em>
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.SpellCheck}<em>
 *          - should the search engine try to get suggestions (did you mean)?
 *       </em>
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Highlight}<em>
 *          - which fields should be highlighted and how?
 *       </em>
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Sort}<em>
 *          - how should the result be sorted?
 *       </em>
 *    </li>
 *    <li>
 *       {@link senselogic.sitevision.api.search.searcher.component.Monitor}<em>
 *          - how should querying be monitored? (e.g. should search query logging mode be on or off?)
 *       </em>
 *    </li>
 * </ul>
 * <p>
 *    All components are optional and are assembled using a {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder}.
 *    When the <code>Searcher</code> is created, it <strong>can be re-used</strong> for subsequent searching.
 * </p>
 *
 * <p>
 *    <strong>Example of how to get and use a Searcher in Velocity:</strong>
 * </p>
 * <pre><code>
 *   <em>## Get the search factory</em>
 *   #set ($searchFactory = $sitevisionUtils.searchFactory)
 *
 *   <em>## Get the search builder</em>
 *   #set ($searcherBuilder = $searchFactory.searcherBuilder)
 *
 *   <em>## Configure the search builder (use component builders to create whatever components that is needed and add them)</em>
 *   <em>...</em>
 *
 *   <em>## Create the searcher</em>
 *   #set ($searcher = $searcherBuilder.build())
 *
 *   <em>## Search and handle the result</em>
 *   #set ($searchResult = $searcher.search('example*', 10))
 *   #if ($searchResult.hasHits())
 *   &lt;ol&gt;
 *       #foreach ($hit in $searchResult.hits)
 *          &lt;li&gt;<em>...</em>&lt;/li&gt;
 *       #end
 *   &lt;/ol&gt;
 *   #end
 * </code></pre>
 *
 * <p>
 *    What <em>index</em> to query can also be specified via the <code>SearcherBuilder</code>.
 *    Please note that <em>fields might differ between index</em> so if you query multiple indexes and re-use the <code>SearcherBuilder</code>,
 *    you must also re-set the components that are field-dependant (e.g. the Sort, the Highlight, the Parser
 *    if you have specified custom query fields etc.).
 * </p>
 * <p>
 *    <strong>Example of how to query two indexes using server-side JavaScript</strong><br>(i.e. search identities from the the
 *    <em>user identity index</em> and pages/files/images from the <em>node index</em>):
 * </p>
 * <pre><code>
 *   <em>// Get a search builder</em>
 *   var searcherBuilder = require('SearcherBuilder');
 *
 *   <em>// Build a 'node index' Searcher and search</em>
 *   var nodeSearcher = searcherBuilder <em>// Will use the default node index</em>
 *                         .build();
 *   var nodeResult = nodeSearcher.search('nisse', 3);
 *
 *   <em>// Build a 'user identity index' Searcher and search</em>
 *   var indexUtil = require('IndexUtil');
 *   var userIdentityIndexType = require('IndexUtil.IndexType.USER_IDENTITY');
 *   var identityResult = searcherBuilder
 *                          .setIndex(indexUtil.getDefaultIndex(userIdentityIndexType))
 *                          .build()
 *                          .search('nisse', 10);
 *
 *   <em>// Iterate results</em>
 *   var hits, hit;
 *   if (identityResult.hasHits()) {
 *      hits = identityResult.getHits();
 *      while (hits.hasNext()) {
 *         hit = hits.next();
 *         <em>// Handle hit from user identity index</em>
 *         ...
 *      }
 *   }
 *   if (nodeResult.hasHits()) {
 *      hits = nodeResult.getHits();
 *      while (hits.hasNext()) {
 *         hit = hits.next();
 *         <em>// Handle hit from node index</em>
 *         ...
 *      }
 *   }</code></pre>
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    <strong>Query syntax note! </strong>Query strings should be expressed according to the <em>Solr query syntax</em>.
 *    The syntax is basically the
 *    <em><a href="http://lucene.apache.org/core/4_10_3/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description">
 *       Lucene query syntax</a></em>
 *    with <em><a href="http://wiki.apache.org/solr/SolrQuerySyntax#Differences_From_Lucene_Query_Parser">some minor differences</a></em>.
 *    Also note that a general recommendation is to always use the <em>prefix operators</em> (<code>+</code>/<code>-</code>) instead of the
 *    <em>boolean keywords</em> (AND/OR/NOT) to avoid unexpected behaviour. For deeper understanding, see for example
 *    <a href="https://lucidworks.com/blog/2011/12/28/why-not-and-or-and-not/">Why Not AND, OR, And NOT?</a>.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder#build()}.
 *    See {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder} for how to obtain an instance
 *    of the <code>SearcherBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
type Searcher = {
  /**
   * Executes a search using the components/behaviour that was specified when the <code>Searcher</code> was created.
   *
   * <p>
   *    <em>Note! <code>aQuery</code> will be stripped from Local params,
   *    see {@link senselogic.sitevision.api.search.query.QueryStringUtil#stripLocalParams(String)}.</em>
   * </p>
   * @param aQuery the query string
   * @param aMaxHitsToReturn maximum total number of hits to be returned
   * @return the search result, never <code>null</code>
   * @throws IllegalArgumentException if <code>aQuery</code> is null or whitespace-only, if <code>aStartAtHit</code> is negative, if <code>aMaxHitsToReturn</code> is negative or zero.
   */
  search(aQuery: string, aMaxHitsToReturn: number): SearchResult;

  /**
   * Executes a search using the components/behaviour that was specified when the <code>Searcher</code> was created.
   *
   * <p>
   *    This method is typically used if you want to execute a complex query (i.e. <code>aQuery</code>), but display a
   *    more simpler one (i.e. <code>aDisplayQuery</code>) when rendering the search result.
   *    Use {@link senselogic.sitevision.api.search.SearchResult#getQuery()} to get the <code>aQuery</code> and use
   *    {@link senselogic.sitevision.api.search.SearchResult#getDisplayQuery()} to get the <code>aDisplayQuery</code>.
   * </p>
   *
   * <p>
   *    <em>Note! <code>aQuery</code> will be stripped from Local params,
   *    see {@link senselogic.sitevision.api.search.query.QueryStringUtil#stripLocalParams(String)}.</em>
   * </p>
   * @param aQuery the query string
   * @param aDisplayQuery the "human friendly" variant of the query string that can be used/retrieved when rendering the search result. Note! If <code>aDisplayQuery</code> is <code>null</code>, <code>aQuery</code> will be used as <code>aDisplayQuery</code>.
   * @param aMaxHitsToReturn maximum total number of hits to be returned
   * @return the search result, never <code>null</code>
   * @throws IllegalArgumentException if <code>aQuery</code> is null or whitespace-only, if <code>aStartAtHit</code> is negative, if <code>aMaxHitsToReturn</code> is negative or zero.
   * @since Sitevision 3.6.4
   */
  search(
    aQuery: string,
    aDisplayQuery: string,
    aMaxHitsToReturn: number
  ): SearchResult;

  /**
   * Executes a paginated search using the components/behaviour that was specified when the <code>Searcher</code> was created.
   *
   * <p>
   *    <em>Note! <code>aQuery</code> will be stripped from Local params,
   *    see {@link senselogic.sitevision.api.search.query.QueryStringUtil#stripLocalParams(String)}.</em>
   * </p>
   * @param aQuery the query string
   * @param aStartAtHit number of leading hits to be skipped
   * @param aMaxHitsToReturn maximum total number of hits to be returned
   * @return the search result, never <code>null</code>
   * @throws IllegalArgumentException if <code>aQuery</code> is null or whitespace-only, if <code>aStartAtHit</code> is negative, if <code>aMaxHitsToReturn</code> is negative or zero.
   */
  search(
    aQuery: string,
    aStartAtHit: number,
    aMaxHitsToReturn: number
  ): SearchResult;

  /**
   * Executes a paginated search using the components/behaviour that was specified when the <code>Searcher</code> was created.
   *
   * <p>
   *    This method is typically used if you want to execute a paginated complex query (i.e. <code>aQuery</code>), but display a
   *    more simpler one (i.e. <code>aDisplayQuery</code>) when rendering the search result.
   *    Use {@link senselogic.sitevision.api.search.SearchResult#getQuery()} to get the <code>aQuery</code> and use
   *    {@link senselogic.sitevision.api.search.SearchResult#getDisplayQuery()} to get the <code>aDisplayQuery</code>.
   * </p>
   *
   * <p>
   *    <em>Note! <code>aQuery</code> will be stripped from Local params,
   *    see {@link senselogic.sitevision.api.search.query.QueryStringUtil#stripLocalParams(String)}.</em>
   * </p>
   * @param aQuery the query string
   * @param aDisplayQuery the "human friendly" variant of the query string that can be used/retrieved when rendering the search result. Note! If <code>aDisplayQuery</code> is <code>null</code>, <code>aQuery</code> will be used as <code>aDisplayQuery</code>.
   * @param aStartAtHit number of leading hits to be skipped
   * @param aMaxHitsToReturn maximum total number of hits to be returned
   * @return the search result, never <code>null</code>
   * @throws IllegalArgumentException if <code>aQuery</code> is null or whitespace-only, if <code>aStartAtHit</code> is negative, if <code>aMaxHitsToReturn</code> is negative or zero.
   * @since Sitevision 3.6.4
   */
  search(
    aQuery: string,
    aDisplayQuery: string,
    aStartAtHit: number,
    aMaxHitsToReturn: number
  ): SearchResult;
};

export = Searcher;
