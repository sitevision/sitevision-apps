export interface Csrf {
  /**
   * Acquires the current CSRF token.
   *
   * @returns The current token, or null for anonymous users or when
   * CSRF protection is disabled.
   */
  getToken(): string | null;

  /**
   * Acquires the parameter name used when passing the token as form data.
   */
  getParameterName(): string;

  /**
   * Acquires the header name used when passing the token as a request header.
   */
  getHeaderName(): string;
}

export interface Captcha {
  /**
   * Whether CAPTCHA is enabled and correctly configured for the site.
   */
  isEnabled(): boolean;

  /**
   * Renders the configured CAPTCHA markup.
   *
   * @returns The CAPTCHA markup, or an empty string when CAPTCHA is disabled.
   */
  render(): string;

  /**
   * Verifies the CAPTCHA response from the current request.
   *
   * @returns Whether the CAPTCHA response is valid.
   */
  verify(): boolean;
}

export interface Security {
  csrf: Csrf;
  captcha: Captcha;
}

declare namespace Security {}

declare var security: Security;

export default security;
