/**
 * Locale utility interface.
 *
 * <p>
 *    <strong>Note!</strong> Sitevision supports a few Locales that uses <em>3 char ISO-639 language codes</em>. These are <em>not</em>
 *    automatically handled by Java. Sitevision also supports a few 2 char language codes that isn't natively supported by Java in most
 *    regions of the world. This interface handles all Locales supported/installed by Java and all "custom" Locales that Sitevision has added.
 *    Here are some examples for such Locales:
 * </p>
 * <ul>
 *    <li><em>Northern Sami</em>, i.e. <code>new Locale("se", "SE")</code></li>
 *    <li><em>South Sami</em>, i.e. <code>new Locale("sma", "SE")</code></li>
 *    <li><em>Lule Sami</em>, i.e. <code>new Locale("smj", "SE")</code></li>
 *    <li><em>Soranî</em>, i.e. <code>new Locale("ckb", "IR")</code></li>
 *    <li><em>Farsi</em>, i.e. <code>new Locale("fa", "IR")</code></li>
 *    <li><em>Kurmanji</em>, i.e. <code>new Locale("ku", "TR")</code></li>
 * </ul>
 * <p>
 *    Information about <a href="http://www.oracle.com/technetwork/java/javase/java8locales-2095355.html">Supported Locales in JDK 8</a>.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getLocaleUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 * @see senselogic.sitevision.api.context.PortletContextUtil#getCurrentLocale()
 * @see senselogic.sitevision.api.node.NodeResolverUtil#getLocaleResolver()
 */

interface LocaleUtil {
  /**
   * Gets an immutable list of all available Locales (installed Java Locales and custom ones added by Sitevision).
   *
   * <p>
   *    <strong>Note!</strong> The returned List is <em>immutable/unmodifiable</em>, i.e. you must create a copy if
   *    you want to modify it (e.g. sort).
   * </p>
   * <p>
   *    Below is an example of how to display some info about all locales via server-side Javascript:
   * </p>
   * <pre><code>    (function() {
   *       var localeUtil = require('LocaleUtil'),
   *          locales = localeUtil.getAvailableLocales(),
   *          count = locales.size(),
   *          currentLocale = require('PortletContextUtil').getCurrentLocale(),
   *          locale, i;
   *
   *       out.println('&lt;table&gt;');
   *       out.println('&lt;tr&gt;');
   *       out.println('   &lt;th&gt;Language&lt;/th&gt;');
   *       out.println('   &lt;th&gt;Country&lt;/th&gt;');
   *       out.println('   &lt;th&gt;Language Tag&lt;/th&gt;');
   *       out.println('   &lt;th&gt;Native language name&lt;/th&gt;');
   *       out.println('   &lt;th&gt;Localized language name&lt;/th&gt;');
   *       out.println('   &lt;th&gt;Directionality&lt;/th&gt;');
   *       out.println('&lt;/tr&gt;');
   *       for (i = 0; i &lt; count; i++) {
   *          locale = locales.get(i);
   *          out.println('&lt;tr&gt;');
   *          out.println('   &lt;td&gt;' + localeUtil.getNormalizedLanguage(locale) + '&lt;/td&gt;');
   *          out.println('   &lt;td&gt;' + locale.getCountry() + '&lt;/td&gt;');
   *          out.println('   &lt;td&gt;' + localeUtil.getLanguageTag(locale) + '&lt;/td&gt;');
   *          out.println('   &lt;td&gt;' + localeUtil.getNativeLanguageName(locale) + '&lt;/td&gt;');
   *          out.println('   &lt;td&gt;' + localeUtil.getLocalizedLanguageName(locale, currentLocale) + '&lt;/td&gt;');
   *          out.println('   &lt;td&gt;' + (localeUtil.isRTL(locale) ? 'RTL' : 'LTR') + '&lt;/td&gt;');
   *          out.println('&lt;/tr&gt;');
   *       }
   *       out.println('&lt;/table&gt;');
   *    }());</code></pre>
   * @return a immutable/unmodifiable list of all available Locales (i.e. all Locales installed by Java and all custom Locales added by Sitevision)
   * @since Sitevision 4.1
   */
  getAvailableLocales(): unknown[];

  /**
   * Gets the native language name for a specified Locale.
   *
   * <p>
   *    Some examples:
   * </p>
   * <ul>
   *    <li>A <em>Swedish</em> Locale will return <em>Svenska</em></li>
   *    <li>A <em>German</em> Locale will return <em>Deutsch</em></li>
   *    <li>A <em>Northern Sami</em> Locale will return <em>Davvisámegiella</em></li>
   * </ul>
   * @param aLocale the locale
   * @return the native language name for <code>aLocale</code>, or <code>null</code> if <code>aLocale</code> is <code>null</code>
   */
  getNativeLanguageName(aLocale: java.util.Locale): string;

  /**
   * Gets the localized language name for a specified Locale.
   *
   * <p>
   *    Some examples:
   * </p>
   * <ul>
   *    <li>A <em>Swedish</em> <code>aLocale</code> and an <em>English</em> <code>aDisplayLocale</code> will return <em>Swedish</em></li>
   *    <li>An <em>English</em> <code>aLocale</code> and a <em>Swedish</em> <code>aDisplayLocale</code> will return <em>Engelska</em></li>
   *    <li>A <em>German</em> <code>aLocale</code> and a <em>Swedish</em> <code>aDisplayLocale</code> will return <em>Tyska</em></li>
   *    <li>A <em>German</em> <code>aLocale</code> and an <em>English</em> <code>aDisplayLocale</code> will return <em>German</em></li>
   * </ul>
   * @param aLocale the locale to get the language name for
   * @param aDisplayLocale the locale that should be used when displaying the language name of <code>aLocale</code>
   * @return the localized language name for <code>aLocale</code>, or <code>null</code> if <code>aLocale</code> is <code>null</code>
   */
  getLocalizedLanguageName(
    aLocale: java.util.Locale,
    aDisplayLocale: java.util.Locale
  ): string;

  /**
   * Gets the native language name for a Locale that is resolved via a specified locale string.
   *
   * <p>
   *    This method can be seen as a convenience method that combines the {@link #getLocaleByString(String)} method and the
   *    {@link #getNativeLanguageName(java.util.Locale)} method to resolve a <code>Locale</code> and get the native language name.
   *    But this is not strictly true. This method will handle all all well-formed locale strings that starts with a valid
   *    language code used by a supported locale <em>(even though the "full" locale string might actually refer to a non-supported locale)</em>.
   * </p>
   * <p>
   *    Some examples of this forgiving/lenient behaviour:
   * </p>
   * <ul>
   *    <li>
   *       <code>"rmy-RO"</code> matches a supported locale (Romani in Romania) and will return
   *       the native name for the "rmy" language.
   *    </li>
   *    <li>
   *       <code>"rmy_RO"</code> matches a supported locale (Romani in Romania) and will return
   *       the native name for the "rmy" language.
   *    </li>
   *    <li>
   *       <code>"rmy"</code> does NOT match the supported locale <code>"rmy-RO"/"rmy_RO"</code> but will still return
   *       the native name for the "rmy" language.
   *    </li>
   *    <li>
   *       <code>"rmy-SE"</code> does NOT match the supported locale <code>"rmy-RO"</code> but will still return
   *       the native name for the "rmy" language.
   *    </li>
   *    <li>
   *       <code>"rmy_SE"</code> does NOT match the supported locale <code>"rmy_RO"</code> but will still return
   *       the native name for the "rmy" language.
   *    </li>
   * </ul>
   * @param aLocaleString a language tag ("en-US") or string that contains language only ("en") or language and country ("en_US"), typically what you will get as result of <code>Locale.toString()</code>
   * @return the native language name for the <code>aLocale</code> that matches <code>aLocaleString</code>, or <code>null</code> if <code>aLocaleString</code> is <code>null</code>, whitespace only or doesn't match a supported Locale
   */
  getNativeLanguageNameByString(aLocaleString: java.lang.String): string;

  /**
   * Gets the localized language name for a Locale that is resolved via a specified locale string.
   *
   * <p>
   *    This is a convenience method that combines the {@link #getLocaleByString(String)} method and the
   *    {@link #getLocalizedLanguageName(java.util.Locale, java.util.Locale)}
   *    method to resolve a <code>Locale</code> and get the localized language name.
   * </p>
   * @param aLocaleString a string that contains language ("en") or language and country ("en_US"), typically what you will get as result of <code>Locale.toString()</code>
   * @param aDisplayLocale the locale that should be used when displaying the language name of the <code>Locale</code> resolved by <code>aLocaleString</code>
   * @return the localized language name for the <code>aLocale</code> that matches <code>aLocaleString</code>, or <code>null</code> if <code>aLocaleString</code> is <code>null</code>, whitespace only or doesn't match a supported Locale
   */
  getLocalizedLanguageNameByString(
    aLocaleString: java.lang.String,
    aDisplayLocale: java.util.Locale
  ): string;

  /**
   * Returns the Locale for a language tag or a String that contains language or language + country ("en-US" or "en" or "en_US").
   *
   * <p>
   *    A <code>toString()</code> on a english american locale returns the String <code>"en_US"</code>, but to create a locale
   *    from that string you can NOT just create it by doing: <code>new Locale("en_US")</code>. You must split language (en)
   *    and country (US) since the proper way of creating the Locale is: <code>new Locale("en", "US")</code>.
   * </p>
   *
   * <p>
   *    Some examples of accepted locale strings:
   * </p>
   * <ul>
   *    <li><em>Swedish</em> language tag: "sv-SE" and locale strings: "sv", "sv_SE"</li>
   *    <li><em>German</em> language tag: "de-DE" and locale strings: "de", "de_DE"</li>
   *    <li><em>Northern Sami</em> language tag: "se-SE" and locale string: "se_SE"</li>
   * </ul>
   *
   * <p>
   *    <em>Note! This method only handles supported Locale's, i.e. Locales available via {@link #getAvailableLocales()}.</em>
   * </p>
   * @param aLocaleString a language tag or the toString() value of a Locale (i.e. a String with a lowercased language - or a lowercased language and uppercased country, separated with underscore).
   * @return a Locale matching <code>aLocaleString</code>, or <code>null</code> if <code>aLocaleString</code> is <code>null</code>, whitespace only or doesn't match a supported Locale
   */
  getLocaleByString(aLocaleString: java.lang.String): unknown;

  /**
   * Returns the IETF BCP 47 language tag value for a Locale.
   *
   * <p>
   *    Language tags are used to indicate the language of texts or other items in HTML and XML documents. The language tag
   *    syntax is defined by the IETF <a href="http://www.rfc-editor.org/rfc/bcp/bcp47.txt">BCP 47</a>
   *    and exemplified by W3C internationalization in
   *    <a href="http://www.w3.org/International/articles/language-tags/">Language tags in HTML and XML</a>.
   * </p>
   *
   * <p>
   *    This method supports both the Java default locales and the custom-defined ones in Sitevision (such as Northern Sami).
   *    It produces a well-formatted BCP 47 value for a specified Locale but the language and region are not verified against the
   *    <a href="http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry">IANA language subtag registry</a>.
   * </p>
   * <p>
   *    Some output examples:
   * </p>
   * <ul>
   *    <li><em>Swedish</em> locale (language "sv", country "SE"): "sv-SE"</li>
   *    <li><em>American english</em> locale (language "en", country "US"): "en-US"</li>
   *    <li><em>Canadian french</em> locale (language "fr", country "CA"): "fr-CA"</li>
   * </ul>
   * @param aLocale a locale
   * @return the <code>aLocale</code> formatted according to BCP 47, or <code>null</code> if <code>aLocale</code> is <code>null</code>
   */
  getLanguageTag(aLocale: java.util.Locale): string;

  /**
   * Returns the normalized language for a specified Locale.
   *
   * <p>
   *    Java uses old ISO language codes for for language codes that have changed. For instance: the legacy ISO language code for <em>Yiddish</em>
   *    is <em>"ji"</em>, but that was changed to <em>"yi"</em> 1989. This method compensates for Javas legacy considerations and returns the
   *    new ISO language codes instead.
   * </p>
   * @param aLocale a locale
   * @return the normalized language for the locale, or null if the locale is null
   * @since Sitevision 4.5.1
   */
  getNormalizedLanguage(aLocale: java.util.Locale): string;

  /**
   * Checks if a locale has writing direction Right-To-Left (RTL).
   *
   * <p>
   *    Most languages have a clear writing direction, typically Left-To-Right (LTR). Though, some languages has mixed writing directions
   *    (e.g. text is RTL but numbers are LTR) and some languages is written with different symbols (e.g. Latin, Arabic) in different regions.
   *    This method will return true for such complex/mixed languages if the official writing direction is RTL or if RTL is used by the majority
   *    of the native language writers.
   * </p>
   * <p>
   *    This method supports the Java default locales and the custom-defined ones in Sitevision (such as Northern Sami).
   *    It also supports locales that aren't officially supported by Sitevision (i.e. not present in {@link #getAvailableLocales()}).
   *    The direction of the first char in the locales native name (as of {@link #getNativeLanguageName(Locale)})
   *    is used to determine if the locale is LTR or RTL for such (unofficial) locales.
   * </p>
   * @param aLocale a locale
   * @return true if aLocale has Right-To-Left (RTL) writing direction, false otherwise (i.e. false indicates LTR)
   * @since Sitevision 4.3
   */
  isRTL(aLocale: java.util.Locale): boolean;

  /**
   * <p>
   *    Gets a Locale with language and country for a (typically language-only) Locale.
   * </p>
   *
   * <table>
   *    <caption>Replacement of language-only locales</caption>
   *    <tr>
   *       <th scope="col">Locale/language</th>
   *       <th scope="col">Replacement</th>
   *    </tr>
   *    <tr>
   *       <td>Swedish (sv)</td>
   *       <td>Sweden (sv-SE)</td>
   *    </tr>
   *    <tr>
   *       <td>Norwegian (no)</td>
   *       <td>Norway (no-NO)</td>
   *    </tr>
   *    <tr>
   *       <td>Danish (da)</td>
   *       <td>Denmark (da-DK)</td>
   *    </tr>
   *    <tr>
   *       <td>Finnish (fi)</td>
   *       <td>Finland (fi-FI)</td>
   *    </tr>
   *    <tr>
   *       <td>Icelandic (is)</td>
   *       <td>Iceland (is-IS)</td>
   *    </tr>
   *    <tr>
   *       <td>Belarusian (be)</td>
   *       <td>Belarus (be-BY)</td>
   *    </tr>
   *    <tr>
   *       <td>Bulgarian (bg)</td>
   *       <td>Bulgaria (bg-BG)</td>
   *    </tr>
   *    <tr>
   *       <td>Catalan (ca)</td>
   *       <td>Spain (ca-ES)</td>
   *    </tr>
   *    <tr>
   *       <td>Czech (cs)</td>
   *       <td>Czech Republic (cs-CZ)</td>
   *    </tr>
   *    <tr>
   *       <td>Estonian (et)</td>
   *       <td>Estonia (et-EE)</td>
   *    </tr>
   *    <tr>
   *       <td>Irish (ga)</td>
   *       <td>Ireland (ga-IE)</td>
   *    </tr>
   *    <tr>
   *       <td>Hebrew (he) and (iw)</td>
   *       <td>Israel (he-IL)</td>
   *    </tr>
   *    <tr>
   *       <td>Hindi (hi)</td>
   *       <td>India (hi-IN)</td>
   *    </tr>
   *    <tr>
   *       <td>Croatian (hr)</td>
   *       <td>Croatia (hr-HR)</td>
   *    </tr>
   *    <tr>
   *       <td>Indonesian (id) and (in)</td>
   *       <td>Indonesia (id-ID)</td>
   *    </tr>
   *    <tr>
   *       <td>Italian (it)</td>
   *       <td>Italy (it-IT)</td>
   *    </tr>
   *    <tr>
   *       <td>Japanese (ja)</td>
   *       <td>Japan (ja-JP)</td>
   *    </tr>
   *    <tr>
   *       <td>Lithuanian (lt)</td>
   *       <td>Lithuania (lt-LT)</td>
   *    </tr>
   *    <tr>
   *       <td>Latvian (lv)</td>
   *       <td>Latvia (lv-LV)</td>
   *    </tr>
   *    <tr>
   *       <td>Malay (ms)</td>
   *       <td>Malaysia (ms-MY)</td>
   *    </tr>
   *    <tr>
   *       <td>Maltese (mt)</td>
   *       <td>Malta (mt-MT)</td>
   *    </tr>
   *    <tr>
   *       <td>Polish (pl)</td>
   *       <td>Poland (pl-PL)</td>
   *    </tr>
   *    <tr>
   *       <td>Romanian (ro)</td>
   *       <td>Romania (ro-RO)</td>
   *    </tr>
   *    <tr>
   *       <td>Slovak (sk)</td>
   *       <td>Slovakia (sk-SK)</td>
   *    </tr>
   *    <tr>
   *       <td>Slovenian (sl)</td>
   *       <td>Slovenia (sl-SI)</td>
   *    </tr>
   *    <tr>
   *       <td>Albanian (sq)</td>
   *       <td>Albania (sq-AL)</td>
   *    </tr>
   *    <tr>
   *       <td>Thai (th)</td>
   *       <td>Thailand (th-TH)</td>
   *    </tr>
   *    <tr>
   *       <td>Turkish (tr)</td>
   *       <td>Turkey (tr-TR)</td>
   *    </tr>
   *    <tr>
   *       <td>Ukranian (uk)</td>
   *       <td>Ukraine (uk-UA)</td>
   *    </tr>
   *    <tr>
   *       <td>Vietnamese (vi)</td>
   *       <td>Vietnam (vi-VN)</td>
   *    </tr>
   * </table>
   * <p>
   *    <strong>Important language-only note!</strong> There are many language-only locales that can not be resolved
   *    <em>(i.e. the language is officially spoken in multiple countries)</em>.
   *    This method will return <code>null</code> for such locales. For example:
   * </p>
   * <ul>
   *    <li>English (en)</li>
   *    <li>French (fr)</li>
   *    <li>German (de)</li>
   *    <li>Dutch (nl)</li>
   *    <li>Spanish (es)</li>
   *    <li>Russian (ru)</li>
   *    <li>Arabic (ar)</li>
   *    <li>Farsi (fa)</li>
   *    <li>...</li>
   * </ul>
   * @param aLocale a Locale, typically a language-only Locale
   * @return the corresponding locale with country, or null if no corresponding locale could be found
   * @since Sitevision 6.1
   */
  resolveCountryLocale(aLocale: java.util.Locale): unknown;
}
