/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../../../java/lang/String";

import type { List } from "../../../../java/util/List";
import type { NodeTypeDefinition } from "../NodeTypeDefinition";

/**
 * The <code>NodeTypeTemplate</code> interface is used to define node types which
 *  are then registered through the <code>NodeTypeManager.registerNodeType</code> method.
 *  <p>
 *  <code>NodeTypeTemplate</code>, like <code>NodeType</code>, is a subclass of
 *  <code>NodeTypeDefinition</code> so it shares with <code>NodeType</code> those
 *  methods that are relevant to a static definition. In addition,
 *  <code>NodeTypeTemplate</code> provides methods for setting the attributes of
 *  the definition.
 *  <p>
 *  See the corresponding <code>get</code> methods for each attribute in
 *  <code>NodeTypeDefinition</code> for the default values assumed when a new
 *  empty <code>NodeTypeTemplate</code> is created (as opposed to one extracted
 *  from an existing <code>NodeType</code>).
 *
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
 * @since JCR 2.0
 */
export type NodeTypeTemplate = NodeTypeDefinition & {
  /**
   * Sets the name of the node type. This must be a JCR name in either
   *  qualified or expanded form.
   * @param name a JCR name.
   * @throws ConstraintViolationException if <code>name</code> is not a&#xA; syntactically valid JCR name in either qualified or expanded form.
   */
  setName(name: String | string): void;

  /**
   * Sets the names of the supertypes of the node type.
   *  These must be a JCR names in either
   *  qualified or expanded form.
   * @param names an array of JCR names.
   * @throws ConstraintViolationException if <code>names</code> includes a&#xA; name that is not a syntactically valid JCR name in either qualified or expanded form.
   */
  setDeclaredSuperTypeNames(names: String[] | string[]): void;

  /**
   * Sets the abstract flag of the node type.
   * @param abstractStatus a <code>boolean</code>.
   */
  setAbstract(abstractStatus: boolean): void;

  /**
   * Sets the mixin flag of the node type.
   * @param mixin a <code>boolean</code>.
   */
  setMixin(mixin: boolean): void;

  /**
   * Sets the orderable child nodes flag of the node type.
   * @param orderable a <code>boolean</code>.
   */
  setOrderableChildNodes(orderable: boolean): void;

  /**
   * Sets the name of the primary item. This must be a JCR name in either
   *  qualified or expanded form.
   * @param name a JCR name.
   * @throws ConstraintViolationException if <code>name</code> is not a&#xA; syntactically valid JCR name in either qualified or expanded form.
   */
  setPrimaryItemName(name: String | string): void;

  /**
   * Sets the queryable status of the node type.
   * @param queryable a <code>boolean</code>.
   */
  setQueryable(queryable: boolean): void;

  /**
   * Returns a mutable <code>List</code> of <code>PropertyDefinitionTemplate</code>
   *  objects. To define a new <code>NodeTypeTemplate</code> or change an
   *  existing one, <code>PropertyDefinitionTemplate</code> objects can be
   *  added to or removed from this <code>List</code>.
   * @return a mutable <code>List</code> of <code>PropertyDefinitionTemplate</code>&#xA; objects.
   */
  getPropertyDefinitionTemplates(): List;

  /**
   * Returns a mutable <code>List</code> of <code>NodeDefinitionTemplate</code>
   *  objects. To define a new <code>NodeTypeTemplate</code> or change an
   *  existing one, <code>NodeDefinitionTemplate</code> objects can be added to
   *  or removed from this <code>List</code>.
   * @return a mutable <code>List</code> of <code>NodeDefinitionTemplate</code>&#xA; objects.
   */
  getNodeDefinitionTemplates(): List;
};
