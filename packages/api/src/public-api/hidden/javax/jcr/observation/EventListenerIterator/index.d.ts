import EventListener from "../EventListener";
import RangeIterator from "../../RangeIterator";

/**
 * Allows easy iteration through a list of <code>EventListener</code>s with
 * <code>nextEventListener</code> as well as a <code>skip</code> method
 * inherited from <code>RangeIterator</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
interface EventListenerIterator {
  /**
   * Returns the next <code>EventListener</code> in the iteration.
   * @return the next <code>EventListener</code> in the iteration.
   * @throws java.util.NoSuchElementException if iteration has no more <code>EventListener</code>s.
   */
  nextEventListener(): EventListener;
}

export default EventListenerIterator;
