/**
 * Escapes/encodes the characters in a String using XML entities.
 *
 * <pre>
 *   Example: "One &lt;br /&gt; &amp; two" -&gt; "One &amp;lt;br /&amp;gt; &amp;amp; two"
 * </pre>
 * @param aString a <code>String</code> that needs to be escaped
 * @return aString escaped
 */
export function escapeXML(aString: string): string;

/**
 * Unescapes/decodes a string containing basic XML entities to a string containing the actual Unicode characters corresponding to the entities.
 *
 * <p>
 * Supports the 5 basic XML entities (gt, lt, quot, amp, apos) and numerical unicodes (decimal and hex).
 * </p>
 *
 * <strong>Examples:</strong>
 * <p style="margin-left:40px">
 * [ <code>One &amp;lt;br /&amp;gt; &amp;amp; two</code> ] will become:<br>
 * [ <code>One &lt;br /&gt; &amp; two</code> ]
 * </p>
 * <p style="margin-left:40px">
 * [ <code>&amp;quot;Hej &amp;aring; h&amp;#229;&amp;quot; &amp;auml;r kopieringsskyddat&amp;copy; s&amp;#xE4;gs det</code> ] will become:<br>
 * [ <code>&quot;Hej &amp;aring; hå&quot; &amp;auml;r kopieringsskyddat&amp;copy; sägs det</code> ]
 * </p>
 * @param aString a <code>String</code> that contains escaped xml entities
 * @return aString unescaped
 * @see #unEscapeHTML4(String)
 */
export function unEscapeXML(aString: string): string;

/**
 * Unescapes/decodes a string containing HTML 4 entities to a string containing the actual Unicode characters corresponding to the entities.
 *
 * <p>
 * Supports HTML 4.0 entities, including numerical unicodes (decimal and hex).
 * </p>
 *
 * <strong>Examples:</strong>
 * <p style="margin-left:40px">
 * [ <code>One &amp;lt;br /&amp;gt; &amp;amp; two</code> ] will become:<br>
 * [ <code>One &lt;br /&gt; &amp; two</code> ]
 * </p>
 * <p style="margin-left:40px">
 * [ <code>&amp;quot;Hej &amp;aring; h&amp;#229;&amp;quot; &amp;auml;r kopieringsskyddat&amp;copy; s&amp;#xE4;gs det</code> ] will become:<br>
 * [ <code>&quot;Hej å hå&quot; är kopieringsskyddat&copy; sägs det</code> ]
 * </p>
 * @param aString a <code>String</code> that contains escaped html 4 entities
 * @return aString unescaped
 * @see #unEscapeXML(String)
 * @since Sitevision 2.6.2
 */
export function unEscapeHTML4(aString: string): string;

/**
 * Encodes a String into its URL safe form using the default charset.
 * <p>
 * Handles the <em>www-form-urlencoded</em> encoding scheme, also misleadingly known as <em>URL encoding</em>
 * </p>
 * @param aURL the string to convert to a URL safe form
 * @return an URL safe String. Returns <code>null</code> if <code>aURL</code> is <code>null</code> or can't be encoded.
 * @since Sitevision 2.6.1_04
 */
export function encodeURL(aURL: string): string;

/**
 * Decodes a URL safe String into its original form using the default charset.
 * <p>
 * Handles the <em>www-form-urlencoded</em> encoding scheme, also misleadingly known as <em>URL encoding</em>
 * </p>
 * @param aURL URL safe String to convert to its original form
 * @return a decoded String. Returns <code>null</code> if <code>aURL</code> is <code>null</code> or can't be decoded.
 * @since Sitevision 2.6.1_04
 */
export function decodeURL(aURL: string): string;

/**
 * Converts line breaks to xhtml &lt;br /&gt; elements.
 *
 * <pre>
 *   Example: "Line 1\nLine 2" -&gt; "Line 1&lt;br /&gt;Line2"
 * </pre>
 * @param aString a <code>String</code> to convert
 * @return aString the converted string
 */
export function br(aString: string): string;

/**
 * Replaces characters to their base subtitute.
 * A name that is base substituted ensures that the name is CSS valid. Can for instance be used to get valid names for anchors (anchor links).
 *
 * <pre>
 *   Example: "xml &euml;B&aring;_$-1205" -&gt; "xmleBa1205"
 * </pre>
 * @param aString a <code>String</code> that should be base substituted
 * @return the base substitute for aString
 */
export function getBaseSubstitute(aString: string): string;

/**
 * Escapes/encodes a jcr name (property name or node name) that might contain illegal characters.
 *
 * <p>
 *    Any operation that includes a JCR name that contains illegal characters must be escaped. For example:
 * </p>
 * <pre><code>
 *    javax.jcr.Node node = ...
 *
 *    javax.jcr.NodeIterator nodeIterator = node.getNodes("aNodeNameThatShouldBeEscaped");
 *    javax.jcr.NodeIterator anotherNodeIterator = node.getNodes("aNodeNameThatShouldBeEscaped/aNodeNameThatShouldBeEscaped");
 *    javax.jcr.Property property = node.getProperty("aPropertyNameThatShouldBeEscaped");
 * </code></pre>
 *
 * <p>
 *    Characters in JCR Names - section 3.2.5.4 of the JSR 283 specification (Java Content Repository 2.0)
 * </p>
 * <table summary="3.2.5.4 of the JSR 283 specification" style="border:1px solid black">
 *    <tr>
 *       <th>Illegal character</th>
 *       <th>Substitution character</th>
 *    </tr>
 *    <tr>
 *       <td><code>*</code> (U+002A) "asterix"</td>
 *       <td>U+F02A</td>
 *    </tr>
 *    <tr>
 *       <td><code>/</code> (U+002F) "slash"</td>
 *       <td>U+F02F</td>
 *    </tr>
 *    <tr>
 *       <td><code>:</code> (U+003A) "colon"</td>
 *       <td>U+F03A</td>
 *    </tr>
 *    <tr>
 *       <td><code>[</code> (U+005B) "left bracket"</td>
 *       <td>U+F05B</td>
 *    </tr>
 *    <tr>
 *       <td><code>]</code> (U+005D) "right bracket"</td>
 *       <td>U+F05D</td>
 *    </tr>
 *    <tr>
 *       <td><code>|</code> (U+007C) "pipe"</td>
 *       <td>U+F07C</td>
 *    </tr>
 * </table>
 * <p>
 *    Some specific names are conflicting with the JCR naming semantics and must also be escaped:
 *    <br><em>(though, these two "dot-only" expressions would typically be extremely uncommon as names)</em>
 * </p>
 * <table summary="Illegal JCR Names" style="border:1px solid black">
 *    <tr>
 *       <th>Illegal Name</th>
 *       <th>Substitution Name</th>
 *    </tr>
 *    <tr>
 *       <td><code>"."</code> <em>(the JCR Self Notation)</em></td>
 *       <td>U+F02E</td>
 *    </tr>
 *    <tr>
 *       <td><code>".."</code> <em>(the JCR Parent Notation)</em></td>
 *       <td>U+F02E and U+F02E</td>
 *    </tr>
 * </table>
 * @param aJcrName a name that should be escaped/encoded
 * @return aJcrName escaped/encoded
 * @see #unEscapeJcrName(String)
 */
export function escapeJcrName(aJcrName: string): string;

/**
 * Unescapes/decodes a jcr name (property name or node name) that might be escape/encoded.
 *
 * <p>
 *    Any operation that includes getting a JCR name must be unescaped if it contains illegal characters. For example:
 * </p>
 * <pre><code>
 *    javax.jcr.Node node = ...
 *    javax.jcr.Property property = ...
 *
 *    java.lang.String aNameThatNeedsToBeUnEscaped = node.getName();
 *    java.lang.String anotherNameThatNeedsToBeUnEscaped = property.getName();
 * </code></pre>
 *
 * <p>
 *    See {@link #escapeJcrName(String)} for escape/unescape characters and names
 * </p>
 * @param aJcrName a name that might be escaped/encoded
 * @return aJcrName unescaped/decoded
 * @see #escapeJcrName(String)
 */
export function unEscapeJcrName(aJcrName: string): string;

/**
 * Encodes a string using base64 encoding (using UTF-8 encoding).
 * @param aString a <code>String</code> that should be base64 encoded
 * @return <code>aString</code> base64 encoded. Returns <code>null</code> if <code>aString</code> is <code>null</code>
 * @see #base64decode(String)
 * @since Sitevision 2.6
 */
export function base64encode(aString: string): string;

/**
 * Encodes a byte array to a base64 encoded string (using UTF-8 encoding).
 * @param aBytes a byte array that should be base64 encoded as string
 * @return aBytes as base64 encoded string, using UTF-8 encoding. Returns null if aBytes is null
 * @see #base64encode(String)
 * @since Sitevision 4.5.5.2
 */
export function base64encodeToString(aBytes: unknown): string;

/**
 * Decodes a base64 encoded string (using UTF-8 encoding).
 * @param aBase64EncodedString a base64 encoded String
 * @return aBase64EncodedString base64 decoded. Returns null if aBase64EncodedString is null or can't be decoded.
 * @see #base64encode(String)
 * @since Sitevision 2.6
 */
export function base64decode(aBase64EncodedString: string): string;

/**
 * Decodes a base64 encoded string to a byte array (using UTF-8 encoding).
 * @param aBase64EncodedString a base64 encoded String
 * @return aBase64EncodedString base64 decoded as byte array, using UTF-8 encoding. Returns null if aBase64EncodedString is null or can't be decoded.
 * @see #base64decode(String)
 * @since Sitevision 4.5.5.2
 */
export function base64decodeToBytes(aBase64EncodedString: string): unknown;

/**
 * Escapes/encodes an identifier.
 *
 * <table style="border:1px solid black" summary="">
 *    <caption style="text-align:left">Some examples</caption>
 *    <tr>
 *       <th style="text-align:left">aPrefix</th><th style="text-align:left">anIdentifier</th><th style="text-align:left">Returned</th>
 *    </tr>
 *    <tr>
 *       <td><code>null</code></td><td><code>null</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>""</code></td><td><code>null</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>null</code></td><td><code>""</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>""</code></td><td><code>""</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>null</code></td><td><code>"pcx"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>null</code></td><td><code>"pcx"</code></td><td><code>"pcx"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>""</code></td><td><code>"pcx"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>"123"</code></td><td><code>"pcx123"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>"1.23"</code></td><td><code>"pcx1_23"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>"1.23.45"</code></td><td><code>"pcx1_23_45"</code></td>
 *    </tr>
 * </table>
 * @param aPrefix a prefix added to the result
 * @param anIdentifier a string id
 * @return a non-null prefixed and escaped string identifier
 * @see #unEscapeIdentifier(String, String)
 * @since Sitevision 3.0.2
 */
export function escapeIdentifier(aPrefix: string, anIdentifier: string): string;

/**
 * Unescapes/decodes an escaped/encoded identifier.
 *
 * <table style="border:1px solid black" summary="">
 *    <caption style="text-align:left">Some examples</caption>
 *    <tr>
 *       <th style="text-align:left">aPrefix</th><th style="text-align:left">anIdentifier</th><th style="text-align:left">Returned</th>
 *    </tr>
 *    <tr>
 *       <td><code>null</code></td><td><code>null</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>""</code></td><td><code>null</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>null</code></td><td><code>""</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>""</code></td><td><code>""</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>null</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>null</code></td><td><code>"pcx"</code></td><td><code>"pcx"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>""</code></td><td><code>""</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>"pcx123"</code></td><td><code>"123"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>"pcx1_23"</code></td><td><code>"1.23"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"pcx"</code></td><td><code>"pcx1_23_45"</code></td><td><code>"1.23.45"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>null</code></td><td><code>"pcx1_23"</code></td><td><code>"pcx1.23"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>""</code></td><td><code>"pcx1_23"</code></td><td><code>"pcx1.23"</code></td>
 *    </tr>
 *    <tr>
 *       <td><code>"badprefix"</code></td><td><code>"pcx1_23"</code></td><td><code>"pcx1.23"</code></td>
 *    </tr>
 * </table>
 * @param aPrefix a prefix that will be removed from the result
 * @param anIdentifier a string id
 * @return an unescaped non-null identifier
 * @see #escapeIdentifier(String, String)
 * @since Sitevision 3.0.2
 */
export function unEscapeIdentifier(
  aPrefix: string,
  anIdentifier: string
): string;

/**
 * Utility interface for encoding/decoding ("encode/decode" / "escape/unescape").
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getEndecUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 */
declare namespace endecUtil {
  export {
    escapeXML,
    unEscapeXML,
    unEscapeHTML4,
    encodeURL,
    decodeURL,
    br,
    getBaseSubstitute,
    escapeJcrName,
    unEscapeJcrName,
    base64encode,
    base64encodeToString,
    base64decode,
    base64decodeToBytes,
    escapeIdentifier,
    unEscapeIdentifier,
  };
}

export default endecUtil;
