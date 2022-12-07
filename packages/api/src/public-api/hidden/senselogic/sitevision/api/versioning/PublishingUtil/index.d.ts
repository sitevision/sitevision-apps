import Node from "../../../../../javax/jcr/Node";

/**
 * Publishing/unpublishing utility interface.
 *
 * <p>
 *    Note that when publishing a child node and the parent node hasn't been published, the child node publishing
 *    will be put on hold (marked with a pause sign in editor) until the parent is published.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getPublishingUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1_04
 */

interface PublishingUtil {
  /**
   * <p>
   *    Publishes a node.
   * </p>
   * <p>
   *    Valid nodes are <code>sv:sitePage</code>, <code>sv:page</code>, <code>sv:article</code>, <code>sv:collaborationGroupPage</code>,
   *    <code>sv:template</code> and <code>sv:link</code> <em>(must be a "page link", a stand-alone link in the page tree)</em>.
   *    If another node is specified an <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to publish nodes or a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aNode the node that should be published. May not be <code>null</code>
   * @throws ConstraintViolationException if current user is not authorized to publish nodes
   * @throws RepositoryException if something else goes wrong
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectivePublishPermission(Node, Node)
   */
  publishNode(aNode: Node): void;

  /**
   * <p>
   *    Schedules a node publish job for execution at a specified date.
   * </p>
   * <p>
   *    Valid nodes are <code>sv:sitePage</code>, <code>sv:page</code>, <code>sv:article</code>, <code>sv:collaborationGroupPage</code>,
   *    <code>sv:template</code> and <code>sv:link</code> <em>(must be a "page link", a stand-alone link in the page tree)</em>.
   *    If another node is specified an <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to publish nodes or a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aNode the node that should be published
   * @param aDate the publish date
   * @throws ConstraintViolationException if current user is not authorized to publish nodes
   * @throws RepositoryException if something else goes wrong
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectivePublishPermission(Node, Node)
   */
  publishNode(aNode: Node, aDate: java.util.Date): void;

  /**
   * <p>
   *    Schedules a node publish job for execution at a specified date and a node unpublish job for execution at another date.
   * </p>
   * <p>
   *    Valid nodes are <code>sv:sitePage</code>, <code>sv:page</code>, <code>sv:article</code>, <code>sv:collaborationGroupPage</code>,
   *    <code>sv:template</code> and <code>sv:link</code> <em>(must be a "page link", a stand-alone link in the page tree)</em>.
   *    If another node is specified an <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to publish nodes or a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aNode the node that should be published
   * @param aPublishDate the publish date
   * @param anUnpublishDate the unpublish date
   * @throws ConstraintViolationException if current user is not authorized to publish nodes
   * @throws RepositoryException if something else goes wrong
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectivePublishPermission(Node, Node)
   */
  publishNode(
    aNode: Node,
    aPublishDate: java.util.Date,
    anUnpublishDate: java.util.Date
  ): void;

  /**
   * <p>
   *    Publishes a node instantly with a best before notification date.
   * </p>
   * <p>
   *    Valid nodes are <code>sv:sitePage</code>, <code>sv:page</code>, <code>sv:article</code>, <code>sv:collaborationGroupPage</code>,
   *    <code>sv:template</code> and <code>sv:link</code> <em>(must be a "page link", a stand-alone link in the page tree)</em>.
   *    If another node is specified an <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    If a <code>aNotificationDate</code> is before current date a notification will be sent instantly.
   *    If <code>aNotificationDate</code> is null, no notification will be sent.
   * </p>
   *
   * <p>
   *    The current user must be authorized to publish nodes or a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aNode the node that should be published. Valid nodes are sv:sitePage, sv:page, sv:article and sv:template.
   * @param aNotificationDate best-before notification date.
   * @throws NullPointerException if <code>aNode</code> is null.
   * @throws IllegalArgumentException if <code>aNode</code> is of invalid type.
   * @throws ConstraintViolationException if current user is not authorized to publish nodes.
   * @throws RepositoryException on unexpected failures.
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectivePublishPermission(Node, Node)
   * @since Sitevision 2.6.2_05
   */
  publishNodeWithNotification(
    aNode: Node,
    aNotificationDate: java.util.Date
  ): void;

  /**
   * <p>
   *    Schedules a node publish job for execution at a specified date with a best before notification date.
   * </p>
   * <p>
   *    Valid nodes are <code>sv:sitePage</code>, <code>sv:page</code>, <code>sv:article</code>, <code>sv:collaborationGroupPage</code>,
   *    <code>sv:template</code> and <code>sv:link</code> <em>(must be a "page link", a stand-alone link in the page tree)</em>.
   *    If another node is specified an <code>IllegalArgumentException</code> is thrown.
   * </p>
   * <p>
   *    If <code>aNotificationDate</code> is null no notification will be sent. If <code>aNotificationDate</code>
   *    is before <code>aPublishDate</code> no notification will be sent since node hasn't been published yet.
   *    If a <code>aNotificationDate</code> is before current date, a notification will be sent instantly.
   * </p>
   *
   * <p>
   *    If <code>aPublishDate</code> is <code>null</code> or before current time, the node will be published instantly.
   * </p>
   *
   * <p>
   *    The current user must be authorized to publish nodes or a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aNode the node that should be published. Valid nodes are sv:sitePage, sv:page, sv:article and sv:template.
   * @param aPublishDate the publish date for the node.
   * @param aNotificationDate best-before notification date.
   * @throws NullPointerException if <code>aNode</code> is null.
   * @throws IllegalArgumentException if <code>aNode</code> is of invalid type.
   * @throws ConstraintViolationException if current user is not authorized to publish nodes.
   * @throws RepositoryException on unexpected failures.
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectivePublishPermission(Node, Node)
   * @since Sitevision 2.6.2_05
   */
  publishNodeWithNotification(
    aNode: Node,
    aPublishDate: java.util.Date,
    aNotificationDate: java.util.Date
  ): void;

  /**
   * <p>
   *    Schedules a node publish job for execution at a specified date and a node unpublish job for execution at a later
   *    date and a best before notification date.
   * </p>
   * <p>
   *    Valid nodes are <code>sv:sitePage</code>, <code>sv:page</code>, <code>sv:article</code>, <code>sv:collaborationGroupPage</code>,
   *    <code>sv:template</code> and <code>sv:link</code> <em>(must be a "page link", a stand-alone link in the page tree)</em>.
   *    If another node is specified an <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    If <code>aNotificationDate</code> is null, no notification will be sent. If <code>aNotificationDate</code> is
   *    before <code>aPublishDate</code> no notification will be sent since node hasn't been published yet. If a
   *    <code>aNotificationDate</code> is before current date, a notification will be sent instantly.
   * </p>
   *
   * <p>
   *    If <code>aPublishDate</code> is <code>null</code> or before current time, the node will be published instantly.
   * </p>
   *
   * <p>
   *    If <code>aUnpublishDate</code> is before <code>aPublishDate</code> the unpublish job will run but won't affect
   *    the publishing, i.e. the node will be published at the given publish date.
   * </p>
   *
   * <p>
   *    The current user must be authorized to publish nodes or a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aNode the node that should be published. Valid nodes are sv:sitePage, sv:page, sv:article and sv:template.
   * @param aPublishDate the publish date for the node.
   * @param aUnpublishDate the unpublish date for the node.
   * @param aNotificationDate best-before notification date.
   * @throws NullPointerException if <code>aNode</code> or <code>aUnpublishDate</code> is null.
   * @throws IllegalArgumentException if <code>aNode</code> is of invalid type.
   * @throws ConstraintViolationException if current user is not authorized to publish nodes.
   * @throws RepositoryException on unexpected failures.
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectivePublishPermission(Node, Node)
   * @since Sitevision 2.6.2_05
   */
  publishNodeWithNotification(
    aNode: Node,
    aPublishDate: java.util.Date,
    aUnpublishDate: java.util.Date,
    aNotificationDate: java.util.Date
  ): void;

  /**
   * <p>
   *    Unpublishes a node.
   * </p>
   * <p>
   *    Valid nodes are <code>sv:sitePage</code>, <code>sv:page</code>, <code>sv:article</code>, <code>sv:collaborationGroupPage</code>,
   *    <code>sv:template</code> and <code>sv:link</code> <em>(must be a "page link", a stand-alone link in the page tree)</em>.
   *    If another node is specified an <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to publish nodes or a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aNode the node that should be unpublished
   * @throws ConstraintViolationException if current user is not authorized to unpublish nodes
   * @throws RepositoryException if something else goes wrong
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectivePublishPermission(Node, Node)
   */
  unpublishNode(aNode: Node): void;

  /**
   * <p>
   *    Schedules a node unpublish job for execution at a specified date.
   * </p>
   * <p>
   *    Valid nodes are <code>sv:sitePage</code>, <code>sv:page</code>, <code>sv:article</code>, <code>sv:collaborationGroupPage</code>,
   *    <code>sv:template</code> and <code>sv:link</code> <em>(must be a "page link", a stand-alone link in the page tree)</em>.
   *    If another node is specified an <code>IllegalArgumentException</code> is thrown.
   * </p>
   *
   * <p>
   *    If no node is specified a <code>NullPointerException</code> is thrown.
   * </p>
   *
   * <p>
   *    The current user must be authorized to publish nodes or a <code>ConstraintViolationException</code> will be thrown.
   * </p>
   * @param aNode the node that should be unpublished
   * @param aDate the unpublish date
   * @throws ConstraintViolationException if current user is not authorized to unpublish nodes
   * @throws RepositoryException if something else goes wrong
   * @see senselogic.sitevision.api.security.PermissionUtil#hasEffectivePublishPermission(Node, Node)
   */
  unpublishNode(aNode: Node, aDate: java.util.Date): void;
}
