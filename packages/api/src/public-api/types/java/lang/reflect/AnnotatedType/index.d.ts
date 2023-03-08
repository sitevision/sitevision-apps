import type { Type } from "../Type";
import type { AnnotatedElement } from "../AnnotatedElement";

/**
 * {@code AnnotatedType} represents the potentially annotated use of a type in
 *  the program currently running in this VM. The use may be of any type in the
 *  Java programming language, including an array type, a parameterized type, a
 *  type variable, or a wildcard type.
 * @since 1.8
 */
export type AnnotatedType = AnnotatedElement & {
  /**
   * Returns the underlying type that this annotated type represents.
   * @return the type this annotated type represents
   */
  getType(): Type;
};
