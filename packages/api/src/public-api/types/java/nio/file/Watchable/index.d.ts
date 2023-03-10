import type { WatchService } from "../WatchService";
import type { Kind } from "../WatchEvent.Kind";
import type { Modifier } from "../WatchEvent.Modifier";
import type { WatchKey } from "../WatchKey";

/**
 * An object that may be registered with a watch service so that it can be
 *  <em>watched</em> for changes and events.
 *
 *  <p> This interface defines the {@link #register register} method to register
 *  the object with a {@link WatchService} returning a {@link WatchKey} to
 *  represent the registration. An object may be registered with more than one
 *  watch service. Registration with a watch service is cancelled by invoking the
 *  key's {@link WatchKey#cancel cancel} method.
 * @since 1.7
 * @see Path#register
 */
export type Watchable = {
  /**
   * Registers an object with a watch service.
   *
   *  <p> If the file system object identified by this object is currently
   *  registered with the watch service then the watch key, representing that
   *  registration, is returned after changing the event set or modifiers to
   *  those specified by the {@code events} and {@code modifiers} parameters.
   *  Changing the event set does not cause pending events for the object to be
   *  discarded. Objects are automatically registered for the {@link
   *  StandardWatchEventKinds#OVERFLOW OVERFLOW} event. This event is not
   *  required to be present in the array of events.
   *
   *  <p> Otherwise the file system object has not yet been registered with the
   *  given watch service, so it is registered and the resulting new key is
   *  returned.
   *
   *  <p> Implementations of this interface should specify the events they
   *  support.
   * @param watcher&#xA; the watch service to which this object is to be registered
   * @param events&#xA; the events for which this object should be registered
   * @param modifiers&#xA; the modifiers, if any, that modify how the object is registered
   * @return a key representing the registration of this object with the&#xA; given watch service
   * @throws UnsupportedOperationException&#xA; if unsupported events or modifiers are specified
   * @throws IllegalArgumentException&#xA; if an invalid of combination of events are modifiers are specified
   * @throws ClosedWatchServiceException&#xA; if the watch service is closed
   * @throws IOException&#xA; if an I/O error occurs
   * @throws SecurityException&#xA; if a security manager is installed and it denies an unspecified&#xA; permission required to monitor this object. Implementations of&#xA; this interface should specify the permission checks.
   */
  register(
    watcher: WatchService,
    events: Kind[],
    ...modifiers: Modifier[]
  ): WatchKey;

  /**
   * Registers an object with a watch service.
   *
   *  <p> An invocation of this method behaves in exactly the same way as the
   *  invocation
   *  <pre>
   *      watchable.{@link #register(WatchService,WatchEvent.Kind[],WatchEvent.Modifier[]) register}(watcher, events, new WatchEvent.Modifier[0]);
   *  </pre>
   * @param watcher&#xA; the watch service to which this object is to be registered
   * @param events&#xA; the events for which this object should be registered
   * @return a key representing the registration of this object with the&#xA; given watch service
   * @throws UnsupportedOperationException&#xA; if unsupported events are specified
   * @throws IllegalArgumentException&#xA; if an invalid of combination of events are specified
   * @throws ClosedWatchServiceException&#xA; if the watch service is closed
   * @throws IOException&#xA; if an I/O error occurs
   * @throws SecurityException&#xA; if a security manager is installed and it denies an unspecified&#xA; permission required to monitor this object. Implementations of&#xA; this interface should specify the permission checks.
   */
  register(watcher: WatchService, ...events: Kind[]): WatchKey;
};
