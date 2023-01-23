/**
 * Utility class for converting String values extracted from search fields.
 *
 * <p>
 *    <strong>Note!</strong> {@link senselogic.sitevision.api.search.SearchHit} has - as of Sitevision 3.0 - several typed <code>getField</code>
 *    methods that you would typically instead of this interface when you want to get "non-String" values!
 *    <a href="../../../../senselogic/sitevision/api/search/SearchHit.html#knowyourfields">More information about field values/types</a>
 * </p>
 * @author Magnus Lövgren
 * @see senselogic.sitevision.api.search.SearchHit#getBooleanField(String)
 * @see senselogic.sitevision.api.search.SearchHit#getDateField(String)
 * @see senselogic.sitevision.api.search.SearchHit#getFloatField(String)
 * @see senselogic.sitevision.api.search.SearchHit#getLongField(String)
 * @since Sitevision 2.6.2, 2.7_06
 * @deprecated use the typed methods in {@link senselogic.sitevision.api.search.SearchHit} instead when extracting values from a search result.
 */
export type SearchFieldUtil = {
  /**
   * Returns the Date for a string field that contains a date value generated via Lucene's DateTools class.
   * @param aDateFieldValue the <code>String</code> that should be converted to a <code>Date</code>
   * @return <code>aDateFieldValue</code> as <code>Date</code>, or <code>null</code> if indeterminable.
   */
  dateFieldToDate(aDateFieldValue: string): unknown;

  /**
   * Returns the Calendar for a string field that contains a date value generated via Lucene's DateTools class.
   * @param aDateFieldValue the <code>String</code> that should be converted to a <code>Calendar</code>
   * @return <code>aDateFieldValue</code> as <code>Calendar</code>, or <code>null</code> if indeterminable.
   */
  dateFieldToCalendar(aDateFieldValue: string): unknown;

  /**
   * Returns the Locale for a string field that contains a locale-based value that contains language ("en") or language and country ("en_US").
   *
   * <p>
   * A <code>toString()</code> on a english american locale returns the String <code>"en_US"</code>, but to create a locale
   * from that string you can NOT just create it by doing: <code>new Locale("en_US")</code>. You must split language (en)
   * and country (US) since the proper way of creating the Locale is: <code>new Locale("en", "US")</code>. Language must
   * be lowercased and country must be uppercased. This method will handle that (i.e. <code>aLocaleFieldValue == "EN_us"</code>
   * -&gt; <code>new Locale("en", "US")</code>).
   * </p>
   *
   * <p>
   * <strong>Note!</strong> This method does <em>NOT</em> handle variants!
   * </p>
   * @param aLocaleFieldValue a String containing a language - or a language and country, separated with underscrore.
   * @return a Locale matching <code>aLocaleFieldValue</code>, returns <code>null</code> if indeterminable (e.g <code>aLocaleFieldValue</code> is <code>null</code>)
   * @deprecated use {@link senselogic.sitevision.api.i18n.LocaleUtil#getLocaleByString(String)} instead
   */
  localeFieldToLocale(aLocaleFieldValue: string): unknown;

  /**
   * Returns the Integer for a string field that contains a integer value generated via Lucene's NumberTools (i.e. long) class.
   * @param anIntFieldValue the <code>String</code> that should be converted to a <code>Integer</code>
   * @return <code>anIntFieldValue</code> as <code>Integer</code>, or <code>null</code> if indeterminable.
   * @since Sitevision 2.6.2, 2.7.2
   */
  intFieldToInt(anIntFieldValue: string): number;

  /**
   * Returns the Long for a string field that contains a long value generated via Lucene's NumberTools class.
   * @param aLongFieldValue the <code>String</code> that should be converted to a <code>Long</code>
   * @return <code>aLongFieldValue</code> as <code>Long</code>, or <code>null</code> if indeterminable.
   * @since Sitevision 2.6.2, 2.7.2
   */
  longFieldToLong(aLongFieldValue: string): number;

  /**
   * Returns the Double for a string field that contains a double value generated to be a sortable search value.
   * @param aDoubleFieldValue the <code>String</code> that should be converted to a <code>Double</code>
   * @return <code>aDoubleFieldValue</code> as <code>Double</code>, or <code>null</code> if indeterminable.
   * @since Sitevision 2.6.2, 2.7.2
   */
  doubleFieldToDouble(aDoubleFieldValue: string): number;
};
