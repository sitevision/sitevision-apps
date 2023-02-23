import type { String } from "../../lang/String";
import type { Object } from "../../lang/Object";
import type { IntConsumer } from "../function/IntConsumer";

/**
 * A state object for collecting statistics such as count, min, max, sum, and
 *  average.
 *
 *  <p>This class is designed to work with (though does not require)
 *  {@linkplain java.util.stream streams}. For example, you can compute
 *  summary statistics on a stream of ints with:
 *  <pre> {@code
 *  IntSummaryStatistics stats = intStream.collect(IntSummaryStatistics::new,
 *                                                 IntSummaryStatistics::accept,
 *                                                 IntSummaryStatistics::combine);
 *  }</pre>
 *
 *  <p>{@code IntSummaryStatistics} can be used as a
 *  {@linkplain java.util.stream.Stream#collect(Collector) reduction}
 *  target for a {@linkplain java.util.stream.Stream stream}. For example:
 *
 *  <pre> {@code
 *  IntSummaryStatistics stats = people.stream()
 *                                     .collect(Collectors.summarizingInt(Person::getDependents));
 * }</pre>
 *
 *  This computes, in a single pass, the count of people, as well as the minimum,
 *  maximum, sum, and average of their number of dependents.
 * @implNote This implementation is not thread safe. However, it is safe to use&#xA; {@link java.util.stream.Collectors#summarizingInt(java.util.function.ToIntFunction)&#xA; Collectors.toIntStatistics()} on a parallel stream, because the parallel&#xA; implementation of {@link java.util.stream.Stream#collect Stream.collect()}&#xA; provides the necessary partitioning, isolation, and merging of results for&#xA; safe and efficient parallel execution.&#xA;&#xA; <p>This implementation does not check for overflow of the sum.
 * @since 1.8
 */
export type IntSummaryStatistics = Object &
  IntConsumer & {
    /**
     * Records a new value into the summary information
     * @param value the input value
     */
    accept(value: number): void;

    /**
     * Combines the state of another {@code IntSummaryStatistics} into this one.
     * @param other another {@code IntSummaryStatistics}
     * @throws NullPointerException if {@code other} is null
     */
    combine(other: IntSummaryStatistics): void;

    /**
     * Returns the count of values recorded.
     * @return the count of values
     */
    getCount(): number;

    /**
     * Returns the sum of values recorded, or zero if no values have been
     *  recorded.
     * @return the sum of values, or zero if none
     */
    getSum(): number;

    /**
     * Returns the minimum value recorded, or {@code Integer.MAX_VALUE} if no
     *  values have been recorded.
     * @return the minimum value, or {@code Integer.MAX_VALUE} if none
     */
    getMin(): number;

    /**
     * Returns the maximum value recorded, or {@code Integer.MIN_VALUE} if no
     *  values have been recorded.
     * @return the maximum value, or {@code Integer.MIN_VALUE} if none
     */
    getMax(): number;

    /**
     * Returns the arithmetic mean of values recorded, or zero if no values have been
     *  recorded.
     * @return the arithmetic mean of values, or zero if none
     */
    getAverage(): number;

    toString(): string;
  };
