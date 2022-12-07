import SearchHighlighter from "../SearchHighlighter";

/**
 * <p>
 *    A <code>SearchResult</code> is a container for the hits returned by a search query. The object is lazy loaded
 *    and can potentially change its state with each extracted hit (i.e. <code>next()</code> is called on the <code>Iterator&lt;SearchHit&gt;</code>).
 * </p>
 *
 * <p>
 *    <strong>Note!</strong> This object is short lived in that sense that it is invalid after a specified timespan.
 *    Make sure it's handled correspondingly (i.e. do <em>not</em> cache it).
 * </p>Search is successful.Search is unsuccessful due to a missing index.Search is unsuccessful due to an invalid search query.Search is unsuccessful due to an unexpected error.
 * @author Mikael Wikblom
 * @since Sitevision 2.6_06
 * @see #getStatus()
 * @see #getStatus()
 * @see #getStatus()
 * @see #getStatus()
 */
interface SearchResult {
  /**
   * <p>Accessor to the lazy loaded <code>Iterator</code> containing the search hits. Iterating the
   * <code>Iterator</code> potentially changes the status of the <code>SearchResult</code>object.</p>
   *
   * <p>
   *    <strong>IMPORTANT NOTE!</strong> You should only call this method <strong>once</strong>! Subsequent calls
   *    will throw an <code>IllegalStateException</code>.
   * </p>
   * @return An <code>Iterator</code> containing the <code>SearchHit</code> objects
   * @see #getStatus()
   * @see #getStatusMessage()
   * @see #iterator()
   * @throws IllegalStateException if this method is called more than once
   */
  getHits(): unknown;

  /**
   * <p>Convenience method for iterating search hits using the Java foreach loop construct.</p>
   *
   * <p>
   *    <strong>NOTE! This convenience method is just an ALIAS for the {@link #getHits()} method!<br>
   *    Restrictions and such that applies to {@link #getHits()} also applies to this method!</strong>
   * </p>
   *
   * <p>
   *    This is a convenience method for enabling iteration of search hits using the <em>foreach loop</em>:
   * </p>
   * <pre><code>
   *    SearchResult searchResult = ...
   *    for (SearchHit searchHit : searchResult) {
   *       ...
   *    }</code></pre>...so you don't have to use the <em>for loop</em> and iterate via the <code>getHits()</code> method:
   *    <pre><code><em>
   *    SearchResult searchResult = ...
   *    for (Iterator&lt;SearchHit&gt; searchHits = searchResult.getHits(); searchHits.hasNext();) {
   *       SearchHit searchHit = searchHits.next();
   *       ...
   *    }</em></code></pre>...or use the <em>while loop</em>:<pre><code><em>
   *    SearchResult searchResult = ...
   *    Iterator&lt;SearchHit&gt; searchHits = searchResult.getHits();
   *    while (searchHits.hasNext()) {
   *       SearchHit searchHit = searchHits.next();
   *       ...
   *    }</em></code></pre>
   * @return An <code>Iterator</code> containing the <code>SearchHit</code> objects
   * @see #getHits()
   * @since Sitevision 3.0.2
   */
  iterator(): unknown;

  /**
   * <p>Accessor to the exact number of hits. This operation renders the lazy loaded
   * optimization obsolete having to resolve each node to do authorization etc. The
   * value can be less than the value returned by {@link #getApproximateCount} for
   * authenticated users.</p>
   *
   * <p>
   *    <strong>Potentially a very expensive operation!</strong> To be used only when an
   *    exact count is really, REALLY needed. Normally {@link #getApproximateCount} will
   *    suffise (paging etc.).
   * </p>
   *
   * <p>
   *    <strong>Tip!</strong> If you require exact accuracy for "small" search results and accept
   *    potential inaccurate hit count for "large" results - use {@link #getEffectiveCount(int)} instead!
   * </p>
   *
   * <p>
   *    <strong>Note:</strong> If your only interest in this method is to check if the exact count is more
   *    than zero or not, you SHOULD use {@link #hasHits} instead.<br><br>In other words, this:
   * </p>
   * <pre><code>
   *    if (!mySearchResult.hasHits())
   *    {
   *       <em>// Handle no hits</em>
   *       ...
   *    }</code></pre>
   * <p>
   *    is always much, Much, MUCH preferred to this:
   * </p>
   * <pre><code>
   *    if (mySearchResult.getExactCount() == 0)
   *    {
   *       <em>// Handle no hits</em>
   *       ...
   *    }</code></pre>
   * @return The number of hits
   * @see #getApproximateCount()
   * @see #getEffectiveCount(int)
   * @see #hasHits()
   */
  getExactCount(): number;

  /**
   * <p>Whether the search result contains hits or not.</p>
   *
   * <p>
   *    This is a convenience method that enables you to check if there are any hits, without obtaining a (possibly unneeded)
   *    iterator via {@link #getHits}.
   * </p>
   * <p>
   *    In other words, this:
   * </p>
   * <pre><code>
   *    if (mySearchResult.hasHits())
   *    {
   *       <em>// Handle hits</em>
   *       Iterator&lt;SearchHit&gt; hitIterator = mySearchResult.getHits();
   *       ...
   *    }</code></pre>
   * <p>
   *    is preferred to this:
   * </p>
   * <pre><code>
   *    Iterator&lt;SearchHit&gt; hitIterator = mySearchResult.getHits();
   *    if (hitIterator.hasNext())
   *    {
   *       <em>// Handle hits</em>
   *       ...
   *    }</code></pre>
   *
   * <p>
   *    <strong>Note:</strong> This method <em>must</em> be called before iterating the hits. If you already have started iterating
   *    the hits, the result of this method is indeterminate.
   * </p>
   *
   * <p>
   *    <strong>Note:</strong> If your only interest is to check if exact count is more than zero or not, this method
   *    is much, much less expensive than calling {@link #getExactCount} and comparing the result to zero.
   * </p>
   * @return if the search result contains hits or not (or another way to put it - has an exact count higher than zero)
   * @since Sitevision 2.6.1_04
   */
  hasHits(): boolean;

  /**
   * <p>Predicts the number of hits by disregarding expensive operations like node authorization etc.
   * This value can be higher than the value returned by {@link #getExactCount} for authenticated users.</p>
   *
   * <p>
   *    <strong>Tip!</strong> If you require exact accuracy for "small" search results and accept approximate hit count for
   *    "large" results, you would typically use the {@link #getEffectiveCount(int)} method!
   * </p>
   * @return An approximation (upper bound) of the number of hits
   * @see #getEffectiveCount(int)
   * @see #getExactCount()
   */
  getApproximateCount(): number;

  /**
   * <p>Returns the <em>exact</em> hit count or the <em>approximate</em> hit count, given a specified count threshold.</p>
   *
   * <p>
   *    This method enables you to get accurate hit count for "small" search results and estimated hit count for "large" search results.
   *    A "silver bullet" method when deciding between using the potentially less performant (but exact) {@link #getExactCount()} and the
   *    well performant (but potentially inexact) {@link #getApproximateCount()}
   * </p>
   *
   * <p>
   *    <strong>An example: </strong><code>getEffectiveCount(100)</code>
   * </p>
   * <ul>
   *    <li>returns <code>exactCount</code> if the estimated hit count is <em>lower</em> than 100</li>
   *    <li>returns <code>approximateCount</code> if the estimated hit count is <em>equal or higher</em> than 100</li>
   * </ul>
   * @param aHitCountThreshold threshold for when "exact" count is less important, i.e. threshold for when to use approximate count instead of exact count.
   * @return the effective hit count
   * @see #getApproximateCount()
   * @see #getExactCount()
   * @since Sitevision 3.0
   */
  getEffectiveCount(aHitCountThreshold: number): number;

  /**
   * <p>
   *    The search query that was used to create this search result.
   * </p>
   * @return The search query used to create this <code>SearchResult</code> object
   * @see #getDisplayQuery()
   */
  getQuery(): string;

  /**
   * <p>
   *    The "human friendly" variant of the query to display in search results.
   * </p>
   * <p>
   *    Note! if no specific <em>display query</em> was specified when assembling/executing the search
   *    (see {@link senselogic.sitevision.api.search.searcher.Searcher}), this method will
   *    return same value as {@link #getQuery()}.
   * </p>
   * @return The "human friendly" variant of the search query used to create this <code>SearchResult</code> object
   * @see #getQuery()
   * @since Sitevision 3.6.4
   */
  getDisplayQuery(): string;

  /**
   * <p>The current status of the search. This value might change when iterating the
   * <code>Iterator</code> containing the {@link SearchHit} objects.</p>
   * @return The current status of the search. The value corresponds to any of the <code>STATUS</code> fields {@link #STATUS_OK}, {@link #STATUS_INDEX_NOT_AVAILABLE}, {@link #STATUS_PARSE_ERROR}, {@link #STATUS_UNEXPECTED_ERROR}
   */
  getStatus(): number;

  /**
   * <p>
   *    Accessor to a string representation of the status code.
   * </p>
   * @return A string representation of the status code, can be <code>null</code> if status is <code>STATUS_OK</code>
   * @see #getStatus()
   */
  getStatusMessage(): string;

  /**
   * Returns the facet fields for this search result.
   * @return a list of search facet fields, or <code>null</code> if there are no facet fields
   * @since Sitevision 3.0
   */
  getFacetFields(): unknown;

  /**
   * Returns suggestions for this search result.
   * @return a list of suggestions, or <code>null</code> if there are no suggestions
   * @since Sitevision 3.0
   */
  getSuggestions(): unknown;

  /**
   * Returns the custom sorts for this search result.
   * @return a list of custom sorts, or <code>null</code> if there are no custom sorts
   * @since Sitevision 3.2
   */
  getCustomSorts(): unknown;

  /**
   * <em><strong>Note! Do not use this method. This method will return a deprecated and non-functional object instance.
   * It will be completely removed in future versions of Sitevision!</strong></em>
   * @return a search highlighter, returns <code>null</code> if the search result doesn't have any hits (i.e <code>!aSearchResult.hasHits()</code>)
   * @since Sitevision 2.7_06
   * @deprecated since Sitevision 3.0
   */
  getSearchHighlighter(): SearchHighlighter;

  /**
   * <em><strong>Note! Do not use this method. It will be completely removed in future versions of Sitevision!</strong></em>
   *
   * <p>
   *    Use {@link senselogic.sitevision.api.script.ScriptUtil#getFormatPattern(java.util.Locale)}
   *    and {@link senselogic.sitevision.api.script.ScriptUtil#getDateAsString(String, java.util.Date)} instead to format dates for search hits.
   * </p>
   * @param aLocale the locale that should be used when creating the date formatter, if <code>null</code>, <code>locale.ENGLISH</code> will be used
   * @return a date formatter using the default date pattern of the Sitevision standard search portlet.
   * @since Sitevision 2.7_06
   * @deprecated since Sitevision 3.0
   */
  getDateFormatter(aLocale: unknown): unknown;
}

export default SearchResult;
