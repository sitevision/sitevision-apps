import type { Object } from "../../Object";

import type { String } from "../../String";
import type { Executable } from "../Executable";
import type { Type } from "../Type";
import type { Class } from "../../Class";
import type { AnnotatedType } from "../AnnotatedType";

import type { Annotation } from "../../annotation/Annotation";
import type { AnnotatedElement } from "../AnnotatedElement";

/**
 * Information about method parameters.
 *
 *  A {@code Parameter} provides information about method parameters,
 *  including its name and modifiers.  It also provides an alternate
 *  means of obtaining attributes for the parameter.
 * @since 1.8
 */
export type Parameter = Object &
  AnnotatedElement & {
    /**
     * Compares based on the executable and the index.
     * @param obj The object to compare.
     * @return Whether or not this is equal to the argument.
     */
    equals(obj: unknown): boolean;

    /**
     * Returns a hash code based on the executable's hash code and the
     *  index.
     * @return A hash code based on the executable's hash code.
     */
    hashCode(): number;

    /**
     * Returns true if the parameter has a name according to the class
     *  file; returns false otherwise. Whether a parameter has a name
     *  is determined by the {@literal MethodParameters} attribute of
     *  the method which declares the parameter.
     * @return true if and only if the parameter has a name according&#xA; to the class file.
     */
    isNamePresent(): boolean;

    /**
     * Returns a string describing this parameter.  The format is the
     *  modifiers for the parameter, if any, in canonical order as
     *  recommended by <cite>The Java&trade; Language
     *  Specification</cite>, followed by the fully- qualified type of
     *  the parameter (excluding the last [] if the parameter is
     *  variable arity), followed by "..." if the parameter is variable
     *  arity, followed by a space, followed by the name of the
     *  parameter.
     * @return A string representation of the parameter and associated&#xA; information.
     */
    toString(): string;

    /**
     * Return the {@code Executable} which declares this parameter.
     * @return The {@code Executable} declaring this parameter.
     */
    getDeclaringExecutable(): Executable;

    /**
     * Get the modifier flags for this the parameter represented by
     *  this {@code Parameter} object.
     * @return The modifier flags for this parameter.
     */
    getModifiers(): number;

    /**
     * Returns the name of the parameter.  If the parameter's name is
     *  {@linkplain #isNamePresent() present}, then this method returns
     *  the name provided by the class file. Otherwise, this method
     *  synthesizes a name of the form argN, where N is the index of
     *  the parameter in the descriptor of the method which declares
     *  the parameter.
     * @return The name of the parameter, either provided by the class&#xA; file or synthesized if the class file does not provide&#xA; a name.
     */
    getName(): string;

    /**
     * Returns a {@code Type} object that identifies the parameterized
     *  type for the parameter represented by this {@code Parameter}
     *  object.
     * @return a {@code Type} object identifying the parameterized&#xA; type of the parameter represented by this object
     */
    getParameterizedType(): Type;

    /**
     * Returns a {@code Class} object that identifies the
     *  declared type for the parameter represented by this
     *  {@code Parameter} object.
     * @return a {@code Class} object identifying the declared&#xA; type of the parameter represented by this object
     */
    getType(): Class;

    /**
     * Returns an AnnotatedType object that represents the use of a type to
     *  specify the type of the formal parameter represented by this Parameter.
     * @return an {@code AnnotatedType} object representing the use of a type&#xA; to specify the type of the formal parameter represented by this&#xA; Parameter
     */
    getAnnotatedType(): AnnotatedType;

    /**
     * Returns {@code true} if this parameter is implicitly declared
     *  in source code; returns {@code false} otherwise.
     * @return true if and only if this parameter is implicitly&#xA; declared as defined by <cite>The Java&trade; Language&#xA; Specification</cite>.
     */
    isImplicit(): boolean;

    /**
     * Returns {@code true} if this parameter is neither implicitly
     *  nor explicitly declared in source code; returns {@code false}
     *  otherwise.
     * @jls 13.1 The Form of a Binary
     * @return true if and only if this parameter is a synthetic&#xA; construct as defined by&#xA; <cite>The Java&trade; Language Specification</cite>.
     */
    isSynthetic(): boolean;

    /**
     * Returns {@code true} if this parameter represents a variable
     *  argument list; returns {@code false} otherwise.
     * @return {@code true} if an only if this parameter represents a&#xA; variable argument list.
     */
    isVarArgs(): boolean;

    /**
     * {@inheritDoc}
     * @throws NullPointerException {@inheritDoc}
     */
    getAnnotation(annotationClass: Class): unknown;

    /**
     * {@inheritDoc}
     * @throws NullPointerException {@inheritDoc}
     */
    getAnnotationsByType(annotationClass: Class): unknown;

    /**
 * {@inheritDoc}
  
    */
    getDeclaredAnnotations(): Annotation;

    getDeclaredAnnotation(annotationClass: Class): unknown;

    getDeclaredAnnotationsByType(annotationClass: Class): unknown;

    /**
 * {@inheritDoc}
  
    */
    getAnnotations(): Annotation;
  };
