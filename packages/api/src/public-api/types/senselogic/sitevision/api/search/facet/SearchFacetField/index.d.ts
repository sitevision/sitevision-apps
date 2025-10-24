/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../../../../../java/lang/String";
import type { List } from "../../../../../../java/util/List";

/**
 * A facet field of a search result.
 * @author Niclas Hedlund
 * @since Sitevision 3.0
 * @see senselogic.sitevision.api.search.SearchResult#getFacetFields()
 */
export type SearchFacetField = {
  /**
   * Returns the name of this facet field.
   * @return the facet field name
   */
  getName(): string;

  /**
   * Returns the facet values for this facet field.
   * @return the list of values for this facet field, or <code>null</code> if there are no values
   */
  getFacetValues(): List;

  /**
   * Convenience method for getting the number of values for this facet field.
   * @return number of values
   */
  getValueCount(): number;
};
