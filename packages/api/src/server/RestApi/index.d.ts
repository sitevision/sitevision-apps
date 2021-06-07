import Node from '../../builtins/Node';

interface IRestApiResult {
  statusCode: any;
  statusMessage: string;
  body: any;
}

declare namespace restApi {
  // function delete(aContextNode: Node, aOperationName: string): RestApiResult
  // function delete(aContextNode: Node, aOperationName: string, aOperationNode: Node): RestApiResult

  function get(aContextNode: Node, aOperationName: string): IRestApiResult;
  function get(
    aContextNode: Node,
    aOperationName: string,
    aOperationNode: Node
  ): IRestApiResult;
  function get(
    aContextNode: Node,
    aOperationName: string,
    aOperationNode: Node,
    aOperationOptions: any
  ): IRestApiResult;

  function post(
    aContextNode: Node,
    aOperationName: string,
    aOperationNode: Node
  ): IRestApiResult;

  function put(
    aContextNode: Node,
    aOperationName: string,
    aOperationNode: Node
  ): IRestApiResult;
  function put(
    aContextNode: Node,
    aOperationName: string,
    aOperationNode: Node,
    aOperationOptions: any
  ): IRestApiResult;
}

export default restApi;
