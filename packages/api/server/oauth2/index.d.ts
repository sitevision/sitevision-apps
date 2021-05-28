/**
 * Creates a login link used when getting the first access token for the current user or when upgrading scopes for the user
 *
 * The function returns a login link (string) for a specific OAuth2 config (sv:oAuth2Config JCR Node) using an array of scopes (strings) and a given redirect url (string)
 *
 * @since 7.0
 * @param oauth2Config A OAuth2 config (sv:oAuth2Config JCR Node)
 * @param redirectUrl A redirectUrl
 * @param scopes An array of scopes
 */
export function createLoginLink(
  oauth2Config: Node,
  redirectUrl: string,
  scopes: string[]
): string;

/**
 * Gets the current status of the users access token. Token will be refreshed if necessary.
 *
 * The function returns a status object for a specific OAuth2 config (sv:oAuth2Config JCR Node).
 *
 * status.isValid - true or false
 * status.scopes - Array of scopes for the token
 *
 * @since 7.0
 * @param oauth2Config A OAuth2 config (sv:oAuth2Config JCR Node)
 */
export function getAccessTokenStatus(oauth2Config: Node): object;
