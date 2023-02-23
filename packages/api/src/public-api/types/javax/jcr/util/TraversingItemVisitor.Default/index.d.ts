import type { Node } from "../../Node";

import type { Property } from "../../Property";
import type { TraversingItemVisitor } from "../TraversingItemVisitor";

/**
 * Convenience class providing default implementations of the abstract
 *  methods of <code>TraversingItemVisitor</code>.
  
    */
export type Default = TraversingItemVisitor & {
  entering(node: Node, level: number): void;

  entering(property: Property, level: number): void;

  leaving(node: Node, level: number): void;

  leaving(property: Property, level: number): void;
};
