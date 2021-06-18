import Node from '../../builtins/Node';

interface IRestApiResult {
  statusCode: any;
  statusMessage: string;
  body: any;
}

// function delete(aContextNode: Node, aOperationName: string): RestApiResult
// function delete(aContextNode: Node, aOperationName: string, aOperationNode: Node): RestApiResult

export function get(aContextNode: Node, aOperationName: string): IRestApiResult;
export function get(
  aContextNode: Node,
  aOperationName: string,
  aOperationNode: Node
): IRestApiResult;
export function get(
  aContextNode: Node,
  aOperationName: string,
  aOperationNode: Node,
  aOperationOptions: any
): IRestApiResult;

export function post(
  aContextNode: Node,
  aOperationName: string,
  aOperationNode: Node
): IRestApiResult;

export function put(
  aContextNode: Node,
  aOperationName: string,
  aOperationNode: Node
): IRestApiResult;
export function put(
  aContextNode: Node,
  aOperationName: string,
  aOperationNode: Node,
  aOperationOptions: any
): IRestApiResult;

declare namespace restApi {
  export { get, post, put };
}

export default restApi;
