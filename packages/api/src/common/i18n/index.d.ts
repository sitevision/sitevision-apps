export interface I18n {
  get(key: string): string;
  get(key: string, ...substitutions: string[]): string;
}

declare namespace I18n {}

declare var i18n: I18n;

export default i18n;
