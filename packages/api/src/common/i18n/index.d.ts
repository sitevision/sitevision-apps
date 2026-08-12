export interface I18n {
  get(key: string): string;
  get(key: string, ...substitutions: string[]): string;

  /**
   * Creates an i18n instance for an explicit locale.
   *
   * The locale should be supplied as a language tag, for example
   * "sv", "sv-SE", or "en-US".
   *
   * @returns An i18n instance for the locale, or undefined when the
   * supplied locale is empty.
   */
  forLocale(locale: string): I18n | undefined;
}

declare namespace I18n {}

declare var i18n: I18n;

export default i18n;
