/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Filter } from "../../types/senselogic/sitevision/api/base/Filter";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builds a compound filter that requires that <em>any</em> of the added filters matches.
 *
 *  <p>
 *     <em>How a compound OR filter works:</em> If filter <em>A</em> and filter <em>B</em> is added to this builder,
 *     then the accept method of the built filter will return the result of the logical boolean evaluation of: <em>A.accept OR B.accept</em>.
 *  </p>
 *  <ul>
 *     <li>
 *        See {@link senselogic.sitevision.api.node.NodeFilterUtil} for an example of how to use a <code>CompoundOrFilterBuilder</code> in Velocity.
 *     </li>
 *     <li>
 *        See {@link senselogic.sitevision.api.base.Builder} for a comprehensive example of how to work with builders.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.node.NodeFilterUtil#getCompoundOrFilterBuilder()}.
 *     See {@link senselogic.sitevision.api.node.NodeFilterUtil} for how to obtain an instance of the <code>NodeFilterUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */
export interface CompoundOrFilterBuilder extends Builder {
  /**
   * Adds a node filter to this builder.
   *
   *  <p>
   *     <em>Tip!</em> For best performance, it's likely a good idea to add the "cheapest" filter first!
   *  </p>
   * @param aFilter the node filter to add, <code>null</code> will be ignored
   * @return this builder
   */
  addFilter(aFilter: Filter): CompoundOrFilterBuilder;

  /**
   * Removes all previously added filters.
   * @return this builder
   */
  clearFilters(): CompoundOrFilterBuilder;

  /**
   * Creates a node filter instance that will perform the <em>OR</em> operation for all currently specified filters.
   * @return a node filter
   * @throws IllegalStateException if this builder contains no filters.
   */
  build(): Filter;
}

declare namespace CompoundOrFilterBuilder {}

declare var compoundOrFilterBuilder: CompoundOrFilterBuilder;

export default compoundOrFilterBuilder;
