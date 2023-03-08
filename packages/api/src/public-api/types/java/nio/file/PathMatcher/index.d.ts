import type { Path } from "../Path";

/**
 * An interface that is implemented by objects that perform match operations on
 *  paths.
 * @since 1.7
 * @see FileSystem#getPathMatcher
 * @see Files#newDirectoryStream(Path,String)
 */
export type PathMatcher = {
  /**
   * Tells if given path matches this matcher's pattern.
   * @param path&#xA; the path to match
   * @return {@code true} if, and only if, the path matches this&#xA; matcher's pattern
   */
  matches(path: Path): boolean;
};
