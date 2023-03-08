import type { Object } from "../../lang/Object";

import type { String } from "../../lang/String";

/**
 * <code>ParsePosition</code> is a simple class used by <code>Format</code>
 *  and its subclasses to keep track of the current position during parsing.
 *  The <code>parseObject</code> method in the various <code>Format</code>
 *  classes requires a <code>ParsePosition</code> object as an argument.
 *
 *  <p>
 *  By design, as you parse through a string with different formats,
 *  you can use the same <code>ParsePosition</code>, since the index parameter
 *  records the current position.
 * @author Mark Davis
 * @see java.text.Format
 */
export type ParsePosition = Object & {
  /**
   * Retrieve the current parse position.  On input to a parse method, this
   *  is the index of the character at which parsing will begin; on output, it
   *  is the index of the character following the last character parsed.
   * @return the current parse position
   */
  getIndex(): number;

  /**
   * Set the current parse position.
   * @param index the current parse position
   */
  setIndex(index: number): void;

  /**
   * Set the index at which a parse error occurred.  Formatters
   *  should set this before returning an error code from their
   *  parseObject method.  The default value is -1 if this is not set.
   * @param ei the index at which an error occurred
   * @since 1.2
   */
  setErrorIndex(ei: number): void;

  /**
   * Retrieve the index at which an error occurred, or -1 if the
   *  error index has not been set.
   * @return the index at which an error occurred
   * @since 1.2
   */
  getErrorIndex(): number;

  /**
 * Overrides equals
  
    */
  equals(obj: unknown): boolean;

  /**
   * Returns a hash code for this ParsePosition.
   * @return a hash code value for this object
   */
  hashCode(): number;

  /**
   * Return a string representation of this ParsePosition.
   * @return a string representation of this object
   */
  toString(): string;
};
