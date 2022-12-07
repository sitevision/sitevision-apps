/**
 * Scripting utility interface that might be needed when using a limited scripting or template language (such as Velocity).
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getScriptUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 */

interface ScriptUtil {
  /**
   * Gets the boolean true primitive.
   * @return <code>true</code>
   */
  getTrue(): boolean;

  /**
   * Gets the boolean false primitive.
   * @return <code>false</code>
   */
  getFalse(): boolean;

  /**
   * Gets the null reference.
   * @return <code>null</code>
   */
  getNull(): unknown;

  /**
   * Gets an object that is ensured not to be null.
   *
   * <p>
   *    This is a convenience method that can be used to avoid unnecessary subsequent method invocations in Velocity.
   * </p>
   *
   * <p>
   *    Velocity ignores <code>null</code> assignments and trying to assign a null reference will be logged as a WARNING message.
   *    A common strategy to work around this is to use the the Velocity <code>#if</code> clause. It allows for easy non-null
   *    checks - a <code>null</code> object is considered to be <code>false</code>. The downside with this strategy is that it
   *    requires two subsequent method invocations. That can of course be a really bad thing if the method does costly things. This method
   *    can be used to avoid such problems.
   * </p>
   *
   * <p>
   *    <strong>An example</strong><br>
   *    This Velocity code:
   * </p>
   * <pre><code>    #if ($anObject.getPersonOrNull())
   *       #set ($person = $anObject.getPersonOrNull())
   *       $person.getName()
   *       ...
   *    #end</code></pre>
   * Can be better utilized as:
   * <pre><code>    #set ($scriptUtil = ...)
   *
   *    #set ($person = $scriptUtil.getNonNull(${anObject.getPersonOrNull()}))
   *    #if ($person)
   *       $person.getName()
   *       ...
   *    #end
   * </code></pre>
   * @param anObject the object that might be <code>null</code>
   * @return anObject if non-null, <code>Boolean.FALSE</code> otherwise
   * @see #getNonNull(Object, Object)
   * @see #getNonBlank(String)
   * @since Sitevision 2.6.2
   */
  getNonNull(anObject: java.lang.Object): unknown;

  /**
   * Gets an object that is ensured not to be null or a whitespace only string.
   *
   * <p>
   *    This is a convenience method that can be used to avoid unnecessary subsequent method invocations in Velocity.
   * </p>
   *
   * <p>
   *    Velocity ignores <code>null</code> assignments and trying to assign a null reference will be logged as a WARNING message.
   *    A common strategy to work around this is to use the the Velocity <code>#if</code> clause. It allows for easy non-null
   *    checks - a <code>null</code> object is considered to be <code>false</code>. The downside with this strategy is that it
   *    requires two subsequent method invocations. That can of course be a really bad thing if the method does costly things. This method
   *    can be used to avoid such problems.
   * </p>
   *
   * <p>
   *    <strong>An example</strong><br>
   *    This Velocity code:
   * </p>
   * <pre><code>    #if ($anObject.getPersonNameThatCanBeNullOrEmptyOrWhitespaceOnly())
   *       #set ($name = $anObject.getPersonNameThatCanBeNullOrEmptyOrWhitespaceOnly())
   *       #if ($name.trim().length() &gt; 0)
   *          &lt;p&gt;
   *             $name
   *          &lt;/p&gt;
   *       #end
   *    #end</code></pre>
   * Can be better utilized as:
   * <pre><code>    #set ($scriptUtil = ...)
   *
   *    #set ($name = $scriptUtil.getNonBlank(${anObject.getPersonNameThatCanBeNullOrEmptyOrWhitespaceOnly()}))
   *    #if ($name)
   *       &lt;p&gt;
   *          $name
   *       &lt;/p&gt;
   *    #end
   * </code></pre>
   *
   * <p>
   *    <strong>A typical example when using {@link senselogic.sitevision.api.property.PropertyUtil} and whitespace is an issue</strong><br>
   *    This Velocity code:
   * </p>
   * <pre><code>    #if ($propertyUtil.getString($theNode, 'thePropertyName'))
   *       #set ($propertyValue = $propertyUtil.getString($theNode, 'thePropertyName'))
   *       #if ($propertyValue.trim().length() &gt; 0)
   *          &lt;p&gt;
   *             $propertyValue
   *          &lt;/p&gt;
   *       #end
   *    #end</code></pre>
   * Can be better utilized as:
   * <pre><code>    #set ($scriptUtil = ...)
   *
   *    #set ($propertyValue = $scriptUtil.getNonBlank(${propertyUtil.getString($theNode, 'thePropertyName')}))
   *    #if ($propertyValue)
   *       &lt;p&gt;
   *          $propertyValue
   *       &lt;/p&gt;
   *    #end
   * </code></pre>
   * @param aString the string that might be <code>null</code> or whitespace only
   * @return aString if <code>aString</code> is non-null and not whitespace only, <code>Boolean.FALSE</code> otherwise
   * @see #getNonBlank(String, Object)
   * @since Sitevision 3.6
   */
  getNonBlank(aString: java.lang.String): unknown;

  /**
   * Gets a default value if an object is null.
   * @param anObject the object that might be <code>null</code>
   * @param aDefaultValue the default value to return if <code>anObject</code> is <code>null</code>
   * @return anObject if non-null, <code>aDefaultValue</code> otherwise
   * @see #getNonNull(Object)
   * @since Sitevision 2.6.2
   */
  getNonNull(
    anObject: java.lang.Object,
    aDefaultValue: java.lang.Object
  ): unknown;

  /**
   * Gets a default value if a string is null or whitespace only.
   * @param aString the string that might be <code>null</code> or whitespace only
   * @param aDefaultValue the default value to return if <code>aString</code> is <code>null</code> or whitespace only
   * @return aString if <code>aString</code> is non-null and not whitespace only, <code>aDefaultValue</code> otherwise
   * @see #getNonBlank(String)
   * @since Sitevision 3.6
   */
  getNonBlank(
    aString: java.lang.String,
    aDefaultValue: java.lang.Object
  ): unknown;

  /**
   * Checks if a string is not null and not empty.
   * @param aString the string to check
   * @return <code>true</code> if <code>aString</code> is not <code>null</code> and not empty, <code>false</code> otherwise
   * @see #isNotBlank(String)
   * @since Sitevision 2.6
   */
  isNotEmpty(aString: java.lang.String): boolean;

  /**
   * Checks if a string is null or empty.
   * @param aString the string to check
   * @return <code>true</code> if <code>aString</code> is <code>null</code> or empty, <code>false</code> otherwise
   * @see #isBlank(String)
   * @since Sitevision 3.6.2
   */
  isEmpty(aString: java.lang.String): boolean;

  /**
   * Checks if a string is not null, not empty and not whitespace only.
   * @param aString the string to check
   * @return <code>true</code> if <code>aString</code> is not <code>null</code>, not empty and not whitespace only - <code>false</code> otherwise
   * @see #isNotEmpty(String)
   * @since Sitevision 2.6
   */
  isNotBlank(aString: java.lang.String): boolean;

  /**
   * Checks if a string is null, empty or whitespace only.
   * @param aString the string to check
   * @return <code>true</code> if <code>aString</code> is <code>null</code>, empty or whitespace only - <code>false</code> otherwise
   * @see #isEmpty(String)
   * @since Sitevision 3.6.2
   */
  isBlank(aString: java.lang.String): boolean;

  /**
   * Gets a system property. This method invokes the getProperty method of the java.lang.System class, i.e <code>System.getProperty(String)</code>.
   *
   * <p>
   *    <strong>Important note!</strong><br>
   *    This method can be used to reveal potential sensitive information about the server.
   * </p>
   * <p>
   *    Allowed properties:
   * </p>
   * <ul>
   *    <li>"sitevision.version" (5.1)</li>
   *    <li>"sitevision.build" (5.1)</li>
   *    <li>"sitevision.environment.type" (5.2.1)</li>
   * </ul>
   * <p>
   *    A legacy mode that enables the API to return all properties can be enabled using the following system property:<br>
   *    <em>sitevision.api.scriptutil.legacy_system_properties=true</em>
   * </p>
   *
   * <p>
   * A tip if you need to do backward compatibility workarounds: The Sitevision version is accessible as a system property
   * named <em>sitevision.version</em>.
   * </p>
   * @param aName the name of the system property
   * @return the value of the system property, or <code>null</code> if indeterminable (e.g. no accessible property named <code>aName</code> exist)
   * @since Sitevision 2.6_02
   * @deprecated Exposes server information and will therefore be removed in future releases of Sitevision
   */
  getSystemProperty(aName: java.lang.String): string;

  /**
   * Creates and returns an instance of a Java class.
   * @param aQualifiedClassName a fully qualified name of the class (i.e. including packages)
   * @return an instance of the class, or <code>null</code> if an instance can not be created
   * @deprecated Use {@link senselogic.sitevision.api.script.factory.InstanceCreatorUtil#getDefaultInstance(String)} instead
   */
  getInstance(aQualifiedClassName: java.lang.String): unknown;

  /**
   * Methods that wraps an array in a <code>List</code>. Arrays are sub optimal in Velocity and JavaScript.
   * @param anArray an array that needs to be wrapped
   * @return a list containing the array elements. If the array is <code>null</code>, <code>null</code> is returned
   * @since Sitevision 2.6_06
   */
  getList(anArray: java.lang.Object): unknown[];

  /**
   * Gets the date format pattern used in the Sitevision editor for a specific Locale.
   * @param aLocale the <code>Locale</code> that specifies the date format pattern
   * @return the date format pattern used in the Sitevision editor that corresponds to <code>aLocale</code>. If <code>aLocale</code> is <code>null</code> then the current locale (as of {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()}) is used to locate the format pattern. If no pattern exist for <code>aLocale</code> then the pattern that corresponds to <code>Locale.ENGLISH</code> will be returned.
   * @since Sitevision 2.6.1_02
   * @deprecated use {@link senselogic.sitevision.api.date.DateUtil#getEditorFormatPattern(java.util.Locale)} instead
   */
  getFormatPattern(aLocale: java.util.Locale): string;

  /**
   * Methods that formats a date according to a <code>SimpleDateFormat</code> pattern
   * @param aFormatPattern date to string pattern according to <code>SimpleDateFormat</code>. If <code>null</code> is specified the default format is used
   * @param aDate the <code>Date</code>
   * @return returns a <code>String</code> representation of <code>aDate</code> according to <code>aFormatPattern</code>. Returns <code>null</code> if <code>aDate</code> is <code>null</code>.
   * @since Sitevision 2.6_06
   * @deprecated use {@link senselogic.sitevision.api.date.DateUtil#getDateAsString(String, java.util.Date)} instead
   */
  getDateAsString(
    aFormatPattern: java.lang.String,
    aDate: java.util.Date
  ): string;

  /**
   * Methods that formats the date of a calendar according to a <code>SimpleDateFormat</code> pattern
   * @param aFormatPattern date to string pattern according to <code>SimpleDateFormat</code>. If <code>null</code> is specified the default format is used
   * @param aCalendar the <code>Calendar</code>
   * @return returns a <code>String</code> representation of the date of <code>aCalendar</code> according to <code>aFormatPattern</code>. Returns <code>null</code> if <code>aDate</code> is <code>null</code>.
   * @since Sitevision 2.6.1_02
   * @deprecated use {@link senselogic.sitevision.api.date.DateUtil#getCalendarAsString(String, java.util.Calendar)} instead
   */
  getCalendarAsString(
    aFormatPattern: java.lang.String,
    aCalendar: java.util.Calendar
  ): string;

  /**
   * Methods that returns a human presentable size with an appropriate byte-suffix (bytes/kB/MB/GB/TB).
   * <p>
   * Note! This method uses two significant digits and 1024 as base. Some examples:<br>
   * &nbsp;&nbsp; <code>126</code> -&gt; "<code>130 bytes</code>"<br>
   * &nbsp;&nbsp; <code>126975</code> -&gt; "<code>120 kB</code>"<br>
   * &nbsp;&nbsp; <code>456456456</code> -&gt; "<code>440 MB</code>"
   * </p>
   * @param aSize a size that should be presented for humans
   * @return a human presentable byte-suffixed size with two significant digits. If <code>aSize</code> is less than 0 or larger than 1125899906842624 (1024 TB), an empty String will be returned.
   * @since Sitevision 2.6.1_04
   */
  getHumanPresentableSize(aSize: long): string;

  /**
   * Method that converts a string to an int.
   * @param aString the string to be converted
   * @return <code>aString</code> as <code>int</code>. If <code>aString</code> is <code>null</code> or can't be converted, -1 is returned
   * @since Sitevision 2.6.1_04
   */
  stringToInt(aString: java.lang.String): number;

  /**
   * Method that converts a string to a long.
   * @param aString the string to be converted
   * @return <code>aString</code> as <code>long</code>. If <code>aString</code> is <code>null</code> or can't be converted, -1 is returned
   * @since Sitevision 2.6.1_04
   */
  stringToLong(aString: java.lang.String): number;

  /**
   * Method that converts a string to a double.
   * @param aString the string to be converted
   * @return <code>aString</code> as <code>double</code>. If <code>aString</code> is <code>null</code> or can't be converted, -1.0 is returned
   * @since Sitevision 2.6.1_04
   */
  stringToDouble(aString: java.lang.String): number;

  /**
   * Method that converts a string to a float.
   * @param aString the string to be converted
   * @return <code>aString</code> as <code>float</code>. If <code>aString</code> is <code>null</code> or can't be converted, -1.0 is returned
   * @since Sitevision 2.6.1_04
   */
  stringToFloat(aString: java.lang.String): number;

  /**
   * Method that returns true for values that can be interpreted as the true value.
   * @param anObject an Object that might be interpreted as a true value
   * @return returns <code>true</code> if <code>anObject</code> is a <code>Boolean</code> with a <code>true</code> value or a <code>String</code> with a "<code>true</code>" value, <code>false</code> otherwise.
   * @since Sitevision 2.6.1_04
   */
  isTrue(anObject: java.lang.Object): boolean;

  /**
   * Method that returns true for values that can be interpreted as the false value.
   * @param anObject an Object that might be interpreted as a false value
   * @return returns <code>true</code> if <code>anObject</code> is a <code>Boolean</code> with a <code>false</code> value or a <code>String</code> with a "<code>false</code>" value, <code>false</code> otherwise.
   * @since Sitevision 2.6.1_04
   */
  isFalse(anObject: java.lang.Object): boolean;

  /**
   * Joins the elements of an array to a single String.
   *
   * <p>Some examples:</p>
   * <pre><code>
   *    joinArray(["one", "two", "three"], ";")   -&gt; "one;two;three"
   *    joinArray(["a", myTwoInteger], "-")       -&gt; "a-2"
   *    joinArray(["", null, "three"], "-")       -&gt; "--three"
   *    joinArray([], "-")                        -&gt; ""
   *    joinArray(null, "-")                      -&gt; null
   * </code></pre>
   * @param anArray the array that should be joined to a single string. <code>null</code> elements will be treated as empty (<code>""</code>) and for non-String elements <code>toString()</code> will be invoked on the element to get a string representation.
   * @param aSeparator the separator that should delimit the elements of <code>anArray</code> in the resulting joined string. <code>null</code> will be treated as empty (<code>""</code>)
   * @return the joined <code>String</code>. If <code>anArray</code> is <code>null</code>, <code>null</code> will be returned
   * @see #joinCollection(java.util.Collection, String)
   * @since Sitevision 2.6.1_04
   */
  joinArray(anArray: java.lang.Object, aSeparator: java.lang.String): string;

  /**
   * Joins the items of a Collection to a single String.
   *
   * <p>
   * For examples, see {@link #joinArray(Object[], String)}
   * </p>
   * @param aCollection the collection that should be joined to a single string. <code>null</code> items will be treated as empty (<code>""</code>) and for non-String items <code>toString()</code> will be invoked on the item to get a string representation.
   * @param aSeparator the separator that should delimit the items of <code>aCollection</code> in the resulting joined string. <code>null</code> will be treated as empty (<code>""</code>)
   * @return the joined <code>String</code>. If <code>aCollection</code> is <code>null</code>, <code>null</code> will be returned
   * @see #joinArray(Object[], String)
   * @since Sitevision 2.6.1_04
   */
  joinCollection(
    aCollection: java.util.Collection,
    aSeparator: java.lang.String
  ): string;

  /**
   * A utility method to get a formatted string based on a pattern and some pattern arguments.
   *
   * <p>
   *    <strong>A Velocity example:</strong>
   * </p>
   * <pre><code>
   *    #set ($instanceCreatorUtil = ...)
   *    #set ($scriptUtil = ...)
   *    #set ($searchPhrase = ...)
   *
   *    <em>## Determine pattern</em>
   *    #if ($language == 'sv')
   *       #set ($pattern = 'Din sökning {0} gav inga träffar')
   *    #else
   *       #set ($pattern = 'No hits for your search {0}')
   *    #end
   *
   *    <em>## Set up pattern argument(s)</em>
   *    #set ($argsList = $instanceCreatorUtil.list)
   *    $scriptUtil.swallow(${argsList.add($searchPhrase)})
   *
   *    <em>## Format and print result</em>
   *    &lt;p&gt;$scriptUtil.messageFormat($pattern, $argsList)&lt;/p&gt;
   * </code></pre>
   * @param aMessageFormatPattern a pattern accepted by the Java <a href="http://docs.oracle.com/javase/8/docs/api/java/text/MessageFormat.html">MessageFormat</a> class
   * @param anArguments arguments needed by the pattern
   * @return the result of the pattern evaluation or <code>null</code> if evaluation fails. Returns <code>null</code> if <code>aMessageFormatPattern</code> is <code>null</code> or if <code>anArguments</code> doesn't contain any arguments.
   * @since Sitevision 3.0
   */
  messageFormat(
    aMessageFormatPattern: java.lang.String,
    anArguments: java.util.List
  ): string;

  /**
   * A utility method that can be used to prevent method invocation return values to be added to the Velocity output.
   *
   * <p>
   *    <strong>An example:</strong><br>This Velocity code:
   * </p>
   * <pre><code>
   *    #set ($myList = $instanceCreatorUtil.list)
   *    $myList.add("Magnus Lövgren")
   *    $myList.add("Mikael Wikblom")
   * </code></pre>
   * will result in the following Velocity output (the <code>add</code> method of <code>ArrayList</code> returns a <code>boolean</code>):
   * <pre><code>true true</code></pre>
   * <p>
   *    If a non-void method is invoked and the return value isn't handled, it will be part of the Velocity output.
   *    The <code>swallow</code> method can be used to prevent that (i.e. use it to "swallow" the result):
   * </p>
   * <pre><code>
   *    #set ($myList = $instanceCreatorUtil.list)
   *    $scriptUtil.swallow(${myList.add("Magnus Lövgren")})
   *    $scriptUtil.swallow(${myList.add("Mikael Wikblom")})</code></pre>
   * <p>
   *    <em>Note! The code above is just an example that illustrates a common problem. When creating and working with a
   *    List from Velocity, you should probably use a {@link senselogic.sitevision.api.script.factory.ListWrapper} instead</em>
   * </p>
   * @param anObject the object that should be "swallowed"
   * @since Sitevision 3.0
   */
  swallow(anObject: java.lang.Object): void;

  /**
   * Removes leading and ending control characters (char &lt;= 32) from a String and returns the result (<code>null</code>
   * if the string is empty or <code>null</code>).
   *
   * <p>
   *    The String is trimmed using <code>String.trim()</code>
   * </p>
   * @param aString the string that should be trimmed
   * @return the trimmed String. Returns <code>null</code> if <code>aString</code> is <code>null</code> or the trimmed String is empty.
   * @since Sitevision 2.6.1_04
   */
  trimToNull(aString: java.lang.String): string;

  /**
   * Removes leading and ending control characters (char &lt;= 32) from a String and returns the result (empty String (<code>""</code>)
   * if the string is empty or <code>null</code>).
   *
   * <p>
   *    The String is trimmed using <code>String.trim()</code>
   * </p>
   * @param aString the string that should be trimmed
   * @return the trimmed String. Returns empty (<code>""</code>) if <code>aString</code> is <code>null</code> or the trimmed String is empty.
   * @since Sitevision 2.6.1_04
   */
  trimToEmpty(aString: java.lang.String): string;

  /**
   * Flattens a multi-lined string to a trimmed single-line string.
   *
   * <p>
   *    This method replaces all whitespace (space, line break and such) with a space, but will never add multiple spaces.
   * </p>
   * @param aString the multi-lined string
   * @return a single-line trimmed string with sequential whitespace removed, or <code>null</code> if <code>aString</code> is <code>null</code>.
   * @since Sitevision 3.6
   */
  flatten(aString: java.lang.String): string;
}
