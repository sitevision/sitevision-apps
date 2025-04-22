import type { Node } from "../../types/javax/jcr/Node";
import type DocType from "../DocType";

/**
 * A deprecated DOCTYPE utility interface.
 *
 *  <p>
 *     <strong>NOTE! This interface is deprecated and should typically not be used!
 *     All methods have a fixed behaviour, i.e. always returns <code>true</code> or <code>false</code>
 *     since all Sitevision pages use HTML5.</strong>
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getDocTypeUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 * @deprecated This interface is deprecated due to obsolete functionality - pages are always HTML5.&#xA; Last remaining legacy setting to use other type was removed in Sitevision 2025.04.1.
 */
export interface DocTypeUtil {
  /**
   * This method always return true since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for current page is HTML 4.01 Transitional or HTML5.</p>
   * @return true
   */
  isHtml(): boolean;

  /**
   * This method always return true since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for a certain page is HTML 4.01 Transitional or HTML5.</p>
   * @param aPageNode this argument will be completely ignored
   * @return true
   */
  isHtml(aPageNode: Node): boolean;

  /**
   * This method always return false since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for current page is HTML 4.01 Transitional.</p>
   * @return false
   * @see DocType#HTML4_TRANSITIONAL
   */
  isHtml4(): boolean;

  /**
   * This method always return false since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for a certain page is HTML 4.01 Transitional.</p>
   * @param aPageNode this argument will be completely ignored
   * @return false
   */
  isHtml4(aPageNode: Node): boolean;

  /**
   * This method always return true since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for current page is HTML5.</p>
   * @return true
   * @see DocType#HTML5
   */
  isHtml5(): boolean;

  /**
   * This method always return true since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for a certain page is HTML5.</p>
   * @param aPageNode this argument will be completely ignored
   * @return true
   */
  isHtml5(aPageNode: Node): boolean;

  /**
   * This method always return false since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for current page is XHTML 1.0 Transitional or XHTML 1.0 Strict.</p>
   * @return false
   */
  isXhtml(): boolean;

  /**
   * This method always return false since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for a certain page is XHTML 1.0 Transitional or XHTML 1.0 Strict.</p>
   * @param aPageNode this argument will be completely ignored
   * @return false
   */
  isXhtml(aPageNode: Node): boolean;

  /**
   * This method always return false since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for current page is XHTML 1.0 Transitional.</p>
   * @return false
   * @see DocType#XHTML1_TRANSITIONAL
   */
  isXhtmlTransitional(): boolean;

  /**
   * This method always return false since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for a certain page is XHTML 1.0 Transitional.</p>
   * @param aPageNode this argument will be completely ignored
   * @return false
   */
  isXhtmlTransitional(aPageNode: Node): boolean;

  /**
   * This method always return false since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for current page is XHTML 1.0 Strict.</p>
   * @return false
   * @see DocType#XHTML1_STRICT
   */
  isXhtmlStrict(): boolean;

  /**
   * This method always return false since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Checks if the doctype for a certain page is XHTML 1.0 Strict.</p>
   * @param aPageNode this argument will be completely ignored
   * @return false
   */
  isXhtmlStrict(aPageNode: Node): boolean;

  /**
   * This method always return {@link DocType#HTML5} since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Gets the doctype for current page.</p>
   * @return {@link DocType#HTML5}
   */
  getDocType(): DocType;

  /**
   * This method always return {@link DocType#HTML5} since all pages are always HTML5.
   *  <p style="text-decoration:line-through">Gets the doctype for a certain page.</p>
   * @param aPageNode this argument will be completely ignored
   * @return {@link DocType#HTML5}
   */
  getDocType(aPageNode: Node): DocType;

  /**
   * This method always return true if the aDocType argument is {@link DocType#HTML5}.
   *  <p style="text-decoration:line-through">Checks if the doctype for current page matches a certain DocType.</p>
   * @param aDocType the doctype to check against
   * @return true if aDocType is {@link DocType#HTML5}, false otherwise
   */
  isDocType(aDocType: DocType): boolean;

  /**
   * This method always return true if the aDocType argument is {@link DocType#HTML5}.
   *  <p style="text-decoration:line-through">Checks if the doctype for a certain page matches a certain DocType.</p>
   * @param aPageNode this argument will be completely ignored
   * @param aDocType the doctype to check against
   * @return true if aDocType is {@link DocType#HTML5}, false otherwise
   */
  isDocType(aPageNode: Node, aDocType: DocType): boolean;
}

declare namespace DocTypeUtil {}

declare var docTypeUtil: DocTypeUtil;

export default docTypeUtil;
