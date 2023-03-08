import type { Class } from "../../Class";
import type { String } from "../../String";

import type { TypeVariable } from "../TypeVariable";
import type { Type } from "../Type";
import type { Object } from "../../Object";

import type { Annotation } from "../../annotation/Annotation";
import type { AnnotatedType } from "../AnnotatedType";
import type { Executable } from "../Executable";

/**
 * {@code Constructor} provides information about, and access to, a single
 *  constructor for a class.
 *
 *  <p>{@code Constructor} permits widening conversions to occur when matching the
 *  actual parameters to newInstance() with the underlying
 *  constructor's formal parameters, but throws an
 *  {@code IllegalArgumentException} if a narrowing conversion would occur.
 * @param <T> the class in which the constructor is declared
 * @see Member
 * @see java.lang.Class
 * @see java.lang.Class#getConstructors()
 * @see java.lang.Class#getConstructor(Class[])
 * @see java.lang.Class#getDeclaredConstructors()
 * @author Kenneth Russell
 * @author Nakul Saraiya
 */
export type Constructor = Executable & {
  /**
 * {@inheritDoc}
  
    */
  getDeclaringClass(): Class;

  /**
 * Returns the name of this constructor, as a string.  This is
 *  the binary name of the constructor's declaring class.
  
    */
  getName(): string;

  /**
 * {@inheritDoc}
  
    */
  getModifiers(): number;

  /**
   * {@inheritDoc}
   * @throws GenericSignatureFormatError {@inheritDoc}
   * @since 1.5
   */
  getTypeParameters(): TypeVariable;

  /**
 * {@inheritDoc}
  
    */
  getParameterTypes(): Class;

  /**
   * {@inheritDoc}
   * @since 1.8
   */
  getParameterCount(): number;

  /**
   * {@inheritDoc}
   * @throws GenericSignatureFormatError {@inheritDoc}
   * @throws TypeNotPresentException {@inheritDoc}
   * @throws MalformedParameterizedTypeException {@inheritDoc}
   * @since 1.5
   */
  getGenericParameterTypes(): Type;

  /**
 * {@inheritDoc}
  
    */
  getExceptionTypes(): Class;

  /**
   * {@inheritDoc}
   * @throws GenericSignatureFormatError {@inheritDoc}
   * @throws TypeNotPresentException {@inheritDoc}
   * @throws MalformedParameterizedTypeException {@inheritDoc}
   * @since 1.5
   */
  getGenericExceptionTypes(): Type;

  /**
 * Compares this {@code Constructor} against the specified object.
 *  Returns true if the objects are the same.  Two {@code Constructor} objects are
 *  the same if they were declared by the same class and have the
 *  same formal parameter types.
  
    */
  equals(obj: unknown): boolean;

  /**
 * Returns a hashcode for this {@code Constructor}. The hashcode is
 *  the same as the hashcode for the underlying constructor's
 *  declaring class name.
  
    */
  hashCode(): number;

  /**
   * Returns a string describing this {@code Constructor}.  The string is
   *  formatted as the constructor access modifiers, if any,
   *  followed by the fully-qualified name of the declaring class,
   *  followed by a parenthesized, comma-separated list of the
   *  constructor's formal parameter types.  For example:
   *  <pre>
   *     public java.util.Hashtable(int,float)
   *  </pre>
   *
   *  <p>The only possible modifiers for constructors are the access
   *  modifiers {@code public}, {@code protected} or
   *  {@code private}.  Only one of these may appear, or none if the
   *  constructor has default (package) access.
   * @return a string describing this {@code Constructor}
   * @jls 8.8.3. Constructor Modifiers
   */
  toString(): string;

  /**
   * Returns a string describing this {@code Constructor},
   *  including type parameters.  The string is formatted as the
   *  constructor access modifiers, if any, followed by an
   *  angle-bracketed comma separated list of the constructor's type
   *  parameters, if any, followed by the fully-qualified name of the
   *  declaring class, followed by a parenthesized, comma-separated
   *  list of the constructor's generic formal parameter types.
   *
   *  If this constructor was declared to take a variable number of
   *  arguments, instead of denoting the last parameter as
   *  "<tt><i>Type</i>[]</tt>", it is denoted as
   *  "<tt><i>Type</i>...</tt>".
   *
   *  A space is used to separate access modifiers from one another
   *  and from the type parameters or return type.  If there are no
   *  type parameters, the type parameter list is elided; if the type
   *  parameter list is present, a space separates the list from the
   *  class name.  If the constructor is declared to throw
   *  exceptions, the parameter list is followed by a space, followed
   *  by the word "{@code throws}" followed by a
   *  comma-separated list of the thrown exception types.
   *
   *  <p>The only possible modifiers for constructors are the access
   *  modifiers {@code public}, {@code protected} or
   *  {@code private}.  Only one of these may appear, or none if the
   *  constructor has default (package) access.
   * @return a string describing this {@code Constructor},&#xA; include type parameters
   * @since 1.5
   * @jls 8.8.3. Constructor Modifiers
   */
  toGenericString(): string;

  /**
   * Uses the constructor represented by this {@code Constructor} object to
   *  create and initialize a new instance of the constructor's
   *  declaring class, with the specified initialization parameters.
   *  Individual parameters are automatically unwrapped to match
   *  primitive formal parameters, and both primitive and reference
   *  parameters are subject to method invocation conversions as necessary.
   *
   *  <p>If the number of formal parameters required by the underlying constructor
   *  is 0, the supplied {@code initargs} array may be of length 0 or null.
   *
   *  <p>If the constructor's declaring class is an inner class in a
   *  non-static context, the first argument to the constructor needs
   *  to be the enclosing instance; see section 15.9.3 of
   *  <cite>The Java&trade; Language Specification</cite>.
   *
   *  <p>If the required access and argument checks succeed and the
   *  instantiation will proceed, the constructor's declaring class
   *  is initialized if it has not already been initialized.
   *
   *  <p>If the constructor completes normally, returns the newly
   *  created and initialized instance.
   * @param initargs array of objects to be passed as arguments to&#xA; the constructor call; values of primitive types are wrapped in&#xA; a wrapper object of the appropriate type (e.g. a {@code float}&#xA; in a {@link java.lang.Float Float})
   * @return a new object created by calling the constructor&#xA; this object represents
   * @throws IllegalAccessException if this {@code Constructor} object&#xA; is enforcing Java language access control and the underlying&#xA; constructor is inaccessible.
   * @throws IllegalArgumentException if the number of actual&#xA; and formal parameters differ; if an unwrapping&#xA; conversion for primitive arguments fails; or if,&#xA; after possible unwrapping, a parameter value&#xA; cannot be converted to the corresponding formal&#xA; parameter type by a method invocation conversion; if&#xA; this constructor pertains to an enum type.
   * @throws InstantiationException if the class that declares the&#xA; underlying constructor represents an abstract class.
   * @throws InvocationTargetException if the underlying constructor&#xA; throws an exception.
   * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
   */
  newInstance(initargs: unknown[]): unknown;

  /**
   * {@inheritDoc}
   * @since 1.5
   */
  isVarArgs(): boolean;

  /**
   * {@inheritDoc}
   * @jls 13.1 The Form of a Binary
   * @since 1.5
   */
  isSynthetic(): boolean;

  /**
   * {@inheritDoc}
   * @throws NullPointerException {@inheritDoc}
   * @since 1.5
   */
  getAnnotation(annotationClass: Class): unknown;

  /**
   * {@inheritDoc}
   * @since 1.5
   */
  getDeclaredAnnotations(): Annotation;

  /**
   * {@inheritDoc}
   * @since 1.5
   */
  getParameterAnnotations(): Annotation;

  /**
   * {@inheritDoc}
   * @since 1.8
   */
  getAnnotatedReturnType(): AnnotatedType;

  /**
   * {@inheritDoc}
   * @since 1.8
   */
  getAnnotatedReceiverType(): AnnotatedType;
};
