import type { DoubleConsumer } from "../function/DoubleConsumer";

import type { Consumer } from "../function/Consumer";
import type { OfPrimitive } from "../Spliterator.OfPrimitive";

/**
 * A Spliterator specialized for {@code double} values.
 * @since 1.8
 */
export type OfDouble = OfPrimitive & {
  trySplit(): OfDouble;

  tryAdvance(action: DoubleConsumer): boolean;

  forEachRemaining(action: DoubleConsumer): void;

  /**
   * {@inheritDoc}
   * @implSpec If the action is an instance of {@code DoubleConsumer} then it is&#xA; cast to {@code DoubleConsumer} and passed to&#xA; {@link #tryAdvance(java.util.function.DoubleConsumer)}; otherwise&#xA; the action is adapted to an instance of {@code DoubleConsumer}, by&#xA; boxing the argument of {@code DoubleConsumer}, and then passed to&#xA; {@link #tryAdvance(java.util.function.DoubleConsumer)}.
   */
  tryAdvance(action: Consumer): boolean;

  /**
   * {@inheritDoc}
   * @implSpec If the action is an instance of {@code DoubleConsumer} then it is&#xA; cast to {@code DoubleConsumer} and passed to&#xA; {@link #forEachRemaining(java.util.function.DoubleConsumer)};&#xA; otherwise the action is adapted to an instance of&#xA; {@code DoubleConsumer}, by boxing the argument of&#xA; {@code DoubleConsumer}, and then passed to&#xA; {@link #forEachRemaining(java.util.function.DoubleConsumer)}.
   */
  forEachRemaining(action: Consumer): void;
};
