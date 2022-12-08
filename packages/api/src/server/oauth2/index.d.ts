import type { Node } from '../../types/javax/jcr/Node';

interface AccessTokenStatus {
  isValid: boolean;
  scopes: string[];
}

export function createLoginLink(
  oauth2Config: Node,
  redirectUrl: string,
  scopes: string[]
): string;

export function getAccessTokenStatus(oauth2Config: Node): AccessTokenStatus;

declare namespace oauth2 {
  export { createLoginLink, getAccessTokenStatus };
}

export default oauth2;
