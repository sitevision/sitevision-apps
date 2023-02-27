import type { Class } from "../../Class";

import type { Annotation } from "../../annotation/Annotation";
import type { Object } from "../../Object";
import type { AnnotatedElement } from "../AnnotatedElement";

/**
 * The AccessibleObject class is the base class for Field, Method and
 *  Constructor objects.  It provides the ability to flag a reflected
 *  object as suppressing default Java language access control checks
 *  when it is used.  The access checks--for public, default (package)
 *  access, protected, and private members--are performed when Fields,
 *  Methods or Constructors are used to set or get fields, to invoke
 *  methods, or to create and initialize new instances of classes,
 *  respectively.
 *
 *  <p>Setting the {@code accessible} flag in a reflected object
 *  permits sophisticated applications with sufficient privilege, such
 *  as Java Object Serialization or other persistence mechanisms, to
 *  manipulate objects in a manner that would normally be prohibited.
 *
 *  <p>By default, a reflected object is <em>not</em> accessible.
 * @see Field
 * @see Method
 * @see Constructor
 * @see ReflectPermission
 * @since 1.2
 */
export type AccessibleObject = Object &
  AnnotatedElement & {
    /**
     * Set the {@code accessible} flag for this object to
     *  the indicated boolean value.  A value of {@code true} indicates that
     *  the reflected object should suppress Java language access
     *  checking when it is used.  A value of {@code false} indicates
     *  that the reflected object should enforce Java language access checks.
     *
     *  <p>First, if there is a security manager, its
     *  {@code checkPermission} method is called with a
     *  {@code ReflectPermission("suppressAccessChecks")} permission.
     *
     *  <p>A {@code SecurityException} is raised if {@code flag} is
     *  {@code true} but accessibility of this object may not be changed
     *  (for example, if this element object is a {@link Constructor} object for
     *  the class {@link java.lang.Class}).
     *
     *  <p>A {@code SecurityException} is raised if this object is a {@link
     *  java.lang.reflect.Constructor} object for the class
     *  {@code java.lang.Class}, and {@code flag} is true.
     * @param flag the new value for the {@code accessible} flag
     * @throws SecurityException if the request is denied.
     * @see SecurityManager#checkPermission
     * @see java.lang.RuntimePermission
     */
    setAccessible(flag: boolean): void;

    /**
     * Get the value of the {@code accessible} flag for this object.
     * @return the value of the object's {@code accessible} flag
     */
    isAccessible(): boolean;

    getAnnotation(annotationClass: Class): unknown;

    /**
     * {@inheritDoc}
     * @throws NullPointerException {@inheritDoc}
     * @since 1.5
     */
    isAnnotationPresent(annotationClass: Class): boolean;

    getAnnotationsByType(annotationClass: Class): unknown;

    getAnnotations(): Annotation;

    getDeclaredAnnotation(annotationClass: Class): unknown;

    getDeclaredAnnotationsByType(annotationClass: Class): unknown;

    getDeclaredAnnotations(): Annotation;
  };
