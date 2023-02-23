import type { String } from "../../types/java/lang/String";
import type { Node } from "../../types/javax/jcr/Node";

import type { LinkValue } from "../../types/senselogic/sitevision/api/metadata/value/LinkValue";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builder to create LinkValue instances that can be used to set link metadata.
 *
 *  <p>
 *     LinkValueBuilder has one <strong>mandatory attribute</strong>:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>target</em> - The link target. Must be non-null.
 *     </li>
 *  </ul>
 *  <p>
 *     LinkValueBuilder also has some <strong>optional attributes</strong>:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>name</em> - The link name. Default is <code>null</code>.
 *     </li>
 *     <li>
 *        <em>description</em> - The Link description. Default is <code>null</code>.
 *     </li>
 *     <li>
 *        <em>open in new window</em> - Whether or not the link should be opened in new window. Default is <code>false</code>.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     Using the LinkValueBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *     would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the LinkValueBuilder</li>
 *    <li>Set the target</li>
 *    <li>Possibly set a name</li>
 *    <li>Possibly set a description</li>
 *    <li>Possibly set open in new window</li>
 *    <li>Do build</li>
 *  </ol>
 *  <p>
 *     When you have built a <code>LinkValue</code> instance, you can re-use the LinkValueBuilder to build more instances. Something like:
 *  </p>
 *  <ol>
 *    <li>Set a new target</li>
 *    <li>Possibly set a name</li>
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
 *     {@link senselogic.sitevision.api.metadata.MetadataUtil#getLinkValueBuilder()}.
 *     See {@link senselogic.sitevision.api.metadata.MetadataUtil} for how to obtain an instance of the <code>MetadataUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface LinkValueBuilder extends Builder {
  /**
   * Sets the target.
   * @param anURL the link target URL
   * @return this builder
   * @throws IllegalArgumentException if <code>anURL</code> is <code>null</code> or whitespace only
   */
  setExternalTarget(anURL: String | string): LinkValueBuilder;

  /**
   * Sets the target.
   * @param aMailAddress a mail address
   * @return this builder
   * @throws IllegalArgumentException if <code>aMailAddress</code> is <code>null</code>, whitespace only or an invalid mail address.
   * @see senselogic.sitevision.api.mail.MailUtil#isValidAddress(String)
   */
  setMailTarget(aMailAddress: String | string): LinkValueBuilder;

  /**
   * Sets the target.
   * @param aPhoneNumber a phone number
   * @return this builder
   * @throws IllegalArgumentException if <code>aPhoneNumber</code> is <code>null</code>, whitespace only or an invalid phone number.
   * @since Sitevision 4.2.1
   */
  setPhoneTarget(aPhoneNumber: String | string): LinkValueBuilder;

  /**
   * Sets the target.
   * @param aNode the target, must be a linkable resource (i.e. a page/article/image/file or such) that isn't trashed.
   * @return this builder
   * @throws IllegalArgumentException if <code>aNode</code> is <code>null</code> or not a linkable resource.
   */
  setInternalTarget(aNode: Node): LinkValueBuilder;

  /**
   * Sets the link name.
   * @param aName the link name
   * @return this builder
   */
  setName(aName: String | string): LinkValueBuilder;

  /**
   * Sets the link description.
   * @param aDescription the link description
   * @return this builder
   */
  setDescription(aDescription: String | string): LinkValueBuilder;

  /**
   * Sets open in new window.
   * @param aOpenInNewWindow whether or not the link should be opened in new window
   * @return this builder
   */
  setOpenInNewWindow(aOpenInNewWindow: boolean): LinkValueBuilder;

  /**
   * Creates a LinkValue instance using current state of this builder.
   * @return a link value
   * @throws IllegalStateException if there are no link target.
   */
  build(): LinkValue;
}

declare namespace LinkValueBuilder {}

declare var linkValueBuilder: LinkValueBuilder;

export default linkValueBuilder;
