/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { String } from "../../../../../../java/lang/String";
import type { Object } from "../../../../../../java/lang/Object";

/**
 * Name/Object mappings that can be used when rendering a Velocity template.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via a <code>getVelocityContext</code>
 *     method in {@link senselogic.sitevision.api.render.velocity.VelocityRenderer}.
 *  </p>
 * @author Magnus Lövgren
 * @see VelocityRenderer
 * @since Sitevision 3.0
 */
export type VelocityContext = {
  /**
   * Adds a Name/Object mapping to the context.
   *  Null key mappings will be ignored.
   * @param aKey a name, not <code>null</code>
   * @param anObject an object
   */
  put(aKey: String | string, anObject: unknown): void;

  /**
   * Returns the mapped object for a specified name.
   * @param aKey the name.
   * @return the Object mapped for aKey, or <code>null</code> if no mapping for aKey exist
   */
  get(aKey: String | string): unknown;

  /**
   * Checks whether a name has a mapping or not.
   * @param aKey the name
   * @return <code>true</code> if an Object is mapped for aKey, <code>false</code> otherwise
   */
  containsKey(aKey: String | string): boolean;

  /**
   * Returns all names.
   * @return all names.
   */
  getKeys(): string;

  /**
   * Removes a Name/Object mapping.
   * @param aKey the name.
   * @return the Object mapped to aKey, or <code>null</code> if no mapping for aKey exist
   */
  remove(aKey: String | string): unknown;
};
