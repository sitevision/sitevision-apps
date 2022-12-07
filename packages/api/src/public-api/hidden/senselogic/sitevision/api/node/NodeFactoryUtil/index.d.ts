import TemporaryNodeBuilder from "../builder/TemporaryNodeBuilder";
import TemporaryFileNodeBuilder from "../builder/TemporaryFileNodeBuilder";

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

interface NodeFactoryUtil {
  /**
   * Gets a builder for creating temporary nodes (sv:temporary).
   * @return a builder for creating temporary nodes
   */
  getTemporaryNodeBuilder(): TemporaryNodeBuilder;

  /**
   * Gets a builder for creating temporary file nodes (sv:temporaryFile).
   * @return a builder for creating temporary file nodes
   * @since Sitevision 4.5.4
   */
  getTemporaryFileNodeBuilder(): TemporaryFileNodeBuilder;
}
