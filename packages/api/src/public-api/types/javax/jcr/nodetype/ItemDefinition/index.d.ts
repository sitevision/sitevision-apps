import type { NodeType } from "../NodeType";
import type { String } from "../../../../java/lang/String";

/**
 * Superclass of {@link NodeDefinition} and {@link PropertyDefinition}.
  
    */
export type ItemDefinition = {
  /**
   * Reports whether the child item is protected. In level 2 implementations,
   *  a protected item is one that cannot be removed (except by removing its
   *  parent) or modified through the the standard write methods of this API
   *  (that is, <code>Item.remove</code>, <code>Node.addNode</code>,
   *  <code>Node.setProperty</code> and <code>Property.setValue</code>).
   *  <p>
   *  A protected node may be removed or modified (in a level 2
   *  implementation), however, through some mechanism not defined by this
   *  specification or as a side-effect of operations other than the standard
   *  write methods of the API.
   *  <p>
   *  In implementations that support node type registration, if this
   *  <code>ItemDefinition</code> object is actually a newly-created empty
   *  <code>PropertyDefinitionTemplate</code> or <code>NodeDefinitionTemplate</code>,
   *  then this method will return <code>false</code>.
   * @return a <code>boolean</code>.
   */
  isProtected(): boolean;
};
