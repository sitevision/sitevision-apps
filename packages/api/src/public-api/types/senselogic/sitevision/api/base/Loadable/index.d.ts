import type { String } from "../../../../../java/lang/String";

/**
 * A functional interface for loading resources.
 * @author Magnus Lövgren
 * @since Sitevision 4.0
 */
export type Loadable = {
  /**
   * Loads a resource that is identified with a specific name.
   * @param aName the name of the resource
   * @return the resource, or <code>null</code> if no resource match <code>aName</code>
   */
  load(aName: String | string): unknown;
};
