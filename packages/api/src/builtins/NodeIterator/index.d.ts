import Node from '../Node';

interface NodeIterator {
  /**
  * Returns true if the iteration has more elements.
  * @returns {boolean} true if the iteration has more elements 
  */
  hasNext(): boolean;
  /**
  * Returns the next Node in the iteration.
  * @returns {Node} the next Node in the iteration 
  */
  next(): Node;
  /**
  * Returns the next Node in the iteration.
  * @returns {Node} the next Node in the iteration. 
  */
  nextNode(): Node;
  /**
  * Removes from the underlying collection the last element returned
   by this iterator (optional operation).
  * @returns {default void} undefined 
  */
  remove(): void;
}

export default NodeIterator;
