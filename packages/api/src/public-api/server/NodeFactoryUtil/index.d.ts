import TemporaryNodeBuilder from "../TemporaryNodeBuilder";
import TemporaryFileNodeBuilder from "../TemporaryFileNodeBuilder";

/**
 * Gets a builder for creating temporary nodes (sv:temporary).
 * @return a builder for creating temporary nodes
 */
export function getTemporaryNodeBuilder(): TemporaryNodeBuilder;

/**
 * Gets a builder for creating temporary file nodes (sv:temporaryFile).
 * @return a builder for creating temporary file nodes
 * @since Sitevision 4.5.4
 */
export function getTemporaryFileNodeBuilder(): TemporaryFileNodeBuilder;

/**
 * Node factory utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getNodeFactoryUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.1.2
 */
declare namespace nodeFactoryUtil {
  export { getTemporaryNodeBuilder, getTemporaryFileNodeBuilder };
}

export default nodeFactoryUtil;
