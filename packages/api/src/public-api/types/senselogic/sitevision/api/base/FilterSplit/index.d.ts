import type Filter from "../Filter";

/**
 * This is the base interface for all filter splits in the Sitevision Utility API.
 *
 * <p>
 *    A <em>filter split</em> is the result of a filtering operation on a <code>Collection</code> or an <code>Iterator</code>.
 *    When a filter is applied to a number of items, some of them will potentially be <em>accepted</em> by the filter and some
 *    of them will be <em>rejected</em> by the filter. This interface depicts the result of such filtering operation.
 * </p>
 *
 * <p>
 *    <em>Tip!</em> When working with a <code>Filter&lt;Node&gt;</code>, you would typically use
 *    {@link senselogic.sitevision.api.node.NodeIteratorUtil#split(javax.jcr.NodeIterator, Filter)}
 *    to split on an iterator and
 *    {@link senselogic.sitevision.api.node.NodeFilterUtil#split(java.util.Collection, Filter)}
 *    to split on a collection.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.3
 */
type FilterSplit = {
  /**
   * Gets the list of items that was accepted by the filter.
   *
   * <p>
   *    <em>Note! The accepted list will always be empty if the filter used for the filtering operation is null</em>
   * </p>
   * @return the list of accepted items, never <code>null</code>
   */
  getAccepted(): unknown;

  /**
   * Gets the list of items that was rejected by the filter.
   * @return the list of rejected items, never <code>null</code>
   */
  getRejected(): unknown;

  /**
   * Gets the filter used for the filtering operation.
   * @return the filter used
   */
  getFilter(): Filter;
};

export = FilterSplit;
