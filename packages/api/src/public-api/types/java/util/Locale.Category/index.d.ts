/**
 * Enum for locale categories.  These locale categories are used to get/set
 *  the default locale for the specific functionality represented by the
 *  category.
 * @see #getDefault(Locale.Category)
 * @see #setDefault(Locale.Category, Locale)
 * @since 1.7
 */
export type Category = {
  DISPLAY: "DISPLAY";
  FORMAT: "FORMAT";
};
