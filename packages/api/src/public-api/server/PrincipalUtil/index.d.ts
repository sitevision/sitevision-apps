import Node from "../../hidden/javax/jcr/Node";

/**
 * Perform work during the login phase as a specified user.
 *
 * <p>
 *    <strong>Note!</strong> This method should <em>only</em> be used during the login phase (i.e. in a JAAS login module).
 *    Other usages will throw an <code>IllegalStateException</code>.
 * </p>
 * @param aUser the user
 * @param aAction a runnable containing the operations that is to be performed
 * @throws IllegalStateException if this method is not called during the login phase
 */
export function doAsDuringLogin(aUser: Node, aAction: unknown): void;

/**
 * Provides access to a virtual group wrapped as a JCR node given the group name.
 * @param aName the name of the virtual group, may not be null
 * @return the virtual group wrapped in a JCR node, or null if none exists
 * @since Sitevision 3.0
 */
export function getVirtualGroupByName(aName: string): Node;

/**
 * Provides access to virtual groups wrapped as a JCR node given the group name.
 * @param aNames a list of names, may not be null
 * @return a list of virtual groups wrapped in JCR nodes, or an empty list of none exists
 * @since Sitevision 3.0
 */
export function getVirtualGroupsByName(aNames: unknown): unknown;

/**
 * <p>Principal utility interface.</p>
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getPrincipalUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1_06
 */
declare namespace principalUtil {
  export { doAsDuringLogin, getVirtualGroupByName, getVirtualGroupsByName };
}

export default principalUtil;
