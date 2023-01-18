import type RequesterChainable from "../../types/senselogic/sitevision/api/script/RequesterChainable";

/**
 * Script utility for handling data (typically JSON) from an external website.
 *
 * <p>
 *    This utility supports the official (RFC2616 and RFC5789) request methods: GET, POST, HEAD, PUT, DELETE and PATCH - but not the
 *    OPTIONS, TRACE or CONNECT methods. Redirects will only be followed for the GET and HEAD methods.
 * </p>
 *
 * <p>
 *    URL:s with an international domain name (IDN) will be converted (ACE:d) automatically internally by this utility,
 *    e.g. invoking get("http://www.ringsjömingel.se") will do a HTTP GET using "http://www.xn--ringsjmingel-9ib.se".
 * </p>
 *
 * <div id="options">
 *    <h3>Requester Options</h3>
 *    <p>
 *       Each supported method in this utility comes in two flavours: a base method with the URL only (see example above)
 *       and a method that also allows additional <em>options</em>. These are the supported options:
 *    </p>
 *    <h4>Request options</h4>
 *    <ul>
 *       <li>
 *          <strong>data</strong> <em>(key/value)</em>
 *          - request payload/parameters.
 *       </li>
 *       <li>
 *          <strong>contentType</strong> <em>(string)</em>
 *          - request data type <em>(default is "application/x-www-form-urlencoded").</em>
 *          <ul>
 *             <li><em>"text/plain" - data will be sent as a string entity</em></li>
 *             <li><em>"application/json" - data will be sent as JSON</em></li>
 *             <li><em>"multipart/form-data" [@since Sitevision 4.5.4] - request will be sent as multipart form entity</em></li>
 *          </ul>
 *       </li>
 *       <li>
 *          <strong>headers</strong> <em>(key/value)</em>
 *          - request headers.
 *          <em>Note that if no "Content-Type" header is explicitly stated, it will be set to a value indicated by the contentType option.</em>
 *       </li>
 *       <li>
 *          <strong>username</strong> <em>(string)</em>
 *          - the username to use for authentication.
 *       </li>
 *       <li>
 *          <strong>password</strong> <em>(string)</em>
 *          - the password to use for authentication.
 *       </li>
 *       <li>
 *          <strong>preemptiveAuthentication</strong> <em>(boolean)</em>
 *          - whether or not to do a preemptive BASIC authentication
 *          <em>(default is false).</em>
 *       </li>
 *       <li>
 *          <strong>files</strong> <em>(key/value) [@since Sitevision 4.5.4]</em>
 *          - files to include when using "multipart/form-data" as <em>contentType</em>.
 *          Value must be a Node of type <em>sv:file, sv:temporaryFile or sv:image</em>.
 *       </li>
 *       <li>
 *          <strong>retry</strong> <em>(boolean) [@since Sitevision 7]</em>
 *          - whether or not to retry when request fails with status code 429 or 503 (i.e. "Too many requests" or "Service unavailable")
 *          <em>(default is false)</em>.
 *       </li>
 *       <li>
 *          <strong>retryCount</strong> <em>(integer) [@since Sitevision 7]</em>
 *          - number of retry attempts <em>(only applicable when the retry option is used)</em>.
 *          Value should be between 1 and 6, values outside range will use nearest value within range.
 *          <em>(default is 1)</em>.
 *       </li>
 *       <li>
 *          <strong>oauth2</strong> <em>(sv:oAuth2Configuration) [since Sitevision 7]</em>
 *          - what oAuth2Configuration to use when appending OAuth2 access tokens to requests
 *       </li>
 *       <li>
 *          <strong>oauth2Type</strong> <em>(string) [since Sitevision 7]</em>
 *          - type of OAuth2 request <em>(default is "user")</em>
 *          <ul>
 *             <li><em>"user" - Perform request with an access token representing the current user</em></li>
 *             <li><em>"app" - Perform request with an access token representing the sv:oAuth2Configuration</em></li>
 *          </ul>
 *       </li>
 *    </ul>
 *
 *    <h4>Response options</h4>
 *    <ul>
 *       <li>
 *          <strong>dataType</strong> <em>(string)</em>
 *          - response data type <em>(default is "json").</em>
 *          <ul>
 *             <li><em>"json" - response body will be parsed as JSON</em></li>
 *             <li><em>"xml" - response body will be converted to and parsed as JSON</em></li>
 *             <li><em>"text" [@since Sitevision 4.2.3] - response body will be as-is (i.e. plain text string)</em></li>
 *             <li><em>"file" [@since Sitevision 4.5.5] - response body will be a binary file wrapped as a sv:temporaryFile</em></li>
 *          </ul>
 *       </li>
 *       <li>
 *          <strong>fallbackCharset</strong> <em>(string)  [@since Sitevision 5.1.1]</em>
 *          - what charset to use when processing the response from the remote system if there are no charset specified in the response
 *          <em>(default is "UTF-8").</em>
 *       </li>
 *    </ul>
 *    <p>
 *       Some methods have additional options. Consult the documentation of the specific method.
 *    </p>
 * </div>
 *
 * <h3>Basic JSON GET example</h3>
 * <p>
 *    Below is a example of how to use the Requester utility to execute a basic GET and process the JSON response body.
 * </p><pre><code>   require('Requester')
 *       .get('http://jsonplaceholder.typicode.com/posts')
 *       .done(function(result) {
 *          <em>// GET succeeded, handle JSON response result</em>
 *          var i, count = result.length, item;
 *          for (i = 0; i &lt; count; i++) {
 *             item = result[i];
 *             out.println(item.id + ' - ' + item.title + '&lt;br&gt;');
 *             out.println('&lt;small&gt;' + item.body + '&lt;/small&gt;&lt;br&gt;');
 *          }
 *       })
 *       .fail(function(message) {
 *          <em>// GET failed, handle error message</em>
 *          out.println(message);
 *       });</code></pre>
 *
 * <h3>GET and POST examples with options</h3>
 * <p>
 *    Below is another example that also demonstrates the <em>options</em> usage and further callback arguments.
 * </p><pre><code>   var requester = require('Requester'),
 *       options = {
 *          username: 'thomas',
 *          password: 'nordahl_123',
 *          preemptiveAuthentication: true,
 *          headers: {
 *             'X-custom-header': 'Custom value'
 *          },
 *          data: {
 *             query: 'football',
 *             category: 'all'
 *          }
 *       },
 *       multipartOptions = {
 *          contentType: 'multipart/form-data',
 *          files: {
 *             file: fileNode // sv:file, sv:temporaryFile or sv:image
 *          },
 *          data: {
 *             name: 'foo'
 *          }
 *       };
 *
 *    requester.get('https://arestfulsite.se/endpoint/requires/authentication/search', options)
 *       .done(function(result, statusCode, headers) {
 *          <em>// GET succeeded, handle potential JSON response result appropriately</em>
 *          if (statusCode === 204) {
 *             <em>...</em>
 *          } else {
 *             <em>...</em>
 *          }
 *          <em>...</em>
 *       })
 *       .fail(function(message, status) {
 *          <em>// GET failed, handle appropriately</em>
 *          if (status.statusCode === 401) {
 *             <em>...</em>
 *          }
 *          if (status.headers) {
 *             <em>...</em>
 *          }
 *          if (status.body) {
 *             <em>...</em>
 *          }
 *          <em>...</em>
 *       });
 *
 *       requester.post('https://arestfulsite.se/endpoint', multipartOptions)
 *       ...</code></pre>
 *
 * <h3>Example of how to POST XML</h3>
 * <p>
 *    To send XML as a string entity, you must set the <code>contentType</code> option to <em>"text/plain"</em>. You should typically also set the
 *    Content-Type <code>header</code> to an appropriate value that the remote system will accept. <em>(Remember - if no Content-Type header is set,
 *    Requester will fallback to the type indicated by the <code>contentType</code> option - i.e. "text/plain" in this case)</em>.
 * </p><pre><code>   var requester = require('Requester'),
 *       options = {
 *          dataType: 'text',
 *          contentType: 'text/plain',
 *          headers: {
 *             'Content-Type': 'application/xml; charset=UTF-8'
 *          },
 *          data: '&lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;message&gt;Hello backend system&lt;/message&gt;'
 *       };
 *
 *    requester.post('https://xmlsite.se/endpoint', options)
 *       .done(function(result, statusCode, headers) {
 *          <em>// POST succeeded, handle XML string response result appropriately</em>
 *          <em>...</em>
 *       })
 *       .fail(function(message, status) {
 *          <em>// POST failed, handle appropriately</em>
 *          <em>...</em>
 *       });</code></pre>
 * <p>
 *    <em>Tip! Use <a href="../xml/XmlParserUtil.html">XmlParserUtil</a> to process the XML response string!</em>
 * </p>
 *
 * <h3>Example of how to make OAuth2 requests</h3>
 * <p>
 *    To make a request to a protected resource URL, you must set the <code>oauth2</code> option to a valid sv:oAuth2Configuration. Special
 *    considerations must be made regarding error handling. See error handling below.
 * </p>
 *
 * <h4>Perform OAuth2 request as user</h4>
 * <pre><code>   var requester = require('Requester'),
 *       oAuth2Configuration = (...),
 *       options = {
 *          oauth2: oAuth2Configuration
 *       };
 *
 *    requester.get('https://resourceserver.com/protected-endpoint', options)
 *       .done(function(result, statusCode, headers) {
 *          <em>// Request succeeded, handle response appropriately</em>
 *          <em>...</em>
 *       })
 *       .fail(function(message, status) {
 *          <em>// Request failed, handle appropriately</em>
 *          <em>...</em>
 *       });</code></pre>
 *
 * <h4>Perform OAuth2 request as application</h4>
 * <pre><code>   var requester = require('Requester'),
 *       oAuth2Configuration = (...),
 *       options = {
 *          oauth2: oAuth2Configuration,
 *          oauth2Type: 'app'
 *       };
 *
 *    requester.get('https://resourceserver.com/protected-endpoint', options)
 *       .done(function(result, statusCode, headers) {
 *          <em>// Request succeeded, handle response appropriately</em>
 *          <em>...</em>
 *       })
 *       .fail(function(message, status) {
 *          <em>// Request failed, handle appropriately</em>
 *          <em>...</em>
 *       });</code></pre>
 * <h4>OAuth2 error handling</h4>
 * <p>
 *    Different resource servers returns errors in different format. However, a few common error situations might occur in every single request
 *    and needs proper handling for a smooth user experience.
 * </p>
 * <ul>
 *    <li>No access token - The user must be redirected to obtain an access token</li>
 *    <li>Insufficient scope - The user must be redirected to obtain the required scope</li>
 *    <li>Expired access token (and refresh token) - The user must be redirected to obtain a new access token</li>
 *    <li>User denied the authorize request - Inform the user why the app needs access to the users resources</li>
 *  </ul>
 * <p>
 *    <em>
 *       Tip! Use <a href="https://developer.sitevision.se/oauth2-require" target="_blank">OAuth2 requireable util</a> to perform OAuth2 operations.
 *    </em>
 * </p>
 *
 * <h3>HTTP Connections</h3>
 * <p>
 *    <em>Note that outgoing socket connections is a shared (and limited) server resource!</em>
 *    All requests will be handled by connections that comes from a shared http connection pool.
 *    The pool has a fixed number of connections (typically 100) and specified timeouts (typically 5 seconds).
 *    A request will <em>fail</em> if a connection can not be made at all (exhausted pool) or if the external
 *    website doesn't respond in time (request timeout). A failure is typically handled via
 *    {@link RequesterChainable#fail(Object)}.
 * </p>
 *
 * <p>
 *    <em>Important Requireable note! "JsonRequester" is available in all Sitevision versions since 4.2 but
 *    "Requester" was introduced as of Sitevision 4.5.5.</em>
 * </p>
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
 *       Server-side invoke of a <em>local RESTApp</em> should typically be handled via
 *       {@link senselogic.sitevision.api.script.app.RestAppInvoker}.
 *    </li>
 * </ul>
 * @param <O> script object
 * @param <F> script function
 * @author Magnus Lövgren
 * @since Sitevision 4.2
 * @see RestApi
 * @see senselogic.sitevision.api.script.app.RestAppInvoker
 */
export interface Requester {
  /**
   * Execute a HTTP GET.
   * @param aURL the url
   * @return a chainable requester
   */
  get(aURL: string): RequesterChainable;

  /**
   * Execute a HTTP GET with options.
   * @param aURL the url
   * @param aOptions the options, <a href="#options">see options example above</a>
   * @return a chainable requester
   */
  get(aURL: string, aOptions: unknown): RequesterChainable;

  /**
   * Execute a HTTP PUT.
   * @param aURL the url
   * @return a chainable requester
   */
  put(aURL: string): RequesterChainable;

  /**
   * Execute a HTTP PUT with options.
   * @param aURL the url
   * @param aOptions the options, <a href="#options">see options example above</a>
   * @return a chainable requester
   */
  put(aURL: string, aOptions: unknown): RequesterChainable;

  /**
   * Execute a HTTP POST.
   * @param aURL the url
   * @return a chainable requester
   */
  post(aURL: string): RequesterChainable;

  /**
   * Execute a HTTP POST with options.
   * @param aURL the url
   * @param aOptions the options, <a href="#options">see options example above</a>
   * @return a chainable requester
   */
  post(aURL: string, aOptions: unknown): RequesterChainable;

  /**
   * Execute a HTTP DELETE.
   * @param aURL the url
   * @return a chainable requester
   */
  delete(aURL: string): RequesterChainable;

  /**
   * Execute a HTTP DELETE with options.
   *
   * <p>aOptions extension for delete</p>
   * <ul>
   *    <li><em>deleteOptions (key/value) [@since Sitevision 4.5.3]</em> - options for delete
   *       <ul>
   *          <li><em>sendDataAsBody (boolean)</em> - send data in the request body</li>
   *       </ul>
   *    </li>
   * </ul>
   * @param aURL the url
   * @param aOptions the options, <a href="#options">see options example above</a>
   * @return a chainable requester
   */
  delete(aURL: string, aOptions: unknown): RequesterChainable;

  /**
   * Execute a HTTP PATCH.
   *
   * <p>
   *    Note! The RFC5789 PATCH method is neither safe nor idempotent as defined by RFC2616.
   * </p>
   * @param aURL the url
   * @return a chainable requester
   * @since Sitevision 7.2.3
   */
  patch(aURL: string): RequesterChainable;

  /**
   * Execute a HTTP PATCH with options.
   *
   * <p>
   *    Note! The RFC5789 PATCH method is neither safe nor idempotent as defined by RFC2616.
   * </p>
   * @param aURL the url
   * @param aOptions the options, <a href="#options">see options example above</a>
   * @return a chainable requester
   * @since Sitevision 7.2.3
   */
  patch(aURL: string, aOptions: unknown): RequesterChainable;

  /**
   * Execute a HTTP HEAD.
   *
   * <p>
   *    Note! The response of a HEAD request does not have a body.
   * </p>
   * @param aURL the url
   * @return a chainable requester
   * @since Sitevision 7.2.3
   */
  head(aURL: string): RequesterChainable;

  /**
   * Execute a HTTP HEAD with options.
   *
   * <p>
   *    Note! The response of a HEAD request does not have a body.
   * </p>
   * @param aURL the url
   * @param aOptions the options, <a href="#options">see options example above</a>
   * @return a chainable requester
   * @since Sitevision 7.2.3
   */
  head(aURL: string, aOptions: unknown): RequesterChainable;
}

declare namespace Requester {}

declare var requester: Requester;

export = requester;
