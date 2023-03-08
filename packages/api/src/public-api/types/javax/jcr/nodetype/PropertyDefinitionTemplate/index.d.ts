import type { String } from "../../../../java/lang/String";

import type { Value } from "../../Value";
import type { PropertyDefinition } from "../PropertyDefinition";

/**
 * The <code>PropertyDefinitionTemplate</code> interface extends
 *  <code>PropertyDefinition</code> with the addition of write methods, enabling
 *  the characteristics of a child property definition to be set, after which the
 *  <code>PropertyDefinitionTemplate</code> is added to a
 *  <code>NodeTypeTemplate</code>.
 *  <p>
 *  See the corresponding <code>get</code> methods for each attribute in
 *  <code>PropertyDefinition</code> for the default values assumed when a new
 *  empty <code>PropertyDefinitionTemplate</code> is created (as opposed to one
 *  extracted from an existing <code>NodeType</code>).
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type PropertyDefinitionTemplate = PropertyDefinition & {
  /**
   * Sets the name of the property. This must be a JCR name in either
   *  qualified or expanded form.
   * @param name a JCR name.
   * @throws ConstraintViolationException if <code>name</code> is not a&#xA; syntactically valid JCR name in either qualified or expanded form.
   */
  setName(name: String | string): void;

  /**
   * Sets the auto-create status of the property.
   * @param autoCreated a <code>boolean</code>.
   */
  setAutoCreated(autoCreated: boolean): void;

  /**
   * Sets the mandatory status of the property.
   * @param mandatory a <code>boolean</code>.
   */
  setMandatory(mandatory: boolean): void;

  /**
   * Sets the on-parent-version status of the property.
   * @param opv an <code>int</code> constant member of&#xA; <code>OnParentVersionAction</code>.
   */
  setOnParentVersion(opv: number): void;

  /**
   * Sets the protected status of the property.
   * @param protectedStatus a <code>boolean</code>.
   */
  setProtected(protectedStatus: boolean): void;

  /**
   * Sets the required type of the property.
   * @param type an <code>int</code> constant member of&#xA; <code>PropertyType</code>.
   */
  setRequiredType(type: number): void;

  /**
   * Sets the value constraints of the property.
   * @param constraints a <code>String</code> array.
   */
  setValueConstraints(constraints: String | string[]): void;

  /**
   * Sets the default value (or values, in the case of a multi-value property)
   *  of the property.
   * @param defaultValues a <code>Value</code> array.
   */
  setDefaultValues(defaultValues: Value[]): void;

  /**
   * Sets the multi-value status of the property.
   * @param multiple a <code>boolean</code>.
   */
  setMultiple(multiple: boolean): void;

  /**
   * Sets the queryable status of the property.
   * @param operators an array of String constants. See {@link&#xA; PropertyDefinition#getAvailableQueryOperators()} .
   */
  setAvailableQueryOperators(operators: String | string[]): void;

  /**
   * Sets the full-text-searchable status of the property.
   * @param fullTextSearchable a <code>boolean</code>.
   */
  setFullTextSearchable(fullTextSearchable: boolean): void;

  /**
   * Sets the query-orderable status of the property.
   * @param queryOrderable a <code>boolean</code>.
   */
  setQueryOrderable(queryOrderable: boolean): void;
};
