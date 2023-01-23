import type { Parser } from "../../types/senselogic/sitevision/api/search/searcher/component/Parser";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * <p>
 *    Builder for creating a single-field {@link senselogic.sitevision.api.search.searcher.component.Parser} component with specific behaviour.
 * </p>
 *
 * <p>
 *    StandardParserBuilder has two <strong>optional attributes</strong>:
 * </p>
 * <ul>
 *    <li>
 *       <em>default field (df)</em> - The field to query. Default is the field specified by the index configuration.
 *       <em>
 *          (Default field for the default Node index is <code>content.analyzed</code>)
 *       </em>
 *    </li>
 *    <li>
 *       <em>query operator (q.op)</em> - The query operator. Default is the operator specified by the index configuration.
 *    </li>
 * </ul>
 *
 * <p>
 *    Using the StandardParserBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *    would typically use it like this:
 * </p>
 * <ol>
 *   <li>Get the StandardParserBuilder</li>
 *   <li>Possibly set the default field</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    When you have built a <code>Parser</code> instance, you can re-use the StandardParserBuilder to build more instances. Typically like:
 * </p>
 * <ol>
 *   <li>(Re-)set the default field</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    <strong>Example of how this strategy could be implemented in Velocity:</strong>
 * </p>
 * <pre><code>
 *   <em>## Get the builder</em>
 *   #set ($searchFactory = $sitevisionUtils.searchFactory)
 *   #set ($standardBuilder = $searchFactory.standardParserBuilder)
 *
 *   <em>## Create a Parser</em>
 *   #set ($nameFieldParser = $standardBuilder.setDefaultField('name.analyzed').build())
 *
 *   <em>## Re-use the builder to create another Parser</em>
 *   #set ($titleFieldParser = $standardBuilder.setDefaultField('title.analyzed').build())
 * </code></pre>
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    <em>Solr note: the defType param for this parser is 'standard' or 'lucene'</em>
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getStandardParserBuilder()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface StandardParserBuilder extends Builder {
  /**
   * Sets the default query field.
   *
   * <p>
   *    <em>Solr note: this is the 'df' param.</em>
   * </p>
   * @param aDefaultField the name of the query field, <code>null</code> or whitespace-only values will be ignored
   * @return this builder
   */
  setDefaultField(aDefaultField: string): StandardParserBuilder;

  /**
   * Sets the query operator.
   *
   * <p>
   *    <em>Solr note: this is the 'q.op' param. The value should typically be "AND" or "OR".</em>
   * </p>
   * @param aQueryOperator the query operator, all values except [null, "AND", "OR"] will be ignored
   * @return this builder
   * @since Sitevision 4.0.2
   */
  setQueryOperator(aQueryOperator: string): StandardParserBuilder;

  /**
   * Creates a Parser component instance using currently specified state/behaviour.
   * @return a Parser component.
   */
  build(): Parser;
}

declare namespace StandardParserBuilder {}

declare var standardParserBuilder: StandardParserBuilder;

export default standardParserBuilder;
