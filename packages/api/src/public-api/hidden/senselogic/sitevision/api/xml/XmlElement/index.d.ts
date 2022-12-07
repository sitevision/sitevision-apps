/**
 * XML element.
 * @author Niclas Hedlund
 * @see senselogic.sitevision.api.xml.XmlElementHandler
 * @since Sitevision 5.1
 */
interface XmlElement {
  /**
   * Gets the name of the element
   * @return the element name
   */
  getName(): string;

  /**
   * Gets the text content of the element.
   * @return the text content of the element or null if no text content is available.
   */
  getText(): string;

  /**
   * Gets an attribute value of the element.
   * @param aName the attribute name
   * @return the attribute value or null if no value is associated with attribute
   */
  getAttribute(aName: string): string;

  /**
   * Check if a sub element with a specific name is available in the element.
   * @param aName name of the sub element of this element, must be non-null.
   * @return true if one or more sub elements with the specific name is available
   */
  hasElement(aName: string): boolean;

  /**
   * Gets the first sub element with a specific name of the element.
   * @param aName name of the sub element of this element, must be non-null.
   * @return the sub element or null if no sub element is found.
   */
  getElement(aName: string): XmlElement;

  /**
   * Gets all sub element with a specific name of the element.
   * @param aName name of the sub element of this element, must be non-null.
   * @return the sub elements or an empty collection if no sub elements are available
   */
  getElements(aName: string): unknown;

  /**
   * Gets all sub elements of the element.
   * @return a list of all sub elements
   */
  getElements(): unknown;
}

export default XmlElement;
