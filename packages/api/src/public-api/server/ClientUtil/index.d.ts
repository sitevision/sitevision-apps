/**
 * Client utility interface.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getClientUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 *
 * <p>
 * <em>Tip!</em> If you want to check if current client is a mobile device, you would typically use
 * {@link senselogic.sitevision.api.device.DeviceUtil}.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.6_02
 */
export interface ClientUtil {
  /**
   * Gets the Internet Protocol (IP) address of the client (or last proxy) that initiated currently executing request.
   * @return a <code>String</code> containing the IP address of the client that sent the request, or <code>null</code> if indeterminable
   */
  getClientAddress(): string;
}

declare namespace ClientUtil {}

declare var clientUtil: ClientUtil;

export default clientUtil;
