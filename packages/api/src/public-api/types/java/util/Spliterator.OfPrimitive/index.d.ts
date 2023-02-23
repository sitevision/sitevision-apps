import type { Spliterator } from "../Spliterator";

/**
 * A Spliterator specialized for primitive values.
 * @param <T> the type of elements returned by this Spliterator. The&#xA; type must be a wrapper type for a primitive type, such as {@code Integer}&#xA; for the primitive {@code int} type.
 * @param <T_CONS> the type of primitive consumer. The type must be a&#xA; primitive specialization of {@link java.util.function.Consumer} for&#xA; {@code T}, such as {@link java.util.function.IntConsumer} for&#xA; {@code Integer}.
 * @param <T_SPLITR> the type of primitive Spliterator. The type must be&#xA; a primitive specialization of Spliterator for {@code T}, such as&#xA; {@link Spliterator.OfInt} for {@code Integer}.
 * @see Spliterator.OfInt
 * @see Spliterator.OfLong
 * @see Spliterator.OfDouble
 * @since 1.8
 */
export type OfPrimitive = Spliterator & {
  trySplit(): unknown;

  /**
   * If a remaining element exists, performs the given action on it,
   *  returning {@code true}; else returns {@code false}.  If this
   *  Spliterator is {@link #ORDERED} the action is performed on the
   *  next element in encounter order.  Exceptions thrown by the
   *  action are relayed to the caller.
   * @param action The action
   * @return {@code false} if no remaining elements existed&#xA; upon entry to this method, else {@code true}.
   * @throws NullPointerException if the specified action is null
   */
  tryAdvance(action: unknown): boolean;

  /**
   * Performs the given action for each remaining element, sequentially in
   *  the current thread, until all elements have been processed or the
   *  action throws an exception.  If this Spliterator is {@link #ORDERED},
   *  actions are performed in encounter order.  Exceptions thrown by the
   *  action are relayed to the caller.
   * @implSpec The default implementation repeatedly invokes {@link #tryAdvance}&#xA; until it returns {@code false}. It should be overridden whenever&#xA; possible.
   * @param action The action
   * @throws NullPointerException if the specified action is null
   */
  forEachRemaining(action: unknown): void;
};
