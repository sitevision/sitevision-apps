import type { Exception } from "../Exception";

/**
 * {@code RuntimeException} is the superclass of those
 *  exceptions that can be thrown during the normal operation of the
 *  Java Virtual Machine.
 *
 *  <p>{@code RuntimeException} and its subclasses are <em>unchecked
 *  exceptions</em>.  Unchecked exceptions do <em>not</em> need to be
 *  declared in a method or constructor's {@code throws} clause if they
 *  can be thrown by the execution of the method or constructor and
 *  propagate outside the method or constructor boundary.
 * @author Frank Yellin
 * @jls 11.2 Compile-Time Checking of Exceptions
 * @since JDK1.0
 */
export type RuntimeException = Exception & {};
