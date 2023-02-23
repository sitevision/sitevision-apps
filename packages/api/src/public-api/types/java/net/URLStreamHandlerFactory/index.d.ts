import type { String } from "../../lang/String";
import type { URLStreamHandler } from "../URLStreamHandler";

/**
 * This interface defines a factory for {@code URL} stream
 *  protocol handlers.
 *  <p>
 *  It is used by the {@code URL} class to create a
 *  {@code URLStreamHandler} for a specific protocol.
 * @author Arthur van Hoff
 * @see java.net.URL
 * @see java.net.URLStreamHandler
 * @since JDK1.0
 */
export type URLStreamHandlerFactory = {
  /**
   * Creates a new {@code URLStreamHandler} instance with the specified
   *  protocol.
   * @param protocol the protocol ("{@code ftp}",&#xA; "{@code http}", "{@code nntp}", etc.).
   * @return a {@code URLStreamHandler} for the specific protocol.
   * @see java.net.URLStreamHandler
   */
  createURLStreamHandler(protocol: String | string): URLStreamHandler;
};
