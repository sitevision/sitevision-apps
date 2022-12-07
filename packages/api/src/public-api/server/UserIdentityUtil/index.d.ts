import Node from "../../hidden/javax/jcr/Node";

/**
 * Creates the corresponding <code>sv:userIdentity</code> Node for a specified <code>sv:user</code> Node.
 *
 * <p>
 *    <strong>Note!</strong> When Collaboration is activated for a site, user identities are automatically created
 *    for each user when they authenticates themselves. This method is typically used for "infrequent" users during
 *    the startup phase of using Collaboration.
 * </p>
 * <p>
 *    <em>Note that neither anonymous users, the indexer or the extractor can have a user identity!</em>
 * </p>
 * @param aUserNode a user node that presumably do not have a corresponding user identity
 * @return the existing or created sv:userIdentity Node for <code>aUserNode</code>, or <code>null</code> if <code>aUserNode</code> is <code>null</code> or isn't allowed to have user identity for current site (e.g. user is anonymized).
 * @see #getUserIdentity(javax.jcr.Node)
 */
export function getOrCreateUserIdentity(aUserNode: Node): Node;

/**
 * Gets the corresponding <code>sv:userIdentity</code> Node for a specified <code>sv:user</code> Node.
 *
 * <p>
 *    <em>Note that neither anonymous users, the indexer or the extractor user has a user identity!</em>
 * </p>
 * <p>
 *    <em>Tip!</em> Use {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUserIdentity()} for getting
 *    the user identity of current user.
 * </p>
 * @param aUserNode a user node
 * @return the corresponding sv:userIdentity Node for <code>aUserNode</code>, or <code>null</code> if <code>aUserNode</code> is <code>null</code> or has no corresponding user identity for current site (e.g. user is anonymized).
 */
export function getUserIdentity(aUserNode: Node): Node;

/**
 * User identity utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link UserFactory#getUserIdentityUtil()}.
 *    See {@link senselogic.sitevision.api.user.UserFactory} for how to obtain an instance of the <code>UserFactory</code> interface.
 * </p>
 *
 * <p>
 *    <em>Tip!</em> Use {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUserIdentity()} for getting
 *    the user identity of current user.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
declare namespace userIdentityUtil {
  export { getOrCreateUserIdentity, getUserIdentity };
}

export default userIdentityUtil;
