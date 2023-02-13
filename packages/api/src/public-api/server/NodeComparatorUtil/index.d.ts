import type { CompoundComparatorBuilder } from "../CompoundComparatorBuilder";
import type { Resolver } from "../../types/senselogic/sitevision/api/base/Resolver";

/**
 * Node comparator utility interface.
 *
 * <p>
 *    Node comparators created by this utility can be used for easy node comparison and when sorting a collection
 *    of nodes via <code>Collections.sort(List&lt;Node&gt;, Comparator&lt;Node&gt;)</code> or such.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getNodeComparatorUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface NodeComparatorUtil {
  /**
   * Returns a comparator that compares nodes by the string value of a property in a case-insensitive manner.
   *
   * <p>
   *    This is a convenience for the {@link #getPropertyComparator(String, java.util.Locale)} method, using the
   *    current locale as returned by {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}.
   * </p>
   * <p>
   *    <strong>Example</strong>
   *    <br>This Velocity code will sort the $listOfNodes List by comparing the 'displayName' property for each Node
   * </p>
   * <pre><code>
   *    #set ($nodeComparatorUtil = $sitevisionUtils.NodeComparatorUtil)
   *    #set ($displayNameComparator = $nodeComparatorUtil.getPropertyComparator('displayName'))
   *
   *    #set ($instanceCreatorUtil = $sitevisionUtils.InstanceCreatorUtil)
   *    #set ($collections = $instanceCreatorUtil.CollectionsInstance)
   *
   *    $collections.sort($listOfNodes, $displayNameComparator)
   * </code></pre>
   * <p>
   *    <em>Note! This comparator imposes orderings that are inconsistent with equals.</em>
   * </p>
   * @param aPropertyName the name of the property
   * @return a comparator
   * @see #getPropertyComparator(String, java.util.Locale)
   */
  getPropertyComparator(aPropertyName: string): unknown;

  /**
   * Returns a comparator that compares nodes by the string value of a property in a case-insensitive manner using a specified locale.
   *
   * <p>
   *    The property value will be extracted as a string using {@link senselogic.sitevision.api.property.PropertyUtil},
   *    and a <code>null</code> value will be treated as an empty string.
   * </p>
   *
   * <p><strong>Why using proper Locale is important</strong></p>
   * <p>
   *    The comparators returned from this method will rely on a <code>Collator</code> and they have different comparison
   *    rules for different locales. The returned comparator might give unexpected results if a locale is used that doesn't
   *    match actual property values.
   *
   *    This is best illustrated by an example of how typical <em>swedish</em> values will be compared with different locales.
   *    Assume we have a List of nodes that should be compared by a certain property and these are the actual string values
   *    for the property of the nodes in the list:
   * </p>
   * <p>
   *    <code>"a", "A", "b", "B", "z", "Z", "å", "Å", "ä", "Ä", "ö", "Ö"</code>
   * </p>
   * <p>
   *    When using the
   *    {@link senselogic.sitevision.api.script.factory.CollectionsInstance#sort(java.util.List, java.util.Comparator)
   *    Collections.sort(List&lt;Node&gt;, Comparator&lt;Node&gt;)}
   *    method to sort the list, this is how they typically(*) will be sorted with different locales:
   * </p>
   * <table style="border:1px solid black" summary="">
   *    <caption style="text-align:left">Some examples</caption>
   *    <tr>
   *       <th style="text-align:left">Locale</th><th style="text-align:left">Result (*)</th>
   *    </tr>
   *    <tr>
   *       <td>Swedish</td><td><code>"a", "A", "b", "B", "z", "Z", "å", "Å", "ä", "Ä", "ö", "Ö"</code></td>
   *    </tr>
   *    <tr>
   *       <td>Norwegian</td><td><code>"a", "A", "b", "B", "z", "Z", "ä", "Ä", "ö", "Ö", "å", "Å"</code></td>
   *    </tr>
   *    <tr>
   *       <td>English</td><td><code>"a", "A", "å", "Å", "ä", "Ä", "b", "B", "ö", "Ö", "z", "Z"</code></td>
   *    </tr>
   *    <tr>
   *       <td>German</td><td><code>"a", "A", "å", "Å", "ä", "Ä", "b", "B", "ö", "Ö", "z", "Z"</code></td>
   *    </tr>
   * </table>
   * <p>
   *    <em>(* this comparator is case-insensitive so <code>["a", "A"]</code> can as well be ordered <code>["A", "a"]</code>
   *    depending on initial order)</em>
   * </p>
   *
   * <p>
   *    <em>Note! This comparator imposes orderings that are inconsistent with equals.</em>
   * </p>
   * @param aPropertyName the name of the property. <em>Note! If aPropertyName is <code>null</code> or whitespace only, the returned comparator will be non-comparing, i.e. a NO-OP comparator that always will return 0 ("equal") for all nodes.</em>
   * @param aLocale the locale that should be used when comparing two properties. If aLocale is <code>null</code>, the current locale (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()} will be used).
   * @return a comparator
   */
  getPropertyComparator(aPropertyName: string, aLocale: unknown): unknown;

  /**
   * Returns a comparator that compares nodes by the value of a calendar property.
   *
   * <p>
   *    The property value will be extracted as a calendar using {@link senselogic.sitevision.api.property.PropertyUtil},
   *    and comparing a <code>null</code> value will result in <code>-1</code> (i.e. less than a non-null).
   * </p>
   *
   * <p>
   *    <em>Note! This comparator imposes orderings that are inconsistent with equals.</em>
   * </p>
   * @param aCalendarPropertyName the name of the calendar property <em>Note! If aCalendarPropertyName is <code>null</code> or whitespace only, the returned comparator will be non-comparing, i.e. a NO-OP comparator that always will return 0 ("equal") for all nodes.</em>
   * @return a comparator
   * @since Sitevision 3.6.3
   */
  getCalendarPropertyComparator(aCalendarPropertyName: string): unknown;

  /**
   * Returns a comparator that compares nodes by the value of a calendar property.
   *
   * <p>
   *    The property value will be extracted as an int using {@link senselogic.sitevision.api.property.PropertyUtil},
   *    and a <em>no value</em> value will be treated as <code>0</code>.
   * </p>
   *
   * <p>
   *    <em>Note! This comparator imposes orderings that are inconsistent with equals.</em>
   * </p>
   * @param aIntPropertyName the name of the int property <em>Note! If aIntPropertyName is <code>null</code> or whitespace only, the returned comparator will be non-comparing, i.e. a NO-OP comparator that always will return 0 ("equal") for all nodes.</em>
   * @return a comparator
   * @since Sitevision 3.6.3
   */
  getIntPropertyComparator(aIntPropertyName: string): unknown;

  /**
   * Returns a comparator that reverses the result of another.
   *
   * <p>
   *    The compareTo method of this comparator multiplies the result of another comparator's compareTo method with -1.
   *    This will typically lead to a completely reversed order when sorted.
   * </p>
   *
   * <p>
   *    <em>Note! This comparator imposes orderings that are inconsistent with equals.</em>
   * </p>
   * @param aNodeComparator a comparator <em>Note! If aNodeComparator is <code>null</code>, the returned comparator will be non-comparing, i.e. a NO-OP comparator that always will return 0 ("equal") for all nodes.</em>
   * @return a comparator
   * @since Sitevision 3.6.3
   */
  getReversedComparator(aNodeComparator: unknown): unknown;

  /**
   * Gets a builder for creating a compound comparator that allows comparison based on multiple node comparators.
   * @return a CompoundComparatorBuilder
   * @since Sitevision 3.6.3
   */
  getCompoundComparatorBuilder(): CompoundComparatorBuilder;

  /**
   * Gets a comparator that compares nodes by the values extracted by a resolver.
   *
   * <p>
   *    <strong>Example</strong><br>
   *    This Comparator can be helpful when you want to sort <code>sv:collaborationGroup</code> nodes in "most active" order.
   *    An example of how this can be implemented this in server-side Javascript is demonstrated below:
   * </p>
   * <pre><code>    var myIdentity = require('PortletContextUtil').getCurrentUserIdentity(),
   *       userIdentityWrapper = require('UserFactory').getUserIdentityWrapper(myIdentity),
   *       myGroups,
   *       group,
   *       count,
   *       i;
   *
   *    if (userIdentityWrapper) {
   *       myGroups = userIdentityWrapper.getCollaborationGroups();
   *       myGroups = toSortedList(myGroups);
   *       count = myGroups.size();
   *
   *       <em>// Render my groups</em>
   *       for (i = 0; i &lt; count; i++) {
   *          group = myGroups.get(i);
   *          ...
   *       }
   *    }
   *
   *    <em>// Helper function that uses a ResolverComparator to sort a collection of Collaboration groups</em>
   *    function toSortedList(groups) {
   *       var sortedGroups = require('InstanceCreatorUtil').getList(),
   *          collections,
   *          groupDateResolver,
   *          resolverComparator;
   *
   *       sortedGroups.addAll(groups); <em>// Wrap in list to make it sortable</em>
   *
   *       if (sortedGroups.size() &gt; 1) {
   *          <em>// Create a resolver that can resolve appropriate Date from a collaboration group</em>
   *          groupDateResolver = require('NodeResolverUtil').getCollaborationDateResolver();
   *
   *          <em>// Create a comparator that compares values extracted by the resolver</em>
   *          resolverComparator = require('NodeComparatorUtil').getResolverComparator(groupDateResolver);
   *
   *          <em>// Get Collections and Sort!</em>
   *          collections = require('CollectionsInstance');
   *          collections.sort(sortedGroups, resolverComparator);
   *          collections.reverse(sortedGroups); <em>// ...and reverse result to get 'latest' first</em>
   *       }
   *       return sortedGroups;
   *    }
   * </code></pre>
   *
   * <p>
   *    <em>Note!</em> Beware of resolved <code>null</code> values (null will always be "less" than a non-null)!
   * </p>
   * @param aResolver the node value resolver
   * @param <V> The comparable value type
   * @return a node comparator. Note! If aResolver is null, the returned comparator will be non-comparing, i.e. a NO-OP comparator that always will return 0 ("equal") for all nodes.
   * @see NodeResolverUtil
   * @since Sitevision 4.1
   */
  getResolverComparator(aResolver: Resolver): unknown;
}

declare namespace NodeComparatorUtil {}

declare var nodeComparatorUtil: NodeComparatorUtil;

export default nodeComparatorUtil;
