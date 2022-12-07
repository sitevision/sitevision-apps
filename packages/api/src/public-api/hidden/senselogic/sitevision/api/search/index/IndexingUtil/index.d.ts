import Node from "../../../../../../javax/jcr/Node";

/**
 * Indexing utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getIndexingUtil()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 * </p>The minimum resource priority.
 *
 * A resource indexed with this priority value will get a document boost of <code>0.1F</code>.The default resource priority.
 *
 * A resource indexed with this priority value will get the default document boost of <code>1.0F</code>.The maximum resource priority.
 *
 * A resource indexed with this priority value will get a document boost of <code>2.0F</code>.
 * @author Magnus Lövgren
 * @since Sitevision 3.6.4
 */

interface IndexingUtil {
  /**
   * Sets the resource priority for an indexable node.
   *
   * <p>
   *    The <em>resource priority</em> of a node will influence its <em>document boost</em> when indexed.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> Method invocations that doesn't fulfill these 3 criteria will always fail (i.e. return <code>false</code>):
   * </p>
   * <ul>
   *    <li>
   *       The <code>aNode</code> must be an indexable node, typically a <code>sv:page</code>, <code>sv:article</code>,
   *       <code>sv:file</code> or <code>sv:image</code>.
   *    </li>
   *    <li>
   *       The <code>aPriority</code> must be in interval: [ {@link #MIN_RESOURCE_PRIORITY} .. {@link #MAX_RESOURCE_PRIORITY} ].
   *    </li>
   *    <li>
   *       Current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} and
   *       {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MODIFY_SEARCH_PRIORITY}
   *       on <code>aNode</code>.
   *    </li>
   * </ul>
   * <p>
   *    This method tries to acquire a <em>lock</em> on <code>aNode</code> in order to mutate its resource priority.
   *    Mutation will fail (i.e. this method will return <code>false</code>) if <code>aNode</code> is already locked.
   * </p>
   *
   * <p>
   *    <em>Indexing note!</em> Changing the value of the resource priority of a node will automatically trigger a re-index of the node.
   * </p>
   * @param aNode the indexable node
   * @param aPriority the priority, i.e. in interval: [ {@link #MIN_RESOURCE_PRIORITY} .. {@link #MAX_RESOURCE_PRIORITY} ]
   * @return <code>true</code> if the operation succeeded, <code>false</code> otherwise
   */
  setResourcePriority(aNode: Node, aPriority: int): boolean;
}
