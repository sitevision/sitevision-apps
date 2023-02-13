import type { VersionedPropertyUtil } from "../../types/senselogic/sitevision/api/property/VersionedPropertyUtil";

/**
 * Utility interface for getting Node property values in the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION OFFLINE_VERSION}.
 *
 * <p>
 *    <em><strong>Note!</strong> This is an exotic sibling interface to {@link PropertyUtil} that can be used to extract property values from the
 *    {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION OFFLINE_VERSION} - regardless of what version you are currently
 *    executing in. If you don't know what a version is or haven't thought much about it, you should typically use the common property extraction
 *    interface - {@link PropertyUtil}.</em>
 * </p>
 *
 * <p>
 *    See {@link senselogic.sitevision.api.property.VersionedPropertyUtil} for methods documentation and code examples.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getVersionedPropertyUtil(int)} using
 *    {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION} as argument.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.5
 * @see PropertyUtil
 * @see OnlineVersionPropertyUtil
 */
export interface OfflineVersionPropertyUtil extends VersionedPropertyUtil {
  undefined;
}

declare namespace OfflineVersionPropertyUtil {}

declare var offlineVersionPropertyUtil: OfflineVersionPropertyUtil;

export default offlineVersionPropertyUtil;
