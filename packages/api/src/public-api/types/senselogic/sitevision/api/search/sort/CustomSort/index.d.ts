/**
 * A custom sort that enables users to re-sort the search result
 * on a certain index field with a certain sort order.
 * @author Magnus Lövgren
 * @see senselogic.sitevision.api.search.SearchResult#getCustomSorts()
 * @since Sitevision 3.1
 */
type CustomSort = {
  /**
   * Gets the name of this custom sort.
   * @return the sort name
   */
  getName(): string;

  /**
   * Gets the identifier of this custom sort.
   * @return the sort identifier
   */
  getSortId(): string;

  /**
   * Gets the name of the index field this custom sort uses.
   * @return the field name
   */
  getField(): string;

  /**
   * Whether the sort order is descending or not.
   * @return <code>true</code> if the order of this custom this sort is <em>descending</em>, <code>false</code> otherwise (i.e. order is <em>ascending</em>)
   */
  isDescending(): boolean;

  /**
   * Whether or not this custom sort is selected.
   * @return <code>true</code> if this sort is selected, <code>false</code> otherwise
   */
  isSelected(): boolean;

  /**
   * Gets the relative URL for this custom sort.
   * @return the URL for this custom sort
   */
  getSortURL(): string;

  /**
   * Returns the query parameters for this custom sort.
   *
   * <p>
   *    The sort query params is a sub-set of the sort URL.
   * </p>
   *
   * <p>
   *    An example: If the sortURL is:<br>
   *    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>/a/b/c.html?query=d&amp;e=f&amp;g=h</code><br>
   *    the sortQueryParams will be:<br>
   *    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>d&amp;e=f&amp;g=h</code><br>
   *    <em>
   *       (Note that the value starts with the "query" parameter, but <strong>without</strong> the actual query parameter
   *       name: '<span style="text-decoration:line-through">query=</span>')
   *    </em>
   * </p>
   * @return the query parameters, with the actual query parameter first with no name
   */
  getSortQueryParams(): string;
};

export = CustomSort;
