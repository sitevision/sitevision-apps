import type { File } from "../File";
import type { String } from "../../lang/String";

/**
 * Instances of classes that implement this interface are used to
 *  filter filenames. These instances are used to filter directory
 *  listings in the <code>list</code> method of class
 *  <code>File</code>, and by the Abstract Window Toolkit's file
 *  dialog component.
 * @author Arthur van Hoff
 * @author Jonathan Payne
 * @see java.awt.FileDialog#setFilenameFilter(java.io.FilenameFilter)
 * @see java.io.File
 * @see java.io.File#list(java.io.FilenameFilter)
 * @since JDK1.0
 */
export type FilenameFilter = {
  /**
   * Tests if a specified file should be included in a file list.
   * @param dir the directory in which the file was found.
   * @param name the name of the file.
   * @return <code>true</code> if and only if the name should be&#xA; included in the file list; <code>false</code> otherwise.
   */
  accept(dir: File, name: String | string): boolean;
};
