import Requester from "../../../../../../server/Requester";

/**
 * The chainable result of a {@link Requester} invocation.
 * @param <O> script object
 * @param <F> script function
 * @author Magnus Lövgren
 * @since Sitevision 4.2
 * @see Requester
 */
export type RequesterChainable = {
  /**
   * Invoked when a {@link Requester} was successfully executed.
   *
   * <p>
   *    The callback is invoked with three optional arguments:
   * </p>
   * <ol>
   *    <li>
   *       First argument is the <em>result</em> - typically a JSON object.
   *    </li>
   *    <li>
   *       Second argument [@since Sitevision 4.2.3] is the <em>statusCode</em> - the http response status code.
   *    </li>
   *    <li>
   *       Third argument [@since Sitevision 4.5.1] is the <em>headers</em> - the http response headers.
   *    </li>
   * </ol>
   * @param aCallback a callback function that handles the result
   * @return a chainable requester
   */
  done(aCallback: unknown): RequesterChainable;

  /**
   * Invoked when a {@link Requester} was unsuccessfully executed.
   *
   * <p>
   *    The callback is invoked with two optional arguments:
   * </p>
   * <ol>
   *    <li>
   *       First argument is the <em>message</em> - a string that describes the fail reason.
   *    </li>
   *    <li>
   *       Second argument [@since Sitevision 4.2.2] is the <em>status</em> - an object with four properties:
   *       <ul>
   *          <li>
   *             <em>statusCode</em> - the http response status code.<br>
   *             The value will typically be an official/RFC-standardized code
   *             (such as 400, 401, 404, 500 etc), but it can also be an unofficial/non-standardized one.
   *             A connection timeout will have value 1000 and the value will be 1001 if the connection pool is full/exhausted.
   *             An unknown/unspecified error will have value -1, such as unknown host, illegal url or network connection errors.
   *          </li>
   *          <li>
   *             <em>statusMessage</em> - the http response status code description.
   *          </li>
   *          <li>
   *             <em>body</em> [@since Sitevision 4.2.3] - the potential JSON body of the response.
   *             <em>(Note! Will only be available for responses that specifies application/json in the Content-Type header)</em>
   *          </li>
   *          <li>
   *             <em>headers</em> [@since Sitevision 4.5.1] - the potential response headers.
   *             <em>(Note! Will only be available for valid error responses, not for request errors, JSON parse errors or such)</em>
   *          </li>
   *       </ul>
   *    </li>
   * </ol>
   * @param aCallback a callback function that handles fail state
   * @return a chainable requester
   */
  fail(aCallback: unknown): RequesterChainable;
};
