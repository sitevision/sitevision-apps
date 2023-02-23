import type { TypeVariable } from "../TypeVariable";
import type { AnnotatedElement } from "../AnnotatedElement";

/**
 * A common interface for all entities that declare type variables.
 * @since 1.5
 */
export type GenericDeclaration = AnnotatedElement & {
  /**
   * Returns an array of {@code TypeVariable} objects that
   *  represent the type variables declared by the generic
   *  declaration represented by this {@code GenericDeclaration}
   *  object, in declaration order.  Returns an array of length 0 if
   *  the underlying generic declaration declares no type variables.
   * @return an array of {@code TypeVariable} objects that represent&#xA; the type variables declared by this generic declaration
   * @throws GenericSignatureFormatError if the generic&#xA; signature of this generic declaration does not conform to&#xA; the format specified in&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>
   */
  getTypeParameters(): TypeVariable;
};
