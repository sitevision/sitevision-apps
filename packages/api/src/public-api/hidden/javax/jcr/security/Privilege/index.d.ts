/**
 * A privilege represents the capability of performing a particular set of
 * operations on items in the JCR repository. Each privilege is identified by a
 * JCR name. JCR defines a set of standard privileges in the <code>jcr</code>
 * namespace. Implementations may add additional privileges in namespaces other
 * than <code>jcr</code>.
 * <p>
 * A privilege may be an aggregate privilege. Aggregate privileges are sets of
 * other privileges. Granting, denying, or testing an aggregate privilege is
 * equivalent to individually granting, denying, or testing each privilege it
 * contains. The privileges contained by an aggregate privilege may themselves
 * be aggregate privileges if the resulting privilege graph is acyclic.
 * <p>
 * A privilege may be an abstract privilege. Abstract privileges cannot
 * themselves be granted or denied, but can be composed into aggregate
 * privileges which are granted or denied.
 * <p>
 * A privilege can be both aggregate and abstract.
 *
 * <p><strong>Sitevision note:</strong> Unsupported operation</p>A constant representing <code>jcr:read</code> (in expanded form), the
 * privilege to retrieve a node and get its properties and their values.A constant representing <code>jcr:modifyProperties</code> (in expanded
 * form), the privilege to create, modify and remove the properties of a
 * node.A constant representing <code>jcr:addChildNodes</code> (in expanded
 * form), the privilege to create child nodes of a node.A constant representing <code>jcr:removeNode</code> (in expanded form),
 * the privilege to remove a node.
 * <p>
 * In order to actually remove a node requires <code>jcr:removeNode</code>
 * on that node and <code>jcr:removeChildNodes</code> on the parent node.
 * <p>
 * The distinction is provided in order to reflect implementations that
 * internally model "remove" as a "delete" instead of a "unlink". A
 * repository that uses the "delete" model can have <code>jcr:removeChildNodes</code>
 * in every access control policy, so that removal is effectively controlled
 * by <code>jcr:removeNode</code>.A constant representing <code>jcr:removeChildNodes</code> (in expanded
 * form), the privilege to remove child nodes of a node. In order to
 * actually remove a node requires <code>jcr:removeNode</code> on that node
 * and <code>jcr:removeChildNodes</code> on the parent node.
 * <p>
 * The distinction is provided in order to reflect implementations that
 * internally model "remove" as a "unlink" instead of a "delete". A
 * repository that uses the "unlink" model can have <code>jcr:removeNode</code>
 * in every access control policy, so that removal is effectively controlled
 * by <code>jcr:removeChildNodes</code>.A constant representing <code>jcr:write</code> (in expanded form), an
 * aggregate privilege that contains: <ul> <li><code>jcr:modifyProperties</code></li>
 * <li><code>jcr:addChildNodes</code></li> <li><code>jcr:removeNode</code></li>
 * <li><code>jcr:removeChildNodes</code></li> </ul>A constant representing <code>jcr:readAccessControl</code> (in expanded
 * form), the privilege to get the access control policy of a node.A constant representing <code>jcr:modifyAccessControl</code> (in expanded
 * form), the privilege to modify the access control policies of a node.A constant representing <code>jcr:lockManagement</code> (in expanded
 * form), the privilege to lock and unlock a node.A constant representing <code>jcr:versionManagement</code> (in expanded
 * form), the privilege to perform versioning operations on a node.A constant representing <code>jcr:nodeTypeManagement</code> (in expanded
 * form), the privilege to add and remove mixin node types and change the
 * primary node type of a node.A constant representing <code>jcr:retentionManagement</code> (in expanded
 * form), the privilege to perform retention management operations on a
 * node.A constant representing <code>jcr:lifecycleManagement</code> (in expanded
 * form), the privilege to perform lifecycle operations on a node.A constant representing <code>jcr:all</code> (in expanded form), an
 * aggregate privilege that contains all predefined privileges. <ul>
 * <li><code>jcr:read</code></li> <li><code>jcr:write</code></li>
 * <li><code>jcr:readAccessControl</code></li> <li><code>jcr:modifyAccessControl</code></li>
 * <li><code>jcr:lockManagement</code></li> <li><code>jcr:versionManagement</code></li>
 * <li><code>jcr:nodeTypeManagement</code></li> <li><code>jcr:retentionManagement</code></li>
 * <li><code>jcr:lifecycleManagement</code></li> </ul> It should, in
 * addition, include all implementation-defined privileges.
 * @since JCR 2.0
 */
interface Privilege {
  /**
   * Returns the name of this privilege.
   * <p>
   * Since the privilege name is a JCR name, it must be returned
   * in qualified form, according to the prevailing namespace-to-prefix
   * mapping in the current <code>Session</code> (see the specification
   * for details on JCR names).
   * @return the name of this privilege.
   */
  getName(): string;

  /**
   * Returns whether this privilege is an abstract privilege.
   * @return <code>true</code> if this privilege is an abstract privilege; <code>false</code> otherwise.
   */
  isAbstract(): boolean;

  /**
   * Returns whether this privilege is an aggregate privilege.
   * @return <code>true</code> if this privilege is an aggregate privilege; <code>false</code> otherwise.
   */
  isAggregate(): boolean;

  /**
   * If this privilege is an aggregate privilege, returns the privileges
   * directly contained by the aggregate privilege. Otherwise returns an empty
   * array.
   * @return an array of <code>Privilege</code>s
   */
  getDeclaredAggregatePrivileges(): Privilege;

  /**
   * If this privilege is an aggregate privilege, returns the privileges it
   * contains, the privileges contained by any aggregate privileges among
   * those, and so on (the transitive closure of privileges contained by this
   * privilege). Otherwise returns an empty array.
   * @return an array of <code>Privilege</code>s
   */
  getAggregatePrivileges(): Privilege;
}

export default Privilege;
