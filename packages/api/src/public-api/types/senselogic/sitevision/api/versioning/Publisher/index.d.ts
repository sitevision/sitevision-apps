/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Node } from "../../../../../javax/jcr/Node";

/**
 * A publisher with configurable publishing behavior.
 *
 *  <p>
 *     The <code>Publisher</code> is the powerful big brother of {@link PublishingUtil} when it comes to publishing.
 *     When the <em>publish</em> convenience methods in <code>PublishingUtil</code> doesn't fit your needs,
 *     you can always use the <code>Publisher</code> instead!
 *  </p>
 *
 *  <p>
 *     <strong>Example</strong> of how to use PublisherBuilder and Publisher to publish a page at a given time using server-side JavaScript:
 *  </p>
 *  <pre><code>   <em>// 1. Import PublishingUtil in apps (WebApp, RESTApp, Widget, MCPServer etc)</em>
 *    <em>// NOTE! Use the require function instead in other server-side JavaScripts (e.g. Script module), i.e:</em>
 *    <em>// const publishingUtil = require("PublishingUtil");</em>
 *    import publishingUtil from "@sitevision/api/server/PublishingUtil";
 *
 *    <em>// 2. Create a publisher builder instance</em>
 *    const publisherBuilder = publishingUtil.getPublisherBuilder();
 *
 *    const page = ... <em>// Get the page node to publish</em>
 *    const date = ... <em>// Create a specific publish date, or null for imminent publishing</em>
 *
 *    <em>// 3. Create a publisher</em>
 *    const publisher = publisherBuilder
 *                         .setPublishDate(date)
 *                         .build();
 *
 *    <em>// 4. Publish</em>
 *    try {
 *       publisher.publish(page);
 *       console.log("Page published successfully!");
 *    } catch (e) {
 *       console.log("Failed to publish page");
 *    }
 *  </code></pre>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via {@link PublisherBuilder#build()}.
 *     See {@link PublisherBuilder} for how to obtain an instance of the <code>PublisherBuilder</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2026.08.1
 * @see PublishingUtil
 */
export type Publisher = {
  /**
   * Publish a given page node, using the state that was specified when the <code>Publisher</code> was created.
   *
   *  <p>
   *     Valid node types to publish are:
   *  </p>
   *  <ul>
   *     <li><code>sv:page</code></li>
   *     <li><code>sv:article</code></li>
   *     <li><code>sv:collaborationGroupPage</code></li>
   *     <li><code>sv:sitePage</code></li>
   *     <li><code>sv:template</code></li>
   *     <li><code>sv:link</code> <em>(must be a "page link", a stand-alone link in the page tree)</em></li>
   *  </ul>
   *  <p>
   *     If a node of another node type is specified an <code>IllegalArgumentException</code> is thrown.
   *  </p>
   * @param aPageNode the node that should be published.
   * @throws IllegalArgumentException if aPageNode is null or of invalid type.
   * @throws ConstraintViolationException if current user is not authorized to publish aPageNode.
   * @throws RepositoryException for other problems occur, such as locking failed, immutable PublishStatus or such.
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectivePublishPermission(Node, Node)
   * @see PublishingUtil#getPublishStatus(Node)
   */
  publish(aPageNode: Node): void;
};
