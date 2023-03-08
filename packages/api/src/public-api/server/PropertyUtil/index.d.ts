import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";

import type { Binary } from "../../types/javax/jcr/Binary";
import type { Calendar } from "../../types/java/util/Calendar";
import type { List } from "../../types/java/util/List";

/**
 * Utility interface for getting Node property values.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getPropertyUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 *
 *  <p>
 *     The advantage of using these methods instead of explicitly use the "get property" methods as defined in JCR is that none of the
 *     methods defined here throw Exceptions. (Exception handling can of course be handled properly if you implements your own JSR 286
 *     portlet in Java, but when rendering in Velocity you can't catch Exceptions.)
 *  </p>
 *  --------------------------------------------------------- <br>
 *  <strong>Example 1:</strong> You use Velocity and strongly suspect that a <code>Node</code> have a
 *  <code>boolean</code> property called "isInUse"<br>
 *  ---------------------------------------------------------
 *  <p>
 *     <strong>1. The JCR way:</strong>
 *  </p>
 *  <p>
 *     a) This can return <code>true</code>, <code>false</code> or throw an <code>Exception</code>:
 *  </p>
 *  <pre><code>
 *    #if ($aNode.getProperty('isInUse').boolean)
 *      ...
 *    #end</code></pre>
 *  <p>
 *     b) Even if you ensure there actually are a property called "isInUse" it can still throw an <code>Exception</code> if the property isn't a
 *     <code>boolean</code>:
 *  </p>
 *  <pre><code>
 *    #if ($aNode.hasProperty('isInUse') &amp;&amp; $aNode.getProperty('isInUse').boolean)
 *      ...
 *    #end</code></pre>
 *  <p>
 *     c) Your best possible effort to avoid Exceptions is to ensure that there are a property and that it actually is of <code>boolean</code>
 *     type before you check its value:<br>
 *     (Note! Property types are defined in <code>javax.jcr.PropertyType</code> and the <code>BOOLEAN</code> type is represented by the
 *     <code>int</code> value 6):
 *  </p>
 *  <pre><code>
 *    #if ($aNode.hasProperty('isInUse') &amp;&amp; $aNode.getProperty('isInUse').type == 6 &amp;&amp; $aNode.getProperty('isInUse').boolean)
 *      ...
 *    #end</code></pre>
 *  <p>
 *     &nbsp;&nbsp;&nbsp;<em>The drawback with this alternative is that you miss boolean properties that isn't registered as the
 *     <code>BOOLEAN</code> type (e.g. a <code>String</code> property with the value "true" or "false")</em>
 *  </p>
 *
 *  <p>
 *     <strong>2. The PropertyUtil way:</strong>
 *  </p>
 *  <p>
 *     This always returns <code>true</code> or <code>false</code>:
 *  </p>
 *  <pre><code>
 *    #set ($propertyUtil = $sitevisionUtils.propertyUtil)
 *    ...
 *    #if ($propertyUtil.getBoolean($aNode, 'isInUse')
 *      ...
 *    #end</code></pre>
 *
 *  --------------------------------------------------------- <br>
 *  <strong>Example 2:</strong> You use Velocity and want to do an integer addition of a fixed <code>int</code> value and a <code>int</code>
 *  property "myNumber".<br>
 *  (Note! An addition in Velocity must be executed in a <code>#set</code> statement)<br>
 *  ---------------------------------------------------------
 *  <p>
 *     <strong>1. The JCR way:</strong>
 *  </p>
 *  <p>
 *     This can't be achieved in Velocity! You can only fetch the value as a long (<code>$aNode.getProperty('myNumber').long</code>)
 *     but Velocity needs an <code>int</code> or an <code>Integer</code> to perform addition.
 *  </p>
 *  <p>
 *     <strong>2. The PropertyUtil way:</strong>
 *  </p>
 *  <p>
 *     This will work in Velocity (i.e. use <code>PropertyUtil</code> to get the <code>int</code>):
 *  </p>
 *  <pre><code>
 *    #set ($propertyUtil = $sitevisionUtils.propertyUtil)
 *    ...
 *    #set ($result = $propertyUtil.getInt($aNode, 'myNumber') + 45)</code></pre>
 *  --------------------------------------------------------- <br>
 *  <strong>Example 3:</strong> You use Velocity and want to get two int property values from a node and one of the property names contains
 *  illegal characters.<br>
 *  (Note! Illegal characters in node names and property names must always be escaped)<br>
 *  ---------------------------------------------------------
 *  <p>
 *  Since the property name "<code>anIllegal[./]name</code>" contains illegal characters it must be escaped.
 *  To do this you typically use the {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String) escapeJcrName(String)}
 *  method in {@link senselogic.sitevision.api.text.EndecUtil}.
 *  Note that the property name "<code>aLegalName</code>" is <em>not</em> escaped since it doesn't contain any illegal characters.
 *  For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
 *  </p>
 *  <pre><code>
 *    #set ($propertyUtil = $sitevisionUtils.propertyUtil)
 *    #set ($endecUtil = $sitevisionUtils.endecUtil)
 *    ...
 *    #set ($escapedName = $endecUtil.escapeJcrName('anIllegal[./]name'))
 *    #set ($firstValue = $propertyUtil.getInt($aNode, $escapedName)
 *
 *    #set ($secondValue = $propertyUtil.getInt($aNode, 'aLegalName')
 *  </code></pre>
 * @author Magnus Lövgren
 */
export interface PropertyUtil {
  /**
   * Gets a String property from a "nested" Node's property.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code> has a
   *  <code>String</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the value for aPropertyName as <code>String</code>. If no property exists, <code>null</code> is returned.
   * @see #getNestedStringEscaped(javax.jcr.Node, String, String)
   */
  getNestedString(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): string;

  /**
   * Gets a String property from a "nested" Node's property and returns it XML escaped.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code> has a
   *  <code>String</code> property).
   *
   *  <p>
   *     This is a convenience method for getting a "nested" String property that also should be XML escaped. A String that should be included
   *     in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   *  </p>
   *  <p>
   *     This Velocity code:
   *  </p>
   *  <pre><code>
   *     #set ($endecUtil = ...)
   *     #set ($propertyUtil = ...)
   *     ...
   *     &lt;p&gt;
   *        $endecUtil.escapeXML($propertyUtil.getNestedString($myNode, 'aNodeProperty', 'aProperty'))
   *     &lt;/p&gt;
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($propertyUtil = ...)
   *     ...
   *     &lt;p&gt;
   *        $!propertyUtil.getNestedStringEscaped($myNode, 'aNodeProperty', 'aProperty')
   *     &lt;/p&gt;
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the value for aPropertyName as an XML escaped <code>String</code>. If no property exists, <code>null</code> is returned.
   * @see #getNestedString(javax.jcr.Node, String, String)
   * @see senselogic.sitevision.api.text.EndecUtil#escapeXML(String)
   * @since Sitevision 3.5
   */
  getNestedStringEscaped(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): string;

  /**
   * Gets a String property from a "nested" Node's property with a fallback value if the property doesn't exist.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code> has a
   *  <code>String</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>String</code>. If no property exists, aDefaultValue is returned.
   * @see #getNestedStringEscaped(javax.jcr.Node, String, String, String)
   */
  getNestedString(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: String | string
  ): string;

  /**
   * Gets a String property from a "nested" Node's property with a fallback value if the property doesn't exist, and returns it XML escaped.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>String</code> property).
   *
   *  <p>
   *     This is a convenience method for getting a "nested" String property that also should be XML escaped. A String that should be included
   *     in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   *  </p>
   *  <p>
   *     This Velocity code:
   *  </p>
   *  <pre><code>
   *     #set ($endecUtil = ...)
   *     #set ($propertyUtil = ...)
   *     ...
   *     &lt;p&gt;
   *        $endecUtil.escapeXML($propertyUtil.getNestedString($myNode, 'aNodeProperty', 'aProperty', 'a default value'))
   *     &lt;/p&gt;
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($propertyUtil = ...)
   *     ...
   *     &lt;p&gt;
   *        $propertyUtil.getNestedStringEscaped($myNode, 'aNodeProperty', 'aProperty', 'a default value')
   *     &lt;/p&gt;
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue a (non XML escaped) fallback value if no value exists
   * @return the value for aPropertyName as an XML escaped <code>String</code>. If no property exists, aDefaultValue is XML escaped and returned.
   * @see #getNestedString(javax.jcr.Node, String, String, String)
   * @see senselogic.sitevision.api.text.EndecUtil#escapeXML(String)
   * @since Sitevision 3.5
   */
  getNestedStringEscaped(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: String | string
  ): string;

  /**
   * Gets an int property from a "nested" Node's property.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has an <code>int/Integer</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the value for aPropertyName as <code>int</code>. If no property exists or it isn't compatible with an <code>int</code>, 0 is returned.
   */
  getNestedInt(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): number;

  /**
   * Gets an int property from a "nested" Node's property with a fallback value if the property doesn't exist or is incompatible with the int type.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has an <code>int/Integer</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>int</code>. If no property exists or it isn't compatible with an <code>int</code>,&#xA; aDefaultValue is returned.
   */
  getNestedInt(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: number
  ): number;

  /**
   * Gets a double property from a "nested" Node's property.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>double/Double</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the value for aPropertyName as <code>double</code>. If no property exists or it isn't compatible with a <code>double</code>,&#xA; 0.0 is returned.
   * @since Sitevision 2.6.1_09
   */
  getNestedDouble(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): number;

  /**
   * Gets a double property from a "nested" Node's property with a fallback value if the property doesn't exist or is incompatible
   *  with the double type.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>double/Double</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>double</code>. If no property exists or it isn't compatible with a <code>double</code>,&#xA; aDefaultValue is returned.
   * @since Sitevision 2.6.1_09
   */
  getNestedDouble(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: number
  ): number;

  /**
   * Gets a boolean property from a "nested" Node's property.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>Boolean</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the value for aPropertyName as <code>boolean</code>. If no property exists or it isn't compatible with a <code>boolean</code>,&#xA; <code>false</code> is returned.
   */
  getNestedBoolean(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): boolean;

  /**
   * Gets a boolean property from a "nested" Node's property with a fallback value if the property doesn't exist or is incompatible
   *  with the boolean type.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>Boolean</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>boolean</code>. If no property exists or it isn't compatible with a <code>boolean</code>,&#xA; aDefaultValue is returned.
   */
  getNestedBoolean(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: boolean
  ): boolean;

  /**
   * Gets a Node property from a "nested" Node's property.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>Node</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the value for aPropertyName as <code>Node</code>. If no property exists or it isn't a <code>Node</code>, <code>null</code> is returned.
   */
  getNestedNode(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): Node;

  /**
   * Gets a Node property from a "nested" Node's property with a fallback value if the property doesn't exist.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>Node</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>Node</code>. If no property exists or it isn't a <code>Node</code>, aDefaultValue is returned.
   */
  getNestedNode(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: Node
  ): Node;

  /**
   * Gets a Binary property from a Node.
   *
   *  <p>
   *     Ensure to always handle resources appropriately when working with Binary! If you get a stream via {@link javax.jcr.Binary#getStream()},
   *     you must also <code>close</code> the stream when you are done.
   *  </p>
   *
   *  <p>
   *     <strong>Note!</strong> The <code>Binary</code> support is limited, see {@link javax.jcr.Property#getBinary()} for more information!
   *  </p>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for aPropertyName as <code>Binary</code>. If no property exists, <code>null</code> is returned.
   * @since Sitevision 3.5
   */
  getBinary(aNode: Node, aPropertyName: String | string): Binary;

  /**
   * Gets a Binary property from a node with a fallback value if the property doesn't exist.
   *
   *  <p>
   *     Ensure to always handle resources appropriately when working with Binary! If you get a stream via {@link javax.jcr.Binary#getStream()},
   *     you must also <code>close</code> the stream when you are done.
   *  </p>
   *
   *  <p>
   *     <strong>Note!</strong> The <code>Binary</code> support is limited, see {@link javax.jcr.Property#getBinary()} for more information!
   *  </p>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>Binary</code>. If no property exists, aDefaultValue is returned.
   * @since Sitevision 3.5
   */
  getBinary(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: Binary
  ): Binary;

  /**
   * Gets a Binary property from a "nested" Node's property.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>Binary</code> property).
   *
   *  <p>
   *     Ensure to always handle resources appropriately when working with Binary! If you get a stream via {@link javax.jcr.Binary#getStream()},
   *     you must also <code>close</code> the stream when you are done.
   *  </p>
   *
   *  <p>
   *     <strong>Note!</strong> The <code>Binary</code> support is limited, see {@link javax.jcr.Property#getBinary()} for more information!
   *  </p>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on <code>aNode</code>
   * @param aPropertyName the name of the Binary property for the "inner/nested" <code>Node</code>
   * @return the value for aPropertyName as <code>Binary</code>. If no property exists or it isn't a <code>Binary</code>,&#xA; <code>null</code> is returned.
   * @since Sitevision 3.5
   */
  getNestedBinary(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): Binary;

  /**
   * Gets a Binary property from a "nested" Node's property with a fallback value if the property doesn't exist.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>Binary</code> property).
   *
   *  <p>
   *     Ensure to always handle resources appropriately when working with Binary! If you get a stream via {@link javax.jcr.Binary#getStream()},
   *     you must also <code>close</code> the stream when you are done.
   *  </p>
   *
   *  <p>
   *     <strong>Note!</strong> The <code>Binary</code> support is limited, see {@link javax.jcr.Property#getBinary()} for more information!
   *  </p>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on <code>aNode</code>
   * @param aPropertyName the name of the Binary property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>Binary</code>. If no property exists or it isn't a <code>Binary</code>, aDefaultValue is returned.
   * @since Sitevision 3.5
   */
  getNestedBinary(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: Binary
  ): Binary;

  /**
   * Gets a String property from a Node.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for aPropertyName as <code>String</code>. If no property exists, <code>null</code> is returned.
   * @see #getStringEscaped(javax.jcr.Node, String)
   */
  getString(aNode: Node, aPropertyName: String | string): string;

  /**
   * Gets a String property from a Node and returns it XML escaped.
   *
   *  <p>
   *     This is a convenience method for getting a String property that also should be XML escaped. A String that should be included
   *     in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   *  </p>
   *  <p>
   *     This Velocity code:
   *  </p>
   *  <pre><code>
   *     #set ($endecUtil = ...)
   *     #set ($propertyUtil = ...)
   *     ...
   *     &lt;p&gt;
   *        $endecUtil.escapeXML($propertyUtil.getString($myNode, 'aProperty'))
   *     &lt;/p&gt;
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($propertyUtil = ...)
   *     ...
   *     &lt;p&gt;
   *        $!propertyUtil.getStringEscaped($myNode, 'aProperty')
   *     &lt;/p&gt;
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for aPropertyName as an XML escaped <code>String</code>. If no property exists, <code>null</code> is returned.
   * @see #getString(javax.jcr.Node, String)
   * @see senselogic.sitevision.api.text.EndecUtil#escapeXML(String)
   * @since Sitevision 3.5
   */
  getStringEscaped(aNode: Node, aPropertyName: String | string): string;

  /**
   * Gets a String property from a node with a fallback value if the property doesn't exist.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>String</code>. If no property exists, aDefaultValue is returned.
   * @see #getStringEscaped(javax.jcr.Node, String, String)
   */
  getString(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: String | string
  ): string;

  /**
   * Gets a String property from a Node, with a fallback value, and returns it XML escaped.
   *
   *  <p>
   *     This is a convenience method for getting a String property that also should be XML escaped. A String that should be included
   *     in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   *  </p>
   *  <p>
   *     This Velocity code:
   *  </p>
   *  <pre><code>
   *     #set ($endecUtil = ...)
   *     #set ($propertyUtil = ...)
   *     ...
   *     &lt;p&gt;
   *        $endecUtil.escapeXML($propertyUtil.getString($myNode, 'aProperty', 'a default value'))
   *     &lt;/p&gt;
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($propertyUtil = ...)
   *     ...
   *     &lt;p&gt;
   *        $propertyUtil.getStringEscaped($myNode, 'aProperty', 'a default value')
   *     &lt;/p&gt;
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue a (non XML escaped) fallback value if no value exists
   * @return the value for aPropertyName as an XML escaped <code>String</code>. If no property exists, aDefaultValue is XML escaped and returned.
   * @see #getString(javax.jcr.Node, String, String)
   * @see senselogic.sitevision.api.text.EndecUtil#escapeXML(String)
   * @since Sitevision 3.5
   */
  getStringEscaped(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: String | string
  ): string;

  /**
   * Gets an int property from a Node.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the <code>int</code> value for aPropertyName. If no property exists or it isn't compatible with an <code>int</code>, 0 is returned.
   */
  getInt(aNode: Node, aPropertyName: String | string): number;

  /**
   * Gets an int property from a node with a fallback value if the property doesn't exist or is incompatible with the int type.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the <code>int</code> value for aPropertyName. If no property exists or it isn't compatible with an <code>int</code>,&#xA; aDefaultValue is returned.
   */
  getInt(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: number
  ): number;

  /**
   * Gets a double property from a Node.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the <code>double</code> value for aPropertyName. If no property exists or it isn't compatible with a <code>double</code>,&#xA; 0.0 is returned.
   * @since Sitevision 2.6.1_09
   */
  getDouble(aNode: Node, aPropertyName: String | string): number;

  /**
   * Gets a double property from a node with a fallback value if the property doesn't exist or is incompatible with the double type.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the <code>double</code> value for aPropertyName. If no property exists or it isn't compatible with a <code>double</code>,&#xA; aDefaultValue is returned.
   * @since Sitevision 2.6.1_09
   */
  getDouble(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: number
  ): number;

  /**
   * Gets a boolean property from a Node.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for aPropertyName as <code>boolean</code>. If no property exists or it isn't compatible with a <code>boolean</code>,&#xA; <code>false</code> is returned.
   */
  getBoolean(aNode: Node, aPropertyName: String | string): boolean;

  /**
   * Gets a boolean property from a Node with a fallback value if the property doesn't exist or is incompatible with the boolean type.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>boolean</code>. If no property exists or it isn't compatible with a <code>boolean</code>,&#xA; aDefaultValue is returned.
   */
  getBoolean(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: boolean
  ): boolean;

  /**
   * Gets a Node property from a Node.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for aPropertyName as <code>Node</code>. If no property exists or it isn't a <code>Node</code>, <code>null</code> is returned.
   */
  getNode(aNode: Node, aPropertyName: String | string): Node;

  /**
   * Gets a Node property from a Node if an enabling property allows it.
   *
   *  <p>
   *     In some Sitevision portlet configs there are a "boolean" property that enables a "Node" property and the "Node" might be <code>null</code>.
   *     This is a convenience method for such cases. In Velocity, code like this:
   *  </p>
   *  <pre><code>
   *     #set ($startPage = ...) <em>## Ensure start page value...</em>
   *     #if ($propertyUtil.getBoolean($portlet, 'useCustomStartPage'))
   *        #set ($customStartPage = $scriptUtil.getNonNull(${propertyUtil.getNode($portlet, 'customStartPage')}))
   *        #if ($customStartPage)
   *           #set ($startPage = $customStartPage)
   *        #end
   *     #end
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($startPage = $scriptUtil.getNonNull(${propertyUtil.getEnabledNode($portlet, 'useCustomStartPage', 'customStartPage')}))
   *     #if (!$startPage)
   *        #set ($startPage = ...) <em>## Set default start page value if no custom start page was set...</em>
   *     #end
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names
   *     (i.e. <code>aEnablingPropertyName</code> and <code>aNodePropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has the properties
   * @param aEnablingPropertyName the name of the boolean property that enables the Node denoted by <code>aPropertyName</code>
   * @param aNodePropertyName the name of the property
   * @return the value for aNodePropertyName as <code>Node</code>. If no property exists or it isn't a <code>Node</code>,&#xA; <code>null</code> is returned.&#xA; A <code>Node</code> will never be returned if <code>aEnablingPropertyName</code> doesn't exist, isn't compatible with a&#xA; <code>boolean</code> or isn't <code>true</code>.
   * @see #getEnabledNode(javax.jcr.Node, String, String, javax.jcr.Node)
   * @since Sitevision 3.0
   */
  getEnabledNode(
    aNode: Node,
    aEnablingPropertyName: String | string,
    aNodePropertyName: String | string
  ): Node;

  /**
   * Gets a Node property from a Node if an enabling property allows it, with a fallback Node value.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names
   *     (i.e. <code>aEnablingPropertyName</code> and <code>aNodePropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has the properties
   * @param aEnablingPropertyName the name of the boolean property that enables the Node denoted by <code>aPropertyName</code>
   * @param aNodePropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aNodePropertyName as <code>Node</code>. If no property exists or it isn't a <code>Node</code>,&#xA; <code>aDefaultValue</code> is returned.&#xA; If <code>aEnablingPropertyName</code> doesn't exist, isn't compatible with a <code>boolean</code> or isn't <code>true</code>,&#xA; <code>aDefaultValue</code> is returned.
   * @see #getEnabledNode(javax.jcr.Node, String, String)
   * @since Sitevision 3.0
   */
  getEnabledNode(
    aNode: Node,
    aEnablingPropertyName: String | string,
    aNodePropertyName: String | string,
    aDefaultValue: Node
  ): Node;

  /**
   * Gets a String property from a Node if an enabling boolean property allows it.
   *
   *  <p>
   *     In some Sitevision portlet configs there are a "boolean" property that enables a "String" property and the "String" might
   *     be <code>null</code>. This is a convenience method for such cases. In Velocity, code like this:
   *  </p>
   *  <pre><code>
   *     #set ($name = ...) <em>## Set default name...</em>
   *     #if ($propertyUtil.getBoolean($portlet, 'useCustomName'))
   *        #set ($customName = $scriptUtil.getNonNull(${propertyUtil.getNode($portlet, 'customName')}))
   *        #if ($customName)
   *           #set ($name = $customName)
   *        #end
   *     #end
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($name = $scriptUtil.getNonNull(${propertyUtil.getEnabledString($portlet, 'useCustomName', 'customName')}))
   *     #if (!$name)
   *        #set ($name = ...) <em>## Set default name if no custom name was set...</em>
   *     #end
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names
   *     (i.e. <code>aEnablingPropertyName</code> and <code>aStringPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has the properties
   * @param aEnablingPropertyName the name of the boolean property that enables the String denoted by <code>aStringPropertyName</code>
   * @param aStringPropertyName the name of the String property
   * @return the value for aStringPropertyName as <code>String</code>. If no property exists, <code>null</code> is returned.&#xA; Null will always be returned if <code>aEnablingPropertyName</code> doesn't exist, isn't compatible with a <code>boolean</code>&#xA; or isn't <code>true</code>.
   * @see #getEnabledString(javax.jcr.Node, String, String, String)
   * @since Sitevision 4.0
   */
  getEnabledString(
    aNode: Node,
    aEnablingPropertyName: String | string,
    aStringPropertyName: String | string
  ): string;

  /**
   * Gets a String property from a Node if an enabling boolean property allows it, with a fallback value.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names
   *     (i.e. <code>aEnablingPropertyName</code> and <code>aStringPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has the properties
   * @param aEnablingPropertyName the name of the boolean property that enables the String denoted by <code>aStringPropertyName</code>
   * @param aStringPropertyName the name of the String property
   * @param aDefaultValue fallback value to return if no value exist
   * @return the value for aStringPropertyName as <code>String</code>. If no property exists, <code>aDefaultValue</code> is returned.&#xA; <code>aDefaultValue</code> will always be returned if <code>aEnablingPropertyName</code> doesn't exist, isn't compatible with a&#xA; <code>boolean</code> or isn't <code>true</code>.
   * @see #getEnabledString(javax.jcr.Node, String, String)
   * @since Sitevision 4.0
   */
  getEnabledString(
    aNode: Node,
    aEnablingPropertyName: String | string,
    aStringPropertyName: String | string,
    aDefaultValue: String | string
  ): string;

  /**
   * Gets a String property from a Node if an enabling boolean property allows it, and returns it XML escaped.
   *
   *  <p>
   *     In some Sitevision portlet configs there are a "boolean" property that enables a "String" property and the "String"
   *     might be <code>null</code>. This is a convenience method for such cases where you want the value XML escaped. In Velocity, code like this:
   *  </p>
   *  <pre><code>
   *     #set ($endecUtil = ...)
   *     #set ($escapedName = ...) <em>## Set default escaped name...</em>
   *     #if ($propertyUtil.getBoolean($portlet, 'useCustomName'))
   *        #set ($customName = $scriptUtil.getNonNull(${propertyUtil.getNode($portlet, 'customName')}))
   *        #if ($customName)
   *           #set ($escapedName = $endecUtil.escapeXML($customName))
   *        #end
   *     #end
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($escapedName = $scriptUtil.getNonNull(${propertyUtil.getEnabledStringEscaped($portlet, 'useCustomName', 'customName')}))
   *     #if (!$escapedName)
   *        #set ($escapedName = ...) <em>## Set default escaped name if no custom name was set...</em>
   *     #end
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names
   *     (i.e. <code>aEnablingPropertyName</code> and <code>aStringPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has the properties
   * @param aEnablingPropertyName the name of the boolean property that enables the String denoted by <code>aStringPropertyName</code>
   * @param aStringPropertyName the name of the String property
   * @return the value for aStringPropertyName as a XML escaped <code>String</code>. If no property exists, <code>null</code> is returned.&#xA; Null will always be returned if <code>aEnablingPropertyName</code> doesn't exist, isn't compatible with a <code>boolean</code>&#xA; or isn't <code>true</code>.
   * @see #getEnabledStringEscaped(javax.jcr.Node, String, String, String)
   * @since Sitevision 4.0
   */
  getEnabledStringEscaped(
    aNode: Node,
    aEnablingPropertyName: String | string,
    aStringPropertyName: String | string
  ): string;

  /**
   * Gets a String property from a Node if an enabling boolean property allows it, and returns it XML escaped with a fallback value.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names
   *     (i.e. <code>aEnablingPropertyName</code> and <code>aStringPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has the properties
   * @param aEnablingPropertyName the name of the boolean property that enables the String denoted by <code>aStringPropertyName</code>
   * @param aStringPropertyName the name of the String property
   * @param aDefaultValue the (non XML escaped) fallback value to return if no value exist
   * @return the value for aStringPropertyName as a XML escaped <code>String</code>. If no property exists, <code>aDefaultValue</code> is&#xA; XML escaped and returned.&#xA; <code>aDefaultValue</code> will always be XML escaped and returned if <code>aEnablingPropertyName</code> doesn't exist,&#xA; isn't compatible with a <code>boolean</code> or isn't <code>true</code>.
   * @see #getEnabledStringEscaped(javax.jcr.Node, String, String)
   * @since Sitevision 4.0
   */
  getEnabledStringEscaped(
    aNode: Node,
    aEnablingPropertyName: String | string,
    aStringPropertyName: String | string,
    aDefaultValue: String | string
  ): string;

  /**
   * Gets a Calendar property from a Node.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for aPropertyName as <code>Calendar</code>. If no property exists or it isn't a <code>Calendar</code>,&#xA; <code>null</code> is returned.
   * @since Sitevision 2.6.1_02
   */
  getCalendar(aNode: Node, aPropertyName: String | string): Calendar;

  /**
   * Gets a Calendar property from a Node with a fallback value if the property doesn't exist or is incompatible with the Calendar type.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>Calendar</code>. If no property exists or it isn't compatible with a <code>Calendar</code>,&#xA; aDefaultValue is returned.
   * @since Sitevision 2.6.1_02
   */
  getCalendar(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: Calendar
  ): Calendar;

  /**
   * Gets a Calendar property from a "nested" Node's property.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>Calendar/Date</code> property).
   *  <p>
   *  Note! The name of this method might seem awkward since a <code>Calendar</code> is returned, but this is to resemble the pattern of a
   *  <code>javax.jcr.Node</code> that has the method <code>getDate()</code> that returns a <code>Calendar</code>.
   *  </p>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on <code>aNode</code>
   * @param aPropertyName the name of the Calendar property for the "inner/nested" <code>Node</code>
   * @return the value for aPropertyName as <code>Calendar</code>. If no property exists or it isn't a <code>Calendar</code>,&#xA; <code>null</code> is returned.
   * @since Sitevision 2.6.1_02
   */
  getNestedCalendar(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): Calendar;

  /**
   * Gets a Calendar property from a "nested" Node's property with a fallback value if the property doesn't exist.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>Calendar/Date</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on <code>aNode</code>
   * @param aPropertyName the name of the Calendar property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>Calendar</code>. If no property exists or it isn't a <code>Calendar</code>,&#xA; aDefaultValue is returned.
   * @since Sitevision 2.6.1_02
   */
  getNestedCalendar(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: Calendar
  ): Calendar;

  /**
   * Gets a Node property from a Node with a fallback value if the property doesn't exist.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for aPropertyName as <code>Node</code>. If no property exists or it isn't a <code>Node</code>, aDefaultValue is returned.
   */
  getNode(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: Node
  ): Node;

  /**
   * Gets a <code>List</code> of property values from a Node.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the string value(s) for aPropertyName as a <code>List</code>. If no property exists, <code>null</code> is returned.
   * @see #getStringsEscaped(javax.jcr.Node, String)
   * @since Sitevision 2.6_06
   */
  getStrings(aNode: Node, aPropertyName: String | string): List;

  /**
   * Gets a <code>List</code> of XML escaped property values from a Node.
   *
   *  <p>
   *     This is a convenience method for getting a list of property values that also should be XML escaped. Strings that should be included
   *     in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   *  </p>
   *  <p>
   *     This Velocity code:
   *  </p>
   *  <pre><code>
   *     #set ($endecUtil = ...)
   *     #set ($propertyUtil = ...)
   *     ...
   *     #set ($valueList = $propertyUtil.getStrings($myNode, 'aProperty'))
   *     &lt;ul&gt;
   *     #foreach ($value in $valueList)
   *        &lt;li&gt;
   *           $endecUtil.escapeXML($value)
   *        &lt;/li&gt;
   *     #end
   *     &lt;/ul&gt;
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($propertyUtil = ...)
   *     ...
   *     #set ($escapedValueList = $propertyUtil.getStringsEscaped($myNode, 'aProperty'))
   *     &lt;ul&gt;
   *     #foreach ($escapedValue in $escapedValueList)
   *        &lt;li&gt;
   *           $escapedValue
   *        &lt;/li&gt;
   *     #end
   *     &lt;/ul&gt;
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the string value(s) for aPropertyName, XML escaped and embedded in a <code>List</code>.&#xA; If no property exists, <code>null</code> is returned.
   * @see #getString(javax.jcr.Node, String)
   * @see senselogic.sitevision.api.text.EndecUtil#escapeXML(String)
   * @since Sitevision 3.5
   */
  getStringsEscaped(aNode: Node, aPropertyName: String | string): List;

  /**
   * Gets a <code>List</code> of property values from a Node with a fallback value if the property doesn't exist.
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the string value(s) for aPropertyName as a <code>List</code>. If no property exists, <code>aDefaultValue</code> is returned.
   * @param aDefaultValue fallback value if no value exists
   * @see #getStringsEscaped(javax.jcr.Node, String, java.util.List)
   * @since Sitevision 3.0
   */
  getStrings(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: List | unknown[]
  ): List;

  /**
   * Gets a <code>List</code> of XML escaped property values from a Node with a fallback value if the property doesn't exist.
   *
   *  <p>
   *     This is a convenience method for getting a list of property values that also should be XML escaped. Strings that should be included
   *     in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   *  </p>
   *  <p>
   *     This Velocity code:
   *  </p>
   *  <pre><code>
   *     #set ($endecUtil = ...)
   *     #set ($propertyUtil = ...)
   *     #set ($myDefaultList = ...)
   *     ...
   *     #set ($valueList = $propertyUtil.getStrings($myNode, 'aProperty', $myDefaultList))
   *     &lt;ul&gt;
   *     #foreach ($value in $valueList)
   *        &lt;li&gt;
   *           $endecUtil.escapeXML($value)
   *        &lt;/li&gt;
   *     #end
   *     &lt;/ul&gt;
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($propertyUtil = ...)
   *     #set ($myDefaultList = ...)
   *     ...
   *     #set ($escapedValueList = $propertyUtil.getStringsEscaped($myNode, 'aProperty', $myDefaultList))
   *     &lt;ul&gt;
   *     #foreach ($escapedValue in $escapedValueList)
   *        &lt;li&gt;
   *           $escapedValue
   *        &lt;/li&gt;
   *     #end
   *     &lt;/ul&gt;
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape the property name (i.e. <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the string value(s) for aPropertyName, XML escaped and embedded in a <code>List</code>.&#xA; If no property exists, <code>aDefaultValue</code> is returned.
   * @param aDefaultValue fallback list if no value exists. <strong>Note!</strong> The actual fallback list is <em>never</em> returned&#xA; but it's values might be used. If the fallback list are about to be returned, a copy of it will be created and&#xA; all values from the fallback list will be XML escaped and added to the new list before it is returned.
   * @see #getString(javax.jcr.Node, String, String)
   * @see senselogic.sitevision.api.text.EndecUtil#escapeXML(String)
   * @since Sitevision 3.5
   */
  getStringsEscaped(
    aNode: Node,
    aPropertyName: String | string,
    aDefaultValue: List | unknown[]
  ): List;

  /**
   * Gets a <code>List</code> of property values from a "nested" Node's property.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>String</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the string value(s) for aPropertyName as a <code>List</code>. If no property exists, <code>null</code> is returned.
   * @since Sitevision 2.6_06
   */
  getNestedStrings(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): List;

  /**
   * Gets a <code>List</code> of XML escaped property values from a "nested" Node's property.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>String</code> property).
   *
   *  <p>
   *     This is a convenience method for getting a list of property values that also should be XML escaped. Strings that should be included
   *     in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   *  </p>
   *  <p>
   *     This Velocity code:
   *  </p>
   *  <pre><code>
   *     #set ($endecUtil = ...)
   *     #set ($propertyUtil = ...)
   *     ...
   *     #set ($valueList = $propertyUtil.getNestedStrings($myNode, 'aNodeProperty', 'aProperty'))
   *     &lt;ul&gt;
   *     #foreach ($value in $valueList)
   *        &lt;li&gt;
   *           $endecUtil.escapeXML($value)
   *        &lt;/li&gt;
   *     #end
   *     &lt;/ul&gt;
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($propertyUtil = ...)
   *     ...
   *     #set ($escapedValueList = $propertyUtil.getNestedStringsEscaped($myNode, 'aNodeProperty', 'aProperty'))
   *     &lt;ul&gt;
   *     #foreach ($escapedValue in $escapedValueList)
   *        &lt;li&gt;
   *           $escapedValue
   *        &lt;/li&gt;
   *     #end
   *     &lt;/ul&gt;
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the string value(s) for aPropertyName as a <code>List</code>. If no property exists, <code>null</code> is returned.
   * @see #getNestedStrings(javax.jcr.Node, String, String)
   * @see senselogic.sitevision.api.text.EndecUtil#escapeXML(String)
   * @since Sitevision 3.5
   */
  getNestedStringsEscaped(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string
  ): List;

  /**
   * Gets a <code>List</code> of property values from a "nested" Node's property with a fallback value if the property doesn't exist.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>String</code> property).
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the string value(s) for aPropertyName as a <code>List</code>. If no property exists, <code>aDefaultValue</code> is returned.
   * @since Sitevision 3.0
   */
  getNestedStrings(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: List | unknown[]
  ): List;

  /**
   * Gets a <code>List</code> of property values from a "nested" Node's property with a fallback value if the property doesn't exist,
   *  and returns it XML escaped.
   *  (i.e. the base <code>Node</code> has a property that is a <code>Node</code>, and that "inner/nested" <code>Node</code>
   *  has a <code>String</code> property).
   *
   *  <p>
   *     This is a convenience method for getting a list of property values that also should be XML escaped. Strings that should be included
   *     in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   *  </p>
   *  <p>
   *     This Velocity code:
   *  </p>
   *  <pre><code>
   *     #set ($endecUtil = ...)
   *     #set ($propertyUtil = ...)
   *     #set ($myDefaultList = ...)
   *     ...
   *     #set ($valueList = $propertyUtil.getNestedStrings($myNode, 'aNodeProperty', 'aProperty', $myDefaultList))
   *     &lt;ul&gt;
   *     #foreach ($value in $valueList)
   *        &lt;li&gt;
   *           $endecUtil.escapeXML($value)
   *        &lt;/li&gt;
   *     #end
   *     &lt;/ul&gt;
   *  </code></pre>
   *  would typically be replaced with this:
   *  <pre><code>
   *     #set ($propertyUtil = ...)
   *     #set ($myDefaultList = ...)
   *     ...
   *     #set ($escapedValueList = $propertyUtil.getNestedStringsEscaped($myNode, 'aNodeProperty', 'aProperty', $myDefaultList))
   *     &lt;ul&gt;
   *     #foreach ($escapedValue in $escapedValueList)
   *        &lt;li&gt;
   *           $escapedValue
   *        &lt;/li&gt;
   *     #end
   *     &lt;/ul&gt;
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *     Illegal characters in node names and property names must always be escaped, typically via
   *     {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *     For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *     Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *     (e.g. metadata properties) might contain illegal characters.
   *  </p>
   * @param aNode the base <code>Node</code> that has a property that is a <code>Node</code>
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback list if no value exists. <strong>Note!</strong> The actual fallback list is <em>never</em> returned,&#xA; but it's values might be used.&#xA; If the fallback list are about to be returned, a copy of it will be created and all values from the fallback list will&#xA; be XML escaped and added to the new list before it is returned.
   * @return the string value(s) for aPropertyName as a <code>List</code>. If no property exists, <code>aDefaultValue</code>&#xA; is XML escaped and returned.
   * @see #getNestedStrings(javax.jcr.Node, String, String, java.util.List)
   * @see senselogic.sitevision.api.text.EndecUtil#escapeXML(String)
   * @since Sitevision 3.5
   */
  getNestedStringsEscaped(
    aNode: Node,
    aNodePropertyName: String | string,
    aPropertyName: String | string,
    aDefaultValue: List | unknown[]
  ): List;
}

declare namespace PropertyUtil {}

declare var propertyUtil: PropertyUtil;

export default propertyUtil;
