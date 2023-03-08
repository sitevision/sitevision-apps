import type { VersionUtilConstants } from "../../types/senselogic/sitevision/api/render/velocity/VelocityAccess.VersionUtilConstants";

/**
 * Versioning utility interface.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getVersionUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1_04
 */
export interface VersionUtil extends VersionUtilConstants {
  /**
 * The offline version (i.e. the version used when editing in the Sitevision editor) marker
  
    */
  OFFLINE_VERSION: 0;

  /**
 * The online version (i.e. the published version that visitors can access) marker
  
    */
  ONLINE_VERSION: 1;

  /**
   * Gets current version
   * @return {@link #OFFLINE_VERSION} or {@link #ONLINE_VERSION}. If current version is undeterminable, -1 is returned.
   */
  getCurrentVersion(): number;
}

declare namespace VersionUtil {}

declare var versionUtil: VersionUtil;

export default versionUtil;
