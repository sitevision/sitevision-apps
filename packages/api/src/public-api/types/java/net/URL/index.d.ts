import type { String } from "../../lang/String";

import type { Object } from "../../lang/Object";

import type { URI } from "../URI";
import type { URLConnection } from "../URLConnection";
import type { Proxy } from "../Proxy";
import type { InputStream } from "../../io/InputStream";
import type { Class } from "../../lang/Class";
import type { Serializable } from "../../io/Serializable";

/**
 * Class {@code URL} represents a Uniform Resource
 *  Locator, a pointer to a "resource" on the World
 *  Wide Web. A resource can be something as simple as a file or a
 *  directory, or it can be a reference to a more complicated object,
 *  such as a query to a database or to a search engine. More
 *  information on the types of URLs and their formats can be found at:
 *  <a href=
 *  "http://web.archive.org/web/20051219043731/http://archive.ncsa.uiuc.edu/SDG/Software/Mosaic/Demo/url-primer.html">
 *  <i>Types of URL</i></a>
 *  <p>
 *  In general, a URL can be broken into several parts. Consider the
 *  following example:
 *  <blockquote><pre>
 *      http://www.example.com/docs/resource1.html
 *  </pre></blockquote>
 *  <p>
 *  The URL above indicates that the protocol to use is
 *  {@code http} (HyperText Transfer Protocol) and that the
 *  information resides on a host machine named
 *  {@code www.example.com}. The information on that host
 *  machine is named {@code /docs/resource1.html}. The exact
 *  meaning of this name on the host machine is both protocol
 *  dependent and host dependent. The information normally resides in
 *  a file, but it could be generated on the fly. This component of
 *  the URL is called the <i>path</i> component.
 *  <p>
 *  A URL can optionally specify a "port", which is the
 *  port number to which the TCP connection is made on the remote host
 *  machine. If the port is not specified, the default port for
 *  the protocol is used instead. For example, the default port for
 *  {@code http} is {@code 80}. An alternative port could be
 *  specified as:
 *  <blockquote><pre>
 *      http://www.example.com:1080/docs/resource1.html
 *  </pre></blockquote>
 *  <p>
 *  The syntax of {@code URL} is defined by  <a
 *  href="http://www.ietf.org/rfc/rfc2396.txt"><i>RFC&nbsp;2396: Uniform
 *  Resource Identifiers (URI): Generic Syntax</i></a>, amended by <a
 *  href="http://www.ietf.org/rfc/rfc2732.txt"><i>RFC&nbsp;2732: Format for
 *  Literal IPv6 Addresses in URLs</i></a>. The Literal IPv6 address format
 *  also supports scope_ids. The syntax and usage of scope_ids is described
 *  <a href="Inet6Address.html#scoped">here</a>.
 *  <p>
 *  A URL may have appended to it a "fragment", also known
 *  as a "ref" or a "reference". The fragment is indicated by the sharp
 *  sign character "#" followed by more characters. For example,
 *  <blockquote><pre>
 *      http://java.sun.com/index.html#chapter1
 *  </pre></blockquote>
 *  <p>
 *  This fragment is not technically part of the URL. Rather, it
 *  indicates that after the specified resource is retrieved, the
 *  application is specifically interested in that part of the
 *  document that has the tag {@code chapter1} attached to it. The
 *  meaning of a tag is resource specific.
 *  <p>
 *  An application can also specify a "relative URL",
 *  which contains only enough information to reach the resource
 *  relative to another URL. Relative URLs are frequently used within
 *  HTML pages. For example, if the contents of the URL:
 *  <blockquote><pre>
 *      http://java.sun.com/index.html
 *  </pre></blockquote>
 *  contained within it the relative URL:
 *  <blockquote><pre>
 *      FAQ.html
 *  </pre></blockquote>
 *  it would be a shorthand for:
 *  <blockquote><pre>
 *      http://java.sun.com/FAQ.html
 *  </pre></blockquote>
 *  <p>
 *  The relative URL need not specify all the components of a URL. If
 *  the protocol, host name, or port number is missing, the value is
 *  inherited from the fully specified URL. The file component must be
 *  specified. The optional fragment is not inherited.
 *  <p>
 *  The URL class does not itself encode or decode any URL components
 *  according to the escaping mechanism defined in RFC2396. It is the
 *  responsibility of the caller to encode any fields, which need to be
 *  escaped prior to calling URL, and also to decode any escaped fields,
 *  that are returned from URL. Furthermore, because URL has no knowledge
 *  of URL escaping, it does not recognise equivalence between the encoded
 *  or decoded form of the same URL. For example, the two URLs:<br>
 *  <pre>    http://foo.com/hello world/ and http://foo.com/hello%20world</pre>
 *  would be considered not equal to each other.
 *  <p>
 *  Note, the {@link java.net.URI} class does perform escaping of its
 *  component fields in certain circumstances. The recommended way
 *  to manage the encoding and decoding of URLs is to use {@link java.net.URI},
 *  and to convert between these two classes using {@link #toURI()} and
 *  {@link URI#toURL()}.
 *  <p>
 *  The {@link URLEncoder} and {@link URLDecoder} classes can also be
 *  used, but only for HTML form encoding, which is not the same
 *  as the encoding scheme defined in RFC2396.
 * @author James Gosling
 * @since JDK1.0
 */
export type URL = Object &
  Serializable & {
    /**
     * Gets the query part of this {@code URL}.
     * @return the query part of this {@code URL},&#xA; or <CODE>null</CODE> if one does not exist
     * @since 1.3
     */
    getQuery(): string;

    /**
     * Gets the path part of this {@code URL}.
     * @return the path part of this {@code URL}, or an&#xA; empty string if one does not exist
     * @since 1.3
     */
    getPath(): string;

    /**
     * Gets the userInfo part of this {@code URL}.
     * @return the userInfo part of this {@code URL}, or&#xA; <CODE>null</CODE> if one does not exist
     * @since 1.3
     */
    getUserInfo(): string;

    /**
     * Gets the authority part of this {@code URL}.
     * @return the authority part of this {@code URL}
     * @since 1.3
     */
    getAuthority(): string;

    /**
     * Gets the port number of this {@code URL}.
     * @return the port number, or -1 if the port is not set
     */
    getPort(): number;

    /**
     * Gets the default port number of the protocol associated
     *  with this {@code URL}. If the URL scheme or the URLStreamHandler
     *  for the URL do not define a default port number,
     *  then -1 is returned.
     * @return the port number
     * @since 1.4
     */
    getDefaultPort(): number;

    /**
     * Gets the protocol name of this {@code URL}.
     * @return the protocol of this {@code URL}.
     */
    getProtocol(): string;

    /**
     * Gets the host name of this {@code URL}, if applicable.
     *  The format of the host conforms to RFC 2732, i.e. for a
     *  literal IPv6 address, this method will return the IPv6 address
     *  enclosed in square brackets ({@code '['} and {@code ']'}).
     * @return the host name of this {@code URL}.
     */
    getHost(): string;

    /**
     * Gets the file name of this {@code URL}.
     *  The returned file portion will be
     *  the same as <CODE>getPath()</CODE>, plus the concatenation of
     *  the value of <CODE>getQuery()</CODE>, if any. If there is
     *  no query portion, this method and <CODE>getPath()</CODE> will
     *  return identical results.
     * @return the file name of this {@code URL},&#xA; or an empty string if one does not exist
     */
    getFile(): string;

    /**
     * Gets the anchor (also known as the "reference") of this
     *  {@code URL}.
     * @return the anchor (also known as the "reference") of this&#xA; {@code URL}, or <CODE>null</CODE> if one does not exist
     */
    getRef(): string;

    /**
     * Compares this URL for equality with another object.<p>
     *
     *  If the given object is not a URL then this method immediately returns
     *  {@code false}.<p>
     *
     *  Two URL objects are equal if they have the same protocol, reference
     *  equivalent hosts, have the same port number on the host, and the same
     *  file and fragment of the file.<p>
     *
     *  Two hosts are considered equivalent if both host names can be resolved
     *  into the same IP addresses; else if either host name can't be
     *  resolved, the host names must be equal without regard to case; or both
     *  host names equal to null.<p>
     *
     *  Since hosts comparison requires name resolution, this operation is a
     *  blocking operation. <p>
     *
     *  Note: The defined behavior for {@code equals} is known to
     *  be inconsistent with virtual hosting in HTTP.
     * @param obj the URL to compare against.
     * @return {@code true} if the objects are the same;&#xA; {@code false} otherwise.
     */
    equals(obj: unknown): boolean;

    /**
     * Creates an integer suitable for hash table indexing.<p>
     *
     *  The hash code is based upon all the URL components relevant for URL
     *  comparison. As such, this operation is a blocking operation.<p>
     * @return a hash code for this {@code URL}.
     */
    hashCode(): number;

    /**
     * Compares two URLs, excluding the fragment component.<p>
     *
     *  Returns {@code true} if this {@code URL} and the
     *  {@code other} argument are equal without taking the
     *  fragment component into consideration.
     * @param other the {@code URL} to compare against.
     * @return {@code true} if they reference the same remote object;&#xA; {@code false} otherwise.
     */
    sameFile(other: URL): boolean;

    /**
     * Constructs a string representation of this {@code URL}. The
     *  string is created by calling the {@code toExternalForm}
     *  method of the stream protocol handler for this object.
     * @return a string representation of this object.
     * @see java.net.URL#URL(java.lang.String, java.lang.String, int,&#xA; java.lang.String)
     * @see java.net.URLStreamHandler#toExternalForm(java.net.URL)
     */
    toString(): string;

    /**
     * Constructs a string representation of this {@code URL}. The
     *  string is created by calling the {@code toExternalForm}
     *  method of the stream protocol handler for this object.
     * @return a string representation of this object.
     * @see java.net.URL#URL(java.lang.String, java.lang.String,&#xA; int, java.lang.String)
     * @see java.net.URLStreamHandler#toExternalForm(java.net.URL)
     */
    toExternalForm(): string;

    /**
     * Returns a {@link java.net.URI} equivalent to this URL.
     *  This method functions in the same way as {@code new URI (this.toString())}.
     *  <p>Note, any URL instance that complies with RFC 2396 can be converted
     *  to a URI. However, some URLs that are not strictly in compliance
     *  can not be converted to a URI.
     * @throws URISyntaxException if this URL is not formatted strictly according to&#xA; to RFC2396 and cannot be converted to a URI.
     * @return a URI instance equivalent to this URL.
     * @since 1.5
     */
    toURI(): URI;

    /**
     * Returns a {@link java.net.URLConnection URLConnection} instance that
     *  represents a connection to the remote object referred to by the
     *  {@code URL}.
     *
     *  <P>A new instance of {@linkplain java.net.URLConnection URLConnection} is
     *  created every time when invoking the
     *  {@linkplain java.net.URLStreamHandler#openConnection(URL)
     *  URLStreamHandler.openConnection(URL)} method of the protocol handler for
     *  this URL.</P>
     *
     *  <P>It should be noted that a URLConnection instance does not establish
     *  the actual network connection on creation. This will happen only when
     *  calling {@linkplain java.net.URLConnection#connect() URLConnection.connect()}.</P>
     *
     *  <P>If for the URL's protocol (such as HTTP or JAR), there
     *  exists a public, specialized URLConnection subclass belonging
     *  to one of the following packages or one of their subpackages:
     *  java.lang, java.io, java.util, java.net, the connection
     *  returned will be of that subclass. For example, for HTTP an
     *  HttpURLConnection will be returned, and for JAR a
     *  JarURLConnection will be returned.</P>
     * @return a {@link java.net.URLConnection URLConnection} linking&#xA; to the URL.
     * @throws IOException if an I/O exception occurs.
     * @see java.net.URL#URL(java.lang.String, java.lang.String,&#xA; int, java.lang.String)
     */
    openConnection(): URLConnection;

    /**
     * Same as {@link #openConnection()}, except that the connection will be
     *  made through the specified proxy; Protocol handlers that do not
     *  support proxing will ignore the proxy parameter and make a
     *  normal connection.
     *
     *  Invoking this method preempts the system's default ProxySelector
     *  settings.
     * @param proxy the Proxy through which this connection&#xA; will be made. If direct connection is desired,&#xA; Proxy.NO_PROXY should be specified.
     * @return a {@code URLConnection} to the URL.
     * @throws IOException if an I/O exception occurs.
     * @throws SecurityException if a security manager is present&#xA; and the caller doesn't have permission to connect&#xA; to the proxy.
     * @throws IllegalArgumentException will be thrown if proxy is null,&#xA; or proxy has the wrong type
     * @throws UnsupportedOperationException if the subclass that&#xA; implements the protocol handler doesn't support&#xA; this method.
     * @see java.net.URL#URL(java.lang.String, java.lang.String,&#xA; int, java.lang.String)
     * @see java.net.URLConnection
     * @see java.net.URLStreamHandler#openConnection(java.net.URL,&#xA; java.net.Proxy)
     * @since 1.5
     */
    openConnection(proxy: Proxy): URLConnection;

    /**
     * Opens a connection to this {@code URL} and returns an
     *  {@code InputStream} for reading from that connection. This
     *  method is a shorthand for:
     *  <blockquote><pre>
     *      openConnection().getInputStream()
     *  </pre></blockquote>
     * @return an input stream for reading from the URL connection.
     * @throws IOException if an I/O exception occurs.
     * @see java.net.URL#openConnection()
     * @see java.net.URLConnection#getInputStream()
     */
    openStream(): InputStream;

    /**
     * Gets the contents of this URL. This method is a shorthand for:
     *  <blockquote><pre>
     *      openConnection().getContent()
     *  </pre></blockquote>
     * @return the contents of this URL.
     * @throws IOException if an I/O exception occurs.
     * @see java.net.URLConnection#getContent()
     */
    getContent(): unknown;

    /**
     * Gets the contents of this URL. This method is a shorthand for:
     *  <blockquote><pre>
     *      openConnection().getContent(Class[])
     *  </pre></blockquote>
     * @param classes an array of Java types
     * @return the content object of this URL that is the first match of&#xA; the types specified in the classes array.&#xA; null if none of the requested types are supported.
     * @throws IOException if an I/O exception occurs.
     * @see java.net.URLConnection#getContent(Class[])
     * @since 1.3
     */
    getContent(classes: Class[]): unknown;
  };
