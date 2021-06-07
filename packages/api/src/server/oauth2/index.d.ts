import Node from '../../builtins/Node';

declare namespace oauth2 {
  function createLoginLink(
    oauth2Config: Node,
    redirectUrl: string,
    scopes: string[]
  ): string;

  function getAccessTokenStatus(oauth2Config: Node): object;
}

export default oauth2;
