import Filter from "../../base/Filter";

import FilterSplit from "../../base/FilterSplit";
import CompoundAndFilterBuilder from "../builder/CompoundAndFilterBuilder";
import CompoundOrFilterBuilder from "../builder/CompoundOrFilterBuilder";

/**
 * Node filter utility interface.
 *
 * <p>
 *    A node filter is used to <em>match</em> a node against one or more criteria as specified by the filter.
 * </p>
 *
 * <ul>
 *    <li>
 *       In its simplest form it can replace a <code>null</code> check and an <code>equals</code> check for a certain value
 *       of a node (e.g. see {@link #getStringPropertyFilter(String, String)}).
 *    </li>
 *    <li>
 *       In its most complex form it can be a <em>Compound</em> filter that executes multiple checks to deliver the
 *       aggregated result of individual filters that are combined together using the logical <em>AND</em> and <em>OR</em>
 *       operators in between (e.g. see {@link #getCompoundAndFilterBuilder()}).
 *    </li>
 * </ul>
 *
 * <p>
 *    A filter can be used "standalone" to simplify your code, but can also be used in utilities with methods that supports node filters.
 *    Examples of such utilities are {@link senselogic.sitevision.api.node.NodeIteratorUtil} and {@link senselogic.sitevision.api.node.NodeTreeUtil}.
 * </p>
 *
 * <h3>A Velocity example</h3>
 * <p>
 *    This example uses Velocity to demonstrate how to build a filter that matches <em>image</em> nodes that has a <em>width</em> of at least 700
 *    or a <em>height</em> of at least 500.
 * </p>
 * <pre><code>    #set ($nodeFilterUtil = $sitevisionUtils.NodeFilterUtil)
 *    #set ($nodeTypeUtil = $sitevisionUtils.NodeTypeUtil)
 *
 *    <em>## Set up individual filters needed</em>
 *    #set ($imageFilter = $nodeFilterUtil.getPrimaryNodeTypeFilter($nodeTypeUtil.IMAGE_TYPE))
 *    #set ($minWidthFilter = $nodeFilterUtil.getMinIntPropertyFilter('width', 700))
 *    #set ($minHeightFilter = $nodeFilterUtil.getMinIntPropertyFilter('height', 500))
 *
 *    <em>## The width and the height filters should be logically combined with the OR operator</em>
 *    #set ($sizeFilterBuilder = $nodeFilterUtil.CompoundOrFilterBuilder)
 *    #set ($sizeFilter = $sizeFilterBuilder.addFilter($minWidthFilter).addFilter($minHeightFilter).build())
 *
 *    <em>## The type and the size filters should be logically combined with the AND operator</em>
 *    #set ($sizedImageFilterBuilder = $nodeFilterUtil.CompoundAndFilterBuilder)
 *    #set ($sizedImageFilter = $sizedImageFilterBuilder.addFilter($imageFilter).addFilter($sizeFilter).build())</code></pre>
 * <p>
 *    Now the <em>$sizedImageFilter</em> can be used to match individual nodes, for example:
 * </p>
 * <pre><code>    #if ($sizedImageFilter.accept($myNode))
 *       <em>## Handle matching image</em>
 *       ...
 *    #end</code></pre>
 * <p>
 *    The <em>$sizedImageFilter</em> can also be used to match multiple nodes via a filter-supporting utility.
 *    {@link senselogic.sitevision.api.node.NodeIteratorUtil} is an example of such utility.
 *    It provides support to find the <em>first</em>, <em>all</em> or a <em>given number</em> of matches of the nodes provided by
 *    a <code>NodeIterator</code>, for example:
 * </p>
 * <pre><code>    #set ($nodeIteratorUtil = $sitevisionUtils.NodeIteratorUtil)
 *    #set ($matches = $nodeIteratorUtil.findNodes($aNodeIterator, $sizedImageFilter, 5)) <em>## Max 5 matches</em>
 *    #if (!$matches.isEmpty())
 *       <em>## Handle matching images</em>
 *       ...
 *    #end</code></pre>
 * <p>
 *    <strong>Tip!</strong> See {@link senselogic.sitevision.api.base.Builder} for how to work with builders.
 * </p>
 *
 * <p>
 *    <strong>Beware of nulls!</strong> Invoking the {@link Filter#accept(Object) accept} method on a node filter with
 *    <code>null</code> should always be avoided! Filters returned from this class are forgiving and will typically handle <code>null</code>
 *    but the result might be unexpected, depending on what the filter is actually used for.
 *    For instance: Invoking a {@link #getHasPropertyFilter(String) HasPropertyfilter} with <code>null</code> will return
 *    <code>false</code> <em>(i.e. "null is not accepted")</em>. But consequently will the same filter wrapped in a
 *    {@link #getInvertedFilter(Filter) InvertedFilter} return <code>true</code> <em>(i.e. "null is accepted")</em>.
 * </p>
 *
 * <p>
 *    <em>
 *       <strong>Disclaimer!</strong> The Property-based filters for the Java native <code>int</code> type (i.e. <code>get*IntPropertyValue</code>)
 *       is <strong>not</strong> guaranteed to always deliver proper result for the native's "edge" values.
 *       Such filter invoked with <code>Integer.MIN_VALUE</code> or <code>Integer.MAX_VALUE</code> can under very rare circumstances
 *       return false when it actually should have returned true. This is a performance consideration and should under normal circumstances
 *       never cause any trouble (the value of a int property for a Node is extremely seldom, if ever, an "edge" value).
 *    </em>
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getNodeFilterUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6.2
 */

interface NodeFilterUtil {
  /**
   * Applies a node filter to a list and gets the result.
   * @param aNodeList the list of nodes
   * @param aNodeFilter a node filter
   * @return a list of all nodes of <code>aNodeList</code> that is accepted by <code>aNodeFilter</code>, never <code>null</code>. <code>aNodeList</code> itself is returned if it's empty or if <code>aNodeFilter</code> is <code>null</code>
   */
  getFilteredList(aNodeList: java.util.List, aNodeFilter: Filter): unknown[];

  /**
   * Applies a node filter to a Map with Node values and gets the result.
   * @param aNodeValueMap a map with node values
   * @param aNodeFilter a node filter
   * @return a Map with all <code>aNodeValueMap</code> entries with a value that is accepted by <code>aNodeFilter</code>, never <code>null</code>. <code>aNodeValueMap</code> itself is returned if it's empty or if <code>aNodeFilter</code> is <code>null</code>
   * @since Sitevision 4.3.1
   */
  getFilteredValueMap(
    aNodeValueMap: java.util.Map,
    aNodeFilter: Filter
  ): Record<unknown, unknown>;

  /**
   * Applies a node filter to a Map with Node keys and gets the result.
   * @param aNodeKeyMap a map with node keys
   * @param aNodeFilter a node filter
   * @return a Map with all <code>aNodeKeyMap</code> entries with a key that is accepted by <code>aNodeFilter</code>, never <code>null</code>. <code>aNodeKeyMap</code> itself is returned if it's empty or if <code>aNodeFilter</code> is <code>null</code>
   * @since Sitevision 4.3.1
   */
  getFilteredKeyMap(
    aNodeKeyMap: java.util.Map,
    aNodeFilter: Filter
  ): Record<unknown, unknown>;

  /**
   * Gets the filtering result of a split operation for a collection of nodes with a node filter as divider.
   *
   * <p>
   *    This method would typically be used instead of {@link #getFilteredList(java.util.List, senselogic.sitevision.api.base.Filter)}
   *    when you are also interested in the nodes that does NOT match the filter.
   * </p>
   *
   * <p>
   *    When nodes are available via a <code>NodeIterator</code>, you would typically use the
   *    {@link senselogic.sitevision.api.node.NodeIteratorUtil#split(javax.jcr.NodeIterator, senselogic.sitevision.api.base.Filter)}
   *    instead!
   * </p>
   * @param aNodeCollection a node collection
   * @param aNodeFilter a node filter
   * @return the result of the filtering operation
   * @since Sitevision 3.6.3
   * @see senselogic.sitevision.api.node.NodeIteratorUtil#split(javax.jcr.NodeIterator, senselogic.sitevision.api.base.Filter)
   */
  split(
    aNodeCollection: java.util.Collection,
    aNodeFilter: Filter
  ): FilterSplit;

  /**
   * Gets a builder for creating a compound filter that requires that <em>all</em> of the containing filters matches.
   *
   * <p>
   *    The CompoundAndFilterBuilder builds a node filter of multiple filters that are combined using the logical
   *    <em>AND</em> operator.
   * </p>
   * @return a CompoundAndFilterBuilder
   */
  getCompoundAndFilterBuilder(): CompoundAndFilterBuilder;

  /**
   * Gets a builder for creating a compound filter that requires that <em>any</em> of the containing filters matches.
   *
   * <p>
   *    The CompoundOrFilterBuilder builds a node filter of multiple filters that are combined using the logical
   *    <em>OR</em> operator.
   * </p>
   * @return a CompoundOrFilterBuilder
   * @see #getAnyOfPrimaryNodeTypesFilter(Collection)
   */
  getCompoundOrFilterBuilder(): CompoundOrFilterBuilder;

  /**
   * Gets a filter that always matches.
   * @return a filter that matches all nodes.
   */
  getAlwaysAcceptFilter(): Filter;

  /**
   * Gets a filter that never matches.
   * @return a filter that never matches any nodes.
   */
  getNeverAcceptFilter(): Filter;

  /**
   * Gets a filter that matches null nodes.
   * @return a filter that matches null nodes.
   * @since Sitevision 4.3.1
   */
  getNullFilter(): Filter;

  /**
   * Gets a filter that matches non-null nodes.
   * @return a filter that matches non-null nodes.
   * @since Sitevision 4.3.1
   */
  getNonNullFilter(): Filter;

  /**
   * Gets a filter that inverts the result of another filter.
   * @param aFilter the filter to invert
   * @return a filter that inverts the result
   * @throws IllegalArgumentException if <code>aFilter</code> is <code>null</code>
   */
  getInvertedFilter(aFilter: Filter): Filter;

  /**
   * Gets a filter that matches by a specified node identifier.
   * @param aIdentifier the node identifier
   * @return a filter that matches all nodes (typically just one) with node identifier <code>aIdentifier</code>
   * @throws IllegalArgumentException if <code>aIdentifier</code> is <code>null</code> or whitespace only
   * @since Sitevision 4.1
   */
  getIdentifierFilter(aIdentifier: java.lang.String): Filter;

  /**
   * Gets a filter that matches by a specified node identifier prefix.
   * @param aIdentifierPrefix the node identifier prefix
   * @return a filter that matches all nodes with an identifier that starts with <code>aIdentifierPrefix</code>
   * @throws IllegalArgumentException if <code>aIdentifierPrefix</code> is <code>null</code> or whitespace only
   * @since Sitevision 4.1
   */
  getIdentifierPrefixFilter(aIdentifierPrefix: java.lang.String): Filter;

  /**
   * Gets a filter that matches by a specified node identifier suffix.
   * @param aIdentifierSuffix the node identifier suffix
   * @return a filter that matches all nodes with an identifier that ends with <code>aIdentifierSuffix</code>
   * @throws IllegalArgumentException if <code>aIdentifierSuffix</code> is <code>null</code> or whitespace only
   * @since Sitevision 4.1
   */
  getIdentifierSuffixFilter(aIdentifierSuffix: java.lang.String): Filter;

  /**
   * Gets a filter that matches by a specified primary node type.
   * @param aPrimaryNodeTypeName the primary node type name
   * @return a filter that matches all nodes that has primary node type <code>aPrimaryNodeTypeName</code>
   * @throws IllegalArgumentException if <code>aPrimaryNodeTypeName</code> is <code>null</code> or whitespace only
   * @see #getAnyOfPrimaryNodeTypesFilter(Collection)
   * @see #getNoneOfPrimaryNodeTypesFilter(Collection)
   * @see senselogic.sitevision.api.node.NodeTypeUtil
   */
  getPrimaryNodeTypeFilter(aPrimaryNodeTypeName: java.lang.String): Filter;

  /**
   * Gets a filter that matches all nodes that has a primary node type that is present in given collection.
   *
   * <p>
   *    This convenience method is conceptually equivalent - but also more efficient - than building a "match any of" filter via
   *    {@link #getCompoundOrFilterBuilder() CompoundOrFilter} with a number of {@link #getPrimaryNodeTypeFilter(String) PrimaryNodeTypeFilters}.
   * </p>
   * @param aPrimaryNodeTypeNames a collection of primary node type names, must not be null. Null and blank collection items will be silently ignored (such value are not a valid node type name)
   * @return a filter that matches all Nodes that has a primary node type that is present in aPrimaryNodeTypeNames.
   * @throws NullPointerException if aPrimaryNodeTypeNames is null
   * @see #getNoneOfPrimaryNodeTypesFilter(Collection)
   * @see senselogic.sitevision.api.node.NodeTypeUtil
   * @since Sitevision 8.1
   */
  getAnyOfPrimaryNodeTypesFilter(
    aPrimaryNodeTypeNames: java.util.Collection
  ): Filter;

  /**
   * Gets a filter that matches all nodes that does not have a primary node type present in given collection.
   *
   * <p>
   *    This convenience method is conceptually equivalent - but also more efficient - than building a "match none of" filter via
   *    {@link #getCompoundOrFilterBuilder() CompoundOrFilter} with a number of {@link #getPrimaryNodeTypeFilter(String) PrimaryNodeTypeFilters}
   *    and a {@link #getInvertedFilter(Filter) InvertedFilter}
   * </p>
   * @param aExcludedPrimaryNodeTypeNames a collection of primary node type names, must not be null. Null and blank collection items will be silently ignored (such value are not a valid node type name)
   * @return a filter that matches all Nodes that does not have a primary node type present in aExcludedPrimaryNodeTypeNames.
   * @throws NullPointerException if aExcludedPrimaryNodeTypeNames is null
   * @see #getAnyOfPrimaryNodeTypesFilter(Collection)
   * @see senselogic.sitevision.api.node.NodeTypeUtil
   * @since Sitevision 8.1
   */
  getNoneOfPrimaryNodeTypesFilter(
    aExcludedPrimaryNodeTypeNames: java.util.Collection
  ): Filter;

  /**
   * Gets a filter that matches by the existence of a specified property.
   * @param aPropertyName the name of the property
   * @return a filter that matches all nodes that has a property named <code>aPropertyName</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only
   * @see javax.jcr.Node#hasProperty(String)
   */
  getHasPropertyFilter(aPropertyName: java.lang.String): Filter;

  /**
   * Gets a filter that matches by a specified string property.
   * @param aPropertyName the name of the property
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a string property named <code>aPropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> or <code>aMatchValue</code> is <code>null</code>
   * @see senselogic.sitevision.api.property.PropertyUtil#getString(javax.jcr.Node, String)
   */
  getStringPropertyFilter(
    aPropertyName: java.lang.String,
    aMatchValue: java.lang.String
  ): Filter;

  /**
   * Gets a filter that matches by a specified multi-valued string property.
   * @param aPropertyName the name of the property
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a string property named <code>aPropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> or <code>aMatchValue</code> is <code>null</code>
   * @see senselogic.sitevision.api.property.PropertyUtil#getStrings(javax.jcr.Node, String)
   */
  getStringMultiPropertyFilter(
    aPropertyName: java.lang.String,
    aMatchValue: java.lang.String
  ): Filter;

  /**
   * Gets a filter that matches case-insensitive by a specified string property.
   * @param aPropertyName the name of the property
   * @param aCaseInsensitiveValue the case-insensitive value of the property
   * @return a filter that matches all nodes that has a string property named <code>aPropertyName</code> with value <code>aCaseInsensitiveValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> or <code>aCaseInsensitiveValue</code> is <code>null</code>
   */
  getIgnoreCaseStringPropertyFilter(
    aPropertyName: java.lang.String,
    aCaseInsensitiveValue: java.lang.String
  ): Filter;

  /**
   * Gets a filter that matches by the value-starts-with of a specified string property.
   *
   * <p>
   *    <em>The starts-with check is performed using the <code>String.startsWith(String)</code> method.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @param aStartsWithValue the value the property should start with
   * @return a filter that matches all nodes that has a string property named <code>aPropertyName</code> that starts with value <code>aStartsWithValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> or <code>aStartsWithValue</code> is <code>null</code>
   */
  getStartsWithStringPropertyFilter(
    aPropertyName: java.lang.String,
    aStartsWithValue: java.lang.String
  ): Filter;

  /**
   * Gets a filter that matches by the value-ends-with of a specified string property.
   *
   * <p>
   *    <em>The ends-with check is performed using the <code>String.endsWith(String)</code> method.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @param aEndsWithValue the value the property should end with
   * @return a filter that matches all nodes that has a string property named <code>aPropertyName</code> that ends with value <code>aEndsWithValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> or <code>aEndsWithValue</code> is <code>null</code>
   */
  getEndsWithStringPropertyFilter(
    aPropertyName: java.lang.String,
    aEndsWithValue: java.lang.String
  ): Filter;

  /**
   * Gets a filter that matches by the value-contains of a specified string property.
   *
   * <p>
   *    <em>The contains check is performed using the <code>String.contains(String)</code> method.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @param aContainsValue the value the property should contain
   * @return a filter that matches all nodes that has a string property named <code>aPropertyName</code> that contains value <code>aContainsValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> or <code>aContainsValue</code> is <code>null</code>
   */
  getContainsStringPropertyFilter(
    aPropertyName: java.lang.String,
    aContainsValue: java.lang.String
  ): Filter;

  /**
   * Gets a filter that matches by the value-contains of a specified multi-valued string property.
   *
   * <p>
   *    <em>The contains check is performed using the <code>String.contains(String)</code> method for each extracted property value.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @param aContainsValue the value the property should contain
   * @return a filter that matches all nodes that has a string property named <code>aPropertyName</code> that contains value <code>aContainsValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> or <code>aContainsValue</code> is <code>null</code>
   */
  getContainsStringMultiPropertyFilter(
    aPropertyName: java.lang.String,
    aContainsValue: java.lang.String
  ): Filter;

  /**
   * Gets a filter that matches by a regular expression of a specified string property.
   *
   * <p>
   *    <em>The regular expression is compiled to a <code>Pattern</code> and the check is performed using the
   *    <code>matches()</code> method of the <code>Matcher</code> extracted from the compiled pattern via
   *    <code>Pattern.matcher(String)</code>.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @param aRegularExpression the regular expression
   * @return a filter that matches all nodes that has a string property named <code>aPropertyName</code> that matches <code>aRegularExpression</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> or <code>aRegularExpression</code> is <code>null</code>
   * @throws PatternSyntaxException if the compilation of <code>aRegularExpression</code> fails
   */
  getPatternStringPropertyFilter(
    aPropertyName: java.lang.String,
    aRegularExpression: java.lang.String
  ): Filter;

  /**
   * Gets a filter that matches by a regular expression of a specified multi-valued string property.
   *
   * <p>
   *    <em>The regular expression is compiled to a <code>Pattern</code> and the check for each extracted property value is performed using the
   *    <code>matches()</code> method of the <code>Matcher</code> extracted from the compiled pattern via
   *    <code>Pattern.matcher(String)</code>.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @param aRegularExpression the regular expression
   * @return a filter that matches all nodes that has a string property named <code>aPropertyName</code> that matches <code>aRegularExpression</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> or <code>aRegularExpression</code> is <code>null</code>
   * @throws PatternSyntaxException if the compilation of <code>aRegularExpression</code> fails
   */
  getPatternStringMultiPropertyFilter(
    aPropertyName: java.lang.String,
    aRegularExpression: java.lang.String
  ): Filter;

  /**
   * Gets a filter that matches by a specified boolean property.
   * @param aPropertyName the name of the property
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a boolean property named <code>aPropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only
   * @see senselogic.sitevision.api.property.PropertyUtil#getBoolean(javax.jcr.Node, String)
   */
  getBooleanPropertyFilter(
    aPropertyName: java.lang.String,
    aMatchValue: boolean
  ): Filter;

  /**
   * Gets a filter that matches by a nested node's specified boolean property.
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property for the "inner/nested" Node specified by <code>aNodePropertyName</code>
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only
   * @see senselogic.sitevision.api.property.PropertyUtil#getNestedBoolean(javax.jcr.Node, String, String)
   */
  getNestedBooleanPropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aMatchValue: boolean
  ): Filter;

  /**
   * Gets a filter that matches by a specified int property.
   * @param aPropertyName the name of the property
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a int property named <code>aPropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only
   * @see senselogic.sitevision.api.property.PropertyUtil#getInt(javax.jcr.Node, String)
   */
  getIntPropertyFilter(
    aPropertyName: java.lang.String,
    aMatchValue: int
  ): Filter;

  /**
   * Gets a filter that matches by the min value of a specified int property.
   * @param aPropertyName the name of the property
   * @param aMinValue the min value of the property
   * @return a filter that matches all nodes that has a int property named <code>aPropertyName</code> with value <code>aMinValue</code> or higher
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only
   */
  getMinIntPropertyFilter(
    aPropertyName: java.lang.String,
    aMinValue: int
  ): Filter;

  /**
   * Gets a filter that matches by the max value of a specified int property.
   * @param aPropertyName the name of the property
   * @param aMaxValue the max value of the property
   * @return a filter that matches all nodes that has a int property named <code>aPropertyName</code> with value <code>aMaxValue</code> or lower
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only
   */
  getMaxIntPropertyFilter(
    aPropertyName: java.lang.String,
    aMaxValue: int
  ): Filter;

  /**
   * Gets a filter that matches by the range of a specified int property.
   *
   * <p>
   *    <em>This is a convenience method that combines the min int filter ({@link #getMinIntPropertyFilter(String, int)})
   *    and the max int filter ({@link #getMinIntPropertyFilter(String, int)}) to check a range for an integer.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @param aMinValue the min value of the property
   * @param aMaxValue the max value of the property
   * @return a filter that matches all nodes that has a int property named <code>aPropertyName</code> with value within inclusive range <code>[aMinValue..aMaxValue]</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only, or if <code>aMinValue</code> is greater than <code>aMaxValue</code>
   */
  getRangeIntPropertyFilter(
    aPropertyName: java.lang.String,
    aMinValue: int,
    aMaxValue: int
  ): Filter;

  /**
   * Gets a filter that matches by a nested node's specified int property.
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property for the "inner/nested" Node specified by <code>aNodePropertyName</code>
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only
   * @see senselogic.sitevision.api.property.PropertyUtil#getNestedInt(javax.jcr.Node, String, String)
   */
  getNestedIntPropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aMatchValue: int
  ): Filter;

  /**
   * Gets a filter that matches by a nested node's min value of a specified int property.
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property for the "inner/nested" Node specified by <code>aNodePropertyName</code>
   * @param aMinValue the min value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value <code>aMatchValue</code> or higher
   * @throws IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only
   * @see senselogic.sitevision.api.property.PropertyUtil#getNestedInt(javax.jcr.Node, String, String)
   */
  getMinNestedIntPropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aMinValue: int
  ): Filter;

  /**
   * Gets a filter that matches by a nested node's max value of a specified int property.
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property for the "inner/nested" Node specified by <code>aNodePropertyName</code>
   * @param aMaxValue the max value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value <code>aMatchValue</code> or lower
   * @throws IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only
   * @see senselogic.sitevision.api.property.PropertyUtil#getNestedInt(javax.jcr.Node, String, String)
   */
  getMaxNestedIntPropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aMaxValue: int
  ): Filter;

  /**
   * Gets a filter that matches by a nested node's range of a specified int property.
   *
   * <p>
   *    <em>This is a convenience method that combines the nested min int filter ({@link #getMinNestedIntPropertyFilter(String, String, int)})
   *    and the nested max int filter ({@link #getMaxNestedIntPropertyFilter(String, String, int)}) to check a range for an integer.</em>
   * </p>
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property for the "inner/nested" Node specified by <code>aNodePropertyName</code>
   * @param aMinValue the min value of the property
   * @param aMaxValue the max value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value within inclusive range <code>[aMinValue..aMaxValue]</code>
   * @throws IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only, or if <code>aMinValue</code> is greater than <code>aMaxValue</code>
   */
  getRangeNestedIntPropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aMinValue: int,
    aMaxValue: int
  ): Filter;

  /**
   * Gets a filter that matches by a specified double property.
   * @param aPropertyName the name of the property
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a double property named <code>aPropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only
   * @see senselogic.sitevision.api.property.PropertyUtil#getDouble(javax.jcr.Node, String)
   */
  getDoublePropertyFilter(
    aPropertyName: java.lang.String,
    aMatchValue: double
  ): Filter;

  /**
   * Gets a filter that matches by a nested node's specified double property.
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property for the "inner/nested" Node specified by <code>aNodePropertyName</code>
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only
   * @see senselogic.sitevision.api.property.PropertyUtil#getNestedDouble(javax.jcr.Node, String, String)
   */
  getNestedDoublePropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aMatchValue: double
  ): Filter;

  /**
   * Gets a filter that matches by the min value of a specified double property.
   * @param aPropertyName the name of the property
   * @param aMinValue the min value of the property
   * @return a filter that matches all nodes that has a double property named <code>aPropertyName</code> with value <code>aMinValue</code> or higher
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only
   */
  getMinDoublePropertyFilter(
    aPropertyName: java.lang.String,
    aMinValue: double
  ): Filter;

  /**
   * Gets a filter that matches by the max value of a specified double property.
   * @param aPropertyName the name of the property
   * @param aMaxValue the max value of the property
   * @return a filter that matches all nodes that has a double property named <code>aPropertyName</code> with value <code>aMaxValue</code> or lower
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only
   */
  getMaxDoublePropertyFilter(
    aPropertyName: java.lang.String,
    aMaxValue: double
  ): Filter;

  /**
   * Gets a filter that matches by the range of a specified double property.
   *
   * <p>
   *    <em>This is a convenience method that combines the min double filter ({@link #getMinDoublePropertyFilter(String, double)})
   *    and the max double filter ({@link #getMaxDoublePropertyFilter(String, double)}) to check a range for a double.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @param aMinValue the min value of the property
   * @param aMaxValue the max value of the property
   * @return a filter that matches all nodes that has a double property named <code>aPropertyName</code> with value within inclusive range <code>[aMinValue..aMaxValue]</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only, or if <code>aMinValue</code> is greater than <code>aMaxValue</code>
   */
  getRangeDoublePropertyFilter(
    aPropertyName: java.lang.String,
    aMinValue: double,
    aMaxValue: double
  ): Filter;

  /**
   * Gets a filter that matches by a specified Calendar property.
   * @param aPropertyName the name of the property
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a Calendar property named <code>aPropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only, or <code>aMatchValue</code> is <code>null</code>
   * @see senselogic.sitevision.api.property.PropertyUtil#getCalendar(javax.jcr.Node, String)
   */
  getCalendarPropertyFilter(
    aPropertyName: java.lang.String,
    aMatchValue: java.util.Calendar
  ): Filter;

  /**
   * Gets a filter that matches by a nested node's specified Calendar property.
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property for the "inner/nested" Node specified by <code>aNodePropertyName</code>
   * @param aMatchValue the value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value <code>aMatchValue</code>
   * @throws IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only, or if <code>aMatchValue</code> is <code>null</code>
   * @see senselogic.sitevision.api.property.PropertyUtil#getNestedCalendar(javax.jcr.Node, String, String)
   */
  getNestedCalendarPropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aMatchValue: java.util.Calendar
  ): Filter;

  /**
   * Gets a filter that matches by a before value for a specified Calendar property.
   * @param aPropertyName the name of the property
   * @param aBeforeThresholdValue the before threshold value of the property
   * @return a filter that matches all nodes that has a Calendar property named <code>aPropertyName</code> with value before <code>aBeforeThresholdValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only, or <code>aBeforeThresholdValue</code> is <code>null</code>
   */
  getBeforeCalendarPropertyFilter(
    aPropertyName: java.lang.String,
    aBeforeThresholdValue: java.util.Calendar
  ): Filter;

  /**
   * Gets a filter that matches by a before value of a nested node's specified Calendar property.
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property for the "inner/nested" Node specified by <code>aNodePropertyName</code>
   * @param aBeforeThresholdValue the before threshold value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value before <code>aBeforeThresholdValue</code>
   * @throws IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only, or if <code>aBeforeThresholdValue</code> is <code>null</code>
   */
  getBeforeNestedCalendarPropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aBeforeThresholdValue: java.util.Calendar
  ): Filter;

  /**
   * Gets a filter that matches by an after value for a specified Calendar property.
   * @param aPropertyName the name of the property
   * @param aAfterThresholdValue the after threshold value of the property
   * @return a filter that matches all nodes that has a Calendar property named <code>aPropertyName</code> with value after <code>aAfterThresholdValue</code>
   * @throws IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only, or <code>aAfterThresholdValue</code> is <code>null</code>
   */
  getAfterCalendarPropertyFilter(
    aPropertyName: java.lang.String,
    aAfterThresholdValue: java.util.Calendar
  ): Filter;

  /**
   * Gets a filter that matches by an after value of a nested node's specified Calendar property.
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property for the "inner/nested" Node specified by <code>aNodePropertyName</code>
   * @param aAfterThresholdValue the after threshold value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value after <code>aAfterThresholdValue</code>
   * @throws IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only, or if <code>aAfterThresholdValue</code> is <code>null</code>
   */
  getAfterNestedCalendarPropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aAfterThresholdValue: java.util.Calendar
  ): Filter;

  /**
   * Gets a filter that matches by the between range of a specified Calendar property.
   *
   * <p>
   *    <em>This is a convenience method that combines the after calendar filter
   *    ({@link #getAfterCalendarPropertyFilter(String, java.util.Calendar)})
   *    and the before calendar filter ({@link #getBeforeCalendarPropertyFilter(String, java.util.Calendar)}) to check a range for a Calendar.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @param aAfterThresholdValue the after threshold value of the property
   * @param aBeforeThresholdValue the before threshold value of the property
   * @return a filter that matches all nodes that has a Calendar property named <code>aPropertyName</code> with value between exclusive range <code>[aAfterThresholdValue..aBeforeThresholdValue]</code>
   * @throws IllegalArgumentException IllegalArgumentException if <code>aPropertyName</code> is <code>null</code> or whitespace only, or if <code>aAfterThresholdValue</code> or <code>aBeforeThresholdValue</code> is <code>null</code>, or if <code>aAfterThresholdValue</code> is after <code>aBeforeThresholdValue</code>
   */
  getRangeCalendarPropertyFilter(
    aPropertyName: java.lang.String,
    aAfterThresholdValue: java.util.Calendar,
    aBeforeThresholdValue: java.util.Calendar
  ): Filter;

  /**
   * Gets a filter that matches by the between range of a nested node's specified Calendar property.
   *
   * <p>
   *    <em>This is a convenience method that combines the nested after calendar filter
   *    ({@link #getAfterNestedCalendarPropertyFilter(String, String, java.util.Calendar)}) and the nested before calendar filter
   *    ({@link #getBeforeNestedCalendarPropertyFilter(String, String, java.util.Calendar)}) to check a range for a Calendar.</em>
   * </p>
   * @param aNodePropertyName the name of the property for the Node
   * @param aPropertyName the name of the property
   * @param aAfterThresholdValue the after threshold value of the property
   * @param aBeforeThresholdValue the before threshold value of the property
   * @return a filter that matches all nodes that has a property named <code>aNodePropertyName</code> that can be resolved as a node, which in turn has a property named <code>aNodePropertyName</code> with value between exclusive range <code>[aAfterThresholdValue..aBeforeThresholdValue]</code>
   * @throws IllegalArgumentException IllegalArgumentException if <code>aNodePropertyName</code> or <code>aPropertyName</code> is <code>null</code> or whitespace only, or if <code>aAfterThresholdValue</code> or <code>aBeforeThresholdValue</code> is <code>null</code>, or if <code>aAfterThresholdValue</code> is after <code>aBeforeThresholdValue</code>
   */
  getRangeNestedCalendarPropertyFilter(
    aNodePropertyName: java.lang.String,
    aPropertyName: java.lang.String,
    aAfterThresholdValue: java.util.Calendar,
    aBeforeThresholdValue: java.util.Calendar
  ): Filter;
}
