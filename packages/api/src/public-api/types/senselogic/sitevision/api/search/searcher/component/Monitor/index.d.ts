/**
 * <p>
 *    A monitor component that defines monitoring behaviour for a {@link senselogic.sitevision.api.search.searcher.Searcher}.
 * </p>
 *
 * <p>
 *    The actual behaviour is specified when it is constructed using the
 *    {@link senselogic.sitevision.api.search.searcher.builder.MonitorBuilder}
 *    The component is applied to the <code>Searcher</code> via
 *    {@link senselogic.sitevision.api.search.searcher.builder.SearcherBuilder#setMonitor(Monitor)}
 *    when the <code>Searcher</code> is constructed.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.searcher.builder.MonitorBuilder#build()}.
 *    See {@link senselogic.sitevision.api.search.searcher.builder.MonitorBuilder} for how to obtain an instance of the
 *    <code>MonitorBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.1
 */
export type Monitor = {
  undefined;
};
