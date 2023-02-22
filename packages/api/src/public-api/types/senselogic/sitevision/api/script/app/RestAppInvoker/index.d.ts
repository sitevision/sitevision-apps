/**
 * Script utility for server-side invoke of a local RESTApp.
 *
 * <p>
 *    This is a local, server-side, inbound utility to invoke a specific
 *    <a href="https://developer.sitevision.se/restapps" target="_blank">RESTApp</a>
 *    of the local site without any outgoing http connections.
 *    This utility can be used regardless of the RESTApp allows requests or not!
 *    Verb/method restrictions (GET/POST/PUT/DELETE/PATCH) specified for the RESTApp will be respected.
 * </p>
 *
 * <div id="options">
 *    <h3>RESTApp invocation</h3>
 *    <p>
 *       This utility has methods to server-side invoke a specific RESTApp that resides on the same site as this code is executed.
 *       Each method requires that a <em>route</em> is specified. Each method also allows for <em>options</em> to be passed to the RESTApp
 *       so it can do its job properly. Each method returns an object with the result of the RESTApp invocation.
 *    </p>
 *    <h4>Options</h4>
 *    <ul>
 *       <li>
 *          <strong>headers</strong> <em>(key/value object)</em> [optional]
 *          - request headers to pass to the invoking RESTApp.
 *       </li>
 *       <li>
 *          <strong><em>&lt;name&gt;</em></strong> <em>(key/value object)</em> [optional, RESTApp dependant]
 *          - named parameters/data/files to pass to the invoking RESTApp.
 *       </li>
 *    </ul>
 *    <h4>Result</h4>
 *    <ul>
 *       <li>
 *          <strong>statusCode</strong> <em>(integer)</em>
 *          - the http status code.
 *       </li>
 *       <li>
 *          <strong>statusMessage</strong> <em>(string)</em>
 *          - the status code message or error message.
 *       </li>
 *       <li>
 *          <strong>headers</strong> <em>(key/value object)</em> [optional, RESTApp dependant]
 *          - potential response headers set by the invoked RESTApp.
 *       </li>
 *       <li>
 *          <strong>body</strong> - [optional, RESTApp dependant]
 *          - potential result set by the invoked RESTApp:
 *          <ul>
 *             <li>
 *                {@link javax.jcr.Node} (of type sv:file, sv:image or sv:temporaryFileNode) if the RESTApp executes
 *                <code>
 *                   <a href="https://developer.sitevision.se/docs/rest-api/restapps/index.js#h-ressendFilefile" target="_blank">res.sendFile</a>
 *                </code>
 *             </li>
 *             <li>
 *                <code>object</code> if the RESTApp executes
 *                <code>
 *                   <a href="https://developer.sitevision.se/docs/rest-api/restapps/index.js#h-resjsonresponse" target="_blank">res.json</a>
 *                </code>
 *             </li>
 *             <li>
 *                <code>string</code> if the RESTApp executes
 *                <code>
 *                   <a href="https://developer.sitevision.se/docs/rest-api/restapps/index.js#h-ressendresponse" target="_blank">res.send</a>
 *                </code>
 *             </li>
 *          </ul>
 *       </li>
 *    </ul>
 * </div>
 *
 * <h3>Basic GET example</h3>
 * <p>
 *    Below is an example of how to use the RestAppInvoker utility to execute a GET on the items route of a RESTApp.
 * </p><pre><code>   var restAppInvokerFactory = require('RestAppInvokerFactory'),
 *       restApp = restAppInvokerFactory.fromPath('/rest-api/my-rest-app'),
 *       result;
 *
 *    if (restApp) {
 *       result = restApp.get('/items', {count:5});
 *       if (result.statusCode === 200) {
 *          <em>// Handle valid result ...</em>
 *          result.body ...
 *       } else {
 *          <em>// Handle other/error result ...</em>
 *       }
 *    }</code></pre>
 *
 * <h3>Basic POST example</h3>
 * <p>
 *    Below is an example of how to use the RestAppInvoker utility to execute a POST on the addfile route of a RESTApp.
 * </p><pre><code>   var restAppInvokerFactory = require('RestAppInvokerFactory'),
 *       restApp = restAppInvokerFactory.fromPath('/rest-api/my-rest-app'),
 *       fileNode,
 *       options,
 *       result;
 *
 *    if (restApp) {
 *       fileNode = ... <em>// Get the JCR file Node (sv:file, sv:image) to pass to the RESTApp</em>
 *
 *       options = {
 *          headers: {
 *             'X-custom-header': 'Custom value'
 *          },
 *          spreadsheet: fileNode,
 *          sendMail: true,
 *          customerId: 'abc123'
 *       };
 *
 *       result = restApp.post('/addfile', options);
 *       if (result.statusCode === 200) {
 *          <em>// Handle valid result ...</em>
 *          result.body ...
 *       } else {
 *          <em>// Handle other/error result ...</em>
 *       }
 *    }</code></pre>
 *
 * <p>
 *    <strong>REST siblings note!</strong>
 * </p>
 * <ul>
 *    <li>
 *       Server-side invoke of the <em>local Sitevision REST API</em> should typically be handled via
 *       {@link senselogic.sitevision.api.script.RestApi}.
 *    </li>
 *    <li>
 *       Invoking <em>external REST API:s</em> should typically be handled via
 *       {@link senselogic.sitevision.api.script.Requester}.
 *    </li>
 * </ul>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via a method in
 *    {@link RestAppInvokerFactory}.
 * </p>
 * @param <O> script object
 * @author Magnus Lövgren
 * @since Sitevision 7
 * @see senselogic.sitevision.api.script.RestApi
 * @see senselogic.sitevision.api.script.Requester
 */
export type RestAppInvoker = {
  /**
   * Executes GET for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>get</em> typically indicates a <em>read</em> of something.
   * </p>
   * @param aRoute a route
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   * @see #get(String, Object)
   */
  get(aRoute: string): unknown;

  /**
   * Executes GET with options for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>get</em> typically indicates a <em>read</em> of something.
   * </p>
   * @param aRoute a route
   * @param aOptions a options
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   */
  get(aRoute: string, aOptions: unknown): unknown;

  /**
   * Executes POST for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>post</em> typically indicates the <em>creation</em> of something.
   * </p>
   * @param aRoute a route
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   * @see #post(String, Object)
   */
  post(aRoute: string): unknown;

  /**
   * Executes POST with options for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>post</em> typically indicates the <em>creation</em> of something.
   * </p>
   * @param aRoute a route
   * @param aOptions a options
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   */
  post(aRoute: string, aOptions: unknown): unknown;

  /**
   * Executes PUT for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>put</em> typically indicates an <em>update</em> of something.
   * </p>
   * @param aRoute a route
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   * @see #put(String, Object)
   */
  put(aRoute: string): unknown;

  /**
   * Executes PUT with options for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>put</em> typically indicates an <em>update</em> of something.
   * </p>
   * @param aRoute a route
   * @param aOptions a options
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   */
  put(aRoute: string, aOptions: unknown): unknown;

  /**
   * Executes DELETE for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>delete</em> typically indicates a <em>removal</em> of something.
   * </p>
   * @param aRoute a route
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   * @see #delete(String, Object)
   */
  delete(aRoute: string): unknown;

  /**
   * Executes DELETE with options for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>delete</em> typically indicates a <em>removal</em> of something.
   * </p>
   * @param aRoute a route
   * @param aOptions a options
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   */
  delete(aRoute: string, aOptions: unknown): unknown;

  /**
   * Executes PATCH for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>patch</em> typically indicates a <em>partial update</em> of something.
   * </p>
   * @param aRoute a route
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   * @see #patch(String, Object)
   * @since Sitevision 2023.02.1
   */
  patch(aRoute: string): unknown;

  /**
   * Executes PATCH with options for a route of the RESTApp.
   *
   * <p>
   *    <em>REST hint!</em> A <em>patch</em> typically indicates a <em>partial update</em> of something.
   * </p>
   * @param aRoute a route
   * @param aOptions a options
   * @return a script object representing the response (properties: headers, statusCode, statusMessage, body)
   * @since Sitevision 2023.02.1
   */
  patch(aRoute: string, aOptions: unknown): unknown;
};
