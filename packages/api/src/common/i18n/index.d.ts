export function get(key: string): string;
export function get(key: string, ...substitutions: string[]): string;

declare namespace i18n {
  export { get };
}

export default i18n;
