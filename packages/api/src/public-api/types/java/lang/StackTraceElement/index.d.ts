import type { String } from "../String";

import type { Object } from "../Object";
import type { Serializable } from "../../io/Serializable";

/**
 * An element in a stack trace, as returned by {@link
 *  Throwable#getStackTrace()}.  Each element represents a single stack frame.
 *  All stack frames except for the one at the top of the stack represent
 *  a method invocation.  The frame at the top of the stack represents the
 *  execution point at which the stack trace was generated.  Typically,
 *  this is the point at which the throwable corresponding to the stack trace
 *  was created.
 * @since 1.4
 * @author Josh Bloch
 */
export type StackTraceElement = Object &
  Serializable & {
    /**
     * Returns the name of the source file containing the execution point
     *  represented by this stack trace element.  Generally, this corresponds
     *  to the {@code SourceFile} attribute of the relevant {@code class}
     *  file (as per <i>The Java Virtual Machine Specification</i>, Section
     *  4.7.7).  In some systems, the name may refer to some source code unit
     *  other than a file, such as an entry in source repository.
     * @return the name of the file containing the execution point&#xA; represented by this stack trace element, or {@code null} if&#xA; this information is unavailable.
     */
    getFileName(): string;

    /**
     * Returns the line number of the source line containing the execution
     *  point represented by this stack trace element.  Generally, this is
     *  derived from the {@code LineNumberTable} attribute of the relevant
     *  {@code class} file (as per <i>The Java Virtual Machine
     *  Specification</i>, Section 4.7.8).
     * @return the line number of the source line containing the execution&#xA; point represented by this stack trace element, or a negative&#xA; number if this information is unavailable.
     */
    getLineNumber(): number;

    /**
     * Returns the fully qualified name of the class containing the
     *  execution point represented by this stack trace element.
     * @return the fully qualified name of the {@code Class} containing&#xA; the execution point represented by this stack trace element.
     */
    getClassName(): string;

    /**
     * Returns the name of the method containing the execution point
     *  represented by this stack trace element.  If the execution point is
     *  contained in an instance or class initializer, this method will return
     *  the appropriate <i>special method name</i>, {@code <init>} or
     *  {@code <clinit>}, as per Section 3.9 of <i>The Java Virtual
     *  Machine Specification</i>.
     * @return the name of the method containing the execution point&#xA; represented by this stack trace element.
     */
    getMethodName(): string;

    /**
     * Returns true if the method containing the execution point
     *  represented by this stack trace element is a native method.
     * @return {@code true} if the method containing the execution point&#xA; represented by this stack trace element is a native method.
     */
    isNativeMethod(): boolean;

    /**
     * Returns a string representation of this stack trace element.  The
     *  format of this string depends on the implementation, but the following
     *  examples may be regarded as typical:
     *  <ul>
     *  <li>
     *    {@code "MyClass.mash(MyClass.java:9)"} - Here, {@code "MyClass"}
     *    is the <i>fully-qualified name</i> of the class containing the
     *    execution point represented by this stack trace element,
     *    {@code "mash"} is the name of the method containing the execution
     *    point, {@code "MyClass.java"} is the source file containing the
     *    execution point, and {@code "9"} is the line number of the source
     *    line containing the execution point.
     *  <li>
     *    {@code "MyClass.mash(MyClass.java)"} - As above, but the line
     *    number is unavailable.
     *  <li>
     *    {@code "MyClass.mash(Unknown Source)"} - As above, but neither
     *    the file name nor the line  number are available.
     *  <li>
     *    {@code "MyClass.mash(Native Method)"} - As above, but neither
     *    the file name nor the line  number are available, and the method
     *    containing the execution point is known to be a native method.
     *  </ul>
     * @see Throwable#printStackTrace()
     */
    toString(): string;

    /**
     * Returns true if the specified object is another
     *  {@code StackTraceElement} instance representing the same execution
     *  point as this instance.  Two stack trace elements {@code a} and
     *  {@code b} are equal if and only if:
     *  <pre>{@code
     *      equals(a.getFileName(), b.getFileName()) &&
     *      a.getLineNumber() == b.getLineNumber()) &&
     *      equals(a.getClassName(), b.getClassName()) &&
     *      equals(a.getMethodName(), b.getMethodName())
     *  }</pre>
     *  where {@code equals} has the semantics of {@link
     *  java.util.Objects#equals(Object, Object) Objects.equals}.
     * @param obj the object to be compared with this stack trace element.
     * @return true if the specified object is another&#xA; {@code StackTraceElement} instance representing the same&#xA; execution point as this instance.
     */
    equals(obj: unknown): boolean;

    /**
 * Returns a hash code value for this stack trace element.
  
    */
    hashCode(): number;
  };
