/**
 * Utility interface for getting multiple Node property values in server-side Javascript.
 *
 * <p>
 *    Extraction of property values from Nodes are typically performed using {@link PropertyUtil}
 *    but this utility is less obtrusive to work with in server-side script contexts (WebApps, RESTApps, Script module etc.).
 * </p>
 * <p>
 *    <strong>Property value types</strong><br>
 *    The value of a JCR Node property can be resolved as different types.
 *    For instance a property with primary type {@link javax.jcr.PropertyType#DATE} can be resolved as {@code Calendar} or as {@code String}.
 *    This utility returns values with a specific type:
 * </p>
 * <ul>
 *    <li>The numerical <em>timestamp</em> will be returned as value for properties of type {@link javax.jcr.PropertyType#DATE}.</li>
 *    <li>The Node <em>identifier</em> will be returned as value for properties of type {@link javax.jcr.PropertyType#WEAKREFERENCE}.</li>
 * </ul>
 *
 * <p>
 *    <strong>Example</strong><br>
 *    Below is an example that demonstrates the behaviour and usage of this utility.
 * </p><pre>   <strong>var</strong> properties = require('Properties');
 *   <em>...</em>
 *
 *   <em><strong>// get examples</strong></em>
 *
 *   <em>// Returns the identifier of the given Node, e.g: '4.540818ed12a6539aa3f80001645'</em>
 *   pageId = properties.get(pageNode);
 *
 *   <em>// Returns the URI property value of the given Node, e.g. '/4.540818ed12a6539aa3f80001645.html'</em>
 *   pageUri = properties.get(pageNode, 'URI');
 *
 *   <em>// Returns the displayName property value of the given Node, e.g. 'The page'</em>
 *   pageName = properties.get(pageNode, 'displayName');
 *   pageName = properties.get(pageId, 'displayName');
 *   pageName = properties.get(pageUri, 'displayName');
 *
 *   <em>// Returns a native script object with given properties (that exist) of the specified Node e.g:
 *   // {
 *   //    URI: '/4.540818ed12a6539aa3f80001645.html',
 *   //    displayName: 'The page',
 *   //    published: true,
 *   //    publishDate: 1227618333142
 *   // }</em>
 *   pageData = properties.get(pageNode, 'URI', 'displayName', 'published', 'publishDate', 'nameOfNonExistingProperty');
 *
 *   <em><strong>// getArray examples</strong></em>
 *
 *   <em>// Returns the identifier of the given Node as array, e.g: ['4.540818ed12a6539aa3f80001645']</em>
 *   pageIdArray = properties.getArray(pageNode);
 *
 *   <em>// Returns the identifier for the children of given Node as array, e.g:
 *   // [
 *   //    '19.540818ed12a6539aa3f80006889',
 *   //    '4.540818ed12a6539aa3f80001645_pageContent',
 *   //    ...
 *   // ]</em>
 *   childIdsArray = properties.getArray(pageNode.getNodes());
 *
 *   <em>// Returns the displayName for the nodes of a menu from a given Node as array, e.g:
 *   // [
 *   //    'The Page',
 *   //    'Another Page',
 *   //    ...
 *   // ]</em>
 *   menuNamesArray = properties.getArray(nodeIteratorUtil.getMenuItems(pageNode), 'displayName');
 *
 *   <em>// Returns the displayName and URI for the hits of a SearchResult as array, e.g:
 *   // [
 *   //    {
 *   //       displayName: 'Public API'
 *   //       URI: '/docs/public-api',
 *   //    },
 *   //    {
 *   //       displayName: 'REST API'
 *   //       URI: '/docs/rest-api',
 *   //    },
 *   //    ...
 *   // ]</em>
 *   hitsDataArray = properties.getArray(searchResult, 'displayName', 'URI');</pre>
 *
 * <p>
 *    <strong>Security reminder! All output should always be escaped to prevent XSS!</strong>
 * </p>
 * <ul>
 *    <li>
 *       When implementing a WebApp, you would typically use {@link #get(Object, String...)} or {@link #getArray(Object, String...)}
 *       and output the value with underscore escape (e.g. <code>&lt;%- theValueToEscape %&gt;</code>).
 *    </li>
 *    <li>
 *       In other server-side scripting contexts (e.g. the Script module) you would typically use {@link #getEscaped(Object, String...)} or
 *       {@link #getArrayEscaped(Object, String...)} and output the (already) escaped value using Velocity (e.g. <code>$theEscapedValue</code>).
 *    </li>
 * </ul>
 * @param <T> native script value
 * @author Magnus Lövgren
 * @since Sitevision 4.5.2
 */

interface Properties {
  /**
   * Gets named properties from a given Node-resolvable object.
   *
   * <p>
   *    <em>See code examples in the interface description above.</em>
   * </p>
   * @param aJcrNodeResolvable something that can be resolved as a Node. Typically a Node, a Node identifier or a relative URL of a Node (the URI property)
   * @param aPropertyNames the names of the properties of interest
   * @return the properties as a native Javascript object
   * @throws Exception if the scripting engine fails to convert property values to a native Javascript object
   * @see #getEscaped(Object, String...)
   */
  get(
    aJcrNodeResolvable: java.lang.Object,
    aPropertyNames: java.lang.String
  ): unknown;

  /**
   * Gets escaped named properties from a given Node-resolvable object.
   *
   * <p>
   *    This method is equivalent with {@link #get(Object, String...)} except that all string values will be escaped.
   * </p>
   * @param aJcrNodeResolvable something that can be resolved as a Node. Typically a Node, a Node identifier or a relative URL of a Node (the URI property)
   * @param aPropertyNames the names of the properties of interest
   * @return the escaped properties as a native Javascript object
   * @throws Exception if the scripting engine fails to convert property values to a native Javascript object
   * @since Sitevision 6.2
   */
  getEscaped(
    aJcrNodeResolvable: java.lang.Object,
    aPropertyNames: java.lang.String
  ): unknown;

  /**
   * Processes an iterable object and returns an array of named properties for each Node-resolvable object that is iterated.
   *
   * <p>
   *    This method is conceptually equivalent with the {@link #get(Object, String...) get} method but
   *    the core functionality of this method is to process something that can be iterated in order to handle <em>multiple</em> nodes
   *    and deliver properties for them as an array.
   * </p>
   *
   * <p>
   *    <em>See code examples in the interface description above.</em>
   * </p>
   * @param aIterable something that can be resolved as a Node or something that can be iterated and contains objects that can be resolved as a Node. Typically an array, {@link javax.jcr.NodeIterator}, {@link senselogic.sitevision.api.search.SearchResult}, {@link java.util.Collection} or {@link senselogic.sitevision.api.base.FilterSplit} (the <em>accepted</em> nodes will be processed)
   * @param aPropertyNames the names of the properties of interest
   * @return a native Javascript array with properties
   * @throws Exception if the scripting engine fails to convert property values to a native Javascript object
   * @see senselogic.sitevision.api.node.NodeIteratorUtil
   * @see #getArrayEscaped(Object, String...)
   * @since Sitevision 6.1
   */
  getArray(
    aIterable: java.lang.Object,
    aPropertyNames: java.lang.String
  ): unknown;

  /**
   * Processes an iterable object and returns an array of escaped named properties for each Node-resolvable object that is iterated.
   *
   * <p>
   *    This method is equivalent with {@link #getArray(Object, String...)} except that all string values will be escaped.
   * </p>
   * @param aIterable something that can be resolved as a Node or something that can be iterated and contains objects that can be resolved as a Node. Typically an array, {@link javax.jcr.NodeIterator}, {@link senselogic.sitevision.api.search.SearchResult}, {@link java.util.Collection} or {@link senselogic.sitevision.api.base.FilterSplit} (the <em>accepted</em> nodes will be processed)
   * @param aPropertyNames the names of the properties of interest
   * @return a native Javascript array with escaped properties
   * @throws Exception if the scripting engine fails to convert property values to a native Javascript object
   * @since Sitevision 6.2
   */
  getArrayEscaped(
    aIterable: java.lang.Object,
    aPropertyNames: java.lang.String
  ): unknown;
}
