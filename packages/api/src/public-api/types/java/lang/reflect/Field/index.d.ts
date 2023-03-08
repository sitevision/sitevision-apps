import type { Class } from "../../Class";
import type { String } from "../../String";

import type { Type } from "../Type";
import type { Object } from "../../Object";

import type { Annotation } from "../../annotation/Annotation";
import type { AnnotatedType } from "../AnnotatedType";
import type { AccessibleObject } from "../AccessibleObject";
import type { Member } from "../Member";

/**
 * A {@code Field} provides information about, and dynamic access to, a
 *  single field of a class or an interface.  The reflected field may
 *  be a class (static) field or an instance field.
 *
 *  <p>A {@code Field} permits widening conversions to occur during a get or
 *  set access operation, but throws an {@code IllegalArgumentException} if a
 *  narrowing conversion would occur.
 * @see Member
 * @see java.lang.Class
 * @see java.lang.Class#getFields()
 * @see java.lang.Class#getField(String)
 * @see java.lang.Class#getDeclaredFields()
 * @see java.lang.Class#getDeclaredField(String)
 * @author Kenneth Russell
 * @author Nakul Saraiya
 */
export type Field = AccessibleObject &
  Member & {
    /**
 * Returns the {@code Class} object representing the class or interface
 *  that declares the field represented by this {@code Field} object.
  
    */
    getDeclaringClass(): Class;

    /**
 * Returns the name of the field represented by this {@code Field} object.
  
    */
    getName(): string;

    /**
     * Returns the Java language modifiers for the field represented
     *  by this {@code Field} object, as an integer. The {@code Modifier} class should
     *  be used to decode the modifiers.
     * @see Modifier
     */
    getModifiers(): number;

    /**
     * Returns {@code true} if this field represents an element of
     *  an enumerated type; returns {@code false} otherwise.
     * @return {@code true} if and only if this field represents an element of&#xA; an enumerated type.
     * @since 1.5
     */
    isEnumConstant(): boolean;

    /**
     * Returns {@code true} if this field is a synthetic
     *  field; returns {@code false} otherwise.
     * @return true if and only if this field is a synthetic&#xA; field as defined by the Java Language Specification.
     * @since 1.5
     */
    isSynthetic(): boolean;

    /**
     * Returns a {@code Class} object that identifies the
     *  declared type for the field represented by this
     *  {@code Field} object.
     * @return a {@code Class} object identifying the declared&#xA; type of the field represented by this object
     */
    getType(): Class;

    /**
     * Returns a {@code Type} object that represents the declared type for
     *  the field represented by this {@code Field} object.
     *
     *  <p>If the {@code Type} is a parameterized type, the
     *  {@code Type} object returned must accurately reflect the
     *  actual type parameters used in the source code.
     *
     *  <p>If the type of the underlying field is a type variable or a
     *  parameterized type, it is created. Otherwise, it is resolved.
     * @return a {@code Type} object that represents the declared type for&#xA; the field represented by this {@code Field} object
     * @throws GenericSignatureFormatError if the generic field&#xA; signature does not conform to the format specified in&#xA; <cite>The Java&trade; Virtual Machine Specification</cite>
     * @throws TypeNotPresentException if the generic type&#xA; signature of the underlying field refers to a non-existent&#xA; type declaration
     * @throws MalformedParameterizedTypeException if the generic&#xA; signature of the underlying field refers to a parameterized type&#xA; that cannot be instantiated for any reason
     * @since 1.5
     */
    getGenericType(): Type;

    /**
 * Compares this {@code Field} against the specified object.  Returns
 *  true if the objects are the same.  Two {@code Field} objects are the same if
 *  they were declared by the same class and have the same name
 *  and type.
  
    */
    equals(obj: unknown): boolean;

    /**
 * Returns a hashcode for this {@code Field}.  This is computed as the
 *  exclusive-or of the hashcodes for the underlying field's
 *  declaring class name and its name.
  
    */
    hashCode(): number;

    /**
     * Returns a string describing this {@code Field}.  The format is
     *  the access modifiers for the field, if any, followed
     *  by the field type, followed by a space, followed by
     *  the fully-qualified name of the class declaring the field,
     *  followed by a period, followed by the name of the field.
     *  For example:
     *  <pre>
     *     public static final int java.lang.Thread.MIN_PRIORITY
     *     private int java.io.FileDescriptor.fd
     *  </pre>
     *
     *  <p>The modifiers are placed in canonical order as specified by
     *  "The Java Language Specification".  This is {@code public},
     *  {@code protected} or {@code private} first, and then other
     *  modifiers in the following order: {@code static}, {@code final},
     *  {@code transient}, {@code volatile}.
     * @return a string describing this {@code Field}
     * @jls 8.3.1 Field Modifiers
     */
    toString(): string;

    /**
     * Returns a string describing this {@code Field}, including
     *  its generic type.  The format is the access modifiers for the
     *  field, if any, followed by the generic field type, followed by
     *  a space, followed by the fully-qualified name of the class
     *  declaring the field, followed by a period, followed by the name
     *  of the field.
     *
     *  <p>The modifiers are placed in canonical order as specified by
     *  "The Java Language Specification".  This is {@code public},
     *  {@code protected} or {@code private} first, and then other
     *  modifiers in the following order: {@code static}, {@code final},
     *  {@code transient}, {@code volatile}.
     * @return a string describing this {@code Field}, including&#xA; its generic type
     * @since 1.5
     * @jls 8.3.1 Field Modifiers
     */
    toGenericString(): string;

    /**
     * Returns the value of the field represented by this {@code Field}, on
     *  the specified object. The value is automatically wrapped in an
     *  object if it has a primitive type.
     *
     *  <p>The underlying field's value is obtained as follows:
     *
     *  <p>If the underlying field is a static field, the {@code obj} argument
     *  is ignored; it may be null.
     *
     *  <p>Otherwise, the underlying field is an instance field.  If the
     *  specified {@code obj} argument is null, the method throws a
     *  {@code NullPointerException}. If the specified object is not an
     *  instance of the class or interface declaring the underlying
     *  field, the method throws an {@code IllegalArgumentException}.
     *
     *  <p>If this {@code Field} object is enforcing Java language access control, and
     *  the underlying field is inaccessible, the method throws an
     *  {@code IllegalAccessException}.
     *  If the underlying field is static, the class that declared the
     *  field is initialized if it has not already been initialized.
     *
     *  <p>Otherwise, the value is retrieved from the underlying instance
     *  or static field.  If the field has a primitive type, the value
     *  is wrapped in an object before being returned, otherwise it is
     *  returned as is.
     *
     *  <p>If the field is hidden in the type of {@code obj},
     *  the field's value is obtained according to the preceding rules.
     * @param obj object from which the represented field's value is&#xA; to be extracted
     * @return the value of the represented field in object&#xA; {@code obj}; primitive values are wrapped in an appropriate&#xA; object before being returned
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is inaccessible.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof).
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     */
    get(obj: unknown): unknown;

    /**
     * Gets the value of a static or instance {@code boolean} field.
     * @param obj the object to extract the {@code boolean} value&#xA; from
     * @return the value of the {@code boolean} field
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is inaccessible.
     * @throws IllegalArgumentException if the specified object is not&#xA; an instance of the class or interface declaring the&#xA; underlying field (or a subclass or implementor&#xA; thereof), or if the field value cannot be&#xA; converted to the type {@code boolean} by a&#xA; widening conversion.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#get
     */
    getBoolean(obj: unknown): boolean;

    /**
     * Gets the value of a static or instance {@code byte} field.
     * @param obj the object to extract the {@code byte} value&#xA; from
     * @return the value of the {@code byte} field
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is inaccessible.
     * @throws IllegalArgumentException if the specified object is not&#xA; an instance of the class or interface declaring the&#xA; underlying field (or a subclass or implementor&#xA; thereof), or if the field value cannot be&#xA; converted to the type {@code byte} by a&#xA; widening conversion.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#get
     */
    getByte(obj: unknown): unknown;

    /**
     * Gets the value of a static or instance field of type
     *  {@code char} or of another primitive type convertible to
     *  type {@code char} via a widening conversion.
     * @param obj the object to extract the {@code char} value&#xA; from
     * @return the value of the field converted to type {@code char}
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is inaccessible.
     * @throws IllegalArgumentException if the specified object is not&#xA; an instance of the class or interface declaring the&#xA; underlying field (or a subclass or implementor&#xA; thereof), or if the field value cannot be&#xA; converted to the type {@code char} by a&#xA; widening conversion.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#get
     */
    getChar(obj: unknown): string;

    /**
     * Gets the value of a static or instance field of type
     *  {@code short} or of another primitive type convertible to
     *  type {@code short} via a widening conversion.
     * @param obj the object to extract the {@code short} value&#xA; from
     * @return the value of the field converted to type {@code short}
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is inaccessible.
     * @throws IllegalArgumentException if the specified object is not&#xA; an instance of the class or interface declaring the&#xA; underlying field (or a subclass or implementor&#xA; thereof), or if the field value cannot be&#xA; converted to the type {@code short} by a&#xA; widening conversion.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#get
     */
    getShort(obj: unknown): number;

    /**
     * Gets the value of a static or instance field of type
     *  {@code int} or of another primitive type convertible to
     *  type {@code int} via a widening conversion.
     * @param obj the object to extract the {@code int} value&#xA; from
     * @return the value of the field converted to type {@code int}
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is inaccessible.
     * @throws IllegalArgumentException if the specified object is not&#xA; an instance of the class or interface declaring the&#xA; underlying field (or a subclass or implementor&#xA; thereof), or if the field value cannot be&#xA; converted to the type {@code int} by a&#xA; widening conversion.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#get
     */
    getInt(obj: unknown): number;

    /**
     * Gets the value of a static or instance field of type
     *  {@code long} or of another primitive type convertible to
     *  type {@code long} via a widening conversion.
     * @param obj the object to extract the {@code long} value&#xA; from
     * @return the value of the field converted to type {@code long}
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is inaccessible.
     * @throws IllegalArgumentException if the specified object is not&#xA; an instance of the class or interface declaring the&#xA; underlying field (or a subclass or implementor&#xA; thereof), or if the field value cannot be&#xA; converted to the type {@code long} by a&#xA; widening conversion.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#get
     */
    getLong(obj: unknown): number;

    /**
     * Gets the value of a static or instance field of type
     *  {@code float} or of another primitive type convertible to
     *  type {@code float} via a widening conversion.
     * @param obj the object to extract the {@code float} value&#xA; from
     * @return the value of the field converted to type {@code float}
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is inaccessible.
     * @throws IllegalArgumentException if the specified object is not&#xA; an instance of the class or interface declaring the&#xA; underlying field (or a subclass or implementor&#xA; thereof), or if the field value cannot be&#xA; converted to the type {@code float} by a&#xA; widening conversion.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#get
     */
    getFloat(obj: unknown): number;

    /**
     * Gets the value of a static or instance field of type
     *  {@code double} or of another primitive type convertible to
     *  type {@code double} via a widening conversion.
     * @param obj the object to extract the {@code double} value&#xA; from
     * @return the value of the field converted to type {@code double}
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is inaccessible.
     * @throws IllegalArgumentException if the specified object is not&#xA; an instance of the class or interface declaring the&#xA; underlying field (or a subclass or implementor&#xA; thereof), or if the field value cannot be&#xA; converted to the type {@code double} by a&#xA; widening conversion.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#get
     */
    getDouble(obj: unknown): number;

    /**
     * Sets the field represented by this {@code Field} object on the
     *  specified object argument to the specified new value. The new
     *  value is automatically unwrapped if the underlying field has a
     *  primitive type.
     *
     *  <p>The operation proceeds as follows:
     *
     *  <p>If the underlying field is static, the {@code obj} argument is
     *  ignored; it may be null.
     *
     *  <p>Otherwise the underlying field is an instance field.  If the
     *  specified object argument is null, the method throws a
     *  {@code NullPointerException}.  If the specified object argument is not
     *  an instance of the class or interface declaring the underlying
     *  field, the method throws an {@code IllegalArgumentException}.
     *
     *  <p>If this {@code Field} object is enforcing Java language access control, and
     *  the underlying field is inaccessible, the method throws an
     *  {@code IllegalAccessException}.
     *
     *  <p>If the underlying field is final, the method throws an
     *  {@code IllegalAccessException} unless {@code setAccessible(true)}
     *  has succeeded for this {@code Field} object
     *  and the field is non-static. Setting a final field in this way
     *  is meaningful only during deserialization or reconstruction of
     *  instances of classes with blank final fields, before they are
     *  made available for access by other parts of a program. Use in
     *  any other context may have unpredictable effects, including cases
     *  in which other parts of a program continue to use the original
     *  value of this field.
     *
     *  <p>If the underlying field is of a primitive type, an unwrapping
     *  conversion is attempted to convert the new value to a value of
     *  a primitive type.  If this attempt fails, the method throws an
     *  {@code IllegalArgumentException}.
     *
     *  <p>If, after possible unwrapping, the new value cannot be
     *  converted to the type of the underlying field by an identity or
     *  widening conversion, the method throws an
     *  {@code IllegalArgumentException}.
     *
     *  <p>If the underlying field is static, the class that declared the
     *  field is initialized if it has not already been initialized.
     *
     *  <p>The field is set to the possibly unwrapped and widened new value.
     *
     *  <p>If the field is hidden in the type of {@code obj},
     *  the field's value is set according to the preceding rules.
     * @param obj the object whose field should be modified
     * @param value the new value for the field of {@code obj}&#xA; being modified
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is either inaccessible or final.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof),&#xA; or if an unwrapping conversion fails.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     */
    set(obj: unknown, value: unknown): void;

    /**
     * Sets the value of a field as a {@code boolean} on the specified object.
     *  This method is equivalent to
     *  {@code set(obj, zObj)},
     *  where {@code zObj} is a {@code Boolean} object and
     *  {@code zObj.booleanValue() == z}.
     * @param obj the object whose field should be modified
     * @param z the new value for the field of {@code obj}&#xA; being modified
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is either inaccessible or final.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof),&#xA; or if an unwrapping conversion fails.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#set
     */
    setBoolean(obj: unknown, z: boolean): void;

    /**
     * Sets the value of a field as a {@code byte} on the specified object.
     *  This method is equivalent to
     *  {@code set(obj, bObj)},
     *  where {@code bObj} is a {@code Byte} object and
     *  {@code bObj.byteValue() == b}.
     * @param obj the object whose field should be modified
     * @param b the new value for the field of {@code obj}&#xA; being modified
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is either inaccessible or final.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof),&#xA; or if an unwrapping conversion fails.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#set
     */
    setByte(obj: unknown, b: unknown): void;

    /**
     * Sets the value of a field as a {@code char} on the specified object.
     *  This method is equivalent to
     *  {@code set(obj, cObj)},
     *  where {@code cObj} is a {@code Character} object and
     *  {@code cObj.charValue() == c}.
     * @param obj the object whose field should be modified
     * @param c the new value for the field of {@code obj}&#xA; being modified
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is either inaccessible or final.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof),&#xA; or if an unwrapping conversion fails.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#set
     */
    setChar(obj: unknown, c: string): void;

    /**
     * Sets the value of a field as a {@code short} on the specified object.
     *  This method is equivalent to
     *  {@code set(obj, sObj)},
     *  where {@code sObj} is a {@code Short} object and
     *  {@code sObj.shortValue() == s}.
     * @param obj the object whose field should be modified
     * @param s the new value for the field of {@code obj}&#xA; being modified
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is either inaccessible or final.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof),&#xA; or if an unwrapping conversion fails.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#set
     */
    setShort(obj: unknown, s: number): void;

    /**
     * Sets the value of a field as an {@code int} on the specified object.
     *  This method is equivalent to
     *  {@code set(obj, iObj)},
     *  where {@code iObj} is a {@code Integer} object and
     *  {@code iObj.intValue() == i}.
     * @param obj the object whose field should be modified
     * @param i the new value for the field of {@code obj}&#xA; being modified
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is either inaccessible or final.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof),&#xA; or if an unwrapping conversion fails.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#set
     */
    setInt(obj: unknown, i: number): void;

    /**
     * Sets the value of a field as a {@code long} on the specified object.
     *  This method is equivalent to
     *  {@code set(obj, lObj)},
     *  where {@code lObj} is a {@code Long} object and
     *  {@code lObj.longValue() == l}.
     * @param obj the object whose field should be modified
     * @param l the new value for the field of {@code obj}&#xA; being modified
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is either inaccessible or final.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof),&#xA; or if an unwrapping conversion fails.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#set
     */
    setLong(obj: unknown, l: number): void;

    /**
     * Sets the value of a field as a {@code float} on the specified object.
     *  This method is equivalent to
     *  {@code set(obj, fObj)},
     *  where {@code fObj} is a {@code Float} object and
     *  {@code fObj.floatValue() == f}.
     * @param obj the object whose field should be modified
     * @param f the new value for the field of {@code obj}&#xA; being modified
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is either inaccessible or final.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof),&#xA; or if an unwrapping conversion fails.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#set
     */
    setFloat(obj: unknown, f: number): void;

    /**
     * Sets the value of a field as a {@code double} on the specified object.
     *  This method is equivalent to
     *  {@code set(obj, dObj)},
     *  where {@code dObj} is a {@code Double} object and
     *  {@code dObj.doubleValue() == d}.
     * @param obj the object whose field should be modified
     * @param d the new value for the field of {@code obj}&#xA; being modified
     * @throws IllegalAccessException if this {@code Field} object&#xA; is enforcing Java language access control and the underlying&#xA; field is either inaccessible or final.
     * @throws IllegalArgumentException if the specified object is not an&#xA; instance of the class or interface declaring the underlying&#xA; field (or a subclass or implementor thereof),&#xA; or if an unwrapping conversion fails.
     * @throws NullPointerException if the specified object is null&#xA; and the field is an instance field.
     * @throws ExceptionInInitializerError if the initialization provoked&#xA; by this method fails.
     * @see Field#set
     */
    setDouble(obj: unknown, d: number): void;

    getAnnotation(annotationClass: Class): unknown;

    /**
     * {@inheritDoc}
     * @throws NullPointerException {@inheritDoc}
     * @since 1.8
     */
    getAnnotationsByType(annotationClass: Class): unknown;

    /**
 * {@inheritDoc}
  
    */
    getDeclaredAnnotations(): Annotation;

    /**
     * Returns an AnnotatedType object that represents the use of a type to specify
     *  the declared type of the field represented by this Field.
     * @return an object representing the declared type of the field&#xA; represented by this Field
     * @since 1.8
     */
    getAnnotatedType(): AnnotatedType;
  };
