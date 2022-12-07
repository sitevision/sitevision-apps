/**
 * <p>
 *    A spell check component that defines the "did you mean" behaviour for a {@link senselogic.sitevision.api.search.searcher.Searcher}.
 * </p>
 *
 * <p>
 *    The actual behaviour is specified when it is constructed using the
 *    {@link senselogic.sitevision.api.search.searcher.builder.SpellCheckBuilder}
 *    The component is applied to the <code>Searcher</code> via
 *    {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder#setSpellCheck(SpellCheck)}
 *    when the <code>Searcher</code> is constructed.
 * </p>
 *
 * <p>
 *    <em>Solr note: this component depicts the solr.SpellCheckComponent</em>
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.searcher.builder.SpellCheckBuilder#build()}.
 *    See {@link senselogic.sitevision.api.search.searcher.builder.SpellCheckBuilder} for how to obtain an instance of the
 *    <code>SpellCheckBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
interface SpellCheck {
  undefined;
}

export default SpellCheck;
