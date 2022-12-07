/**
 * A facet value of a facet field.
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 * @see senselogic.sitevision.api.search.facet.SearchFacetField#getFacetValues()
 */
interface SearchFacetValue {
  /**
   * Returns the number of occurrences (number of expected hits when searching with this facet value).
   * @return the number of occurrences for this facet value.
   */
  getCount(): number;

  /**
   * Returns the name of this facet value
   * @return the name of this facet value
   */
  getName(): string;

  /**
   * Returns the relative URL for executing a query for this facet value.
   * @return the facet value query URL
   */
  getFilterURL(): string;

  /**
   * Returns the query parameters for this facet value.
   * <p>
   * The filter query params is a sub-set of the filter URL.
   * </p>
   *
   * <p>An example: If the filterURL is:<br>
   *    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>/a/b/c.html?query=d&amp;e=f&amp;g=h</code><br>
   *    the filterQueryParams will be:<br>
   *    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>d&amp;e=f&amp;g=h</code><br>
   *    <em>(Note that the value starts with the "query" parameter, but <strong>without</strong> the actual query
   *    parameter name: '<span style="text-decoration:line-through">query=</span>')</em>
   * </p>
   * @return the query parameters, with the actual query parameter first with no name
   */
  getFilterQueryParams(): string;

  /**
   * Returns whether or not this facet value is selected.
   * @return <code>true</code> if this facet value is selected, <code>false</code> otherwise
   */
  isSelected(): boolean;
}

export default SearchFacetValue;
