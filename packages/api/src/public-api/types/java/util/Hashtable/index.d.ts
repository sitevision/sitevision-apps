import type { Enumeration } from "../Enumeration";
import type { Object } from "../../lang/Object";

import type { Map } from "../Map";
import type { String } from "../../lang/String";
import type { Set } from "../Set";
import type { Collection } from "../Collection";
import type { BiConsumer } from "../function/BiConsumer";
import type { BiFunction } from "../function/BiFunction";
import type { Function } from "../function/Function";
import type { Dictionary } from "../Dictionary";
import type { Cloneable } from "../../lang/Cloneable";
import type { Serializable } from "../../io/Serializable";

/**
 * This class implements a hash table, which maps keys to values. Any
 *  non-<code>null</code> object can be used as a key or as a value. <p>
 *
 *  To successfully store and retrieve objects from a hashtable, the
 *  objects used as keys must implement the <code>hashCode</code>
 *  method and the <code>equals</code> method. <p>
 *
 *  An instance of <code>Hashtable</code> has two parameters that affect its
 *  performance: <i>initial capacity</i> and <i>load factor</i>.  The
 *  <i>capacity</i> is the number of <i>buckets</i> in the hash table, and the
 *  <i>initial capacity</i> is simply the capacity at the time the hash table
 *  is created.  Note that the hash table is <i>open</i>: in the case of a "hash
 *  collision", a single bucket stores multiple entries, which must be searched
 *  sequentially.  The <i>load factor</i> is a measure of how full the hash
 *  table is allowed to get before its capacity is automatically increased.
 *  The initial capacity and load factor parameters are merely hints to
 *  the implementation.  The exact details as to when and whether the rehash
 *  method is invoked are implementation-dependent.<p>
 *
 *  Generally, the default load factor (.75) offers a good tradeoff between
 *  time and space costs.  Higher values decrease the space overhead but
 *  increase the time cost to look up an entry (which is reflected in most
 *  <tt>Hashtable</tt> operations, including <tt>get</tt> and <tt>put</tt>).<p>
 *
 *  The initial capacity controls a tradeoff between wasted space and the
 *  need for <code>rehash</code> operations, which are time-consuming.
 *  No <code>rehash</code> operations will <i>ever</i> occur if the initial
 *  capacity is greater than the maximum number of entries the
 *  <tt>Hashtable</tt> will contain divided by its load factor.  However,
 *  setting the initial capacity too high can waste space.<p>
 *
 *  If many entries are to be made into a <code>Hashtable</code>,
 *  creating it with a sufficiently large capacity may allow the
 *  entries to be inserted more efficiently than letting it perform
 *  automatic rehashing as needed to grow the table. <p>
 *
 *  This example creates a hashtable of numbers. It uses the names of
 *  the numbers as keys:
 *  <pre>   {@code
 *    Hashtable<String, Integer> numbers
 *      = new Hashtable<String, Integer>();
 *    numbers.put("one", 1);
 *    numbers.put("two", 2);
 *    numbers.put("three", 3);}</pre>
 *
 *  <p>To retrieve a number, use the following code:
 *  <pre>   {@code
 *    Integer n = numbers.get("two");
 *    if (n != null) {
 *      System.out.println("two = " + n);
 *    }}</pre>
 *
 *  <p>The iterators returned by the <tt>iterator</tt> method of the collections
 *  returned by all of this class's "collection view methods" are
 *  <em>fail-fast</em>: if the Hashtable is structurally modified at any time
 *  after the iterator is created, in any way except through the iterator's own
 *  <tt>remove</tt> method, the iterator will throw a {@link
 *  ConcurrentModificationException}.  Thus, in the face of concurrent
 *  modification, the iterator fails quickly and cleanly, rather than risking
 *  arbitrary, non-deterministic behavior at an undetermined time in the future.
 *  The Enumerations returned by Hashtable's keys and elements methods are
 *  <em>not</em> fail-fast.
 *
 *  <p>Note that the fail-fast behavior of an iterator cannot be guaranteed
 *  as it is, generally speaking, impossible to make any hard guarantees in the
 *  presence of unsynchronized concurrent modification.  Fail-fast iterators
 *  throw <tt>ConcurrentModificationException</tt> on a best-effort basis.
 *  Therefore, it would be wrong to write a program that depended on this
 *  exception for its correctness: <i>the fail-fast behavior of iterators
 *  should be used only to detect bugs.</i>
 *
 *  <p>As of the Java 2 platform v1.2, this class was retrofitted to
 *  implement the {@link Map} interface, making it a member of the
 *  <a href="{@docRoot}/../technotes/guides/collections/index.html">
 *
 *  Java Collections Framework</a>.  Unlike the new collection
 *  implementations, {@code Hashtable} is synchronized.  If a
 *  thread-safe implementation is not needed, it is recommended to use
 *  {@link HashMap} in place of {@code Hashtable}.  If a thread-safe
 *  highly-concurrent implementation is desired, then it is recommended
 *  to use {@link java.util.concurrent.ConcurrentHashMap} in place of
 *  {@code Hashtable}.
 * @author Arthur van Hoff
 * @author Josh Bloch
 * @author Neal Gafter
 * @see Object#equals(java.lang.Object)
 * @see Object#hashCode()
 * @see Hashtable#rehash()
 * @see Collection
 * @see Map
 * @see HashMap
 * @see TreeMap
 * @since JDK1.0
 */
export type Hashtable = Dictionary &
  Map &
  Cloneable &
  Serializable & {
    /**
     * Returns the number of keys in this hashtable.
     * @return the number of keys in this hashtable.
     */
    size(): number;

    /**
     * Tests if this hashtable maps no keys to values.
     * @return <code>true</code> if this hashtable maps no keys to values;&#xA; <code>false</code> otherwise.
     */
    isEmpty(): boolean;

    /**
     * Returns an enumeration of the keys in this hashtable.
     * @return an enumeration of the keys in this hashtable.
     * @see Enumeration
     * @see #elements()
     * @see #keySet()
     * @see Map
     */
    keys(): Enumeration;

    /**
     * Returns an enumeration of the values in this hashtable.
     *  Use the Enumeration methods on the returned object to fetch the elements
     *  sequentially.
     * @return an enumeration of the values in this hashtable.
     * @see java.util.Enumeration
     * @see #keys()
     * @see #values()
     * @see Map
     */
    elements(): Enumeration;

    /**
     * Tests if some key maps into the specified value in this hashtable.
     *  This operation is more expensive than the {@link #containsKey
     *  containsKey} method.
     *
     *  <p>Note that this method is identical in functionality to
     *  {@link #containsValue containsValue}, (which is part of the
     *  {@link Map} interface in the collections framework).
     * @param value a value to search for
     * @return <code>true</code> if and only if some key maps to the&#xA; <code>value</code> argument in this hashtable as&#xA; determined by the <tt>equals</tt> method;&#xA; <code>false</code> otherwise.
     * @throws NullPointerException if the value is <code>null</code>
     */
    contains(value: unknown): boolean;

    /**
     * Returns true if this hashtable maps one or more keys to this value.
     *
     *  <p>Note that this method is identical in functionality to {@link
     *  #contains contains} (which predates the {@link Map} interface).
     * @param value value whose presence in this hashtable is to be tested
     * @return <tt>true</tt> if this map maps one or more keys to the&#xA; specified value
     * @throws NullPointerException if the value is <code>null</code>
     * @since 1.2
     */
    containsValue(value: unknown): boolean;

    /**
     * Tests if the specified object is a key in this hashtable.
     * @param key possible key
     * @return <code>true</code> if and only if the specified object&#xA; is a key in this hashtable, as determined by the&#xA; <tt>equals</tt> method; <code>false</code> otherwise.
     * @throws NullPointerException if the key is <code>null</code>
     * @see #contains(Object)
     */
    containsKey(key: unknown): boolean;

    /**
     * Returns the value to which the specified key is mapped,
     *  or {@code null} if this map contains no mapping for the key.
     *
     *  <p>More formally, if this map contains a mapping from a key
     *  {@code k} to a value {@code v} such that {@code (key.equals(k))},
     *  then this method returns {@code v}; otherwise it returns
     *  {@code null}.  (There can be at most one such mapping.)
     * @param key the key whose associated value is to be returned
     * @return the value to which the specified key is mapped, or&#xA; {@code null} if this map contains no mapping for the key
     * @throws NullPointerException if the specified key is null
     * @see #put(Object, Object)
     */
    get(key: unknown): unknown;

    /**
 * Increases the capacity of and internally reorganizes this
 *  hashtable, in order to accommodate and access its entries more
 *  efficiently.  This method is called automatically when the
 *  number of keys in the hashtable exceeds this hashtable's capacity
 *  and load factor.
  
    */
    rehash(): void;

    /**
     * Maps the specified <code>key</code> to the specified
     *  <code>value</code> in this hashtable. Neither the key nor the
     *  value can be <code>null</code>. <p>
     *
     *  The value can be retrieved by calling the <code>get</code> method
     *  with a key that is equal to the original key.
     * @param key the hashtable key
     * @param value the value
     * @return the previous value of the specified key in this hashtable,&#xA; or <code>null</code> if it did not have one
     * @throws NullPointerException if the key or value is&#xA; <code>null</code>
     * @see Object#equals(Object)
     * @see #get(Object)
     */
    put(key: unknown, value: unknown): unknown;

    /**
     * Removes the key (and its corresponding value) from this
     *  hashtable. This method does nothing if the key is not in the hashtable.
     * @param key the key that needs to be removed
     * @return the value to which the key had been mapped in this hashtable,&#xA; or <code>null</code> if the key did not have a mapping
     * @throws NullPointerException if the key is <code>null</code>
     */
    remove(key: unknown): unknown;

    /**
     * Copies all of the mappings from the specified map to this hashtable.
     *  These mappings will replace any mappings that this hashtable had for any
     *  of the keys currently in the specified map.
     * @param t mappings to be stored in this map
     * @throws NullPointerException if the specified map is null
     * @since 1.2
     */
    putAll(t: Map | {}): void;

    /**
 * Clears this hashtable so that it contains no keys.
  
    */
    clear(): void;

    /**
     * Creates a shallow copy of this hashtable. All the structure of the
     *  hashtable itself is copied, but the keys and values are not cloned.
     *  This is a relatively expensive operation.
     * @return a clone of the hashtable
     */
    clone(): unknown;

    /**
     * Returns a string representation of this <tt>Hashtable</tt> object
     *  in the form of a set of entries, enclosed in braces and separated
     *  by the ASCII characters "<tt>,&nbsp;</tt>" (comma and space). Each
     *  entry is rendered as the key, an equals sign <tt>=</tt>, and the
     *  associated element, where the <tt>toString</tt> method is used to
     *  convert the key and element to strings.
     * @return a string representation of this hashtable
     */
    toString(): string;

    /**
     * Returns a {@link Set} view of the keys contained in this map.
     *  The set is backed by the map, so changes to the map are
     *  reflected in the set, and vice-versa.  If the map is modified
     *  while an iteration over the set is in progress (except through
     *  the iterator's own <tt>remove</tt> operation), the results of
     *  the iteration are undefined.  The set supports element removal,
     *  which removes the corresponding mapping from the map, via the
     *  <tt>Iterator.remove</tt>, <tt>Set.remove</tt>,
     *  <tt>removeAll</tt>, <tt>retainAll</tt>, and <tt>clear</tt>
     *  operations.  It does not support the <tt>add</tt> or <tt>addAll</tt>
     *  operations.
     * @since 1.2
     */
    keySet(): Set;

    /**
     * Returns a {@link Set} view of the mappings contained in this map.
     *  The set is backed by the map, so changes to the map are
     *  reflected in the set, and vice-versa.  If the map is modified
     *  while an iteration over the set is in progress (except through
     *  the iterator's own <tt>remove</tt> operation, or through the
     *  <tt>setValue</tt> operation on a map entry returned by the
     *  iterator) the results of the iteration are undefined.  The set
     *  supports element removal, which removes the corresponding
     *  mapping from the map, via the <tt>Iterator.remove</tt>,
     *  <tt>Set.remove</tt>, <tt>removeAll</tt>, <tt>retainAll</tt> and
     *  <tt>clear</tt> operations.  It does not support the
     *  <tt>add</tt> or <tt>addAll</tt> operations.
     * @since 1.2
     */
    entrySet(): Set;

    /**
     * Returns a {@link Collection} view of the values contained in this map.
     *  The collection is backed by the map, so changes to the map are
     *  reflected in the collection, and vice-versa.  If the map is
     *  modified while an iteration over the collection is in progress
     *  (except through the iterator's own <tt>remove</tt> operation),
     *  the results of the iteration are undefined.  The collection
     *  supports element removal, which removes the corresponding
     *  mapping from the map, via the <tt>Iterator.remove</tt>,
     *  <tt>Collection.remove</tt>, <tt>removeAll</tt>,
     *  <tt>retainAll</tt> and <tt>clear</tt> operations.  It does not
     *  support the <tt>add</tt> or <tt>addAll</tt> operations.
     * @since 1.2
     */
    values(): Collection;

    /**
     * Compares the specified Object with this Map for equality,
     *  as per the definition in the Map interface.
     * @param o object to be compared for equality with this hashtable
     * @return true if the specified Object is equal to this Map
     * @see Map#equals(Object)
     * @since 1.2
     */
    equals(o: unknown): boolean;

    /**
     * Returns the hash code value for this Map as per the definition in the
     *  Map interface.
     * @see Map#hashCode()
     * @since 1.2
     */
    hashCode(): number;

    getOrDefault(key: unknown, defaultValue: unknown): unknown;

    forEach(action: BiConsumer): void;

    replaceAll(afunction: BiFunction): void;

    putIfAbsent(key: unknown, value: unknown): unknown;

    remove(key: unknown, value: unknown): boolean;

    replace(key: unknown, oldValue: unknown, newValue: unknown): boolean;

    replace(key: unknown, value: unknown): unknown;

    computeIfAbsent(key: unknown, mappingFunction: Function): unknown;

    computeIfPresent(key: unknown, remappingFunction: BiFunction): unknown;

    compute(key: unknown, remappingFunction: BiFunction): unknown;

    merge(key: unknown, value: unknown, remappingFunction: BiFunction): unknown;
  };
