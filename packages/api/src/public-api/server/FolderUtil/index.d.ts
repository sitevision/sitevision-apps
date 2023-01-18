import type Node from "../../types/javax/jcr/Node";

/**
 * Folder utility interface that handles nodes with primary node type <code>sv:folder</code>.
 *
 * <p>
 *    <em>Note!</em> This interface is used to <em>create</em> folders. You would typically use
 *    {@link senselogic.sitevision.api.webresource.structure.StructureUtil} to <em>move</em> a folder
 *    and {@link senselogic.sitevision.api.webresource.structure.TrashcanUtil} to <em>delete</em> a folder.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getFolderUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.2
 */
export interface FolderUtil {
  /**
   * <p>
   *    Creates a folder as sub node of the specified parent.
   * </p>
   * <p>
   *    The parent may be either a {@code sv:sitePage}, {@code sv:page}, {@code sv:folder}, {@code sv:article}, {@code sv:collaborationGroupPage},
   *    {@code sv:imageRepository}, {@code sv:localImageRepository}, {@code sv:personalImageRepository},
   *    {@code sv:fileRepository}, {@code sv:localFileRepository}, {@code sv:personalFileRepository}
   *    or {@code sv:templateRepository}.
   *    If an other parent is specified an <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>Any name can be given the folder. If null is provided a <code>NullPointerException</code> is thrown.</p>
   *
   * <p>The current user must be authorized to create folders and to do write operations on the parent node or
   * a <code>ConstraintViolationException</code> will be thrown.</p>
   *
   * <p>Note that a new folder inherits metadata and permissions from its parent.</p>
   * @param aParent the parent node of the sv:folder. May not be <code>null</code>
   * @param aName the name of the folder. May not be <code>null</code>
   * @return the newly created sv:folder node.
   * @throws ConstraintViolationException if an invalid parent is specified or if the current user is not authorized to create a folder
   * @throws RepositoryException if something else goes wrong
   */
  createFolder(aParent: Node, aName: string): Node;

  /**
   * <p>Alters the name of a folder. If no folder is specified a <code>NullPointerException</code>
   * is thrown. If the node is not a sv:folder an <code>IllegalArgumentException</code> is thrown.</p>
   *
   * <p>Any name can be given a folder. If null is provided a <code>NullPointerException</code> is thrown.</p>
   *
   * <p>The current user must be authorized to do write operations on the folder or
   * a <code>ConstraintViolationException</code> will be thrown.</p>
   * @param aFolder the sv:folder that should be renamed. May not be <code>null</code>
   * @param aName the new name of the folder. May not be <code>null</code>
   * @throws ConstraintViolationException if the current user is not authorized to alter the name of the folder
   * @throws RepositoryException if something else goes wrong
   */
  renameFolder(aFolder: Node, aName: string): void;

  /**
   * Modifies versioning for a file folder (versioning only applies to new files created in the file folder).
   *
   * <p>
   *    If no folder is specified a <code>NullPointerException</code> is thrown.
   *    If the node is not a sv:folder in a file tree an <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    Current user must be authorized to do write operations on the folder or
   *    a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aFolder the sv:folder. May not be null
   * @param aVersioned the new state of versioning for aFolder
   * @throws ConstraintViolationException if the current user is not authorized to mutate aFolder
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 9.1
   */
  setVersioned(aFolder: Node, aVersioned: boolean): void;

  /**
   * Modifies download protection for a file folder (download protection only applies to new files created in the file folder).
   *
   * <p>
   *    Current user (the invoker of this method) must have WRITE permission and MANAGE_DOWNLOAD_PROTECTION permission on the folder node that
   *    should be updated (see {@link senselogic.sitevision.api.security.PermissionUtil.Permission#WRITE}
   *    and {@link senselogic.sitevision.api.security.PermissionUtil.Permission#MANAGE_DOWNLOAD_PROTECTION}).
   * </p>
   *
   * <p>
   *    If no folder is specified a <code>NullPointerException</code> is thrown.
   *    If the node is not a sv:folder in a file tree an <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    <em>Tip! Use {@link senselogic.sitevision.api.property.PropertyUtil} or {@link senselogic.sitevision.api.property.Properties}
   *    to check current state, i.e. the "downloadProtected" boolean property.</em>
   * </p>
   * @param aFolder the sv:folder. May not be null
   * @param aDownloadProtected the new state of download protection for aFolder
   * @throws ConstraintViolationException if the current user is not authorized to mutate aFolder
   * @throws RepositoryException if something else goes wrong
   * @since Sitevision 2022.08.1
   */
  setDownloadProtected(aFolder: Node, aDownloadProtected: boolean): void;
}

declare namespace FolderUtil {}

declare var folderUtil: FolderUtil;

export = folderUtil;
