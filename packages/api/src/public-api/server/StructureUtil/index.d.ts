import type { Node } from "../../types/javax/jcr/Node";

/**
 * Utility interface for alterations of the node structure.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getStructureUtil()}. See {@link senselogic.sitevision.api.Utils}
 *    for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.2
 */
export interface StructureUtil {
  /**
   * <p>
   *    Moves a node from the current parent to another in the node structure.
   * </p>
   * <p>
   *    Currently supported node types are:
   * </p>
   * <ul>
   *    <li><code>sv:article</code></li>
   *    <li><code>sv:archive</code></li>
   *    <li><code>sv:file</code></li>
   *    <li><code>sv:folder</code></li>
   *    <li><code>sv:image</code></li>
   *    <li><code>sv:link</code></li>
   *    <li><code>sv:page</code></li>
   *    <li><code>sv:template</code></li>
   * </ul>
   *
   * <p>
   *    The valid structures are listed below. Any other, invalid combination will result in a <code>ConstraintViolationException</code>.
   * </p>
   *
   * <pre>
   *    Node        - allowed parents
   *    ------------------------------------------------------------------------------------------------------
   *    sv:article  - sv:archive
   *    sv:archive  - sv:sitePage, sv:page, sv:folder, sv:article
   *    sv:file     - sv:folder, *fileRepos
   *    sv:folder   - sv:sitePage, sv:page, sv:folder, sv:article, sv:templateRepository, *fileRepos
   *    sv:image    - sv:folder, *fileRepos
   *    sv:link     - sv:sitePage, sv:page, sv:folder, sv:article
   *    sv:page     - sv:sitePage, sv:page, sv:folder, sv:article
   *    sv:template - sv:folder, sv:templateRepository
   *
   *    Node        - allowed root nodes
   *    ------------------------------------------------------------------------------------------------------
   *    sv:archive  - sv:sitePage
   *    sv:article  - sv:sitePage
   *    sv:file     - *fileRepos
   *    sv:folder   - sv:sitePage, sv:templateRepository, *fileRepos
   *    sv:image    - *fileRepos
   *    sv:link     - sv:sitePage
   *    sv:page     - sv:sitePage
   *    sv:template - sv:templateRepository
   *
   *    *fileRepos corresponds to sv:fileRepository, sv:imageRepository, sv:localFileRepository, sv:localImageRepository
   * </pre>
   *
   * <p>
   *    If the node or the parent is null a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    Requires {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MOVE_NODE} and
   *    {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on aNode
   *    If the user is not authorized to alter aNode a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    Requires {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on aParent and current container of aNode
   *    If the user is not authorized to write on aParent or the current container of aNode a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    If the parent is descendant of the node a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>
   *    <em>
   *       Note! The move operation will be ignored if the node is already a child of the parent.
   *    </em>
   * </p>
   * @param aNode the node that is to be moved. May not be <code>null</code>
   * @param aParent the new parent node. May not be <code>null</code>
   * @throws ConstraintViolationException if current user is not authorized to move aNode to aParent or if an invalid structure would be result of the operation
   * @throws RepositoryException if something else goes wrong
   */
  moveNode(aNode: Node, aParent: Node): void;
}

declare namespace StructureUtil {}

declare var structureUtil: StructureUtil;

export default structureUtil;
