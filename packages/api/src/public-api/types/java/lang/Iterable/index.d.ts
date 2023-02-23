import type { Iterator } from "../../util/Iterator";
import type { Consumer } from "../../util/function/Consumer";

import type { Spliterator } from "../../util/Spliterator";

/**
 * Implementing this interface allows an object to be the target of
 *  the "for-each loop" statement. See
 *  <strong>
 *  <a href="{@docRoot}/../technotes/guides/language/foreach.html">For-each Loop</a>
 *  </strong>
 * @param <T> the type of elements returned by the iterator
 * @since 1.5
 * @jls 14.14.2 The enhanced for statement
 */
export type Iterable = {
  /**
   * Returns an iterator over elements of type {@code T}.
   * @return an Iterator.
   */
  iterator(): Iterator;

  /**
   * Performs the given action for each element of the {@code Iterable}
   *  until all elements have been processed or the action throws an
   *  exception.  Unless otherwise specified by the implementing class,
   *  actions are performed in the order of iteration (if an iteration order
   *  is specified).  Exceptions thrown by the action are relayed to the
   *  caller.
   * @implSpec <p>The default implementation behaves as if:&#xA; <pre>{@code&#xA; for (T t : this)&#xA; action.accept(t);&#xA; }</pre>
   * @param action The action to be performed for each element
   * @throws NullPointerException if the specified action is null
   * @since 1.8
   */
  forEach(action: Consumer): void;

  /**
   * Creates a {@link Spliterator} over the elements described by this
   *  {@code Iterable}.
   * @implSpec The default implementation creates an&#xA; <em><a href="Spliterator.html#binding">early-binding</a></em>&#xA; spliterator from the iterable's {@code Iterator}. The spliterator&#xA; inherits the <em>fail-fast</em> properties of the iterable's iterator.
   * @implNote The default implementation should usually be overridden. The&#xA; spliterator returned by the default implementation has poor splitting&#xA; capabilities, is unsized, and does not report any spliterator&#xA; characteristics. Implementing classes can nearly always provide a&#xA; better implementation.
   * @return a {@code Spliterator} over the elements described by this&#xA; {@code Iterable}.
   * @since 1.8
   */
  spliterator(): Spliterator;
};
