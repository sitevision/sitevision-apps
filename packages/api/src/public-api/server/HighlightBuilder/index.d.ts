import Highlight from "../../hidden/senselogic/sitevision/api/search/searcher/component/Highlight";
import Builder from "../../hidden/senselogic/sitevision/api/base/Builder";

/**
 * Adds a field that should be highlighted.
 *
 * <p>
 *    <em>Solr note: this is the 'hl.fl' param</em>
 * </p>
 * @param aHighlightedField name of the field, a <code>null</code> or whitespace-only value will be ignored
 * @return this builder
 */
export function addHighlightedField(
  aHighlightedField: string
): HighlightBuilder;

/**
 * Removes all previously added highlighted fields.
 * @return this builder
 */
export function clearHighlightedFields(): HighlightBuilder;

/**
 * Sets the number of chars that highlighted fragment should contain.
 *
 * <p>
 *    If no char count is specified, the default value of the index config will be used (200).
 * </p>
 *
 * <p>
 *    <em>Solr note: this is the 'hl.fragsize' param</em>
 * </p>
 * @param aCharCount the char count
 * @return this builder
 * @throws IllegalArgumentException if <code>aCharCount</code> is zero or negative
 */
export function setFragmentCharCount(aCharCount: number): HighlightBuilder;

/**
 * Sets the start value for the highlighted section(s) of a fragment.
 *
 * <p>
 *    If the pre string and post string are not specified, the default value of the index config will be used
 *    ('&lt;mark&gt;' and '&lt;/mark&gt;').
 * </p>
 *
 * <p>
 *    <em>Solr note: this is the 'hl.simple.pre' param</em>
 * </p>
 * @param aPreString a fragment start
 * @return this builder
 */
export function setFragmentPreString(aPreString: string): HighlightBuilder;

/**
 * Sets the end value for the highlighted section(s) of a fragment.
 *
 * <p>
 *    <strong>Note! </strong> The fragment <em>pre</em> value must match the fragment <em>post</em> string!
 *    E.g: if the <em>pre</em> string is "&lt;em&gt;", the <em>post</em> string would typically be "&lt;/em&gt;".
 * </p>
 *
 * <p>
 *    <em>Solr note: this is the 'hl.simple.post' param</em>
 * </p>
 * @param aPostString a fragment end
 * @return this builder
 */
export function setFragmentPostString(aPostString: string): HighlightBuilder;

/**
 * Creates a Highlight component instance using currently specified state/behaviour.
 * @return a Highlight component
 * @throws IllegalStateException if no highlighted field is specified, or if pre and post strings doesn't match (e.g. one of them is null)
 */
export function build(): Highlight;

/**
 * <p>
 *    Builder for creating a {@link senselogic.sitevision.api.search.searcher.component.Highlight} component with specific behaviour.
 * </p>
 *
 * <p>
 *    HighlightBuilder has one <strong>mandatory attribute</strong>:
 * </p>
 * <ul>
 *    <li>
 *       <em>highlighted field</em> - The name of the field(s) that should be highlighted. Must be non-null.
 *    </li>
 * </ul>
 * <p>
 *    HighlightBuilder also has some <strong>optional attributes</strong>:
 * </p>
 * <ul>
 *    <li>
 *       <em>fragment char count</em> - The size of a highlighted fragment. Default is 200.
 *    </li>
 *    <li>
 *       <em>fragment pre string</em> - The start value of a highlighted section of a fragment. Default is "&lt;mark&gt;".
 *    </li>
 *    <li>
 *       <em>fragment post string</em> - The end value of a highlighted section of a fragment. Default is "&lt;/mark&gt;".
 *    </li>
 * </ul>
 *
 * <p>
 *    Using the HighlightBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *    would typically use it like this:
 * </p>
 * <ol>
 *   <li>Get the HighlightBuilder</li>
 *   <li>Add a highlighted field</li>
 *   <li>Possibly set a char count</li>
 *   <li>Possibly set pre + post</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    When you have built a <code>Highlight</code> instance, you can re-use the HighlightBuilder to build more instances. Typically like:
 * </p>
 * <ol>
 *   <li>Clear the highlighted fields</li>
 *   <li>Possibly change char count</li>
 *   <li>Possibly change pre + post</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    <strong>Example of how this strategy could be implemented in Velocity:</strong>
 * </p>
 * <pre><code>
 *   <em>## Get the builder</em>
 *   #set ($searchFactory = $sitevisionUtils.searchFactory)
 *   #set ($highlightBuilder = $searchFactory.highlightBuilder)
 *
 *   <em>## Create a Highlight</em>
 *   #set ($summaryHighlight = $highlightBuilder.addHighlightedField('summary').build())
 *
 *   <em>## Re-use the builder to create another Highlight</em>
 *   #set ($nameHighlight = $highlightBuilder.clearHighlightedFields().addHighlightedField('name').build())
 * </code></pre>
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getHighlightBuilder()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
declare namespace highlightBuilder {
  export {
    addHighlightedField,
    clearHighlightedFields,
    setFragmentCharCount,
    setFragmentPreString,
    setFragmentPostString,
    build,
  };
}

export default highlightBuilder;
