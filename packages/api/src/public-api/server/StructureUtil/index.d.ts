import type { Node } from "../../types/javax/jcr/Node";

/**
 * Utility interface for alterations of the node structure.
 *
 *  <p>
 *     <strong>Note!</strong> Use {@link senselogic.sitevision.api.webresource.structure.TrashcanUtil} to
 *     <em>"move a Node to the Trashcan"</em> or <em>"restore a Node from the Trashcan".</em>
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getStructureUtil()}. See {@link senselogic.sitevision.api.Utils}
 *     for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.2
 */
export interface StructureUtil {
  /**
   * <p>
   *     Moves a node from the current parent to another in the node structure.
   *  </p>
   *
   *  <p>
   *     <strong>Trashcan note!</strong> A Node that resides in the Trashcan can <em>not</em> be moved.
   *     Also, a Node can <em>not</em> be moved to the Trashcan (or to any Node that resides in the Trashcan).
   *     Use {@link TrashcanUtil} to move a Node to the Trashcan or restore a Node from the Trashcan.
   *  </p>
   *
   *  <p>
   *     Currently supported node types are:
   *  </p>
   *  <ul>
   *     <li><code>sv:article</code></li>
   *     <li><code>sv:archive</code></li>
   *     <li><code>sv:collaborationGroupPage</code> <em>(since Sitevision 2023.02.1)</em></li>
   *     <li><code>sv:file</code></li>
   *     <li><code>sv:folder</code></li>
   *     <li><code>sv:image</code></li>
   *     <li><code>sv:link</code></li>
   *     <li><code>sv:page</code></li>
   *     <li><code>sv:template</code></li>
   *  </ul>
   *
   *  <p>
   *     The valid structures are listed below. Any other, invalid combination will result in a <code>ConstraintViolationException</code>.
   *  </p>
   *
   *  <p>
   *     <strong>Parent restrictions</strong>
   *  </p>
   *  <table summary="Parent restrictions">
   *     <tr>
   *        <th scope="col">Node</th>
   *        <th scope="col">Allowed parents</th>
   *     </tr>
   *     <tr>
   *        <td><code>sv:article</code></td>
   *        <td><code>sv:archive</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:archive</code></td>
   *        <td><code>sv:sitePage, sv:page, sv:folder, sv:article</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:collaborationGroupPage</code></td>
   *        <td><code>sv:collaborationGroupFolder</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:file</code></td>
   *        <td><code>sv:folder, <em>*fileRepos</em></code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:folder</code></td>
   *        <td><code>sv:sitePage, sv:page, sv:folder, sv:article, sv:templateRepository, <em>*fileRepos</em></code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:image</code></td>
   *        <td><code>sv:folder, <em>*fileRepos</em></code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:link</code></td>
   *        <td><code>sv:sitePage, sv:page, sv:folder, sv:article</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:page</code></td>
   *        <td><code>sv:sitePage, sv:page, sv:folder, sv:article</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:template</code></td>
   *        <td><code>sv:folder, sv:templateRepository</code></td>
   *     </tr>
   *  </table>
   *
   *  <p>
   *     <strong>Root restrictions</strong>
   *  </p>
   *  <table summary="Root restrictions">
   *     <tr>
   *        <th scope="col">Node</th>
   *        <th scope="col">Allowed root nodes</th>
   *     </tr>
   *     <tr>
   *        <td><code>sv:article</code></td>
   *        <td><code>sv:sitePage</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:archive</code></td>
   *        <td><code>sv:sitePage</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:collaborationGroupPage</code></td>
   *        <td><code>sv:sitePage</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:file</code></td>
   *        <td><code>sv:folder, <em>*fileRepos</em></code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:folder</code></td>
   *        <td><code>sv:sitePage, sv:templateRepository, <em>*fileRepos</em></code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:image</code></td>
   *        <td><code><em>*fileRepos</em></code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:link</code></td>
   *        <td><code>sv:sitePage</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:page</code></td>
   *        <td><code>sv:sitePage</code></td>
   *     </tr>
   *     <tr>
   *        <td><code>sv:template</code></td>
   *        <td><code>sv:templateRepository</code></td>
   *     </tr>
   *  </table>
   *  <p>
   *     <em>(*fileRepos corresponds to <code>sv:fileRepository, sv:imageRepository, sv:localFileRepository, sv:localImageRepository</code>)</em>
   *  </p>
   *
   *  <p>
   *     If the node or the parent is null a <code>NullPointerException</code> is thrown.
   *  </p>
   *
   *  <p>
   *     Requires {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MOVE_NODE} and
   *     {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on aNode
   *     If the user is not authorized to alter aNode a <code>ConstraintViolationException</code> is thrown.
   *  </p>
   *
   *  <p>
   *     Requires {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE} on aParent and current container of aNode
   *     If the user is not authorized to write on aParent or the current container of aNode a <code>ConstraintViolationException</code> is thrown.
   *  </p>
   *
   *  <p>
   *     If the parent is descendant of the node a <code>ConstraintViolationException</code> is thrown.
   *  </p>
   *
   *  <p>
   *     <em>
   *        Note! The move operation will be silently ignored if the node is already a child of the parent.
   *     </em>
   *  </p>
   * @param aNode the node that is to be moved. May not be <code>null</code>
   * @param aParent the new parent node. May not be <code>null</code>
   * @throws ConstraintViolationException if current user is not authorized to move aNode to aParent&#xA; or if an invalid structure would be result of the operation
   * @throws RepositoryException if something else goes wrong
   */
  moveNode(aNode: Node, aParent: Node): void;
}

declare namespace StructureUtil {}

declare var structureUtil: StructureUtil;

export default structureUtil;
