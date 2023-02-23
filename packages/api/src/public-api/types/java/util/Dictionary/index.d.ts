import type { Enumeration } from "../Enumeration";
import type { Object } from "../../lang/Object";

/**
 * The <code>Dictionary</code> class is the abstract parent of any
 *  class, such as <code>Hashtable</code>, which maps keys to values.
 *  Every key and every value is an object. In any one <tt>Dictionary</tt>
 *  object, every key is associated with at most one value. Given a
 *  <tt>Dictionary</tt> and a key, the associated element can be looked up.
 *  Any non-<code>null</code> object can be used as a key and as a value.
 *  <p>
 *  As a rule, the <code>equals</code> method should be used by
 *  implementations of this class to decide if two keys are the same.
 *  <p>
 *  <strong>NOTE: This class is obsolete.  New implementations should
 *  implement the Map interface, rather than extending this class.</strong>
 * @author unascribed
 * @see java.util.Map
 * @see java.lang.Object#equals(java.lang.Object)
 * @see java.lang.Object#hashCode()
 * @see java.util.Hashtable
 * @since JDK1.0
 */
export type Dictionary = Object & {
  /**
   * Returns the number of entries (distinct keys) in this dictionary.
   * @return the number of keys in this dictionary.
   */
  size(): number;

  /**
   * Tests if this dictionary maps no keys to value. The general contract
   *  for the <tt>isEmpty</tt> method is that the result is true if and only
   *  if this dictionary contains no entries.
   * @return <code>true</code> if this dictionary maps no keys to values;&#xA; <code>false</code> otherwise.
   */
  isEmpty(): boolean;

  /**
   * Returns an enumeration of the keys in this dictionary. The general
   *  contract for the keys method is that an <tt>Enumeration</tt> object
   *  is returned that will generate all the keys for which this dictionary
   *  contains entries.
   * @return an enumeration of the keys in this dictionary.
   * @see java.util.Dictionary#elements()
   * @see java.util.Enumeration
   */
  keys(): Enumeration;

  /**
   * Returns an enumeration of the values in this dictionary. The general
   *  contract for the <tt>elements</tt> method is that an
   *  <tt>Enumeration</tt> is returned that will generate all the elements
   *  contained in entries in this dictionary.
   * @return an enumeration of the values in this dictionary.
   * @see java.util.Dictionary#keys()
   * @see java.util.Enumeration
   */
  elements(): Enumeration;

  /**
   * Returns the value to which the key is mapped in this dictionary.
   *  The general contract for the <tt>isEmpty</tt> method is that if this
   *  dictionary contains an entry for the specified key, the associated
   *  value is returned; otherwise, <tt>null</tt> is returned.
   * @return the value to which the key is mapped in this dictionary;
   * @param key a key in this dictionary.&#xA; <code>null</code> if the key is not mapped to any value in&#xA; this dictionary.
   * @throws NullPointerException if the <tt>key</tt> is <tt>null</tt>.
   * @see java.util.Dictionary#put(java.lang.Object, java.lang.Object)
   */
  get(key: unknown): unknown;

  /**
   * Maps the specified <code>key</code> to the specified
   *  <code>value</code> in this dictionary. Neither the key nor the
   *  value can be <code>null</code>.
   *  <p>
   *  If this dictionary already contains an entry for the specified
   *  <tt>key</tt>, the value already in this dictionary for that
   *  <tt>key</tt> is returned, after modifying the entry to contain the
   *   new element. <p>If this dictionary does not already have an entry
   *   for the specified <tt>key</tt>, an entry is created for the
   *   specified <tt>key</tt> and <tt>value</tt>, and <tt>null</tt> is
   *   returned.
   *  <p>
   *  The <code>value</code> can be retrieved by calling the
   *  <code>get</code> method with a <code>key</code> that is equal to
   *  the original <code>key</code>.
   * @param key the hashtable key.
   * @param value the value.
   * @return the previous value to which the <code>key</code> was mapped&#xA; in this dictionary, or <code>null</code> if the key did not&#xA; have a previous mapping.
   * @throws NullPointerException if the <code>key</code> or&#xA; <code>value</code> is <code>null</code>.
   * @see java.lang.Object#equals(java.lang.Object)
   * @see java.util.Dictionary#get(java.lang.Object)
   */
  put(key: unknown, value: unknown): unknown;

  /**
   * Removes the <code>key</code> (and its corresponding
   *  <code>value</code>) from this dictionary. This method does nothing
   *  if the <code>key</code> is not in this dictionary.
   * @param key the key that needs to be removed.
   * @return the value to which the <code>key</code> had been mapped in this&#xA; dictionary, or <code>null</code> if the key did not have a&#xA; mapping.
   * @throws NullPointerException if <tt>key</tt> is <tt>null</tt>.
   */
  remove(key: unknown): unknown;
};
