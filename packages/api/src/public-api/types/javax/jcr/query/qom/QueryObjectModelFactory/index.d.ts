import type { Source } from "../Source";
import type { Constraint } from "../Constraint";
import type { Ordering } from "../Ordering";
import type { Column } from "../Column";
import type { QueryObjectModel } from "../QueryObjectModel";
import type { String } from "../../../../../java/lang/String";
import type { Selector } from "../Selector";
import type { JoinCondition } from "../JoinCondition";
import type { Join } from "../Join";
import type { EquiJoinCondition } from "../EquiJoinCondition";
import type { SameNodeJoinCondition } from "../SameNodeJoinCondition";
import type { ChildNodeJoinCondition } from "../ChildNodeJoinCondition";
import type { DescendantNodeJoinCondition } from "../DescendantNodeJoinCondition";
import type { And } from "../And";
import type { Or } from "../Or";
import type { Not } from "../Not";
import type { DynamicOperand } from "../DynamicOperand";
import type { StaticOperand } from "../StaticOperand";
import type { Comparison } from "../Comparison";
import type { PropertyExistence } from "../PropertyExistence";
import type { FullTextSearch } from "../FullTextSearch";
import type { SameNode } from "../SameNode";
import type { ChildNode } from "../ChildNode";
import type { DescendantNode } from "../DescendantNode";
import type { PropertyValue } from "../PropertyValue";
import type { Length } from "../Length";
import type { NodeName } from "../NodeName";
import type { NodeLocalName } from "../NodeLocalName";
import type { FullTextSearchScore } from "../FullTextSearchScore";
import type { LowerCase } from "../LowerCase";
import type { UpperCase } from "../UpperCase";
import type { BindVariableValue } from "../BindVariableValue";
import type { Value } from "../../../Value";
import type { Literal } from "../Literal";
import type { QueryObjectModelConstants } from "../QueryObjectModelConstants";

/**
 * A <code>QueryObjectModelFactory</code> creates instances of the JCR query
 *  object model.
 *  <p>
 *  Refer to {@link QueryObjectModel} for a description of the query object
 *  model.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type QueryObjectModelFactory = QueryObjectModelConstants & {
  /**
   * Creates a query with one or more selectors.
   * @param source the node-tuple source; non-null
   * @param constraint the constraint, or null if none
   * @param orderings zero or more orderings; null is equivalent to a&#xA; zero-length array
   * @param columns the columns; null is equivalent to a zero-length array
   * @return the query; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test and the&#xA; parameters given fail that test. See the individual QOM factory methods&#xA; for the validity criteria of each query element.
   * @throws RepositoryException if another error occurs.
   */
  createQuery(
    source: Source,
    constraint: Constraint,
    orderings: Ordering[],
    columns: Column[]
  ): QueryObjectModel;

  /**
   * Selects a subset of the nodes in the repository based on node type.
   *  <p>
   *  The query is invalid if <code>nodeTypeName</code> or
   *  <code>selectorName</code> is not a syntactically valid JCR name.
   *  <p>
   *  The query is invalid if <code>selectorName</code>} is identical to the
   *  name of another selector in the query.
   *  <p>
   *  The query is also invalid if <code>nodeType</code> is not a valid JCR
   *  name or is a valid JCR name but not the name of a node type available in
   *  the repository.
   * @param nodeTypeName the name of the required node type; non-null
   * @param selectorName the selector name; non-null
   * @return the selector; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  selector(
    nodeTypeName: String | string,
    selectorName: String | string
  ): Selector;

  /**
   * Performs a join between two node-tuple sources.
   *  <p>
   *  The query is invalid if <code>left</code> is the same source as
   *  <code>right</code>.
   * @param left the left node-tuple source; non-null
   * @param right the right node-tuple source; non-null
   * @param joinType either <ul> <li>{@link QueryObjectModelConstants#JCR_JOIN_TYPE_INNER},</li>&#xA; <li>{@link QueryObjectModelConstants#JCR_JOIN_TYPE_LEFT_OUTER},</li>&#xA; <li>{@link QueryObjectModelConstants#JCR_JOIN_TYPE_RIGHT_OUTER}</li>&#xA; </ul>
   * @param joinCondition the join condition; non-null
   * @return the join; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  join(
    left: Source,
    right: Source,
    joinType: String | string,
    joinCondition: JoinCondition
  ): Join;

  /**
   * Tests whether the value of a property in a first selector is equal to the
   *  value of a property in a second selector.
   *  <p>
   *  The query is invalid if:
   *  </p>
   *  <ul>
   *     <li><code>selector1</code> is not the name of a selector in the query, or</li>
   *     <li><code>selector2</code> is not the name of a selector in the query, or</li>
   *     <li><code>selector1</code> is the same as <code>selector2</code>, or</li>
   *     <li><code>property1</code> is not a syntactically valid JCR name, or</li>
   *     <li><code>property2</code> is not a syntactically valid JCR name, or</li>
   *     <li>the value of <code>property1</code> is not the same property type as the value of <code>property2</code>, or</li>
   *     <li><code>property1</code> is a multi-valued property, or</li>
   *     <li><code>property2</code> is a multi-valued property, or</li>
   *     <li><code>property1</code> is a <code>BINARY</code> property, or</li>
   *     <li><code>property2</code> is a <code>BINARY</code> property.</li>
   *  </ul>
   * @param selector1Name the name of the first selector; non-null
   * @param property1Name the property name in the first selector; non-null
   * @param selector2Name the name of the second selector; non-null
   * @param property2Name the property name in the second selector; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implementation chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  equiJoinCondition(
    selector1Name: String | string,
    property1Name: String | string,
    selector2Name: String | string,
    property2Name: String | string
  ): EquiJoinCondition;

  /**
   * Tests whether a first selector's node is the same as a node identified by
   *  relative path from a second selector's node.
   *  <p>
   *  The query is invalid if: <ul> <li><code>selector1</code> is not the name
   *  of a selector in the query, or</li> <li><code>selector2</code> is not the
   *  name of a selector in the query, or</li> <li><code>selector1</code> is
   *  the same as selector2, or</li> <li><code>selector2Path</code> is not a
   *  syntactically valid relative path.  Note, however, that if the path is
   *  syntactically valid but does not identify a node visible to the current
   *  session, the query is valid but the constraint is not satisfied.</li>
   *  </ul>
   * @param selector1Name the name of the first selector; non-null
   * @param selector2Name the name of the second selector; non-null
   * @param selector2Path the path relative to the second selector; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  sameNodeJoinCondition(
    selector1Name: String | string,
    selector2Name: String | string,
    selector2Path: String | string
  ): SameNodeJoinCondition;

  /**
   * Tests whether a first selector's node is a child of a second selector's
   *  node.
   *  <p>
   *  The query is invalid if: <ul> <li><code>childSelector</code> is not the
   *  name of a selector in the query, or</li> <li><code>parentSelector</code>
   *  is not the name of a selector in the query, or</li>
   *  <li><code>childSelector</code> is the same as <code>parentSelector</code>.
   *  </ul>
   * @param childSelectorName the name of the child selector; non-null
   * @param parentSelectorName the name of the parent selector; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  childNodeJoinCondition(
    childSelectorName: String | string,
    parentSelectorName: String | string
  ): ChildNodeJoinCondition;

  /**
   * Tests whether a first selector's node is a descendant of a second
   *  selector's node.
   *  <p>
   *  The query is invalid if: <ul> <li><code>descendantSelector</code> is not
   *  the name of a selector in the query, or</li> <li><code>ancestorSelector</code>
   *  is not the name of a selector in the query, or</li>
   *  <li><code>descendantSelector</code> is the same as
   *  <code>ancestorSelector</code>. </ul>
   * @param descendantSelectorName the name of the descendant selector;&#xA; non-null
   * @param ancestorSelectorName the name of the ancestor selector; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  descendantNodeJoinCondition(
    descendantSelectorName: String | string,
    ancestorSelectorName: String | string
  ): DescendantNodeJoinCondition;

  /**
   * Performs a logical conjunction of two other constraints.
   * @param constraint1 the first constraint; non-null
   * @param constraint2 the second constraint; non-null
   * @return the <code>And</code> constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  and(constraint1: Constraint, constraint2: Constraint): And;

  /**
   * Performs a logical disjunction of two other constraints.
   * @param constraint1 the first constraint; non-null
   * @param constraint2 the second constraint; non-null
   * @return the <code>Or</code> constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  or(constraint1: Constraint, constraint2: Constraint): Or;

  /**
   * Performs a logical negation of another constraint.
   * @param constraint the constraint to be negated; non-null
   * @return the <code>Not</code> constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  not(constraint: Constraint): Not;

  /**
   * Filters node-tuples based on the outcome of a binary operation.
   * @param operand1 the first operand; non-null
   * @param operator the operator; either <ul> <li>{@link&#xA; QueryObjectModelConstants#JCR_OPERATOR_EQUAL_TO},</li> <li>{@link&#xA; QueryObjectModelConstants#JCR_OPERATOR_NOT_EQUAL_TO},</li> <li>{@link&#xA; QueryObjectModelConstants#JCR_OPERATOR_LESS_THAN},</li> <li>{@link&#xA; QueryObjectModelConstants#JCR_OPERATOR_LESS_THAN_OR_EQUAL_TO},</li>&#xA; <li>{@link QueryObjectModelConstants#JCR_OPERATOR_GREATER_THAN},</li>&#xA; <li>{@link QueryObjectModelConstants#JCR_OPERATOR_GREATER_THAN_OR_EQUAL_TO},&#xA; or</li> <li>{@link QueryObjectModelConstants#JCR_OPERATOR_LIKE}</li>&#xA; </ul>
   * @param operand2 the second operand; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  comparison(
    operand1: DynamicOperand,
    operator: String | string,
    operand2: StaticOperand
  ): Comparison;

  /**
   * Tests the existence of a property in the specified selector.
   *  <p>
   *  The query is invalid if: <ul> <li><code>selector</code> is not the name
   *  of a selector in the query, or</li> <li><code>property</code> is not a
   *  syntactically valid JCR name.</li> </ul>
   * @param selectorName the selector name; non-null
   * @param propertyName the property name; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  propertyExistence(
    selectorName: String | string,
    propertyName: String | string
  ): PropertyExistence;

  /**
   * Performs a full-text search against the specified selector.
   *  <p>
   *     The query is invalid if:
   *  </p>
   *  <ul>
   *     <li><code>selector</code> is not the name of a selector in the query, or</li>
   *     <li><code>property</code> is specified but is not a syntactically valid JCR name, or</li>
   *     <li><code>fullTextSearchExpression</code> does not evaluate to a JCR STRING Value (or convertible to STRING) that conforms to the full text search grammar.</li>
   *  </ul>
   *
   *  <p>
   *  If <code>property</code> is specified but, for a node-tuple, the selector
   *  node does not have a property named <code>property</code>, the query is
   *  valid but the constraint is not satisfied.
   *  </p>
   * @param selectorName the selector name; non-null
   * @param propertyName the property name, or null to search all full-text&#xA; indexed properties of the node (or node subgraph, in some&#xA; implementations)
   * @param fullTextSearchExpression the full-text search expression as a&#xA; static operand; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  fullTextSearch(
    selectorName: String | string,
    propertyName: String | string,
    fullTextSearchExpression: StaticOperand
  ): FullTextSearch;

  /**
   * Tests whether a node in the specified selector is reachable by a
   *  specified absolute path.
   *  <p>
   *  The query is invalid if: <ul> <li><code>selector</code> is not the name
   *  of a selector in the query, or</li> <li><code>path</code> is not a
   *  syntactically valid absolute path.  Note, however, that if the path is
   *  syntactically valid but does not identify a node in the repository (or
   *  the node is not visible to this session, because of access control
   *  constraints), the query is valid but the constraint is not
   *  satisfied.</li> </ul>
   * @param selectorName the selector name; non-null
   * @param path an absolute path; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  sameNode(selectorName: String | string, path: String | string): SameNode;

  /**
   * Tests whether a node in the specified selector is a child of a node
   *  reachable by a specified absolute path. The query is invalid if: <ul>
   *  <li><code>selector</code> is not the name of a selector in the query,
   *  or</li> <li><code>path</code> is not a syntactically valid absolute path.
   *  Note, however, that if the path is syntactically valid but does not
   *  identify a node in the repository (or the node is not visible to this
   *  session, because of access control constraints), the query is valid but
   *  the constraint is not satisfied.</li> </ul>
   * @param selectorName the selector name; non-null
   * @param path an absolute path; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  childNode(selectorName: String | string, path: String | string): ChildNode;

  /**
   * Tests whether a node in the specified selector is a descendant of a node
   *  reachable by a specified absolute path.
   *  <p>
   *  The query is invalid if: <ul> <li><code>selector</code> is not the name
   *  of a selector in the query, or</li> <li><code>path</code> is not a
   *  syntactically valid absolute path.  Note, however, that if the path is
   *  syntactically valid but does not identify a node in the repository (or
   *  the node is not visible to this session, because of access control
   *  constraints), the query is valid but the constraint is not
   *  satisfied.</li> </ul>
   * @param selectorName the selector name; non-null
   * @param path an absolute path; non-null
   * @return the constraint; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  descendantNode(
    selectorName: String | string,
    path: String | string
  ): DescendantNode;

  /**
   * Evaluates to the value (or values, if multi-valued) of a property in the
   *  specified selector.
   *  <p>
   *  The query is invalid if: <ul> <li><code>selector</code> is not the name
   *  of a selector in the query, or</li> <li><code>property</code> is not a
   *  syntactically valid JCR name.</li> </ul>
   * @param selectorName the selector name; non-null
   * @param propertyName the property name; non-null
   * @return the operand; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  propertyValue(
    selectorName: String | string,
    propertyName: String | string
  ): PropertyValue;

  /**
   * Evaluates to the length (or lengths, if multi-valued) of a property.
   * @param propertyValue the property value for which to compute the length;&#xA; non-null
   * @return the operand; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  length(propertyValue: PropertyValue): Length;

  /**
   * Evaluates to a <code>NAME</code> value equal to the prefix-qualified name
   *  of a node in the specified selector.
   *  <p>
   *  The query is invalid if <code>selector</code> is not the name of a
   *  selector in the query.
   * @param selectorName the selector name; non-null
   * @return the operand; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  nodeName(selectorName: String | string): NodeName;

  /**
   * Evaluates to a <code>NAME</code> value equal to the local (unprefixed)
   *  name of a node in the specified selector.
   *  <p>
   *  The query is invalid if <code>selector</code> is not the name of a
   *  selector in the query.
   * @param selectorName the selector name; non-null
   * @return the operand; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  nodeLocalName(selectorName: String | string): NodeLocalName;

  /**
   * Evaluates to a <code>DOUBLE</code> value equal to the full-text search
   *  score of a node in the specified selector.
   *  <p>
   *  The query is invalid if <code>selector</code> is not the name of a
   *  selector in the query.
   * @param selectorName the selector name; non-null
   * @return the operand; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  fullTextSearchScore(selectorName: String | string): FullTextSearchScore;

  /**
   * Evaluates to the lower-case string value (or values, if multi-valued) of
   *  an operand.
   * @param operand the operand whose value is converted to a lower-case&#xA; string; non-null
   * @return the operand; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  lowerCase(operand: DynamicOperand): LowerCase;

  /**
   * Evaluates to the upper-case string value (or values, if multi-valued) of
   *  an operand.
   * @param operand the operand whose value is converted to a upper-case&#xA; string; non-null
   * @return the operand; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  upperCase(operand: DynamicOperand): UpperCase;

  /**
   * Evaluates to the value of a bind variable.
   *  <p>
   *  The query is invalid if <code>bindVariableName</code> is not a valid JCR
   *  prefix.
   * @param bindVariableName the bind variable name; non-null
   * @return the operand; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test.
   * @throws RepositoryException if the operation otherwise fails
   */
  bindVariable(bindVariableName: String | string): BindVariableValue;

  /**
   * Evaluates to a literal value.
   * @param literalValue the value
   * @return the literal; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses&#xA; to perform that test (and not leave it&#xA; until later, on {@link #createQuery}),&#xA; and the parameter given fails that test
   * @throws RepositoryException if the operation otherwise fails
   */
  literal(literalValue: Value): Literal;

  /**
   * Orders by the value of the specified operand, in ascending order. The
   *  query is invalid if <code>operand</code> does not evaluate to a scalar
   *  value.
   * @param operand the operand by which to order; non-null
   * @return the ordering
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  ascending(operand: DynamicOperand): Ordering;

  /**
   * Orders by the value of the specified operand, in descending order. The
   *  query is invalid if <code>operand</code> does not evaluate to a scalar
   *  value.
   * @param operand the operand by which to order; non-null
   * @return the ordering
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  descending(operand: DynamicOperand): Ordering;

  /**
   * Identifies a property in the specified selector to include in the tabular
   *  view of query results.
   *  <p>
   *  The query is invalid if: <ul> <li><code>selectorName</code> is not the name
   *  of a selector in the query, or</li>
   *  <li><code>propertyName</code> is specified but does not evaluate to a scalar
   *  value, or</li> <li><code>propertyName</code> is specified but
   *  <code>columnName</code> is omitted, or</li> <li><code>propertyName</code> is
   *  omitted but <code>columnName</code> is specified, or</li> <li>the columns
   *  in the tabular view are not uniquely named, whether those column names
   *  are specified by <code>columnName</code> (if <code>propertyName</code> is
   *  specified) or generated as described above (if <code>propertyName</code> is
   *  omitted).</li> </ul> If <code>propertyName</code> is specified but, for a
   *  node-tuple, the selector node does not have a property named
   *  <code>propertyName</code>, the query is valid and the column has null value.
   * @param selectorName the selector name; non-null
   * @param propertyName the property name, or null to include a column for&#xA; each single-value non-residual property of the selector's node type
   * @param columnName the column name; must be null if <code>propertyName</code> is null;&#xA; must be non-null if <code>propertyName</code> is non-null.
   * @return the column; non-null
   * @throws InvalidQueryException if a particular validity test is possible&#xA; on this method, the implemention chooses to perform that test (and not&#xA; leave it until later, on {@link #createQuery}), and the parameters given&#xA; fail that test
   * @throws RepositoryException if the operation otherwise fails
   */
  column(
    selectorName: String | string,
    propertyName: String | string,
    columnName: String | string
  ): Column;
};
