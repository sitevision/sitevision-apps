import type { Node } from "../../../../../javax/jcr/Node";

import type { String } from "../../../../../java/lang/String";
import type { Wrapper } from "../../base/Wrapper";

/**
 * Channel administration interface.
 *
 *  <p>
 *     This wrapper provides methods to update an existing channel (node of type sv:topic).
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link MessagesFactory#getChannelWrapper(javax.jcr.Node)}.
 *     See {@link MessagesFactory} for how to obtain an instance of the MessagesFactory interface.
 *  </p>
 * @author Elias Abrache
 * @since Sitevision 2024.03.01
 */
export type ChannelWrapper = Wrapper & {
  /**
   * Adds a user identity as member of the wrapped channel.
   *
   *  <p>
   *     Requires enabled Social collaboration, and for the operating user to have a social user identity.
   *  </p>
   *
   *  <p>
   *     <em>Only non-members will be added</em>, i.e. a user identity that already is a member will be ignored.
   *     Channels that are <em>archived</em> don't accept any new members.
   *  </p>
   *
   *  <p>
   *     <strong>Permission notes!</strong>
   *  </p>
   *  <p>
   *     <em>Open channels</em> require the operating user to either have membership or the
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_CHANNELS} permission.
   *  </p>
   *  <p>
   *     <em>Private channels</em> require the operating user to have membership.
   *  </p>
   * @param aUserIdentity a user identity (or user)
   * @return true if aUserIdentity was added as member of the wrapped channel, false otherwise.&#xA; false is always returned if aUserIdentity is null or already a member of the wrapped channel.
   */
  addMember(aUserIdentity: Node): boolean;

  /**
   * Removes a member from the wrapped channel.
   *
   *  <p>
   *     <em>Only members can be removed</em>, i.e. a user identity that is a non-member will be ignored.
   *     Members can not be removed from channels that are <em>archived</em>.
   *  </p>
   *
   *  <p>
   *     <strong>Permission notes!</strong>
   *  </p>
   *  <p>
   *     <em>Open channels</em> require the operating user to have one of the following:
   *  </p>
   *  <ul>
   *     <li>
   *        {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_CHANNELS} permission.
   *     </li>
   *     <li>
   *        Be channel administrator (author of the channel).
   *     </li>
   *     <li>
   *        Operating user matches the user identity (i.e. "is yourself").
   *     </li>
   *  </ul>
   *  <p>
   *     <em>Private channels</em> require the operating user to have one of the following:
   *  </p>
   *  <ul>
   *     <li>
   *        Membership and the {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_CHANNELS} permission.
   *     </li>
   *     <li>
   *        Be channel administrator (author of the channel).
   *     </li>
   *     <li>
   *        Operating user matches the user identity (i.e. "is yourself").
   *     </li>
   *  </ul>
   * @param aUserIdentity a user identity (or user)
   * @return true if aUserIdentity was removed as member from the wrapped channel, false otherwise.&#xA; false is always returned if aUserIdentity is null or not a member of the wrapped channel.
   */
  removeMember(aUserIdentity: Node): boolean;

  /**
   * Checks if a user identity is a member of the wrapped channel.
   * @param aUserIdentity a user identity (or user)
   * @return true if aUserIdentity is a member of the wrapped channel, false otherwise.&#xA; false is always returned if aUserIdentity is null.
   * @since Sitevision 2024.05.01
   */
  isMember(aUserIdentity: Node): boolean;

  /**
   * Alters the name of the wrapped channel.
   *
   *  <p>
   *     <em>Permission note</em> Only the author or members with the
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_CHANNELS} permission can alter the channel name.
   *  </p>
   *
   *  <p>
   *     The new channel name most not exceed 80 characters in length and must be unique otherwise false will be returned.
   *  </p>
   * @param aChannelName the new name of the channel
   * @return true if channel could be renamed to aChannelName, false otherwise.
   * @since Sitevision 2024.05.01
   */
  renameChannel(aChannelName: String | string): boolean;

  /**
   * Alters the description of the wrapped channel.
   *
   *  <p>
   *     <em>Permission note</em> Only the author or members with the
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_CHANNELS} permission can alter the channel description.
   *  </p>
   * @param aChannelDescription the new description of the channel
   * @return true if channel description was set to aChannelDescription, false otherwise.
   * @since Sitevision 2024.05.01
   */
  setChannelDescription(aChannelDescription: String | string): boolean;
};
