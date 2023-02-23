import type { Object } from "../../lang/Object";

import type { Iterator } from "../Iterator";
import type { Queue } from "../Queue";

/**
 * A linear collection that supports element insertion and removal at
 *  both ends.  The name <i>deque</i> is short for "double ended queue"
 *  and is usually pronounced "deck".  Most {@code Deque}
 *  implementations place no fixed limits on the number of elements
 *  they may contain, but this interface supports capacity-restricted
 *  deques as well as those with no fixed size limit.
 *
 *  <p>This interface defines methods to access the elements at both
 *  ends of the deque.  Methods are provided to insert, remove, and
 *  examine the element.  Each of these methods exists in two forms:
 *  one throws an exception if the operation fails, the other returns a
 *  special value (either {@code null} or {@code false}, depending on
 *  the operation).  The latter form of the insert operation is
 *  designed specifically for use with capacity-restricted
 *  {@code Deque} implementations; in most implementations, insert
 *  operations cannot fail.
 *
 *  <p>The twelve methods described above are summarized in the
 *  following table:
 *
 *  <table BORDER CELLPADDING=3 CELLSPACING=1>
 *  <caption>Summary of Deque methods</caption>
 *   <tr>
 *     <td></td>
 *     <td ALIGN=CENTER COLSPAN = 2> <b>First Element (Head)</b></td>
 *     <td ALIGN=CENTER COLSPAN = 2> <b>Last Element (Tail)</b></td>
 *   </tr>
 *   <tr>
 *     <td></td>
 *     <td ALIGN=CENTER><em>Throws exception</em></td>
 *     <td ALIGN=CENTER><em>Special value</em></td>
 *     <td ALIGN=CENTER><em>Throws exception</em></td>
 *     <td ALIGN=CENTER><em>Special value</em></td>
 *   </tr>
 *   <tr>
 *     <td><b>Insert</b></td>
 *     <td>{@link Deque#addFirst addFirst(e)}</td>
 *     <td>{@link Deque#offerFirst offerFirst(e)}</td>
 *     <td>{@link Deque#addLast addLast(e)}</td>
 *     <td>{@link Deque#offerLast offerLast(e)}</td>
 *   </tr>
 *   <tr>
 *     <td><b>Remove</b></td>
 *     <td>{@link Deque#removeFirst removeFirst()}</td>
 *     <td>{@link Deque#pollFirst pollFirst()}</td>
 *     <td>{@link Deque#removeLast removeLast()}</td>
 *     <td>{@link Deque#pollLast pollLast()}</td>
 *   </tr>
 *   <tr>
 *     <td><b>Examine</b></td>
 *     <td>{@link Deque#getFirst getFirst()}</td>
 *     <td>{@link Deque#peekFirst peekFirst()}</td>
 *     <td>{@link Deque#getLast getLast()}</td>
 *     <td>{@link Deque#peekLast peekLast()}</td>
 *   </tr>
 *  </table>
 *
 *  <p>This interface extends the {@link Queue} interface.  When a deque is
 *  used as a queue, FIFO (First-In-First-Out) behavior results.  Elements are
 *  added at the end of the deque and removed from the beginning.  The methods
 *  inherited from the {@code Queue} interface are precisely equivalent to
 *  {@code Deque} methods as indicated in the following table:
 *
 *  <table BORDER CELLPADDING=3 CELLSPACING=1>
 *  <caption>Comparison of Queue and Deque methods</caption>
 *   <tr>
 *     <td ALIGN=CENTER> <b>{@code Queue} Method</b></td>
 *     <td ALIGN=CENTER> <b>Equivalent {@code Deque} Method</b></td>
 *   </tr>
 *   <tr>
 *     <td>{@link java.util.Queue#add add(e)}</td>
 *     <td>{@link #addLast addLast(e)}</td>
 *   </tr>
 *   <tr>
 *     <td>{@link java.util.Queue#offer offer(e)}</td>
 *     <td>{@link #offerLast offerLast(e)}</td>
 *   </tr>
 *   <tr>
 *     <td>{@link java.util.Queue#remove remove()}</td>
 *     <td>{@link #removeFirst removeFirst()}</td>
 *   </tr>
 *   <tr>
 *     <td>{@link java.util.Queue#poll poll()}</td>
 *     <td>{@link #pollFirst pollFirst()}</td>
 *   </tr>
 *   <tr>
 *     <td>{@link java.util.Queue#element element()}</td>
 *     <td>{@link #getFirst getFirst()}</td>
 *   </tr>
 *   <tr>
 *     <td>{@link java.util.Queue#peek peek()}</td>
 *     <td>{@link #peek peekFirst()}</td>
 *   </tr>
 *  </table>
 *
 *  <p>Deques can also be used as LIFO (Last-In-First-Out) stacks.  This
 *  interface should be used in preference to the legacy {@link Stack} class.
 *  When a deque is used as a stack, elements are pushed and popped from the
 *  beginning of the deque.  Stack methods are precisely equivalent to
 *  {@code Deque} methods as indicated in the table below:
 *
 *  <table BORDER CELLPADDING=3 CELLSPACING=1>
 *  <caption>Comparison of Stack and Deque methods</caption>
 *   <tr>
 *     <td ALIGN=CENTER> <b>Stack Method</b></td>
 *     <td ALIGN=CENTER> <b>Equivalent {@code Deque} Method</b></td>
 *   </tr>
 *   <tr>
 *     <td>{@link #push push(e)}</td>
 *     <td>{@link #addFirst addFirst(e)}</td>
 *   </tr>
 *   <tr>
 *     <td>{@link #pop pop()}</td>
 *     <td>{@link #removeFirst removeFirst()}</td>
 *   </tr>
 *   <tr>
 *     <td>{@link #peek peek()}</td>
 *     <td>{@link #peekFirst peekFirst()}</td>
 *   </tr>
 *  </table>
 *
 *  <p>Note that the {@link #peek peek} method works equally well when
 *  a deque is used as a queue or a stack; in either case, elements are
 *  drawn from the beginning of the deque.
 *
 *  <p>This interface provides two methods to remove interior
 *  elements, {@link #removeFirstOccurrence removeFirstOccurrence} and
 *  {@link #removeLastOccurrence removeLastOccurrence}.
 *
 *  <p>Unlike the {@link List} interface, this interface does not
 *  provide support for indexed access to elements.
 *
 *  <p>While {@code Deque} implementations are not strictly required
 *  to prohibit the insertion of null elements, they are strongly
 *  encouraged to do so.  Users of any {@code Deque} implementations
 *  that do allow null elements are strongly encouraged <i>not</i> to
 *  take advantage of the ability to insert nulls.  This is so because
 *  {@code null} is used as a special return value by various methods
 *  to indicated that the deque is empty.
 *
 *  <p>{@code Deque} implementations generally do not define
 *  element-based versions of the {@code equals} and {@code hashCode}
 *  methods, but instead inherit the identity-based versions from class
 *  {@code Object}.
 *
 *  <p>This interface is a member of the <a
 *  href="{@docRoot}/../technotes/guides/collections/index.html"> Java Collections
 *  Framework</a>.
 * @author Doug Lea
 * @author Josh Bloch
 * @since 1.6
 * @param <E> the type of elements held in this collection
 */
export type Deque = Queue & {
  /**
   * Inserts the specified element at the front of this deque if it is
   *  possible to do so immediately without violating capacity restrictions,
   *  throwing an {@code IllegalStateException} if no space is currently
   *  available.  When using a capacity-restricted deque, it is generally
   *  preferable to use method {@link #offerFirst}.
   * @param e the element to add
   * @throws IllegalStateException if the element cannot be added at this&#xA; time due to capacity restrictions
   * @throws ClassCastException if the class of the specified element&#xA; prevents it from being added to this deque
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements
   * @throws IllegalArgumentException if some property of the specified&#xA; element prevents it from being added to this deque
   */
  addFirst(e: unknown): void;

  /**
   * Inserts the specified element at the end of this deque if it is
   *  possible to do so immediately without violating capacity restrictions,
   *  throwing an {@code IllegalStateException} if no space is currently
   *  available.  When using a capacity-restricted deque, it is generally
   *  preferable to use method {@link #offerLast}.
   *
   *  <p>This method is equivalent to {@link #add}.
   * @param e the element to add
   * @throws IllegalStateException if the element cannot be added at this&#xA; time due to capacity restrictions
   * @throws ClassCastException if the class of the specified element&#xA; prevents it from being added to this deque
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements
   * @throws IllegalArgumentException if some property of the specified&#xA; element prevents it from being added to this deque
   */
  addLast(e: unknown): void;

  /**
   * Inserts the specified element at the front of this deque unless it would
   *  violate capacity restrictions.  When using a capacity-restricted deque,
   *  this method is generally preferable to the {@link #addFirst} method,
   *  which can fail to insert an element only by throwing an exception.
   * @param e the element to add
   * @return {@code true} if the element was added to this deque, else&#xA; {@code false}
   * @throws ClassCastException if the class of the specified element&#xA; prevents it from being added to this deque
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements
   * @throws IllegalArgumentException if some property of the specified&#xA; element prevents it from being added to this deque
   */
  offerFirst(e: unknown): boolean;

  /**
   * Inserts the specified element at the end of this deque unless it would
   *  violate capacity restrictions.  When using a capacity-restricted deque,
   *  this method is generally preferable to the {@link #addLast} method,
   *  which can fail to insert an element only by throwing an exception.
   * @param e the element to add
   * @return {@code true} if the element was added to this deque, else&#xA; {@code false}
   * @throws ClassCastException if the class of the specified element&#xA; prevents it from being added to this deque
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements
   * @throws IllegalArgumentException if some property of the specified&#xA; element prevents it from being added to this deque
   */
  offerLast(e: unknown): boolean;

  /**
   * Retrieves and removes the first element of this deque.  This method
   *  differs from {@link #pollFirst pollFirst} only in that it throws an
   *  exception if this deque is empty.
   * @return the head of this deque
   * @throws NoSuchElementException if this deque is empty
   */
  removeFirst(): unknown;

  /**
   * Retrieves and removes the last element of this deque.  This method
   *  differs from {@link #pollLast pollLast} only in that it throws an
   *  exception if this deque is empty.
   * @return the tail of this deque
   * @throws NoSuchElementException if this deque is empty
   */
  removeLast(): unknown;

  /**
   * Retrieves and removes the first element of this deque,
   *  or returns {@code null} if this deque is empty.
   * @return the head of this deque, or {@code null} if this deque is empty
   */
  pollFirst(): unknown;

  /**
   * Retrieves and removes the last element of this deque,
   *  or returns {@code null} if this deque is empty.
   * @return the tail of this deque, or {@code null} if this deque is empty
   */
  pollLast(): unknown;

  /**
   * Retrieves, but does not remove, the first element of this deque.
   *
   *  This method differs from {@link #peekFirst peekFirst} only in that it
   *  throws an exception if this deque is empty.
   * @return the head of this deque
   * @throws NoSuchElementException if this deque is empty
   */
  getFirst(): unknown;

  /**
   * Retrieves, but does not remove, the last element of this deque.
   *  This method differs from {@link #peekLast peekLast} only in that it
   *  throws an exception if this deque is empty.
   * @return the tail of this deque
   * @throws NoSuchElementException if this deque is empty
   */
  getLast(): unknown;

  /**
   * Retrieves, but does not remove, the first element of this deque,
   *  or returns {@code null} if this deque is empty.
   * @return the head of this deque, or {@code null} if this deque is empty
   */
  peekFirst(): unknown;

  /**
   * Retrieves, but does not remove, the last element of this deque,
   *  or returns {@code null} if this deque is empty.
   * @return the tail of this deque, or {@code null} if this deque is empty
   */
  peekLast(): unknown;

  /**
   * Removes the first occurrence of the specified element from this deque.
   *  If the deque does not contain the element, it is unchanged.
   *  More formally, removes the first element {@code e} such that
   *  <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>
   *  (if such an element exists).
   *  Returns {@code true} if this deque contained the specified element
   *  (or equivalently, if this deque changed as a result of the call).
   * @param o element to be removed from this deque, if present
   * @return {@code true} if an element was removed as a result of this call
   * @throws ClassCastException if the class of the specified element&#xA; is incompatible with this deque&#xA; (<a href="Collection.html#optional-restrictions">optional</a>)
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements&#xA; (<a href="Collection.html#optional-restrictions">optional</a>)
   */
  removeFirstOccurrence(o: unknown): boolean;

  /**
   * Removes the last occurrence of the specified element from this deque.
   *  If the deque does not contain the element, it is unchanged.
   *  More formally, removes the last element {@code e} such that
   *  <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>
   *  (if such an element exists).
   *  Returns {@code true} if this deque contained the specified element
   *  (or equivalently, if this deque changed as a result of the call).
   * @param o element to be removed from this deque, if present
   * @return {@code true} if an element was removed as a result of this call
   * @throws ClassCastException if the class of the specified element&#xA; is incompatible with this deque&#xA; (<a href="Collection.html#optional-restrictions">optional</a>)
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements&#xA; (<a href="Collection.html#optional-restrictions">optional</a>)
   */
  removeLastOccurrence(o: unknown): boolean;

  /**
   * Inserts the specified element into the queue represented by this deque
   *  (in other words, at the tail of this deque) if it is possible to do so
   *  immediately without violating capacity restrictions, returning
   *  {@code true} upon success and throwing an
   *  {@code IllegalStateException} if no space is currently available.
   *  When using a capacity-restricted deque, it is generally preferable to
   *  use {@link #offer(Object) offer}.
   *
   *  <p>This method is equivalent to {@link #addLast}.
   * @param e the element to add
   * @return {@code true} (as specified by {@link Collection#add})
   * @throws IllegalStateException if the element cannot be added at this&#xA; time due to capacity restrictions
   * @throws ClassCastException if the class of the specified element&#xA; prevents it from being added to this deque
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements
   * @throws IllegalArgumentException if some property of the specified&#xA; element prevents it from being added to this deque
   */
  add(e: unknown): boolean;

  /**
   * Inserts the specified element into the queue represented by this deque
   *  (in other words, at the tail of this deque) if it is possible to do so
   *  immediately without violating capacity restrictions, returning
   *  {@code true} upon success and {@code false} if no space is currently
   *  available.  When using a capacity-restricted deque, this method is
   *  generally preferable to the {@link #add} method, which can fail to
   *  insert an element only by throwing an exception.
   *
   *  <p>This method is equivalent to {@link #offerLast}.
   * @param e the element to add
   * @return {@code true} if the element was added to this deque, else&#xA; {@code false}
   * @throws ClassCastException if the class of the specified element&#xA; prevents it from being added to this deque
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements
   * @throws IllegalArgumentException if some property of the specified&#xA; element prevents it from being added to this deque
   */
  offer(e: unknown): boolean;

  /**
   * Retrieves and removes the head of the queue represented by this deque
   *  (in other words, the first element of this deque).
   *  This method differs from {@link #poll poll} only in that it throws an
   *  exception if this deque is empty.
   *
   *  <p>This method is equivalent to {@link #removeFirst()}.
   * @return the head of the queue represented by this deque
   * @throws NoSuchElementException if this deque is empty
   */
  remove(): unknown;

  /**
   * Retrieves and removes the head of the queue represented by this deque
   *  (in other words, the first element of this deque), or returns
   *  {@code null} if this deque is empty.
   *
   *  <p>This method is equivalent to {@link #pollFirst()}.
   * @return the first element of this deque, or {@code null} if&#xA; this deque is empty
   */
  poll(): unknown;

  /**
   * Retrieves, but does not remove, the head of the queue represented by
   *  this deque (in other words, the first element of this deque).
   *  This method differs from {@link #peek peek} only in that it throws an
   *  exception if this deque is empty.
   *
   *  <p>This method is equivalent to {@link #getFirst()}.
   * @return the head of the queue represented by this deque
   * @throws NoSuchElementException if this deque is empty
   */
  element(): unknown;

  /**
   * Retrieves, but does not remove, the head of the queue represented by
   *  this deque (in other words, the first element of this deque), or
   *  returns {@code null} if this deque is empty.
   *
   *  <p>This method is equivalent to {@link #peekFirst()}.
   * @return the head of the queue represented by this deque, or&#xA; {@code null} if this deque is empty
   */
  peek(): unknown;

  /**
   * Pushes an element onto the stack represented by this deque (in other
   *  words, at the head of this deque) if it is possible to do so
   *  immediately without violating capacity restrictions, throwing an
   *  {@code IllegalStateException} if no space is currently available.
   *
   *  <p>This method is equivalent to {@link #addFirst}.
   * @param e the element to push
   * @throws IllegalStateException if the element cannot be added at this&#xA; time due to capacity restrictions
   * @throws ClassCastException if the class of the specified element&#xA; prevents it from being added to this deque
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements
   * @throws IllegalArgumentException if some property of the specified&#xA; element prevents it from being added to this deque
   */
  push(e: unknown): void;

  /**
   * Pops an element from the stack represented by this deque.  In other
   *  words, removes and returns the first element of this deque.
   *
   *  <p>This method is equivalent to {@link #removeFirst()}.
   * @return the element at the front of this deque (which is the top&#xA; of the stack represented by this deque)
   * @throws NoSuchElementException if this deque is empty
   */
  pop(): unknown;

  /**
   * Removes the first occurrence of the specified element from this deque.
   *  If the deque does not contain the element, it is unchanged.
   *  More formally, removes the first element {@code e} such that
   *  <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>
   *  (if such an element exists).
   *  Returns {@code true} if this deque contained the specified element
   *  (or equivalently, if this deque changed as a result of the call).
   *
   *  <p>This method is equivalent to {@link #removeFirstOccurrence(Object)}.
   * @param o element to be removed from this deque, if present
   * @return {@code true} if an element was removed as a result of this call
   * @throws ClassCastException if the class of the specified element&#xA; is incompatible with this deque&#xA; (<a href="Collection.html#optional-restrictions">optional</a>)
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements&#xA; (<a href="Collection.html#optional-restrictions">optional</a>)
   */
  remove(o: unknown): boolean;

  /**
   * Returns {@code true} if this deque contains the specified element.
   *  More formally, returns {@code true} if and only if this deque contains
   *  at least one element {@code e} such that
   *  <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
   * @param o element whose presence in this deque is to be tested
   * @return {@code true} if this deque contains the specified element
   * @throws ClassCastException if the type of the specified element&#xA; is incompatible with this deque&#xA; (<a href="Collection.html#optional-restrictions">optional</a>)
   * @throws NullPointerException if the specified element is null and this&#xA; deque does not permit null elements&#xA; (<a href="Collection.html#optional-restrictions">optional</a>)
   */
  contains(o: unknown): boolean;

  /**
   * Returns the number of elements in this deque.
   * @return the number of elements in this deque
   */
  size(): number;

  /**
   * Returns an iterator over the elements in this deque in proper sequence.
   *  The elements will be returned in order from first (head) to last (tail).
   * @return an iterator over the elements in this deque in proper sequence
   */
  iterator(): Iterator;

  /**
   * Returns an iterator over the elements in this deque in reverse
   *  sequential order.  The elements will be returned in order from
   *  last (tail) to first (head).
   * @return an iterator over the elements in this deque in reverse&#xA; sequence
   */
  descendingIterator(): Iterator;
};
