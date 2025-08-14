import type { String } from "../../../../../../java/lang/String";

/**
 * Utility class for parsing of Velocity Code.
 *
 *  <p>
 *     An instance of this interface can never be directly created and all instances are heavily bound to the Velocity
 *     context they were created for.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 */
export type VelocityEvaluator = {
  /**
   * Renders a template string that is parsed/evaluated by Velocity.
   *
   *  <p>
   *     <strong>Note!</strong> This method is intended for usage from within Velocity only
   *     (e.g. <code>$aVelocityEvaluatorInstance.evaluate($aTemplateString)</code>).
   *  </p>
   * @param aTemplate a String containing the Velocity code to be evaluated
   */
  evaluate(aTemplate: String | string): void;
};
