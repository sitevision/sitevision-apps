/**
 * This is the base interface for all filters in the Sitevision Utility API.
 *
 * <p>
 *    A <em>filter</em> is used to determine if an object matches a certain criteria or not.
 *    Typically a filter is applied to a <code>Collection</code> or a <code>Iterator</code>
 *    to extract all "relevant/matching" objects.
 * </p>
 * <p>
 *    See {@link senselogic.sitevision.api.node.NodeFilterUtil} for predefined node filters (i.e. <code>Filter&lt;Node&gt;</code>).
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 * @see senselogic.sitevision.api.node.NodeFilterUtil
 */
interface Filter {
  /**
   * Whether a given object matches the filter requirements or not.
   * @param anObject the object to check
   * @return <code>true</code> if <code>anObject</code> is accepted by this filter, <code>false</code> otherwise
   */
  accept(anObject: unknown): boolean;
}

export default Filter;
