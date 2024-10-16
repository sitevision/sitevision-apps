import type { Node } from "../../types/javax/jcr/Node";

/**
 * System user utility interface.
 *
 *  <p>
 *     This interface handles nodes with primary node type <code>sv:systemUser</code>, i.e. the
 *     <em>Anonymous</em>, <em>System</em>, <em>Indexer</em>, <em>Validator</em> and <em>Extractor</em> user.
 *  </p>
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.user.UserFactory#getSystemUserUtil()}.
 *     See {@link senselogic.sitevision.api.user.UserFactory} for how to obtain an instance of the <code>UserFactory</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface SystemUserUtil {
  /**
   * Checks if current user is any system user (Anonymous, System, Indexer, Validator, Extractor).
   *
   *  <p>
   *    This is a convenience method that is <strong>much more efficient</strong> than checking for each system user type instance separately.
   *  </p>
   *  <p>
   *     Javascript code that uses <code>SystemUserUtil</code> like this:
   *  </p><pre><code>const isLoggedInHuman = () =&gt; {
   *    return (
   *      !systemUserUtil.isAnonymous() &amp;&amp;
   *      !systemUserUtil.isSystem() &amp;&amp;
   *      !systemUserUtil.isIndexer() &amp;&amp;
   *      !systemUserUtil.isValidator() &amp;&amp;
   *      !systemUserUtil.isExtractor()
   *    );
   *  };</code></pre><p>
   *     Should be replaced with code that uses this method instead:
   *  </p><pre><code>const isLoggedInHuman = () =&gt; {
   *    return !systemUserUtil.isAnySystemUser();
   *  };</code></pre>
   *
   *  <p>
   *     <em>Note! This method does NOT produce a reliable result if called during the authentication process
   *     (i.e. from a JAAS filter or JAAS module) since it relies on a fully loaded current user (as of
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}).</em>
   *  </p>
   * @return returns true if the current user is any system user (Anonymous, System, Indexer, Validator, Extractor), false otherwise
   * @see #isAnySystemUser(Node)
   * @since Sitevision 2024.10.1
   */
  isAnySystemUser(): boolean;

  /**
   * Checks if a user node is any system user (Anonymous, System, Validator, Indexer, Extractor).
   *
   *  <p>
   *     This is a convenience method that checks if a given user node is any system user
   *     (Anonymous, System, Validator, Indexer, Extractor). Note that method is equivalent to checking the node <em>type</em>
   *     via {@link senselogic.sitevision.api.node.NodeTypeUtil#isSystemUser(Node) NodeTypeUtil.isSystemUser(aUserNode)}.
   *  </p>
   * @param aUserNode a user node
   * @return returns true if aUserNode is any system user (Anonymous, System, Validator, Indexer, Extractor), false otherwise
   * @see senselogic.sitevision.api.node.NodeTypeUtil#isSystemUser(Node)
   * @since Sitevision 2024.10.1
   */
  isAnySystemUser(aUserNode: Node): boolean;

  /**
   * Checks if current user is anonymous (not authenticated).
   *
   *  <p>
   *     An <em>Anonymous user</em> is not authenticated and can only access public resources.
   *  </p>
   *
   *  <p>
   *  <em>Note! This method does NOT produce a reliable result if called during the authentication process
   *  (i.e. from a JAAS filter or JAAS module) since it relies on a fully loaded current user (as of
   *  {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}).</em>
   *  </p>
   * @return <code>true</code> if current user is Anonymous (i.e. not authenticated), <code>false</code> otherwise
   */
  isAnonymous(): boolean;

  /**
   * Checks if a user node is anonymous (not authenticated).
   *
   *  <p>
   *     An <em>Anonymous user</em> is not authenticated and can only access public resources.
   *  </p>
   * @param aUserNode a user node
   * @return <code>true</code> if <code>aUserNode</code> is anonymous (i.e. not authenticated), <code>false</code> otherwise&#xA; (i.e. no match or <code>aUserNode</code> is <code>null</code>)
   */
  isAnonymous(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision System user.
   *
   *  <p>
   *     The <em>System user</em> has all permissions and full access to all Sitevision portlets and functionality allowed
   *     by the current license(-s).
   *  </p>
   *
   *  <p>
   *  <em>Note! This method does NOT produce a reliable result if called during the authentication process
   *  (i.e. from a JAAS filter or JAAS module) since it relies on a fully loaded current user (as of
   *  {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}).</em>
   *  </p>
   * @return <code>true</code> if current user is the Sitevision System user, <code>false</code> otherwise
   */
  isSystem(): boolean;

  /**
   * Checks if a user node is the Sitevision System user.
   *
   *  <p>
   *     The <em>System user</em> has all permissions and full access to all Sitevision portlets and functionality allowed
   *     by the current license(-s).
   *  </p>
   * @param aUserNode a user node
   * @return <code>true</code> if <code>aUserNode</code> is the Sitevision System user, <code>false</code> otherwise&#xA; (i.e. no match or <code>aUserNode</code> is <code>null</code>)
   */
  isSystem(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision Indexer.
   *
   *  <p>
   *     The <em>Indexer user</em> has read permission on all resources and visits/renders pages in order to collect
   *     metadata/content and such that should be indexed by the Sitevision search engine.
   *  </p>
   *
   *  <p>
   *  <em>Note! This method does NOT produce a reliable result if called during the authentication process
   *  (i.e. from a JAAS filter or JAAS module) since it relies on a fully loaded current user (as of
   *  {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}).</em>
   *  </p>
   * @return <code>true</code> if current user is the Sitevision Indexer, <code>false</code> otherwise
   */
  isIndexer(): boolean;

  /**
   * Checks if a user node is the Sitevision Indexer.
   *
   *  <p>
   *     The <em>Indexer user</em> has read permission on all resources and visits/renders pages in order to collect
   *     metadata/content and such that should be indexed by the Sitevision search engine.
   *  </p>
   * @param aUserNode a user node
   * @return <code>true</code> if <code>aUserNode</code> is the Sitevision Indexer, <code>false</code> otherwise&#xA; (i.e. no match or <code>aUserNode</code> is <code>null</code>)
   */
  isIndexer(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision Validator.
   *
   *  <p>
   *     The <em>Validator user</em> has read permission on all resources and visits/renders pages in order to validate them.
   *  </p>
   *
   *  <p>
   *  <em>Note! This method does NOT produce a reliable result if called during the authentication process
   *  (i.e. from a JAAS filter or JAAS module) since it relies on a fully loaded current user (as of
   *  {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}).</em>
   *  </p>
   * @return <code>true</code> if current user is the Sitevision Validator, <code>false</code> otherwise
   * @since Sitevision 4.2.3
   */
  isValidator(): boolean;

  /**
   * Checks if a user node is the Sitevision Validator.
   *
   *  <p>
   *     The <em>Validator user</em> has read permission on all resources and visits/renders pages in order to validate them.
   *  </p>
   * @param aUserNode a user node
   * @return <code>true</code> if <code>aUserNode</code> is the Sitevision Validator, <code>false</code> otherwise&#xA; (i.e. no match or <code>aUserNode</code> is <code>null</code>)
   * @since Sitevision 4.2.3
   */
  isValidator(aUserNode: Node): boolean;

  /**
   * Checks if current user is the Sitevision Extractor.
   *
   *  <p>
   *     The <em>Extractor user</em> has read permission on all resources and renders pages in order to store their
   *     content as static html pages.
   *  </p>
   *
   *  <p>
   *  <em>Note! This method does NOT produce a reliable result if called during the authentication process
   *  (i.e. from a JAAS filter or JAAS module) since it relies on a fully loaded current user (as of
   *  {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser()}).</em>
   *  </p>
   * @return <code>true</code> if current user is the Sitevision Extractor, <code>false</code> otherwise
   */
  isExtractor(): boolean;

  /**
   * Checks if a user node is the Sitevision Extractor.
   *
   *  <p>
   *     The <em>Extractor user</em> has read permission on all resources and renders pages in order to store their
   *     content as static html pages.
   *  </p>
   * @param aUserNode a user node
   * @return <code>true</code> if <code>aUserNode</code> is the Sitevision Extractor, <code>false</code> otherwise&#xA; (i.e. no match or <code>aUserNode</code> is <code>null</code>)
   */
  isExtractor(aUserNode: Node): boolean;
}

declare namespace SystemUserUtil {}

declare var systemUserUtil: SystemUserUtil;

export default systemUserUtil;
