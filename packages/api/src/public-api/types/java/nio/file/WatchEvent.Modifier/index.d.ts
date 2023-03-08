import type { String } from "../../../lang/String";

/**
 * An event modifier that qualifies how a {@link Watchable} is registered
 *  with a {@link WatchService}.
 *
 *  <p> This release does not define any <em>standard</em> modifiers.
 * @since 1.7
 * @see Watchable#register
 */
export type Modifier = {
  /**
   * Returns the name of the modifier.
   * @return the name of the modifier
   */
  name(): string;
};
