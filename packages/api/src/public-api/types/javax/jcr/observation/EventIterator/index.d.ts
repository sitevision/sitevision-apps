import type { Event } from "../Event";
import type { RangeIterator } from "../../RangeIterator";

/**
 * Allows easy iteration through a list of <code>Event</code>s with
 * <code>nextEvent</code> as well as a <code>skip</code> method inherited from
 * <code>RangeIterator</code>.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
export type EventIterator = RangeIterator & {
  /**
   * Returns the next <code>Event</code> in the iteration.
   * @return the next <code>Event</code> in the iteration.
   * @throws java.util.NoSuchElementException&#xA; if iteration has no more&#xA; <code>Event</code>s.
   */
  nextEvent(): Event;
};
