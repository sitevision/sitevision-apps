import type { Object } from "../../lang/Object";
import type { Iterator } from "../Iterator";

import type { Predicate } from "../function/Predicate";

import type { Spliterator } from "../Spliterator";
import type { Stream } from "../stream/Stream";
import type { Iterable } from "../../lang/Iterable";

/**
 * The root interface in the <i>collection hierarchy</i>.  A collection
 *  represents a group of objects, known as its <i>elements</i>.  Some
 *  collections allow duplicate elements and others do not.  Some are ordered
 *  and others unordered.  The JDK does not provide any <i>direct</i>
 *  implementations of this interface: it provides implementations of more
 *  specific subinterfaces like <tt>Set</tt> and <tt>List</tt>.  This interface
 *  is typically used to pass collections around and manipulate them where
 *  maximum generality is desired.
 *
 *  <p><i>Bags</i> or <i>multisets</i> (unordered collections that may contain
 *  duplicate elements) should implement this interface directly.
 *
 *  <p>All general-purpose <tt>Collection</tt> implementation classes (which
 *  typically implement <tt>Collection</tt> indirectly through one of its
 *  subinterfaces) should provide two "standard" constructors: a void (no
 *  arguments) constructor, which creates an empty collection, and a
 *  constructor with a single argument of type <tt>Collection</tt>, which
 *  creates a new collection with the same elements as its argument.  In
 *  effect, the latter constructor allows the user to copy any collection,
 *  producing an equivalent collection of the desired implementation type.
 *  There is no way to enforce this convention (as interfaces cannot contain
 *  constructors) but all of the general-purpose <tt>Collection</tt>
 *  implementations in the Java platform libraries comply.
 *
 *  <p>The "destructive" methods contained in this interface, that is, the
 *  methods that modify the collection on which they operate, are specified to
 *  throw <tt>UnsupportedOperationException</tt> if this collection does not
 *  support the operation.  If this is the case, these methods may, but are not
 *  required to, throw an <tt>UnsupportedOperationException</tt> if the
 *  invocation would have no effect on the collection.  For example, invoking
 *  the {@link #addAll(Collection)} method on an unmodifiable collection may,
 *  but is not required to, throw the exception if the collection to be added
 *  is empty.
 *
 *  <p><a name="optional-restrictions">
 *  Some collection implementations have restrictions on the elements that
 *  they may contain.</a>  For example, some implementations prohibit null elements,
 *  and some have restrictions on the types of their elements.  Attempting to
 *  add an ineligible element throws an unchecked exception, typically
 *  <tt>NullPointerException</tt> or <tt>ClassCastException</tt>.  Attempting
 *  to query the presence of an ineligible element may throw an exception,
 *  or it may simply return false; some implementations will exhibit the former
 *  behavior and some will exhibit the latter.  More generally, attempting an
 *  operation on an ineligible element whose completion would not result in
 *  the insertion of an ineligible element into the collection may throw an
 *  exception or it may succeed, at the option of the implementation.
 *  Such exceptions are marked as "optional" in the specification for this
 *  interface.
 *
 *  <p>It is up to each collection to determine its own synchronization
 *  policy.  In the absence of a stronger guarantee by the
 *  implementation, undefined behavior may result from the invocation
 *  of any method on a collection that is being mutated by another
 *  thread; this includes direct invocations, passing the collection to
 *  a method that might perform invocations, and using an existing
 *  iterator to examine the collection.
 *
 *  <p>Many methods in Collections Framework interfaces are defined in
 *  terms of the {@link Object#equals(Object) equals} method.  For example,
 *  the specification for the {@link #contains(Object) contains(Object o)}
 *  method says: "returns <tt>true</tt> if and only if this collection
 *  contains at least one element <tt>e</tt> such that
 *  <tt>(o==null ? e==null : o.equals(e))</tt>."  This specification should
 *  <i>not</i> be construed to imply that invoking <tt>Collection.contains</tt>
 *  with a non-null argument <tt>o</tt> will cause <tt>o.equals(e)</tt> to be
 *  invoked for any element <tt>e</tt>.  Implementations are free to implement
 *  optimizations whereby the <tt>equals</tt> invocation is avoided, for
 *  example, by first comparing the hash codes of the two elements.  (The
 *  {@link Object#hashCode()} specification guarantees that two objects with
 *  unequal hash codes cannot be equal.)  More generally, implementations of
 *  the various Collections Framework interfaces are free to take advantage of
 *  the specified behavior of underlying {@link Object} methods wherever the
 *  implementor deems it appropriate.
 *
 *  <p>Some collection operations which perform recursive traversal of the
 *  collection may fail with an exception for self-referential instances where
 *  the collection directly or indirectly contains itself. This includes the
 *  {@code clone()}, {@code equals()}, {@code hashCode()} and {@code toString()}
 *  methods. Implementations may optionally handle the self-referential scenario,
 *  however most current implementations do not do so.
 *
 *  <p>This interface is a member of the
 *  <a href="{@docRoot}/../technotes/guides/collections/index.html">
 *  Java Collections Framework</a>.
 * @implSpec The default method implementations (inherited or otherwise) do not apply any&#xA; synchronization protocol. If a {@code Collection} implementation has a&#xA; specific synchronization protocol, then it must override default&#xA; implementations to apply that protocol.
 * @param <E> the type of elements in this collection
 * @author Josh Bloch
 * @author Neal Gafter
 * @see Set
 * @see List
 * @see Map
 * @see SortedSet
 * @see SortedMap
 * @see HashSet
 * @see TreeSet
 * @see ArrayList
 * @see LinkedList
 * @see Vector
 * @see Collections
 * @see Arrays
 * @see AbstractCollection
 * @since 1.2
 */
export type Collection = Iterable & {
  /**
   * Returns the number of elements in this collection.  If this collection
   *  contains more than <tt>Integer.MAX_VALUE</tt> elements, returns
   *  <tt>Integer.MAX_VALUE</tt>.
   * @return the number of elements in this collection
   */
  size(): number;

  /**
   * Returns <tt>true</tt> if this collection contains no elements.
   * @return <tt>true</tt> if this collection contains no elements
   */
  isEmpty(): boolean;

  /**
   * Returns <tt>true</tt> if this collection contains the specified element.
   *  More formally, returns <tt>true</tt> if and only if this collection
   *  contains at least one element <tt>e</tt> such that
   *  <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
   * @param o element whose presence in this collection is to be tested
   * @return <tt>true</tt> if this collection contains the specified&#xA; element
   * @throws ClassCastException if the type of the specified element&#xA; is incompatible with this collection&#xA; (<a href="#optional-restrictions">optional</a>)
   * @throws NullPointerException if the specified element is null and this&#xA; collection does not permit null elements&#xA; (<a href="#optional-restrictions">optional</a>)
   */
  contains(o: unknown): boolean;

  /**
   * Returns an iterator over the elements in this collection.  There are no
   *  guarantees concerning the order in which the elements are returned
   *  (unless this collection is an instance of some class that provides a
   *  guarantee).
   * @return an <tt>Iterator</tt> over the elements in this collection
   */
  iterator(): Iterator;

  /**
   * Returns an array containing all of the elements in this collection.
   *  If this collection makes any guarantees as to what order its elements
   *  are returned by its iterator, this method must return the elements in
   *  the same order.
   *
   *  <p>The returned array will be "safe" in that no references to it are
   *  maintained by this collection.  (In other words, this method must
   *  allocate a new array even if this collection is backed by an array).
   *  The caller is thus free to modify the returned array.
   *
   *  <p>This method acts as bridge between array-based and collection-based
   *  APIs.
   * @return an array containing all of the elements in this collection
   */
  toArray(): unknown;

  /**
   * Returns an array containing all of the elements in this collection;
   *  the runtime type of the returned array is that of the specified array.
   *  If the collection fits in the specified array, it is returned therein.
   *  Otherwise, a new array is allocated with the runtime type of the
   *  specified array and the size of this collection.
   *
   *  <p>If this collection fits in the specified array with room to spare
   *  (i.e., the array has more elements than this collection), the element
   *  in the array immediately following the end of the collection is set to
   *  <tt>null</tt>.  (This is useful in determining the length of this
   *  collection <i>only</i> if the caller knows that this collection does
   *  not contain any <tt>null</tt> elements.)
   *
   *  <p>If this collection makes any guarantees as to what order its elements
   *  are returned by its iterator, this method must return the elements in
   *  the same order.
   *
   *  <p>Like the {@link #toArray()} method, this method acts as bridge between
   *  array-based and collection-based APIs.  Further, this method allows
   *  precise control over the runtime type of the output array, and may,
   *  under certain circumstances, be used to save allocation costs.
   *
   *  <p>Suppose <tt>x</tt> is a collection known to contain only strings.
   *  The following code can be used to dump the collection into a newly
   *  allocated array of <tt>String</tt>:
   *
   *  <pre>
   *      String[] y = x.toArray(new String[0]);</pre>
   *
   *  Note that <tt>toArray(new Object[0])</tt> is identical in function to
   *  <tt>toArray()</tt>.
   * @param <T> the runtime type of the array to contain the collection
   * @param a the array into which the elements of this collection are to be&#xA; stored, if it is big enough; otherwise, a new array of the same&#xA; runtime type is allocated for this purpose.
   * @return an array containing all of the elements in this collection
   * @throws ArrayStoreException if the runtime type of the specified array&#xA; is not a supertype of the runtime type of every element in&#xA; this collection
   * @throws NullPointerException if the specified array is null
   */
  toArray(a: unknown[]): unknown;

  /**
   * Ensures that this collection contains the specified element (optional
   *  operation).  Returns <tt>true</tt> if this collection changed as a
   *  result of the call.  (Returns <tt>false</tt> if this collection does
   *  not permit duplicates and already contains the specified element.)<p>
   *
   *  Collections that support this operation may place limitations on what
   *  elements may be added to this collection.  In particular, some
   *  collections will refuse to add <tt>null</tt> elements, and others will
   *  impose restrictions on the type of elements that may be added.
   *  Collection classes should clearly specify in their documentation any
   *  restrictions on what elements may be added.<p>
   *
   *  If a collection refuses to add a particular element for any reason
   *  other than that it already contains the element, it <i>must</i> throw
   *  an exception (rather than returning <tt>false</tt>).  This preserves
   *  the invariant that a collection always contains the specified element
   *  after this call returns.
   * @param e element whose presence in this collection is to be ensured
   * @return <tt>true</tt> if this collection changed as a result of the&#xA; call
   * @throws UnsupportedOperationException if the <tt>add</tt> operation&#xA; is not supported by this collection
   * @throws ClassCastException if the class of the specified element&#xA; prevents it from being added to this collection
   * @throws NullPointerException if the specified element is null and this&#xA; collection does not permit null elements
   * @throws IllegalArgumentException if some property of the element&#xA; prevents it from being added to this collection
   * @throws IllegalStateException if the element cannot be added at this&#xA; time due to insertion restrictions
   */
  add(e: unknown): boolean;

  /**
   * Removes a single instance of the specified element from this
   *  collection, if it is present (optional operation).  More formally,
   *  removes an element <tt>e</tt> such that
   *  <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>, if
   *  this collection contains one or more such elements.  Returns
   *  <tt>true</tt> if this collection contained the specified element (or
   *  equivalently, if this collection changed as a result of the call).
   * @param o element to be removed from this collection, if present
   * @return <tt>true</tt> if an element was removed as a result of this call
   * @throws ClassCastException if the type of the specified element&#xA; is incompatible with this collection&#xA; (<a href="#optional-restrictions">optional</a>)
   * @throws NullPointerException if the specified element is null and this&#xA; collection does not permit null elements&#xA; (<a href="#optional-restrictions">optional</a>)
   * @throws UnsupportedOperationException if the <tt>remove</tt> operation&#xA; is not supported by this collection
   */
  remove(o: unknown): boolean;

  /**
   * Returns <tt>true</tt> if this collection contains all of the elements
   *  in the specified collection.
   * @param c collection to be checked for containment in this collection
   * @return <tt>true</tt> if this collection contains all of the elements&#xA; in the specified collection
   * @throws ClassCastException if the types of one or more elements&#xA; in the specified collection are incompatible with this&#xA; collection&#xA; (<a href="#optional-restrictions">optional</a>)
   * @throws NullPointerException if the specified collection contains one&#xA; or more null elements and this collection does not permit null&#xA; elements&#xA; (<a href="#optional-restrictions">optional</a>),&#xA; or if the specified collection is null.
   * @see #contains(Object)
   */
  containsAll(c: Collection | unknown[]): boolean;

  /**
   * Adds all of the elements in the specified collection to this collection
   *  (optional operation).  The behavior of this operation is undefined if
   *  the specified collection is modified while the operation is in progress.
   *  (This implies that the behavior of this call is undefined if the
   *  specified collection is this collection, and this collection is
   *  nonempty.)
   * @param c collection containing elements to be added to this collection
   * @return <tt>true</tt> if this collection changed as a result of the call
   * @throws UnsupportedOperationException if the <tt>addAll</tt> operation&#xA; is not supported by this collection
   * @throws ClassCastException if the class of an element of the specified&#xA; collection prevents it from being added to this collection
   * @throws NullPointerException if the specified collection contains a&#xA; null element and this collection does not permit null elements,&#xA; or if the specified collection is null
   * @throws IllegalArgumentException if some property of an element of the&#xA; specified collection prevents it from being added to this&#xA; collection
   * @throws IllegalStateException if not all the elements can be added at&#xA; this time due to insertion restrictions
   * @see #add(Object)
   */
  addAll(c: Collection | unknown[]): boolean;

  /**
   * Removes all of this collection's elements that are also contained in the
   *  specified collection (optional operation).  After this call returns,
   *  this collection will contain no elements in common with the specified
   *  collection.
   * @param c collection containing elements to be removed from this collection
   * @return <tt>true</tt> if this collection changed as a result of the&#xA; call
   * @throws UnsupportedOperationException if the <tt>removeAll</tt> method&#xA; is not supported by this collection
   * @throws ClassCastException if the types of one or more elements&#xA; in this collection are incompatible with the specified&#xA; collection&#xA; (<a href="#optional-restrictions">optional</a>)
   * @throws NullPointerException if this collection contains one or more&#xA; null elements and the specified collection does not support&#xA; null elements&#xA; (<a href="#optional-restrictions">optional</a>),&#xA; or if the specified collection is null
   * @see #remove(Object)
   * @see #contains(Object)
   */
  removeAll(c: Collection | unknown[]): boolean;

  /**
   * Removes all of the elements of this collection that satisfy the given
   *  predicate.  Errors or runtime exceptions thrown during iteration or by
   *  the predicate are relayed to the caller.
   * @implSpec The default implementation traverses all elements of the collection using&#xA; its {@link #iterator}. Each matching element is removed using&#xA; {@link Iterator#remove()}. If the collection's iterator does not&#xA; support removal then an {@code UnsupportedOperationException} will be&#xA; thrown on the first matching element.
   * @param filter a predicate which returns {@code true} for elements to be&#xA; removed
   * @return {@code true} if any elements were removed
   * @throws NullPointerException if the specified filter is null
   * @throws UnsupportedOperationException if elements cannot be removed&#xA; from this collection. Implementations may throw this exception if a&#xA; matching element cannot be removed or if, in general, removal is not&#xA; supported.
   * @since 1.8
   */
  removeIf(filter: Predicate): boolean;

  /**
   * Retains only the elements in this collection that are contained in the
   *  specified collection (optional operation).  In other words, removes from
   *  this collection all of its elements that are not contained in the
   *  specified collection.
   * @param c collection containing elements to be retained in this collection
   * @return <tt>true</tt> if this collection changed as a result of the call
   * @throws UnsupportedOperationException if the <tt>retainAll</tt> operation&#xA; is not supported by this collection
   * @throws ClassCastException if the types of one or more elements&#xA; in this collection are incompatible with the specified&#xA; collection&#xA; (<a href="#optional-restrictions">optional</a>)
   * @throws NullPointerException if this collection contains one or more&#xA; null elements and the specified collection does not permit null&#xA; elements&#xA; (<a href="#optional-restrictions">optional</a>),&#xA; or if the specified collection is null
   * @see #remove(Object)
   * @see #contains(Object)
   */
  retainAll(c: Collection | unknown[]): boolean;

  /**
   * Removes all of the elements from this collection (optional operation).
   *  The collection will be empty after this method returns.
   * @throws UnsupportedOperationException if the <tt>clear</tt> operation&#xA; is not supported by this collection
   */
  clear(): void;

  /**
   * Compares the specified object with this collection for equality. <p>
   *
   *  While the <tt>Collection</tt> interface adds no stipulations to the
   *  general contract for the <tt>Object.equals</tt>, programmers who
   *  implement the <tt>Collection</tt> interface "directly" (in other words,
   *  create a class that is a <tt>Collection</tt> but is not a <tt>Set</tt>
   *  or a <tt>List</tt>) must exercise care if they choose to override the
   *  <tt>Object.equals</tt>.  It is not necessary to do so, and the simplest
   *  course of action is to rely on <tt>Object</tt>'s implementation, but
   *  the implementor may wish to implement a "value comparison" in place of
   *  the default "reference comparison."  (The <tt>List</tt> and
   *  <tt>Set</tt> interfaces mandate such value comparisons.)<p>
   *
   *  The general contract for the <tt>Object.equals</tt> method states that
   *  equals must be symmetric (in other words, <tt>a.equals(b)</tt> if and
   *  only if <tt>b.equals(a)</tt>).  The contracts for <tt>List.equals</tt>
   *  and <tt>Set.equals</tt> state that lists are only equal to other lists,
   *  and sets to other sets.  Thus, a custom <tt>equals</tt> method for a
   *  collection class that implements neither the <tt>List</tt> nor
   *  <tt>Set</tt> interface must return <tt>false</tt> when this collection
   *  is compared to any list or set.  (By the same logic, it is not possible
   *  to write a class that correctly implements both the <tt>Set</tt> and
   *  <tt>List</tt> interfaces.)
   * @param o object to be compared for equality with this collection
   * @return <tt>true</tt> if the specified object is equal to this&#xA; collection
   * @see Object#equals(Object)
   * @see Set#equals(Object)
   * @see List#equals(Object)
   */
  equals(o: unknown): boolean;

  /**
   * Returns the hash code value for this collection.  While the
   *  <tt>Collection</tt> interface adds no stipulations to the general
   *  contract for the <tt>Object.hashCode</tt> method, programmers should
   *  take note that any class that overrides the <tt>Object.equals</tt>
   *  method must also override the <tt>Object.hashCode</tt> method in order
   *  to satisfy the general contract for the <tt>Object.hashCode</tt> method.
   *  In particular, <tt>c1.equals(c2)</tt> implies that
   *  <tt>c1.hashCode()==c2.hashCode()</tt>.
   * @return the hash code value for this collection
   * @see Object#hashCode()
   * @see Object#equals(Object)
   */
  hashCode(): number;

  /**
   * Creates a {@link Spliterator} over the elements in this collection.
   *
   *  Implementations should document characteristic values reported by the
   *  spliterator.  Such characteristic values are not required to be reported
   *  if the spliterator reports {@link Spliterator#SIZED} and this collection
   *  contains no elements.
   *
   *  <p>The default implementation should be overridden by subclasses that
   *  can return a more efficient spliterator.  In order to
   *  preserve expected laziness behavior for the {@link #stream()} and
   *  {@link #parallelStream()}} methods, spliterators should either have the
   *  characteristic of {@code IMMUTABLE} or {@code CONCURRENT}, or be
   *  <em><a href="Spliterator.html#binding">late-binding</a></em>.
   *  If none of these is practical, the overriding class should describe the
   *  spliterator's documented policy of binding and structural interference,
   *  and should override the {@link #stream()} and {@link #parallelStream()}
   *  methods to create streams using a {@code Supplier} of the spliterator,
   *  as in:
   *  <pre>{@code
   *      Stream<E> s = StreamSupport.stream(() -> spliterator(), spliteratorCharacteristics)
   *  }</pre>
   *  <p>These requirements ensure that streams produced by the
   *  {@link #stream()} and {@link #parallelStream()} methods will reflect the
   *  contents of the collection as of initiation of the terminal stream
   *  operation.
   * @implSpec The default implementation creates a&#xA; <em><a href="Spliterator.html#binding">late-binding</a></em> spliterator&#xA; from the collections's {@code Iterator}. The spliterator inherits the&#xA; <em>fail-fast</em> properties of the collection's iterator.&#xA; <p>&#xA; The created {@code Spliterator} reports {@link Spliterator#SIZED}.
   * @implNote The created {@code Spliterator} additionally reports&#xA; {@link Spliterator#SUBSIZED}.&#xA;&#xA; <p>If a spliterator covers no elements then the reporting of additional&#xA; characteristic values, beyond that of {@code SIZED} and {@code SUBSIZED},&#xA; does not aid clients to control, specialize or simplify computation.&#xA; However, this does enable shared use of an immutable and empty&#xA; spliterator instance (see {@link Spliterators#emptySpliterator()}) for&#xA; empty collections, and enables clients to determine if such a spliterator&#xA; covers no elements.
   * @return a {@code Spliterator} over the elements in this collection
   * @since 1.8
   */
  spliterator(): Spliterator;

  /**
   * Returns a sequential {@code Stream} with this collection as its source.
   *
   *  <p>This method should be overridden when the {@link #spliterator()}
   *  method cannot return a spliterator that is {@code IMMUTABLE},
   *  {@code CONCURRENT}, or <em>late-binding</em>. (See {@link #spliterator()}
   *  for details.)
   * @implSpec The default implementation creates a sequential {@code Stream} from the&#xA; collection's {@code Spliterator}.
   * @return a sequential {@code Stream} over the elements in this collection
   * @since 1.8
   */
  stream(): Stream;

  /**
   * Returns a possibly parallel {@code Stream} with this collection as its
   *  source.  It is allowable for this method to return a sequential stream.
   *
   *  <p>This method should be overridden when the {@link #spliterator()}
   *  method cannot return a spliterator that is {@code IMMUTABLE},
   *  {@code CONCURRENT}, or <em>late-binding</em>. (See {@link #spliterator()}
   *  for details.)
   * @implSpec The default implementation creates a parallel {@code Stream} from the&#xA; collection's {@code Spliterator}.
   * @return a possibly parallel {@code Stream} over the elements in this&#xA; collection
   * @since 1.8
   */
  parallelStream(): Stream;
};
