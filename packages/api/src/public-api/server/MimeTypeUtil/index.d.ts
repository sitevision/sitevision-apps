import type MimeTypeUtilConstants from "../../types/senselogic/sitevision/api/render/velocity/VelocityAccess.MimeTypeUtilConstants";

/**
 * A utility that determines an appropriate MIME type for a file extension or vice versa.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getMimeTypeUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 */
export interface MimeTypeUtil extends MimeTypeUtilConstants {
  /**
 * The generic <code>application/octet-stream</code> MIME type.
 *
 * <p><em>Would typically be appropriate to use as value for the fallback MIME type when using the
 * {@link #getMimeType(String, String)} whenever you require an acceptable, non-null MIME type to be returned.</em></p>
 * <pre><code>    String mime = aMimeTypeUtil.getMimeType(anExtension, MimeTypeUtil.GENERIC_MIME_TYPE);</code></pre>
  
    */
  GENERIC_MIME_TYPE: "application/octet-stream";

  /**
   * Returns the MIME type appropriate for a specified file extension.
   * @param aFileExtensionExpression a file extension (e.g <em>pdf</em>) or an expression that ends with a period and a file extension (e.g <em>myfile.pdf</em> or <em>http://www.xyz.com/files/myfile.pdf</em>). Case insensitive.
   * @return a MIME type that matches the extension in <code>aFileExtensionExpression</code>, or <code>null</code> if extension is unknown
   * @see #getMimeType(String, String)
   */
  getMimeType(aFileExtensionExpression: string): string;

  /**
   * Returns the MIME type (or a fallback MIME type) appropriate for a specified file extension.
   * @param aFileExtensionExpression a file extension (e.g <em>pdf</em>) or an expression that ends with a period and a file extension (e.g <em>myfile.pdf</em> or <em>http://www.xyz.com/files/myfile.pdf</em>). Case insensitive.
   * @param aFallbackMimeType the fallback MIME type to return if no MIME type can be found for <code>aFileExtensionExpression</code>
   * @return a MIME type that matches the extension in <code>aFileExtensionExpression</code>, or <code>aFallbackMimeType</code> if extension is unknown
   */
  getMimeType(
    aFileExtensionExpression: string,
    aFallbackMimeType: string
  ): string;

  /**
   * Returns the file extension for a specified MIME type.
   * @param aMimeType a MIME type. Case insensitive.
   * @return the lowercased default file extension for MIME type <code>aMimeType</code>, or <code>null</code> if <code>aMimeType</code> is unknown or has no single well-known extension (e.g. <em>application/octet-stream</em> or <em>text/plain</em>)
   * @see #getExtension(String, String)
   */
  getExtension(aMimeType: string): string;

  /**
   * Returns the file extension (or a fallback extension) for a specified MIME type.
   * @param aMimeType a MIME type. Case insensitive.
   * @param aFallbackExtension the fallback extension to return if no extension can be found for <code>aMimeType</code>
   * @return the lowercased default file extension for MIME type <code>aMimeType</code>, or <code>aFallbackExtension</code> if <code>aMimeType</code> is unknown or has no single well-known extension (e.g. <em>application/octet-stream</em> or <em>text/plain</em>)
   */
  getExtension(aMimeType: string, aFallbackExtension: string): string;

  /**
   * Checks if a specified file extension is an image type (according to its mapped MIME type).
   *
   * <p>
   *    <em>An image type has a MIME that starts with <code>image/</code></em>.
   * </p>
   * @param aFileExtensionExpression a file extension (e.g <em>png</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.png</em> or <em>http://www.xyz.com/files/myresource.png</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a <code>image/*</code> MIME type, false otherwise
   * @since Sitevision 4.0
   */
  isImageType(aFileExtensionExpression: string): boolean;

  /**
   * Checks if a specified file extension is a text type (according to its mapped MIME type).
   *
   * <p>
   *    <em>A text type has a MIME that starts with "<code>text/</code>"</em>.
   * </p>
   * @param aFileExtensionExpression a file extension (e.g <em>txt</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.txt</em> or <em>http://www.xyz.com/files/myresource.txt</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a <code>text/*</code> MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isTextType(aFileExtensionExpression: string): boolean;

  /**
   * Checks if a specified file extension is a text type (according to its mapped MIME type).
   *
   * <p>
   *    <em>
   *       A XML type typically has a MIME that starts with "<code>application/</code>" and ends with "<code>xml</code>".
   *       This method will not include xml-based files covered by other categories (e.g. "office" types or the "svg" image type).
   *    </em>
   * </p>
   * @param aFileExtensionExpression a file extension (e.g <em>xml</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.xml</em> or <em>http://www.xyz.com/files/myresource.xml</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a <code>application/*xml</code> MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isXmlType(aFileExtensionExpression: string): boolean;

  /**
   * Checks if a specified file extension is a video type (according to its mapped MIME type).
   *
   * <p>
   *    <em>A video type has a MIME that starts with "<code>video/</code>"</em>.
   * </p>
   * @param aFileExtensionExpression a file extension (e.g <em>mov</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.mov</em> or <em>http://www.xyz.com/files/myresource.mov</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a <code>video/*</code> MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isVideoType(aFileExtensionExpression: string): boolean;

  /**
   * Checks if a specified file extension is a compressed/archive type (according to its mapped MIME type).
   *
   * <p>
   *    Example of compressed MIME types:
   * </p>
   * <ul>
   *    <li>application/zip</li>
   *    <li>application/x-gzip</li>
   *    <li>application/x-bzip</li>
   *    <li>application/x-rar-compressed</li>
   *    <li>application/x-lzh-compressed</li>
   *    <li>application/x-7z-compressed</li>
   *    <li>application/x-tar</li>
   *    <li>application/vnd.ms-cab-compressed</li>
   *    <li>application/java-archive</li>
   * </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>zip</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.zip</em> or <em>http://www.xyz.com/files/myresource.zip</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MIME type that is registered as compressed, false otherwise
   * @since Sitevision 4.1
   */
  isCompressedType(aFileExtensionExpression: string): boolean;

  /**
   * Checks if a specified file extension is a MS Word type (according to its mapped MIME type).
   *
   * <p>
   *    Example of typical MS Word MIME types:
   * </p>
   * <ul>
   *    <li>application/vnd.ms-word</li>
   *    <li>application/vnd.openxmlformats-officedocument.wordprocessingml.document</li>
   *    <li>application/vnd.openxmlformats-officedocument.wordprocessingml.template</li>
   * </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>doc</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.doc</em> or <em>http://www.xyz.com/files/myresource.doc</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MS Word MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isMSWordType(aFileExtensionExpression: string): boolean;

  /**
   * Checks if a specified file extension is a MS Excel type (according to its mapped MIME type).
   *
   * <p>
   *    Example of typical MS Excel MIME types:
   * </p>
   * <ul>
   *    <li>application/vnd.ms-excel</li>
   *    <li>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</li>
   *    <li>application/vnd.openxmlformats-officedocument.spreadsheetml.template</li>
   * </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>xls</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.xls</em> or <em>http://www.xyz.com/files/myresource.xls</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MS Excel MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isMSExcelType(aFileExtensionExpression: string): boolean;

  /**
   * Checks if a specified file extension is a MS Powerpoint type (according to its mapped MIME type).
   *
   * <p>
   *    Example of typical MS Powerpoint MIME types:
   * </p>
   * <ul>
   *    <li>application/vnd.ms-powerpoint</li>
   *    <li>application/vnd.openxmlformats-officedocument.presentationml.presentation</li>
   *    <li>application/vnd.openxmlformats-officedocument.presentationml.template</li>
   * </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>ppt</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.ppt</em> or <em>http://www.xyz.com/files/myresource.ppt</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MS Powerpoint MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isMSPowerpointType(aFileExtensionExpression: string): boolean;

  /**
   * Checks if a specified file extension is a MS Office type (according to its mapped MIME type).
   *
   * <p>
   *    <em>
   *       This is a convenience method that checks if <code>aFileExtensionExpression</code> is mapped to a MS Word/Excel/Powerpoint MIME type.
   *       (i.e. a combination of {@link #isMSWordType(String)}, {@link #isMSExcelType(String)} and {@link #isMSPowerpointType(String)})
   *    </em>
   * </p>
   * @param aFileExtensionExpression a file extension (e.g <em>doc</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.xls</em> or <em>http://www.xyz.com/files/myresource.ppt</em>). Case insensitive.
   * @return true if <code>aFileExtensionExpression</code> is mapped to a MS Word/Excel/Powerpoint MIME type, false otherwise
   * @since Sitevision 4.1
   */
  isMSOfficeType(aFileExtensionExpression: string): boolean;

  /**
   * Checks if a specified file extension is a font type (according to its mapped MIME type).
   *
   * <p>
   *    Example of typical font MIME types:
   * </p>
   * <ul>
   *    <li>font/woff2</li>
   *    <li>font/woff</li>
   *    <li>font/ttf</li>
   *    <li>font/otf</li>
   *    <li>font/sfnt</li>
   *    <li>font/collection</li>
   *    <li>application/x-font-ttf</li>
   *    <li>application/vnd.ms-fontobject</li>
   *    <li>application/x-dfont</li>
   * </ul>
   * @param aFileExtensionExpression a file extension (e.g <em>woff2</em>) or an expression that ends with a period and a file extension (e.g <em>myresource.woff2</em> or <em>http://www.xyz.com/files/myresource.woff2</em>). Case insensitive.
   * @return true if aFileExtensionExpression is mapped to a MIME type that is registered as font, false otherwise
   * @since Sitevision 2022.10.1
   */
  isFontType(aFileExtensionExpression: string): boolean;
}

declare namespace MimeTypeUtil {}

declare var mimeTypeUtil: MimeTypeUtil;

export = mimeTypeUtil;
