import type { Operand } from "../Operand";

/**
 * An operand whose value can be determined from static analysis of the query,
 *  prior to its evaluation.
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type StaticOperand = Operand & {};
