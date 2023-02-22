import type { EventListener } from "../EventListener";
import type { RangeIterator } from "../../RangeIterator";

/**
 * Allows easy iteration through a list of <code>EventListener</code>s with
 * <code>nextEventListener</code> as well as a <code>skip</code> method
 * inherited from <code>RangeIterator</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
export type EventListenerIterator = RangeIterator & {
  /**
   * Returns the next <code>EventListener</code> in the iteration.
   * @return the next <code>EventListener</code> in the iteration.
   * @throws java.util.NoSuchElementException&#xA; if iteration has no more&#xA; <code>EventListener</code>s.
   */
  nextEventListener(): EventListener;
};
