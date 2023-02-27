import type { String } from "../String";

import type { Object } from "../Object";
import type { Number } from "../Number";
import type { Comparable } from "../Comparable";
import type { Class } from "../Class";

/**
 * The {@code Double} class wraps a value of the primitive type
 *  {@code double} in an object. An object of type
 *  {@code Double} contains a single field whose type is
 *  {@code double}.
 *
 *  <p>In addition, this class provides several methods for converting a
 *  {@code double} to a {@code String} and a
 *  {@code String} to a {@code double}, as well as other
 *  constants and methods useful when dealing with a
 *  {@code double}.
 * @author Lee Boynton
 * @author Arthur van Hoff
 * @author Joseph D. Darcy
 * @since JDK1.0
 */
export type Double = Number &
  Comparable & {
    /**
     * Returns {@code true} if this {@code Double} value is
     *  a Not-a-Number (NaN), {@code false} otherwise.
     * @return {@code true} if the value represented by this object is&#xA; NaN; {@code false} otherwise.
     */
    isNaN(): boolean;

    /**
     * Returns {@code true} if this {@code Double} value is
     *  infinitely large in magnitude, {@code false} otherwise.
     * @return {@code true} if the value represented by this object is&#xA; positive infinity or negative infinity;&#xA; {@code false} otherwise.
     */
    isInfinite(): boolean;

    /**
     * Returns a string representation of this {@code Double} object.
     *  The primitive {@code double} value represented by this
     *  object is converted to a string exactly as if by the method
     *  {@code toString} of one argument.
     * @return a {@code String} representation of this object.
     * @see java.lang.Double#toString(double)
     */
    toString(): string;

    /**
     * Returns the value of this {@code Double} as a {@code byte}
     *  after a narrowing primitive conversion.
     * @return the {@code double} value represented by this object&#xA; converted to type {@code byte}
     * @jls 5.1.3 Narrowing Primitive Conversions
     * @since JDK1.1
     */
    byteValue(): unknown;

    /**
     * Returns the value of this {@code Double} as a {@code short}
     *  after a narrowing primitive conversion.
     * @return the {@code double} value represented by this object&#xA; converted to type {@code short}
     * @jls 5.1.3 Narrowing Primitive Conversions
     * @since JDK1.1
     */
    shortValue(): number;

    /**
     * Returns the value of this {@code Double} as an {@code int}
     *  after a narrowing primitive conversion.
     * @jls 5.1.3 Narrowing Primitive Conversions
     * @return the {@code double} value represented by this object&#xA; converted to type {@code int}
     */
    intValue(): number;

    /**
     * Returns the value of this {@code Double} as a {@code long}
     *  after a narrowing primitive conversion.
     * @return the {@code double} value represented by this object&#xA; converted to type {@code long}
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    longValue(): number;

    /**
     * Returns the value of this {@code Double} as a {@code float}
     *  after a narrowing primitive conversion.
     * @return the {@code double} value represented by this object&#xA; converted to type {@code float}
     * @jls 5.1.3 Narrowing Primitive Conversions
     * @since JDK1.0
     */
    floatValue(): number;

    /**
     * Returns the {@code double} value of this {@code Double} object.
     * @return the {@code double} value represented by this object
     */
    doubleValue(): number;

    /**
     * Returns a hash code for this {@code Double} object. The
     *  result is the exclusive OR of the two halves of the
     *  {@code long} integer bit representation, exactly as
     *  produced by the method {@link #doubleToLongBits(double)}, of
     *  the primitive {@code double} value represented by this
     *  {@code Double} object. That is, the hash code is the value
     *  of the expression:
     *
     *  <blockquote>
     *   {@code (int)(v^(v>>>32))}
     *  </blockquote>
     *
     *  where {@code v} is defined by:
     *
     *  <blockquote>
     *   {@code long v = Double.doubleToLongBits(this.doubleValue());}
     *  </blockquote>
     * @return a {@code hash code} value for this object.
     */
    hashCode(): number;

    /**
     * Compares this object against the specified object.  The result
     *  is {@code true} if and only if the argument is not
     *  {@code null} and is a {@code Double} object that
     *  represents a {@code double} that has the same value as the
     *  {@code double} represented by this object. For this
     *  purpose, two {@code double} values are considered to be
     *  the same if and only if the method {@link
     *  #doubleToLongBits(double)} returns the identical
     *  {@code long} value when applied to each.
     *
     *  <p>Note that in most cases, for two instances of class
     *  {@code Double}, {@code d1} and {@code d2}, the
     *  value of {@code d1.equals(d2)} is {@code true} if and
     *  only if
     *
     *  <blockquote>
     *   {@code d1.doubleValue() == d2.doubleValue()}
     *  </blockquote>
     *
     *  <p>also has the value {@code true}. However, there are two
     *  exceptions:
     *  <ul>
     *  <li>If {@code d1} and {@code d2} both represent
     *      {@code Double.NaN}, then the {@code equals} method
     *      returns {@code true}, even though
     *      {@code Double.NaN==Double.NaN} has the value
     *      {@code false}.
     *  <li>If {@code d1} represents {@code +0.0} while
     *      {@code d2} represents {@code -0.0}, or vice versa,
     *      the {@code equal} test has the value {@code false},
     *      even though {@code +0.0==-0.0} has the value {@code true}.
     *  </ul>
     *  This definition allows hash tables to operate properly.
     * @param obj the object to compare with.
     * @return {@code true} if the objects are the same;&#xA; {@code false} otherwise.
     * @see java.lang.Double#doubleToLongBits(double)
     */
    equals(obj: unknown): boolean;

    /**
     * Compares two {@code Double} objects numerically.  There
     *  are two ways in which comparisons performed by this method
     *  differ from those performed by the Java language numerical
     *  comparison operators ({@code <, <=, ==, >=, >})
     *  when applied to primitive {@code double} values:
     *  <ul><li>
     *           {@code Double.NaN} is considered by this method
     *           to be equal to itself and greater than all other
     *           {@code double} values (including
     *           {@code Double.POSITIVE_INFINITY}).
     *  <li>
     *           {@code 0.0d} is considered by this method to be greater
     *           than {@code -0.0d}.
     *  </ul>
     *  This ensures that the <i>natural ordering</i> of
     *  {@code Double} objects imposed by this method is <i>consistent
     *  with equals</i>.
     * @param anotherDouble the {@code Double} to be compared.
     * @return the value {@code 0} if {@code anotherDouble} is&#xA; numerically equal to this {@code Double}; a value&#xA; less than {@code 0} if this {@code Double}&#xA; is numerically less than {@code anotherDouble};&#xA; and a value greater than {@code 0} if this&#xA; {@code Double} is numerically greater than&#xA; {@code anotherDouble}.
     * @since 1.2
     */
    compareTo(anotherDouble: Double | number): number;

    /**
 * A constant holding the positive infinity of type
 *  {@code double}. It is equal to the value returned by
 *  {@code Double.longBitsToDouble(0x7ff0000000000000L)}.
  
    */
    POSITIVE_INFINITY: number;

    /**
 * A constant holding the negative infinity of type
 *  {@code double}. It is equal to the value returned by
 *  {@code Double.longBitsToDouble(0xfff0000000000000L)}.
  
    */
    NEGATIVE_INFINITY: number;

    /**
 * A constant holding a Not-a-Number (NaN) value of type
 *  {@code double}. It is equivalent to the value returned by
 *  {@code Double.longBitsToDouble(0x7ff8000000000000L)}.
  
    */
    NaN: number;

    /**
 * A constant holding the largest positive finite value of type
 *  {@code double},
 *  (2-2<sup>-52</sup>)&middot;2<sup>1023</sup>.  It is equal to
 *  the hexadecimal floating-point literal
 *  {@code 0x1.fffffffffffffP+1023} and also equal to
 *  {@code Double.longBitsToDouble(0x7fefffffffffffffL)}.
  
    */
    MAX_VALUE: number;

    /**
     * A constant holding the smallest positive normal value of type
     *  {@code double}, 2<sup>-1022</sup>.  It is equal to the
     *  hexadecimal floating-point literal {@code 0x1.0p-1022} and also
     *  equal to {@code Double.longBitsToDouble(0x0010000000000000L)}.
     * @since 1.6
     */
    MIN_NORMAL: number;

    /**
 * A constant holding the smallest positive nonzero value of type
 *  {@code double}, 2<sup>-1074</sup>. It is equal to the
 *  hexadecimal floating-point literal
 *  {@code 0x0.0000000000001P-1022} and also equal to
 *  {@code Double.longBitsToDouble(0x1L)}.
  
    */
    MIN_VALUE: number;

    /**
     * Maximum exponent a finite {@code double} variable may have.
     *  It is equal to the value returned by
     *  {@code Math.getExponent(Double.MAX_VALUE)}.
     * @since 1.6
     */
    MAX_EXPONENT: number;

    /**
     * Minimum exponent a normalized {@code double} variable may
     *  have.  It is equal to the value returned by
     *  {@code Math.getExponent(Double.MIN_NORMAL)}.
     * @since 1.6
     */
    MIN_EXPONENT: number;

    /**
     * The number of bits used to represent a {@code double} value.
     * @since 1.5
     */
    SIZE: number;

    /**
     * The number of bytes used to represent a {@code double} value.
     * @since 1.8
     */
    BYTES: number;

    /**
     * The {@code Class} instance representing the primitive type
     *  {@code double}.
     * @since JDK1.1
     */
    TYPE: Class;
  };
