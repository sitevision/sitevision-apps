import Parser from "../../hidden/senselogic/sitevision/api/search/searcher/component/Parser";
import Builder from "../../hidden/senselogic/sitevision/api/base/Builder";

/**
 * Adds a query field.
 *
 * <p>
 *    <em>Solr note: this is the 'qf' param.</em>
 * </p>
 * @param aQueryField the name of the query field, a <code>null</code> or whitespace-only value will be ignored
 * @return this builder
 */
export function addQueryField(aQueryField: string): ExtendedDismaxParserBuilder;

/**
 * Adds a query field with a specific boost.
 *
 * <p>
 *    <em>Solr note: this is the 'qf' param.</em>
 * </p>
 * @param aQueryField the name of the query field, a <code>null</code> or whitespace-only value will be ignored
 * @param aBoostValue the boost value, a negative value will be ignored
 * @return this builder
 */
export function addQueryField(
  aQueryField: string,
  aBoostValue: number
): ExtendedDismaxParserBuilder;

/**
 * Removes all currently specified query fields.
 * @return this builder
 */
export function clearQueryFields(): ExtendedDismaxParserBuilder;

/**
 * Sets the tiebreaker.
 *
 * <p>
 *    <em>Solr note: this is the 'tie' param. The value should typically be something much less than 1.</em>
 * </p>
 * @param aTieBreaker the tiebreaker
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function setTieBreaker(aTieBreaker: number): ExtendedDismaxParserBuilder;

/**
 * Sets the user fields.
 *
 * <p>
 *    <em>Solr note: this is the 'uf' param.</em>
 * </p>
 * @param aUserFields the user fields
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function setUserFields(aUserFields: string): ExtendedDismaxParserBuilder;

/**
 * Sets the minimum should match.
 *
 * <p>
 *    <em>Solr note: this is the 'mm' param. A value of 100% corresponds to the AND operator and a value of 0% corresponds to th OR operator.</em>
 * </p>
 * @param aMinimumShouldMatch the minimum should match
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function setMinimumShouldMatch(
  aMinimumShouldMatch: string
): ExtendedDismaxParserBuilder;

/**
 * Adds a phrase field.
 *
 * <p>
 *    <em>Solr note: this is the 'pf' param.</em>
 * </p>
 * @param aPhraseField a phrase field, a <code>null</code> or whitespace-only value will be ignored
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function addPhraseField(
  aPhraseField: string
): ExtendedDismaxParserBuilder;

/**
 * Removes all currently specified phrase fields.
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function clearPhraseFields(): ExtendedDismaxParserBuilder;

/**
 * Sets a boost query.
 *
 * <p>
 *    <em>Solr note: this is the 'bq' param.</em>
 * </p>
 * @param aBoostQuery the boost query
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function setBoostQuery(aBoostQuery: string): ExtendedDismaxParserBuilder;

/**
 * Adds an additive boost function.
 *
 * <p>
 *    <em>Solr note: this is the 'bf' param.</em>
 * </p>
 * @param aAdditiveBoostFunction an additive boost function, a <code>null</code> or whitespace-only value will be ignored
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function addAdditiveBoostFunction(
  aAdditiveBoostFunction: string
): ExtendedDismaxParserBuilder;

/**
 * Removes all currently specified additive boost functions.
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function clearAdditiveBoostFunctions(): ExtendedDismaxParserBuilder;

/**
 * Adds a a multiplicative boost function.
 *
 * <p>
 *    <em>Solr note: this is the 'boost' param.</em>
 * </p>
 * @param aMultiplicativeBoostFunction a multiplicative boost function, a <code>null</code> or whitespace-only value will be ignored
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function addMultiplicativeBoostFunction(
  aMultiplicativeBoostFunction: string
): ExtendedDismaxParserBuilder;

/**
 * Removes all currently specified multiplicative boost functions.
 * @return this builder
 * @since Sitevision 4.0.2
 */
export function clearMultiplicativeBoostFunctions(): ExtendedDismaxParserBuilder;

/**
 * Creates a Parser component instance using currently specified state/behaviour.
 * @return a parser component
 */
export function build(): Parser;

/**
 * <p>
 *    Builder for creating a multi-field {@link senselogic.sitevision.api.search.searcher.component.Parser} component with specific behaviour.
 * </p>
 *
 * <p>
 *    ExtendedDismaxParserBuilder has several <strong>optional attributes</strong>:
 * </p>
 * <ul>
 *    <li>
 *       <em>query fields (qf)</em>
 *       - The fields to query. Default is the fields specified by the index configuration.
 *       <em>
 *          (Default query fields for the default Node index is:
 *          <code>name.analyzed</code>, <code>title.analyzed</code> and <code>content.analyzed</code>)
 *       </em>
 *    </li>
 *    <li>
 *       <em>user fields (uf)</em>
 *       - The fields a user can specifically address in a query. Default is the value specified by the index configuration.
 *    </li>
 *    <li>
 *       <em>phrase fields (pf)</em>
 *       - The phrase fields that can be used for term proximity. Default is the value specified by the index configuration.
 *    </li>
 *    <li>
 *       <em>minimum should match (mm)</em>
 *       - How terms matching should be handled. Default is the value specified by the index configuration.
 *    </li>
 *    <li>
 *       <em>tiebreaker (tie)</em>
 *       - How terms matching multiple query fields should be handled. Default is the value specified by the index configuration.
 *    </li>
 *    <li>
 *       <em>additive boost function (bf)</em>
 *       - Function that can be used to influence the score (additive). Default is the value specified by the index configuration.
 *    </li>
 *    <li>
 *       <em>multiplicative boost function (boost)</em>
 *       - Function that can be used to influence the score (multiplicative). Default is the value specified by the index configuration.
 *    </li>
 *    <li>
 *       <em>boost query (bq)</em>
 *       - The query to include in the user's query to influence the score. Default is the value specified by the index configuration.
 *    </li>
 * </ul>
 *
 * <p>
 *    Using the ExtendedDismaxParserBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>.
 *    Conceptually you would typically use it like this:
 * </p>
 * <ol>
 *   <li>Get the ExtendedDismaxParserBuilder</li>
 *   <li>Possibly add a query field</li>
 *   <li>Possibly add another query field</li>
 *   <li>...</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    When you have built a <code>Parser</code> instance, you can re-use the ExtendedDismaxParserBuilder to build more instances. Typically like:
 * </p>
 * <ol>
 *   <li>Clear the query fields</li>
 *   <li>Possibly add a query field</li>
 *   <li>Possibly add another query field</li>
 *   <li>...</li>
 *   <li>Do build</li>
 * </ol>
 * <p>
 *    <strong>Example of how this strategy could be implemented in Velocity:</strong>
 * </p>
 * <pre><code>
 *   <em>## Get the builder</em>
 *   #set ($searchFactory = $sitevisionUtils.searchFactory)
 *   #set ($edismaxBuilder = $searchFactory.extendedDismaxParserBuilder)
 *
 *   <em>## Create a Parser</em>
 *   #set ($nameFieldParser = $edismaxBuilder.addQueryField('name.analyzed').build())
 *
 *   <em>## Re-use the builder to create another Parser</em>
 *   #set ($nameAndTitleFieldParser = $edismaxBuilder.addQueryField('title.analyzed').build())
 *
 *   <em>## Re-use the builder to create yet another Parser</em>
 *   #set ($titleAndContentFieldParser = $edismaxBuilder.clearQueryFields().addQueryField('title.analyzed').addQueryField('content.analyzed').build())
 * </code></pre>
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    <em>Solr note: the defType param for this parser is 'edismax'</em>
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.search.SearchFactory#getExtendedDismaxParserBuilder()}.
 *    See {@link senselogic.sitevision.api.search.SearchFactory} for how to obtain an instance of the <code>SearchFactory</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
declare namespace extendedDismaxParserBuilder {
  export {
    addQueryField,
    clearQueryFields,
    setTieBreaker,
    setUserFields,
    setMinimumShouldMatch,
    addPhraseField,
    clearPhraseFields,
    setBoostQuery,
    addAdditiveBoostFunction,
    clearAdditiveBoostFunctions,
    addMultiplicativeBoostFunction,
    clearMultiplicativeBoostFunctions,
    build,
  };
}

export default extendedDismaxParserBuilder;
