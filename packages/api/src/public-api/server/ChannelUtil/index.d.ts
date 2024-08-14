import type { String } from "../../types/java/lang/String";

import type { Node } from "../../types/javax/jcr/Node";

/**
 * Channel utility interface.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link MessagesFactory#getChannelUtil()}.
 *     See {@link MessagesFactory} for how to obtain an instance of the <code>MessagesFactory</code> interface.
 *  </p>
 * @author Elias Abrache
 * @since Sitevision 2024.05.01
 */
export interface ChannelUtil {
  /**
   * Creates a channel.
   *  <p>
   *     A <code>ConstraintViolationException</code> will be thrown if social collaboration is not enabled
   *     Or if current user is attempting to create a private channel without
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#CREATE_PRIVATE_CHANNELS} permission.
   *  </p>
   *
   *  <p>
   *     A <code>IllegalArgumentException</code> will be thrown if aName is null, blank or exceeds 80 characters.
   *  </p>
   *
   *  <p>
   *     A <code>ItemExistsException</code> will be thrown if a channel with the same name already exists.
   *  </p>
   *
   *  <p>
   *     A <code>RepositoryException</code> will be thrown If an error occurs while fetching channels
   *  </p>
   * @param aName the name of the channel (Must be unique and must not exceed 80 characters)
   * @param aDescription the description of the channel
   * @param aPrivate whether the channel should be private or not
   * @throws RepositoryException if an error occurs.
   * @return a channel wrapper for the newly created <code>channel</code>, or <code>null</code>.
   */
  createChannel(
    aName: String | string,
    aDescription: String | string,
    aPrivate: boolean
  ): Node;

  /**
   * Searches for a channel by name.
   *
   *  <p>
   *     <em>Permission note</em> Private channels can only be found by members.
   *  </p>
   *
   *  <p>
   *     A <code>ConstraintViolationException</code> will be thrown if social collaboration is not enabled.
   *  </p>
   *
   *  <p>
   *     A <code>RepositoryException</code> will be thrown if an error occurs while fetching channels.
   *  </p>
   * @return the channel node, or null.
   * @param aChannelName the name of the channel to search for.
   * @throws RepositoryException if an error occurs.
   */
  findChannelByName(aChannelName: String | string): Node;
}

declare namespace ChannelUtil {}

declare var channelUtil: ChannelUtil;

export default channelUtil;
