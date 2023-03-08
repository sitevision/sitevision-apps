import type { VersionException } from "../VersionException";

/**
 * Exception will be thrown by <code>Node.checkout</code> and
 *  <code>Node.checkpoint</code> if an activity A is present on the current
 *  session and any of the following conditions is met: <ul> <li>There already is
 *  a node in another workspace that has a checked-out node for the version
 *  history of N whose jcr:activity references A.</li> <li>There is a version in
 *  the version history of N that is not a predecessor of N but whose
 *  jcr:activity references A.</li> </ul>
 * @since Sitevision 3.5
 * @since JCR 2.0
 */
export type ActivityViolationException = VersionException & {};
