import type { Throwable } from "../Throwable";

/**
 * The class {@code Exception} and its subclasses are a form of
 *  {@code Throwable} that indicates conditions that a reasonable
 *  application might want to catch.
 *
 *  <p>The class {@code Exception} and any subclasses that are not also
 *  subclasses of {@link RuntimeException} are <em>checked
 *  exceptions</em>.  Checked exceptions need to be declared in a
 *  method or constructor's {@code throws} clause if they can be thrown
 *  by the execution of the method or constructor and propagate outside
 *  the method or constructor boundary.
 * @author Frank Yellin
 * @see java.lang.Error
 * @jls 11.2 Compile-Time Checking of Exceptions
 * @since JDK1.0
 */
export type Exception = Throwable & {};
