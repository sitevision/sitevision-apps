import type { List } from "../../types/java/util/List";
import type { Node } from "../../types/javax/jcr/Node";

/**
 * Target audience utility interface.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getTargetAudienceUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Robin Lagren
 * @since Sitevision 2024.09.2
 */
export interface TargetAudienceUtil {
  /**
   * Resolves target audiences (sv:targetAudience) for the current user.
   *  This method determines which target audiences the current user belongs to by evaluating all available target audiences of the site.
   * @return the list of target audiences that the current user belongs to
   */
  resolve(): List;

  /**
   * Resolves target audiences (sv:targetAudience) for the provided user.
   *  This method determines which target audiences the provided user belongs to by evaluating all available target audiences of the site.
   * @param aUser the user to evaluate target audiences for
   * @return the list of target audiences that the provided user belongs to
   */
  resolveForUser(aUser: Node): List;

  /**
   * Resolves specific target audiences (sv:targetAudience) for the current user.
   *  This method determines which target audiences from the provided list the current user belongs to.
   * @param aTargetAudiences the list of target audiences to evaluate against the current user
   * @return the list of target audiences from the provided list that the current user belongs to
   * @throws IllegalArgumentException if aTargetAudiences is null or contains other than sv:targetAudience Nodes
   */
  resolveFrom(aTargetAudiences: List | unknown[]): List;

  /**
   * Resolves specific target audiences (sv:targetAudience) for the provided user.
   *  This method determines which target audiences from the provided list the provided user belongs to.
   * @param aUser the user to evaluate target audiences for
   * @param aTargetAudiences the list of target audiences to evaluate against the provided user
   * @return the list of target audiences from the provided list that the provided user belongs to
   * @throws IllegalArgumentException if aTargetAudiences is null or contains other than sv:targetAudience Nodes
   */
  resolveForUserFrom(aUser: Node, aTargetAudiences: List | unknown[]): List;
}

declare namespace TargetAudienceUtil {}

declare var targetAudienceUtil: TargetAudienceUtil;

export default targetAudienceUtil;
