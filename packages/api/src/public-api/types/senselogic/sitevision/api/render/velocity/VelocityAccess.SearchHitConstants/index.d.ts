/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.search.SearchHit}.
 *
 *  <p>
 *     The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.search.SearchHit}
 *     constants in Velocity, e.g: <code>$searchHit.TYPE_INTERNAL</code>
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */
export type SearchHitConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.search.SearchHit#TYPE_INTERNAL}.
   * @return {@link senselogic.sitevision.api.search.SearchHit#TYPE_INTERNAL}
   */
  getTYPE_INTERNAL(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.search.SearchHit#TYPE_EXTERNAL}.
   * @return {@link senselogic.sitevision.api.search.SearchHit#TYPE_EXTERNAL}
   */
  getTYPE_EXTERNAL(): number;
};
