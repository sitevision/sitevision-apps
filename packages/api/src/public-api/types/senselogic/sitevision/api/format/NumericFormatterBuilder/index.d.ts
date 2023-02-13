import type { NumericFormatter } from "../NumericFormatter";
import type { Builder } from "../../base/Builder";

/**
 * Builder for creating {@link NumericFormatter} instances.
 *
 * <p>
 *    <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *    more information about Builders and how to work with them!
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link FormatterBuilderFactory}.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 6.1
 */
export type NumericFormatterBuilder = Builder & {
  /**
   * Set whether or not grouping will be used in this formatter.
   *
   * <p>
   *    <em>This method is conceptually equivalent with <code>java.text.NumberFormat.setGroupingUsed(boolean)</code>.</em>
   * </p>
   * @param aUseGrouping true to use grouping, false otherwise
   * @return this builder
   */
  setUseGrouping(aUseGrouping: boolean): NumericFormatterBuilder;

  /**
   * Sets the minimum number of digits allowed in the integer portion of a number.
   *
   * <p>
   *    <em>This method is conceptually equivalent with <code>java.text.NumberFormat.setMinimumIntegerDigits(int)</code>.</em>
   * </p>
   * @param aMinIntegerDigits the minimum number of integer digits to be shown
   * @return this builder
   */
  setMinIntegerDigits(aMinIntegerDigits: number): NumericFormatterBuilder;

  /**
   * Sets the maximum number of digits allowed in the integer portion of a number.
   *
   * <p>
   *    <em>This method is conceptually equivalent with <code>java.text.NumberFormat.setMaximumIntegerDigits(int)</code>.</em>
   * </p>
   * @param aMaxIntegerDigits the maximum number of integer digits to be shown
   * @return this builder
   */
  setMaxIntegerDigits(aMaxIntegerDigits: number): NumericFormatterBuilder;

  /**
   * Sets the minimum number of digits allowed in the fraction portion of a number.
   *
   * <p>
   *    <em>This method is conceptually equivalent with <code>java.text.NumberFormat.setMinimumFractionDigits(int)</code>.</em>
   * </p>
   * @param aMinFractionDigits the minimum number of fraction digits to be shown
   * @return this builder
   */
  setMinFractionDigits(aMinFractionDigits: number): NumericFormatterBuilder;

  /**
   * Sets the maximum number of digits allowed in the fraction portion of a number.
   *
   * <p>
   *    <em>This method is conceptually equivalent with <code>java.text.NumberFormat.setMaximumFractionDigits(int)</code>.</em>
   * </p>
   * @param aMaxFractionDigits the maximum number of fraction digits to be shown
   * @return this builder
   */
  setMaxFractionDigits(aMaxFractionDigits: number): NumericFormatterBuilder;

  /**
   * Creates a NumericFormatter instance using currently specified state/behaviour.
   * @return a numeric formatter
   */
  build(): NumericFormatter;
};
