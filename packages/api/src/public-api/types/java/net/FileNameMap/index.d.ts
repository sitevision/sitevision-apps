import type { String } from "../../lang/String";

/**
 * A simple interface which provides a mechanism to map
 *  between a file name and a MIME type string.
 * @author Steven B. Byrne
 * @since JDK1.1
 */
export type FileNameMap = {
  /**
   * Gets the MIME type for the specified file name.
   * @param fileName the specified file name
   * @return a {@code String} indicating the MIME&#xA; type for the specified file name.
   */
  getContentTypeFor(fileName: String | string): string;
};
