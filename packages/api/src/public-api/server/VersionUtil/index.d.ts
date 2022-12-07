/**
 * Gets current version
 * @return {@link #OFFLINE_VERSION} or {@link #ONLINE_VERSION}. If current version is undeterminable, -1 is returned.
 */
export function getCurrentVersion(): number;

/**
 * Versioning utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getVersionUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>The offline version (i.e. the version used when editing in the Sitevision editor) markerThe online version (i.e. the published version that visitors can access) marker
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1_04
 */
declare namespace versionUtil {
  export { getCurrentVersion };
}

export default versionUtil;
