/**
 * This file is auto generated from JavaDoc. Do not modify it manually.
 */
import type { Object } from "../../lang/Object";

/**
 * <p> This interface represents a guard, which is an object that is used
 *  to protect access to another object.
 *
 *  <p>This interface contains a single method, {@code checkGuard},
 *  with a single {@code object} argument. {@code checkGuard} is
 *  invoked (by the GuardedObject {@code getObject} method)
 *  to determine whether or not to allow access to the object.
 * @see GuardedObject
 * @author Roland Schemers
 * @author Li Gong
 */
export type Guard = {
  /**
   * Determines whether or not to allow access to the guarded object
   *  {@code object}. Returns silently if access is allowed.
   *  Otherwise, throws a SecurityException.
   * @param object the object being protected by the guard.
   * @throws SecurityException if access is denied.
   */
  checkGuard(object: unknown): void;
};
