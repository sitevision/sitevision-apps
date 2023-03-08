import type { Exception } from "../../../../../../java/lang/Exception";
import type { Object } from "../../../../../../java/lang/Object";
import type { ExceptionSuppressingProxyConstants } from "../../../render/velocity/VelocityAccess.ExceptionSuppressingProxyConstants";

/**
 * Proxies an object and delegates all interface method invocations to the proxied object in order to ensure that no invocation
 *  will throw an exception.
 *
 *  <p>
 *     This interface is an exception suppressing implementation of a so called
 *     <em><a href="http://docs.oracle.com/javase/8/docs/technotes/guides/reflection/proxy.html">Dynamic proxy</a></em>.
 *     This means it will proxy all methods of an object that are declared in an interface implemented by the object.
 *     If a method invocation through this proxy throws an <code>Exception</code>, it will be catched and the default value will be returned
 *     (e.g. <code>null</code>, <code>0</code>, <code>false</code> etc).
 *  </p>
 *
 *  <p>
 *     <strong>Important note! </strong>This interface is intended to be used <em>only</em> in contexts where exceptions will cause <em>serious</em>
 *     trouble if they arise and the context doesn't provide proper exception handling (e.g. when executing a Velocity template).
 *     Suppressing exceptions is generally a <em>really</em> bad idea and using this proxy will affect performance.
 *     Hence, this interface should only be used where the upsides with suppressing exceptions far outweighs the downsides.
 *     This interface should be used only as a temporary patch/solution until the "real" problem causing the exception has been solved.
 *  </p>
 *
 *  <p>
 *     The state of an ExceptionSuppressingProxy is available at all times and updated for each method invocation
 *     (except for invocations of methods declared in this interface).
 *     If last method invocation resulted in a thrown exception the proxy status will be {@link #EXCEPTION_THROWN_STATUS}
 *     and the exception will be available via {@link #getCurrentException()}.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getExceptionSuppressingProxy(Object)}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 *
 *  <p>
 *  ----------------------------------------------------------------------------------------------------
 *  </p>
 *
 *  <p>
 *  <strong>Example of how <code>ExceptionSuppressingProxy</code> could be used in Velocity:</strong>
 *  </p>
 *
 *  <p>Case description:</p>
 *  <p>
 *     <em>You have a Velocity template where a certain method invocation sometimes throws an exception.
 *     The rendered output of the template gets corrupt whenever an exception is thrown and you have not yet tracked down the root cause
 *     of the exception. Until the root cause is found and the problem is fixed, you need a temporary solution that ignores exceptions
 *     to keep template output acceptable. Since the method is declared in an interface and implemented in the instance you're invoking,
 *     you're in sheer luck. You can use an <code>ExceptionSuppressingProxy</code> to suppress exceptions in order to diminish output
 *     problems.</em><p>This is what the code looks like before your temporary fix:
 *  </p>
 *  <pre><code>
 *     &lt;p&gt;
 *        $myObject.thisNeverThrowsExceptions()
 *        $myObject.thisMethodSometimesThrowsExceptions() <em>## This method is declared in an interface, hence can be proxied</em>
 *     &lt;/p&gt;
 *  </code></pre>
 *  This is how you could use an <code>ExceptionSuppressingProxy</code> to apply a temporary fix:<pre><code>
 *     &lt;p&gt;
 *        $myObject.thisNeverThrowsExceptions()
 *
 *        <em>## Get an ExceptionSuppressingProxy instance for myObject</em>
 *        #set ($proxy = $sitevisionUtils.getExceptionSuppressingProxy($myObject))
 *
 *        $!proxy.thisMethodSometimesThrowsExceptions() <em>## Method invoked through a proxy, might return null</em>
 *     &lt;/p&gt;
 *  </code></pre>
 * @author Magnus Lövgren
 * @since Sitevision 2.6.1_09
 */
export type ExceptionSuppressingProxy = ExceptionSuppressingProxyConstants & {
  /**
   * Returns current status
   * @return {@link #NO_OBJECT_PROXIED_STATUS} or {@link #NO_EXCEPTION_THROWN_STATUS} or {@link #EXCEPTION_THROWN_STATUS}
   */
  getCurrentStatus(): number;

  /**
   * Returns the exception that was thrown during last method invocation of the proxied object.
   * @return the exception thrown during last method invocation, or <code>null</code> if no exeption was thrown
   */
  getCurrentException(): Exception;

  /**
   * Returns the proxied object
   * @return the object that is proxied by an instance of this interface, or <code>null</code> if no proxied object is set
   */
  getProxiedObject(): unknown;

  /**
 * The status indicating that this proxy has no object set, nothing to proxy.
  
    */
  NO_OBJECT_PROXIED_STATUS: number;

  /**
 * The status indicating that last method invocation did not throw an exception.
  
    */
  NO_EXCEPTION_THROWN_STATUS: number;

  /**
 * The status indicating that last method invocation did throw an exception
  
    */
  EXCEPTION_THROWN_STATUS: number;
};
