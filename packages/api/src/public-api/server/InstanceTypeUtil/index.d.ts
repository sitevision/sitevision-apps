/**
 * Checks if an object is a <code>String</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.String</code> or not.
 */
export function isString(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Boolean</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Boolean</code> or not.
 */
export function isBoolean(aObject: unknown): boolean;

/**
 * Checks if an object is an <code>Integer</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Integer</code> or not.
 */
export function isInteger(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Long</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Long</code> or not.
 */
export function isLong(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Double</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Double</code> or not.
 */
export function isDouble(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Float</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Float</code> or not.
 */
export function isFloat(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Number</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Number</code> or not.
 * @since Sitevision 4.2.3
 */
export function isNumber(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Node</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>{@link javax.jcr.Node}</code> or not.
 * @see senselogic.sitevision.api.node.NodeTypeUtil
 */
export function isNode(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Property</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>{@link javax.jcr.Property}</code> or not.
 */
export function isProperty(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Date</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.util.Date</code> or not.
 */
export function isDate(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Calendar</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Calendar</code> or not.
 * @since Sitevision 4.2.3
 */
export function isCalendar(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>List</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.util.List</code> or not.
 */
export function isList(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Map</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.util.Map</code> or not.
 */
export function isMap(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Set</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.util.Set</code> or not.
 */
export function isSet(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Collection</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.util.Collection</code> or not.
 */
export function isCollection(aObject: unknown): boolean;

/**
 * Checks if an object is an <code>Iterator</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.util.Iterator</code> or not.
 */
export function isIterator(aObject: unknown): boolean;

/**
 * Checks if an object is an <code>Iterable</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Iterable</code> or not.
 * @since Sitevision 4.2.3
 */
export function isIterable(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Serializable</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.io.Serializable</code> or not.
 * @since Sitevision 4.2.3
 */
export function isSerializable(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Comparator</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Comparator</code> or not.
 * @since Sitevision 4.2.3
 */
export function isComparator(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Comparable</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Comparable</code> or not.
 * @since Sitevision 4.2.3
 */
export function isComparable(aObject: unknown): boolean;

/**
 * Checks if an object is an <code>Exception</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Exception</code> or not.
 * @since Sitevision 4.2.3
 */
export function isException(aObject: unknown): boolean;

/**
 * Checks if an object is a <code>Throwable</code>.
 * @param aObject the object to be checked
 * @return whether <code>aObject</code> is a <code>java.lang.Throwable</code> or not.
 * @since Sitevision 4.2.3
 */
export function isThrowable(aObject: unknown): boolean;

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
declare namespace instanceTypeUtil {
  export {
    isString,
    isBoolean,
    isInteger,
    isLong,
    isDouble,
    isFloat,
    isNumber,
    isNode,
    isProperty,
    isDate,
    isCalendar,
    isList,
    isMap,
    isSet,
    isCollection,
    isIterator,
    isIterable,
    isSerializable,
    isComparator,
    isComparable,
    isException,
    isThrowable,
  };
}

export default instanceTypeUtil;
