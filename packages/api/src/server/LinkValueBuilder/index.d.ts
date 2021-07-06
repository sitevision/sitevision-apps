/**
 * A temporary representation of a link metadata value.
 */
interface LinkValue { }

export default interface LinkValueBuilder {
  /**
   * Creates a LinkValue instance using current state of this builder.
   * @returns {LinkValue} a link value 
   */
  build(): LinkValue;

  /**
  * Sets the link description.
  * @returns {LinkValueBuilder} this builder 
  * @param {string} aDescription - the link description
  */
  setDescription(aDescription: string): LinkValueBuilder;

  /**
  * Sets the target.
  * @returns {LinkValueBuilder} this builder 
  * @param {string} anURL - the link target URL
  */
  setExternalTarget(anURL: string): LinkValueBuilder;

  /**
  * Sets the target.
  * @returns {LinkValueBuilder} this builder 
  * @param {Node} aNode - the target, must be a linkable resource (i.e. a page/article/image/file or such) that isn't trashed.
  */
  setInternalTarget(aNode: Node): LinkValueBuilder;

  /**
  * Sets the target.
  * @returns {LinkValueBuilder} this builder 
  * @param {string} aMailAddress - a mail address
  */
  setMailTarget(aMailAddress: string): LinkValueBuilder;

  /**
  * Sets the link name.
  * @returns {LinkValueBuilder} this builder 
  * @param {string} aName - the link name
  */
  setName(aName: string): LinkValueBuilder;

  /**
  * Sets open in new window.
  * @returns {LinkValueBuilder} this builder 
  * @param {boolean} aOpenInNewWindow - whether or not the link should be opened in new window
  */
  setOpenInNewWindow(aOpenInNewWindow: boolean): LinkValueBuilder;

  /**
  * Sets the target.
  * @returns {LinkValueBuilder} this builder 
  * @param {string} aPhoneNumber - a phone number
  */
  setPhoneTarget(aPhoneNumber: string): LinkValueBuilder;
}
