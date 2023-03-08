import type { String } from "../../String";

/**
 * Type is the common superinterface for all types in the Java
 *  programming language. These include raw types, parameterized types,
 *  array types, type variables and primitive types.
 * @since 1.5
 */
export type Type = {
  /**
   * Returns a string describing this type, including information
   *  about any type parameters.
   * @implSpec The default implementation calls {@code toString}.
   * @return a string describing this type
   * @since 1.8
   */
  getTypeName(): string;
};
