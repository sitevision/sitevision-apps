/**
 * <p>
 *    A highlight component that defines the highlighting behaviour for a {@link senselogic.sitevision.api.search.searcher.Searcher}.
 * </p>
 *
 * <p>
 *    The actual behaviour is specified when it is constructed using the
 *    {@link senselogic.sitevision.api.search.searcher.builder.HighlightBuilder}
 *    The component is applied to the <code>Searcher</code> via
 *    {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder#setHighlight(Highlight)}
 *    when the <code>Searcher</code> is constructed.
 * </p>
 *
 * <p>
 *    <em>Solr note: this component depicts the solr.HighlightComponent</em>
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.searcher.builder.HighlightBuilder#build()}.
 *    See {@link senselogic.sitevision.api.search.searcher.builder.HighlightBuilder} for how to obtain an instance of the
 *    <code>HighlightBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export type Highlight = {
  undefined;
};
