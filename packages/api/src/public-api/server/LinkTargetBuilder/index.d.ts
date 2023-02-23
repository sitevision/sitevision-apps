import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";

import type { LinkTarget } from "../../types/senselogic/sitevision/api/webresource/LinkTarget";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builder to create link target instances that can be used to create and update a Link page
 *  via {@link senselogic.sitevision.api.webresource.LinkPageUtil}.
 *
 *  <p>
 *     LinkTargetBuilder has one <strong>mandatory attribute</strong>:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>target</em> - The target. Must be non-null.
 *     </li>
 *  </ul>
 *  <p>
 *     LinkTargetBuilder also has some <strong>optional attributes</strong>:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>description</em> - The description. Default is <code>null</code>.
 *     </li>
 *     <li>
 *        <em>open in new window</em> - Whether or not the target should be opened in new window. Default is <code>false</code>.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     Using the LinkTargetBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *     would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the LinkTargetBuilder</li>
 *    <li>Set the target</li>
 *    <li>Possibly set a description</li>
 *    <li>Possibly set open in new window</li>
 *    <li>Do build</li>
 *  </ol>
 *  <p>
 *     When you have built a <code>LinkTarget</code> instance, you can re-use the LinkTargetBuilder to build more instances. Something like:
 *  </p>
 *  <ol>
 *    <li>Set a new target</li>
 *    <li>Possibly set a description</li>
 *    <li>Possibly set open in new window</li>
 *    <li>Do build</li>
 *  </ol>
 *
 *  <p>
 *     <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *     more information about Builders and how to work with them!
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.webresource.WebResourceFactory#getLinkTargetBuilder()}.
 *     See {@link senselogic.sitevision.api.webresource.WebResourceFactory} for how to obtain an instance of the
 *     <code>WebResourceFactory</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 4.2
 * @see senselogic.sitevision.api.webresource.LinkPageUtil
 */
export interface LinkTargetBuilder extends Builder {
  /**
   * Sets the target.
   * @param aNode the target, must be a linkable resource (i.e. a page/article/image/file or such) that isn't trashed.
   * @return this builder
   * @throws IllegalArgumentException if <code>aNode</code> is <code>null</code> or not a linkable resource.
   */
  setInternalTarget(aNode: Node): LinkTargetBuilder;

  /**
   * Sets the target.
   * @param aURL the link target URL
   * @return this builder
   * @throws IllegalArgumentException if <code>aURL</code> is <code>null</code> or whitespace only
   */
  setExternalTarget(aURL: String | string): LinkTargetBuilder;

  /**
   * Sets the target.
   * @param aMailAddress a mail address
   * @return this builder
   * @throws IllegalArgumentException if <code>aMailAddress</code> is <code>null</code>, whitespace only or an invalid mail address.
   * @see senselogic.sitevision.api.mail.MailUtil#isValidAddress(String)
   */
  setMailTarget(aMailAddress: String | string): LinkTargetBuilder;

  /**
   * Sets the target.
   * @param aPhoneNumber a phone number
   * @return this builder
   * @throws IllegalArgumentException if <code>aPhoneNumber</code> is <code>null</code>, whitespace only or an invalid phone number.
   */
  setPhoneTarget(aPhoneNumber: String | string): LinkTargetBuilder;

  /**
   * Sets the description.
   * @param aDescription the description
   * @return this builder
   */
  setDescription(aDescription: String | string): LinkTargetBuilder;

  /**
   * Sets open in new window.
   * @param aOpenInNewWindow whether or not the target should be opened in new window
   * @return this builder
   */
  setOpenInNewWindow(aOpenInNewWindow: boolean): LinkTargetBuilder;

  /**
   * Creates a LinkTarget instance using current state of this builder.
   *
   *  <p>
   *     <em>
   *        Note! The 'open in new window' state is ignored when creating a LinkTarget with
   *        a mail or telephone target (these target types can never be opened in a new window).
   *     </em>
   *  </p>
   * @return a link target
   * @throws IllegalStateException if there are no link target.
   */
  build(): LinkTarget;
}

declare namespace LinkTargetBuilder {}

declare var linkTargetBuilder: LinkTargetBuilder;

export default linkTargetBuilder;
