import type { String } from "../../../../../java/lang/String";
import type { Locale } from "../../../../../java/util/Locale";

/**
 * Representation of a currency.
 *
 *  <p>
 *     <em>This interface is conceptually equivalent with the <code>java.util.Currency</code> class.</em>
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface is obtained via {@link CurrencyFactory}.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 6.1
 */
export type Currency = {
  /**
   * Gets the ISO 4217 currency code of this currency.
   *
   *  <p>
   *     <a href="https://www.iso.org/iso-4217-currency-codes.html">
   *        Currency codes are specified with a three-letter alphabetic code specified by ISO 4217
   *     </a>
   *  </p>
   *
   *  <table>
   *     <caption>Common currencies</caption>
   *     <tr>
   *        <th scope="col">Currency name</th>
   *        <th scope="col">Currency code</th>
   *     </tr>
   *     <tr>
   *        <td>US Dollar</td>
   *        <td>USD</td>
   *     </tr>
   *     <tr>
   *        <td>Euro</td>
   *        <td>EUR</td>
   *     </tr>
   *     <tr>
   *        <td>Brittish Pound</td>
   *        <td>GBP</td>
   *     </tr>
   *     <tr>
   *        <td>Swedish Krona</td>
   *        <td>SEK</td>
   *     </tr>
   *     <tr>
   *        <td>Norwegian Krone</td>
   *        <td>NOK</td>
   *     </tr>
   *  </table>
   * @return the ISO 4217 currency code of this currency.
   */
  getCurrencyCode(): string;

  /**
   * Gets the name that is suitable for displaying this currency for a specified locale.
   *
   *  If there is no suitable display name found for the specified locale, the ISO 4217 currency code is returned.
   * @param aLocale the locale to use for display of this currency
   * @return the display name of this currency for aLocale
   * @throws NullPointerException if aLocale is null
   */
  getDisplayName(aLocale: Locale): string;

  /**
   * Gets the symbol of this currency for a specified locale.
   *
   *  For example, for the US Dollar, the symbol is "$" if the specified
   *  locale is the US, while for other locales it may be "US$".
   *
   *  If no symbol can be determined, the ISO 4217 currency code is returned.
   * @param aLocale the locale to use for display of the symbol of this currency
   * @return the symbol of this currency for aLocale
   * @throws NullPointerException if aLocale is null
   */
  getSymbol(aLocale: Locale): string;
};
