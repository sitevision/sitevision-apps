import type { LinkValue } from "../../types/senselogic/sitevision/api/metadata/value/LinkValue";
import type { Node } from "../../types/javax/jcr/Node";
import type { String } from "../../types/java/lang/String";
import type { RelatedValue } from "../../types/senselogic/sitevision/api/metadata/value/RelatedValue";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builder to create RelatedValue instances that can be used to set related metadata.
 *
 *  <p>
 *     RelatedValueBuilder has one <strong>mandatory attribute</strong>:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>values</em> - The related values. Must be non-empty.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     Using the RelatedValueBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *     would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the RelatedValueBuilder</li>
 *    <li>Add a value</li>
 *    <li>Possibly add more values</li>
 *    <li>Do build</li>
 *  </ol>
 *  <p>
 *     When you have built a <code>RelatedValue</code> instance, you can re-use the RelatedValueBuilder to build more instances. Something like:
 *  </p>
 *  <ol>
 *    <li>Clear values</li>
 *    <li>Add a value</li>
 *    <li>Possibly add more values</li>
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
 *     {@link senselogic.sitevision.api.metadata.MetadataUtil#getRelatedValueBuilder()}.
 *     See {@link senselogic.sitevision.api.metadata.MetadataUtil} for how to obtain an instance of the <code>MetadataUtil</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface RelatedValueBuilder extends Builder {
  /**
   * Adds a link value.
   * @param aLinkValue the link value to add
   * @return this builder
   * @throws IllegalArgumentException if <code>aLinkValue</code> is <code>null</code> or not an instance created via&#xA; {@link senselogic.sitevision.api.metadata.builder.LinkValueBuilder}
   */
  addLinkValue(aLinkValue: LinkValue): RelatedValueBuilder;

  /**
   * Adds a user value.
   * @param aUserNode the user node to add (a node with primary node type <em>sv:user</em> or <em>sv:simpleUser</em>)
   * @return this builder
   * @throws IllegalArgumentException if <code>aUserNode</code> is <code>null</code> or an invalid user node&#xA; (e.g. sv:systemUser - <em>Anonymous</em>, <em>System</em>, <em>Indexer</em>, <em>Validator</em> or <em>Extractor</em>)
   */
  addUser(aUserNode: Node): RelatedValueBuilder;

  /**
   * Adds a text value.
   * @param aText the text to add. A <code>null</code> or whitespace-only value will be completely ignored.
   * @return this builder
   */
  addText(aText: String | string): RelatedValueBuilder;

  /**
   * Removes all currently added values.
   * @return this builder
   */
  clearValues(): RelatedValueBuilder;

  /**
   * Creates a RelatedValue instance using current state of this builder.
   * @return a related value
   * @throws IllegalStateException if the builder contains no values.
   */
  build(): RelatedValue;
}

declare namespace RelatedValueBuilder {}

declare var relatedValueBuilder: RelatedValueBuilder;

export default relatedValueBuilder;
