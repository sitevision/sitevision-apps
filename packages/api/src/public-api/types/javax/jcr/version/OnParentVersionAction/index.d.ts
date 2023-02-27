import type { Object } from "../../../../java/lang/Object";

import type { String } from "../../../../java/lang/String";

/**
 * The possible actions specified by the <code>onParentVersion</code> attribute
 *  in a property definition within a node type definition.
 *  <p>
 *  This interface defines the following actions: <UL> <LI><code>COPY</code>
 *  <LI><code>VERSION</code> <LI><code>INITIALIZE</code> <LI><code>COMPUTE</code>
 *  <LI><code>IGNORE</code> <LI><code>ABORT</code> </UL>
 *  <p>
 *  Every item (node or property) in the repository has a status indicator that
 *  governs what happens to that item when its parent node is versioned. This
 *  status is defined by the <code>onParentVersion</code> attribute in the
 *  <code>PropertyDefinition</code> or <code>NodeDefinition</code> that applies
 *  to the item in question.
 * 
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
export type OnParentVersionAction = Object & {
  /**
 * The action constants.
  
    */
  COPY: number;

  VERSION: number;

  INITIALIZE: number;

  COMPUTE: number;

  IGNORE: number;

  ABORT: number;

  /**
 * The names of the defined on-version actions, as used in serialization.
  
    */
  ACTIONNAME_COPY: string;

  ACTIONNAME_VERSION: string;

  ACTIONNAME_INITIALIZE: string;

  ACTIONNAME_COMPUTE: string;

  ACTIONNAME_IGNORE: string;

  ACTIONNAME_ABORT: string;
};
