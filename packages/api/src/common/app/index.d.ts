/**
 * The locale of the page being rendered
 */
export const locale: string;

/**
 * The default locale for the WebApp
 */
export const defaultLocale: string;

/**
 * The id of the portlet containing the WebApp
 */
export const portletId: string;

/**
 * The WebApp id
 */
export const webAppId: string;

/**
 * The WebApp version
 */
export const webAppVersion: string;

/**
 * Note! Client side only
 *
 * @param eventName The name of the event to trigger
 * @param options The options for the event
 */
export function trigger(eventName: string, ...options: unknown[]): void;

/**
 * Note! Client side only
 *
 * @param eventName The name of the event to listen to
 * @param options The options for the event
 */
export function on(
  eventName: string,
  callback: (...options: unknown[]) => void
): void;

export declare namespace app {
  export { locale, defaultLocale, portletId, webAppId, webAppVersion };
}

export default app;
