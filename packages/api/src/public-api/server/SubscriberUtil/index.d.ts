import Node from "../../hidden/javax/jcr/Node";

/**
 * <p>Access to a <code>Set</code> of subscribers (i.e. e-mail and / or phone numbers) for an active subscription.</p>
 *
 * <p>This method will never throw exceptions.</p>
 * @param anActiveSubscription the active subscription <code>Node</code>
 * @return a <code>Set</code> of <code>String</code> with the subscribers. Will never return <code>null</code>
 */
export function getSubscribers(anActiveSubscription: Node): unknown;

/**
 * <p>
 *    Method used to add an e-mail or phone number as a subscriber to the active subscription.
 *    If the subscriber is already a subscriber nothing will be done.
 * </p>
 *
 * <p>
 *    This method will not throw exceptions.
 * </p>
 * @param anActiveSubscription the active subscription <code>Node</code>
 * @param aSubscriber a <code>String</code> containing the e-mail or phone number of the subscriber
 * @return indicates that the subscriber is available as a subscriber after the operation
 */
export function addSubscriber(
  anActiveSubscription: Node,
  aSubscriber: string
): boolean;

/**
 * <p>
 *    Removes an e-mail or phone number from the subscribers of the active subscription.
 *    If the subscriber is not a subscriber nothing will be done.
 * </p>
 *
 * <p>
 *    This method will not throw exceptions.
 * </p>
 * @param anActiveSubscription the active subscription <code>Node</code>
 * @param aSubscriber a <code>String</code> containing the e-mail or phone number of the subscriber
 * @return indicates that the subscriber is not available as a subscriber after the operation
 */
export function removeSubscriber(
  anActiveSubscription: Node,
  aSubscriber: string
): boolean;

/**
 * <p>
 *    Finds out if an e-mail of phone number is already a subscriber to the active subscription.
 *    Note that this method is much faster than <code>getSubscribers(anActiveSubscription).contains(aSubscriber)</code>
 * </p>
 *
 * <p>
 *    This method will not throw exceptions.
 * </p>
 * @param anActiveSubscription the active subscription <code>Node</code>
 * @param aSubscriber a <code>String</code> containing the e-mail or phone number of the subscriber
 * @return indicates that the subscriber already is a subscriber to the active subscription
 */
export function isSubscriber(
  anActiveSubscription: Node,
  aSubscriber: string
): boolean;

/**
 * <p>
 *    Subscriber utility interface.
 * </p>
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via
 *    {@link senselogic.sitevision.api.Utils#getSubscriberUtil()}.
 *    See {@link senselogic.sitevision.api.Utils} for how to obtain an instance of the <code>Utils</code> interface.
 * </p>
 *
 * <p>
 *    To find an active subscription, use the property <code>isActiveSubscription</code> or the convenience method
 *    {@link SubscriptionUtil#getActiveSubscription}. An active subscription is either <code>sv:site</code>, <code>sv:page</code>,
 *    <code>sv:archive</code> or <code>sv:article</code> where the subscription functionality has been activated.
 *    More information about subscriptions can be found in the Sitevision help pages.
 * </p>
 *
 * <p>
 *    A subscriber is either an e-mail or a phone number. Phone number is only available if the Sitevision licence
 *    contains the feature "sms".
 * </p>
 *
 * <p>
 *    The write methods are fully synchronized and will never throw <code>ConcurrentModificationExceptions</code>.
 * </p>
 * @author Mikael Wikblom
 * @since Sitevision 2.6.1_10
 */
declare namespace subscriberUtil {
  export { getSubscribers, addSubscriber, removeSubscriber, isSubscriber };
}

export default subscriberUtil;
