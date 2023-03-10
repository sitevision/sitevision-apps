import type { List } from "../../types/java/util/List";

import type { Comparator } from "../../types/java/util/Comparator";

import type { Random } from "../../types/java/util/Random";
import type { Collection } from "../../types/java/util/Collection";

import type { Set } from "../../types/java/util/Set";
import type { SortedSet } from "../../types/java/util/SortedSet";
import type { Map } from "../../types/java/util/Map";
import type { SortedMap } from "../../types/java/util/SortedMap";
import type { Class } from "../../types/java/lang/Class";

import type { Enumeration } from "../../types/java/util/Enumeration";
import type { ArrayList } from "../../types/java/util/ArrayList";
import type { Object } from "../../types/java/lang/Object";
import type { Deque } from "../../types/java/util/Deque";
import type { Queue } from "../../types/java/util/Queue";
import type { Iterator } from "../../types/java/util/Iterator";
import type { ListIterator } from "../../types/java/util/ListIterator";
import type { NavigableSet } from "../../types/java/util/NavigableSet";
import type { NavigableMap } from "../../types/java/util/NavigableMap";

/**
 * Instance wrapper for the <code>java.util.Collections</code> class that delegates all method calls to
 *  the corresponding <code>Collections</code> method.
 *
 *  <p>
 *     <em>Note! Method documentations in this interface are only excerpts. For full documentation, see official java.util.Collections Javadoc</em>
 *  </p>
 *
 *  <p>
 *  An instance of the Sitevision class implementing this interface can be obtained via {@link InstanceCreatorUtil#getCollectionsInstance()}.
 *  See {@link InstanceCreatorUtil} for how to obtain an instance of the <code>InstanceCreatorUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.1
 */
export interface CollectionsInstance {
  /**
 * The empty set (immutable).
  
    */
  EMPTY_SET: Set;

  /**
 * The empty list (immutable).
  
    */
  EMPTY_LIST: List;

  /**
 * The empty map (immutable).
  
    */
  EMPTY_MAP: Map;

  /**
   * Sorts the specified list into ascending order, according to the <i>natural ordering</i> of its elements.
   * @param <T> the class of the objects in the list
   * @param aList the list to be sorted.
   * @throws ClassCastException if the list contains elements that are not <i>mutually comparable</i> (for example, strings and integers).
   * @throws UnsupportedOperationException if the specified list's list-iterator does not support the <tt>set</tt> operation.
   */
  sort(aList: List | unknown[]): void;

  /**
   * Sorts the specified list according to the order induced by the specified comparator.
   * @param <T> the class of the objects in the list
   * @param aList the list to be sorted.
   * @param aComparator the comparator to determine the order of the list. A <tt>null</tt> value indicates that the elements'&#xA; <i>natural ordering</i> should be used.
   * @throws ClassCastException if the list contains elements that are not <i>mutually comparable</i> using the specified comparator.
   * @throws UnsupportedOperationException if the specified list's list-iterator does not support the <tt>set</tt> operation.
   */
  sort(aList: List | unknown[], aComparator: Comparator): void;

  /**
   * Searches the specified list for the specified object using the binary search algorithm.
   * @param <T> the class of the objects in the list
   * @param aList the list to be searched.
   * @param aKey the key to be searched for.
   * @return the index of the search key, if it is contained in the list; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>.&#xA; The <i>insertion point</i> is defined as the point at which the key would be inserted into the list: the index of&#xA; the first element greater than the key, or <tt>aList.size()</tt> if all elements in the list are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws ClassCastException if the list contains elements that are not <i>mutually comparable</i> (for example, strings and integers), or the&#xA; search key is not mutually comparable with the elements of the list.
   */
  binarySearch(aList: List | unknown[], aKey: unknown): number;

  /**
   * Searches the specified list for the specified object using the binary search algorithm.
   * @param <T> the class of the objects in the list
   * @param aList the list to be searched.
   * @param aKey the key to be searched for.
   * @param aComparator the comparator by which the list is ordered. A <tt>null</tt> value indicates that the elements' Comparable natural&#xA; ordering should be used.
   * @return the index of the search key, if it is contained in the list; otherwise, <tt>(-(<i>insertion point</i>) - 1)</tt>. The&#xA; <i>insertion point</i> is defined as the point at which the key would be inserted into the list: the index of the first&#xA; element greater than the key, or <tt>aList.size()</tt> if all elements in the list are less than the specified key. Note&#xA; that this guarantees that the return value will be &gt;= 0 if and only if the key is found.
   * @throws ClassCastException if the list contains elements that are not <i>mutually comparable</i> using the specified comparator,&#xA; or the search key is not mutually comparable with the elements of the list using this comparator.
   */
  binarySearch(
    aList: List | unknown[],
    aKey: unknown,
    aComparator: Comparator
  ): number;

  /**
   * Reverses the order of the elements in the specified list.
   * @param aList the list whose elements are to be reversed.
   * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
   */
  reverse(aList: List | unknown[]): void;

  /**
   * Randomly permutes the specified list using a default source of randomness.
   * @param aList the list to be shuffled.
   * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
   */
  shuffle(aList: List | unknown[]): void;

  /**
   * Randomly permute the specified list using the specified source of randomness.
   * @param aList the list to be shuffled.
   * @param aRandom the source of randomness to use to shuffle the list.
   * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
   */
  shuffle(aList: List | unknown[], aRandom: Random): void;

  /**
   * Swaps the elements at the specified positions in the specified list.
   * @param aList The list in which to swap elements.
   * @param anIndex the index of one element to be swapped.
   * @param anAnotherIndex the index of the other element to be swapped.
   * @throws IndexOutOfBoundsException if either <tt>anIndex</tt> or <tt>j</tt> is out of range (anIndex &lt; 0 || anIndex &gt;= aList.size()&#xA; || anAnotherIndex &lt; 0 || anAnotherIndex &gt;= aList.size()).
   */
  swap(aList: List | unknown[], anIndex: number, anAnotherIndex: number): void;

  /**
   * Replaces all of the elements of the specified list with the specified element.
   * @param <T> the class of the objects in the list
   * @param aList the list to be filled with the specified element.
   * @param aValue The element with which to fill the specified list.
   * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
   */
  fill(aList: List | unknown[], aValue: unknown): void;

  /**
   * Copies all of the elements from one list into another.
   * @param <T> the class of the objects in the list
   * @param aDestination The destination list.
   * @param aSource The source list.
   * @throws IndexOutOfBoundsException if the destination list is too small to contain the entire source List.
   * @throws UnsupportedOperationException if the destination list's list-iterator does not support the <tt>set</tt> operation.
   */
  copy(aDestination: List | unknown[], aSource: List | unknown[]): void;

  /**
   * Returns the minimum element of the given collection, according to the <i>natural ordering</i> of its elements.
   * @param <T> the class of the objects in the collection
   * @param aCollection the collection whose minimum element is to be determined.
   * @return the minimum element of the given collection, according to the <i>natural ordering</i> of its elements.
   * @throws ClassCastException if the collection contains elements that are not <i>mutually comparable</i> (for example, strings and integers).
   * @throws NoSuchElementException if the collection is empty.
   */
  min(aCollection: Collection | unknown[]): unknown;

  /**
   * Returns the minimum element of the given collection, according to the order induced by the specified comparator.
   * @param <T> the class of the objects in the collection
   * @param aCollection the collection whose minimum element is to be determined.
   * @param aComparator the comparator with which to determine the minimum element. A <tt>null</tt> value indicates that the elements'&#xA; <i>natural ordering</i> should be used.
   * @return the minimum element of the given collection, according to the specified comparator.
   * @throws ClassCastException if the collection contains elements that are not <i>mutually comparable</i> using the specified comparator.
   * @throws NoSuchElementException if the collection is empty.
   */
  min(aCollection: Collection | unknown[], aComparator: Comparator): unknown;

  /**
   * Returns the maximum element of the given collection, according to the
   *  <i>natural ordering</i> of its elements.
   * @param <T> the class of the objects in the collection
   * @param aCollection the collection whose maximum element is to be determined.
   * @return the maximum element of the given collection, according to the <i>natural ordering</i> of its elements.
   * @throws ClassCastException if the collection contains elements that are not <i>mutually comparable</i> (for example, strings and integers).
   * @throws NoSuchElementException if the collection is empty.
   */
  max(aCollection: Collection | unknown[]): unknown;

  /**
   * Returns the maximum element of the given collection, according to the
   *  order induced by the specified comparator.
   * @param <T> the class of the objects in the collection
   * @param aCollection the collection whose maximum element is to be determined.
   * @param aComparator the comparator with which to determine the maximum element. A <tt>null</tt> value indicates that the elements'&#xA; <i>natural ordering</i> should be used.
   * @return the maximum element of the given collection, according to the specified comparator.
   * @throws ClassCastException if the collection contains elements that are not <i>mutually comparable</i> using the specified comparator.
   * @throws NoSuchElementException if the collection is empty.
   */
  max(aCollection: Collection | unknown[], aComparator: Comparator): unknown;

  /**
   * Rotates the elements in the specified list by the specified distance.
   * @param aList the list to be rotated.
   * @param aDistance the distance to rotate the list. There are no constraints on this value; it may be zero, negative, or greater than&#xA; <tt>aList.size()</tt>.
   * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
   */
  rotate(aList: List | unknown[], aDistance: number): void;

  /**
   * Replaces all occurrences of one specified value in a list with another.
   * @param <T> the class of the objects in the list
   * @param aList the list in which replacement is to occur.
   * @param anOldValue the old value to be replaced.
   * @param aNewValue the new value with which <tt>anOldValue</tt> is to be replaced.
   * @return <tt>true</tt> if <tt>aList</tt> contained one or more elements <tt>e</tt> such that&#xA; <tt>(anOldValue==null ? e==null : anOldValue.equals(e))</tt>.
   * @throws UnsupportedOperationException if the specified list or its list-iterator does not support the <tt>set</tt> operation.
   */
  replaceAll(
    aList: List | unknown[],
    anOldValue: unknown,
    aNewValue: unknown
  ): boolean;

  /**
   * Returns the starting position of the first occurrence of the specified
   *  target list within the specified source list, or -1 if there is no such occurrence.
   * @param aSource the list in which to search for the first occurrence of <tt>target</tt>.
   * @param aTarget the list to search for as a subList of <tt>aSource</tt>.
   * @return the starting position of the first occurrence of the specified target list within the specified source list,&#xA; or -1 if there is no such occurrence.
   */
  indexOfSubList(aSource: List | unknown[], aTarget: List | unknown[]): number;

  /**
   * Returns the starting position of the last occurrence of the specified
   *  target list within the specified source list, or -1 if there is no such occurrence.
   * @param aSource the list in which to search for the last occurrence of <tt>target</tt>.
   * @param aTarget the list to search for as a subList of <tt>aSource</tt>.
   * @return the starting position of the last occurrence of the specified target list within the specified source list,&#xA; or -1 if there is no such occurrence.
   */
  lastIndexOfSubList(
    aSource: List | unknown[],
    aTarget: List | unknown[]
  ): number;

  /**
   * Returns an unmodifiable view of the specified collection.
   * @param <T> the class of the objects in the collection
   * @param aCollection the collection for which an unmodifiable view is to be returned.
   * @return an unmodifiable view of the specified collection.
   */
  unmodifiableCollection(aCollection: Collection | unknown[]): Collection;

  /**
   * Returns an unmodifiable view of the specified set.
   * @param <T> the class of the objects in the set
   * @param aSet the set for which an unmodifiable view is to be returned.
   * @return an unmodifiable view of the specified set.
   */
  unmodifiableSet(aSet: Set | unknown[]): Set;

  /**
   * Returns an unmodifiable view of the specified sorted set.
   * @param <T> the class of the objects in the set
   * @param aSet the sorted set for which an unmodifiable view is to be returned.
   * @return an unmodifiable view of the specified sorted set.
   */
  unmodifiableSortedSet(aSet: SortedSet): SortedSet;

  /**
   * Returns an unmodifiable view of the specified list.
   * @param <T> the class of the objects in the list
   * @param aList the list for which an unmodifiable view is to be returned.
   * @return an unmodifiable view of the specified list.
   */
  unmodifiableList(aList: List | unknown[]): List;

  /**
   * Returns an unmodifiable view of the specified map.
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @param aMap the map for which an unmodifiable view is to be returned.
   * @return an unmodifiable view of the specified map.
   */
  unmodifiableMap(aMap: Map | {}): Map;

  /**
   * Returns an unmodifiable view of the specified sorted map.
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @param aMap the sorted map for which an unmodifiable view is to be returned.
   * @return an unmodifiable view of the specified sorted map.
   */
  unmodifiableSortedMap(aMap: SortedMap): SortedMap;

  /**
   * Returns a synchronized (thread-safe) collection backed by the specified collection.
   * @param <T> the class of the objects in the collection
   * @param aCollection the collection to be "wrapped" in a synchronized collection.
   * @return a synchronized view of the specified collection.
   */
  synchronizedCollection(aCollection: Collection | unknown[]): Collection;

  /**
   * Returns a synchronized (thread-safe) set backed by the specified set.
   * @param <T> the class of the objects in the set
   * @param aSet the set to be "wrapped" in a synchronized set.
   * @return a synchronized view of the specified set.
   */
  synchronizedSet(aSet: Set | unknown[]): Set;

  /**
   * Returns a synchronized (thread-safe) sorted set backed by the specified sorted set.
   * @param <T> the class of the objects in the set
   * @param aSet the sorted set to be "wrapped" in a synchronized sorted set.
   * @return a synchronized view of the specified sorted set.
   */
  synchronizedSortedSet(aSet: SortedSet): SortedSet;

  /**
   * Returns a synchronized (thread-safe) list backed by the specified list.
   * @param <T> the class of the objects in the list
   * @param aList the list to be "wrapped" in a synchronized list.
   * @return a synchronized view of the specified list.
   */
  synchronizedList(aList: List | unknown[]): List;

  /**
   * Returns a synchronized (thread-safe) map backed by the specified map.
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @param aMap the map to be "wrapped" in a synchronized map.
   * @return a synchronized view of the specified map.
   */
  synchronizedMap(aMap: Map | {}): Map;

  /**
   * Returns a synchronized (thread-safe) sorted map backed by the specified sorted map.
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @param aMap the sorted map to be "wrapped" in a synchronized sorted map.
   * @return a synchronized view of the specified sorted map.
   */
  synchronizedSortedMap(aMap: SortedMap): SortedMap;

  /**
   * Returns a dynamically typesafe view of the specified collection.
   * @param <E> the class of the objects in the collection
   * @param aCollection the collection for which a dynamically typesafe view is to be returned
   * @param aType the type of element that <tt>aCollection</tt> is permitted to hold
   * @return a dynamically typesafe view of the specified collection
   */
  checkedCollection(
    aCollection: Collection | unknown[],
    aType: Class
  ): Collection;

  /**
   * Returns a dynamically typesafe view of the specified set.
   * @param <E> the class of the objects in the set
   * @param aSet the set for which a dynamically typesafe view is to be returned
   * @param aType the type of element that <tt>aSet</tt> is permitted to hold
   * @return a dynamically typesafe view of the specified set
   */
  checkedSet(aSet: Set | unknown[], aType: Class): Set;

  /**
   * Returns a dynamically typesafe view of the specified sorted set.
   * @param <E> the class of the objects in the set
   * @param aSet the sorted set for which a dynamically typesafe view is to be returned
   * @param aType the type of element that <tt>aSet</tt> is permitted to hold
   * @return a dynamically typesafe view of the specified sorted set
   */
  checkedSortedSet(aSet: SortedSet, aType: Class): SortedSet;

  /**
   * Returns a dynamically typesafe view of the specified list.
   * @param <E> the class of the objects in the list
   * @param aList the list for which a dynamically typesafe view is to be returned
   * @param aType the type of element that <tt>aList</tt> is permitted to hold
   * @return a dynamically typesafe view of the specified list
   */
  checkedList(aList: List | unknown[], aType: Class): List;

  /**
   * Returns a dynamically typesafe view of the specified map.
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @param aMap the map for which a dynamically typesafe view is to be returned
   * @param aKeyType the type of key that <tt>aMap</tt> is permitted to hold
   * @param aValueType the type of value that <tt>aMap</tt> is permitted to hold
   * @return a dynamically typesafe view of the specified map
   */
  checkedMap(aMap: Map | {}, aKeyType: Class, aValueType: Class): Map;

  /**
   * Returns a dynamically typesafe view of the specified sorted map.
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @param aMap the map for which a dynamically typesafe view is to be returned
   * @param aKeyType the type of key that <tt>aMap</tt> is permitted to hold
   * @param aValueType the type of value that <tt>aMap</tt> is permitted to hold
   * @return a dynamically typesafe view of the specified map
   */
  checkedSortedMap(
    aMap: SortedMap,
    aKeyType: Class,
    aValueType: Class
  ): SortedMap;

  /**
   * Returns the empty set (immutable).
   * @param <T> the class of the objects in the set
   * @return the empty set
   */
  emptySet(): Set;

  /**
   * Returns the empty list (immutable).
   * @param <T> the class of the objects in the list
   * @return the empty list
   */
  emptyList(): List;

  /**
   * Returns the empty map (immutable).
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @return the empty map
   */
  emptyMap(): Map;

  /**
   * Returns an immutable set containing only the specified object.
   * @param <T> the class of the objects in the set
   * @param aValue the sole object to be stored in the returned set.
   * @return an immutable set containing only the specified object.
   */
  singleton(aValue: unknown): Set;

  /**
   * Returns an immutable list containing only the specified object.
   * @param <T> the class of the objects in the list
   * @param aValue the sole object to be stored in the returned list.
   * @return an immutable list containing only the specified object.
   */
  singletonList(aValue: unknown): List;

  /**
   * Returns an immutable map, mapping only the specified key to the specified value.
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @param key the sole key to be stored in the returned map.
   * @param aValue the value to which the returned map maps <tt>key</tt>.
   * @return an immutable map containing only the specified key-value mapping.
   */
  singletonMap(key: unknown, aValue: unknown): Map;

  /**
   * Returns an immutable list consisting of <tt>n</tt> copies of the specified object.
   * @param <T> the class of the objects in the list
   * @param aCount the number of elements in the returned list.
   * @param aValue the element to appear repeatedly in the returned list.
   * @return an immutable list consisting of <tt>aCount</tt> copies of the specified object.
   * @throws IllegalArgumentException if <tt>aCount &lt; 0</tt>.
   */
  nCopies(aCount: number, aValue: unknown): List;

  /**
   * Returns a comparator that imposes the reverse of the <i>natural ordering</i> on a collection of objects that implement
   *  the <tt>Comparable</tt> interface.
   * @param <T> the class of the objects compared by the comparator
   * @return a comparator that imposes the reverse of the <i>natural ordering</i> on a collection of objects that implement&#xA; the <tt>Comparable</tt> interface.
   */
  reverseOrder(): Comparator;

  /**
   * Returns a comparator that imposes the reverse ordering of the specified comparator.
   * @param <T> the class of the objects compared by the comparator
   * @param aComparator the Comparator
   * @return a comparator that imposes the reverse ordering of the specified comparator.
   */
  reverseOrder(aComparator: Comparator): Comparator;

  /**
   * Returns an enumeration over the specified collection.
   * @param <T> the class of the objects in the collection
   * @param aCollection the collection for which an enumeration is to be returned.
   * @return an enumeration over the specified collection.
   */
  enumeration(aCollection: Collection | unknown[]): Enumeration;

  /**
   * Returns an array list containing the elements returned by the specified enumeration in the order they are returned by the enumeration.
   * @param <T> the class of the objects in the enumeration
   * @param anEnumeration enumeration providing elements for the returned array list
   * @return an array list containing the elements returned by the specified enumeration.
   */
  list(anEnumeration: Enumeration): ArrayList;

  /**
   * Returns the number of elements in the specified collection equal to the specified object.
   * @param aCollection the collection in which to determine the frequency of <tt>aValue</tt>
   * @param aValue the object whose frequency is to be determined
   * @return the number of elements in {@code aCollection} equal to {@code aValue}
   * @throws NullPointerException if <tt>aCollection</tt> is null
   */
  frequency(aCollection: Collection | unknown[], aValue: unknown): number;

  /**
   * Returns <tt>true</tt> if the two specified collections have no elements in common.
   * @param aCollection a collection
   * @param anAnotherCollection a collection
   * @return {@code true} if the two specified collections have no elements in common.
   * @throws NullPointerException if either collection is null
   */
  disjoint(
    aCollection: Collection | unknown[],
    anAnotherCollection: Collection | unknown[]
  ): boolean;

  /**
   * Adds all of the specified elements to the specified collection.
   * @param <T> the class of the elements to add and of the collection
   * @param aCollection the collection into which <tt>elements</tt> are to be inserted
   * @param aValues the elements to insert into <tt>aCollection</tt>
   * @return <tt>true</tt> if the collection changed as a result of the call
   * @throws UnsupportedOperationException if <tt>aCollection</tt> does not support the <tt>add</tt> operation
   * @throws NullPointerException if <tt>aValues</tt> contains one or more null values and <tt>aCollection</tt> does not permit null&#xA; elements, or if <tt>aCollection</tt> or <tt>aValues</tt> are <tt>null</tt>
   * @throws IllegalArgumentException if some property of a value in <tt>aValues</tt> prevents it from being added to <tt>aCollection</tt>
   */
  addAll(aCollection: Collection | unknown[], ...aValues: unknown[]): boolean;

  /**
   * Returns a set backed by the specified map.
   * @param <E> the class of the map keys and of the objects in the returned set
   * @param aMap the backing map
   * @return the set backed by the map
   * @throws IllegalArgumentException if <tt>aMap</tt> is not empty
   */
  newSetFromMap(aMap: Map | {}): Set;

  /**
   * Returns a view of a <code>Deque</code> as a Last-in-first-out (Lifo) <code>Queue</code>.
   * @param <T> the class of the objects in the deque
   * @param aDeque the deque
   * @return the queue
   */
  asLifoQueue(aDeque: Deque): Queue;

  /**
   * Returns an iterator that has no elements.
   * @param <T> type of elements, if there were any, in the iterator
   * @return an empty iterator
   * @since Sitevision 4.0
   * @since Java 1.7
   */
  emptyIterator(): Iterator;

  /**
   * Returns a list iterator that has no elements.
   * @param <T> type of elements, if there were any, in the iterator
   * @return an empty list iterator
   * @since Sitevision 4.0
   * @since Java 1.7
   */
  emptyListIterator(): ListIterator;

  /**
   * Returns an enumeration that has no elements.
   * @param <T> the class of the objects in the enumeration
   * @return an empty enumeration
   * @since Sitevision 4.0
   * @since Java 1.7
   */
  emptyEnumeration(): Enumeration;

  /**
   * Returns an unmodifiable view of the specified navigable set.
   * @param <T> the class of the objects in the set
   * @param s the navigable set for which an unmodifiable view is to be returned
   * @return an unmodifiable view of the specified navigable set
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  unmodifiableNavigableSet(s: NavigableSet): NavigableSet;

  /**
   * Returns an unmodifiable view of the specified navigable map.
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @param m the navigable map for which an unmodifiable view is to be returned
   * @return an unmodifiable view of the specified navigable map
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  unmodifiableNavigableMap(m: NavigableMap): NavigableMap;

  /**
   * Returns a synchronized (thread-safe) navigable set backed by the
   *  specified navigable set.
   * @param <T> the class of the objects in the set
   * @param s the navigable set to be "wrapped" in a synchronized navigableset
   * @return a synchronized view of the specified navigable set
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  synchronizedNavigableSet(s: NavigableSet): NavigableSet;

  /**
   * Returns a synchronized (thread-safe) navigable map backed by the
   *  specified navigable map.
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @param m the navigable map to be "wrapped" in a synchronized navigable map
   * @return a synchronized view of the specified navigable map.
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  synchronizedNavigableMap(m: NavigableMap): NavigableMap;

  /**
   * Returns a dynamically typesafe view of the specified queue.
   * @param <E> the class of the objects in the queue
   * @param queue the queue for which a dynamically typesafe view is to be returned
   * @param type the type of element that {@code queue} is permitted to hold
   * @return a dynamically typesafe view of the specified queue
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  checkedQueue(queue: Queue, type: Class): Queue;

  /**
   * Returns a dynamically typesafe view of the specified navigable set.
   * @param <E> the class of the objects in the set
   * @param s the navigable set for which a dynamically typesafe view is to be returned
   * @param type the type of element that {@code s} is permitted to hold
   * @return a dynamically typesafe view of the specified navigable set
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  checkedNavigableSet(s: NavigableSet, type: Class): NavigableSet;

  /**
   * Returns a dynamically typesafe view of the specified navigable map.
   * @param <K> type of map keys
   * @param <V> type of map values
   * @param m the map for which a dynamically typesafe view is to be returned
   * @param keyType the type of key that {@code m} is permitted to hold
   * @param valueType the type of value that {@code m} is permitted to hold
   * @return a dynamically typesafe view of the specified map
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  checkedNavigableMap(
    m: NavigableMap,
    keyType: Class,
    valueType: Class
  ): NavigableMap;

  /**
   * Returns an empty sorted set (immutable).
   * @param <E> type of elements, if there were any, in the set
   * @return the empty sorted set
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  emptySortedSet(): SortedSet;

  /**
   * Returns an empty navigable set (immutable).
   * @param <E> type of elements, if there were any, in the set
   * @return the empty navigable set
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  emptyNavigableSet(): NavigableSet;

  /**
   * Returns an empty sorted map (immutable).
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @return an empty sorted map
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  emptySortedMap(): SortedMap;

  /**
   * Returns an empty navigable map (immutable).
   * @param <K> the class of the map keys
   * @param <V> the class of the map values
   * @return an empty navigable map
   * @since Sitevision 4.0
   * @since Java 1.8
   */
  emptyNavigableMap(): NavigableMap;
}

declare namespace CollectionsInstance {}

declare var collectionsInstance: CollectionsInstance;

export default collectionsInstance;
