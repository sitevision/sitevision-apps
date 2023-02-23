import type { String } from "../../types/java/lang/String";
import type { Mail } from "../../types/senselogic/sitevision/api/mail/Mail";
import type { Builder } from "../../types/senselogic/sitevision/api/base/Builder";

/**
 * Builder to create a Mail instances that can be sent.
 *
 *  <p>
 *     An instance of the Sitevision class implementing this interface can be obtained via
 *     {@link senselogic.sitevision.api.mail.MailUtil#getMailBuilder()}.
 *     See {@link senselogic.sitevision.api.mail.MailUtil} for how to obtain an instance of the <code>MailUtil</code> interface.
 *  </p>
 *
 *  <p>
 *     MailBuilder has some <strong>mandatory attributes</strong>:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>subject</em> - The mail subject. Must be non-null.
 *     </li>
 *     <li>
 *        <em>message</em> - The mail message. Can be a text message (text/plain), a html message (text/html), or both. Must be non-null.
 *     </li>
 *     <li>
 *        <em>recipients</em> - The mail recipient (TO). At least one recipient must be added.
 *     </li>
 *  </ul>
 *  <p>
 *     MailBuilder also has some <strong>optional attributes</strong>:
 *  </p>
 *  <ul>
 *     <li>
 *        <em>copyRecipients</em> - The carbon copy recipients (CC). Default is <code>null</code>.
 *     </li>
 *     <li>
 *        <em>blindCopyRecipients</em> - The blind carbon copy recipients (BCC). Default is <code>null</code>.
 *     </li>
 *     <li>
 *        <em>fromAddress</em> - The from address. Default is the address of the site responsible and the
 *        address of the server responsible as fallback.
 *     </li>
 *     <li>
 *        <em>replyTos</em> - The reply-to addresses. Default is <code>null</code>.
 *     </li>
 *  </ul>
 *
 *  <p>
 *     <em>Note that there are three types of recipients (TO, CC, BCC). This builder will not detect or automatically handle duplicates
 *     cross types. It is up to the mail builder user to ensure addresses aren't added as different types of recipients.</em>
 *  </p>
 *
 *  <p>
 *     Using the MailBuilder is pretty straightforward, if you remember that it is <strong>stateful</strong>. Conceptually you
 *     would typically use it like this:
 *  </p>
 *  <ol>
 *    <li>Get the MailBuilder</li>
 *    <li>Set the subject</li>
 *    <li>Set the text message</li>
 *    <li>Add a recipient</li>
 *    <li>Possibly add another recipient</li>
 *    <li>Possibly set the from address</li>
 *    <li>Possibly add a reply-to address</li>
 *    <li>Possibly add another reply-to address</li>
 *    <li>Do build (+ send)</li>
 *  </ol>
 *  <p>
 *     When you have built a <code>Mail</code> instance, you can re-use the MailBuilder to build more instances. Something like:
 *  </p>
 *  <ol>
 *    <li>Set a new subject</li>
 *    <li>Set a new text message</li>
 *    <li>Clear recipients</li>
 *    <li>Add a new recipient</li>
 *    <li>Do build (+ send)</li>
 *  </ol>
 *
 *  <p>
 *     <strong>Example of how this strategy could be implemented in Velocity:</strong><br>
 *     (send one "personalized" mail to Magnus and one to Mikael)
 *  </p>
 *  <pre><code>
 *    <em>## Get the mail util and the mail builder</em>
 *    #set ($mailUtil = $sitevisionUtils.mailUtil)
 *    #set ($mailBuilder = $mailUtil.mailBuilder)
 *
 *    <em>## Create a mail</em>
 *    #set ($mail = $mailBuilder.setSubject('Hello buddy'
 *                             ).setTextMessage('How are you Magnus?'
 *                             ).addRecipient('magnus.lovgren@sitevision.se'
 *                             ).build())
 *    <em>## Send mail</em>
 *    #if ($mail.send())
 *       &lt;p&gt;Mail to Magnus successfully sent!&lt;/p&gt;
 *    #else
 *       &lt;p&gt;Mail to Magnus could &lt;strong&gt;not&lt;/strong&gt; be sent!&lt;/p&gt;
 *    #end
 *
 *    <em>## Create another mail</em>
 *    #set ($mail = $mailBuilder.setTextMessage('How are you Mikael?'
 *                             ).clearRecipients().addRecipient('mikael.wikblom@sitevision.se'
 *                             ).build())
 *    <em>## Send mail</em>
 *    #if ($mail.send())
 *       &lt;p&gt;Mail to Mikael successfully sent!&lt;/p&gt;
 *    #else
 *       &lt;p&gt;Mail to Mikael could &lt;strong&gt;not&lt;/strong&gt; be sent!&lt;/p&gt;
 *    #end
 *  </code></pre>
 *  <p>
 *     <strong>Tip!</strong> The {@link senselogic.sitevision.api.base.Builder Builder interface documentation} contains
 *     more information about Builders and how to work with them!
 *  </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 */
export interface MailBuilder extends Builder {
  /**
   * Sets the from address.
   * @param aFromAddress the from address. A whitespace-only address will be ignored, default (null) will be set instead.
   * @return this builder
   */
  setFrom(aFromAddress: String | string): MailBuilder;

  /**
   * Adds a reply-to address.
   * @param aReplyToAddress a reply-to address. A null or whitespace-only address will be ignored.
   * @return this builder
   */
  addReplyTo(aReplyToAddress: String | string): MailBuilder;

  /**
   * Removes all previously added reply-to addresses.
   * @return this builder
   */
  clearReplyTos(): MailBuilder;

  /**
   * Sets the subject.
   * @param aSubject a subject
   * @return this builder
   */
  setSubject(aSubject: String | string): MailBuilder;

  /**
   * Sets the text message.
   * @param aTextMessage a text message
   * @return this builder
   */
  setTextMessage(aTextMessage: String | string): MailBuilder;

  /**
   * Sets the html message.
   * @param aHtmlMessage a html message
   * @return this builder
   * @since Sitevision 4.3
   */
  setHtmlMessage(aHtmlMessage: String | string): MailBuilder;

  /**
   * Adds a recipient address (TO).
   * @param aRecipientAddress a recipient address. A null or whitespace-only address will be ignored.
   * @return this builder
   */
  addRecipient(aRecipientAddress: String | string): MailBuilder;

  /**
   * Removes all previously added recipient addresses (TO).
   * @return this builder
   */
  clearRecipients(): MailBuilder;

  /**
   * Convenience method for removing all addresses for all recipient types (TO/CC/BCC).
   * @return this builder
   * @since Sitevision 3.6.3
   * @see #clearRecipients()
   * @see #clearCopyRecipients()
   * @see #clearBlindCopyRecipients()
   */
  clearAllRecipients(): MailBuilder;

  /**
   * Adds a carbon copy recipient address (CC).
   * @param aCopyRecipientAddress a carbon copy recipient address. A null or whitespace-only address will be ignored.
   * @return this builder
   * @since Sitevision 3.6.3
   */
  addCopyRecipient(aCopyRecipientAddress: String | string): MailBuilder;

  /**
   * Removes all previously added carbon copy recipient addresses (CC).
   * @return this builder
   * @since Sitevision 3.6.3
   */
  clearCopyRecipients(): MailBuilder;

  /**
   * Adds a blind carbon copy recipient address (BCC).
   * @param aBlindCopyRecipientAddress a blind carbon copy recipient address. A null or whitespace-only address will be ignored.
   * @return this builder
   * @since Sitevision 3.6.3
   */
  addBlindCopyRecipient(
    aBlindCopyRecipientAddress: String | string
  ): MailBuilder;

  /**
   * Removes all previously added blind carbon copy recipient addresses (BCC).
   * @return this builder
   * @since Sitevision 3.6.3
   */
  clearBlindCopyRecipients(): MailBuilder;

  /**
   * Creates a Mail instance using current state of this builder.
   * @return a mail that can be sent
   * @throws IllegalStateException will be thrown if subject is null, if there are no recipients or&#xA; if a recipient address is invalid, if the from address, a copy address, blind copy address or reply-to address is invalid.
   */
  build(): Mail;
}

declare namespace MailBuilder {}

declare var mailBuilder: MailBuilder;

export default mailBuilder;
