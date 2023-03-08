import type { Iterator } from "../Iterator";

/**
 * A base type for primitive specializations of {@code Iterator}.  Specialized
 *  subtypes are provided for {@link OfInt int}, {@link OfLong long}, and
 *  {@link OfDouble double} values.
 *
 *  <p>The specialized subtype default implementations of {@link Iterator#next}
 *  and {@link Iterator#forEachRemaining(java.util.function.Consumer)} box
 *  primitive values to instances of their corresponding wrapper class.  Such
 *  boxing may offset any advantages gained when using the primitive
 *  specializations.  To avoid boxing, the corresponding primitive-based methods
 *  should be used.  For example, {@link PrimitiveIterator.OfInt#nextInt()} and
 *  {@link PrimitiveIterator.OfInt#forEachRemaining(java.util.function.IntConsumer)}
 *  should be used in preference to {@link PrimitiveIterator.OfInt#next()} and
 *  {@link PrimitiveIterator.OfInt#forEachRemaining(java.util.function.Consumer)}.
 *
 *  <p>Iteration of primitive values using boxing-based methods
 *  {@link Iterator#next next()} and
 *  {@link Iterator#forEachRemaining(java.util.function.Consumer) forEachRemaining()},
 *  does not affect the order in which the values, transformed to boxed values,
 *  are encountered.
 * @implNote If the boolean system property {@code org.openjdk.java.util.stream.tripwire}&#xA; is set to {@code true} then diagnostic warnings are reported if boxing of&#xA; primitive values occur when operating on primitive subtype specializations.
 * @param <T> the type of elements returned by this PrimitiveIterator. The&#xA; type must be a wrapper type for a primitive type, such as&#xA; {@code Integer} for the primitive {@code int} type.
 * @param <T_CONS> the type of primitive consumer. The type must be a&#xA; primitive specialization of {@link java.util.function.Consumer} for&#xA; {@code T}, such as {@link java.util.function.IntConsumer} for&#xA; {@code Integer}.
 * @since 1.8
 */
export type PrimitiveIterator = Iterator & {
  /**
   * Performs the given action for each remaining element, in the order
   *  elements occur when iterating, until all elements have been processed
   *  or the action throws an exception.  Errors or runtime exceptions
   *  thrown by the action are relayed to the caller.
   * @param action The action to be performed for each element
   * @throws NullPointerException if the specified action is null
   */
  forEachRemaining(action: unknown): void;
};
