import type { DoublePredicate } from "../../function/DoublePredicate";
import type { DoubleUnaryOperator } from "../../function/DoubleUnaryOperator";
import type { DoubleFunction } from "../../function/DoubleFunction";
import type { Stream } from "../Stream";
import type { DoubleToIntFunction } from "../../function/DoubleToIntFunction";
import type { IntStream } from "../IntStream";
import type { DoubleToLongFunction } from "../../function/DoubleToLongFunction";
import type { LongStream } from "../LongStream";
import type { DoubleConsumer } from "../../function/DoubleConsumer";

import type { DoubleBinaryOperator } from "../../function/DoubleBinaryOperator";
import type { OptionalDouble } from "../../OptionalDouble";
import type { Supplier } from "../../function/Supplier";
import type { ObjDoubleConsumer } from "../../function/ObjDoubleConsumer";
import type { BiConsumer } from "../../function/BiConsumer";

import type { DoubleSummaryStatistics } from "../../DoubleSummaryStatistics";

import type { OfDouble } from "../../PrimitiveIterator.OfDouble";
import type { OfDouble as OfDouble_1 } from "../../Spliterator.OfDouble";
import type { Builder } from "../DoubleStream.Builder";
import type { DoubleSupplier } from "../../function/DoubleSupplier";
import type { BaseStream } from "../BaseStream";

/**
 * A sequence of primitive double-valued elements supporting sequential and parallel
 *  aggregate operations.  This is the {@code double} primitive specialization of
 *  {@link Stream}.
 *
 *  <p>The following example illustrates an aggregate operation using
 *  {@link Stream} and {@link DoubleStream}, computing the sum of the weights of the
 *  red widgets:
 *
 *  <pre>{@code
 *      double sum = widgets.stream()
 *                          .filter(w -> w.getColor() == RED)
 *                          .mapToDouble(w -> w.getWeight())
 *                          .sum();
 *  }</pre>
 *
 *  See the class documentation for {@link Stream} and the package documentation
 *  for <a href="package-summary.html">java.util.stream</a> for additional
 *  specification of streams, stream operations, stream pipelines, and
 *  parallelism.
 * @since 1.8
 * @see Stream
 * @see <a href="package-summary.html">java.util.stream</a>
 */
export type DoubleStream = BaseStream & {
  /**
   * Returns a stream consisting of the elements of this stream that match
   *  the given predicate.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param predicate a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; predicate to apply to each element to determine if it&#xA; should be included
   * @return the new stream
   */
  filter(predicate: DoublePredicate): DoubleStream;

  /**
   * Returns a stream consisting of the results of applying the given
   *  function to the elements of this stream.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element
   * @return the new stream
   */
  map(mapper: DoubleUnaryOperator): DoubleStream;

  /**
   * Returns an object-valued {@code Stream} consisting of the results of
   *  applying the given function to the elements of this stream.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">
   *      intermediate operation</a>.
   * @param <U> the element type of the new stream
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element
   * @return the new stream
   */
  mapToObj(mapper: DoubleFunction): Stream;

  /**
   * Returns an {@code IntStream} consisting of the results of applying the
   *  given function to the elements of this stream.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element
   * @return the new stream
   */
  mapToInt(mapper: DoubleToIntFunction): IntStream;

  /**
   * Returns a {@code LongStream} consisting of the results of applying the
   *  given function to the elements of this stream.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element
   * @return the new stream
   */
  mapToLong(mapper: DoubleToLongFunction): LongStream;

  /**
   * Returns a stream consisting of the results of replacing each element of
   *  this stream with the contents of a mapped stream produced by applying
   *  the provided mapping function to each element.  Each mapped stream is
   *  {@link java.util.stream.BaseStream#close() closed} after its contents
   *  have been placed into this stream.  (If a mapped stream is {@code null}
   *  an empty stream is used, instead.)
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element which produces a&#xA; {@code DoubleStream} of new values
   * @return the new stream
   * @see Stream#flatMap(Function)
   */
  flatMap(mapper: DoubleFunction): DoubleStream;

  /**
   * Returns a stream consisting of the distinct elements of this stream. The
   *  elements are compared for equality according to
   *  {@link java.lang.Double#compare(double, double)}.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">stateful
   *  intermediate operation</a>.
   * @return the result stream
   */
  distinct(): DoubleStream;

  /**
   * Returns a stream consisting of the elements of this stream in sorted
   *  order. The elements are compared for equality according to
   *  {@link java.lang.Double#compare(double, double)}.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">stateful
   *  intermediate operation</a>.
   * @return the result stream
   */
  sorted(): DoubleStream;

  /**
   * Returns a stream consisting of the elements of this stream, additionally
   *  performing the provided action on each element as elements are consumed
   *  from the resulting stream.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   *
   *  <p>For parallel stream pipelines, the action may be called at
   *  whatever time and in whatever thread the element is made available by the
   *  upstream operation.  If the action modifies shared state,
   *  it is responsible for providing the required synchronization.
   * @apiNote This method exists mainly to support debugging, where you want&#xA; to see the elements as they flow past a certain point in a pipeline:&#xA; <pre>{@code&#xA; DoubleStream.of(1, 2, 3, 4)&#xA; .filter(e -> e > 2)&#xA; .peek(e -> System.out.println("Filtered value: " + e))&#xA; .map(e -> e * e)&#xA; .peek(e -> System.out.println("Mapped value: " + e))&#xA; .sum();&#xA; }</pre>
   * @param action a <a href="package-summary.html#NonInterference">&#xA; non-interfering</a> action to perform on the elements as&#xA; they are consumed from the stream
   * @return the new stream
   */
  peek(action: DoubleConsumer): DoubleStream;

  /**
   * Returns a stream consisting of the elements of this stream, truncated
   *  to be no longer than {@code maxSize} in length.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
   *  stateful intermediate operation</a>.
   * @apiNote While {@code limit()} is generally a cheap operation on sequential&#xA; stream pipelines, it can be quite expensive on ordered parallel pipelines,&#xA; especially for large values of {@code maxSize}, since {@code limit(n)}&#xA; is constrained to return not just any <em>n</em> elements, but the&#xA; <em>first n</em> elements in the encounter order. Using an unordered&#xA; stream source (such as {@link #generate(DoubleSupplier)}) or removing the&#xA; ordering constraint with {@link #unordered()} may result in significant&#xA; speedups of {@code limit()} in parallel pipelines, if the semantics of&#xA; your situation permit. If consistency with encounter order is required,&#xA; and you are experiencing poor performance or memory utilization with&#xA; {@code limit()} in parallel pipelines, switching to sequential execution&#xA; with {@link #sequential()} may improve performance.
   * @param maxSize the number of elements the stream should be limited to
   * @return the new stream
   * @throws IllegalArgumentException if {@code maxSize} is negative
   */
  limit(maxSize: number): DoubleStream;

  /**
   * Returns a stream consisting of the remaining elements of this stream
   *  after discarding the first {@code n} elements of the stream.
   *  If this stream contains fewer than {@code n} elements then an
   *  empty stream will be returned.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">stateful
   *  intermediate operation</a>.
   * @apiNote While {@code skip()} is generally a cheap operation on sequential&#xA; stream pipelines, it can be quite expensive on ordered parallel pipelines,&#xA; especially for large values of {@code n}, since {@code skip(n)}&#xA; is constrained to skip not just any <em>n</em> elements, but the&#xA; <em>first n</em> elements in the encounter order. Using an unordered&#xA; stream source (such as {@link #generate(DoubleSupplier)}) or removing the&#xA; ordering constraint with {@link #unordered()} may result in significant&#xA; speedups of {@code skip()} in parallel pipelines, if the semantics of&#xA; your situation permit. If consistency with encounter order is required,&#xA; and you are experiencing poor performance or memory utilization with&#xA; {@code skip()} in parallel pipelines, switching to sequential execution&#xA; with {@link #sequential()} may improve performance.
   * @param n the number of leading elements to skip
   * @return the new stream
   * @throws IllegalArgumentException if {@code n} is negative
   */
  skip(n: number): DoubleStream;

  /**
   * Performs an action for each element of this stream.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   *
   *  <p>For parallel stream pipelines, this operation does <em>not</em>
   *  guarantee to respect the encounter order of the stream, as doing so
   *  would sacrifice the benefit of parallelism.  For any given element, the
   *  action may be performed at whatever time and in whatever thread the
   *  library chooses.  If the action accesses shared state, it is
   *  responsible for providing the required synchronization.
   * @param action a <a href="package-summary.html#NonInterference">&#xA; non-interfering</a> action to perform on the elements
   */
  forEach(action: DoubleConsumer): void;

  /**
   * Performs an action for each element of this stream, guaranteeing that
   *  each element is processed in encounter order for streams that have a
   *  defined encounter order.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @param action a <a href="package-summary.html#NonInterference">&#xA; non-interfering</a> action to perform on the elements
   * @see #forEach(DoubleConsumer)
   */
  forEachOrdered(action: DoubleConsumer): void;

  /**
   * Returns an array containing the elements of this stream.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @return an array containing the elements of this stream
   */
  toArray(): number;

  /**
   * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
   *  elements of this stream, using the provided identity value and an
   *  <a href="package-summary.html#Associativity">associative</a>
   *  accumulation function, and returns the reduced value.  This is equivalent
   *  to:
   *  <pre>{@code
   *      double result = identity;
   *      for (double element : this stream)
   *          result = accumulator.applyAsDouble(result, element)
   *      return result;
   *  }</pre>
   *
   *  but is not constrained to execute sequentially.
   *
   *  <p>The {@code identity} value must be an identity for the accumulator
   *  function. This means that for all {@code x},
   *  {@code accumulator.apply(identity, x)} is equal to {@code x}.
   *  The {@code accumulator} function must be an
   *  <a href="package-summary.html#Associativity">associative</a> function.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @apiNote Sum, min, max, and average are all special cases of reduction.&#xA; Summing a stream of numbers can be expressed as:&#xA;&#xA; <pre>{@code&#xA; double sum = numbers.reduce(0, (a, b) -> a+b);&#xA; }</pre>&#xA;&#xA; or more compactly:&#xA;&#xA; <pre>{@code&#xA; double sum = numbers.reduce(0, Double::sum);&#xA; }</pre>&#xA;&#xA; <p>While this may seem a more roundabout way to perform an aggregation&#xA; compared to simply mutating a running total in a loop, reduction&#xA; operations parallelize more gracefully, without needing additional&#xA; synchronization and with greatly reduced risk of data races.
   * @param identity the identity value for the accumulating function
   * @param op an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for combining two values
   * @return the result of the reduction
   * @see #sum()
   * @see #min()
   * @see #max()
   * @see #average()
   */
  reduce(identity: number, op: DoubleBinaryOperator): number;

  /**
   * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
   *  elements of this stream, using an
   *  <a href="package-summary.html#Associativity">associative</a> accumulation
   *  function, and returns an {@code OptionalDouble} describing the reduced
   *  value, if any. This is equivalent to:
   *  <pre>{@code
   *      boolean foundAny = false;
   *      double result = null;
   *      for (double element : this stream) {
   *          if (!foundAny) {
   *              foundAny = true;
   *              result = element;
   *          }
   *          else
   *              result = accumulator.applyAsDouble(result, element);
   *      }
   *      return foundAny ? OptionalDouble.of(result) : OptionalDouble.empty();
   *  }</pre>
   *
   *  but is not constrained to execute sequentially.
   *
   *  <p>The {@code accumulator} function must be an
   *  <a href="package-summary.html#Associativity">associative</a> function.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @param op an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for combining two values
   * @return the result of the reduction
   * @see #reduce(double, DoubleBinaryOperator)
   */
  reduce(op: DoubleBinaryOperator): OptionalDouble;

  /**
   * Performs a <a href="package-summary.html#MutableReduction">mutable
   *  reduction</a> operation on the elements of this stream.  A mutable
   *  reduction is one in which the reduced value is a mutable result container,
   *  such as an {@code ArrayList}, and elements are incorporated by updating
   *  the state of the result rather than by replacing the result.  This
   *  produces a result equivalent to:
   *  <pre>{@code
   *      R result = supplier.get();
   *      for (double element : this stream)
   *          accumulator.accept(result, element);
   *      return result;
   *  }</pre>
   *
   *  <p>Like {@link #reduce(double, DoubleBinaryOperator)}, {@code collect}
   *  operations can be parallelized without requiring additional
   *  synchronization.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @param <R> type of the result
   * @param supplier a function that creates a new result container. For a&#xA; parallel execution, this function may be called&#xA; multiple times and must return a fresh value each time.
   * @param accumulator an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for incorporating an additional element into a result
   * @param combiner an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for combining two values, which must be&#xA; compatible with the accumulator function
   * @return the result of the reduction
   * @see Stream#collect(Supplier, BiConsumer, BiConsumer)
   */
  collect(
    supplier: Supplier,
    accumulator: ObjDoubleConsumer,
    combiner: BiConsumer
  ): unknown;

  /**
   * Returns the sum of elements in this stream.
   *
   *  Summation is a special case of a <a
   *  href="package-summary.html#Reduction">reduction</a>. If
   *  floating-point summation were exact, this method would be
   *  equivalent to:
   *
   *  <pre>{@code
   *      return reduce(0, Double::sum);
   *  }</pre>
   *
   *  However, since floating-point summation is not exact, the above
   *  code is not necessarily equivalent to the summation computation
   *  done by this method.
   *
   *  <p>If any stream element is a NaN or the sum is at any point a NaN
   *  then the sum will be NaN.
   *
   *  The value of a floating-point sum is a function both
   *  of the input values as well as the order of addition
   *  operations. The order of addition operations of this method is
   *  intentionally not defined to allow for implementation
   *  flexibility to improve the speed and accuracy of the computed
   *  result.
   *
   *  In particular, this method may be implemented using compensated
   *  summation or other technique to reduce the error bound in the
   *  numerical sum compared to a simple summation of {@code double}
   *  values.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @apiNote Elements sorted by increasing absolute magnitude tend&#xA; to yield more accurate results.
   * @return the sum of elements in this stream
   */
  sum(): number;

  /**
   * Returns an {@code OptionalDouble} describing the minimum element of this
   *  stream, or an empty OptionalDouble if this stream is empty.  The minimum
   *  element will be {@code Double.NaN} if any stream element was NaN. Unlike
   *  the numerical comparison operators, this method considers negative zero
   *  to be strictly smaller than positive zero. This is a special case of a
   *  <a href="package-summary.html#Reduction">reduction</a> and is
   *  equivalent to:
   *  <pre>{@code
   *      return reduce(Double::min);
   *  }</pre>
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @return an {@code OptionalDouble} containing the minimum element of this&#xA; stream, or an empty optional if the stream is empty
   */
  min(): OptionalDouble;

  /**
   * Returns an {@code OptionalDouble} describing the maximum element of this
   *  stream, or an empty OptionalDouble if this stream is empty.  The maximum
   *  element will be {@code Double.NaN} if any stream element was NaN. Unlike
   *  the numerical comparison operators, this method considers negative zero
   *  to be strictly smaller than positive zero. This is a
   *  special case of a
   *  <a href="package-summary.html#Reduction">reduction</a> and is
   *  equivalent to:
   *  <pre>{@code
   *      return reduce(Double::max);
   *  }</pre>
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @return an {@code OptionalDouble} containing the maximum element of this&#xA; stream, or an empty optional if the stream is empty
   */
  max(): OptionalDouble;

  /**
   * Returns the count of elements in this stream.  This is a special case of
   *  a <a href="package-summary.html#Reduction">reduction</a> and is
   *  equivalent to:
   *  <pre>{@code
   *      return mapToLong(e -> 1L).sum();
   *  }</pre>
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal operation</a>.
   * @return the count of elements in this stream
   */
  count(): number;

  /**
   * Returns an {@code OptionalDouble} describing the arithmetic
   *  mean of elements of this stream, or an empty optional if this
   *  stream is empty.
   *
   *  If any recorded value is a NaN or the sum is at any point a NaN
   *  then the average will be NaN.
   *
   *  <p>The average returned can vary depending upon the order in
   *  which values are recorded.
   *
   *  This method may be implemented using compensated summation or
   *  other technique to reduce the error bound in the {@link #sum
   *  numerical sum} used to compute the average.
   *
   *   <p>The average is a special case of a <a
   *   href="package-summary.html#Reduction">reduction</a>.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @apiNote Elements sorted by increasing absolute magnitude tend&#xA; to yield more accurate results.
   * @return an {@code OptionalDouble} containing the average element of this&#xA; stream, or an empty optional if the stream is empty
   */
  average(): OptionalDouble;

  /**
   * Returns a {@code DoubleSummaryStatistics} describing various summary data
   *  about the elements of this stream.  This is a special
   *  case of a <a href="package-summary.html#Reduction">reduction</a>.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @return a {@code DoubleSummaryStatistics} describing various summary data&#xA; about the elements of this stream
   */
  summaryStatistics(): DoubleSummaryStatistics;

  /**
   * Returns whether any elements of this stream match the provided
   *  predicate.  May not evaluate the predicate on all elements if not
   *  necessary for determining the result.  If the stream is empty then
   *  {@code false} is returned and the predicate is not evaluated.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
   *  terminal operation</a>.
   * @apiNote This method evaluates the <em>existential quantification</em> of the&#xA; predicate over the elements of the stream (for some x P(x)).
   * @param predicate a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; predicate to apply to elements of this stream
   * @return {@code true} if any elements of the stream match the provided&#xA; predicate, otherwise {@code false}
   */
  anyMatch(predicate: DoublePredicate): boolean;

  /**
   * Returns whether all elements of this stream match the provided predicate.
   *  May not evaluate the predicate on all elements if not necessary for
   *  determining the result.  If the stream is empty then {@code true} is
   *  returned and the predicate is not evaluated.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
   *  terminal operation</a>.
   * @apiNote This method evaluates the <em>universal quantification</em> of the&#xA; predicate over the elements of the stream (for all x P(x)). If the&#xA; stream is empty, the quantification is said to be <em>vacuously&#xA; satisfied</em> and is always {@code true} (regardless of P(x)).
   * @param predicate a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; predicate to apply to elements of this stream
   * @return {@code true} if either all elements of the stream match the&#xA; provided predicate or the stream is empty, otherwise {@code false}
   */
  allMatch(predicate: DoublePredicate): boolean;

  /**
   * Returns whether no elements of this stream match the provided predicate.
   *  May not evaluate the predicate on all elements if not necessary for
   *  determining the result.  If the stream is empty then {@code true} is
   *  returned and the predicate is not evaluated.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
   *  terminal operation</a>.
   * @apiNote This method evaluates the <em>universal quantification</em> of the&#xA; negated predicate over the elements of the stream (for all x ~P(x)). If&#xA; the stream is empty, the quantification is said to be vacuously satisfied&#xA; and is always {@code true}, regardless of P(x).
   * @param predicate a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; predicate to apply to elements of this stream
   * @return {@code true} if either no elements of the stream match the&#xA; provided predicate or the stream is empty, otherwise {@code false}
   */
  noneMatch(predicate: DoublePredicate): boolean;

  /**
   * Returns an {@link OptionalDouble} describing the first element of this
   *  stream, or an empty {@code OptionalDouble} if the stream is empty.  If
   *  the stream has no encounter order, then any element may be returned.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
   *  terminal operation</a>.
   * @return an {@code OptionalDouble} describing the first element of this&#xA; stream, or an empty {@code OptionalDouble} if the stream is empty
   */
  findFirst(): OptionalDouble;

  /**
   * Returns an {@link OptionalDouble} describing some element of the stream,
   *  or an empty {@code OptionalDouble} if the stream is empty.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
   *  terminal operation</a>.
   *
   *  <p>The behavior of this operation is explicitly nondeterministic; it is
   *  free to select any element in the stream.  This is to allow for maximal
   *  performance in parallel operations; the cost is that multiple invocations
   *  on the same source may not return the same result.  (If a stable result
   *  is desired, use {@link #findFirst()} instead.)
   * @return an {@code OptionalDouble} describing some element of this stream,&#xA; or an empty {@code OptionalDouble} if the stream is empty
   * @see #findFirst()
   */
  findAny(): OptionalDouble;

  /**
   * Returns a {@code Stream} consisting of the elements of this stream,
   *  boxed to {@code Double}.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @return a {@code Stream} consistent of the elements of this stream,&#xA; each boxed to a {@code Double}
   */
  boxed(): Stream;

  sequential(): DoubleStream;

  parallel(): DoubleStream;

  iterator(): OfDouble;

  spliterator(): OfDouble_1;

  /**
   * Returns a builder for a {@code DoubleStream}.
   * @return a stream builder
   */
  builder(): Builder;

  /**
   * Returns an empty sequential {@code DoubleStream}.
   * @return an empty sequential stream
   */
  empty(): DoubleStream;

  /**
   * Returns a sequential {@code DoubleStream} containing a single element.
   * @param t the single element
   * @return a singleton sequential stream
   */
  of(t: number): DoubleStream;

  /**
   * Returns a sequential ordered stream whose elements are the specified values.
   * @param values the elements of the new stream
   * @return the new stream
   */
  of(values: number[]): DoubleStream;

  /**
   * Returns an infinite sequential ordered {@code DoubleStream} produced by iterative
   *  application of a function {@code f} to an initial element {@code seed},
   *  producing a {@code Stream} consisting of {@code seed}, {@code f(seed)},
   *  {@code f(f(seed))}, etc.
   *
   *  <p>The first element (position {@code 0}) in the {@code DoubleStream}
   *  will be the provided {@code seed}.  For {@code n > 0}, the element at
   *  position {@code n}, will be the result of applying the function {@code f}
   *   to the element at position {@code n - 1}.
   * @param seed the initial element
   * @param f a function to be applied to the previous element to produce&#xA; a new element
   * @return a new sequential {@code DoubleStream}
   */
  iterate(seed: number, f: DoubleUnaryOperator): DoubleStream;

  /**
   * Returns an infinite sequential unordered stream where each element is
   *  generated by the provided {@code DoubleSupplier}.  This is suitable for
   *  generating constant streams, streams of random elements, etc.
   * @param s the {@code DoubleSupplier} for generated elements
   * @return a new infinite sequential unordered {@code DoubleStream}
   */
  generate(s: DoubleSupplier): DoubleStream;

  /**
   * Creates a lazily concatenated stream whose elements are all the
   *  elements of the first stream followed by all the elements of the
   *  second stream.  The resulting stream is ordered if both
   *  of the input streams are ordered, and parallel if either of the input
   *  streams is parallel.  When the resulting stream is closed, the close
   *  handlers for both input streams are invoked.
   * @implNote Use caution when constructing streams from repeated concatenation.&#xA; Accessing an element of a deeply concatenated stream can result in deep&#xA; call chains, or even {@code StackOverflowException}.
   * @param a the first stream
   * @param b the second stream
   * @return the concatenation of the two input streams
   */
  concat(a: DoubleStream, b: DoubleStream): DoubleStream;
};
