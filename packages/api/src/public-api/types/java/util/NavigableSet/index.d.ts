/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */

import type { Iterator } from "../Iterator";

import type { SortedSet } from "../SortedSet";

/**
 * A {@link SortedSet} extended with navigation methods reporting
 *  closest matches for given search targets. Methods {@code lower},
 *  {@code floor}, {@code ceiling}, and {@code higher} return elements
 *  respectively less than, less than or equal, greater than or equal,
 *  and greater than a given element, returning {@code null} if there
 *  is no such element.  A {@code NavigableSet} may be accessed and
 *  traversed in either ascending or descending order.  The {@code
 *  descendingSet} method returns a view of the set with the senses of
 *  all relational and directional methods inverted. The performance of
 *  ascending operations and views is likely to be faster than that of
 *  descending ones.  This interface additionally defines methods
 *  {@code pollFirst} and {@code pollLast} that return and remove the
 *  lowest and highest element, if one exists, else returning {@code
 *  null}.  Methods {@code subSet}, {@code headSet},
 *  and {@code tailSet} differ from the like-named {@code
 *  SortedSet} methods in accepting additional arguments describing
 *  whether lower and upper bounds are inclusive versus exclusive.
 *  Subsets of any {@code NavigableSet} must implement the {@code
 *  NavigableSet} interface.
 *
 *  <p> The return values of navigation methods may be ambiguous in
 *  implementations that permit {@code null} elements. However, even
 *  in this case the result can be disambiguated by checking
 *  {@code contains(null)}. To avoid such issues, implementations of
 *  this interface are encouraged to <em>not</em> permit insertion of
 *  {@code null} elements. (Note that sorted sets of {@link
 *  Comparable} elements intrinsically do not permit {@code null}.)
 *
 *  <p>Methods
 *  {@link #subSet(Object, Object) subSet(E, E)},
 *  {@link #headSet(Object) headSet(E)}, and
 *  {@link #tailSet(Object) tailSet(E)}
 *  are specified to return {@code SortedSet} to allow existing
 *  implementations of {@code SortedSet} to be compatibly retrofitted to
 *  implement {@code NavigableSet}, but extensions and implementations
 *  of this interface are encouraged to override these methods to return
 *  {@code NavigableSet}.
 *
 *  <p>This interface is a member of the
 *  <a href="{@docRoot}/../technotes/guides/collections/index.html">
 *  Java Collections Framework</a>.
 * @author Doug Lea
 * @author Josh Bloch
 * @param <E> the type of elements maintained by this set
 * @since 1.6
 */
export type NavigableSet = SortedSet & {
  /**
   * Returns the greatest element in this set strictly less than the
   *  given element, or {@code null} if there is no such element.
   * @param e the value to match
   * @return the greatest element less than {@code e},&#xA; or {@code null} if there is no such element
   * @throws ClassCastException if the specified element cannot be&#xA; compared with the elements currently in the set
   * @throws NullPointerException if the specified element is null&#xA; and this set does not permit null elements
   */
  lower(e: unknown): unknown;

  /**
   * Returns the greatest element in this set less than or equal to
   *  the given element, or {@code null} if there is no such element.
   * @param e the value to match
   * @return the greatest element less than or equal to {@code e},&#xA; or {@code null} if there is no such element
   * @throws ClassCastException if the specified element cannot be&#xA; compared with the elements currently in the set
   * @throws NullPointerException if the specified element is null&#xA; and this set does not permit null elements
   */
  floor(e: unknown): unknown;

  /**
   * Returns the least element in this set greater than or equal to
   *  the given element, or {@code null} if there is no such element.
   * @param e the value to match
   * @return the least element greater than or equal to {@code e},&#xA; or {@code null} if there is no such element
   * @throws ClassCastException if the specified element cannot be&#xA; compared with the elements currently in the set
   * @throws NullPointerException if the specified element is null&#xA; and this set does not permit null elements
   */
  ceiling(e: unknown): unknown;

  /**
   * Returns the least element in this set strictly greater than the
   *  given element, or {@code null} if there is no such element.
   * @param e the value to match
   * @return the least element greater than {@code e},&#xA; or {@code null} if there is no such element
   * @throws ClassCastException if the specified element cannot be&#xA; compared with the elements currently in the set
   * @throws NullPointerException if the specified element is null&#xA; and this set does not permit null elements
   */
  higher(e: unknown): unknown;

  /**
   * Retrieves and removes the first (lowest) element,
   *  or returns {@code null} if this set is empty.
   * @return the first element, or {@code null} if this set is empty
   */
  pollFirst(): unknown;

  /**
   * Retrieves and removes the last (highest) element,
   *  or returns {@code null} if this set is empty.
   * @return the last element, or {@code null} if this set is empty
   */
  pollLast(): unknown;

  /**
   * Returns an iterator over the elements in this set, in ascending order.
   * @return an iterator over the elements in this set, in ascending order
   */
  iterator(): Iterator;

  /**
   * Returns a reverse order view of the elements contained in this set.
   *  The descending set is backed by this set, so changes to the set are
   *  reflected in the descending set, and vice-versa.  If either set is
   *  modified while an iteration over either set is in progress (except
   *  through the iterator's own {@code remove} operation), the results of
   *  the iteration are undefined.
   *
   *  <p>The returned set has an ordering equivalent to
   *  <tt>{@link Collections#reverseOrder(Comparator) Collections.reverseOrder}(comparator())</tt>.
   *  The expression {@code s.descendingSet().descendingSet()} returns a
   *  view of {@code s} essentially equivalent to {@code s}.
   * @return a reverse order view of this set
   */
  descendingSet(): NavigableSet;

  /**
   * Returns an iterator over the elements in this set, in descending order.
   *  Equivalent in effect to {@code descendingSet().iterator()}.
   * @return an iterator over the elements in this set, in descending order
   */
  descendingIterator(): Iterator;

  /**
   * Returns a view of the portion of this set whose elements range from
   *  {@code fromElement} to {@code toElement}.  If {@code fromElement} and
   *  {@code toElement} are equal, the returned set is empty unless {@code
   *  fromInclusive} and {@code toInclusive} are both true.  The returned set
   *  is backed by this set, so changes in the returned set are reflected in
   *  this set, and vice-versa.  The returned set supports all optional set
   *  operations that this set supports.
   *
   *  <p>The returned set will throw an {@code IllegalArgumentException}
   *  on an attempt to insert an element outside its range.
   * @param fromElement low endpoint of the returned set
   * @param fromInclusive {@code true} if the low endpoint&#xA; is to be included in the returned view
   * @param toElement high endpoint of the returned set
   * @param toInclusive {@code true} if the high endpoint&#xA; is to be included in the returned view
   * @return a view of the portion of this set whose elements range from&#xA; {@code fromElement}, inclusive, to {@code toElement}, exclusive
   * @throws ClassCastException if {@code fromElement} and&#xA; {@code toElement} cannot be compared to one another using this&#xA; set's comparator (or, if the set has no comparator, using&#xA; natural ordering). Implementations may, but are not required&#xA; to, throw this exception if {@code fromElement} or&#xA; {@code toElement} cannot be compared to elements currently in&#xA; the set.
   * @throws NullPointerException if {@code fromElement} or&#xA; {@code toElement} is null and this set does&#xA; not permit null elements
   * @throws IllegalArgumentException if {@code fromElement} is&#xA; greater than {@code toElement}; or if this set itself&#xA; has a restricted range, and {@code fromElement} or&#xA; {@code toElement} lies outside the bounds of the range.
   */
  subSet(
    fromElement: unknown,
    fromInclusive: boolean,
    toElement: unknown,
    toInclusive: boolean
  ): NavigableSet;

  /**
   * Returns a view of the portion of this set whose elements are less than
   *  (or equal to, if {@code inclusive} is true) {@code toElement}.  The
   *  returned set is backed by this set, so changes in the returned set are
   *  reflected in this set, and vice-versa.  The returned set supports all
   *  optional set operations that this set supports.
   *
   *  <p>The returned set will throw an {@code IllegalArgumentException}
   *  on an attempt to insert an element outside its range.
   * @param toElement high endpoint of the returned set
   * @param inclusive {@code true} if the high endpoint&#xA; is to be included in the returned view
   * @return a view of the portion of this set whose elements are less than&#xA; (or equal to, if {@code inclusive} is true) {@code toElement}
   * @throws ClassCastException if {@code toElement} is not compatible&#xA; with this set's comparator (or, if the set has no comparator,&#xA; if {@code toElement} does not implement {@link Comparable}).&#xA; Implementations may, but are not required to, throw this&#xA; exception if {@code toElement} cannot be compared to elements&#xA; currently in the set.
   * @throws NullPointerException if {@code toElement} is null and&#xA; this set does not permit null elements
   * @throws IllegalArgumentException if this set itself has a&#xA; restricted range, and {@code toElement} lies outside the&#xA; bounds of the range
   */
  headSet(toElement: unknown, inclusive: boolean): NavigableSet;

  /**
   * Returns a view of the portion of this set whose elements are greater
   *  than (or equal to, if {@code inclusive} is true) {@code fromElement}.
   *  The returned set is backed by this set, so changes in the returned set
   *  are reflected in this set, and vice-versa.  The returned set supports
   *  all optional set operations that this set supports.
   *
   *  <p>The returned set will throw an {@code IllegalArgumentException}
   *  on an attempt to insert an element outside its range.
   * @param fromElement low endpoint of the returned set
   * @param inclusive {@code true} if the low endpoint&#xA; is to be included in the returned view
   * @return a view of the portion of this set whose elements are greater&#xA; than or equal to {@code fromElement}
   * @throws ClassCastException if {@code fromElement} is not compatible&#xA; with this set's comparator (or, if the set has no comparator,&#xA; if {@code fromElement} does not implement {@link Comparable}).&#xA; Implementations may, but are not required to, throw this&#xA; exception if {@code fromElement} cannot be compared to elements&#xA; currently in the set.
   * @throws NullPointerException if {@code fromElement} is null&#xA; and this set does not permit null elements
   * @throws IllegalArgumentException if this set itself has a&#xA; restricted range, and {@code fromElement} lies outside the&#xA; bounds of the range
   */
  tailSet(fromElement: unknown, inclusive: boolean): NavigableSet;

  /**
   * {@inheritDoc}
   *
   *  <p>Equivalent to {@code subSet(fromElement, true, toElement, false)}.
   * @throws ClassCastException {@inheritDoc}
   * @throws NullPointerException {@inheritDoc}
   * @throws IllegalArgumentException {@inheritDoc}
   */
  subSet(fromElement: unknown, toElement: unknown): SortedSet;

  /**
   * {@inheritDoc}
   *
   *  <p>Equivalent to {@code headSet(toElement, false)}.
   * @throws ClassCastException {@inheritDoc}
   * @throws NullPointerException {@inheritDoc}
   * @throws IllegalArgumentException {@inheritDoc}
   */
  headSet(toElement: unknown): SortedSet;

  /**
   * {@inheritDoc}
   *
   *  <p>Equivalent to {@code tailSet(fromElement, true)}.
   * @throws ClassCastException {@inheritDoc}
   * @throws NullPointerException {@inheritDoc}
   * @throws IllegalArgumentException {@inheritDoc}
   */
  tailSet(fromElement: unknown): SortedSet;
};
