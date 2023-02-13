import type { Node } from "../../types/javax/jcr/Node";

/**
 * Archive utility interface that handles nodes with primary node type <code>sv:archive</code>.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getArchiveUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.2
 */
export interface ArchiveUtil {
  /**
   * <p>
   *    Creates an archive as sub node of the specified parent.
   * </p>
   * <p>
   *    The parent may be either a {@code sv:sitePage}, {@code sv:page}, {@code sv:folder}, {@code sv:article}
   *    or a {@code sv:collaborationGroupPage}.
   *    If an other parent is specified a <code>ConstraintViolationException</code> is thrown.
   * </p>
   *
   * <p>Any name can be given an archive. If null is provided a <code>NullPointerException</code> is thrown.</p>
   *
   * <p>The current user must be authorized to create archives and to do write operations on the parent node or
   * a <code>ConstraintViolationException</code> will be thrown.</p>
   *
   * <p>Note that a new archive inherits metadata and permissions from its parent.</p>
   * @param aParent the parent node of the sv:archive. May not be <code>null</code>
   * @param aName the name of the archive. May not be <code>null</code>
   * @return the newly created sv:archive node.
   * @throws ConstraintViolationException if an invalid parent is specified or if the current user is not authorized to create an archive
   * @throws RepositoryException if something else goes wrong
   */
  createArchive(aParent: Node, aName: string): Node;

  /**
   * <p>Alters the name of an archive. If no archive is specified a <code>NullPointerException</code>
   * is thrown. If the node is not a sv:archive an <code>IllegalArgumentException</code> is thrown.</p>
   *
   * <p>Any name can be given an archive. If null is provided a <code>NullPointerException</code> is thrown.</p>
   *
   * <p>The current user must be authorized to do write operations on the archive or
   * a <code>ConstraintViolationException</code> will be thrown.</p>
   * @param anArchive the archive that should be renamed. May not be <code>null</code>
   * @param aName the new name of the archive. May not be <code>null</code>
   * @throws ConstraintViolationException if the current user is not authorized to alter the name of the archive
   * @throws RepositoryException if something else goes wrong
   */
  renameArchive(anArchive: Node, aName: string): void;
}

declare namespace ArchiveUtil {}

declare var archiveUtil: ArchiveUtil;

export default archiveUtil;
