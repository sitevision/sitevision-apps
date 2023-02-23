import type { ExceptionSuppressingProxy } from "../ExceptionSuppressingProxy";

import type { Iterator } from "../../../../../../java/util/Iterator";

/**
 * Decorates an iterator with exception suppressing behaviour and returns {@link ExceptionSuppressingProxy}s in order to ensure that no
 *  invocation will throw an exception.
 *
 *  <p>
 *     This iterator is of type <code>ExceptionSuppressingProxy</code> that is an implementation of a <em>Dynamic proxy</em> so not all
 *     methods can be directly invoked on objects retrieved by the <code>next</code> method. See {@link ExceptionSuppressingCollection}
 *     for an example of how this iterator can be used easily from Velocity and how to invoke methods not declared in an interface.
 *     See {@link ExceptionSuppressingProxy} for more information about dynamic proxies.
 *  </p>
 *  <p>
 *  <strong>Important note! </strong>This interface is intended to be used <em>only</em> in contexts where exceptions thrown during iteration will
 *  cause <em>serious</em> trouble if they arise and the context doesn't provide proper exception handling (e.g. when executing a Velocity template).
 *  Suppressing exceptions is generally a bad idea and using this iterator will affect performance.
 *  Hence, this interface should only be used where the upsides with suppressing exceptions far outweighs the downsides.
 *  This interface should be used only as a temporary patch/solution until the "real" problem causing the exception has been solved.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained directly via
 *     {@link senselogic.sitevision.api.Utils#getExceptionSuppressingIterator(java.util.Iterator)}
 *     or indirectly via {@link senselogic.sitevision.api.Utils#getExceptionSuppressingCollection(java.util.Collection)}.
 *     You would typically use the latter if you should iterate a collection with the Velocity #foreach loop.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.6.1_09
 */
export type ExceptionSuppressingIterator = Iterator & {
  /**
   * Returns <code>true</code> if decorated iterator has more elements. (In other words, returns <code>true</code>
   *  if <code>next</code> would return an element rather than throwing an exception.)
   *
   *  <p>
   *  This method will never throw an exception
   *  </p>
   * @return <code>true</code> if the decorated iterator has more elements, <code>false</code> if not or if an exception is thrown&#xA; by the decorated iterator
   */
  hasNext(): boolean;

  /**
   * Returns a proxy for the next element of the decorated iterator. Calling this method repeatedly until the {@link #hasNext()} method
   *  returns <code>false</code> will return each element in the underlying collection exactly once.
   *
   *  <p>
   *     <strong>Note!</strong> The returned element will be embedded in an <code>ExceptionSuppressingProxy</code> that will be reused for
   *     <em>all</em> next() invocations on this iterator. In other words, the proxied item of the returned element will change,
   *     but never the returned element itself. This implies that you shouldn't keep references to an item retrieved from a next()
   *     invocation during iteration. If you do, don't be surprised if the element contains something else than it did when you set the reference...
   *  </p>
   *
   *  <p>
   *  This method will never throw an exception.
   *  </p>
   *  <p>
   *     <strong>Note! </strong>Be aware of <code>null</code> items since they're never proxied. If the underlying collection contains a
   *     <code>null</code> item, this iterator will just return <code>null</code>, not a proxy. In other words: even though this method
   *     won't throw any exceptions, invoking a method on the returned object might throw a <code>NullPointerException</code>.
   *  </p>
   * @return the next element, or <code>null</code> if an exception is thrown.
   */
  next(): ExceptionSuppressingProxy;

  /**
 * Tries to remove from the underlying collection the last element returned by decorated iterator (optional operation).
 *  This method can be called only once per call to <code>next</code>. The behavior of an iterator is unspecified if
 *  the underlying collection is modified while the iteration is in progress in any way other than by calling this method.
 * 
 *  <p>
 *  This method will never throw an exception.
 *  </p>
 *  <p>
 *  <strong>Note!</strong> Since exceptions are suppressed, you can never tell if the remove operation actually succeeded
 *  or if the underlying collection doesn't support removal (i.e. <code>UnsupportedOperationException</code> thrown by the
 *  decorated iterator is catched by this iterator).
 *  </p>
  
    */
  remove(): void;
};
