/**
 * Get methods for accessing field constants defined in {@link senselogic.sitevision.api.script.factory.MathInstance}.
 *
 * <p>
 *    The sole purpose of this interface is to provide access to {@link senselogic.sitevision.api.script.factory.MathInstance}
 *    constants in Velocity, e.g: <code>$mathInstance.PI</code>
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */
type MathInstanceConstants = {
  /**
   * Get accessor for {@link senselogic.sitevision.api.script.factory.MathInstance#E}.
   * @return {@link senselogic.sitevision.api.script.factory.MathInstance#E}
   */
  getE(): number;

  /**
   * Get accessor for {@link senselogic.sitevision.api.script.factory.MathInstance#PI}.
   * @return {@link senselogic.sitevision.api.script.factory.MathInstance#PI}
   */
  getPI(): number;
};

export = MathInstanceConstants;
