import type Node from "../../types/javax/jcr/Node";

/**
 * Utility interface for Icons.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getIconUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 */
export interface IconUtil {
  /**
   * Gets the file icon node for a given file extension.
   * @param aFileExtension the file extension (e.g "pdf", "PDF", "doc"). The extension is case insensitive.
   * @return the file icon node for aFileExtension, or <code>null</code> if the extension has no icon mapping
   */
  getFileIcons(aFileExtension: string): Node;

  /**
   * Gets the small file icon URI for a given file extension
   * @param aFileExtension the file extension (e.g "pdf", "PDF", "doc"). The extension is case insensitive.
   * @return the small file icon URI for aFileExtension, or <code>null</code> if no small icon is specified for the extension
   */
  getSmallFileIconURI(aFileExtension: string): string;

  /**
   * Gets the large file icon URI for a given file extension
   * @param aFileExtension the file extension (e.g "pdf", "PDF", "doc"). The extension is case insensitive.
   * @return the large file icon URI for aFileExtension, or <code>null</code> if no large icon is specified for the extension
   */
  getLargeFileIconURI(aFileExtension: string): string;
}

declare namespace IconUtil {}

declare var iconUtil: IconUtil;

export = iconUtil;
