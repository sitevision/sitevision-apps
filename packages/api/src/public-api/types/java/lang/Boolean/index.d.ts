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
     * Returns the value of this {@code Boolean} object as a boolean
     *  primitive.
     * @return the primitive {@code boolean} value of this object.
     */
    booleanValue(): boolean;

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
     * Returns {@code true} if and only if the argument is not
     *  {@code null} and is a {@code Boolean} object that
     *  represents the same {@code boolean} value as this object.
     * @param obj the object to compare with.
     * @return {@code true} if the Boolean objects represent the&#xA; same value; {@code false} otherwise.
     */
    equals(obj: unknown): boolean;

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
