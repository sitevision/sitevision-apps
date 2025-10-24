/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Comparator } from "../Comparator";

import type { Spliterator } from "../Spliterator";
import type { Set } from "../Set";

/**
 * A {@link Set} that further provides a <i>total ordering</i> on its elements.
 *  The elements are ordered using their {@linkplain Comparable natural
 *  ordering}, or by a {@link Comparator} typically provided at sorted
 *  set creation time.  The set's iterator will traverse the set in
 *  ascending element order. Several additional operations are provided
 *  to take advantage of the ordering.  (This interface is the set
 *  analogue of {@link SortedMap}.)
 *
 *  <p>All elements inserted into a sorted set must implement the <tt>Comparable</tt>
 *  interface (or be accepted by the specified comparator).  Furthermore, all
 *  such elements must be <i>mutually comparable</i>: <tt>e1.compareTo(e2)</tt>
 *  (or <tt>comparator.compare(e1, e2)</tt>) must not throw a
 *  <tt>ClassCastException</tt> for any elements <tt>e1</tt> and <tt>e2</tt> in
 *  the sorted set.  Attempts to violate this restriction will cause the
 *  offending method or constructor invocation to throw a
 *  <tt>ClassCastException</tt>.
 *
 *  <p>Note that the ordering maintained by a sorted set (whether or not an
 *  explicit comparator is provided) must be <i>consistent with equals</i> if
 *  the sorted set is to correctly implement the <tt>Set</tt> interface.  (See
 *  the <tt>Comparable</tt> interface or <tt>Comparator</tt> interface for a
 *  precise definition of <i>consistent with equals</i>.)  This is so because
 *  the <tt>Set</tt> interface is defined in terms of the <tt>equals</tt>
 *  operation, but a sorted set performs all element comparisons using its
 *  <tt>compareTo</tt> (or <tt>compare</tt>) method, so two elements that are
 *  deemed equal by this method are, from the standpoint of the sorted set,
 *  equal.  The behavior of a sorted set <i>is</i> well-defined even if its
 *  ordering is inconsistent with equals; it just fails to obey the general
 *  contract of the <tt>Set</tt> interface.
 *
 *  <p>All general-purpose sorted set implementation classes should
 *  provide four "standard" constructors: 1) A void (no arguments)
 *  constructor, which creates an empty sorted set sorted according to
 *  the natural ordering of its elements.  2) A constructor with a
 *  single argument of type <tt>Comparator</tt>, which creates an empty
 *  sorted set sorted according to the specified comparator.  3) A
 *  constructor with a single argument of type <tt>Collection</tt>,
 *  which creates a new sorted set with the same elements as its
 *  argument, sorted according to the natural ordering of the elements.
 *  4) A constructor with a single argument of type <tt>SortedSet</tt>,
 *  which creates a new sorted set with the same elements and the same
 *  ordering as the input sorted set.  There is no way to enforce this
 *  recommendation, as interfaces cannot contain constructors.
 *
 *  <p>Note: several methods return subsets with restricted ranges.
 *  Such ranges are <i>half-open</i>, that is, they include their low
 *  endpoint but not their high endpoint (where applicable).
 *  If you need a <i>closed range</i> (which includes both endpoints), and
 *  the element type allows for calculation of the successor of a given
 *  value, merely request the subrange from <tt>lowEndpoint</tt> to
 *  <tt>successor(highEndpoint)</tt>.  For example, suppose that <tt>s</tt>
 *  is a sorted set of strings.  The following idiom obtains a view
 *  containing all of the strings in <tt>s</tt> from <tt>low</tt> to
 *  <tt>high</tt>, inclusive:<pre>
 *    SortedSet&lt;String&gt; sub = s.subSet(low, high+"\0");</pre>
 *
 *  A similar technique can be used to generate an <i>open range</i> (which
 *  contains neither endpoint).  The following idiom obtains a view
 *  containing all of the Strings in <tt>s</tt> from <tt>low</tt> to
 *  <tt>high</tt>, exclusive:<pre>
 *    SortedSet&lt;String&gt; sub = s.subSet(low+"\0", high);</pre>
 *
 *  <p>This interface is a member of the
 *  <a href="{@docRoot}/../technotes/guides/collections/index.html">
 *  Java Collections Framework</a>.
 * @param <E> the type of elements maintained by this set
 * @author Josh Bloch
 * @see Set
 * @see TreeSet
 * @see SortedMap
 * @see Collection
 * @see Comparable
 * @see Comparator
 * @see ClassCastException
 * @since 1.2
 */
export type SortedSet = Set & {
  /**
   * Returns the comparator used to order the elements in this set,
   *  or <tt>null</tt> if this set uses the {@linkplain Comparable
   *  natural ordering} of its elements.
   * @return the comparator used to order the elements in this set,&#xA; or <tt>null</tt> if this set uses the natural ordering&#xA; of its elements
   */
  comparator(): Comparator;

  /**
   * Returns a view of the portion of this set whose elements range
   *  from <tt>fromElement</tt>, inclusive, to <tt>toElement</tt>,
   *  exclusive.  (If <tt>fromElement</tt> and <tt>toElement</tt> are
   *  equal, the returned set is empty.)  The returned set is backed
   *  by this set, so changes in the returned set are reflected in
   *  this set, and vice-versa.  The returned set supports all
   *  optional set operations that this set supports.
   *
   *  <p>The returned set will throw an <tt>IllegalArgumentException</tt>
   *  on an attempt to insert an element outside its range.
   * @param fromElement low endpoint (inclusive) of the returned set
   * @param toElement high endpoint (exclusive) of the returned set
   * @return a view of the portion of this set whose elements range from&#xA; <tt>fromElement</tt>, inclusive, to <tt>toElement</tt>, exclusive
   * @throws ClassCastException if <tt>fromElement</tt> and&#xA; <tt>toElement</tt> cannot be compared to one another using this&#xA; set's comparator (or, if the set has no comparator, using&#xA; natural ordering). Implementations may, but are not required&#xA; to, throw this exception if <tt>fromElement</tt> or&#xA; <tt>toElement</tt> cannot be compared to elements currently in&#xA; the set.
   * @throws NullPointerException if <tt>fromElement</tt> or&#xA; <tt>toElement</tt> is null and this set does not permit null&#xA; elements
   * @throws IllegalArgumentException if <tt>fromElement</tt> is&#xA; greater than <tt>toElement</tt>; or if this set itself&#xA; has a restricted range, and <tt>fromElement</tt> or&#xA; <tt>toElement</tt> lies outside the bounds of the range
   */
  subSet(fromElement: unknown, toElement: unknown): SortedSet;

  /**
   * Returns a view of the portion of this set whose elements are
   *  strictly less than <tt>toElement</tt>.  The returned set is
   *  backed by this set, so changes in the returned set are
   *  reflected in this set, and vice-versa.  The returned set
   *  supports all optional set operations that this set supports.
   *
   *  <p>The returned set will throw an <tt>IllegalArgumentException</tt>
   *  on an attempt to insert an element outside its range.
   * @param toElement high endpoint (exclusive) of the returned set
   * @return a view of the portion of this set whose elements are strictly&#xA; less than <tt>toElement</tt>
   * @throws ClassCastException if <tt>toElement</tt> is not compatible&#xA; with this set's comparator (or, if the set has no comparator,&#xA; if <tt>toElement</tt> does not implement {@link Comparable}).&#xA; Implementations may, but are not required to, throw this&#xA; exception if <tt>toElement</tt> cannot be compared to elements&#xA; currently in the set.
   * @throws NullPointerException if <tt>toElement</tt> is null and&#xA; this set does not permit null elements
   * @throws IllegalArgumentException if this set itself has a&#xA; restricted range, and <tt>toElement</tt> lies outside the&#xA; bounds of the range
   */
  headSet(toElement: unknown): SortedSet;

  /**
   * Returns a view of the portion of this set whose elements are
   *  greater than or equal to <tt>fromElement</tt>.  The returned
   *  set is backed by this set, so changes in the returned set are
   *  reflected in this set, and vice-versa.  The returned set
   *  supports all optional set operations that this set supports.
   *
   *  <p>The returned set will throw an <tt>IllegalArgumentException</tt>
   *  on an attempt to insert an element outside its range.
   * @param fromElement low endpoint (inclusive) of the returned set
   * @return a view of the portion of this set whose elements are greater&#xA; than or equal to <tt>fromElement</tt>
   * @throws ClassCastException if <tt>fromElement</tt> is not compatible&#xA; with this set's comparator (or, if the set has no comparator,&#xA; if <tt>fromElement</tt> does not implement {@link Comparable}).&#xA; Implementations may, but are not required to, throw this&#xA; exception if <tt>fromElement</tt> cannot be compared to elements&#xA; currently in the set.
   * @throws NullPointerException if <tt>fromElement</tt> is null&#xA; and this set does not permit null elements
   * @throws IllegalArgumentException if this set itself has a&#xA; restricted range, and <tt>fromElement</tt> lies outside the&#xA; bounds of the range
   */
  tailSet(fromElement: unknown): SortedSet;

  /**
   * Returns the first (lowest) element currently in this set.
   * @return the first (lowest) element currently in this set
   * @throws NoSuchElementException if this set is empty
   */
  first(): unknown;

  /**
   * Returns the last (highest) element currently in this set.
   * @return the last (highest) element currently in this set
   * @throws NoSuchElementException if this set is empty
   */
  last(): unknown;

  /**
   * Creates a {@code Spliterator} over the elements in this sorted set.
   *
   *  <p>The {@code Spliterator} reports {@link Spliterator#DISTINCT},
   *  {@link Spliterator#SORTED} and {@link Spliterator#ORDERED}.
   *  Implementations should document the reporting of additional
   *  characteristic values.
   *
   *  <p>The spliterator's comparator (see
   *  {@link java.util.Spliterator#getComparator()}) must be {@code null} if
   *  the sorted set's comparator (see {@link #comparator()}) is {@code null}.
   *  Otherwise, the spliterator's comparator must be the same as or impose the
   *  same total ordering as the sorted set's comparator.
   * @implSpec The default implementation creates a&#xA; <em><a href="Spliterator.html#binding">late-binding</a></em> spliterator&#xA; from the sorted set's {@code Iterator}. The spliterator inherits the&#xA; <em>fail-fast</em> properties of the set's iterator. The&#xA; spliterator's comparator is the same as the sorted set's comparator.&#xA; <p>&#xA; The created {@code Spliterator} additionally reports&#xA; {@link Spliterator#SIZED}.
   * @implNote The created {@code Spliterator} additionally reports&#xA; {@link Spliterator#SUBSIZED}.
   * @return a {@code Spliterator} over the elements in this sorted set
   * @since 1.8
   */
  spliterator(): Spliterator;
};
