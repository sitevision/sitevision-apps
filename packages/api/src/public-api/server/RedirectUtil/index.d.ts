import type { Node } from "../../types/javax/jcr/Node";
import type { Set } from "../../types/java/util/Set";
import type { String } from "../../types/java/lang/String";

import type { Collection } from "../../types/java/util/Collection";

/**
 * Redirect utility interface (301 redirects for <em>"old urls"</em>).
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getRedirectUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.0.3
 */
export interface RedirectUtil {
  /**
   * Gets all 301 redirect URIs registered for a specific node.
   * @param aNode a node, typically a <code>sv:page</code>
   * @return a set of 301 redirect URIs for <code>aNode</code>, never <code>null</code>
   */
  getRedirectURIs(aNode: Node): Set;

  /**
   * Adds a relative URI that should trigger a 301 redirect to a specific node.
   *
   *  <p>
   *     Permission note! Current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on <code>aNode</code>.
   *  </p>
   * @param aNode a node, typically a <code>sv:page</code>
   * @param aRelativeURI the relative URI that should trigger a 301 redirect to <code>aNode</code>.
   * @throws IllegalArgumentException if <code>aNode</code> is <code>null</code> or an invalid node,&#xA; if <code>aRelativeURI</code> is <code>null</code>, whitespace-only or an absolute URI.
   * @throws RepositoryException if current user is not authorized to alter <code>aNode</code>,&#xA; if <code>aNode</code> is already locked or something else goes wrong
   */
  addRedirectURI(aNode: Node, aRelativeURI: String | string): void;

  /**
   * Adds a collection of relative URIs that should trigger 301 redirects to a specific node.
   *
   *  <p>
   *     Permission note! Current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on <code>aNode</code>.
   *  </p>
   * @param aNode a node, typically a <code>sv:page</code>
   * @param aRelativeURIs a collection of relative URIs that should trigger 301 redirects to <code>aNode</code>.
   * @throws IllegalArgumentException if <code>aNode</code> is <code>null</code> or an invalid node,&#xA; if <code>aRelativeURI</code> is <code>null</code>, empty or doesn't contain any non-whitespace only or an non-absolute URI.
   * @throws RepositoryException if current user is not authorized to alter <code>aNode</code>,&#xA; if <code>aNode</code> is already locked or something else goes wrong
   */
  addRedirectURIs(aNode: Node, aRelativeURIs: Collection | unknown[]): void;

  /**
   * Removes a relative 301 redirect URI from a specific node.
   *
   *  <p>
   *     Permission note! Current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on <code>aNode</code>.
   *  </p>
   * @param aNode a node, typically a <code>sv:page</code>
   * @param aRelativeURI the relative URI that should be removed from <code>aNode</code>.
   * @throws IllegalArgumentException if <code>aNode</code> is <code>null</code> or an invalid node,&#xA; if <code>aRelativeURI</code> is <code>null</code>, whitespace-only or an absolute URI.
   * @throws RepositoryException if current user is not authorized to alter <code>aNode</code>,&#xA; if <code>aNode</code> is already locked or something else goes wrong
   */
  removeRedirectURI(aNode: Node, aRelativeURI: String | string): void;

  /**
   * Removes all relative 301 redirect URIs from a specific node.
   *
   *  <p>
   *     Permission note! Current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on <code>aNode</code>.
   *  </p>
   * @param aNode a node, typically a <code>sv:page</code>
   * @throws IllegalArgumentException if <code>aNode</code> is <code>null</code> or an invalid node,
   * @throws RepositoryException if current user is not authorized to alter <code>aNode</code>,&#xA; if <code>aNode</code> is already locked or something else goes wrong
   */
  removeAllRedirectURIs(aNode: Node): void;
}

declare namespace RedirectUtil {}

declare var redirectUtil: RedirectUtil;

export default redirectUtil;
