import Binary from "../../../../../javax/jcr/Binary";

/**
 * Utility interface for getting Node property values in a specific version.
 *
 * <p>
 *    This is an exotic sibling interface to {@link senselogic.sitevision.api.property.PropertyUtil} that can be used to extract property
 *    values from another version than the one you are currently executing in. If you don't know what a version is or haven't
 *    thought much about it, you would typically use the "normal" property extraction interface - {@link PropertyUtil}.
 * </p>
 *
 * <p>
 *    <strong>Performance note!</strong> {@link PropertyUtil} will always outperform <code>VersionedPropertyUtil</code> when executing
 *    in the same version! <em>(Tip! Use {@link senselogic.sitevision.api.versioning.VersionUtil#getCurrentVersion()} to check what
 *    version you are currently executing in to decide if you should use <code>PropertyUtil</code> or <code>VersionedPropertyUtil</code>)</em>.
 * </p>
 *
 * <p>
 *    <strong>Note!</strong> Ensure to take the necessary precautions when using this interface. Even if a node exists in the
 *    version you are currently executing in, it might not exist in another version.
 * </p>
 *
 * <p>
 *    <strong>An example</strong> of a usecase where you actually might need to use this interface instead of <code>PropertyUtil</code>:
 *    <em>You have a function that depends on "Friendly URL" values. Since Friendly URLs only exist in the ONLINE ("published")
 *    version, you might need this interface to ensure that your function will work properly in the OFFLINE version ("editing mode") as well.
 *    Velocity excerpt below:</em>
 * </p>
 * <pre><code>
 *    <em>## Extract display name</em>
 *    #set ($propertyUtil = ...)
 *    #set ($theName = $propertyUtil.getString($myNode, 'displayName'))
 *
 *    <em>## Extract online URL when possible</em>
 *    #set ($theURL = '')
 *    #set ($versionUtil = ...)
 *    #if ($versionUtil.currentVersion != $versionUtil.ONLINE_VERSION)
 *       #set ($versionedPropertyUtil = $sitevisionUtils.getVersionedPropertyUtil($versionUtil.ONLINE_VERSION))
 *       #set ($theURL = $versionedPropertyUtil.getString($myNode.identifier, 'URL', ''))
 *    #end
 *    #if ($theURL == '')
 *       #set ($theURL = $propertyUtil.getString($myNode, 'URL'))
 *    #end</code></pre>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getVersionedPropertyUtil(int)}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 * @see OfflineVersionPropertyUtil
 * @see OnlineVersionPropertyUtil
 */
interface VersionedPropertyUtil {
  /**
   * Gets a String property from a potential Node in a specific version.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for <code>aPropertyName</code> as <code>String</code>. If no node or property exists, <code>null</code> is returned.
   */
  getString(aNodeIdentifier: string, aPropertyName: string): string;

  /**
   * Gets a String property from a potential Node in a specific version - with a fallback value if the property doesn't exist.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for <code>aPropertyName</code> as <code>String</code>. If no node or property exists, <code>aDefaultValue</code> is returned.
   */
  getString(
    aNodeIdentifier: string,
    aPropertyName: string,
    aDefaultValue: string
  ): string;

  /**
   * Gets a String property from a potential "nested" Node's property in a specific version.
   * (i.e. the base <code>Node</code> has a property that is a <code>Node</code>,
   * and that "inner/nested" <code>Node</code> has a <code>String</code> property).
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the value for <code>aPropertyName</code> as <code>String</code>. If no node or property exists, <code>null</code> is returned.
   */
  getNestedString(
    aNodeIdentifier: string,
    aNodePropertyName: string,
    aPropertyName: string
  ): string;

  /**
   * Gets a String property from a potential "nested" Node's property in a specific version - with a fallback value if the property doesn't exist.
   * (i.e. the base <code>Node</code> has a property that is a <code>Node</code>,
   * and that "inner/nested" <code>Node</code> has a <code>String</code> property).
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the value for <code>aPropertyName</code> as <code>String</code>. If no node or property exists, <code>aDefaultValue</code> is returned.
   */
  getNestedString(
    aNodeIdentifier: string,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: string
  ): string;

  /**
   * Gets a <code>List</code> of property values from a potential Node in a specific version.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for <code>aPropertyName</code> as <code>String</code>. If the property is single valued a list with one element is returned. If no node or property exists, <code>null</code> is returned.
   */
  getStrings(aNodeIdentifier: string, aPropertyName: string): unknown;

  /**
   * Gets a <code>List</code> of property values from a potential Node in a specific version - with a fallback value if the property doesn't exist.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for <code>aPropertyName</code> as <code>String</code>. If the property is single valued a list with one element is returned. If no node or property exists, <code>aDefaultValue</code> is returned.
   */
  getStrings(
    aNodeIdentifier: string,
    aPropertyName: string,
    aDefaultValue: unknown
  ): unknown;

  /**
   * Gets a <code>List</code> of property values from a potential "nested" Node's property in a specific version.
   * (i.e. the base <code>Node</code> has a property that is a <code>Node</code>,
   * and that "inner/nested" <code>Node</code> has a <code>String</code> property).
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @return the value for <code>aPropertyName</code> as <code>String</code>. If the property is single valued a list with one element is returned. If no node or property exists, <code>null</code> is returned.
   */
  getNestedStrings(
    aNodeIdentifier: string,
    aNodePropertyName: string,
    aPropertyName: string
  ): unknown;

  /**
   * Gets a <code>List</code> of property values from a potential "nested" Node's property in a specific version
   * - with a fallback value if the property doesn't exist.
   * (i.e. the base <code>Node</code> has a property that is a <code>Node</code>,
   * and that "inner/nested" <code>Node</code> has a <code>String</code> property).
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aNodePropertyName</code> and <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aNodePropertyName the name of the "inner/nested" <code>Node</code> that is a property on aNode
   * @param aPropertyName the name of the property for the "inner/nested" <code>Node</code>
   * @param aDefaultValue fallback value if no value exists
   * @return the value for <code>aPropertyName</code> as <code>String</code>. If the property is single valued a list with one element is returned. If no node or property exists, <code>aDefaultValue</code> is returned.
   */
  getNestedStrings(
    aNodeIdentifier: string,
    aNodePropertyName: string,
    aPropertyName: string,
    aDefaultValue: unknown
  ): unknown;

  /**
   * Gets an int property from a potential Node in a specific version.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the <code>int</code> value for aPropertyName. If no node or property exists or it isn't compatible with an <code>int</code>, 0 is returned.
   */
  getInt(aNodeIdentifier: string, aPropertyName: string): number;

  /**
   * Gets an int property from a potential node in a specific version -  with a fallback value if the property doesn't exist.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the <code>int</code> value for <code>aPropertyName</code>. If no node or property exists or it isn't compatible with an <code>int</code>, <code>aDefaultValue</code> is returned.
   */
  getInt(
    aNodeIdentifier: string,
    aPropertyName: string,
    aDefaultValue: number
  ): number;

  /**
   * Gets a boolean property from a potential Node in a specific version.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for <code>aPropertyName</code> as <code>boolean</code>. If no node or property exists or it isn't compatible with a <code>boolean</code>, <code>false</code> is returned.
   */
  getBoolean(aNodeIdentifier: string, aPropertyName: string): boolean;

  /**
   * Gets a boolean property from a potential Node in a specific version - with a fallback value if the property doesn't exist.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for <code>aPropertyName</code> as <code>boolean</code>. If no node or property exists or it isn't compatible with a <code>boolean</code>, <code>aDefaultValue</code> is returned.
   */
  getBoolean(
    aNodeIdentifier: string,
    aPropertyName: string,
    aDefaultValue: boolean
  ): boolean;

  /**
   * Gets a Calendar property from a potential Node in a specific version.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for <code>aPropertyName</code> as <code>Calendar</code>. If no node or property exists or it isn't a <code>Calendar</code>, <code>null</code> is returned.
   */
  getCalendar(aNodeIdentifier: string, aPropertyName: string): unknown;

  /**
   * Gets a Calendar property from a potential Node in a specific version - with a fallback value if the property doesn't exist.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for <code>aPropertyName</code> as <code>Calendar</code>. If no node or property exists or it isn't compatible with a <code>Calendar</code>, <code>aDefaultValue</code> is returned.
   */
  getCalendar(
    aNodeIdentifier: string,
    aPropertyName: string,
    aDefaultValue: unknown
  ): unknown;

  /**
   * Gets a double property from a potential Node in a specific version.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for <code>aPropertyName</code> as <code>double</code>. If no node or property exists or it isn't a <code>double</code>, <code>0.0</code> is returned.
   * @since Sitevision 3.5
   */
  getDouble(aNodeIdentifier: string, aPropertyName: string): number;

  /**
   * Gets a double property from a potential Node in a specific version - with a fallback value if the property doesn't exist.
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for <code>aPropertyName</code> as <code>double</code>. If no node or property exists or it isn't compatible with a <code>double</code>, <code>aDefaultValue</code> is returned.
   * @since Sitevision 3.5
   */
  getDouble(
    aNodeIdentifier: string,
    aPropertyName: string,
    aDefaultValue: number
  ): number;

  /**
   * Gets a Binary property from a potential Node in a specific version.
   *
   * <p>
   *    Ensure to always handle resources appropriately when working with Binary! If you get a stream via {@link javax.jcr.Binary#getStream()},
   *    you must also <code>close</code> the stream when you are done.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> The <code>Binary</code> support is limited, see {@link javax.jcr.Property#getBinary()} for more information!
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @return the value for <code>aPropertyName</code> as <code>Binary</code>. If no node or property exists or it isn't a <code>Binary</code>, <code>null</code> is returned.
   * @since Sitevision 3.5
   */
  getBinary(aNodeIdentifier: string, aPropertyName: string): Binary;

  /**
   * Gets a Binary property from a potential Node in a specific version - with a fallback value if the property doesn't exist.
   *
   * <p>
   *    Ensure to always handle resources appropriately when working with Binary! If you get a stream via {@link javax.jcr.Binary#getStream()},
   *    you must also <code>close</code> the stream when you are done.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> The <code>Binary</code> support is limited, see {@link javax.jcr.Property#getBinary()} for more information!
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> This method does <em>not</em> escape names (i.e. <code>aPropertyName</code>).
   *    Illegal characters in node names and property names must always be escaped,
   *    typically via {@link senselogic.sitevision.api.text.EndecUtil#escapeJcrName(String)}.
   *    For best performance - never escape a name if you are certain that it doesn't contain any illegal characters.
   *    Sitevision model properties never contain illegal characters. Though, depending on configuration "dynamic" ones
   *    (e.g. metadata properties) might contain illegal characters.
   * </p>
   * @param aNodeIdentifier the identifier (see {@link javax.jcr.Node#getIdentifier()}) of a potential <code>Node</code> that has a property
   * @param aPropertyName the name of the property
   * @param aDefaultValue fallback value if no value exists
   * @return the value for <code>aPropertyName</code> as <code>Binary</code>. f no node or property exists or it isn't compatible with a <code>Binary</code>, <code>aDefaultValue</code> is returned.
   * @since Sitevision 3.5
   */
  getBinary(
    aNodeIdentifier: string,
    aPropertyName: string,
    aDefaultValue: Binary
  ): Binary;
}

export default VersionedPropertyUtil;
