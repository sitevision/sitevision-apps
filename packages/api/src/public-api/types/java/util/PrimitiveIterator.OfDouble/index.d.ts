import type { DoubleConsumer } from "../function/DoubleConsumer";

import type { Double } from "../../lang/Double";
import type { Consumer } from "../function/Consumer";
import type { PrimitiveIterator } from "../PrimitiveIterator";

/**
 * An Iterator specialized for {@code double} values.
 * @since 1.8
 */
export type OfDouble = PrimitiveIterator & {
  /**
   * Returns the next {@code double} element in the iteration.
   * @return the next {@code double} element in the iteration
   * @throws NoSuchElementException if the iteration has no more elements
   */
  nextDouble(): number;

  /**
   * Performs the given action for each remaining element until all elements
   *  have been processed or the action throws an exception.  Actions are
   *  performed in the order of iteration, if that order is specified.
   *  Exceptions thrown by the action are relayed to the caller.
   * @implSpec <p>The default implementation behaves as if:&#xA; <pre>{@code&#xA; while (hasNext())&#xA; action.accept(nextDouble());&#xA; }</pre>
   * @param action The action to be performed for each element
   * @throws NullPointerException if the specified action is null
   */
  forEachRemaining(action: DoubleConsumer): void;

  /**
   * {@inheritDoc}
   * @implSpec The default implementation boxes the result of calling&#xA; {@link #nextDouble()}, and returns that boxed result.
   */
  next(): number;

  /**
   * {@inheritDoc}
   * @implSpec If the action is an instance of {@code DoubleConsumer} then it is&#xA; cast to {@code DoubleConsumer} and passed to&#xA; {@link #forEachRemaining}; otherwise the action is adapted to&#xA; an instance of {@code DoubleConsumer}, by boxing the argument of&#xA; {@code DoubleConsumer}, and then passed to&#xA; {@link #forEachRemaining}.
   */
  forEachRemaining(action: Consumer): void;
};
