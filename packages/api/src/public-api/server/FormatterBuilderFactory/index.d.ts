/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Locale } from "../../types/java/util/Locale";
import type { NumericFormatterBuilder } from "../../types/senselogic/sitevision/api/format/NumericFormatterBuilder";
import type { Currency } from "../../types/senselogic/sitevision/api/i18n/Currency";

/**
 * Factory for creating formatter builders.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getFormatterBuilderFactory()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 6.1
 */
export interface FormatterBuilderFactory {
  /**
   * Returns a builder for creating number formatters with a given Locale.
   *
   *  <p>
   *     <em>The builder returned by this method will create instances that are conceptually equivalent with
   *     <code>java.text.NumberFormat.getNumberInstance(aLocale)</code>.</em>
   *  </p>
   * @param aLocale the Locale
   * @return a NumericFormatterBuilder that creates number formatters
   * @throws NullPointerException if aLocale is null
   */
  getNumberFormatterBuilder(aLocale: Locale): NumericFormatterBuilder;

  /**
   * Returns a builder for creating percent formatters with a given Locale.
   *
   *  <p>
   *     <em>The builder returned by this method will create instances that are conceptually equivalent with
   *     <code>java.text.NumberFormat.getPercentInstance(aLocale)</code>.</em>
   *  </p>
   * @param aLocale the Locale
   * @return a NumericFormatterBuilder that creates percent formatters
   * @throws NullPointerException if aLocale is null
   */
  getPercentFormatterBuilder(aLocale: Locale): NumericFormatterBuilder;

  /**
   * Returns a builder for creating currency formatters with a given Locale.
   *
   *  <p>
   *     <strong>Currency note!</strong> Currency typically depends on a <em>country</em>. A language-only Locale
   *     will typically be formatted without any specific currency. Use {@link #getCurrencyFormatterBuilder(Locale, Currency)}
   *     to actively specify what currency to use when using such locale.
   *  </p>
   *
   *  <p>
   *     <em>The builder returned by this method will create instances that are conceptually equivalent with
   *     <code>java.text.NumberFormat.getCurrencyInstance(aLocale)</code>.</em>
   *  </p>
   * @param aLocale the Locale
   * @return a NumericFormatterBuilder that creates currency formatters
   * @throws NullPointerException if aLocale is null
   * @see #getCurrencyFormatterBuilder(Locale, Currency)
   */
  getCurrencyFormatterBuilder(aLocale: Locale): NumericFormatterBuilder;

  /**
   * Returns a builder for creating currency formatters with a given Locale and Currency.
   *
   *  <p>
   *     Currency instances are created via methods in {@link senselogic.sitevision.api.i18n.CurrencyFactory}.
   *  </p>
   *
   *  <p>
   *     <em>The builder returned by this method will create instances that are conceptually equivalent with
   *     <code>java.text.NumberFormat.getCurrencyInstance(aLocale)</code> with a
   *     <code>java.util.Currency.getInstance(aCurrencyCode)</code> set.</em>
   *  </p>
   * @param aLocale the Locale
   * @param aCurrency the currency
   * @return a NumericFormatterBuilder that creates currency formatters
   * @throws NullPointerException if aLocale or aCurrency is null
   * @see senselogic.sitevision.api.i18n.CurrencyFactory
   */
  getCurrencyFormatterBuilder(
    aLocale: Locale,
    aCurrency: Currency
  ): NumericFormatterBuilder;
}

declare namespace FormatterBuilderFactory {}

declare var formatterBuilderFactory: FormatterBuilderFactory;

export default formatterBuilderFactory;
