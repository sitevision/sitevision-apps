import List from '../../builtins/List';
import Locale from '../../builtins/Locale';

/**
  * Gets an immutable list of all available Locales (installed Java Locales and custom ones added by Sitevision).
  * @returns {List<Locale>} a immutable/unmodifiable list of all available Locales (i.e. all Locales installed by Java and all custom Locales added by Sitevision) 
  */
export function getAvailableLocales(): List<Locale>;

/**
* Returns the IETF BCP 47 language tag value for a Locale.
* @returns {string} the aLocale formatted according to BCP 47, or null if aLocale is null 
* @param {Locale} aLocale - a locale
*/
export function getLanguageTag(aLocale: Locale): string;

/**
* Returns the Locale for a language tag or a String that contains language or language + country ("en-US" or "en" or "en_US").
* @returns {Locale} a Locale matching aLocaleString,or null if aLocaleString is null, whitespace only or doesn't match a supported Locale 
* @param {string} aLocaleString - a language tag or the toString() value of a Locale (i.e. a String with a lowercased language - or a lowercased language and uppercased country, separated with underscore).
*/
export function getLocaleByString(aLocaleString: string): Locale;

/**
* Gets the localized language name for a specified Locale.
* @returns {string} the localized language name for aLocale, or null if aLocale is null 
* @param {Locale} aLocale - the locale to get the language name for
* @param {Locale} aDisplayLocale - the locale that should be used when displaying the language name of aLocale
*/
export function getLocalizedLanguageName(aLocale: Locale, aDisplayLocale: Locale): string;

/**
* Gets the localized language name for a Locale that is resolved via a specified locale string.
* @returns {string} the localized language name for the aLocale that matches aLocaleString,or null if aLocaleString is null, whitespace only or doesn't match a supported Locale 
* @param {string} aLocaleString - a string that contains language ("en") or language and country ("en_US"), typically what you will get as result of Locale.toString()
* @param {Locale} aDisplayLocale - the locale that should be used when displaying the language name of the Locale resolved by aLocaleString
*/
export function getLocalizedLanguageNameByString(aLocaleString: string, aDisplayLocale: Locale): string;

/**
* Gets the native language name for a specified Locale.
* @returns {string} the native language name for aLocale, or null if aLocale is null 
* @param {Locale} aLocale - the locale
*/
export function getNativeLanguageName(aLocale: Locale): string;

/**
* Gets the native language name for a Locale that is resolved via a specified locale string.
* @returns {string} the native language name for the aLocale that matches aLocaleString,or null if aLocaleString is null, whitespace only or doesn't match a supported Locale 
* @param {string} aLocaleString - a language tag ("en-US") or string that contains language only ("en") or language and country ("en_US"), typically what you will get as result of Locale.toString()
*/
export function getNativeLanguageNameByString(aLocaleString: string): string;

/**
* Returns the normalized language for a specified Locale.
* @returns {string} the normalized language for the locale, or null if the locale is null 
* @param {Locale} aLocale - a locale
*/
export function getNormalizedLanguage(aLocale: Locale): string;

/**
* Checks if a locale has writing direction Right-To-Left (RTL).
* @returns {boolean} true if aLocale has Right-To-Left (RTL) writing direction, false otherwise (i.e. false indicates LTR) 
* @param {Locale} aLocale - a locale
*/
export function isRTL(aLocale: Locale): boolean;

/**
* Gets a Locale with language and country for a (typically language-only) Locale.
* @returns {Locale} the corresponding locale with country, or null if no corresponding locale could be found 
* @param {Locale} aLocale - a Locale, typically a language-only Locale
*/
export function resolveCountryLocale(aLocale: Locale): Locale;


declare namespace localeUtil {
  export {
    getAvailableLocales,
    getLanguageTag,
    getLocaleByString,
    getLocalizedLanguageName,
    getLocalizedLanguageNameByString,
    getNativeLanguageName,
    getNativeLanguageNameByString,
    getNormalizedLanguage,
    isRTL,
    resolveCountryLocale,
  };
}

export default localeUtil;
