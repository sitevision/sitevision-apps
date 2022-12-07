/**
 * A facet field of a search result.
 * @author Niclas Hedlund
 * @since Sitevision 3.0
 * @see senselogic.sitevision.api.search.SearchResult#getFacetFields()
 */
interface SearchFacetField {
  /**
   * Returns the name of this facet field.
   * @return the facet field name
   */
  getName(): string;

  /**
   * Returns the facet values for this facet field.
   * @return the list of values for this facet field, or <code>null</code> if there are no values
   */
  getFacetValues(): unknown;

  /**
   * Convenience method for getting the number of values for this facet field.
   * @return number of values
   */
  getValueCount(): number;
}

export default SearchFacetField;
