import NodeType from "../NodeType";
import RangeIterator from "../../RangeIterator";

/**
 * An iterator for <code>NodeType</code> objects.
  
    */
interface NodeTypeIterator {
  /**
   * Returns the next <code>NodeType</code> in the iteration.
   * @return the next <code>NodeType</code> in the iteration.
   * @throws java.util.NoSuchElementException if iteration has no more <code>NodeType</code>s.
   */
  nextNodeType(): NodeType;
}

export default NodeTypeIterator;
