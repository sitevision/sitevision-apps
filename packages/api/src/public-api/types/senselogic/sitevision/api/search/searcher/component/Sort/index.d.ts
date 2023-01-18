/**
 * <p>
 *    A sort component that defines the sorting behaviour for a {@link senselogic.sitevision.api.search.searcher.Searcher}.
 * </p>
 *
 * <p>
 *    The actual behaviour is specified when it is constructed using the
 *    {@link senselogic.sitevision.api.search.searcher.builder.SortBuilder}
 *    The component is applied to the <code>Searcher</code> via
 *    {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder#setSort(Sort)}
 *    when the <code>Searcher</code> is constructed.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.searcher.builder.SortBuilder#build()}.
 *    See {@link senselogic.sitevision.api.search.searcher.builder.SortBuilder} for how to obtain an instance of the
 *    <code>SortBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
type Sort = {
  undefined;
};

export = Sort;
