import type { Type } from "../Proxy.Type";
import type { SocketAddress } from "../SocketAddress";
import type { String } from "../../lang/String";
import type { Object } from "../../lang/Object";

/**
 * This class represents a proxy setting, typically a type (http, socks) and
 *  a socket address.
 *  A {@code Proxy} is an immutable object.
 * @see java.net.ProxySelector
 * @author Yingxian Wang
 * @author Jean-Christophe Collet
 * @since 1.5
 */
export type Proxy = Object & {
  /**
   * Returns the proxy type.
   * @return a Type representing the proxy type
   */
  type(): Type;

  /**
   * Returns the socket address of the proxy, or
   *  {@code null} if its a direct connection.
   * @return a {@code SocketAddress} representing the socket end&#xA; point of the proxy
   */
  address(): SocketAddress;

  /**
   * Constructs a string representation of this Proxy.
   *  This String is constructed by calling toString() on its type
   *  and concatenating " @ " and the toString() result from its address
   *  if its type is not {@code DIRECT}.
   * @return a string representation of this object.
   */
  toString(): string;

  /**
   * Compares this object against the specified object.
   *  The result is {@code true} if and only if the argument is
   *  not {@code null} and it represents the same proxy as
   *  this object.
   *  <p>
   *  Two instances of {@code Proxy} represent the same
   *  address if both the SocketAddresses and type are equal.
   * @param obj the object to compare against.
   * @return {@code true} if the objects are the same;&#xA; {@code false} otherwise.
   * @see java.net.InetSocketAddress#equals(java.lang.Object)
   */
  equals(obj: unknown): boolean;

  /**
   * Returns a hashcode for this Proxy.
   * @return a hash code value for this Proxy.
   */
  hashCode(): number;

  /**
 * A proxy setting that represents a {@code DIRECT} connection,
 *  basically telling the protocol handler not to use any proxying.
 *  Used, for instance, to create sockets bypassing any other global
 *  proxy settings (like SOCKS):
 *  <P>
 *  {@code Socket s = new Socket(Proxy.NO_PROXY);}
  
    */
  NO_PROXY: Proxy;
};
