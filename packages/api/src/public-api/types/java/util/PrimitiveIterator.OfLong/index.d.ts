import type { LongConsumer } from "../function/LongConsumer";

import type { Long } from "../../lang/Long";
import type { Consumer } from "../function/Consumer";
import type { PrimitiveIterator } from "../PrimitiveIterator";

/**
 * An Iterator specialized for {@code long} values.
 * @since 1.8
 */
export type OfLong = PrimitiveIterator & {
  /**
   * Returns the next {@code long} element in the iteration.
   * @return the next {@code long} element in the iteration
   * @throws NoSuchElementException if the iteration has no more elements
   */
  nextLong(): number;

  /**
   * Performs the given action for each remaining element until all elements
   *  have been processed or the action throws an exception.  Actions are
   *  performed in the order of iteration, if that order is specified.
   *  Exceptions thrown by the action are relayed to the caller.
   * @implSpec <p>The default implementation behaves as if:&#xA; <pre>{@code&#xA; while (hasNext())&#xA; action.accept(nextLong());&#xA; }</pre>
   * @param action The action to be performed for each element
   * @throws NullPointerException if the specified action is null
   */
  forEachRemaining(action: LongConsumer): void;

  /**
   * {@inheritDoc}
   * @implSpec The default implementation boxes the result of calling&#xA; {@link #nextLong()}, and returns that boxed result.
   */
  next(): number;

  /**
   * {@inheritDoc}
   * @implSpec If the action is an instance of {@code LongConsumer} then it is cast&#xA; to {@code LongConsumer} and passed to {@link #forEachRemaining};&#xA; otherwise the action is adapted to an instance of&#xA; {@code LongConsumer}, by boxing the argument of {@code LongConsumer},&#xA; and then passed to {@link #forEachRemaining}.
   */
  forEachRemaining(action: Consumer): void;
};
