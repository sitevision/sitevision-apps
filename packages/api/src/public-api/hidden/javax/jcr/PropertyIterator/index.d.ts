import Property from "../Property";
import RangeIterator from "../RangeIterator";

/**
 * Allows easy iteration through a list of <code>Property</code>s with
 * <code>nextProperty</code> as well as a <code>skip</code> method.
  
    */
interface PropertyIterator {
  /**
   * Returns the next <code>Property</code> in the iteration.
   * @return the next <code>Property</code> in the iteration.
   * @throws java.util.NoSuchElementException if iteration has no more <code>Property</code>s.
   */
  nextProperty(): Property;
}

export default PropertyIterator;
