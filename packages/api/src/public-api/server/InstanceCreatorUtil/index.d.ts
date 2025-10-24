/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../types/java/lang/String";
import type { Object } from "../../types/java/lang/Object";
import type { TypedArgument } from "../../types/senselogic/sitevision/api/script/factory/TypedArgument";
import type { List } from "../../types/java/util/List";

import type { Enum } from "../../types/java/lang/Enum";
import type { Set } from "../../types/java/util/Set";
import type { Map } from "../../types/java/util/Map";
import type { ListWrapper } from "../ListWrapper";
import type { ArraysInstance } from "../ArraysInstance";
import type { CollectionsInstance } from "../CollectionsInstance";
import type { MathInstance } from "../MathInstance";

/**
 * Instance creation utility that can be used in limited scripting languages (such as Velocity).
 *
 *  <p>
 *     This interface contains 5 categories of methods:
 *  </p>
 *  <ol>
 *     <li>
 *        Methods for creating an object instance via a constructor (or an Enum instance via an enum name), e.g. see:<br>
 *        {@link InstanceCreatorUtil#getDefaultInstance(String)}<br>
 *        {@link InstanceCreatorUtil#getArgumentInstance(String, TypedArgument)}<br>
 *        {@link InstanceCreatorUtil#getArgumentsInstance(String, java.util.List)}<br>
 *        {@link InstanceCreatorUtil#getEnumInstance(String, String)}<br>
 *        &nbsp;
 *     </li>
 *     <li>
 *        Methods needed to properly describe constructor arguments for the first category above, e.g see:<br>
 *        {@link InstanceCreatorUtil#getObjectArgument(Object)}<br>
 *        {@link InstanceCreatorUtil#getNullArgument(String)}<br>
 *        {@link InstanceCreatorUtil#getCustomArgument(String, Object)}<br>
 *        {@link InstanceCreatorUtil#getIntArgument(int)}<br>
 *        ...<br>
 *        &nbsp;
 *     </li>
 *     <li>
 *        Methods that creates wrappers for certain non-instantiable classes (enables instance-level invocation on their static methods), e.g. see:<br>
 *        {@link InstanceCreatorUtil#getArraysInstance()}<br>
 *        {@link InstanceCreatorUtil#getCollectionsInstance()}<br>
 *        {@link InstanceCreatorUtil#getMathInstance()}<br>
 *        &nbsp;
 *     </li>
 *     <li>
 *        Convenience methods for creating common object instances or helpers, e.g. see:<br>
 *        {@link InstanceCreatorUtil#getList()}<br>
 *        {@link InstanceCreatorUtil#getMap()}<br>
 *        {@link InstanceCreatorUtil#getLinkedMap()}<br>
 *        {@link InstanceCreatorUtil#getSet()}<br>
 *        {@link InstanceCreatorUtil#getListWrapper()}<br>
 *        &nbsp;
 *     </li>
 *     <li>
 *        Methods to create Java arrays, e.g see:<br>
 *        {@link InstanceCreatorUtil#getBooleanArray(int)}<br>
 *        {@link InstanceCreatorUtil#getByteArray(int)}<br>
 *        {@link InstanceCreatorUtil#getCharArray(int)}<br>
 *        {@link InstanceCreatorUtil#getDoubleArray(int)}<br>
 *        {@link InstanceCreatorUtil#getFloatArray(int)} <br>
 *        {@link InstanceCreatorUtil#getIntArray(int)}<br>
 *        {@link InstanceCreatorUtil#getLongArray(int)}<br>
 *        {@link InstanceCreatorUtil#getObjectArray(int)} <br>
 *        {@link InstanceCreatorUtil#getShortArray(int)} <br>
 *        {@link InstanceCreatorUtil#getStringArray(int)}<br>
 *     </li>
 *  </ol>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getInstanceCreatorUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.1
 */
export interface InstanceCreatorUtil {
  /**
   * Creates and returns an instance of a specified Java class using the default constructor.
   *
   *  <p>
   *     Example of how to create a <code>Date</code> instance in Velocity:
   *  </p>
   *  <pre><code>
   *    #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
   *    #set ($now = $instanceCreatorUtil.getDefaultInstance('java.util.Date'))
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method will <em>not</em> create any objects of any classes that has a fully qualified class name
   *     that starts with <code>senselogic.sitevision</code> and resides outside the <code>api</code> package.
   *  </p>
   * @param aQualifiedClassName a fully qualified name of the class (i.e. including packages)
   * @return an instance of the class, or <code>null</code> if an instance can not be created
   * @see InstanceCreatorUtil#getArgumentInstance(String, TypedArgument)
   * @see InstanceCreatorUtil#getArgumentsInstance(String, java.util.List)
   */
  getDefaultInstance(aQualifiedClassName: String | string): unknown;

  /**
   * Creates and returns an instance of a specified Java class using a single argument constructor.
   *
   *  <p>
   *     Example of how to create an <code>StringBuilder</code> instance with the initial capacity 500 in Velocity
   *     (i.e. invoke the StringBuilder(int) constructor):
   *  </p>
   *  <pre><code>
   *    #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
   *    #set ($capacityIntArgument = $instanceCreatorUtil.getIntArgument(500))
   *    #set ($buffer = $instanceCreatorUtil.getArgumentInstance('java.lang.StringBuilder', $capacityIntArgument))
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method will <em>not</em> create any objects of any classes that has a fully qualified class name that starts with
   *     <code>senselogic.sitevision</code> and resides outside the <code>api</code> package.
   *  </p>
   * @param aQualifiedClassName a fully qualified name of the class (i.e. including packages)
   * @param aConstructorArgument a typed argument that describes the value and the type of the constructor argument
   * @return an instance of the class, or <code>null</code> if an instance can not be created
   * @see InstanceCreatorUtil#getDefaultInstance(String)
   * @see InstanceCreatorUtil#getArgumentsInstance(String, java.util.List)
   */
  getArgumentInstance(
    aQualifiedClassName: String | string,
    aConstructorArgument: TypedArgument
  ): unknown;

  /**
   * Creates and returns an instance of a specified Java class using a multiple argument constructor.
   *
   *  <p>
   *     Example of how to create an <code>Locale</code> instance with language "en" and country "US" in Velocity
   *     (i.e. invoke the Locale(String,String) constructor):
   *  </p>
   *  <pre><code>
   *    #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
   *
   *    <em>## Set up arguments</em>
   *    #set ($args = $instanceCreatorUtil.listWrapper) <em>## Use ListWrapper to prohibit output when invoking the "add" method...</em>
   *    $args.add($instanceCreatorUtil.getObjectArgument('en')) <em>## Add first argument (language)</em>
   *    $args.add($instanceCreatorUtil.getObjectArgument('US')) <em>## Add second argument (country)</em>
   *
   *    <em>## Create instance with arguments</em>
   *    #set ($americanLocale = $instanceCreatorUtil.getArgumentsInstance('java.util.Locale', $args.unwrap())) <em>## unwrap() to get actual List</em>
   *  </code></pre>
   *
   *  <p>
   *     <strong>Note!</strong> This method will <em>not</em> create any objects of any classes that has a fully qualified class name that
   *     starts with <code>senselogic.sitevision</code> and resides outside the <code>api</code> package.
   *  </p>
   * @param aQualifiedClassName a fully qualified name of the class (i.e. including packages)
   * @param aConstructorArguments a list of typed arguments that describes the values and types of the constructor arguments
   * @return an instance of the class, or <code>null</code> if an instance can not be created
   * @see InstanceCreatorUtil#getDefaultInstance(String)
   * @see InstanceCreatorUtil#getArgumentInstance(String, TypedArgument)
   */
  getArgumentsInstance(
    aQualifiedClassName: String | string,
    aConstructorArguments: List | unknown[]
  ): unknown;

  /**
   * Gets a typed argument for a <code>byte</code> primitive.
   * @param aByte a byte value
   * @return a typed argument for the <code>byte</code> primitive.
   */
  getByteArgument(aByte: unknown): TypedArgument;

  /**
   * Gets a typed argument for a <code>short</code> primitive.
   * @param aShort a short value
   * @return a typed argument for the <code>short</code> primitive.
   */
  getShortArgument(aShort: number): TypedArgument;

  /**
   * Gets a typed argument for a <code>int</code> primitive.
   * @param anInt an int value
   * @return a typed argument for the <code>int</code> primitive.
   */
  getIntArgument(anInt: number): TypedArgument;

  /**
   * Gets a typed argument for a <code>long</code> primitive.
   * @param aLong a long value
   * @return a typed argument for the <code>long</code> primitive.
   */
  getLongArgument(aLong: number): TypedArgument;

  /**
   * Gets a typed argument for a <code>float</code> primitive.
   * @param aFloat a float value
   * @return a typed argument for the <code>float</code> primitive.
   */
  getFloatArgument(aFloat: number): TypedArgument;

  /**
   * Gets a typed argument for a <code>double</code> primitive.
   * @param aDouble a double value
   * @return a typed argument for the <code>double</code> primitive.
   */
  getDoubleArgument(aDouble: number): TypedArgument;

  /**
   * Gets a typed argument for a <code>char</code> primitive.
   * @param aChar a char value
   * @return a typed argument for the <code>char</code> primitive.
   */
  getCharArgument(aChar: string): TypedArgument;

  /**
   * Gets a typed argument for a <code>boolean</code> primitive.
   * @param aBoolean a boolean value
   * @return a typed argument for the <code>boolean</code> primitive.
   */
  getBooleanArgument(aBoolean: boolean): TypedArgument;

  /**
   * Gets a typed argument for an <code>Object</code>.
   *
   *  <p>
   *     <strong>Note!</strong> This method can <strong>only</strong> be used if the class of your actual
   *     <em>instance exactly match the type required</em> by the constructor you are trying to invoke! If types mismatch, you must use
   *     {@link #getCustomArgument(String, Object)} instead.
   *  </p>
   * @param aValue an object, not <code>null</code>
   * @return a typed argument for <code>aValue</code> object, <code>null</code> if <code>aValue</code> is <code>null</code>.&#xA; The class value of <code>TypedArgument</code> will be set via <code>aValue.getClass()</code>.
   * @see InstanceCreatorUtil#getNullArgument(String)
   * @see InstanceCreatorUtil#getCustomArgument(String, Object)
   */
  getObjectArgument(aValue: unknown): TypedArgument;

  /**
   * Gets a typed argument for a <code>null</code> value for a specified class/interface.
   *
   *  <p>
   *     <strong>Note!</strong> This method <strong>must</strong> be used if you should pass a <code>null</code> value to a constructor!
   *  </p>
   * @param aQualifiedClassName a fully qualified name of the class (i.e. including packages)
   * @return a null argument that uses a specified class/interface as type, or <code>null</code> if an <code>aQualifiedClassName</code> is invalid)
   */
  getNullArgument(aQualifiedClassName: String | string): TypedArgument;

  /**
   * Gets a typed argument that specifies a certain class/interface for an object.
   *
   *  <p>
   *     <strong>Note!</strong> This method <strong>must</strong> be used if the class of your actual
   *     <em>instance doesn't exactly match the type required</em> by the constructor you are trying to invoke! Typical cases for when to use
   *     this method are:
   *  </p>
   *  <ul>
   *     <li>The class of your instance <em>extends</em> the type required (class) by the constructor</li>
   *     <li>The class of your instance <em>implements</em> the type required (interface) by the constructor</li>
   *  </ul>
   *
   *  <p>
   *     Example of how to create a <code>ArrayList</code> instance in Velocity via the <code>ArrayList(Collection)</code> constructor:
   *  </p>
   *  <pre><code>
   *    #set ($myList = ...) <em>## $myList.class is NOT Collection, it's ArrayList, Vector or another Collection implementation...</em>
   *
   *    #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
   *    #set ($aCollectionsTypeArgument = $instanceCreatorUtil.getCustomArgument('java.util.Collection', $myList))
   *    #set ($anArrayList = $instanceCreatorUtil.getArgumentInstance('java.util.ArrayList', $aCollectionsTypeArgument))
   *  </code></pre>
   * @param aQualifiedClassName a fully qualified name of the class (i.e. including packages)
   * @param aValue an object
   * @return a typed argument that uses a specified class/interface as type, or <code>null</code> if an <code>aQualifiedClassName</code> is invalid
   * @see InstanceCreatorUtil#getObjectArgument(Object)
   * @see InstanceCreatorUtil#getNullArgument(String)
   */
  getCustomArgument(
    aQualifiedClassName: String | string,
    aValue: unknown
  ): TypedArgument;

  /**
   * Gets a typed argument for an <code>Enum</code> value for a specified enum class.
   * @param aQualifiedEnumClassName a fully qualified name of the enum class (i.e. including packages)
   * @param anEnum an Enum instance or a String with the name of the Enum
   * @return a typed argument that uses a specified enum as type, or <code>null</code> if an <code>aQualifiedEnumClassName</code>&#xA; or <code>anEnum</code> is invalid
   * @see #getEnumInstance(String, String)
   */
  getEnumArgument(
    aQualifiedEnumClassName: String | string,
    anEnum: unknown
  ): TypedArgument;

  /**
   * Gets an enum instance for a specified enum class.
   *
   *  <p>
   *     Example of how to create the {@link senselogic.sitevision.api.webresource.doctype.DocType#HTML5} instance
   *     of {@link senselogic.sitevision.api.webresource.doctype.DocType} in Velocity:
   *  </p>
   *  <pre><code>
   *    #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
   *    #set ($html5Enum = $instanceCreatorUtil.getEnumInstance('senselogic.sitevision.api.webresource.doctype.DocType', 'HTML5'))
   *  </code></pre>
   *
   *  <p>
   *     Example of how to create the <code>SECONDS</code> instance of <code>java.util.concurrent.TimeUnit</code> in Velocity:
   *  </p>
   *  <pre><code>
   *    #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
   *    #set ($secondsEnum = $instanceCreatorUtil.getEnumInstance('java.util.concurrent.TimeUnit', 'SECONDS'))
   *  </code></pre>
   *
   *  <p>
   *     Example of how to create the {@link senselogic.sitevision.api.search.index.IndexUtil.IndexType#USER_IDENTITY} instance
   *     of {@link senselogic.sitevision.api.search.index.IndexUtil.IndexType} (note that <code>IndexType</code> is an "inner"
   *     enum of <code>IndexUtil</code>) in Velocity:
   *  </p>
   *  <pre><code>
   *    #set ($instanceCreatorUtil = $sitevisionUtils.instanceCreatorUtil)
   *
   *    <em>## Note that '$' is used to separate outer class from inner enum</em>
   *    #set ($enumClassName = 'senselogic.sitevision.api.search.index.IndexUtil$IndexType')
   *    #set ($userIdentityType = $instanceCreatorUtil.getEnumInstance($enumClassName, 'USER_IDENTITY'))
   *  </code></pre>
   * @param aQualifiedEnumClassName a fully qualified name of the enum class (i.e. including packages)
   * @param anEnumName the name of the enum value
   * @return an Enum instance, or <code>null</code> if an <code>aQualifiedEnumClassName</code> or <code>anEnumName</code> is invalid
   */
  getEnumInstance(
    aQualifiedEnumClassName: String | string,
    anEnumName: String | string
  ): Enum;

  /**
   * Convenience method to get an <code>ArrayList</code> instance.
   * @return a <code>java.util.ArrayList</code> instance
   * @see #getListWrapper()
   */
  getList(): List;

  /**
   * Convenience method to get a <code>HashSet</code> instance.
   * @return a <code>java.util.HashSet</code> instance
   */
  getSet(): Set;

  /**
   * Convenience method to get a <code>HashMap</code> instance.
   * @return a <code>java.util.HashMap</code> instance
   */
  getMap(): Map;

  /**
   * Convenience method to get a <code>LinkedHashMap</code> instance.
   * @return a <code>java.util.LinkedHashMap</code> instance
   * @since Sitevision 4.5.4.1
   */
  getLinkedMap(): Map;

  /**
   * Gets a <code>ListWrapper</code> instance.
   *
   *  <p>
   *     <em>The <code>java.util.List</code> interface specifies that the <code>add</code> method should return a <code>boolean</code>.
   *     This is a problem if your scripting language (e.g. Velocity) requires you to suppress the returned value so it won't end up
   *     in the resulting output. A <code>ListWrapper</code> instance enables such suppressing.</em>
   *  </p>
   * @return a ListWrapper instance
   * @since Sitevision 3.5
   */
  getListWrapper(): ListWrapper;

  /**
   * Gets a <code>java.util.Arrays</code> wrapper instance.
   *
   *  <p>
   *     <em>The <code>Arrays</code> class contains static methods only and can't be instantiated. This is a problem if your
   *     scripting language (e.g. Velocity) doesn't support static class access (i.e. need an instance/object to invoke methods).
   *     An <code>ArraysInstance</code> instance enables <code>Arrays</code> method invocations.</em>
   *  </p>
   * @return a wrapper instance for <code>java.util.Arrays</code>
   */
  getArraysInstance(): ArraysInstance;

  /**
   * Gets a <code>java.util.Collections</code> wrapper instance.
   *
   *  <p>
   *     <em>The <code>Collections</code> class contains static methods only and can't be instantiated. This is a problem if your
   *     scripting language (e.g. Velocity) doesn't support static class access (i.e. need an instance/object to invoke methods).
   *     A <code>CollectionsInstance</code> instance enables <code>Collections</code> method invocations.</em>
   *  </p>
   * @return a wrapper instance for <code>java.util.Collections</code>
   */
  getCollectionsInstance(): CollectionsInstance;

  /**
   * Gets a <code>java.lang.Math</code> wrapper instance.
   *
   *  <p>
   *     <em>The <code>Math</code> class contains static methods only and can't be instantiated. This is a problem if your
   *     scripting language (e.g. Velocity) doesn't support static class access (i.e. need an instance/object to invoke methods).
   *     A <code>MathInstance</code> instance enables <code>Math</code> method invocations.</em>
   *  </p>
   * @return a wrapper instance for <code>java.lang.Math</code>
   */
  getMathInstance(): MathInstance;

  /**
   * Creates a boolean array with a given size.
   * @param aSize the array size
   * @return a boolean array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getBooleanArray(aSize: number): boolean;

  /**
   * Creates a byte array with a given size.
   * @param aSize the array size
   * @return a byte array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getByteArray(aSize: number): unknown;

  /**
   * Creates a char array with a given size.
   * @param aSize the array size
   * @return a char array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getCharArray(aSize: number): string;

  /**
   * Creates a double array with a given size.
   * @param aSize the array size
   * @return a double array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getDoubleArray(aSize: number): number;

  /**
   * Creates a float array with a given size.
   * @param aSize the array size
   * @return a float array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getFloatArray(aSize: number): number;

  /**
   * Creates a int array with a given size.
   * @param aSize the array size
   * @return a int array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getIntArray(aSize: number): number;

  /**
   * Creates a long array with a given size.
   * @param aSize the array size
   * @return a long array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getLongArray(aSize: number): number;

  /**
   * Creates a short array with a given size.
   * @param aSize the array size
   * @return a short array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getShortArray(aSize: number): number;

  /**
   * Creates a String array with a given size.
   * @param aSize the array size
   * @return a String array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getStringArray(aSize: number): string;

  /**
   * Creates a Object array with a given size.
   * @param aSize the array size
   * @return a Object array with aSize length, or empty array if aSize is zero or negative
   * @see ArraysInstance
   * @since Sitevision 4.5.5
   */
  getObjectArray(aSize: number): unknown;
}

declare namespace InstanceCreatorUtil {}

declare var instanceCreatorUtil: InstanceCreatorUtil;

export default instanceCreatorUtil;
