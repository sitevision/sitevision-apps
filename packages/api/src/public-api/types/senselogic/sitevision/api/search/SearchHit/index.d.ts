import type { Node } from "../../../../../javax/jcr/Node";

/**
 * <p>
 *    A <code>SearchHit</code> is a container for the search result returned from an Index as well
 *    as for the representation of an internal hit as {@link javax.jcr.Node}.
 * </p>
 *
 * <p id="knowyourfields">
 *    <strong>Know your fields!</strong> Ensure to call the proper "getField" method when getting a field value!
 *    Note that fields are of a specific <em>type</em> (<code>String</code>, <code>Boolean</code>, <code>Float</code>,
 *    <code>Long</code> or <code>Date</code>) and a field value can be <em>multi-valued</em> and/or <em>highlighted</em>.
 *    Regardless of type - it is always possible to get a field value as String, but converting it to the "original" type
 *    might be a difficult task for certain types (e.g. a <code>Date</code> field).
 * </p>
 *
 * <p>
 *    <em>This object is short lived in that sense that it is invalid after a specified timespan.
 *    Make sure it's handled correspondingly (i.e. do not cache it).</em>
 * </p><p>Indicates that the hit is an internal resource managed by the Sitevision server</p><p>Indicates that the hit is an external resource</p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6_06
 */
export type SearchHit = {
  /**
   * <p>Checks if the value(-s) for a specified field contains a specific value.</p>
   *
   * <p>
   *    Convenience method to use when checking for a specific value. This method would typically be used when you are looking for a
   *    specific value in a <em>multi-valued</em> field. Typically <em>metadata</em> or a multi-valued default fields of the Sitevision
   *    standard/system index (e.g. <em>path</em> or <em>svtype</em>). Calling this method is more efficient than doing
   *    the contains check(-s) yourself (exemplified below):
   * </p>
   * <pre><code>
   *       boolean containsValue = false;
   *       List&lt;String&gt; fieldValues = aSearchHit.getFields("aFieldName");
   *       for (String fieldValue : fieldValues) {
   *          if (fieldValue.contains("a specific value")) {
   *             containsValue = true;
   *             break;
   *          }
   *       }</code></pre>
   * @param aFieldName the name of the field.
   * @param aValue the value to look for in the field value(-s).
   * @return whether or not the value for the field <code>aFieldName</code> contains <code>aValue</code>. If the <code>aFieldName</code> field is <em>multi-valued</em>, this method will return <code>true</code> if <em>any</em> of the field values contains <code>aValue</code>, <code>false</code> otherwise. A <code>null</code> or empty value for <code>aFieldName</code> or <code>aValue</code> will always return <code>false</code>.
   * @see #fieldEquals(String, String)
   * @see #fieldEqualsIgnoreCase(String, String)
   * @see #fieldMatches(String, String)
   * @since Sitevision 3.5
   */
  fieldContains(aFieldName: string, aValue: string): boolean;

  /**
   * <p>Checks if the value(-s) for a specified field equals a specific value.</p>
   *
   * <p>
   *    Convenience method to use when checking for a specific value. This method would typically be used when you are looking for a
   *    specific value in a <em>multi-valued</em> field. Typically <em>metadata</em> or a multi-valued default fields of the Sitevision
   *    standard/system index (e.g. <em>path</em> or <em>svtype</em>). Calling this method is more efficient than doing
   *    the equals check(-s) yourself (exemplified below):
   * </p>
   * <pre><code>
   *       boolean equalsValue = false;
   *       List&lt;String&gt; fieldValues = aSearchHit.getFields("aFieldName");
   *       for (String fieldValue : fieldValues) {
   *          if (fieldValue.equals("a specific value")) {
   *             equalsValue = true;
   *             break;
   *          }
   *       }</code></pre>
   *
   * <p>
   *    <strong>An example:</strong>
   *    Your Site has a multi-valued metadata named "category" that is indexed
   *    (<em>the name of the stored, non-analyzed index field will be "metadata.category"</em>).
   *    The predefined set of selectable values for this metadata is "Internal", "External", "Personal", "Recreation", "Classified" and "Other".
   *    The page editors can select none or any combination of the predefined values for any node that is indexed.
   *    When rendering the search hits, you want to treat all search hits representing nodes that includes the "Classified" value for the
   *    "category" metadata differently. Below is an example that only handles the highlighted "summary" field for "non-Classified" hits:
   * </p>
   * <pre><code>
   *       for (SearchHit searchHit : searchResult) {
   *          ...
   *          if (!searchHit.fieldEquals("metadata.category", "Classfied")) {
   *             String summary = searchHit.getHighlightedField("summary", 500);
   *             ...
   *          }
   *          ...
   *       }</code></pre>
   * @param aFieldName the name of the field.
   * @param aValue the value to compare to the field value(-s).
   * @return whether or not the value for the field <code>aFieldName</code> equals <code>aValue</code>. If the <code>aFieldName</code> field is <em>multi-valued</em>, this method will return <code>true</code> if <em>any</em> of the field values equals <code>aValue</code>, <code>false</code> otherwise. A <code>null</code> or empty value for <code>aFieldName</code> or <code>aValue</code> will always return <code>false</code>.
   * @see #fieldEqualsIgnoreCase(String, String)
   * @see #fieldContains(String, String)
   * @see #fieldMatches(String, String)
   * @since Sitevision 3.5
   */
  fieldEquals(aFieldName: string, aValue: string): boolean;

  /**
   * <p>Checks if the value(-s) for a specified field equals a specific value, case-insensitively.</p>
   *
   * <p>
   *    Convenience method to use when checking for a specific value, case-insensitively.
   *    This method would typically be used when you are looking for a
   *    specific value in a <em>multi-valued</em> field. Typically <em>metadata</em> or a multi-valued default fields of the Sitevision
   *    standard/system index (e.g. <em>path</em> or <em>svtype</em>). Calling this method is more efficient than doing
   *    the case-insensitive equals check(-s) yourself (exemplified below):
   * </p>
   * <pre><code>
   *       boolean equalsValue = false;
   *       List&lt;String&gt; fieldValues = aSearchHit.getFields("aFieldName");
   *       for (String fieldValue : fieldValues) {
   *          if (fieldValue.equalsIgnoreCase("a specific value")) {
   *             equalsValue = true;
   *             break;
   *          }
   *       }</code></pre>
   *
   * <p>
   *    <em>Note!</em> Always use the {@link #fieldEquals(String, String)} method instead when applicable!
   * </p>
   * @param aFieldName the name of the field.
   * @param aValue the value to case-insensitively compare to the field value(-s).
   * @return whether or not the value for the field <code>aFieldName</code> case-insensitively equals <code>aValue</code>. If the <code>aFieldName</code> field is <em>multi-valued</em>, this method will return <code>true</code> if <em>any</em> of the field values case-insensitively equals <code>aValue</code>, <code>false</code> otherwise. A <code>null</code> or empty value for <code>aFieldName</code> or <code>aValue</code> will always return <code>false</code>.
   * @see #fieldEquals(String, String)
   * @see #fieldContains(String, String)
   * @see #fieldMatches(String, String)
   * @since Sitevision 3.5
   */
  fieldEqualsIgnoreCase(aFieldName: string, aValue: string): boolean;

  /**
   * <p>Checks if the value(-s) for a specified field matches a specified regular expression.</p>
   *
   * <p>
   *    Convenience method to use when checking for a specific value using a regular expression.
   *    This method would typically be used when you are looking for a
   *    specific pattern in a <em>multi-valued</em> field. Typically <em>metadata</em> or a multi-valued default fields of the Sitevision
   *    standard/system index (e.g. <em>path</em> or <em>svtype</em>). Calling this method is more efficient than doing
   *    the matches check(-s) yourself (exemplified below):
   * </p>
   * <pre><code>
   *       String regularExpression = "[a-zA-Z]+"; <em>// Chars 'a' to 'z' and 'A' to 'Z' one or more times...</em>
   *
   *       boolean matchesValue = false;
   *       List&lt;String&gt; fieldValues = aSearchHit.getFields("aFieldName");
   *       for (String fieldValue : fieldValues) {
   *          if (fieldValue.matches(regularExpression)) {
   *             matchesValue = true;
   *             break;
   *          }
   *       }</code></pre>
   *
   * <p>
   *    <strong>Note!</strong> This method creates, compiles and reuses <code>java.util.regex.Pattern</code> instances to improve matching
   *    performance for multiple values (typically when matching <em>multi-valued</em> field values). All such instances are cached in order to
   *    boost performance for subsequent calls to this method with the same <code>aRegularExpression</code>.
   * </p>
   *
   * <p>
   *    <em>Tip!</em> Regular expression syntax documentation is available via Oracle's
   *    <a href="http://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html">java.util.regex.Pattern</a> javadoc.
   * </p>
   * @param aFieldName the name of the field.
   * @param aRegularExpression the regular expression to match to the field value(-s).
   * @return whether or not the value for the field <code>aFieldName</code> matches a <code>aRegularExpression</code>. If the <code>aFieldName</code> field is <em>multi-valued</em>, this method will return <code>true</code> if <em>any</em> of the field values matches <code>aRegularExpression</code>, <code>false</code> otherwise. A <code>null</code> or empty value for <code>aFieldName</code> or <code>aRegularExpression</code> will always return <code>false</code>.
   * @throws PatternSyntaxException if the regular syntax expression of <code>aRegularExpression</code> is invalid.
   * @see #fieldContains(String, String)
   * @see #fieldEquals(String, String)
   * @see #fieldEqualsIgnoreCase(String, String)
   * @since Sitevision 3.5
   */
  fieldMatches(aFieldName: string, aRegularExpression: string): boolean;

  /**
   * <p>Accesses the {@link javax.jcr.Node} corresponding to a {@link #TYPE_INTERNAL} hit. This
   * value will always be null for a {@link #TYPE_EXTERNAL} hit.</p>
   * @return A <code>Node</code> or <code>null</code>
   */
  getNode(): Node;

  /**
   * <p>The indexed content as string for a specified field.</p>
   *
   * <p>
   *    <strong>Note!</strong> This method returns the content as string for the <em>first</em> field that matches <code>aFieldName</code>.
   *    No considerations are made regarding the field's type. The field value will be treated as a string.
   *    Calling this method is more efficient than calling <code>SearchHit.getField(aFieldName, false)</code> but the result will be equivalent.
   * </p>
   *
   * <p>
   *    For a <em>multi-valued</em> field, you would typically use {@link #getFields(String)} instead.
   * </p>
   * @param aFieldName the name of the field.
   * @return the content of the first index field specified by <code>aFieldName</code>, or <code>null</code> if no such field exist.
   * @see #getFieldEscaped(String)
   * @see #getField(String, String)
   * @see #getField(String, boolean)
   * @see #getFields(String)
   * @see #getBooleanField(String)
   * @see #getDateField(String)
   * @see #getFloatField(String)
   * @see #getLongField(String)
   */
  getField(aFieldName: string): string;

  /**
   * <p>The indexed content as XML escaped string for a specified field.</p>
   *
   * <p>
   *    This is a convenience method for {@link #getField(String)} that also XML escapes the result
   *    (see {@link senselogic.sitevision.api.text.EndecUtil#escapeXML(String)}).
   *    A String that should be included in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   * </p>
   * <p>
   *    This Velocity code:
   * </p>
   * <pre><code>
   *    #set ($endecUtil = $sitevisionUtils.endecUtil)
   *    ...
   *    &lt;p&gt;
   *       $endecUtil.escapeXML($searchHit.getField('title'))
   *    &lt;/p&gt;
   * </code></pre>
   * <p>
   *    would typically be replaced with this:
   * </p>
   * <pre><code>
   *    ...
   *    &lt;p&gt;
   *       $!searchHit.getFieldEscaped('title')
   *    &lt;/p&gt;
   * </code></pre>
   *
   * <p>
   *    <strong>This method can not be used to get field content of a highlighted field!</strong>
   *    Use {@link #getHighlightedField(String, int)} instead to get the XML escaped content of a highlighted field.
   * </p>
   * @param aFieldName the name of the field.
   * @return the XML escaped content of the first index field specified by <code>aFieldName</code>, or <code>null</code> if no such field exist.
   * @see #getField(String)
   * @since Sitevision 4
   */
  getFieldEscaped(aFieldName: string): string;

  /**
   * <p>The indexed content as string for a specified field, or a default value if no such field exist.</p>
   *
   * <p>
   *    <strong>Note!</strong> This is a convenience method for {@link #getField(String)} that enables you to avoid <code>null</code> checks.
   * </p>
   * @param aFieldName the name of the field.
   * @param aDefaultValue the default/fallback value.
   * @return the content of the first index field specified by <code>aFieldName</code>, or <code>aDefaultValue</code> if no such field exist.
   * @see #getField(String)
   * @see #getFieldEscaped(String, String)
   * @since Sitevision 3.5
   */
  getField(aFieldName: string, aDefaultValue: string): string;

  /**
   * <p>The indexed content as XML escaped string for a specified field, or a default value if no such field exist.</p>
   *
   * <p>
   *    This is a convenience method for {@link #getField(String, String)} that also XML escapes the result
   *    (see {@link senselogic.sitevision.api.text.EndecUtil#escapeXML(String)}).
   *    A String that should be included in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   * </p>
   * <p>
   *    This Velocity code:
   * </p>
   * <pre><code>
   *    #set ($endecUtil = $sitevisionUtils.endecUtil)
   *    ...
   *    &lt;p&gt;
   *       $endecUtil.escapeXML($searchHit.getField('title', ''))
   *    &lt;/p&gt;
   * </code></pre>
   * <p>
   *    would typically be replaced with this:
   * </p>
   * <pre><code>
   *    ...
   *    &lt;p&gt;
   *       $searchHit.getFieldEscaped('title', '')
   *    &lt;/p&gt;
   * </code></pre>
   *
   * <p>
   *    <strong>This method can not be used to get field content of a highlighted field!</strong>
   *    Use {@link #getHighlightedField(String, int)} instead to get the XML escaped content of a highlighted field.
   * </p>
   * @param aFieldName the name of the field.
   * @param aDefaultValue the default/fallback value.
   * @return the XML escaped content of the first index field specified by <code>aFieldName</code>, or <code>aDefaultValue</code> if no such field exist. Note that <code>aDefaultValue</code> is <em>not</em> XML escaped by this method!
   * @see #getField(String, String)
   * @since Sitevision 4
   */
  getFieldEscaped(aFieldName: string, aDefaultValue: string): string;

  /**
   * <p>The indexed content as string for a specified field (with option to use first or largest field if multiple fields match).</p>
   * @param aFieldName The name of the field.
   * @param useMaxCharsField whether the field that contains the most characters or the first field should be used if multiple fields match (i.e. <code>true</code> == use the matching field that contains most characters, <code>false</code> == use first matching field).
   * @return the content of the index field with name <code>aFieldName</code>, or <code>null</code> if no such field exist.
   * @see #getField(String)
   * @see #getField(String, boolean, String)
   * @see #getFieldEscaped(String, boolean)
   * @since Sitevision 2.7_06
   */
  getField(aFieldName: string, useMaxCharsField: boolean): string;

  /**
   * <p>The indexed content as XML escaped string for a specified field (with option to use first or largest field if multiple fields match).</p>
   *
   * <p>
   *    This is a convenience method for {@link #getField(String, boolean)} that also XML escapes the result
   *    (see {@link senselogic.sitevision.api.text.EndecUtil#escapeXML(String)}).
   *    A String that should be included in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   * </p>
   * <p>
   *    This Velocity code:
   * </p>
   * <pre><code>
   *    #set ($endecUtil = $sitevisionUtils.endecUtil)
   *    ...
   *    &lt;p&gt;
   *       $endecUtil.escapeXML($searchHit.getField('title', true))
   *    &lt;/p&gt;
   * </code></pre>
   * <p>
   *    would typically be replaced with this:
   * </p>
   * <pre><code>
   *    ...
   *    &lt;p&gt;
   *       $!searchHit.getFieldEscaped('title', true)
   *    &lt;/p&gt;
   * </code></pre>
   *
   * <p>
   *    <strong>This method can not be used to get field content of a highlighted field!</strong>
   *    Use {@link #getHighlightedField(String, int)} instead to get the XML escaped content of a highlighted field.
   * </p>
   * @param aFieldName The name of the field.
   * @param useMaxCharsField whether the field that contains the most characters or the first field should be used if multiple fields match (i.e. <code>true</code> == use the matching field that contains most characters, <code>false</code> == use first matching field).
   * @return the XML escaped content of the index field with name <code>aFieldName</code>, or <code>null</code> if no such field exist.
   * @see #getField(String, boolean)
   * @since Sitevision 4
   */
  getFieldEscaped(aFieldName: string, useMaxCharsField: boolean): string;

  /**
   * <p>
   *    The indexed content as string for a specified field (with option to use first or largest field if multiple fields match),
   *    or a default value if no such field exist.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> This is a convenience method for {@link #getField(String, boolean)}
   *    that enables you to avoid <code>null</code> checks.
   * </p>
   * @param aFieldName The name of the field.
   * @param useMaxCharsField whether the field that contains the most characters or the first field should be used if multiple fields match (i.e. <code>true</code> == use the matching field that contains most characters, <code>false</code> == use first matching field).
   * @param aDefaultValue the default/fallback value.
   * @return the content of the index field with name <code>aFieldName</code>, or <code>aDefaultValue</code> if no such field exist.
   * @see #getField(String)
   * @see #getField(String, boolean)
   * @see #getFieldEscaped(String, boolean, String)
   * @since Sitevision 3.5
   */
  getField(
    aFieldName: string,
    useMaxCharsField: boolean,
    aDefaultValue: string
  ): string;

  /**
   * <p>
   *    The indexed content as XML escaped string for a specified field (with option to use first or largest field if multiple fields match),
   *    or a default value if no such field exist.
   * </p>
   *
   * <p>
   *    This is a convenience method for {@link #getField(String, boolean, String)} that also XML escapes the result
   *    (see {@link senselogic.sitevision.api.text.EndecUtil#escapeXML(String)}).
   *    A String that should be included in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   * </p>
   * <p>
   *    This Velocity code:
   * </p>
   * <pre><code>
   *    #set ($endecUtil = $sitevisionUtils.endecUtil)
   *    ...
   *    &lt;p&gt;
   *       $endecUtil.escapeXML($searchHit.getField('title', true, ''))
   *    &lt;/p&gt;
   * </code></pre>
   * <p>
   *    would typically be replaced with this:
   * </p>
   * <pre><code>
   *    ...
   *    &lt;p&gt;
   *       $searchHit.getFieldEscaped('title', true, '')
   *    &lt;/p&gt;
   * </code></pre>
   *
   * <p>
   *    <strong>This method can not be used to get field content of a highlighted field!</strong>
   *    Use {@link #getHighlightedField(String, int)} instead to get the XML escaped content of a highlighted field.
   * </p>
   * @param aFieldName The name of the field.
   * @param useMaxCharsField whether the field that contains the most characters or the first field should be used if multiple fields match (i.e. <code>true</code> == use the matching field that contains most characters, <code>false</code> == use first matching field).
   * @param aDefaultValue the default/fallback value.
   * @return the XML escaped content of the index field with name <code>aFieldName</code>, or <code>aDefaultValue</code> if no such field exist. Note that <code>aDefaultValue</code> is <em>not</em> XML escaped by this method!
   * @see #getField(String, boolean, String)
   * @since Sitevision 4
   */
  getFieldEscaped(
    aFieldName: string,
    useMaxCharsField: boolean,
    aDefaultValue: string
  ): string;

  /**
   * <p>The indexed content as a list of strings for a specified field.</p>
   *
   * <p>
   *    This method would typically be used for <em>multi-valued</em> fields. For a single-valued String field, you would typically use
   *    {@link #getField(String)} instead. No considerations are made regarding the field's type. The field values will be treated as strings.
   * </p>
   * <p>
   *    <strong>Note!</strong> If the field is highlighted, use {@link #getHighlightedFields(String, int)} instead.
   * </p>
   * @param aFieldName the name of the field.
   * @return the content of the fields specified by <code>aFieldName</code>, or an <code>empty List</code> if no such fields exist.
   * @see #getFieldsTruncated(String, int)
   * @since Sitevision 3.0.3
   */
  getFields(aFieldName: string): unknown;

  /**
   * <p>The indexed content as a list of XML escaped strings for a specified field.</p>
   *
   * <p>
   *    This is a convenience method for {@link #getFields(String)} that also XML escapes the result
   *    (see {@link senselogic.sitevision.api.text.EndecUtil#escapeXML(String)}).
   *    A String that should be included in the html output should typically always be XML escaped to be valid XHTML and avoid XSS problems.
   * </p>
   *
   * <p>
   *    <strong>This method can not be used to get field content of a highlighted field!</strong>
   *    Use {@link #getHighlightedFields(String, int)} instead to get the XML escaped content of a highlighted field.
   * </p>
   * @param aFieldName the name of the field.
   * @return the XML escaped content of the fields specified by <code>aFieldName</code>, or an <code>empty List</code> if no such fields exist.
   * @see #getFields(String)
   * @since Sitevision 4
   */
  getFieldsEscaped(aFieldName: string): unknown;

  /**
   * <p>The indexed content as a list of lenient truncated strings for a specified field.</p>
   *
   * <p>
   *    This method would typically be used for <em>multi-valued</em> fields. For a single-valued String field, you would typically use
   *    {@link #getFieldTruncated(String, int)} instead. No considerations are made regarding the field's type.
   *    The field values will be treated as strings.
   * </p>
   * <p>
   *    <strong>Note!</strong> If the field is highlighted, use {@link #getHighlightedFields(String, int)} instead.
   * </p>
   * <p>
   *    <em>Calling this method is is equivalent to calling <code>SearchHit.getFieldsTruncated(aFieldName, maxContentLength, true)</code>.</em>
   * </p>
   * @param aFieldName the name of the field.
   * @param maxContentLength max length of the content that should be returned. A value lower than 1 will be ignored (i.e. content will not be truncated).
   * @return the contents of the index field with name <code>aFieldName</code> truncated so it contains at most <code>maxContentLength</code> characters, or an <code>empty List</code> if no such field exist.
   * @see #getFieldsTruncated(String, int, boolean)
   * @since Sitevision 3.0.3
   */
  getFieldsTruncated(aFieldName: string, maxContentLength: number): unknown;

  /**
   * <p>The indexed content as a list of truncated (lenient or not) strings for a specified field.</p>
   *
   * <p>
   *    This method would typically be used for <em>multi-valued</em> fields. For a single-valued String field, you would typically use
   *    {@link #getFieldTruncated(String, int)} instead. No considerations are made regarding the field's type.
   *    The field values will be treated as strings.
   * </p>
   * <p>
   *    <strong>Note!</strong> If the field is highlighted, use {@link #getHighlightedFields(String, int)} instead.
   * </p>
   * @param aFieldName the name of the field.
   * @param maxContentLength max length of the content that should be returned. A value lower than 1 will be ignored (i.e. content will not be truncated).
   * @param useLenientTruncation whether or not the truncation should be lenient. A value of <code>true</code> indicates that the truncation should be after the last complete word but less or equal to <code>maxContentLength</code> A value of <code>false</code> indicates that the truncation should be absolute, i.e. truncation is made at <code>maxContentLength</code> even if it cuts a word.
   * @return the contents of the index field with name <code>aFieldName</code> truncated so it contains at most <code>maxContentLength</code> characters, or an <code>empty List</code> if no such field exist.
   * @see #getFieldsTruncated(String, int)
   * @since Sitevision 3.0.3
   */
  getFieldsTruncated(
    aFieldName: string,
    maxContentLength: number,
    useLenientTruncation: boolean
  ): unknown;

  /**
   * <p>The indexed content as Boolean for a specified field.</p>
   *
   * <p>
   *    <strong>Note!</strong> This method returns the content as Boolean for the <em>first</em> field that matches <code>aFieldName</code>.
   * </p>
   * @param aFieldName the name of the field.
   * @return the Boolean/content of the first index field specified by <code>aFieldName</code>, or <code>null</code> if no such field exist or if it's value can't be treated as a Boolean.
   * @see #getBooleanFields(String)
   * @since Sitevision 3.0
   */
  getBooleanField(aFieldName: string): boolean;

  /**
   * <p>The indexed contents as a list of Boolean values for a specified field.</p>
   *
   * <p>
   *    This method would typically be used for <em>multi-valued</em> fields. For a single-valued field, you would typically use
   *    {@link #getBooleanField(String)} instead.
   * </p>
   * @param aFieldName the name of the field.
   * @return a list of Boolean values from the index field specified by <code>aFieldName</code>, or an <code>empty List</code> if no such field exist or no value can be treated as a Boolean.
   * @see #getBooleanField(String)
   * @since Sitevision 3.0.3
   */
  getBooleanFields(aFieldName: string): unknown;

  /**
   * <p>The indexed content as Date for a specified field.</p>
   *
   * <p>
   * <strong>Note!</strong> This method returns the content as Date for the <em>first</em> field that matches <code>aFieldName</code>.
   * </p>
   * @param aFieldName the name of the field.
   * @return the Date/content of the first index field specified by <code>aFieldName</code>, or <code>null</code> if no such field exist or if it's value can't be treated as a Date.
   * @see #getDateFields(String)
   * @since Sitevision 3.0
   */
  getDateField(aFieldName: string): unknown;

  /**
   * <p>The indexed contents as a list of Date values for a specified field.</p>
   *
   * <p>
   *    This method would typically be used for <em>multi-valued</em> Date fields. For a single-valued Date field, you would typically use
   *    {@link #getDateField(String)} instead.
   * </p>
   * @param aFieldName the name of the field.
   * @return a list of Date values from the index field specified by <code>aFieldName</code>, or an <code>empty List</code> if no such field exist or no value can be treated as a Date.
   * @see #getDateField(String)
   * @since Sitevision 3.0.3
   */
  getDateFields(aFieldName: string): unknown;

  /**
   * <p>The indexed content as Float for a specified field.</p>
   *
   * <p>
   *    <strong>Note!</strong> This method returns the content as Float for the <em>first</em> field that matches <code>aFieldName</code>.
   * </p>
   * @param aFieldName the name of the field.
   * @return the Float/content of the first index field specified by <code>aFieldName</code>, or <code>null</code> if no such field exist or if it's value can't be treated as a Float.
   * @see #getFloatFields(String)
   * @since Sitevision 3.0
   */
  getFloatField(aFieldName: string): number;

  /**
   * <p>The indexed contents as a list of Float values for a specified field.</p>
   *
   * <p>
   *    This method would typically be used for <em>multi-valued</em> Float fields. For a single-valued Float field, you would typically use
   *    {@link #getFloatField(String)} instead.
   * </p>
   * @param aFieldName the name of the field.
   * @return a list of Float values from the index field specified by <code>aFieldName</code>, or an <code>empty List</code> if no such field exist or no value can be treated as a Float.
   * @see #getFloatField(String)
   * @since Sitevision 3.0.3
   */
  getFloatFields(aFieldName: string): unknown;

  /**
   * <p>The indexed content as Long for a specified field.</p>
   *
   * <p>
   *    <strong>Note!</strong> This method returns the content as Long for the <em>first</em> field that matches <code>aFieldName</code>.
   * </p>
   * @param aFieldName the name of the field.
   * @return the Long/content of the first index field specified by <code>aFieldName</code>, or <code>null</code> if no such field exist or if it's value can't be treated as a Long.
   * @see #getLongFields(String)
   * @since Sitevision 3.0
   */
  getLongField(aFieldName: string): number;

  /**
   * <p>The indexed contents as a list of Long values for a specified field.</p>
   *
   * <p>
   *    This method would typically be used for <em>multi-valued</em> Long fields. For a single-valued Long field, you would typically use
   *    {@link #getLongField(String)} instead.
   * </p>
   * @param aFieldName the name of the field.
   * @return a list of Long values from the index field specified by <code>aFieldName</code>, or an <code>empty List</code> if no such field exist or no value can be treated as a Long.
   * @see #getLongField(String)
   * @since Sitevision 3.0.3
   */
  getLongFields(aFieldName: string): unknown;

  /**
   * <p>The encoded and highlighted content of a highlighted field.</p>
   *
   * <p>
   *    <strong>Note!</strong> The result of this method is <em>always</em> escaped/encoded to XML entities so it won't interfere with the html
   *    elements that surround the possible "highlighted" fragments!
   * </p>
   * @param aFieldName the name of the highlighted field.
   * @param maxNonHighlightedLength max length of the content that should be returned if no encoded highlighting result exists for given field. A value lower than 1 will be ignored (i.e. content will not be truncated).
   * @return an encoded string containing an highlighted excerpt - or an encoded excerpt of the field truncated lenient to <code>maxNonHighlightedLength</code>, or <code>null</code> if no such field exist.
   * @see #getHighlightedFields(String, int)
   * @since Sitevision 3.0
   */
  getHighlightedField(
    aFieldName: string,
    maxNonHighlightedLength: number
  ): string;

  /**
   * <p>The encoded and highlighted contents of a highlighted field.</p>
   *
   * <p>
   *    This method would typically be used for <em>multi-valued</em> highlighted fields. For a single-valued highlighted field
   *    (or if you only are interested in the largest highlighted value), you would typically use {@link #getHighlightedField(String, int)} instead.
   *    No considerations are made regarding the field's type. The field values will be treated as strings.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> The items in the result of this method is <em>always</em> escaped/encoded to XML entities so they won't interfere
   *    with the html elements that surround the possible "highlighted" fragments!
   * </p>
   * @param aFieldName the name of the highlighted field.
   * @param maxNonHighlightedLength max length of the content for each item if no encoded highlighting result exists for given field. A value lower than 1 will be ignored (i.e. content will not be truncated).
   * @return a list of encoded strings, each containing an highlighted excerpt - or an encoded excerpt of the field truncated lenient to <code>maxNonHighlightedLength</code>, or <code>empty List</code> if no such field exist.
   * @see #getHighlightedField(String, int)
   * @since Sitevision 3.0.3
   */
  getHighlightedFields(
    aFieldName: string,
    maxNonHighlightedLength: number
  ): unknown;

  /**
   * <p>The indexed content as string for a specified field, truncated to a lenient max size.</p>
   *
   * <p>
   *    <strong>Note!</strong> Calling this method is is equivalent to calling
   *    <code>SearchHit.getFieldTruncated(aFieldName, true, true, maxContentLength)</code>.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> If the field is highlighted, use {@link #getHighlightedField(String, int)} instead.
   * </p>
   * @param aFieldName the name of the field.
   * @param maxContentLength max length of the content that should be returned. A value lower than 1 will be ignored (i.e. content will not be truncated).
   * @return the content of the index field with name <code>aFieldName</code> truncated so it contains at most <code>maxContentLength</code> characters, or <code>null</code> if no such field exist.
   * @see #getFieldTruncated(String, boolean, boolean, int)
   * @since Sitevision 2.7_06
   */
  getFieldTruncated(aFieldName: string, maxContentLength: number): string;

  /**
   * <p>
   *    The indexed content as string for a specified field, truncated (lenient or not) to a max size and an option to use first
   *    or largest field if multiple fields match.
   * </p>
   *
   * <p>
   *    <strong>Note!</strong> If the field is highlighted, use {@link #getHighlightedField(String, int)} instead.
   * </p>
   * @param aFieldName the name of the field.
   * @param useMaxCharsField whether the field that contains the most characters or the first field should be used if multiple fields match (i.e. <code>true</code> == use the matching field that contains most characters, <code>false</code> == use first matching field).
   * @param useLenientTruncation whether or not the truncation should be lenient. A value of <code>true</code> indicates that the truncation should be after the last complete word but less or equal to <code>maxContentLength</code> A value of <code>false</code> indicates that the truncation should be absolute, i.e. truncation is made at <code>maxContentLength</code> even if it cuts a word.
   * @param maxContentLength max length of the content that should be returned. A value lower than 1 will be ignored (i.e. content will not be truncated).
   * @return the content of the index field with name <code>aFieldName</code> truncated so it contains at most <code>maxContentLength</code> characters, or <code>null</code> if no such field exist.
   * @since Sitevision 2.7_06
   */
  getFieldTruncated(
    aFieldName: string,
    useMaxCharsField: boolean,
    useLenientTruncation: boolean,
    maxContentLength: number
  ): string;

  /**
   * The names of all fields available in this search hit.
   *
   * <p>
   *    <em>Potentially also includes the Solr pseudo fields "score" and "[elevated]".</em>
   * </p>
   * @return a list of field names
   * @since Sitevision 3.5
   */
  getFieldNames(): unknown;

  /**
   * The relative search score of the hit.
   *
   * <p>
   *    The value ranges from 0 to 1 where 1 denotes the maximum score.
   *    Note that the first hit does not necessarily has score 1, it is just the hit with the
   *    highest relative score in the {@link SearchResult}.
   * </p>
   *
   * <p>
   *    <em>
   *       This method depends on availability of the Solr score pseudo field.
   *       Search queries without that field will always return 0,
   *    </em>
   * </p>
   *
   * <p>
   *    <strong>Tip!</strong> Use this method to see the scores of your hits when debugging and tuning search field boost weights et al.
   * </p>
   * @return The relative search score for the search hit
   */
  getScore(): number;

  /**
   * Whether or not the search hit was elevated in the query result.
   *
   * <p>
   *    <em>
   *       This method depends on availability of the Solr [elevated] pseudo field.
   *       Search queries without that field will always return false,
   *       typically when custom fields (the Solr 'fl' param) is specified.
   *    </em>
   * </p>
   * @return true if this search hit was elevated, false otherwise
   * @since Sitevision 4.2
   */
  isElevated(): boolean;

  /**
   * <p>The type of <code>SearchHit</code> object.</p>
   * @return The type of the <code>SearchHit</code>. The value corresponds to any of the <code>TYPE</code> fields {@link #TYPE_INTERNAL}, {@link #TYPE_EXTERNAL},
   * @see #TYPE_INTERNAL
   * @see #TYPE_EXTERNAL
   */
  getType(): number;

  /**
   * Returns a jQuery expression with a token that enables tracking of search hit clicks.
   *
   * <p>
   *    Tracking search hits clicks is a helpful tool when analyzing if visitors seems to find interesting information in their search results.
   *    Though, if the search result isn't really inited by the user (i.e. an A-Z listing or such), adding a click tracking callback is probably
   *    not a good idea.
   * </p>
   *
   * <p>
   *    A click tracking callback would typically be applied as value for the "onclick" and "onkeypress" attributes of a search hit link.
   *    When rendering links to search hits with the {@link senselogic.sitevision.api.render.LinkRenderer}, apply the click tracking callback via
   *    {@link senselogic.sitevision.api.render.LinkRenderer#setOnclick(String)}
   * </p>
   * @return a click tracking callback jQuery expression
   * @since Sitevision 3.0
   */
  getClickTrackingCallback(): string;
};
