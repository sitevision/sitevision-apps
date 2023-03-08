import type { Object } from "../../../lang/Object";

import type { String } from "../../../lang/String";

/**
 * Localized decimal style used in date and time formatting.
 *  <p>
 *  A significant part of dealing with dates and times is the localization.
 *  This class acts as a central point for accessing the information.
 * @implSpec This class is immutable and thread-safe.
 * @since 1.8
 */
export type DecimalStyle = Object & {
  /**
   * Gets the character that represents zero.
   *  <p>
   *  The character used to represent digits may vary by culture.
   *  This method specifies the zero character to use, which implies the characters for one to nine.
   * @return the character for zero
   */
  getZeroDigit(): string;

  /**
   * Returns a copy of the info with a new character that represents zero.
   *  <p>
   *  The character used to represent digits may vary by culture.
   *  This method specifies the zero character to use, which implies the characters for one to nine.
   * @param zeroDigit the character for zero
   * @return a copy with a new character that represents zero, not null
   */
  withZeroDigit(zeroDigit: string): DecimalStyle;

  /**
   * Gets the character that represents the positive sign.
   *  <p>
   *  The character used to represent a positive number may vary by culture.
   *  This method specifies the character to use.
   * @return the character for the positive sign
   */
  getPositiveSign(): string;

  /**
   * Returns a copy of the info with a new character that represents the positive sign.
   *  <p>
   *  The character used to represent a positive number may vary by culture.
   *  This method specifies the character to use.
   * @param positiveSign the character for the positive sign
   * @return a copy with a new character that represents the positive sign, not null
   */
  withPositiveSign(positiveSign: string): DecimalStyle;

  /**
   * Gets the character that represents the negative sign.
   *  <p>
   *  The character used to represent a negative number may vary by culture.
   *  This method specifies the character to use.
   * @return the character for the negative sign
   */
  getNegativeSign(): string;

  /**
   * Returns a copy of the info with a new character that represents the negative sign.
   *  <p>
   *  The character used to represent a negative number may vary by culture.
   *  This method specifies the character to use.
   * @param negativeSign the character for the negative sign
   * @return a copy with a new character that represents the negative sign, not null
   */
  withNegativeSign(negativeSign: string): DecimalStyle;

  /**
   * Gets the character that represents the decimal point.
   *  <p>
   *  The character used to represent a decimal point may vary by culture.
   *  This method specifies the character to use.
   * @return the character for the decimal point
   */
  getDecimalSeparator(): string;

  /**
   * Returns a copy of the info with a new character that represents the decimal point.
   *  <p>
   *  The character used to represent a decimal point may vary by culture.
   *  This method specifies the character to use.
   * @param decimalSeparator the character for the decimal point
   * @return a copy with a new character that represents the decimal point, not null
   */
  withDecimalSeparator(decimalSeparator: string): DecimalStyle;

  /**
   * Checks if this DecimalStyle is equal to another DecimalStyle.
   * @param obj the object to check, null returns false
   * @return true if this is equal to the other date
   */
  equals(obj: unknown): boolean;

  /**
   * A hash code for this DecimalStyle.
   * @return a suitable hash code
   */
  hashCode(): number;

  /**
   * Returns a string describing this DecimalStyle.
   * @return a string description, not null
   */
  toString(): string;

  /**
 * The standard set of non-localized decimal style symbols.
 *  <p>
 *  This uses standard ASCII characters for zero, positive, negative and a dot for the decimal point.
  
    */
  STANDARD: DecimalStyle;
};
