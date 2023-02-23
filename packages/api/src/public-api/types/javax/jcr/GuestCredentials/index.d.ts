import type { Object } from "../../../java/lang/Object";
import type { Credentials } from "../Credentials";

/**
 * <code>GuestCredentials</code> implements the <code>Credentials</code>
 *  interface and is used to obtain a "guest", "public" or "anonymous" session.
 *  Note that the characteristics of the session created from the
 *  <code>GuestCredentials</code> remain implementation specific.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
export type GuestCredentials = Object & Credentials & {};
