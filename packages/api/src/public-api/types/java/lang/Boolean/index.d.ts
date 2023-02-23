import type { String } from "../String";

import type { Object } from "../Object";
import type { Serializable } from "../../io/Serializable";
import type { Comparable } from "../Comparable";
import type { Class } from "../Class";

/**
 * The Boolean class wraps a value of the primitive type
 *  {@code boolean} in an object. An object of type
 *  {@code Boolean} contains a single field whose type is
 *  {@code boolean}.
 *  <p>
 *  In addition, this class provides many methods for
 *  converting a {@code boolean} to a {@code String} and a
 *  {@code String} to a {@code boolean}, as well as other
 *  constants and methods useful when dealing with a
 *  {@code boolean}.
 * @author Arthur van Hoff
 * @since JDK1.0
 */
export type Boolean = Object &
  Serializable &
  Comparable & {
    /**
     * Parses the string argument as a boolean.  The {@code boolean}
     *  returned represents the value {@code true} if the string argument
     *  is not {@code null} and is equal, ignoring case, to the string
     *  {@code "true"}. <p>
     *  Example: {@code Boolean.parseBoolean("True")} returns {@code true}.<br>
     *  Example: {@code Boolean.parseBoolean("yes")} returns {@code false}.
     * @param s the {@code String} containing the boolean&#xA; representation to be parsed
     * @return the boolean represented by the string argument
     * @since 1.5
     */
    parseBoolean(s: String | string): boolean;

    /**
     * Returns the value of this {@code Boolean} object as a boolean
     *  primitive.
     * @return the primitive {@code boolean} value of this object.
     */
    booleanValue(): boolean;

    /**
     * Returns a {@code Boolean} instance representing the specified
     *  {@code boolean} value.  If the specified {@code boolean} value
     *  is {@code true}, this method returns {@code Boolean.TRUE};
     *  if it is {@code false}, this method returns {@code Boolean.FALSE}.
     *  If a new {@code Boolean} instance is not required, this method
     *  should generally be used in preference to the constructor
     *  {@link #Boolean(boolean)}, as this method is likely to yield
     *  significantly better space and time performance.
     * @param b a boolean value.
     * @return a {@code Boolean} instance representing {@code b}.
     * @since 1.4
     */
    valueOf(b: boolean): boolean;

    /**
     * Returns a {@code Boolean} with a value represented by the
     *  specified string.  The {@code Boolean} returned represents a
     *  true value if the string argument is not {@code null}
     *  and is equal, ignoring case, to the string {@code "true"}.
     * @param s a string.
     * @return the {@code Boolean} value represented by the string.
     */
    valueOf(s: String | string): boolean;

    /**
     * Returns a {@code String} object representing the specified
     *  boolean.  If the specified boolean is {@code true}, then
     *  the string {@code "true"} will be returned, otherwise the
     *  string {@code "false"} will be returned.
     * @param b the boolean to be converted
     * @return the string representation of the specified {@code boolean}
     * @since 1.4
     */
    toString(b: boolean): string;

    /**
     * Returns a {@code String} object representing this Boolean's
     *  value.  If this object represents the value {@code true},
     *  a string equal to {@code "true"} is returned. Otherwise, a
     *  string equal to {@code "false"} is returned.
     * @return a string representation of this object.
     */
    toString(): string;

    /**
     * Returns a hash code for this {@code Boolean} object.
     * @return the integer {@code 1231} if this object represents&#xA; {@code true}; returns the integer {@code 1237} if this&#xA; object represents {@code false}.
     */
    hashCode(): number;

    /**
     * Returns a hash code for a {@code boolean} value; compatible with
     *  {@code Boolean.hashCode()}.
     * @param value the value to hash
     * @return a hash code value for a {@code boolean} value.
     * @since 1.8
     */
    hashCode(value: boolean): number;

    /**
     * Returns {@code true} if and only if the argument is not
     *  {@code null} and is a {@code Boolean} object that
     *  represents the same {@code boolean} value as this object.
     * @param obj the object to compare with.
     * @return {@code true} if the Boolean objects represent the&#xA; same value; {@code false} otherwise.
     */
    equals(obj: unknown): boolean;

    /**
     * Returns {@code true} if and only if the system property
     *  named by the argument exists and is equal to the string
     *  {@code "true"}. (Beginning with version 1.0.2 of the
     *  Java<small><sup>TM</sup></small> platform, the test of
     *  this string is case insensitive.) A system property is accessible
     *  through {@code getProperty}, a method defined by the
     *  {@code System} class.
     *  <p>
     *  If there is no property with the specified name, or if the specified
     *  name is empty or null, then {@code false} is returned.
     * @param name the system property name.
     * @return the {@code boolean} value of the system property.
     * @throws SecurityException for the same reasons as&#xA; {@link System#getProperty(String) System.getProperty}
     * @see java.lang.System#getProperty(java.lang.String)
     * @see java.lang.System#getProperty(java.lang.String, java.lang.String)
     */
    getBoolean(name: String | string): boolean;

    /**
     * Compares this {@code Boolean} instance with another.
     * @param b the {@code Boolean} instance to be compared
     * @return zero if this object represents the same boolean value as the&#xA; argument; a positive value if this object represents true&#xA; and the argument represents false; and a negative value if&#xA; this object represents false and the argument represents true
     * @throws NullPointerException if the argument is {@code null}
     * @see Comparable
     * @since 1.5
     */
    compareTo(b: boolean): number;

    /**
     * Compares two {@code boolean} values.
     *  The value returned is identical to what would be returned by:
     *  <pre>
     *     Boolean.valueOf(x).compareTo(Boolean.valueOf(y))
     *  </pre>
     * @param x the first {@code boolean} to compare
     * @param y the second {@code boolean} to compare
     * @return the value {@code 0} if {@code x == y};&#xA; a value less than {@code 0} if {@code !x && y}; and&#xA; a value greater than {@code 0} if {@code x && !y}
     * @since 1.7
     */
    compare(x: boolean, y: boolean): number;

    /**
     * Returns the result of applying the logical AND operator to the
     *  specified {@code boolean} operands.
     * @param a the first operand
     * @param b the second operand
     * @return the logical AND of {@code a} and {@code b}
     * @see java.util.function.BinaryOperator
     * @since 1.8
     */
    logicalAnd(a: boolean, b: boolean): boolean;

    /**
     * Returns the result of applying the logical OR operator to the
     *  specified {@code boolean} operands.
     * @param a the first operand
     * @param b the second operand
     * @return the logical OR of {@code a} and {@code b}
     * @see java.util.function.BinaryOperator
     * @since 1.8
     */
    logicalOr(a: boolean, b: boolean): boolean;

    /**
     * Returns the result of applying the logical XOR operator to the
     *  specified {@code boolean} operands.
     * @param a the first operand
     * @param b the second operand
     * @return the logical XOR of {@code a} and {@code b}
     * @see java.util.function.BinaryOperator
     * @since 1.8
     */
    logicalXor(a: boolean, b: boolean): boolean;

    /**
 * The {@code Boolean} object corresponding to the primitive
 *  value {@code true}.
  
    */
    TRUE: boolean;

    /**
 * The {@code Boolean} object corresponding to the primitive
 *  value {@code false}.
  
    */
    FALSE: boolean;

    /**
     * The Class object representing the primitive type boolean.
     * @since JDK1.1
     */
    TYPE: Class;
  };
