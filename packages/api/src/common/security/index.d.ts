export interface Csrf {
  /**
   * Used to acquire the current csrf-token. If the user is anonymous or if csrf-protection is disabled on the server this will return null.
   *
   * @returns {string} the current token as string or null for anonymous users.
   */
  getToken(): string;
  /**
   * Used to acquire the parameter name that should be used when passing the token as a form field.
   *
   * @returns {string} the name that should be used when passing the token as form data.
   */
  getParameterName(): string;
  /**
   * Used to acquire the header name that should be used when passing the token as a request header.
   *
   * @returns {string} the name that should be used when passing the token as a header.
   */
  getHeaderName(): string;
}

export interface Security {
  csrf: Csrf;
}

declare namespace Security {}

declare var security: Security;

export default security;
