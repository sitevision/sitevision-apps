import type { DoubleStream } from "../DoubleStream";
import type { DoubleConsumer } from "../../function/DoubleConsumer";

/**
 * A mutable builder for a {@code DoubleStream}.
 *
 *  <p>A stream builder has a lifecycle, which starts in a building
 *  phase, during which elements can be added, and then transitions to a built
 *  phase, after which elements may not be added.  The built phase
 *  begins when the {@link #build()} method is called, which creates an
 *  ordered stream whose elements are the elements that were added to the
 *  stream builder, in the order they were added.
 * @see DoubleStream#builder()
 * @since 1.8
 */
export type Builder = DoubleConsumer & {
  /**
   * Adds an element to the stream being built.
   * @throws IllegalStateException if the builder has already transitioned&#xA; to the built state
   */
  accept(t: number): void;

  /**
   * Adds an element to the stream being built.
   * @implSpec The default implementation behaves as if:&#xA; <pre>{@code&#xA; accept(t)&#xA; return this;&#xA; }</pre>
   * @param t the element to add
   * @return {@code this} builder
   * @throws IllegalStateException if the builder has already transitioned&#xA; to the built state
   */
  add(t: number): Builder;

  /**
   * Builds the stream, transitioning this builder to the built state.
   *  An {@code IllegalStateException} is thrown if there are further
   *  attempts to operate on the builder after it has entered the built
   *  state.
   * @return the built stream
   * @throws IllegalStateException if the builder has already transitioned&#xA; to the built state
   */
  build(): DoubleStream;
};
