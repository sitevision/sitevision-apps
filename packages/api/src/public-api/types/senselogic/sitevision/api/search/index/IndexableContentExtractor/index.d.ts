/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../../../../../java/lang/String";

/**
 * Extracts the indexable online content from a page as HTML, plain text or Markdown.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link IndexableContentExtractorBuilder#build()}.
 *     See {@link IndexableContentExtractorBuilder} for how to obtain an instance of the <code>IndexableContentExtractorBuilder</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2026.03.1
 */
export type IndexableContentExtractor = {
  /**
   * Extracts the indexable content as HTML.
   * @return the indexable content as HTML
   */
  extractHtml(): string;

  /**
   * Extracts the indexable content as plain text.
   * @return the indexable content as plain text
   */
  extractText(): string;

  /**
   * Extracts the indexable content as Markdown.
   * @return the indexable content as Markdown
   */
  extractMarkdown(): string;
};
