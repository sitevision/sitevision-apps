import type { Utils } from "../../../../../../server/Utils";
import type { Session } from "../../../../../../server/Session";

import type { PrintWriter } from "../../../../../java/io/PrintWriter";

/**
 * This class that can be extended when creating GenericPortlet-based portlets that needs easy access to the Sitevision API.
 * @author Magnus Lövgren
 * @since Sitevision 3.0
 */
export type GenericSiteVisionPortlet = {
  /**
   * Convenience method that gets the Utils instance from a portlet request.
   * @param aPortletRequest a portlet request
   * @return an Utils instance, <code>null</code> if <code>aPortletRequest</code> is <code>null</code>
   */
  getUtils(aPortletRequest: unknown): Utils;

  /**
   * Convenience method that gets the Session instance from a portlet request.
   * @param aPortletRequest a portlet request
   * @return a Session instance, <code>null</code> if <code>aPortletRequest</code> is <code>null</code>
   */
  getJcrSession(aPortletRequest: unknown): Session;

  /**
   * Convenience method that sets the <code>text/html</code> content type and gets the render response writer.
   *
   *  <p>
   *     The portlet specification states that <em>the content type for the render response must be set before
   *     obtaining the response writer</em>. This convenience method ensures that.
   *  </p>
   *  <pre><code>     aRenderResponse.setContentType("text/html");
   *      return aRenderResponse.getWriter();</code></pre>
   *  <p>
   *     <strong>Note!</strong> This method should be called only <em>once</em> during your rendering process (and you
   *     should of course <em>only</em> use this method if you render content with the <code>text/html</code> content type).
   *  </p>
   * @param aRenderResponse a render response
   * @return the <code>aRenderResponse</code> writer, <code>null</code> if <code>aRenderResponse</code> is <code>null</code>
   * @throws IOException if an input or output exception occurred
   * @throws IllegalStateException if the <code>getPortletOutputStream</code> method has been called on <code>aRenderResponse</code>
   */
  getWriter(aRenderResponse: unknown): PrintWriter;

  /**
   * Convenience method that sets the <code>application/json</code> content type with <code>UTF-8</code>
   *  charset and gets the resource response writer.
   *
   *  <p>
   *     The portlet specification states that <em>the content type for the resource response must be set before
   *     obtaining the response writer</em>. This convenience method ensures that.
   *
   *  </p>
   *  <pre><code>     aResourceResponse.setContentType("application/json");
   *      aResourceResponse.setCharacterEncoding("UTF-8");
   *      return aResourceResponse.getWriter();</code></pre>
   *  <p>
   *     <strong>Note!</strong> This method should be called only <em>once</em> during your serve resource process (and you should of course
   *     <em>only</em> use this method if you serve a <code>UTF-8</code> resource with the <code>application/json</code> content type).
   *  </p>
   * @param aResourceResponse a resource response
   * @return the <code>aResourceResponse</code> writer, <code>null</code> if <code>aResourceResponse</code> is <code>null</code>
   * @throws IOException if an input or output exception occurred
   * @throws IllegalStateException if the <code>getPortletOutputStream</code> method has been called on <code>aResourceResponse</code>
   * @since Sitevision 4.0
   */
  getWriter(aResourceResponse: unknown): PrintWriter;
};
