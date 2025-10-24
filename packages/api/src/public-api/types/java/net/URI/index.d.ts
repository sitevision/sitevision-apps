/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../lang/String";
import type { URL } from "../URL";

import type { Object } from "../../lang/Object";
import type { Comparable } from "../../lang/Comparable";
import type { Serializable } from "../../io/Serializable";

/**
 * Represents a Uniform Resource Identifier (URI) reference.
 *
 *  <p> Aside from some minor deviations noted below, an instance of this
 *  class represents a URI reference as defined by
 *  <a href="http://www.ietf.org/rfc/rfc2396.txt"><i>RFC&nbsp;2396: Uniform
 *  Resource Identifiers (URI): Generic Syntax</i></a>, amended by <a
 *  href="http://www.ietf.org/rfc/rfc2732.txt"><i>RFC&nbsp;2732: Format for
 *  Literal IPv6 Addresses in URLs</i></a>. The Literal IPv6 address format
 *  also supports scope_ids. The syntax and usage of scope_ids is described
 *  <a href="Inet6Address.html#scoped">here</a>.
 *  This class provides constructors for creating URI instances from
 *  their components or by parsing their string forms, methods for accessing the
 *  various components of an instance, and methods for normalizing, resolving,
 *  and relativizing URI instances.  Instances of this class are immutable.
 *
 *
 *  <h3> URI syntax and components </h3>
 *
 *  At the highest level a URI reference (hereinafter simply "URI") in string
 *  form has the syntax
 *
 *  <blockquote>
 *  [<i>scheme</i><b>{@code :}</b>]<i>scheme-specific-part</i>[<b>{@code #}</b><i>fragment</i>]
 *  </blockquote>
 *
 *  where square brackets [...] delineate optional components and the characters
 *  <b>{@code :}</b> and <b>{@code #}</b> stand for themselves.
 *
 *  <p> An <i>absolute</i> URI specifies a scheme; a URI that is not absolute is
 *  said to be <i>relative</i>.  URIs are also classified according to whether
 *  they are <i>opaque</i> or <i>hierarchical</i>.
 *
 *  <p> An <i>opaque</i> URI is an absolute URI whose scheme-specific part does
 *  not begin with a slash character ({@code '/'}).  Opaque URIs are not
 *  subject to further parsing.  Some examples of opaque URIs are:
 *
 *  <blockquote><table cellpadding=0 cellspacing=0 summary="layout">
 *  <tr><td>{@code mailto:java-net@java.sun.com}<td></tr>
 *  <tr><td>{@code news:comp.lang.java}<td></tr>
 *  <tr><td>{@code urn:isbn:096139210x}</td></tr>
 *  </table></blockquote>
 *
 *  <p> A <i>hierarchical</i> URI is either an absolute URI whose
 *  scheme-specific part begins with a slash character, or a relative URI, that
 *  is, a URI that does not specify a scheme.  Some examples of hierarchical
 *  URIs are:
 *
 *  <blockquote>
 *  {@code http://java.sun.com/j2se/1.3/}<br>
 *  {@code docs/guide/collections/designfaq.html#28}<br>
 *  {@code ../../../demo/jfc/SwingSet2/src/SwingSet2.java}<br>
 *  {@code file:///~/calendar}
 *  </blockquote>
 *
 *  <p> A hierarchical URI is subject to further parsing according to the syntax
 *
 *  <blockquote>
 *  [<i>scheme</i><b>{@code :}</b>][<b>{@code //}</b><i>authority</i>][<i>path</i>][<b>{@code ?}</b><i>query</i>][<b>{@code #}</b><i>fragment</i>]
 *  </blockquote>
 *
 *  where the characters <b>{@code :}</b>, <b>{@code /}</b>,
 *  <b>{@code ?}</b>, and <b>{@code #}</b> stand for themselves.  The
 *  scheme-specific part of a hierarchical URI consists of the characters
 *  between the scheme and fragment components.
 *
 *  <p> The authority component of a hierarchical URI is, if specified, either
 *  <i>server-based</i> or <i>registry-based</i>.  A server-based authority
 *  parses according to the familiar syntax
 *
 *  <blockquote>
 *  [<i>user-info</i><b>{@code @}</b>]<i>host</i>[<b>{@code :}</b><i>port</i>]
 *  </blockquote>
 *
 *  where the characters <b>{@code @}</b> and <b>{@code :}</b> stand for
 *  themselves.  Nearly all URI schemes currently in use are server-based.  An
 *  authority component that does not parse in this way is considered to be
 *  registry-based.
 *
 *  <p> The path component of a hierarchical URI is itself said to be absolute
 *  if it begins with a slash character ({@code '/'}); otherwise it is
 *  relative.  The path of a hierarchical URI that is either absolute or
 *  specifies an authority is always absolute.
 *
 *  <p> All told, then, a URI instance has the following nine components:
 *
 *  <blockquote><table summary="Describes the components of a URI:scheme,scheme-specific-part,authority,user-info,host,port,path,query,fragment">
 *  <tr><th><i>Component</i></th><th><i>Type</i></th></tr>
 *  <tr><td>scheme</td><td>{@code String}</td></tr>
 *  <tr><td>scheme-specific-part&nbsp;&nbsp;&nbsp;&nbsp;</td><td>{@code String}</td></tr>
 *  <tr><td>authority</td><td>{@code String}</td></tr>
 *  <tr><td>user-info</td><td>{@code String}</td></tr>
 *  <tr><td>host</td><td>{@code String}</td></tr>
 *  <tr><td>port</td><td>{@code int}</td></tr>
 *  <tr><td>path</td><td>{@code String}</td></tr>
 *  <tr><td>query</td><td>{@code String}</td></tr>
 *  <tr><td>fragment</td><td>{@code String}</td></tr>
 *  </table></blockquote>
 *
 *  In a given instance any particular component is either <i>undefined</i> or
 *  <i>defined</i> with a distinct value.  Undefined string components are
 *  represented by {@code null}, while undefined integer components are
 *  represented by {@code -1}.  A string component may be defined to have the
 *  empty string as its value; this is not equivalent to that component being
 *  undefined.
 *
 *  <p> Whether a particular component is or is not defined in an instance
 *  depends upon the type of the URI being represented.  An absolute URI has a
 *  scheme component.  An opaque URI has a scheme, a scheme-specific part, and
 *  possibly a fragment, but has no other components.  A hierarchical URI always
 *  has a path (though it may be empty) and a scheme-specific-part (which at
 *  least contains the path), and may have any of the other components.  If the
 *  authority component is present and is server-based then the host component
 *  will be defined and the user-information and port components may be defined.
 *
 *
 *  <h4> Operations on URI instances </h4>
 *
 *  The key operations supported by this class are those of
 *  <i>normalization</i>, <i>resolution</i>, and <i>relativization</i>.
 *
 *  <p> <i>Normalization</i> is the process of removing unnecessary {@code "."}
 *  and {@code ".."} segments from the path component of a hierarchical URI.
 *  Each {@code "."} segment is simply removed.  A {@code ".."} segment is
 *  removed only if it is preceded by a non-{@code ".."} segment.
 *  Normalization has no effect upon opaque URIs.
 *
 *  <p> <i>Resolution</i> is the process of resolving one URI against another,
 *  <i>base</i> URI.  The resulting URI is constructed from components of both
 *  URIs in the manner specified by RFC&nbsp;2396, taking components from the
 *  base URI for those not specified in the original.  For hierarchical URIs,
 *  the path of the original is resolved against the path of the base and then
 *  normalized.  The result, for example, of resolving
 *
 *  <blockquote>
 *  {@code docs/guide/collections/designfaq.html#28}
 *  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 *  &nbsp;&nbsp;&nbsp;&nbsp;(1)
 *  </blockquote>
 *
 *  against the base URI {@code http://java.sun.com/j2se/1.3/} is the result
 *  URI
 *
 *  <blockquote>
 *  {@code https://docs.oracle.com/javase/1.3/docs/guide/collections/designfaq.html#28}
 *  </blockquote>
 *
 *  Resolving the relative URI
 *
 *  <blockquote>
 *  {@code ../../../demo/jfc/SwingSet2/src/SwingSet2.java}&nbsp;&nbsp;&nbsp;&nbsp;(2)
 *  </blockquote>
 *
 *  against this result yields, in turn,
 *
 *  <blockquote>
 *  {@code http://java.sun.com/j2se/1.3/demo/jfc/SwingSet2/src/SwingSet2.java}
 *  </blockquote>
 *
 *  Resolution of both absolute and relative URIs, and of both absolute and
 *  relative paths in the case of hierarchical URIs, is supported.  Resolving
 *  the URI {@code file:///~calendar} against any other URI simply yields the
 *  original URI, since it is absolute.  Resolving the relative URI (2) above
 *  against the relative base URI (1) yields the normalized, but still relative,
 *  URI
 *
 *  <blockquote>
 *  {@code demo/jfc/SwingSet2/src/SwingSet2.java}
 *  </blockquote>
 *
 *  <p> <i>Relativization</i>, finally, is the inverse of resolution: For any
 *  two normalized URIs <i>u</i> and&nbsp;<i>v</i>,
 *
 *  <blockquote>
 *    <i>u</i>{@code .relativize(}<i>u</i>{@code .resolve(}<i>v</i>{@code )).equals(}<i>v</i>{@code )}&nbsp;&nbsp;and<br>
 *    <i>u</i>{@code .resolve(}<i>u</i>{@code .relativize(}<i>v</i>{@code )).equals(}<i>v</i>{@code )}&nbsp;&nbsp;.<br>
 *  </blockquote>
 *
 *  This operation is often useful when constructing a document containing URIs
 *  that must be made relative to the base URI of the document wherever
 *  possible.  For example, relativizing the URI
 *
 *  <blockquote>
 *  {@code https://docs.oracle.com/javase/1.3/docs/guide/index.html}
 *  </blockquote>
 *
 *  against the base URI
 *
 *  <blockquote>
 *  {@code http://java.sun.com/j2se/1.3}
 *  </blockquote>
 *
 *  yields the relative URI {@code docs/guide/index.html}.
 *
 *
 *  <h4> Character categories </h4>
 *
 *  RFC&nbsp;2396 specifies precisely which characters are permitted in the
 *  various components of a URI reference.  The following categories, most of
 *  which are taken from that specification, are used below to describe these
 *  constraints:
 *
 *  <blockquote><table cellspacing=2 summary="Describes categories alpha,digit,alphanum,unreserved,punct,reserved,escaped,and other">
 *    <tr><th valign=top><i>alpha</i></th>
 *        <td>The US-ASCII alphabetic characters,
 *         {@code 'A'}&nbsp;through&nbsp;{@code 'Z'}
 *         and {@code 'a'}&nbsp;through&nbsp;{@code 'z'}</td></tr>
 *    <tr><th valign=top><i>digit</i></th>
 *        <td>The US-ASCII decimal digit characters,
 *        {@code '0'}&nbsp;through&nbsp;{@code '9'}</td></tr>
 *    <tr><th valign=top><i>alphanum</i></th>
 *        <td>All <i>alpha</i> and <i>digit</i> characters</td></tr>
 *    <tr><th valign=top><i>unreserved</i>&nbsp;&nbsp;&nbsp;&nbsp;</th>
 *        <td>All <i>alphanum</i> characters together with those in the string
 *         {@code "_-!.~'()*"}</td></tr>
 *    <tr><th valign=top><i>punct</i></th>
 *        <td>The characters in the string {@code ",;:$&+="}</td></tr>
 *    <tr><th valign=top><i>reserved</i></th>
 *        <td>All <i>punct</i> characters together with those in the string
 *         {@code "?/[]@"}</td></tr>
 *    <tr><th valign=top><i>escaped</i></th>
 *        <td>Escaped octets, that is, triplets consisting of the percent
 *            character ({@code '%'}) followed by two hexadecimal digits
 *            ({@code '0'}-{@code '9'}, {@code 'A'}-{@code 'F'}, and
 *            {@code 'a'}-{@code 'f'})</td></tr>
 *    <tr><th valign=top><i>other</i></th>
 *        <td>The Unicode characters that are not in the US-ASCII character set,
 *            are not control characters (according to the {@link
 *            java.lang.Character#isISOControl(char) Character.isISOControl}
 *            method), and are not space characters (according to the {@link
 *            java.lang.Character#isSpaceChar(char) Character.isSpaceChar}
 *            method)&nbsp;&nbsp;<i>(<b>Deviation from RFC 2396</b>, which is
 *            limited to US-ASCII)</i></td></tr>
 *  </table></blockquote>
 *
 *  <p><a name="legal-chars"></a> The set of all legal URI characters consists of
 *  the <i>unreserved</i>, <i>reserved</i>, <i>escaped</i>, and <i>other</i>
 *  characters.
 *
 *
 *  <h4> Escaped octets, quotation, encoding, and decoding </h4>
 *
 *  RFC 2396 allows escaped octets to appear in the user-info, path, query, and
 *  fragment components.  Escaping serves two purposes in URIs:
 *
 *  <ul>
 *
 *    <li><p> To <i>encode</i> non-US-ASCII characters when a URI is required to
 *    conform strictly to RFC&nbsp;2396 by not containing any <i>other</i>
 *    characters.  </p></li>
 *
 *    <li><p> To <i>quote</i> characters that are otherwise illegal in a
 *    component.  The user-info, path, query, and fragment components differ
 *    slightly in terms of which characters are considered legal and illegal.
 *    </p></li>
 *
 *  </ul>
 *
 *  These purposes are served in this class by three related operations:
 *
 *  <ul>
 *
 *    <li><p><a name="encode"></a> A character is <i>encoded</i> by replacing it
 *    with the sequence of escaped octets that represent that character in the
 *    UTF-8 character set.  The Euro currency symbol ({@code '\u20AC'}),
 *    for example, is encoded as {@code "%E2%82%AC"}.  <i>(<b>Deviation from
 *    RFC&nbsp;2396</b>, which does not specify any particular character
 *    set.)</i> </p></li>
 *
 *    <li><p><a name="quote"></a> An illegal character is <i>quoted</i> simply by
 *    encoding it.  The space character, for example, is quoted by replacing it
 *    with {@code "%20"}.  UTF-8 contains US-ASCII, hence for US-ASCII
 *    characters this transformation has exactly the effect required by
 *    RFC&nbsp;2396. </p></li>
 *
 *    <li><p><a name="decode"></a>
 *    A sequence of escaped octets is <i>decoded</i> by
 *    replacing it with the sequence of characters that it represents in the
 *    UTF-8 character set.  UTF-8 contains US-ASCII, hence decoding has the
 *    effect of de-quoting any quoted US-ASCII characters as well as that of
 *    decoding any encoded non-US-ASCII characters.  If a <a
 *    href="../nio/charset/CharsetDecoder.html#ce">decoding error</a> occurs
 *    when decoding the escaped octets then the erroneous octets are replaced by
 *    {@code '\uFFFD'}, the Unicode replacement character.  </p></li>
 *
 *  </ul>
 *
 *  These operations are exposed in the constructors and methods of this class
 *  as follows:
 *
 *  <ul>
 *
 *    <li><p> The {@linkplain #URI(java.lang.String) single-argument
 *    constructor} requires any illegal characters in its argument to be
 *    quoted and preserves any escaped octets and <i>other</i> characters that
 *    are present.  </p></li>
 *
 *    <li><p> The {@linkplain
 *    #URI(java.lang.String,java.lang.String,java.lang.String,int,java.lang.String,java.lang.String,java.lang.String)
 *    multi-argument constructors} quote illegal characters as
 *    required by the components in which they appear.  The percent character
 *    ({@code '%'}) is always quoted by these constructors.  Any <i>other</i>
 *    characters are preserved.  </p></li>
 *
 *    <li><p> The {@link #getRawUserInfo() getRawUserInfo}, {@link #getRawPath()
 *    getRawPath}, {@link #getRawQuery() getRawQuery}, {@link #getRawFragment()
 *    getRawFragment}, {@link #getRawAuthority() getRawAuthority}, and {@link
 *    #getRawSchemeSpecificPart() getRawSchemeSpecificPart} methods return the
 *    values of their corresponding components in raw form, without interpreting
 *    any escaped octets.  The strings returned by these methods may contain
 *    both escaped octets and <i>other</i> characters, and will not contain any
 *    illegal characters.  </p></li>
 *
 *    <li><p> The {@link #getUserInfo() getUserInfo}, {@link #getPath()
 *    getPath}, {@link #getQuery() getQuery}, {@link #getFragment()
 *    getFragment}, {@link #getAuthority() getAuthority}, and {@link
 *    #getSchemeSpecificPart() getSchemeSpecificPart} methods decode any escaped
 *    octets in their corresponding components.  The strings returned by these
 *    methods may contain both <i>other</i> characters and illegal characters,
 *    and will not contain any escaped octets.  </p></li>
 *
 *    <li><p> The {@link #toString() toString} method returns a URI string with
 *    all necessary quotation but which may contain <i>other</i> characters.
 *    </p></li>
 *
 *    <li><p> The {@link #toASCIIString() toASCIIString} method returns a fully
 *    quoted and encoded URI string that does not contain any <i>other</i>
 *    characters.  </p></li>
 *
 *  </ul>
 *
 *
 *  <h4> Identities </h4>
 *
 *  For any URI <i>u</i>, it is always the case that
 *
 *  <blockquote>
 *  {@code new URI(}<i>u</i>{@code .toString()).equals(}<i>u</i>{@code )}&nbsp;.
 *  </blockquote>
 *
 *  For any URI <i>u</i> that does not contain redundant syntax such as two
 *  slashes before an empty authority (as in {@code file:///tmp/}&nbsp;) or a
 *  colon following a host name but no port (as in
 *  {@code http://java.sun.com:}&nbsp;), and that does not encode characters
 *  except those that must be quoted, the following identities also hold:
 *  <pre>
 *      new URI(<i>u</i>.getScheme(),
 *              <i>u</i>.getSchemeSpecificPart(),
 *              <i>u</i>.getFragment())
 *      .equals(<i>u</i>)</pre>
 *  in all cases,
 *  <pre>
 *      new URI(<i>u</i>.getScheme(),
 *              <i>u</i>.getUserInfo(), <i>u</i>.getAuthority(),
 *              <i>u</i>.getPath(), <i>u</i>.getQuery(),
 *              <i>u</i>.getFragment())
 *      .equals(<i>u</i>)</pre>
 *  if <i>u</i> is hierarchical, and
 *  <pre>
 *      new URI(<i>u</i>.getScheme(),
 *              <i>u</i>.getUserInfo(), <i>u</i>.getHost(), <i>u</i>.getPort(),
 *              <i>u</i>.getPath(), <i>u</i>.getQuery(),
 *              <i>u</i>.getFragment())
 *      .equals(<i>u</i>)</pre>
 *  if <i>u</i> is hierarchical and has either no authority or a server-based
 *  authority.
 *
 *
 *  <h4> URIs, URLs, and URNs </h4>
 *
 *  A URI is a uniform resource <i>identifier</i> while a URL is a uniform
 *  resource <i>locator</i>.  Hence every URL is a URI, abstractly speaking, but
 *  not every URI is a URL.  This is because there is another subcategory of
 *  URIs, uniform resource <i>names</i> (URNs), which name resources but do not
 *  specify how to locate them.  The {@code mailto}, {@code news}, and
 *  {@code isbn} URIs shown above are examples of URNs.
 *
 *  <p> The conceptual distinction between URIs and URLs is reflected in the
 *  differences between this class and the {@link URL} class.
 *
 *  <p> An instance of this class represents a URI reference in the syntactic
 *  sense defined by RFC&nbsp;2396.  A URI may be either absolute or relative.
 *  A URI string is parsed according to the generic syntax without regard to the
 *  scheme, if any, that it specifies.  No lookup of the host, if any, is
 *  performed, and no scheme-dependent stream handler is constructed.  Equality,
 *  hashing, and comparison are defined strictly in terms of the character
 *  content of the instance.  In other words, a URI instance is little more than
 *  a structured string that supports the syntactic, scheme-independent
 *  operations of comparison, normalization, resolution, and relativization.
 *
 *  <p> An instance of the {@link URL} class, by contrast, represents the
 *  syntactic components of a URL together with some of the information required
 *  to access the resource that it describes.  A URL must be absolute, that is,
 *  it must always specify a scheme.  A URL string is parsed according to its
 *  scheme.  A stream handler is always established for a URL, and in fact it is
 *  impossible to create a URL instance for a scheme for which no handler is
 *  available.  Equality and hashing depend upon both the scheme and the
 *  Internet address of the host, if any; comparison is not defined.  In other
 *  words, a URL is a structured string that supports the syntactic operation of
 *  resolution as well as the network I/O operations of looking up the host and
 *  opening a connection to the specified resource.
 * @author Mark Reinhold
 * @since 1.4
 * @see <a href="http://www.ietf.org/rfc/rfc2279.txt"><i>RFC&nbsp;2279: UTF-8, a&#xA; transformation format of ISO 10646</i></a>, <br><a&#xA; href="http://www.ietf.org/rfc/rfc2373.txt"><i>RFC&nbsp;2373: IPv6 Addressing&#xA; Architecture</i></a>, <br><a&#xA; href="http://www.ietf.org/rfc/rfc2396.txt"><i>RFC&nbsp;2396: Uniform&#xA; Resource Identifiers (URI): Generic Syntax</i></a>, <br><a&#xA; href="http://www.ietf.org/rfc/rfc2732.txt"><i>RFC&nbsp;2732: Format for&#xA; Literal IPv6 Addresses in URLs</i></a>, <br><a&#xA; href="URISyntaxException.html">URISyntaxException</a>
 */
export type URI = Object &
  Comparable &
  Serializable & {
    /**
     * Attempts to parse this URI's authority component, if defined, into
     *  user-information, host, and port components.
     *
     *  <p> If this URI's authority component has already been recognized as
     *  being server-based then it will already have been parsed into
     *  user-information, host, and port components.  In this case, or if this
     *  URI has no authority component, this method simply returns this URI.
     *
     *  <p> Otherwise this method attempts once more to parse the authority
     *  component into user-information, host, and port components, and throws
     *  an exception describing why the authority component could not be parsed
     *  in that way.
     *
     *  <p> This method is provided because the generic URI syntax specified in
     *  <a href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>
     *  cannot always distinguish a malformed server-based authority from a
     *  legitimate registry-based authority.  It must therefore treat some
     *  instances of the former as instances of the latter.  The authority
     *  component in the URI string {@code "//foo:bar"}, for example, is not a
     *  legal server-based authority but it is legal as a registry-based
     *  authority.
     *
     *  <p> In many common situations, for example when working URIs that are
     *  known to be either URNs or URLs, the hierarchical URIs being used will
     *  always be server-based.  They therefore must either be parsed as such or
     *  treated as an error.  In these cases a statement such as
     *
     *  <blockquote>
     *  {@code URI }<i>u</i>{@code  = new URI(str).parseServerAuthority();}
     *  </blockquote>
     *
     *  <p> can be used to ensure that <i>u</i> always refers to a URI that, if
     *  it has an authority component, has a server-based authority with proper
     *  user-information, host, and port components.  Invoking this method also
     *  ensures that if the authority could not be parsed in that way then an
     *  appropriate diagnostic message can be issued based upon the exception
     *  that is thrown. </p>
     * @return A URI whose authority field has been parsed&#xA; as a server-based authority
     * @throws URISyntaxException&#xA; If the authority component of this URI is defined&#xA; but cannot be parsed as a server-based authority&#xA; according to RFC&nbsp;2396
     */
    parseServerAuthority(): URI;

    /**
     * Normalizes this URI's path.
     *
     *  <p> If this URI is opaque, or if its path is already in normal form,
     *  then this URI is returned.  Otherwise a new URI is constructed that is
     *  identical to this URI except that its path is computed by normalizing
     *  this URI's path in a manner consistent with <a
     *  href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>,
     *  section&nbsp;5.2, step&nbsp;6, sub-steps&nbsp;c through&nbsp;f; that is:
     *  </p>
     *
     *  <ol>
     *
     *    <li><p> All {@code "."} segments are removed. </p></li>
     *
     *    <li><p> If a {@code ".."} segment is preceded by a non-{@code ".."}
     *    segment then both of these segments are removed.  This step is
     *    repeated until it is no longer applicable. </p></li>
     *
     *    <li><p> If the path is relative, and if its first segment contains a
     *    colon character ({@code ':'}), then a {@code "."} segment is
     *    prepended.  This prevents a relative URI with a path such as
     *    {@code "a:b/c/d"} from later being re-parsed as an opaque URI with a
     *    scheme of {@code "a"} and a scheme-specific part of {@code "b/c/d"}.
     *    <b><i>(Deviation from RFC&nbsp;2396)</i></b> </p></li>
     *
     *  </ol>
     *
     *  <p> A normalized path will begin with one or more {@code ".."} segments
     *  if there were insufficient non-{@code ".."} segments preceding them to
     *  allow their removal.  A normalized path will begin with a {@code "."}
     *  segment if one was inserted by step 3 above.  Otherwise, a normalized
     *  path will not contain any {@code "."} or {@code ".."} segments. </p>
     * @return A URI equivalent to this URI,&#xA; but whose path is in normal form
     */
    normalize(): URI;

    /**
     * Resolves the given URI against this URI.
     *
     *  <p> If the given URI is already absolute, or if this URI is opaque, then
     *  the given URI is returned.
     *
     *  <p><a name="resolve-frag"></a> If the given URI's fragment component is
     *  defined, its path component is empty, and its scheme, authority, and
     *  query components are undefined, then a URI with the given fragment but
     *  with all other components equal to those of this URI is returned.  This
     *  allows a URI representing a standalone fragment reference, such as
     *  {@code "#foo"}, to be usefully resolved against a base URI.
     *
     *  <p> Otherwise this method constructs a new hierarchical URI in a manner
     *  consistent with <a
     *  href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>,
     *  section&nbsp;5.2; that is: </p>
     *
     *  <ol>
     *
     *    <li><p> A new URI is constructed with this URI's scheme and the given
     *    URI's query and fragment components. </p></li>
     *
     *    <li><p> If the given URI has an authority component then the new URI's
     *    authority and path are taken from the given URI. </p></li>
     *
     *    <li><p> Otherwise the new URI's authority component is copied from
     *    this URI, and its path is computed as follows: </p>
     *
     *    <ol>
     *
     *      <li><p> If the given URI's path is absolute then the new URI's path
     *      is taken from the given URI. </p></li>
     *
     *      <li><p> Otherwise the given URI's path is relative, and so the new
     *      URI's path is computed by resolving the path of the given URI
     *      against the path of this URI.  This is done by concatenating all but
     *      the last segment of this URI's path, if any, with the given URI's
     *      path and then normalizing the result as if by invoking the {@link
     *      #normalize() normalize} method. </p></li>
     *
     *    </ol></li>
     *
     *  </ol>
     *
     *  <p> The result of this method is absolute if, and only if, either this
     *  URI is absolute or the given URI is absolute.  </p>
     * @param uri The URI to be resolved against this URI
     * @return The resulting URI
     * @throws NullPointerException&#xA; If {@code uri} is {@code null}
     */
    resolve(uri: URI): URI;

    /**
     * Constructs a new URI by parsing the given string and then resolving it
     *  against this URI.
     *
     *  <p> This convenience method works as if invoking it were equivalent to
     *  evaluating the expression {@link #resolve(java.net.URI)
     *  resolve}{@code (URI.}{@link #create(String) create}{@code (str))}. </p>
     * @param str The string to be parsed into a URI
     * @return The resulting URI
     * @throws NullPointerException&#xA; If {@code str} is {@code null}
     * @throws IllegalArgumentException&#xA; If the given string violates RFC&nbsp;2396
     */
    resolve(str: String | string): URI;

    /**
     * Relativizes the given URI against this URI.
     *
     *  <p> The relativization of the given URI against this URI is computed as
     *  follows: </p>
     *
     *  <ol>
     *
     *    <li><p> If either this URI or the given URI are opaque, or if the
     *    scheme and authority components of the two URIs are not identical, or
     *    if the path of this URI is not a prefix of the path of the given URI,
     *    then the given URI is returned. </p></li>
     *
     *    <li><p> Otherwise a new relative hierarchical URI is constructed with
     *    query and fragment components taken from the given URI and with a path
     *    component computed by removing this URI's path from the beginning of
     *    the given URI's path. </p></li>
     *
     *  </ol>
     * @param uri The URI to be relativized against this URI
     * @return The resulting URI
     * @throws NullPointerException&#xA; If {@code uri} is {@code null}
     */
    relativize(uri: URI): URI;

    /**
     * Constructs a URL from this URI.
     *
     *  <p> This convenience method works as if invoking it were equivalent to
     *  evaluating the expression {@code new URL(this.toString())} after
     *  first checking that this URI is absolute. </p>
     * @return A URL constructed from this URI
     * @throws IllegalArgumentException&#xA; If this URL is not absolute
     * @throws MalformedURLException&#xA; If a protocol handler for the URL could not be found,&#xA; or if some other error occurred while constructing the URL
     */
    toURL(): URL;

    /**
     * Returns the scheme component of this URI.
     *
     *  <p> The scheme component of a URI, if defined, only contains characters
     *  in the <i>alphanum</i> category and in the string {@code "-.+"}.  A
     *  scheme always starts with an <i>alpha</i> character. <p>
     *
     *  The scheme component of a URI cannot contain escaped octets, hence this
     *  method does not perform any decoding.
     * @return The scheme component of this URI,&#xA; or {@code null} if the scheme is undefined
     */
    getScheme(): string;

    /**
     * Tells whether or not this URI is absolute.
     *
     *  <p> A URI is absolute if, and only if, it has a scheme component. </p>
     * @return {@code true} if, and only if, this URI is absolute
     */
    isAbsolute(): boolean;

    /**
     * Tells whether or not this URI is opaque.
     *
     *  <p> A URI is opaque if, and only if, it is absolute and its
     *  scheme-specific part does not begin with a slash character ('/').
     *  An opaque URI has a scheme, a scheme-specific part, and possibly
     *  a fragment; all other components are undefined. </p>
     * @return {@code true} if, and only if, this URI is opaque
     */
    isOpaque(): boolean;

    /**
     * Returns the raw scheme-specific part of this URI.  The scheme-specific
     *  part is never undefined, though it may be empty.
     *
     *  <p> The scheme-specific part of a URI only contains legal URI
     *  characters. </p>
     * @return The raw scheme-specific part of this URI&#xA; (never {@code null})
     */
    getRawSchemeSpecificPart(): string;

    /**
     * Returns the decoded scheme-specific part of this URI.
     *
     *  <p> The string returned by this method is equal to that returned by the
     *  {@link #getRawSchemeSpecificPart() getRawSchemeSpecificPart} method
     *  except that all sequences of escaped octets are <a
     *  href="#decode">decoded</a>.  </p>
     * @return The decoded scheme-specific part of this URI&#xA; (never {@code null})
     */
    getSchemeSpecificPart(): string;

    /**
     * Returns the raw authority component of this URI.
     *
     *  <p> The authority component of a URI, if defined, only contains the
     *  commercial-at character ({@code '@'}) and characters in the
     *  <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, and <i>other</i>
     *  categories.  If the authority is server-based then it is further
     *  constrained to have valid user-information, host, and port
     *  components. </p>
     * @return The raw authority component of this URI,&#xA; or {@code null} if the authority is undefined
     */
    getRawAuthority(): string;

    /**
     * Returns the decoded authority component of this URI.
     *
     *  <p> The string returned by this method is equal to that returned by the
     *  {@link #getRawAuthority() getRawAuthority} method except that all
     *  sequences of escaped octets are <a href="#decode">decoded</a>.  </p>
     * @return The decoded authority component of this URI,&#xA; or {@code null} if the authority is undefined
     */
    getAuthority(): string;

    /**
     * Returns the raw user-information component of this URI.
     *
     *  <p> The user-information component of a URI, if defined, only contains
     *  characters in the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, and
     *  <i>other</i> categories. </p>
     * @return The raw user-information component of this URI,&#xA; or {@code null} if the user information is undefined
     */
    getRawUserInfo(): string;

    /**
     * Returns the decoded user-information component of this URI.
     *
     *  <p> The string returned by this method is equal to that returned by the
     *  {@link #getRawUserInfo() getRawUserInfo} method except that all
     *  sequences of escaped octets are <a href="#decode">decoded</a>.  </p>
     * @return The decoded user-information component of this URI,&#xA; or {@code null} if the user information is undefined
     */
    getUserInfo(): string;

    /**
     * Returns the host component of this URI.
     *
     *  <p> The host component of a URI, if defined, will have one of the
     *  following forms: </p>
     *
     *  <ul>
     *
     *    <li><p> A domain name consisting of one or more <i>labels</i>
     *    separated by period characters ({@code '.'}), optionally followed by
     *    a period character.  Each label consists of <i>alphanum</i> characters
     *    as well as hyphen characters ({@code '-'}), though hyphens never
     *    occur as the first or last characters in a label. The rightmost
     *    label of a domain name consisting of two or more labels, begins
     *    with an <i>alpha</i> character. </li>
     *
     *    <li><p> A dotted-quad IPv4 address of the form
     *    <i>digit</i>{@code +.}<i>digit</i>{@code +.}<i>digit</i>{@code +.}<i>digit</i>{@code +},
     *    where no <i>digit</i> sequence is longer than three characters and no
     *    sequence has a value larger than 255. </p></li>
     *
     *    <li><p> An IPv6 address enclosed in square brackets ({@code '['} and
     *    {@code ']'}) and consisting of hexadecimal digits, colon characters
     *    ({@code ':'}), and possibly an embedded IPv4 address.  The full
     *    syntax of IPv6 addresses is specified in <a
     *    href="http://www.ietf.org/rfc/rfc2373.txt"><i>RFC&nbsp;2373: IPv6
     *    Addressing Architecture</i></a>.  </p></li>
     *
     *  </ul>
     *
     *  The host component of a URI cannot contain escaped octets, hence this
     *  method does not perform any decoding.
     * @return The host component of this URI,&#xA; or {@code null} if the host is undefined
     */
    getHost(): string;

    /**
     * Returns the port number of this URI.
     *
     *  <p> The port component of a URI, if defined, is a non-negative
     *  integer. </p>
     * @return The port component of this URI,&#xA; or {@code -1} if the port is undefined
     */
    getPort(): number;

    /**
     * Returns the raw path component of this URI.
     *
     *  <p> The path component of a URI, if defined, only contains the slash
     *  character ({@code '/'}), the commercial-at character ({@code '@'}),
     *  and characters in the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>,
     *  and <i>other</i> categories. </p>
     * @return The path component of this URI,&#xA; or {@code null} if the path is undefined
     */
    getRawPath(): string;

    /**
     * Returns the decoded path component of this URI.
     *
     *  <p> The string returned by this method is equal to that returned by the
     *  {@link #getRawPath() getRawPath} method except that all sequences of
     *  escaped octets are <a href="#decode">decoded</a>.  </p>
     * @return The decoded path component of this URI,&#xA; or {@code null} if the path is undefined
     */
    getPath(): string;

    /**
     * Returns the raw query component of this URI.
     *
     *  <p> The query component of a URI, if defined, only contains legal URI
     *  characters. </p>
     * @return The raw query component of this URI,&#xA; or {@code null} if the query is undefined
     */
    getRawQuery(): string;

    /**
     * Returns the decoded query component of this URI.
     *
     *  <p> The string returned by this method is equal to that returned by the
     *  {@link #getRawQuery() getRawQuery} method except that all sequences of
     *  escaped octets are <a href="#decode">decoded</a>.  </p>
     * @return The decoded query component of this URI,&#xA; or {@code null} if the query is undefined
     */
    getQuery(): string;

    /**
     * Returns the raw fragment component of this URI.
     *
     *  <p> The fragment component of a URI, if defined, only contains legal URI
     *  characters. </p>
     * @return The raw fragment component of this URI,&#xA; or {@code null} if the fragment is undefined
     */
    getRawFragment(): string;

    /**
     * Returns the decoded fragment component of this URI.
     *
     *  <p> The string returned by this method is equal to that returned by the
     *  {@link #getRawFragment() getRawFragment} method except that all
     *  sequences of escaped octets are <a href="#decode">decoded</a>.  </p>
     * @return The decoded fragment component of this URI,&#xA; or {@code null} if the fragment is undefined
     */
    getFragment(): string;

    /**
     * Tests this URI for equality with another object.
     *
     *  <p> If the given object is not a URI then this method immediately
     *  returns {@code false}.
     *
     *  <p> For two URIs to be considered equal requires that either both are
     *  opaque or both are hierarchical.  Their schemes must either both be
     *  undefined or else be equal without regard to case. Their fragments
     *  must either both be undefined or else be equal.
     *
     *  <p> For two opaque URIs to be considered equal, their scheme-specific
     *  parts must be equal.
     *
     *  <p> For two hierarchical URIs to be considered equal, their paths must
     *  be equal and their queries must either both be undefined or else be
     *  equal.  Their authorities must either both be undefined, or both be
     *  registry-based, or both be server-based.  If their authorities are
     *  defined and are registry-based, then they must be equal.  If their
     *  authorities are defined and are server-based, then their hosts must be
     *  equal without regard to case, their port numbers must be equal, and
     *  their user-information components must be equal.
     *
     *  <p> When testing the user-information, path, query, fragment, authority,
     *  or scheme-specific parts of two URIs for equality, the raw forms rather
     *  than the encoded forms of these components are compared and the
     *  hexadecimal digits of escaped octets are compared without regard to
     *  case.
     *
     *  <p> This method satisfies the general contract of the {@link
     *  java.lang.Object#equals(Object) Object.equals} method. </p>
     * @param ob The object to which this object is to be compared
     * @return {@code true} if, and only if, the given object is a URI that&#xA; is identical to this URI
     */
    equals(ob: unknown): boolean;

    /**
     * Returns a hash-code value for this URI.  The hash code is based upon all
     *  of the URI's components, and satisfies the general contract of the
     *  {@link java.lang.Object#hashCode() Object.hashCode} method.
     * @return A hash-code value for this URI
     */
    hashCode(): number;

    /**
     * Compares this URI to another object, which must be a URI.
     *
     *  <p> When comparing corresponding components of two URIs, if one
     *  component is undefined but the other is defined then the first is
     *  considered to be less than the second.  Unless otherwise noted, string
     *  components are ordered according to their natural, case-sensitive
     *  ordering as defined by the {@link java.lang.String#compareTo(Object)
     *  String.compareTo} method.  String components that are subject to
     *  encoding are compared by comparing their raw forms rather than their
     *  encoded forms.
     *
     *  <p> The ordering of URIs is defined as follows: </p>
     *
     *  <ul>
     *
     *    <li><p> Two URIs with different schemes are ordered according the
     *    ordering of their schemes, without regard to case. </p></li>
     *
     *    <li><p> A hierarchical URI is considered to be less than an opaque URI
     *    with an identical scheme. </p></li>
     *
     *    <li><p> Two opaque URIs with identical schemes are ordered according
     *    to the ordering of their scheme-specific parts. </p></li>
     *
     *    <li><p> Two opaque URIs with identical schemes and scheme-specific
     *    parts are ordered according to the ordering of their
     *    fragments. </p></li>
     *
     *    <li><p> Two hierarchical URIs with identical schemes are ordered
     *    according to the ordering of their authority components: </p>
     *
     *    <ul>
     *
     *      <li><p> If both authority components are server-based then the URIs
     *      are ordered according to their user-information components; if these
     *      components are identical then the URIs are ordered according to the
     *      ordering of their hosts, without regard to case; if the hosts are
     *      identical then the URIs are ordered according to the ordering of
     *      their ports. </p></li>
     *
     *      <li><p> If one or both authority components are registry-based then
     *      the URIs are ordered according to the ordering of their authority
     *      components. </p></li>
     *
     *    </ul></li>
     *
     *    <li><p> Finally, two hierarchical URIs with identical schemes and
     *    authority components are ordered according to the ordering of their
     *    paths; if their paths are identical then they are ordered according to
     *    the ordering of their queries; if the queries are identical then they
     *    are ordered according to the order of their fragments. </p></li>
     *
     *  </ul>
     *
     *  <p> This method satisfies the general contract of the {@link
     *  java.lang.Comparable#compareTo(Object) Comparable.compareTo}
     *  method. </p>
     * @param that&#xA; The object to which this URI is to be compared
     * @return A negative integer, zero, or a positive integer as this URI is&#xA; less than, equal to, or greater than the given URI
     * @throws ClassCastException&#xA; If the given object is not a URI
     */
    compareTo(that: URI): number;

    /**
     * Returns the content of this URI as a string.
     *
     *  <p> If this URI was created by invoking one of the constructors in this
     *  class then a string equivalent to the original input string, or to the
     *  string computed from the originally-given components, as appropriate, is
     *  returned.  Otherwise this URI was created by normalization, resolution,
     *  or relativization, and so a string is constructed from this URI's
     *  components according to the rules specified in <a
     *  href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>,
     *  section&nbsp;5.2, step&nbsp;7. </p>
     * @return The string form of this URI
     */
    toString(): string;

    /**
     * Returns the content of this URI as a US-ASCII string.
     *
     *  <p> If this URI does not contain any characters in the <i>other</i>
     *  category then an invocation of this method will return the same value as
     *  an invocation of the {@link #toString() toString} method.  Otherwise
     *  this method works as if by invoking that method and then <a
     *  href="#encode">encoding</a> the result.  </p>
     * @return The string form of this URI, encoded as needed&#xA; so that it only contains characters in the US-ASCII&#xA; charset
     */
    toASCIIString(): string;
  };
