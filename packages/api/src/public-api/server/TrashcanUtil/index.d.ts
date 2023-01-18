import type Node from "../../types/javax/jcr/Node";

/**
 * Trashcan utility interface for delete and restore of nodes.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getTrashcanUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @see senselogic.sitevision.api.resource.ResourceLocatorUtil#getTrashcan()
 * @since Sitevision 2.6.2
 */
export interface TrashcanUtil {
  /**
   * <p>
   *    Puts a node in the site trashcan.
   * </p>
   * <p>
   *    A node that has been deleted (i.e. put in the site trashcan) can later be restored using the method
   *    {@link #restoreNode(javax.jcr.Node)} or be permanently removed with the method
   *    {@link #deleteNodeFromTrashcan(javax.jcr.Node)}.
   * </p>
   * <p>
   *    Valid node types are:
   * </p>
   * <ul>
   *    <li><code>sv:archive</code></li>
   *    <li><code>sv:article</code></li>
   *    <li><code>sv:file</code></li>
   *    <li><code>sv:folder</code></li>
   *    <li><code>sv:image</code></li>
   *    <li><code>sv:link</code></li>
   *    <li><code>sv:page</code></li>
   *    <li><code>sv:template</code></li>
   * </ul>
   * <p>
   *    If any other node is specified a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to delete objects, to alter the node and its current parent or
   *    a <code>ConstraintViolationException</code> is thrown
   *    (see {@link senselogic.sitevision.api.security.PermissionUtil#hasEffectiveDeletePermission(Node, Node)}).
   * </p>
   *
   * <p>
   *    If no node is specified a <code>NullPointerException</code> is thrown.
   * </p>
   * @param aNode the node that will be moved to the site trashcan. May not be <code>null</code>
   * @throws ConstraintViolationException if an invalid node is specified or if the current user is not authorized to perform the delete operation
   * @throws RepositoryException if something else goes wrong
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectiveDeletePermission(Node, Node)
   */
  moveNodeToTrashcan(aNode: Node): void;

  /**
   * <p>
   *    Restores a node from the site trashcan.
   * </p>
   * <p>
   *    If the node is not in the site trashcan or if an invalid node type is specified
   *    (i.e. a node that never could be in the site trashcan like the sv:site node)
   *    a <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to alter the node and the parent node after the
   *    restore operation or a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node is specified a <code>NullPointerException</code> is thrown.
   * </p>
   * @param aNode the node that should be restored. This node must be located in the site trashcan. May not be null
   * @throws ConstraintViolationException is thrown if the current user is not authorized to perform the restore operation
   * @throws RepositoryException is thrown if something else goes wrong
   */
  restoreNode(aNode: Node): void;

  /**
   * <p>
   *    Deletes a node from the site trashcan.
   * </p>
   * <p>
   *    If the node is not in the site trashcan or if an invalid node type is specified
   *    (i.e. a node that never could be in the site trashcan like the sv:site node)
   *    a <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to delete objects or a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node is specified a <code>NullPointerException</code> is thrown.
   * </p>
   * @param aNode the node that should be removed from the site trashcan. This node must be located in the site trashcan. May not be <code>null</code>
   * @throws ConstraintViolationException if the current user is not authorized to perform the delete operation
   * @throws RepositoryException if something else goes wrong
   */
  deleteNodeFromTrashcan(aNode: Node): void;

  /**
   * <p>
   *    Checks if a node is in the site trashcan
   * </p>
   *
   * <p>
   *    If no node is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    Note that some nodes can't be put in the trashcan (e.g. sv:user, sv:color, sv:portlet, sv:layout etc).
   *    For such nodes <code>false</code> will be returned.
   * </p>
   * @param aNode the node to be checked if it is located in the site trashcan. May not be <code>null</code>
   * @return <code>true</code> if the <code>Node</code> is in site trashcan, <code>false</code> otherwise
   * @since Sitevision 6.2
   */
  isInTrashcan(aNode: Node): boolean;
}

declare namespace TrashcanUtil {}

declare var trashcanUtil: TrashcanUtil;

export = trashcanUtil;
