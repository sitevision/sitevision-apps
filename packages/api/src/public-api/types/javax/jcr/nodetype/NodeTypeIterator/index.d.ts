import type NodeType from "../NodeType";
import type RangeIterator from "../../RangeIterator";

/**
 * An iterator for <code>NodeType</code> objects.
  
    */
type NodeTypeIterator = RangeIterator & {
  /**
   * Returns the next <code>NodeType</code> in the iteration.
   * @return the next <code>NodeType</code> in the iteration.
   * @throws java.util.NoSuchElementException if iteration has no more <code>NodeType</code>s.
   */
  nextNodeType(): NodeType;
};

export = NodeTypeIterator;
