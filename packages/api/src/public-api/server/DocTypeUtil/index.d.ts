import type { Node } from "../../types/javax/jcr/Node";
import type DocType from "../DocType";

/**
 * A utility interface for checking what DOCTYPE a page uses.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getDocTypeUtil()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 */
export interface DocTypeUtil {
  /**
   * Checks if the doctype for current page is HTML 4.01 Transitional or HTML5.
   * @return <code>true</code> if current page is HTML 4.01 Transitional or HTML5, <code>false</code> otherwise
   * @see DocType#HTML4_TRANSITIONAL
   * @see DocType#HTML5
   */
  isHtml(): boolean;

  /**
   * Checks if the doctype for a certain page is HTML 4.01 Transitional or HTML5.
   * @param aPageNode the page tree node to check
   * @return <code>true</code> if <code>aPageNode</code> is HTML 4.01 Transitional or HTML5, <code>false</code> otherwise
   * @see DocType#HTML4_TRANSITIONAL
   * @see DocType#HTML5
   */
  isHtml(aPageNode: Node): boolean;

  /**
   * Checks if the doctype for current page is HTML 4.01 Transitional.
   * @return <code>true</code> if current page is HTML 4.01 Transitional, <code>false</code> otherwise
   * @see DocType#HTML4_TRANSITIONAL
   */
  isHtml4(): boolean;

  /**
   * Checks if the doctype for a certain page is HTML 4.01 Transitional.
   * @param aPageNode the page tree node to check
   * @return <code>true</code> if <code>aPageNode</code> is HTML 4.01 Transitional, <code>false</code> otherwise
   * @see DocType#HTML4_TRANSITIONAL
   */
  isHtml4(aPageNode: Node): boolean;

  /**
   * Checks if the doctype for current page is HTML5.
   * @return <code>true</code> if current page is HTML5, <code>false</code> otherwise
   * @see DocType#HTML5
   */
  isHtml5(): boolean;

  /**
   * Checks if the doctype for a certain page is HTML5.
   * @param aPageNode the page tree node to check
   * @return <code>true</code> if <code>aPageNode</code> is HTML5, <code>false</code> otherwise
   * @see DocType#HTML5
   */
  isHtml5(aPageNode: Node): boolean;

  /**
   * Checks if the doctype for current page is XHTML 1.0 Transitional or XHTML 1.0 Strict.
   * @return <code>true</code> if current page is XHTML 1.0 Transitional or XHTML 1.0 Strict, <code>false</code> otherwise
   * @see DocType#XHTML1_TRANSITIONAL
   * @see DocType#XHTML1_STRICT
   */
  isXhtml(): boolean;

  /**
   * Checks if the doctype for a certain page is XHTML 1.0 Transitional or XHTML 1.0 Strict.
   * @param aPageNode the page tree node to check
   * @return <code>true</code> if <code>aPageNode</code> is XHTML 1.0 Transitional or XHTML 1.0 Strict, <code>false</code> otherwise
   * @see DocType#XHTML1_TRANSITIONAL
   * @see DocType#XHTML1_STRICT
   */
  isXhtml(aPageNode: Node): boolean;

  /**
   * Checks if the doctype for current page is XHTML 1.0 Transitional.
   * @return <code>true</code> if current page is XHTML 1.0 Transitional, <code>false</code> otherwise
   * @see DocType#XHTML1_TRANSITIONAL
   */
  isXhtmlTransitional(): boolean;

  /**
   * Checks if the doctype for a certain page is XHTML 1.0 Transitional.
   * @param aPageNode the page tree node to check
   * @return <code>true</code> if <code>aPageNode</code> is XHTML 1.0 Transitional, <code>false</code> otherwise
   * @see DocType#XHTML1_TRANSITIONAL
   */
  isXhtmlTransitional(aPageNode: Node): boolean;

  /**
   * Checks if the doctype for current page is XHTML 1.0 Strict.
   * @return <code>true</code> if current page is XHTML 1.0 Strict, <code>false</code> otherwise
   * @see DocType#XHTML1_STRICT
   */
  isXhtmlStrict(): boolean;

  /**
   * Checks if the doctype for a certain page is XHTML 1.0 Strict.
   * @param aPageNode the page tree node to check
   * @return <code>true</code> if <code>aPageNode</code> is XHTML 1.0 Strict, <code>false</code> otherwise
   * @see DocType#XHTML1_STRICT
   */
  isXhtmlStrict(aPageNode: Node): boolean;

  /**
   * Gets the doctype for current page.
   * @return the doctype for current page
   */
  getDocType(): DocType;

  /**
   * Gets the doctype for a certain page.
   * @param aPageNode the page tree node to get doctype for
   * @return the doctype for <code>aPageNode</code>
   */
  getDocType(aPageNode: Node): DocType;

  /**
   * Checks if the doctype for current page matches a certain DocType.
   * @param aDocType the doctype to check against
   * @return <code>true</code> if the doctype for current page matches <code>aDocType</code>, <code>false</code> otherwise
   */
  isDocType(aDocType: DocType): boolean;

  /**
   * Checks if the doctype for a certain page matches a certain DocType.
   * @param aPageNode the page tree node to check
   * @param aDocType the doctype to check against
   * @return <code>true</code> if the doctype for <code>aPageNode</code> matches <code>aDocType</code>, <code>false</code> otherwise
   */
  isDocType(aPageNode: Node, aDocType: DocType): boolean;
}

declare namespace DocTypeUtil {}

declare var docTypeUtil: DocTypeUtil;

export default docTypeUtil;
