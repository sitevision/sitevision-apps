import type { XmlElement } from "../XmlElement";

/**
 * Handler that is used when parsing XML.
 * @author Niclas Hedlund
 * @see senselogic.sitevision.api.xml.XmlParserUtil
 * @since Sitevision 5.1
 */
export type XmlElementHandler = {
  /**
   * Called when a element matching the selection has been parsed.
   * @param aXmlElement the element
   */
  handleElement(aXmlElement: XmlElement): void;
};
