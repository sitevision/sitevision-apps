/**
 * Gets the default XSL template for cleanup of HTML sources.
 *
 * <p>
 *    The template strips all &lt;div&gt;'s, &lt;spans&gt;'s and removes all inline styling, classes and attributes
 *    that is not mandatory or needed for WCAG purposes.
 * </p>
 * <p>
 *    <em>Note!</em> The template supports a <em>sub-set</em> of HTML elements (the presumed most commonly used elements).
 *    All unsupported elements are completely discarded (i.e. they will not be included at all in the transformation result).
 * </p>
 *
 * @return {string} the default cleanup template for HTML sources
 */
export function getDefaultCleanHtmlTemplate(): string;

/**
 * Transforms a HTML/XML source using a XSL template.
 *
 * <p>
 *    <em>Note!</em> The contents of the XSL Template is always handled as UTF-8.
 * </p>
 *
 * @param {string} aSource the source that should be transformed, HTML, XHTML or XML. Must not be null
 * @param {any} aXslTemplate the UTF-8 XSL template;
 *                     a sv:file Node, a sv:temporaryFile Node, a sv:link Node that targets a sv:file, a char array or a CharSequence
 *                     (typically a String). Must not be null
 * @return {string} the transformation result
 * @throws IOException if the transformation fails (e.g. the aSource is really bad/interpretable HTML or aXslTemplate is invalid XSL)
 * @throws RepositoryException if aNode-operation on aXslTemplate fails
 */
export function transform(aSource: string, aXslTemplate: any): string;

declare namespace xsltUtil {
  export { getDefaultCleanHtmlTemplate, transform };
}
