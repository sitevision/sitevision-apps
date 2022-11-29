import Property from '../Property';

interface PropertyIterator {
  /**
   * Returns true if the iteration has more elements.
   * @returns {boolean} true if the iteration has more elements
   */
  hasNext(): boolean;
  /**
   * Returns the next Node in the iteration.
   * @returns {Property} the next Node in the iteration
   */
  next(): Property;
  /**
   * Returns the next Node in the iteration.
   * @returns {Property} the next Node in the iteration.
   */
  nextNode(): Property;
  /**
  * Removes from the underlying collection the last element returned
   by this iterator (optional operation).
  * @returns {default void} undefined 
  */
  remove(): void;
}

export default PropertyIterator;
