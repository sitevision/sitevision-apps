import type { String } from "../String";

import type { Object } from "../Object";
import type { Number } from "../Number";
import type { Comparable } from "../Comparable";
import type { Class } from "../Class";

/**
 * The {@code Float} class wraps a value of primitive type
 *  {@code float} in an object. An object of type
 *  {@code Float} contains a single field whose type is
 *  {@code float}.
 *
 *  <p>In addition, this class provides several methods for converting a
 *  {@code float} to a {@code String} and a
 *  {@code String} to a {@code float}, as well as other
 *  constants and methods useful when dealing with a
 *  {@code float}.
 * @author Lee Boynton
 * @author Arthur van Hoff
 * @author Joseph D. Darcy
 * @since JDK1.0
 */
export type Float = Number &
  Comparable & {
    /**
     * Returns {@code true} if this {@code Float} value is a
     *  Not-a-Number (NaN), {@code false} otherwise.
     * @return {@code true} if the value represented by this object is&#xA; NaN; {@code false} otherwise.
     */
    isNaN(): boolean;

    /**
     * Returns {@code true} if this {@code Float} value is
     *  infinitely large in magnitude, {@code false} otherwise.
     * @return {@code true} if the value represented by this object is&#xA; positive infinity or negative infinity;&#xA; {@code false} otherwise.
     */
    isInfinite(): boolean;

    /**
     * Returns a string representation of this {@code Float} object.
     *  The primitive {@code float} value represented by this object
     *  is converted to a {@code String} exactly as if by the method
     *  {@code toString} of one argument.
     * @return a {@code String} representation of this object.
     * @see java.lang.Float#toString(float)
     */
    toString(): string;

    /**
     * Returns the value of this {@code Float} as a {@code byte} after
     *  a narrowing primitive conversion.
     * @return the {@code float} value represented by this object&#xA; converted to type {@code byte}
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    byteValue(): unknown;

    /**
     * Returns the value of this {@code Float} as a {@code short}
     *  after a narrowing primitive conversion.
     * @return the {@code float} value represented by this object&#xA; converted to type {@code short}
     * @jls 5.1.3 Narrowing Primitive Conversions
     * @since JDK1.1
     */
    shortValue(): number;

    /**
     * Returns the value of this {@code Float} as an {@code int} after
     *  a narrowing primitive conversion.
     * @return the {@code float} value represented by this object&#xA; converted to type {@code int}
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    intValue(): number;

    /**
     * Returns value of this {@code Float} as a {@code long} after a
     *  narrowing primitive conversion.
     * @return the {@code float} value represented by this object&#xA; converted to type {@code long}
     * @jls 5.1.3 Narrowing Primitive Conversions
     */
    longValue(): number;

    /**
     * Returns the {@code float} value of this {@code Float} object.
     * @return the {@code float} value represented by this object
     */
    floatValue(): number;

    /**
     * Returns the value of this {@code Float} as a {@code double}
     *  after a widening primitive conversion.
     * @return the {@code float} value represented by this&#xA; object converted to type {@code double}
     * @jls 5.1.2 Widening Primitive Conversions
     */
    doubleValue(): number;

    /**
     * Returns a hash code for this {@code Float} object. The
     *  result is the integer bit representation, exactly as produced
     *  by the method {@link #floatToIntBits(float)}, of the primitive
     *  {@code float} value represented by this {@code Float}
     *  object.
     * @return a hash code value for this object.
     */
    hashCode(): number;

    /**
     * Compares this object against the specified object.  The result
     *  is {@code true} if and only if the argument is not
     *  {@code null} and is a {@code Float} object that
     *  represents a {@code float} with the same value as the
     *  {@code float} represented by this object. For this
     *  purpose, two {@code float} values are considered to be the
     *  same if and only if the method {@link #floatToIntBits(float)}
     *  returns the identical {@code int} value when applied to
     *  each.
     *
     *  <p>Note that in most cases, for two instances of class
     *  {@code Float}, {@code f1} and {@code f2}, the value
     *  of {@code f1.equals(f2)} is {@code true} if and only if
     *
     *  <blockquote><pre>
     *    f1.floatValue() == f2.floatValue()
     *  </pre></blockquote>
     *
     *  <p>also has the value {@code true}. However, there are two exceptions:
     *  <ul>
     *  <li>If {@code f1} and {@code f2} both represent
     *      {@code Float.NaN}, then the {@code equals} method returns
     *      {@code true}, even though {@code Float.NaN==Float.NaN}
     *      has the value {@code false}.
     *  <li>If {@code f1} represents {@code +0.0f} while
     *      {@code f2} represents {@code -0.0f}, or vice
     *      versa, the {@code equal} test has the value
     *      {@code false}, even though {@code 0.0f==-0.0f}
     *      has the value {@code true}.
     *  </ul>
     *
     *  This definition allows hash tables to operate properly.
     * @param obj the object to be compared
     * @return {@code true} if the objects are the same;&#xA; {@code false} otherwise.
     * @see java.lang.Float#floatToIntBits(float)
     */
    equals(obj: unknown): boolean;

    /**
     * Compares two {@code Float} objects numerically.  There are
     *  two ways in which comparisons performed by this method differ
     *  from those performed by the Java language numerical comparison
     *  operators ({@code <, <=, ==, >=, >}) when
     *  applied to primitive {@code float} values:
     *
     *  <ul><li>
     *           {@code Float.NaN} is considered by this method to
     *           be equal to itself and greater than all other
     *           {@code float} values
     *           (including {@code Float.POSITIVE_INFINITY}).
     *  <li>
     *           {@code 0.0f} is considered by this method to be greater
     *           than {@code -0.0f}.
     *  </ul>
     *
     *  This ensures that the <i>natural ordering</i> of {@code Float}
     *  objects imposed by this method is <i>consistent with equals</i>.
     * @param anotherFloat the {@code Float} to be compared.
     * @return the value {@code 0} if {@code anotherFloat} is&#xA; numerically equal to this {@code Float}; a value&#xA; less than {@code 0} if this {@code Float}&#xA; is numerically less than {@code anotherFloat};&#xA; and a value greater than {@code 0} if this&#xA; {@code Float} is numerically greater than&#xA; {@code anotherFloat}.
     * @since 1.2
     * @see Comparable#compareTo(Object)
     */
    compareTo(anotherFloat: Float | number): number;

    /**
 * A constant holding the positive infinity of type
 *  {@code float}. It is equal to the value returned by
 *  {@code Float.intBitsToFloat(0x7f800000)}.
  
    */
    POSITIVE_INFINITY: number;

    /**
 * A constant holding the negative infinity of type
 *  {@code float}. It is equal to the value returned by
 *  {@code Float.intBitsToFloat(0xff800000)}.
  
    */
    NEGATIVE_INFINITY: number;

    /**
 * A constant holding a Not-a-Number (NaN) value of type
 *  {@code float}.  It is equivalent to the value returned by
 *  {@code Float.intBitsToFloat(0x7fc00000)}.
  
    */
    NaN: number;

    /**
 * A constant holding the largest positive finite value of type
 *  {@code float}, (2-2<sup>-23</sup>)&middot;2<sup>127</sup>.
 *  It is equal to the hexadecimal floating-point literal
 *  {@code 0x1.fffffeP+127f} and also equal to
 *  {@code Float.intBitsToFloat(0x7f7fffff)}.
  
    */
    MAX_VALUE: number;

    /**
     * A constant holding the smallest positive normal value of type
     *  {@code float}, 2<sup>-126</sup>.  It is equal to the
     *  hexadecimal floating-point literal {@code 0x1.0p-126f} and also
     *  equal to {@code Float.intBitsToFloat(0x00800000)}.
     * @since 1.6
     */
    MIN_NORMAL: number;

    /**
 * A constant holding the smallest positive nonzero value of type
 *  {@code float}, 2<sup>-149</sup>. It is equal to the
 *  hexadecimal floating-point literal {@code 0x0.000002P-126f}
 *  and also equal to {@code Float.intBitsToFloat(0x1)}.
  
    */
    MIN_VALUE: number;

    /**
     * Maximum exponent a finite {@code float} variable may have.  It
     *  is equal to the value returned by {@code
     *  Math.getExponent(Float.MAX_VALUE)}.
     * @since 1.6
     */
    MAX_EXPONENT: number;

    /**
     * Minimum exponent a normalized {@code float} variable may have.
     *  It is equal to the value returned by {@code
     *  Math.getExponent(Float.MIN_NORMAL)}.
     * @since 1.6
     */
    MIN_EXPONENT: number;

    /**
     * The number of bits used to represent a {@code float} value.
     * @since 1.5
     */
    SIZE: number;

    /**
     * The number of bytes used to represent a {@code float} value.
     * @since 1.8
     */
    BYTES: number;

    /**
     * The {@code Class} instance representing the primitive type
     *  {@code float}.
     * @since JDK1.1
     */
    TYPE: Class;
  };
