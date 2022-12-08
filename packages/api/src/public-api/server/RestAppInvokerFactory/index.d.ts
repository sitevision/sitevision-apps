import type { RestAppInvoker } from "../../types/senselogic/sitevision/api/script/app/RestAppInvoker";
import type { Node } from "../../types/javax/jcr/Node";

/**
 * Creates a RestAppInvoker via the Path of a Headless custom module.
 * @param aPath the path of the Headless custom module (sv:headlessCustomModule or sv:marketplaceHeadlessCustomModule)
 * @return the RestAppInvoker for the active RESTApp of the module, or null if no matching RESTApp could be found
 */
export function fromPath(aPath: string): RestAppInvoker;

/**
 * Creates a RestAppInvoker via a RESTApp Node or a Headless custom module Node.
 * @param aNode the RESTApp (sv:restApp) or the Headless custom module (sv:headlessCustomModule or sv:marketplaceHeadlessCustomModule)
 * @return the RestAppInvoker for the RESTApp, or null if no matching RESTApp could be found
 */
export function fromNode(aNode: Node): RestAppInvoker;

/**
 * Creates a RestAppInvoker via the Identifier of a RESTApp or a Headless custom module.
 * @param aIdentifier the identifier of the RESTApp (sv:restApp) or the Headless custom module (sv:headlessCustomModule or sv:marketplaceHeadlessCustomModule), i.e. an identifier prefixed with "361.", "188." or "211.".
 * @return the RestAppInvoker for the resolved RESTApp, or null if no matching RESTApp could be found
 */
export function fromIdentifier(aIdentifier: string): RestAppInvoker;

/**
 * Creates RestAppInvoker instances.
 *
 * <h3>
 *    Some code examples
 * </h3>
 * <p>
 *    Below is an example of how to get a {@link RestAppInvoker} instance using the path (of the headless custom module).
 * </p><pre><code>   var restAppInvokerFactory = require('RestAppInvokerFactory'),
 *       restAppInvoker = restAppInvokerFactory.fromPath('/rest-api/my-rest-app');
 *
 *    if (restAppInvoker) {
 *       <em>// Use the RESTApp invoker...</em>
 *    }</code></pre>
 *
 * <p>
 *    Below is an example of how to get a {@link RestAppInvoker} instance using a Node. Note that the Node must be of type
 *    <code>sv:restApp</code>, <code>sv:headlessCustomModule</code> or <code>sv:marketplaceHeadlessCustomModule</code>.
 * </p><pre><code>   var restAppInvokerFactory = require('RestAppInvokerFactory'),
 *       restAppInvoker = restAppInvokerFactory.fromNode(aNode);
 *
 *    if (restAppInvoker) {
 *       <em>// Use the RESTApp invoker...</em>
 *    }</code></pre>
 *
 * <p>
 *    Below is an example of how to get a {@link RestAppInvoker} instance using a Node identifier. Note that the identifier must be for a Node of type
 *    <code>sv:restApp</code>, <code>sv:headlessCustomModule</code> or <code>sv:marketplaceHeadlessCustomModule</code>
 *    (i.e. an identifier prefixed "361.", "188." or "211.").
 * </p><pre><code>   var restAppInvokerFactory = require('RestAppInvokerFactory'),
 *       restAppInvoker = restAppInvokerFactory.fromIdentifier(aIdentifier);
 *
 *    if (restAppInvoker) {
 *       <em>// Use the RESTApp invoker...</em>
 *    }</code></pre>
 *
 * <p>
 *    See {@link RestAppInvoker} for more code examples.
 * </p>
 * @param <O> script object
 * @author Magnus Lövgren
 * @since Sitevision 7
 * @see RestAppInvoker
 */
declare namespace restAppInvokerFactory {
  export { fromPath, fromNode, fromIdentifier };
}

export default restAppInvokerFactory;
