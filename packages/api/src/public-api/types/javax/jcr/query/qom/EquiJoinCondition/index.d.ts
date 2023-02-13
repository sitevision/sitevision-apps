import type { JoinCondition } from "../JoinCondition";

/**
 * Tests whether the value of a property in a first selector is equal to the
 * value of a property in a second selector.
 * <p>
 * A node-tuple satisfies the constraint only if: <ul> <li>{@link
 * #getSelector1Name selector1} has a property named {@link #getProperty1Name
 * property1}, and</li> <li>{@link #getSelector2Name selector2} has a property
 * named {@link #getProperty2Name property2}, and</li> <li>the value of {@link
 * #getProperty1Name property1} equals the value of {@link #getProperty2Name
 * property2}</li> </ul>
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type EquiJoinCondition = JoinCondition & {
  /**
   * Gets the name of the first selector.
   * @return the selector name; non-null
   */
  getSelector1Name(): string;

  /**
   * Gets the property name in the first selector.
   * @return the property name; non-null
   */
  getProperty1Name(): string;

  /**
   * Gets the name of the second selector.
   * @return the selector name; non-null
   */
  getSelector2Name(): string;

  /**
   * Gets the property name in the second selector.
   * @return the property name; non-null
   */
  getProperty2Name(): string;
};
