import Currency from "../Currency";

/**
 * Factory for creating Currency instances.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getCurrencyFactory()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 6.1
 */

interface CurrencyFactory {
  /**
   * Gets the Currency instance for a given locale.
   *
   * <p>
   *    <strong>Important Country Note!</strong> A Locale without a <em>country</em> can never have a Currency!
   *    This method will always return <code>null</code> for such Locale.
   * </p>
   * <p>
   *    <em>Tip!</em> {@link senselogic.sitevision.api.i18n.LocaleUtil#resolveCountryLocale(Locale)} might be helpful in order to
   *    compensate for language-only locales.
   * </p>
   *
   * <p>
   *    <em>This method is conceptually equivalent with the <code>java.util.Currency.getInstance(Locale)</code> method.</em>
   * </p>
   * @param aLocale the Locale
   * @return the Currency for aLocale, or null if aLocale is null or no Currency can be determined for aLocale
   * @see senselogic.sitevision.api.i18n.LocaleUtil#resolveCountryLocale(Locale)
   */
  fromLocale(aLocale: java.util.Locale): Currency;

  /**
   * Gets the Currency instance for a given ISO 4217 Currency Code.
   *
   * <p>
   *    <a href="https://www.iso.org/iso-4217-currency-codes.html">
   *       Currency codes are specified with a three-letter alphabetic code specified by ISO 4217
   *    </a>
   * </p>
   *
   * <table>
   *    <caption>Common currencies</caption>
   *    <tr>
   *       <th scope="col">Currency name</th>
   *       <th scope="col">Currency code</th>
   *    </tr>
   *    <tr>
   *       <td>US Dollar</td>
   *       <td>USD</td>
   *    </tr>
   *    <tr>
   *       <td>Euro</td>
   *       <td>EUR</td>
   *    </tr>
   *    <tr>
   *       <td>Brittish Pound</td>
   *       <td>GBP</td>
   *    </tr>
   *    <tr>
   *       <td>Swedish Krona</td>
   *       <td>SEK</td>
   *    </tr>
   *    <tr>
   *       <td>Norwegian Krone</td>
   *       <td>NOK</td>
   *    </tr>
   * </table>
   *
   * <p>
   *    <em>This method is conceptually equivalent with the <code>java.util.Currency.getInstance(String)</code> method.</em>
   * </p>
   * @param aCurrencyCode a ISO 4217 currency code
   * @return a Currency for aCurrencyCode, or null if aCurrencyCode is null or invalid
   */
  fromCurrencyCode(aCurrencyCode: java.lang.String): Currency;
}
