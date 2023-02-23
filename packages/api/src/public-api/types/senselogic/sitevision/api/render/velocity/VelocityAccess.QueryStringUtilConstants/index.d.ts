import type { String } from "../../../../../../java/lang/String";

/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.search.query.QueryStringUtil}.
 *
 *  <p>
 *     The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.search.query.QueryStringUtil}
 *     constants in Velocity, e.g: <code>$queryStringUtil.MATCH_ALL_QUERY</code>
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 8.2
 */
export type QueryStringUtilConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.search.query.QueryStringUtil#MATCH_ALL_QUERY}.
   * @return {@link senselogic.sitevision.api.search.query.QueryStringUtil#MATCH_ALL_QUERY}
   */
  getMATCH_ALL_QUERY(): string;
};
