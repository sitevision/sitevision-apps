import type { Node } from "../../types/javax/jcr/Node";
import type { ChannelWrapper } from "../../types/senselogic/sitevision/api/message/ChannelWrapper";

/**
 * Factory for creating messages-related instances.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getMessagesFactory()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Elias Abrache
 * @since Sitevision 2024.03.01
 */
export interface MessagesFactory {
  /**
   * Gets a wrapper for the specified channel.
   * @param aChannel the channel node (node of type sv:topic).
   * @return a channel wrapper for <code>aChannel</code>, or <code>null</code> if <code>aChannel</code>&#xA; isn't a channel, is archived, Social Collaboration isn't activated or operating user doesn't have a social user identity.
   */
  getChannelWrapper(aChannel: Node): ChannelWrapper;
}

declare namespace MessagesFactory {}

declare var messagesFactory: MessagesFactory;

export default messagesFactory;
