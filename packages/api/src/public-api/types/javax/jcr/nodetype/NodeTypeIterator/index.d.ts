import type { NodeType } from "../NodeType";
import type { RangeIterator } from "../../RangeIterator";

/**
 * An iterator for <code>NodeType</code> objects.
  
    */
export type NodeTypeIterator = RangeIterator & {
  /**
   * Returns the next <code>NodeType</code> in the iteration.
   * @return the next <code>NodeType</code> in the iteration.
   * @throws java.util.NoSuchElementException&#xA; if iteration has no more&#xA; <code>NodeType</code>s.
   */
  nextNodeType(): NodeType;
};
