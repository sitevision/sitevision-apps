/**
 * <p>
 *     A parser component that defines the query parsing behaviour for a {@link senselogic.sitevision.api.search.searcher.Searcher}.
 *  </p>
 *
 *  <p>
 *     The component behaviour is specified when it is constructed and it is applied to the <code>Searcher</code> via
 *     {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder#setParser(Parser)}
 *     when the <code>Searcher</code> is constructed. There are two parsers available:
 *  </p>
 *  <ul>
 *     <li>
 *        A <em>multi-field</em> parser is configured via the {@link senselogic.sitevision.api.search.searcher.builder.ExtendedDismaxParserBuilder}
 *     </li>
 *     <li>
 *        A <em>single-field</em> parser is configured via the {@link senselogic.sitevision.api.search.searcher.builder.StandardParserBuilder}
 *     </li>
 *  </ul>
 *  <p>
 *     The default Sitevision portlets use the <em>ExtendedDismaxParser</em>.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.search.searcher.builder.ExtendedDismaxParserBuilder#build()}
 *     or {@link senselogic.sitevision.api.search.searcher.builder.StandardParserBuilder#build()}.
 *     See {@link senselogic.sitevision.api.search.searcher.builder.ExtendedDismaxParserBuilder} or
 *     {@link senselogic.sitevision.api.search.searcher.builder.StandardParserBuilder} for how to obtain such instance.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export type Parser = {};
