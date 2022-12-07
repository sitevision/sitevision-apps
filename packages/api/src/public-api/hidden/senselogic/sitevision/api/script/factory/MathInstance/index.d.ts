/**
 * Instance wrapper for the <code>java.lang.Math</code> class that delegates all method calls to
 * the corresponding <code>Math</code> method.
 *
 * <p>
 *    <em>Note! Method documentations in this interface are only excerpts. For full documentation, see official java.lang.Math Javadoc</em>
 * </p>
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link InstanceCreatorUtil#getMathInstance()}.
 * See {@link InstanceCreatorUtil} for how to obtain an instance of the <code>InstanceCreatorUtil</code> interface.
 * </p>The <code>double</code> value that is closer than any other to
 * <i>e</i>, the base of the natural logarithms.The <code>double</code> value that is closer than any other to
 * <i>pi</i>, the ratio of the circumference of a circle to its diameter.
 * @author Magnus Lövgren
 * @since Sitevision 3.1
 */

interface MathInstance {
  /**
   * Returns the trigonometric sine of an angle.
   * @param anAngleInRadians an angle, in radians.
   * @return the sine of the argument.
   */
  sin(anAngleInRadians: double): number;

  /**
   * Returns the trigonometric cosine of an angle.
   * @param anAngleInRadians an angle, in radians.
   * @return the cosine of the argument.
   */
  cos(anAngleInRadians: double): number;

  /**
   * Returns the trigonometric tangent of an angle.
   * @param anAngleInRadians an angle, in radians.
   * @return the tangent of the argument.
   */
  tan(anAngleInRadians: double): number;

  /**
   * Returns the arc sine of a value; the returned angle is in the range -<i>pi</i>/2 through <i>pi</i>/2.
   * @param aValue the value whose arc sine is to be returned.
   * @return the arc sine of the argument.
   */
  asin(aValue: double): number;

  /**
   * Returns the arc cosine of a value; the returned angle is in the range 0.0 through <i>pi</i>.
   * @param aValue the value whose arc cosine is to be returned.
   * @return the arc cosine of the argument.
   */
  acos(aValue: double): number;

  /**
   * Returns the arc tangent of a value; the returned angle is in the range -<i>pi</i>/2 through <i>pi</i>/2.
   * @param aValue the value whose arc tangent is to be returned.
   * @return the arc tangent of the argument.
   */
  atan(aValue: double): number;

  /**
   * Converts an angle measured in degrees to an approximately equivalent angle measured in radians.
   * @param anAngleInDegrees an angle, in degrees
   * @return the measurement of the angle <code>anAngleInDegrees</code> in radians.
   */
  toRadians(anAngleInDegrees: double): number;

  /**
   * Converts an angle measured in radians to an approximately equivalent angle measured in degrees.
   * @param anAngleInRadians an angle, in radians
   * @return the measurement of the angle <code>anAngleInRadians</code> in degrees.
   */
  toDegrees(anAngleInRadians: double): number;

  /**
   * Returns Euler's number <i>e</i> raised to the power of a <code>double</code> value.
   * @param anExponent the exponent to raise <i>e</i> to.
   * @return the value <i>e</i><sup><code>anExponent</code></sup>, where <i>e</i> is the base of the natural logarithms.
   */
  exp(anExponent: double): number;

  /**
   * Returns the natural logarithm (base <i>e</i>) of a <code>double</code> value.
   * @param aValue a value
   * @return the value ln&nbsp;<code>aValue</code>, the natural logarithm of <code>aValue</code>.
   */
  log(aValue: double): number;

  /**
   * Returns the base 10 logarithm of a <code>double</code> value.
   * @param aValue a value
   * @return the base 10 logarithm of <code>aValue</code>.
   */
  log10(aValue: double): number;

  /**
   * Returns the correctly rounded positive square root of a <code>double</code> value.
   * @param aValue a value.
   * @return the positive square root of <code>aValue</code>. If the argument is NaN or less than zero, the result is NaN.
   */
  sqrt(aValue: double): number;

  /**
   * Returns the cube root of a <code>double</code> value.
   * @param aValue a value.
   * @return the cube root of <code>aValue</code>.
   */
  cbrt(aValue: double): number;

  /**
   * Computes the remainder operation on two arguments as prescribed by the IEEE 754 standard.
   * @param aDividend the dividend.
   * @param aDivisor the divisor.
   * @return the remainder when <code>aDividend</code> is divided by <code>aDivisor</code>.
   */
  IEEEremainder(aDividend: double, aDivisor: double): number;

  /**
   * Returns the smallest (closest to negative infinity) <code>double</code> value that is greater than
   * or equal to the argument and is equal to a mathematical integer.
   * @param aValue a value.
   * @return the smallest (closest to negative infinity) floating-point value that is greater than or equal to the argument and is equal to a mathematical integer.
   */
  ceil(aValue: double): number;

  /**
   * Returns the largest (closest to positive infinity) <code>double</code> value that is less than
   * or equal to the argument and is equal to a mathematical integer.
   * @param aValue a value.
   * @return the largest (closest to positive infinity) floating-point value that less than or equal to the argument and is equal to a mathematical integer.
   */
  floor(aValue: double): number;

  /**
   * Returns the <code>double</code> value that is closest in value to the argument and is equal to
   * a mathematical integer.
   * @param aValue a value.
   * @return the closest floating-point value to <code>aValue</code> that is equal to a mathematical integer.
   */
  rint(aValue: double): number;

  /**
   * Returns the angle <i>theta</i> from the conversion of rectangular coordinates
   * (<code>x</code>,&nbsp;<code>y</code>) to polar coordinates (r,&nbsp;<i>theta</i>).
   * @param y the ordinate coordinate
   * @param x the abscissa coordinate
   * @return the <i>theta</i> component of the point (<i>r</i>,&nbsp;<i>theta</i>) in polar coordinates that corresponds to the point (<i>x</i>,&nbsp;<i>y</i>) in Cartesian coordinates.
   */
  atan2(y: double, x: double): number;

  /**
   * Returns the value of the first argument raised to the power of the second argument.
   * @param aBase the base.
   * @param anExponent the exponent.
   * @return the value <code>aBase<sup>anExponent</sup></code>.
   */
  pow(aBase: double, anExponent: double): number;

  /**
   * Returns the closest <code>int</code> to the argument.
   * @param aValue a floating-point value to be rounded to an integer.
   * @return the value of the argument rounded to the nearest <code>int</code> value.
   */
  round(aValue: float): number;

  /**
   * Returns the closest <code>long</code> to the argument.
   * @param aValue a floating-point value to be rounded to a <code>long</code>.
   * @return the value of the argument rounded to the nearest <code>long</code> value.
   */
  round(aValue: double): number;

  /**
   * Returns a <code>double</code> value with a positive sign, greater
   * than or equal to <code>0.0</code> and less than <code>1.0</code>.
   * @return a pseudorandom <code>double</code> greater than or equal to <code>0.0</code> and less than <code>1.0</code>.
   */
  random(): number;

  /**
   * Returns the absolute value of an <code>int</code> value.
   * @param aValue the argument whose absolute value is to be determined
   * @return the absolute value of the argument.
   */
  abs(aValue: int): number;

  /**
   * Returns the absolute value of a <code>long</code> value.
   * @param aValue the argument whose absolute value is to be determined
   * @return the absolute value of the argument.
   */
  abs(aValue: long): number;

  /**
   * Returns the absolute value of a <code>float</code> value.
   * @param aValue the argument whose absolute value is to be determined
   * @return the absolute value of the argument.
   */
  abs(aValue: float): number;

  /**
   * Returns the absolute value of a <code>double</code> value.
   * @param aValue the argument whose absolute value is to be determined
   * @return the absolute value of the argument.
   */
  abs(aValue: double): number;

  /**
   * Returns the greater of two <code>int</code> values.
   * @param aValue an argument.
   * @param anAnotherValue another argument.
   * @return the larger of <code>aValue</code> and <code>anAnotherValue</code>.
   */
  max(aValue: int, anAnotherValue: int): number;

  /**
   * Returns the greater of two <code>long</code> values.
   * @param aValue an argument.
   * @param anAnotherValue another argument.
   * @return the larger of <code>a</code> and <code>anAnotherValue</code>.
   */
  max(aValue: long, anAnotherValue: long): number;

  /**
   * Returns the greater of two <code>float</code> values.
   * @param aValue an argument.
   * @param anAnotherValue another argument.
   * @return the larger of <code>aValue</code> and <code>anAnotherValue</code>.
   */
  max(aValue: float, anAnotherValue: float): number;

  /**
   * Returns the greater of two <code>double</code> values.
   * @param aValue an argument.
   * @param anAnotherValue another argument.
   * @return the larger of <code>aValue</code> and <code>anAnotherValue</code>.
   */
  max(aValue: double, anAnotherValue: double): number;

  /**
   * Returns the smaller of two <code>int</code> values.
   * @param aValue an argument.
   * @param anAnotherValue another argument.
   * @return the smaller of <code>aValue</code> and <code>anAnotherValue</code>.
   */
  min(aValue: int, anAnotherValue: int): number;

  /**
   * Returns the smaller of two <code>long</code> values.
   * @param aValue an argument.
   * @param anAnotherValue another argument.
   * @return the smaller of <code>aValue</code> and <code>anAnotherValue</code>.
   */
  min(aValue: long, anAnotherValue: long): number;

  /**
   * Returns the smaller of two <code>float</code> values.
   * @param aValue an argument.
   * @param anAnotherValue another argument.
   * @return the smaller of <code>aValue</code> and <code>anAnotherValue</code>.
   */
  min(aValue: float, anAnotherValue: float): number;

  /**
   * Returns the smaller of two <code>double</code> values.
   * @param aValue an argument.
   * @param anAnotherValue another argument.
   * @return the smaller of <code>aValue</code> and <code>anAnotherValue</code>.
   */
  min(aValue: double, anAnotherValue: double): number;

  /**
   * Returns the size of an ulp of the argument.
   * @param aValue the floating-point value whose ulp is to be returned
   * @return the size of an ulp of the argument
   */
  ulp(aValue: double): number;

  /**
   * Returns the size of an ulp of the argument.
   * @param aValue the floating-point value whose ulp is to be returned
   * @return the size of an ulp of the argument
   */
  ulp(aValue: float): number;

  /**
   * Returns the signum function of the argument.
   * @param aValue the floating-point value whose signum is to be returned
   * @return the signum function of the argument
   */
  signum(aValue: double): number;

  /**
   * Returns the signum function of the argument.
   * @param aValue the floating-point value whose signum is to be returned
   * @return the signum function of the argument
   */
  signum(aValue: float): number;

  /**
   * Returns the hyperbolic sine of a <code>double</code> value.
   * @param aValue The number whose hyperbolic sine is to be returned.
   * @return The hyperbolic sine of <code>aValue</code>.
   */
  sinh(aValue: double): number;

  /**
   * Returns the hyperbolic cosine of a <code>double</code> value.
   * @param aValue The number whose hyperbolic cosine is to be returned.
   * @return The hyperbolic cosine of <code>aValue</code>.
   */
  cosh(aValue: double): number;

  /**
   * Returns the hyperbolic tangent of a <code>double</code> value.
   * @param aValue The number whose hyperbolic tangent is to be returned.
   * @return The hyperbolic tangent of <code>aValue</code>.
   */
  tanh(aValue: double): number;

  /**
   * Returns sqrt(<i>x</i><sup>2</sup>&nbsp;+<i>y</i><sup>2</sup>) without intermediate overflow or underflow.
   * @param x a value
   * @param y a value
   * @return sqrt(<i>x</i><sup>2</sup>&nbsp;+<i>y</i><sup>2</sup>) without intermediate overflow or underflow
   */
  hypot(x: double, y: double): number;

  /**
   * Returns <i>e</i><sup>x</sup>&nbsp;-1.
   * @param x the exponent to raise <i>e</i> to in the computation of <i>e</i><sup><code>x</code></sup>&nbsp;-1.
   * @return the value <i>e</i><sup><code>x</code></sup>&nbsp;-&nbsp;1.
   */
  expm1(x: double): number;

  /**
   * Returns the natural logarithm of the sum of the argument and 1.
   * @param aValue a value
   * @return the value ln(<code>aValue</code>&nbsp;+&nbsp;1), the natural log of <code>aValue</code>&nbsp;+&nbsp;1
   */
  log1p(aValue: double): number;

  /**
   * Returns the first floating-point argument with the sign of the second floating-point argument.
   * @param aMagnitude the parameter providing the magnitude of the result
   * @param aSign the parameter providing the sign of the result
   * @return a value with the magnitude of <code>aMagnitude</code> and the sign of <code>aSign</code>.
   */
  copySign(aMagnitude: double, aSign: double): number;

  /**
   * Returns the first floating-point argument with the sign of the second floating-point argument.
   * @param aMagnitude the parameter providing the magnitude of the result
   * @param aSign the parameter providing the sign of the result
   * @return a value with the magnitude of <code>aMagnitude</code> and the sign of <code>aSign</code>.
   */
  copySign(aMagnitude: float, aSign: float): number;

  /**
   * Returns the unbiased exponent used in the representation of a <code>float</code>.
   * @param aValue a float value
   * @return the unbiased exponent of the argument
   */
  getExponent(aValue: float): number;

  /**
   * Returns the unbiased exponent used in the representation of a <code>double</code>.
   * @param aValue a double value
   * @return the unbiased exponent of the argument
   */
  getExponent(aValue: double): number;

  /**
   * Returns the floating-point number adjacent to the first argument in the direction of the second argument.
   * @param aStart starting floating-point value
   * @param aDirection value indicating which of <code>aStart</code>'s neighbors or <code>aStart</code> should be returned
   * @return The floating-point number adjacent to <code>aStart</code> in the direction of <code>aDirection</code>.
   */
  nextAfter(aStart: double, aDirection: double): number;

  /**
   * Returns the floating-point number adjacent to the first argument in the direction of the second argument.
   * @param aStart starting floating-point value
   * @param aDirection value indicating which of <code>aStart</code>'s neighbors or <code>aStart</code> should be returned
   * @return The floating-point number adjacent to <code>aStart</code> in the direction of <code>aDirection</code>.
   */
  nextAfter(aStart: float, aDirection: double): number;

  /**
   * Returns the floating-point value adjacent to a <code>double</code> in the direction of positive infinity.
   * @param aValue starting floating-point value
   * @return The adjacent floating-point value closer to positive infinity.
   */
  nextUp(aValue: double): number;

  /**
   * Returns the floating-point value adjacent to a <code>float</code> in the direction of positive infinity.
   * @param aValue starting floating-point value
   * @return The adjacent floating-point value closer to positive infinity.
   */
  nextUp(aValue: float): number;

  /**
   * Return <code>aDouble</code> &times; 2<sup><code>aScaleFactor</code></sup> rounded as if performed
   * by a single correctly rounded floating-point multiply to a member of the double value set.
   * @param aDouble number to be scaled by a power of two.
   * @param aScaleFactor power of 2 used to scale <code>aDouble</code>
   * @return <code>aDouble</code> &times; 2<sup><code>aScaleFactor</code></sup>
   */
  scalb(aDouble: double, aScaleFactor: int): number;

  /**
   * Return <code>aFloat</code> &times; 2<sup><code>aScaleFactor</code></sup> rounded as if performed
   * by a single correctly rounded floating-point multiply to a member of the float value set.
   * @param aFloat number to be scaled by a power of two.
   * @param aScaleFactor power of 2 used to scale <code>aFloat</code>
   * @return <code>aFloat</code> &times; 2<sup><code>aScaleFactor</code></sup>
   */
  scalb(aFloat: float, aScaleFactor: int): number;

  /**
   * Returns the sum of its arguments,throwing an exception if the result overflows an {@code int}.
   * @param x the first value
   * @param y the second value
   * @return the result
   * @throws ArithmeticException if the result overflows an int
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  addExact(x: int, y: int): number;

  /**
   * Returns the sum of its arguments, throwing an exception if the result overflows a {@code long}.
   * @param x the first value
   * @param y the second value
   * @return the result
   * @throws ArithmeticException if the result overflows a long
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  addExact(x: long, y: long): number;

  /**
   * Returns the difference of the arguments, throwing an exception if the result overflows an {@code int}.
   * @param x the first value
   * @param y the second value to subtract from the first
   * @return the result
   * @throws ArithmeticException if the result overflows an int
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  subtractExact(x: int, y: int): number;

  /**
   * Returns the difference of the arguments, throwing an exception if the result overflows a {@code long}.
   * @param x the first value
   * @param y the second value to subtract from the first
   * @return the result
   * @throws ArithmeticException if the result overflows a long
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  subtractExact(x: long, y: long): number;

  /**
   * Returns the product of the arguments, throwing an exception if the result overflows an {@code int}.
   * @param x the first value
   * @param y the second value
   * @return the result
   * @throws ArithmeticException if the result overflows an int
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  multiplyExact(x: int, y: int): number;

  /**
   * Returns the product of the arguments, throwing an exception if the result overflows a {@code long}.
   * @param x the first value
   * @param y the second value
   * @return the result
   * @throws ArithmeticException if the result overflows a long
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  multiplyExact(x: long, y: long): number;

  /**
   * Returns the argument incremented by one, throwing an exception if the result overflows an {@code int}.
   * @param a the value to increment
   * @return the result
   * @throws ArithmeticException if the result overflows an int
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  incrementExact(a: int): number;

  /**
   * Returns the argument incremented by one, throwing an exception if the result overflows a {@code long}.
   * @param a the value to increment
   * @return the result
   * @throws ArithmeticException if the result overflows a long
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  incrementExact(a: long): number;

  /**
   * Returns the argument decremented by one, throwing an exception if the result overflows an {@code int}.
   * @param a the value to decrement
   * @return the result
   * @throws ArithmeticException if the result overflows an int
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  decrementExact(a: int): number;

  /**
   * Returns the argument decremented by one, throwing an exception if the result overflows a {@code long}.
   * @param a the value to decrement
   * @return the result
   * @throws ArithmeticException if the result overflows a long
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  decrementExact(a: long): number;

  /**
   * Returns the negation of the argument, throwing an exception if the result overflows an {@code int}.
   * @param a the value to negate
   * @return the result
   * @throws ArithmeticException if the result overflows an int
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  negateExact(a: int): number;

  /**
   * Returns the negation of the argument, throwing an exception if the result overflows a {@code long}.
   * @param a the value to negate
   * @return the result
   * @throws ArithmeticException if the result overflows a long
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  negateExact(a: long): number;

  /**
   * Returns the value of the {@code long} argument, throwing an exception if the value overflows an {@code int}.
   * @param value the long value
   * @return the argument as an int
   * @throws ArithmeticException if the {@code argument} overflows an int
   * @since 1.8
   */
  toIntExact(value: long): number;

  /**
   * Returns the largest (closest to positive infinity) {@code int} value that is less than or equal to the algebraic quotient.
   * @param x the dividend
   * @param y the divisor
   * @return the largest (closest to positive infinity) {@code int} value that is less than or equal to the algebraic quotient.
   * @throws ArithmeticException if the divisor {@code y} is zero
   * @see #floorMod(int, int)
   * @see #floor(double)
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  floorDiv(x: int, y: int): number;

  /**
   * Returns the largest (closest to positive infinity) {@code long} value that is less than or equal to the algebraic quotient.
   * @param x the dividend
   * @param y the divisor
   * @return the largest (closest to positive infinity) {@code long} value that is less than or equal to the algebraic quotient.
   * @throws ArithmeticException if the divisor {@code y} is zero
   * @see #floorMod(long, long)
   * @see #floor(double)
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  floorDiv(x: long, y: long): number;

  /**
   * Returns the floor modulus of the {@code int} arguments.
   * @param x the dividend
   * @param y the divisor
   * @return the floor modulus {@code x - (floorDiv(x, y) * y)}
   * @throws ArithmeticException if the divisor {@code y} is zero
   * @see #floorDiv(int, int)
   * @since 1.8
   */
  floorMod(x: int, y: int): number;

  /**
   * Returns the floor modulus of the {@code long} arguments.
   * @param x the dividend
   * @param y the divisor
   * @return the floor modulus {@code x - (floorDiv(x, y) * y)}
   * @throws ArithmeticException if the divisor {@code y} is zero
   * @see #floorDiv(long, long)
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  floorMod(x: long, y: long): number;

  /**
   * Returns the floating-point value adjacent to {@code d} in the direction of negative infinity.
   * @param d starting floating-point value
   * @return The adjacent floating-point value closer to negative infinity.
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  nextDown(d: double): number;

  /**
   * Returns the floating-point value adjacent to {@code f} in the direction of negative infinity.
   * @param f starting floating-point value
   * @return The adjacent floating-point value closer to negative infinity.
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  nextDown(f: float): number;
}
