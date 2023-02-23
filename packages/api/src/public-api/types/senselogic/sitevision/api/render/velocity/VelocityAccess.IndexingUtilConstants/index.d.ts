/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.search.index.IndexingUtil}.
 *
 *  <p>
 *     The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.search.index.IndexingUtil}
 *     constants in Velocity, e.g: <code>$indexingUtil.MAX_RESOURCE_PRIORITY</code>
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.4
 */
export type IndexingUtilConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.search.index.IndexingUtil#MIN_RESOURCE_PRIORITY}.
   * @return {@link senselogic.sitevision.api.search.index.IndexingUtil#MIN_RESOURCE_PRIORITY}
   */
  getMIN_RESOURCE_PRIORITY(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.search.index.IndexingUtil#DEFAULT_RESOURCE_PRIORITY}.
   * @return {@link senselogic.sitevision.api.search.index.IndexingUtil#DEFAULT_RESOURCE_PRIORITY}
   */
  getDEFAULT_RESOURCE_PRIORITY(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.search.index.IndexingUtil#MAX_RESOURCE_PRIORITY}.
   * @return {@link senselogic.sitevision.api.search.index.IndexingUtil#MAX_RESOURCE_PRIORITY}
   */
  getMAX_RESOURCE_PRIORITY(): number;
};
