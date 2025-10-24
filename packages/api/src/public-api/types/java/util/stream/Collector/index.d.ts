/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Supplier } from "../../function/Supplier";
import type { BiConsumer } from "../../function/BiConsumer";
import type { BinaryOperator } from "../../function/BinaryOperator";
import type { Function } from "../../function/Function";
import type { Set } from "../../Set";
import type { Characteristics } from "../Collector.Characteristics";

/**
 * A <a href="package-summary.html#Reduction">mutable reduction operation</a> that
 *  accumulates input elements into a mutable result container, optionally transforming
 *  the accumulated result into a final representation after all input elements
 *  have been processed.  Reduction operations can be performed either sequentially
 *  or in parallel.
 *
 *  <p>Examples of mutable reduction operations include:
 *  accumulating elements into a {@code Collection}; concatenating
 *  strings using a {@code StringBuilder}; computing summary information about
 *  elements such as sum, min, max, or average; computing "pivot table" summaries
 *  such as "maximum valued transaction by seller", etc.  The class {@link Collectors}
 *  provides implementations of many common mutable reductions.
 *
 *  <p>A {@code Collector} is specified by four functions that work together to
 *  accumulate entries into a mutable result container, and optionally perform
 *  a final transform on the result.  They are: <ul>
 *      <li>creation of a new result container ({@link #supplier()})</li>
 *      <li>incorporating a new data element into a result container ({@link #accumulator()})</li>
 *      <li>combining two result containers into one ({@link #combiner()})</li>
 *      <li>performing an optional final transform on the container ({@link #finisher()})</li>
 *  </ul>
 *
 *  <p>Collectors also have a set of characteristics, such as
 *  {@link Characteristics#CONCURRENT}, that provide hints that can be used by a
 *  reduction implementation to provide better performance.
 *
 *  <p>A sequential implementation of a reduction using a collector would
 *  create a single result container using the supplier function, and invoke the
 *  accumulator function once for each input element.  A parallel implementation
 *  would partition the input, create a result container for each partition,
 *  accumulate the contents of each partition into a subresult for that partition,
 *  and then use the combiner function to merge the subresults into a combined
 *  result.
 *
 *  <p>To ensure that sequential and parallel executions produce equivalent
 *  results, the collector functions must satisfy an <em>identity</em> and an
 *  <a href="package-summary.html#Associativity">associativity</a> constraints.
 *
 *  <p>The identity constraint says that for any partially accumulated result,
 *  combining it with an empty result container must produce an equivalent
 *  result.  That is, for a partially accumulated result {@code a} that is the
 *  result of any series of accumulator and combiner invocations, {@code a} must
 *  be equivalent to {@code combiner.apply(a, supplier.get())}.
 *
 *  <p>The associativity constraint says that splitting the computation must
 *  produce an equivalent result.  That is, for any input elements {@code t1}
 *  and {@code t2}, the results {@code r1} and {@code r2} in the computation
 *  below must be equivalent:
 *  <pre>{@code
 *      A a1 = supplier.get();
 *      accumulator.accept(a1, t1);
 *      accumulator.accept(a1, t2);
 *      R r1 = finisher.apply(a1);  // result without splitting
 *
 *      A a2 = supplier.get();
 *      accumulator.accept(a2, t1);
 *      A a3 = supplier.get();
 *      accumulator.accept(a3, t2);
 *      R r2 = finisher.apply(combiner.apply(a2, a3));  // result with splitting
 *  } </pre>
 *
 *  <p>For collectors that do not have the {@code UNORDERED} characteristic,
 *  two accumulated results {@code a1} and {@code a2} are equivalent if
 *  {@code finisher.apply(a1).equals(finisher.apply(a2))}.  For unordered
 *  collectors, equivalence is relaxed to allow for non-equality related to
 *  differences in order.  (For example, an unordered collector that accumulated
 *  elements to a {@code List} would consider two lists equivalent if they
 *  contained the same elements, ignoring order.)
 *
 *  <p>Libraries that implement reduction based on {@code Collector}, such as
 *  {@link Stream#collect(Collector)}, must adhere to the following constraints:
 *  <ul>
 *      <li>The first argument passed to the accumulator function, both
 *      arguments passed to the combiner function, and the argument passed to the
 *      finisher function must be the result of a previous invocation of the
 *      result supplier, accumulator, or combiner functions.</li>
 *      <li>The implementation should not do anything with the result of any of
 *      the result supplier, accumulator, or combiner functions other than to
 *      pass them again to the accumulator, combiner, or finisher functions,
 *      or return them to the caller of the reduction operation.</li>
 *      <li>If a result is passed to the combiner or finisher
 *      function, and the same object is not returned from that function, it is
 *      never used again.</li>
 *      <li>Once a result is passed to the combiner or finisher function, it
 *      is never passed to the accumulator function again.</li>
 *      <li>For non-concurrent collectors, any result returned from the result
 *      supplier, accumulator, or combiner functions must be serially
 *      thread-confined.  This enables collection to occur in parallel without
 *      the {@code Collector} needing to implement any additional synchronization.
 *      The reduction implementation must manage that the input is properly
 *      partitioned, that partitions are processed in isolation, and combining
 *      happens only after accumulation is complete.</li>
 *      <li>For concurrent collectors, an implementation is free to (but not
 *      required to) implement reduction concurrently.  A concurrent reduction
 *      is one where the accumulator function is called concurrently from
 *      multiple threads, using the same concurrently-modifiable result container,
 *      rather than keeping the result isolated during accumulation.
 *      A concurrent reduction should only be applied if the collector has the
 *      {@link Characteristics#UNORDERED} characteristics or if the
 *      originating data is unordered.</li>
 *  </ul>
 *
 *  <p>In addition to the predefined implementations in {@link Collectors}, the
 *  static factory methods {@link #of(Supplier, BiConsumer, BinaryOperator, Characteristics...)}
 *  can be used to construct collectors.  For example, you could create a collector
 *  that accumulates widgets into a {@code TreeSet} with:
 *
 *  <pre>{@code
 *      Collector<Widget, ?, TreeSet<Widget>> intoSet =
 *          Collector.of(TreeSet::new, TreeSet::add,
 *                       (left, right) -> { left.addAll(right); return left; });
 *  }</pre>
 *
 *  (This behavior is also implemented by the predefined collector
 *  {@link Collectors#toCollection(Supplier)}).
 * @apiNote Performing a reduction operation with a {@code Collector} should produce a&#xA; result equivalent to:&#xA; <pre>{@code&#xA; R container = collector.supplier().get();&#xA; for (T t : data)&#xA; collector.accumulator().accept(container, t);&#xA; return collector.finisher().apply(container);&#xA; }</pre>&#xA;&#xA; <p>However, the library is free to partition the input, perform the reduction&#xA; on the partitions, and then use the combiner function to combine the partial&#xA; results to achieve a parallel reduction. (Depending on the specific reduction&#xA; operation, this may perform better or worse, depending on the relative cost&#xA; of the accumulator and combiner functions.)&#xA;&#xA; <p>Collectors are designed to be <em>composed</em>; many of the methods&#xA; in {@link Collectors} are functions that take a collector and produce&#xA; a new collector. For example, given the following collector that computes&#xA; the sum of the salaries of a stream of employees:&#xA;&#xA; <pre>{@code&#xA; Collector<Employee, ?, Integer> summingSalaries&#xA; = Collectors.summingInt(Employee::getSalary))&#xA; }</pre>&#xA;&#xA; If we wanted to create a collector to tabulate the sum of salaries by&#xA; department, we could reuse the "sum of salaries" logic using&#xA; {@link Collectors#groupingBy(Function, Collector)}:&#xA;&#xA; <pre>{@code&#xA; Collector<Employee, ?, Map<Department, Integer>> summingSalariesByDept&#xA; = Collectors.groupingBy(Employee::getDepartment, summingSalaries);&#xA; }</pre>
 * @see Stream#collect(Collector)
 * @see Collectors
 * @param <T> the type of input elements to the reduction operation
 * @param <A> the mutable accumulation type of the reduction operation (often&#xA; hidden as an implementation detail)
 * @param <R> the result type of the reduction operation
 * @since 1.8
 */
export type Collector = {
  /**
   * A function that creates and returns a new mutable result container.
   * @return a function which returns a new, mutable result container
   */
  supplier(): Supplier;

  /**
   * A function that folds a value into a mutable result container.
   * @return a function which folds a value into a mutable result container
   */
  accumulator(): BiConsumer;

  /**
   * A function that accepts two partial results and merges them.  The
   *  combiner function may fold state from one argument into the other and
   *  return that, or may return a new result container.
   * @return a function which combines two partial results into a combined&#xA; result
   */
  combiner(): BinaryOperator;

  /**
   * Perform the final transformation from the intermediate accumulation type
   *  {@code A} to the final result type {@code R}.
   *
   *  <p>If the characteristic {@code IDENTITY_TRANSFORM} is
   *  set, this function may be presumed to be an identity transform with an
   *  unchecked cast from {@code A} to {@code R}.
   * @return a function which transforms the intermediate result to the final&#xA; result
   */
  finisher(): Function;

  /**
   * Returns a {@code Set} of {@code Collector.Characteristics} indicating
   *  the characteristics of this Collector.  This set should be immutable.
   * @return an immutable set of collector characteristics
   */
  characteristics(): Set;

  /**
   * Returns a new {@code Collector} described by the given {@code supplier},
   *  {@code accumulator}, and {@code combiner} functions.  The resulting
   *  {@code Collector} has the {@code Collector.Characteristics.IDENTITY_FINISH}
   *  characteristic.
   * @param supplier The supplier function for the new collector
   * @param accumulator The accumulator function for the new collector
   * @param combiner The combiner function for the new collector
   * @param characteristics The collector characteristics for the new&#xA; collector
   * @param <T> The type of input elements for the new collector
   * @param <R> The type of intermediate accumulation result, and final result,&#xA; for the new collector
   * @throws NullPointerException if any argument is null
   * @return the new {@code Collector}
   */
  of(
    supplier: Supplier,
    accumulator: BiConsumer,
    combiner: BinaryOperator,
    ...characteristics: Characteristics[]
  ): Collector;

  /**
   * Returns a new {@code Collector} described by the given {@code supplier},
   *  {@code accumulator}, {@code combiner}, and {@code finisher} functions.
   * @param supplier The supplier function for the new collector
   * @param accumulator The accumulator function for the new collector
   * @param combiner The combiner function for the new collector
   * @param finisher The finisher function for the new collector
   * @param characteristics The collector characteristics for the new&#xA; collector
   * @param <T> The type of input elements for the new collector
   * @param <A> The intermediate accumulation type of the new collector
   * @param <R> The final result type of the new collector
   * @throws NullPointerException if any argument is null
   * @return the new {@code Collector}
   */
  of(
    supplier: Supplier,
    accumulator: BiConsumer,
    combiner: BinaryOperator,
    finisher: Function,
    ...characteristics: Characteristics[]
  ): Collector;
};
