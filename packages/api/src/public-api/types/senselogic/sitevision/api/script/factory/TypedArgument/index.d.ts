/**
 * This interface is a representation of a constructor argument (it's value and type) that can be used to
 * create Java object instances via {@link InstanceCreatorUtil}.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via any of these methods:
 * </p>
 * <ul>
 *    <li>{@link InstanceCreatorUtil#getBooleanArgument(boolean)}</li>
 *    <li>{@link InstanceCreatorUtil#getByteArgument(byte)}</li>
 *    <li>{@link InstanceCreatorUtil#getCharArgument(char)}</li>
 *    <li>{@link InstanceCreatorUtil#getCustomArgument(String, Object)}</li>
 *    <li>{@link InstanceCreatorUtil#getDoubleArgument(double)}</li>
 *    <li>{@link InstanceCreatorUtil#getEnumArgument(String, Object)}</li>
 *    <li>{@link InstanceCreatorUtil#getFloatArgument(float)}</li>
 *    <li>{@link InstanceCreatorUtil#getIntArgument(int)}</li>
 *    <li>{@link InstanceCreatorUtil#getLongArgument(long)}</li>
 *    <li>{@link InstanceCreatorUtil#getNullArgument(String)}</li>
 *    <li>{@link InstanceCreatorUtil#getObjectArgument(Object)}</li>
 *    <li>{@link InstanceCreatorUtil#getShortArgument(short)}</li>
 * </ul>
 *
 * <p>
 *    See {@link InstanceCreatorUtil} for how to obtain an instance of the <code>InstanceCreatorUtil</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.1
 */
type TypedArgument = {
  /**
   * Gets the argument class.
   * @return the class of the argument
   */
  getType(): unknown;

  /**
   * Gets the argument value.
   * @return the value of the argument
   */
  getValue(): unknown;
};

export = TypedArgument;
