import Event from "../Event";
import RangeIterator from "../../RangeIterator";

/**
 * Allows easy iteration through a list of <code>Event</code>s with
 * <code>nextEvent</code> as well as a <code>skip</code> method inherited from
 * <code>RangeIterator</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
interface EventIterator {
  /**
   * Returns the next <code>Event</code> in the iteration.
   * @return the next <code>Event</code> in the iteration.
   * @throws java.util.NoSuchElementException if iteration has no more <code>Event</code>s.
   */
  nextEvent(): Event;
}

export default EventIterator;
