import type { URL } from "../URL";
import type { URLConnection } from "../URLConnection";
import type { Proxy } from "../Proxy";
import type { String } from "../../lang/String";

import type { InetAddress } from "../InetAddress";
import type { Object } from "../../lang/Object";

/**
 * The abstract class {@code URLStreamHandler} is the common
 *  superclass for all stream protocol handlers. A stream protocol
 *  handler knows how to make a connection for a particular protocol
 *  type, such as {@code http} or {@code https}.
 *  <p>
 *  In most cases, an instance of a {@code URLStreamHandler}
 *  subclass is not created directly by an application. Rather, the
 *  first time a protocol name is encountered when constructing a
 *  {@code URL}, the appropriate stream protocol handler is
 *  automatically loaded.
 * @author James Gosling
 * @see java.net.URL#URL(java.lang.String, java.lang.String, int, java.lang.String)
 * @since JDK1.0
 */
export type URLStreamHandler = Object & {
  /**
   * Opens a connection to the object referenced by the
   *  {@code URL} argument.
   *  This method should be overridden by a subclass.
   *
   *  <p>If for the handler's protocol (such as HTTP or JAR), there
   *  exists a public, specialized URLConnection subclass belonging
   *  to one of the following packages or one of their subpackages:
   *  java.lang, java.io, java.util, java.net, the connection
   *  returned will be of that subclass. For example, for HTTP an
   *  HttpURLConnection will be returned, and for JAR a
   *  JarURLConnection will be returned.
   * @param u the URL that this connects to.
   * @return a {@code URLConnection} object for the {@code URL}.
   * @throws IOException if an I/O error occurs while opening the&#xA; connection.
   */
  openConnection(u: URL): URLConnection;

  /**
   * Same as openConnection(URL), except that the connection will be
   *  made through the specified proxy; Protocol handlers that do not
   *  support proxying will ignore the proxy parameter and make a
   *  normal connection.
   *
   *  Calling this method preempts the system's default ProxySelector
   *  settings.
   * @param u the URL that this connects to.
   * @param p the proxy through which the connection will be made.&#xA; If direct connection is desired, Proxy.NO_PROXY&#xA; should be specified.
   * @return a {@code URLConnection} object for the {@code URL}.
   * @throws IOException if an I/O error occurs while opening the&#xA; connection.
   * @throws IllegalArgumentException if either u or p is null,&#xA; or p has the wrong type.
   * @throws UnsupportedOperationException if the subclass that&#xA; implements the protocol doesn't support this method.
   * @since 1.5
   */
  openConnection(u: URL, p: Proxy): URLConnection;

  /**
   * Parses the string representation of a {@code URL} into a
   *  {@code URL} object.
   *  <p>
   *  If there is any inherited context, then it has already been
   *  copied into the {@code URL} argument.
   *  <p>
   *  The {@code parseURL} method of {@code URLStreamHandler}
   *  parses the string representation as if it were an
   *  {@code http} specification. Most URL protocol families have a
   *  similar parsing. A stream protocol handler for a protocol that has
   *  a different syntax must override this routine.
   * @param u the {@code URL} to receive the result of parsing&#xA; the spec.
   * @param spec the {@code String} representing the URL that&#xA; must be parsed.
   * @param start the character index at which to begin parsing. This is&#xA; just past the '{@code :}' (if there is one) that&#xA; specifies the determination of the protocol name.
   * @param limit the character position to stop parsing at. This is the&#xA; end of the string or the position of the&#xA; "{@code #}" character, if present. All information&#xA; after the sharp sign indicates an anchor.
   */
  parseURL(u: URL, spec: String | string, start: number, limit: number): void;

  /**
   * Returns the default port for a URL parsed by this handler. This method
   *  is meant to be overidden by handlers with default port numbers.
   * @return the default port for a {@code URL} parsed by this handler.
   * @since 1.3
   */
  getDefaultPort(): number;

  /**
   * Provides the default equals calculation. May be overidden by handlers
   *  for other protocols that have different requirements for equals().
   *  This method requires that none of its arguments is null. This is
   *  guaranteed by the fact that it is only called by java.net.URL class.
   * @param u1 a URL object
   * @param u2 a URL object
   * @return {@code true} if the two urls are&#xA; considered equal, ie. they refer to the same&#xA; fragment in the same file.
   * @since 1.3
   */
  equals(u1: URL, u2: URL): boolean;

  /**
   * Provides the default hash calculation. May be overidden by handlers for
   *  other protocols that have different requirements for hashCode
   *  calculation.
   * @param u a URL object
   * @return an {@code int} suitable for hash table indexing
   * @since 1.3
   */
  hashCode(u: URL): number;

  /**
   * Compare two urls to see whether they refer to the same file,
   *  i.e., having the same protocol, host, port, and path.
   *  This method requires that none of its arguments is null. This is
   *  guaranteed by the fact that it is only called indirectly
   *  by java.net.URL class.
   * @param u1 a URL object
   * @param u2 a URL object
   * @return true if u1 and u2 refer to the same file
   * @since 1.3
   */
  sameFile(u1: URL, u2: URL): boolean;

  /**
   * Get the IP address of our host. An empty host field or a DNS failure
   *  will result in a null return.
   * @param u a URL object
   * @return an {@code InetAddress} representing the host&#xA; IP address.
   * @since 1.3
   */
  getHostAddress(u: URL): InetAddress;

  /**
   * Compares the host components of two URLs.
   * @param u1 the URL of the first host to compare
   * @param u2 the URL of the second host to compare
   * @return {@code true} if and only if they&#xA; are equal, {@code false} otherwise.
   * @since 1.3
   */
  hostsEqual(u1: URL, u2: URL): boolean;

  /**
   * Converts a {@code URL} of a specific protocol to a
   *  {@code String}.
   * @param u the URL.
   * @return a string representation of the {@code URL} argument.
   */
  toExternalForm(u: URL): string;

  /**
   * Sets the fields of the {@code URL} argument to the indicated values.
   *  Only classes derived from URLStreamHandler are able
   *  to use this method to set the values of the URL fields.
   * @param u the URL to modify.
   * @param protocol the protocol name.
   * @param host the remote host value for the URL.
   * @param port the port on the remote machine.
   * @param authority the authority part for the URL.
   * @param userInfo the userInfo part of the URL.
   * @param path the path component of the URL.
   * @param query the query part for the URL.
   * @param ref the reference.
   * @throws SecurityException if the protocol handler of the URL is&#xA; different from this one
   * @see java.net.URL#set(java.lang.String, java.lang.String, int, java.lang.String, java.lang.String)
   * @since 1.3
   */
  setURL(
    u: URL,
    protocol: String | string,
    host: String | string,
    port: number,
    authority: String | string,
    userInfo: String | string,
    path: String | string,
    query: String | string,
    ref: String | string
  ): void;

  /**
   * Sets the fields of the {@code URL} argument to the indicated values.
   *  Only classes derived from URLStreamHandler are able
   *  to use this method to set the values of the URL fields.
   * @param u the URL to modify.
   * @param protocol the protocol name. This value is ignored since 1.2.
   * @param host the remote host value for the URL.
   * @param port the port on the remote machine.
   * @param file the file.
   * @param ref the reference.
   * @throws SecurityException if the protocol handler of the URL is&#xA; different from this one
   * @deprecated Use setURL(URL, String, String, int, String, String, String,&#xA; String);
   */
  setURL(
    u: URL,
    protocol: String | string,
    host: String | string,
    port: number,
    file: String | string,
    ref: String | string
  ): void;
};
