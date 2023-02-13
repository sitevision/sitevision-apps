import type { Node } from "../../types/javax/jcr/Node";

/**
 * Tag utility interface for tree nodes.
 *
 * <p>
 *    This sv:tag utility operates on taggable nodes of type: <code>sv:page</code>, <code>sv:article</code>, <code>sv:sitePage</code>,
 *    <code>sv:collaborationGroupPage</code>, <code>sv:file</code> and <code>sv:image</code>.
 * </p>
 * <p>
 *    <em>Related: Use {@link senselogic.sitevision.api.node.NodeResolverUtil#getTagsResolver()} to resolve sv:tag's from other node types
 *    (e.g. sv:timelineEntry, sv:comment, sv:tagGroup etc). Use {@link senselogic.sitevision.api.metadata.MetadataUtil} to set tag metadata.</em>
 * </p>
 * @author Karl Eklöf
 * @since Sitevision 9.1
 */
export interface TagUtil {
  /**
   * Gets a sv:tag Node by name.
   * @param aTagName the tag name. Must not be null, whitespace-only or shebang-only
   * @return a sv:tag or null if no tag with aTagName could be fond
   * @throws IllegalArgumentException if aTagName is invalid
   */
  getTagByName(aTagName: string): Node;

  /**
   * Gets or creates a sv:tag Node by name.
   *
   * <p>
   *    <strong>Permission note:</strong> Current user must be authenticated (i.e. non-anonymous).
   * </p>
   * @param aTagName the tag name. Must not be null, whitespace-only or shebang-only
   * @return the sv:tag for aTagName
   * @throws IllegalArgumentException if aTagName is invalid
   * @throws RepositoryException if current user is anonymous or the sv:tag could not be found or created
   */
  getOrCreateTagByName(aTagName: string): Node;

  /**
   * Adds a sv:tag to a Node.
   *
   * <p>
   *    <strong>Permission note:</strong> Current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE WRITE}
   *    permission on the taggable Node that is mutated.
   * </p>
   * <p>
   *    <strong>Versioning note:</strong> Mutation of the taggable Node is always executed in the
   *    {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION OFFLINE} version.
   *    In other words - if you mutate the sv:tag entries on a sv:page, you must also
   *    {@link senselogic.sitevision.api.versioning.PublishingUtil publish} the sv:page for changes to affect the
   *    {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION ONLINE/published} version.
   * </p>
   * @param aTaggableNode a taggable node (sv:page, sv:article, sv:sitePage, sv:collaborationGroupPage, sv:file or sv:image)
   * @param aTagNode a sv:tag
   * @throws IllegalArgumentException if aTaggableNode or aTagNode is null or an unsupported type
   * @throws RepositoryException if mutation is not allowed or fails
   */
  addTag(aTaggableNode: Node, aTagNode: Node): void;

  /**
   * Adds multiple sv:tag to a Node.
   *
   * <p>
   *    <strong>Permission note:</strong> Current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE WRITE}
   *    permission on the taggable Node that is mutated.
   * </p>
   * <p>
   *    <strong>Versioning note:</strong> Mutation of the taggable Node is always executed in the
   *    {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION OFFLINE} version.
   *    In other words - if you mutate the sv:tag entries on a sv:page, you must also
   *    {@link senselogic.sitevision.api.versioning.PublishingUtil publish} the sv:page for changes to affect the
   *    {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION ONLINE/published} version.
   * </p>
   * <p>
   *    Server-side Javascript example:
   * </p>
   * <pre><code>    const tagUtil = require('TagUtil');
   *    ...
   *    let tags = [];
   *    tags.push(tagUtil.getOrCreateTagByName('mytag'));
   *    tags.push(tagUtil.getOrCreateTagByName('myothertag'));
   *
   *    tagUtil.addTags(pageNode, tags);</code></pre>
   * @param aTaggableNode a taggable node (sv:page, sv:article, sv:sitePage, sv:collaborationGroupPage, sv:file or sv:image)
   * @param aTagNodes a var-args array of sv:tag nodes
   * @throws IllegalArgumentException if aTaggableNode is null or an unsupported type, or if or aTagNodes is null, empty or contains an unsupported type
   * @throws RepositoryException if mutation is not allowed or fails
   */
  addTags(aTaggableNode: Node, aTagNodes: Node): void;

  /**
   * Removes a sv:tag from a Node.
   *
   * <p>
   *    <strong>Permission note:</strong> Current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE WRITE}
   *    permission on the taggable Node that is mutated.
   * </p>
   * <p>
   *    <strong>Versioning note:</strong> Mutation of the taggable Node is always executed in the
   *    {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION OFFLINE} version.
   *    In other words - if you mutate the sv:tag entries on a sv:page, you must also
   *    {@link senselogic.sitevision.api.versioning.PublishingUtil publish} the sv:page for changes to affect the
   *    {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION ONLINE/published} version.
   * </p>
   * @param aTaggableNode a taggable node (sv:page, sv:article, sv:sitePage, sv:collaborationGroupPage, sv:file or sv:image)
   * @param aTagNode a sv:tag
   * @return true if aTagNode was removed from aTaggableNode, false otherwise
   * @throws IllegalArgumentException if aTaggableNode or aTagNode is null or an unsupported type
   * @throws RepositoryException if mutation is not allowed or fails
   */
  removeTag(aTaggableNode: Node, aTagNode: Node): boolean;

  /**
   * Gets all sv:tag's for a Node.
   *
   * <p>
   *    <em>Version note! This method executes in current version, i.e. it will return the list of sv:tag's
   *    in current version ({@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION OFFLINE_VERSION} or
   *    {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION ONLINE_VERSION}).</em>
   * </p>
   * @param aTaggableNode a taggable node (sv:page, sv:article, sv:sitePage, sv:collaborationGroupPage, sv:file or sv:image)
   * @return a list of sv:tag nodes for aTaggableNode
   * @throws IllegalArgumentException if aTaggableNode is null or an unsupported type
   */
  getTags(aTaggableNode: Node): unknown;
}

declare namespace TagUtil {}

declare var tagUtil: TagUtil;

export default tagUtil;
