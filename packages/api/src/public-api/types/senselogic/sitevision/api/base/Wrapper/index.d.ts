/**
 * This is the base interface for all wrappers in the Sitevision Utility API.
 *
 * <p>
 *    A <em>Wrapper</em> "wraps" and "encapsulates" the functionality of another class or interface in order to make it easier to use
 *    and potentially provide different behaviour than the wrapped object can provide. In general a wrapper is going to expand on what
 *    the wrapped object does.
 * </p>
 * <p>
 *    All invocations for the wrapper will be delegated to the wrapped object, or executed with the wrapped object as subject/context
 *    when performing the invocation.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export type Wrapper = {
  /**
   * Gets the wrapped object.
   * @return the wrapped object, i.e. the instance that was used when this wrapper was created
   */
  unwrap(): unknown;
};
