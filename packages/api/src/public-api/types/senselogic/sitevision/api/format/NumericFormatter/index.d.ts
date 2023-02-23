import type { String } from "../../../../../java/lang/String";

import type { Object } from "../../../../../java/lang/Object";
import type { Number } from "../../../../../java/lang/Number";

/**
 * Numerical value formatter.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     a builder created via {@link FormatterBuilderFactory}.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 6.1
 */
export type NumericFormatter = {
  /**
   * Formats a double value.
   *
   *  <p>
   *     <em>This method is conceptually equivalent with <code>java.text.NumberFormat.format(double)</code>.</em>
   *  </p>
   * @param aNumber a double value
   * @return a formatted result
   * @throws ArithmeticException if a mathematical operation fails
   */
  formatDouble(aNumber: number): string;

  /**
   * Formats a long value.
   *
   *  <p>
   *     <em>This method is conceptually equivalent with <code>java.text.NumberFormat.format(long)</code>.</em>
   *  </p>
   * @param aNumber a long value
   * @return a formatted result
   * @throws ArithmeticException if a mathematical operation fails
   */
  formatLong(aNumber: number): string;

  /**
   * Formats a Object value.
   *
   *  <p>
   *     <em>This method is conceptually equivalent with <code>java.text.NumberFormat.format(Object)</code>.</em>
   *  </p>
   * @param aObject a Object, typically a java.lang.Number
   * @return a formatted result
   * @throws NullPointerException if aObject is null
   * @throws IllegalArgumentException if aObject is of an unsupported type (e.g. not numerical)
   * @throws ArithmeticException if a mathematical operation fails
   */
  format(aObject: unknown): string;

  /**
   * Parses a source string to a Number.
   *
   *  <p>
   *     <em>This method is conceptually equivalent with <code>java.text.NumberFormat.parse(String)</code>.</em>
   *  </p>
   * @param aSource a string, typically the resulting string from a <em>format</em> operation of a formatter like this
   * @return the Number object parsed from aSource
   * @throws NullPointerException if aSource is null
   * @throws ParseException if parsing of aSource fails
   */
  parse(aSource: String | string): number;
};
