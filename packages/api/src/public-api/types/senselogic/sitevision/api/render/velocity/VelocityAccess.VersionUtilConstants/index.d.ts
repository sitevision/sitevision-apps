/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.versioning.VersionUtil}.
 *
 *  <p>
 *     The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.versioning.VersionUtil}
 *     constants in Velocity, e.g: <code>$versionUtil.ONLINE_VERSION</code>
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */
export type VersionUtilConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}.
   * @return {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
   */
  getONLINE_VERSION(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}.
   * @return {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}
   */
  getOFFLINE_VERSION(): number;
};
