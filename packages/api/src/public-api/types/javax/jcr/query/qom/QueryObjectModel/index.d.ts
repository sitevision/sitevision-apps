import type { Source } from "../Source";
import type { Constraint } from "../Constraint";
import type { Ordering } from "../Ordering";
import type { Column } from "../Column";
import type { Query } from "../../Query";

/**
 * A query in the JCR query object model.
 *  <p>
 *  The JCR query object model describes the queries that can be evaluated by a
 *  JCR repository independent of any particular query language, such as SQL.
 *  <p>
 *  A query consists of: <ul> <li>a source.  When the query is evaluated, the
 *  source evaluates its selectors and the joins between them to produce a
 *  (possibly empty) set of node-tuples.  This is a set of 1-tuples if the query
 *  has one selector (and therefore no joins), a set of 2-tuples if the query has
 *  two selectors (and therefore one join), a set of 3-tuples if the query has
 *  three selectors (two joins), and so forth.</li> <li>an optional constraint.
 *  When the query is evaluated, the constraint filters the set of
 *  node-tuples.</li> <li>a list of zero or more orderings.  The orderings
 *  specify the order in which the node-tuples appear in the query results.  The
 *  relative order of two node-tuples is determined by evaluating the specified
 *  orderings, in list order, until encountering an ordering for which one
 *  node-tuple precedes the other.  If no orderings are specified, or if for none
 *  of the specified orderings does one node-tuple precede the other, then the
 *  relative order of the node-tuples is implementation determined (and may be
 *  arbitrary).</li> <li>a list of zero or more columns to include in the tabular
 *  view of the query results.  If no columns are specified, the columns
 *  available in the tabular view are implementation determined, but minimally
 *  include, for each selector, a column for each single-valued non-residual
 *  property of the selector's node type.</li> </ul>
 *  <p>
 *  The query object model representation of a query is created by factory
 *  methods in the {@link QueryObjectModelFactory}.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type QueryObjectModel = Query & {
  /**
   * Gets the node-tuple source for this query.
   * @return the node-tuple source; non-null
   */
  getSource(): Source;

  /**
   * Gets the constraint for this query.
   * @return the constraint, or null if none
   */
  getConstraint(): Constraint;

  /**
   * Gets the orderings for this query.
   * @return an array of zero or more orderings; non-null
   */
  getOrderings(): Ordering;

  /**
   * Gets the columns for this query.
   * @return an array of zero or more columns; non-null
   */
  getColumns(): Column;
};
