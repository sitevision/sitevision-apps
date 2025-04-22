import type { Collection } from "../../types/java/util/Collection";
import type { Node } from "../../types/javax/jcr/Node";

/**
 * Direct Message utility interface.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link MessagesFactory#getDirectMessageUtil()}.
 *     See {@link MessagesFactory} for how to obtain an instance of the <code>MessagesFactory</code> interface.
 *  </p>
 * @author Elias Abrache
 * @since Sitevision 2025.04.1
 */
export interface DirectMessageUtil {
  /**
   * Retrieves an existing direct message conversation for the current user identity
   *  that includes the specified members.
   *  The current user identity is always included in the conversation.
   * @param aMembers array of sv:userIdentity nodes representing other participants&#xA; in the conversation (including or excluding current user identity, who is always implicitly included as member anyway).
   * @return a sv:directMessageConversation node representing the direct message conversation for the current user identity,&#xA; or null if no matching conversation is found.
   * @throws ConstraintViolationException if social collaboration is not enabled on the site.
   * @throws IllegalStateException if current user doesn't have a user identity.
   * @throws IllegalArgumentException if aMembers is null or empty. Or if any of the specified members is not&#xA; a valid conversation participant.
   */
  getConversation(aMembers: Collection | unknown[]): Node;

  /**
   * Creates a new direct message conversation for the current user identity with the specified members.
   *  If an existing conversation with the same participants (including the current user identity) exists,
   *  it will be returned instead of creating a new one.
   * @param aMembers array of sv:userIdentity nodes representing other participants&#xA; in the conversation (including or excluding current user identity, who is always implicitly included as member anyway).
   * @return a sv:directMessageConversation node representing the newly created or retrieved direct message conversation&#xA; for the current user identity.
   * @throws ConstraintViolationException if social collaboration is not enabled on the site or&#xA; if the conversation could not be created.
   * @throws IllegalStateException if current user doesn't have a user identity.
   * @throws IllegalArgumentException if aMembers is null or empty. Or if any of the specified members is not&#xA; a valid conversation participant.
   */
  createConversation(aMembers: Collection | unknown[]): Node;
}

declare namespace DirectMessageUtil {}

declare var directMessageUtil: DirectMessageUtil;

export default directMessageUtil;
