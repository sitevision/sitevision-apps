/**
 * Listen to a given event
 *
 * @param eventName The name of the event
 * @param callback The callback to trigger for the given event
 */
export function on(
  eventName: string,
  callback: (options: unknown) => void
): void;
/**
 * Emit a server side event
 *
 * Note! Server side only
 *
 * @param eventName The name of the event to emit
 * @param options The options for the event
 */
export function emit(eventName: string, options: unknown): void;
/**
 * Trigger a client side event
 *
 * Note! Client side only
 *
 * @param eventName The name of the event to trigger
 * @param options The options for the event
 */
export function trigger(eventName: string, options: unknown): void;

declare namespace events {
  export { on, emit, trigger };
}

export default events;
