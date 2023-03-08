import type { Field } from "../Format.Field";

import type { Object } from "../../lang/Object";

import type { String } from "../../lang/String";

/**
 * <code>FieldPosition</code> is a simple class used by <code>Format</code>
 *  and its subclasses to identify fields in formatted output. Fields can
 *  be identified in two ways:
 *  <ul>
 *   <li>By an integer constant, whose names typically end with
 *       <code>_FIELD</code>. The constants are defined in the various
 *       subclasses of <code>Format</code>.
 *   <li>By a <code>Format.Field</code> constant, see <code>ERA_FIELD</code>
 *       and its friends in <code>DateFormat</code> for an example.
 *  </ul>
 *  <p>
 *  <code>FieldPosition</code> keeps track of the position of the
 *  field within the formatted output with two indices: the index
 *  of the first character of the field and the index of the last
 *  character of the field.
 *
 *  <p>
 *  One version of the <code>format</code> method in the various
 *  <code>Format</code> classes requires a <code>FieldPosition</code>
 *  object as an argument. You use this <code>format</code> method
 *  to perform partial formatting or to get information about the
 *  formatted output (such as the position of a field).
 *
 *  <p>
 *  If you are interested in the positions of all attributes in the
 *  formatted string use the <code>Format</code> method
 *  <code>formatToCharacterIterator</code>.
 * @author Mark Davis
 * @see java.text.Format
 */
export type FieldPosition = Object & {
  /**
   * Returns the field identifier as an attribute constant
   *  from one of the <code>Field</code> subclasses. May return null if
   *  the field is specified only by an integer field ID.
   * @return Identifier for the field
   * @since 1.4
   */
  getFieldAttribute(): Field;

  /**
   * Retrieves the field identifier.
   * @return the field identifier
   */
  getField(): number;

  /**
   * Retrieves the index of the first character in the requested field.
   * @return the begin index
   */
  getBeginIndex(): number;

  /**
   * Retrieves the index of the character following the last character in the
   *  requested field.
   * @return the end index
   */
  getEndIndex(): number;

  /**
   * Sets the begin index.  For use by subclasses of Format.
   * @param bi the begin index
   * @since 1.2
   */
  setBeginIndex(bi: number): void;

  /**
   * Sets the end index.  For use by subclasses of Format.
   * @param ei the end index
   * @since 1.2
   */
  setEndIndex(ei: number): void;

  /**
 * Overrides equals
  
    */
  equals(obj: unknown): boolean;

  /**
   * Returns a hash code for this FieldPosition.
   * @return a hash code value for this object
   */
  hashCode(): number;

  /**
   * Return a string representation of this FieldPosition.
   * @return a string representation of this object
   */
  toString(): string;
};
