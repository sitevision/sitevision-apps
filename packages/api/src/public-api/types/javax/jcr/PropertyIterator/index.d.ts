import type { Property } from "../Property";
import type { RangeIterator } from "../RangeIterator";

/**
 * Allows easy iteration through a list of <code>Property</code>s with
 * <code>nextProperty</code> as well as a <code>skip</code> method.
  
    */
export type PropertyIterator = RangeIterator & {
  /**
   * Returns the next <code>Property</code> in the iteration.
   * @return the next <code>Property</code> in the iteration.
   * @throws java.util.NoSuchElementException&#xA; if iteration has no more&#xA; <code>Property</code>s.
   */
  nextProperty(): Property;
};
