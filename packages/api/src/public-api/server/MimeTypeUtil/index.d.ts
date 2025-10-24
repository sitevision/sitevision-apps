/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../types/java/lang/String";

import type { MimeTypeUtilConstants } from "../../types/senselogic/sitevision/api/render/velocity/VelocityAccess.MimeTypeUtilConstants";

/**
 * A utility that determines an appropriate MIME type for a file extension or vice versa.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getMimeTypeUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 */
export interface MimeTypeUtil extends MimeTypeUtilConstants {
  /**
 * The generic <code>application/octet-stream</code> MIME type.
 * 
 *  <p><em>Would typically be appropriate to use as value for the fallback MIME type when using the
 *  {@link #getMimeType(String, String)} whenever you require an acceptable, non-null MIME type to be returned.</em></p>
 *  <pre><code>    String mime = aMimeTypeUtil.getMimeType(anExtension, MimeTypeUtil.GENERIC_MIME_TYPE);</code></pre>
  
    */
  GENERIC_MIME_TYPE: "application/octet-stream";

  /**
   * Returns the MIME type appropriate for a specified file extension.
   * @param aFileExtensionExpression a file extension (e.g <em>pdf</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myfile.pdf</em> or <em>http://www.xyz.com/files/myfile.pdf</em>). Case insensitive.
   * @return a MIME type that matches the extension in <code>aFileExtensionExpression</code>, or <code>null</code> if&#xA; extension is unknown
   * @see #getMimeType(String, String)
   */
  getMimeType(aFileExtensionExpression: String | string): string;

  /**
   * Returns the MIME type (or a fallback MIME type) appropriate for a specified file extension.
   * @param aFileExtensionExpression a file extension (e.g <em>pdf</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myfile.pdf</em> or <em>http://www.xyz.com/files/myfile.pdf</em>). Case insensitive.
   * @param aFallbackMimeType the fallback MIME type to return if no MIME type can be found for <code>aFileExtensionExpression</code>
   * @return a MIME type that matches the extension in <code>aFileExtensionExpression</code>, or <code>aFallbackMimeType</code> if&#xA; extension is unknown
   */
  getMimeType(
    aFileExtensionExpression: String | string,
    aFallbackMimeType: String | string
  ): string;

  /**
   * Returns the file extension for a specified MIME type.
   * @param aMimeType a MIME type. Case insensitive.
   * @return the lowercased default file extension for MIME type <code>aMimeType</code>, or <code>null</code> if&#xA; <code>aMimeType</code> is unknown or has no single well-known extension (e.g. <em>application/octet-stream</em> or <em>text/plain</em>)
   * @see #getExtension(String, String)
   */
  getExtension(aMimeType: String | string): string;

  /**
   * Returns the file extension (or a fallback extension) for a specified MIME type.
   * @param aMimeType a MIME type. Case insensitive.
   * @param aFallbackExtension the fallback extension to return if no extension can be found for <code>aMimeType</code>
   * @return the lowercased default file extension for MIME type <code>aMimeType</code>, or <code>aFallbackExtension</code> if&#xA; <code>aMimeType</code> is unknown or has no single well-known extension (e.g. <em>application/octet-stream</em> or <em>text/plain</em>)
   */
  getExtension(
    aMimeType: String | string,
    aFallbackExtension: String | string
  ): string;

  /**
   * Checks if a specified file extension is an image type (according to its mapped MIME type).
   *
   *  <p>
   *     <em>An image type has a MIME that starts with <code>image/</code></em>.
   *  </p>
   * @param aFileExtensionExpression a file extension (e.g <em>png</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.png</em> or <em>http://www.xyz.com/files/myresource.png</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a <code>image/*</code> MIME type, false otherwise
   * @since Sitevision 4.0
   */
  isImageType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a text type (according to its mapped MIME type).
   *
   *  <p>
   *     <em>A text type has a MIME that starts with "<code>text/</code>"</em>.
   *  </p>
   * @param aFileExtensionExpression a file extension (e.g <em>txt</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.txt</em> or <em>http://www.xyz.com/files/myresource.txt</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a <code>text/*</code> MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isTextType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a text type (according to its mapped MIME type).
   *
   *  <p>
   *     <em>
   *        A XML type typically has a MIME that starts with "<code>application/</code>" and ends with "<code>xml</code>".
   *        This method will not include xml-based files covered by other categories (e.g. "office" types or the "svg" image type).
   *     </em>
   *  </p>
   * @param aFileExtensionExpression a file extension (e.g <em>xml</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.xml</em> or <em>http://www.xyz.com/files/myresource.xml</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a <code>application/*xml</code> MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isXmlType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a video type (according to its mapped MIME type).
   *
   *  <p>
   *     <em>A video type has a MIME that starts with "<code>video/</code>"</em>.
   *  </p>
   * @param aFileExtensionExpression a file extension (e.g <em>mov</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.mov</em> or <em>http://www.xyz.com/files/myresource.mov</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a <code>video/*</code> MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isVideoType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a compressed/archive type (according to its mapped MIME type).
   *
   *  <p>
   *     Example of compressed MIME types:
   *  </p>
   *  <ul>
   *     <li>application/zip</li>
   *     <li>application/x-gzip</li>
   *     <li>application/x-bzip</li>
   *     <li>application/x-rar-compressed</li>
   *     <li>application/x-lzh-compressed</li>
   *     <li>application/x-7z-compressed</li>
   *     <li>application/x-tar</li>
   *     <li>application/vnd.ms-cab-compressed</li>
   *     <li>application/java-archive</li>
   *  </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>zip</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.zip</em> or <em>http://www.xyz.com/files/myresource.zip</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MIME type that is registered as compressed, false otherwise
   * @since Sitevision 4.1
   */
  isCompressedType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a MS Word type (according to its mapped MIME type).
   *
   *  <p>
   *     Example of typical MS Word MIME types:
   *  </p>
   *  <ul>
   *     <li>application/vnd.ms-word</li>
   *     <li>application/vnd.openxmlformats-officedocument.wordprocessingml.document</li>
   *     <li>application/vnd.openxmlformats-officedocument.wordprocessingml.template</li>
   *  </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>doc</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.doc</em> or <em>http://www.xyz.com/files/myresource.doc</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MS Word MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isMSWordType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a MS Excel type (according to its mapped MIME type).
   *
   *  <p>
   *     Example of typical MS Excel MIME types:
   *  </p>
   *  <ul>
   *     <li>application/vnd.ms-excel</li>
   *     <li>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</li>
   *     <li>application/vnd.openxmlformats-officedocument.spreadsheetml.template</li>
   *  </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>xls</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.xls</em> or <em>http://www.xyz.com/files/myresource.xls</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MS Excel MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isMSExcelType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a MS Powerpoint type (according to its mapped MIME type).
   *
   *  <p>
   *     Example of typical MS Powerpoint MIME types:
   *  </p>
   *  <ul>
   *     <li>application/vnd.ms-powerpoint</li>
   *     <li>application/vnd.openxmlformats-officedocument.presentationml.presentation</li>
   *     <li>application/vnd.openxmlformats-officedocument.presentationml.template</li>
   *  </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>ppt</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.ppt</em> or <em>http://www.xyz.com/files/myresource.ppt</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MS Powerpoint MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isMSPowerpointType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a MS Office type (according to its mapped MIME type).
   *
   *  <p>
   *     <em>
   *        This is a convenience method that checks if <code>aFileExtensionExpression</code> is mapped to a MS Word/Excel/Powerpoint MIME type.
   *        (i.e. a combination of {@link #isMSWordType(String)}, {@link #isMSExcelType(String)} and {@link #isMSPowerpointType(String)})
   *     </em>
   *  </p>
   * @param aFileExtensionExpression a file extension (e.g <em>doc</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.xls</em> or <em>http://www.xyz.com/files/myresource.ppt</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MS Word/Excel/Powerpoint MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isMSOfficeType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a font type (according to its mapped MIME type).
   *
   *  <p>
   *     Example of typical font MIME types:
   *  </p>
   *  <ul>
   *     <li>font/woff2</li>
   *     <li>font/woff</li>
   *     <li>font/ttf</li>
   *     <li>font/otf</li>
   *     <li>font/sfnt</li>
   *     <li>font/collection</li>
   *     <li>application/x-font-ttf</li>
   *     <li>application/vnd.ms-fontobject</li>
   *     <li>application/x-dfont</li>
   *  </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>woff2</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.woff2</em> or <em>http://www.xyz.com/files/myresource.woff2</em>). Case insensitive.
   * @return true if aFileExtensionExpression is mapped to a MIME type that is registered as font, false otherwise
   * @since Sitevision 2022.10.1
   */
  isFontType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is an audio type (according to its mapped MIME type).
   *
   *  <p>
   *     <em>An audio type has a MIME that starts with "<code>audio/</code>"</em>.
   *  </p>
   * @param aFileExtensionExpression a file extension (e.g <em>wav</em>) or an expression that ends with a period and a file extension&#xA; (e.g <em>myresource.wav</em> or <em>http://www.xyz.com/files/myresource.wav</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a <code>audio/*</code> MIME type, false otherwise
   * @since Sitevision 2024.04.1
   */
  isAudioType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified file extension is a JSON type (according to its mapped MIME type).
   * @param aFileExtensionExpression a file extension (e.g "json") or an expression that ends with a period and a file extension&#xA; (e.g "myfile.json" or "https://www.xyz.com/files/myfile.json"). Case insensitive.
   * @return true if aFileExtensionExpression is mapped to a MIME type that depicts the JSON format, false otherwise
   * @see #isJsonMime(String)
   * @since Sitevision 2025.01.2
   */
  isJsonType(aFileExtensionExpression: String | string): boolean;

  /**
   * Checks if a specified MIME type depicts the JSON format.
   *
   *  <p>
   *     The primary JSON format MIME is <code>"application/json"</code> and should always be handled as UTF-8 text. Other MIME:s that uses the JSON
   *     format typically has a <code>"+json"</code> suffix (see <a href="https://www.rfc-editor.org/rfc/rfc6839#section-3.1">RFC 6839</a>)
   *     or a <code>"+json-seq"</code> suffix (see <a href="https://www.rfc-editor.org/rfc/rfc8091#section-3">RFC 8091</a>). But there
   *     are also some legacy/unofficial MIME:s that also depicts the JSON format (e.g. "text/json", "application/jsonrequest").
   *     Example of typical MIME types that depicts the JSON format:
   *  </p>
   *  <ul>
   *     <li>application/json</li>
   *     <li>application/vnd.api+json</li>
   *     <li>application/vnd.restful+json</li>
   *     <li>application/ld+json</li>
   *     <li>application/ld-frame+json</li>
   *     <li>application/jsonml+json</li>
   *     <li>application/geo+json</li>
   *     <li>application/calendar+json</li>
   *  </ul>
   *
   *  <p>
   *     A <code>Content-Type</code> header value for a JSON response is typically <code>"application/json; charset=utf-8"</code>.
   *     This method handles such values, only the leading MIME part will be checked (any semicolon suffix part will be completely ignored).
   *  </p>
   * @param aMimeType a MIME value or Content-Type header value
   * @return true if aMimeType matches a MIME that depicts the JSON format, false otherwise
   * @since Sitevision 2025.01.2
   */
  isJsonMime(aMimeType: String | string): boolean;
}

declare namespace MimeTypeUtil {}

declare var mimeTypeUtil: MimeTypeUtil;

export default mimeTypeUtil;
