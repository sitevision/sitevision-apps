import type { Comparator } from "../../types/java/util/Comparator";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builds a compound comparator that allows comparison based on multiple comparators.
 *
 *  <p>
 *     <em>How the compareTo method of a compound comparator works:</em> If comparator <em>A</em> and comparator <em>B</em> is added to this builder,
 *     then the compareTo method of <em>A</em> will be invoked first, and if equal (i.e. zero), the compareTo of <em>B</em> will be invoked.
 *  </p>
 *
 *  <p>
 *     See {@link senselogic.sitevision.api.base.Builder} for a comprehensive example of how to work with builders.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.node.NodeComparatorUtil#getCompoundComparatorBuilder()}.
 *     See {@link senselogic.sitevision.api.node.NodeComparatorUtil} for how to obtain an instance of the <code>NodeComparatorUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.3
 */
export interface CompoundComparatorBuilder extends Builder {
  /**
   * Adds a node comparator to this builder.
   *
   *  <p>
   *     <em>Note!</em> Order is important. The compareTo method of a node comparator constructed from this builder will invoke the
   *     comparators in the order they were added.
   *  </p>
   * @param aComparator the node comparator to add, <code>null</code> will be ignored
   * @return this builder
   */
  addComparator(aComparator: Comparator): CompoundComparatorBuilder;

  /**
   * Removes all previously added comparators.
   * @return this builder
   */
  clearComparators(): CompoundComparatorBuilder;

  /**
   * Creates a node comparator instance that will calculate its compareTo return value based on currently specified comparators.
   *
   *  <p>
   *     <em>Note! The returned Comparator imposes orderings that are inconsistent with equals.</em>
   *  </p>
   * @return a node comparator
   * @throws IllegalStateException if this builder contains no comparators.
   */
  build(): Comparator;
}

declare namespace CompoundComparatorBuilder {}

declare var compoundComparatorBuilder: CompoundComparatorBuilder;

export default compoundComparatorBuilder;
