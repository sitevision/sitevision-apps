import Node from '../builtins/Node';
import Collection from '../builtins/Collection';

interface XmlElement {
  /**
   * Gets the name of the element
   *
   * @return {string} the element name
   */
  getName(): string;

  /**
   * Gets the text content of the element.
   *
   * @return {string} the text content of the element or null if no text content is available.
   */
  getText(): string;

  /**
   * Gets an attribute value of the element.
   *
   * @param {string} aName the attribute name
   * @return {string} the attribute value or null if no value is associated with attribute
   */
  getAttribute(aName: string): string;

  /**
   * Check if a sub element with a specific name is available in the element.
   *
   * @param {string} aName name of the sub element of this element, must be non-null.
   * @return {boolean} true if one or more sub elements with the specific name is available
   */
  hasElement(aName: string): boolean;

  /**
   * Gets the first sub element with a specific name of the element.
   *
   * @param {string} aName name of the sub element of this element, must be non-null.
   * @return {XmlElement} the sub element or null if no sub element is found.
   */
  getElement(aName: string): XmlElement;

  /**
   * Gets all sub element with a specific name of the element.
   *
   * @param {string} aName name of the sub element of this element, must be non-null.
   * @return {Collection<XmlElement>}the sub elements or an empty collection if no sub elements are available
   */
  getElements(aName: string): Collection<XmlElement>;

  /**
   * Gets all sub elements of the element.
   *
   * @return {Collection<XmlElement>} a list of all sub elements
   */
  getElements(): Collection<XmlElement>;
}

interface XmlElementHandler {
  /**
   * Called when a element matching the selection has been parsed.
   *
   * @param {XmlElement} aXmlElement the element
   */
  handleElement(aXmlElement: XmlElement): void;
}

/**
 * Parse a XML string.
 *
 * @param {string} aElementSelection the elements in the XML that should be passed to the XmlElementHandler
 * @param {string} aXml the UTF-8 XML string
 * @param {XmlElementHandler} aXmlElementHandler the XmlElementHandler
 * @throws XmlParserException if an error occurs while parsing the XML
 */
export function parse(
  aElementSelection: string,
  aXml: string,
  aXmlElementHandler: XmlElementHandler
): void;

/**
 * Parse a file containing XML encoded using UTF-8.
 *
 * @param {string} aElementSelection the elements in the XML that should be passed to the XmlElementHandler
 * @param {Node} aXmlFile the file containing XML encoded using UTF-8 (sv:file or sv:temporaryFile)
 * @param {XmlElementHandler} aXmlElementHandler the XmlElementHandler
 * @throws RepositoryException if an error occurs while accessing the file
 * @throws XmlParserException if an error occurs while parsing the XML
 */
export function parse(
  aElementSelection: string,
  aXmlFile: Node,
  aXmlElementHandler: XmlElementHandler
): void;

/**
 * Parse a file containing XML encoded with the supplied charset.
 *
 * @param {string} aElementSelection the elements in the XML that should be passed to the XmlElementHandler
 * @param {Node} aXmlFile the file containing XML encoded using supplied encoding (sv:file or sv:temporaryFile)
 * @param {string} aCharset the character encoding of the the file content
 *                 (an IllegalArgument will be thrown if aCharset can not be resolved as a java.nio.charset.Charset)
 * @param {XmlElementHandler} aXmlElementHandler the XmlElementHandler
 * @throws RepositoryException if an error occurs while accessing the file
 * @throws XmlParserException if an error occurs while parsing the XML
 */
export function parse(
  aElementSelection: string,
  aXmlFile: Node,
  aCharset: string,
  aXmlElementHandler: XmlElementHandler
): void;

declare namespace xmlParserUtil {
  export { parse };
}
