import VelocityContext from "../VelocityContext";

/**
 * A renderer that can be used in custom portlets for rendering Velocity templates.
 *
 * <p>
 * An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getVelocityRenderer()}.
 * See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 *
 * <div style="margin-top:15px; border:1px dotted gray; padding-left:10px; padding-right:10px">
 *      <p style="margin-bottom:10px">
 *       <em><strong>Note!</strong> This renderer relies heavily on the internal Sitevision Velocity rendering facilities!</em>
 *    </p>
 *    <p style="margin-top:0; margin-bottom:10px">
 *       <em>The upside of this is that you get caching and such "for free" and you don't have to include or use any Velocity jar
 *       when creating your portlet application (war file). You will also avoid possible Velocity.init() caveats and such.
 *       The possible downside is that the Velocity engine (currently version 1.7) potentially can be replaced at
 *       any time (i.e. whenever Sitevision is updated).</em>
 *    </p>
 *    <p style="margin-top:0; margin-bottom:10px">
 *       &rArr; <em>Ensure your Velocity template(-s) doesn't contain really "edgy" stuff or relies on bugs in currently used
 *       Velocity version. If so, your code might potentially break in a future Sitevision update!</em>
 *    </p>
 * </div>
 *
 * <p>
 *    Below is a simple example of how the VelocityRenderer can be used in a custom portlet:
 * </p>
 * <pre><code>
 * import senselogic.sitevision.api.Utils;
 * import senselogic.sitevision.api.portlet.GenericSiteVisionPortlet;
 * import senselogic.sitevision.api.render.velocity.VelocityContext;
 * import senselogic.sitevision.api.render.velocity.VelocityException;
 * import senselogic.sitevision.api.render.velocity.VelocityRenderer;
 *
 * import javax.portlet.*;
 * import java.io.IOException;
 * import java.io.PrintWriter;
 *
 * public class HelloVelocityPortlet extends GenericSiteVisionPortlet {
 *    private String template;    <em>// Never reassigned after init, ok to use as field</em>
 *    private String subTemplate; <em>// Never reassigned after init, ok to use as field</em>
 *
 *    &#64;Override
 *    public void init(PortletConfig portletConfig) throws PortletException {
 *       super.init(portletConfig);
 *
 *       template =
 *          " Current request is: $request &lt;br /&gt;                " +
 *          " Utils is: $sitevisionUtils &lt;br /&gt;                  " +
 *          " Session is: $jcrSession &lt;br /&gt;                     " +
 *          " VelocityEvaluator is: $velocityEvaluator &lt;br /&gt;    " +
 *          " &lt;br /&gt;                                             " +
 *          " #set($count = 1)                                   " +
 *          " This is written with the VelocityEvaluator: &lt;br /&gt; " +
 *          " &lt;div style=\"margin:0 20px\"&gt;                      " +
 *          "    $velocityEvaluator.evaluate($evaluateThis)      " +
 *          " &lt;/div&gt;                                             ";
 *
 *       subTemplate =
 *          " #if ($count)                                                           " +
 *          "    count exists and is: $count                                         " +
 *          " #else                                                                  " +
 *          "    The 'count' reference is missing in the context I'm rendering in... " +
 *          " #end                                                                   ";
 *    }
 *
 *    &#64;Override
 *    protected void doView(RenderRequest renderRequest, RenderResponse renderResponse) throws PortletException, IOException {
 *       PrintWriter writer = getWriter(renderResponse);
 *
 *       <em>// Get the Velocity renderer</em>
 *       Utils utils = getUtils(renderRequest);
 *       VelocityRenderer velocityRenderer = utils.getVelocityRenderer();
 *
 *       <em>// Create a Sitevision API rendering context (i.e. $request, $sitevisionUtils, $jcrSession and $velocityEvaluator are added)</em>
 *       VelocityContext context = velocityRenderer.getVelocityContext(renderRequest, writer);
 *       context.put("evaluateThis", subTemplate); <em>// Add a 'evaluateThis' reference used by the $velocityEvaluator, see templates above</em>
 *
 *       <em>// Render!</em>
 *       try {
 *          velocityRenderer.render(context, template);
 *       } catch (VelocityException e) {
 *          utils.getLogUtil().debug("Exception occurred while rendering 'Hello Velocity' portlet template", e);
 *       }
 *    }
 *
 *    &#64;Override
 *    public void destroy() {
 *       template = null;
 *       subTemplate = null;
 *       super.destroy();
 *    }
 * }</code></pre>
 *
 * <p>
 *    The portlet code above demonstrates the actual Java portlet code, but also gives some Velocity code examples.
 *    Though, this example is probably somewhat non-realistic in the real world. When implementing a proper variant of this
 *    portlet, you would typically put all of your Velocity code in separate .vm files instead of building massive concatenated
 *    Java strings...
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 */

interface VelocityRenderer {
  /**
   * Creates and returns an empty VelocityContext instance.
   * @param aWriter the rendering output (typically RenderResponse.getWriter()), not <code>null</code>
   * @return a VelocityContext instance that can be used in the render method
   * @throws IllegalArgumentException if aWriter is <code>null</code>
   */
  getVelocityContext(aWriter: java.io.Writer): VelocityContext;

  /**
   * Creates and returns a VelocityContext instance with the default Sitevision API mappings.
   *
   * <table style="margin-top:20px; width:600px; border:1px solid black">
   *    <caption style="text-align:left">Pre-added mappings in VelocityContext (if aPortletRequest is non-null)</caption>
   *    <tr>
   *       <th style="text-align:left; background-color:black; color:white">Name (available via $)</th>
   *       <th style="text-align:left; background-color:black; color:white">Value (an object instance)</th>
   *    </tr>
   *    <tr>
   *       <td><code>request</code></td>
   *       <td>the <code>PortletRequest</code> instance</td>
   *    </tr>
   *    <tr>
   *       <td><code>sitevisionUtils</code></td>
   *       <td>an instance of {@link senselogic.sitevision.api.Utils}</td>
   *    </tr>
   *    <tr>
   *       <td><code>jcrSession</code></td>
   *       <td>an instance of {@link javax.jcr.Session}</td>
   *    </tr>
   *    <tr>
   *       <td><code>velocityEvaluator</code></td>
   *       <td>an instance of {@link VelocityEvaluator}</td>
   *    </tr>
   * </table>
   * @param aPortletRequest the request to use as base for adding the default Sitevision API mappings. No mappings will be added if <code>null</code>.
   * @param aWriter the rendering output <em>(typically RenderResponse.getWriter())</em>, not <code>null</code>
   * @return a VelocityContext instance that can be used in the render method
   * @throws IllegalArgumentException if aWriter is <code>null</code>
   */
  getVelocityContext(
    aPortletRequest: javax.portlet.PortletRequest,
    aWriter: java.io.Writer
  ): VelocityContext;

  /**
   * Creates and returns a VelocityContext instance with the default Sitevision API mappings.
   *
   * <table style="margin-top:20px; width:600px; border:1px solid black">
   *    <caption style="text-align:left">Pre-added mappings in VelocityContext (if aServletRequest is non-null)</caption>
   *    <tr>
   *       <th style="text-align:left; background-color:black; color:white">Name (available via $)</th>
   *       <th style="text-align:left; background-color:black; color:white">Value (an object instance)</th>
   *    </tr>
   *    <tr>
   *       <td><code>request</code></td>
   *       <td>the <code>ServletRequest</code> instance</td>
   *    </tr>
   *    <tr>
   *       <td><code>sitevisionUtils</code></td>
   *       <td>an instance of {@link senselogic.sitevision.api.Utils}</td>
   *    </tr>
   *    <tr>
   *       <td><code>jcrSession</code></td>
   *       <td>an instance of {@link javax.jcr.Session}</td>
   *    </tr>
   *    <tr>
   *       <td><code>velocityEvaluator</code></td>
   *       <td>an instance of {@link VelocityEvaluator}</td>
   *    </tr>
   * </table>
   * @param aServletRequest the request to use as base for adding the default Sitevision API mappings. No mappings will be added if <code>null</code>.
   * @param aWriter the rendering output <em>(typically HttpServletResponse.getWriter())</em>, not <code>null</code>
   * @return a VelocityContext instance that can be used in the render method
   * @throws IllegalArgumentException if aWriter is <code>null</code>
   */
  getVelocityContext(
    aServletRequest: javax.servlet.ServletRequest,
    aWriter: java.io.Writer
  ): VelocityContext;

  /**
   * Renders a Velocity template string.
   * @param aContext a context with mappings needed by aTemplate (Note! this must be an instance created via any of the methods above, a custom VelocityContext implementation is not allowed).
   * @param aTemplate the template string (i.e. if the actual template is in a file, you must read it and put it in a string that can be passed to this method)
   * @throws IllegalArgumentException if aTemplate is <code>null</code>, if aContext is <code>null</code> or not created via VelocityRenderer
   * @throws VelocityException if parsing/evaluation of aTemplate fails
   * @throws IOException if an I/O exception occurs during the rendering process
   */
  render(aContext: VelocityContext, aTemplate: java.lang.String): void;
}
