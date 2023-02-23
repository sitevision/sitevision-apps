import type { Object } from "../../lang/Object";
import type { Collection } from "../Collection";
import type { Iterator } from "../Iterator";
import type { ListIterator } from "../ListIterator";
import type { List } from "../List";
import type { AbstractCollection } from "../AbstractCollection";

/**
 * This class provides a skeletal implementation of the {@link List}
 *  interface to minimize the effort required to implement this interface
 *  backed by a "random access" data store (such as an array).  For sequential
 *  access data (such as a linked list), {@link AbstractSequentialList} should
 *  be used in preference to this class.
 *
 *  <p>To implement an unmodifiable list, the programmer needs only to extend
 *  this class and provide implementations for the {@link #get(int)} and
 *  {@link List#size() size()} methods.
 *
 *  <p>To implement a modifiable list, the programmer must additionally
 *  override the {@link #set(int, Object) set(int, E)} method (which otherwise
 *  throws an {@code UnsupportedOperationException}).  If the list is
 *  variable-size the programmer must additionally override the
 *  {@link #add(int, Object) add(int, E)} and {@link #remove(int)} methods.
 *
 *  <p>The programmer should generally provide a void (no argument) and collection
 *  constructor, as per the recommendation in the {@link Collection} interface
 *  specification.
 *
 *  <p>Unlike the other abstract collection implementations, the programmer does
 *  <i>not</i> have to provide an iterator implementation; the iterator and
 *  list iterator are implemented by this class, on top of the "random access"
 *  methods:
 *  {@link #get(int)},
 *  {@link #set(int, Object) set(int, E)},
 *  {@link #add(int, Object) add(int, E)} and
 *  {@link #remove(int)}.
 *
 *  <p>The documentation for each non-abstract method in this class describes its
 *  implementation in detail.  Each of these methods may be overridden if the
 *  collection being implemented admits a more efficient implementation.
 *
 *  <p>This class is a member of the
 *  <a href="{@docRoot}/../technotes/guides/collections/index.html">
 *  Java Collections Framework</a>.
 * @author Josh Bloch
 * @author Neal Gafter
 * @since 1.2
 */
export type AbstractList = AbstractCollection &
  List & {
    /**
     * Appends the specified element to the end of this list (optional
     *  operation).
     *
     *  <p>Lists that support this operation may place limitations on what
     *  elements may be added to this list.  In particular, some
     *  lists will refuse to add null elements, and others will impose
     *  restrictions on the type of elements that may be added.  List
     *  classes should clearly specify in their documentation any restrictions
     *  on what elements may be added.
     *
     *  <p>This implementation calls {@code add(size(), e)}.
     *
     *  <p>Note that this implementation throws an
     *  {@code UnsupportedOperationException} unless
     *  {@link #add(int, Object) add(int, E)} is overridden.
     * @param e element to be appended to this list
     * @return {@code true} (as specified by {@link Collection#add})
     * @throws UnsupportedOperationException if the {@code add} operation&#xA; is not supported by this list
     * @throws ClassCastException if the class of the specified element&#xA; prevents it from being added to this list
     * @throws NullPointerException if the specified element is null and this&#xA; list does not permit null elements
     * @throws IllegalArgumentException if some property of this element&#xA; prevents it from being added to this list
     */
    add(e: unknown): boolean;

    /**
     * {@inheritDoc}
     * @throws IndexOutOfBoundsException {@inheritDoc}
     */
    get(index: number): unknown;

    /**
     * {@inheritDoc}
     *
     *  <p>This implementation always throws an
     *  {@code UnsupportedOperationException}.
     * @throws UnsupportedOperationException {@inheritDoc}
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException {@inheritDoc}
     * @throws IllegalArgumentException {@inheritDoc}
     * @throws IndexOutOfBoundsException {@inheritDoc}
     */
    set(index: number, element: unknown): unknown;

    /**
     * {@inheritDoc}
     *
     *  <p>This implementation always throws an
     *  {@code UnsupportedOperationException}.
     * @throws UnsupportedOperationException {@inheritDoc}
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException {@inheritDoc}
     * @throws IllegalArgumentException {@inheritDoc}
     * @throws IndexOutOfBoundsException {@inheritDoc}
     */
    add(index: number, element: unknown): void;

    /**
     * {@inheritDoc}
     *
     *  <p>This implementation always throws an
     *  {@code UnsupportedOperationException}.
     * @throws UnsupportedOperationException {@inheritDoc}
     * @throws IndexOutOfBoundsException {@inheritDoc}
     */
    remove(index: number): unknown;

    /**
     * {@inheritDoc}
     *
     *  <p>This implementation first gets a list iterator (with
     *  {@code listIterator()}).  Then, it iterates over the list until the
     *  specified element is found or the end of the list is reached.
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException {@inheritDoc}
     */
    indexOf(o: unknown): number;

    /**
     * {@inheritDoc}
     *
     *  <p>This implementation first gets a list iterator that points to the end
     *  of the list (with {@code listIterator(size())}).  Then, it iterates
     *  backwards over the list until the specified element is found, or the
     *  beginning of the list is reached.
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException {@inheritDoc}
     */
    lastIndexOf(o: unknown): number;

    /**
     * Removes all of the elements from this list (optional operation).
     *  The list will be empty after this call returns.
     *
     *  <p>This implementation calls {@code removeRange(0, size())}.
     *
     *  <p>Note that this implementation throws an
     *  {@code UnsupportedOperationException} unless {@code remove(int
     *  index)} or {@code removeRange(int fromIndex, int toIndex)} is
     *  overridden.
     * @throws UnsupportedOperationException if the {@code clear} operation&#xA; is not supported by this list
     */
    clear(): void;

    /**
     * {@inheritDoc}
     *
     *  <p>This implementation gets an iterator over the specified collection
     *  and iterates over it, inserting the elements obtained from the
     *  iterator into this list at the appropriate position, one at a time,
     *  using {@code add(int, E)}.
     *  Many implementations will override this method for efficiency.
     *
     *  <p>Note that this implementation throws an
     *  {@code UnsupportedOperationException} unless
     *  {@link #add(int, Object) add(int, E)} is overridden.
     * @throws UnsupportedOperationException {@inheritDoc}
     * @throws ClassCastException {@inheritDoc}
     * @throws NullPointerException {@inheritDoc}
     * @throws IllegalArgumentException {@inheritDoc}
     * @throws IndexOutOfBoundsException {@inheritDoc}
     */
    addAll(index: number, c: Collection | unknown[]): boolean;

    /**
     * Returns an iterator over the elements in this list in proper sequence.
     *
     *  <p>This implementation returns a straightforward implementation of the
     *  iterator interface, relying on the backing list's {@code size()},
     *  {@code get(int)}, and {@code remove(int)} methods.
     *
     *  <p>Note that the iterator returned by this method will throw an
     *  {@link UnsupportedOperationException} in response to its
     *  {@code remove} method unless the list's {@code remove(int)} method is
     *  overridden.
     *
     *  <p>This implementation can be made to throw runtime exceptions in the
     *  face of concurrent modification, as described in the specification
     *  for the (protected) {@link #modCount} field.
     * @return an iterator over the elements in this list in proper sequence
     */
    iterator(): Iterator;

    /**
     * {@inheritDoc}
     *
     *  <p>This implementation returns {@code listIterator(0)}.
     * @see #listIterator(int)
     */
    listIterator(): ListIterator;

    /**
     * {@inheritDoc}
     *
     *  <p>This implementation returns a straightforward implementation of the
     *  {@code ListIterator} interface that extends the implementation of the
     *  {@code Iterator} interface returned by the {@code iterator()} method.
     *  The {@code ListIterator} implementation relies on the backing list's
     *  {@code get(int)}, {@code set(int, E)}, {@code add(int, E)}
     *  and {@code remove(int)} methods.
     *
     *  <p>Note that the list iterator returned by this implementation will
     *  throw an {@link UnsupportedOperationException} in response to its
     *  {@code remove}, {@code set} and {@code add} methods unless the
     *  list's {@code remove(int)}, {@code set(int, E)}, and
     *  {@code add(int, E)} methods are overridden.
     *
     *  <p>This implementation can be made to throw runtime exceptions in the
     *  face of concurrent modification, as described in the specification for
     *  the (protected) {@link #modCount} field.
     * @throws IndexOutOfBoundsException {@inheritDoc}
     */
    listIterator(index: number): ListIterator;

    /**
     * {@inheritDoc}
     *
     *  <p>This implementation returns a list that subclasses
     *  {@code AbstractList}.  The subclass stores, in private fields, the
     *  offset of the subList within the backing list, the size of the subList
     *  (which can change over its lifetime), and the expected
     *  {@code modCount} value of the backing list.  There are two variants
     *  of the subclass, one of which implements {@code RandomAccess}.
     *  If this list implements {@code RandomAccess} the returned list will
     *  be an instance of the subclass that implements {@code RandomAccess}.
     *
     *  <p>The subclass's {@code set(int, E)}, {@code get(int)},
     *  {@code add(int, E)}, {@code remove(int)}, {@code addAll(int,
     *  Collection)} and {@code removeRange(int, int)} methods all
     *  delegate to the corresponding methods on the backing abstract list,
     *  after bounds-checking the index and adjusting for the offset.  The
     *  {@code addAll(Collection c)} method merely returns {@code addAll(size,
     *  c)}.
     *
     *  <p>The {@code listIterator(int)} method returns a "wrapper object"
     *  over a list iterator on the backing list, which is created with the
     *  corresponding method on the backing list.  The {@code iterator} method
     *  merely returns {@code listIterator()}, and the {@code size} method
     *  merely returns the subclass's {@code size} field.
     *
     *  <p>All methods first check to see if the actual {@code modCount} of
     *  the backing list is equal to its expected value, and throw a
     *  {@code ConcurrentModificationException} if it is not.
     * @throws IndexOutOfBoundsException if an endpoint index value is out of range&#xA; {@code (fromIndex < 0 || toIndex > size)}
     * @throws IllegalArgumentException if the endpoint indices are out of order&#xA; {@code (fromIndex > toIndex)}
     */
    subList(fromIndex: number, toIndex: number): List;

    /**
     * Compares the specified object with this list for equality.  Returns
     *  {@code true} if and only if the specified object is also a list, both
     *  lists have the same size, and all corresponding pairs of elements in
     *  the two lists are <i>equal</i>.  (Two elements {@code e1} and
     *  {@code e2} are <i>equal</i> if {@code (e1==null ? e2==null :
     *  e1.equals(e2))}.)  In other words, two lists are defined to be
     *  equal if they contain the same elements in the same order.<p>
     *
     *  This implementation first checks if the specified object is this
     *  list. If so, it returns {@code true}; if not, it checks if the
     *  specified object is a list. If not, it returns {@code false}; if so,
     *  it iterates over both lists, comparing corresponding pairs of elements.
     *  If any comparison returns {@code false}, this method returns
     *  {@code false}.  If either iterator runs out of elements before the
     *  other it returns {@code false} (as the lists are of unequal length);
     *  otherwise it returns {@code true} when the iterations complete.
     * @param o the object to be compared for equality with this list
     * @return {@code true} if the specified object is equal to this list
     */
    equals(o: unknown): boolean;

    /**
     * Returns the hash code value for this list.
     *
     *  <p>This implementation uses exactly the code that is used to define the
     *  list hash function in the documentation for the {@link List#hashCode}
     *  method.
     * @return the hash code value for this list
     */
    hashCode(): number;

    /**
     * Removes from this list all of the elements whose index is between
     *  {@code fromIndex}, inclusive, and {@code toIndex}, exclusive.
     *  Shifts any succeeding elements to the left (reduces their index).
     *  This call shortens the list by {@code (toIndex - fromIndex)} elements.
     *  (If {@code toIndex==fromIndex}, this operation has no effect.)
     *
     *  <p>This method is called by the {@code clear} operation on this list
     *  and its subLists.  Overriding this method to take advantage of
     *  the internals of the list implementation can <i>substantially</i>
     *  improve the performance of the {@code clear} operation on this list
     *  and its subLists.
     *
     *  <p>This implementation gets a list iterator positioned before
     *  {@code fromIndex}, and repeatedly calls {@code ListIterator.next}
     *  followed by {@code ListIterator.remove} until the entire range has
     *  been removed.  <b>Note: if {@code ListIterator.remove} requires linear
     *  time, this implementation requires quadratic time.</b>
     * @param fromIndex index of first element to be removed
     * @param toIndex index after last element to be removed
     */
    removeRange(fromIndex: number, toIndex: number): void;
  };
