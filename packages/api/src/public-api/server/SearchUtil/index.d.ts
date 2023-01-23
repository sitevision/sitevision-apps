import type { SearchResult } from "../../types/senselogic/sitevision/api/search/SearchResult";

/**
 * <p>
 *    Convenience interface for querying the default index.
 * </p>
 *
 * <div style="border:1px dotted gray; padding-left:10px; padding-right:10px; padding-bottom:10px">
 *    <p>
 *       <strong>Note!</strong> This interface contains convenience methods for basic search in the default index.
 *       When more powerful search behaviour is needed - use {@link senselogic.sitevision.api.search.searcher.Searcher} instead!
 *       <em>Actually, you can always use Searcher, but not always SearchUtil</em>.
 *    </p>
 *    <p>
 *       Examples of when you <em>must</em> use {@link senselogic.sitevision.api.search.searcher.Searcher} instead is:
 *    </p>
 *    <ul>
 *       <li>
 *          You want to query <em>another index</em> (not the default index).
 *       </li>
 *       <li>
 *          You want to do multi-field querying and want to <em>specify query fields</em> (not use the default ones specified by the index).
 *       </li>
 *       <li>
 *          You want to use a <em>filter</em> to separate the "user" query and the "filter" query (which also improves performance).
 *       </li>
 *       <li>
 *          You want to <em>highlight</em> one or more fields in the search result.
 *       </li>
 *       <li>
 *          You want <em>suggestions ("did you mean")</em> in the search result.
 *       </li>
 *    </ul>
 * </div>
 *
 * <p>
 *    <strong>Query syntax note! </strong>Query strings should be expressed according to the <em>Solr query syntax</em>.
 *    The syntax is basically the
 *    <em><a href="http://lucene.apache.org/core/4_10_3/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description">
 *       Lucene query syntax</a></em>
 *    with <em><a href="http://wiki.apache.org/solr/SolrQuerySyntax#Differences_From_Lucene_Query_Parser">some minor differences</a></em>.
 *    Also note that a general recommendation is to always use the <em>prefix operators</em> (<code>+</code>/<code>-</code>) instead of the
 *    <em>boolean keywords</em> (AND/OR/NOT)
 *    to avoid unexpected behaviour. For deeper understanding, see for example
 *    <a href="https://lucidworks.com/blog/2011/12/28/why-not-and-or-and-not/">Why Not AND, OR, And NOT?</a>.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getSearchUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6_06
 * @see senselogic.sitevision.api.search.searcher.Searcher
 */
export interface SearchUtil {
  /**
   * <p>
   *    Searches the default index using the <em>multi-field</em> ("edismax") parser.
   * </p>
   *
   * <p>
   *    Here is a simple example written in server-side javascript:
   * </p>
   * <pre><code>
   * var searchUtil = request.getAttribute("sitevision.utils").getSearchUtil();
   * var result = searchUtil.search("test*", null, 0, 10);
   * if (result.hasHits()) {
   *    out.println("Approximate hit count: " + result.getApproximateCount() + "&lt;br/&gt;");
   *    var hits = result.getHits();
   *    while (hits.hasNext()) {
   *       var hit = hits.next();
   *       out.print("&lt;a href=\"" + hit.getField('uri') + "\" title=\"\"&gt;");
   *       out.print(hit.getField('title'));
   *       out.print("&lt;/a&gt;");
   *       out.println("&lt;br/&gt;");
   *    }
   * } else {
   *    out.println("No hits for query = '" + result.getQuery() + "'&lt;br/&gt;");
   * }
   * </code></pre>
   *
   * <p>
   *    <em>Note! <code>aQuery</code> will be stripped from Local params,
   *    see {@link senselogic.sitevision.api.search.query.QueryStringUtil#stripLocalParams(String)}.</em>
   * </p>
   * @param aQuery The search query according to the <em>Solr query syntax</em>
   * @param sortFields A <code>List</code> of {@link SearchSortField} objects. May be <code>null</code>.
   * @param aStartAtHit number of leading hits to be skipped
   * @param aMaxHitsToReturn maximum total number of hits to be returned
   * @return The search returns a {@link SearchResult} and is never <code>null</code>
   */
  search(
    aQuery: string,
    sortFields: unknown,
    aStartAtHit: number,
    aMaxHitsToReturn: number
  ): SearchResult;

  /**
   * <p>
   *    Searches the default index using the <em>single-field</em> ("standard") parser with a specified default field.
   * </p>
   *
   * <p>
   *    <em>Note! <code>aQuery</code> will be stripped from Local params,
   *    see {@link senselogic.sitevision.api.search.query.QueryStringUtil#stripLocalParams(String)}.</em>
   * </p>
   * @param aQuery The search query according to the <em>Solr query syntax</em>
   * @param aFieldName name of the field that should be queried
   * @param sortFields A <code>List</code> of {@link SearchSortField} objects. May be <code>null</code>.
   * @param aStartAtHit number of leading hits to be skipped
   * @param aMaxHitsToReturn maximum total number of hits to be returned
   * @return a {@link SearchResult} and is never <code>null</code>
   * @since Sitevision 2.7_06
   * @since Sitevision 3.0
   */
  search(
    aQuery: string,
    aFieldName: string,
    sortFields: unknown,
    aStartAtHit: number,
    aMaxHitsToReturn: number
  ): SearchResult;
}

declare namespace SearchUtil {}

declare var searchUtil: SearchUtil;

export default searchUtil;
