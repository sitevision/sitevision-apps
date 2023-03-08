import type { Repository } from "../../types/javax/jcr/Repository";
import type { String } from "../../types/java/lang/String";
import type { Object } from "../../types/java/lang/Object";
import type { Workspace } from "../../types/javax/jcr/Workspace";
import type { Node } from "../../types/javax/jcr/Node";
import type { Credentials } from "../../types/javax/jcr/Credentials";
import type { Item } from "../../types/javax/jcr/Item";
import type { Property } from "../../types/javax/jcr/Property";

import type { ValueFactory } from "../../types/javax/jcr/ValueFactory";

import type { InputStream } from "../../types/java/io/InputStream";
import type { OutputStream } from "../../types/java/io/OutputStream";
import type { AccessControlManager } from "../../types/javax/jcr/security/AccessControlManager";
import type { RetentionManager } from "../../types/javax/jcr/retention/RetentionManager";

/**
 * The <code>Session</code> object provides read and (in level 2) write access
 *  to the content of a particular workspace in the repository.
 *  <p>
 *  The <code>Session</code> object is returned by {@link
 *  Repository#login(Credentials, String) Repository.login()}. It encapsulates
 *  both the authorization settings of a particular user (as specified by the
 *  passed <code>Credentials</code>) and a binding to the workspace specified by
 *  the <code>workspaceName</code> passed on <code>login</code>.
 *  <p>
 *  Each <code>Session</code> object is associated one-to-one with a
 *  <code>Workspace</code> object. The <code>Workspace</code> object represents a
 *  "view" of an actual repository workspace entity as seen through the
 *  authorization settings of its associated <code>Session</code>.
 * 
 *  <h3>Session instance retrieval in Sitevision</h3>
 *  <p>
 *     An instance of this interface can be obtained via the request attribute "<code>sitevision.jcr.session</code>".
 *     Below is an example of how to get hold of a <code>Session</code> instance from your custom JSR 286 portlet:
 *  </p>
 *  <pre><code>
 *     Session jcrSession = (Session) aPortletRequest.getAttribute("sitevision.jcr.session");
 *  </code></pre>
 *  <p>
 *     This interface is annotated with {@link senselogic.sitevision.api.base.Requireable} so in server-side JavaScript you would typically obtain an instance of this interface via the <code>require</code> function:
 *  </p>
 *  <pre><code>
 *     var session = require('Session');
 *  </code></pre>
 *  <p>
 *     In JCR capable portlets that are bundled with Sitevision and exposes a "Custom template", you typically have a <code>Session</code> instance
 *     available as "<code>$jcrSession</code>" on the VelocityContext:
 *  </p>
 *  <pre><code>
 *     $jcrSession
 *  </code></pre>
 *  <p>
 *     <em>If $jcrSession is not available on the VelocityContext, use the portlet request (if available) to retrieve it. :</em>
 *  </p>
 *  <pre><em><code>
 *     #set ($jcrSession = $request.getAttribute('sitevision.jcr.session'))
 *  </code></em></pre>
  
    */
export interface Session {
  /**
   * A constant representing the <code>read</code> action string, used to
   *  determine if this <code>Session</code> has permission to retrieve an item
   *  (and read the value, in the case of a property).
   * @see #hasPermission(String, String)
   * @see #checkPermission(String, String)
   * @since JCR 2.0
   */
  ACTION_READ: "read";

  /**
   * A constant representing the <code>add_node</code> action string, used to
   *  determine if this <code>Session</code> has permission to add a new node.
   * @see #hasPermission(String, String)
   * @see #checkPermission(String, String)
   * @since JCR 2.0
   */
  ACTION_ADD_NODE: "add_node";

  /**
   * A constant representing the <code>set_property</code> action string, used
   *  to determine if this <code>Session</code> has permission to set (add or
   *  modify) a property.
   * @see #hasPermission(String, String)
   * @see #checkPermission(String, String)
   * @since JCR 2.0
   */
  ACTION_SET_PROPERTY: "set_property";

  /**
   * A constant representing the <code>remove</code> action string, used to
   *  determine if this <code>Session</code> has permission to remove an item.
   * @see #hasPermission(String, String)
   * @see #checkPermission(String, String)
   * @since JCR 2.0
   */
  ACTION_REMOVE: "remove";

  /**
   * Returns the <code>Repository</code> object through which this session was
   *  acquired.
   * @return a <code>{@link Repository}</code> object.
   */
  getRepository(): Repository;

  /**
   * Gets the user ID associated with this <code>Session</code>. How the user
   *  ID is set is up to the implementation, it may be a string passed in as
   *  part of the credentials or it may be a string acquired in some other way.
   *  This method is free to return an "anonymous user ID" or
   *  <code>null</code>.
   * @return the user ID associated with this <code>Session</code>.
   */
  getUserID(): string;

  /**
   * Returns the names of the attributes set in this session as a result of
   *  the <code>Credentials</code> that were used to acquire it. Not all
   *  <code>Credentials</code> implementations will contain attributes (though,
   *  for example, <code>SimpleCredentials</code> does allow for them). This
   *  method returns an empty array if the <code>Credentials</code> instance
   *  did not provide attributes.
   * @return A string array containing the names of all attributes passed in&#xA; the credentials used to acquire this session.
   */
  getAttributeNames(): string;

  /**
   * Returns the value of the named attribute as an <code>Object</code>, or
   *  <code>null</code> if no attribute of the given name exists. See {@link
   *  Session#getAttributeNames}.
   * @param name the name of an attribute passed in the credentials used to&#xA; acquire this session.
   * @return the value of the attribute or <code>null</code> if no attribute&#xA; of the given name exists.
   */
  getAttribute(name: String | string): unknown;

  /**
   * Returns the <code>Workspace</code> attached to this
   *  <code>Session</code>.
   * @return a <code>{@link Workspace}</code> object.
   */
  getWorkspace(): Workspace;

  /**
   * Returns the root node of the workspace, "/". This node is the main access
   *  point to the content of the workspace.
   * @return The root node of the workspace: a <code>{@link Node}</code>&#xA; object.
   * @throws RepositoryException if an error occurs.
   */
  getRootNode(): Node;

  /**
   * Returns a new session in accordance with the specified (new) Credentials.
   *  Allows the current user to "impersonate" another using incomplete or
   *  relaxed credentials requirements (perhaps including a user name but no
   *  password, for example), assuming that this <code>Session</code> gives
   *  them that permission.
   *  <p>
   *  The new <code>Session</code> is tied to a new <code>Workspace</code>
   *  instance. In other words, <code>Workspace</code> instances are not
   *  re-used. However, the <code>Workspace</code> instance returned represents
   *  the same actual persistent workspace entity in the repository as is
   *  represented by the <code>Workspace</code> object tied to this
   *  <code>Session</code>.
   * @param credentials A <code>Credentials</code> object
   * @return a <code>Session</code> object
   * @throws LoginException if the current session does not have sufficient&#xA; access to perform the operation.
   * @throws RepositoryException if another error occurs.
   */
  impersonate(credentials: Credentials): Session;

  /**
   * Returns the node specified by the given identifier. Applies to both
   *  referenceable and non-referenceable nodes.
   * @param id An identifier.
   * @return A <code>Node</code>.
   * @throws ItemNotFoundException if no node with the specified identifier&#xA; exists or if this <code>Session</code> does not have read access to the&#xA; node with the specified identifier.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  getNodeByIdentifier(id: String | string): Node;

  /**
   * Returns the node at the specified absolute path in the workspace. If no
   *  such node exists, then it returns the property at the specified path.
   *  <p>
   *  This method should only be used if the application does not know whether
   *  the item at the indicated path is property or node. In cases where the
   *  application has this information, either {@link #getNode} or {@link
   *  #getProperty} should be used, as appropriate. In many repository
   *  implementations the node and property-specific methods are likely to be
   *  more efficient than <code>getItem</code>.
   * @param absPath An absolute path.
   * @return the specified <code>Item</code>.
   * @throws PathNotFoundException if no accessible item is found at the&#xA; specified path.
   * @throws RepositoryException if another error occurs.
   */
  getItem(absPath: String | string): Item;

  /**
   * Returns the node at the specified absolute path in the workspace.
   * @param absPath An absolute path.
   * @return the specified <code>Node</code>.
   * @throws PathNotFoundException If no accessible node is found at the&#xA; specifed path.
   * @throws RepositoryException If another error occurs.
   * @since JCR 2.0
   */
  getNode(absPath: String | string): Node;

  /**
   * Returns the property at the specified absolute path in the workspace.
   * @param absPath An absolute path.
   * @return the specified <code>Property</code>.
   * @throws PathNotFoundException If no accessible property is found at the&#xA; specified path.
   * @throws RepositoryException if another error occurs.
   * @since JCR 2.0
   */
  getProperty(absPath: String | string): Property;

  /**
   * Returns <code>true</code> if an item exists at <code>absPath</code> and
   *  this <code>Session</code> has read access to it; otherwise returns
   *  <code>false</code>.
   * @param absPath An absolute path.
   * @return a <code>boolean</code>
   * @throws RepositoryException if <code>absPath</code> is not a well-formed&#xA; absolute path.
   */
  itemExists(absPath: String | string): boolean;

  /**
   * Returns <code>true</code> if a node exists at <code>absPath</code> and
   *  this <code>Session</code> has read access to it; otherwise returns
   *  <code>false</code>.
   * @param absPath An absolute path.
   * @return a <code>boolean</code>
   * @throws RepositoryException if <code>absPath</code> is not a well-formed&#xA; absolute path.
   * @since JCR 2.0
   */
  nodeExists(absPath: String | string): boolean;

  /**
   * Returns <code>true</code> if a property exists at <code>absPath</code>
   *  and this <code>Session</code> has read access to it; otherwise returns
   *  <code>false</code>.
   * @param absPath An absolute path.
   * @return a <code>boolean</code>
   * @throws RepositoryException if <code>absPath</code> is not a well-formed&#xA; absolute path.
   * @since JCR 2.0
   */
  propertyExists(absPath: String | string): boolean;

  /**
   * This method returns a <code>ValueFactory</code> that is used to create
   *  <code>Value</code> objects for use when setting repository properties.
   * @since Sitevision 3.0
   * @return a <code>ValueFactory</code>
   * @throws UnsupportedRepositoryOperationException&#xA; if writing to the&#xA; repository is not supported.
   * @throws RepositoryException if another error occurs.
   */
  getValueFactory(): ValueFactory;

  /**
   * Returns all prefixes currently mapped to URIs in this
   *  <code>Session</code>.
   * @return a string array
   * @throws RepositoryException if an error occurs
   */
  getNamespacePrefixes(): string;

  /**
   * Returns the URI to which the given <code>prefix</code> is mapped as
   *  currently set in this <code>Session</code>.
   * @param prefix a string
   * @return a string
   * @throws NamespaceException if the specified <code>prefix</code> is&#xA; unknown.
   * @throws RepositoryException if another error occurs
   */
  getNamespaceURI(prefix: String | string): string;

  /**
   * Returns the prefix to which the given <code>uri</code> is mapped as
   *  currently set in this <code>Session</code>.
   * @param uri a string
   * @return a string
   * @throws NamespaceException if the specified <code>uri</code> is unknown.
   * @throws RepositoryException if another error occurs
   */
  getNamespacePrefix(uri: String | string): string;

  /**
 * Releases all resources associated with this <code>Session</code>. This
 *  method should be called when a <code>Session</code> is no longer needed.
  
    */
  logout(): void;

  /**
   * Returns <code>true</code> if this <code>Session</code> object is usable
   *  by the client. Otherwise, returns <code>false</code>. A usable
   *  <code>Session</code> is one that is neither logged-out, timed-out nor in
   *  any other way disconnected from the repository.
   * @return <code>true</code> if this <code>Session</code> is usable,&#xA; <code>false</code> otherwise.
   */
  isLive(): boolean;
}

declare namespace Session {}

declare var session: Session;

export default session;
