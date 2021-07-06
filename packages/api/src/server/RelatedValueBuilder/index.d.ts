/**
* A temporary representation of a link metadata value.
*/
interface LinkValue {}

/**
* A temporary representation of a related metadata value.
*/
interface RelatedValue {}

export default interface RelatedValueBuilder {
  /**
  * Adds a link value.
  * @returns {RelatedValueBuilder} this builder 
  * @param {LinkValue} aLinkValue - the link value to add
  */
  addLinkValue(aLinkValue: LinkValue): RelatedValueBuilder;

  /**
  * Adds a text value.
  * @returns {RelatedValueBuilder} this builder 
  * @param {string} aText - the text to add. A null or whitespace-only value will be completely ignored.
  */
  addText(aText: string): RelatedValueBuilder;

  /**
  * Adds a user value.
  * @returns {RelatedValueBuilder} this builder 
  * @param {Node} aUserNode - the user node to add (a node with primary node type sv:user or sv:simpleUser)
  */
  addUser(aUserNode: Node): RelatedValueBuilder;

  /**
  * Creates a RelatedValue instance using current state of this builder.
  * @returns {RelatedValue} a related value 
  */
  build(): RelatedValue;

  /**
  * Removes all currently added values.
  * @returns {RelatedValueBuilder} this builder 
  */
  clearValues(): RelatedValueBuilder;
}
