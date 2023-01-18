import type Node from "../../types/javax/jcr/Node";

/**
 * Simple user utility interface.
 *
 * <p>
 *    This interface handles nodes with primary node type <code>sv:simpleUser</code>.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link UserFactory#getSimpleUserUtil()}.
 *    See {@link senselogic.sitevision.api.user.UserFactory} for how to obtain an instance of the <code>UserFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.0.1
 */
export interface SimpleUserUtil {
  /**
   * Checks if current user is member of a virtual group with a specific id.
   *
   * <p>
   *    This is a convenience for {@link #isMemberOfVirtualGroup(javax.jcr.Node, String)} using current user
   *    (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}).
   * </p>
   * @param aVirtualGroupId id of a virtual group (sv:virtualGroup). Note! The <em>id</em> of a virtual group does not always match the <em>name</em> of the virtual group.
   * @return <code>true</code> if current user is member of the virtual group resolved via <code>aVirtualGroupId</code>, <code>false</code> otherwise
   * @see senselogic.sitevision.api.user.UserUtil#isMemberOfGroup(javax.jcr.Node)
   */
  isMemberOfVirtualGroup(aVirtualGroupId: string): boolean;

  /**
   * Checks if a simple user is member of a virtual group with a specific id.
   * @param aSimpleUser a simple user node (sv:simpleUser)
   * @param aVirtualGroupId id of a virtual group (sv:virtualGroup). Note! The <em>id</em> of a virtual group does not always match the <em>name</em> of the virtual group.
   * @return <code>true</code> if <code>aSimpleUser</code> is member of the virtual group resolved via <code>aVirtualGroupId</code>, <code>false</code> otherwise
   * @see senselogic.sitevision.api.user.UserUtil#isMemberOfGroup(javax.jcr.Node, javax.jcr.Node)
   */
  isMemberOfVirtualGroup(aSimpleUser: Node, aVirtualGroupId: string): boolean;
}

declare namespace SimpleUserUtil {}

declare var simpleUserUtil: SimpleUserUtil;

export = simpleUserUtil;
