import type { Node } from "../Node";
import type { RangeIterator } from "../RangeIterator";

/**
 * Allows easy iteration through a list of <code>Node</code>s with
 * <code>nextNode</code> as well as a <code>skip</code> method inherited from
 * <code>RangeIterator</code>.
  
    */
export type NodeIterator = RangeIterator & {
  /**
   * Returns the next <code>Node</code> in the iteration.
   * @return the next <code>Node</code> in the iteration.
   * @throws java.util.NoSuchElementException&#xA; if iteration has no more&#xA; <code>Node</code>s.
   */
  nextNode(): Node;
};
