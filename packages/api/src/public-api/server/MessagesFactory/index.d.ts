import type { ChannelUtil } from "../ChannelUtil";
import type { Node } from "../../types/javax/jcr/Node";
import type { ChannelWrapper } from "../../types/senselogic/sitevision/api/message/ChannelWrapper";
import type { DirectMessageUtil } from "../DirectMessageUtil";

/**
 * Factory for creating messages-related instances.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getMessagesFactory()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Elias Abrache
 * @since Sitevision 2024.03.1
 */
export interface MessagesFactory {
  /**
   * Gets an instance of a channel utility class.
   * @return a channel utility class
   * @since Sitevision 2024.05.1
   */
  getChannelUtil(): ChannelUtil;

  /**
   * Gets a wrapper for the specified channel.
   * @param aChannel the channel node (node of type sv:topic).
   * @return a channel wrapper for <code>aChannel</code>, or <code>null</code> if <code>aChannel</code>&#xA; isn't a channel, is archived, Social Collaboration isn't activated or operating user doesn't have a social user identity.
   */
  getChannelWrapper(aChannel: Node): ChannelWrapper;

  /**
   * Gets an instance of a direct message utility class.
   * @return a direct message utility class
   * @since Sitevision 2025.04.1
   */
  getDirectMessageUtil(): DirectMessageUtil;
}

declare namespace MessagesFactory {}

declare var messagesFactory: MessagesFactory;

export default messagesFactory;
