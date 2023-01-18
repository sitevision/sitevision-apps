/**
 * Mail to be sent.
 *
 * <p>
 *    An instance of the Sitevision class implementing this interface can be obtained via {@link senselogic.sitevision.api.mail.MailBuilder#build()}.
 *    See {@link senselogic.sitevision.api.mail.MailBuilder} for how to obtain an instance of the <code>MailBuilder</code> interface.
 * </p>
 * @author Magnus Lövgren
 * @since Sitevision 3.6
 * @see senselogic.sitevision.api.mail.MailBuilder
 */
type Mail = {
  /**
   * Sends this mail synchronously.
   * @return <code>true</code> if no error was reported from the Sitevision mail service, <code>false</code> otherwise. <strong><em>Important node!</em></strong> A <code>true</code> value implies that the mail is sent as far as the Sitevision mail service can tell, but it doesn't guarantee that the actual mail server (whose configuration is specified on the Sitevision server node) has done so. The mail might be queued, quarantined or silently ignored by the mail server.
   */
  send(): boolean;

  /**
   * Sends this mail asynchronously.
   *
   * No information is returned to as if the mail was really sent as far as the actual mail server (whose configuration is specified on the
   * Sitevision server node). The mail might be queued, quarantined or silently ignored by the mail server.
   * @since Sitevision 2022.05.1
   */
  sendAsync(): void;
};

export = Mail;
