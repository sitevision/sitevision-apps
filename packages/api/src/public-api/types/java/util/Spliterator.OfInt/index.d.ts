import type { IntConsumer } from "../function/IntConsumer";

import type { Consumer } from "../function/Consumer";
import type { OfPrimitive } from "../Spliterator.OfPrimitive";

/**
 * A Spliterator specialized for {@code int} values.
 * @since 1.8
 */
export type OfInt = OfPrimitive & {
  trySplit(): OfInt;

  tryAdvance(action: IntConsumer): boolean;

  forEachRemaining(action: IntConsumer): void;

  /**
   * {@inheritDoc}
   * @implSpec If the action is an instance of {@code IntConsumer} then it is cast&#xA; to {@code IntConsumer} and passed to&#xA; {@link #tryAdvance(java.util.function.IntConsumer)}; otherwise&#xA; the action is adapted to an instance of {@code IntConsumer}, by&#xA; boxing the argument of {@code IntConsumer}, and then passed to&#xA; {@link #tryAdvance(java.util.function.IntConsumer)}.
   */
  tryAdvance(action: Consumer): boolean;

  /**
   * {@inheritDoc}
   * @implSpec If the action is an instance of {@code IntConsumer} then it is cast&#xA; to {@code IntConsumer} and passed to&#xA; {@link #forEachRemaining(java.util.function.IntConsumer)}; otherwise&#xA; the action is adapted to an instance of {@code IntConsumer}, by&#xA; boxing the argument of {@code IntConsumer}, and then passed to&#xA; {@link #forEachRemaining(java.util.function.IntConsumer)}.
   */
  forEachRemaining(action: Consumer): void;
};
