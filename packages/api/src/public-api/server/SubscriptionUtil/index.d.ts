import type Node from "../../types/javax/jcr/Node";

/**
 * <p>
 *    Subscription utility interface.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getSubscriptionUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1_10
 */
export interface SubscriptionUtil {
  /**
   * <p>Returns the active subscription <code>Node</code> of a <code>Node</code>. An active subscription
   * is a <code>sv:site</code>, <code>sv:page</code>, <code>sv:article</code> or <code>sv:archive</code> that has activated
   * the subscription functionality. More information about subscriptions can be found in the Sitevision help pages.</p>
   *
   * <p>
   * <code>
   * ex: from the sitevision navigator <br>
   * - server <br>
   * ---site A (subscription activated, including all children) <br>
   * -----page 1 <br>
   * -------archive X (subscription activated, including all children) <br>
   * ---------article V <br>
   * -----page 2 (subscription activated) <br>
   * -------page 21 <br>
   * <br>
   * getActiveSubscription(site A) -&gt; site A <br>
   * getActiveSubscription(page 1) -&gt; site A <br>
   * getActiveSubscription(archive X) -&gt; archive X <br>
   * getActiveSubscription(article V) -&gt; archive X <br>
   * getActiveSubscription(page 2) -&gt; page 2 <br>
   * getActiveSubscription(page 21) -&gt; null <br>
   * </code>
   * </p>
   *
   * <p>To find out if a <code>Node</code> has active subscription use the property <code>isActiveSubscription</code>. This
   * method is simply convenience to find the active <code>Node</code>.</p>
   *
   * <p>This method will never throw exceptions</p>
   * @param aNode a <code>Node</code> in the navigation (e.g. a sv:page or an sv:article)
   * @return a <code>Node</code> with activated subscription or <code>null</code> if not available
   */
  getActiveSubscription(aNode: Node): Node;

  /**
   * <p>Activates a subscription for the given <code>Node</code>.</p>
   *
   * <p>The current user must have write subscription permission to activate subscriptions.</p>
   * @param aNode the <code>Node</code> to activate a subscription for.
   * @param subtreeScope true if activation should include subnodes, false otherwise.
   * @param title the subscription title.
   * @param description the subscription description.
   * @throws ConstraintViolationException if the current user isn't allowed to modify subscriptions.
   * @throws IllegalArgumentException if the given node <code>aNode</code> is null or if the given node isn't a subscriptionable node.
   * @throws RepositoryException if something else goes wrong.
   * @see senselogic.sitevision.api.security.PermissionUtil#hasWriteSubscriptionPermission(javax.jcr.Node, javax.jcr.Node)
   * @since Sitevision 2.6.2_05
   */
  activateSubscription(
    aNode: Node,
    subtreeScope: boolean,
    title: string,
    description: string
  ): void;

  /**
   * <p>Deactivates the subscription for the given <code>Node</code>.</p>
   *
   * <p>The current user must have write subscription permission to deactivate subscriptions.</p>
   * @param aNode the <code>Node</code> to deactivate the subscription for.
   * @throws RepositoryException if the current user isn't allowed to modify subscriptions.
   * @throws IllegalArgumentException if the given node <code>aNode</code> is null or if the given node isn't a subscriptionable node.
   * @see senselogic.sitevision.api.security.PermissionUtil#hasWriteSubscriptionPermission(javax.jcr.Node, javax.jcr.Node)
   * @since Sitevision 2.6.2_05
   */
  deactivateSubscription(aNode: Node): void;

  /**
   * <p>Configures email properties for the subscription on the given node.</p>
   *
   * <p>The current user must have write subscription permission to configure subscription email.</p>
   * @param aNode the <code>Node</code> to configure.
   * @param from name of the sender.
   * @param fromAddress email address of the sender.
   * @param subject the email subject.
   * @param footer the email footer
   * @throws ConstraintViolationException if the current user isn't allowed to modify subscriptions.
   * @throws IllegalArgumentException if the given node <code>aNode</code> is null, if the given node isn't a subscriptionable node, if <code>fromAddress</code> is null or not a valid email adress.
   * @throws RepositoryException if something else goes wrong.
   * @see senselogic.sitevision.api.security.PermissionUtil#hasWriteSubscriptionPermission(javax.jcr.Node, javax.jcr.Node)
   * @since Sitevision 2.6.2_05
   */
  configureSubscriptionEmail(
    aNode: Node,
    from: string,
    fromAddress: string,
    subject: string,
    footer: string
  ): void;

  /**
   * Notifies the subscribers of a given node with an active subscription.
   *
   * <p>
   *    This method will use the settings of the active subscription to send mail notifications to all subscribers.
   *    A properly configured active subscription has mail settings that specifies <em>from</em>, <em>from address</em>,
   *    <em>subject</em> and a <em>footer</em>. The active subscription also has a <em>mail template</em> that is
   *    used to create the actual <em>body</em> of the notification. The mail template for an active subscription
   *    will typically include something like this:
   * </p>
   * <ol>
   *    <li>A <em>notification</em> text</li>
   *    <li>The <em>URL</em> of the node</li>
   *    <li>The mail <em>footer</em></li>
   * </ol>
   * <p>
   *    The <code>aNotificationText</code> parameter of this method will be used as <em>notification</em> text in the mail template.
   *    In other words - if <code>aNotificationText</code> is <code>null</code>, the notification mail body will typically
   *    contain the <em>URL</em> and the <em>footer</em> only.
   * </p>
   * @param aNode a <code>Node</code> that has an active subscription, typically a sv:page or sv:article
   * @param aNotificationText the notification text
   * @return <code>true</code> if a notification could be scheduled, <code>false</code> otherwise (e.g. if <code>aNode</code> is <code>null</code> or has no <em>active subscription</em>, see {@link #getActiveSubscription(javax.jcr.Node)})
   * @since Sitevision 3.6.3
   */
  notifySubscribersOf(aNode: Node, aNotificationText: string): boolean;
}

declare namespace SubscriptionUtil {}

declare var subscriptionUtil: SubscriptionUtil;

export = subscriptionUtil;
