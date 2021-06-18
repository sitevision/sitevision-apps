import Node from '../../builtins/Node';

export function createLoginLink(
  oauth2Config: Node,
  redirectUrl: string,
  scopes: string[]
): string;

export function getAccessTokenStatus(oauth2Config: Node): object;

declare namespace oauth2 {
  export { createLoginLink, getAccessTokenStatus };
}

export default oauth2;
