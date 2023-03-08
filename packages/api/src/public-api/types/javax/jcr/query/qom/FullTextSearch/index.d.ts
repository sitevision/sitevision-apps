import type { String } from "../../../../../java/lang/String";
import type { StaticOperand } from "../StaticOperand";
import type { Constraint } from "../Constraint";

/**
 * Performs a full-text search.
 *  <p>
 *  The full-text search expression is evaluated against the set of full-text
 *  indexed properties within the full-text search scope.  If {@link
 *  #getPropertyName property} is specified, the full-text search scope is the
 *  property of that name on the {@link #getSelectorName selector} node in the
 *  node-tuple; otherwise the full-text search scope is all properties of the
 *  {@link #getSelectorName selector} node (or, in some implementations, all
 *  properties in the node subgraph).
 *  <p>
 *  Which properties (if any) in a repository are full-text indexed is
 *  implementation determined.
 *  <p>
 *  It is also implementation determined whether {@link #getFullTextSearchExpression
 *  fullTextSearchExpression} is independently evaluated against each full-text
 *  indexed property in the full-text search scope, or collectively evaluated
 *  against the set of such properties using some implementation-determined
 *  mechanism.
 *  <p>
 *  Similarly, for multi-valued properties, it is implementation determined
 *  whether {@link #getFullTextSearchExpression fullTextSearchExpression} is
 *  independently evaluated against each element in the array of values, or
 *  collectively evaluated against the array of values using some
 *  implementation-determined mechanism.
 *  <p>
 *  At minimum, an implementation must support the following {@link
 *  #getFullTextSearchExpression fullTextSearchExpression} grammar:
 *  </p>
 *  <pre>
 *     fullTextSearchExpression ::= [-]term {whitespace [OR] whitespace [-]term}
 *     term ::= word | '"' word {whitespace word} '"'
 *     word ::= (A string containing no whitespace)
 *     whitespace ::= (A string of only whitespace)
 *  </pre>
 *  <p>
 *  A query satisfies a <code>FullTextSearch</code> constraint if the value (or
 *  values) of the full-text indexed properties within the full-text search scope
 *  satisfy the specified {@link #getFullTextSearchExpression
 *  fullTextSearchExpression}, evaluated as follows:
 *  </p>
 *  <ul>
 *     <li>
 *        A term not preceded with "<code>-</code>" (minus sign) is satisfied only if the value contains that term.
 *     </li>
 *     <li>
 *        A term preceded with "<code>-</code>" (minus sign) is satisfied only if the value does not contain that term.
 *     </li>
 *     <li>
 *        Terms separated by whitespace are implicitly "ANDed".
 *     </li>
 *     <li>
 *        Terms separated by "<code>OR</code>" are "ORed".
 *     </li>
 *     <li>
 *        "AND" has higher precedence than "OR".
 *     </li>
 *     <li>
 *        Within a term, each double quote (<code>"</code>), "<code>-</code>" (minus sign), and "<code>\</code>" (backslash)
 *        must be escaped by a preceding "<code>\</code>" (backslash).
 *     </li>
 *  </ul>
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type FullTextSearch = Constraint & {
  /**
   * Gets the name of the selector against which to apply this constraint.
   * @return the selector name; non-null
   */
  getSelectorName(): string;

  /**
   * Gets the name of the property.
   * @return the property name if the full-text search scope is a property,&#xA; otherwise null if the full-text search scope is the node (or node&#xA; subgraph, in some implementations).
   */
  getPropertyName(): string;

  /**
   * Gets the full-text search expression.
   * @return the full-text search expression; non-null
   */
  getFullTextSearchExpression(): StaticOperand;
};
