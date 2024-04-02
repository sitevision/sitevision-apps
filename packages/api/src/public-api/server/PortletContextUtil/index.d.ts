import type { Node } from "../../types/javax/jcr/Node";
import type { Locale } from "../../types/java/util/Locale";

import type { String } from "../../types/java/lang/String";
import type { PortletContextUtilConstants } from "../../types/senselogic/sitevision/api/render/velocity/VelocityAccess.PortletContextUtilConstants";

/**
 * Portlet context utility interface.
 *
 *  <p>
 *     Contains methods for retrieving information about present portlet execution context.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.Utils#getPortletContextUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 */
export interface PortletContextUtil extends PortletContextUtilConstants {
  /**
   * The offline version (i.e. the version used when editing in the Sitevision editor) marker
   * @deprecated Use {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}
   */
  OFFLINE_VERSION: 0;

  /**
   * The online version (i.e. the published version that visitors can access) marker
   * @deprecated Use {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
   */
  ONLINE_VERSION: 1;

  /**
   * Gets current page (i.e. the page node for the currently executing portlet).
   * @return current page <code>Node</code>, or <code>null</code> if indeterminable (i.e. this method is not called from within a portlet or&#xA; current portlet is not bound to any page)
   */
  getCurrentPage(): Node;

  /**
   * Gets current portlet.
   * @return current portlet as <code>Node</code>, or <code>null</code> if indeterminable (i.e. this method is not called from within a portlet)
   */
  getCurrentPortlet(): Node;

  /**
   * Gets current module element (module element draft or module element).
   * @return current module element as <code>Node</code>, or <code>null</code> if indeterminable&#xA; (i.e. this method is not called from within a module element)
   * @since Sitevision 4.2
   */
  getCurrentModuleElement(): Node;

  /**
   * Gets current dashboard node (applicable during render of a sv:widgetCustomModule).
   * @return current dashboard as <code>Node</code>, or <code>null</code> if indeterminable&#xA; (i.e. this method is not called from within a sv:widgetCustomModule)
   * @since Sitevision 2024.02.1
   */
  getCurrentDashboard(): Node;

  /**
   * Gets current Locale.
   * @return current <code>Locale</code>, or default <code>Locale</code> if indeterminable
   * @see senselogic.sitevision.api.node.NodeResolverUtil#getLocaleResolver()
   */
  getCurrentLocale(): Locale;

  /**
   * Gets current user.
   * @return current user <code>Node</code>, or <code>null</code> if indeterminable
   * @since Sitevision 2.6
   */
  getCurrentUser(): Node;

  /**
   * Gets current user identity.
   * @return current user identity <code>Node</code>, or <code>null</code> if indeterminable
   * @since Sitevision 3.5
   */
  getCurrentUserIdentity(): Node;

  /**
   * Gets current decorated node (applicable during render of a sv:decorationTemplate).
   *
   *  <p>
   *     This method returns the "decorated" node (typically a sv:portlet or sv:layout) during render of a sv:decorationTemplate.
   *     In other words - it returns the node that is decorated with the template-based decoration that is now rendering.
   *  </p>
   * @return the decorated node or null if indeterminable (i.e. the caller is not a part of a decoration template that is being rendered right now)
   * @since Sitevision 5.1
   */
  getCurrentDecoratedNode(): Node;

  /**
   * Gets current version.
   * @return {@link senselogic.sitevision.api.versioning.VersionUtil#OFFLINE_VERSION}, or&#xA; {@link senselogic.sitevision.api.versioning.VersionUtil#ONLINE_VERSION}
   * @since Sitevision 2.6
   * @deprecated Use {@link senselogic.sitevision.api.versioning.VersionUtil#getCurrentVersion()}
   */
  getCurrentVersion(): number;

  /**
   * Gets a unique namespace for the specific portlet that is rendering.
   *
   *  <p>
   *     The namespace is based on the prefix (aPrefix) and the current portlet's id.
   *     If you have two portlets of same type on the same page, the namespaces will differ. This can for instance be very useful when you
   *     connect a &lt;label&gt; with an &lt;input&gt;. Example in Velocity:
   *  </p>
   *  <pre><code>
   *    #set ($portletContextUtil = $sitevisionUtils.portletContextUtil)
   *    ...
   *    #set ($ns = $portletContextUtil.getPortletNamespace('name'))
   *    &lt;label for="$ns"&gt;Name: &lt;/label&gt;&lt;input id="$ns" name="name" type="text" /&gt;</code></pre>
   *  The namespace generated in the above example (i.e. <code>$ns</code>) could be something like: <code>name12_2b9561c511855e0ab91800015</code>
   * @param aPrefix the prefix for the namespace (ensure it only contains chars that are valid in an id value if you use it as such)
   * @return a unique prefixed namespace for current portlet, or aPrefix if indeterminable
   */
  getPortletNamespace(aPrefix: String | string): string;

  /**
   * Gets a unique nonce for this request.
   *
   *  <p>
   *     The nonce should be used for all client-side inline javascript (e.g. <code>&lt;script nonce="..."&gt; ... &lt;script&gt;</code>).
   *     If not specified, the script might be blocked and ignored by the client/browser due to the content security policy settings of the page
   *     (i.e. typically when the CSP has no "unsafe-inline" specified).
   *  </p>
   * @return A unique identifier for this request.
   * @since Sitevision 2022.08.1
   */
  getNonce(): string;
}

declare namespace PortletContextUtil {}

declare var portletContextUtil: PortletContextUtil;

export default portletContextUtil;
