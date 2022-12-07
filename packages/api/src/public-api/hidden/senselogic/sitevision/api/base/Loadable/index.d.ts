/**
 * A functional interface for loading resources.
 * @author Magnus Lövgren
 * @since Sitevision 4.0
 */
interface Loadable {
  /**
   * Loads a resource that is identified with a specific name.
   * @param aName the name of the resource
   * @return the resource, or <code>null</code> if no resource match <code>aName</code>
   */
  load(aName: string): unknown;
}

export default Loadable;
