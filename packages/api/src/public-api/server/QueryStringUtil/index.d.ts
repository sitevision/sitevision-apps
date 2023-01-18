/**
 * Query string utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getQueryStringUtil()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain
 *    an instance of the <code>SearchFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface QueryStringUtil {
  /**
   * The "match all" query string.
   *
   * <p>
   *    This is the special query syntax (<code>"*:*"</code>) to use when querying "everything".
   * </p>
   * <p>
   *    <em>
   *       A common misunderstanding is that a single wildcard (i.e. <code>"*"</code>) would also query "everything". That is a false assumption.
   *       A single wildcard is less efficient and it will only match docs that has data in the default query fields of the parser (i.e.
   *       a single wildcard will potentially not include "everything").
   *    </em>
   * </p>
   * @since Sitevision 8.2
   */
  MATCH_ALL_QUERY: "*:*";

  /**
   * Strips all trailing "any" chars.
   *
   * <p>
   *    The question mark character is a query syntax char (the "any" char) and can potentially screw up querying
   *    <em>(i.e. the parser fails to parse the query or return unexpected result)</em>.
   *    This method removes all trailing "any" chars (i.e. removes all trailing question marks).
   * </p>
   *
   * <table style="border:1px solid black" summary="">
   *    <caption style="text-align:left">Some examples</caption>
   *    <tr>
   *       <th>aQueryString</th><th>Returned</th>
   *    </tr>
   *    <tr>
   *       <td><code>"when is halloween"</code></td><td><code>"when is halloween"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"when is halloween?"</code></td><td><code>"when is halloween"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"when is halloween??"</code></td><td><code>"when is halloween"</code></td>
   *    </tr>
   * </table>
   * @param aQueryString the query string
   * @return aQueryString without trailing any chars or null if aQueryString is null
   * @since Sitevision 8.2
   */
  stripTrailingAnyChars(aQueryString: string): string;

  /**
   * Strips Local params for a query string.
   *
   * <p>
   *    Local params are a query string prefix that starts with "<code>{!</code>" and ends with "<code>}</code>".
   *    The Local Params can override/sidestep or affect desired search behaviour. This method strips Local params to prohibit that.
   *    Leading whitespace of Local params will also be stripped.
   * </p>
   * <table style="border:1px solid black" summary="">
   *    <caption style="text-align:left">Some examples</caption>
   *    <tr>
   *       <th>aQueryString</th><th>Returned</th>
   *    </tr>
   *    <tr>
   *       <td><code>null</code></td><td><code>null</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>""</code></td><td><code>""</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"hello query"</code></td><td><code>"hello query"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"{!}"</code></td><td><code>""</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"{!}hey"</code></td><td><code>"hey"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"{!whatever}foo"</code></td><td><code>"foo"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"{!whatever} bar"</code></td><td><code>" bar"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>" {! whatever }baz"</code></td><td><code>"baz"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"{!whatever"</code></td><td><code>"{!whatever"</code></td>
   *    </tr>
   * </table>
   * @param aQueryString the query string
   * @return aQueryString without any Local params
   * @since Sitevision 10
   */
  stripLocalParams(aQueryString: string): string;

  /**
   * Removes all query syntax characters from a query string and trims the result.
   *
   * <p>
   *    Current query syntax characters are:<br>
   *    <code>+ - &amp;&amp; || ! ( ) { } [ ] ^ " ~ * ? : \</code><br>
   * </p>
   *
   * <p>
   *    <em>Note! This is a legacy shortcut for (strict/non-lenient)
   *    {@link #removeQuerySyntaxChars(String, boolean) removeQuerySyntaxChars(aQueryString, false)}.</em>
   * </p>
   * @param aQueryString a non-null query expression
   * @return a aQueryString without syntax chars or null if aQueryString is null
   * @see #removeQuerySyntaxChars(String, boolean)
   */
  removeQuerySyntaxChars(aQueryString: string): string;

  /**
   * Removes query syntax characters from a query string and trims the result.
   *
   * <p>
   *    Current query syntax characters are:<br>
   *    <code>+ - &amp;&amp; || ! ( ) { } [ ] ^ " ~ * ? : \</code><br>
   * </p>
   * <p>
   *    Processing:
   * </p>
   * <ul>
   *    <li>
   *       The "any" char will be removed, i.e: <code>"ma?nus" -&gt; "manus"</code>
   *    </li>
   *    <li>
   *       The "double" chars will be replaced with a "single" char, i.e: <code>"ma&amp;&amp;nus" -&gt; "ma&amp;nus"</code>
   *       and <code>"ma||nus" -&gt; "ma|nus"</code>
   *    </li>
   *    <li>
   *       The "not" chars will be removed, unless <code>aLenientRemove</code> is <code>true</code>. Lenient behaviour will
   *       try to keep all dashes that can be interpreted as "word separators" <em>("bindestreck" in swedish)</em>.
   *    </li>
   *    <li>
   *       Other chars will be replaced with a space. Subsequent syntax chars will only result in one space,
   *       e.g: <code>"This is *so* funny!" -&gt; "This is so funny"</code>
   *    </li>
   * </ul>
   *
   * <table style="border:1px solid black" summary="">
   *    <caption style="text-align:left">Some examples</caption>
   *    <tr>
   *       <th>aQueryString</th><th>aLenientRemove</th><th>Returned</th>
   *    </tr>
   *    <tr>
   *       <td><code>"(Site?vision: *Enterprise) !?"</code></td><td><code>true / false</code></td><td><code>"Sitevision Enterprise"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"Anna-Karin?"</code></td><td><code>true</code></td><td><code>"Anna-Karin"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"Anna-Karin?"</code></td><td><code>false</code></td><td><code>"Anna Karin"</code></td>
   *    </tr>
   * </table>
   * @param aQueryString a non-null query expression
   * @param aLenientRemove whether or not to handle syntax chars in a lenient matter
   * @return a aQueryString without query syntax characters or null if aQueryString is null
   * @since Sitevision 8.2
   */
  removeQuerySyntaxChars(aQueryString: string, aLenientRemove: boolean): string;

  /**
   * Gets a prefix/wildcard query that potentially will be scored.
   *
   * <p>
   *    <em>The general purpose/advantage of a raw wildcard query (i.e Prefix query) is that it will result in hits also for a partial word.
   *    Typical a good thing for all "live-search/type-ahead" solutions.
   *    The downside is that the search result of such query can be a real mess since all wildcard-hits are scored exactly the same
   *    ("constant scoring"). In practice, this means that the hits of such search result can show up in random order.</em>
   * </p>
   * <p>
   *    This method returns a <em>"smart"</em> wildcard query that combines the <strong>prefix-matching advantage</strong> of a raw wildcard query
   *    with potential <strong>scoring capabilities</strong>.
   *    This is achieved by a expanding the word to multiple terms and adding the wildcard to one of them and use an implicit OR.
   *    In other words: <em>"build a query that matches the exact word or the wildcarded word"</em>.
   * </p>
   * <p>
   *    The query string <code>"Car"</code> transformed into a smart wildcard query <code>"+(Car car*)"</code>
   *    could conceptually result in a search result like this:
   * </p>
   * <ol>
   *    <li>"Car sales" <em>(exact clause match + wildcard clause match: score 1.23)</em></li>
   *    <li>"Carpets" <em>(wildcard clause match: constant scoring 1)</em></li>
   *    <li>"Careless" <em>(wildcard clause match: constant scoring 1)</em></li>
   * </ol>
   * <p>
   *    The word that is wildcarded will also be lowercased for better matching <em>(typically the query parser is primarily set up to use/query
   *    analyzed fields, i.e. typically lowercased)</em>.
   *    A word with a dash is potentially further duplicated for increased matching <em>(dash is the "any" syntax char but is handled lenient)</em>.
   *    A word that ends with a {@link #removeQuerySyntaxChars(String, boolean) syntax character} will typically not be wildcarded at all.
   *    A word that contains a syntax character will typically get a raw wildcard as-is.
   * </p>
   *
   * <table style="border:1px solid black" summary="">
   *    <caption style="text-align:left">Some examples</caption>
   *    <tr>
   *       <th>aQueryString</th><th>Returned</th>
   *    </tr>
   *    <tr>
   *       <td><code>null</code></td><td><code>null</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>" "</code></td><td><code>null</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"Car"</code></td><td><code>"+(Car car*)"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"Car*"</code></td><td><code>"+(Car car*)"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"Car?"</code></td><td><code>"Car?"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"title:Car"</code></td><td><code>"title:Car*"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"Anna-Carin"</code></td><td><code>"+(Anna-Carin AnnaCarin (+Anna +carin*) anna-carin* annacarin*)"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"019-173030"</code></td><td><code>"+(019-173030 019173030 (+019 +173030*) 019-173030* 019173030*)"</code></td>
   *    </tr>
   * </table>
   *
   * <p>
   *    The smart wildcard query <strong>downside/caveat</strong> is that the actual query is more complex. This increased complexity
   *    will typically distort the pattern matching for the Solr <em>Elevation</em> component, i.e. "elevated/sponsored" hits will typically
   *    never work for smart wildcard queries.
   * </p>
   * @param aQueryString the query string
   * @return aQueryString as a "smart" wildcard query or null if aQueryString is null or blank
   * @since Sitevision 8.2
   */
  smartWildcard(aQueryString: string): string;

  /**
   * Transforms a string with delimiters to a string that could be used in a field-grouped query expression.
   *
   * <p>
   *    This is a convenience method when you want to query something based on items in a string that are delimited
   *    by some token. A typical example is a "keyword" metadata that contains multiple keywords delimited by a comma char.
   * </p>
   *
   * <p>
   *    This method splits the <code>aStringToSplit</code> with the <code>aSplitExpression</code> and each part is
   *    then trimmed and appended to the resulting string, separated with a space. Parts that contains a space char
   *    is quoted.
   * </p>
   *
   * <table style="border:1px solid black" summary="">
   *    <caption style="text-align:left">Some examples</caption>
   *    <tr>
   *       <th style="text-align:left">aStringToSplit</th><th style="text-align:left">aSplitExpression</th><th style="text-align:left">Returned</th>
   *    </tr>
   *    <tr>
   *       <td><code>"one"</code></td><td><code>","</code></td><td><code>one</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"one,two"</code></td><td><code>","</code></td><td><code>one two</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"one, two"</code></td><td><code>","</code></td><td><code>one two</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"one, two, three four"</code></td><td><code>","</code></td><td><code>one two "three four"</code></td>
   *    </tr>
   *    <tr><td colspan="3">&nbsp;</td></tr>
   *    <tr>
   *       <td><code>"one"</code></td><td><code>"aNonMatchingExpression"</code></td><td><code>one</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"one,two"</code></td><td><code>"aNonMatchingExpression"</code></td><td><code>one,two</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"one, two"</code></td><td><code>"aNonMatchingExpression"</code></td><td><code>"one, two"</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"one, two, three four"</code></td><td><code>"aNonMatchingExpression"</code></td><td><code>"one, two, three four"</code></td>
   *    </tr>
   *    <tr><td colspan="3">&nbsp;</td></tr>
   *    <tr>
   *       <td><code>null</code></td><td><code>","</code></td><td><code>null</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>null</code></td><td><code>null</code></td><td><code>null</code></td>
   *    </tr>
   *    <tr><td colspan="3">&nbsp;</td></tr>
   *    <tr>
   *       <td><code>"one"</code></td><td><code>null</code></td><td><code>one</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"one,two"</code></td><td><code>null</code></td><td><code>one,two</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"one, two"</code></td><td><code>null</code></td><td><code>one, two</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>"one, two, three four"</code></td><td><code>null</code></td><td><code>one, two, three four</code></td>
   *    </tr>
   * </table>
   * @param aStringToSplit the string that should be transformed
   * @param aSplitExpression the regular expression to split up <code>aStringToSplit</code> in parts
   * @return the result of the operation. if <code>aStringToSplit</code> is <code>null</code>, <code>null</code> will always be returned. if <code>aSplitExpression</code> is <code>null</code>, <code>aStringToSplit</code> will always be returned. if <code>aSplitExpression</code> is a non-matching expression, a trimmed <code>aStringToSplit</code> will always be returned, and it will be quoted if <code>aStringToSplit</code> contains a space char.
   */
  splitToQueryParts(aStringToSplit: string, aSplitExpression: string): string;

  /**
   * Transforms multiple strings with delimiters to a string that could be used in a field-grouped query expression.
   *
   * <p>
   *    This is a convenience method that executes {@link #splitToQueryParts(String, String)} for a collection of strings
   *    and appends each returned value to a combined result, separated with a space. Whitespace only or <code>null</code>
   *    values will be ignored.
   * </p>
   * <p>
   *    <em>See {@link #splitToQueryParts(String, String)} how each string of the collection will be transformed.</em>
   * </p>
   * @param aStringsToSplit a collection of strings
   * @param aSplitExpression the regular expression to split up the strings in the <code>aStringsToSplit</code> collection in parts
   * @return the result of the {@link #splitToQueryParts(String, String)} operation for all strings in <code>aStringsToSplit</code>. if <code>aStringsToSplit</code> is <code>null</code> or empty, <code>null</code> will always be returned.
   * @see #splitToQueryParts(String, String)
   */
  splitCollectionToQueryParts(
    aStringsToSplit: unknown,
    aSplitExpression: string
  ): string;

  /**
   * Returns a field query that is properly grouped.
   *
   * <p>
   *    This method trims the <code>aValueExpression</code> and analyzes the space-separated parts, quoted and unquoted.
   *    The result will be a grouped field query if there are multiple parts in <code>aValueExpression</code> and a
   *    non-grouped field query if there are only one part in <code>aValueExpression</code>.
   * </p>
   * <p>
   *    Note that this is a convenience method only. Neither field or value will be syntactically checked in any way.
   *    The caller of this method is responsible for passing values that the query parser used later on will accept.
   * </p>
   *
   * <table style="border:1px solid black" summary="">
   *    <caption style="text-align:left">Some examples</caption>
   *    <tr>
   *       <th style="text-align:left">aFieldName</th>
   *       <th style="text-align:left">aValueExpression</th>
   *       <th style="text-align:left">Returned</th>
   *    </tr>
   *    <tr>
   *       <td><code>content.analyzed</code></td>
   *       <td><code>sitevision</code></td>
   *       <td><code>content.analyzed:sitevision</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>+content.analyzed</code></td>
   *       <td><code>sitevision*</code></td>
   *       <td><code>+content.analyzed:sitevision*</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>-content.analyzed</code></td>
   *       <td><code>enterprise</code></td>
   *       <td><code>-content.analyzed:enterprise</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>content.analyzed</code></td>
   *       <td><code>"sitevision enterprise"</code></td>
   *       <td><code>content.analyzed:"sitevision enterprise"</code></td>
   *    </tr>
   *    <tr><td colspan="3">&nbsp;</td></tr>
   *    <tr>
   *       <td><code>content.analyzed</code></td>
   *       <td><code>sitevision enterprise</code></td>
   *       <td><code>content.analyzed:(sitevision enterprise)</code></td>
   *    </tr>
   *    <tr>
   *       <td><code>content.analyzed</code></td>
   *       <td><code>portal "sitevision enterprise"</code></td>
   *       <td><code>content.analyzed:(portal "sitevision enterprise")</code></td>
   *    </tr>
   * </table>
   * @param aFieldName the field expression
   * @param aValueExpression the value expression
   * @return a properly grouped field query. Note that <code>null</code> will be returned if <code>aFieldName</code> or <code>aValueExpression</code> is <code>null</code> or whitespace only.
   */
  getFieldQuery(aFieldName: string, aValueExpression: string): string;

  /**
   * Returns a date formatted according to the Solr date string representation.
   *
   * <p>
   *    All dates in Solr (Lucene) are stored using UTC (zulu time 'Z').
   *    When a date is converted to a string that should be sent to Solr
   *    (for example as a part of a query) the timezone must be taken into
   *    consideration since no adjustments will be performed by the query parser.
   * </p>
   * @param aDate the date
   * @return aDate formatted according to Solr's date representation. Returns null if aDate is null.
   * @since Sitevision 4.2
   */
  getDateAsString(aDate: unknown): string;
}

declare namespace QueryStringUtil {}

declare var queryStringUtil: QueryStringUtil;

export = queryStringUtil;
