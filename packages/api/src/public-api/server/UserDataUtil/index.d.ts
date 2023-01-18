import type Node from "../../types/javax/jcr/Node";

/**
 * User data utility interface.
 *
 * <p>
 *    The portlet specification allows access of user-specific data via a read-only <code>java.util.Map</code>
 *    that can be obtained as request attribute using the <code>PortletRequest.USER_INFO</code> constant.
 *    This utility is a convenience to get such user data, but it also extends it by allowing write operations
 *    and access other user's data. Data written via this utility can be accesses via the Map exposed via the
 *    <code>PortletRequest.USER_INFO</code> constant and vice versa. Hence, with this utility there are no need to use
 *    the portlet specification mechanism for accessing user data.
 * </p>
 *
 * <p>
 *    Mutating data operations (set/remove) on other users requires certain permissions, see individual method documentation.
 * </p>
 *
 * <p>
 *    <strong>Important note!</strong> The user data mechanism is closely tied to a specific user object and is intended to handle
 *    basic <em>user information</em> and <em>user preferences</em>. Adding "too much" (count) or "too large" (size) user data
 *    might cause persistence implications and performance implications.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link UserFactory#getUserDataUtil()}.
 *    See {@link senselogic.sitevision.api.user.UserFactory} for how to obtain an instance of the <code>UserFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.1
 */
export interface UserDataUtil {
  /**
   * The read-only keys.
   *
   * <p>
   *    Mutating operations (set/remove) with any of these keys will be ignored.
   * </p>
   * <p>
   *    <em>Note that internal-only properties are not included in the returned set, but they will also be ignored in mutating operations.</em>
   * </p>
   * @return a set of keys that are read-only
   */
  getReadOnlyKeys(): unknown;

  /**
   * Gets user data for current user.
   *
   * <p>
   *    <em>This read operation is equivalent to using the user info mechanism of the portlet specification.</em>
   * </p>
   * @param aUserDataKey the data key
   * @return the value for <code>aUserDataKey</code> (typically a <code>String</code>), or null
   */
  getUserData(aUserDataKey: string): unknown;

  /**
   * Gets user data for a user.
   * @param aUserNode the user node (typically a <code>sv:user</code> or <code>sv:simpleUser</code>)
   * @param aUserDataKey the data key
   * @return the value for <code>aUserDataKey</code> (typically a <code>String</code>), or null
   */
  getUserData(aUserNode: Node, aUserDataKey: string): unknown;

  /**
   * Sets user data for current user.
   *
   * <p>
   *    <em>This write operation is equivalent to using the Sitevision-specific user info mechanism of the portlet specification.</em>
   * </p>
   *
   * <p>
   *    <em>Important note!</em> The set/write operation will be ignored if <code>aUserDataKey</code> is <code>null</code>, whitespace-only or
   *    <em>read-only</em> (see {@link #getReadOnlyKeys}). The set operation will also be ignored if <code>aSerializableValue</code>
   *    is <code>null</code>.
   *    Use {@link #removeUserData(String)} to remove data instead.
   * </p>
   * @param aUserDataKey the data key
   * @param aSerializableValue the data value (typically a <code>String</code>)
   */
  setUserData(aUserDataKey: string, aSerializableValue: unknown): void;

  /**
   * Sets user data for a user.
   *
   * <p>
   *    <em>Important note!</em> The set/write operation will be ignored if <code>aUserDataKey</code> is <code>null</code>, whitespace-only or
   *    <em>read-only</em> (see {@link #getReadOnlyKeys}). The set operation will also be ignored if <code>aSerializableValue</code>
   *    is <code>null</code>.
   *    Use {@link #removeUserData(String)} to remove data instead.
   * </p>
   *
   * <p>
   *    <em>Permission note!</em> Current user (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}) must have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on current site
   *    (as of {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getSite()}), otherwise the set/write operation will be ignored.
   * </p>
   * @param aUserNode the user node (typically a <code>sv:user</code> or <code>sv:simpleUser</code>)
   * @param aUserDataKey the data key
   * @param aSerializableValue the data value (typically a <code>String</code>)
   */
  setUserData(
    aUserNode: Node,
    aUserDataKey: string,
    aSerializableValue: unknown
  ): void;

  /**
   * Removes user data.
   *
   * <p>
   *    <em>Important note!</em> The remove/delete operation will be ignored if <code>aUserDataKey</code> is <code>null</code>, whitespace-only or
   *    <em>read-only</em> (see {@link #getReadOnlyKeys}).
   * </p>
   * @param aUserDataKey the data key
   */
  removeUserData(aUserDataKey: string): void;

  /**
   * Removes user data for a user.
   *
   * <p>
   *    <em>Important note!</em> The remove/delete operation will be ignored if <code>aUserDataKey</code> is <code>null</code>, whitespace-only or
   *    <em>read-only</em> (see {@link #getReadOnlyKeys}).
   * </p>
   *
   * <p>
   *    <em>Permission note!</em> Current user (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}) must have
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on current site
   *    (as of {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getSite()}), otherwise the remove/delete operation will be ignored.
   * </p>
   * @param aUserNode the user node (typically a <code>sv:user</code> or <code>sv:simpleUser</code>)
   * @param aUserDataKey the data key
   */
  removeUserData(aUserNode: Node, aUserDataKey: string): void;
}

declare namespace UserDataUtil {}

declare var userDataUtil: UserDataUtil;

export = userDataUtil;
