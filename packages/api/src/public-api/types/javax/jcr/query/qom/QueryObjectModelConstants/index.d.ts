import type { String } from "../../../../../java/lang/String";

/**
 * Defines constants used in the query object model.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type QueryObjectModelConstants = {
  /**
 * An inner join.
  
    */
  JCR_JOIN_TYPE_INNER: string;

  /**
 * A left-outer join.
  
    */
  JCR_JOIN_TYPE_LEFT_OUTER: string;

  /**
 * A right-outer join.
  
    */
  JCR_JOIN_TYPE_RIGHT_OUTER: string;

  /**
 * The "<code>=</code>" comparison operator.
  
    */
  JCR_OPERATOR_EQUAL_TO: string;

  /**
 * The "<code>!=</code>" comparison operator.
  
    */
  JCR_OPERATOR_NOT_EQUAL_TO: string;

  /**
 * The "<code>&lt;</code>" comparison operator.
  
    */
  JCR_OPERATOR_LESS_THAN: string;

  /**
 * The "<code>&lt;=</code>" comparison operator.
  
    */
  JCR_OPERATOR_LESS_THAN_OR_EQUAL_TO: string;

  /**
 * The "<code>&gt;</code>" comparison operator.
  
    */
  JCR_OPERATOR_GREATER_THAN: string;

  /**
 * The "<code>&gt;=</code>" comparison operator.
  
    */
  JCR_OPERATOR_GREATER_THAN_OR_EQUAL_TO: string;

  /**
 * The "<code>like</code>" comparison operator.
  
    */
  JCR_OPERATOR_LIKE: string;

  /**
 * Ascending order.
  
    */
  JCR_ORDER_ASCENDING: string;

  /**
 * Descending order.
  
    */
  JCR_ORDER_DESCENDING: string;
};
