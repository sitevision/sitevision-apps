/**
 * This is the base interface for all resolvers in the Sitevision Utility API.
 *
 * <p>
 *    A <em>resolver</em> operates on an object and extracts/transforms/calculates a value of different type.
 * </p>
 * <p>
 *    <em>
 *       Note! This functional interface is conceptually equivalent (though the method names differ) with the
 *       <code>java.util.function.Function</code> interface that was introduced in Java 8.
 *    </em>
 * </p>
 * <p>
 *    See {@link senselogic.sitevision.api.node.NodeResolverUtil} for predefined resolvers that operates on nodes
 *    (i.e. <code>Resolver&lt;Node,?&gt;</code>).
 * </p>
 * @param <T> type of object to operate on
 * @param <V> type of value to produce
 * @author Magnus Lövgren
 * @since Sitevision 4.1
 */
type Resolver = {
  /**
   * Resolves a value from an object.
   * @param aObject the object to operate on
   * @return the resolved value
   */
  resolve(aObject: unknown): unknown;
};

export = Resolver;
