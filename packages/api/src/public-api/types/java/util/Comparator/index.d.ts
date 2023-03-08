import type { Object } from "../../lang/Object";

import type { Function } from "../function/Function";
import type { ToIntFunction } from "../function/ToIntFunction";
import type { ToLongFunction } from "../function/ToLongFunction";
import type { ToDoubleFunction } from "../function/ToDoubleFunction";

/**
 * A comparison function, which imposes a <i>total ordering</i> on some
 *  collection of objects.  Comparators can be passed to a sort method (such
 *  as {@link Collections#sort(List,Comparator) Collections.sort} or {@link
 *  Arrays#sort(Object[],Comparator) Arrays.sort}) to allow precise control
 *  over the sort order.  Comparators can also be used to control the order of
 *  certain data structures (such as {@link SortedSet sorted sets} or {@link
 *  SortedMap sorted maps}), or to provide an ordering for collections of
 *  objects that don't have a {@link Comparable natural ordering}.<p>
 *
 *  The ordering imposed by a comparator <tt>c</tt> on a set of elements
 *  <tt>S</tt> is said to be <i>consistent with equals</i> if and only if
 *  <tt>c.compare(e1, e2)==0</tt> has the same boolean value as
 *  <tt>e1.equals(e2)</tt> for every <tt>e1</tt> and <tt>e2</tt> in
 *  <tt>S</tt>.<p>
 *
 *  Caution should be exercised when using a comparator capable of imposing an
 *  ordering inconsistent with equals to order a sorted set (or sorted map).
 *  Suppose a sorted set (or sorted map) with an explicit comparator <tt>c</tt>
 *  is used with elements (or keys) drawn from a set <tt>S</tt>.  If the
 *  ordering imposed by <tt>c</tt> on <tt>S</tt> is inconsistent with equals,
 *  the sorted set (or sorted map) will behave "strangely."  In particular the
 *  sorted set (or sorted map) will violate the general contract for set (or
 *  map), which is defined in terms of <tt>equals</tt>.<p>
 *
 *  For example, suppose one adds two elements {@code a} and {@code b} such that
 *  {@code (a.equals(b) && c.compare(a, b) != 0)}
 *  to an empty {@code TreeSet} with comparator {@code c}.
 *  The second {@code add} operation will return
 *  true (and the size of the tree set will increase) because {@code a} and
 *  {@code b} are not equivalent from the tree set's perspective, even though
 *  this is contrary to the specification of the
 *  {@link Set#add Set.add} method.<p>
 *
 *  Note: It is generally a good idea for comparators to also implement
 *  <tt>java.io.Serializable</tt>, as they may be used as ordering methods in
 *  serializable data structures (like {@link TreeSet}, {@link TreeMap}).  In
 *  order for the data structure to serialize successfully, the comparator (if
 *  provided) must implement <tt>Serializable</tt>.<p>
 *
 *  For the mathematically inclined, the <i>relation</i> that defines the
 *  <i>imposed ordering</i> that a given comparator <tt>c</tt> imposes on a
 *  given set of objects <tt>S</tt> is:<pre>
 *        {(x, y) such that c.compare(x, y) &lt;= 0}.
 *  </pre> The <i>quotient</i> for this total order is:<pre>
 *        {(x, y) such that c.compare(x, y) == 0}.
 *  </pre>
 *
 *  It follows immediately from the contract for <tt>compare</tt> that the
 *  quotient is an <i>equivalence relation</i> on <tt>S</tt>, and that the
 *  imposed ordering is a <i>total order</i> on <tt>S</tt>.  When we say that
 *  the ordering imposed by <tt>c</tt> on <tt>S</tt> is <i>consistent with
 *  equals</i>, we mean that the quotient for the ordering is the equivalence
 *  relation defined by the objects' {@link Object#equals(Object)
 *  equals(Object)} method(s):<pre>
 *      {(x, y) such that x.equals(y)}. </pre>
 *
 *  <p>Unlike {@code Comparable}, a comparator may optionally permit
 *  comparison of null arguments, while maintaining the requirements for
 *  an equivalence relation.
 *
 *  <p>This interface is a member of the
 *  <a href="{@docRoot}/../technotes/guides/collections/index.html">
 *  Java Collections Framework</a>.
 * @param <T> the type of objects that may be compared by this comparator
 * @author Josh Bloch
 * @author Neal Gafter
 * @see Comparable
 * @see java.io.Serializable
 * @since 1.2
 */
export type Comparator = {
  /**
   * Compares its two arguments for order.  Returns a negative integer,
   *  zero, or a positive integer as the first argument is less than, equal
   *  to, or greater than the second.<p>
   *
   *  In the foregoing description, the notation
   *  <tt>sgn(</tt><i>expression</i><tt>)</tt> designates the mathematical
   *  <i>signum</i> function, which is defined to return one of <tt>-1</tt>,
   *  <tt>0</tt>, or <tt>1</tt> according to whether the value of
   *  <i>expression</i> is negative, zero or positive.<p>
   *
   *  The implementor must ensure that <tt>sgn(compare(x, y)) ==
   *  -sgn(compare(y, x))</tt> for all <tt>x</tt> and <tt>y</tt>.  (This
   *  implies that <tt>compare(x, y)</tt> must throw an exception if and only
   *  if <tt>compare(y, x)</tt> throws an exception.)<p>
   *
   *  The implementor must also ensure that the relation is transitive:
   *  <tt>((compare(x, y)&gt;0) &amp;&amp; (compare(y, z)&gt;0))</tt> implies
   *  <tt>compare(x, z)&gt;0</tt>.<p>
   *
   *  Finally, the implementor must ensure that <tt>compare(x, y)==0</tt>
   *  implies that <tt>sgn(compare(x, z))==sgn(compare(y, z))</tt> for all
   *  <tt>z</tt>.<p>
   *
   *  It is generally the case, but <i>not</i> strictly required that
   *  <tt>(compare(x, y)==0) == (x.equals(y))</tt>.  Generally speaking,
   *  any comparator that violates this condition should clearly indicate
   *  this fact.  The recommended language is "Note: this comparator
   *  imposes orderings that are inconsistent with equals."
   * @param o1 the first object to be compared.
   * @param o2 the second object to be compared.
   * @return a negative integer, zero, or a positive integer as the&#xA; first argument is less than, equal to, or greater than the&#xA; second.
   * @throws NullPointerException if an argument is null and this&#xA; comparator does not permit null arguments
   * @throws ClassCastException if the arguments' types prevent them from&#xA; being compared by this comparator.
   */
  compare(o1: unknown, o2: unknown): number;

  /**
   * Indicates whether some other object is &quot;equal to&quot; this
   *  comparator.  This method must obey the general contract of
   *  {@link Object#equals(Object)}.  Additionally, this method can return
   *  <tt>true</tt> <i>only</i> if the specified object is also a comparator
   *  and it imposes the same ordering as this comparator.  Thus,
   *  <code>comp1.equals(comp2)</code> implies that <tt>sgn(comp1.compare(o1,
   *  o2))==sgn(comp2.compare(o1, o2))</tt> for every object reference
   *  <tt>o1</tt> and <tt>o2</tt>.<p>
   *
   *  Note that it is <i>always</i> safe <i>not</i> to override
   *  <tt>Object.equals(Object)</tt>.  However, overriding this method may,
   *  in some cases, improve performance by allowing programs to determine
   *  that two distinct comparators impose the same order.
   * @param obj the reference object with which to compare.
   * @return <code>true</code> only if the specified object is also&#xA; a comparator and it imposes the same ordering as this&#xA; comparator.
   * @see Object#equals(Object)
   * @see Object#hashCode()
   */
  equals(obj: unknown): boolean;

  /**
   * Returns a comparator that imposes the reverse ordering of this
   *  comparator.
   * @return a comparator that imposes the reverse ordering of this&#xA; comparator.
   * @since 1.8
   */
  reversed?(): Comparator;

  /**
   * Returns a lexicographic-order comparator with another comparator.
   *  If this {@code Comparator} considers two elements equal, i.e.
   *  {@code compare(a, b) == 0}, {@code other} is used to determine the order.
   *
   *  <p>The returned comparator is serializable if the specified comparator
   *  is also serializable.
   * @apiNote For example, to sort a collection of {@code String} based on the length&#xA; and then case-insensitive natural ordering, the comparator can be&#xA; composed using following code,&#xA;&#xA; <pre>{@code&#xA; Comparator<String> cmp = Comparator.comparingInt(String::length)&#xA; .thenComparing(String.CASE_INSENSITIVE_ORDER);&#xA; }</pre>
   * @param other the other comparator to be used when this comparator&#xA; compares two objects that are equal.
   * @return a lexicographic-order comparator composed of this and then the&#xA; other comparator
   * @throws NullPointerException if the argument is null.
   * @since 1.8
   */
  thenComparing?(other: Comparator): Comparator;

  /**
   * Returns a lexicographic-order comparator with a function that
   *  extracts a key to be compared with the given {@code Comparator}.
   * @implSpec This default implementation behaves as if {@code&#xA; thenComparing(comparing(keyExtractor, cmp))}.
   * @param <U> the type of the sort key
   * @param keyExtractor the function used to extract the sort key
   * @param keyComparator the {@code Comparator} used to compare the sort key
   * @return a lexicographic-order comparator composed of this comparator&#xA; and then comparing on the key extracted by the keyExtractor function
   * @throws NullPointerException if either argument is null.
   * @see #comparing(Function, Comparator)
   * @see #thenComparing(Comparator)
   * @since 1.8
   */
  thenComparing?(keyExtractor: Function, keyComparator: Comparator): Comparator;

  /**
   * Returns a lexicographic-order comparator with a function that
   *  extracts a {@code Comparable} sort key.
   * @implSpec This default implementation behaves as if {@code&#xA; thenComparing(comparing(keyExtractor))}.
   * @param <U> the type of the {@link Comparable} sort key
   * @param keyExtractor the function used to extract the {@link&#xA; Comparable} sort key
   * @return a lexicographic-order comparator composed of this and then the&#xA; {@link Comparable} sort key.
   * @throws NullPointerException if the argument is null.
   * @see #comparing(Function)
   * @see #thenComparing(Comparator)
   * @since 1.8
   */
  thenComparing?(keyExtractor: Function): Comparator;

  /**
   * Returns a lexicographic-order comparator with a function that
   *  extracts a {@code int} sort key.
   * @implSpec This default implementation behaves as if {@code&#xA; thenComparing(comparingInt(keyExtractor))}.
   * @param keyExtractor the function used to extract the integer sort key
   * @return a lexicographic-order comparator composed of this and then the&#xA; {@code int} sort key
   * @throws NullPointerException if the argument is null.
   * @see #comparingInt(ToIntFunction)
   * @see #thenComparing(Comparator)
   * @since 1.8
   */
  thenComparingInt?(keyExtractor: ToIntFunction): Comparator;

  /**
   * Returns a lexicographic-order comparator with a function that
   *  extracts a {@code long} sort key.
   * @implSpec This default implementation behaves as if {@code&#xA; thenComparing(comparingLong(keyExtractor))}.
   * @param keyExtractor the function used to extract the long sort key
   * @return a lexicographic-order comparator composed of this and then the&#xA; {@code long} sort key
   * @throws NullPointerException if the argument is null.
   * @see #comparingLong(ToLongFunction)
   * @see #thenComparing(Comparator)
   * @since 1.8
   */
  thenComparingLong?(keyExtractor: ToLongFunction): Comparator;

  /**
   * Returns a lexicographic-order comparator with a function that
   *  extracts a {@code double} sort key.
   * @implSpec This default implementation behaves as if {@code&#xA; thenComparing(comparingDouble(keyExtractor))}.
   * @param keyExtractor the function used to extract the double sort key
   * @return a lexicographic-order comparator composed of this and then the&#xA; {@code double} sort key
   * @throws NullPointerException if the argument is null.
   * @see #comparingDouble(ToDoubleFunction)
   * @see #thenComparing(Comparator)
   * @since 1.8
   */
  thenComparingDouble?(keyExtractor: ToDoubleFunction): Comparator;

  /**
   * Returns a comparator that imposes the reverse of the <em>natural
   *  ordering</em>.
   *
   *  <p>The returned comparator is serializable and throws {@link
   *  NullPointerException} when comparing {@code null}.
   * @param <T> the {@link Comparable} type of element to be compared
   * @return a comparator that imposes the reverse of the <i>natural&#xA; ordering</i> on {@code Comparable} objects.
   * @see Comparable
   * @since 1.8
   */
  reverseOrder?(): Comparator;

  /**
   * Returns a comparator that compares {@link Comparable} objects in natural
   *  order.
   *
   *  <p>The returned comparator is serializable and throws {@link
   *  NullPointerException} when comparing {@code null}.
   * @param <T> the {@link Comparable} type of element to be compared
   * @return a comparator that imposes the <i>natural ordering</i> on {@code&#xA; Comparable} objects.
   * @see Comparable
   * @since 1.8
   */
  naturalOrder?(): Comparator;

  /**
   * Returns a null-friendly comparator that considers {@code null} to be
   *  less than non-null. When both are {@code null}, they are considered
   *  equal. If both are non-null, the specified {@code Comparator} is used
   *  to determine the order. If the specified comparator is {@code null},
   *  then the returned comparator considers all non-null values to be equal.
   *
   *  <p>The returned comparator is serializable if the specified comparator
   *  is serializable.
   * @param <T> the type of the elements to be compared
   * @param comparator a {@code Comparator} for comparing non-null values
   * @return a comparator that considers {@code null} to be less than&#xA; non-null, and compares non-null objects with the supplied&#xA; {@code Comparator}.
   * @since 1.8
   */
  nullsFirst?(comparator: Comparator): Comparator;

  /**
   * Returns a null-friendly comparator that considers {@code null} to be
   *  greater than non-null. When both are {@code null}, they are considered
   *  equal. If both are non-null, the specified {@code Comparator} is used
   *  to determine the order. If the specified comparator is {@code null},
   *  then the returned comparator considers all non-null values to be equal.
   *
   *  <p>The returned comparator is serializable if the specified comparator
   *  is serializable.
   * @param <T> the type of the elements to be compared
   * @param comparator a {@code Comparator} for comparing non-null values
   * @return a comparator that considers {@code null} to be greater than&#xA; non-null, and compares non-null objects with the supplied&#xA; {@code Comparator}.
   * @since 1.8
   */
  nullsLast?(comparator: Comparator): Comparator;

  /**
   * Accepts a function that extracts a sort key from a type {@code T}, and
   *  returns a {@code Comparator<T>} that compares by that sort key using
   *  the specified {@link Comparator}.
   *
   *  <p>The returned comparator is serializable if the specified function
   *  and comparator are both serializable.
   * @apiNote For example, to obtain a {@code Comparator} that compares {@code&#xA; Person} objects by their last name ignoring case differences,&#xA;&#xA; <pre>{@code&#xA; Comparator<Person> cmp = Comparator.comparing(&#xA; Person::getLastName,&#xA; String.CASE_INSENSITIVE_ORDER);&#xA; }</pre>
   * @param <T> the type of element to be compared
   * @param <U> the type of the sort key
   * @param keyExtractor the function used to extract the sort key
   * @param keyComparator the {@code Comparator} used to compare the sort key
   * @return a comparator that compares by an extracted key using the&#xA; specified {@code Comparator}
   * @throws NullPointerException if either argument is null
   * @since 1.8
   */
  comparing?(keyExtractor: Function, keyComparator: Comparator): Comparator;

  /**
   * Accepts a function that extracts a {@link java.lang.Comparable
   *  Comparable} sort key from a type {@code T}, and returns a {@code
   *  Comparator<T>} that compares by that sort key.
   *
   *  <p>The returned comparator is serializable if the specified function
   *  is also serializable.
   * @apiNote For example, to obtain a {@code Comparator} that compares {@code&#xA; Person} objects by their last name,&#xA;&#xA; <pre>{@code&#xA; Comparator<Person> byLastName = Comparator.comparing(Person::getLastName);&#xA; }</pre>
   * @param <T> the type of element to be compared
   * @param <U> the type of the {@code Comparable} sort key
   * @param keyExtractor the function used to extract the {@link&#xA; Comparable} sort key
   * @return a comparator that compares by an extracted key
   * @throws NullPointerException if the argument is null
   * @since 1.8
   */
  comparing?(keyExtractor: Function): Comparator;

  /**
   * Accepts a function that extracts an {@code int} sort key from a type
   *  {@code T}, and returns a {@code Comparator<T>} that compares by that
   *  sort key.
   *
   *  <p>The returned comparator is serializable if the specified function
   *  is also serializable.
   * @param <T> the type of element to be compared
   * @param keyExtractor the function used to extract the integer sort key
   * @return a comparator that compares by an extracted key
   * @see #comparing(Function)
   * @throws NullPointerException if the argument is null
   * @since 1.8
   */
  comparingInt?(keyExtractor: ToIntFunction): Comparator;

  /**
   * Accepts a function that extracts a {@code long} sort key from a type
   *  {@code T}, and returns a {@code Comparator<T>} that compares by that
   *  sort key.
   *
   *  <p>The returned comparator is serializable if the specified function is
   *  also serializable.
   * @param <T> the type of element to be compared
   * @param keyExtractor the function used to extract the long sort key
   * @return a comparator that compares by an extracted key
   * @see #comparing(Function)
   * @throws NullPointerException if the argument is null
   * @since 1.8
   */
  comparingLong?(keyExtractor: ToLongFunction): Comparator;

  /**
   * Accepts a function that extracts a {@code double} sort key from a type
   *  {@code T}, and returns a {@code Comparator<T>} that compares by that
   *  sort key.
   *
   *  <p>The returned comparator is serializable if the specified function
   *  is also serializable.
   * @param <T> the type of element to be compared
   * @param keyExtractor the function used to extract the double sort key
   * @return a comparator that compares by an extracted key
   * @see #comparing(Function)
   * @throws NullPointerException if the argument is null
   * @since 1.8
   */
  comparingDouble?(keyExtractor: ToDoubleFunction): Comparator;
};
