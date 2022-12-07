/**
 * Instance type utility interface.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getInstanceTypeUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.6.2
 */

interface InstanceTypeUtil {
  /**
   * Checks if an object is a <code>String</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.String</code> or not.
   */
  isString(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Boolean</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Boolean</code> or not.
   */
  isBoolean(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is an <code>Integer</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Integer</code> or not.
   */
  isInteger(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Long</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Long</code> or not.
   */
  isLong(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Double</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Double</code> or not.
   */
  isDouble(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Float</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Float</code> or not.
   */
  isFloat(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Number</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Number</code> or not.
   * @since Sitevision 4.2.3
   */
  isNumber(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Node</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>{@link javax.jcr.Node}</code> or not.
   * @see senselogic.sitevision.api.node.NodeTypeUtil
   */
  isNode(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Property</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>{@link javax.jcr.Property}</code> or not.
   */
  isProperty(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Date</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.util.Date</code> or not.
   */
  isDate(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Calendar</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Calendar</code> or not.
   * @since Sitevision 4.2.3
   */
  isCalendar(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>List</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.util.List</code> or not.
   */
  isList(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Map</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.util.Map</code> or not.
   */
  isMap(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Set</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.util.Set</code> or not.
   */
  isSet(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Collection</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.util.Collection</code> or not.
   */
  isCollection(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is an <code>Iterator</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.util.Iterator</code> or not.
   */
  isIterator(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is an <code>Iterable</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Iterable</code> or not.
   * @since Sitevision 4.2.3
   */
  isIterable(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Serializable</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.io.Serializable</code> or not.
   * @since Sitevision 4.2.3
   */
  isSerializable(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Comparator</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Comparator</code> or not.
   * @since Sitevision 4.2.3
   */
  isComparator(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Comparable</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Comparable</code> or not.
   * @since Sitevision 4.2.3
   */
  isComparable(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is an <code>Exception</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Exception</code> or not.
   * @since Sitevision 4.2.3
   */
  isException(aObject: java.lang.Object): boolean;

  /**
   * Checks if an object is a <code>Throwable</code>.
   * @param aObject the object to be checked
   * @return whether <code>aObject</code> is a <code>java.lang.Throwable</code> or not.
   * @since Sitevision 4.2.3
   */
  isThrowable(aObject: java.lang.Object): boolean;
}
