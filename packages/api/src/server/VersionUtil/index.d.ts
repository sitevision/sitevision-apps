/**
 * The offline version (i.e. the version used when editing in the Sitevision editor) marker
 */
export const OFFLINE_VERSION: number;
/**
 * The online version (i.e. the published version that visitors can access) marker
 */
export const ONLINE_VERSION: number;

/**
 * Gets current version
 *
 * @return {@link #OFFLINE_VERSION} or {@link #ONLINE_VERSION}. If current version is undeterminable, -1 is returned.
 */
export function getCurrentVersion(): number;

declare namespace versionUtil {
  export { OFFLINE_VERSION, ONLINE_VERSION, getCurrentVersion };
}
