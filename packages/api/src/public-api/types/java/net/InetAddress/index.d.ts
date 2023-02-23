import type { NetworkInterface } from "../NetworkInterface";
import type { String } from "../../lang/String";

import type { Object } from "../../lang/Object";
import type { Serializable } from "../../io/Serializable";

/**
 * This class represents an Internet Protocol (IP) address.
 *
 *  <p> An IP address is either a 32-bit or 128-bit unsigned number
 *  used by IP, a lower-level protocol on which protocols like UDP and
 *  TCP are built. The IP address architecture is defined by <a
 *  href="http://www.ietf.org/rfc/rfc790.txt"><i>RFC&nbsp;790:
 *  Assigned Numbers</i></a>, <a
 *  href="http://www.ietf.org/rfc/rfc1918.txt"> <i>RFC&nbsp;1918:
 *  Address Allocation for Private Internets</i></a>, <a
 *  href="http://www.ietf.org/rfc/rfc2365.txt"><i>RFC&nbsp;2365:
 *  Administratively Scoped IP Multicast</i></a>, and <a
 *  href="http://www.ietf.org/rfc/rfc2373.txt"><i>RFC&nbsp;2373: IP
 *  Version 6 Addressing Architecture</i></a>. An instance of an
 *  InetAddress consists of an IP address and possibly its
 *  corresponding host name (depending on whether it is constructed
 *  with a host name or whether it has already done reverse host name
 *  resolution).
 *
 *  <h3> Address types </h3>
 *
 *  <blockquote><table cellspacing=2 summary="Description of unicast and multicast address types">
 *    <tr><th valign=top><i>unicast</i></th>
 *        <td>An identifier for a single interface. A packet sent to
 *          a unicast address is delivered to the interface identified by
 *          that address.
 *
 *          <p> The Unspecified Address -- Also called anylocal or wildcard
 *          address. It must never be assigned to any node. It indicates the
 *          absence of an address. One example of its use is as the target of
 *          bind, which allows a server to accept a client connection on any
 *          interface, in case the server host has multiple interfaces.
 *
 *          <p> The <i>unspecified</i> address must not be used as
 *          the destination address of an IP packet.
 *
 *          <p> The <i>Loopback</i> Addresses -- This is the address
 *          assigned to the loopback interface. Anything sent to this
 *          IP address loops around and becomes IP input on the local
 *          host. This address is often used when testing a
 *          client.</td></tr>
 *    <tr><th valign=top><i>multicast</i></th>
 *        <td>An identifier for a set of interfaces (typically belonging
 *          to different nodes). A packet sent to a multicast address is
 *          delivered to all interfaces identified by that address.</td></tr>
 *  </table></blockquote>
 *
 *  <h4> IP address scope </h4>
 *
 *  <p> <i>Link-local</i> addresses are designed to be used for addressing
 *  on a single link for purposes such as auto-address configuration,
 *  neighbor discovery, or when no routers are present.
 *
 *  <p> <i>Site-local</i> addresses are designed to be used for addressing
 *  inside of a site without the need for a global prefix.
 *
 *  <p> <i>Global</i> addresses are unique across the internet.
 *
 *  <h4> Textual representation of IP addresses </h4>
 *
 *  The textual representation of an IP address is address family specific.
 *
 *  <p>
 *
 *  For IPv4 address format, please refer to <A
 *  HREF="Inet4Address.html#format">Inet4Address#format</A>; For IPv6
 *  address format, please refer to <A
 *  HREF="Inet6Address.html#format">Inet6Address#format</A>.
 *
 *  <P>There is a <a href="doc-files/net-properties.html#Ipv4IPv6">couple of
 *  System Properties</a> affecting how IPv4 and IPv6 addresses are used.</P>
 *
 *  <h4> Host Name Resolution </h4>
 *
 *  Host name-to-IP address <i>resolution</i> is accomplished through
 *  the use of a combination of local machine configuration information
 *  and network naming services such as the Domain Name System (DNS)
 *  and Network Information Service(NIS). The particular naming
 *  services(s) being used is by default the local machine configured
 *  one. For any host name, its corresponding IP address is returned.
 *
 *  <p> <i>Reverse name resolution</i> means that for any IP address,
 *  the host associated with the IP address is returned.
 *
 *  <p> The InetAddress class provides methods to resolve host names to
 *  their IP addresses and vice versa.
 *
 *  <h4> InetAddress Caching </h4>
 *
 *  The InetAddress class has a cache to store successful as well as
 *  unsuccessful host name resolutions.
 *
 *  <p> By default, when a security manager is installed, in order to
 *  protect against DNS spoofing attacks,
 *  the result of positive host name resolutions are
 *  cached forever. When a security manager is not installed, the default
 *  behavior is to cache entries for a finite (implementation dependent)
 *  period of time. The result of unsuccessful host
 *  name resolution is cached for a very short period of time (10
 *  seconds) to improve performance.
 *
 *  <p> If the default behavior is not desired, then a Java security property
 *  can be set to a different Time-to-live (TTL) value for positive
 *  caching. Likewise, a system admin can configure a different
 *  negative caching TTL value when needed.
 *
 *  <p> Two Java security properties control the TTL values used for
 *   positive and negative host name resolution caching:
 *
 *  <blockquote>
 *  <dl>
 *  <dt><b>networkaddress.cache.ttl</b></dt>
 *  <dd>Indicates the caching policy for successful name lookups from
 *  the name service. The value is specified as as integer to indicate
 *  the number of seconds to cache the successful lookup. The default
 *  setting is to cache for an implementation specific period of time.
 *  <p>
 *  A value of -1 indicates "cache forever".
 *  </dd>
 *  <dt><b>networkaddress.cache.negative.ttl</b> (default: 10)</dt>
 *  <dd>Indicates the caching policy for un-successful name lookups
 *  from the name service. The value is specified as as integer to
 *  indicate the number of seconds to cache the failure for
 *  un-successful lookups.
 *  <p>
 *  A value of 0 indicates "never cache".
 *  A value of -1 indicates "cache forever".
 *  </dd>
 *  </dl>
 *  </blockquote>
 * @author Chris Warth
 * @see java.net.InetAddress#getByAddress(byte[])
 * @see java.net.InetAddress#getByAddress(java.lang.String, byte[])
 * @see java.net.InetAddress#getAllByName(java.lang.String)
 * @see java.net.InetAddress#getByName(java.lang.String)
 * @see java.net.InetAddress#getLocalHost()
 * @since JDK1.0
 */
export type InetAddress = Object &
  Serializable & {
    /**
     * Utility routine to check if the InetAddress is an
     *  IP multicast address.
     * @return a {@code boolean} indicating if the InetAddress is&#xA; an IP multicast address
     * @since JDK1.1
     */
    isMulticastAddress(): boolean;

    /**
     * Utility routine to check if the InetAddress in a wildcard address.
     * @return a {@code boolean} indicating if the Inetaddress is&#xA; a wildcard address.
     * @since 1.4
     */
    isAnyLocalAddress(): boolean;

    /**
     * Utility routine to check if the InetAddress is a loopback address.
     * @return a {@code boolean} indicating if the InetAddress is&#xA; a loopback address; or false otherwise.
     * @since 1.4
     */
    isLoopbackAddress(): boolean;

    /**
     * Utility routine to check if the InetAddress is an link local address.
     * @return a {@code boolean} indicating if the InetAddress is&#xA; a link local address; or false if address is not a link local unicast address.
     * @since 1.4
     */
    isLinkLocalAddress(): boolean;

    /**
     * Utility routine to check if the InetAddress is a site local address.
     * @return a {@code boolean} indicating if the InetAddress is&#xA; a site local address; or false if address is not a site local unicast address.
     * @since 1.4
     */
    isSiteLocalAddress(): boolean;

    /**
     * Utility routine to check if the multicast address has global scope.
     * @return a {@code boolean} indicating if the address has&#xA; is a multicast address of global scope, false if it is not&#xA; of global scope or it is not a multicast address
     * @since 1.4
     */
    isMCGlobal(): boolean;

    /**
     * Utility routine to check if the multicast address has node scope.
     * @return a {@code boolean} indicating if the address has&#xA; is a multicast address of node-local scope, false if it is not&#xA; of node-local scope or it is not a multicast address
     * @since 1.4
     */
    isMCNodeLocal(): boolean;

    /**
     * Utility routine to check if the multicast address has link scope.
     * @return a {@code boolean} indicating if the address has&#xA; is a multicast address of link-local scope, false if it is not&#xA; of link-local scope or it is not a multicast address
     * @since 1.4
     */
    isMCLinkLocal(): boolean;

    /**
     * Utility routine to check if the multicast address has site scope.
     * @return a {@code boolean} indicating if the address has&#xA; is a multicast address of site-local scope, false if it is not&#xA; of site-local scope or it is not a multicast address
     * @since 1.4
     */
    isMCSiteLocal(): boolean;

    /**
     * Utility routine to check if the multicast address has organization scope.
     * @return a {@code boolean} indicating if the address has&#xA; is a multicast address of organization-local scope,&#xA; false if it is not of organization-local scope&#xA; or it is not a multicast address
     * @since 1.4
     */
    isMCOrgLocal(): boolean;

    /**
     * Test whether that address is reachable. Best effort is made by the
     *  implementation to try to reach the host, but firewalls and server
     *  configuration may block requests resulting in a unreachable status
     *  while some specific ports may be accessible.
     *  A typical implementation will use ICMP ECHO REQUESTs if the
     *  privilege can be obtained, otherwise it will try to establish
     *  a TCP connection on port 7 (Echo) of the destination host.
     *  <p>
     *  The timeout value, in milliseconds, indicates the maximum amount of time
     *  the try should take. If the operation times out before getting an
     *  answer, the host is deemed unreachable. A negative value will result
     *  in an IllegalArgumentException being thrown.
     * @param timeout the time, in milliseconds, before the call aborts
     * @return a {@code boolean} indicating if the address is reachable.
     * @throws IOException if a network error occurs
     * @throws IllegalArgumentException if {@code timeout} is negative.
     * @since 1.5
     */
    isReachable(timeout: number): boolean;

    /**
     * Test whether that address is reachable. Best effort is made by the
     *  implementation to try to reach the host, but firewalls and server
     *  configuration may block requests resulting in a unreachable status
     *  while some specific ports may be accessible.
     *  A typical implementation will use ICMP ECHO REQUESTs if the
     *  privilege can be obtained, otherwise it will try to establish
     *  a TCP connection on port 7 (Echo) of the destination host.
     *  <p>
     *  The {@code network interface} and {@code ttl} parameters
     *  let the caller specify which network interface the test will go through
     *  and the maximum number of hops the packets should go through.
     *  A negative value for the {@code ttl} will result in an
     *  IllegalArgumentException being thrown.
     *  <p>
     *  The timeout value, in milliseconds, indicates the maximum amount of time
     *  the try should take. If the operation times out before getting an
     *  answer, the host is deemed unreachable. A negative value will result
     *  in an IllegalArgumentException being thrown.
     * @param netif the NetworkInterface through which the&#xA; test will be done, or null for any interface
     * @param ttl the maximum numbers of hops to try or 0 for the&#xA; default
     * @param timeout the time, in milliseconds, before the call aborts
     * @throws IllegalArgumentException if either {@code timeout}&#xA; or {@code ttl} are negative.
     * @return a {@code boolean}indicating if the address is reachable.
     * @throws IOException if a network error occurs
     * @since 1.5
     */
    isReachable(netif: NetworkInterface, ttl: number, timeout: number): boolean;

    /**
     * Gets the host name for this IP address.
     *
     *  <p>If this InetAddress was created with a host name,
     *  this host name will be remembered and returned;
     *  otherwise, a reverse name lookup will be performed
     *  and the result will be returned based on the system
     *  configured name lookup service. If a lookup of the name service
     *  is required, call
     *  {@link #getCanonicalHostName() getCanonicalHostName}.
     *
     *  <p>If there is a security manager, its
     *  {@code checkConnect} method is first called
     *  with the hostname and {@code -1}
     *  as its arguments to see if the operation is allowed.
     *  If the operation is not allowed, it will return
     *  the textual representation of the IP address.
     * @return the host name for this IP address, or if the operation&#xA; is not allowed by the security check, the textual&#xA; representation of the IP address.
     * @see InetAddress#getCanonicalHostName
     * @see SecurityManager#checkConnect
     */
    getHostName(): string;

    /**
     * Gets the fully qualified domain name for this IP address.
     *  Best effort method, meaning we may not be able to return
     *  the FQDN depending on the underlying system configuration.
     *
     *  <p>If there is a security manager, this method first
     *  calls its {@code checkConnect} method
     *  with the hostname and {@code -1}
     *  as its arguments to see if the calling code is allowed to know
     *  the hostname for this IP address, i.e., to connect to the host.
     *  If the operation is not allowed, it will return
     *  the textual representation of the IP address.
     * @return the fully qualified domain name for this IP address,&#xA; or if the operation is not allowed by the security check,&#xA; the textual representation of the IP address.
     * @see SecurityManager#checkConnect
     * @since 1.4
     */
    getCanonicalHostName(): string;

    /**
     * Returns the raw IP address of this {@code InetAddress}
     *  object. The result is in network byte order: the highest order
     *  byte of the address is in {@code getAddress()[0]}.
     * @return the raw IP address of this object.
     */
    getAddress(): unknown;

    /**
     * Returns the IP address string in textual presentation.
     * @return the raw IP address in a string format.
     * @since JDK1.0.2
     */
    getHostAddress(): string;

    /**
     * Returns a hashcode for this IP address.
     * @return a hash code value for this IP address.
     */
    hashCode(): number;

    /**
     * Compares this object against the specified object.
     *  The result is {@code true} if and only if the argument is
     *  not {@code null} and it represents the same IP address as
     *  this object.
     *  <p>
     *  Two instances of {@code InetAddress} represent the same IP
     *  address if the length of the byte arrays returned by
     *  {@code getAddress} is the same for both, and each of the
     *  array components is the same for the byte arrays.
     * @param obj the object to compare against.
     * @return {@code true} if the objects are the same;&#xA; {@code false} otherwise.
     * @see java.net.InetAddress#getAddress()
     */
    equals(obj: unknown): boolean;

    /**
     * Converts this IP address to a {@code String}. The
     *  string returned is of the form: hostname / literal IP
     *  address.
     *
     *  If the host name is unresolved, no reverse name service lookup
     *  is performed. The hostname part will be represented by an empty string.
     * @return a string representation of this IP address.
     */
    toString(): string;

    /**
     * Creates an InetAddress based on the provided host name and IP address.
     *  No name service is checked for the validity of the address.
     *
     *  <p> The host name can either be a machine name, such as
     *  "{@code java.sun.com}", or a textual representation of its IP
     *  address.
     *  <p> No validity checking is done on the host name either.
     *
     *  <p> If addr specifies an IPv4 address an instance of Inet4Address
     *  will be returned; otherwise, an instance of Inet6Address
     *  will be returned.
     *
     *  <p> IPv4 address byte array must be 4 bytes long and IPv6 byte array
     *  must be 16 bytes long
     * @param host the specified host
     * @param addr the raw IP address in network byte order
     * @return an InetAddress object created from the raw IP address.
     * @throws UnknownHostException if IP address is of illegal length
     * @since 1.4
     */
    getByAddress(host: String | string, addr: unknown[]): InetAddress;

    /**
     * Determines the IP address of a host, given the host's name.
     *
     *  <p> The host name can either be a machine name, such as
     *  "{@code java.sun.com}", or a textual representation of its
     *  IP address. If a literal IP address is supplied, only the
     *  validity of the address format is checked.
     *
     *  <p> For {@code host} specified in literal IPv6 address,
     *  either the form defined in RFC 2732 or the literal IPv6 address
     *  format defined in RFC 2373 is accepted. IPv6 scoped addresses are also
     *  supported. See <a href="Inet6Address.html#scoped">here</a> for a description of IPv6
     *  scoped addresses.
     *
     *  <p> If the host is {@code null} then an {@code InetAddress}
     *  representing an address of the loopback interface is returned.
     *  See <a href="http://www.ietf.org/rfc/rfc3330.txt">RFC&nbsp;3330</a>
     *  section&nbsp;2 and <a href="http://www.ietf.org/rfc/rfc2373.txt">RFC&nbsp;2373</a>
     *  section&nbsp;2.5.3. </p>
     * @param host the specified host, or {@code null}.
     * @return an IP address for the given host name.
     * @throws UnknownHostException if no IP address for the&#xA; {@code host} could be found, or if a scope_id was specified&#xA; for a global IPv6 address.
     * @throws SecurityException if a security manager exists&#xA; and its checkConnect method doesn't allow the operation
     */
    getByName(host: String | string): InetAddress;

    /**
     * Given the name of a host, returns an array of its IP addresses,
     *  based on the configured name service on the system.
     *
     *  <p> The host name can either be a machine name, such as
     *  "{@code java.sun.com}", or a textual representation of its IP
     *  address. If a literal IP address is supplied, only the
     *  validity of the address format is checked.
     *
     *  <p> For {@code host} specified in <i>literal IPv6 address</i>,
     *  either the form defined in RFC 2732 or the literal IPv6 address
     *  format defined in RFC 2373 is accepted. A literal IPv6 address may
     *  also be qualified by appending a scoped zone identifier or scope_id.
     *  The syntax and usage of scope_ids is described
     *  <a href="Inet6Address.html#scoped">here</a>.
     *  <p> If the host is {@code null} then an {@code InetAddress}
     *  representing an address of the loopback interface is returned.
     *  See <a href="http://www.ietf.org/rfc/rfc3330.txt">RFC&nbsp;3330</a>
     *  section&nbsp;2 and <a href="http://www.ietf.org/rfc/rfc2373.txt">RFC&nbsp;2373</a>
     *  section&nbsp;2.5.3. </p>
     *
     *  <p> If there is a security manager and {@code host} is not
     *  null and {@code host.length() } is not equal to zero, the
     *  security manager's
     *  {@code checkConnect} method is called
     *  with the hostname and {@code -1}
     *  as its arguments to see if the operation is allowed.
     * @param host the name of the host, or {@code null}.
     * @return an array of all the IP addresses for a given host name.
     * @throws UnknownHostException if no IP address for the&#xA; {@code host} could be found, or if a scope_id was specified&#xA; for a global IPv6 address.
     * @throws SecurityException if a security manager exists and its&#xA; {@code checkConnect} method doesn't allow the operation.
     * @see SecurityManager#checkConnect
     */
    getAllByName(host: String | string): InetAddress;

    /**
     * Returns the loopback address.
     *  <p>
     *  The InetAddress returned will represent the IPv4
     *  loopback address, 127.0.0.1, or the IPv6 loopback
     *  address, ::1. The IPv4 loopback address returned
     *  is only one of many in the form 127.*.*.*
     * @return the InetAddress loopback instance.
     * @since 1.7
     */
    getLoopbackAddress(): InetAddress;

    /**
     * Returns an {@code InetAddress} object given the raw IP address .
     *  The argument is in network byte order: the highest order
     *  byte of the address is in {@code getAddress()[0]}.
     *
     *  <p> This method doesn't block, i.e. no reverse name service lookup
     *  is performed.
     *
     *  <p> IPv4 address byte array must be 4 bytes long and IPv6 byte array
     *  must be 16 bytes long
     * @param addr the raw IP address in network byte order
     * @return an InetAddress object created from the raw IP address.
     * @throws UnknownHostException if IP address is of illegal length
     * @since 1.4
     */
    getByAddress(addr: unknown[]): InetAddress;

    /**
     * Returns the address of the local host. This is achieved by retrieving
     *  the name of the host from the system, then resolving that name into
     *  an {@code InetAddress}.
     *
     *  <P>Note: The resolved address may be cached for a short period of time.
     *  </P>
     *
     *  <p>If there is a security manager, its
     *  {@code checkConnect} method is called
     *  with the local host name and {@code -1}
     *  as its arguments to see if the operation is allowed.
     *  If the operation is not allowed, an InetAddress representing
     *  the loopback address is returned.
     * @return the address of the local host.
     * @throws UnknownHostException if the local host name could not&#xA; be resolved into an address.
     * @see SecurityManager#checkConnect
     * @see java.net.InetAddress#getByName(java.lang.String)
     */
    getLocalHost(): InetAddress;
  };
