import type { Resolver } from "../../types/senselogic/sitevision/api/base/Resolver";

/**
 * Node resolver utility interface.
 * @author Magnus Lövgren
 * @since Sitevision 4.1
 */
export interface NodeResolverUtil {
  /**
   * Gets the Calendar resolver for Collaboration-related nodes.
   *
   * <p>
   *    This is a convenience resolver that uses the {@link #getCollaborationDateResolver()} to resolve a <code>Date</code>
   *    from a <code>Node</code> and then convert it to a <code>Calendar</code>.
   * </p>
   * <p>
   *    <em>Note!</em> <code>Calendar</code> implements <code>Comparable</code> so this resolver can be used
   *    to get a <code>Comparator</code> using {@link NodeComparatorUtil#getResolverComparator(Resolver)}.
   * </p>
   * @return the Calendar resolver for collaboration-related nodes
   * @see #getCollaborationDateResolver()
   */
  getCollaborationCalendarResolver(): Resolver;

  /**
   * Gets the Date resolver for Collaboration-related nodes.
   *
   * <p>
   *    <strong>Types</strong><br>
   *     The Date value will be resolved differently for different node types.
   *     For some types it will potentially do multiple checks and return the <em>first found</em> of them
   *     (i.e. first check that has a non-null Date value).
   * </p>
   * <ul>
   *     <li>
   *         <code>sv:userIdentity</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>The time when the last entry was added to the personal timeline of the identity.</li>
   *         </ul>
   *     </li>
   *     <li>
   *         <code>sv:collaborationGroup</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the collaboration group had it's last activity e.g. new entry or a modified file.</li>
   *             <li>The time when the <code>sv:collaborationGroupPage</code> of the group was last published.</li>
   *             <li>The time when the <code>sv:collaborationGroupPage</code> of the group was last modified.</li>
   *             <li>The time when the <code>sv:collaborationGroupPage</code> of the group was created.</li>
   *         </ol>
   *     </li>
   *     <li>
   *         <code>sv:collaborationGroupPage</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>
   *                The time when the <code>sv:collaborationGroup</code> of the collaboration group page had it's last activity
   *                e.g. new entry or a modified file.
   *             </li>
   *             <li>The time when the collaboration group page was last published.</li>
   *             <li>The time when the collaboration group page was last modified.</li>
   *             <li>The time when the collaboration group page was created.</li>
   *         </ol>
   *     </li>
   *     <li>
   *         <code>sv:collaborationGroupTemplate</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the node was last published.</li>
   *             <li>The time when the node was last modified.</li>
   *             <li>The time when the node was created.</li>
   *         </ol>
   *     </li>
   *     <li>
   *         <code>sv:collaborationGroupFolder</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the node was last modified.</li>
   *             <li>The time when the node was created.</li>
   *         </ol>
   *     </li>
   * </ul>
   *
   * <p>
   *     This resolver also supports some non-collaboration node types:
   * </p>
   * <ul>
   *     <li>
   *         <code>sv:page</code>, <code>sv:article</code>, <code>sv:sitePage</code>, <code>sv:link</code>, <code>sv:template</code>,
   *         <code>sv:structurePage</code>, <code>sv:structureLink</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the node was last published.</li>
   *             <li>The time when the node was last modified.</li>
   *             <li>The time when the node was created.</li>
   *         </ol>
   *     </li>
   *     <li>
   *         <code>sv:image</code>, <code>sv:file</code>, <code>sv:folder</code>, <code>sv:structureFolder</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the node was last modified.</li>
   *             <li>The time when the node was created.</li>
   *         </ol>
   *     </li>
   * </ul>
   * <p>
   *     Unsupported node types will resolve to <code>null</code>.
   * </p>
   *
   * <p>
   *    <strong>Example</strong>
   *    <br>This server-side Javascript code demonstrates how to get the "last updated" Date from av sv:collaborationGroup.
   * </p>
   * <pre><code> <em>// Use NodeResolverUtil to get the Date resolver for Collaboration Nodes</em>
   * var nodeResolverUtil = require('NodeResolverUtil'),
   *     collaborationDateResolver = nodeResolverUtil.getCollaborationDateResolver(),
   *     collaborationGroup,
   *     lastUpdated;
   *
   * <em>// Get the sv:collaborationGroup Node...</em>
   * collaborationGroup = ...
   *
   * <em>// Use the resolver to get (i.e. resolve) the "last updated" Date of the Collaboration group</em>
   * lastUpdated = collaborationDateResolver.resolve(collaborationGroup);</code></pre>
   *
   * <p>
   *    <strong>Sorting tip!</strong><br>
   *    <code>Date</code> implements <code>Comparable</code> so this resolver can be used
   *    to get a <code>Comparator</code> using {@link NodeComparatorUtil#getResolverComparator(Resolver)}.
   *    This resolver and the resolver comparator can be helpful when you want to sort a collection of
   *    <code>sv:collaborationGroup</code> nodes in "most active" order.
   * </p>
   * @return the Date resolver for collaboration-related nodes
   */
  getCollaborationDateResolver(): Resolver;

  /**
   * Gets the versioned Calendar resolver for nodes.
   *
   * <p>
   *    This is a convenience resolver that uses the {@link #getVersionedDateResolver()} to resolve a <code>Date</code>
   *    from a <code>Node</code> and then convert it to a <code>Calendar</code>.
   * </p>
   * <p>
   *    <em>Note!</em> <code>Calendar</code> implements <code>Comparable</code> so this resolver can be used
   *    to get a <code>Comparator</code> using {@link NodeComparatorUtil#getResolverComparator(Resolver)}.
   * </p>
   * @return the Calendar resolver for nodes
   * @see #getVersionedDateResolver()
   */
  getVersionedCalendarResolver(): Resolver;

  /**
   * Gets the versioned Date resolver for nodes.
   *
   * <p>
   *    <strong>Types and versions</strong><br>
   *     The Date value will be resolved differently for different node types in different versions.
   *     For some types it will potentially do multiple checks and return the <em>first found</em> of them
   *     (i.e. first check that has a non-null Date value).
   * </p>
   *
   * <p>
   *    Date resolve in the {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}:
   * </p>
   * <ul>
   *     <li>
   *         <code>sv:page</code>, <code>sv:article</code>, <code>sv:sitePage</code>, <code>sv:link</code>, <code>sv:template</code>,
   *         <code>sv:collaborationGroupPage</code>, <code>sv:collaborationGroupTemplate</code>,
   *         <code>sv:structurePage</code>, <code>sv:structureLink</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the node was last published.</li>
   *             <li>The time when the node was last modified.</li>
   *             <li>The time when the node was created.</li>
   *         </ol>
   *     </li>
   *     <li>
   *         <code>sv:collaborationGroup</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the <code>sv:collaborationGroupPage</code> of the group was last published.</li>
   *             <li>The time when the <code>sv:collaborationGroupPage</code> of the group was last modified.</li>
   *             <li>The time when the <code>sv:collaborationGroupPage</code> of the group was created.</li>
   *         </ol>
   *     </li>
   *     <li>
   *         <code>sv:file</code>, <code>sv:image</code>, <code>sv:folder</code>, <code>sv:structureFolder</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the node was last modified.</li>
   *             <li>The time when the node was created.</li>
   *         </ol>
   *     </li>
   * </ul>
   *
   * <p>
   *    Date resolve in the {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}:
   * </p>
   * <ul>
   *     <li>
   *         <code>sv:page</code>, <code>sv:article</code>, <code>sv:sitePage</code>, <code>sv:link</code>, <code>sv:template</code>,
   *         <code>sv:file</code>, <code>sv:image</code>, <code>sv:folder</code>,
   *         <code>sv:collaborationGroupPage</code>, <code>sv:collaborationGroupTemplate</code>,
   *         <code>sv:structurePage</code>, <code>sv:structureLink</code>, <code>sv:structureFolder</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the node was last modified.</li>
   *             <li>The time when the node was created.</li>
   *         </ol>
   *     </li>
   *     <li>
   *         <code>sv:collaborationGroup</code>
   *         <br><em>- returns first found of:</em>
   *         <ol>
   *             <li>The time when the <code>sv:collaborationGroupPage</code> of the group was last modified.</li>
   *             <li>The time when the <code>sv:collaborationGroupPage</code> of the group was created.</li>
   *         </ol>
   *     </li>
   * </ul>
   * <p>
   *     Unsupported node types will resolve to <code>null</code>.
   * </p>
   *
   * <p>
   *    <strong>Sorting tip!</strong><br>
   *    <code>Date</code> implements <code>Comparable</code> so this resolver can be used
   *    to get a <code>Comparator</code> using {@link NodeComparatorUtil#getResolverComparator(Resolver)}.
   *    This resolver and the resolver comparator can be helpful when you want to sort nodes by time.
   * </p>
   * @return the versioned Date resolver for nodes
   */
  getVersionedDateResolver(): Resolver;

  /**
   * Gets the Locale resolver for nodes.
   *
   * <p>
   *     The Locale value will be resolved differently for different node types:
   * </p>
   * <ul>
   *     <li>
   *         <code>sv:page</code>, <code>sv:article</code>, <code>sv:template</code>, <code>sv:sitePage</code>,
   *         <code>sv:structurePage</code>, <code>sv:collaborationGroupPage</code>, <code>sv:collaborationGroupTemplate</code>,
   *         <code>sv:link</code>, <code>sv:structureLink</code>,
   *         <code>sv:folder</code>, <code>sv:structureFolder</code>, <code>sv:collaborationGroupFolder</code>
   *         <code>sv:archive</code>,
   *         <code>sv:applicationIndex</code>, <code>sv:nodeIndex</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>The Locale of the node.</li>
   *         </ul>
   *     </li>
   *     <li>
   *         <code>sv:collaborationGroup</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>The Locale of the <code>sv:collaborationGroupPage</code> of the group.</li>
   *         </ul>
   *     </li>
   * </ul>
   *
   * <p>
   *     Unsupported node types will resolve to <code>null</code>.
   * </p>
   * @return the Locale resolver for nodes
   * @see senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()
   */
  getLocaleResolver(): Resolver;

  /**
   * Gets the sv:tag resolver for nodes.
   *
   * <p>
   *     The list of tags can be resolved for different node types:
   * </p>
   * <ul>
   *     <li>
   *         <code>sv:page</code>, <code>sv:article</code>, <code>sv:file</code>, <code>sv:image</code>,
   *         <code>sv:sitePage</code>, <code>sv:collaborationGroupPage</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>The potential tags of the node.</li>
   *         </ul>
   *     </li>
   *     <li>
   *         <code>sv:timelineEntry</code>, <code>sv:timelineWallEntry</code>, <code>sv:timelineFileEntry</code>,
   *         <code>sv:timelineFileWallEntry</code>, <code>sv:timelineShareEntry</code>, <code>sv:timelineSharePageEntry</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>The potential tags in the entry text.</li>
   *         </ul>
   *     </li>
   *     <li>
   *         <code>sv:comment</code>, <code>sv:pageComment</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>The potential tags in the comment text.</li>
   *         </ul>
   *     </li>
   *     <li>
   *         <code>sv:tagGroup</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>The potential tags of the tag group.</li>
   *         </ul>
   *     </li>
   *     <li>
   *         <code>sv:tagGroupRepository</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>All the potential tags of all the tag groups of the repository combined.</li>
   *         </ul>
   *     </li>
   * </ul>
   *
   * <p>
   *     Unsupported node types will resolve to an empty list (unmodifiable), i.e. the resolver will never return null.
   * </p>
   * <p>
   *     <em>Note!</em> The resolved list is not explicitly sorted. The tags will typically be in insertion order.
   * </p>
   *
   * <p>
   *    <strong>Example</strong>
   *    <br>This server-side Javascript code demonstrates how to get all tags that belong to a sv:tagGroup, sorted by the tag name.
   * </p>
   * <pre><code> <em>// Resolves and returns a List of sv:tag from a given Node</em>
   * function getAllTagsFrom(from) {
   *    var nodeResolverUtil = require('NodeResolverUtil'),
   *        tagResolver = nodeResolverUtil.getTagsResolver();
   *
   *    return tagResolver.resolve(from);
   * }
   *
   * <em>// Sorts a List of sv:tag by the tag names in ascending order</em>
   * function sortTagList(tagList) {
   *    var nodeComparatorUtil = require('NodeComparatorUtil'),
   *        collectionsInstance = require('CollectionsInstance'),
   *        tagNameComparator;
   *
   *    tagNameComparator = nodeComparatorUtil.getPropertyComparator('tagName');
   *    collectionsInstance.sort(tagList, tagNameComparator);
   * }
   *
   * var resourceLocatorUtil = require('ResourceLocatorUtil'),
   *     tagGroupsRepository,
   *     tags;
   *
   * tagGroupsRepository = resourceLocatorUtil.getTagGroupRepository();
   * tags = getAllTagsFrom(tagGroupsRepository);
   *
   * if (tags.size() &gt; 1) {
   *    sortTagList(tags);
   * }</code></pre>
   * @return a resolver that can resolve a List of sv:tag from a Node
   * @since Sitevision 5
   */
  getTagsResolver(): Resolver;

  /**
   * Gets the sv:tagGroup resolver for nodes.
   *
   * <p>
   *     The list of tag groups can be resolved for different node types:
   * </p>
   * <ul>
   *     <li>
   *         <code>sv:tag</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>The potential tag groups of the tag <em>(a sv:tag can belong to multiple sv:tagGroup)</em>.</li>
   *         </ul>
   *     </li>
   *     <li>
   *         <code>sv:tagGroupRepository</code>
   *         <br><em>- returns:</em>
   *         <ul>
   *             <li>The potential tag groups of the repository.</li>
   *         </ul>
   *     </li>
   *     <li>
   *        <code>sv:sitePage</code>, <code>sv:page</code>, <code>sv:folder</code>, <code>sv:archive</code>,
   *        <code>sv:article</code>, <code>sv:file</code>, <code>sv:image</code>, <code>sv:collaborationGroupFolder</code>,
   *        <code>sv:collaborationGroupPage</code>, <code>sv:userField</code> (of type TAGS),
   *        <code>sv:metadataMultipleTagDefinition</code>, <code>sv:metadataSingleTagDefinition</code>
   *        <br><em>- returns:</em>
   *       <ul>
   *          <li>The potential effective tag groups of the node.</li>
   *       </ul>
   *     </li>
   * </ul>
   *
   * <p>
   *     Unsupported node types will resolve to an empty list (unmodifiable), i.e. the resolver will never return null.
   * </p>
   * <p>
   *     <em>Note!</em> The resolved list is not explicitly sorted. The tag groups will typically be in insertion order.
   * </p>
   * @return a resolver that can resolve a List of sv:tagGroup from a Node
   * @since Sitevision 5
   */
  getTagGroupsResolver(): Resolver;
}

declare namespace NodeResolverUtil {}

declare var nodeResolverUtil: NodeResolverUtil;

export default nodeResolverUtil;
