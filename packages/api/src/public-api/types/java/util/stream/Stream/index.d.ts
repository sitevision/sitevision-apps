import type { Predicate } from "../../function/Predicate";
import type { Function } from "../../function/Function";
import type { ToIntFunction } from "../../function/ToIntFunction";
import type { IntStream } from "../IntStream";
import type { ToLongFunction } from "../../function/ToLongFunction";
import type { LongStream } from "../LongStream";
import type { ToDoubleFunction } from "../../function/ToDoubleFunction";
import type { DoubleStream } from "../DoubleStream";
import type { Comparator } from "../../Comparator";
import type { Consumer } from "../../function/Consumer";

import type { Object } from "../../../lang/Object";
import type { IntFunction } from "../../function/IntFunction";

import type { BinaryOperator } from "../../function/BinaryOperator";
import type { Optional } from "../../Optional";

import type { BiFunction } from "../../function/BiFunction";
import type { Supplier } from "../../function/Supplier";
import type { BiConsumer } from "../../function/BiConsumer";

import type { Collector } from "../Collector";

import type { Builder } from "../Stream.Builder";
import type { UnaryOperator } from "../../function/UnaryOperator";
import type { BaseStream } from "../BaseStream";

/**
 * A sequence of elements supporting sequential and parallel aggregate
 *  operations.  The following example illustrates an aggregate operation using
 *  {@link Stream} and {@link IntStream}:
 *
 *  <pre>{@code
 *      int sum = widgets.stream()
 *                       .filter(w -> w.getColor() == RED)
 *                       .mapToInt(w -> w.getWeight())
 *                       .sum();
 *  }</pre>
 *
 *  In this example, {@code widgets} is a {@code Collection<Widget>}.  We create
 *  a stream of {@code Widget} objects via {@link Collection#stream Collection.stream()},
 *  filter it to produce a stream containing only the red widgets, and then
 *  transform it into a stream of {@code int} values representing the weight of
 *  each red widget. Then this stream is summed to produce a total weight.
 *
 *  <p>In addition to {@code Stream}, which is a stream of object references,
 *  there are primitive specializations for {@link IntStream}, {@link LongStream},
 *  and {@link DoubleStream}, all of which are referred to as "streams" and
 *  conform to the characteristics and restrictions described here.
 *
 *  <p>To perform a computation, stream
 *  <a href="package-summary.html#StreamOps">operations</a> are composed into a
 *  <em>stream pipeline</em>.  A stream pipeline consists of a source (which
 *  might be an array, a collection, a generator function, an I/O channel,
 *  etc), zero or more <em>intermediate operations</em> (which transform a
 *  stream into another stream, such as {@link Stream#filter(Predicate)}), and a
 *  <em>terminal operation</em> (which produces a result or side-effect, such
 *  as {@link Stream#count()} or {@link Stream#forEach(Consumer)}).
 *  Streams are lazy; computation on the source data is only performed when the
 *  terminal operation is initiated, and source elements are consumed only
 *  as needed.
 *
 *  <p>Collections and streams, while bearing some superficial similarities,
 *  have different goals.  Collections are primarily concerned with the efficient
 *  management of, and access to, their elements.  By contrast, streams do not
 *  provide a means to directly access or manipulate their elements, and are
 *  instead concerned with declaratively describing their source and the
 *  computational operations which will be performed in aggregate on that source.
 *  However, if the provided stream operations do not offer the desired
 *  functionality, the {@link #iterator()} and {@link #spliterator()} operations
 *  can be used to perform a controlled traversal.
 *
 *  <p>A stream pipeline, like the "widgets" example above, can be viewed as
 *  a <em>query</em> on the stream source.  Unless the source was explicitly
 *  designed for concurrent modification (such as a {@link ConcurrentHashMap}),
 *  unpredictable or erroneous behavior may result from modifying the stream
 *  source while it is being queried.
 *
 *  <p>Most stream operations accept parameters that describe user-specified
 *  behavior, such as the lambda expression {@code w -> w.getWeight()} passed to
 *  {@code mapToInt} in the example above.  To preserve correct behavior,
 *  these <em>behavioral parameters</em>:
 *  <ul>
 *  <li>must be <a href="package-summary.html#NonInterference">non-interfering</a>
 *  (they do not modify the stream source); and</li>
 *  <li>in most cases must be <a href="package-summary.html#Statelessness">stateless</a>
 *  (their result should not depend on any state that might change during execution
 *  of the stream pipeline).</li>
 *  </ul>
 *
 *  <p>Such parameters are always instances of a
 *  <a href="../function/package-summary.html">functional interface</a> such
 *  as {@link java.util.function.Function}, and are often lambda expressions or
 *  method references.  Unless otherwise specified these parameters must be
 *  <em>non-null</em>.
 *
 *  <p>A stream should be operated on (invoking an intermediate or terminal stream
 *  operation) only once.  This rules out, for example, "forked" streams, where
 *  the same source feeds two or more pipelines, or multiple traversals of the
 *  same stream.  A stream implementation may throw {@link IllegalStateException}
 *  if it detects that the stream is being reused. However, since some stream
 *  operations may return their receiver rather than a new stream object, it may
 *  not be possible to detect reuse in all cases.
 *
 *  <p>Streams have a {@link #close()} method and implement {@link AutoCloseable},
 *  but nearly all stream instances do not actually need to be closed after use.
 *  Generally, only streams whose source is an IO channel (such as those returned
 *  by {@link Files#lines(Path, Charset)}) will require closing.  Most streams
 *  are backed by collections, arrays, or generating functions, which require no
 *  special resource management.  (If a stream does require closing, it can be
 *  declared as a resource in a {@code try}-with-resources statement.)
 *
 *  <p>Stream pipelines may execute either sequentially or in
 *  <a href="package-summary.html#Parallelism">parallel</a>.  This
 *  execution mode is a property of the stream.  Streams are created
 *  with an initial choice of sequential or parallel execution.  (For example,
 *  {@link Collection#stream() Collection.stream()} creates a sequential stream,
 *  and {@link Collection#parallelStream() Collection.parallelStream()} creates
 *  a parallel one.)  This choice of execution mode may be modified by the
 *  {@link #sequential()} or {@link #parallel()} methods, and may be queried with
 *  the {@link #isParallel()} method.
 * @param <T> the type of the stream elements
 * @since 1.8
 * @see IntStream
 * @see LongStream
 * @see DoubleStream
 * @see <a href="package-summary.html">java.util.stream</a>
 */
export type Stream = BaseStream & {
  /**
   * Returns a stream consisting of the elements of this stream that match
   *  the given predicate.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param predicate a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; predicate to apply to each element to determine if it&#xA; should be included
   * @return the new stream
   */
  filter(predicate: Predicate): Stream;

  /**
   * Returns a stream consisting of the results of applying the given
   *  function to the elements of this stream.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param <R> The element type of the new stream
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element
   * @return the new stream
   */
  map(mapper: Function): Stream;

  /**
   * Returns an {@code IntStream} consisting of the results of applying the
   *  given function to the elements of this stream.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">
   *      intermediate operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element
   * @return the new stream
   */
  mapToInt(mapper: ToIntFunction): IntStream;

  /**
   * Returns a {@code LongStream} consisting of the results of applying the
   *  given function to the elements of this stream.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element
   * @return the new stream
   */
  mapToLong(mapper: ToLongFunction): LongStream;

  /**
   * Returns a {@code DoubleStream} consisting of the results of applying the
   *  given function to the elements of this stream.
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element
   * @return the new stream
   */
  mapToDouble(mapper: ToDoubleFunction): DoubleStream;

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
   * @apiNote The {@code flatMap()} operation has the effect of applying a one-to-many&#xA; transformation to the elements of the stream, and then flattening the&#xA; resulting elements into a new stream.&#xA;&#xA; <p><b>Examples.</b>&#xA;&#xA; <p>If {@code orders} is a stream of purchase orders, and each purchase&#xA; order contains a collection of line items, then the following produces a&#xA; stream containing all the line items in all the orders:&#xA; <pre>{@code&#xA; orders.flatMap(order -> order.getLineItems().stream())...&#xA; }</pre>&#xA;&#xA; <p>If {@code path} is the path to a file, then the following produces a&#xA; stream of the {@code words} contained in that file:&#xA; <pre>{@code&#xA; Stream<String> lines = Files.lines(path, StandardCharsets.UTF_8);&#xA; Stream<String> words = lines.flatMap(line -> Stream.of(line.split(" +")));&#xA; }</pre>&#xA; The {@code mapper} function passed to {@code flatMap} splits a line,&#xA; using a simple regular expression, into an array of words, and then&#xA; creates a stream of words from that array.
   * @param <R> The element type of the new stream
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element which produces a stream&#xA; of new values
   * @return the new stream
   */
  flatMap(mapper: Function): Stream;

  /**
   * Returns an {@code IntStream} consisting of the results of replacing each
   *  element of this stream with the contents of a mapped stream produced by
   *  applying the provided mapping function to each element.  Each mapped
   *  stream is {@link java.util.stream.BaseStream#close() closed} after its
   *  contents have been placed into this stream.  (If a mapped stream is
   *  {@code null} an empty stream is used, instead.)
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element which produces a stream&#xA; of new values
   * @return the new stream
   * @see #flatMap(Function)
   */
  flatMapToInt(mapper: Function): IntStream;

  /**
   * Returns an {@code LongStream} consisting of the results of replacing each
   *  element of this stream with the contents of a mapped stream produced by
   *  applying the provided mapping function to each element.  Each mapped
   *  stream is {@link java.util.stream.BaseStream#close() closed} after its
   *  contents have been placed into this stream.  (If a mapped stream is
   *  {@code null} an empty stream is used, instead.)
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element which produces a stream&#xA; of new values
   * @return the new stream
   * @see #flatMap(Function)
   */
  flatMapToLong(mapper: Function): LongStream;

  /**
   * Returns an {@code DoubleStream} consisting of the results of replacing
   *  each element of this stream with the contents of a mapped stream produced
   *  by applying the provided mapping function to each element.  Each mapped
   *  stream is {@link java.util.stream.BaseStream#close() closed} after its
   *  contents have placed been into this stream.  (If a mapped stream is
   *  {@code null} an empty stream is used, instead.)
   *
   *  <p>This is an <a href="package-summary.html#StreamOps">intermediate
   *  operation</a>.
   * @param mapper a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function to apply to each element which produces a stream&#xA; of new values
   * @return the new stream
   * @see #flatMap(Function)
   */
  flatMapToDouble(mapper: Function): DoubleStream;

  /**
   * Returns a stream consisting of the distinct elements (according to
   *  {@link Object#equals(Object)}) of this stream.
   *
   *  <p>For ordered streams, the selection of distinct elements is stable
   *  (for duplicated elements, the element appearing first in the encounter
   *  order is preserved.)  For unordered streams, no stability guarantees
   *  are made.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">stateful
   *  intermediate operation</a>.
   * @apiNote Preserving stability for {@code distinct()} in parallel pipelines is&#xA; relatively expensive (requires that the operation act as a full barrier,&#xA; with substantial buffering overhead), and stability is often not needed.&#xA; Using an unordered stream source (such as {@link #generate(Supplier)})&#xA; or removing the ordering constraint with {@link #unordered()} may result&#xA; in significantly more efficient execution for {@code distinct()} in parallel&#xA; pipelines, if the semantics of your situation permit. If consistency&#xA; with encounter order is required, and you are experiencing poor performance&#xA; or memory utilization with {@code distinct()} in parallel pipelines,&#xA; switching to sequential execution with {@link #sequential()} may improve&#xA; performance.
   * @return the new stream
   */
  distinct(): Stream;

  /**
   * Returns a stream consisting of the elements of this stream, sorted
   *  according to natural order.  If the elements of this stream are not
   *  {@code Comparable}, a {@code java.lang.ClassCastException} may be thrown
   *  when the terminal operation is executed.
   *
   *  <p>For ordered streams, the sort is stable.  For unordered streams, no
   *  stability guarantees are made.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">stateful
   *  intermediate operation</a>.
   * @return the new stream
   */
  sorted(): Stream;

  /**
   * Returns a stream consisting of the elements of this stream, sorted
   *  according to the provided {@code Comparator}.
   *
   *  <p>For ordered streams, the sort is stable.  For unordered streams, no
   *  stability guarantees are made.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">stateful
   *  intermediate operation</a>.
   * @param comparator a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; {@code Comparator} to be used to compare stream elements
   * @return the new stream
   */
  sorted(comparator: Comparator): Stream;

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
   * @apiNote This method exists mainly to support debugging, where you want&#xA; to see the elements as they flow past a certain point in a pipeline:&#xA; <pre>{@code&#xA; Stream.of("one", "two", "three", "four")&#xA; .filter(e -> e.length() > 3)&#xA; .peek(e -> System.out.println("Filtered value: " + e))&#xA; .map(String::toUpperCase)&#xA; .peek(e -> System.out.println("Mapped value: " + e))&#xA; .collect(Collectors.toList());&#xA; }</pre>
   * @param action a <a href="package-summary.html#NonInterference">&#xA; non-interfering</a> action to perform on the elements as&#xA; they are consumed from the stream
   * @return the new stream
   */
  peek(action: Consumer): Stream;

  /**
   * Returns a stream consisting of the elements of this stream, truncated
   *  to be no longer than {@code maxSize} in length.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
   *  stateful intermediate operation</a>.
   * @apiNote While {@code limit()} is generally a cheap operation on sequential&#xA; stream pipelines, it can be quite expensive on ordered parallel pipelines,&#xA; especially for large values of {@code maxSize}, since {@code limit(n)}&#xA; is constrained to return not just any <em>n</em> elements, but the&#xA; <em>first n</em> elements in the encounter order. Using an unordered&#xA; stream source (such as {@link #generate(Supplier)}) or removing the&#xA; ordering constraint with {@link #unordered()} may result in significant&#xA; speedups of {@code limit()} in parallel pipelines, if the semantics of&#xA; your situation permit. If consistency with encounter order is required,&#xA; and you are experiencing poor performance or memory utilization with&#xA; {@code limit()} in parallel pipelines, switching to sequential execution&#xA; with {@link #sequential()} may improve performance.
   * @param maxSize the number of elements the stream should be limited to
   * @return the new stream
   * @throws IllegalArgumentException if {@code maxSize} is negative
   */
  limit(maxSize: number): Stream;

  /**
   * Returns a stream consisting of the remaining elements of this stream
   *  after discarding the first {@code n} elements of the stream.
   *  If this stream contains fewer than {@code n} elements then an
   *  empty stream will be returned.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">stateful
   *  intermediate operation</a>.
   * @apiNote While {@code skip()} is generally a cheap operation on sequential&#xA; stream pipelines, it can be quite expensive on ordered parallel pipelines,&#xA; especially for large values of {@code n}, since {@code skip(n)}&#xA; is constrained to skip not just any <em>n</em> elements, but the&#xA; <em>first n</em> elements in the encounter order. Using an unordered&#xA; stream source (such as {@link #generate(Supplier)}) or removing the&#xA; ordering constraint with {@link #unordered()} may result in significant&#xA; speedups of {@code skip()} in parallel pipelines, if the semantics of&#xA; your situation permit. If consistency with encounter order is required,&#xA; and you are experiencing poor performance or memory utilization with&#xA; {@code skip()} in parallel pipelines, switching to sequential execution&#xA; with {@link #sequential()} may improve performance.
   * @param n the number of leading elements to skip
   * @return the new stream
   * @throws IllegalArgumentException if {@code n} is negative
   */
  skip(n: number): Stream;

  /**
   * Performs an action for each element of this stream.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   *
   *  <p>The behavior of this operation is explicitly nondeterministic.
   *  For parallel stream pipelines, this operation does <em>not</em>
   *  guarantee to respect the encounter order of the stream, as doing so
   *  would sacrifice the benefit of parallelism.  For any given element, the
   *  action may be performed at whatever time and in whatever thread the
   *  library chooses.  If the action accesses shared state, it is
   *  responsible for providing the required synchronization.
   * @param action a <a href="package-summary.html#NonInterference">&#xA; non-interfering</a> action to perform on the elements
   */
  forEach(action: Consumer): void;

  /**
   * Performs an action for each element of this stream, in the encounter
   *  order of the stream if the stream has a defined encounter order.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   *
   *  <p>This operation processes the elements one at a time, in encounter
   *  order if one exists.  Performing the action for one element
   *  <a href="../concurrent/package-summary.html#MemoryVisibility"><i>happens-before</i></a>
   *  performing the action for subsequent elements, but for any given element,
   *  the action may be performed in whatever thread the library chooses.
   * @param action a <a href="package-summary.html#NonInterference">&#xA; non-interfering</a> action to perform on the elements
   * @see #forEach(Consumer)
   */
  forEachOrdered(action: Consumer): void;

  /**
   * Returns an array containing the elements of this stream.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @return an array containing the elements of this stream
   */
  toArray(): unknown;

  /**
   * Returns an array containing the elements of this stream, using the
   *  provided {@code generator} function to allocate the returned array, as
   *  well as any additional arrays that might be required for a partitioned
   *  execution or for resizing.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @apiNote The generator function takes an integer, which is the size of the&#xA; desired array, and produces an array of the desired size. This can be&#xA; concisely expressed with an array constructor reference:&#xA; <pre>{@code&#xA; Person[] men = people.stream()&#xA; .filter(p -> p.getGender() == MALE)&#xA; .toArray(Person[]::new);&#xA; }</pre>
   * @param <A> the element type of the resulting array
   * @param generator a function which produces a new array of the desired&#xA; type and the provided length
   * @return an array containing the elements in this stream
   * @throws ArrayStoreException if the runtime type of the array returned&#xA; from the array generator is not a supertype of the runtime type of every&#xA; element in this stream
   */
  toArray(generator: IntFunction): unknown;

  /**
   * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
   *  elements of this stream, using the provided identity value and an
   *  <a href="package-summary.html#Associativity">associative</a>
   *  accumulation function, and returns the reduced value.  This is equivalent
   *  to:
   *  <pre>{@code
   *      T result = identity;
   *      for (T element : this stream)
   *          result = accumulator.apply(result, element)
   *      return result;
   *  }</pre>
   *
   *  but is not constrained to execute sequentially.
   *
   *  <p>The {@code identity} value must be an identity for the accumulator
   *  function. This means that for all {@code t},
   *  {@code accumulator.apply(identity, t)} is equal to {@code t}.
   *  The {@code accumulator} function must be an
   *  <a href="package-summary.html#Associativity">associative</a> function.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @apiNote Sum, min, max, average, and string concatenation are all special&#xA; cases of reduction. Summing a stream of numbers can be expressed as:&#xA;&#xA; <pre>{@code&#xA; Integer sum = integers.reduce(0, (a, b) -> a+b);&#xA; }</pre>&#xA;&#xA; or:&#xA;&#xA; <pre>{@code&#xA; Integer sum = integers.reduce(0, Integer::sum);&#xA; }</pre>&#xA;&#xA; <p>While this may seem a more roundabout way to perform an aggregation&#xA; compared to simply mutating a running total in a loop, reduction&#xA; operations parallelize more gracefully, without needing additional&#xA; synchronization and with greatly reduced risk of data races.
   * @param identity the identity value for the accumulating function
   * @param accumulator an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for combining two values
   * @return the result of the reduction
   */
  reduce(identity: unknown, accumulator: BinaryOperator): unknown;

  /**
   * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
   *  elements of this stream, using an
   *  <a href="package-summary.html#Associativity">associative</a> accumulation
   *  function, and returns an {@code Optional} describing the reduced value,
   *  if any. This is equivalent to:
   *  <pre>{@code
   *      boolean foundAny = false;
   *      T result = null;
   *      for (T element : this stream) {
   *          if (!foundAny) {
   *              foundAny = true;
   *              result = element;
   *          }
   *          else
   *              result = accumulator.apply(result, element);
   *      }
   *      return foundAny ? Optional.of(result) : Optional.empty();
   *  }</pre>
   *
   *  but is not constrained to execute sequentially.
   *
   *  <p>The {@code accumulator} function must be an
   *  <a href="package-summary.html#Associativity">associative</a> function.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @param accumulator an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for combining two values
   * @return an {@link Optional} describing the result of the reduction
   * @throws NullPointerException if the result of the reduction is null
   * @see #reduce(Object, BinaryOperator)
   * @see #min(Comparator)
   * @see #max(Comparator)
   */
  reduce(accumulator: BinaryOperator): Optional;

  /**
   * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
   *  elements of this stream, using the provided identity, accumulation and
   *  combining functions.  This is equivalent to:
   *  <pre>{@code
   *      U result = identity;
   *      for (T element : this stream)
   *          result = accumulator.apply(result, element)
   *      return result;
   *  }</pre>
   *
   *  but is not constrained to execute sequentially.
   *
   *  <p>The {@code identity} value must be an identity for the combiner
   *  function.  This means that for all {@code u}, {@code combiner(identity, u)}
   *  is equal to {@code u}.  Additionally, the {@code combiner} function
   *  must be compatible with the {@code accumulator} function; for all
   *  {@code u} and {@code t}, the following must hold:
   *  <pre>{@code
   *      combiner.apply(u, accumulator.apply(identity, t)) == accumulator.apply(u, t)
   *  }</pre>
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @apiNote Many reductions using this form can be represented more simply&#xA; by an explicit combination of {@code map} and {@code reduce} operations.&#xA; The {@code accumulator} function acts as a fused mapper and accumulator,&#xA; which can sometimes be more efficient than separate mapping and reduction,&#xA; such as when knowing the previously reduced value allows you to avoid&#xA; some computation.
   * @param <U> The type of the result
   * @param identity the identity value for the combiner function
   * @param accumulator an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for incorporating an additional element into a result
   * @param combiner an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for combining two values, which must be&#xA; compatible with the accumulator function
   * @return the result of the reduction
   * @see #reduce(BinaryOperator)
   * @see #reduce(Object, BinaryOperator)
   */
  reduce(
    identity: unknown,
    accumulator: BiFunction,
    combiner: BinaryOperator
  ): unknown;

  /**
   * Performs a <a href="package-summary.html#MutableReduction">mutable
   *  reduction</a> operation on the elements of this stream.  A mutable
   *  reduction is one in which the reduced value is a mutable result container,
   *  such as an {@code ArrayList}, and elements are incorporated by updating
   *  the state of the result rather than by replacing the result.  This
   *  produces a result equivalent to:
   *  <pre>{@code
   *      R result = supplier.get();
   *      for (T element : this stream)
   *          accumulator.accept(result, element);
   *      return result;
   *  }</pre>
   *
   *  <p>Like {@link #reduce(Object, BinaryOperator)}, {@code collect} operations
   *  can be parallelized without requiring additional synchronization.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @apiNote There are many existing classes in the JDK whose signatures are&#xA; well-suited for use with method references as arguments to {@code collect()}.&#xA; For example, the following will accumulate strings into an {@code ArrayList}:&#xA; <pre>{@code&#xA; List<String> asList = stringStream.collect(ArrayList::new, ArrayList::add,&#xA; ArrayList::addAll);&#xA; }</pre>&#xA;&#xA; <p>The following will take a stream of strings and concatenates them into a&#xA; single string:&#xA; <pre>{@code&#xA; String concat = stringStream.collect(StringBuilder::new, StringBuilder::append,&#xA; StringBuilder::append)&#xA; .toString();&#xA; }</pre>
   * @param <R> type of the result
   * @param supplier a function that creates a new result container. For a&#xA; parallel execution, this function may be called&#xA; multiple times and must return a fresh value each time.
   * @param accumulator an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for incorporating an additional element into a result
   * @param combiner an <a href="package-summary.html#Associativity">associative</a>,&#xA; <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; function for combining two values, which must be&#xA; compatible with the accumulator function
   * @return the result of the reduction
   */
  collect(
    supplier: Supplier,
    accumulator: BiConsumer,
    combiner: BiConsumer
  ): unknown;

  /**
   * Performs a <a href="package-summary.html#MutableReduction">mutable
   *  reduction</a> operation on the elements of this stream using a
   *  {@code Collector}.  A {@code Collector}
   *  encapsulates the functions used as arguments to
   *  {@link #collect(Supplier, BiConsumer, BiConsumer)}, allowing for reuse of
   *  collection strategies and composition of collect operations such as
   *  multiple-level grouping or partitioning.
   *
   *  <p>If the stream is parallel, and the {@code Collector}
   *  is {@link Collector.Characteristics#CONCURRENT concurrent}, and
   *  either the stream is unordered or the collector is
   *  {@link Collector.Characteristics#UNORDERED unordered},
   *  then a concurrent reduction will be performed (see {@link Collector} for
   *  details on concurrent reduction.)
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   *
   *  <p>When executed in parallel, multiple intermediate results may be
   *  instantiated, populated, and merged so as to maintain isolation of
   *  mutable data structures.  Therefore, even when executed in parallel
   *  with non-thread-safe data structures (such as {@code ArrayList}), no
   *  additional synchronization is needed for a parallel reduction.
   * @apiNote The following will accumulate strings into an ArrayList:&#xA; <pre>{@code&#xA; List<String> asList = stringStream.collect(Collectors.toList());&#xA; }</pre>&#xA;&#xA; <p>The following will classify {@code Person} objects by city:&#xA; <pre>{@code&#xA; Map<String, List<Person>> peopleByCity&#xA; = personStream.collect(Collectors.groupingBy(Person::getCity));&#xA; }</pre>&#xA;&#xA; <p>The following will classify {@code Person} objects by state and city,&#xA; cascading two {@code Collector}s together:&#xA; <pre>{@code&#xA; Map<String, Map<String, List<Person>>> peopleByStateAndCity&#xA; = personStream.collect(Collectors.groupingBy(Person::getState,&#xA; Collectors.groupingBy(Person::getCity)));&#xA; }</pre>
   * @param <R> the type of the result
   * @param <A> the intermediate accumulation type of the {@code Collector}
   * @param collector the {@code Collector} describing the reduction
   * @return the result of the reduction
   * @see #collect(Supplier, BiConsumer, BiConsumer)
   * @see Collectors
   */
  collect(collector: Collector): unknown;

  /**
   * Returns the minimum element of this stream according to the provided
   *  {@code Comparator}.  This is a special case of a
   *  <a href="package-summary.html#Reduction">reduction</a>.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal operation</a>.
   * @param comparator a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; {@code Comparator} to compare elements of this stream
   * @return an {@code Optional} describing the minimum element of this stream,&#xA; or an empty {@code Optional} if the stream is empty
   * @throws NullPointerException if the minimum element is null
   */
  min(comparator: Comparator): Optional;

  /**
   * Returns the maximum element of this stream according to the provided
   *  {@code Comparator}.  This is a special case of a
   *  <a href="package-summary.html#Reduction">reduction</a>.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">terminal
   *  operation</a>.
   * @param comparator a <a href="package-summary.html#NonInterference">non-interfering</a>,&#xA; <a href="package-summary.html#Statelessness">stateless</a>&#xA; {@code Comparator} to compare elements of this stream
   * @return an {@code Optional} describing the maximum element of this stream,&#xA; or an empty {@code Optional} if the stream is empty
   * @throws NullPointerException if the maximum element is null
   */
  max(comparator: Comparator): Optional;

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
  anyMatch(predicate: Predicate): boolean;

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
  allMatch(predicate: Predicate): boolean;

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
  noneMatch(predicate: Predicate): boolean;

  /**
   * Returns an {@link Optional} describing the first element of this stream,
   *  or an empty {@code Optional} if the stream is empty.  If the stream has
   *  no encounter order, then any element may be returned.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
   *  terminal operation</a>.
   * @return an {@code Optional} describing the first element of this stream,&#xA; or an empty {@code Optional} if the stream is empty
   * @throws NullPointerException if the element selected is null
   */
  findFirst(): Optional;

  /**
   * Returns an {@link Optional} describing some element of the stream, or an
   *  empty {@code Optional} if the stream is empty.
   *
   *  <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
   *  terminal operation</a>.
   *
   *  <p>The behavior of this operation is explicitly nondeterministic; it is
   *  free to select any element in the stream.  This is to allow for maximal
   *  performance in parallel operations; the cost is that multiple invocations
   *  on the same source may not return the same result.  (If a stable result
   *  is desired, use {@link #findFirst()} instead.)
   * @return an {@code Optional} describing some element of this stream, or an&#xA; empty {@code Optional} if the stream is empty
   * @throws NullPointerException if the element selected is null
   * @see #findFirst()
   */
  findAny(): Optional;

  /**
   * Returns a builder for a {@code Stream}.
   * @param <T> type of elements
   * @return a stream builder
   */
  builder(): Builder;

  /**
   * Returns an empty sequential {@code Stream}.
   * @param <T> the type of stream elements
   * @return an empty sequential stream
   */
  empty(): Stream;

  /**
   * Returns a sequential {@code Stream} containing a single element.
   * @param t the single element
   * @param <T> the type of stream elements
   * @return a singleton sequential stream
   */
  of(t: unknown): Stream;

  /**
   * Returns a sequential ordered stream whose elements are the specified values.
   * @param <T> the type of stream elements
   * @param values the elements of the new stream
   * @return the new stream
   */
  of(values: unknown[]): Stream;

  /**
   * Returns an infinite sequential ordered {@code Stream} produced by iterative
   *  application of a function {@code f} to an initial element {@code seed},
   *  producing a {@code Stream} consisting of {@code seed}, {@code f(seed)},
   *  {@code f(f(seed))}, etc.
   *
   *  <p>The first element (position {@code 0}) in the {@code Stream} will be
   *  the provided {@code seed}.  For {@code n > 0}, the element at position
   *  {@code n}, will be the result of applying the function {@code f} to the
   *  element at position {@code n - 1}.
   * @param <T> the type of stream elements
   * @param seed the initial element
   * @param f a function to be applied to the previous element to produce&#xA; a new element
   * @return a new sequential {@code Stream}
   */
  iterate(seed: unknown, f: UnaryOperator): Stream;

  /**
   * Returns an infinite sequential unordered stream where each element is
   *  generated by the provided {@code Supplier}.  This is suitable for
   *  generating constant streams, streams of random elements, etc.
   * @param <T> the type of stream elements
   * @param s the {@code Supplier} of generated elements
   * @return a new infinite sequential unordered {@code Stream}
   */
  generate(s: Supplier): Stream;

  /**
   * Creates a lazily concatenated stream whose elements are all the
   *  elements of the first stream followed by all the elements of the
   *  second stream.  The resulting stream is ordered if both
   *  of the input streams are ordered, and parallel if either of the input
   *  streams is parallel.  When the resulting stream is closed, the close
   *  handlers for both input streams are invoked.
   * @implNote Use caution when constructing streams from repeated concatenation.&#xA; Accessing an element of a deeply concatenated stream can result in deep&#xA; call chains, or even {@code StackOverflowException}.
   * @param <T> The type of stream elements
   * @param a the first stream
   * @param b the second stream
   * @return the concatenation of the two input streams
   */
  concat(a: Stream, b: Stream): Stream;
};
