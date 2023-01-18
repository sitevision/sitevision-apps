import type XmlElementHandler from "../../types/senselogic/sitevision/api/xml/XmlElementHandler";

import type Node from "../../types/javax/jcr/Node";

/**
 * Utility interface for parsing XML.
 *
 * <p>
 *    <em>Example 1: parse a RSS XML string.</em>
 * </p>
 * <pre>
 *    var xml = '&lt;rss&gt;&lt;channel&gt;&lt;item&gt;&lt;title&gt;Hello World!&lt;/title&gt;&lt;/item&gt;&lt;/channel&gt;&lt;/rss&gt;',
 *        parser = require('XmlParserUtil');
 *
 *    parser.parse('/rss/channel/item', xml, function(aElement) {
 *       // Handle item direct instead of adding to a list in order to preserve memory!
 *       out.println(aElement.getElement('title').getText() + '&lt;br&gt;');
 *    });
 * </pre>
 *
 * <p>
 *    <em>Example 2: parse a ISO-8859-1 encoded RSS XML file stored in the file repository.</em>
 * </p>
 * <pre>
 *    var xmlFile = require('ResourceLocatorUtil').getFileRepository().getNode('rss.xml'),
 *        parser = require('XmlParserUtil');
 *
 *    parser.parse('/rss/channel/item', xmlFile, 'ISO-8859-1', function(aElement) {
 *       // Handle item direct instead of adding to a list in order to preserve memory!
 *       out.println(aElement.getElement('title').getText() + '&lt;br&gt;');
 *    });
 * </pre>
 *
 * <p>
 *    <em>Example 3: download and parse a remote RSS XML.</em>
 * </p>
 * <pre>
 *    var requester = require('Requester'),
 *        parser = require('XmlParserUtil'),
 *        url = 'https://www.site.com/rss-feed.xml',
 *        options = {
 *           dataType: 'file'
 *        };
 *
 *    requester.get(url, options)
 *       .done(function(result, statusCode, headers) {
 *          if (statusCode === 200 &amp;&amp; result) {
 *             parser.parse('/rss/channel/item', result, function(aElement) {
 *                // Handle item direct instead of adding to a list in order to preserve memory!
 *                out.println(aElement.getElement('title').getText() + '&lt;br&gt;');
 *             });
 *          }
 *       }).fail(function(message, status) {
 *          // GET failed, handle appropriately
 *       });
 * </pre>
 *
 * <p>
 *    <strong>Important note!</strong><br>
 *    In order to protected the system against processes that consumes to much memory and to avoid
 *    OutOfMemoryExceptions the parsing process will be aborted and a RuntimeException thrown
 *    if more than 5MB of text content is found inside a single element.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getXmlParserUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Niclas Hedlund
 * @since Sitevision 5.1
 */
export interface XmlParserUtil {
  /**
   * Parse a XML string.
   * @param aElementSelection the elements in the XML that should be passed to the XmlElementHandler
   * @param aXml the UTF-8 XML string
   * @param aXmlElementHandler the XmlElementHandler
   * @throws XmlParserException if an error occurs while parsing the XML
   */
  parse(
    aElementSelection: string,
    aXml: string,
    aXmlElementHandler: XmlElementHandler
  ): void;

  /**
   * Parse a file containing XML encoded using UTF-8.
   * @param aElementSelection the elements in the XML that should be passed to the XmlElementHandler
   * @param aXmlFile the file containing XML encoded using UTF-8 (sv:file or sv:temporaryFile)
   * @param aXmlElementHandler the XmlElementHandler
   * @throws RepositoryException if an error occurs while accessing the file
   * @throws XmlParserException if an error occurs while parsing the XML
   */
  parse(
    aElementSelection: string,
    aXmlFile: Node,
    aXmlElementHandler: XmlElementHandler
  ): void;

  /**
   * Parse a file containing XML encoded with the supplied charset.
   * @param aElementSelection the elements in the XML that should be passed to the XmlElementHandler
   * @param aXmlFile the file containing XML encoded using supplied encoding (sv:file or sv:temporaryFile)
   * @param aCharset the character encoding of the the file content (an IllegalArgument will be thrown if aCharset can not be resolved as a java.nio.charset.Charset)
   * @param aXmlElementHandler the XmlElementHandler
   * @throws RepositoryException if an error occurs while accessing the file
   * @throws XmlParserException if an error occurs while parsing the XML
   */
  parse(
    aElementSelection: string,
    aXmlFile: Node,
    aCharset: string,
    aXmlElementHandler: XmlElementHandler
  ): void;
}

declare namespace XmlParserUtil {}

declare var xmlParserUtil: XmlParserUtil;

export = xmlParserUtil;
