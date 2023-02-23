import type { LongConsumer } from "../function/LongConsumer";

import type { Consumer } from "../function/Consumer";
import type { OfPrimitive } from "../Spliterator.OfPrimitive";

/**
 * A Spliterator specialized for {@code long} values.
 * @since 1.8
 */
export type OfLong = OfPrimitive & {
  trySplit(): OfLong;

  tryAdvance(action: LongConsumer): boolean;

  forEachRemaining(action: LongConsumer): void;

  /**
   * {@inheritDoc}
   * @implSpec If the action is an instance of {@code LongConsumer} then it is cast&#xA; to {@code LongConsumer} and passed to&#xA; {@link #tryAdvance(java.util.function.LongConsumer)}; otherwise&#xA; the action is adapted to an instance of {@code LongConsumer}, by&#xA; boxing the argument of {@code LongConsumer}, and then passed to&#xA; {@link #tryAdvance(java.util.function.LongConsumer)}.
   */
  tryAdvance(action: Consumer): boolean;

  /**
   * {@inheritDoc}
   * @implSpec If the action is an instance of {@code LongConsumer} then it is cast&#xA; to {@code LongConsumer} and passed to&#xA; {@link #forEachRemaining(java.util.function.LongConsumer)}; otherwise&#xA; the action is adapted to an instance of {@code LongConsumer}, by&#xA; boxing the argument of {@code LongConsumer}, and then passed to&#xA; {@link #forEachRemaining(java.util.function.LongConsumer)}.
   */
  forEachRemaining(action: Consumer): void;
};
