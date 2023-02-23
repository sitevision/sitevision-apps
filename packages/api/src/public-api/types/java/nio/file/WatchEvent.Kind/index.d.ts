import type { String } from "../../../lang/String";
import type { Class } from "../../../lang/Class";

/**
 * An event kind, for the purposes of identification.
 * @since 1.7
 * @see StandardWatchEventKinds
 */
export type Kind = {
  /**
   * Returns the name of the event kind.
   * @return the name of the event kind
   */
  name(): string;

  /**
   * Returns the type of the {@link WatchEvent#context context} value.
   * @return the type of the context value
   */
  type(): Class;
};
