import type { String } from "../String";
import type { Object } from "../Object";

import type { Number } from "../Number";
import type { Comparable } from "../Comparable";
import type { Class } from "../Class";

/**
 * The {@code Long} class wraps a value of the primitive type {@code
 *  long} in an object. An object of type {@code Long} contains a
 *  single field whose type is {@code long}.
 *
 *  <p> In addition, this class provides several methods for converting
 *  a {@code long} to a {@code String} and a {@code String} to a {@code
 *  long}, as well as other constants and methods useful when dealing
 *  with a {@code long}.
 *
 *  <p>Implementation note: The implementations of the "bit twiddling"
 *  methods (such as {@link #highestOneBit(long) highestOneBit} and
 *  {@link #numberOfTrailingZeros(long) numberOfTrailingZeros}) are
 *  based on material from Henry S. Warren, Jr.'s <i>Hacker's
 *  Delight</i>, (Addison Wesley, 2002).
 * @author Lee Boynton
 * @author Arthur van Hoff
 * @author Josh Bloch
 * @author Joseph D. Darcy
 * @since JDK1.0
 */
export type Long = Number &
  Comparable & {
    /**
     * Returns the value of this {@code Long} as a {@code byte} after
     *  a narrowing primitive conversion.
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    byteValue(): unknown;

    /**
     * Returns the value of this {@code Long} as a {@code short} after
     *  a narrowing primitive conversion.
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    shortValue(): number;

    /**
     * Returns the value of this {@code Long} as an {@code int} after
     *  a narrowing primitive conversion.
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    intValue(): number;

    /**
 * Returns the value of this {@code Long} as a
 *  {@code long} value.
  
    */
    longValue(): number;

    /**
     * Returns the value of this {@code Long} as a {@code float} after
     *  a widening primitive conversion.
     * @jls 5.1.2 Widening Primitive Conversions
     */
    floatValue(): number;

    /**
     * Returns the value of this {@code Long} as a {@code double}
     *  after a widening primitive conversion.
     * @jls 5.1.2 Widening Primitive Conversions
     */
    doubleValue(): number;

    /**
     * Returns a {@code String} object representing this
     *  {@code Long}'s value.  The value is converted to signed
     *  decimal representation and returned as a string, exactly as if
     *  the {@code long} value were given as an argument to the
     *  {@link java.lang.Long#toString(long)} method.
     * @return a string representation of the value of this object in&#xA; base&nbsp;10.
     */
    toString(): string;

    /**
     * Returns a hash code for this {@code Long}. The result is
     *  the exclusive OR of the two halves of the primitive
     *  {@code long} value held by this {@code Long}
     *  object. That is, the hashcode is the value of the expression:
     *
     *  <blockquote>
     *   {@code (int)(this.longValue()^(this.longValue()>>>32))}
     *  </blockquote>
     * @return a hash code value for this object.
     */
    hashCode(): number;

    /**
     * Compares this object to the specified object.  The result is
     *  {@code true} if and only if the argument is not
     *  {@code null} and is a {@code Long} object that
     *  contains the same {@code long} value as this object.
     * @param obj the object to compare with.
     * @return {@code true} if the objects are the same;&#xA; {@code false} otherwise.
     */
    equals(obj: unknown): boolean;

    /**
     * Compares two {@code Long} objects numerically.
     * @param anotherLong the {@code Long} to be compared.
     * @return the value {@code 0} if this {@code Long} is&#xA; equal to the argument {@code Long}; a value less than&#xA; {@code 0} if this {@code Long} is numerically less&#xA; than the argument {@code Long}; and a value greater&#xA; than {@code 0} if this {@code Long} is numerically&#xA; greater than the argument {@code Long} (signed&#xA; comparison).
     * @since 1.2
     */
    compareTo(anotherLong: Long | number): number;

    /**
 * A constant holding the minimum value a {@code long} can
 *  have, -2<sup>63</sup>.
  
    */
    MIN_VALUE: number;

    /**
 * A constant holding the maximum value a {@code long} can
 *  have, 2<sup>63</sup>-1.
  
    */
    MAX_VALUE: number;

    /**
     * The {@code Class} instance representing the primitive type
     *  {@code long}.
     * @since JDK1.1
     */
    TYPE: Class;

    /**
     * The number of bits used to represent a {@code long} value in two's
     *  complement binary form.
     * @since 1.5
     */
    SIZE: number;

    /**
     * The number of bytes used to represent a {@code long} value in two's
     *  complement binary form.
     * @since 1.8
     */
    BYTES: number;
  };
