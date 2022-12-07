import Node from "../Node";
import RangeIterator from "../RangeIterator";

/**
 * Allows easy iteration through a list of <code>Node</code>s with
 * <code>nextNode</code> as well as a <code>skip</code> method inherited from
 * <code>RangeIterator</code>.
  
    */
interface NodeIterator {
  /**
   * Returns the next <code>Node</code> in the iteration.
   * @return the next <code>Node</code> in the iteration.
   * @throws java.util.NoSuchElementException if iteration has no more <code>Node</code>s.
   */
  nextNode(): Node;
}

export default NodeIterator;
