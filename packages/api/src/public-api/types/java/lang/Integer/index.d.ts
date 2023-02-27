import type { String } from "../String";
import type { Object } from "../Object";

import type { Number } from "../Number";
import type { Comparable } from "../Comparable";
import type { Class } from "../Class";

/**
 * The {@code Integer} class wraps a value of the primitive type
 *  {@code int} in an object. An object of type {@code Integer}
 *  contains a single field whose type is {@code int}.
 *
 *  <p>In addition, this class provides several methods for converting
 *  an {@code int} to a {@code String} and a {@code String} to an
 *  {@code int}, as well as other constants and methods useful when
 *  dealing with an {@code int}.
 *
 *  <p>Implementation note: The implementations of the "bit twiddling"
 *  methods (such as {@link #highestOneBit(int) highestOneBit} and
 *  {@link #numberOfTrailingZeros(int) numberOfTrailingZeros}) are
 *  based on material from Henry S. Warren, Jr.'s <i>Hacker's
 *  Delight</i>, (Addison Wesley, 2002).
 * @author Lee Boynton
 * @author Arthur van Hoff
 * @author Josh Bloch
 * @author Joseph D. Darcy
 * @since JDK1.0
 */
export type Integer = Number &
  Comparable & {
    /**
     * Returns the value of this {@code Integer} as a {@code byte}
     *  after a narrowing primitive conversion.
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    byteValue(): unknown;

    /**
     * Returns the value of this {@code Integer} as a {@code short}
     *  after a narrowing primitive conversion.
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    shortValue(): number;

    /**
 * Returns the value of this {@code Integer} as an
 *  {@code int}.
  
    */
    intValue(): number;

    /**
     * Returns the value of this {@code Integer} as a {@code long}
     *  after a widening primitive conversion.
     * @jls 5.1.2 Widening Primitive Conversions
     * @see Integer#toUnsignedLong(int)
     */
    longValue(): number;

    /**
     * Returns the value of this {@code Integer} as a {@code float}
     *  after a widening primitive conversion.
     * @jls 5.1.2 Widening Primitive Conversions
     */
    floatValue(): number;

    /**
     * Returns the value of this {@code Integer} as a {@code double}
     *  after a widening primitive conversion.
     * @jls 5.1.2 Widening Primitive Conversions
     */
    doubleValue(): number;

    /**
     * Returns a {@code String} object representing this
     *  {@code Integer}'s value. The value is converted to signed
     *  decimal representation and returned as a string, exactly as if
     *  the integer value were given as an argument to the {@link
     *  java.lang.Integer#toString(int)} method.
     * @return a string representation of the value of this object in&#xA; base&nbsp;10.
     */
    toString(): string;

    /**
     * Returns a hash code for this {@code Integer}.
     * @return a hash code value for this object, equal to the&#xA; primitive {@code int} value represented by this&#xA; {@code Integer} object.
     */
    hashCode(): number;

    /**
     * Compares this object to the specified object.  The result is
     *  {@code true} if and only if the argument is not
     *  {@code null} and is an {@code Integer} object that
     *  contains the same {@code int} value as this object.
     * @param obj the object to compare with.
     * @return {@code true} if the objects are the same;&#xA; {@code false} otherwise.
     */
    equals(obj: unknown): boolean;

    /**
     * Compares two {@code Integer} objects numerically.
     * @param anotherInteger the {@code Integer} to be compared.
     * @return the value {@code 0} if this {@code Integer} is&#xA; equal to the argument {@code Integer}; a value less than&#xA; {@code 0} if this {@code Integer} is numerically less&#xA; than the argument {@code Integer}; and a value greater&#xA; than {@code 0} if this {@code Integer} is numerically&#xA; greater than the argument {@code Integer} (signed&#xA; comparison).
     * @since 1.2
     */
    compareTo(anotherInteger: Integer | number): number;

    /**
 * A constant holding the minimum value an {@code int} can
 *  have, -2<sup>31</sup>.
  
    */
    MIN_VALUE: number;

    /**
 * A constant holding the maximum value an {@code int} can
 *  have, 2<sup>31</sup>-1.
  
    */
    MAX_VALUE: number;

    /**
     * The {@code Class} instance representing the primitive type
     *  {@code int}.
     * @since JDK1.1
     */
    TYPE: Class;

    /**
     * The number of bits used to represent an {@code int} value in two's
     *  complement binary form.
     * @since 1.5
     */
    SIZE: number;

    /**
     * The number of bytes used to represent a {@code int} value in two's
     *  complement binary form.
     * @since 1.8
     */
    BYTES: number;
  };
