import type { Category } from "../Locale.Category";

import type { String } from "../../lang/String";

import type { Set } from "../Set";
import type { Object } from "../../lang/Object";

import type { List } from "../List";
import type { Collection } from "../Collection";
import type { FilteringMode } from "../Locale.FilteringMode";
import type { Cloneable } from "../../lang/Cloneable";
import type { Serializable } from "../../io/Serializable";

/**
 * A <code>Locale</code> object represents a specific geographical, political,
 *  or cultural region. An operation that requires a <code>Locale</code> to perform
 *  its task is called <em>locale-sensitive</em> and uses the <code>Locale</code>
 *  to tailor information for the user. For example, displaying a number
 *  is a locale-sensitive operation&mdash; the number should be formatted
 *  according to the customs and conventions of the user's native country,
 *  region, or culture.
 *
 *  <p> The {@code Locale} class implements IETF BCP 47 which is composed of
 *  <a href="http://tools.ietf.org/html/rfc4647">RFC 4647 "Matching of Language
 *  Tags"</a> and <a href="http://tools.ietf.org/html/rfc5646">RFC 5646 "Tags
 *  for Identifying Languages"</a> with support for the LDML (UTS#35, "Unicode
 *  Locale Data Markup Language") BCP 47-compatible extensions for locale data
 *  exchange.
 *
 *  <p> A <code>Locale</code> object logically consists of the fields
 *  described below.
 *
 *  <dl>
 *    <dt><a name="def_language"><b>language</b></a></dt>
 *
 *    <dd>ISO 639 alpha-2 or alpha-3 language code, or registered
 *    language subtags up to 8 alpha letters (for future enhancements).
 *    When a language has both an alpha-2 code and an alpha-3 code, the
 *    alpha-2 code must be used.  You can find a full list of valid
 *    language codes in the IANA Language Subtag Registry (search for
 *    "Type: language").  The language field is case insensitive, but
 *    <code>Locale</code> always canonicalizes to lower case.</dd>
 *
 *    <dd>Well-formed language values have the form
 *    <code>[a-zA-Z]{2,8}</code>.  Note that this is not the the full
 *    BCP47 language production, since it excludes extlang.  They are
 *    not needed since modern three-letter language codes replace
 *    them.</dd>
 *
 *    <dd>Example: "en" (English), "ja" (Japanese), "kok" (Konkani)</dd>
 *
 *    <dt><a name="def_script"><b>script</b></a></dt>
 *
 *    <dd>ISO 15924 alpha-4 script code.  You can find a full list of
 *    valid script codes in the IANA Language Subtag Registry (search
 *    for "Type: script").  The script field is case insensitive, but
 *    <code>Locale</code> always canonicalizes to title case (the first
 *    letter is upper case and the rest of the letters are lower
 *    case).</dd>
 *
 *    <dd>Well-formed script values have the form
 *    <code>[a-zA-Z]{4}</code></dd>
 *
 *    <dd>Example: "Latn" (Latin), "Cyrl" (Cyrillic)</dd>
 *
 *    <dt><a name="def_region"><b>country (region)</b></a></dt>
 *
 *    <dd>ISO 3166 alpha-2 country code or UN M.49 numeric-3 area code.
 *    You can find a full list of valid country and region codes in the
 *    IANA Language Subtag Registry (search for "Type: region").  The
 *    country (region) field is case insensitive, but
 *    <code>Locale</code> always canonicalizes to upper case.</dd>
 *
 *    <dd>Well-formed country/region values have
 *    the form <code>[a-zA-Z]{2} | [0-9]{3}</code></dd>
 *
 *    <dd>Example: "US" (United States), "FR" (France), "029"
 *    (Caribbean)</dd>
 *
 *    <dt><a name="def_variant"><b>variant</b></a></dt>
 *
 *    <dd>Any arbitrary value used to indicate a variation of a
 *    <code>Locale</code>.  Where there are two or more variant values
 *    each indicating its own semantics, these values should be ordered
 *    by importance, with most important first, separated by
 *    underscore('_').  The variant field is case sensitive.</dd>
 *
 *    <dd>Note: IETF BCP 47 places syntactic restrictions on variant
 *    subtags.  Also BCP 47 subtags are strictly used to indicate
 *    additional variations that define a language or its dialects that
 *    are not covered by any combinations of language, script and
 *    region subtags.  You can find a full list of valid variant codes
 *    in the IANA Language Subtag Registry (search for "Type: variant").
 *
 *    <p>However, the variant field in <code>Locale</code> has
 *    historically been used for any kind of variation, not just
 *    language variations.  For example, some supported variants
 *    available in Java SE Runtime Environments indicate alternative
 *    cultural behaviors such as calendar type or number script.  In
 *    BCP 47 this kind of information, which does not identify the
 *    language, is supported by extension subtags or private use
 *    subtags.</dd>
 *
 *    <dd>Well-formed variant values have the form <code>SUBTAG
 *    (('_'|'-') SUBTAG)*</code> where <code>SUBTAG =
 *    [0-9][0-9a-zA-Z]{3} | [0-9a-zA-Z]{5,8}</code>. (Note: BCP 47 only
 *    uses hyphen ('-') as a delimiter, this is more lenient).</dd>
 *
 *    <dd>Example: "polyton" (Polytonic Greek), "POSIX"</dd>
 *
 *    <dt><a name="def_extensions"><b>extensions</b></a></dt>
 *
 *    <dd>A map from single character keys to string values, indicating
 *    extensions apart from language identification.  The extensions in
 *    <code>Locale</code> implement the semantics and syntax of BCP 47
 *    extension subtags and private use subtags. The extensions are
 *    case insensitive, but <code>Locale</code> canonicalizes all
 *    extension keys and values to lower case. Note that extensions
 *    cannot have empty values.</dd>
 *
 *    <dd>Well-formed keys are single characters from the set
 *    <code>[0-9a-zA-Z]</code>.  Well-formed values have the form
 *    <code>SUBTAG ('-' SUBTAG)*</code> where for the key 'x'
 *    <code>SUBTAG = [0-9a-zA-Z]{1,8}</code> and for other keys
 *    <code>SUBTAG = [0-9a-zA-Z]{2,8}</code> (that is, 'x' allows
 *    single-character subtags).</dd>
 *
 *    <dd>Example: key="u"/value="ca-japanese" (Japanese Calendar),
 *    key="x"/value="java-1-7"</dd>
 *  </dl>
 *
 *  <b>Note:</b> Although BCP 47 requires field values to be registered
 *  in the IANA Language Subtag Registry, the <code>Locale</code> class
 *  does not provide any validation features.  The <code>Builder</code>
 *  only checks if an individual field satisfies the syntactic
 *  requirement (is well-formed), but does not validate the value
 *  itself.  See {@link Builder} for details.
 *
 *  <h3><a name="def_locale_extension">Unicode locale/language extension</a></h3>
 *
 *  <p>UTS#35, "Unicode Locale Data Markup Language" defines optional
 *  attributes and keywords to override or refine the default behavior
 *  associated with a locale.  A keyword is represented by a pair of
 *  key and type.  For example, "nu-thai" indicates that Thai local
 *  digits (value:"thai") should be used for formatting numbers
 *  (key:"nu").
 *
 *  <p>The keywords are mapped to a BCP 47 extension value using the
 *  extension key 'u' ({@link #UNICODE_LOCALE_EXTENSION}).  The above
 *  example, "nu-thai", becomes the extension "u-nu-thai".code
 *
 *  <p>Thus, when a <code>Locale</code> object contains Unicode locale
 *  attributes and keywords,
 *  <code>getExtension(UNICODE_LOCALE_EXTENSION)</code> will return a
 *  String representing this information, for example, "nu-thai".  The
 *  <code>Locale</code> class also provides {@link
 *  #getUnicodeLocaleAttributes}, {@link #getUnicodeLocaleKeys}, and
 *  {@link #getUnicodeLocaleType} which allow you to access Unicode
 *  locale attributes and key/type pairs directly.  When represented as
 *  a string, the Unicode Locale Extension lists attributes
 *  alphabetically, followed by key/type sequences with keys listed
 *  alphabetically (the order of subtags comprising a key's type is
 *  fixed when the type is defined)
 *
 *  <p>A well-formed locale key has the form
 *  <code>[0-9a-zA-Z]{2}</code>.  A well-formed locale type has the
 *  form <code>"" | [0-9a-zA-Z]{3,8} ('-' [0-9a-zA-Z]{3,8})*</code> (it
 *  can be empty, or a series of subtags 3-8 alphanums in length).  A
 *  well-formed locale attribute has the form
 *  <code>[0-9a-zA-Z]{3,8}</code> (it is a single subtag with the same
 *  form as a locale type subtag).
 *
 *  <p>The Unicode locale extension specifies optional behavior in
 *  locale-sensitive services.  Although the LDML specification defines
 *  various keys and values, actual locale-sensitive service
 *  implementations in a Java Runtime Environment might not support any
 *  particular Unicode locale attributes or key/type pairs.
 *
 *  <h4>Creating a Locale</h4>
 *
 *  <p>There are several different ways to create a <code>Locale</code>
 *  object.
 *
 *  <h5>Builder</h5>
 *
 *  <p>Using {@link Builder} you can construct a <code>Locale</code> object
 *  that conforms to BCP 47 syntax.
 *
 *  <h5>Constructors</h5>
 *
 *  <p>The <code>Locale</code> class provides three constructors:
 *  <blockquote>
 *  <pre>
 *      {@link #Locale(String language)}
 *      {@link #Locale(String language, String country)}
 *      {@link #Locale(String language, String country, String variant)}
 *  </pre>
 *  </blockquote>
 *  These constructors allow you to create a <code>Locale</code> object
 *  with language, country and variant, but you cannot specify
 *  script or extensions.
 *
 *  <h5>Factory Methods</h5>
 *
 *  <p>The method {@link #forLanguageTag} creates a <code>Locale</code>
 *  object for a well-formed BCP 47 language tag.
 *
 *  <h5>Locale Constants</h5>
 *
 *  <p>The <code>Locale</code> class provides a number of convenient constants
 *  that you can use to create <code>Locale</code> objects for commonly used
 *  locales. For example, the following creates a <code>Locale</code> object
 *  for the United States:
 *  <blockquote>
 *  <pre>
 *      Locale.US
 *  </pre>
 *  </blockquote>
 *
 *  <h4><a name="LocaleMatching">Locale Matching</a></h4>
 *
 *  <p>If an application or a system is internationalized and provides localized
 *  resources for multiple locales, it sometimes needs to find one or more
 *  locales (or language tags) which meet each user's specific preferences. Note
 *  that a term "language tag" is used interchangeably with "locale" in this
 *  locale matching documentation.
 *
 *  <p>In order to do matching a user's preferred locales to a set of language
 *  tags, <a href="http://tools.ietf.org/html/rfc4647">RFC 4647 Matching of
 *  Language Tags</a> defines two mechanisms: filtering and lookup.
 *  <em>Filtering</em> is used to get all matching locales, whereas
 *  <em>lookup</em> is to choose the best matching locale.
 *  Matching is done case-insensitively. These matching mechanisms are described
 *  in the following sections.
 *
 *  <p>A user's preference is called a <em>Language Priority List</em> and is
 *  expressed as a list of language ranges. There are syntactically two types of
 *  language ranges: basic and extended. See
 *  {@link Locale.LanguageRange Locale.LanguageRange} for details.
 *
 *  <h5>Filtering</h5>
 *
 *  <p>The filtering operation returns all matching language tags. It is defined
 *  in RFC 4647 as follows:
 *  "In filtering, each language range represents the least specific language
 *  tag (that is, the language tag with fewest number of subtags) that is an
 *  acceptable match. All of the language tags in the matching set of tags will
 *  have an equal or greater number of subtags than the language range. Every
 *  non-wildcard subtag in the language range will appear in every one of the
 *  matching language tags."
 *
 *  <p>There are two types of filtering: filtering for basic language ranges
 *  (called "basic filtering") and filtering for extended language ranges
 *  (called "extended filtering"). They may return different results by what
 *  kind of language ranges are included in the given Language Priority List.
 *  {@link Locale.FilteringMode} is a parameter to specify how filtering should
 *  be done.
 *
 *  <h5>Lookup</h5>
 *
 *  <p>The lookup operation returns the best matching language tags. It is
 *  defined in RFC 4647 as follows:
 *  "By contrast with filtering, each language range represents the most
 *  specific tag that is an acceptable match.  The first matching tag found,
 *  according to the user's priority, is considered the closest match and is the
 *  item returned."
 *
 *  <p>For example, if a Language Priority List consists of two language ranges,
 *  {@code "zh-Hant-TW"} and {@code "en-US"}, in prioritized order, lookup
 *  method progressively searches the language tags below in order to find the
 *  best matching language tag.
 *  <blockquote>
 *  <pre>
 *     1. zh-Hant-TW
 *     2. zh-Hant
 *     3. zh
 *     4. en-US
 *     5. en
 *  </pre>
 *  </blockquote>
 *  If there is a language tag which matches completely to a language range
 *  above, the language tag is returned.
 *
 *  <p>{@code "*"} is the special language range, and it is ignored in lookup.
 *
 *  <p>If multiple language tags match as a result of the subtag {@code '*'}
 *  included in a language range, the first matching language tag returned by
 *  an {@link Iterator} over a {@link Collection} of language tags is treated as
 *  the best matching one.
 *
 *  <h4>Use of Locale</h4>
 *
 *  <p>Once you've created a <code>Locale</code> you can query it for information
 *  about itself. Use <code>getCountry</code> to get the country (or region)
 *  code and <code>getLanguage</code> to get the language code.
 *  You can use <code>getDisplayCountry</code> to get the
 *  name of the country suitable for displaying to the user. Similarly,
 *  you can use <code>getDisplayLanguage</code> to get the name of
 *  the language suitable for displaying to the user. Interestingly,
 *  the <code>getDisplayXXX</code> methods are themselves locale-sensitive
 *  and have two versions: one that uses the default
 *  {@link Locale.Category#DISPLAY DISPLAY} locale and one
 *  that uses the locale specified as an argument.
 *
 *  <p>The Java Platform provides a number of classes that perform locale-sensitive
 *  operations. For example, the <code>NumberFormat</code> class formats
 *  numbers, currency, and percentages in a locale-sensitive manner. Classes
 *  such as <code>NumberFormat</code> have several convenience methods
 *  for creating a default object of that type. For example, the
 *  <code>NumberFormat</code> class provides these three convenience methods
 *  for creating a default <code>NumberFormat</code> object:
 *  <blockquote>
 *  <pre>
 *      NumberFormat.getInstance()
 *      NumberFormat.getCurrencyInstance()
 *      NumberFormat.getPercentInstance()
 *  </pre>
 *  </blockquote>
 *  Each of these methods has two variants; one with an explicit locale
 *  and one without; the latter uses the default
 *  {@link Locale.Category#FORMAT FORMAT} locale:
 *  <blockquote>
 *  <pre>
 *      NumberFormat.getInstance(myLocale)
 *      NumberFormat.getCurrencyInstance(myLocale)
 *      NumberFormat.getPercentInstance(myLocale)
 *  </pre>
 *  </blockquote>
 *  A <code>Locale</code> is the mechanism for identifying the kind of object
 *  (<code>NumberFormat</code>) that you would like to get. The locale is
 *  <STRONG>just</STRONG> a mechanism for identifying objects,
 *  <STRONG>not</STRONG> a container for the objects themselves.
 *
 *  <h4>Compatibility</h4>
 *
 *  <p>In order to maintain compatibility with existing usage, Locale's
 *  constructors retain their behavior prior to the Java Runtime
 *  Environment version 1.7.  The same is largely true for the
 *  <code>toString</code> method. Thus Locale objects can continue to
 *  be used as they were. In particular, clients who parse the output
 *  of toString into language, country, and variant fields can continue
 *  to do so (although this is strongly discouraged), although the
 *  variant field will have additional information in it if script or
 *  extensions are present.
 *
 *  <p>In addition, BCP 47 imposes syntax restrictions that are not
 *  imposed by Locale's constructors. This means that conversions
 *  between some Locales and BCP 47 language tags cannot be made without
 *  losing information. Thus <code>toLanguageTag</code> cannot
 *  represent the state of locales whose language, country, or variant
 *  do not conform to BCP 47.
 *
 *  <p>Because of these issues, it is recommended that clients migrate
 *  away from constructing non-conforming locales and use the
 *  <code>forLanguageTag</code> and <code>Locale.Builder</code> APIs instead.
 *  Clients desiring a string representation of the complete locale can
 *  then always rely on <code>toLanguageTag</code> for this purpose.
 *
 *  <h5><a name="special_cases_constructor">Special cases</a></h5>
 *
 *  <p>For compatibility reasons, two
 *  non-conforming locales are treated as special cases.  These are
 *  <b><tt>ja_JP_JP</tt></b> and <b><tt>th_TH_TH</tt></b>. These are ill-formed
 *  in BCP 47 since the variants are too short. To ease migration to BCP 47,
 *  these are treated specially during construction.  These two cases (and only
 *  these) cause a constructor to generate an extension, all other values behave
 *  exactly as they did prior to Java 7.
 *
 *  <p>Java has used <tt>ja_JP_JP</tt> to represent Japanese as used in
 *  Japan together with the Japanese Imperial calendar. This is now
 *  representable using a Unicode locale extension, by specifying the
 *  Unicode locale key <tt>ca</tt> (for "calendar") and type
 *  <tt>japanese</tt>. When the Locale constructor is called with the
 *  arguments "ja", "JP", "JP", the extension "u-ca-japanese" is
 *  automatically added.
 *
 *  <p>Java has used <tt>th_TH_TH</tt> to represent Thai as used in
 *  Thailand together with Thai digits. This is also now representable using
 *  a Unicode locale extension, by specifying the Unicode locale key
 *  <tt>nu</tt> (for "number") and value <tt>thai</tt>. When the Locale
 *  constructor is called with the arguments "th", "TH", "TH", the
 *  extension "u-nu-thai" is automatically added.
 *
 *  <h5>Serialization</h5>
 *
 *  <p>During serialization, writeObject writes all fields to the output
 *  stream, including extensions.
 *
 *  <p>During deserialization, readResolve adds extensions as described
 *  in <a href="#special_cases_constructor">Special Cases</a>, only
 *  for the two cases th_TH_TH and ja_JP_JP.
 *
 *  <h5>Legacy language codes</h5>
 *
 *  <p>Locale's constructor has always converted three language codes to
 *  their earlier, obsoleted forms: <tt>he</tt> maps to <tt>iw</tt>,
 *  <tt>yi</tt> maps to <tt>ji</tt>, and <tt>id</tt> maps to
 *  <tt>in</tt>.  This continues to be the case, in order to not break
 *  backwards compatibility.
 *
 *  <p>The APIs added in 1.7 map between the old and new language codes,
 *  maintaining the old codes internal to Locale (so that
 *  <code>getLanguage</code> and <code>toString</code> reflect the old
 *  code), but using the new codes in the BCP 47 language tag APIs (so
 *  that <code>toLanguageTag</code> reflects the new one). This
 *  preserves the equivalence between Locales no matter which code or
 *  API is used to construct them. Java's default resource bundle
 *  lookup mechanism also implements this mapping, so that resources
 *  can be named using either convention, see {@link ResourceBundle.Control}.
 *
 *  <h5>Three-letter language/country(region) codes</h5>
 *
 *  <p>The Locale constructors have always specified that the language
 *  and the country param be two characters in length, although in
 *  practice they have accepted any length.  The specification has now
 *  been relaxed to allow language codes of two to eight characters and
 *  country (region) codes of two to three characters, and in
 *  particular, three-letter language codes and three-digit region
 *  codes as specified in the IANA Language Subtag Registry.  For
 *  compatibility, the implementation still does not impose a length
 *  constraint.
 * @see Builder
 * @see ResourceBundle
 * @see java.text.Format
 * @see java.text.NumberFormat
 * @see java.text.Collator
 * @author Mark Davis
 * @since 1.1
 */
export type Locale = Object &
  Cloneable &
  Serializable & {
    /**
     * Gets the current value of the default locale for this instance
     *  of the Java Virtual Machine.
     *  <p>
     *  The Java Virtual Machine sets the default locale during startup
     *  based on the host environment. It is used by many locale-sensitive
     *  methods if no locale is explicitly specified.
     *  It can be changed using the
     *  {@link #setDefault(java.util.Locale) setDefault} method.
     * @return the default locale for this instance of the Java Virtual Machine
     */
    getDefault(): Locale;

    /**
     * Gets the current value of the default locale for the specified Category
     *  for this instance of the Java Virtual Machine.
     *  <p>
     *  The Java Virtual Machine sets the default locale during startup based
     *  on the host environment. It is used by many locale-sensitive methods
     *  if no locale is explicitly specified. It can be changed using the
     *  setDefault(Locale.Category, Locale) method.
     * @param category - the specified category to get the default locale
     * @throws NullPointerException - if category is null
     * @return the default locale for the specified Category for this instance&#xA; of the Java Virtual Machine
     * @see #setDefault(Locale.Category, Locale)
     * @since 1.7
     */
    getDefault(category: Category): Locale;

    /**
     * Sets the default locale for this instance of the Java Virtual Machine.
     *  This does not affect the host locale.
     *  <p>
     *  If there is a security manager, its <code>checkPermission</code>
     *  method is called with a <code>PropertyPermission("user.language", "write")</code>
     *  permission before the default locale is changed.
     *  <p>
     *  The Java Virtual Machine sets the default locale during startup
     *  based on the host environment. It is used by many locale-sensitive
     *  methods if no locale is explicitly specified.
     *  <p>
     *  Since changing the default locale may affect many different areas
     *  of functionality, this method should only be used if the caller
     *  is prepared to reinitialize locale-sensitive code running
     *  within the same Java Virtual Machine.
     *  <p>
     *  By setting the default locale with this method, all of the default
     *  locales for each Category are also set to the specified default locale.
     * @throws SecurityException&#xA; if a security manager exists and its&#xA; <code>checkPermission</code> method doesn't allow the operation.
     * @throws NullPointerException if <code>newLocale</code> is null
     * @param newLocale the new default locale
     * @see SecurityManager#checkPermission
     * @see java.util.PropertyPermission
     */
    setDefault(newLocale: Locale): void;

    /**
     * Sets the default locale for the specified Category for this instance
     *  of the Java Virtual Machine. This does not affect the host locale.
     *  <p>
     *  If there is a security manager, its checkPermission method is called
     *  with a PropertyPermission("user.language", "write") permission before
     *  the default locale is changed.
     *  <p>
     *  The Java Virtual Machine sets the default locale during startup based
     *  on the host environment. It is used by many locale-sensitive methods
     *  if no locale is explicitly specified.
     *  <p>
     *  Since changing the default locale may affect many different areas of
     *  functionality, this method should only be used if the caller is
     *  prepared to reinitialize locale-sensitive code running within the
     *  same Java Virtual Machine.
     *  <p>
     * @param category - the specified category to set the default locale
     * @param newLocale - the new default locale
     * @throws SecurityException - if a security manager exists and its&#xA; checkPermission method doesn't allow the operation.
     * @throws NullPointerException - if category and/or newLocale is null
     * @see SecurityManager#checkPermission(java.security.Permission)
     * @see PropertyPermission
     * @see #getDefault(Locale.Category)
     * @since 1.7
     */
    setDefault(category: Category, newLocale: Locale): void;

    /**
     * Returns an array of all installed locales.
     *  The returned array represents the union of locales supported
     *  by the Java runtime environment and by installed
     *  {@link java.util.spi.LocaleServiceProvider LocaleServiceProvider}
     *  implementations.  It must contain at least a <code>Locale</code>
     *  instance equal to {@link java.util.Locale#US Locale.US}.
     * @return An array of installed locales.
     */
    getAvailableLocales(): Locale;

    /**
     * Returns a list of all 2-letter country codes defined in ISO 3166.
     *  Can be used to create Locales.
     *  <p>
     *  <b>Note:</b> The <code>Locale</code> class also supports other codes for
     *  country (region), such as 3-letter numeric UN M.49 area codes.
     *  Therefore, the list returned by this method does not contain ALL valid
     *  codes that can be used to create Locales.
     * @return An array of ISO 3166 two-letter country codes.
     */
    getISOCountries(): string;

    /**
     * Returns a list of all 2-letter language codes defined in ISO 639.
     *  Can be used to create Locales.
     *  <p>
     *  <b>Note:</b>
     *  <ul>
     *  <li>ISO 639 is not a stable standard&mdash; some languages' codes have changed.
     *  The list this function returns includes both the new and the old codes for the
     *  languages whose codes have changed.
     *  <li>The <code>Locale</code> class also supports language codes up to
     *  8 characters in length.  Therefore, the list returned by this method does
     *  not contain ALL valid codes that can be used to create Locales.
     *  </ul>
     * @return Am array of ISO 639 two-letter language codes.
     */
    getISOLanguages(): string;

    /**
     * Returns the language code of this Locale.
     *
     *  <p><b>Note:</b> ISO 639 is not a stable standard&mdash; some languages' codes have changed.
     *  Locale's constructor recognizes both the new and the old codes for the languages
     *  whose codes have changed, but this function always returns the old code.  If you
     *  want to check for a specific language whose code has changed, don't do
     *  <pre>
     *  if (locale.getLanguage().equals("he")) // BAD!
     *     ...
     *  </pre>
     *  Instead, do
     *  <pre>
     *  if (locale.getLanguage().equals(new Locale("he").getLanguage()))
     *     ...
     *  </pre>
     * @return The language code, or the empty string if none is defined.
     * @see #getDisplayLanguage
     */
    getLanguage(): string;

    /**
     * Returns the script for this locale, which should
     *  either be the empty string or an ISO 15924 4-letter script
     *  code. The first letter is uppercase and the rest are
     *  lowercase, for example, 'Latn', 'Cyrl'.
     * @return The script code, or the empty string if none is defined.
     * @see #getDisplayScript
     * @since 1.7
     */
    getScript(): string;

    /**
     * Returns the country/region code for this locale, which should
     *  either be the empty string, an uppercase ISO 3166 2-letter code,
     *  or a UN M.49 3-digit code.
     * @return The country/region code, or the empty string if none is defined.
     * @see #getDisplayCountry
     */
    getCountry(): string;

    /**
     * Returns the variant code for this locale.
     * @return The variant code, or the empty string if none is defined.
     * @see #getDisplayVariant
     */
    getVariant(): string;

    /**
     * Returns {@code true} if this {@code Locale} has any <a href="#def_extensions">
     *  extensions</a>.
     * @return {@code true} if this {@code Locale} has any extensions
     * @since 1.8
     */
    hasExtensions(): boolean;

    /**
     * Returns a copy of this {@code Locale} with no <a href="#def_extensions">
     *  extensions</a>. If this {@code Locale} has no extensions, this {@code Locale}
     *  is returned.
     * @return a copy of this {@code Locale} with no extensions, or {@code this}&#xA; if {@code this} has no extensions
     * @since 1.8
     */
    stripExtensions(): Locale;

    /**
     * Returns the extension (or private use) value associated with
     *  the specified key, or null if there is no extension
     *  associated with the key. To be well-formed, the key must be one
     *  of <code>[0-9A-Za-z]</code>. Keys are case-insensitive, so
     *  for example 'z' and 'Z' represent the same extension.
     * @param key the extension key
     * @return The extension, or null if this locale defines no&#xA; extension for the specified key.
     * @throws IllegalArgumentException if key is not well-formed
     * @see #PRIVATE_USE_EXTENSION
     * @see #UNICODE_LOCALE_EXTENSION
     * @since 1.7
     */
    getExtension(key: string): string;

    /**
     * Returns the set of extension keys associated with this locale, or the
     *  empty set if it has no extensions. The returned set is unmodifiable.
     *  The keys will all be lower-case.
     * @return The set of extension keys, or the empty set if this locale has&#xA; no extensions.
     * @since 1.7
     */
    getExtensionKeys(): Set;

    /**
     * Returns the set of unicode locale attributes associated with
     *  this locale, or the empty set if it has no attributes. The
     *  returned set is unmodifiable.
     * @return The set of attributes.
     * @since 1.7
     */
    getUnicodeLocaleAttributes(): Set;

    /**
     * Returns the Unicode locale type associated with the specified Unicode locale key
     *  for this locale. Returns the empty string for keys that are defined with no type.
     *  Returns null if the key is not defined. Keys are case-insensitive. The key must
     *  be two alphanumeric characters ([0-9a-zA-Z]), or an IllegalArgumentException is
     *  thrown.
     * @param key the Unicode locale key
     * @return The Unicode locale type associated with the key, or null if the&#xA; locale does not define the key.
     * @throws IllegalArgumentException if the key is not well-formed
     * @throws NullPointerException if <code>key</code> is null
     * @since 1.7
     */
    getUnicodeLocaleType(key: String | string): string;

    /**
     * Returns the set of Unicode locale keys defined by this locale, or the empty set if
     *  this locale has none.  The returned set is immutable.  Keys are all lower case.
     * @return The set of Unicode locale keys, or the empty set if this locale has&#xA; no Unicode locale keywords.
     * @since 1.7
     */
    getUnicodeLocaleKeys(): Set;

    /**
     * Returns a string representation of this <code>Locale</code>
     *  object, consisting of language, country, variant, script,
     *  and extensions as below:
     *  <blockquote>
     *  language + "_" + country + "_" + (variant + "_#" | "#") + script + "-" + extensions
     *  </blockquote>
     *
     *  Language is always lower case, country is always upper case, script is always title
     *  case, and extensions are always lower case.  Extensions and private use subtags
     *  will be in canonical order as explained in {@link #toLanguageTag}.
     *
     *  <p>When the locale has neither script nor extensions, the result is the same as in
     *  Java 6 and prior.
     *
     *  <p>If both the language and country fields are missing, this function will return
     *  the empty string, even if the variant, script, or extensions field is present (you
     *  can't have a locale with just a variant, the variant must accompany a well-formed
     *  language or country code).
     *
     *  <p>If script or extensions are present and variant is missing, no underscore is
     *  added before the "#".
     *
     *  <p>This behavior is designed to support debugging and to be compatible with
     *  previous uses of <code>toString</code> that expected language, country, and variant
     *  fields only.  To represent a Locale as a String for interchange purposes, use
     *  {@link #toLanguageTag}.
     *
     *  <p>Examples: <ul>
     *  <li><tt>en</tt></li>
     *  <li><tt>de_DE</tt></li>
     *  <li><tt>_GB</tt></li>
     *  <li><tt>en_US_WIN</tt></li>
     *  <li><tt>de__POSIX</tt></li>
     *  <li><tt>zh_CN_#Hans</tt></li>
     *  <li><tt>zh_TW_#Hant-x-java</tt></li>
     *  <li><tt>th_TH_TH_#u-nu-thai</tt></li></ul>
     * @return A string representation of the Locale, for debugging.
     * @see #getDisplayName
     * @see #toLanguageTag
     */
    toString(): string;

    /**
     * Returns a well-formed IETF BCP 47 language tag representing
     *  this locale.
     *
     *  <p>If this <code>Locale</code> has a language, country, or
     *  variant that does not satisfy the IETF BCP 47 language tag
     *  syntax requirements, this method handles these fields as
     *  described below:
     *
     *  <p><b>Language:</b> If language is empty, or not <a
     *  href="#def_language" >well-formed</a> (for example "a" or
     *  "e2"), it will be emitted as "und" (Undetermined).
     *
     *  <p><b>Country:</b> If country is not <a
     *  href="#def_region">well-formed</a> (for example "12" or "USA"),
     *  it will be omitted.
     *
     *  <p><b>Variant:</b> If variant <b>is</b> <a
     *  href="#def_variant">well-formed</a>, each sub-segment
     *  (delimited by '-' or '_') is emitted as a subtag.  Otherwise:
     *  <ul>
     *
     *  <li>if all sub-segments match <code>[0-9a-zA-Z]{1,8}</code>
     *  (for example "WIN" or "Oracle_JDK_Standard_Edition"), the first
     *  ill-formed sub-segment and all following will be appended to
     *  the private use subtag.  The first appended subtag will be
     *  "lvariant", followed by the sub-segments in order, separated by
     *  hyphen. For example, "x-lvariant-WIN",
     *  "Oracle-x-lvariant-JDK-Standard-Edition".
     *
     *  <li>if any sub-segment does not match
     *  <code>[0-9a-zA-Z]{1,8}</code>, the variant will be truncated
     *  and the problematic sub-segment and all following sub-segments
     *  will be omitted.  If the remainder is non-empty, it will be
     *  emitted as a private use subtag as above (even if the remainder
     *  turns out to be well-formed).  For example,
     *  "Solaris_isjustthecoolestthing" is emitted as
     *  "x-lvariant-Solaris", not as "solaris".</li></ul>
     *
     *  <p><b>Special Conversions:</b> Java supports some old locale
     *  representations, including deprecated ISO language codes,
     *  for compatibility. This method performs the following
     *  conversions:
     *  <ul>
     *
     *  <li>Deprecated ISO language codes "iw", "ji", and "in" are
     *  converted to "he", "yi", and "id", respectively.
     *
     *  <li>A locale with language "no", country "NO", and variant
     *  "NY", representing Norwegian Nynorsk (Norway), is converted
     *  to a language tag "nn-NO".</li></ul>
     *
     *  <p><b>Note:</b> Although the language tag created by this
     *  method is well-formed (satisfies the syntax requirements
     *  defined by the IETF BCP 47 specification), it is not
     *  necessarily a valid BCP 47 language tag.  For example,
     *  <pre>
     *    new Locale("xx", "YY").toLanguageTag();</pre>
     *
     *  will return "xx-YY", but the language subtag "xx" and the
     *  region subtag "YY" are invalid because they are not registered
     *  in the IANA Language Subtag Registry.
     * @return a BCP47 language tag representing the locale
     * @see #forLanguageTag(String)
     * @since 1.7
     */
    toLanguageTag(): string;

    /**
     * Returns a locale for the specified IETF BCP 47 language tag string.
     *
     *  <p>If the specified language tag contains any ill-formed subtags,
     *  the first such subtag and all following subtags are ignored.  Compare
     *  to {@link Locale.Builder#setLanguageTag} which throws an exception
     *  in this case.
     *
     *  <p>The following <b>conversions</b> are performed:<ul>
     *
     *  <li>The language code "und" is mapped to language "".
     *
     *  <li>The language codes "he", "yi", and "id" are mapped to "iw",
     *  "ji", and "in" respectively. (This is the same canonicalization
     *  that's done in Locale's constructors.)
     *
     *  <li>The portion of a private use subtag prefixed by "lvariant",
     *  if any, is removed and appended to the variant field in the
     *  result locale (without case normalization).  If it is then
     *  empty, the private use subtag is discarded:
     *
     *  <pre>
     *      Locale loc;
     *      loc = Locale.forLanguageTag("en-US-x-lvariant-POSIX");
     *      loc.getVariant(); // returns "POSIX"
     *      loc.getExtension('x'); // returns null
     *
     *      loc = Locale.forLanguageTag("de-POSIX-x-URP-lvariant-Abc-Def");
     *      loc.getVariant(); // returns "POSIX_Abc_Def"
     *      loc.getExtension('x'); // returns "urp"
     *  </pre>
     *
     *  <li>When the languageTag argument contains an extlang subtag,
     *  the first such subtag is used as the language, and the primary
     *  language subtag and other extlang subtags are ignored:
     *
     *  <pre>
     *      Locale.forLanguageTag("ar-aao").getLanguage(); // returns "aao"
     *      Locale.forLanguageTag("en-abc-def-us").toString(); // returns "abc_US"
     *  </pre>
     *
     *  <li>Case is normalized except for variant tags, which are left
     *  unchanged.  Language is normalized to lower case, script to
     *  title case, country to upper case, and extensions to lower
     *  case.
     *
     *  <li>If, after processing, the locale would exactly match either
     *  ja_JP_JP or th_TH_TH with no extensions, the appropriate
     *  extensions are added as though the constructor had been called:
     *
     *  <pre>
     *     Locale.forLanguageTag("ja-JP-x-lvariant-JP").toLanguageTag();
     *     // returns "ja-JP-u-ca-japanese-x-lvariant-JP"
     *     Locale.forLanguageTag("th-TH-x-lvariant-TH").toLanguageTag();
     *     // returns "th-TH-u-nu-thai-x-lvariant-TH"
     *  </pre></ul>
     *
     *  <p>This implements the 'Language-Tag' production of BCP47, and
     *  so supports grandfathered (regular and irregular) as well as
     *  private use language tags.  Stand alone private use tags are
     *  represented as empty language and extension 'x-whatever',
     *  and grandfathered tags are converted to their canonical replacements
     *  where they exist.
     *
     *  <p>Grandfathered tags with canonical replacements are as follows:
     *
     *  <table summary="Grandfathered tags with canonical replacements">
     *  <tbody align="center">
     *  <tr><th>grandfathered tag</th><th>&nbsp;</th><th>modern replacement</th></tr>
     *  <tr><td>art-lojban</td><td>&nbsp;</td><td>jbo</td></tr>
     *  <tr><td>i-ami</td><td>&nbsp;</td><td>ami</td></tr>
     *  <tr><td>i-bnn</td><td>&nbsp;</td><td>bnn</td></tr>
     *  <tr><td>i-hak</td><td>&nbsp;</td><td>hak</td></tr>
     *  <tr><td>i-klingon</td><td>&nbsp;</td><td>tlh</td></tr>
     *  <tr><td>i-lux</td><td>&nbsp;</td><td>lb</td></tr>
     *  <tr><td>i-navajo</td><td>&nbsp;</td><td>nv</td></tr>
     *  <tr><td>i-pwn</td><td>&nbsp;</td><td>pwn</td></tr>
     *  <tr><td>i-tao</td><td>&nbsp;</td><td>tao</td></tr>
     *  <tr><td>i-tay</td><td>&nbsp;</td><td>tay</td></tr>
     *  <tr><td>i-tsu</td><td>&nbsp;</td><td>tsu</td></tr>
     *  <tr><td>no-bok</td><td>&nbsp;</td><td>nb</td></tr>
     *  <tr><td>no-nyn</td><td>&nbsp;</td><td>nn</td></tr>
     *  <tr><td>sgn-BE-FR</td><td>&nbsp;</td><td>sfb</td></tr>
     *  <tr><td>sgn-BE-NL</td><td>&nbsp;</td><td>vgt</td></tr>
     *  <tr><td>sgn-CH-DE</td><td>&nbsp;</td><td>sgg</td></tr>
     *  <tr><td>zh-guoyu</td><td>&nbsp;</td><td>cmn</td></tr>
     *  <tr><td>zh-hakka</td><td>&nbsp;</td><td>hak</td></tr>
     *  <tr><td>zh-min-nan</td><td>&nbsp;</td><td>nan</td></tr>
     *  <tr><td>zh-xiang</td><td>&nbsp;</td><td>hsn</td></tr>
     *  </tbody>
     *  </table>
     *
     *  <p>Grandfathered tags with no modern replacement will be
     *  converted as follows:
     *
     *  <table summary="Grandfathered tags with no modern replacement">
     *  <tbody align="center">
     *  <tr><th>grandfathered tag</th><th>&nbsp;</th><th>converts to</th></tr>
     *  <tr><td>cel-gaulish</td><td>&nbsp;</td><td>xtg-x-cel-gaulish</td></tr>
     *  <tr><td>en-GB-oed</td><td>&nbsp;</td><td>en-GB-x-oed</td></tr>
     *  <tr><td>i-default</td><td>&nbsp;</td><td>en-x-i-default</td></tr>
     *  <tr><td>i-enochian</td><td>&nbsp;</td><td>und-x-i-enochian</td></tr>
     *  <tr><td>i-mingo</td><td>&nbsp;</td><td>see-x-i-mingo</td></tr>
     *  <tr><td>zh-min</td><td>&nbsp;</td><td>nan-x-zh-min</td></tr>
     *  </tbody>
     *  </table>
     *
     *  <p>For a list of all grandfathered tags, see the
     *  IANA Language Subtag Registry (search for "Type: grandfathered").
     *
     *  <p><b>Note</b>: there is no guarantee that <code>toLanguageTag</code>
     *  and <code>forLanguageTag</code> will round-trip.
     * @param languageTag the language tag
     * @return The locale that best represents the language tag.
     * @throws NullPointerException if <code>languageTag</code> is <code>null</code>
     * @see #toLanguageTag()
     * @see java.util.Locale.Builder#setLanguageTag(String)
     * @since 1.7
     */
    forLanguageTag(languageTag: String | string): Locale;

    /**
     * Returns a three-letter abbreviation of this locale's language.
     *  If the language matches an ISO 639-1 two-letter code, the
     *  corresponding ISO 639-2/T three-letter lowercase code is
     *  returned.  The ISO 639-2 language codes can be found on-line,
     *  see "Codes for the Representation of Names of Languages Part 2:
     *  Alpha-3 Code".  If the locale specifies a three-letter
     *  language, the language is returned as is.  If the locale does
     *  not specify a language the empty string is returned.
     * @return A three-letter abbreviation of this locale's language.
     * @throws MissingResourceException Throws MissingResourceException if&#xA; three-letter language abbreviation is not available for this locale.
     */
    getISO3Language(): string;

    /**
     * Returns a three-letter abbreviation for this locale's country.
     *  If the country matches an ISO 3166-1 alpha-2 code, the
     *  corresponding ISO 3166-1 alpha-3 uppercase code is returned.
     *  If the locale doesn't specify a country, this will be the empty
     *  string.
     *
     *  <p>The ISO 3166-1 codes can be found on-line.
     * @return A three-letter abbreviation of this locale's country.
     * @throws MissingResourceException Throws MissingResourceException if the&#xA; three-letter country abbreviation is not available for this locale.
     */
    getISO3Country(): string;

    /**
     * Returns a name for the locale's language that is appropriate for display to the
     *  user.
     *  If possible, the name returned will be localized for the default
     *  {@link Locale.Category#DISPLAY DISPLAY} locale.
     *  For example, if the locale is fr_FR and the default
     *  {@link Locale.Category#DISPLAY DISPLAY} locale
     *  is en_US, getDisplayLanguage() will return "French"; if the locale is en_US and
     *  the default {@link Locale.Category#DISPLAY DISPLAY} locale is fr_FR,
     *  getDisplayLanguage() will return "anglais".
     *  If the name returned cannot be localized for the default
     *  {@link Locale.Category#DISPLAY DISPLAY} locale,
     *  (say, we don't have a Japanese name for Croatian),
     *  this function falls back on the English name, and uses the ISO code as a last-resort
     *  value.  If the locale doesn't specify a language, this function returns the empty string.
     * @return The name of the display language.
     */
    getDisplayLanguage(): string;

    /**
     * Returns a name for the locale's language that is appropriate for display to the
     *  user.
     *  If possible, the name returned will be localized according to inLocale.
     *  For example, if the locale is fr_FR and inLocale
     *  is en_US, getDisplayLanguage() will return "French"; if the locale is en_US and
     *  inLocale is fr_FR, getDisplayLanguage() will return "anglais".
     *  If the name returned cannot be localized according to inLocale,
     *  (say, we don't have a Japanese name for Croatian),
     *  this function falls back on the English name, and finally
     *  on the ISO code as a last-resort value.  If the locale doesn't specify a language,
     *  this function returns the empty string.
     * @param inLocale The locale for which to retrieve the display language.
     * @return The name of the display language appropriate to the given locale.
     * @throws NullPointerException if <code>inLocale</code> is <code>null</code>
     */
    getDisplayLanguage(inLocale: Locale): string;

    /**
     * Returns a name for the the locale's script that is appropriate for display to
     *  the user. If possible, the name will be localized for the default
     *  {@link Locale.Category#DISPLAY DISPLAY} locale.  Returns
     *  the empty string if this locale doesn't specify a script code.
     * @return the display name of the script code for the current default&#xA; {@link Locale.Category#DISPLAY DISPLAY} locale
     * @since 1.7
     */
    getDisplayScript(): string;

    /**
     * Returns a name for the locale's script that is appropriate
     *  for display to the user. If possible, the name will be
     *  localized for the given locale. Returns the empty string if
     *  this locale doesn't specify a script code.
     * @param inLocale The locale for which to retrieve the display script.
     * @return the display name of the script code for the current default&#xA; {@link Locale.Category#DISPLAY DISPLAY} locale
     * @throws NullPointerException if <code>inLocale</code> is <code>null</code>
     * @since 1.7
     */
    getDisplayScript(inLocale: Locale): string;

    /**
     * Returns a name for the locale's country that is appropriate for display to the
     *  user.
     *  If possible, the name returned will be localized for the default
     *  {@link Locale.Category#DISPLAY DISPLAY} locale.
     *  For example, if the locale is fr_FR and the default
     *  {@link Locale.Category#DISPLAY DISPLAY} locale
     *  is en_US, getDisplayCountry() will return "France"; if the locale is en_US and
     *  the default {@link Locale.Category#DISPLAY DISPLAY} locale is fr_FR,
     *  getDisplayCountry() will return "Etats-Unis".
     *  If the name returned cannot be localized for the default
     *  {@link Locale.Category#DISPLAY DISPLAY} locale,
     *  (say, we don't have a Japanese name for Croatia),
     *  this function falls back on the English name, and uses the ISO code as a last-resort
     *  value.  If the locale doesn't specify a country, this function returns the empty string.
     * @return The name of the country appropriate to the locale.
     */
    getDisplayCountry(): string;

    /**
     * Returns a name for the locale's country that is appropriate for display to the
     *  user.
     *  If possible, the name returned will be localized according to inLocale.
     *  For example, if the locale is fr_FR and inLocale
     *  is en_US, getDisplayCountry() will return "France"; if the locale is en_US and
     *  inLocale is fr_FR, getDisplayCountry() will return "Etats-Unis".
     *  If the name returned cannot be localized according to inLocale.
     *  (say, we don't have a Japanese name for Croatia),
     *  this function falls back on the English name, and finally
     *  on the ISO code as a last-resort value.  If the locale doesn't specify a country,
     *  this function returns the empty string.
     * @param inLocale The locale for which to retrieve the display country.
     * @return The name of the country appropriate to the given locale.
     * @throws NullPointerException if <code>inLocale</code> is <code>null</code>
     */
    getDisplayCountry(inLocale: Locale): string;

    /**
     * Returns a name for the locale's variant code that is appropriate for display to the
     *  user.  If possible, the name will be localized for the default
     *  {@link Locale.Category#DISPLAY DISPLAY} locale.  If the locale
     *  doesn't specify a variant code, this function returns the empty string.
     * @return The name of the display variant code appropriate to the locale.
     */
    getDisplayVariant(): string;

    /**
     * Returns a name for the locale's variant code that is appropriate for display to the
     *  user.  If possible, the name will be localized for inLocale.  If the locale
     *  doesn't specify a variant code, this function returns the empty string.
     * @param inLocale The locale for which to retrieve the display variant code.
     * @return The name of the display variant code appropriate to the given locale.
     * @throws NullPointerException if <code>inLocale</code> is <code>null</code>
     */
    getDisplayVariant(inLocale: Locale): string;

    /**
     * Returns a name for the locale that is appropriate for display to the
     *  user. This will be the values returned by getDisplayLanguage(),
     *  getDisplayScript(), getDisplayCountry(), and getDisplayVariant() assembled
     *  into a single string. The the non-empty values are used in order,
     *  with the second and subsequent names in parentheses.  For example:
     *  <blockquote>
     *  language (script, country, variant)<br>
     *  language (country)<br>
     *  language (variant)<br>
     *  script (country)<br>
     *  country<br>
     *  </blockquote>
     *  depending on which fields are specified in the locale.  If the
     *  language, script, country, and variant fields are all empty,
     *  this function returns the empty string.
     * @return The name of the locale appropriate to display.
     */
    getDisplayName(): string;

    /**
     * Returns a name for the locale that is appropriate for display
     *  to the user.  This will be the values returned by
     *  getDisplayLanguage(), getDisplayScript(),getDisplayCountry(),
     *  and getDisplayVariant() assembled into a single string.
     *  The non-empty values are used in order,
     *  with the second and subsequent names in parentheses.  For example:
     *  <blockquote>
     *  language (script, country, variant)<br>
     *  language (country)<br>
     *  language (variant)<br>
     *  script (country)<br>
     *  country<br>
     *  </blockquote>
     *  depending on which fields are specified in the locale.  If the
     *  language, script, country, and variant fields are all empty,
     *  this function returns the empty string.
     * @param inLocale The locale for which to retrieve the display name.
     * @return The name of the locale appropriate to display.
     * @throws NullPointerException if <code>inLocale</code> is <code>null</code>
     */
    getDisplayName(inLocale: Locale): string;

    /**
 * Overrides Cloneable.
  
    */
    clone(): unknown;

    /**
 * Override hashCode.
 *  Since Locales are often used in hashtables, caches the value
 *  for speed.
  
    */
    hashCode(): number;

    /**
     * Returns true if this Locale is equal to another object.  A Locale is
     *  deemed equal to another Locale with identical language, script, country,
     *  variant and extensions, and unequal to all other objects.
     * @return true if this Locale is equal to the specified object.
     */
    equals(obj: unknown): boolean;

    /**
     * Returns a list of matching {@code Locale} instances using the filtering
     *  mechanism defined in RFC 4647.
     * @param priorityList user's Language Priority List in which each language&#xA; tag is sorted in descending order based on priority or weight
     * @param locales {@code Locale} instances used for matching
     * @param mode filtering mode
     * @return a list of {@code Locale} instances for matching language tags&#xA; sorted in descending order based on priority or weight, or an empty&#xA; list if nothing matches. The list is modifiable.
     * @throws NullPointerException if {@code priorityList} or {@code locales}&#xA; is {@code null}
     * @throws IllegalArgumentException if one or more extended language ranges&#xA; are included in the given list when&#xA; {@link FilteringMode#REJECT_EXTENDED_RANGES} is specified
     * @since 1.8
     */
    filter(
      priorityList: List | unknown[],
      locales: Collection | unknown[],
      mode: FilteringMode
    ): List;

    /**
     * Returns a list of matching {@code Locale} instances using the filtering
     *  mechanism defined in RFC 4647. This is equivalent to
     *  {@link #filter(List, Collection, FilteringMode)} when {@code mode} is
     *  {@link FilteringMode#AUTOSELECT_FILTERING}.
     * @param priorityList user's Language Priority List in which each language&#xA; tag is sorted in descending order based on priority or weight
     * @param locales {@code Locale} instances used for matching
     * @return a list of {@code Locale} instances for matching language tags&#xA; sorted in descending order based on priority or weight, or an empty&#xA; list if nothing matches. The list is modifiable.
     * @throws NullPointerException if {@code priorityList} or {@code locales}&#xA; is {@code null}
     * @since 1.8
     */
    filter(
      priorityList: List | unknown[],
      locales: Collection | unknown[]
    ): List;

    /**
     * Returns a list of matching languages tags using the basic filtering
     *  mechanism defined in RFC 4647.
     * @param priorityList user's Language Priority List in which each language&#xA; tag is sorted in descending order based on priority or weight
     * @param tags language tags
     * @param mode filtering mode
     * @return a list of matching language tags sorted in descending order&#xA; based on priority or weight, or an empty list if nothing matches.&#xA; The list is modifiable.
     * @throws NullPointerException if {@code priorityList} or {@code tags} is&#xA; {@code null}
     * @throws IllegalArgumentException if one or more extended language ranges&#xA; are included in the given list when&#xA; {@link FilteringMode#REJECT_EXTENDED_RANGES} is specified
     * @since 1.8
     */
    filterTags(
      priorityList: List | unknown[],
      tags: Collection | unknown[],
      mode: FilteringMode
    ): List;

    /**
     * Returns a list of matching languages tags using the basic filtering
     *  mechanism defined in RFC 4647. This is equivalent to
     *  {@link #filterTags(List, Collection, FilteringMode)} when {@code mode}
     *  is {@link FilteringMode#AUTOSELECT_FILTERING}.
     * @param priorityList user's Language Priority List in which each language&#xA; tag is sorted in descending order based on priority or weight
     * @param tags language tags
     * @return a list of matching language tags sorted in descending order&#xA; based on priority or weight, or an empty list if nothing matches.&#xA; The list is modifiable.
     * @throws NullPointerException if {@code priorityList} or {@code tags} is&#xA; {@code null}
     * @since 1.8
     */
    filterTags(
      priorityList: List | unknown[],
      tags: Collection | unknown[]
    ): List;

    /**
     * Returns a {@code Locale} instance for the best-matching language
     *  tag using the lookup mechanism defined in RFC 4647.
     * @param priorityList user's Language Priority List in which each language&#xA; tag is sorted in descending order based on priority or weight
     * @param locales {@code Locale} instances used for matching
     * @return the best matching <code>Locale</code> instance chosen based on&#xA; priority or weight, or {@code null} if nothing matches.
     * @throws NullPointerException if {@code priorityList} or {@code tags} is&#xA; {@code null}
     * @since 1.8
     */
    lookup(
      priorityList: List | unknown[],
      locales: Collection | unknown[]
    ): Locale;

    /**
     * Returns the best-matching language tag using the lookup mechanism
     *  defined in RFC 4647.
     * @param priorityList user's Language Priority List in which each language&#xA; tag is sorted in descending order based on priority or weight
     * @param tags language tangs used for matching
     * @return the best matching language tag chosen based on priority or&#xA; weight, or {@code null} if nothing matches.
     * @throws NullPointerException if {@code priorityList} or {@code tags} is&#xA; {@code null}
     * @since 1.8
     */
    lookupTag(
      priorityList: List | unknown[],
      tags: Collection | unknown[]
    ): string;

    /**
 * Useful constant for language.
  
    */
    ENGLISH: Locale;

    /**
 * Useful constant for language.
  
    */
    FRENCH: Locale;

    /**
 * Useful constant for language.
  
    */
    GERMAN: Locale;

    /**
 * Useful constant for language.
  
    */
    ITALIAN: Locale;

    /**
 * Useful constant for language.
  
    */
    JAPANESE: Locale;

    /**
 * Useful constant for language.
  
    */
    KOREAN: Locale;

    /**
 * Useful constant for language.
  
    */
    CHINESE: Locale;

    /**
 * Useful constant for language.
  
    */
    SIMPLIFIED_CHINESE: Locale;

    /**
 * Useful constant for language.
  
    */
    TRADITIONAL_CHINESE: Locale;

    /**
 * Useful constant for country.
  
    */
    FRANCE: Locale;

    /**
 * Useful constant for country.
  
    */
    GERMANY: Locale;

    /**
 * Useful constant for country.
  
    */
    ITALY: Locale;

    /**
 * Useful constant for country.
  
    */
    JAPAN: Locale;

    /**
 * Useful constant for country.
  
    */
    KOREA: Locale;

    /**
 * Useful constant for country.
  
    */
    CHINA: Locale;

    /**
 * Useful constant for country.
  
    */
    PRC: Locale;

    /**
 * Useful constant for country.
  
    */
    TAIWAN: Locale;

    /**
 * Useful constant for country.
  
    */
    UK: Locale;

    /**
 * Useful constant for country.
  
    */
    US: Locale;

    /**
 * Useful constant for country.
  
    */
    CANADA: Locale;

    /**
 * Useful constant for country.
  
    */
    CANADA_FRENCH: Locale;

    /**
     * Useful constant for the root locale.  The root locale is the locale whose
     *  language, country, and variant are empty ("") strings.  This is regarded
     *  as the base locale of all locales, and is used as the language/country
     *  neutral locale for the locale sensitive operations.
     * @since 1.6
     */
    ROOT: Locale;

    /**
     * The key for the private use extension ('x').
     * @see #getExtension(char)
     * @see Builder#setExtension(char, String)
     * @since 1.7
     */
    PRIVATE_USE_EXTENSION: string;

    /**
     * The key for Unicode locale extension ('u').
     * @see #getExtension(char)
     * @see Builder#setExtension(char, String)
     * @since 1.7
     */
    UNICODE_LOCALE_EXTENSION: string;
  };
