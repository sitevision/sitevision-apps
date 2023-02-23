import type { Node } from "../../types/javax/jcr/Node";
import type Permission from "../PermissionUtil.Permission";

/**
 * Permissions utilities interface for checking permissions.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.Utils#getPermissionUtil()}.
 *     See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 2.6
 */
export interface PermissionUtil {
  /**
   * Checks if a non-authenticated user has read permission on current page.
   *
   *  <p>
   *     This is a convenience method for {@link #hasAnonymousReadPermission(Node)} that uses PortletContextUtil to get
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage() current page}.
   *  </p>
   *  <p>
   *     <em>
   *        <strong>Note!</strong> RESTApps has no "current page" concept whatsoever.
   *        A RESTApp should therefore typically never use any convenience method that relies on "current page".
   *        This method uses the {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getSitePage() site page}
   *        as "current page" for best effort when invoked from a RESTApp. Beware of unexpected results and also note
   *        that RESTApps has its own complementary restrictions (e.g. only some users can call certain http methods,
   *        incoming http requests can be completely blocked etc).
   *     </em>
   *  </p>
   * @return <code>true</code> if an anonymous user has read permission on current page (e.g. "page is public"),&#xA; <code>false</code> if not or if indeterminable (i.e. current page can not be determined)
   * @see #hasAnonymousReadPermission(Node)
   * @since Sitevision 2.6.2_05
   */
  hasAnonymousReadPermission(): boolean;

  /**
   * Checks if a non-authenticated user has read permission on a certain tree node.
   * @param aTreeNode a node in the page/template/file/image tree
   * @return true if an anonymous user has read permission on aTreeNode (e.g. "page is public"),&#xA; false if not or if indeterminable (i.e. aTreeNode is not a tree node)
   * @see #hasAnonymousReadPermission()
   * @since Sitevision 2.6.2_05
   */
  hasAnonymousReadPermission(aTreeNode: Node): boolean;

  /**
   * Checks if current user has read permission on current page.
   *
   *  <p>
   *     This is a convenience method for {@link #hasReadPermission(Node, Node)} that uses PortletContextUtil to get
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage() current page} and
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser() current user}.
   *  </p>
   *  <p>
   *     <em>
   *        <strong>Note!</strong> RESTApps has no "current page" concept whatsoever.
   *        A RESTApp should therefore typically never use any convenience method that relies on "current page".
   *        This method uses the {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getSitePage() site page}
   *        as "current page" for best effort when invoked from a RESTApp. Beware of unexpected results and also note
   *        that RESTApps has its own complementary restrictions (e.g. only some users can call certain http methods,
   *        incoming http requests can be completely blocked etc).
   *     </em>
   *  </p>
   * @return true if current user has read permission on current page,&#xA; false if not or if indeterminable (i.e. current user or current page can not be determined)
   * @see #hasReadPermission(Node, Node)
   */
  hasReadPermission(): boolean;

  /**
   * Checks if a certain user has read permission on a certain tree node.
   * @param aTreeNode a node in the page/template/file/image tree
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has read permission on aTreeNode, false if not or if indeterminable&#xA; (i.e. aTreeNode is not a tree node or aUserNode is not a user)
   * @see #hasReadPermission()
   */
  hasReadPermission(aTreeNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if current user has write permission on current page.
   *
   *  <p>
   *     This is a convenience method for {@link #hasWritePermission(Node, Node)} that uses PortletContextUtil to get
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage() current page} and
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser() current user}.
   *  </p>
   *  <p>
   *     <em>
   *        <strong>Note!</strong> RESTApps has no "current page" concept whatsoever.
   *        A RESTApp should therefore typically never use any convenience method that relies on "current page".
   *        This method uses the {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getSitePage() site page}
   *        as "current page" for best effort when invoked from a RESTApp. Beware of unexpected results and also note
   *        that RESTApps has its own complementary restrictions (e.g. only some users can call certain http methods,
   *        incoming http requests can be completely blocked etc).
   *     </em>
   *  </p>
   * @return true if current user has write permission on current page, false if not or if indeterminable
   * @see #hasWritePermission(Node, Node)
   */
  hasWritePermission(): boolean;

  /**
   * Checks if a certain user has write permission on a certain tree node.
   * @param aTreeNode a node in the page/template/file/image tree
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has write permission on aTreeNode, false if not or if indeterminable&#xA; (i.e. aTreeNode is not a tree node or aUserNode is not a user)
   * @see #hasEffectiveWritePermission(Node, Node)
   */
  hasWritePermission(aTreeNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has <em>effective</em> write permission on a certain tree node.
   *
   *  <p>
   *     This is a extended version of {@link #hasWritePermission(Node, Node)} that delivers a more accurate runtime result.
   *  </p>
   *  <p>
   *     Even though a User strict formally has {@link Permission#WRITE} permission on a Node, some additional state might
   *     in practice prohibit actual write operations anyway. This method also checks such cases. For example:
   *  </p>
   *  <ul>
   *     <li>
   *        The Node is <strong>Locked</strong>
   *        <ul>
   *            <li><em>This method will return false if the Node is locked by another User</em></li>
   *        </ul>
   *     </li>
   *     <li>
   *        The Node is part of a <strong>Publishing project</strong>
   *        <ul>
   *           <li><em>This method will return false if the Node is in the "ready/done" state</em></li>
   *           <li>
   *              <em>This method will return false if the User isn't a project member or have {@link Permission#MANAGE_PUBLISHING_PROJECT}</em>
   *           </li>
   *        </ul>
   *     </li>
   *     <li>
   *        The Node is in a pending <strong>Publishing flow</strong>
   *        <ul>
   *            <li><em>This method will return false</em></li>
   *        </ul>
   *     </li>
   *  </ul>
   *  <p>
   *     <em>
   *        <strong>Note!</strong> This method is more reliable than its static "hasWritePermission" sibling, but in a runtime environment anything
   *        can happen at any given time! Hence, even if this method returns true - there are absolutely no guarantee that the true state will remain
   *        when an actual mutating operation is performed shortly after.
   *     </em>
   *  </p>
   * @param aTreeNode a node in the page/template/file/image tree
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has effective write permission on aTreeNode, false if not or if indeterminable
   * @see #hasWritePermission(Node, Node)
   * @since Sitevision 2022.05.1
   */
  hasEffectiveWritePermission(aTreeNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has publish permission on a certain page tree node.
   * @param aPageNode a publishable node in the page tree
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has publish permission on aPageNode, false if not or if indeterminable&#xA; (i.e. aPageNode is not a publishable page tree node or aUserNode is not a user)
   * @see #hasEffectivePublishPermission(Node, Node)
   * @since Sitevision 2.6.1_04
   */
  hasPublishPermission(aPageNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has <em>effective</em> publish permission on a certain page tree node.
   *
   *  <p>
   *     This is a extended version of {@link #hasPublishPermission(Node, Node)} that delivers a more accurate runtime result.
   *  </p>
   *  <p>
   *     Even though a User strict formally has {@link Permission#PUBLISH} permission on a Node, some additional state might
   *     in practice prohibit actual publish operations anyway. This method also checks such cases. For example:
   *  </p>
   *  <ul>
   *     <li>
   *        The Node is <strong>Locked</strong>
   *        <ul>
   *            <li><em>This method will return false if the Node is locked by another User</em></li>
   *        </ul>
   *     </li>
   *     <li>
   *        The Node is part of a <strong>Publishing project</strong>
   *        <ul>
   *           <li><em>This method will return false</em></li>
   *        </ul>
   *     </li>
   *     <li>
   *        The Node is in a pending <strong>Publishing flow</strong>
   *        <ul>
   *            <li><em>This method will return false</em></li>
   *        </ul>
   *     </li>
   *  </ul>
   *  <p>
   *     <em>
   *        <strong>Note!</strong> This method is more reliable than its static "hasPublishPermission" sibling, but in a runtime environment anything
   *        can happen at any given time! Hence, even if this method returns true - there are absolutely no guarantee that the true state will remain
   *        when an actual publish operation is performed shortly after.
   *     </em>
   *  </p>
   * @param aPageNode a publishable node in the page/template/decorations tree
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has effective publish permission on aTreeNode, false if not or if indeterminable
   * @see #hasPublishPermission(Node, Node)
   * @since Sitevision 2022.05.1
   */
  hasEffectivePublishPermission(aPageNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has write subscription permission on a certain page tree node.
   * @param aTreeNode a subscriptionable node in the page tree
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has write subscription permission on aTreeNode, false if not or if indeterminable&#xA; (i.e. aTreeNode is not a subscriptionable page tree node or aUserNode is not a user)
   * @since Sitevision 2.6.2_05
   */
  hasWriteSubscriptionPermission(aTreeNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has delete permission on a certain tree node.
   * @param aTreeNode a node in the page/template/file/image tree
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has delete permission on aTreeNode, false if not or if indeterminable&#xA; (i.e. aTreeNode is not a tree node or aUserNode is not a user)
   * @see #hasEffectiveDeletePermission(Node, Node)
   * @since Sitevision 2.6.1_04
   */
  hasDeletePermission(aTreeNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has <em>effective</em> delete permission on a certain tree node.
   *
   *  <p>
   *     This is a extended version of {@link #hasDeletePermission(Node, Node)} that delivers a more accurate runtime result.
   *  </p>
   *  <p>
   *     Even though a User strict formally has {@link Permission#DELETE} and {@link Permission#WRITE} permission on a Node, some additional
   *     state might in practice prohibit actual delete operations anyway. This method also checks such cases. For example:
   *  </p>
   *  <ul>
   *     <li>
   *        The Node is part of a <strong>Publishing project</strong>
   *        <ul>
   *           <li><em>This method will return false if the Node is in the "ready/done" state</em></li>
   *           <li>
   *              <em>This method will return false if the User isn't a project member or have {@link Permission#MANAGE_PUBLISHING_PROJECT}</em>
   *           </li>
   *        </ul>
   *     </li>
   *     <li>
   *        The Node is in a pending <strong>Publishing flow</strong>
   *        <ul>
   *            <li><em>This method will return false</em></li>
   *        </ul>
   *     </li>
   *  </ul>
   *  <p>
   *     <em>
   *        <strong>Note!</strong> This method is more reliable than its static "hasDeletePermission" sibling, but in a runtime environment anything
   *        can happen at any given time! Hence, even if this method returns true - there are absolutely no guarantee that the true state will remain
   *        when an actual delete operation is performed shortly after.
   *     </em>
   *  </p>
   * @param aTreeNode a node in the page/template/file/image tree
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has effective delete permission on aTreeNode, false if not or if indeterminable
   * @see #hasDeletePermission(Node, Node)
   * @since Sitevision 2022.05.1
   */
  hasEffectiveDeletePermission(aTreeNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has create page permission on a certain page tree node.
   * @param aParentNode a parent node (the parent of the page that should be created)
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has create page permission on aParentNode, false if not or if indeterminable&#xA; (i.e. aParentNode is not a page tree node that can have a page as child or aUserNode is not a user)
   * @since Sitevision 2.6.1_04
   */
  hasCreatePagePermission(aParentNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has create article permission on a certain page tree node.
   * @param aParentNode a parent node (the parent of the article that should be created)
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has create article permission on aParentNode, false if not or if indeterminable&#xA; (i.e. aParentNode is not a page tree node that can have a article as child or aUserNode is not a user)
   * @since Sitevision 2.6.1_04
   */
  hasCreateArticlePermission(aParentNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has create archive permission on a certain page tree node.
   * @param aParentNode a parent node (the parent of the archive that should be created)
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has create archive permission on aParentNode, false if not or if indeterminable&#xA; (i.e. aParentNode is not a page tree node that can have an archive as child or aUserNode is not a user)
   * @since Sitevision 2.6.1_04
   */
  hasCreateArchivePermission(aParentNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if a certain user has create folder permission on a certain tree node.
   * @param aParentNode a parent node (the parent of the folder that should be created)
   * @param aUserNode a user node (or a user identity node)
   * @return true if aUserNode has create folder permission on aParentNode, false if not or if indeterminable&#xA; (i.e. aParentNode is not a tree node that can have a folder as child or aUserNode is not a user)
   * @since Sitevision 2.6.1_04
   */
  hasCreateFolderPermission(aParentNode: Node, aUserNode: Node): boolean;

  /**
   * Checks if current user has a certain permission on current page.
   *
   *  <p>
   *     This is a convenience method for {@link #hasPermission(Node, Node, Permission)} that uses PortletContextUtil to get
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage() current page} and
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser() current user}.
   *  </p>
   *  <p>
   *     <em>
   *        <strong>Note!</strong> RESTApps has no "current page" concept whatsoever.
   *        A RESTApp should therefore typically never use any convenience method that relies on "current page".
   *        This method uses the {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getSitePage() site page}
   *        as "current page" for best effort when invoked from a RESTApp. Beware of unexpected results and also note
   *        that RESTApps has its own complementary restrictions (e.g. only some users can call certain http methods,
   *        incoming http requests can be completely blocked etc).
   *     </em>
   *  </p>
   * @param aPermission the permission to check
   * @return true if current user has aPermission on current page, false if not or if indeterminable&#xA; (e.g. current user or current page can not be determined)
   * @see #hasPermission(Node, Permission)
   * @see #hasPermission(Node, Node, Permission)
   * @since Sitevision 3.6
   */
  hasPermission(aPermission: Permission): boolean;

  /**
   * Checks if current user has certain permissions on current page.
   *
   *  <p>
   *     This is a convenience method for {@link #hasPermissions(Node, Node, Permission...)} that uses PortletContextUtil to get
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentPage() current page} and
   *     {@link senselogic.sitevision.api.context.PortletContextUtil#getCurrentUser() current user}.
   *  </p>
   *  <p>
   *     <em>
   *        <strong>Note!</strong> RESTApps has no "current page" concept whatsoever.
   *        A RESTApp should therefore typically never use any convenience method that relies on "current page".
   *        This method uses the {@link senselogic.sitevision.api.resource.ResourceLocatorUtil#getSitePage() site page}
   *        as "current page" for best effort when invoked from a RESTApp. Beware of unexpected results and also note
   *        that RESTApps has its own complementary restrictions (e.g. only some users can call certain http methods,
   *        incoming http requests can be completely blocked etc).
   *     </em>
   *  </p>
   * @param aPermissions the permissions to check
   * @return true if current user has aPermissions on current page, false if not or if indeterminable&#xA; (e.g. current user or current page can not be determined)
   * @see #hasPermissions(Node, Permission...)
   * @see #hasPermissions(Node, Node, Permission...)
   * @since Sitevision 3.6
   */
  hasPermissions(aPermissions: Permission[]): boolean;

  /**
   * Checks if current user has certain permission on a certain tree node.
   * @param aTreeNode a node in the page/template/file/image tree
   * @param aPermission the permission to check
   * @return true if current user has aPermission on aTreeNode, false if not or if indeterminable&#xA; (e.g. aTreeNode is not a tree node or current user can not be determined)
   * @see #hasPermission(Permission)
   * @see #hasPermission(Node, Node, Permission)
   * @since Sitevision 3.6
   */
  hasPermission(aTreeNode: Node, aPermission: Permission): boolean;

  /**
   * Checks if current user has certain permissions on a certain tree node.
   * @param aTreeNode a node in the page/template/file/image tree
   * @param aPermissions the permissions to check
   * @return true if current user has aPermissions on aTreeNode, false if not or if indeterminable&#xA; (e.g. aTreeNode is not a tree node or current user can not be determined)
   * @see #hasPermissions(Permission...)
   * @see #hasPermissions(Node, Node, Permission...)
   * @since Sitevision 3.6
   */
  hasPermissions(aTreeNode: Node, aPermissions: Permission[]): boolean;

  /**
   * Checks if a certain user has a certain permission on a certain tree node.
   * @param aTreeNode a node in the page/template/file/image tree
   * @param aUserNode a user node (or a user identity node)
   * @param aPermission the permission to check
   * @return true if aUserNode has aPermission on aTreeNode, false if not or if indeterminable&#xA; (e.g. aTreeNode is not a tree node or aUserNode is not a user)
   * @see #hasPermission(Permission)
   * @see #hasPermission(Node, Permission)
   * @since Sitevision 3.6
   */
  hasPermission(
    aTreeNode: Node,
    aUserNode: Node,
    aPermission: Permission
  ): boolean;

  /**
   * Checks if a certain user has certain permissions on a certain tree node.
   * @param aTreeNode a node in the page/template/file/image tree
   * @param aUserNode a user node (or a user identity node)
   * @param aPermissions the permissions to check
   * @return true if aUserNode has aPermissions on aTreeNode, false if not or if indeterminable&#xA; (e.g. aTreeNode is not a tree node or aUserNode is not a user)
   * @see #hasPermissions(Permission...)
   * @see #hasPermissions(Node, Permission...)
   * @since Sitevision 3.6
   */
  hasPermissions(
    aTreeNode: Node,
    aUserNode: Node,
    aPermissions: Permission[]
  ): boolean;
}

declare namespace PermissionUtil {}

declare var permissionUtil: PermissionUtil;

export default permissionUtil;
