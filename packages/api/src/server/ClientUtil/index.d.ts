/**
 * Gets the Internet Protocol (IP) address of the client (or last proxy) that initiated currently executing request.
 *
 * @return {string} a <code>String</code> containing the IP address of the client that sent the request, or <code>null</code> if indeterminable
 */
export function getClientAddress(): string;

declare namespace clientUtil {
  export { getClientAddress };
}

export default clientUtil;
