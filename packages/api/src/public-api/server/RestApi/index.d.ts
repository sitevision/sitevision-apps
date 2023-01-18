import type Node from "../../types/javax/jcr/Node";

/**
 * Script utility for server-side invoke of the local Sitevision REST API.
 *
 * <p>
 *    This is a local, server-side, inbound utility to invoke the
 *    <a href="https://developer.sitevision.se/docs/rest-api/model-rest-api" target="_blank">Sitevision REST API</a>
 *    of the local site without any outgoing http connections.
 *    This utility can be used regardless of the REST API of the local site is enabled or not!
 * </p>
 *
 * <p>
 *    <strong>Version note!</strong> External (http connection-based) invocations of the Sitevision REST API can specify different versions
 *    (online / offline) via the URL. This inbound utility will always use <em>current version</em> as of
 *    {@link senselogic.sitevision.api.versioning.VersionUtil#getCurrentVersion()}.
 * </p>
 *
 * <p>
 *    Below are two typical examples of how to use the RestApi utility to execute a GET for the "nodes" endpoint on a given JCR Node
 *    context and and process the returned javascript object.
 * </p>
 * <p>
 *    <em>a) Using a Node via a script variable (named "startPage") in the Sitevision Script module:</em>
 * </p>
 * <pre><code>   var restApi = require('RestApi'),
 *       result;
 *
 *   result = restApi.get(scriptVariables.startPage, 'nodes');
 *
 *   if (result.statusCode &gt;= 200 &amp;&amp; result.statusCode &lt; 300) {
 *      out.println('Result: ' + JSON.stringify(result.body));
 *   } else {
 *      out.println('Fail: ' + result.statusMessage + '&lt;br&gt;' + JSON.stringify(result.body));
 *   }</code></pre>
 * <p>
 *    <em>b) Using a Node via the app data (property "startPage") of a WebApp/RestApp:</em>
 * </p>
 * <pre><code>   ...
 *   result = restApi.get(appData.getNode('startPage'), 'nodes');
 *   ...</code></pre>
 *
 * <p>
 *    <strong>REST siblings note!</strong>
 * </p>
 * <ul>
 *    <li>
 *       Server-side invoke of a <em>local RESTApp</em> should typically be handled via
 *       {@link senselogic.sitevision.api.script.app.RestAppInvoker}.
 *    </li>
 *    <li>
 *       Invoking <em>external REST API:s</em> should typically be handled via
 *       {@link senselogic.sitevision.api.script.Requester}.
 *    </li>
 * </ul>
 * @param <O> script object
 * @author Magnus Lövgren
 * @since Sitevision 4.5
 * @see Requester
 * @see senselogic.sitevision.api.script.app.RestAppInvoker
 */
export interface RestApi {
  /**
   * Executes a GET endpoint of the REST API.
   *
   * <p>
   *    <em>REST hint!</em> A <em>get</em> typically indicates a <em>read</em> of something.
   * </p>
   * @param aContextNode the endpoint context Node
   * @param aOperationName the endpoint operation name/method
   * @return a script object representing the response (properties: statusCode, statusMessage, body)
   */
  get(aContextNode: Node, aOperationName: string): unknown;

  /**
   * Executes a GET endpoint of the REST API.
   *
   * <p>
   *    <em>REST hint!</em> A <em>get</em> typically indicates a <em>read</em> of something.
   * </p>
   * @param aContextNode the endpoint context Node
   * @param aOperationName the endpoint operation name/method
   * @param aOperationOptions the operation data/parameters
   * @return a script object representing the response (properties: statusCode, statusMessage, body)
   */
  get(
    aContextNode: Node,
    aOperationName: string,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a GET endpoint of the REST API, targeting an instance of the context.
   *
   * <p>
   *    <em>REST hint!</em> A <em>get</em> typically indicates a <em>read</em> of something.
   * </p>
   * @param aContextNode the endpoint context Node
   * @param aOperationName the endpoint operation name/method
   * @param aOperationNode the operation Node of the context
   * @param aOperationOptions the operation data/parameters
   * @return a script object representing the response (properties: statusCode, statusMessage, body)
   */
  get(
    aContextNode: Node,
    aOperationName: string,
    aOperationNode: Node,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a POST endpoint of the REST API.
   *
   * <p>
   *    <em>REST hint!</em> A <em>post</em> typically indicates the <em>creation</em> of something.
   * </p>
   * @param aContextNode the endpoint context Node
   * @param aOperationName the endpoint operation name/method
   * @param aOperationOptions the operation data/parameters
   * @return a script object representing the response (properties: statusCode, statusMessage, body)
   */
  post(
    aContextNode: Node,
    aOperationName: string,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a PUT endpoint of the REST API.
   *
   * <p>
   *    <em>REST hint!</em> A <em>put</em> typically indicates an <em>update</em> of something.
   * </p>
   * @param aContextNode the endpoint context Node
   * @param aOperationName the endpoint operation name/method
   * @param aOperationOptions the operation data/parameters
   * @return a script object representing the response (properties: statusCode, statusMessage, body)
   * @since Sitevision 5
   */
  put(
    aContextNode: Node,
    aOperationName: string,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a PUT endpoint of the REST API, targeting an instance of the context.
   *
   * <p>
   *    <em>REST hint!</em> A <em>put</em> typically indicates an <em>update</em> of something.
   * </p>
   * @param aContextNode the endpoint context Node
   * @param aOperationName the endpoint operation name/method
   * @param aOperationNode the operation Node of the context
   * @param aOperationOptions the operation data/parameters
   * @return a script object representing the response (properties: statusCode, statusMessage, body)
   */
  put(
    aContextNode: Node,
    aOperationName: string,
    aOperationNode: Node,
    aOperationOptions: unknown
  ): unknown;

  /**
   * Executes a DELETE endpoint of the REST API.
   *
   * <p>
   *    <em>REST hint!</em> A <em>delete</em> typically indicates a <em>removal</em> of something.
   * </p>
   * @param aContextNode the endpoint context Node
   * @param aOperationName the endpoint operation name/method
   * @return a script object representing the response (properties: statusCode, statusMessage, body)
   * @since Sitevision 4.5.1
   */
  delete(aContextNode: Node, aOperationName: string): unknown;

  /**
   * Executes a DELETE endpoint of the REST API, targeting an instance of the context.
   *
   * <p>
   *    <em>REST hint!</em> A <em>delete</em> typically indicates a <em>removal</em> of something.
   * </p>
   * @param aContextNode the endpoint context Node
   * @param aOperationName the endpoint operation name/method
   * @param aOperationNode the operation Node of the context
   * @return a script object representing the response (properties: statusCode, statusMessage, body)
   */
  delete(
    aContextNode: Node,
    aOperationName: string,
    aOperationNode: Node
  ): unknown;

  /**
   * Executes a DELETE endpoint of the REST API, targeting an instance of the context.
   *
   * <p>
   *    <em>REST hint!</em> A <em>delete</em> typically indicates a <em>removal</em> of something.
   * </p>
   * @param aContextNode the endpoint context Node
   * @param aOperationName the endpoint operation name/method
   * @param aOperationNode the operation Node of the context
   * @param aOperationOptions the operation data/parameters
   * @return a script object representing the response (properties: statusCode, statusMessage, body)
   * @since Sitevision 2023.01.1
   */
  delete(
    aContextNode: Node,
    aOperationName: string,
    aOperationNode: Node,
    aOperationOptions: unknown
  ): unknown;
}

declare namespace RestApi {}

declare var restApi: RestApi;

export = restApi;
