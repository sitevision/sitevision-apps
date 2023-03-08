import type { String } from "../../../../java/lang/String";

import type { PropertyDefinition } from "../PropertyDefinition";
import type { NodeDefinition } from "../NodeDefinition";

/**
 * The <code>NodeTypeDefinition</code> interface provides methods for
 *  discovering the static definition of a node type. These are accessible both
 *  before and after the node type is registered. Its subclass
 *  <code>NodeType</code> adds methods that are relevant only when the node type
 *  is "live"; that is, after it has been registered. Note that the separate
 *  <code>NodeDefinition</code> interface only plays a significant role in
 *  implementations that support node type registration. In those cases it serves
 *  as the superclass of both <code>NodeType</code> and <code>NodeTypeTemplate</code>.
 *  In implementations that do not support node type registration, only objects
 *  implementing the subinterface <code>NodeType</code> will be encountered.
 * @since JCR 2.0
 */
export type NodeTypeDefinition = {
  /**
   * Returns the name of the node type.
   *  <p>
   *  In implementations that support node type registration, if this
   *  <code>NodeTypeDefinition</code> object is actually a newly-created empty
   *  <code>NodeTypeTemplate</code>, then this method will return
   *  <code>null</code>.
   * @return a <code>String</code>
   * @since JCR 2.0 moved here from JCR 1.0 <code>NodeType</code>.
   */
  getName(): string;

  /**
   * Returns <code>true</code> if this is an abstract node type; returns
   *  <code>false</code> otherwise.
   *  <p>
   *  An abstract node type is one that cannot be assigned as the primary or
   *  mixin type of a node but can be used in the definitions of other node
   *  types as a superclass.
   *  <p>
   *  In implementations that support node type registration, if this
   *  <code>NodeTypeDefinition</code> object is actually a newly-created empty
   *  <code>NodeTypeTemplate</code>, then this method will return
   *  <code>false</code>.
   * @return a <code>boolean</code>
   * @since JCR 2.0
   */
  isAbstract(): boolean;

  /**
   * Returns <code>true</code> if this is a mixin type; returns
   *  <code>false</code> if it is primary.
   *  <p>
   *  In implementations that support node type registration, if this
   *  <code>NodeTypeDefinition</code> object is actually a newly-created empty
   *  <code>NodeTypeTemplate</code>, then this method will return
   *  <code>false</code>.
   * @return a <code>boolean</code>
   * @since JCR 2.0 moved here from JCR 1.0 <code>NodeType</code>.
   */
  isMixin(): boolean;
};
