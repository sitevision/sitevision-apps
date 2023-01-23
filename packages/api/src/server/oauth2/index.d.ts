import type { Node } from '../../types/javax/jcr/Node';

export interface AccessTokenStatus {
  isValid: boolean;
  scopes: string[];
}

export interface OAuth2 {
  createLoginLink(
    oauth2Config: Node,
    redirectUrl: string,
    scopes: string[]
  ): string;

  getAccessTokenStatus(oauth2Config: Node): AccessTokenStatus;
}

declare namespace Oauth2 {}

declare var oauth2: OAuth2;

export default oauth2;
