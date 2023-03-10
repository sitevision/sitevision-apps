import type { String } from "../../../../java/lang/String";

import type { NodeDefinition } from "../NodeDefinition";

/**
 * The <code>NodeDefinitionTemplate</code> interface extends
 *  <code>NodeDefinition</code> with the addition of write methods, enabling the
 *  characteristics of a child node definition to be set, after which the
 *  <code>NodeDefinitionTemplate</code> is added to a <code>NodeTypeTemplate</code>.
 *  <p>
 *  See the corresponding <code>get</code> methods for each attribute in
 *  <code>NodeDefinition</code> for the default values assumed when a new empty
 *  <code>NodeDefinitionTemplate</code> is created (as opposed to one extracted
 *  from an existing <code>NodeType</code>).
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type NodeDefinitionTemplate = NodeDefinition & {
  /**
   * Sets the name of the node. This must be a JCR name in either
   *  qualified or expanded form.
   * @param name a JCR name.
   * @throws ConstraintViolationException if <code>name</code> is not a&#xA; syntactically valid JCR name in either qualified or expanded form.
   */
  setName(name: String | string): void;

  /**
   * Sets the auto-create status of the node.
   * @param autoCreated a <code>boolean</code>.
   */
  setAutoCreated(autoCreated: boolean): void;

  /**
   * Sets the mandatory status of the node.
   * @param mandatory a <code>boolean</code>.
   */
  setMandatory(mandatory: boolean): void;

  /**
   * Sets the on-parent-version status of the node.
   * @param opv an <code>int</code> constant member of&#xA; <code>OnParentVersionAction</code>.
   */
  setOnParentVersion(opv: number): void;

  /**
   * Sets the protected status of the node.
   * @param protectedStatus a <code>boolean</code>.
   */
  setProtected(protectedStatus: boolean): void;

  /**
   * Sets the names of the required primary types of this node.
   *  These must be a JCR names in either qualified or expanded form.
   * @param names an array of JCR names.
   * @throws ConstraintViolationException if <code>names</code> includes a&#xA; name that is not a syntactically valid JCR name in either qualified or expanded form.
   */
  setRequiredPrimaryTypeNames(names: String[] | string[]): void;

  /**
   * Sets the name of the default primary type of this node.
   *  This must be a JCR name in either qualified or expanded form.
   * @param name a JCR name.
   * @throws ConstraintViolationException if <code>name</code> is not a&#xA; syntactically valid JCR name in either qualified or expanded form.
   */
  setDefaultPrimaryTypeName(name: String | string): void;

  /**
   * Sets the same-name sibling status of this node.
   * @param allowSameNameSiblings a <code>boolean</code>.
   */
  setSameNameSiblings(allowSameNameSiblings: boolean): void;
};
