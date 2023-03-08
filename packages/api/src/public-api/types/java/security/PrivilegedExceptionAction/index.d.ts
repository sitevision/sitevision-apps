/**
 * A computation to be performed with privileges enabled, that throws one or
 *  more checked exceptions.  The computation is performed by invoking
 *  {@code AccessController.doPrivileged} on the
 *  {@code PrivilegedExceptionAction} object.  This interface is
 *  used only for computations that throw checked exceptions;
 *  computations that do not throw
 *  checked exceptions should use {@code PrivilegedAction} instead.
 * @see AccessController
 * @see AccessController#doPrivileged(PrivilegedExceptionAction)
 * @see AccessController#doPrivileged(PrivilegedExceptionAction,&#xA; AccessControlContext)
 * @see PrivilegedAction
 */
export type PrivilegedExceptionAction = {
  /**
   * Performs the computation.  This method will be called by
   *  {@code AccessController.doPrivileged} after enabling privileges.
   * @return a class-dependent value that may represent the results of the&#xA; computation. Each class that implements&#xA; {@code PrivilegedExceptionAction} should document what&#xA; (if anything) this value represents.
   * @throws Exception an exceptional condition has occurred. Each class&#xA; that implements {@code PrivilegedExceptionAction} should&#xA; document the exceptions that its run method can throw.
   * @see AccessController#doPrivileged(PrivilegedExceptionAction)
   * @see AccessController#doPrivileged(PrivilegedExceptionAction,AccessControlContext)
   */
  run(): unknown;
};
