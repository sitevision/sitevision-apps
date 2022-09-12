export declare namespace security {
  export namespace csrf {
    /**
     * Used to acquire the current csrf-token. If the user is anonymous or if csrf-protection is disabled on the server this will return null.
     *
     * @returns {string} the current token as string or null for anonymous users.
     */
    export function getToken(): string;
    /**
     * Used to acquire the parameter name that should be used when passing the token as a form field.
     *
     * @returns {string} the name that should be used when passing the token as form data.
     */
    export function getParameterName(): string;
    /**
     * Used to acquire the header name that should be used when passing the token as a request header.
     *
     * @returns {string} the name that should be used when passing the token as a header.
     */
    export function getHeaderName(): string;
  }
}

export default security;
