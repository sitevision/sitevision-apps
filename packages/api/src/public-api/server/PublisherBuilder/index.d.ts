/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Date } from "../../types/java/util/Date";

import type { Publisher } from "../../types/senselogic/sitevision/api/versioning/Publisher";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builder for creating a {@link Publisher} with a specific setup of state.
 *
 *  <p>
 *     Initial state of a PublisherBuilder is:
 *  </p>
 *  <ul>
 *     <li><code>publishDate</code> is null == imminent publishing</li>
 *     <li><code>unpublishDate</code> is null == no unpublishing</li>
 *     <li><code>notificationDate</code> is null == no ("Best before") notification</li>
 *     <li><code>notifyMobileUsers</code> is false == no mobile notification</li>
 *  </ul>
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
 *     <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *     more information about Builders and how to work with them!
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link PublishingUtil#getPublisherBuilder()}.
 *     See {@link PublishingUtil} for how to obtain an instance of the <code>PublishingUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2026.08.1
 */
export interface PublisherBuilder extends Builder {
  /**
   * Sets the publish date.
   *
   *  <p>
   *     A publish date before "now" will throw an IllegalStateException when calling {@link #build()}.
   *     Use <code>null</code> for immediate publishing.
   *  </p>
   * @param aPublishDate the publish date to set, or null for immediate publishing
   * @return this builder instance
   */
  setPublishDate(aPublishDate: Date): PublisherBuilder;

  /**
   * Sets the unpublish date.
   *
   *  <p>
   *     A unpublish date before "now" will throw an IllegalStateException when calling {@link #build()}.
   *  </p>
   *  <p>
   *     A unpublish date must differ at least one minute from the actual publish date,
   *     otherwise an IllegalStateException will be thrown when calling {@link #build()}.
   *  </p>
   * @param aUnpublishDate the unpublish date to set, or null for no unpublishing
   * @return this builder instance
   */
  setUnpublishDate(aUnpublishDate: Date): PublisherBuilder;

  /**
   * Sets the ("Best before") notification date.
   *
   *  <p>
   *     A notification date before "now" will throw an IllegalStateException when calling {@link #build()}.
   *  </p>
   *  <p>
   *     A notification date must be equal or after the actual publish date,
   *     otherwise an IllegalStateException will be thrown when calling {@link #build()}.
   *  </p>
   * @param aNotificationDate the notification date to set, or null for no notification
   * @return this builder instance
   */
  setNotificationDate(aNotificationDate: Date): PublisherBuilder;

  /**
   * Whether mobile users should be notified when the page is published.
   *
   *  <p>
   *     <strong>Note</strong> that this setting in practice is only applicable when publishing a <code>sv:article</code>
   *     and current user must have {@link senselogic.sitevision.api.security.PermissionUtil.Permission#SEND_PUSH_NOTIFICATIONS}
   *     for it to have any effect.
   *  </p>
   * @param aNotifyMobileUsers true if mobile users should be notified, false otherwise
   * @return this builder instance
   */
  setNotifyMobileUsers(aNotifyMobileUsers: boolean): PublisherBuilder;

  /**
   * Creates a Publisher instance using currently specified state.
   * @return a Publisher instance
   * @throws IllegalStateException if state for publisher execution is not valid, see individual set methods for value restrictions
   */
  build(): Publisher;
}

declare namespace PublisherBuilder {}

declare var publisherBuilder: PublisherBuilder;

export default publisherBuilder;
