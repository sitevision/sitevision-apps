import type { GenericSiteVisionPortlet } from "../GenericSiteVisionPortlet";
import type { String } from "../../../../../java/lang/String";

/**
 * This class that can be extended when creating GenericPortlet-based portlets that uses the
 *  Sitevision custom portlet mode CONFIG.
 *
 *  <p>
 *     The dispatching of this class ensures that CONFIG mode requests are routed to separate methods
 *     (<em>ActionRequest &raquo; processConfigAction,  RenderRequest &raquo; doConfig</em>).
 *  </p>
 *  <p>
 *     For a basic VIEW portlet that should use the Sitevision custom portlet mode CONFIG, you would typically
 *     extend this class and override the <code>doView</code>, <code>doConfig</code> and <code>processConfigAction</code> methods.
 *  </p>
 *
 *  <p>
 *     <strong>An example!</strong>
 *  </p>
 *  <p>
 *     Below is an example of an implementation of a very simplistic portlet that allows editors
 *     to update a portlet preference via the Sitevision custom portlet mode CONFIG:
 *  </p>
 *  <div style="border:1px dotted gray; padding-left:10px; padding-right:10px">
 *  <pre><code> import senselogic.sitevision.api.portlet.GenericConfigPortlet;
 *
 *  import javax.portlet.*;
 *  import java.io.IOException;
 *  import java.io.PrintWriter;
 *
 *  public class HelloConfigPortlet extends GenericConfigPortlet {
 *     private final static String CITY = "city"; <em>// Name of the preference that can be updated via CONFIG mode</em>
 *
 *     &#64;Override
 *     protected void processConfigAction(ActionRequest anActionRequest, ActionResponse anActionResponse) throws PortletException, IOException {
 *        <em>// GenericConfigPortlet ensures we got here safely, no need to check permissions...</em>
 *        PortletPreferences preferences = anActionRequest.getPreferences();
 *        String newValue = anActionRequest.getParameter(CITY);
 *        if (newValue != null &amp;&amp; !newValue.equals(preferences.getValue(CITY, null))) {
 *           preferences.setValue(CITY, newValue);
 *           preferences.store();
 *        }
 *     }
 *
 *     &#64;Override
 *     protected void doConfig(RenderRequest aRenderRequest, RenderResponse aRenderResponse) throws PortletException, IOException {
 *        <em>// GenericConfigPortlet ensures we got here safely, no need to check permissions...</em>
 *        PrintWriter writer = getWriter(aRenderResponse);
 *
 *        String currentValue = aRenderRequest.getPreferences().getValue(CITY, "");
 *        writer.println("&lt;form action=\""+ aRenderResponse.createActionURL() +"\" method=\"post\"&gt;");
 *        writer.println("   &lt;label for=\"anIdentifier\" class=\"portlet-form-label\"&gt;City:&lt;/label&gt;");
 *        writer.println("   &lt;input id=\"anIdentifier\" class=\"portlet-form-input-field\" name=\""+ CITY +"\" value=\""+ currentValue +"\" /&gt;");
 *        writer.println("   &lt;input class=\"portlet-form-button\" type=\"submit\" value=\"Save "+ CITY +" preference\" /&gt;");
 *        writer.println("&lt;/form&gt;");
 *     }
 *
 *     &#64;Override
 *     protected void doView(RenderRequest aRenderRequest, RenderResponse aRenderResponse) throws PortletException, IOException {
 *        PrintWriter writer = getWriter(aRenderResponse);
 *
 *        String currentValue = aRenderRequest.getPreferences().getValue(CITY, "");
 *        writer.println("&lt;p class=\"portlet-class\"&gt;Favorite city is "+ currentValue +"&lt;/p&gt;");
 *     }
 *  }</code></pre></div>
 *
 *  <p>
 *     Note that the <code>portlet.xml</code> for the portlet above <em>must specify that it is using the Sitevision custom portlet
 *     mode CONFIG</em>! Below is an excerpt of how:
 *  </p>
 *  <div style="border:1px dotted gray; padding-left:10px; padding-right:10px"><pre><code> &lt;?xml version="1.0" encoding="UTF-8"?&gt;
 *  &lt;portlet-app ...&gt;
 *     &lt;portlet&gt;
 *        ...
 *        &lt;supports&gt;
 *           &lt;mime-type&gt;text/html&lt;/mime-type&gt;
 *           &lt;portlet-mode&gt;VIEW&lt;/portlet-mode&gt;
 *           &lt;portlet-mode&gt;CONFIG&lt;/portlet-mode&gt;
 *        &lt;/supports&gt;
 *        ...
 *     &lt;/portlet&gt;
 *     &lt;custom-portlet-mode&gt;
 *        &lt;description&gt;Sitevision config mode&lt;/description&gt;
 *        &lt;portlet-mode&gt;CONFIG&lt;/portlet-mode&gt;
 *     &lt;/custom-portlet-mode&gt;
 *  &lt;/portlet-app&gt;</code></pre></div>
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 */
export type GenericConfigPortlet = GenericSiteVisionPortlet & {
  /**
   * This method routes the render requests to the proper rendering method.
   *  <p>
   *     The standard portlet modes are supported:
   *  </p>
   *  <ul>
   *     <li>Render requests in <code>PortletMode.VIEW</code> will be routed to the <code>doView</code> method</li>
   *     <li>Render requests in <code>PortletMode.EDIT</code> will be routed to the <code>doEdit</code> method</li>
   *     <li>Render requests in <code>PortletMode.HELP</code> will be routed to the <code>doHelp</code> method</li>
   *  </ul>
   *
   *  <p>
   *     This method also supports routing of the Sitevision custom portlet mode {@link #CONFIG}.
   *  </p>
   *  <ul>
   *     <li>
   *        Render requests in portlet mode {@link #CONFIG} will be routed to the
   *        {@link #doConfig(javax.portlet.RenderRequest, javax.portlet.RenderResponse) doConfig} method
   *     </li>
   *  </ul>
   *
   *  <p>
   *     If the window state of this portlet is <code>WindowState.MINIMIZED</code>, this method does <em>not</em> route
   *     to any of the rendering methods.
   *  </p>
   *  <p>
   *     <em>Note!</em> You can not use this class if your portlet should support other portlet modes than the above mentioned.
   *     This method is final to ensure that routing/dispatching won't break.
   *  </p>
   * @param aRenderRequest the render request
   * @param aRenderResponse the render response
   * @throws PortletException if the portlet cannot fulfill the request
   * @throws IOException if the streaming causes an I/O problem
   */
  doDispatch(aRenderRequest: unknown, aRenderResponse: unknown): void;

  /**
   * Called by the Sitevision portlet container to allow the portlet to process an action request.
   *  This method is called if the client request was originated by a URL created (by the portlet) with the
   *  <code>RenderResponse.createActionURL()</code> method.
   *
   *  This method routes the action requests to the proper rendering method.
   *  <p>
   *     The standard portlet modes are supported:
   *  </p>
   *  <ul>
   *     <li>
   *        Action requests in <code>PortletMode.VIEW</code> will be routed to the
   *        {@link #processStandardAction(javax.portlet.ActionRequest, javax.portlet.ActionResponse) processStandardAction} method
   *     </li>
   *     <li>
   *        Action requests in <code>PortletMode.EDIT</code> will be routed to the
   *        {@link #processStandardAction(javax.portlet.ActionRequest, javax.portlet.ActionResponse) processStandardAction} method
   *     </li>
   *     <li>
   *        Action requests in <code>PortletMode.HELP</code> will be routed to the
   *        {@link #processStandardAction(javax.portlet.ActionRequest, javax.portlet.ActionResponse) processStandardAction} method
   *     </li>
   *  </ul>
   *
   *  <p>
   *     This method also supports routing of the Sitevision custom portlet mode {@link #CONFIG}.
   *  </p>
   *  <ul>
   *     <li>
   *        Action requests in portlet mode {@link #CONFIG} will be routed to the
   *        {@link #processConfigAction(javax.portlet.ActionRequest, javax.portlet.ActionResponse)} processConfigAction} method
   *     </li>
   *  </ul>
   *
   *  <p>
   *     <strong>Note!</strong> The portlet mode for a CONFIG request will always be re-set to <code>PortletMode.VIEW</code> when
   *     execution of <code>processConfigAction</code> has completed (to ensure that VIEW will be used in the subsequent rendering phase).
   *     This method is final to ensure that routing/dispatching won't break.
   *  </p>
   * @param aActionRequest the action request
   * @param aActionResponse the action response
   * @throws PortletException if the portlet cannot fulfill the request
   * @throws IOException if the streaming causes an I/O problem
   */
  processAction(aActionRequest: unknown, aActionResponse: unknown): void;

  /**
   * This is the "processAction" method for the standard portlet modes (<code>VIEW</code>, <code>EDIT</code> and <code>HELP</code>).
   *
   *  <p>
   *     The default implementation does absolutely nothing!
   *     Override this method to implement custom behaviour.
   *  </p>
   * @param aActionRequest the action request
   * @param aActionResponse the action response
   * @throws PortletException if the portlet cannot fulfill the request
   * @throws IOException if the streaming causes an I/O problem
   * @see #processAction(javax.portlet.ActionRequest, javax.portlet.ActionResponse)
   */
  processStandardAction(
    aActionRequest: unknown,
    aActionResponse: unknown
  ): void;

  /**
   * This is the "processAction" method for the Sitevision custom portlet mode {@link #CONFIG}.
   *
   *  <p>
   *     <em>This method will only be executed if requesting user has sufficient rights!</em>
   *  </p>
   * @param aActionRequest the action request
   * @param aActionResponse the action response
   * @throws PortletException if the portlet cannot fulfill the request
   * @throws IOException if the streaming causes an I/O problem
   * @see #processAction(javax.portlet.ActionRequest, javax.portlet.ActionResponse)
   */
  processConfigAction(aActionRequest: unknown, aActionResponse: unknown): void;

  /**
   * Renders the portlet configuration form that should be POST:ed using an <code>ActionURL</code>.
   *  <p>
   *     Invoked in the rendering phase when the portlet is in custom portlet mode {@link #CONFIG}.
   *     E.g. when an editor with sufficient rights (write permission on the actual page the portlet instance resides)
   *     double-clicks this portlet in the Sitevision editor.
   *  </p>
   *  <p>
   *     <em>This method will only be executed if requesting user has sufficient rights!</em>
   *  </p>
   * @param aRenderRequest the render request
   * @param aRenderResponse the render response
   * @throws PortletException if the portlet cannot fulfill the request
   * @throws IOException if the portlet is unavailable to perform render at this time
   * @see #doDispatch(javax.portlet.RenderRequest, javax.portlet.RenderResponse)
   */
  doConfig(aRenderRequest: unknown, aRenderResponse: unknown): void;

  /**
 * Name of the Sitevision custom portlet mode CONFIG.
  
    */
  CONFIG: string;
};
