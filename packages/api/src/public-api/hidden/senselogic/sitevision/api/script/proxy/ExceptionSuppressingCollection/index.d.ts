/**
 * Decorates the iterator of a collection with a {@link ExceptionSuppressingIterator} to ensure exceptions are suppressed for all
 * iterator invocations.
 *
 * <p>
 *    The sole purpose of the <code>ExceptionSuppressingCollection</code> is to provide easy access to a decorated iterator
 *    (i.e. an {@link ExceptionSuppressingIterator}). You should <em>not</em> create a collection of exception suppressing proxys
 *    (i.e. <code>Collection&lt;ExceptionSuppressingProxy&gt;</code>) yourself. You should use <code>ExceptionSuppressingCollection</code>
 *    with your "regular" collection since the actual proxying is done by the iterator itself.
 * </p>
 * <p>
 *    Note that the <code>next</code> method of the interator returns an instance of a <em>Dynamic proxy</em> so not all methods can be invoked
 *    directly on the returned object. To invoke a method that is not proxied (i.e. a method not declared in an interface the object implements),
 *    you must extract the "real" object from the proxy and use that reference when invoking the method. See {@link ExceptionSuppressingIterator}
 *    for more information about the iterator and {@link ExceptionSuppressingProxy} for more information about dynamic proxies and how to extract
 *    "real" object.
 * </p>
 *
 * <p>
 *    <strong>Important note! </strong>This interface is intended to be used <em>only</em> in contexts where exceptions when iterating a
 *    collection will cause <em>serious</em> trouble if they arise and the context doesn't provide proper exception handling
 *    (e.g. when rendering a Velocity template). Suppressing exceptions is generally a bad idea and using this decorator will affect performance.
 *    Hence, this interface should only be used where the upsides with suppressing exceptions outweighs the downsides.
 *    This interface should be used only as a temporary patch/solution until the "real" problem causing the exception has been solved.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getExceptionSuppressingCollection(java.util.Collection)}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 *
 * <p>
 * ----------------------------------------------------------------------------------------------------
 * </p>
 *
 * <p>
 * <strong>Example of how <code>ExceptionSuppressingCollection</code> could be used in Velocity:</strong>
 * </p>
 *
 * <p>Case description:</p>
 * <p>
 *    <em>You have a Velocity template where you iterate a collection. Sometimes a certain method throws an exception.
 *    The rendered output of the template gets corrupt whenever an exception is thrown and you have not yet tracked down the root
 *    cause of the exception. Until the root cause is found and the problem is fixed, you need a temporary solution that ignores
 *    exceptions to keep template output acceptable. Since the method is declared in an interface and implemented in the instance
 *    you're invoking, you're in sheer luck. You can decorate your collection with a <code>ExceptionSuppressingCollection</code>
 *    to get a decorated iterator. When interating, all returned elements are proxied by an <code>ExceptionSuppressingProxy</code>.
 *    Invoking the method through the proxy will suppress exceptions and you can diminish the output problems.
 *    Note that you should invoke the real object for all non-problematic methods and methods that can't be proxied
 *    (i.e. methods not declared in an interface). To get a reference to the real object,
 *    use {@link ExceptionSuppressingProxy#getProxiedObject()}.</em>
 * </p>
 * <p>
 *    This is what the code looks like before your temporary fix:
 * </p>
 * <pre><code>
 *    #foreach ($item in $myCollection)
 *       &lt;p&gt;
 *          $item.thisNeverThrowsExceptions()
 *          $item.thisMethodSometimesThrowsExceptions()
 *       &lt;/p&gt;
 *    #end
 * </code></pre>
 * <p>
 *    This is how you could use an <code>ExceptionSuppressingCollection</code> to apply a temporary fix:
 * </p>
 * <pre><code>
 *    <em>## Decorate collection</em>
 *    #set ($decoratedCollection = $sitevisionUtils.getExceptionSuppressingCollection($myCollection))
 *
 *    #foreach ($item in $decoratedCollection)
 *       &lt;p&gt;
 *          <em>## Get the real object and invoke non-problematic method as usual</em>
 *          #set ($realObject = $item.getProxiedObject())
 *
 *          $realObject.thisNeverThrowsExceptions()
 *          $!item.thisMethodSometimesThrowsExceptions() <em>## Executed through a proxy, might return null</em>
 *      &lt;/p&gt;
 *   #end
 *   &lt;/p&gt;
 * </code></pre>
 * @author Magnus Lövgren
 * @since Sitevision 2.6.1_09
 */
interface ExceptionSuppressingCollection {
  /**
   * Returns an exception suppressing iterator that ensures no exceptions will be thrown during iteration.
   * @return a {@link ExceptionSuppressingIterator} that suppresses exceptions and returns proxied items
   */
  iterator(): unknown;
}

export default ExceptionSuppressingCollection;
