import type Monitor from "../../types/senselogic/sitevision/api/search/searcher/component/Monitor";
import type Builder from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * <p>
 *    Builder for creating a {@link senselogic.sitevision.api.search.searcher.component.Monitor} component.
 * </p>
 *
 * <p>
 *    MonitorBuilder has one <em>optional</em> attribute:
 * </p>
 * <ul>
 *    <li>
 *       <em>query logging</em> - the query logging mode. Default is on (i.e. <code>true</code>).
 *       <em>Important note!</em> Even though the query logging is enabled, it does not necessarily mean that the query actually will be logged
 *       (actual logging requires the <em>Search package 1</em> license).
 *    </li>
 * </ul>
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getMonitorBuilder()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.1
 */
export interface MonitorBuilder extends Builder {
  /**
   * Sets the query logging mode on or off.
   * @param aEnableQueryLogging whether or not the query logging mode should be turned on (true) or off (false).
   * @return this builder
   */
  setEnableQueryLogging(aEnableQueryLogging: boolean): MonitorBuilder;

  /**
   * Creates a Monitor component instance using currently specified state/behaviour.
   * @return a monitor component
   */
  build(): Monitor;
}

declare namespace MonitorBuilder {}

declare var monitorBuilder: MonitorBuilder;

export = monitorBuilder;
