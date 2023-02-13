import type { StaticOperand } from "../StaticOperand";

/**
 * Evaluates to the value of a bind variable.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type BindVariableValue = StaticOperand & {
  /**
   * Gets the name of the bind variable.
   * @return the bind variable name; non-null
   */
  getBindVariableName(): string;
};
