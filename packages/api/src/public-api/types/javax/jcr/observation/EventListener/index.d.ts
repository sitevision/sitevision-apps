import type { EventIterator } from "../EventIterator";

/**
 * An event listener.
 *  <p>
 *  An <code>EventListener</code> can be registered via the <code>{@link
 *  javax.jcr.observation.ObservationManager}</code> object. Event listeners are
 *  notified asynchronously, and see events after they occur and the transaction
 *  is committed. An event listener only sees events for which the session that
 *  registered it has sufficient access rights.
 * 
 *  <p><strong>Sitevision note:</strong> Unsupported operation</p>
  
    */
export type EventListener = {
  /**
   * This method is called when a bundle of events is dispatched.
   * @param events The event set received.
   */
  onEvent(events: EventIterator): void;
};
