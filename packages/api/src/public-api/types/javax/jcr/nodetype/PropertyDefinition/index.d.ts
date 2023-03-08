import type { String } from "../../../../java/lang/String";
import type { Value } from "../../Value";

import type { ItemDefinition } from "../ItemDefinition";

/**
 * A property definition. Used in node type definitions.
  
    */
export type PropertyDefinition = ItemDefinition & {
  /**
   * Reports whether this property can have multiple values. Note that the
   *  <code>isMultiple</code> flag is special in that a given node type may
   *  have two property definitions that are identical in every respect except
   *  for the their <code>isMultiple</code> status. For example, a node type
   *  can specify two string properties both called <code>X</code>, one of
   *  which is multi-valued and the other not. An example of such a node type
   *  is <code>nt:unstructured</code>.
   *  <p>
   *  In implementations that support node type registration, if this
   *  <code>PropertyDefinition</code> object is actually a newly-created empty
   *  <code>PropertyDefinitionTemplate</code>, then this method will return
   *  <code>false</code>.
   * @return a <code>boolean</code>
   */
  isMultiple(): boolean;
};
