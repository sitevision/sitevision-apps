import type { Attribute } from "../AttributedCharacterIterator.Attribute";
import type { Set } from "../../util/Set";
import type { Map } from "../../util/Map";
import type { Object } from "../../lang/Object";
import type { CharacterIterator } from "../CharacterIterator";

/**
 * An {@code AttributedCharacterIterator} allows iteration through both text and
 *  related attribute information.
 *
 *  <p>
 *  An attribute is a key/value pair, identified by the key.  No two
 *  attributes on a given character can have the same key.
 *
 *  <p>The values for an attribute are immutable, or must not be mutated
 *  by clients or storage.  They are always passed by reference, and not
 *  cloned.
 *
 *  <p>A <em>run with respect to an attribute</em> is a maximum text range for
 *  which:
 *  <ul>
 *  <li>the attribute is undefined or {@code null} for the entire range, or
 *  <li>the attribute value is defined and has the same non-{@code null} value for the
 *      entire range.
 *  </ul>
 *
 *  <p>A <em>run with respect to a set of attributes</em> is a maximum text range for
 *  which this condition is met for each member attribute.
 *
 *  <p>When getting a run with no explicit attributes specified (i.e.,
 *  calling {@link #getRunStart()} and {@link #getRunLimit()}), any
 *  contiguous text segments having the same attributes (the same set
 *  of attribute/value pairs) are treated as separate runs if the
 *  attributes have been given to those text segments separately.
 *
 *  <p>The returned indexes are limited to the range of the iterator.
 *
 *  <p>The returned attribute information is limited to runs that contain
 *  the current character.
 *
 *  <p>
 *  Attribute keys are instances of {@link AttributedCharacterIterator.Attribute} and its
 *  subclasses, such as {@link java.awt.font.TextAttribute}.
 * @see AttributedCharacterIterator.Attribute
 * @see java.awt.font.TextAttribute
 * @see AttributedString
 * @see Annotation
 * @since 1.2
 */
export type AttributedCharacterIterator = CharacterIterator & {
  /**
   * Returns the index of the first character of the run
   *  with respect to all attributes containing the current character.
   *
   *  <p>Any contiguous text segments having the same attributes (the
   *  same set of attribute/value pairs) are treated as separate runs
   *  if the attributes have been given to those text segments separately.
   * @return the index of the first character of the run
   */
  getRunStart(): number;

  /**
   * Returns the index of the first character of the run
   *  with respect to the given {@code attribute} containing the current character.
   * @param attribute the desired attribute.
   * @return the index of the first character of the run
   */
  getRunStart(attribute: Attribute): number;

  /**
   * Returns the index of the first character of the run
   *  with respect to the given {@code attributes} containing the current character.
   * @param attributes a set of the desired attributes.
   * @return the index of the first character of the run
   */
  getRunStart(attributes: Set | unknown[]): number;

  /**
   * Returns the index of the first character following the run
   *  with respect to all attributes containing the current character.
   *
   *  <p>Any contiguous text segments having the same attributes (the
   *  same set of attribute/value pairs) are treated as separate runs
   *  if the attributes have been given to those text segments separately.
   * @return the index of the first character following the run
   */
  getRunLimit(): number;

  /**
   * Returns the index of the first character following the run
   *  with respect to the given {@code attribute} containing the current character.
   * @param attribute the desired attribute
   * @return the index of the first character following the run
   */
  getRunLimit(attribute: Attribute): number;

  /**
   * Returns the index of the first character following the run
   *  with respect to the given {@code attributes} containing the current character.
   * @param attributes a set of the desired attributes
   * @return the index of the first character following the run
   */
  getRunLimit(attributes: Set | unknown[]): number;

  /**
   * Returns a map with the attributes defined on the current
   *  character.
   * @return a map with the attributes defined on the current character
   */
  getAttributes(): Map;

  /**
   * Returns the value of the named {@code attribute} for the current character.
   *  Returns {@code null} if the {@code attribute} is not defined.
   * @param attribute the desired attribute
   * @return the value of the named {@code attribute} or {@code null}
   */
  getAttribute(attribute: Attribute): unknown;

  /**
   * Returns the keys of all attributes defined on the
   *  iterator's text range. The set is empty if no
   *  attributes are defined.
   * @return the keys of all attributes
   */
  getAllAttributeKeys(): Set;
};
