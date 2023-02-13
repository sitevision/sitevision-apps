export interface App {
  /**
   * The locale of the page being rendered
   */
  locale: string;

  /**
   * The default locale for the WebApp
   */
  defaultLocale: string;

  /**
   * The id of the portlet containing the WebApp
   */
  portletId: string;

  /**
   * The WebApp id
   */
  webAppId: string;

  /**
   * The WebApp version
   */
  webAppVersion: string;

  /**
   * Note! Client side only
   *
   * @param eventName The name of the event to trigger
   * @param options The options for the event
   */
  trigger(eventName: string, ...options: unknown[]): void;

  /**
   * Note! Client side only
   *
   * @param eventName The name of the event to listen to
   * @param options The options for the event
   */
  on(eventName: string, callback: (...options: unknown[]) => void): void;
}

declare namespace App {}

declare var app: App;

export default app;
