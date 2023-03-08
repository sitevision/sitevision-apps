import type { String } from "../../lang/String";
import type { Object } from "../../lang/Object";
import type { LongConsumer } from "../function/LongConsumer";
import type { IntConsumer } from "../function/IntConsumer";

/**
 * A state object for collecting statistics such as count, min, max, sum, and
 *  average.
 *
 *  <p>This class is designed to work with (though does not require)
 *  {@linkplain java.util.stream streams}. For example, you can compute
 *  summary statistics on a stream of longs with:
 *  <pre> {@code
 *  LongSummaryStatistics stats = longStream.collect(LongSummaryStatistics::new,
 *                                                   LongSummaryStatistics::accept,
 *                                                   LongSummaryStatistics::combine);
 *  }</pre>
 *
 *  <p>{@code LongSummaryStatistics} can be used as a
 *  {@linkplain java.util.stream.Stream#collect(Collector)} reduction}
 *  target for a {@linkplain java.util.stream.Stream stream}. For example:
 *
 *  <pre> {@code
 *  LongSummaryStatistics stats = people.stream()
 *                                      .collect(Collectors.summarizingLong(Person::getAge));
 * }</pre>
 *
 *  This computes, in a single pass, the count of people, as well as the minimum,
 *  maximum, sum, and average of their ages.
 * @implNote This implementation is not thread safe. However, it is safe to use&#xA; {@link java.util.stream.Collectors#summarizingLong(java.util.function.ToLongFunction)&#xA; Collectors.toLongStatistics()} on a parallel stream, because the parallel&#xA; implementation of {@link java.util.stream.Stream#collect Stream.collect()}&#xA; provides the necessary partitioning, isolation, and merging of results for&#xA; safe and efficient parallel execution.&#xA;&#xA; <p>This implementation does not check for overflow of the sum.
 * @since 1.8
 */
export type LongSummaryStatistics = Object &
  LongConsumer &
  IntConsumer & {
    /**
     * Records a new {@code int} value into the summary information.
     * @param value the input value
     */
    accept(value: number): void;

    /**
     * Records a new {@code long} value into the summary information.
     * @param value the input value
     */
    accept(value: number): void;

    /**
     * Combines the state of another {@code LongSummaryStatistics} into this
     *  one.
     * @param other another {@code LongSummaryStatistics}
     * @throws NullPointerException if {@code other} is null
     */
    combine(other: LongSummaryStatistics): void;

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
     * Returns the minimum value recorded, or {@code Long.MAX_VALUE} if no
     *  values have been recorded.
     * @return the minimum value, or {@code Long.MAX_VALUE} if none
     */
    getMin(): number;

    /**
     * Returns the maximum value recorded, or {@code Long.MIN_VALUE} if no
     *  values have been recorded
     * @return the maximum value, or {@code Long.MIN_VALUE} if none
     */
    getMax(): number;

    /**
     * Returns the arithmetic mean of values recorded, or zero if no values have been
     *  recorded.
     * @return The arithmetic mean of values, or zero if none
     */
    getAverage(): number;

    toString(): string;
  };
