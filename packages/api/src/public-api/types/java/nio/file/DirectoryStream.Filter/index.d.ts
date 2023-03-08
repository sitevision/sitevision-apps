/**
 * An interface that is implemented by objects that decide if a directory
 *  entry should be accepted or filtered. A {@code Filter} is passed as the
 *  parameter to the {@link Files#newDirectoryStream(Path,DirectoryStream.Filter)}
 *  method when opening a directory to iterate over the entries in the
 *  directory.
 * @param <T> the type of the directory entry
 * @since 1.7
 */
export type Filter = {
  /**
   * Decides if the given directory entry should be accepted or filtered.
   * @param entry&#xA; the directory entry to be tested
   * @return {@code true} if the directory entry should be accepted
   * @throws IOException&#xA; If an I/O error occurs
   */
  accept(entry: unknown): boolean;
};
