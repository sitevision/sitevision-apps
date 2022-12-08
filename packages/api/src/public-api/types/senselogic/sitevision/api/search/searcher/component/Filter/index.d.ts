/**
 * <p>
 *    A filter component that defines the filtering behaviour for a {@link senselogic.sitevision.api.search.searcher.Searcher}.
 * </p>
 *
 * <p>
 *    The actual behaviour is specified when it is constructed using the
 *    {@link senselogic.sitevision.api.search.searcher.builder.FilterBuilder}.
 *    The component is applied to the <code>Searcher</code> via
 *    {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder#setFilter(Filter)}
 *    when the <code>Searcher</code> is constructed.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.searcher.builder.FilterBuilder#build()}.
 *    See {@link senselogic.sitevision.api.search.searcher.builder.FilterBuilder} for how to obtain an instance of the
 *    <code>FilterBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export type Filter = {
  undefined;
};
