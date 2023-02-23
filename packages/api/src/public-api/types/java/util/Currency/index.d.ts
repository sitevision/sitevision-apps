import type { String } from "../../lang/String";
import type { Locale } from "../Locale";
import type { Set } from "../Set";

import type { Object } from "../../lang/Object";
import type { Serializable } from "../../io/Serializable";

/**
 * Represents a currency. Currencies are identified by their ISO 4217 currency
 *  codes. Visit the <a href="http://www.iso.org/iso/home/standards/currency_codes.htm">
 *  ISO web site</a> for more information.
 *  <p>
 *  The class is designed so that there's never more than one
 *  <code>Currency</code> instance for any given currency. Therefore, there's
 *  no public constructor. You obtain a <code>Currency</code> instance using
 *  the <code>getInstance</code> methods.
 *  <p>
 *  Users can supersede the Java runtime currency data by means of the system
 *  property {@code java.util.currency.data}. If this system property is
 *  defined then its value is the location of a properties file, the contents of
 *  which are key/value pairs of the ISO 3166 country codes and the ISO 4217
 *  currency data respectively.  The value part consists of three ISO 4217 values
 *  of a currency, i.e., an alphabetic code, a numeric code, and a minor unit.
 *  Those three ISO 4217 values are separated by commas.
 *  The lines which start with '#'s are considered comment lines. An optional UTC
 *  timestamp may be specified per currency entry if users need to specify a
 *  cutover date indicating when the new data comes into effect. The timestamp is
 *  appended to the end of the currency properties and uses a comma as a separator.
 *  If a UTC datestamp is present and valid, the JRE will only use the new currency
 *  properties if the current UTC date is later than the date specified at class
 *  loading time. The format of the timestamp must be of ISO 8601 format :
 *  {@code 'yyyy-MM-dd'T'HH:mm:ss'}. For example,
 *  <p>
 *  <code>
 *  #Sample currency properties<br>
 *  JP=JPZ,999,0
 *  </code>
 *  <p>
 *  will supersede the currency data for Japan.
 *
 *  <p>
 *  <code>
 *  #Sample currency properties with cutover date<br>
 *  JP=JPZ,999,0,2014-01-01T00:00:00
 *  </code>
 *  <p>
 *  will supersede the currency data for Japan if {@code Currency} class is loaded after
 *  1st January 2014 00:00:00 GMT.
 *  <p>
 *  Where syntactically malformed entries are encountered, the entry is ignored
 *  and the remainder of entries in file are processed. For instances where duplicate
 *  country code entries exist, the behavior of the Currency information for that
 *  {@code Currency} is undefined and the remainder of entries in file are processed.
 * @since 1.4
 */
export type Currency = Object &
  Serializable & {
    /**
     * Returns the <code>Currency</code> instance for the given currency code.
     * @param currencyCode the ISO 4217 code of the currency
     * @return the <code>Currency</code> instance for the given currency code
     * @throws NullPointerException if <code>currencyCode</code> is null
     * @throws IllegalArgumentException if <code>currencyCode</code> is not&#xA; a supported ISO 4217 code.
     */
    getInstance(currencyCode: String | string): Currency;

    /**
     * Returns the <code>Currency</code> instance for the country of the
     *  given locale. The language and variant components of the locale
     *  are ignored. The result may vary over time, as countries change their
     *  currencies. For example, for the original member countries of the
     *  European Monetary Union, the method returns the old national currencies
     *  until December 31, 2001, and the Euro from January 1, 2002, local time
     *  of the respective countries.
     *  <p>
     *  The method returns <code>null</code> for territories that don't
     *  have a currency, such as Antarctica.
     * @param locale the locale for whose country a <code>Currency</code>&#xA; instance is needed
     * @return the <code>Currency</code> instance for the country of the given&#xA; locale, or {@code null}
     * @throws NullPointerException if <code>locale</code> or its country&#xA; code is {@code null}
     * @throws IllegalArgumentException if the country of the given {@code locale}&#xA; is not a supported ISO 3166 country code.
     */
    getInstance(locale: Locale): Currency;

    /**
     * Gets the set of available currencies.  The returned set of currencies
     *  contains all of the available currencies, which may include currencies
     *  that represent obsolete ISO 4217 codes.  The set can be modified
     *  without affecting the available currencies in the runtime.
     * @return the set of available currencies. If there is no currency&#xA; available in the runtime, the returned set is empty.
     * @since 1.7
     */
    getAvailableCurrencies(): Set;

    /**
     * Gets the ISO 4217 currency code of this currency.
     * @return the ISO 4217 currency code of this currency.
     */
    getCurrencyCode(): string;

    /**
     * Gets the symbol of this currency for the default
     *  {@link Locale.Category#DISPLAY DISPLAY} locale.
     *  For example, for the US Dollar, the symbol is "$" if the default
     *  locale is the US, while for other locales it may be "US$". If no
     *  symbol can be determined, the ISO 4217 currency code is returned.
     *  <p>
     *  This is equivalent to calling
     *  {@link #getSymbol(Locale)
     *      getSymbol(Locale.getDefault(Locale.Category.DISPLAY))}.
     * @return the symbol of this currency for the default&#xA; {@link Locale.Category#DISPLAY DISPLAY} locale
     */
    getSymbol(): string;

    /**
     * Gets the symbol of this currency for the specified locale.
     *  For example, for the US Dollar, the symbol is "$" if the specified
     *  locale is the US, while for other locales it may be "US$". If no
     *  symbol can be determined, the ISO 4217 currency code is returned.
     * @param locale the locale for which a display name for this currency is&#xA; needed
     * @return the symbol of this currency for the specified locale
     * @throws NullPointerException if <code>locale</code> is null
     */
    getSymbol(locale: Locale): string;

    /**
     * Gets the default number of fraction digits used with this currency.
     *  For example, the default number of fraction digits for the Euro is 2,
     *  while for the Japanese Yen it's 0.
     *  In the case of pseudo-currencies, such as IMF Special Drawing Rights,
     *  -1 is returned.
     * @return the default number of fraction digits used with this currency
     */
    getDefaultFractionDigits(): number;

    /**
     * Returns the ISO 4217 numeric code of this currency.
     * @return the ISO 4217 numeric code of this currency
     * @since 1.7
     */
    getNumericCode(): number;

    /**
     * Gets the name that is suitable for displaying this currency for
     *  the default {@link Locale.Category#DISPLAY DISPLAY} locale.
     *  If there is no suitable display name found
     *  for the default locale, the ISO 4217 currency code is returned.
     *  <p>
     *  This is equivalent to calling
     *  {@link #getDisplayName(Locale)
     *      getDisplayName(Locale.getDefault(Locale.Category.DISPLAY))}.
     * @return the display name of this currency for the default&#xA; {@link Locale.Category#DISPLAY DISPLAY} locale
     * @since 1.7
     */
    getDisplayName(): string;

    /**
     * Gets the name that is suitable for displaying this currency for
     *  the specified locale.  If there is no suitable display name found
     *  for the specified locale, the ISO 4217 currency code is returned.
     * @param locale the locale for which a display name for this currency is&#xA; needed
     * @return the display name of this currency for the specified locale
     * @throws NullPointerException if <code>locale</code> is null
     * @since 1.7
     */
    getDisplayName(locale: Locale): string;

    /**
     * Returns the ISO 4217 currency code of this currency.
     * @return the ISO 4217 currency code of this currency
     */
    toString(): string;
  };
