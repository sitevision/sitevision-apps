import Source from "../Source";

import JoinCondition from "../JoinCondition";

/**
 * Performs a join between two node-tuple sources.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
interface Join {
  /**
   * Gets the left node-tuple source.
   * @return the left source; non-null
   */
  getLeft(): Source;

  /**
   * Gets the right node-tuple source.
   * @return the right source; non-null
   */
  getRight(): Source;

  /**
   * Gets the join type.
   * @return either <ul> <li>{@link QueryObjectModelConstants#JCR_JOIN_TYPE_INNER},</li> <li>{@link QueryObjectModelConstants#JCR_JOIN_TYPE_LEFT_OUTER},</li> <li>{@link QueryObjectModelConstants#JCR_JOIN_TYPE_RIGHT_OUTER}</li> </ul>
   */
  getJoinType(): string;

  /**
   * Gets the join condition.
   * @return the join condition; non-null
   */
  getJoinCondition(): JoinCondition;
}

export default Join;
